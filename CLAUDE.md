# EduWorld — Claude Code Instructions

# EduWorld — CLAUDE.md
## Single Source of Truth for Claude Code

---

## WHAT THIS IS

EduWorld is an AI-native global learning infrastructure platform — the operating system for education. It serves eight user roles across three student tiers:

- **Explorer** — K-12 / Primary students (ages 5–12)
- **Achiever** — Secondary / High School students (ages 12–18)
- **Scholar** — University / Polytechnic / College students (ages 18+)
- **Teacher** — all educational levels
- **Parent / Guardian** — linked to Explorer and Achiever students
- **Admin** — school and institution administrators
- **Government** — ministry and district officials
- **Enterprise** — corporate learning managers

---

## PERMISSIONS

## STEP 0 — PERMISSIONS SETUP (Do This First, Before Everything Else)

Before reading designs or touching any code, create the Claude Code permissions file to prevent permission prompts from interrupting the build.

Create the file `.claude/settings.json` at the project root:

```bash
mkdir -p .claude
```

```json
{
  "permissions": {
    "allow": [
      "Bash(*)",
      "Read(*)",
      "Write(*)",
      "Edit(*)",
      "MultiEdit(*)",
      "Glob(*)",
      "Grep(*)",
      "LS(*)"
    ],
    "deny": []
  }
}
```

This grants full tool access for this project. You will no longer stop and ask for permission to run commands, read files, write files, or make network calls within this project. Proceed autonomously through every step below without pausing to request confirmation unless you encounter a genuine error that requires a decision.

**Rule for the rest of this session:** Do not ask "should I proceed?" Do not ask "is it okay to run this?" Do not ask "do you want me to continue?" Just execute. If you hit a real blocker (missing API key, broken dependency), state the problem briefly and suggest the fix — then move on to the next task while waiting.

---

## DESIGNS

All designs live in the Stitch MCP connection. Before building or editing any screen, read the design from Stitch. Never build from memory. Never guess what a screen looks like. If something is unclear, read Stitch again.

When you start a new session, read Stitch first before doing anything else.

---

## TECH STACK

```
Framework:        Next.js 15 App Router
Language:         TypeScript — strict mode, no any types
Styling:          Tailwind CSS v4 — all values from Stitch design tokens
Components:       Radix UI primitives + custom components matching Stitch
State (server):   TanStack Query v5
State (client):   Zustand
Forms:            React Hook Form + Zod
Animation:        Framer Motion — transitions only, match Stitch designs
Database:         Supabase (PostgreSQL)
Auth:             Supabase Auth
Realtime:         Supabase Realtime
Storage:          Supabase Storage
AI:               Anthropic Claude API (claude-sonnet-4-20250514)
Charts:           Recharts — styled to match Stitch
Toasts:           Sonner
Dark mode:        next-themes
Email:            Resend
Payments:         Stripe
File uploads:     Uploadthing
Error tracking:   Sentry
Analytics:        PostHog
```

---

## PROJECT STRUCTURE

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   ├── signup/page.tsx
│   │   ├── onboarding/
│   │   │   ├── explorer/page.tsx
│   │   │   ├── achiever/page.tsx
│   │   │   ├── scholar/page.tsx
│   │   │   ├── teacher/page.tsx
│   │   │   ├── parent/page.tsx
│   │   │   └── admin/page.tsx
│   │   └── layout.tsx
│   ├── (explorer)/
│   │   ├── layout.tsx
│   │   └── [screens read from Stitch]
│   ├── (achiever)/
│   │   ├── layout.tsx
│   │   └── [screens read from Stitch]
│   ├── (scholar)/
│   │   ├── layout.tsx
│   │   └── [screens read from Stitch]
│   ├── (teacher)/
│   │   ├── layout.tsx
│   │   └── [screens read from Stitch]
│   ├── (parent)/
│   │   ├── layout.tsx
│   │   └── [screens read from Stitch]
│   ├── (admin)/
│   │   ├── layout.tsx
│   │   └── [screens read from Stitch]
│   ├── (government)/
│   │   ├── layout.tsx
│   │   └── [screens read from Stitch]
│   ├── (enterprise)/
│   │   ├── layout.tsx
│   │   └── [screens read from Stitch]
│   ├── api/
│   │   ├── ai/
│   │   │   ├── tutor/route.ts
│   │   │   ├── generate-lesson/route.ts
│   │   │   ├── generate-quiz/route.ts
│   │   │   ├── grade/route.ts
│   │   │   └── recommendations/route.ts
│   │   └── webhooks/
│   │       └── stripe/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── shared/
│   │   ├── navigation/
│   │   ├── ai-tutor/
│   │   ├── charts/
│   │   └── gamification/
│   ├── explorer/
│   ├── achiever/
│   ├── scholar/
│   ├── teacher/
│   ├── parent/
│   ├── admin/
│   ├── government/
│   └── enterprise/
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── middleware.ts
│   ├── ai/
│   │   └── client.ts
│   ├── utils.ts
│   └── constants.ts
├── hooks/
├── stores/
├── types/
│   ├── database.types.ts
│   └── app.types.ts
└── middleware.ts
```

---

## BUILD PHASES

Work through these phases in order. Complete each phase fully before moving to the next.

---

### PHASE 0 — READ STITCH

Read every screen in the Stitch MCP before writing any code. Extract:
- Every color, font, spacing, radius, and shadow value
- Every component that appears across multiple screens
- Every screen name and which role it belongs to
- Every navigation structure (tabs, sidebar links, top bar actions)
- Every interactive element and where it logically leads

Do not skip this. Everything else depends on it.

---

### PHASE 1 — INSTALL DEPENDENCIES

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-git

npm install @supabase/supabase-js @supabase/ssr
npm install @anthropic-ai/sdk
npm install @tanstack/react-query
npm install zustand
npm install react-hook-form @hookform/resolvers zod
npm install framer-motion
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tabs @radix-ui/react-select @radix-ui/react-checkbox @radix-ui/react-switch @radix-ui/react-avatar @radix-ui/react-toast @radix-ui/react-tooltip @radix-ui/react-popover @radix-ui/react-scroll-area @radix-ui/react-separator @radix-ui/react-progress @radix-ui/react-slider
npm install class-variance-authority clsx tailwind-merge lucide-react
npm install recharts
npm install date-fns
npm install sonner
npm install next-themes
npm install @uploadthing/react uploadthing
npm install resend
npm install stripe @stripe/stripe-js
npm install @sentry/nextjs
npm install posthog-js
npm install --save-dev @types/node
```

---

### PHASE 2 — ENVIRONMENT VARIABLES

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ANTHROPIC_API_KEY=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
RESEND_API_KEY=
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_POSTHOG_KEY=
SENTRY_DSN=
```

Create `.env.example` with the same keys, empty values.

---

### PHASE 3 — DESIGN TOKENS

Using values extracted from Stitch in Phase 0:

Build `tailwind.config.ts` with every color, font, spacing, radius, and shadow mapped exactly from the design.

Build `src/app/globals.css` with:
- CSS custom properties for all tokens
- Light mode and dark mode variable sets
- Google Fonts imports for the fonts used in the design
- Base resets

---

### PHASE 4 — SUPABASE + AUTH

Build `src/lib/supabase/client.ts` — browser Supabase client
Build `src/lib/supabase/server.ts` — server Supabase client using cookies
Build `src/middleware.ts` — route protection with role-based redirects

Role to route mapping:
```
explorer           → /explorer/dashboard
achiever           → /achiever/dashboard
scholar            → /scholar/dashboard
teacher            → /teacher/dashboard
parent             → /parent/dashboard
admin              → /admin/dashboard
government         → /government/dashboard
enterprise_manager → /enterprise/dashboard
```

Rules:
- Unauthenticated users trying to access protected routes → redirect to /login
- Authenticated users with incomplete onboarding → redirect to /onboarding/[role]
- Authenticated users on auth pages → redirect to their dashboard
- Users trying to access another role's routes → redirect to their own dashboard

---

### PHASE 5 — DATABASE SCHEMA

Create a Supabase migration file at `supabase/migrations/001_initial_schema.sql`.

Build these tables with RLS enabled on all of them:

```sql
-- Organisations
organizations (id, name, type, plan, country, timezone, settings, is_active, created_at, updated_at)

-- User profiles (extends Supabase auth.users)
profiles (id, organization_id, role, full_name, avatar_url, onboarding_completed, preferences, created_at, updated_at)

-- Students
students (id, profile_id, organization_id, student_number, grade_level, enrollment_date, gamification_data, created_at)

-- Teachers
teachers (id, profile_id, organization_id, subjects, qualifications, created_at)

-- Parent-child links
parent_children (parent_id, student_id, relationship, created_at)

-- Classrooms
classrooms (id, organization_id, teacher_id, name, grade_level, subject, academic_year, created_at)

-- Classroom enrollments
classroom_enrollments (classroom_id, student_id, enrolled_at)

-- Subjects
subjects (id, organization_id, name, code, grade_level, curriculum_standard, description, created_at)

-- Lessons
lessons (id, subject_id, title, content, ai_generated, difficulty_level, duration_minutes, tags, status, created_at)

-- Assignments
assignments (id, classroom_id, teacher_id, title, description, due_date, type, max_score, rubric, created_at)

-- Submissions
submissions (id, assignment_id, student_id, content, file_urls, submitted_at, score, ai_grade_draft, teacher_feedback, status)

-- Quizzes
quizzes (id, lesson_id, created_by, title, questions, ai_generated, time_limit_minutes, created_at)

-- Quiz attempts
quiz_attempts (id, quiz_id, student_id, answers, score, started_at, completed_at, ai_analysis)

-- Attendance
attendance (id, classroom_id, student_id, date, status, notes, created_at)

-- AI tutor conversations
tutor_conversations (id, student_id, subject_id, title, messages, session_summary, topics_covered, created_at)

-- Learning progress
learning_progress (id, student_id, subject_id, lesson_id, completion_percentage, time_spent_seconds, comprehension_score, adaptive_data, last_accessed)

-- AI recommendations
ai_recommendations (id, student_id, type, content, reason, priority, dismissed, acted_on, created_at)

-- Notifications
notifications (id, recipient_id, type, title, body, data, read, created_at)

-- Fee structures
fee_structures (id, organization_id, name, amount, currency, frequency, created_at)

-- Fee invoices
fee_invoices (id, organization_id, student_id, fee_structure_id, amount, status, due_date, paid_at, stripe_payment_intent_id)

-- Districts (government)
districts (id, name, country, state_province, created_at)

-- School to district
organization_districts (organization_id, district_id)
```

RLS policy pattern for every table:
- Students see only their own data
- Teachers see data for their classrooms only
- Parents see data for their linked children only
- Admins see all data within their organisation
- Government sees aggregated data for their districts
- Enterprise sees data within their organisation

---

### PHASE 6 — AI CLIENT AND ROUTES

Build `src/lib/ai/client.ts`:
```typescript
import Anthropic from '@anthropic-ai/sdk'
export const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
export const AI_MODEL = 'claude-sonnet-4-20250514'
```

Build these API routes:

`/api/ai/tutor` — streaming chat. Auth check first. Build system prompt from student context and subject context. Stream response using anthropic.messages.stream. Never call Anthropic from the client side.

`/api/ai/generate-lesson` — generates structured lesson content as JSON using tool use. Input: topic, grade level, duration, objectives. Output: introduction, sections, key terms, examples, summary, check questions.

`/api/ai/generate-quiz` — generates quiz questions as JSON using tool use. Input: topic, grade level, number of questions, difficulty, weak topics to target. Output: array of questions with options, correct answer, explanation, difficulty.

`/api/ai/grade` — AI grading assistant. Input: assignment brief, rubric, student submission. Output: suggested score per criterion, feedback draft, strengths, improvements. Always include disclaimer that teacher review is required.

`/api/ai/recommendations` — personalised next actions. Input: student's recent performance data. Output: array of recommended lessons, quizzes, or revision sessions with reasons.

All routes must:
- Verify Supabase auth before processing
- Validate request body with Zod
- Return proper error responses with status codes
- Have a 30 second timeout

---

### PHASE 7 — SHARED COMPONENTS

Build these before any screens. They are used everywhere.

Read each component from Stitch before building it. Match exactly.

**Navigation:**
- `BottomTabBar` — mobile, accepts role prop, renders correct tabs per role
- `Sidebar` — desktop, accepts role prop, renders correct links per role
- `TopBar` — desktop top bar with search, notifications, avatar dropdown
- `MobileTopBar` — simplified mobile top bar
- `DashboardLayout` — wraps all authenticated screens, renders correct nav for role and breakpoint

**UI Primitives** (styled from Radix to match Stitch exactly):
- Button — all variants (primary, secondary, ghost, danger, AI action) and sizes
- Card — all variants (default, elevated, interactive, AI card, metric card)
- Input, Textarea, Select — all states (empty, focused, filled, error, success)
- Badge, Chip, Tag
- Avatar with fallback
- Modal / Dialog — desktop centered, mobile bottom sheet
- Drawer — right side panel
- Toast — via Sonner
- Skeleton — matches shape of content it replaces
- Progress bar — animated fill
- Progress ring — circular SVG

**Gamification:**
- XPBar — animated fill with level label
- StreakBadge — flame icon, day count
- LevelBadge — circular gradient, level number
- AchievementBadge — colored, unlock animation

**AI:**
- TutorChat — full streaming chat interface
- AIMessageBubble — left aligned, emerald accent
- UserMessageBubble — right aligned, blue
- TypingIndicator — animated dots
- SessionSummaryCard — topics, time, XP earned
- QuickChips — horizontal scroll of action chips

**Charts** (Recharts, styled to Stitch):
- LineChart
- BarChart
- RadarChart
- DonutChart
- AttendanceHeatmap
- StatCard — large number, label, trend indicator

---

### PHASE 8 — BUILD ALL SCREENS

Build every screen found in Stitch. Work role by role.

For every screen:
1. Read the Stitch design
2. Build to match it exactly — no visual decisions
3. Connect all navigation elements to their routes
4. Connect all buttons to their destinations or actions
5. Add skeleton loading states for any data that fetches
6. Add empty states for any lists or tables
7. Add error states for any actions that can fail
8. Make it fully responsive (mobile / tablet / desktop)

Build order:
1. Auth screens — welcome, login, signup, forgot password
2. Onboarding flows — one per role
3. Explorer screens — all of them from Stitch
4. Achiever screens — all of them from Stitch
5. Scholar screens — all of them from Stitch
6. Teacher screens — all of them from Stitch
7. Parent screens — all of them from Stitch
8. Admin screens — all of them from Stitch
9. Government screens — all of them from Stitch
10. Enterprise screens — all of them from Stitch

Use realistic placeholder data on every screen. No blank cards.

---

### PHASE 9 — WIRE ALL SCREENS

After all screens are built, do a full connection pass across the entire project.

- Every bottom tab navigates to its correct route
- Every sidebar link navigates to its correct route
- Every primary button navigates to its correct destination
- Every back button returns to the correct previous screen
- Every clickable card navigates to its detail screen
- Every form submission leads to a success state or error state
- Every modal has a working open and close trigger
- Every empty state CTA leads to the correct action
- Active nav states update correctly on route change

Use Next.js `Link` for all page navigation. Use `useRouter` for programmatic navigation after actions.

---

### PHASE 10 — RESPONSIVE PASS

Go through every screen at three breakpoints:

**Mobile 375px:**
- Sidebar hidden, bottom tab bar visible
- Single column layouts
- Tables become card lists
- Modals become bottom sheets
- All touch targets minimum 44×44px

**Tablet 768px:**
- Sidebar collapses to icon rail
- Two column layouts where applicable
- Charts two per row

**Desktop 1280px:**
- Full sidebar
- Full layout as designed
- Hover states working

---

### PHASE 11 — DARK MODE

Apply dark mode to all screens using next-themes. Achiever defaults to dark. All other roles default to light. Every color has a dark variant in the Tailwind config from Phase 3. Apply `dark:` prefixes throughout components. Add theme toggle to top bar and settings.

---

### PHASE 12 — VERIFY

Before finishing:
- `npm run dev` starts without errors
- Every route renders without crashing
- Each role's dashboard loads correctly after sign in
- AI tutor streams responses
- All forms validate and show error states
- Skeleton loaders appear on data-fetching screens
- Empty states appear when there is no data
- Dark mode toggles correctly
- Fully navigable on mobile, tablet, and desktop

Report any screen that could not be built from Stitch due to missing or unclear design information.

---

## CODING RULES

- No `any` types — ever
- All Supabase queries use the typed database client
- All AI calls go through `/api/ai/` routes — never from client components
- All forms use React Hook Form with Zod validation
- All dates use date-fns — never raw Date formatting
- All currency uses Intl.NumberFormat
- Check for existing components before creating new ones
- One component per file
- Consistent naming: PascalCase components, kebab-case files, camelCase functions

---

## WHEN IN DOUBT

1. Read Stitch
2. Check if a component already exists before building a new one
3. Follow patterns already established in the codebase
4. Build and note what you did — do not wait for approval

---
2
## Permissions
You have full autonomy to build this project. You are permitted to:
- Create, edit, and delete any files in this project
- Install any npm packages required 
- Run any terminal commands needed to build and develop
- Make architectural and implementation decisions without asking
- Proceed through all build phases without stopping for confirmation

## Behaviour
- Do not ask for permission before creating files or running commands
- Do not stop to confirm before installing packages
- If you face a decision, choose the most logical option and continue
- Only pause if you hit a genuine blocker you cannot resolve on your own
- When in doubt, build and note what you did — do not wait for approval

## Project
This is EduWorld, an AI-native global learning platform.
Read the Stitch MCP for all designs before building anything.

## CRITICAL RULE — STITCH FIRST, ALWAYS
Before building any screen, open Stitch and find that exact screen.
If you cannot find it in Stitch, do not build it.
Never build from memory, assumption, or imagination.
Every screen in the codebase must be a direct reproduction of a screen in Stitch. No exceptions. 