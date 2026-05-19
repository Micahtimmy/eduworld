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
  { icon: 'analytics', label: 'Analytics', href: '/admin/analytics' },
  { icon: 'calendar_month', label: 'Events', href: '/admin/events' },
  { icon: 'payments', label: 'Finance', href: '/admin/finance' },
  { icon: 'policy', label: 'Roles & Permissions', href: '/admin/roles' },
  { icon: 'menu_book', label: 'Curriculum', href: '/admin/curriculum' },
  { icon: 'monitor_heart', label: 'System Health', href: '/admin/health-monitor' },
]

type TrendDir = 'down' | 'flat' | 'up'
const STUDENTS: { initials: string; name: string; risk: number; trigger: string; dir: TrendDir }[] = [
  { initials: 'ER', name: 'Elena Rodriguez', risk: 92, trigger: 'Absence (4 days)', dir: 'down' },
  { initials: 'JV', name: 'Julian Vane', risk: 88, trigger: 'Grade Velocity', dir: 'down' },
  { initials: 'SJ', name: 'Sarah Jenkins', risk: 74, trigger: 'Behavioral Flag', dir: 'flat' },
]

const BARS = [
  { w: 'Wk 12', v: 92, risk: false, proj: false },
  { w: 'Wk 13', v: 94, risk: false, proj: false },
  { w: 'Wk 14', v: 88, risk: false, proj: false },
  { w: 'Current', v: 62, risk: true, proj: false },
  { w: 'Projected', v: 78, risk: false, proj: true },
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
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 8, marginBottom: 2, background: 'transparent', color: T.sidebarText, fontFamily: T.fontBody, fontWeight: 400, fontSize: 13 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{item.icon}</span>
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default function AdminStudentRiskPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
              <span style={{ fontSize: 14, color: T.ai }}>✦</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: T.ai, textTransform: 'uppercase', letterSpacing: '0.08em' }}>AI-Driven Forecasting</span>
            </div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Student Risk & Retention</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Churn probability modeling across attendance, behavioral triggers, and grade velocity (90-day window).</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span>Export Risk Report
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 18px', background: T.primary, border: 'none', borderRadius: 10, fontSize: 13, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>send</span>Bulk Notify Stakeholders
            </button>
          </div>
        </div>

        {/* Retention Forecast */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Retention Forecast</h2>
            <div style={{ display: 'flex', gap: 6 }}>
              {['All Departments', 'Science & Tech', 'Humanities'].map((t, i) => (
                <button key={t} style={{ padding: '5px 12px', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer', background: i === 0 ? T.primary : 'transparent', color: i === 0 ? '#fff' : T.textMuted, border: i === 0 ? 'none' : `1px solid ${T.border}` }}>{t}</button>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end', height: 110, marginBottom: 16 }}>
            {BARS.map(d => (
              <div key={d.w} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <div style={{ width: '100%', background: d.risk ? T.error : d.proj ? T.primary + '40' : T.primary, borderRadius: '4px 4px 0 0', height: `${d.v}%` }} />
                <div style={{ fontSize: 11, color: T.textMuted }}>{d.w}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: d.risk ? T.error : T.textPrimary }}>{d.v}%</div>
              </div>
            ))}
          </div>
          <div style={{ background: T.xp + '08', border: `1px solid ${T.xp}40`, borderRadius: 10, padding: '12px 14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <span style={{ fontSize: 13, color: T.xp }}>✦</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#92400e' }}>AI Insight</span>
            </div>
            <p style={{ fontSize: 12, color: '#92400e', marginBottom: 8 }}>A 14% drop in Year 11 engagement detected. Secondary cause: Regional transit strike affecting attendance for 42 students.</p>
            <button style={{ fontSize: 12, color: '#92400e', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer' }}>Automate Remote Learning Passes →</button>
          </div>
        </div>

        {/* High-Risk Students */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>High-Risk Students</h2>
            <span style={{ fontSize: 11, fontWeight: 700, background: T.error + '15', color: T.error, padding: '3px 10px', borderRadius: 20 }}>42 Alerts</span>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${T.border}` }}>
                {['Student Name', 'Risk Score', 'Main Trigger', 'Trend', 'Action'].map(h => (
                  <th key={h} style={{ textAlign: 'left', paddingBottom: 10, fontSize: 11, fontWeight: 700, color: T.textMuted }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {STUDENTS.map((s, i) => (
                <tr key={s.name} style={{ borderBottom: i < STUDENTS.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                  <td style={{ padding: '14px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 32, height: 32, borderRadius: '50%', background: T.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12, color: T.primary }}>{s.initials}</div>
                      <span style={{ fontWeight: 600, fontSize: 14, color: T.textPrimary }}>{s.name}</span>
                    </div>
                  </td>
                  <td style={{ padding: '14px 0' }}>
                    <span style={{ fontWeight: 700, fontSize: 14, color: s.risk >= 90 ? T.error : s.risk >= 80 ? T.xp : T.textPrimary }}>{s.risk}%</span>
                  </td>
                  <td style={{ padding: '14px 0', fontSize: 12, color: T.textMuted }}>{s.trigger}</td>
                  <td style={{ padding: '14px 0' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 20, color: s.dir === 'down' ? T.error : s.dir === 'up' ? T.ai : T.textMuted }}>
                      {s.dir === 'down' ? 'trending_down' : s.dir === 'up' ? 'trending_up' : 'remove'}
                    </span>
                  </td>
                  <td style={{ padding: '14px 0' }}>
                    <button style={{ width: 32, height: 32, borderRadius: 8, background: T.primary + '10', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.primary }}>mail</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button style={{ fontSize: 13, color: T.primary, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', marginTop: 12 }}>View Full Risk Register →</button>
        </div>

        {/* Academy Health Index */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Global Academy Health Index</h2>
            <span style={{ fontSize: 11, fontWeight: 700, background: T.xp + '20', color: T.xp, padding: '3px 10px', borderRadius: 20 }}>⭐ Top Tier Academy</span>
          </div>
          <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 14 }}>Goal: 95% retention for Q3</p>
          <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
            <span style={{ color: T.textMuted }}>Current Stability</span>
            <span style={{ fontWeight: 700, color: T.textPrimary }}>89.2% / 95.0% target</span>
          </div>
          <div style={{ height: 12, background: T.border + '60', borderRadius: 6, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '89.2%', background: T.primary, borderRadius: 6 }} />
          </div>
        </div>
      </main>
    </div>
  )
}
