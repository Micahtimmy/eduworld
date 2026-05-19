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

const SIMULATIONS = [
  { icon: '⚗', title: 'Organic Chemistry Reaction Pathways', subject: 'CHEM350', type: '3D Molecular Simulation', status: 'Available', color: '#10B981', bg: '#d1fae5' },
  { icon: '⚛', title: 'Quantum Entanglement Visualizer', subject: 'PHYS401', type: 'Interactive Quantum Sim', status: 'Available', color: '#003f7a', bg: '#e8f0fe' },
  { icon: '🧠', title: 'Neural Network Training Sandbox', subject: 'CS501', type: 'ML Simulation Environment', status: 'Running', color: '#8b5cf6', bg: '#ede9fe' },
  { icon: '🔬', title: 'CRISPR Gene Editing Simulation', subject: 'BIO301', type: 'Genomics Lab', status: 'Locked', color: '#c2c6d2', bg: '#f9f9ff' },
  { icon: '🌊', title: 'Fluid Dynamics Simulation', subject: 'PHYS501', type: 'Computational Physics', status: 'Available', color: '#003f7a', bg: '#e8f0fe' },
  { icon: '🧪', title: 'Electrochemistry & Cell Design', subject: 'CHEM401', type: 'Electrochemical Lab', status: 'Available', color: '#F59E0B', bg: '#fef3c7' },
]

const RECENT = [
  { name: 'Spectroscopy Analysis — Run #14', subject: 'PHYS401', date: 'May 15', score: '94%' },
  { name: 'Enzyme Kinetics Simulation', subject: 'CHEM350', date: 'May 12', score: '81%' },
  { name: 'Gradient Descent Visualization', subject: 'CS501', date: 'May 9', score: '89%' },
]

export default function VirtualLabPage() {
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
        </div>
      </aside>

      <main style={{ marginLeft: 260, flex: 1, padding: 32 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Virtual Lab & Simulation Portal</h1>
            <p style={{ color: '#424750', fontSize: 14, marginTop: 6 }}>Advanced research simulations for doctoral candidates.</p>
          </div>
          <div style={{ background: '#fff', border: '1px solid #c2c6d2', borderRadius: 10, padding: '8px 16px', fontSize: 13, fontWeight: 600, color: '#424750' }}>6 / 12 Labs This Term</div>
        </div>

        {/* Active Simulation Banner */}
        <div style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)', borderRadius: 14, padding: '24px 28px', marginBottom: 28, color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 12, color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', marginBottom: 6 }}>Currently Active</div>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 20, color: '#fff' }}>Neural Network Training Sandbox</div>
              <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 4 }}>CS501 · Epoch 42/100 · Loss: 0.0312 · Accuracy: 94.7%</div>
            </div>
            <span style={{ fontSize: 48 }}>🧠</span>
          </div>
          <div style={{ height: 8, borderRadius: 99, background: 'rgba(255,255,255,0.1)', overflow: 'hidden', marginBottom: 14 }}>
            <div style={{ height: '100%', width: '42%', borderRadius: 99, background: '#818cf8' }} />
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ background: '#fff', color: '#1e293b', border: 'none', borderRadius: 8, padding: '9px 18px', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>▶ Resume</button>
            <button style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, padding: '9px 18px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>📊 View Results</button>
            <button style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, padding: '9px 18px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Submit Report</button>
          </div>
        </div>

        {/* Simulation Library */}
        <div style={cardStyle}>
          <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Simulation Library</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
            {SIMULATIONS.map(s => (
              <div key={s.title} style={{ border: '1px solid #c2c6d2', borderRadius: 12, padding: 18, opacity: s.status === 'Locked' ? 0.6 : 1 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontSize: 32 }}>{s.icon}</span>
                  <span style={{ background: s.bg, color: s.color, fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>{s.status}</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: 14, color: '#191c20', marginBottom: 4 }}>{s.title}</div>
                <div style={{ fontSize: 12, color: '#424750', marginBottom: 14 }}>{s.subject} · {s.type}</div>
                <button
                  disabled={s.status === 'Locked'}
                  style={{ background: s.status === 'Locked' ? '#f9f9ff' : '#003f7a', color: s.status === 'Locked' ? '#c2c6d2' : '#fff', border: s.status === 'Locked' ? '1px solid #c2c6d2' : 'none', borderRadius: 8, padding: '7px', fontWeight: 600, fontSize: 13, cursor: s.status === 'Locked' ? 'default' : 'pointer', width: '100%' }}
                >
                  {s.status === 'Running' ? '▶ Continue' : s.status === 'Locked' ? '🔒 Locked' : '▶ Launch'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Results */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20' }}>Recent Results</div>
            <button style={{ color: '#003f7a', fontSize: 13, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>View All →</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {RECENT.map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 10, background: '#f9f9ff', border: '1px solid #eef0f4' }}>
                <span style={{ fontSize: 22 }}>📊</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: '#191c20' }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: '#424750' }}>{r.subject} · {r.date}</div>
                </div>
                <span style={{ background: '#d1fae5', color: '#10B981', fontSize: 13, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>{r.score}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
