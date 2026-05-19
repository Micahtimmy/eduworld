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
  { icon: 'policy', label: 'Roles & Permissions', href: '/admin/roles', active: true },
  { icon: 'menu_book', label: 'Curriculum', href: '/admin/curriculum' },
  { icon: 'monitor_heart', label: 'System Health', href: '/admin/health-monitor' },
]

const STAFF = [
  { initials: 'JD', name: 'James D. Sullivan', role: 'Super Admin', bg: T.primary + '20', text: T.primary },
  { initials: 'MR', name: 'Maria Rossi', role: 'Registrar', bg: '#dbeafe', text: '#1d4ed8' },
  { initials: 'AK', name: 'Arjun Kapoor', role: 'Financial Officer', bg: '#dcfce7', text: '#16a34a' },
  { initials: 'LH', name: 'Linda Hsiung', role: 'Department Head', bg: '#ede9fe', text: '#7c3aed' },
]

const PERMISSIONS = [
  { icon: 'bar_chart', label: 'View Analytics', cols: [true, true, true, true] },
  { icon: 'payments', label: 'Edit Fees', cols: [true, false, true, false] },
  { icon: 'person_add', label: 'Invite Staff', cols: [true, true, false, false] },
  { icon: 'lock', label: 'Access System Logs', cols: [true, false, false, false] },
  { icon: 'menu_book', label: 'Edit Curriculum', cols: [true, true, false, true] },
]

const AUDIT = [
  { icon: 'key', label: 'Password Reset', detail: 'Sullivan reset password for "staff #8821"', time: '2 mins ago · IP: 192.168.1.1', color: T.primary },
  { icon: 'check_circle', label: 'Role Modification', detail: 'Kapoor elevated to Financial Officer', time: '45 mins ago · System', color: T.ai },
  { icon: 'warning', label: 'Unauthorized Access', detail: 'Denied: Dept. Head access to Financial Records.', time: '2 hours ago · Portal-A', color: T.error },
  { icon: 'cloud_sync', label: 'Policy Sync', detail: 'Policies synced with Global HQ', time: '5 hours ago', color: '#0891b2' },
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

export default function AdminRolesPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 4 }}>EduWorld Global · London Central Academy</p>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Roles & Permissions</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Granular access control for London Central Academy staff.</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span>Export Report
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 18px', background: T.primary, border: 'none', borderRadius: 10, fontSize: 13, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>add</span>New Admin Staff
            </button>
          </div>
        </div>

        {/* Staff Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 24 }}>
          {STAFF.map(s => (
            <div key={s.name} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, color: s.text, flexShrink: 0 }}>{s.initials}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, color: T.textPrimary }}>{s.name}</div>
                <div style={{ fontSize: 11, color: T.textMuted }}>{s.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Permission Matrix */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.primary }}>shield</span>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Master Permission Matrix</h2>
          </div>
          <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
            {['Global Roles', 'Custom Tags'].map((t, i) => (
              <button key={t} style={{ padding: '6px 14px', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer', background: i === 0 ? T.primary : 'transparent', color: i === 0 ? '#fff' : T.textMuted, border: i === 0 ? 'none' : `1px solid ${T.border}` }}>{t}</button>
            ))}
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${T.border}` }}>
                <th style={{ textAlign: 'left', paddingBottom: 10, fontSize: 11, fontWeight: 700, color: T.textMuted, paddingRight: 20 }}>Permission</th>
                {['Super Admin', 'Registrar', 'Financial Off.', 'Dept. Head'].map(h => (
                  <th key={h} style={{ textAlign: 'center', paddingBottom: 10, fontSize: 11, fontWeight: 700, color: T.textMuted }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PERMISSIONS.map((p, i) => (
                <tr key={p.label} style={{ borderBottom: i < PERMISSIONS.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                  <td style={{ padding: '12px 0', display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: T.textPrimary }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.primary }}>{p.icon}</span>
                    {p.label}
                  </td>
                  {p.cols.map((granted, j) => (
                    <td key={j} style={{ textAlign: 'center', padding: '12px 0' }}>
                      <span style={{ fontSize: 16, color: granted ? T.ai : T.border }}>{granted ? '✓' : '○'}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: 12, color: T.textMuted, marginTop: 12, marginBottom: 16 }}>Changes to permissions are logged and require dual-factor verification.</p>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ padding: '8px 18px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 13, color: T.textMuted, cursor: 'pointer' }}>Reset Default</button>
            <button style={{ padding: '8px 18px', background: T.primary, border: 'none', borderRadius: 8, fontSize: 13, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>Save Matrix Changes</button>
          </div>
        </div>

        {/* AI Anomaly */}
        <div style={{ background: T.ai + '08', border: `1px solid ${T.ai}30`, borderRadius: 14, padding: 22, marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 14, color: T.ai }}>✦</span>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary }}>EduWorld AI: Access Anomaly Detected</h2>
          </div>
          <p style={{ fontSize: 13, color: T.textMuted, marginBottom: 14 }}>Linda Hsiung made two denied attempts to access the "Financial Ledger" within the last 24 hours. This is flagged as unusual behavior.</p>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{ padding: '7px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>Review Attempt</button>
            <button style={{ padding: '7px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 13, color: T.textMuted, cursor: 'pointer' }}>Dismiss Insight</button>
          </div>
        </div>

        {/* Audit Log */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.primary }}>key</span>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Security Audit Log</h2>
            <span style={{ fontSize: 12, color: T.textMuted }}>Real-time administrative activity.</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {AUDIT.map(a => (
              <div key={a.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 14px', background: T.bg, borderRadius: 10 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: a.color, flexShrink: 0 }}>{a.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: T.textPrimary }}>{a.label}</div>
                  <div style={{ fontSize: 12, color: T.textMuted }}>{a.detail}</div>
                  <div style={{ fontSize: 11, color: T.textMuted, marginTop: 2 }}>{a.time}</div>
                </div>
              </div>
            ))}
          </div>
          <button style={{ fontSize: 13, color: T.primary, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', marginTop: 12 }}>View Full Integrity Report</button>
        </div>
      </main>
    </div>
  )
}
