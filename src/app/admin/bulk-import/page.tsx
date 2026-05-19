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

const MAPPINGS = [
  { csv: 'first_name', field: 'First Name', status: 'ok' },
  { csv: 'last_name', field: 'Last Name', status: 'ok' },
  { csv: 'student_email', field: 'Email Address', status: 'ok' },
  { csv: 'parent_email', field: 'Parent Email', status: 'ok' },
  { csv: 'guard_ph', field: 'Select Field...', status: 'warning' },
  { csv: 'emergency_contact', field: 'Emergency Contact', status: 'ok' },
]

type RowStatus = 'valid' | 'error'
const ROWS: { id: number; first: string; last: string; email: string; status: RowStatus; error?: string }[] = [
  { id: 1, first: 'Sarah', last: 'Connor', email: 'sarah.c@example.com', status: 'valid' },
  { id: 2, first: 'John', last: 'Smith', email: 'john.s@example.com', status: 'valid' },
  { id: 3, first: '--', last: 'Doe', email: 'jane.doe@example.com', status: 'error', error: 'Missing First Name' },
  { id: 4, first: 'Michael', last: 'Scott', email: 'michael.scott.com', status: 'error', error: 'Invalid Email Format' },
  { id: 5, first: 'Jim', last: 'Halpert', email: 'jim.h@example.com', status: 'valid' },
  { id: 6, first: 'Pam', last: 'Beesly', email: 'pam.b@example.com', status: 'valid' },
  { id: 7, first: 'Dwight', last: 'Schrute', email: 'dwight.s@example.com', status: 'valid' },
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

export default function AdminBulkImportPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: T.textMuted, marginBottom: 20 }}>
          <span>EduWorld</span>
          <span className="material-symbols-outlined" style={{ fontSize: 12 }}>chevron_right</span>
          <span>Admin</span>
          <span className="material-symbols-outlined" style={{ fontSize: 12 }}>chevron_right</span>
          <span style={{ color: T.textPrimary, fontWeight: 600 }}>Bulk Import</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Mapping & Validation</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Review how your CSV columns map to EduWorld fields. 3 issues found in 250 rows.</p>
            <span style={{ display: 'inline-block', marginTop: 4, fontSize: 11, background: T.bg, color: T.textMuted, padding: '2px 10px', borderRadius: 20, border: `1px solid ${T.border}` }}>EWD-007</span>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ padding: '9px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textMuted, cursor: 'pointer' }}>Cancel Import</button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 18px', background: T.primary, border: 'none', borderRadius: 10, fontSize: 13, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
              Complete Import & Invite Students <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chevron_right</span>
            </button>
          </div>
        </div>

        {/* AI Mapping Banner */}
        <div style={{ background: T.ai + '08', border: `1px solid ${T.ai}30`, borderRadius: 14, padding: '14px 18px', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 14, color: T.ai }}>✦</span>
          <p style={{ fontSize: 13, color: T.textMuted, flex: 1 }}><strong style={{ color: T.textPrimary }}>EduWorld AI Mapping</strong> — We've automatically mapped <strong style={{ color: T.textPrimary }}>8 of 10 columns</strong> based on your header row.</p>
          <span style={{ fontSize: 11, fontWeight: 700, background: T.ai + '20', color: T.ai, padding: '3px 10px', borderRadius: 20, flexShrink: 0 }}>8/10 Mapped</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
          {/* Column Mapping */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 16 }}>Data Mapping</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {MAPPINGS.map(m => (
                <div key={m.csv} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ flex: 1, padding: '8px 12px', background: T.bg, borderRadius: 8, fontSize: 12, fontFamily: 'monospace', color: T.textMuted }}>{m.csv}</div>
                  <span className="material-symbols-outlined" style={{ fontSize: 16, color: m.status === 'warning' ? T.xp : T.textMuted }}>
                    {m.status === 'warning' ? 'warning' : 'chevron_right'}
                  </span>
                  <div style={{ flex: 1, padding: '8px 12px', borderRadius: 8, fontSize: 12, fontWeight: 600, background: m.status === 'warning' ? T.xp + '10' : T.primary + '08', border: `1px solid ${m.status === 'warning' ? T.xp + '40' : T.primary + '20'}`, color: m.status === 'warning' ? '#92400e' : T.textPrimary }}>{m.field}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Parent Matching */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 16 }}>Parent Matching</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '14px 16px', background: T.primary + '05', border: `2px solid ${T.primary}`, borderRadius: 12 }}>
                <div style={{ width: 18, height: 18, borderRadius: '50%', background: T.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: T.textPrimary }}>Match by Email</div>
                  <div style={{ fontSize: 12, color: T.textMuted }}>Link students to households with matching parent emails.</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '14px 16px', background: T.bg, border: `1px solid ${T.border}`, borderRadius: 12, opacity: 0.6 }}>
                <div style={{ width: 18, height: 18, borderRadius: '50%', border: `2px solid ${T.border}`, flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ fontWeight: 600, fontSize: 14, color: T.textPrimary }}>Match by Phone Number</div>
                    <span style={{ fontSize: 10, fontWeight: 700, background: T.primary + '15', color: T.primary, padding: '2px 6px', borderRadius: 20 }}>Pro</span>
                  </div>
                  <div style={{ fontSize: 12, color: T.textMuted }}>Requires SMS verification enabled.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Validation Preview */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Validation Preview</h2>
            <div style={{ display: 'flex', gap: 8 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, fontWeight: 700, background: T.ai + '20', color: T.ai, padding: '4px 10px', borderRadius: 20 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>check_circle</span> 247 Valid
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, fontWeight: 700, background: T.error + '15', color: T.error, padding: '4px 10px', borderRadius: 20 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>cancel</span> 3 Errors
              </span>
            </div>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${T.border}` }}>
                {['#', 'First Name', 'Last Name', 'Email', 'Status'].map(h => (
                  <th key={h} style={{ textAlign: 'left', paddingBottom: 8, fontSize: 11, fontWeight: 700, color: T.textMuted, paddingRight: 16 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map(r => (
                <tr key={r.id} style={{ borderBottom: `1px solid ${T.border}`, background: r.status === 'error' ? T.error + '05' : 'transparent' }}>
                  <td style={{ padding: '10px 16px 10px 0', fontSize: 12, color: T.textMuted }}>{r.id}</td>
                  <td style={{ paddingRight: 16, fontSize: 13, color: T.textPrimary }}>{r.first}</td>
                  <td style={{ paddingRight: 16, fontSize: 13, color: T.textPrimary }}>{r.last}</td>
                  <td style={{ paddingRight: 16, fontSize: 12, fontFamily: 'monospace', color: T.textMuted }}>{r.email}</td>
                  <td style={{ padding: '10px 0' }}>
                    {r.status === 'valid' ? (
                      <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.ai }}>check_circle</span>
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.error }}>cancel</span>
                        <span style={{ fontSize: 11, color: T.error }}>{r.error}</span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button style={{ fontSize: 13, color: T.primary, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', marginTop: 12 }}>View All 250 Rows →</button>
        </div>
      </main>
    </div>
  )
}
