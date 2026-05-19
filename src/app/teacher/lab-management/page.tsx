'use client'
import Link from 'next/link'

const T = {
  bg: '#f9f9ff', surface: '#ffffff', primary: '#003f7a',
  ai: '#10B981', xp: '#F59E0B', textPrimary: '#191c20',
  textMuted: '#424750', border: '#c2c6d2', error: '#ba1a1a',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
}

const sidebarItems = [
  { icon: 'dashboard', label: 'Dashboard', href: '/teacher/dashboard' },
  { icon: 'school', label: 'My Classes', href: '/teacher/classes' },
  { icon: 'assignment', label: 'Assignments', href: '/teacher/assignments' },
  { icon: 'analytics', label: 'Analytics', href: '/teacher/student-insights' },
  { icon: 'people', label: 'Students', href: '/teacher/student-groups' },
  { icon: 'calendar_month', label: 'Calendar', href: '/teacher/calendar' },
  { icon: 'inbox', label: 'Inbox', href: '/teacher/inbox' },
]

const EQUIPMENT = [
  { name: 'Electron Microscope EM-400', code: 'LAB-001', status: 'available', condition: 'Excellent', checked: 'Nov 12' },
  { name: 'Spectrometer Array Set', code: 'LAB-002', status: 'in-use', condition: 'Good', checked: 'Nov 14' },
  { name: 'High-Voltage PSU (×4)', code: 'LAB-003', status: 'maintenance', condition: 'Needs Calibration', checked: 'Nov 10' },
  { name: 'Oscilloscope Bank (×6)', code: 'LAB-004', status: 'available', condition: 'Excellent', checked: 'Nov 13' },
  { name: 'Bunsen Burner Set (×12)', code: 'LAB-005', status: 'available', condition: 'Good', checked: 'Nov 11' },
]

const SESSIONS = [
  { title: 'Quantum Interference Lab', date: 'Nov 18, 9:00 AM', students: 24, room: 'Lab 3A', confirmed: true },
  { title: 'Spectrometry Practical', date: 'Nov 20, 11:00 AM', students: 18, room: 'Lab 2B', confirmed: false },
  { title: 'Electromagnetic Induction Demo', date: 'Nov 22, 9:00 AM', students: 26, room: 'Lab 3A', confirmed: true },
]

const statusColor: Record<string, string> = { available: T.ai, 'in-use': '#0891b2', maintenance: T.xp }

function Sidebar() {
  return (
    <aside style={{ width: 260, minHeight: '100vh', background: T.surface, borderRight: `1px solid ${T.border}`, display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0 }}>
      <div style={{ padding: '0 20px 24px', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: T.primary }}>EduWorld</div>
        <span style={{ display: 'inline-block', marginTop: 4, fontSize: 11, fontWeight: 600, color: T.primary, background: '#e8f0fe', borderRadius: 6, padding: '2px 8px' }}>Teacher</span>
      </div>
      <nav style={{ flex: 1, padding: '16px 12px' }}>
        {sidebarItems.map(item => (
          <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, marginBottom: 2, background: 'transparent', borderLeft: '3px solid transparent', color: T.textMuted, fontFamily: T.fontBody, fontSize: 14 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default function TeacherLabManagementPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Practical & Lab Management</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>AP Physics · Room 3A · Fall 2025</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span>Safety Report
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 18px', background: T.primary, border: 'none', borderRadius: 10, fontSize: 13, color: '#fff', cursor: 'pointer', fontWeight: 600 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>add</span>Book Session
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
          {[
            { label: 'Equipment Items', value: '42', color: T.primary },
            { label: 'Available', value: '38', color: T.ai },
            { label: 'In Maintenance', value: '3', color: T.xp },
            { label: 'Sessions This Month', value: '12', color: '#7c3aed' },
          ].map(s => (
            <div key={s.label} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: '18px 16px', textAlign: 'center' }}>
              <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 26, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: 12, color: T.textMuted, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Alert */}
        <div style={{ background: T.xp + '10', border: `1px solid ${T.xp}30`, borderRadius: 14, padding: '14px 18px', marginBottom: 24, display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.xp, marginTop: 1 }}>warning</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>High-Voltage PSU requires calibration before next practical session.</div>
            <div style={{ fontSize: 12, color: T.textMuted, marginTop: 3 }}>Schedule calibration with technician — next lab session is Nov 18. Allow 48h for service.</div>
          </div>
          <button style={{ padding: '7px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.primary, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>Schedule</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {/* Equipment */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Equipment Inventory</h2>
              <button style={{ fontSize: 13, color: T.primary, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {EQUIPMENT.map(e => (
                <div key={e.code} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', background: T.bg, borderRadius: 10 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 13, color: T.textPrimary }}>{e.name}</div>
                    <div style={{ fontSize: 11, color: T.textMuted }}>{e.code} · {e.condition} · Checked {e.checked}</div>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, background: statusColor[e.status] + '20', color: statusColor[e.status], whiteSpace: 'nowrap' }}>
                    {e.status === 'in-use' ? 'In Use' : e.status.charAt(0).toUpperCase() + e.status.slice(1)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sessions */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 16 }}>Upcoming Lab Sessions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {SESSIONS.map(s => (
                <div key={s.title} style={{ border: `1px solid ${T.border}`, borderRadius: 12, padding: '14px 16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>{s.title}</div>
                    <span className="material-symbols-outlined" style={{ fontSize: 18, color: s.confirmed ? T.ai : T.xp }}>
                      {s.confirmed ? 'check_circle' : 'schedule'}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: 12, fontSize: 12, color: T.textMuted, flexWrap: 'wrap' }}>
                    <span>📅 {s.date}</span>
                    <span>👥 {s.students} students</span>
                    <span>📍 {s.room}</span>
                  </div>
                </div>
              ))}
            </div>
            <button style={{ width: '100%', marginTop: 14, padding: '10px 0', background: T.primary, color: '#fff', border: 'none', borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>+ Book New Session</button>
          </div>
        </div>
      </main>
    </div>
  )
}
