'use client'
import Link from 'next/link'

const T = {
  bg: '#f9f9ff', surface: '#ffffff', primary: '#003f7a',
  ai: '#10B981', xp: '#F59E0B', textPrimary: '#191c20',
  textMuted: '#424750', border: '#c2c6d2', error: '#ba1a1a',
  indigo: '#4F46E5', indigoLight: '#EEF2FF',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
}

const sidebarItems = [
  { icon: 'dashboard', label: 'Overview', href: '/parent/dashboard' },
  { icon: 'security', label: 'Safety', href: '/parent/attendance' },
  { icon: 'school', label: 'Academic Mastery', href: '/parent/performance' },
  { icon: 'payments', label: 'Finance', href: '/parent/billing' },
  { icon: 'library_books', label: 'Resources', href: '/parent/documents' },
  { icon: 'token', label: 'XP Activity', href: '/parent/xp-history', active: true },
]

const TRANSACTIONS = [
  { date: 'Oct 24, 2023', time: '14:32 PM', title: 'Perfect Score: Math Quiz', sub: 'Algebraic Foundations Module 4', category: 'Academic Achievement', categoryIcon: 'school', amount: '+500 XP', positive: true, status: 'Credited', statusIcon: 'check_circle' },
  { date: 'Oct 23, 2023', time: '09:15 AM', title: 'Unlocked: Advanced Python Course', sub: 'Premium Learning Path', category: 'Course Unlock', categoryIcon: 'rocket_launch', amount: '-1,200 XP', positive: false, status: 'Redeemed', statusIcon: 'shopping_cart' },
  { date: 'Oct 22, 2023', time: '17:45 PM', title: 'Weekly Streak Reward', sub: '7 Consecutive Days Active', category: 'Behaviour Reward', categoryIcon: 'military_tech', amount: '+250 XP', positive: true, status: 'Credited', statusIcon: 'check_circle' },
  { date: 'Oct 21, 2023', time: '11:20 AM', title: 'Legendary Sword Avatar Item', sub: 'Virtual Store Purchase', category: 'Store Item', categoryIcon: 'storefront', amount: '-3,500 XP', positive: false, status: 'Purchased', statusIcon: 'local_mall' },
]

const SPEND_CATS = [
  { label: 'Store Items', pct: 45, color: T.indigo },
  { label: 'Course Unlocks', pct: 30, color: '#06B6D4' },
  { label: 'Game Avatars', pct: 25, color: '#8B5CF6' },
]

function Sidebar() {
  return (
    <aside style={{ width: 260, minHeight: '100vh', background: T.surface, borderRight: `1px solid ${T.border}`, display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0 }}>
      <div style={{ padding: '0 20px 24px', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: T.primary }}>EduWorld</div>
        <span style={{ display: 'inline-block', marginTop: 4, fontSize: 11, fontWeight: 600, color: T.primary, background: '#e8f0fe', borderRadius: 6, padding: '2px 8px' }}>Parent</span>
      </div>
      <nav style={{ flex: 1, padding: '16px 12px' }}>
        {sidebarItems.map(item => (
          <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, marginBottom: 2, background: item.active ? '#f3f3f9' : 'transparent', borderLeft: item.active ? `3px solid ${T.primary}` : '3px solid transparent', color: item.active ? T.primary : T.textMuted, fontFamily: T.fontBody, fontWeight: item.active ? 600 : 400, fontSize: 14 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
      <div style={{ padding: '16px' }}>
        <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', background: T.indigo + '10', border: `1px solid ${T.indigo}30`, borderRadius: 10, fontSize: 13, color: T.indigo, fontWeight: 600, cursor: 'pointer', width: '100%' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>auto_awesome</span>
          AI Insights
        </button>
      </div>
    </aside>
  )
}

export default function ParentXpHistoryPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        {/* Breadcrumb + Title */}
        <p style={{ fontSize: 12, color: T.textMuted, margin: '0 0 6px' }}>Finance › XP Activity</p>
        <div style={{ marginBottom: 24 }}>
          <h1 style={{ fontFamily: T.fontHead, fontSize: 26, fontWeight: 800, color: T.textPrimary, margin: 0 }}>XP Activity Log</h1>
          <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Monitor educational rewards and redemption history for Alex&apos;s account.</p>
        </div>

        {/* Summary Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 24 }}>
          {/* Available Balance */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 22 }}>
            <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 8 }}>Available Balance</div>
            <div style={{ fontFamily: T.fontHead, fontSize: 28, fontWeight: 900, color: T.textPrimary, marginBottom: 10 }}>12,450 XP</div>
            <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 6, display: 'flex', justifyContent: 'space-between' }}>
              <span>Tier Progress (Gold)</span>
              <span style={{ fontWeight: 700, color: T.xp }}>85%</span>
            </div>
            <div style={{ height: 8, background: '#F3F4F6', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ width: '85%', height: '100%', background: `linear-gradient(90deg, ${T.xp}, #F97316)`, borderRadius: 4 }} />
            </div>
          </div>

          {/* Earned This Month */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 22 }}>
            <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 8 }}>Earned This Month</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.ai }}>trending_up</span>
              <div style={{ fontFamily: T.fontHead, fontSize: 28, fontWeight: 900, color: T.ai }}>+2,800</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ fontSize: 12, color: T.ai }}>✦</span>
              <span style={{ fontSize: 12, color: T.textMuted }}>15% more than last month</span>
            </div>
          </div>

          {/* Top Spending Categories */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 22 }}>
            <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 12 }}>Top Spending Categories</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {SPEND_CATS.map(c => (
                <div key={c.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                    <span style={{ fontSize: 12, color: T.textPrimary }}>{c.label}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: c.color }}>{c.pct}%</span>
                  </div>
                  <div style={{ height: 6, background: '#F3F4F6', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ width: `${c.pct}%`, height: '100%', background: c.color, borderRadius: 3 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transaction Table */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 20 }}>
          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 12px', background: '#F9FAFB', border: `1px solid ${T.border}`, borderRadius: 10 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.textMuted }}>search</span>
                <input placeholder="Search transactions..." style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: 13, color: T.textPrimary, width: 180 }} />
              </div>
              <button style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '8px 12px', background: '#F9FAFB', border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textMuted, cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>filter_list</span> Filter
              </button>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              {['All', 'Earned', 'Spent'].map(tab => (
                <button key={tab} style={{ padding: '6px 14px', background: tab === 'All' ? T.indigo : 'transparent', color: tab === 'All' ? '#fff' : T.textMuted, border: `1px solid ${tab === 'All' ? T.indigo : T.border}`, borderRadius: 8, fontSize: 13, fontWeight: tab === 'All' ? 600 : 400, cursor: 'pointer' }}>{tab}</button>
              ))}
              <button style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '6px 12px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 13, color: T.textMuted, cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>download</span> Export CSV
              </button>
              <button style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '6px 12px', background: T.primary, color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>add</span> Grant Manual XP
              </button>
            </div>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${T.border}` }}>
                {['DATE & TIME', 'TRANSACTION', 'CATEGORY', 'AMOUNT', 'STATUS', ''].map(h => (
                  <th key={h} style={{ textAlign: 'left', fontSize: 11, fontWeight: 700, color: T.textMuted, padding: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TRANSACTIONS.map((tx, i) => (
                <tr key={i} style={{ borderBottom: i < TRANSACTIONS.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                  <td style={{ padding: '14px 0' }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: T.textPrimary }}>{tx.date}</div>
                    <div style={{ fontSize: 11, color: T.textMuted }}>{tx.time}</div>
                  </td>
                  <td style={{ padding: '14px 0' }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: T.textPrimary }}>{tx.title}</div>
                    <div style={{ fontSize: 11, color: T.textMuted }}>{tx.sub}</div>
                  </td>
                  <td style={{ padding: '14px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 14, color: T.indigo }}>{tx.categoryIcon}</span>
                      <span style={{ fontSize: 12, color: T.textMuted }}>{tx.category}</span>
                    </div>
                  </td>
                  <td style={{ padding: '14px 0' }}>
                    <span style={{ fontSize: 14, fontWeight: 800, color: tx.positive ? T.ai : T.error }}>{tx.amount}</span>
                  </td>
                  <td style={{ padding: '14px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 14, color: tx.positive ? T.ai : T.textMuted }}>{tx.statusIcon}</span>
                      <span style={{ fontSize: 12, color: tx.positive ? T.ai : T.textMuted }}>{tx.status}</span>
                    </div>
                  </td>
                  <td style={{ padding: '14px 0' }}>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.textMuted }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, paddingTop: 16, borderTop: `1px solid ${T.border}` }}>
            <span style={{ fontSize: 12, color: T.textMuted }}>Showing 1 to 4 of 128 transactions</span>
            <div style={{ display: 'flex', gap: 6 }}>
              {[1, 2, 3, '...'].map((p, i) => (
                <button key={i} style={{ width: 30, height: 30, borderRadius: 6, border: `1px solid ${p === 1 ? T.indigo : T.border}`, background: p === 1 ? T.indigo : T.surface, color: p === 1 ? '#fff' : T.textMuted, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{p}</button>
              ))}
              <button style={{ padding: '0 8px', height: 30, borderRadius: 6, border: `1px solid ${T.border}`, background: T.surface, color: T.textMuted, fontSize: 13, cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* AI Analysis */}
        <div style={{ background: T.indigo + '08', border: `1px solid ${T.indigo}30`, borderRadius: 16, padding: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.indigo }}>auto_awesome</span>
            <span style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary }}>EduWorld AI Transaction Analysis</span>
          </div>
          <p style={{ fontSize: 14, color: T.textMuted, margin: '0 0 14px' }}>Alex earns XP faster in Science than Mathematics. There&apos;s a clear pattern of saving for premium course unlocks — this signals strong intrinsic learning motivation and strategic thinking about educational investments.</p>
          <Link href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 700, color: T.indigo, textDecoration: 'none' }}>
            View Full Learning Report <span className="material-symbols-outlined" style={{ fontSize: 14 }}>arrow_forward</span>
          </Link>
        </div>
      </main>
    </div>
  )
}
