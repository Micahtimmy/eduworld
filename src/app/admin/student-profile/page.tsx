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

const STEPS = ['Profile', 'Family', 'Academic']

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

export default function AdminStudentProfilePage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32, display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 20, width: '100%', maxWidth: 520, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
          {/* Header */}
          <div style={{ padding: '20px 24px', borderBottom: `1px solid ${T.border}` }}>
            <Link href="/admin/students" style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: T.textMuted, textDecoration: 'none', marginBottom: 8 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>arrow_back</span> Back to Student Directory
            </Link>
            <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary }}>Student Enrollment</div>
            <div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>Create a new student profile for the upcoming academic year.</div>
          </div>

          {/* Steps */}
          <div style={{ display: 'flex', alignItems: 'center', padding: '16px 24px', borderBottom: `1px solid ${T.border}` }}>
            {STEPS.map((s, i) => (
              <div key={s} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: i === 0 ? T.primary : T.border + '60', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: i === 0 ? '#fff' : T.textMuted }}>{i + 1}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: i === 0 ? T.primary : T.textMuted, marginTop: 4 }}>{s}</div>
                </div>
                {i < STEPS.length - 1 && <div style={{ height: 1, width: '100%', background: T.border, marginBottom: 18 }} />}
              </div>
            ))}
          </div>

          {/* Form */}
          <div style={{ padding: 24 }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: T.textPrimary, marginBottom: 16 }}>1. Student Information</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: T.textMuted, marginBottom: 6 }}>Full Name</label>
                <input style={{ width: '100%', padding: '10px 14px', background: T.bg, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 14, color: T.textPrimary, outline: 'none', boxSizing: 'border-box' }} placeholder="Enter full name" />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: T.textMuted, marginBottom: 6 }}>Student ID</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: T.bg, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textMuted }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>lock</span>
                  Auto-generated upon completion
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: T.textMuted, marginBottom: 6 }}>Date of Birth</label>
                <input type="date" style={{ width: '100%', padding: '10px 14px', background: T.bg, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 14, color: T.textMuted, outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: T.textMuted, marginBottom: 6 }}>Gender</label>
                  <select style={{ width: '100%', padding: '10px 14px', background: T.bg, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 14, color: T.textMuted, outline: 'none' }}>
                    <option>Select</option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Non-binary</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: T.textMuted, marginBottom: 6 }}>Expected Grade</label>
                  <select style={{ width: '100%', padding: '10px 14px', background: T.bg, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 14, color: T.textMuted, outline: 'none' }}>
                    <option>Select Grade</option>
                    <option>Kindergarten</option>
                    <option>Grade 1</option>
                    <option>Grade 2</option>
                    <option>Grade 3</option>
                    <option>Grade 4</option>
                    <option>Grade 5</option>
                  </select>
                </div>
              </div>
            </div>

            {/* AI Check */}
            <div style={{ background: T.ai + '08', border: `1px solid ${T.ai}30`, borderRadius: 10, padding: '12px 14px', marginTop: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                <span style={{ fontSize: 12, color: T.ai }}>✦</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: T.ai }}>EduWorld AI Check</span>
              </div>
              <p style={{ fontSize: 12, color: T.textMuted }}>Age-10 student mapped to <strong style={{ color: T.textPrimary }}>Grade 5</strong>, aligning with standard regional academic milestones.</p>
            </div>
          </div>

          {/* Footer */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '16px 24px', borderTop: `1px solid ${T.border}` }}>
            <button style={{ padding: '8px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 13, color: T.textMuted, cursor: 'pointer' }}>Cancel</button>
            <div style={{ flex: 1 }} />
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 18px', background: T.primary, border: 'none', borderRadius: 8, fontSize: 13, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
              Next: Parent Link <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
