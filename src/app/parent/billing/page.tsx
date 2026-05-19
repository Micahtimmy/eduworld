'use client'
import Link from 'next/link'

const T = {
  bg: '#f9f9ff', surface: '#ffffff', primary: '#003f7a',
  ai: '#10B981', xp: '#F59E0B', textPrimary: '#191c20',
  textMuted: '#424750', border: '#c2c6d2', error: '#ba1a1a',
  amber: '#F59E0B', green: '#10B981', red: '#EF4444',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
}

const sidebarItems = [
  { icon: 'dashboard', label: 'Dashboard', href: '/parent/dashboard' },
  { icon: 'people', label: 'My Children', href: '/parent/multi-child' },
  { icon: 'insights', label: 'Performance', href: '/parent/performance' },
  { icon: 'calendar_month', label: 'Calendar', href: '/parent/calendar' },
  { icon: 'folder', label: 'Documents', href: '/parent/documents' },
  { icon: 'payments', label: 'Billing', href: '/parent/billing', active: true },
  { icon: 'chat', label: 'Messages', href: '/parent/messages' },
  { icon: 'payments', label: 'Tuition & Fees', href: '/parent/tuition' },
]

const LEO_ITEMS = [
  { service: 'Semester 2 Tuition', desc: 'Standard High School Curriculum', category: 'Tuition', amount: 2200, status: 'Unpaid' },
  { service: 'Advanced Physics Lab Fee', desc: 'Materials & Equipment', category: 'Lab Fees', amount: 450, status: 'Paid' },
  { service: 'Varsity Basketball Membership', desc: 'Coaching & Facility Access', category: 'Extracurricular', amount: 200, status: 'Unpaid' },
]

const MAYA_ITEMS = [
  { service: 'Semester 2 Tuition', desc: 'Middle School Curriculum', category: 'Tuition', amount: 1400, status: 'Overdue' },
]

const ACTIVITY = [
  { icon: 'receipt_long', title: 'Payment Confirmed #INV-2024-001', sub: 'Paid via Visa ending in 4242', amount: '-$1,250.00', amountColor: T.red, date: 'Sep 28, 2024' },
  { icon: 'verified', title: 'Account Credit Applied', sub: 'Referral Bonus - Fall Season', amount: '+$150.00', amountColor: T.green, date: 'Sep 25, 2024' },
]

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, { bg: string; color: string }> = {
    Paid: { bg: '#D1FAE5', color: '#065F46' },
    Unpaid: { bg: '#FEF3C7', color: '#92400E' },
    Overdue: { bg: '#FEE2E2', color: '#991B1B' },
  }
  const c = colors[status] ?? colors['Unpaid']
  return <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, background: c.bg, color: c.color }}>{status}</span>
}

function Sidebar() {
  return (
    <aside style={{ width: 260, minHeight: '100vh', background: T.surface, borderRight: `1px solid ${T.border}`, display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0 }}>
      <div style={{ padding: '0 20px 24px', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: T.primary }}>EduWorld</div>
        <span style={{ display: 'inline-block', marginTop: 4, fontSize: 11, fontWeight: 600, color: T.primary, background: '#e8f0fe', borderRadius: 6, padding: '2px 8px' }}>Parent</span>
      </div>
      <nav style={{ flex: 1, padding: '16px 12px' }}>
        {sidebarItems.map(item => (
          <Link key={item.href + item.label} href={item.href} style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, marginBottom: 2, background: item.active ? '#f3f3f9' : 'transparent', borderLeft: item.active ? `3px solid ${T.primary}` : '3px solid transparent', color: item.active ? T.primary : T.textMuted, fontFamily: T.fontBody, fontWeight: item.active ? 600 : 400, fontSize: 14 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
      <div style={{ padding: '0 16px 16px' }}>
        <div style={{ background: T.primary + '10', borderRadius: 12, padding: '12px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <span style={{ fontSize: 13, color: T.ai }}>✦</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: T.textPrimary }}>EduWorld AI</span>
          </div>
          <p style={{ fontSize: 11, color: T.textMuted, margin: 0 }}>Ask about invoices, payments, or fee schedules.</p>
        </div>
      </div>
    </aside>
  )
}

function ChildFeeCard({ name, grade, total, items }: { name: string; grade: string; total: string; items: typeof LEO_ITEMS }) {
  return (
    <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: T.primary + '15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.primary }}>person</span>
          </div>
          <div>
            <div style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary }}>{name}</div>
            <div style={{ fontSize: 12, color: T.textMuted }}>{grade}</div>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 12, color: T.textMuted }}>Current Term Total</div>
          <div style={{ fontFamily: T.fontHead, fontSize: 18, fontWeight: 800, color: T.primary }}>{total}</div>
        </div>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: `1px solid ${T.border}` }}>
            {['Service', 'Category', 'Amount', 'Status', 'Action'].map(h => (
              <th key={h} style={{ textAlign: 'left', fontSize: 11, fontWeight: 700, color: T.textMuted, padding: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i} style={{ borderBottom: i < items.length - 1 ? `1px solid ${T.border}` : 'none' }}>
              <td style={{ padding: '12px 0' }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: T.textPrimary }}>{item.service}</div>
                <div style={{ fontSize: 11, color: T.textMuted }}>{item.desc}</div>
              </td>
              <td style={{ padding: '12px 0', fontSize: 12, color: T.textMuted }}>{item.category}</td>
              <td style={{ padding: '12px 0', fontSize: 14, fontWeight: 700, color: T.textPrimary }}>${item.amount.toLocaleString()}.00</td>
              <td style={{ padding: '12px 0' }}><StatusBadge status={item.status} /></td>
              <td style={{ padding: '12px 0' }}>
                {item.status === 'Paid' ? (
                  <button style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '5px 10px', background: 'transparent', border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.textMuted, cursor: 'pointer' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>download</span>
                  </button>
                ) : (
                  <button style={{ padding: '5px 12px', background: item.status === 'Overdue' ? T.red : T.primary, color: '#fff', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                    {item.status === 'Overdue' ? 'Resolve' : 'Pay Now'}
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function ParentBillingPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 26, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Financial Ledger</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Household billing overview and payment management.</p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>filter_list</span> Filter
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span> Export CSV
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
          {/* Left: Balance + AI + Children */}
          <div>
            {/* Outstanding Balance */}
            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: T.primary + '15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.primary }}>account_balance_wallet</span>
                </div>
                <span style={{ fontSize: 13, color: T.textMuted }}>Outstanding Balance</span>
              </div>
              <div style={{ fontFamily: T.fontHead, fontSize: 36, fontWeight: 900, color: T.textPrimary, marginBottom: 4 }}>$4,250.00</div>
              <div style={{ fontSize: 13, color: T.textMuted, marginBottom: 20 }}>Due by October 15, 2024</div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button style={{ flex: 1, padding: '11px', background: T.primary, color: '#fff', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>Pay Total Balance</button>
                <button style={{ flex: 1, padding: '11px', background: 'transparent', color: T.primary, border: `1px solid ${T.primary}`, borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>Payment Schedule</button>
              </div>
            </div>

            {/* AI Insights Banner */}
            <div style={{ background: T.ai + '08', border: `1px solid ${T.ai}40`, borderRadius: 12, padding: '14px 18px', marginBottom: 24 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                <span style={{ color: T.ai, fontSize: 14 }}>✦</span>
                <p style={{ fontSize: 13, color: T.textPrimary, margin: 0 }}>Your household expenses are 12% lower than last semester due to the multi-child discount applied.</p>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 12, color: T.textMuted }}>Term Progress</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: T.ai }}>65%</span>
                </div>
                <div style={{ height: 8, background: '#E5E7EB', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ width: '65%', height: '100%', background: T.ai, borderRadius: 4 }} />
                </div>
              </div>
            </div>

            {/* Household Breakdown */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <div>
                <h2 style={{ fontFamily: T.fontHead, fontSize: 18, fontWeight: 700, color: T.textPrimary, margin: 0 }}>Household Breakdown</h2>
                <p style={{ fontSize: 13, color: T.textMuted, marginTop: 4 }}>Detailed costs for all children registered under this account.</p>
              </div>
            </div>

            <ChildFeeCard name="Leo Thompson" grade="Grade 11 • Science Stream" total="$2,850.00" items={LEO_ITEMS} />
            <ChildFeeCard name="Maya Thompson" grade="Grade 8 • General Education" total="$1,400.00" items={MAYA_ITEMS} />
          </div>

          {/* Right: Activity + Payment Methods */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Recent Activity */}
            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 22 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.primary }}>receipt_long</span>
                <h2 style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary, margin: 0 }}>Recent Activity</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {ACTIVITY.map((a, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ width: 34, height: 34, borderRadius: 10, background: T.primary + '10', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.primary }}>{a.icon}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: T.textPrimary }}>{a.title}</div>
                      <div style={{ fontSize: 11, color: T.textMuted }}>{a.sub}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: a.amountColor }}>{a.amount}</div>
                      <div style={{ fontSize: 11, color: T.textMuted }}>{a.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 22 }}>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary, marginBottom: 16 }}>Payment Methods</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: '#F8FAFF', border: `1px solid ${T.border}`, borderRadius: 10, marginBottom: 10 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.primary }}>credit_card</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: T.textPrimary }}>Visa ending in 4242</div>
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: T.ai, background: T.ai + '15', padding: '2px 8px', borderRadius: 10 }}>Default</span>
              </div>
              <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 0', background: 'transparent', border: 'none', color: T.primary, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>add</span>
                Add Payment Method
              </button>
            </div>

            {/* Billing Email */}
            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 22 }}>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary, marginBottom: 14 }}>Billing Email</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.textMuted }}>mail</span>
                <span style={{ fontSize: 13, color: T.textPrimary }}>mark.thompson@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
