'use client'

import Link from 'next/link'

const sidebarStyle: React.CSSProperties = { width: 260, minWidth: 260, background: '#003f7a', height: '100vh', position: 'fixed', top: 0, left: 0, display: 'flex', flexDirection: 'column', zIndex: 40 }
const navItemStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, color: 'rgba(255,255,255,0.75)', fontSize: 14, fontWeight: 500, cursor: 'pointer', marginBottom: 2, textDecoration: 'none' }
const cardStyle: React.CSSProperties = { background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2', padding: 24, boxShadow: '0 1px 4px rgba(0,0,0,0.05)', marginBottom: 20 }

const NAV = [
  { icon: 'dashboard', label: 'Dashboard', href: '/scholar/command-center' },
  { icon: 'school', label: 'Courses', href: '/scholar/course-registration' },
  { icon: 'science', label: 'Research', href: '/scholar/research-workspace', active: true },
  { icon: 'menu_book', label: 'Library', href: '/scholar/library' },
  { icon: 'work', label: 'Careers', href: '/scholar/careers' },
  { icon: 'people', label: 'Community', href: '/scholar/networking' },
]

const ACTIVE_GRANTS = [
  { title: 'Quantum-Neural Interface Research', funder: 'NSF CAREER Award', amount: '$250,000', deadline: 'Nov 30, 2025', status: 'Draft', score: 88 },
  { title: 'Climate Modeling AI Framework', funder: 'Dept. of Energy', amount: '$180,000', deadline: 'Dec 15, 2025', status: 'Submitted', score: 76 },
  { title: 'Bioinformatics Data Pipeline', funder: 'NIH R01 Grant', amount: '$320,000', deadline: 'Jan 20, 2026', status: 'Under Review', score: 91 },
]

const OPPORTUNITIES = [
  { name: 'DOE Energy Research Grant', org: 'Dept. of Energy', amount: '$250,000', deadline: 'Nov 30, 2025', match: '94%' },
  { name: 'Horizon Europe — Digital', org: 'European Commission', amount: '€180,000', deadline: 'Dec 15, 2025', match: '87%' },
  { name: 'NSF CAREER Award', org: 'National Science Foundation', amount: '$500,000', deadline: 'Jan 20, 2026', match: '91%' },
  { name: 'Gates Foundation Innovation', org: 'Bill & Melinda Gates Foundation', amount: '$120,000', deadline: 'Feb 28, 2026', match: '83%' },
]

export default function GrantsPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f9f9ff', fontFamily: '"Inter", system-ui, sans-serif' }}>
      <aside style={sidebarStyle}>
        <div style={{ padding: '24px 20px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ color: '#fff', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 20 }}>EduWorld</div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, marginTop: 2 }}>Scholar Portal</div>
        </div>
        <nav style={{ flex: 1, padding: '12px 12px', overflowY: 'auto' }}>
          {NAV.map(item => (
            <Link key={item.href} href={item.href} style={{ ...navItemStyle, ...(item.active ? { background: 'rgba(255,255,255,0.15)', borderLeft: '3px solid #fff', paddingLeft: 9, color: '#fff' } : {}) }}>
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
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Grant Proposals & Funding Hub</h1>
            <p style={{ color: '#424750', fontSize: 14, marginTop: 6 }}>Discover funding opportunities and optimize proposals with AI assistance.</p>
          </div>
          <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '9px 18px', fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>add</span> New Proposal
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 28 }}>
          {[
            { label: 'Active Applications', value: '3', color: '#003f7a' },
            { label: 'Funding Secured', value: '$1.24M', color: '#10B981' },
            { label: 'Win Rate', value: '64%', color: '#F59E0B' },
            { label: 'Pending Review', value: '2', color: '#8b5cf6' },
          ].map(s => (
            <div key={s.label} style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 28, color: s.color, marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: '#424750' }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
          <div>
            {/* AI Proposal Optimizer */}
            <div style={{ background: '#f0fdf4', border: '1px solid #a7f3d0', borderRadius: 14, padding: 24, marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <span style={{ color: '#10B981', fontSize: 18, fontWeight: 700 }}>✦</span>
                <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20' }}>AI Proposal Optimizer</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {ACTIVE_GRANTS.map(g => (
                  <div key={g.title} style={{ background: '#fff', borderRadius: 12, border: '1px solid #c2c6d2', padding: 18 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 14, color: '#191c20' }}>{g.title}</div>
                        <div style={{ fontSize: 12, color: '#424750', marginTop: 2 }}>{g.funder} · {g.amount}</div>
                        <div style={{ fontSize: 12, color: '#424750' }}>Deadline: {g.deadline}</div>
                      </div>
                      <span style={{
                        fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 99,
                        background: g.status === 'Draft' ? '#fef3c7' : g.status === 'Submitted' ? '#d1fae5' : '#e8f0fe',
                        color: g.status === 'Draft' ? '#d97706' : g.status === 'Submitted' ? '#10B981' : '#003f7a'
                      }}>{g.status}</span>
                    </div>
                    <div style={{ marginBottom: 10 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#424750', marginBottom: 4 }}>
                        <span>AI Proposal Score</span><span style={{ fontWeight: 700, color: '#191c20' }}>{g.score}/100</span>
                      </div>
                      <div style={{ height: 6, borderRadius: 99, background: '#eef0f4', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${g.score}%`, borderRadius: 99, background: '#10B981' }} />
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 10 }}>
                      <button style={{ background: '#10B981', color: '#fff', border: 'none', borderRadius: 6, padding: '6px 14px', fontSize: 12, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5 }}>
                        <span style={{ fontSize: 13 }}>✦</span> Optimize
                      </button>
                      <button style={{ background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 6, padding: '6px 14px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Edit Draft</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Funding Database */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20' }}>Global Funding Database</div>
                <button style={{ background: '#f9f9ff', border: '1px solid #c2c6d2', borderRadius: 6, padding: '5px 12px', fontSize: 12, fontWeight: 600, cursor: 'pointer', color: '#424750' }}>Filter</button>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #c2c6d2' }}>
                      {['Grant Name', 'Organization', 'Amount', 'Deadline', 'AI Match', ''].map(h => (
                        <th key={h} style={{ textAlign: 'left', padding: '8px 10px', fontSize: 11, fontWeight: 700, color: '#424750', textTransform: 'uppercase' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {OPPORTUNITIES.map((f, i) => (
                      <tr key={f.name} style={{ borderBottom: i === OPPORTUNITIES.length - 1 ? 'none' : '1px solid #eef0f4' }}>
                        <td style={{ padding: '12px 10px', fontWeight: 700, color: '#191c20' }}>{f.name}</td>
                        <td style={{ padding: '12px 10px', color: '#424750', fontSize: 12 }}>{f.org}</td>
                        <td style={{ padding: '12px 10px', fontWeight: 700, color: '#003f7a' }}>{f.amount}</td>
                        <td style={{ padding: '12px 10px', fontSize: 12, color: '#424750' }}>{f.deadline}</td>
                        <td style={{ padding: '12px 10px' }}>
                          <span style={{ background: '#d1fae5', color: '#10B981', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>{f.match}</span>
                        </td>
                        <td style={{ padding: '12px 10px' }}>
                          <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 6, padding: '4px 10px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Apply</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20', marginBottom: 14 }}>Department Analytics</div>
              <div style={{ textAlign: 'center', marginBottom: 16 }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 40, color: '#003f7a' }}>64%</div>
                <div style={{ fontSize: 13, color: '#424750' }}>Win Rate</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
                <div style={{ background: '#d1fae5', borderRadius: 10, padding: '12px', textAlign: 'center' }}>
                  <div style={{ fontWeight: 700, fontSize: 22, color: '#10B981' }}>24</div>
                  <div style={{ fontSize: 12, color: '#424750' }}>Approved</div>
                </div>
                <div style={{ background: '#fee2e2', borderRadius: 10, padding: '12px', textAlign: 'center' }}>
                  <div style={{ fontWeight: 700, fontSize: 22, color: '#ef4444' }}>13</div>
                  <div style={{ fontSize: 12, color: '#424750' }}>Rejected</div>
                </div>
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#191c20', marginBottom: 10 }}>Top Funding Sources</div>
              {[{ name: 'NSF', pct: 40 }, { name: 'DOE', pct: 35 }, { name: 'EU Horizon', pct: 25 }].map(s => (
                <div key={s.name} style={{ marginBottom: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#424750', marginBottom: 4 }}>
                    <span>{s.name}</span><span>{s.pct}%</span>
                  </div>
                  <div style={{ height: 6, borderRadius: 99, background: '#eef0f4', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${s.pct}%`, borderRadius: 99, background: '#003f7a' }} />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: '#f0fdf4', border: '1px solid #a7f3d0', borderRadius: 14, padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span style={{ color: '#10B981', fontSize: 18, fontWeight: 700 }}>✦</span>
                <span style={{ fontWeight: 600, fontSize: 14, color: '#191c20' }}>AI Insight</span>
              </div>
              <p style={{ fontSize: 13, color: '#191c20', lineHeight: 1.6 }}>Your quantum computing proposal scores <strong>12% higher</strong> than department average. Submit before the Nov 30 deadline.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
