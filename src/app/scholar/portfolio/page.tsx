'use client'

import Link from 'next/link'

const sidebarStyle: React.CSSProperties = { width: 260, minWidth: 260, background: '#003f7a', height: '100vh', position: 'fixed', top: 0, left: 0, display: 'flex', flexDirection: 'column', zIndex: 40 }
const navItemStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, color: 'rgba(255,255,255,0.75)', fontSize: 14, fontWeight: 500, cursor: 'pointer', marginBottom: 2, textDecoration: 'none' }
const cardStyle: React.CSSProperties = { background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2', padding: 24, boxShadow: '0 1px 4px rgba(0,0,0,0.05)', marginBottom: 20 }

const NAV = [
  { icon: 'dashboard', label: 'Dashboard', href: '/scholar/command-center' },
  { icon: 'school', label: 'Courses', href: '/scholar/course-registration' },
  { icon: 'science', label: 'Research', href: '/scholar/research-workspace' },
  { icon: 'menu_book', label: 'Library', href: '/scholar/library' },
  { icon: 'work', label: 'Careers', href: '/scholar/careers', active: true },
  { icon: 'people', label: 'Community', href: '/scholar/networking' },
]

const SKILLS = [
  { name: 'Machine Learning', pct: 92 },
  { name: 'Data Architecture', pct: 88 },
  { name: 'Neural Topology', pct: 95 },
  { name: 'Bio-Statistics', pct: 78 },
  { name: 'Quantum Computing', pct: 85 },
]

const PUBLICATIONS = [
  { title: 'Topological Data Analysis in Large Language Models', venue: 'Nature AI', date: 'Oct 2024', citations: 142, type: 'Publication' },
  { title: 'Decoherence Patterns in Quantum Neural Systems', venue: 'Physical Review Letters', date: 'Mar 2024', citations: 67, type: 'Publication' },
]

const CREDENTIALS = [
  { hash: '0x7F...3A2', title: 'Advanced Deep Learning Architectures', issuer: 'Global AI Institute', date: 'Oct 2024' },
  { hash: '0x4B...9E1', title: 'Quantum Computing Foundations', issuer: 'Tech University Node', date: 'Mar 2024' },
]

export default function PortfolioPage() {
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
            <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
              <span style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>Advanced Research Tier</span>
              <span style={{ background: '#d1fae5', color: '#10B981', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>Verified Scholar ID: SCH-2024-8902</span>
            </div>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Professional Portfolio Hub</h1>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 8, padding: '9px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Export Dossier</button>
            <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '9px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Share Profile</button>
          </div>
        </div>

        {/* Profile Hero */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
            <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#003f7a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 700, flexShrink: 0 }}>SR</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 22, color: '#191c20', marginBottom: 4 }}>Sarah Robertson, Ph.D. Candidate</div>
              <p style={{ fontSize: 14, color: '#424750', marginBottom: 10, lineHeight: 1.5 }}>Specializing in quantum neural network architectures and decoherence modeling. Department of Physics, Spring 2025.</p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <span style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>GPA: 3.9</span>
                <span style={{ background: '#d1fae5', color: '#10B981', fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>2 Publications</span>
                <span style={{ background: '#fef3c7', color: '#d97706', fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>Top 5%</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <button style={{ background: '#f9f9ff', border: '1px solid #c2c6d2', borderRadius: 8, padding: '7px 14px', fontSize: 13, fontWeight: 600, cursor: 'pointer', color: '#424750', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>link</span> LinkedIn
              </button>
              <button style={{ background: '#f9f9ff', border: '1px solid #c2c6d2', borderRadius: 8, padding: '7px 14px', fontSize: 13, fontWeight: 600, cursor: 'pointer', color: '#424750', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>school</span> Google Scholar
              </button>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 0 }}>
          {/* Competency Matrix */}
          <div style={cardStyle}>
            <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 4 }}>Competency Matrix</div>
            <div style={{ fontSize: 12, color: '#424750', marginBottom: 16 }}>Quantified assessment of core research methodologies</div>
            {SKILLS.map(s => (
              <div key={s.name} style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#424750', marginBottom: 6 }}>
                  <span>{s.name}</span><span style={{ fontWeight: 700, color: '#191c20' }}>{s.pct}%</span>
                </div>
                <div style={{ height: 8, borderRadius: 99, background: '#eef0f4', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${s.pct}%`, borderRadius: 99, background: '#003f7a' }} />
                </div>
              </div>
            ))}
          </div>

          {/* Verified Credentials */}
          <div style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20' }}>Verified Credentials</div>
              <span style={{ background: '#f9f9ff', color: '#424750', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 99, border: '1px solid #c2c6d2' }}>🔒 Cryptographically Secured</span>
            </div>
            {CREDENTIALS.map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '14px', borderRadius: 12, background: '#f9f9ff', border: '1px solid #eef0f4', marginBottom: 10 }}>
                <span style={{ color: '#10B981', fontSize: 20, flexShrink: 0 }}>✓</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 11, color: '#424750', marginBottom: 4 }}>{c.hash}</div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: '#191c20' }}>{c.title}</div>
                  <div style={{ fontSize: 12, color: '#424750', marginTop: 2 }}>{c.issuer} · Issued: {c.date}</div>
                </div>
                <span style={{ color: '#003f7a', cursor: 'pointer', fontSize: 16 }}>→</span>
              </div>
            ))}
            <button style={{ background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 8, padding: '9px', fontWeight: 600, fontSize: 13, cursor: 'pointer', width: '100%', marginTop: 6 }}>
              Add Certification
            </button>
          </div>
        </div>

        {/* Publications */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20' }}>Research Publications</div>
            <button style={{ color: '#003f7a', fontSize: 13, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>View Full Archive →</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {PUBLICATIONS.map((p, i) => (
              <div key={i} style={{ border: '1px solid #c2c6d2', borderRadius: 12, padding: 18 }}>
                <span style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 99, marginBottom: 10, display: 'inline-block' }}>{p.venue}</span>
                <div style={{ fontWeight: 700, fontSize: 14, color: '#191c20', marginBottom: 6, lineHeight: 1.4 }}>{p.title}</div>
                <div style={{ display: 'flex', gap: 16, fontSize: 12, color: '#424750' }}>
                  <span>📅 {p.date}</span>
                  <span>💬 {p.citations} Citations</span>
                </div>
              </div>
            ))}
            {/* DeepMind Project */}
            <div style={{ border: '1px solid #c2c6d2', borderRadius: 12, padding: 18 }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 10 }}>
                <span style={{ fontSize: 20 }}>🔬</span>
                <span style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>Lab Residency · DeepMind</span>
              </div>
              <div style={{ fontWeight: 700, fontSize: 14, color: '#191c20', marginBottom: 6 }}>Cognitive Emulation Engine v2</div>
              <div style={{ fontSize: 12, color: '#424750', lineHeight: 1.5 }}>Sub-team of 4. Developed custom loss functions for neural emulation.</div>
              <div style={{ fontSize: 12, color: '#424750', marginTop: 6 }}>📅 Jan 2024 – Jun 2024</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
