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
  { icon: 'trending_up', label: 'Performance', href: '/enterprise/employee-performance' },
  { icon: 'analytics', label: 'ROI Analytics', href: '/enterprise/roi', active: true },
  { icon: 'psychology', label: 'AI Training', href: '/enterprise/ai-training' },
]

const KPIS = [
  { label: 'Training ROI', value: '342%', change: '+28% YoY', icon: 'payments', color: T.success, bg: '#f0fdf4' },
  { label: 'Completion Rate', value: '88.5%', change: '+4.2% vs target', icon: 'workspace_premium', color: T.purple, bg: T.purpleDim },
  { label: 'Avg Proficiency Gain', value: '+2.4 pts', change: 'Per completed course', icon: 'trending_up', color: T.indigo, bg: '#eef2ff' },
  { label: 'Efficiency Savings', value: '+$1.2M', change: 'This fiscal year', icon: 'savings', color: '#7c3aed', bg: '#f5f3ff' },
]

const SKILLS_GAP_DATA = [
  { name: 'Engineering', value: 72 },
  { name: 'Sales', value: 58 },
  { name: 'Operations', value: 84 },
  { name: 'Marketing', value: 65 },
  { name: 'Leadership', value: 79 },
]

const TRENDING_SKILLS = [
  { skill: 'AI & Machine Learning', growth: '+48%', employees: 234 },
  { skill: 'Cloud Architecture', growth: '+35%', employees: 189 },
  { skill: 'Data Analysis', growth: '+29%', employees: 312 },
  { skill: 'Cybersecurity', growth: '+22%', employees: 156 },
]

const DEPT_WINS = [
  { dept: 'Engineering', win: 'Achieved 100% AWS certification target', icon: 'emoji_events' },
  { dept: 'Sales', win: '32% increase in product knowledge scores', icon: 'trending_up' },
  { dept: 'Operations', win: 'Lean methodology rollout: 94% pass rate', icon: 'check_circle' },
]

const AI_INSIGHTS = [
  { insight: 'Sales department has a 42-point proficiency gap in "Consultative Selling". Recommend deploying the new module Q1 to address the $340K revenue risk.', urgency: 'High Priority', urgencyColor: T.error, urgencyBg: '#fef2f2' },
  { insight: 'At current completion rates, Engineering will hit 100% cloud certification by March. Consider early-access to advanced AWS specialty tracks.', urgency: 'Opportunity', urgencyColor: T.success, urgencyBg: '#f0fdf4' },
]

const maxVal = Math.max(...SKILLS_GAP_DATA.map(d => d.value))

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

export default function EnterpriseROIPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Workforce ROI & Analytics</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Measure the business impact of your enterprise learning programs.</p>
          </div>
          <span style={{ fontSize: 12, fontWeight: 700, background: T.bg, border: `1px solid ${T.border}`, padding: '6px 14px', borderRadius: 10, color: T.textMuted }}>FY 2023–24</span>
        </div>

        {/* KPI Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 28 }}>
          {KPIS.map(k => (
            <div key={k.label} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: '20px 18px' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: k.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: k.color }}>{k.icon}</span>
              </div>
              <div style={{ fontFamily: T.fontHead, fontSize: 26, fontWeight: 800, color: T.textPrimary, lineHeight: 1, marginBottom: 4 }}>{k.value}</div>
              <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 4 }}>{k.label}</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: T.success }}>{k.change}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20, marginBottom: 20 }}>
          {/* Skills Gap Chart */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div>
                <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary }}>Skills Gap by Department</div>
                <p style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>Proficiency vs. target (100%)</p>
              </div>
              <button style={{ fontSize: 12, color: T.purple, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>Export</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, height: 140 }}>
              {SKILLS_GAP_DATA.map(d => (
                <div key={d.name} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: T.purple }}>{d.value}%</div>
                  <div style={{ width: '100%', background: T.purple, borderRadius: '4px 4px 0 0', height: `${(d.value / maxVal) * 100}px` }} />
                  <div style={{ fontSize: 10, color: T.textMuted, textAlign: 'center' }}>{d.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Skills */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.purple }}>trending_up</span>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary }}>Trending Skills</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {TRENDING_SKILLS.map(s => (
                <div key={s.skill}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: T.textPrimary }}>{s.skill}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: T.success }}>{s.growth}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ flex: 1, height: 5, background: T.border + '60', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${(s.employees / 350) * 100}%`, background: T.purple, borderRadius: 3 }} />
                    </div>
                    <span style={{ fontSize: 11, color: T.textMuted }}>{s.employees}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 14, fontSize: 11, color: T.textMuted }}>
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>group</span>
              Employees actively enrolled
            </div>
          </div>
        </div>

        {/* Department Wins */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 20 }}>
          <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary, marginBottom: 16 }}>Department Wins This Quarter</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
            {DEPT_WINS.map(w => (
              <div key={w.dept} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 16px', background: T.bg, borderRadius: 12 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 24, color: T.purple }}>{w.icon}</span>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: T.purple, marginBottom: 4 }}>{w.dept}</div>
                  <div style={{ fontSize: 13, color: T.textPrimary }}>{w.win}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Strategic Insights */}
        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 16, padding: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <span style={{ fontSize: 16, color: T.success }}>✦</span>
            <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary }}>AI Strategic Insights</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {AI_INSIGHTS.map((item, i) => (
              <div key={i} style={{ padding: '14px 16px', background: T.surface, borderRadius: 12, border: `1px solid ${T.success}20` }}>
                <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 20, background: item.urgencyBg, color: item.urgencyColor, display: 'inline-block', marginBottom: 8 }}>{item.urgency}</span>
                <p style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.6 }}>{item.insight}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
