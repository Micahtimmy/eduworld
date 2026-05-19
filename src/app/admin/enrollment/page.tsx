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
  { icon: 'person_add', label: 'Student Intake', href: '/admin/student-intake', active: true },
  { icon: 'groups', label: 'Students', href: '/admin/students' },
  { icon: 'school', label: 'Teachers', href: '/admin/teacher-roster' },
  { icon: 'analytics', label: 'Analytics', href: '/admin/analytics' },
  { icon: 'calendar_month', label: 'Events', href: '/admin/events' },
  { icon: 'payments', label: 'Finance', href: '/admin/finance' },
  { icon: 'policy', label: 'Roles & Permissions', href: '/admin/roles' },
  { icon: 'menu_book', label: 'Curriculum', href: '/admin/curriculum' },
  { icon: 'monitor_heart', label: 'System Health', href: '/admin/health-monitor' },
]

const STEPS = ['Profile', 'Family', 'Academic', 'Review']

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

export default function AdminEnrollmentPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32, display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: 600 }}>
          {/* Stepper */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
              {STEPS.map((step, i) => (
                <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 20, background: i === 0 ? T.primary : T.border + '60', color: i === 0 ? '#fff' : T.textMuted, fontSize: 12, fontWeight: 600 }}>
                    {i + 1} {step}
                  </div>
                  {i < STEPS.length - 1 && <div style={{ width: 16, height: 1, background: T.border }} />}
                </div>
              ))}
            </div>
            <div style={{ fontSize: 12, color: T.textMuted }}>Individual Enrollment · EWD-006 · Step 1 of 4</div>
          </div>

          <div style={{ marginBottom: 20 }}>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 22, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Student Profile</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Enter the student's basic information to begin enrollment.</p>
          </div>

          {/* AI Banner */}
          <div style={{ background: T.ai + '08', border: `1px solid ${T.ai}30`, borderRadius: 14, padding: '14px 18px', marginBottom: 20, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <span style={{ fontSize: 16, color: T.ai }}>✦</span>
            <p style={{ fontSize: 13, color: T.textMuted }}>EduWorld AI will auto-suggest grade placement based on date of birth and regional curriculum standards.</p>
          </div>

          {/* Form */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary, marginBottom: 20 }}>Basic Information</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: T.textMuted, marginBottom: 6 }}>First Name</label>
                  <input placeholder="First name" style={{ width: '100%', padding: '10px 14px', background: T.bg, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 14, color: T.textPrimary, outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: T.textMuted, marginBottom: 6 }}>Last Name</label>
                  <input placeholder="Last name" style={{ width: '100%', padding: '10px 14px', background: T.bg, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 14, color: T.textPrimary, outline: 'none', boxSizing: 'border-box' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: T.textMuted, marginBottom: 6 }}>Student ID</label>
                <div style={{ display: 'flex', gap: 8 }}>
                  <input readOnly placeholder="Auto-generate" style={{ flex: 1, padding: '10px 14px', background: T.bg, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 14, color: T.textMuted, outline: 'none' }} />
                  <button style={{ padding: '10px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>Generate</button>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: T.textMuted, marginBottom: 6 }}>Date of Birth</label>
                  <input type="date" style={{ width: '100%', padding: '10px 14px', background: T.bg, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 14, color: T.textMuted, outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: T.textMuted, marginBottom: 6 }}>Gender</label>
                  <select style={{ width: '100%', padding: '10px 14px', background: T.bg, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 14, color: T.textMuted, outline: 'none' }}>
                    <option value="">Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Non-binary</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: T.textMuted, marginBottom: 6 }}>Grade Level</label>
                <select style={{ width: '100%', padding: '10px 14px', background: T.bg, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 14, color: T.textPrimary, outline: 'none' }}>
                  <option>Grade 10 (AI Suggested — Age 15)</option>
                  <option>Grade 9</option>
                  <option>Grade 11</option>
                  <option>Grade 12</option>
                </select>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6, fontSize: 12, color: T.ai }}>
                  <span>✦</span>AI confirmed: Grade 10 based on date of birth
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
            <button style={{ flex: 1, padding: '12px 0', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 14, color: T.textMuted, cursor: 'pointer' }}>← Cancel</button>
            <button style={{ flex: 1, padding: '12px 0', background: T.primary, border: 'none', borderRadius: 10, fontSize: 14, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>Save & Continue →</button>
          </div>
        </div>
      </main>
    </div>
  )
}
