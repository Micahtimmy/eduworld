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
  { icon: 'work', label: 'Careers', href: '/scholar/careers' },
  { icon: 'people', label: 'Community', href: '/scholar/networking', active: true },
]

const ROOMS = [
  { name: 'Quantum Computing Lab', participants: 4, status: 'ACTIVE' },
  { name: 'Biology Study Group', participants: 0, status: 'EMPTY' },
  { name: 'Literature Circle', participants: 2, status: 'ACTIVE' },
]

const PARTICIPANTS = [
  { name: 'Dr. E. Thorne', role: 'Presenting', initials: 'ET', active: true },
  { name: 'Alex Johnson', role: 'Listener', initials: 'AJ', active: false },
  { name: 'Maria Santos', role: 'Listener', initials: 'MS', active: false },
  { name: 'James Park', role: 'Listener', initials: 'JP', active: false },
]

export default function PeerHuddlePage() {
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
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Peer Research & Huddle Hub</h1>
            <p style={{ color: '#424750', fontSize: 14, marginTop: 6 }}>Collaborate in real-time with spatial audio rooms and shared workspaces.</p>
          </div>
          <button style={{ background: '#10B981', color: '#fff', border: 'none', borderRadius: 8, padding: '9px 18px', fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 15 }}>✦</span> AI Research Mode
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 24, marginBottom: 24 }}>
          {/* Spatial Audio Rooms */}
          <div style={cardStyle}>
            <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20', marginBottom: 14 }}>Spatial Audio Rooms</div>
            {ROOMS.map((room, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', borderRadius: 10, background: '#f9f9ff', border: '1px solid #eef0f4', marginBottom: 8 }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13, color: '#191c20' }}>{room.name}</div>
                  <div style={{ fontSize: 12, color: '#424750', marginTop: 2 }}>{room.participants} participants</div>
                </div>
                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  <span style={{ background: room.status === 'ACTIVE' ? '#d1fae5' : '#f9f9ff', color: room.status === 'ACTIVE' ? '#10B981' : '#c2c6d2', fontSize: 10, fontWeight: 700, padding: '2px 6px', borderRadius: 99 }}>{room.status}</span>
                  {room.status === 'ACTIVE' && (
                    <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 5, padding: '3px 8px', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>Join</button>
                  )}
                </div>
              </div>
            ))}
            <button style={{ background: '#f9f9ff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 8, padding: '9px', fontWeight: 600, fontSize: 13, cursor: 'pointer', width: '100%', marginTop: 4 }}>
              + Create New Room
            </button>
          </div>

          {/* Live Sprint */}
          <div style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 16, color: '#191c20' }}>Live Sprint: Q3 Data Analysis</div>
                <div style={{ fontSize: 13, color: '#424750', marginTop: 2 }}>4 participants · Spatial audio active</div>
              </div>
              <span style={{ background: '#d1fae5', color: '#10B981', fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 99, display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
                LIVE
              </span>
            </div>

            {/* Participant Tiles */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, marginBottom: 16 }}>
              {PARTICIPANTS.map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px', borderRadius: 10, border: `1px solid ${p.active ? '#003f7a' : '#c2c6d2'}`, background: p.active ? '#f0f4ff' : '#f9f9ff' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#003f7a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{p.initials}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 12, color: '#191c20' }}>{p.name}</div>
                    <div style={{ fontSize: 11, color: '#424750' }}>{p.role}</div>
                  </div>
                  <span className="material-symbols-outlined" style={{ fontSize: 16, color: p.active ? '#10B981' : '#c2c6d2', marginLeft: 'auto' }}>
                    {p.active ? 'mic' : 'mic_off'}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 10 }}>
              <button style={{ background: '#fff', color: '#424750', border: '1px solid #c2c6d2', borderRadius: 8, padding: '9px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>mic</span> Unmute
              </button>
              <button style={{ background: '#fff', color: '#424750', border: '1px solid #c2c6d2', borderRadius: 8, padding: '9px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>videocam</span> Video
              </button>
              <button style={{ background: '#fff', color: '#424750', border: '1px solid #c2c6d2', borderRadius: 8, padding: '9px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>present_to_all</span> Share
              </button>
              <button style={{ background: '#fee2e2', color: '#ef4444', border: 'none', borderRadius: 8, padding: '9px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Leave Room</button>
            </div>
          </div>
        </div>

        {/* Persistent Canvas */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20' }}>Persistent Research Canvas</div>
            <button style={{ background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 6, padding: '6px 14px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Edit Canvas</button>
          </div>
          <div style={{ position: 'relative', height: 200, background: '#f9f9ff', borderRadius: 12, border: '1px solid #c2c6d2', overflow: 'hidden' }}>
            {[
              { label: 'Quantum Entanglement', x: '20%', y: '30%', color: '#003f7a', bg: '#e8f0fe' },
              { label: 'Neural Networks', x: '55%', y: '20%', color: '#10B981', bg: '#d1fae5' },
              { label: 'Superposition', x: '70%', y: '55%', color: '#003f7a', bg: '#e8f0fe' },
              { label: 'Decoherence', x: '30%', y: '65%', color: '#d97706', bg: '#fef3c7' },
            ].map((node, i) => (
              <div key={i} style={{ position: 'absolute', left: node.x, top: node.y, background: node.bg, color: node.color, border: `1px solid ${node.color}`, borderRadius: 8, padding: '4px 10px', fontSize: 12, fontWeight: 700, cursor: 'move' }}>
                {node.label}
              </div>
            ))}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
              <line x1="25%" y1="35%" x2="57%" y2="25%" stroke="#c2c6d2" strokeWidth="1.5" />
              <line x1="57%" y1="25%" x2="72%" y2="58%" stroke="#c2c6d2" strokeWidth="1.5" />
              <line x1="25%" y1="35%" x2="33%" y2="68%" stroke="#c2c6d2" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {/* Notes & Sprints */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div style={cardStyle}>
            <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20', marginBottom: 14 }}>Lab Notebook</div>
            {[
              { time: 'May 18, 2025 · 2:34 PM', text: 'Initial observations: quantum decoherence patterns align with neural activation at 847Hz frequency band.' },
              { time: 'May 18, 2025 · 3:10 PM', text: 'Cross-reference with Santos et al. (2022) confirms hypothesis. Running regression analysis.' },
            ].map((entry, i) => (
              <div key={i} style={{ background: '#f9f9ff', borderRadius: 8, padding: 12, marginBottom: 10 }}>
                <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 11, color: '#424750', marginBottom: 6 }}>{entry.time}</div>
                <div style={{ fontSize: 13, color: '#191c20', lineHeight: 1.5 }}>{entry.text}</div>
              </div>
            ))}
            <button style={{ background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 8, padding: '9px', fontWeight: 600, fontSize: 13, cursor: 'pointer', width: '100%' }}>+ Add Entry</button>
          </div>

          <div style={cardStyle}>
            <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20', marginBottom: 14 }}>Active Sprints</div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #c2c6d2' }}>
                  {['Sprint', 'Assigned', 'Due', 'Status'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '6px 8px', fontSize: 11, fontWeight: 700, color: '#424750', textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { title: 'Q3 Data Analysis', team: 'Team Alpha', due: 'May 28', status: 'In Progress' },
                  { title: 'Literature Review', team: 'Team Beta', due: 'Jun 2', status: 'Pending' },
                  { title: 'Writeup Draft', team: 'All', due: 'Jun 10', status: 'Pending' },
                ].map((s, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #eef0f4' }}>
                    <td style={{ padding: '10px 8px', fontWeight: 600, color: '#191c20' }}>{s.title}</td>
                    <td style={{ padding: '10px 8px', fontSize: 12, color: '#424750' }}>{s.team}</td>
                    <td style={{ padding: '10px 8px', fontSize: 12, color: '#424750' }}>{s.due}</td>
                    <td style={{ padding: '10px 8px' }}>
                      <span style={{ background: s.status === 'In Progress' ? '#e8f0fe' : '#f9f9ff', color: s.status === 'In Progress' ? '#003f7a' : '#424750', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>{s.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
