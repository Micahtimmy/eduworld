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
  { icon: 'dashboard', label: 'Dashboard', href: '/admin/dashboard', active: true },
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

const STUDENTS = [
  { initials: 'AL', name: 'Ava Lawrence', id: '#STU-8821', grade: '11th Grade', status: 'Active' },
  { initials: 'BH', name: 'Benjamin Hayes', id: '#STU-7490', grade: '10th Grade', status: 'At Risk' },
  { initials: 'CM', name: 'Chloe Martinez', id: '#STU-9102', grade: '12th Grade', status: 'Active' },
  { initials: 'DC', name: 'David Chen', id: '#STU-6544', grade: '9th Grade', status: 'On Leave' },
  { initials: 'EP', name: 'Elena Patel', id: '#STU-8899', grade: '11th Grade', status: 'Active' },
]

const STATUS: Record<string, { bg: string; text: string }> = {
  Active: { bg: T.ai + '20', text: T.ai },
  'At Risk': { bg: T.error + '20', text: T.error },
  'On Leave': { bg: T.border + '60', text: T.textMuted },
}

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

export default function AdminDashboardPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Admin Console</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>System overview and critical metrics — London Central Academy</p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 700, background: T.ai + '20', color: T.ai, padding: '5px 12px', borderRadius: 20 }}>System Normal</span>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', background: T.ai + '15', border: `1px solid ${T.ai}40`, borderRadius: 10, fontSize: 12, color: T.ai, fontWeight: 600, cursor: 'pointer' }}>
              <span style={{ fontSize: 12 }}>✦</span>AI Assistant
            </button>
          </div>
        </div>

        {/* Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
          {[
            { label: 'Total Students', value: '4,281', trend: '+12 this week', up: true },
            { label: 'Active Teachers', value: '342', trend: 'Stable', up: null },
            { label: 'Attendance Rate', value: '94.2%', trend: '-1.8% vs last month', up: false },
            { label: '✦ AI Usage (Wkly)', value: '12.5k', trend: '+24% interactions', up: true },
          ].map(m => (
            <div key={m.label} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: '18px 20px' }}>
              <div style={{ fontSize: 12, color: T.textMuted, fontWeight: 600, marginBottom: 6 }}>{m.label}</div>
              <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 26, color: T.textPrimary, marginBottom: 6 }}>{m.value}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 700, color: m.up === true ? T.ai : m.up === false ? T.error : T.textMuted }}>
                {m.up !== null && <span className="material-symbols-outlined" style={{ fontSize: 14 }}>{m.up ? 'trending_up' : 'trending_down'}</span>}
                {m.trend}
              </div>
            </div>
          ))}
        </div>

        {/* AI Insights */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <span style={{ fontSize: 16, color: T.ai }}>✦</span>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>EduWorld AI Insights</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div style={{ background: T.xp + '08', border: `1px solid ${T.xp}40`, borderRadius: 12, padding: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.xp }}>warning</span>
                <span style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>Attendance Drop Alert</span>
              </div>
              <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 12 }}>Grade 10 cohort showing ~4.2% anomalous drop in unexcused absences, concentrated in afternoon STEM blocks.</p>
              <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', background: T.primary, color: '#fff', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                Investigate Cohort
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_right</span>
              </button>
            </div>
            <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 12, padding: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#3b82f6' }}>bar_chart</span>
                <span style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>Overdue Assignments Surge</span>
              </div>
              <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 12 }}>15% spike in missed deadlines for History class. Automated parent notification suggested.</p>
              <div style={{ display: 'flex', gap: 8 }}>
                <button style={{ padding: '7px 14px', background: T.primary, color: '#fff', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Draft Notices</button>
                <button style={{ padding: '7px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.textMuted, cursor: 'pointer' }}>Dismiss</button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 18px', background: T.primary, color: '#fff', border: 'none', borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>person_add</span>Add Student
          </button>
          <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 18px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>campaign</span>Broadcast
          </button>
        </div>

        {/* Student Directory */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', borderBottom: `1px solid ${T.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Student Directory</h2>
            <button style={{ fontSize: 13, color: T.primary, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${T.border}`, background: T.bg }}>
                {['Student Name', 'ID', 'Grade', 'Status', ''].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '10px 20px', fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: 'uppercase' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {STUDENTS.map((s, i) => (
                <tr key={s.id} style={{ borderBottom: i < STUDENTS.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                  <td style={{ padding: '12px 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 30, height: 30, borderRadius: '50%', background: T.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: T.primary }}>{s.initials}</div>
                      <span style={{ fontWeight: 600, fontSize: 14, color: T.textPrimary }}>{s.name}</span>
                    </div>
                  </td>
                  <td style={{ padding: '12px 20px', fontSize: 12, fontFamily: 'monospace', color: T.textMuted }}>{s.id}</td>
                  <td style={{ padding: '12px 20px', fontSize: 13, color: T.textMuted }}>{s.grade}</td>
                  <td style={{ padding: '12px 20px' }}>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, background: STATUS[s.status].bg, color: STATUS[s.status].text }}>{s.status}</span>
                  </td>
                  <td style={{ padding: '12px 20px', textAlign: 'right' }}>
                    <button style={{ fontSize: 12, color: T.textMuted, background: 'none', border: 'none', cursor: 'pointer' }}>⋯</button>
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
