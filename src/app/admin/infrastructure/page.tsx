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

const STATS = [
  { icon: 'laptop', label: 'Laptops Total', value: '1,240' },
  { icon: 'apartment', label: 'Learning Spaces', value: '84' },
  { icon: 'build', label: 'Pending Repairs', value: '12' },
  { icon: 'shield', label: 'Audit Score', value: '98.2%' },
]

const LICENSES = [
  { label: 'Academic Journal Licenses', used: 412, total: 500, unit: '' },
  { label: 'Design Software (Adobe Suite)', used: 88, total: 100, unit: '' },
  { label: 'Cloud Storage (Student Nodes)', used: 1200, total: 2000, unit: 'PB' },
]

const CALENDAR = [
  { day: 'MON', event: 'Main Hall: Graduation Rehearsal (09:00)' },
  { day: 'TUE', event: 'Science Lab B: Bio-Genetics (14:00)' },
  { day: 'WED', event: 'Media Suite: Podcast Prep (11:00)' },
  { day: 'THU', event: null },
  { day: 'FRI', event: 'Theater: Drama Society (16:30)' },
]

const LOGS = [
  { asset: 'SmartBoard Calibration — Rm 402', type: 'Hardware', staff: 'Arjun V.', time: 'OCT 24, 08:42 AM', status: 'COMPLETED', color: T.ai },
  { asset: 'Digital Library Server Maintenance', type: 'Network', staff: 'SYSTEM (AI)', time: 'OCT 24, 02:15 AM', status: 'AUTO-RESOLVED', color: T.ai },
  { asset: 'Asset Check-out: Laptop #L-902', type: 'Check-out', staff: 'Sarah L.', time: 'OCT 23, 04:55 PM', status: 'LOGGED', color: T.textMuted },
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

export default function AdminInfrastructurePage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Infrastructure & Asset Tracking</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Real-time monitoring · London Central Academy</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ padding: '9px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textMuted, cursor: 'pointer' }}>⬇ Export</button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 18px', background: T.primary, border: 'none', borderRadius: 10, fontSize: 13, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>add</span>Add New Asset
            </button>
          </div>
        </div>

        {/* Stat Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 24 }}>
          {STATS.map(s => (
            <div key={s.label} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: '18px 16px', textAlign: 'center' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 28, color: T.primary, display: 'block', marginBottom: 8 }}>{s.icon}</span>
              <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 22, color: T.textPrimary, marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: T.textMuted }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
          {/* Facility Insights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>Science Lab B</div>
                <span style={{ fontSize: 10, fontWeight: 700, background: T.ai + '15', color: T.ai, padding: '2px 8px', borderRadius: 20 }}>✦ Optimized</span>
              </div>
              <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 14 }}>Current Peak: 92% (Tuesdays)</div>
              <div style={{ background: T.xp + '08', border: `1px solid ${T.xp}40`, borderRadius: 10, padding: '12px 14px', marginBottom: 14 }}>
                <div style={{ fontWeight: 700, fontSize: 12, color: '#92400e', marginBottom: 6 }}>⚠ Maintenance Required</div>
                <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 4 }}>Teacher Laptops (Batch C) — Battery health below 40%</div>
                <div style={{ fontSize: 12, color: T.textMuted }}>HVAC Unit — Block B — Filter replacement overdue</div>
              </div>
              <button style={{ width: '100%', padding: '8px 0', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>Dispatch Maintenance Team</button>
            </div>

            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 20 }}>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary, marginBottom: 16 }}>Digital Library</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {LICENSES.map(l => (
                  <div key={l.label}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}>
                      <span style={{ color: T.textMuted }}>{l.label}</span>
                      <span style={{ fontWeight: 700, color: T.textPrimary }}>{l.used}/{l.total}{l.unit}</span>
                    </div>
                    <div style={{ height: 6, background: T.border + '60', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${(l.used / l.total) * 100}%`, background: (l.used / l.total) > 0.9 ? T.xp : T.primary, borderRadius: 3 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Space Booking */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary }}>Space Booking</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: T.textMuted }}>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 16 }}>‹</button>
                <span style={{ fontSize: 12 }}>Oct 24–30</span>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 16 }}>›</button>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {CALENDAR.map(c => (
                <div key={c.day} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', background: c.event ? T.bg : 'transparent', borderRadius: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: T.textMuted, width: 32, flexShrink: 0 }}>{c.day}</span>
                  {c.event ? (
                    <span style={{ fontSize: 12, color: T.textPrimary }}>{c.event}</span>
                  ) : (
                    <button style={{ fontSize: 12, color: T.primary, background: 'none', border: 'none', cursor: 'pointer' }}>+ Add Booking</button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Audit Log */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: `1px solid ${T.border}` }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Audit & Log Feed</h2>
            <button style={{ padding: '6px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.textMuted, cursor: 'pointer' }}>Filter Logs</button>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: T.bg, borderBottom: `1px solid ${T.border}` }}>
                {['Asset / Event', 'Type', 'Staff', 'Timestamp', 'Status'].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '10px 20px', fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: 'uppercase' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {LOGS.map((l, i) => (
                <tr key={l.asset} style={{ borderBottom: i < LOGS.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                  <td style={{ padding: '14px 20px', fontWeight: 600, fontSize: 13, color: T.textPrimary }}>{l.asset}</td>
                  <td style={{ padding: '14px 20px', fontSize: 12, color: T.textMuted }}>{l.type}</td>
                  <td style={{ padding: '14px 20px', fontSize: 12, color: T.textMuted }}>{l.staff}</td>
                  <td style={{ padding: '14px 20px', fontSize: 12, color: T.textMuted, whiteSpace: 'nowrap' }}>{l.time}</td>
                  <td style={{ padding: '14px 20px', fontSize: 11, fontWeight: 700, color: l.color }}>{l.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
