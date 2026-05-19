'use client'

import Link from 'next/link'

const sidebarStyle: React.CSSProperties = { width: 260, minWidth: 260, background: '#003f7a', height: '100vh', position: 'fixed', top: 0, left: 0, display: 'flex', flexDirection: 'column', zIndex: 40 }
const navItemStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, color: 'rgba(255,255,255,0.75)', fontSize: 14, fontWeight: 500, cursor: 'pointer', marginBottom: 2, textDecoration: 'none' }
const cardStyle: React.CSSProperties = { background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2', padding: 24, boxShadow: '0 1px 4px rgba(0,0,0,0.05)', marginBottom: 20 }

const NAV = [
  { icon: 'dashboard', label: 'Dashboard', href: '/scholar/command-center', active: false },
  { icon: 'school', label: 'Courses', href: '/scholar/course-registration', active: false },
  { icon: 'science', label: 'Research', href: '/scholar/research-workspace', active: false },
  { icon: 'menu_book', label: 'Library', href: '/scholar/library', active: false },
  { icon: 'account_balance', label: 'Financial Aid', href: '/scholar/financial-aid', active: true },
  { icon: 'work', label: 'Careers', href: '/scholar/careers', active: false },
  { icon: 'people', label: 'Community', href: '/scholar/networking', active: false },
]

const SCHOLARSHIPS = [
  { letter: 'S', name: 'STEM Excellence Fellowship', desc: 'Awarded to top engineering students researching sustainable energy systems.', tag: 'RESEARCH MERIT', amount: '$15,000', fit: 98 },
  { letter: 'N', name: 'National Tech Consortium Grant', desc: 'Funding for juniors and seniors involved in published computing research.', tag: 'CS PUBLISHED', amount: '$5,000', fit: 92 },
  { letter: 'A', name: 'Alumni Memorial Fund', desc: 'General scholarship for returning students maintaining a GPA above 3.5.', tag: 'GENERAL', amount: 'Variable', fit: 85 },
]

const LEDGER = [
  { date: 'Sep 01, 2024', desc: 'University Merit Scholarship · Fall 2024', type: 'GRANT', amount: '$12,000.00', cleared: true },
  { date: 'Sep 05, 2024', desc: 'Federal Pell Grant · Fall 2024', type: 'GRANT', amount: '$3,245.00', cleared: true },
  { date: 'Jan 15, 2025', desc: 'University Merit Scholarship · Spring 2025', type: 'GRANT', amount: '$12,000.00', cleared: false },
  { date: 'Feb 01, 2025', desc: 'Research Assistantship Stipend', type: 'STIPEND', amount: '$1,800.00', cleared: true },
]

export default function FinancialAidPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f9f9ff', fontFamily: '"Inter", system-ui, sans-serif' }}>
      <aside style={sidebarStyle}>
        <div style={{ padding: '24px 20px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ color: '#fff', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 20 }}>EduWorld</div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, marginTop: 2 }}>Scholar Portal</div>
        </div>
        <nav style={{ flex: 1, padding: '12px 12px', overflowY: 'auto' }}>
          {NAV.map(item => (
            <Link key={item.href} href={item.href} style={{ ...navItemStyle, ...(item.active ? { background: 'rgba(255,255,255,0.15)', borderLeft: '3px solid #fff', paddingLeft: 9, color: '#fff' } : {}) as React.CSSProperties }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div style={{ padding: '12px 12px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Link href="/settings" style={navItemStyle}><span className="material-symbols-outlined" style={{ fontSize: 20 }}>settings</span>Settings</Link>
          <Link href="/help" style={navItemStyle}><span className="material-symbols-outlined" style={{ fontSize: 20 }}>help</span>Help</Link>
        </div>
      </aside>

      <main style={{ marginLeft: 260, flex: 1, padding: 32 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Financial Aid & Scholarship Hub</h1>
            <p style={{ color: '#424750', fontSize: 14, marginTop: 6 }}>Academic Year 2024–2025 · Monitor grants, scholarships, and eligibility.</p>
          </div>
          <button style={{ background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 8, padding: '9px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>download</span> Tax Documents
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
          <div>
            {/* Total Aid */}
            <div style={{ background: 'linear-gradient(135deg, #003f7a, #0060b9)', borderRadius: 14, padding: '24px 28px', marginBottom: 20, color: '#fff' }}>
              <div style={{ fontSize: 13, opacity: 0.8, marginBottom: 8 }}>Total Aid Secured (AY 2024–25)</div>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 800, fontSize: 40, marginBottom: 16 }}>$42,500.00</div>
              <div style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, opacity: 0.8, marginBottom: 4 }}>
                  <span>Grants & Scholarships ($36,000)</span><span>85%</span>
                </div>
                <div style={{ height: 6, borderRadius: 99, background: 'rgba(255,255,255,0.2)', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '85%', borderRadius: 99, background: '#fff' }} />
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, opacity: 0.8, marginBottom: 4 }}>
                  <span>Subsidized Loans ($6,500)</span><span>15%</span>
                </div>
                <div style={{ height: 6, borderRadius: 99, background: 'rgba(255,255,255,0.2)', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '15%', borderRadius: 99, background: 'rgba(255,255,255,0.6)' }} />
                </div>
              </div>
            </div>

            {/* Renewal Eligibility */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <span style={{ fontSize: 18 }}>✅</span>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20' }}>Renewal Eligibility</div>
              </div>
              {[
                { label: 'Cumulative GPA 3.9 / 3.0 Required', ok: true },
                { label: 'Credits Earned 68 / 60 Required', ok: true },
                { label: 'FAFSA Submission — PENDING', ok: false, warning: 'Due by March 1st. Missing tax transcript.' },
              ].map((r, i) => (
                <div key={i} style={{ marginBottom: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: 13, color: r.ok ? '#191c20' : '#d97706', fontWeight: r.ok ? 400 : 600 }}>{r.label}</span>
                    <span className="material-symbols-outlined" style={{ fontSize: 18, color: r.ok ? '#10B981' : '#d97706' }}>
                      {r.ok ? 'check_circle' : 'warning'}
                    </span>
                  </div>
                  <div style={{ height: 6, borderRadius: 99, background: '#eef0f4', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: r.ok ? '100%' : '5%', borderRadius: 99, background: r.ok ? '#10B981' : '#f59e0b' }} />
                  </div>
                  {r.warning && <div style={{ fontSize: 12, color: '#d97706', marginTop: 4 }}>{r.warning}</div>}
                </div>
              ))}
            </div>

            {/* Scholarship Matches */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20' }}>
                  <span style={{ marginRight: 8 }}>🧠</span>AI Scholarship Matches
                </div>
                <button style={{ color: '#003f7a', fontSize: 13, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>View All →</button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {SCHOLARSHIPS.map(s => (
                  <div key={s.name} style={{ border: '1px solid #c2c6d2', borderRadius: 12, padding: 18 }}>
                    <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                      <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#003f7a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, flexShrink: 0 }}>{s.letter}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
                          <span style={{ fontWeight: 700, fontSize: 14, color: '#191c20' }}>{s.name}</span>
                          <span style={{ background: '#d1fae5', color: '#10B981', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>FIT {s.fit}%</span>
                        </div>
                        <div style={{ fontSize: 12, color: '#424750', marginBottom: 6 }}>{s.desc}</div>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                          <span style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>{s.tag}</span>
                          <span style={{ fontSize: 13, fontWeight: 700, color: '#191c20' }}>{s.amount}</span>
                        </div>
                      </div>
                    </div>
                    <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '7px', fontWeight: 600, fontSize: 13, cursor: 'pointer', width: '100%' }}>Apply</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Disbursement Ledger */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Disbursement Ledger</div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #c2c6d2' }}>
                    {['Date', 'Transaction', 'Type', 'Amount', 'Status'].map(h => (
                      <th key={h} style={{ textAlign: 'left', padding: '8px 10px', fontSize: 11, fontWeight: 700, color: '#424750', textTransform: 'uppercase' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {LEDGER.map((l, i) => (
                    <tr key={i} style={{ borderBottom: i === LEDGER.length - 1 ? 'none' : '1px solid #eef0f4' }}>
                      <td style={{ padding: '12px 10px', fontSize: 12, color: '#424750' }}>{l.date}</td>
                      <td style={{ padding: '12px 10px', color: '#191c20', fontWeight: 500 }}>{l.desc}</td>
                      <td style={{ padding: '12px 10px' }}>
                        <span style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 11, fontWeight: 700, padding: '2px 6px', borderRadius: 4 }}>{l.type}</span>
                      </td>
                      <td style={{ padding: '12px 10px', fontWeight: 700, color: '#191c20' }}>{l.amount}</td>
                      <td style={{ padding: '12px 10px' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 18, color: l.cleared ? '#10B981' : '#F59E0B' }}>
                          {l.cleared ? 'check_circle' : 'pending'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right */}
          <div>
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20', marginBottom: 14 }}>Financial Summary</div>
              {[
                { label: 'Total Aid (AY)', value: '$42,500' },
                { label: 'Tuition Due', value: '$8,200' },
                { label: 'Balance After Aid', value: '-$34,300' },
                { label: 'Next Payment', value: 'Aug 30, 2025' },
              ].map((s, i) => (
                <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 10, marginBottom: 10, borderBottom: i === 3 ? 'none' : '1px solid #eef0f4' }}>
                  <span style={{ fontSize: 13, color: '#424750' }}>{s.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: s.value.startsWith('-') ? '#10B981' : '#191c20' }}>{s.value}</span>
                </div>
              ))}
              <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '10px', fontWeight: 600, fontSize: 13, cursor: 'pointer', width: '100%', marginTop: 8 }}>Make Payment</button>
            </div>

            <div style={{ background: '#f0fdf4', border: '1px solid #a7f3d0', borderRadius: 14, padding: 20, marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span style={{ color: '#10B981', fontSize: 18, fontWeight: 700 }}>✦</span>
                <span style={{ fontWeight: 600, fontSize: 14, color: '#191c20' }}>Financial Aid Calculator</span>
              </div>
              <p style={{ fontSize: 13, color: '#191c20', lineHeight: 1.6, marginBottom: 12 }}>Based on your current enrollment and GPA, you qualify for an estimated <strong>$44,800</strong> in aid for next academic year — $2,300 more than this year.</p>
              <button style={{ background: '#10B981', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 14px', fontWeight: 600, fontSize: 13, cursor: 'pointer', width: '100%' }}>Calculate Next Year</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
