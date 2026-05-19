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
  { icon: 'school', label: 'Teachers', href: '/admin/teacher-roster', active: true },
  { icon: 'analytics', label: 'Analytics', href: '/admin/analytics' },
  { icon: 'calendar_month', label: 'Events', href: '/admin/events' },
  { icon: 'payments', label: 'Finance', href: '/admin/finance' },
  { icon: 'policy', label: 'Roles & Permissions', href: '/admin/roles' },
  { icon: 'menu_book', label: 'Curriculum', href: '/admin/curriculum' },
  { icon: 'monitor_heart', label: 'System Health', href: '/admin/health-monitor' },
]

const TEACHERS = [
  { initials: 'SJ', name: 'Sarah Jenkins', role: 'Senior Lead', dept: 'Science', subjects: 'AP Physics, Molecular Bio', workload: 92, status: 'Active' },
  { initials: 'MT', name: 'Marcus Thorne', role: 'Department Head', dept: 'Humanities', subjects: 'Ethics, World History', workload: 68, status: 'Active' },
  { initials: 'ER', name: 'Elena Rossi', role: 'Faculty Member', dept: 'Arts', subjects: 'Visual Arts, Digital Design', workload: 45, status: 'On Leave' },
  { initials: 'JV', name: 'Julian Vane', role: 'Research Lead', dept: 'Science', subjects: 'Chemistry, Theoretical Phys', workload: 88, status: 'Active' },
  { initials: 'AM', name: 'Amara Mensah', role: 'Faculty Member', dept: 'Mathematics', subjects: 'Calculus, Statistics', workload: 74, status: 'Active' },
]

const STATUS_C: Record<string, { bg: string; text: string }> = {
  Active: { bg: T.ai + '20', text: T.ai },
  'On Leave': { bg: T.xp + '20', text: T.xp },
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

export default function AdminTeacherRosterPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Teacher Roster & Workload</h1>
          <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>London Central Academy · Faculty management and AI burnout monitoring.</p>
        </div>

        {/* Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
          {[
            { label: 'Total Faculty', value: '142', trend: '+2.4%', up: true },
            { label: 'Avg. Workload', value: '82%', trend: '-1.2%', up: false },
            { label: 'Burnout Risk (AI)', value: '3 Low', trend: 'Optimized', up: null },
            { label: 'On Leave', value: '9', trend: 'Stable', up: null },
          ].map(m => (
            <div key={m.label} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: '18px 16px' }}>
              <div style={{ fontSize: 11, color: T.textMuted, fontWeight: 600, marginBottom: 6 }}>{m.label}</div>
              <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 26, color: T.textPrimary, marginBottom: 6 }}>{m.value}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: m.up === true ? T.ai : m.up === false ? T.xp : T.textMuted }}>{m.trend}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 16 }}>
          <select style={{ padding: '8px 14px', border: `1px solid ${T.border}`, borderRadius: 10, fontFamily: T.fontBody, fontSize: 13, color: T.textPrimary, background: T.surface, outline: 'none' }}>
            <option>All Departments</option>
            <option>Science</option>
            <option>Arts</option>
            <option>Humanities</option>
            <option>Mathematics</option>
          </select>
          <select style={{ padding: '8px 14px', border: `1px solid ${T.border}`, borderRadius: 10, fontFamily: T.fontBody, fontSize: 13, color: T.textPrimary, background: T.surface, outline: 'none' }}>
            <option>Any Status</option>
            <option>Active</option>
            <option>On Leave</option>
          </select>
          <span style={{ fontSize: 12, color: T.textMuted, marginLeft: 'auto' }}>Showing 142 teachers</span>
        </div>

        {/* Roster Table */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: T.bg, borderBottom: `1px solid ${T.border}` }}>
                {['Teacher Name', 'Department', 'Primary Subjects', 'Workload Score', 'Status', 'Action'].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '10px 20px', fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: 'uppercase' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TEACHERS.map((t, i) => (
                <tr key={t.name} style={{ borderBottom: i < TEACHERS.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                  <td style={{ padding: '14px 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 34, height: 34, borderRadius: '50%', background: T.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12, color: T.primary }}>{t.initials}</div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>{t.name}</div>
                        <div style={{ fontSize: 11, color: T.textMuted }}>{t.role}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '14px 20px', fontSize: 13, color: T.textMuted }}>{t.dept}</td>
                  <td style={{ padding: '14px 20px', fontSize: 12, color: T.textMuted }}>{t.subjects}</td>
                  <td style={{ padding: '14px 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 80, height: 6, background: T.border + '60', borderRadius: 3, overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${t.workload}%`, background: t.workload >= 85 ? T.error : t.workload >= 70 ? T.xp : T.ai, borderRadius: 3 }} />
                      </div>
                      <span style={{ fontSize: 12, fontWeight: 700, color: T.textPrimary }}>{t.workload}%</span>
                      {t.workload >= 85 && <span style={{ fontSize: 13, color: T.error }}>✦</span>}
                    </div>
                  </td>
                  <td style={{ padding: '14px 20px' }}>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, background: STATUS_C[t.status].bg, color: STATUS_C[t.status].text }}>{t.status}</span>
                  </td>
                  <td style={{ padding: '14px 20px' }}>
                    <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.primary, fontWeight: 600, cursor: 'pointer' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 14 }}>visibility</span>View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 20px', borderTop: `1px solid ${T.border}`, fontSize: 12, color: T.textMuted }}>
            <span>Showing 5 of 142</span>
            <div style={{ display: 'flex', gap: 4 }}>
              {['←', '1', '2', '3', '...', '12', '→'].map(p => (
                <button key={p + Math.random()} style={{ padding: '4px 10px', borderRadius: 6, border: p === '1' ? 'none' : `1px solid ${T.border}`, background: p === '1' ? T.primary : 'transparent', color: p === '1' ? '#fff' : T.textMuted, fontSize: 12, cursor: 'pointer' }}>{p}</button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
