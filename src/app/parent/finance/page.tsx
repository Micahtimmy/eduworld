'use client'
import Link from 'next/link'

const T = {
  bg: '#f9f9ff', surface: '#ffffff', primary: '#003f7a',
  ai: '#10B981', xp: '#F59E0B', textPrimary: '#191c20',
  textMuted: '#424750', border: '#c2c6d2', error: '#ba1a1a',
  green: '#10B981', indigo: '#4F46E5',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
}

const sidebarItems = [
  { icon: 'dashboard', label: 'Dashboard', href: '/parent/dashboard' },
  { icon: 'payments', label: 'Finances', href: '/parent/finance', active: true },
  { icon: 'workspace_premium', label: 'Achiever', href: '/parent/performance' },
  { icon: 'analytics', label: 'Insights', href: '/parent/behavior' },
]

const SUBSCRIPTIONS = [
  { plan: 'Explorer Tier', student: 'Liam Smith', price: '$29/mo', color: '#06B6D4' },
  { plan: 'Achiever Tier ✨', student: 'Emma Smith', price: '$49/mo', color: T.indigo },
]

const TRANSACTIONS = [
  { date: 'Sept 01, 2024', desc: 'Monthly Tuition - Fall Term', amount: '$1,100.00' },
  { date: 'Aug 28, 2024', desc: 'Chess Club Subscription', amount: '$45.00' },
  { date: 'Aug 15, 2024', desc: '2,000 XP Bundle Purchase', amount: '$18.00' },
  { date: 'Aug 10, 2024', desc: 'Annual Facility Fee', amount: '$250.00' },
]

function Sidebar() {
  return (
    <aside style={{ width: 240, minHeight: '100vh', background: '#1a1a2e', display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0 }}>
      <div style={{ padding: '0 20px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: T.indigo, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#fff' }}>school</span>
          </div>
          <div>
            <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 16, color: '#fff' }}>EduWorld</div>
            <div style={{ fontSize: 10, color: '#8899AA' }}>Intelligent Platform</div>
          </div>
        </div>
      </div>
      <nav style={{ flex: 1, padding: '16px 12px' }}>
        {sidebarItems.map(item => (
          <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, marginBottom: 4, background: item.active ? T.indigo + '30' : 'transparent', color: item.active ? '#fff' : '#8899AA', fontFamily: T.fontBody, fontWeight: item.active ? 600 : 400, fontSize: 14 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
      <div style={{ padding: '16px 12px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        {[{ icon: 'auto_awesome', label: 'AI Assistant' }, { icon: 'settings', label: 'Settings' }, { icon: 'logout', label: 'Logout' }].map(item => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 12px', borderRadius: 8, color: '#8899AA', fontSize: 14, cursor: 'pointer' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{item.icon}</span>
            {item.label}
          </div>
        ))}
      </div>
    </aside>
  )
}

export default function ParentFinancePage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 26, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Financial Center</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Manage your school commitments, subscriptions, and student XP credits.</p>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.textMuted }}>
              <span className="material-symbols-outlined" style={{ fontSize: 22 }}>auto_awesome</span>
            </button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.textMuted }}>
              <span className="material-symbols-outlined" style={{ fontSize: 22 }}>notifications</span>
            </button>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: T.indigo + '20', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.indigo }}>person</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
          {/* Outstanding Balance */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: T.primary + '15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.primary }}>account_balance_wallet</span>
              </div>
            </div>
            <div style={{ fontFamily: T.fontHead, fontSize: 34, fontWeight: 900, color: T.textPrimary, marginBottom: 6 }}>$1,240.00 USD</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 20 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 14, color: T.error }}>event_busy</span>
              <span style={{ fontSize: 13, color: T.error }}>Due in 4 days (Sept 15, 2024)</span>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button style={{ flex: 1, padding: '10px', background: T.indigo, color: '#fff', border: 'none', borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>Pay Now</button>
              <button style={{ flex: 1, padding: '10px', background: 'transparent', color: T.indigo, border: `1px solid ${T.indigo}`, borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>View Itemized Bill</button>
            </div>
          </div>

          {/* Premium Plans */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.indigo }}>verified</span>
                <h2 style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary, margin: 0 }}>Premium Plans</h2>
              </div>
              <span style={{ fontSize: 11, fontWeight: 700, color: T.green, background: T.green + '15', padding: '2px 9px', borderRadius: 10 }}>Active</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SUBSCRIPTIONS.map(sub => (
                <div key={sub.student} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: '#F8FAFF', border: `1px solid ${T.border}`, borderRadius: 10 }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: sub.color }}>{sub.plan}</div>
                    <div style={{ fontSize: 11, color: T.textMuted }}>{sub.student}</div>
                  </div>
                  <div style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 800, color: T.textPrimary }}>{sub.price}</div>
                </div>
              ))}
            </div>
            <button style={{ marginTop: 14, width: '100%', padding: '9px', background: 'transparent', border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textMuted, cursor: 'pointer' }}>
              Manage Subscriptions
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 20 }}>
          {/* Quick Recharge */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.xp }}>token</span>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary, margin: 0 }}>Quick Recharge</h2>
            </div>
            <div style={{ fontFamily: T.fontHead, fontSize: 26, fontWeight: 900, color: T.xp, marginBottom: 4 }}>5,200 XP</div>
            <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 18 }}>Available Balance</div>
            <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
              <button style={{ flex: 1, padding: '10px', background: T.xp + '15', color: T.xp, border: `1px solid ${T.xp}40`, borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>+500 XP ($5)</button>
              <button style={{ flex: 1, padding: '10px', background: T.indigo + '10', color: T.indigo, border: `1px solid ${T.indigo}40`, borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>+2k XP ($18)</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', background: T.indigo + '08', borderRadius: 10 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.indigo }}>stars</span>
              <span style={{ fontSize: 12, color: T.textPrimary }}>Emma reached &apos;Expert&apos; — Get 10% off next XP buy!</span>
            </div>
          </div>

          {/* Recent Transactions */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary, margin: 0 }}>Recent Transactions</h2>
              <div style={{ display: 'flex', gap: 8 }}>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.textMuted }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>filter_list</span>
                </button>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.textMuted }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>download</span>
                </button>
              </div>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${T.border}` }}>
                  {['Date', 'Description', 'Amount', 'Receipt'].map(h => (
                    <th key={h} style={{ textAlign: 'left', fontSize: 11, fontWeight: 700, color: T.textMuted, padding: '0 0 10px', textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TRANSACTIONS.map((tx, i) => (
                  <tr key={i} style={{ borderBottom: i < TRANSACTIONS.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                    <td style={{ padding: '12px 0', fontSize: 12, color: T.textMuted, whiteSpace: 'nowrap' }}>{tx.date}</td>
                    <td style={{ padding: '12px 0', fontSize: 13, color: T.textPrimary }}>{tx.desc}</td>
                    <td style={{ padding: '12px 0', fontSize: 13, fontWeight: 700, color: T.textPrimary }}>{tx.amount}</td>
                    <td style={{ padding: '12px 0' }}>
                      <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.textMuted }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>receipt_long</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 14, fontSize: 13, fontWeight: 600, color: T.indigo, textDecoration: 'none' }}>
              View Full History <span className="material-symbols-outlined" style={{ fontSize: 14 }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Floating AI Assistant */}
      <div style={{ position: 'fixed', bottom: 28, right: 28 }}>
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: '10px 14px', marginBottom: 8, boxShadow: '0 4px 20px rgba(0,0,0,0.1)', maxWidth: 220, fontSize: 13, color: T.textMuted }}>
          How can I help with payments today?
        </div>
        <button style={{ width: 48, height: 48, borderRadius: '50%', background: T.indigo, color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 16px rgba(79,70,229,0.4)', marginLeft: 'auto' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 22 }}>auto_awesome</span>
        </button>
      </div>
    </div>
  )
}
