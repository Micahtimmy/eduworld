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

export default function AdminStudentIntakePage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32, maxWidth: 860 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <span style={{ fontSize: 11, fontWeight: 700, background: T.primary + '15', color: T.primary, padding: '2px 8px', borderRadius: 6 }}>EWD-005</span>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: '8px 0 4px' }}>Add Students</h1>
            <p style={{ fontSize: 14, color: T.textMuted }}>Enroll new learners into your institution's registry.</p>
          </div>
          <button style={{ padding: '8px', background: 'transparent', border: 'none', cursor: 'pointer', color: T.textMuted }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>close</span>
          </button>
        </div>

        {/* Method Selection */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 28 }}>
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 22, cursor: 'pointer', opacity: 0.7 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: T.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 24, color: T.textMuted }}>person</span>
            </div>
            <div style={{ fontWeight: 700, fontSize: 15, color: T.textPrimary, marginBottom: 6 }}>Individual Enrollment</div>
            <div style={{ fontSize: 13, color: T.textMuted }}>Manually enter student details one at a time.</div>
          </div>
          <div style={{ background: T.primary + '05', border: `2px solid ${T.primary}`, borderRadius: 14, padding: 22, cursor: 'pointer', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 14, right: 14, width: 22, height: 22, borderRadius: '50%', background: T.ai, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 700 }}>✓</div>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: T.primary + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 24, color: T.primary }}>groups</span>
            </div>
            <div style={{ fontWeight: 700, fontSize: 15, color: T.textPrimary, marginBottom: 6 }}>Bulk Import</div>
            <div style={{ fontSize: 13, color: T.textMuted }}>Import via CSV or connect to external systems.</div>
          </div>
        </div>

        {/* Steps Progress */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 28 }}>
            {STEPS.map((s, i) => (
              <div key={s} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                  <div style={{ width: 30, height: 30, borderRadius: '50%', background: i === 0 ? T.primary : T.border + '60', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: i === 0 ? '#fff' : T.textMuted }}>{i + 1}</div>
                  <div style={{ fontSize: 11, color: i === 0 ? T.primary : T.textMuted, marginTop: 4, fontWeight: i === 0 ? 600 : 400 }}>{s}</div>
                </div>
                {i < STEPS.length - 1 && <div style={{ height: 2, flex: 1, background: T.border + '60' }} />}
              </div>
            ))}
          </div>

          {/* Upload Zone */}
          <div style={{ border: `2px dashed ${T.border}`, borderRadius: 14, padding: '40px 20px', textAlign: 'center', cursor: 'pointer', marginBottom: 20 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 44, color: T.border, display: 'block', marginBottom: 10 }}>upload_file</span>
            <div style={{ fontWeight: 700, fontSize: 16, color: T.textPrimary, marginBottom: 6 }}>Drop your CSV file here</div>
            <div style={{ fontSize: 13, color: T.textMuted, marginBottom: 16 }}>or click to browse from your computer</div>
            <button style={{ padding: '8px 20px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 13, color: T.textPrimary, cursor: 'pointer', marginBottom: 10 }}>Select File</button>
            <div style={{ fontSize: 12, color: T.primary, cursor: 'pointer', fontWeight: 600 }}>Download CSV Template</div>
          </div>

          {/* External Integrations */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: T.textMuted, marginBottom: 10 }}>Or import from external systems:</div>
            {[
              { label: 'Google Classroom', sub: 'Sync rosters instantly', icon: 'G', iconColor: '#16a34a', iconBg: '#dcfce7' },
              { label: 'SIS Integration', sub: 'Connect via API', icon: '🔌', iconColor: T.textMuted, iconBg: T.bg },
            ].map(s => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', background: T.bg, borderRadius: 10, marginBottom: 8, cursor: 'pointer' }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: s.iconBg, border: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, color: s.iconColor }}>{s.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: T.textPrimary }}>{s.label}</div>
                  <div style={{ fontSize: 12, color: T.textMuted }}>{s.sub}</div>
                </div>
                <span style={{ fontSize: 18, color: T.primary }}>›</span>
              </div>
            ))}
          </div>

          {/* AI Banner */}
          <div style={{ background: T.ai + '08', border: `1px solid ${T.ai}30`, borderRadius: 10, padding: '12px 14px', marginBottom: 24, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <span style={{ fontSize: 13, color: T.ai }}>✦</span>
            <div>
              <span style={{ fontWeight: 700, fontSize: 13, color: T.ai }}>EduWorld AI</span>
              <p style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>AI will auto-detect standard fields (First Name, Last Name, Email) from your CSV and map them automatically.</p>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button style={{ padding: '9px 20px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textMuted, cursor: 'pointer' }}>Cancel</button>
            <button style={{ padding: '9px 20px', background: T.primary, border: 'none', borderRadius: 10, fontSize: 13, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>Continue to Mapping</button>
          </div>
        </div>
      </main>
    </div>
  )
}
