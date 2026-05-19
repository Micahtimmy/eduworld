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

const GAPS = [
  { title: 'Thermal Decoherence Models', priority: 'High', desc: 'Draft handles non-Markovian dynamics but lacks empirical boundary-condition threshold data from Chen (2022).' },
  { title: 'Methodological Clarification', priority: 'High', desc: 'Transition between equations 3.1 and 3.2 is missing intermediate proof steps per Tier-1 journal standards.' },
  { title: 'Literature Breadth', priority: 'Medium', desc: 'Only 12 of 28 cited sources are from the last 5 years. Broaden to recent publications.' },
]

const CITATIONS = [
  { title: 'EPR Paradox Revisited', author: 'Aspect, 1982' },
  { title: 'Quantum Information Theory', author: 'Nielsen, 2010' },
  { title: 'Bell Inequality Tests', author: 'Clauser, 1978' },
]

export default function SemanticResearchPage() {
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
        </div>
      </aside>

      <main style={{ marginLeft: 260, flex: 1, padding: 32 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
          <div>
            <div style={{ fontSize: 12, color: '#424750', marginBottom: 4 }}>Physics Dept / Q3 Publications</div>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Semantic Research & Gap Analysis</h1>
            <p style={{ color: '#424750', fontSize: 14, marginTop: 6 }}>Auto-saved 2m ago · Draft in progress</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ background: '#fff', color: '#424750', border: '1px solid #c2c6d2', borderRadius: 8, padding: '9px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>share</span> Share
            </button>
            <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '9px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Submit Draft</button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
          {/* Document Editor */}
          <div>
            {/* Toolbar */}
            <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #c2c6d2', padding: '10px 14px', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
              {['Normal Text', 'H1', 'H2', 'B', 'I', 'U'].map(t => (
                <button key={t} style={{ padding: '4px 10px', fontSize: 12, fontWeight: 600, background: '#f9f9ff', borderRadius: 6, border: '1px solid #eef0f4', cursor: 'pointer', color: '#191c20' }}>{t}</button>
              ))}
              <div style={{ width: 1, height: 20, background: '#c2c6d2', margin: '0 4px' }} />
              {['≡', '1.', '"'].map(t => (
                <button key={t} style={{ padding: '4px 10px', fontSize: 14, fontWeight: 600, background: '#f9f9ff', borderRadius: 6, border: '1px solid #eef0f4', cursor: 'pointer', color: '#191c20' }}>{t}</button>
              ))}
              <div style={{ flex: 1 }} />
              <button style={{ background: '#f0fdf4', color: '#10B981', border: '1px solid #a7f3d0', borderRadius: 6, padding: '5px 12px', fontSize: 12, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                <span>✦</span> Format Assist
              </button>
            </div>

            {/* Document */}
            <div style={{ ...cardStyle, minHeight: 400 }}>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 22, color: '#191c20', marginBottom: 16 }}>Research Hub: Quantum Entanglement</h2>
              <p style={{ fontSize: 14, color: '#191c20', lineHeight: 1.8, marginBottom: 14 }}>
                Entanglement challenges local realist models; Bell-inequality experiments demonstrate correlations between space-like separated bipartite systems that exceed classical bounds. Non-Markovian dynamics in multi-partite systems under thermal noise suggest a mapping of environmental noise to network topology to predict entanglement sudden death.
              </p>
              <p style={{ fontSize: 14, color: '#191c20', lineHeight: 1.8, marginBottom: 14 }}>
                The interaction Hamiltonian under the rotating-wave approximation yields a time evolution operator that preserves entanglement fidelity above 0.94 for durations under 200 μs in superconducting qubit arrays at 15 mK.
              </p>
              <p style={{ fontSize: 14, color: '#424750', fontStyle: 'italic' }}>Start typing to continue draft...</p>
            </div>
          </div>

          {/* Intelligence Console */}
          <div>
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20', marginBottom: 16 }}>Intelligence Console</div>

              {/* Synthesizer */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#191c20' }}>Synthesizer</span>
                  <span style={{ background: '#d1fae5', color: '#10B981', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>Active</span>
                </div>
                <div style={{ border: '2px dashed #c2c6d2', borderRadius: 10, padding: '16px', textAlign: 'center', marginBottom: 8 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 24, color: '#424750', marginBottom: 6, display: 'block' }}>upload</span>
                  <div style={{ fontSize: 12, color: '#424750', marginBottom: 4 }}>Drop literature PDFs here</div>
                  <div style={{ fontSize: 11, color: '#424750' }}>AI will extract thematic links instantly</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', borderRadius: 8, background: '#f9f9ff', border: '1px solid #eef0f4' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#003f7a' }}>description</span>
                  <span style={{ fontSize: 12, color: '#191c20' }}>Smith_et_al_2023.pdf</span>
                </div>
              </div>

              {/* Identified Gaps */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#191c20' }}>Identified Gaps</span>
                  <span style={{ background: '#fee2e2', color: '#dc2626', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>{GAPS.filter(g => g.priority === 'High').length} High Priority</span>
                </div>
                {GAPS.map((g, i) => (
                  <div key={i} style={{ border: '1px solid #c2c6d2', borderRadius: 10, padding: '12px', marginBottom: 8 }}>
                    <div style={{ fontWeight: 700, fontSize: 12, color: '#191c20', marginBottom: 4 }}>{g.title}</div>
                    <p style={{ fontSize: 11, color: '#424750', lineHeight: 1.5, marginBottom: 8 }}>{g.desc}</p>
                    <div style={{ display: 'flex', gap: 10 }}>
                      <button style={{ color: '#003f7a', fontSize: 11, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>Inject Context</button>
                      <button style={{ color: '#424750', fontSize: 11, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>Dismiss</button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Semantic Graph */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#191c20' }}>Semantic Literature Graph</span>
                  <button style={{ color: '#003f7a', fontSize: 11, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>Expand Full</button>
                </div>
                <div style={{ background: '#f9f9ff', borderRadius: 10, padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 80, position: 'relative' }}>
                  {['GHZ', 'Draft', 'Bell'].map((node, i) => (
                    <span key={i} style={{ background: i === 1 ? '#003f7a' : '#e8f0fe', color: i === 1 ? '#fff' : '#003f7a', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 99, margin: '0 8px' }}>{node}</span>
                  ))}
                </div>
              </div>

              {/* Pending Citations */}
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#191c20', marginBottom: 10 }}>Pending Citations ({CITATIONS.length})</div>
                {CITATIONS.map((c, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', borderRadius: 8, background: '#f9f9ff', border: '1px solid #eef0f4', marginBottom: 6 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 12, color: '#191c20' }}>{c.title}</div>
                      <div style={{ fontSize: 11, color: '#424750' }}>{c.author}</div>
                    </div>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#003f7a' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>send</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
