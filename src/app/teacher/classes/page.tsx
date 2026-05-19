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
  { icon: 'school', label: 'My Classes', href: '/teacher/classes', active: true },
  { icon: 'assignment', label: 'Assignments', href: '/teacher/assignments' },
  { icon: 'analytics', label: 'Analytics', href: '/teacher/student-insights' },
  { icon: 'people', label: 'Students', href: '/teacher/student-groups' },
  { icon: 'calendar_month', label: 'Calendar', href: '/teacher/calendar' },
  { icon: 'inbox', label: 'Inbox', href: '/teacher/inbox' },
]

const CLASSES = [
  { id: '1', name: 'Year 9A', subject: 'Mathematics', period: 'Period 1 · 09:00–10:00', students: 30, avgScore: 78, completion: 68, color: T.primary },
  { id: '2', name: 'Year 9B', subject: 'Mathematics', period: 'Period 2 · 10:15–11:15', students: 28, avgScore: 82, completion: 72, color: '#7c3aed' },
  { id: '3', name: 'Year 10A', subject: 'Mathematics', period: 'Period 3 · 11:30–12:30', students: 29, avgScore: 71, completion: 55, color: T.xp },
  { id: '4', name: 'Year 10B', subject: 'Mathematics', period: 'Period 4 · 13:30–14:30', students: 31, avgScore: 85, completion: 80, color: T.ai },
  { id: '5', name: 'Year 11A', subject: 'Mathematics', period: 'Period 5 · 14:45–15:45', students: 24, avgScore: 69, completion: 45, color: '#e11d48' },
  { id: '6', name: 'Year 11B', subject: 'Advanced Calculus', period: 'Period 6 · 16:00–17:00', students: 22, avgScore: 88, completion: 90, color: '#0891b2' },
]

function ProgressRing({ value, color }: { value: number; color: string }) {
  const r = 26, cx = 32, cy = 32
  const circ = 2 * Math.PI * r
  const offset = circ - (value / 100) * circ
  return (
    <svg width={64} height={64} viewBox="0 0 64 64">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={T.border} strokeWidth={5} />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth={5}
        strokeDasharray={circ} strokeDashoffset={offset}
        strokeLinecap="round" transform="rotate(-90 32 32)" />
      <text x={cx} y={cy + 1} textAnchor="middle" dominantBaseline="middle"
        style={{ fontSize: 12, fontWeight: 700, fill: T.textPrimary }}>{value}%</text>
    </svg>
  )
}

function Sidebar() {
  return (
    <aside style={{
      width: 260, minHeight: '100vh', background: T.surface,
      borderRight: `1px solid ${T.border}`, display: 'flex',
      flexDirection: 'column', padding: '24px 0', flexShrink: 0,
    }}>
      <div style={{ padding: '0 20px 24px', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: T.primary }}>EduWorld</div>
        <span style={{
          display: 'inline-block', marginTop: 4, fontSize: 11, fontWeight: 600,
          color: T.primary, background: '#e8f0fe', borderRadius: 6, padding: '2px 8px',
        }}>Teacher</span>
      </div>
      <nav style={{ flex: 1, padding: '16px 12px' }}>
        {sidebarItems.map(item => (
          <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px',
              borderRadius: 8, marginBottom: 2, cursor: 'pointer',
              background: item.active ? '#f3f3f9' : 'transparent',
              borderLeft: item.active ? `3px solid ${T.primary}` : '3px solid transparent',
              color: item.active ? T.primary : T.textMuted,
              fontFamily: T.fontBody, fontWeight: item.active ? 600 : 400, fontSize: 14,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
      <div style={{ padding: '0 12px' }}>
        <Link href="/settings" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, color: T.textMuted, fontFamily: T.fontBody, fontSize: 14 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>settings</span>Settings
          </div>
        </Link>
      </div>
    </aside>
  )
}

export default function TeacherClassesPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 26, fontWeight: 800, color: T.textPrimary, margin: 0 }}>My Classes</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>{CLASSES.length} classes · {CLASSES.reduce((a, c) => a + c.students, 0)} students enrolled</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{
              display: 'flex', alignItems: 'center', background: T.surface,
              border: `1px solid ${T.border}`, borderRadius: 10, padding: '0 12px',
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.textMuted }}>search</span>
              <input placeholder="Search classes..." style={{
                border: 'none', outline: 'none', padding: '10px 8px',
                fontFamily: T.fontBody, fontSize: 14, color: T.textPrimary, background: 'transparent', width: 180,
              }} />
            </div>
            <button style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px',
              background: T.primary, border: 'none', borderRadius: 10,
              fontSize: 14, color: '#fff', cursor: 'pointer', fontWeight: 600, fontFamily: T.fontBody,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>add</span>
              Add Class
            </button>
          </div>
        </div>

        {/* Filter bar */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
          {['All Classes', 'Year 9', 'Year 10', 'Year 11', 'Mathematics', 'Science'].map((f, i) => (
            <button key={f} style={{
              padding: '7px 16px', borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: 'pointer',
              background: i === 0 ? T.primary : T.surface,
              color: i === 0 ? '#fff' : T.textMuted,
              border: i === 0 ? 'none' : `1px solid ${T.border}`,
              fontFamily: T.fontBody,
            }}>{f}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {CLASSES.map(cls => (
            <Link key={cls.id} href={`/teacher/classes/${cls.id}`} style={{ textDecoration: 'none' }}>
              <div style={{
                background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16,
                padding: 24, cursor: 'pointer', transition: 'box-shadow 0.2s',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <div>
                    <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 17, color: T.textPrimary }}>{cls.name}</div>
                    <div style={{ fontSize: 13, color: T.textMuted, marginTop: 3 }}>{cls.subject}</div>
                  </div>
                  <ProgressRing value={cls.completion} color={cls.color} />
                </div>
                <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 14 }}>{cls.period}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.textMuted }}>people</span>
                    <span style={{ fontSize: 13, color: T.textMuted }}>{cls.students} students</span>
                  </div>
                  <span style={{
                    fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 20,
                    background: cls.avgScore >= 80 ? T.ai + '20' : cls.avgScore >= 70 ? T.xp + '20' : T.error + '20',
                    color: cls.avgScore >= 80 ? T.ai : cls.avgScore >= 70 ? T.xp : T.error,
                  }}>Avg {cls.avgScore}%</span>
                </div>
                <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
                  <button style={{
                    flex: 1, padding: '8px 0', background: T.bg, border: `1px solid ${T.border}`,
                    borderRadius: 8, fontSize: 12, color: T.primary, fontWeight: 600, cursor: 'pointer',
                  }}>Attendance</button>
                  <button style={{
                    flex: 1, padding: '8px 0', background: T.bg, border: `1px solid ${T.border}`,
                    borderRadius: 8, fontSize: 12, color: T.primary, fontWeight: 600, cursor: 'pointer',
                  }}>Grades</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
