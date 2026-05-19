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

const MODULES = [
  { id: 1, title: 'Quantum Superposition & State Vectors', duration: '45 min', type: 'Lecture', status: 'Completed', score: 94 },
  { id: 2, title: 'Measurement & Wave Function Collapse', duration: '50 min', type: 'Interactive', status: 'Completed', score: 88 },
  { id: 3, title: 'Entanglement & Bell Inequalities', duration: '60 min', type: 'Seminar', status: 'In Progress', score: null },
  { id: 4, title: 'Quantum Circuits & Gates', duration: '55 min', type: 'Lab', status: 'Locked', score: null },
  { id: 5, title: 'Quantum Error Correction', duration: '70 min', type: 'Research', status: 'Locked', score: null },
]

const UPCOMING_SEMINARS = [
  { title: 'Frontier Applications in Quantum Computing', host: 'Prof. Sarah Mitchell', date: 'May 28, 2025', time: '3:00 PM', seats: 8, registered: true },
  { title: 'Photonic Quantum Systems Overview', host: 'Dr. James Patel', date: 'Jun 4, 2025', time: '2:00 PM', seats: 15, registered: false },
  { title: 'Post-Quantum Cryptography', host: 'Dr. Nina Osei', date: 'Jun 11, 2025', time: '10:00 AM', seats: 22, registered: false },
]

const DISCUSSIONS = [
  { author: 'Priya Sharma', initials: 'PS', time: '2h ago', text: 'Has anyone found a good explanation for why the EPR paradox doesn\'t violate special relativity?', replies: 4 },
  { author: 'Kwame Asante', initials: 'KA', time: '4h ago', text: 'My simulation of the Bell experiment is giving unexpected results. Anyone want to collaborate?', replies: 7 },
]

export default function SeminarPage() {
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
            <div style={{ fontSize: 12, color: '#424750', marginBottom: 4 }}>Physics Department · PHYS401</div>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Atomic Learning & Seminar Hub</h1>
            <p style={{ color: '#424750', fontSize: 14, marginTop: 6 }}>Quantum Mechanics: Advanced Concepts</p>
          </div>
          <button style={{ background: '#10B981', color: '#fff', border: 'none', borderRadius: 8, padding: '9px 18px', fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 15 }}>✦</span> AI Study Mode
          </button>
        </div>

        {/* Progress */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <div>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20' }}>Course Progress</div>
              <div style={{ fontSize: 13, color: '#424750', marginTop: 2 }}>2 of 5 modules completed</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 28, color: '#003f7a' }}>40%</div>
            </div>
          </div>
          <div style={{ height: 10, borderRadius: 99, background: '#eef0f4', overflow: 'hidden', marginBottom: 16 }}>
            <div style={{ height: '100%', width: '40%', borderRadius: 99, background: '#003f7a' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {[
              { label: 'Avg Score', value: '91%', color: '#10B981' },
              { label: 'Time Spent', value: '8.5h', color: '#003f7a' },
              { label: 'XP Earned', value: '2,400', color: '#F59E0B' },
            ].map(s => (
              <div key={s.label} style={{ background: '#f9f9ff', borderRadius: 10, padding: '14px', textAlign: 'center' }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 20, color: s.color }}>{s.value}</div>
                <div style={{ fontSize: 12, color: '#424750', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
          <div>
            {/* Learning Modules */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Learning Modules</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {MODULES.map(m => (
                  <div key={m.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', borderRadius: 12, border: `1px solid ${m.status === 'In Progress' ? '#003f7a' : '#c2c6d2'}`, background: m.status === 'In Progress' ? '#f0f4ff' : '#f9f9ff', opacity: m.status === 'Locked' ? 0.5 : 1, cursor: m.status === 'Locked' ? 'default' : 'pointer' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: m.status === 'Completed' ? '#d1fae5' : m.status === 'In Progress' ? '#003f7a' : '#eef0f4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {m.status === 'Completed' ? <span style={{ color: '#10B981', fontWeight: 700, fontSize: 16 }}>✓</span> : m.status === 'Locked' ? <span style={{ fontSize: 16 }}>🔒</span> : <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#fff' }}>play_arrow</span>}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: 14, color: '#191c20' }}>{m.title}</div>
                      <div style={{ fontSize: 12, color: '#424750', marginTop: 2 }}>{m.duration} · {m.type}</div>
                    </div>
                    {m.score !== null && <span style={{ background: '#d1fae5', color: '#10B981', fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>{m.score}%</span>}
                    {m.status !== 'Locked' && <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#424750' }}>chevron_right</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Discussion */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Discussion Threads</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {DISCUSSIONS.map((d, i) => (
                  <div key={i} style={{ border: '1px solid #c2c6d2', borderRadius: 12, padding: 16 }}>
                    <div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                      <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#003f7a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{d.initials}</div>
                      <div>
                        <span style={{ fontWeight: 600, fontSize: 13, color: '#191c20' }}>{d.author}</span>
                        <span style={{ fontSize: 12, color: '#424750', marginLeft: 8 }}>{d.time}</span>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: '#424750', lineHeight: 1.6, marginBottom: 8 }}>{d.text}</p>
                    <div style={{ display: 'flex', gap: 12 }}>
                      <button style={{ color: '#003f7a', fontSize: 12, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>Reply ({d.replies})</button>
                      <button style={{ color: '#424750', fontSize: 12, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>👍 Like</button>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
                <input placeholder="Start a discussion..." style={{ flex: 1, padding: '9px 12px', borderRadius: 8, border: '1px solid #c2c6d2', fontSize: 13, outline: 'none' }} />
                <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '9px 14px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Post</button>
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            {/* Upcoming Seminars */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20' }}>Upcoming Seminars</div>
                <button style={{ color: '#003f7a', fontSize: 12, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
              </div>
              {UPCOMING_SEMINARS.map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, paddingBottom: 14, marginBottom: 14, borderBottom: i === UPCOMING_SEMINARS.length - 1 ? 'none' : '1px solid #eef0f4' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: '#e8f0fe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#003f7a' }}>menu_book</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 13, color: '#191c20', marginBottom: 2 }}>{s.title}</div>
                    <div style={{ fontSize: 12, color: '#424750' }}>{s.host}</div>
                    <div style={{ fontSize: 11, color: '#424750', marginTop: 2 }}>{s.date} · {s.time} · {s.seats} seats left</div>
                    <button style={{ marginTop: 6, background: s.registered ? '#fff' : '#003f7a', color: s.registered ? '#003f7a' : '#fff', border: s.registered ? '1px solid #003f7a' : 'none', borderRadius: 6, padding: '4px 10px', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>
                      {s.registered ? 'Registered ✓' : 'Register'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Insight */}
            <div style={{ background: '#f0fdf4', border: '1px solid #a7f3d0', borderRadius: 14, padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span style={{ color: '#10B981', fontSize: 18, fontWeight: 700 }}>✦</span>
                <span style={{ fontWeight: 600, fontSize: 14, color: '#191c20' }}>AI Insight</span>
              </div>
              <p style={{ fontSize: 13, color: '#191c20', lineHeight: 1.6 }}>Your comprehension of superposition is in the <strong>top 8%</strong> of all PHYS401 students. The upcoming Entanglement module builds on this — consider attending the May 28 seminar before the exam.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
