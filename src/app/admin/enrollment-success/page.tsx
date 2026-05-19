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

export default function AdminEnrollmentSuccessPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 20, width: '100%', maxWidth: 440, padding: 40, textAlign: 'center' }}>
          {/* Success Icon */}
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 40, color: '#16a34a' }}>check_circle</span>
          </div>

          <h1 style={{ fontFamily: T.fontHead, fontSize: 22, fontWeight: 800, color: T.textPrimary, marginBottom: 16 }}>Student Successfully Enrolled</h1>

          <div style={{ marginBottom: 24 }}>
            <p style={{ fontSize: 14, color: T.textMuted, marginBottom: 12 }}>
              <strong style={{ color: T.textPrimary }}>Jane Doe</strong> has been added to the registry.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: T.primary + '10', color: T.primary, padding: '6px 16px', borderRadius: 20, marginBottom: 10 }}>
              <span style={{ fontSize: 11, fontWeight: 700 }}>Student ID:</span>
              <span style={{ fontSize: 12, fontFamily: 'monospace', fontWeight: 700 }}>STU-2024-8992</span>
            </div>
            <p style={{ fontSize: 14, color: T.textMuted, marginBottom: 4 }}>Class assignment: <strong style={{ color: T.textPrimary }}>Grade 5A</strong></p>
            <p style={{ fontSize: 12, color: T.textMuted }}>An invitation has been dispatched to <strong style={{ color: T.textPrimary }}>John Doe</strong>.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Link href="/admin/dashboard" style={{ textDecoration: 'none' }}>
              <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px 0', background: T.primary, border: 'none', borderRadius: 10, fontSize: 14, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>dashboard</span>Go to Dashboard
              </button>
            </Link>
            <Link href="/admin/enrollment" style={{ textDecoration: 'none' }}>
              <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px 0', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 14, color: T.textPrimary, cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>person_add</span>Add Another Student
              </button>
            </Link>
            <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px 0', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 14, color: T.textPrimary, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>print</span>Print ID Card
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
