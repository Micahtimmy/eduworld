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

const SESSIONS = [
  { month: 'May', day: '24', course: 'CHEM-301', time: '14:00 – 17:00', title: 'Organic Synthesis: Esterification', location: 'Science Complex, Room 402-B', badge: 'Upcoming', upcoming: true },
  { month: 'May', day: '17', course: 'PHYS-205', time: '10:00 – 13:00', title: 'Spectroscopy Calibration', location: 'Physics Annex, Room 101', badge: 'Logged', upcoming: false },
  { month: 'May', day: '10', course: 'CHEM-301', time: '14:00 – 17:00', title: 'Titration and pH Analysis', location: 'Science Complex, Room 402-B', badge: 'Logged', upcoming: false },
]

const TOOLS = [
  { name: 'Synthesis Manual v2.4', format: 'PDF', size: '2.4 MB', icon: 'description' },
  { name: 'Jupyter Log Template', format: 'IPYNB', size: '15 KB', icon: 'code' },
  { name: 'Equipment Booking Portal', format: 'External Link', size: '', icon: 'open_in_new' },
]

export default function LabTrackingPage() {
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
            <span style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 99, display: 'inline-block', marginBottom: 8 }}>Academic Session 2025</span>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Practical Lab Management Hub</h1>
            <p style={{ color: '#424750', fontSize: 14, marginTop: 6 }}>Manage lab sessions, submit logs, and connect with lab partners.</p>
          </div>
        </div>

        {/* Term Progress + Safety */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 24 }}>
          <div style={{ background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2', padding: '18px 22px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: 12, color: '#424750', fontWeight: 600, marginBottom: 6 }}>Term Progress</div>
            <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 36, color: '#191c20', marginBottom: 4 }}>6 / 12</div>
            <div style={{ fontSize: 12, color: '#424750', marginBottom: 10 }}>Labs completed this term</div>
            <div style={{ height: 8, borderRadius: 99, background: '#eef0f4', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '50%', borderRadius: 99, background: '#003f7a' }} />
            </div>
          </div>
          <div style={{ background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: 14, padding: '18px 22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <span style={{ color: '#d97706' }}>⚠</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#191c20' }}>Pre-Lab Safety Protocol</span>
            </div>
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: 8, cursor: 'pointer' }}>
              <input type="checkbox" style={{ marginTop: 2, accentColor: '#003f7a', flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: '#424750', lineHeight: 1.5 }}>I have reviewed the MSDS for Reagent A. PPE acquired and verified.</span>
            </label>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
          <div>
            {/* Scheduled Sessions */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20' }}>📅 Scheduled Sessions</div>
                <button style={{ color: '#003f7a', fontSize: 13, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>View Full Calendar</button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {SESSIONS.map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, padding: '12px 14px', borderRadius: 12, background: '#f9f9ff', border: '1px solid #eef0f4' }}>
                    <div style={{ textAlign: 'center', flexShrink: 0, width: 44 }}>
                      <div style={{ fontSize: 10, color: '#424750', textTransform: 'uppercase', fontWeight: 600 }}>{s.month}</div>
                      <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 22, color: '#003f7a' }}>{s.day}</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: '#003f7a' }}>{s.course}</span>
                        {s.time && <span style={{ fontSize: 11, color: '#424750' }}>{s.time}</span>}
                        <span style={{ background: s.upcoming ? '#fef3c7' : '#d1fae5', color: s.upcoming ? '#d97706' : '#10B981', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99, marginLeft: 'auto' }}>{s.badge}</span>
                      </div>
                      <div style={{ fontWeight: 600, fontSize: 14, color: '#191c20', marginBottom: 2 }}>{s.title}</div>
                      <div style={{ fontSize: 11, color: '#424750' }}>{s.location}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Log Submission */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Log Submission Portal</div>
              <div style={{ marginBottom: 12 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: '#191c20', marginBottom: 4 }}>Target: Organic Synthesis Report</div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: '#d97706', fontWeight: 600 }}>⏱ Due in 2 days (May 26, 23:59 UTC)</span>
                  <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#424750' }}>LOG-8492</span>
                </div>
              </div>
              <div style={{ border: '2px dashed #c2c6d2', borderRadius: 12, padding: '24px', textAlign: 'center', marginBottom: 14 }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>☁</div>
                <div style={{ fontWeight: 600, fontSize: 14, color: '#191c20', marginBottom: 4 }}>Drag &amp; drop files here</div>
                <div style={{ fontSize: 12, color: '#424750', marginBottom: 12 }}>Supports .pdf, .docx, .ipynb · Max 50MB</div>
                <div style={{ fontSize: 11, color: '#424750', marginBottom: 12 }}>Raw data tables must be included</div>
                <button style={{ background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 8, padding: '7px 14px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Browse Files</button>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button style={{ flex: 1, background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 8, padding: '10px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Save Draft</button>
                <button style={{ flex: 1, background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '10px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Submit Final Log →</button>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div>
            {/* Partner Match */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20' }}>🤝 Partner Match</div>
                <span style={{ background: '#f0fdf4', color: '#10B981', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>✦ AI Suggested</span>
              </div>
              <div style={{ display: 'flex', gap: 12, padding: '12px', borderRadius: 12, background: '#f9f9ff', border: '1px solid #eef0f4', marginBottom: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#e8f0fe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, color: '#003f7a', flexShrink: 0 }}>ER</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 13, color: '#191c20', marginBottom: 4 }}>Dr. Elena Rostova</div>
                  <span style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 4 }}>Complementary Skillset: Spectroscopy</span>
                  <p style={{ fontSize: 11, color: '#424750', marginTop: 6 }}>Elena&apos;s data analysis strengths complement your synthesis focus.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button style={{ flex: 1, background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '8px', fontWeight: 600, fontSize: 12, cursor: 'pointer' }}>Connect</button>
                <button style={{ background: '#fff', color: '#424750', border: '1px solid #c2c6d2', borderRadius: 8, padding: '8px 12px', fontWeight: 600, fontSize: 12, cursor: 'pointer' }}>✉ Message</button>
              </div>
            </div>

            {/* Tools & Manuals */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20', marginBottom: 14 }}>🔧 Tools & Manuals</div>
              {TOOLS.map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 10, background: '#f9f9ff', border: '1px solid #eef0f4', marginBottom: 8, cursor: 'pointer' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#003f7a', flexShrink: 0 }}>{t.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 13, color: '#191c20' }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: '#424750' }}>{t.format}{t.size ? ` · ${t.size}` : ''}</div>
                  </div>
                  <span style={{ color: '#003f7a', fontSize: 16, cursor: 'pointer' }}>↓</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
