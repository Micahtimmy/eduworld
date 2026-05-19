'use client'
import Link from 'next/link'

const T = {
  bg: '#f4f4f8', surface: '#ffffff', textPrimary: '#0f0f1a',
  textMuted: '#6b7280', border: '#e5e7eb',
  purple: '#6366f1', purpleLight: '#818cf8', purpleDim: '#eef2ff',
  indigo: '#4f46e5', success: '#10b981', warning: '#f59e0b', error: '#ef4444',
  ai: '#10b981',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
  sidebarBg: '#1e1e2e', sidebarText: '#a1a1c7', sidebarActive: '#2e2e4e',
}

const sidebarItems = [
  { icon: 'corporate_fare', label: 'Dashboard', href: '/enterprise/dashboard' },
  { icon: 'group', label: 'Employees', href: '/enterprise/employees' },
  { icon: 'school', label: 'Programs', href: '/enterprise/programs' },
  { icon: 'troubleshoot', label: 'Skills Gap', href: '/enterprise/skills-gap' },
  { icon: 'trending_up', label: 'Performance', href: '/enterprise/employee-performance' },
  { icon: 'analytics', label: 'ROI Analytics', href: '/enterprise/roi' },
  { icon: 'psychology', label: 'AI Training', href: '/enterprise/ai-training', active: true },
]

const STATS = [
  { icon: 'group', label: 'Total Employees', value: '1,240', color: T.purple },
  { icon: 'trending_up', label: 'Completion Rate', value: '78%', trend: '+4% this quarter', color: T.success },
  { icon: 'school', label: 'Active Programs', value: '14', color: T.warning },
  { icon: 'workspace_premium', label: 'Certifications', value: '342', trend: '+8% this month', color: T.indigo },
]

const TREND = [
  { month: 'Jan', rate: 62 }, { month: 'Feb', rate: 67 }, { month: 'Mar', rate: 71 },
  { month: 'Apr', rate: 74 }, { month: 'May', rate: 78 },
]

const PERFORMERS = [
  { initials: 'SK', name: 'Sarah K.', dept: 'Engineering', completion: 95, courses: 12 },
  { initials: 'JO', name: 'James O.', dept: 'Product', completion: 91, courses: 10 },
  { initials: 'MP', name: 'Maya P.', dept: 'Design', completion: 88, courses: 9 },
]

const DIST = [
  { name: 'Technical', value: 35, color: T.success },
  { name: 'Leadership', value: 28, color: T.indigo },
  { name: 'Compliance', value: 20, color: T.warning },
  { name: 'Soft Skills', value: 17, color: '#8b5cf6' },
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

export default function EnterpriseLandingPage() {
  const maxRate = Math.max(...TREND.map(d => d.rate))

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>L&D Dashboard</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Acme Corp · Q2 2025</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <Link href="/enterprise/ai-training" style={{ textDecoration: 'none' }}>
              <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', background: T.ai, border: 'none', borderRadius: 10, fontSize: 13, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>psychology</span>AI Training
              </button>
            </Link>
            <button style={{ padding: '9px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textMuted, cursor: 'pointer' }}>Export Report</button>
          </div>
        </div>

        {/* Stat Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 28 }}>
          {STATS.map(s => (
            <div key={s.label} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: '20px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: s.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: s.color }}>{s.icon}</span>
                </div>
                {s.trend && <span style={{ fontSize: 10, fontWeight: 700, color: T.success, background: '#f0fdf4', borderRadius: 20, padding: '2px 8px' }}>{s.trend}</span>}
              </div>
              <div style={{ fontFamily: T.fontHead, fontSize: 28, fontWeight: 800, color: T.textPrimary, lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: T.textMuted, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginBottom: 20 }}>
          {/* Completion Trend */}
          <div style={{ gridColumn: 'span 2', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary, marginBottom: 20 }}>Completion Rate Trend</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, height: 120, marginBottom: 12 }}>
              {TREND.map(d => (
                <div key={d.month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: T.purple }}>{d.rate}%</div>
                  <div style={{ width: '100%', background: T.purple, borderRadius: '4px 4px 0 0', height: `${(d.rate / maxRate) * 90}px` }} />
                  <div style={{ fontSize: 11, color: T.textMuted }}>{d.month}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Performers */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary }}>Top Performers</div>
              <Link href="/enterprise/employees" style={{ fontSize: 12, color: T.purple, fontWeight: 600, textDecoration: 'none' }}>View all</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {PERFORMERS.map(p => (
                <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: T.purple + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 11, color: T.purple, flexShrink: 0 }}>{p.initials}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: T.textPrimary }}>{p.name}</div>
                    <div style={{ fontSize: 11, color: T.textMuted }}>{p.dept} · {p.courses} courses</div>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 700, background: '#f0fdf4', color: T.success, padding: '3px 8px', borderRadius: 20 }}>{p.completion}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {/* Course Distribution */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary, marginBottom: 16 }}>Course Distribution</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {DIST.map(d => (
                <div key={d.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}>
                    <span style={{ color: T.textMuted }}>{d.name}</span>
                    <span style={{ fontWeight: 700, color: T.textPrimary }}>{d.value}%</span>
                  </div>
                  <div style={{ height: 6, background: T.border + '60', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${d.value}%`, background: d.color, borderRadius: 3 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI-Powered Training CTA */}
          <div style={{ background: T.ai + '08', border: `1px solid ${T.ai}30`, borderRadius: 16, padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: T.ai + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 26, color: T.ai }}>psychology</span>
              </div>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary, marginBottom: 6 }}>AI-Powered Training</div>
              <p style={{ fontSize: 13, color: T.textMuted, lineHeight: 1.5 }}>Personalised for each employee. Claude adapts program content to individual role, skill level, and pace.</p>
            </div>
            <Link href="/enterprise/ai-training" style={{ textDecoration: 'none' }}>
              <button style={{ width: '100%', padding: '10px 0', background: T.ai, border: 'none', borderRadius: 10, fontSize: 13, color: '#fff', fontWeight: 600, cursor: 'pointer', marginTop: 16 }}>Manage Programs</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
