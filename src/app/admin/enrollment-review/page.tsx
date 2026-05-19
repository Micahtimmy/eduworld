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

export default function AdminEnrollmentReviewPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
          <button style={{ fontSize: 13, color: T.textMuted, background: 'none', border: 'none', cursor: 'pointer' }}>← Back to Details</button>
          <div style={{ height: 16, width: 1, background: T.border }} />
          <div>
            <div style={{ fontSize: 12, color: T.textMuted }}>Step 4 of 4</div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 22, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Review & Finalize Enrollment</h1>
          </div>
        </div>
        <p style={{ fontSize: 14, color: T.textMuted, marginBottom: 20 }}>Please review all provided information before confirming admission.</p>

        {/* Steps */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
          {[1, 2, 3, 4].map(s => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: s < 4 ? '#16a34a' : T.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#fff' }}>
                {s < 4 ? '✓' : s}
              </div>
              {s < 4 && <div style={{ width: 32, height: 1, background: T.border }} />}
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
          {/* Student Profile */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
              <div style={{ width: 60, height: 60, borderRadius: '50%', background: T.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 20, color: T.primary, flexShrink: 0 }}>ET</div>
              <div>
                <h2 style={{ fontFamily: T.fontHead, fontSize: 18, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Elias Thorne</h2>
                <div style={{ fontFamily: 'monospace', fontSize: 11, color: T.textMuted, marginTop: 2 }}>EWD-2024-8891</div>
                <div style={{ fontSize: 12, color: T.textMuted, marginTop: 4 }}>Grade 10 — Science Track</div>
              </div>
            </div>
          </div>

          {/* Guardian */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary }}>Primary Guardian</div>
              <button style={{ fontSize: 12, color: T.primary, background: 'none', border: 'none', cursor: 'pointer' }}>Edit Profile Details</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 32, color: T.textMuted }}>person</span>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, color: T.textPrimary }}>Sarah Thorne</div>
                <div style={{ fontSize: 12, color: T.textMuted }}>Mother</div>
                <div style={{ fontSize: 12, color: T.textMuted }}>+44 7700 900077</div>
                <div style={{ fontSize: 12, color: T.textMuted }}>sarah.thorne@example.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Curriculum */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 20 }}>
          <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary, marginBottom: 16 }}>Academic Curriculum & Support</div>
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>Core Subjects</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                { icon: 'calculate', subject: 'Advanced Mathematics' },
                { icon: 'science', subject: 'Physics & Chemistry' },
                { icon: 'menu_book', subject: 'English Literature' },
              ].map(s => (
                <div key={s.subject} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', background: T.bg, borderRadius: 8 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.primary }}>{s.icon}</span>
                  <span style={{ fontSize: 13, color: T.textPrimary }}>{s.subject}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>Extracurriculars</div>
            <div style={{ display: 'flex', gap: 8 }}>
              {['Robotics Club', 'Debate Team'].map(e => (
                <span key={e} style={{ fontSize: 12, fontWeight: 700, background: T.primary + '15', color: T.primary, padding: '4px 12px', borderRadius: 20 }}>{e}</span>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '12px 14px', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 10 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#2563eb' }}>info</span>
            <p style={{ fontSize: 12, color: T.textMuted }}>Mild dyslexia noted. Requires 15% extra time on written assessments. Medical documentation provided.</p>
          </div>
        </div>

        {/* Documents */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary }}>Required Documents</div>
            <span style={{ fontSize: 11, fontWeight: 700, background: T.xp + '20', color: T.xp, padding: '2px 10px', borderRadius: 20 }}>1 of 2 Uploaded</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 10 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#16a34a' }}>check_circle</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14, color: T.textPrimary }}>Medical Records & Immunization</div>
                <div style={{ fontSize: 12, color: T.textMuted }}>med_records_2024.pdf (2.4 MB)</div>
              </div>
              <button style={{ fontSize: 16, color: T.error, background: 'none', border: 'none', cursor: 'pointer' }}>🗑</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', background: T.xp + '08', border: `1px solid ${T.xp}40`, borderRadius: 10 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.xp }}>schedule</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14, color: T.textPrimary }}>Birth Certificate or Passport</div>
                <div style={{ fontSize: 12, color: T.textMuted }}>Required for identity verification</div>
              </div>
              <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>upload</span> Upload
              </button>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
          <button style={{ flex: 1, padding: '12px 0', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 14, color: T.textMuted, cursor: 'pointer' }}>Save as Draft</button>
          <Link href="/admin/enrollment-success" style={{ flex: 1, textDecoration: 'none' }}>
            <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px 0', background: T.primary, border: 'none', borderRadius: 10, fontSize: 14, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>check_circle</span>Confirm & Finalize Enrollment
            </button>
          </Link>
        </div>
        <p style={{ fontSize: 12, color: T.textMuted, textAlign: 'center' }}>Reference Serial: EWD-011 | EduWorld Secure Enrollment System</p>
      </main>
    </div>
  )
}
