'use client'
import Link from 'next/link'

const T = {
  bg: '#f9f9ff', surface: '#ffffff', primary: '#003f7a',
  ai: '#10B981', xp: '#F59E0B', textPrimary: '#191c20',
  textMuted: '#424750', border: '#c2c6d2', error: '#ba1a1a',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
}

const sidebarItems = [
  { icon: 'dashboard', label: 'Dashboard', href: '/parent/dashboard' },
  { icon: 'people', label: 'My Children', href: '/parent/multi-child' },
  { icon: 'calendar_month', label: 'Calendar', href: '/parent/calendar' },
  { icon: 'folder', label: 'Documents', href: '/parent/documents' },
  { icon: 'sports_soccer', label: 'Extracurricular', href: '/parent/extracurricular' },
  { icon: 'chat', label: 'Messages', href: '/parent/messages' },
  { icon: 'payments', label: 'Tuition & Fees', href: '/parent/tuition', active: true },
]

const INVOICE_ITEMS = [
  { icon: 'school', label: 'Tuition Fees — Year 11', desc: 'Standard curriculum coverage', amount: '$4,250.00' },
  { icon: 'science', label: 'Practical Lab Fees', desc: 'Physics & Chemistry equipment', amount: '$450.00' },
  { icon: 'sports', label: 'Extracurricular: Advanced Robotics', desc: 'Club materials & competition entry', amount: '$225.00' },
  { icon: 'receipt', label: 'Tax (VAT 5%)', desc: '', amount: '$246.25' },
]

const TRANSACTIONS = [
  { date: 'Oct 12, 2025', ref: '#TRX-9981-L', type: 'Term 1 Tuition', method: 'Bank Transfer', amount: '$4,925.00' },
  { date: 'Sep 05, 2025', ref: '#TRX-8210-X', type: 'Uniforms & Kits', method: 'Visa ****4412', amount: '$320.50' },
  { date: 'Aug 22, 2025', ref: '#TRX-7741-K', type: 'Tech Deposit', method: 'Cash at Desk', amount: '$1,000.00' },
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
    </aside>
  )
}

export default function ParentTuitionPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32, maxWidth: 800 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: T.primary, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Academic Year 2025/26</p>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Financial Statement</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Tuition & Lab Fees for Alex Johnson · St. Xavier High</p>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span>
            Statement PDF
          </button>
        </div>

        {/* Invoice */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 28, marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16, color: T.textPrimary }}>Term 2 Invoice: #INV-2025-082</div>
              <div style={{ fontSize: 13, color: T.textMuted }}>Alex Johnson · Grade 11 · St. Xavier High</div>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, background: T.xp + '20', color: T.xp, padding: '4px 12px', borderRadius: 20 }}>Due in 5 Days</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {INVOICE_ITEMS.map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 0', borderBottom: `1px solid ${T.border}` }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: T.primary + '10', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.primary }}>{item.icon}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: T.textPrimary }}>{item.label}</div>
                  {item.desc && <div style={{ fontSize: 12, color: T.textMuted }}>{item.desc}</div>}
                </div>
                <div style={{ fontWeight: 700, fontSize: 15, color: T.textPrimary }}>{item.amount}</div>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16 }}>
              <span style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 16, color: T.textPrimary }}>Total Payable</span>
              <span style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 22, color: T.primary }}>$5,171.25</span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 28, marginBottom: 24 }}>
          <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 4 }}>Quick Pay</h2>
          <p style={{ fontSize: 13, color: T.textMuted, marginBottom: 18 }}>Select your preferred secure payment method.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', border: `2px solid ${T.primary}`, borderRadius: 12, background: T.primary + '05', cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.primary }}>credit_card</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>Debit / Credit Card</div>
                <div style={{ fontSize: 12, color: T.textMuted }}>Secure Stripe processing</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', border: `1px solid ${T.border}`, borderRadius: 12, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.textMuted }}>account_balance</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>Bank Transfer</div>
                <div style={{ fontSize: 12, color: T.textMuted }}>0.5% Discount applies</div>
              </div>
            </div>
          </div>

          {/* AI Tip */}
          <div style={{ background: T.ai + '08', border: `1px solid ${T.ai}30`, borderRadius: 10, padding: '10px 14px', marginBottom: 18, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <span style={{ fontSize: 13, color: T.ai }}>✦</span>
            <span style={{ fontSize: 12, color: T.textMuted }}>Setting up an automatic payment plan could save you $50 in transaction fees this year.</span>
          </div>

          <button style={{ width: '100%', padding: '12px 0', background: T.primary, color: '#fff', border: 'none', borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: 'pointer', marginBottom: 10 }}>
            Confirm & Pay $5,171.25
          </button>
          <button style={{ width: '100%', fontSize: 13, color: T.primary, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>
            Need Financial Aid? Ask about installment plans or scholarships →
          </button>
        </div>

        {/* Payment History */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 28 }}>
          <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 16 }}>Payment History</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {TRANSACTIONS.map(t => (
              <div key={t.ref} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', background: T.bg, borderRadius: 10 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.ai }}>check_circle</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 13, color: T.textPrimary }}>{t.type}</div>
                  <div style={{ fontSize: 11, color: T.textMuted }}>{t.date} · {t.ref} · {t.method}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>{t.amount}</div>
                  <button style={{ fontSize: 11, color: T.primary, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 3 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 13 }}>receipt</span>
                    Receipt
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button style={{ fontSize: 13, color: T.primary, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', marginTop: 12 }}>View All History →</button>
        </div>
      </main>
    </div>
  )
}
