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

const MANDATORY = [
  { title: 'Lab Safety Protocol Update — New Regulations Effective June 1', tag: 'Mandatory Reading', date: 'May 15', urgent: true },
  { title: 'AI Week Ahead — Departmental Briefing & Participation Requirements', tag: 'Mandatory Reading', date: 'May 14', urgent: false },
]

const MEMOS = [
  { title: 'Research Ethics Committee Memo — Updated Guidelines Q2 2025', from: 'Prof. R. Hawthorne', date: 'May 13' },
  { title: 'Revised Lab Booking Policy — Priority Allocation Changes', from: 'Department Admin', date: 'May 10' },
  { title: 'Funding Cycle Reminder — Grant Applications Close Jun 5', from: 'Faculty Finance', date: 'May 8' },
  { title: 'Doctoral Symposium 2025 — Call for Abstracts', from: 'Research Committee', date: 'May 6' },
]

const SEMINARS = [
  { title: 'Renewable Energy Systems Symposium', date: 'May', day: '20', time: '2:00 PM', room: 'Lecture Hall B', seats: 12, registered: true },
  { title: 'Alumni Research Panel: Careers in Deep Tech', date: 'May', day: '22', time: '5:00 PM', room: 'Virtual — Zoom', seats: 40, registered: false },
  { title: 'Quantum Computing Industry Roundtable', date: 'Jun', day: '3', time: '3:00 PM', room: 'Innovation Hub, Room 5', seats: 24, registered: false },
]

export default function NoticesPage() {
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
          <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Departmental News & Notice Board</h1>
          <p style={{ color: '#424750', fontSize: 14, marginTop: 6 }}>Computer Science & AI — Doctoral Division</p>
        </div>

        {/* Mandatory Reading */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 12 }}>Mandatory Reading</div>
          {MANDATORY.map((m, i) => (
            <div key={i} style={{ background: m.urgent ? '#fef2f2' : '#fff', border: `1px solid ${m.urgent ? '#fecaca' : '#c2c6d2'}`, borderRadius: 14, padding: '16px 20px', marginBottom: 10, display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <span style={{ fontSize: 20, flexShrink: 0 }}>{m.urgent ? '🚨' : '📋'}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14, color: '#191c20', marginBottom: 6 }}>{m.title}</div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span style={{ background: m.urgent ? '#fee2e2' : '#fef3c7', color: m.urgent ? '#dc2626' : '#d97706', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>{m.tag}</span>
                  <span style={{ fontSize: 11, color: '#424750' }}>{m.date}</span>
                </div>
              </div>
              <button style={{ background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 8, padding: '7px 14px', fontWeight: 600, fontSize: 12, cursor: 'pointer', flexShrink: 0 }}>Read</button>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 24 }}>
          <div>
            {/* Recent Memos */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Recent Memos</div>
              {MEMOS.map((m, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 0', borderBottom: i < MEMOS.length - 1 ? '1px solid #eef0f4' : 'none' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#424750', flexShrink: 0 }}>description</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 13, color: '#191c20', marginBottom: 2 }}>{m.title}</div>
                    <div style={{ fontSize: 11, color: '#424750' }}>{m.from} · {m.date}</div>
                  </div>
                  <button style={{ color: '#003f7a', fontSize: 12, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0 }}>View</button>
                </div>
              ))}
            </div>

            {/* House Announcements */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 14 }}>House Announcements</div>
              <div style={{ background: '#e8f0fe', border: '1px solid #bfdbfe', borderRadius: 12, padding: '14px 16px', display: 'flex', gap: 12 }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>🏛</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: '#191c20', marginBottom: 4 }}>Alpha Cohort — End of Term Research Showcase</div>
                  <p style={{ fontSize: 13, color: '#424750', lineHeight: 1.5 }}>All Alpha Cohort doctoral candidates are invited to the end-of-term research showcase. Present your thesis progress to faculty and industry guests. June 28, Grand Hall.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Seminars */}
          <div>
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Upcoming Seminars</div>
              {SEMINARS.map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, paddingBottom: 16, marginBottom: 16, borderBottom: i < SEMINARS.length - 1 ? '1px solid #eef0f4' : 'none' }}>
                  <div style={{ background: '#e8f0fe', borderRadius: 12, padding: '8px 12px', textAlign: 'center', minWidth: 52, flexShrink: 0 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: '#003f7a', textTransform: 'uppercase' }}>{s.date}</div>
                    <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 22, color: '#003f7a' }}>{s.day}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 13, color: '#191c20', marginBottom: 4, lineHeight: 1.3 }}>{s.title}</div>
                    <div style={{ fontSize: 11, color: '#424750', marginBottom: 2 }}>{s.time} · {s.room}</div>
                    <div style={{ fontSize: 11, color: '#424750', marginBottom: 8 }}>{s.seats} seats available</div>
                    <button style={{ background: s.registered ? '#d1fae5' : '#003f7a', color: s.registered ? '#10B981' : '#fff', border: 'none', borderRadius: 6, padding: '5px 12px', fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>
                      {s.registered ? 'Registered ✓' : 'RSVP'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
