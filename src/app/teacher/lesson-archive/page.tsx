'use client'
import Link from 'next/link'

const T = {
  bg: '#f9f9ff', surface: '#ffffff', primary: '#003f7a',
  ai: '#10B981', xp: '#F59E0B', textPrimary: '#191c20',
  textMuted: '#424750', border: '#c2c6d2', error: '#ba1a1a',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
}

const sidebarItems = [
  { icon: 'dashboard', label: 'Dashboard', href: '/teacher/dashboard' },
  { icon: 'school', label: 'My Classes', href: '/teacher/classes' },
  { icon: 'assignment', label: 'Assignments', href: '/teacher/assignments' },
  { icon: 'analytics', label: 'Analytics', href: '/teacher/student-insights' },
  { icon: 'people', label: 'Students', href: '/teacher/student-groups' },
  { icon: 'calendar_month', label: 'Calendar', href: '/teacher/calendar' },
  { icon: 'inbox', label: 'Inbox', href: '/teacher/inbox' },
]

const SESSIONS = [
  { title: 'Intro to Astrophysics', duration: '45:12', date: 'Jan 12, 2025 · Section B', tags: ['REVISION', 'VIDEO'], color: '#7c3aed' },
  { title: 'Literature & Society', duration: '58:04', date: 'Jan 10, 2025 · Section A', tags: ['CORE CONTENT'], color: T.ai },
  { title: 'Organic Chemistry Lab', duration: '32:50', date: 'Jan 08, 2025 · Lab 3', tags: ['MANDATORY'], color: T.error },
  { title: 'Quantum Mechanics III', duration: '51:30', date: 'Jan 05, 2025 · Section A', tags: ['REVISION'], color: T.primary },
]

const COLLECTIONS = [
  { title: 'Midterm Prep: Calculus I', desc: 'Lessons from Weeks 1 through 6', count: 8, members: 24 },
  { title: 'Advanced Genetics Lab', desc: 'PCR and Electrophoresis demos', count: 3, members: 12 },
]

const TAG_COLORS: Record<string, string> = {
  'REVISION': '#0891b2',
  'VIDEO': '#7c3aed',
  'CORE CONTENT': T.ai,
  'MANDATORY': T.error,
}

function Sidebar() {
  return (
    <aside style={{ width: 260, minHeight: '100vh', background: T.surface, borderRight: `1px solid ${T.border}`, display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0 }}>
      <div style={{ padding: '0 20px 24px', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: T.primary }}>EduWorld</div>
        <span style={{ display: 'inline-block', marginTop: 4, fontSize: 11, fontWeight: 600, color: T.primary, background: '#e8f0fe', borderRadius: 6, padding: '2px 8px' }}>Teacher</span>
      </div>
      <nav style={{ flex: 1, padding: '16px 12px' }}>
        {sidebarItems.map(item => (
          <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, marginBottom: 2, background: 'transparent', borderLeft: '3px solid transparent', color: T.textMuted, fontFamily: T.fontBody, fontSize: 14 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default function TeacherLessonArchivePage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <p style={{ fontSize: 12, color: T.textMuted }}>Lesson Plans / Archive & Recordings</p>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: '4px 0' }}>Curated Lesson Archive</h1>
            <p style={{ fontSize: 14, color: T.textMuted }}>Revisit, edit, and re-release past lessons to your classes.</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>filter_list</span>Filter Library
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 18px', background: T.primary, border: 'none', borderRadius: 10, fontSize: 13, color: '#fff', cursor: 'pointer', fontWeight: 600 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>cloud_upload</span>Upload Recording
            </button>
          </div>
        </div>

        {/* AI Featured */}
        <div style={{ background: T.ai + '10', border: `1px solid ${T.ai}30`, borderRadius: 16, padding: 24, marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <span style={{ fontSize: 16, color: T.ai }}>✦</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: T.ai }}>AI Recommendation</span>
            <span style={{ marginLeft: 'auto', fontSize: 11, fontWeight: 700, color: '#0891b2', background: '#e0f2fe', padding: '2px 10px', borderRadius: 20 }}>Recommended for Semester 2 Revision</span>
          </div>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <div style={{ width: 128, height: 80, background: T.primary + '20', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 32, color: T.primary }}>play_circle</span>
            </div>
            <div>
              <h3 style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 17, color: T.textPrimary, marginBottom: 6 }}>Mastering Quantum Mechanics III</h3>
              <p style={{ fontSize: 13, color: T.textMuted, marginBottom: 12 }}>98% student engagement rate · Probability Distribution segment highlighted</p>
              <div style={{ display: 'flex', gap: 8 }}>
                <button style={{ padding: '8px 16px', background: T.primary, color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Re-release to Class</button>
                <button style={{ padding: '8px 16px', background: T.surface, color: T.primary, border: `1px solid ${T.primary}`, borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Edit Snippet</button>
              </div>
            </div>
          </div>
        </div>

        {/* Library Health */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: '18px 22px', marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ fontWeight: 600, fontSize: 14, color: T.textPrimary }}>Library Health</span>
            <span style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 16, color: T.textPrimary }}>124 Lessons</span>
          </div>
          <div style={{ height: 8, background: T.border + '60', borderRadius: 4, overflow: 'hidden', marginBottom: 6 }}>
            <div style={{ height: '100%', width: '84%', background: T.xp, borderRadius: 4 }} />
          </div>
          <span style={{ fontSize: 12, color: T.textMuted }}>Storage Used (84%) — 42 GB / 50 GB</span>
        </div>

        {/* Sessions */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Recent Sessions</h2>
            <button style={{ fontSize: 13, color: T.primary, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>View all →</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {SESSIONS.map(s => (
              <div key={s.title} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 14px', background: T.bg, borderRadius: 12 }}>
                <div style={{ width: 80, height: 56, background: s.color + '20', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', flexShrink: 0 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 22, color: s.color }}>play_circle</span>
                  <span style={{ position: 'absolute', bottom: 3, right: 3, fontSize: 10, background: 'rgba(0,0,0,0.5)', color: '#fff', padding: '1px 5px', borderRadius: 4 }}>{s.duration}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>{s.title}</div>
                  <div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>{s.date}</div>
                  <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
                    {s.tags.map(tag => (
                      <span key={tag} style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 10, background: TAG_COLORS[tag] + '20', color: TAG_COLORS[tag] }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button style={{ padding: '7px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.primary, fontWeight: 600, cursor: 'pointer' }}>Re-use</button>
                  <button style={{ padding: '7px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.textMuted, cursor: 'pointer' }}>Edit</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Collections */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Revision Collections</h2>
            <button style={{ padding: '7px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.primary, fontWeight: 600, cursor: 'pointer' }}>+ New Collection</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {COLLECTIONS.map(c => (
              <div key={c.title} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 22 }}>
                <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 15, color: T.textPrimary, marginBottom: 6 }}>{c.title}</div>
                <div style={{ fontSize: 13, color: T.textMuted, marginBottom: 14 }}>{c.desc}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: T.textMuted }}>{c.count} lessons · {c.members} students</span>
                  <button style={{ padding: '7px 14px', background: T.primary, color: '#fff', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Deploy</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
