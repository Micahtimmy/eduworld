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

const RESEARCHERS = [
  { name: 'Dr. Priya Sharma', field: 'Quantum Computing', institution: 'MIT', initials: 'PS', connected: true },
  { name: 'Kwame Asante', field: 'Computational Biology', institution: 'Oxford', initials: 'KA', connected: false },
  { name: 'Lin Wei', field: 'Machine Learning', institution: 'Stanford', initials: 'LW', connected: false },
  { name: 'Dr. Fatima Al-Rashid', field: 'Theoretical Physics', institution: 'ETH Zurich', initials: 'FA', connected: true },
  { name: 'Marcus Johnson', field: 'Bioinformatics', institution: 'Caltech', initials: 'MJ', connected: false },
  { name: 'Sofia Petrov', field: 'Cryptography', institution: 'Cambridge', initials: 'SP', connected: false },
]

const EVENTS = [
  { title: 'Quantum Decoherence Seminar', host: 'MIT', status: 'Live Now', urgent: true },
  { title: 'CRISPR Ethics Roundtable', host: 'Oxford', status: 'Starts in 2h', urgent: false },
  { title: 'Neural Network Topologies Huddle', host: 'Stanford', status: 'Active · 8 Scholars', urgent: false },
]

const CITATIONS = [
  { title: 'Predictive Models in Atmospheric Decarbonization', tags: ['CLIMATE SCI', 'NATURE'], trend: '+342 citations today' },
  { title: 'Algorithmic Bias in Early Stage Diagnostic Tools', tags: ['BIOETHICS', 'NATURE MED'], trend: '+189 citations today' },
]

export default function NetworkingPage() {
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
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Global Research Networking Hub</h1>
            <p style={{ color: '#424750', fontSize: 14, marginTop: 6 }}>Real-time academic activity · Researcher network · Collaboration requests</p>
          </div>
          <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '9px 18px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>⚡ Join Next Live</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
          <div>
            {/* Researcher Grid */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20' }}>Researcher Profiles</div>
                <input placeholder="Search researchers..." style={{ padding: '7px 12px', borderRadius: 8, border: '1px solid #c2c6d2', fontSize: 13, outline: 'none', width: 200 }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
                {RESEARCHERS.map((r, i) => (
                  <div key={i} style={{ border: '1px solid #c2c6d2', borderRadius: 12, padding: 16, textAlign: 'center' }}>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#003f7a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, margin: '0 auto 10px' }}>{r.initials}</div>
                    <div style={{ fontWeight: 700, fontSize: 13, color: '#191c20', marginBottom: 2 }}>{r.name}</div>
                    <div style={{ fontSize: 11, color: '#424750', marginBottom: 2 }}>{r.field}</div>
                    <div style={{ fontSize: 11, color: '#424750', marginBottom: 10 }}>{r.institution}</div>
                    <button style={{ background: r.connected ? '#d1fae5' : '#003f7a', color: r.connected ? '#10B981' : '#fff', border: 'none', borderRadius: 6, padding: '5px 12px', fontSize: 11, fontWeight: 700, cursor: 'pointer', width: '100%' }}>
                      {r.connected ? 'Connected ✓' : 'Connect'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Collaboration Requests */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Collaboration Requests</div>
              {[
                { from: 'Kwame Asante', institution: 'Oxford', proposal: 'Joint paper on CRISPR off-target effects', initials: 'KA' },
                { from: 'Lin Wei', institution: 'Stanford', proposal: 'Co-authorship on quantum ML convergence', initials: 'LW' },
              ].map((req, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '14px', borderRadius: 12, border: '1px solid #c2c6d2', marginBottom: 10 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#003f7a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{req.initials}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 13, color: '#191c20' }}>{req.from} · {req.institution}</div>
                    <div style={{ fontSize: 12, color: '#424750', marginTop: 2 }}>{req.proposal}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 6, padding: '5px 12px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Accept</button>
                    <button style={{ background: '#fff', color: '#424750', border: '1px solid #c2c6d2', borderRadius: 6, padding: '5px 12px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Decline</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Trending Citations */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Trending Citations</div>
              {CITATIONS.map((c, i) => (
                <div key={i} style={{ background: '#f9f9ff', borderRadius: 10, padding: '14px', marginBottom: 10, border: '1px solid #eef0f4' }}>
                  <div style={{ fontWeight: 600, fontSize: 13, color: '#191c20', marginBottom: 6 }}>{c.title}</div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                    {c.tags.map(t => (
                      <span key={t} style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 10, fontWeight: 700, padding: '1px 6px', borderRadius: 4 }}>{t}</span>
                    ))}
                    <span style={{ fontSize: 12, color: '#10B981', fontWeight: 600 }}>↑ {c.trend}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            {/* Live Events */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20', marginBottom: 14 }}>Live & Upcoming Events</div>
              {EVENTS.map((e, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, paddingBottom: 12, marginBottom: 12, borderBottom: i === EVENTS.length - 1 ? 'none' : '1px solid #eef0f4' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: e.urgent ? '#dc2626' : '#10B981', flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 13, color: '#191c20' }}>{e.title}</div>
                    <div style={{ fontSize: 12, color: '#424750' }}>{e.host} · {e.status}</div>
                  </div>
                  <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 6, padding: '4px 10px', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>Join</button>
                </div>
              ))}
            </div>

            {/* Conference Calendar */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20', marginBottom: 14 }}>Upcoming Conferences</div>
              {[
                { name: 'NeurIPS 2025', location: 'New Orleans, LA', date: 'Dec 10–15, 2025', deadline: 'May 31' },
                { name: 'ICML 2025', location: 'Vienna, Austria', date: 'Jul 20–26, 2025', deadline: 'Jun 1' },
                { name: 'ICLR 2026', location: 'Singapore', date: 'Apr 14–18, 2026', deadline: 'Sep 30' },
              ].map((c, i) => (
                <div key={i} style={{ paddingBottom: 12, marginBottom: 12, borderBottom: i === 2 ? 'none' : '1px solid #eef0f4' }}>
                  <div style={{ fontWeight: 700, fontSize: 13, color: '#191c20', marginBottom: 2 }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: '#424750' }}>{c.location} · {c.date}</div>
                  <div style={{ fontSize: 12, color: '#d97706', marginTop: 2 }}>Submission deadline: {c.deadline}</div>
                </div>
              ))}
            </div>

            {/* AI Match */}
            <div style={{ background: '#f0fdf4', border: '1px solid #a7f3d0', borderRadius: 14, padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span style={{ color: '#10B981', fontSize: 18, fontWeight: 700 }}>✦</span>
                <span style={{ fontWeight: 600, fontSize: 14, color: '#191c20' }}>AI Collaboration Match</span>
              </div>
              <p style={{ fontSize: 13, color: '#191c20', lineHeight: 1.6 }}>Based on your quantum neural network thesis, Dr. Priya Sharma at MIT is a <strong>96% research match</strong>. She&apos;s actively looking for co-authors.</p>
              <button style={{ background: '#10B981', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 14px', fontWeight: 600, fontSize: 13, cursor: 'pointer', width: '100%', marginTop: 12 }}>Connect with Dr. Sharma</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
