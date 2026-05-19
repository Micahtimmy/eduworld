-- ============================================================
-- EduWorld — Initial Schema
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor → New query)
-- ============================================================

-- ── Extensions ──────────────────────────────────────────────
create extension if not exists "uuid-ossp";

-- ── Organisations ────────────────────────────────────────────
create table if not exists organizations (
  id          uuid primary key default uuid_generate_v4(),
  name        text not null,
  type        text not null default 'school', -- school | enterprise | government
  plan        text not null default 'free',   -- free | pro | enterprise
  country     text,
  timezone    text default 'UTC',
  settings    jsonb default '{}',
  is_active   boolean default true,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);
alter table organizations enable row level security;
create policy "Admins manage their org" on organizations
  using (id in (
    select organization_id from profiles where id = auth.uid() and role = 'admin'
  ));

-- ── Profiles (extends auth.users) ────────────────────────────
create table if not exists profiles (
  id                    uuid primary key references auth.users(id) on delete cascade,
  organization_id       uuid references organizations(id) on delete set null,
  role                  text not null default 'explorer',
  full_name             text,
  avatar_url            text,
  onboarding_completed  boolean default false,
  preferences           jsonb default '{}',
  created_at            timestamptz default now(),
  updated_at            timestamptz default now()
);
alter table profiles enable row level security;
create policy "Users read own profile"   on profiles for select using (auth.uid() = id);
create policy "Users update own profile" on profiles for update using (auth.uid() = id);
create policy "Admins read org profiles" on profiles for select
  using (organization_id in (
    select organization_id from profiles where id = auth.uid() and role = 'admin'
  ));

-- Trigger: auto-create profile on new auth.user
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data->>'role', 'explorer')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;
create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ── Students ─────────────────────────────────────────────────
create table if not exists students (
  id                uuid primary key default uuid_generate_v4(),
  profile_id        uuid references profiles(id) on delete cascade,
  organization_id   uuid references organizations(id) on delete cascade,
  student_number    text,
  grade_level       text,
  enrollment_date   date default current_date,
  gamification_data jsonb default '{"xp":0,"level":1,"streak":0,"badges":[]}',
  created_at        timestamptz default now()
);
alter table students enable row level security;
create policy "Students read own record" on students for select using (
  profile_id = auth.uid()
);
create policy "Admins read org students" on students for select using (
  organization_id in (
    select organization_id from profiles where id = auth.uid() and role = 'admin'
  )
);
create policy "Teachers read classroom students" on students for select using (
  id in (
    select student_id from classroom_enrollments ce
    join classrooms c on c.id = ce.classroom_id
    where c.teacher_id in (select id from teachers where profile_id = auth.uid())
  )
);

-- ── Teachers ─────────────────────────────────────────────────
create table if not exists teachers (
  id              uuid primary key default uuid_generate_v4(),
  profile_id      uuid references profiles(id) on delete cascade,
  organization_id uuid references organizations(id) on delete cascade,
  subjects        text[] default '{}',
  qualifications  text[] default '{}',
  created_at      timestamptz default now()
);
alter table teachers enable row level security;
create policy "Teachers read own record" on teachers for select using (profile_id = auth.uid());
create policy "Admins read org teachers" on teachers for select using (
  organization_id in (
    select organization_id from profiles where id = auth.uid() and role = 'admin'
  )
);

-- ── Parent-child links ────────────────────────────────────────
create table if not exists parent_children (
  parent_id    uuid references profiles(id) on delete cascade,
  student_id   uuid references students(id) on delete cascade,
  relationship text default 'parent',
  created_at   timestamptz default now(),
  primary key (parent_id, student_id)
);
alter table parent_children enable row level security;
create policy "Parents read own links" on parent_children for select using (parent_id = auth.uid());

-- ── Classrooms ───────────────────────────────────────────────
create table if not exists classrooms (
  id              uuid primary key default uuid_generate_v4(),
  organization_id uuid references organizations(id) on delete cascade,
  teacher_id      uuid references teachers(id) on delete set null,
  name            text not null,
  grade_level     text,
  subject         text,
  academic_year   text,
  created_at      timestamptz default now()
);
alter table classrooms enable row level security;
create policy "Teachers read own classrooms" on classrooms for select using (
  teacher_id in (select id from teachers where profile_id = auth.uid())
);
create policy "Admins read org classrooms" on classrooms for select using (
  organization_id in (
    select organization_id from profiles where id = auth.uid() and role = 'admin'
  )
);

-- ── Classroom enrollments ────────────────────────────────────
create table if not exists classroom_enrollments (
  classroom_id uuid references classrooms(id) on delete cascade,
  student_id   uuid references students(id) on delete cascade,
  enrolled_at  timestamptz default now(),
  primary key (classroom_id, student_id)
);
alter table classroom_enrollments enable row level security;
create policy "Students read own enrollments" on classroom_enrollments for select using (
  student_id in (select id from students where profile_id = auth.uid())
);

-- ── Subjects ─────────────────────────────────────────────────
create table if not exists subjects (
  id                  uuid primary key default uuid_generate_v4(),
  organization_id     uuid references organizations(id) on delete cascade,
  name                text not null,
  code                text,
  grade_level         text,
  curriculum_standard text,
  description         text,
  created_at          timestamptz default now()
);
alter table subjects enable row level security;
create policy "Authenticated users read subjects" on subjects for select using (auth.uid() is not null);

-- ── Lessons ──────────────────────────────────────────────────
create table if not exists lessons (
  id               uuid primary key default uuid_generate_v4(),
  subject_id       uuid references subjects(id) on delete cascade,
  title            text not null,
  content          jsonb default '{}',
  ai_generated     boolean default false,
  difficulty_level text default 'medium',
  duration_minutes int default 30,
  tags             text[] default '{}',
  status           text default 'published',
  created_at       timestamptz default now()
);
alter table lessons enable row level security;
create policy "Authenticated users read lessons" on lessons for select using (auth.uid() is not null);

-- ── Assignments ──────────────────────────────────────────────
create table if not exists assignments (
  id           uuid primary key default uuid_generate_v4(),
  classroom_id uuid references classrooms(id) on delete cascade,
  teacher_id   uuid references teachers(id) on delete set null,
  title        text not null,
  description  text,
  due_date     timestamptz,
  type         text default 'homework',
  max_score    int default 100,
  rubric       jsonb default '{}',
  created_at   timestamptz default now()
);
alter table assignments enable row level security;
create policy "Teachers read own assignments" on assignments for select using (
  teacher_id in (select id from teachers where profile_id = auth.uid())
);
create policy "Students read assigned assignments" on assignments for select using (
  classroom_id in (
    select classroom_id from classroom_enrollments ce
    join students s on s.id = ce.student_id
    where s.profile_id = auth.uid()
  )
);

-- ── Submissions ──────────────────────────────────────────────
create table if not exists submissions (
  id               uuid primary key default uuid_generate_v4(),
  assignment_id    uuid references assignments(id) on delete cascade,
  student_id       uuid references students(id) on delete cascade,
  content          text,
  file_urls        text[] default '{}',
  submitted_at     timestamptz default now(),
  score            int,
  ai_grade_draft   jsonb,
  teacher_feedback text,
  status           text default 'submitted'
);
alter table submissions enable row level security;
create policy "Students read own submissions" on submissions for select using (
  student_id in (select id from students where profile_id = auth.uid())
);
create policy "Teachers read classroom submissions" on submissions for select using (
  assignment_id in (
    select id from assignments where teacher_id in (select id from teachers where profile_id = auth.uid())
  )
);

-- ── Quizzes ──────────────────────────────────────────────────
create table if not exists quizzes (
  id                 uuid primary key default uuid_generate_v4(),
  lesson_id          uuid references lessons(id) on delete cascade,
  created_by         uuid references profiles(id) on delete set null,
  title              text not null,
  questions          jsonb default '[]',
  ai_generated       boolean default false,
  time_limit_minutes int,
  created_at         timestamptz default now()
);
alter table quizzes enable row level security;
create policy "Authenticated users read quizzes" on quizzes for select using (auth.uid() is not null);

-- ── Quiz attempts ────────────────────────────────────────────
create table if not exists quiz_attempts (
  id           uuid primary key default uuid_generate_v4(),
  quiz_id      uuid references quizzes(id) on delete cascade,
  student_id   uuid references students(id) on delete cascade,
  answers      jsonb default '{}',
  score        int,
  started_at   timestamptz default now(),
  completed_at timestamptz,
  ai_analysis  jsonb
);
alter table quiz_attempts enable row level security;
create policy "Students read own attempts" on quiz_attempts for select using (
  student_id in (select id from students where profile_id = auth.uid())
);

-- ── Attendance ───────────────────────────────────────────────
create table if not exists attendance (
  id           uuid primary key default uuid_generate_v4(),
  classroom_id uuid references classrooms(id) on delete cascade,
  student_id   uuid references students(id) on delete cascade,
  date         date not null,
  status       text default 'present',
  notes        text,
  created_at   timestamptz default now()
);
alter table attendance enable row level security;
create policy "Students read own attendance" on attendance for select using (
  student_id in (select id from students where profile_id = auth.uid())
);
create policy "Teachers manage classroom attendance" on attendance using (
  classroom_id in (
    select id from classrooms where teacher_id in (select id from teachers where profile_id = auth.uid())
  )
);

-- ── AI tutor conversations ───────────────────────────────────
create table if not exists tutor_conversations (
  id              uuid primary key default uuid_generate_v4(),
  student_id      uuid references students(id) on delete cascade,
  subject_id      uuid references subjects(id) on delete set null,
  title           text,
  messages        jsonb default '[]',
  session_summary text,
  topics_covered  text[] default '{}',
  created_at      timestamptz default now()
);
alter table tutor_conversations enable row level security;
create policy "Students read own conversations" on tutor_conversations for select using (
  student_id in (select id from students where profile_id = auth.uid())
);

-- ── Learning progress ────────────────────────────────────────
create table if not exists learning_progress (
  id                    uuid primary key default uuid_generate_v4(),
  student_id            uuid references students(id) on delete cascade,
  subject_id            uuid references subjects(id) on delete cascade,
  lesson_id             uuid references lessons(id) on delete cascade,
  completion_percentage int default 0,
  time_spent_seconds    int default 0,
  comprehension_score   int,
  adaptive_data         jsonb default '{}',
  last_accessed         timestamptz default now()
);
alter table learning_progress enable row level security;
create policy "Students read own progress" on learning_progress for select using (
  student_id in (select id from students where profile_id = auth.uid())
);
create policy "Teachers read student progress" on learning_progress for select using (
  student_id in (
    select s.id from students s
    join classroom_enrollments ce on ce.student_id = s.id
    join classrooms c on c.id = ce.classroom_id
    where c.teacher_id in (select id from teachers where profile_id = auth.uid())
  )
);

-- ── AI recommendations ───────────────────────────────────────
create table if not exists ai_recommendations (
  id         uuid primary key default uuid_generate_v4(),
  student_id uuid references students(id) on delete cascade,
  type       text default 'lesson',
  content    jsonb default '{}',
  reason     text,
  priority   int default 0,
  dismissed  boolean default false,
  acted_on   boolean default false,
  created_at timestamptz default now()
);
alter table ai_recommendations enable row level security;
create policy "Students read own recommendations" on ai_recommendations for select using (
  student_id in (select id from students where profile_id = auth.uid())
);

-- ── Notifications ────────────────────────────────────────────
create table if not exists notifications (
  id           uuid primary key default uuid_generate_v4(),
  recipient_id uuid references profiles(id) on delete cascade,
  type         text default 'info',
  title        text not null,
  body         text,
  data         jsonb default '{}',
  read         boolean default false,
  created_at   timestamptz default now()
);
alter table notifications enable row level security;
create policy "Users read own notifications" on notifications for select using (recipient_id = auth.uid());
create policy "Users update own notifications" on notifications for update using (recipient_id = auth.uid());

-- ── Fee structures ───────────────────────────────────────────
create table if not exists fee_structures (
  id              uuid primary key default uuid_generate_v4(),
  organization_id uuid references organizations(id) on delete cascade,
  name            text not null,
  amount          numeric(10,2) not null,
  currency        text default 'USD',
  frequency       text default 'monthly',
  created_at      timestamptz default now()
);
alter table fee_structures enable row level security;
create policy "Admins manage fee structures" on fee_structures using (
  organization_id in (
    select organization_id from profiles where id = auth.uid() and role = 'admin'
  )
);

-- ── Fee invoices ─────────────────────────────────────────────
create table if not exists fee_invoices (
  id                       uuid primary key default uuid_generate_v4(),
  organization_id          uuid references organizations(id) on delete cascade,
  student_id               uuid references students(id) on delete cascade,
  fee_structure_id         uuid references fee_structures(id) on delete set null,
  amount                   numeric(10,2) not null,
  status                   text default 'pending',
  due_date                 date,
  paid_at                  timestamptz,
  stripe_payment_intent_id text,
  created_at               timestamptz default now()
);
alter table fee_invoices enable row level security;
create policy "Parents read own child invoices" on fee_invoices for select using (
  student_id in (
    select student_id from parent_children where parent_id = auth.uid()
  )
);
create policy "Admins manage org invoices" on fee_invoices using (
  organization_id in (
    select organization_id from profiles where id = auth.uid() and role = 'admin'
  )
);

-- ── Districts (government) ───────────────────────────────────
create table if not exists districts (
  id             uuid primary key default uuid_generate_v4(),
  name           text not null,
  country        text,
  state_province text,
  created_at     timestamptz default now()
);
alter table districts enable row level security;
create policy "Government users read districts" on districts for select using (
  auth.uid() in (select id from profiles where role = 'government')
);

-- ── Organization → District mapping ─────────────────────────
create table if not exists organization_districts (
  organization_id uuid references organizations(id) on delete cascade,
  district_id     uuid references districts(id) on delete cascade,
  primary key (organization_id, district_id)
);
alter table organization_districts enable row level security;
create policy "Government users read org-district links" on organization_districts for select using (
  auth.uid() in (select id from profiles where role = 'government')
);
