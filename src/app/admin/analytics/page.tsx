'use client'
import Link from 'next/link'

const T = {
  bg: '#f0f2f8', surface: '#ffffff', primary: '#003f7a',
  ai: '#10B981', xp: '#F59E0B', textPrimary: '#191c20',
  textMuted: '#424750', border: '#c2c6d2', error: '#ba1a1a',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
  sidebarBg: '#0d1b4b', sidebarText: '#c8d0e8', sidebarActive: '#1e3372',
}

const sidebarItems = [
  { icon: 'dashboard', label: 'Dashboard', href: '/admin/dashboard' },
  { icon: 'person_add', label: 'Student Intake', href: '/admin/student-intake' },
  { icon: 'groups', label: 'Students', href: '/admin/students' },
  { icon: 'school', label: 'Teachers', href: '/admin/teacher-roster' },
  { icon: 'analytics', label: 'Analytics', href: '/admin/analytics', active: true },
  { icon: 'calendar_month', label: 'Events', href: '/admin/events' },
  { icon: 'payments', label: 'Finance', href: '/admin/finance' },
  { icon: 'policy', label: 'Roles & Permissions', href: '/admin/roles' },
  { icon: 'menu_book', label: 'Curriculum', href: '/admin/curriculum' },
  { icon: 'monitor_heart', label: 'System Health', href: '/admin/health-monitor' },
]

const KPI = [
  { label: 'Avg. Academic Score', value: '82.4%', delta: '+4.2%', up: true },
  { label: 'National Percentile', value: 'Top 8%', delta: '+1.1%', up: true },
  { label: 'Grade Improvement', value: '76.8%', delta: '-0.4%', up: false },
  { label: 'Student Retention', value: '98.2%', delta: '+0.8%', up: true },
]

const SUBJECTS = [
  { name: 'Mathematics', score: 91, change: '+5%', up: true },
  { name: 'Science & Technology', score: 88, change: '+2%', up: true },
  { name: 'English Literature', score: 74, change: '-3%', up: false },
  { name: 'Humanities', score: 82, change: '0%', up: null },
  { name: 'Creative Arts', score: 68, change: '+8%', up: true },
]

const SKILL_TAGS = [
  { label: 'STEM Focus', bg: '#dbeafe', text: '#1d4ed8' },
  { label: 'Arts Deficit', bg: '#fee2e2', text: '#b91c1c' },
  { label: 'Literacy Peak', bg: '#dcfce7', text: '#16a34a' },
  { label: 'Critical Thinking', bg: '#ede9fe', text: '#7c3aed' },
]

function Sidebar() {
  return (
    <aside style={{ width: 240, minHeight: '100vh', background: T.sidebarBg, display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0 }}>
      <div style={{ padding: '0 20px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: '#ffffff' }}>EduWorld</div>
        <span style={{ display: 'inline-block', marginTop: 4, fontSize: 11, fontWeight: 600, color: '#93c5fd', background: 'rgba(147,197,253,0.15)', borderRadius: 6, padding: '2px 8px' }}>Admin</span>
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

export default function AdminAnalyticsPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 4 }}>London Central Academy</p>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Academic Intelligence Hub</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Performance benchmarking for Term 2 (2025-2026)</p>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span>Export Report
          </button>
        </div>

        {/* KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
          {KPI.map(k => (
            <div key={k.label} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: '18px 16px' }}>
              <div style={{ fontSize: 11, color: T.textMuted, fontWeight: 600, marginBottom: 6 }}>{k.label}</div>
              <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 24, color: T.textPrimary, marginBottom: 6 }}>{k.value}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 700, color: k.up ? T.ai : T.error }}>
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>{k.up ? 'trending_up' : 'trending_down'}</span>
                {k.delta}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {/* Subject Performance */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Subject Performance</h2>
              <div style={{ display: 'flex', gap: 6 }}>
                {['Current Term', 'Last Term'].map((t, i) => (
                  <button key={t} style={{ padding: '5px 12px', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer', background: i === 0 ? T.primary : 'transparent', color: i === 0 ? '#fff' : T.textMuted, border: i === 0 ? 'none' : `1px solid ${T.border}` }}>{t}</button>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {SUBJECTS.map(s => (
                <div key={s.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 4 }}>
                    <span style={{ color: T.textPrimary }}>{s.name}</span>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      <span style={{ fontWeight: 700, fontSize: 11, color: s.up === true ? T.ai : s.up === false ? T.error : T.textMuted }}>{s.change}</span>
                      <span style={{ fontWeight: 800, color: T.textPrimary }}>{s.score}%</span>
                    </div>
                  </div>
                  <div style={{ height: 8, background: T.border + '60', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${s.score}%`, background: s.score >= 85 ? T.ai : s.score >= 75 ? T.primary : T.xp, borderRadius: 4 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Skill Gap */}
            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 14 }}>Skill Gap Matrix</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
                {SKILL_TAGS.map(t => (
                  <span key={t.label} style={{ fontSize: 12, fontWeight: 700, padding: '5px 12px', borderRadius: 20, background: t.bg, color: t.text }}>{t.label}</span>
                ))}
              </div>
              <div style={{ background: T.ai + '08', border: `1px solid ${T.ai}30`, borderRadius: 10, padding: '12px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 4 }}>
                  <span style={{ fontSize: 12, color: T.ai }}>✦</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: T.ai }}>AI Insight</span>
                </div>
                <p style={{ fontSize: 12, color: T.textMuted }}>Creative Arts shows significant upward momentum (+8%), but remains an institutional gap relative to National Standards (Top 15%). Consider shifting STEM auxiliary funding toward interdisciplinary programs.</p>
              </div>
            </div>

            {/* Regional Comparison */}
            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 6 }}>Regional Comparison</h2>
              <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 14 }}>vs. Greater London District & National Averages</p>
              <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
                {['District', 'National', 'Global'].map((t, i) => (
                  <button key={t} style={{ padding: '5px 12px', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer', background: i === 0 ? T.primary : 'transparent', color: i === 0 ? '#fff' : T.textMuted, border: i === 0 ? 'none' : `1px solid ${T.border}` }}>{t}</button>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {[
                  { label: 'Academy Rank', value: '#12 in Greater London' },
                  { label: 'vs. District Avg', value: '+14.2%' },
                  { label: 'Institutional Percentile', value: '94th' },
                  { label: 'Outperforming', value: '822 institutions' },
                ].map(m => (
                  <div key={m.label} style={{ background: T.bg, borderRadius: 10, padding: '10px 12px', textAlign: 'center' }}>
                    <div style={{ fontSize: 10, color: T.textMuted, marginBottom: 2 }}>{m.label}</div>
                    <div style={{ fontWeight: 700, fontSize: 13, color: T.textPrimary }}>{m.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button style={{ width: '100%', marginTop: 20, padding: '12px 0', background: T.ai, color: '#fff', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <span style={{ fontSize: 14 }}>✦</span>Ask Intelligence AI
        </button>
      </main>
    </div>
  )
}
