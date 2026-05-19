'use client'
import Link from 'next/link'

const T = {
  bg: '#f4f4f8', surface: '#ffffff', textPrimary: '#0f0f1a',
  textMuted: '#6b7280', border: '#e5e7eb',
  purple: '#6366f1', purpleLight: '#818cf8', purpleDim: '#eef2ff',
  indigo: '#4f46e5', success: '#10b981', warning: '#f59e0b', error: '#ef4444',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
  sidebarBg: '#1e1e2e', sidebarText: '#a1a1c7', sidebarActive: '#2e2e4e',
}

const sidebarItems = [
  { icon: 'corporate_fare', label: 'Dashboard', href: '/enterprise/dashboard' },
  { icon: 'group', label: 'Employees', href: '/enterprise/employees', active: true },
  { icon: 'school', label: 'Programs', href: '/enterprise/programs' },
  { icon: 'troubleshoot', label: 'Skills Gap', href: '/enterprise/skills-gap' },
  { icon: 'trending_up', label: 'Performance', href: '/enterprise/employee-performance' },
  { icon: 'analytics', label: 'ROI Analytics', href: '/enterprise/roi' },
  { icon: 'psychology', label: 'AI Training', href: '/enterprise/ai-training' },
]

const METRICS = [
  { label: 'Skill Mastery', value: '88%', icon: 'verified' },
  { label: 'Visual Design', value: '96%', icon: 'palette' },
  { label: 'Prototyping', value: '82%', icon: 'bolt' },
  { label: 'Time-to-Completion', value: '14.2 days', icon: 'schedule', sub: '15% faster than benchmark' },
]

const COURSES = [
  { name: 'Systems Thinking for Product Leaders', cat: 'Strategy', start: 'Jan 12, 2024', progress: 100, score: 98 },
  { name: 'Advanced Design Tokens & Handover', cat: 'Technical', start: 'Feb 05, 2024', progress: 45, score: null },
  { name: 'Empathy-Driven Leadership', cat: 'Soft Skills', start: 'Dec 15, 2023', progress: 100, score: 92 },
]

const TAGS = ['Leadership', 'Strategy', 'Technical', 'Soft Skills', 'Execution']

function Sidebar() {
  return (
    <aside style={{ width: 240, minHeight: '100vh', background: T.sidebarBg, display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0 }}>
      <div style={{ padding: '0 20px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: '#ffffff' }}>EduWorld</div>
        <span style={{ display: 'inline-block', marginTop: 5, fontSize: 11, fontWeight: 600, color: T.purpleLight, background: 'rgba(129,140,248,0.15)', borderRadius: 6, padding: '2px 8px' }}>Enterprise</span>
      </div>
      <nav style={{ flex: 1, padding: '16px 10px' }}>
        {sidebarItems.map(item => (
          <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 8, marginBottom: 2, background: item.active ? T.sidebarActive : 'transparent', color: item.active ? '#ffffff' : T.sidebarText, fontFamily: T.fontBody, fontWeight: item.active ? 600 : 400, fontSize: 13 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{item.icon}</span>
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default function EmployeeDetailPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <Link href="/enterprise/employees" style={{ fontSize: 13, color: T.textMuted, textDecoration: 'none' }}>← Back</Link>
        </div>

        {/* Profile Card */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 28, marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: T.purple + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: T.fontHead, fontWeight: 800, fontSize: 22, color: T.purple, flexShrink: 0 }}>AM</div>
              <div>
                <div style={{ fontFamily: T.fontHead, fontSize: 22, fontWeight: 800, color: T.textPrimary }}>Alexandria Mercer</div>
                <div style={{ fontSize: 13, color: T.textMuted }}>Senior Product Designer · Level 4 · London Hub</div>
                <div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>Joined 2.5 Years ago · 4.9 Performance Score</div>
                <div style={{ fontSize: 12, color: T.textMuted }}>Top 5% in Figma Proficiency and User Research</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
              <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 15 }}>download</span>Report
              </button>
              <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 15 }}>edit</span>Edit
              </button>
            </div>
          </div>
        </div>

        {/* Metric Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 20 }}>
          {METRICS.map(m => (
            <div key={m.label} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: '18px 16px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.purple, display: 'block', marginBottom: 6 }}>{m.icon}</span>
              <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 4 }}>{m.label}</div>
              <div style={{ fontFamily: T.fontHead, fontSize: 20, fontWeight: 800, color: T.textPrimary }}>{m.value}</div>
              {m.sub && <div style={{ fontSize: 11, color: T.success, marginTop: 4 }}>{m.sub}</div>}
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
          {/* AI Growth Plan */}
          <div style={{ background: T.success + '08', border: `1px solid ${T.success}30`, borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <span style={{ fontSize: 10, fontWeight: 700, background: '#fef2f2', color: T.error, padding: '3px 10px', borderRadius: 20 }}>HIGH Priority</span>
              <div style={{ fontSize: 14, fontWeight: 700, color: T.textPrimary }}>AI Growth Plan</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
              <div style={{ borderLeft: `4px solid ${T.error}`, paddingLeft: 10, paddingBlock: 4 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: T.error }}>Gap: Front-end Handoff</div>
                <div style={{ fontSize: 11, color: T.textMuted }}>Limited design token/React experience</div>
              </div>
              <div style={{ borderLeft: `4px solid ${T.success}`, paddingLeft: 10, paddingBlock: 4 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: T.success }}>Strength: Accessibility WCAG 2.1</div>
                <div style={{ fontSize: 11, color: T.textMuted }}>Advanced mastery confirmed</div>
              </div>
            </div>
            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, padding: '12px 14px', marginBottom: 12 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: T.textPrimary, marginBottom: 2 }}>Recommended: Advanced Tailwind Integration</div>
              <div style={{ fontSize: 11, color: T.textMuted }}>⭐ 4.8 · 8.5 hrs · Certification included</div>
            </div>
            <button style={{ width: '100%', padding: '9px 0', background: T.purple, border: 'none', borderRadius: 8, fontSize: 13, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>Update Growth Roadmap</button>
          </div>

          {/* Achievements */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary, marginBottom: 14 }}>Achievements</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
              {TAGS.map(t => (
                <span key={t} style={{ fontSize: 12, fontWeight: 600, background: T.purpleDim, color: T.purple, padding: '4px 12px', borderRadius: 20 }}>{t}</span>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div style={{ background: '#fef3c7', border: '1px solid #fde68a', borderRadius: 12, padding: '12px 16px', textAlign: 'center' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: '#d97706' }}>🔥 12 DAYS</div>
                <div style={{ fontSize: 11, color: '#d97706' }}>Streak</div>
              </div>
              <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 12, padding: '12px 16px', textAlign: 'center' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: T.success }}>TOP 5%</div>
                <div style={{ fontSize: 11, color: T.success }}>Team Rank</div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Progress */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: `1px solid ${T.border}` }}>
            <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary }}>Course Progress</div>
            <div style={{ display: 'flex', gap: 6 }}>
              {['All Modules', 'Completed', 'In Progress'].map((f, i) => (
                <button key={f} style={{ padding: '5px 12px', borderRadius: 20, fontSize: 11, fontWeight: 600, cursor: 'pointer', background: i === 0 ? T.purple : T.bg, color: i === 0 ? '#fff' : T.textMuted, border: 'none' }}>{f}</button>
              ))}
            </div>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${T.border}` }}>
                  {['Course', 'Category', 'Start', 'Progress', 'Score'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '10px 16px', fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COURSES.map((c, i) => (
                  <tr key={c.name} style={{ borderBottom: i < COURSES.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                    <td style={{ padding: '14px 16px', fontSize: 13, color: T.textPrimary }}>{c.name}</td>
                    <td style={{ padding: '14px 16px' }}>
                      <span style={{ fontSize: 11, background: T.bg, color: T.textMuted, padding: '3px 8px', borderRadius: 20 }}>{c.cat}</span>
                    </td>
                    <td style={{ padding: '14px 16px', fontSize: 12, color: T.textMuted }}>{c.start}</td>
                    <td style={{ padding: '14px 16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 64, height: 5, background: T.border + '60', borderRadius: 3, overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${c.progress}%`, background: c.progress === 100 ? T.success : T.purple, borderRadius: 3 }} />
                        </div>
                        <span style={{ fontSize: 11, color: T.textMuted }}>{c.progress}%</span>
                      </div>
                    </td>
                    <td style={{ padding: '14px 16px' }}>
                      {c.score
                        ? <span style={{ fontSize: 13, fontWeight: 700, color: T.success }}>{c.score}/100</span>
                        : <span style={{ fontSize: 12, color: T.textMuted }}>—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ padding: '12px 16px', borderTop: `1px solid ${T.border}` }}>
            <button style={{ fontSize: 12, color: T.purple, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>View All Course History →</button>
          </div>
        </div>
      </main>
    </div>
  )
}
