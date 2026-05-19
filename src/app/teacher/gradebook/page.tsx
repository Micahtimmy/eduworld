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
  { icon: 'assignment', label: 'Assignments', href: '/teacher/assignments', active: true },
  { icon: 'analytics', label: 'Analytics', href: '/teacher/student-insights' },
  { icon: 'people', label: 'Students', href: '/teacher/student-groups' },
  { icon: 'calendar_month', label: 'Calendar', href: '/teacher/calendar' },
  { icon: 'inbox', label: 'Inbox', href: '/teacher/inbox' },
]

const STUDENTS = [
  { name: 'Alex Carter', initials: 'AC', quiz1: 92, quiz2: 88, midterm: 90, lab1: 95, hw: 85, avg: 90 },
  { name: 'Mia Sharma', initials: 'MS', quiz1: 98, quiz2: 96, midterm: 97, lab1: 100, hw: 98, avg: 98 },
  { name: 'Jordan Lee', initials: 'JL', quiz1: 65, quiz2: 58, midterm: 62, lab1: 70, hw: 55, avg: 62 },
  { name: 'Emma Patel', initials: 'EP', quiz1: 83, quiz2: 87, midterm: 84, lab1: 88, hw: 80, avg: 84 },
  { name: 'Lucas Kim', initials: 'LK', quiz1: 76, quiz2: 79, midterm: 74, lab1: 80, hw: 72, avg: 76 },
  { name: 'Sofia Reyes', initials: 'SR', quiz1: 88, quiz2: 91, midterm: 86, lab1: 92, hw: 87, avg: 89 },
  { name: 'Marcus Brown', initials: 'MB', quiz1: 60, quiz2: 55, midterm: 58, lab1: 65, hw: 50, avg: 58 },
]

function gradeColor(val: number) {
  if (val >= 90) return T.ai
  if (val >= 75) return T.xp
  return T.error
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

export default function GradebookPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Gradebook</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>AP Physics — Section A · Fall Semester 2025</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span>Export CSV
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 16px', background: T.primary, border: 'none', borderRadius: 10, fontSize: 13, color: '#fff', cursor: 'pointer', fontWeight: 600 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>add</span>New Assignment
            </button>
          </div>
        </div>

        {/* AI Panel */}
        <div style={{ background: T.ai + '10', border: `1px solid ${T.ai}30`, borderRadius: 14, padding: '16px 20px', marginBottom: 24, display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <span style={{ fontSize: 18, color: T.ai, marginTop: 1 }}>✦</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary, marginBottom: 4 }}>AI Grading Assistant</div>
            <div style={{ fontSize: 13, color: T.textMuted }}>Jordan Lee and Marcus Brown are showing a significant drop in quiz performance. Consider scheduling a 1-on-1 session or targeted revision exercise.</div>
          </div>
          <button style={{ padding: '8px 16px', background: T.ai, color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, cursor: 'pointer', fontWeight: 600, whiteSpace: 'nowrap' }}>Take Action</button>
        </div>

        {/* Grade Table */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${T.border}` }}>
                <th style={{ textAlign: 'left', paddingBottom: 12, paddingRight: 16, fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: 'uppercase', minWidth: 160 }}>Student</th>
                {['Quiz 1', 'Quiz 2', 'Midterm', 'Lab 1', 'Homework', 'Average'].map(h => (
                  <th key={h} style={{ textAlign: 'center', paddingBottom: 12, paddingRight: 12, fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: 'uppercase', minWidth: 80 }}>{h}</th>
                ))}
                <th style={{ textAlign: 'center', paddingBottom: 12, fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: 'uppercase' }}>Grade</th>
              </tr>
            </thead>
            <tbody>
              {STUDENTS.map((s, i) => (
                <tr key={s.name} style={{ borderBottom: i < STUDENTS.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                  <td style={{ padding: '12px 16px 12px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 34, height: 34, borderRadius: '50%', background: T.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: T.primary, flexShrink: 0 }}>{s.initials}</div>
                      <div style={{ fontWeight: 600, fontSize: 14, color: T.textPrimary }}>{s.name}</div>
                    </div>
                  </td>
                  {[s.quiz1, s.quiz2, s.midterm, s.lab1, s.hw].map((val, j) => (
                    <td key={j} style={{ textAlign: 'center', paddingRight: 12 }}>
                      <span style={{ fontWeight: 700, fontSize: 14, color: gradeColor(val) }}>{val}%</span>
                    </td>
                  ))}
                  <td style={{ textAlign: 'center', paddingRight: 12 }}>
                    <span style={{ fontWeight: 800, fontSize: 15, color: gradeColor(s.avg) }}>{s.avg}%</span>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 20, background: gradeColor(s.avg) + '20', color: gradeColor(s.avg) }}>
                      {s.avg >= 90 ? 'A' : s.avg >= 80 ? 'B' : s.avg >= 70 ? 'C' : s.avg >= 60 ? 'D' : 'F'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Weight breakdown */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 24 }}>
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 16 }}>Weight Configuration</h2>
            {[
              { label: 'Quizzes & Tests', weight: '40%', color: T.primary },
              { label: 'Homework & Labs', weight: '30%', color: T.ai },
              { label: 'Participation', weight: '30%', color: T.xp },
            ].map(w => (
              <div key={w.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: w.color }} />
                  <span style={{ fontSize: 13, color: T.textPrimary }}>{w.label}</span>
                </div>
                <span style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>{w.weight}</span>
              </div>
            ))}
            <div style={{ background: T.ai + '15', borderRadius: 10, padding: '10px 12px', marginTop: 12 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: T.ai }}>✓ 100% allocated</span>
            </div>
          </div>
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 16 }}>Class Distribution</h2>
            {[
              { grade: 'A (90–100%)', count: 2, color: T.ai },
              { grade: 'B (80–89%)', count: 2, color: '#0891b2' },
              { grade: 'C (70–79%)', count: 1, color: T.xp },
              { grade: 'D (60–69%)', count: 1, color: '#f97316' },
              { grade: 'F (< 60%)', count: 1, color: T.error },
            ].map(g => (
              <div key={g.grade} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div style={{ width: 10, height: 10, borderRadius: 2, background: g.color, flexShrink: 0 }} />
                <div style={{ flex: 1, fontSize: 12, color: T.textMuted }}>{g.grade}</div>
                <div style={{ width: `${(g.count / 7) * 80}px`, height: 8, borderRadius: 4, background: g.color + '60' }} />
                <div style={{ fontSize: 12, fontWeight: 700, color: T.textPrimary, width: 16, textAlign: 'right' }}>{g.count}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
