'use client'

import Link from 'next/link'

const sidebarStyle: React.CSSProperties = { width: 260, minWidth: 260, background: '#003f7a', height: '100vh', position: 'fixed', top: 0, left: 0, display: 'flex', flexDirection: 'column', zIndex: 40 }
const navItemStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, color: 'rgba(255,255,255,0.75)', fontSize: 14, fontWeight: 500, cursor: 'pointer', marginBottom: 2, textDecoration: 'none' }
const cardStyle: React.CSSProperties = { background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2', padding: 24, boxShadow: '0 1px 4px rgba(0,0,0,0.05)', marginBottom: 20 }

const NAV = [
  { icon: 'dashboard', label: 'Dashboard', href: '/scholar/command-center' },
  { icon: 'school', label: 'Courses', href: '/scholar/course-registration', active: true },
  { icon: 'science', label: 'Research', href: '/scholar/research-workspace' },
  { icon: 'menu_book', label: 'Library', href: '/scholar/library' },
  { icon: 'work', label: 'Careers', href: '/scholar/careers' },
  { icon: 'people', label: 'Community', href: '/scholar/networking' },
]

const UPCOMING = [
  { title: 'Quantum Mechanics: Uncertainty Principle', course: 'PHYS401', instructor: 'Dr. Chen Wei', date: 'Mon May 19', time: '9:00 AM', room: 'Science B-204', live: true },
  { title: 'Advanced Algorithms: NP-Completeness', course: 'CS501', instructor: 'Dr. James Ridley', date: 'Mon May 19', time: '2:00 PM', room: 'Tech Hub 301', live: false },
  { title: 'Linear Algebra: Eigenvalues & Eigenvectors', course: 'MATH301', instructor: 'Dr. Sofia Reyes', date: 'Tue May 20', time: '9:00 AM', room: 'Lecture Hall A', live: false },
]

const RECORDED = [
  { title: 'Derivation of the Dirac Equation', course: 'PHYS401', instructor: 'Dr. Chen Wei', duration: '1h 45m', date: 'May 14', views: 182 },
  { title: 'Introduction to Dynamic Programming', course: 'CS501', instructor: 'Dr. James Ridley', duration: '1h 20m', date: 'May 12', views: 256 },
  { title: 'Matrix Decomposition Techniques', course: 'MATH301', instructor: 'Dr. Sofia Reyes', duration: '1h 15m', date: 'May 10', views: 143 },
  { title: 'Nucleophilic Substitution Reactions', course: 'CHEM350', instructor: 'Prof. Adaeze Okafor', duration: '2h 00m', date: 'May 8', views: 97 },
]

const TRANSCRIPT = [
  { time: '44:30', text: '...the collapse of the state vector...', active: false },
  { time: '44:45', text: '...a Hilbert space approach.', active: false },
  { time: '45:12', text: '...error gradient calculations and probability distributions...', active: true },
  { time: '45:28', text: '...visualize the probability distribution.', active: false },
]

export default function LectureHallPage() {
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
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Lecture Hall & Seminar Hub</h1>
          <p style={{ color: '#424750', fontSize: 14, marginTop: 6 }}>Watch recordings, join live lectures, and engage in Q&A.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
          <div>
            {/* Video Player */}
            <div style={{ background: '#1e293b', borderRadius: 14, overflow: 'hidden', marginBottom: 20 }}>
              <div style={{ aspectRatio: '16/9', background: 'linear-gradient(135deg, #1e293b, #0f172a)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 12, left: 16 }}>
                  <span style={{ background: '#dc2626', color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 4 }}>RECORDING</span>
                </div>
                <button style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#fff', fontSize: 32, marginLeft: 4 }}>▶</span>
                </button>
              </div>
              <div style={{ padding: '14px 18px' }}>
                <div style={{ height: 4, borderRadius: 99, background: 'rgba(255,255,255,0.15)', overflow: 'hidden', marginBottom: 10 }}>
                  <div style={{ height: '100%', width: '50%', borderRadius: 99, background: '#003f7a' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: '#94a3b8' }}>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff' }}>▶</button>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>🔊</button>
                  <span style={{ fontSize: 12, flex: 1 }}>45:12 / 1:30:00</span>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', fontSize: 12 }}>CC</button>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', fontSize: 12 }}>⚙</button>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', fontSize: 12 }}>⛶</button>
                </div>
              </div>
            </div>
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 10 }}>
                <div>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 16, color: '#191c20', marginBottom: 4 }}>Advanced Neural Architectures & Quantum Computation</div>
                  <div style={{ fontSize: 13, color: '#424750' }}>Dr. Elena Rostova · Department of Computer Science</div>
                </div>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#10B981', cursor: 'pointer' }}>auto_awesome</span>
              </div>
              <span style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>CS501 · Week 4 Core Requirement</span>
            </div>

            {/* Upcoming Lectures */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Upcoming Lectures</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {UPCOMING.map((l, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, padding: '14px 16px', borderRadius: 12, border: `1px solid ${l.live ? '#003f7a' : '#c2c6d2'}`, background: l.live ? '#f0f4ff' : '#f9f9ff', alignItems: 'center' }}>
                    <div style={{ width: 48, height: 48, borderRadius: 10, background: l.live ? '#003f7a' : '#eef0f4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 22, color: l.live ? '#fff' : '#424750' }}>videocam</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: 14, color: '#191c20', marginBottom: 2 }}>{l.title}</div>
                      <div style={{ fontSize: 12, color: '#424750' }}>{l.course} · {l.instructor}</div>
                      <div style={{ fontSize: 12, color: '#424750' }}>{l.date} · {l.time} · {l.room}</div>
                    </div>
                    {l.live ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <span style={{ background: '#dc2626', color: '#fff', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 99, textAlign: 'center' }}>LIVE</span>
                        <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 6, padding: '6px 12px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Join Now</button>
                      </div>
                    ) : (
                      <button style={{ background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 6, padding: '6px 12px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Add to Calendar</button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Recorded Lectures */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Recorded Lectures Library</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {RECORDED.map((r, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 14px', borderRadius: 10, background: '#f9f9ff', border: '1px solid #eef0f4', cursor: 'pointer' }}>
                    <div style={{ width: 80, height: 52, borderRadius: 8, background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 20 }}>▶</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 13, color: '#191c20', marginBottom: 2 }}>{r.title}</div>
                      <div style={{ fontSize: 12, color: '#424750' }}>{r.course} · {r.instructor}</div>
                      <div style={{ fontSize: 11, color: '#424750' }}>{r.duration} · {r.date} · {r.views} views</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            {/* AI Nodes */}
            <div style={{ background: '#f0fdf4', border: '1px solid #a7f3d0', borderRadius: 14, padding: 20, marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span style={{ color: '#10B981', fontSize: 18, fontWeight: 700 }}>✦</span>
                <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 14, color: '#191c20' }}>Intelligence Nodes</span>
              </div>
              {[
                { title: 'Backpropagation Error Gradient', relevance: 'High', rel_color: '#10B981', rel_bg: '#d1fae5' },
                { title: 'Quantum Superposition in States', relevance: 'Medium', rel_color: '#d97706', rel_bg: '#fef3c7' },
              ].map((n, i) => (
                <div key={i} style={{ background: '#fff', border: '1px solid #c2c6d2', borderRadius: 10, padding: 12, marginBottom: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontWeight: 600, fontSize: 12, color: '#191c20' }}>{n.title}</span>
                    <span style={{ background: n.rel_bg, color: n.rel_color, fontSize: 10, fontWeight: 700, padding: '1px 6px', borderRadius: 99 }}>{n.relevance}</span>
                  </div>
                  <button style={{ color: '#003f7a', fontSize: 12, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>Review concept →</button>
                </div>
              ))}
            </div>

            {/* Transcript */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20', marginBottom: 12 }}>Synchronized Transcript</div>
              {TRANSCRIPT.map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, padding: '8px 10px', borderRadius: 8, background: t.active ? '#e8f0fe' : 'transparent', border: t.active ? '1px solid #003f7a' : '1px solid transparent', marginBottom: 4 }}>
                  <span style={{ fontFamily: '"Courier Prime", monospace', fontSize: 11, color: '#424750', flexShrink: 0 }}>{t.time}</span>
                  <span style={{ fontSize: 12, color: t.active ? '#003f7a' : '#424750', fontWeight: t.active ? 600 : 400 }}>{t.text}</span>
                </div>
              ))}
            </div>

            {/* Live Q&A */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20' }}>Live Q&A</div>
                <span style={{ background: '#fee2e2', color: '#dc2626', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>Live</span>
              </div>
              {[
                { initials: 'DC', name: 'David C.', time: '10:42 AM', text: 'Can you clarify how activation functions relate to Hilbert space dimensionality?' },
                { initials: 'TA', name: 'TA: Sarah', time: '10:45 AM', text: 'Great question! Check Chapter 4 Section 3.2.' },
              ].map((m, i) => (
                <div key={i} style={{ marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#003f7a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700 }}>{m.initials}</div>
                    <span style={{ fontSize: 12, fontWeight: 600, color: '#191c20' }}>{m.name}</span>
                    <span style={{ fontSize: 11, color: '#424750' }}>{m.time}</span>
                  </div>
                  <div style={{ marginLeft: 30, fontSize: 12, color: '#424750' }}>{m.text}</div>
                </div>
              ))}
              <div style={{ display: 'flex', gap: 8 }}>
                <input placeholder="Ask a question..." style={{ flex: 1, padding: '8px 12px', borderRadius: 8, border: '1px solid #c2c6d2', fontSize: 12, outline: 'none' }} />
                <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 12px', cursor: 'pointer' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
