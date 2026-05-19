'use client'
import Link from 'next/link'

const T = {
  bg: '#f9f9ff', surface: '#ffffff', primary: '#003f7a',
  ai: '#10B981', xp: '#F59E0B', textPrimary: '#191c20',
  textMuted: '#424750', border: '#c2c6d2', error: '#ba1a1a',
  indigo: '#4F46E5', indigoLight: '#EEF2FF',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
}

const sidebarItems = [
  { icon: 'dashboard', label: 'Dashboard', href: '/parent/dashboard' },
  { icon: 'people', label: 'My Children', href: '/parent/multi-child' },
  { icon: 'insights', label: 'Performance', href: '/parent/performance', active: true },
  { icon: 'calendar_month', label: 'Calendar', href: '/parent/calendar' },
  { icon: 'folder', label: 'Documents', href: '/parent/documents' },
  { icon: 'sports_soccer', label: 'Extracurricular', href: '/parent/extracurricular' },
  { icon: 'chat', label: 'Messages', href: '/parent/messages' },
  { icon: 'payments', label: 'Tuition & Fees', href: '/parent/tuition' },
]

const RADAR_SUBJECTS = [
  { label: 'Mathematics', value: 92, color: T.indigo },
  { label: 'Science', value: 88, color: '#06B6D4' },
  { label: 'Language', value: 76, color: '#8B5CF6' },
  { label: 'History', value: 74, color: '#F59E0B' },
  { label: 'Arts', value: 81, color: '#EC4899' },
]

const GRADE_HISTORY = [
  { month: 'SEP', score: 82 },
  { month: 'OCT', score: 85 },
  { month: 'NOV', score: 80 },
  { month: 'DEC', score: 94 },
  { month: 'JAN', score: 89 },
  { month: 'FEB', score: 91 },
]

const MODULES = [
  { label: 'Organic Chemistry', pct: 85, color: T.indigo },
  { label: 'Modern World History', pct: 42, color: '#F59E0B' },
  { label: 'Multivariable Calculus', pct: 61, color: '#06B6D4' },
  { label: 'Creative Composition', pct: 12, color: '#EF4444' },
]

const ASSESSMENTS = [
  { date: 'Oct 24, 2023', subject: 'Science', assignment: 'Chemical Kinetics Lab Report', grade: 'A+', gradeColor: '#10B981', teacher: 'Dr. Sarah Reed', feedback: 'Excellent precision in the experimental methodology and data interpretation.' },
  { date: 'Oct 21, 2023', subject: 'Mathematics', assignment: 'Advanced Integral Calculus Test', grade: 'A', gradeColor: '#10B981', teacher: 'Prof. Marcus Thorne', feedback: 'Logical progression through the complex proofs was flawless.' },
  { date: 'Oct 15, 2023', subject: 'English', assignment: 'Literary Analysis: The Great Gatsby', grade: 'B-', gradeColor: '#F59E0B', teacher: 'Mr. Julian Vane', feedback: 'Good understanding of themes, but the essay structure needs more cohesion.' },
]

function Sidebar() {
  return (
    <aside style={{ width: 260, minHeight: '100vh', background: T.surface, borderRight: `1px solid ${T.border}`, display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0 }}>
      <div style={{ padding: '0 20px 24px', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: T.primary }}>EduWorld</div>
        <span style={{ display: 'inline-block', marginTop: 4, fontSize: 11, fontWeight: 600, color: T.primary, background: '#e8f0fe', borderRadius: 6, padding: '2px 8px' }}>Parent</span>
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
      <div style={{ padding: '0 16px 16px' }}>
        <div style={{ background: T.primary + '10', borderRadius: 12, padding: '12px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <span style={{ fontSize: 13, color: T.ai }}>✦</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: T.textPrimary }}>EduWorld AI</span>
          </div>
          <p style={{ fontSize: 11, color: T.textMuted, margin: 0 }}>Ask about Alex&apos;s progress, grades, or upcoming events.</p>
        </div>
      </div>
    </aside>
  )
}

export default function ParentPerformancePage() {
  const maxScore = 94
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <p style={{ fontSize: 12, color: T.textMuted, margin: '0 0 4px' }}>Overview › Academic Progress</p>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 26, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Academic Progress</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Detailed performance insights for Alex Johnson.</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>notifications</span>
            </button>
          </div>
        </div>

        {/* Top row: Mastery Radar + Grade History */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 20, marginBottom: 20 }}>
          {/* Mastery Radar */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
              <div>
                <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, margin: 0 }}>Mastery Radar</h2>
                <p style={{ fontSize: 12, color: T.textMuted, marginTop: 4 }}>Subject proficiency — Current Term</p>
              </div>
              <select style={{ fontSize: 12, padding: '4px 8px', border: `1px solid ${T.border}`, borderRadius: 8, color: T.textPrimary, background: T.surface, cursor: 'pointer' }}>
                <option>Current Term</option>
                <option>Last Term</option>
              </select>
            </div>
            {/* Spider chart visualisation — simplified bar representation */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
              {RADAR_SUBJECTS.map(s => (
                <div key={s.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ fontSize: 13, color: T.textPrimary, fontWeight: 500 }}>{s.label}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: s.color }}>{s.value}%</span>
                  </div>
                  <div style={{ height: 8, background: '#F3F4F6', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{ width: `${s.value}%`, height: '100%', background: s.color, borderRadius: 4 }} />
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {RADAR_SUBJECTS.map(s => (
                <span key={s.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11, padding: '3px 8px', borderRadius: 20, background: s.color + '15', color: s.color, fontWeight: 600 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.color, display: 'inline-block' }} />
                  {s.label} {s.value}%
                </span>
              ))}
            </div>
          </div>

          {/* Grade History */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, margin: 0 }}>Grade History</h2>
              <div style={{ display: 'flex', gap: 4 }}>
                <button style={{ fontSize: 12, padding: '4px 12px', background: T.indigo, color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 600 }}>6 Months</button>
                <button style={{ fontSize: 12, padding: '4px 12px', background: T.indigoLight, color: T.indigo, border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 600 }}>Current Year</button>
              </div>
            </div>
            {/* Bar chart */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, height: 140, marginBottom: 12 }}>
              {GRADE_HISTORY.map(item => {
                const pct = (item.score / maxScore) * 100
                return (
                  <div key={item.month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: T.indigo }}>{item.score}</span>
                    <div style={{ width: '100%', height: `${pct}%`, background: `linear-gradient(to top, ${T.indigo}, #818CF8)`, borderRadius: '4px 4px 0 0', minHeight: 8 }} />
                    <span style={{ fontSize: 11, color: T.textMuted, fontWeight: 600 }}>{item.month}</span>
                  </div>
                )
              })}
            </div>
            <div style={{ height: 1, background: T.border, margin: '8px 0 12px' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 12, color: T.textMuted }}>Average score this period</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: T.indigo }}>86.8 / 100</span>
            </div>
          </div>
        </div>

        {/* Second row: AI Insights + Module Progress */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
          {/* AI Insights */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.ai }}>auto_awesome</span>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, margin: 0 }}>AI Insights</h2>
            </div>
            <div style={{ background: T.ai + '10', borderRadius: 12, padding: 14, marginBottom: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                <span style={{ color: T.ai, fontSize: 13 }}>✦</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary }}>Excellence Highlight</span>
              </div>
              <p style={{ fontSize: 13, color: T.textMuted, margin: 0 }}>Alex is outperforming 94% of peers in logical spatial reasoning with outstanding geometry improvements this term.</p>
            </div>
            <div style={{ background: T.xp + '10', borderRadius: 12, padding: 14, marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                <span style={{ color: T.xp, fontSize: 13 }}>✦</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary }}>Growth Opportunity</span>
              </div>
              <p style={{ fontSize: 13, color: T.textMuted, margin: 0 }}>Written analysis skills need strengthening. Suggest the &quot;Comparative Rhetoric&quot; modules to build essay structure.</p>
            </div>
            <button style={{ width: '100%', padding: '10px', background: T.indigo, color: '#fff', border: 'none', borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
              View Full Learning Plan
            </button>
          </div>

          {/* Module Progress */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 16 }}>Module Progress</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {MODULES.map(m => (
                <div key={m.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: 13, color: T.textPrimary, fontWeight: 500 }}>{m.label}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: m.color }}>{m.pct}%</span>
                  </div>
                  <div style={{ height: 10, background: '#F3F4F6', borderRadius: 5, overflow: 'hidden' }}>
                    <div style={{ width: `${m.pct}%`, height: '100%', background: m.color, borderRadius: 5, transition: 'width 0.6s ease' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Assessments */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, margin: 0 }}>Recent Assessments</h2>
            <Link href="#" style={{ fontSize: 13, color: T.indigo, fontWeight: 600, textDecoration: 'none' }}>View All ›</Link>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${T.border}` }}>
                {['Date', 'Subject', 'Assignment', 'Grade', 'Teacher Feedback'].map(h => (
                  <th key={h} style={{ textAlign: 'left', fontSize: 11, fontWeight: 700, color: T.textMuted, padding: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ASSESSMENTS.map((a, i) => (
                <tr key={i} style={{ borderBottom: i < ASSESSMENTS.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                  <td style={{ padding: '14px 0', fontSize: 13, color: T.textMuted, whiteSpace: 'nowrap' }}>{a.date}</td>
                  <td style={{ padding: '14px 0', fontSize: 13, fontWeight: 600, color: T.textPrimary }}>{a.subject}</td>
                  <td style={{ padding: '14px 0', fontSize: 13, color: T.textPrimary, maxWidth: 220 }}>{a.assignment}</td>
                  <td style={{ padding: '14px 0' }}>
                    <span style={{ display: 'inline-block', fontSize: 13, fontWeight: 800, color: a.gradeColor, background: a.gradeColor + '15', padding: '2px 10px', borderRadius: 8 }}>{a.grade}</span>
                  </td>
                  <td style={{ padding: '14px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 28, height: 28, borderRadius: '50%', background: T.indigo + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 14, color: T.indigo }}>person</span>
                      </div>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 600, color: T.textPrimary }}>{a.teacher}</div>
                        <div style={{ fontSize: 11, color: T.textMuted, maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{a.feedback}</div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
