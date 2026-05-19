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
  { icon: 'analytics', label: 'Analytics', href: '/teacher/student-insights', active: true },
  { icon: 'people', label: 'Students', href: '/teacher/student-groups' },
  { icon: 'calendar_month', label: 'Calendar', href: '/teacher/calendar' },
  { icon: 'inbox', label: 'Inbox', href: '/teacher/inbox' },
]

const MASTERY = [
  { skill: 'Scientific Inquiry', pct: 88, color: T.ai },
  { skill: 'Algebraic Thinking', pct: 74, color: T.primary },
  { skill: 'Historical Analysis', pct: 65, color: T.xp },
  { skill: 'Written Communication', pct: 82, color: '#7c3aed' },
]

const PERF = [
  { term: 'Term 1', score: 60 },
  { term: 'Term 2', score: 68 },
  { term: 'Term 3', score: 76 },
  { term: 'Current', score: 82 },
]

const ATT_WEEKS = Array.from({ length: 20 }, (_, i) => ({
  week: `W${i + 1}`,
  days: [
    Math.random() > 0.1,
    Math.random() > 0.12,
    Math.random() > 0.08,
    Math.random() > 0.15,
    Math.random() > 0.1,
  ],
}))

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
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, marginBottom: 2, background: item.active ? '#f3f3f9' : 'transparent', borderLeft: item.active ? `3px solid ${T.primary}` : '3px solid transparent', color: item.active ? T.primary : T.textMuted, fontFamily: T.fontBody, fontWeight: item.active ? 600 : 400, fontSize: 14 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default function TeacherStudentInsightsPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 62, height: 62, borderRadius: '50%', background: T.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 800, color: T.primary }}>AT</div>
            <div>
              <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Alex Thompson</h1>
              <p style={{ fontSize: 13, color: T.textMuted, marginTop: 3 }}>Grade 10 · ID: 8942-AT · Homeroom: 10B (Ms. Davis)</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>message</span>Message Parents
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 16px', background: T.primary, border: 'none', borderRadius: 10, fontSize: 13, color: '#fff', cursor: 'pointer', fontWeight: 600 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span>Export Report
            </button>
          </div>
        </div>

        {/* Student selector */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24, overflowX: 'auto' }}>
          {['Alex Thompson', 'Mia Sharma', 'Jordan Lee', 'Emma Patel'].map((name, i) => (
            <button key={name} style={{ padding: '7px 16px', borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap', background: i === 0 ? T.primary : T.surface, color: i === 0 ? '#fff' : T.textMuted, border: i === 0 ? 'none' : `1px solid ${T.border}` }}>{name}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginBottom: 24 }}>
          {/* AI Projection */}
          <div style={{ background: T.ai + '10', border: `1px solid ${T.ai}30`, borderRadius: 16, padding: 24, textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 14 }}>
              <span style={{ fontSize: 18, color: T.ai }}>✦</span>
              <span style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary }}>AI Projection</span>
            </div>
            <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 48, color: T.primary }}>A-</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: T.textPrimary, marginTop: 4 }}>Predicted Term Grade</div>
            <div style={{ fontSize: 12, color: T.textMuted, marginTop: 8 }}>On track to improve half a letter grade. Focus on advanced algebraic concepts to secure an 'A'.</div>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { label: 'Current GPA', value: '3.7', color: T.ai },
              { label: 'Attendance', value: '96%', color: T.primary },
              { label: 'XP Earned', value: '2,840', color: T.xp },
              { label: 'Assignments', value: '34/36', color: '#7c3aed' },
            ].map(s => (
              <div key={s.label} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: '16px 14px', textAlign: 'center' }}>
                <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 22, color: s.color }}>{s.value}</div>
                <div style={{ fontSize: 11, color: T.textMuted, marginTop: 3 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Growth chart */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary, marginBottom: 16 }}>Growth Over Time</h2>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, height: 90 }}>
              {PERF.map(p => (
                <div key={p.term} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <div style={{ width: '100%', background: T.primary, borderRadius: '4px 4px 0 0', height: `${(p.score / 100) * 80}px`, transition: 'height 0.3s' }} />
                  <div style={{ fontSize: 10, color: T.textMuted, textAlign: 'center' }}>{p.term}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: T.textPrimary }}>{p.score}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mastery Map */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 24 }}>
          <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 18 }}>Mastery Map</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {MASTERY.map(m => (
              <div key={m.skill} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 180, fontSize: 13, color: T.textPrimary }}>{m.skill}</div>
                <div style={{ flex: 1, height: 10, background: T.border + '60', borderRadius: 5, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${m.pct}%`, background: m.color, borderRadius: 5 }} />
                </div>
                <div style={{ width: 40, fontSize: 13, fontWeight: 700, color: m.color, textAlign: 'right' }}>{m.pct}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Attendance Heatmap */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
          <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 16 }}>Attendance Heatmap</h2>
          <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            {ATT_WEEKS.map(w => (
              <div key={w.week} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {w.days.map((present, i) => (
                  <div key={i} style={{ width: 18, height: 18, borderRadius: 3, background: present ? T.ai : T.error + '70' }} />
                ))}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 16, marginTop: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 12, height: 12, borderRadius: 2, background: T.ai }} />
              <span style={{ fontSize: 12, color: T.textMuted }}>Present</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 12, height: 12, borderRadius: 2, background: T.error + '70' }} />
              <span style={{ fontSize: 12, color: T.textMuted }}>Absent</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
