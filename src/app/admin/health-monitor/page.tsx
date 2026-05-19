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
  { icon: 'monitor_heart', label: 'System Health', href: '/admin/health-monitor', active: true },
]

const KPI = [
  { label: 'Total Monthly OpEx', value: '$4.2M', badge: null, delta: '↓ 1.4% vs last month', deltaUp: true, note: 'Forecasted 2% reduction in energy overhead for Q4.' },
  { label: 'Staff Attendance', value: '94.2%', badge: 'LIVE', badgeColor: T.ai, delta: 'vs target 95%', deltaUp: false, note: '3 campuses flagged: London, Jakarta, Berlin' },
  { label: 'Facility Issues', value: '12 Open', badge: 'CRITICAL', badgeColor: T.error, delta: 'Tickets open', deltaUp: false, note: 'HVAC Failure - Tokyo Hub · Power Grid - Sao Paulo' },
]

const CAMPUSES = [
  { name: 'London Academy', detail: 'Attendance 91%', status: 'Watchlist', isEmergency: false },
  { name: 'Tokyo Hub', detail: 'HVAC Outage', status: 'Emergency', isEmergency: true },
]

const LOG = [
  { icon: 'check_circle', label: 'Sydney Campus Reopened', detail: 'Maintenance completed 14:20 GMT', color: T.ai },
  { icon: 'warning', label: 'Security Alert — Berlin', detail: 'Unauthorized access attempt at Gate 3', color: T.error },
  { icon: 'payments', label: 'Q3 Budget Reconciliation', detail: 'New York Center approved extra funding', color: T.primary },
  { icon: 'person', label: 'New Dean Appointment', detail: 'Dr. Aris V. confirmed for Jakarta Lab', color: '#7c3aed' },
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

export default function AdminHealthMonitorPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 4 }}>EduWorld Global</p>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Operational Overview</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Real-time status · 14 global campuses</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 12, color: T.textMuted }}>Last 24 Hours</span>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span>Export Report
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
          {KPI.map(k => (
            <div key={k.label} style={{ background: T.surface, border: `1px solid ${k.badge === 'CRITICAL' ? T.error + '60' : T.border}`, borderRadius: 14, padding: '18px 16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontSize: 11, color: T.textMuted, fontWeight: 600 }}>{k.label}</span>
                {k.badge && (
                  <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 20, background: k.badgeColor + '20', color: k.badgeColor }}>{k.badge}</span>
                )}
              </div>
              <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 26, color: T.textPrimary, marginBottom: 4 }}>{k.value}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: k.deltaUp ? T.ai : T.xp, marginBottom: 4 }}>{k.delta}</div>
              <div style={{ fontSize: 11, color: T.textMuted }}>{k.note}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {/* Global Resource Distribution */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ marginBottom: 16 }}>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 4 }}>Global Resource Distribution</h2>
              <p style={{ fontSize: 12, color: T.textMuted }}>Staff Density vs. Facility Utilization</p>
            </div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
              {['Staffing', 'Facilities'].map((t, i) => (
                <button key={t} style={{ padding: '6px 14px', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer', background: i === 0 ? T.primary : 'transparent', color: i === 0 ? '#fff' : T.textMuted, border: i === 0 ? 'none' : `1px solid ${T.border}` }}>{t}</button>
              ))}
            </div>
            {/* Map Placeholder */}
            <div style={{ background: T.bg, borderRadius: 12, height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, border: `1px solid ${T.border}` }}>
              <div style={{ textAlign: 'center' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 40, color: T.textMuted }}>public</span>
                <div style={{ fontSize: 12, color: T.textMuted, marginTop: 8 }}>Global campus map visualization</div>
              </div>
            </div>
            {/* Campus Watchlist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
              {CAMPUSES.map(c => (
                <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', background: T.bg, borderRadius: 10 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18, color: c.isEmergency ? T.error : T.xp, flexShrink: 0 }}>warning</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 13, color: T.textPrimary }}>{c.name}</div>
                    <div style={{ fontSize: 12, color: T.textMuted }}>{c.detail}</div>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 20, background: c.isEmergency ? T.error + '20' : T.xp + '20', color: c.isEmergency ? T.error : T.xp }}>{c.status}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: T.textMuted }}>
              <span>Active Campuses: <strong style={{ color: T.textPrimary }}>14</strong></span>
              <span>Global Reach: <strong style={{ color: T.textPrimary }}>8.2k Staff</strong></span>
            </div>
          </div>

          {/* Operations Log + AI Insight */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Operations Log</h2>
                <span style={{ fontSize: 11, color: T.textMuted }}>Last updated 2 mins ago</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {LOG.map(l => (
                  <div key={l.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '10px 12px', background: T.bg, borderRadius: 10 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18, color: l.color, flexShrink: 0 }}>{l.icon}</span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 13, color: T.textPrimary }}>{l.label}</div>
                      <div style={{ fontSize: 12, color: T.textMuted }}>{l.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button style={{ fontSize: 13, color: T.primary, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', marginTop: 12 }}>View All Activity →</button>
            </div>

            {/* AI Strategic Efficiency Insight */}
            <div style={{ background: T.ai + '08', border: `1px solid ${T.ai}30`, borderRadius: 14, padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                <span style={{ fontSize: 14, color: T.ai }}>✦</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: T.ai }}>Strategic Efficiency Insight</span>
              </div>
              <p style={{ fontSize: 13, color: T.textMuted, marginBottom: 14 }}>
                Shifting ~15% of remote operations from London → Berlin Hub shows projected savings of{' '}
                <strong style={{ color: T.textPrimary }}>$12k/week</strong>. Risk profile: Low.
              </p>
              <div style={{ display: 'flex', gap: 8 }}>
                <button style={{ flex: 1, padding: '8px 0', background: T.ai, border: 'none', borderRadius: 8, fontSize: 13, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>Apply Simulation</button>
                <button style={{ flex: 1, padding: '8px 0', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 13, color: T.textMuted, cursor: 'pointer' }}>Review Full Report</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
