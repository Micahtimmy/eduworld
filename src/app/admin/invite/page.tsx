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

const STEPS = ['Upload', 'Map Fields', 'Validate', 'Invite']

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

export default function AdminInvitePage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32, display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: 600 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
            <div>
              <h1 style={{ fontFamily: T.fontHead, fontSize: 22, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Add Students</h1>
              <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Enroll new learners into your institution's registry.</p>
            </div>
            <button style={{ fontSize: 18, color: T.textMuted, background: 'none', border: 'none', cursor: 'pointer', lineHeight: 1 }}>✕</button>
          </div>

          {/* Mode Selection */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 24 }}>
            {[
              { icon: 'person', title: 'Individual Enrollment', desc: 'Manually enter details for a single student', selected: false },
              { icon: 'groups', title: 'Bulk Import', desc: 'Import via CSV or connect external data sources', selected: true },
            ].map(m => (
              <div key={m.title} style={{ background: m.selected ? T.primary + '05' : T.surface, border: `2px solid ${m.selected ? T.primary : T.border}`, borderRadius: 16, padding: '18px 16px', cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 28, color: m.selected ? T.primary : T.textMuted, display: 'block', marginBottom: 8 }}>{m.icon}</span>
                <div style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary, marginBottom: 4 }}>{m.title}</div>
                <div style={{ fontSize: 12, color: T.textMuted }}>{m.desc}</div>
                {m.selected && <div style={{ fontSize: 13, color: T.primary, fontWeight: 700, marginTop: 8 }}>✓ Selected</div>}
              </div>
            ))}
          </div>

          {/* Stepper + Upload */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            {/* Steps */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
              {STEPS.map((step, i) => (
                <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: i === 0 ? T.primary : T.border + '60', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: i === 0 ? '#fff' : T.textMuted, flexShrink: 0 }}>{i + 1}</div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: i === 0 ? T.primary : T.textMuted, marginTop: 4 }}>{step}</div>
                  </div>
                  {i < STEPS.length - 1 && <div style={{ height: 1, flex: 1, background: T.border, marginBottom: 18 }} />}
                </div>
              ))}
            </div>

            {/* CSV Drop Zone */}
            <div style={{ border: `2px dashed ${T.border}`, borderRadius: 14, padding: '40px 24px', textAlign: 'center', marginBottom: 20 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 48, color: T.textMuted, display: 'block', marginBottom: 12 }}>upload_file</span>
              <div style={{ fontWeight: 700, fontSize: 15, color: T.textPrimary, marginBottom: 6 }}>Drop your CSV file here</div>
              <div style={{ fontSize: 13, color: T.textMuted, marginBottom: 16 }}>or click to browse from your computer</div>
              <button style={{ padding: '9px 20px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer', marginBottom: 12 }}>Select File</button>
              <div>
                <button style={{ fontSize: 12, color: T.primary, background: 'none', border: 'none', cursor: 'pointer' }}>⬇ Download CSV Template</button>
              </div>
            </div>

            {/* External Sources */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10 }}>External Data Connections</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { icon: 'school', label: 'Google Classroom', desc: 'Sync rosters instantly' },
                  { icon: 'hub', label: 'SIS Integration', desc: 'Connect your Student Info System' },
                ].map(s => (
                  <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', background: T.bg, borderRadius: 10, cursor: 'pointer' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.primary }}>{s.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 14, color: T.textPrimary }}>{s.label}</div>
                      <div style={{ fontSize: 12, color: T.textMuted }}>{s.desc}</div>
                    </div>
                    <span style={{ color: T.textMuted, fontSize: 18 }}>›</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Banner */}
            <div style={{ background: T.ai + '08', border: `1px solid ${T.ai}30`, borderRadius: 10, padding: '12px 14px', marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <span style={{ fontSize: 13, color: T.ai }}>✦</span>
                <p style={{ fontSize: 12, color: T.textMuted }}>EduWorld AI will automatically detect and map standard fields like First Name, Last Name, and Email from your CSV.</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
            <button style={{ flex: 1, padding: '12px 0', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 14, color: T.textMuted, cursor: 'pointer' }}>Cancel</button>
            <button style={{ flex: 1, padding: '12px 0', background: T.primary, border: 'none', borderRadius: 10, fontSize: 14, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>Continue to Mapping →</button>
          </div>
        </div>
      </main>
    </div>
  )
}
