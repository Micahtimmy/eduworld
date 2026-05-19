'use client'

import Link from 'next/link'

const sidebarStyle: React.CSSProperties = { width: 260, minWidth: 260, background: '#003f7a', height: '100vh', position: 'fixed', top: 0, left: 0, display: 'flex', flexDirection: 'column', zIndex: 40 }
const navItemStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, color: 'rgba(255,255,255,0.75)', fontSize: 14, fontWeight: 500, cursor: 'pointer', marginBottom: 2, textDecoration: 'none' }
const cardStyle: React.CSSProperties = { background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2', padding: 24, boxShadow: '0 1px 4px rgba(0,0,0,0.05)', marginBottom: 20 }

const NAV = [
  { icon: 'dashboard', label: 'Dashboard', href: '/scholar/command-center' },
  { icon: 'school', label: 'Courses', href: '/scholar/course-registration' },
  { icon: 'science', label: 'Research', href: '/scholar/research-workspace' },
  { icon: 'menu_book', label: 'Library', href: '/scholar/library', active: true },
  { icon: 'work', label: 'Careers', href: '/scholar/careers' },
  { icon: 'people', label: 'Community', href: '/scholar/networking' },
]

const ACQUISITIONS = [
  { title: 'Quantum Supremacy in Neuromorphic Architectures', venue: 'IEEE Trans.', authors: 'Dr. H. Vance, S. O\'Connor', year: '2023', tags: ['Quantum Hardware', 'Neural Arch'] },
  { title: 'Cognitive Load Modeling in High-Density Interfaces', venue: 'CHI \'24', authors: 'A. Miller, et al.', year: '2024', tags: ['HCI', 'UX Research'] },
  { title: 'Decoherence in Topological Quantum Error Correction', venue: 'Physical Review Letters', authors: 'R. Chen, M. Tanaka', year: '2024', tags: ['Quantum Error', 'Topology'] },
  { title: 'Bayesian Optimization for Neural Architecture Search', venue: 'NeurIPS \'23', authors: 'L. Zhang, et al.', year: '2023', tags: ['AutoML', 'Optimization'] },
]

const READING_LIST = [
  { title: 'Neural Network Topologies', pct: 75 },
  { title: 'Ethics in Autonomous Systems', pct: 30 },
  { title: 'Advanced Fluid Dynamics Ch. 4', pct: 10 },
  { title: 'Quantum Field Theory: Modern Approaches', pct: 55 },
]

const COLLECTIONS = [
  { name: 'Thesis References', count: 42, icon: 'auto_stories' },
  { name: 'Quantum Computing', count: 28, icon: 'science' },
  { name: 'Neural Architectures', count: 19, icon: 'hub' },
  { name: 'Reading Queue', count: 7, icon: 'queue' },
]

export default function LibraryPage() {
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
            <span style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 99, display: 'inline-block', marginBottom: 8 }}>Advanced Research Tier</span>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Library & Citation Manager</h1>
            <p style={{ color: '#424750', fontSize: 14, marginTop: 6 }}>Manage your academic references, reading lists, and AI-assisted summaries.</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 8, padding: '9px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>upload</span> Import RIS/BibTeX
            </button>
            <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '9px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>add</span> Manual Entry
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div style={cardStyle}>
          <div style={{ position: 'relative' }}>
            <span className="material-symbols-outlined" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', fontSize: 20, color: '#424750' }}>search</span>
            <input
              placeholder="Search papers, authors, journals, keywords..."
              style={{ width: '100%', padding: '12px 14px 12px 46px', borderRadius: 10, border: '1px solid #c2c6d2', fontSize: 14, outline: 'none', background: '#f9f9ff', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            {['All Sources', 'My Library', 'ArXiv', 'Google Scholar', 'IEEE', 'PubMed'].map((filter, i) => (
              <button key={filter} style={{ padding: '5px 14px', borderRadius: 99, fontSize: 12, fontWeight: 600, cursor: 'pointer', background: i === 0 ? '#003f7a' : '#f9f9ff', color: i === 0 ? '#fff' : '#424750', border: i === 0 ? 'none' : '1px solid #c2c6d2' }}>
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
          <div>
            {/* Recent Acquisitions */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20' }}>Recent Acquisitions</div>
                <button style={{ color: '#003f7a', fontSize: 13, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>View Full Database →</button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {ACQUISITIONS.map((a, i) => (
                  <div key={i} style={{ border: '1px solid #c2c6d2', borderRadius: 12, padding: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 8 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 600, fontSize: 14, color: '#191c20', lineHeight: 1.4, marginBottom: 4 }}>{a.title}</div>
                        <div style={{ fontSize: 12, color: '#424750' }}>{a.authors} · {a.venue} · {a.year}</div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flexShrink: 0 }}>
                        <button style={{ background: '#f9f9ff', border: '1px solid #c2c6d2', borderRadius: 6, padding: '4px 10px', fontSize: 11, cursor: 'pointer', color: '#424750' }}>Cite</button>
                        <button style={{ background: '#f9f9ff', border: '1px solid #c2c6d2', borderRadius: 6, padding: '4px 10px', fontSize: 11, cursor: 'pointer', color: '#424750' }}>Save</button>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {a.tags.map(t => (
                        <span key={t} style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 4 }}>{t}</span>
                      ))}
                      <span style={{ background: '#f0fdf4', color: '#10B981', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 4 }}>✦ AI Summary Available</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Citation Generator */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ fontSize: 20, color: '#003f7a' }}>"</span>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20' }}>Citation Generator</div>
              </div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
                {['APA 7', 'MLA 9', 'Chicago', 'IEEE', 'Harvard'].map((style, i) => (
                  <button key={style} style={{ padding: '6px 14px', borderRadius: 99, fontSize: 12, fontWeight: 600, cursor: 'pointer', background: i === 0 ? '#003f7a' : '#f9f9ff', color: i === 0 ? '#fff' : '#424750', border: i === 0 ? 'none' : '1px solid #c2c6d2' }}>
                    {style}
                  </button>
                ))}
              </div>
              <div style={{ background: '#f9f9ff', borderRadius: 10, padding: '14px', border: '1px solid #eef0f4', marginBottom: 12 }}>
                <p style={{ fontFamily: '"Courier Prime", monospace', fontSize: 12, color: '#191c20', lineHeight: 1.6 }}>
                  Vance, H., &amp; O&apos;Connor, S. (2023). Quantum supremacy in neuromorphic architectures. <em>IEEE Transactions on Neural Networks and Learning Systems</em>, 34(8), 4021–4035. https://doi.org/10.1109/TNNLS.2023.3248901
                </p>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button style={{ background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 8, padding: '8px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>content_copy</span> Copy
                </button>
                <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Generate</button>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div>
            {/* Collections */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20', marginBottom: 14 }}>My Collections</div>
              {COLLECTIONS.map((col, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 10, background: '#f9f9ff', border: '1px solid #eef0f4', marginBottom: 8, cursor: 'pointer' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#003f7a' }}>{col.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 13, color: '#191c20' }}>{col.name}</div>
                  </div>
                  <span style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>{col.count}</span>
                </div>
              ))}
              <button style={{ background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 8, padding: '9px', fontWeight: 600, fontSize: 13, cursor: 'pointer', width: '100%', marginTop: 4 }}>
                + New Collection
              </button>
            </div>

            {/* Reading List */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#424750' }}>menu_book</span>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20' }}>Active Reading List</div>
              </div>
              {READING_LIST.map((r, i) => (
                <div key={i} style={{ marginBottom: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#424750', marginBottom: 5 }}>
                    <span style={{ fontWeight: 600, color: '#191c20', maxWidth: '75%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.title}</span>
                    <span style={{ fontWeight: 700, color: '#003f7a', flexShrink: 0 }}>{r.pct}%</span>
                  </div>
                  <div style={{ height: 6, borderRadius: 99, background: '#eef0f4', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${r.pct}%`, borderRadius: 99, background: '#003f7a' }} />
                  </div>
                </div>
              ))}
              <button style={{ background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 8, padding: '9px', fontWeight: 600, fontSize: 13, cursor: 'pointer', width: '100%' }}>Manage List</button>
            </div>

            {/* AI Abstract Summarizer */}
            <div style={{ background: '#f0fdf4', border: '1px solid #a7f3d0', borderRadius: 14, padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span style={{ color: '#10B981', fontSize: 18, fontWeight: 700 }}>✦</span>
                <span style={{ fontWeight: 600, fontSize: 14, color: '#191c20' }}>AI Abstract Summarizer</span>
                <span style={{ background: '#d1fae5', color: '#10B981', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>Beta</span>
              </div>
              <textarea
                placeholder="Paste a long abstract here to generate a concise, bulleted summary..."
                style={{ width: '100%', height: 90, padding: '10px 12px', borderRadius: 10, border: '1px solid #a7f3d0', fontSize: 12, outline: 'none', background: '#fff', resize: 'none', fontFamily: '"Inter", system-ui, sans-serif', boxSizing: 'border-box' }}
              />
              <button style={{ background: '#10B981', color: '#fff', border: 'none', borderRadius: 8, padding: '9px', fontWeight: 600, fontSize: 13, cursor: 'pointer', width: '100%', marginTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <span>✦</span> Generate Summary
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
