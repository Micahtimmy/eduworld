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
  { icon: 'group', label: 'Employees', href: '/enterprise/employees' },
  { icon: 'school', label: 'Programs', href: '/enterprise/programs' },
  { icon: 'troubleshoot', label: 'Skills Gap', href: '/enterprise/skills-gap' },
  { icon: 'trending_up', label: 'Performance', href: '/enterprise/employee-performance', active: true },
  { icon: 'analytics', label: 'ROI Analytics', href: '/enterprise/roi' },
  { icon: 'psychology', label: 'AI Training', href: '/enterprise/ai-training' },
]

const COURSES = [
  { name: 'Systems Thinking for Product Leaders', category: 'Strategy', date: 'Jan 12, 2024', progress: 100, score: '98/100' },
  { name: 'Advanced Design Tokens & Handover', category: 'Technical', date: 'Feb 05, 2024', progress: 45, score: '—' },
  { name: 'Empathy-Driven Leadership', category: 'Soft Skills', date: 'Dec 15, 2023', progress: 100, score: '92/100' },
]

const SKILLS = [
  { name: 'Visual Design', pct: 96 },
  { name: 'Prototyping', pct: 82 },
]

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

export default function EnterpriseEmployeePerformancePage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <Link href="/enterprise/employees" style={{ fontSize: 13, color: T.textMuted, textDecoration: 'none' }}>← Back</Link>
          <div style={{ height: 16, width: 1, background: T.border }} />
          <h1 style={{ fontFamily: T.fontHead, fontSize: 20, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Employee Performance Detail</h1>
        </div>

        {/* Profile Card */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 28, marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: T.purple + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: T.fontHead, fontWeight: 800, fontSize: 24, color: T.purple, flexShrink: 0 }}>AM</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                <div style={{ fontFamily: T.fontHead, fontSize: 20, fontWeight: 800, color: T.textPrimary }}>Alexandria Mercer</div>
                <span style={{ fontSize: 11, fontWeight: 700, background: T.purpleDim, color: T.purple, padding: '3px 10px', borderRadius: 20 }}>Level 4</span>
              </div>
              <div style={{ fontSize: 14, color: T.textMuted, marginBottom: 6 }}>Senior Product Designer</div>
              <div style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.5, marginBottom: 8 }}>Leading accessibility initiative across the platform. Top-5% standing in quarterly performance review.</div>
              <div style={{ display: 'flex', gap: 16, fontSize: 12, color: T.textMuted }}>
                <span>📍 London Hub</span>
                <span>📅 Joined 2.5 Years ago</span>
                <span>⭐ 4.9 Performance Score</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
              <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 15 }}>download</span>Report
              </button>
              <button style={{ padding: '8px 16px', background: T.purple, border: 'none', borderRadius: 8, fontSize: 13, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>Edit Profile</button>
            </div>
          </div>
        </div>

        {/* Metric Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 20 }}>
          {/* Skill Mastery */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: '20px 18px' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: T.textMuted, marginBottom: 8 }}>Skill Mastery</div>
            <div style={{ fontFamily: T.fontHead, fontSize: 32, fontWeight: 800, color: T.textPrimary, marginBottom: 4 }}>88%</div>
            <div style={{ fontSize: 11, fontWeight: 600, color: T.success, marginBottom: 12 }}>✓ Verified</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {SKILLS.map(s => (
                <div key={s.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 4 }}>
                    <span style={{ color: T.textMuted }}>{s.name}</span>
                    <span style={{ fontWeight: 700, color: T.textPrimary }}>{s.pct}%</span>
                  </div>
                  <div style={{ height: 5, background: T.border + '60', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${s.pct}%`, background: T.purple, borderRadius: 3 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Time-to-Completion */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: '20px 18px' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: T.textMuted, marginBottom: 8 }}>Time-to-Completion</div>
            <div style={{ fontFamily: T.fontHead, fontSize: 32, fontWeight: 800, color: T.textPrimary, marginBottom: 4 }}>14.2 days</div>
            <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 8 }}>average per module</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, color: T.success }}>
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>trending_down</span>
              15% faster than department benchmark
            </div>
          </div>

          {/* Achievements */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: '20px 18px' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: T.textMuted, marginBottom: 12 }}>Achievements</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 700, background: '#fef3c7', color: '#d97706', padding: '4px 10px', borderRadius: 20 }}>🔥 STREAK: 12 DAYS</span>
              <span style={{ fontSize: 11, fontWeight: 700, background: '#f0fdf4', color: T.success, padding: '4px 10px', borderRadius: 20 }}>🏆 TOP 5% TEAM</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {['Leadership', 'Strategy', 'Technical', 'Soft Skills'].map(t => (
                <span key={t} style={{ fontSize: 11, fontWeight: 600, color: T.textMuted }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* AI Growth Plan */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
            <span style={{ fontSize: 16, color: T.success }}>✦</span>
            <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary }}>AI Growth Plan</div>
            <span style={{ fontSize: 10, fontWeight: 700, background: T.success + '15', color: T.success, padding: '3px 8px', borderRadius: 20 }}>Personalized roadmap for Q3/Q4</span>
            <span style={{ fontSize: 10, fontWeight: 700, background: '#fef2f2', color: T.error, padding: '3px 8px', borderRadius: 20, marginLeft: 'auto' }}>High Priority</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '12px 14px', background: '#fef3c7', border: '1px solid #fde68a', borderRadius: 10 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#d97706', flexShrink: 0, marginTop: 1 }}>warning</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: T.textPrimary }}>Front-end Handoff</div>
                <div style={{ fontSize: 12, color: T.textMuted }}>Limited design-token and React documentation experience identified.</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '12px 14px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 10 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.success, flexShrink: 0, marginTop: 1 }}>check_circle</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: T.textPrimary }}>Accessibility (WCAG 2.1)</div>
                <div style={{ fontSize: 12, color: T.textMuted }}>Advanced mastery confirmed via recent audit project.</div>
              </div>
            </div>
          </div>
          <div style={{ border: `1px solid ${T.border}`, borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary }}>Advanced Tailwind Integration</div>
              <div style={{ fontSize: 11, color: T.textMuted }}>⭐ 4.8 · 8.5 Hours · Certificate included</div>
            </div>
            <button style={{ padding: '6px 12px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.textPrimary, cursor: 'pointer' }}>View →</button>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', background: T.purple, border: 'none', borderRadius: 8, fontSize: 13, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>Update Growth Roadmap</button>
        </div>

        {/* Course Progress Table */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: `1px solid ${T.border}` }}>
            <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary }}>Course Progress</div>
            <div style={{ display: 'flex', gap: 6 }}>
              {['All Modules', 'Completed', 'In Progress'].map((tab, i) => (
                <button key={tab} style={{ padding: '5px 12px', borderRadius: 20, fontSize: 11, fontWeight: 600, cursor: 'pointer', background: i === 0 ? T.purple : T.bg, color: i === 0 ? '#fff' : T.textMuted, border: 'none' }}>{tab}</button>
              ))}
            </div>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: T.bg, borderBottom: `1px solid ${T.border}` }}>
                {['Course Name', 'Category', 'Start Date', 'Progress', 'Score'].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '10px 16px', fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: 'uppercase' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COURSES.map((c, i) => (
                <tr key={c.name} style={{ borderBottom: i < COURSES.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                  <td style={{ padding: '14px 16px', fontSize: 13, fontWeight: 600, color: T.textPrimary }}>{c.name}</td>
                  <td style={{ padding: '14px 16px' }}>
                    <span style={{ fontSize: 11, fontWeight: 700, background: T.purpleDim, color: T.purple, padding: '3px 10px', borderRadius: 20 }}>{c.category}</span>
                  </td>
                  <td style={{ padding: '14px 16px', fontSize: 12, color: T.textMuted }}>{c.date}</td>
                  <td style={{ padding: '14px 16px' }}>
                    {c.progress === 100
                      ? <span style={{ fontSize: 11, fontWeight: 700, background: '#f0fdf4', color: T.success, padding: '3px 10px', borderRadius: 20 }}>Completed</span>
                      : <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <div style={{ width: 80, height: 5, background: T.border + '60', borderRadius: 3, overflow: 'hidden' }}>
                            <div style={{ height: '100%', width: `${c.progress}%`, background: T.purple, borderRadius: 3 }} />
                          </div>
                          <span style={{ fontSize: 11, color: T.textMuted }}>{c.progress}%</span>
                        </div>}
                  </td>
                  <td style={{ padding: '14px 16px', fontSize: 13, fontWeight: 700, color: c.score !== '—' ? T.success : T.textMuted }}>{c.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ padding: '12px 16px', borderTop: `1px solid ${T.border}` }}>
            <button style={{ fontSize: 12, color: T.purple, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>View All Course History →</button>
          </div>
        </div>
      </main>
    </div>
  )
}
