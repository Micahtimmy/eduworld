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
  { icon: 'payments', label: 'Finance', href: '/admin/finance', active: true },
  { icon: 'policy', label: 'Roles & Permissions', href: '/admin/roles' },
  { icon: 'menu_book', label: 'Curriculum', href: '/admin/curriculum' },
  { icon: 'monitor_heart', label: 'System Health', href: '/admin/health-monitor' },
]

const KPIS = [
  { label: 'Total Annual Revenue', value: '£14,284,500', change: '+12.4%', note: '88% of annual target reached', up: true },
  { label: 'Fee Collection Rate', value: '94.8%', change: '+2.1%', note: 'Excellent performance', up: true },
  { label: 'Outstanding Debt', value: '£642,310', change: '-4.2%', note: '14 accounts in high-risk', up: false, warn: true },
  { label: 'Premium Subscriptions', value: '£2,105,400', change: '+18.5%', note: '+24 New tiers this week', up: true },
]

const REVENUE_BARS = [
  { month: 'Jan', val: 1200000, max: 1800000 },
  { month: 'Mar', val: 980000, max: 1800000 },
  { month: 'May', val: 1450000, max: 1800000 },
  { month: 'Jul', val: 760000, max: 1800000 },
  { month: 'Sep', val: 1320000, max: 1800000 },
  { month: 'Oct', val: 1800000, max: 1800000 },
  { month: 'Dec', val: 1100000, max: 1800000 },
]

const TRANSACTIONS = [
  { entity: "St. Mary's Trust", ref: '#EW-2025-0941', category: 'Institutional', amount: '£142,500', status: 'Cleared' },
  { entity: 'Global Edu Fund', ref: '#EW-2025-0882', category: 'Grant', amount: '£89,000', status: 'Cleared' },
  { entity: 'Premium Tier Apex', ref: '#EW-2025-1004', category: 'Premium', amount: '£24,300', status: 'Processing' },
]

const PENDING = [
  { label: 'Overdue >30 days', count: '42 invoices', amount: '£112,400', action: 'Email Reminders', color: T.error },
  { label: 'Awaiting Verification', count: '12 documents', amount: '£56,200', action: 'Review', color: T.xp },
  { label: 'Next Batch (7 days)', count: '156 invoices', amount: '£210,800', action: 'Preview', color: T.textMuted },
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

export default function AdminFinancePage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 4 }}>EduWorld Global · London Central Academy</p>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Institutional Finance Overview</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Director of Finance · Revenue, collections, and premium subscriptions.</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>
              <span style={{ fontSize: 12 }}>✦</span>Launch Intelligence AI
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 18px', background: T.primary, border: 'none', borderRadius: 10, fontSize: 13, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>add</span>Create Invoice
            </button>
          </div>
        </div>

        {/* KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
          {KPIS.map(k => (
            <div key={k.label} style={{ background: T.surface, border: `1px solid ${k.warn ? T.xp + '60' : T.border}`, borderRadius: 14, padding: '18px 16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <span style={{ fontSize: 11, color: T.textMuted, fontWeight: 600 }}>{k.label}</span>
                <span className="material-symbols-outlined" style={{ fontSize: 16, color: k.up ? T.ai : T.error }}>{k.up ? 'trending_up' : 'trending_down'}</span>
              </div>
              <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: T.textPrimary, marginBottom: 4 }}>{k.value}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: k.up ? T.ai : T.error, marginBottom: 2 }}>{k.change}</div>
              <div style={{ fontSize: 11, color: T.textMuted }}>{k.note}</div>
            </div>
          ))}
        </div>

        {/* Revenue Chart */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <div>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Revenue vs. Forecast</h2>
              <p style={{ fontSize: 12, color: T.textMuted }}>October: Actual £1.8M / Target £1.5M (+12%)</p>
            </div>
            <button style={{ padding: '7px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.textMuted, cursor: 'pointer' }}>Export</button>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, height: 120 }}>
            {REVENUE_BARS.map(b => (
              <div key={b.month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{ width: '100%', background: T.primary, borderRadius: '4px 4px 0 0', height: `${(b.val / b.max) * 100}px` }} />
                <div style={{ fontSize: 11, color: T.textMuted }}>{b.month}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {/* Transactions */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 16 }}>Recent Large Transactions</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${T.border}` }}>
                  {['Entity', 'Reference', 'Category', 'Amount', 'Status'].map(h => (
                    <th key={h} style={{ textAlign: 'left', paddingBottom: 8, fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: 'uppercase', paddingRight: 12 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TRANSACTIONS.map((t, i) => (
                  <tr key={t.ref} style={{ borderBottom: i < TRANSACTIONS.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                    <td style={{ padding: '10px 12px 10px 0', fontSize: 13, fontWeight: 600, color: T.textPrimary }}>{t.entity}</td>
                    <td style={{ paddingRight: 12, fontSize: 11, fontFamily: 'monospace', color: T.textMuted }}>{t.ref}</td>
                    <td style={{ paddingRight: 12, fontSize: 12, color: T.textMuted }}>{t.category}</td>
                    <td style={{ paddingRight: 12, fontSize: 13, fontWeight: 700, color: T.textPrimary }}>{t.amount}</td>
                    <td>
                      <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, background: t.status === 'Cleared' ? T.ai + '20' : T.xp + '20', color: t.status === 'Cleared' ? T.ai : T.xp }}>{t.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pending Invoices */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.xp }}>warning</span>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Pending Invoices</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
              {PENDING.map(p => (
                <div key={p.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', background: p.color + '10', border: `1px solid ${p.color}30`, borderRadius: 10 }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: T.textPrimary }}>{p.label}</div>
                    <div style={{ fontSize: 12, color: T.textMuted }}>{p.count} · {p.amount}</div>
                  </div>
                  <button style={{ fontSize: 12, color: T.primary, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>{p.action}</button>
                </div>
              ))}
            </div>
            <div style={{ background: T.ai + '08', border: `1px solid ${T.ai}30`, borderRadius: 10, padding: '10px 14px', marginBottom: 12, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <span style={{ fontSize: 12, color: T.ai }}>✦</span>
              <p style={{ fontSize: 12, color: T.textMuted }}>92% of pending invoices are projected to clear within the next 8 business days based on payment patterns.</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: T.textMuted }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.ai }}>credit_card</span>
              Stripe Sync Active — Last synced 2m ago
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
