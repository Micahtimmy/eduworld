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

const BACKUPS = [
  { id: '#EDU-VLT-092', type: 'Student Records', status: 'Encrypted', lastBackup: '2 mins ago', size: '4.2 GB' },
  { id: '#EDU-VLT-088', type: 'Financial Ledger', status: 'Secure', lastBackup: '6 hours ago', size: '128 MB' },
  { id: '#EDU-VLT-074', type: 'LMS Media Assets', status: 'Idle', lastBackup: 'Yesterday', size: '842 GB' },
]

type BackupStatus = 'Encrypted' | 'Secure' | 'Idle'
const STATUS_STYLES: Record<BackupStatus, { bg: string; text: string }> = {
  Encrypted: { bg: T.ai + '20', text: T.ai },
  Secure: { bg: '#dbeafe', text: '#1d4ed8' },
  Idle: { bg: T.bg, text: T.textMuted },
}

const AUDIT = [
  { icon: 'cloud_sync', label: 'Automatic Backup Completed', time: '14:02 PM', detail: 'System mirrored #EDU-VLT-092 to Asia-Pacific (Tokyo).', color: T.primary },
  { icon: 'security', label: 'AI Threat Mitigation Active', time: '11:45 AM', detail: 'Login anomaly from IP 192.168.1.105 blocked by "Neural Sentry."', color: T.ai },
  { icon: 'settings', label: 'Admin Configuration Changed', time: '09:12 AM', detail: "Administrator 'Marcus V.' updated retention policy for Student Records to 7 years.", color: T.xp },
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

export default function AdminDataGovernancePage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, background: T.ai + '20', color: T.ai, padding: '2px 10px', borderRadius: 20, marginBottom: 8 }}>Secure</span>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Data Vault & Backup</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Institutional data security, backup registry, and compliance management.</p>
          </div>
        </div>

        {/* AI Security Monitor */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 16, color: T.ai }}>✦</span>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>AI Security Monitor</h2>
            <span style={{ marginLeft: 'auto', fontSize: 11, fontWeight: 700, background: T.ai + '20', color: T.ai, padding: '2px 10px', borderRadius: 20 }}>System Integrity: Nominal</span>
          </div>
          <p style={{ fontSize: 13, color: T.textMuted, marginBottom: 16 }}>AI scanning 12.4TB institutional data. No unauthorized access in 24 hours. Backup redundancy 100% across 3 regions.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {[
              { label: 'Active Threats', value: '0' },
              { label: 'Uptime Velocity', value: '99.9%' },
              { label: 'Avg. Latency', value: '2.4ms' },
            ].map(s => (
              <div key={s.label} style={{ background: T.bg, borderRadius: 10, padding: '12px 16px', textAlign: 'center' }}>
                <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 22, color: T.textPrimary, marginBottom: 4 }}>{s.value}</div>
                <div style={{ fontSize: 12, color: T.textMuted }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Export */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 20, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 16 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 40, color: T.primary }}>upload_file</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary, marginBottom: 2 }}>Compliance Export</div>
            <div style={{ fontSize: 13, color: T.textMuted }}>Generate encrypted data bundles for GDPR/FERPA audits.</div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ padding: '8px 18px', background: T.primary, border: 'none', borderRadius: 8, fontSize: 13, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>Start Audit Export →</button>
            <button style={{ padding: '8px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 13, color: T.textMuted, cursor: 'pointer' }}>View Export Logs</button>
          </div>
        </div>

        {/* Backup Registry */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, overflow: 'hidden', marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: `1px solid ${T.border}` }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Backup Registry</h2>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.textPrimary, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>add</span> Schedule New Backup
            </button>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: T.bg, borderBottom: `1px solid ${T.border}` }}>
                {['Vault ID', 'Type', 'Status', 'Last Backup', 'Size'].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '10px 20px', fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: 'uppercase' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {BACKUPS.map((b, i) => (
                <tr key={b.id} style={{ borderBottom: i < BACKUPS.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                  <td style={{ padding: '14px 20px', fontFamily: 'monospace', fontSize: 12, color: T.textMuted }}>{b.id}</td>
                  <td style={{ padding: '14px 20px', fontWeight: 600, fontSize: 13, color: T.textPrimary }}>{b.type}</td>
                  <td style={{ padding: '14px 20px' }}>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, background: STATUS_STYLES[b.status as BackupStatus].bg, color: STATUS_STYLES[b.status as BackupStatus].text }}>{b.status}</span>
                  </td>
                  <td style={{ padding: '14px 20px', fontSize: 12, color: T.textMuted }}>{b.lastBackup}</td>
                  <td style={{ padding: '14px 20px', fontSize: 12, fontWeight: 700, color: T.textPrimary, textAlign: 'right' }}>{b.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Key Management */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.primary }}>key</span>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Key Management</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', background: T.bg, borderRadius: 10 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.ai }}>check_circle</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 13, color: T.textPrimary }}>RSA-4096 Health 94%</div>
                <div style={{ fontSize: 12, color: T.textMuted }}>Next rotation scheduled in 14 days.</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', background: T.xp + '08', border: `1px solid ${T.xp}40`, borderRadius: 10 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.xp }}>warning</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 13, color: T.textPrimary }}>Legacy Keys</div>
                <div style={{ fontSize: 12, color: T.textMuted }}>2 keys deprecated — rotation required</div>
              </div>
            </div>
          </div>
          <button style={{ padding: '8px 18px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>Rotate Global Keys</button>
        </div>

        {/* Audit Trail */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: `1px solid ${T.border}` }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Security Audit Trail</h2>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{ padding: '6px 12px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.textMuted, cursor: 'pointer' }}>Export CSV</button>
              <button style={{ padding: '6px 12px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.textMuted, cursor: 'pointer' }}>Filters</button>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {AUDIT.map((a, i) => (
              <div key={a.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '16px 20px', borderBottom: i < AUDIT.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: a.color, flexShrink: 0 }}>{a.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                    <div style={{ fontWeight: 600, fontSize: 14, color: T.textPrimary }}>{a.label}</div>
                    <div style={{ fontSize: 12, color: T.textMuted }}>{a.time}</div>
                  </div>
                  <div style={{ fontSize: 12, color: T.textMuted }}>{a.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
