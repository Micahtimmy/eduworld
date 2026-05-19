'use client'

import Link from 'next/link'

const sidebarStyle: React.CSSProperties = { width: 260, minWidth: 260, background: '#003f7a', height: '100vh', position: 'fixed', top: 0, left: 0, display: 'flex', flexDirection: 'column', zIndex: 40 }
const navItemStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, color: 'rgba(255,255,255,0.75)', fontSize: 14, fontWeight: 500, cursor: 'pointer', marginBottom: 2, textDecoration: 'none' }

const NAV = [
  { icon: 'dashboard', label: 'Dashboard', href: '/scholar/command-center' },
  { icon: 'school', label: 'Courses', href: '/scholar/course-registration' },
  { icon: 'science', label: 'Research', href: '/scholar/research-workspace', active: true },
  { icon: 'menu_book', label: 'Library', href: '/scholar/library' },
  { icon: 'work', label: 'Careers', href: '/scholar/careers' },
  { icon: 'people', label: 'Community', href: '/scholar/networking' },
]

const PROJECTS = [
  { title: 'Quantum Neural Network Architectures', status: 'Active', stage: 'Writing', progress: 62, papers: 18, updated: '2h ago' },
  { title: 'Decoherence Modeling in Hybrid Systems', status: 'Active', stage: 'Annotating', progress: 41, papers: 9, updated: '1d ago' },
  { title: 'Topological Error Correction Survey', status: 'Draft', stage: 'Searching', progress: 15, papers: 3, updated: '3d ago' },
]

const PIPELINE = [
  { stage: 'Searching', count: 5, color: '#F59E0B', bg: '#fef3c7' },
  { stage: 'Reading', count: 8, color: '#003f7a', bg: '#dbeafe' },
  { stage: 'Annotating', count: 6, color: '#8b5cf6', bg: '#ede9fe' },
  { stage: 'Writing', count: 3, color: '#10B981', bg: '#d1fae5' },
]

export default function ResearchWorkspacePage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f9f9ff', fontFamily: '"Inter", system-ui, sans-serif' }}>
      {/* Sidebar */}
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

      {/* Main */}
      <main style={{ marginLeft: 260, flex: 1, padding: 32 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
          <div>
            <div style={{ fontSize: 12, color: '#424750', marginBottom: 4 }}>Research Hub</div>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Research Workspace</h1>
            <p style={{ color: '#424750', fontSize: 14, marginTop: 6 }}>Manage your papers, projects, and AI-assisted discovery.</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <Link href="/scholar/ai-research" style={{ background: '#10B981', color: '#fff', border: 'none', borderRadius: 8, padding: '9px 18px', fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
              <span style={{ fontSize: 15 }}>✦</span> AI Research
            </Link>
            <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '9px 18px', fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>add</span> New Project
            </button>
          </div>
        </div>

        {/* Pipeline */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 28 }}>
          {PIPELINE.map(p => (
            <div key={p.stage} style={{ background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2', padding: '20px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: p.color }} />
                <span style={{ fontSize: 13, color: '#424750', fontWeight: 500 }}>{p.stage}</span>
              </div>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 32, color: '#191c20' }}>{p.count}</div>
              <div style={{ fontSize: 12, color: '#424750', marginTop: 4 }}>papers</div>
              <div style={{ background: p.bg, color: p.color, borderRadius: 6, padding: '3px 8px', fontSize: 11, fontWeight: 700, display: 'inline-block', marginTop: 8 }}>Active</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 24 }}>
          {/* Left */}
          <div>
            {/* Active Projects */}
            <div style={{ background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2', padding: 24, boxShadow: '0 1px 4px rgba(0,0,0,0.05)', marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20' }}>Active Research Projects</div>
                <span style={{ fontSize: 12, color: '#424750' }}>3 projects</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {PROJECTS.map((p, i) => (
                  <div key={i} style={{ border: '1px solid #c2c6d2', borderRadius: 12, padding: 18, cursor: 'pointer' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 10 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, fontSize: 14, color: '#191c20', marginBottom: 4 }}>{p.title}</div>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                          <span style={{ background: p.status === 'Active' ? '#d1fae5' : '#fef3c7', color: p.status === 'Active' ? '#10B981' : '#F59E0B', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>{p.status}</span>
                          <span style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>{p.stage}</span>
                          <span style={{ fontSize: 12, color: '#424750' }}>{p.papers} papers</span>
                        </div>
                      </div>
                      <span style={{ fontSize: 11, color: '#424750' }}>{p.updated}</span>
                    </div>
                    <div style={{ height: 6, borderRadius: 99, background: '#eef0f4', overflow: 'hidden', marginBottom: 6 }}>
                      <div style={{ height: '100%', width: `${p.progress}%`, borderRadius: 99, background: '#003f7a' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#424750' }}>
                      <span>Completion</span><span style={{ fontWeight: 600 }}>{p.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Citation Stats */}
            <div style={{ background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2', padding: 24, boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Citation Statistics</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                {[
                  { label: 'Total Citations', value: '248', color: '#003f7a' },
                  { label: 'h-index', value: '7', color: '#10B981' },
                  { label: 'i10-index', value: '3', color: '#F59E0B' },
                ].map(s => (
                  <div key={s.label} style={{ background: '#f9f9ff', borderRadius: 10, padding: '16px', textAlign: 'center' }}>
                    <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 28, color: s.color }}>{s.value}</div>
                    <div style={{ fontSize: 12, color: '#424750', marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - AI Assistant Chat */}
          <div>
            <div style={{ background: '#fff', borderRadius: 14, border: '1px solid #a7f3d0', padding: 0, boxShadow: '0 1px 4px rgba(0,0,0,0.05)', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: '#f0fdf4', padding: '16px 20px', borderBottom: '1px solid #a7f3d0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: '#10B981', fontSize: 18, fontWeight: 700 }}>✦</span>
                  <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 15, color: '#191c20' }}>AI Research Assistant</span>
                </div>
                <div style={{ fontSize: 12, color: '#424750', marginTop: 4 }}>Powered by Claude · Research mode</div>
              </div>
              <div style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ background: '#f0fdf4', border: '1px solid #a7f3d0', borderRadius: 10, padding: 12 }}>
                  <div style={{ fontSize: 13, color: '#191c20', lineHeight: 1.5 }}>
                    I found 3 highly relevant papers for your quantum neural network thesis. Chen et al. (2024) directly addresses decoherence modeling — should I summarize it?
                  </div>
                  <div style={{ fontSize: 11, color: '#424750', marginTop: 6 }}>AI Research Assistant · just now</div>
                </div>
                <div style={{ background: '#003f7a', borderRadius: 10, padding: 12, alignSelf: 'flex-end', maxWidth: '85%' }}>
                  <div style={{ fontSize: 13, color: '#fff', lineHeight: 1.5 }}>Yes please, and check if it contradicts my Section 2.3 claims</div>
                </div>
                <div style={{ background: '#f0fdf4', border: '1px solid #a7f3d0', borderRadius: 10, padding: 12 }}>
                  <div style={{ fontSize: 13, color: '#191c20', lineHeight: 1.5 }}>
                    Chen et al. confirms your decoherence model holds for sub-10 qubit systems. For larger systems they propose a correction term. This <strong>supports</strong> Section 2.3 with an addendum needed for scale.
                  </div>
                  <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                    <button style={{ background: '#10B981', color: '#fff', border: 'none', borderRadius: 6, padding: '5px 12px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Insert Citation</button>
                    <button style={{ background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 6, padding: '5px 12px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>View Paper</button>
                  </div>
                </div>
              </div>
              <div style={{ padding: 16, borderTop: '1px solid #c2c6d2' }}>
                <div style={{ display: 'flex', gap: 8 }}>
                  <input placeholder="Ask about your research..." style={{ flex: 1, padding: '9px 12px', borderRadius: 8, border: '1px solid #c2c6d2', fontSize: 13, outline: 'none', fontFamily: '"Inter", system-ui, sans-serif' }} />
                  <button style={{ background: '#10B981', color: '#fff', border: 'none', borderRadius: 8, padding: '9px 14px', cursor: 'pointer' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>send</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
