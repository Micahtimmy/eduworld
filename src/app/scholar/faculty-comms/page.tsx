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

const TIERS = [
  { label: 'Priority Auth', badge: 2, icon: 'priority_high' },
  { label: 'Deans & Admin', badge: null, icon: 'account_balance' },
  { label: 'Faculty / Profs', badge: 14, icon: 'science', active: true },
  { label: 'Research Mentors', badge: null, icon: 'supervisor_account' },
  { label: 'Peer Cohort', badge: null, icon: 'people' },
]

const MESSAGES = [
  { initials: 'EV', name: 'Dr. E. Vance', time: '10:42 AM', status: 'Urgent Action Required', urgent: true, active: true },
  { initials: 'AL', name: 'Prof. A. Liang', time: 'Yesterday', status: 'Cleared', urgent: false, active: false },
  { initials: 'DO', name: "Dean's Office", time: 'May 12', status: 'For Information', urgent: false, active: false },
]

const SLOTS = [
  { day: 'Thu, May 22', time: '10:00 AM', duration: '30m' },
  { day: 'Thu, May 22', time: '02:30 PM', duration: '30m' },
  { day: 'Fri, May 23', time: '09:00 AM', duration: '30m' },
]

export default function FacultyCommsPage() {
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

      <main style={{ marginLeft: 260, flex: 1, padding: 32, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ marginBottom: 20 }}>
          <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Faculty & Dean Communication Hub</h1>
          <p style={{ color: '#424750', fontSize: 14, marginTop: 6 }}>Hierarchical messaging, office hour bookings, and academic correspondence.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr 280px', gap: 20, flex: 1 }}>
          {/* Left Panel */}
          <div style={{ background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2', padding: 16, display: 'flex', flexDirection: 'column', gap: 14, height: 'fit-content' }}>
            {/* Search */}
            <div style={{ position: 'relative' }}>
              <span className="material-symbols-outlined" style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', fontSize: 18, color: '#424750' }}>search</span>
              <input placeholder="Search..." style={{ width: '100%', padding: '8px 10px 8px 36px', borderRadius: 8, border: '1px solid #c2c6d2', fontSize: 13, outline: 'none', boxSizing: 'border-box' }} />
            </div>

            {/* Directive Banner */}
            <div style={{ background: '#e8f0fe', border: '1px solid #bfdbfe', borderRadius: 10, padding: '10px 12px' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#003f7a', marginBottom: 4 }}>📢 Institutional Directives</div>
              <p style={{ fontSize: 11, color: '#424750' }}>Grant application deadline — Jun 5. Submit via portal.</p>
            </div>

            {/* Tiers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {TIERS.map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 8, cursor: 'pointer', background: t.active ? '#f0f4ff' : 'transparent' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#424750' }}>{t.icon}</span>
                  <span style={{ fontSize: 13, color: '#191c20', flex: 1 }}>{t.label}</span>
                  {t.badge && <span style={{ background: '#003f7a', color: '#fff', fontSize: 10, fontWeight: 700, padding: '1px 6px', borderRadius: 99 }}>{t.badge}</span>}
                </div>
              ))}
            </div>

            {/* Message List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {MESSAGES.map((m, i) => (
                <div key={i} style={{ padding: '10px 12px', borderRadius: 10, cursor: 'pointer', background: m.active ? '#f0f4ff' : '#f9f9ff', border: `1px solid ${m.active ? '#bfdbfe' : '#eef0f4'}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#e8f0fe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#003f7a', flexShrink: 0 }}>{m.initials}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 600, fontSize: 12, color: '#191c20', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.name}</div>
                      <div style={{ fontSize: 10, color: '#424750' }}>{m.time}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 11, fontWeight: m.urgent ? 700 : 400, color: m.urgent ? '#dc2626' : '#424750' }}>{m.status}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Thread */}
          <div style={{ background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid #eef0f4' }}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20' }}>RE: Methodology revision for Chapter 4</div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 12, color: '#424750', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>archive</span> Archive
                </button>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 12, color: '#003f7a', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>reply</span> Reply
                </button>
              </div>
            </div>
            <div style={{ flex: 1, padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#e8f0fe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#003f7a', flexShrink: 0 }}>EV</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 700, fontSize: 14, color: '#191c20' }}>Dr. Elias Vance</span>
                    <span style={{ fontSize: 12, color: '#424750' }}>&lt;e.vance@university.edu&gt;</span>
                    <span style={{ fontSize: 12, color: '#424750', marginLeft: 'auto' }}>Today, 10:42 AM</span>
                  </div>
                  <div style={{ fontSize: 13, color: '#424750', marginBottom: 4 }}>To: You</div>
                  <div style={{ fontSize: 14, color: '#191c20', lineHeight: 1.7, marginTop: 12 }}>
                    <p style={{ marginBottom: 12 }}>The statistical approach in Section 4.2 is misaligned with the thesis parameters. The variance model is too broad for the sample size of n=42.</p>
                    <p>I recommend revisiting the methodology with a more constrained regression model. Please revise and resubmit by Thursday for review before the faculty panel.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Reply box */}
            <div style={{ borderTop: '1px solid #eef0f4', padding: '14px 20px' }}>
              <textarea
                placeholder="Type your reply to Dr. Vance..."
                style={{ width: '100%', height: 80, padding: '10px 12px', borderRadius: 10, border: '1px solid #c2c6d2', fontSize: 13, outline: 'none', resize: 'none', fontFamily: '"Inter", system-ui, sans-serif', boxSizing: 'border-box', marginBottom: 10 }}
              />
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                <button style={{ background: '#f9f9ff', color: '#424750', border: '1px solid #c2c6d2', borderRadius: 8, padding: '8px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Discard</button>
                <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Send Reply</button>
              </div>
            </div>
          </div>

          {/* Right Action Panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Office Hour Booking */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#003f7a' }}>calendar_today</span>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20' }}>Schedule Office Hour</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
                {SLOTS.map((s, i) => (
                  <label key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 10, border: '1px solid #c2c6d2', cursor: 'pointer' }}>
                    <input type="radio" name="slot" style={{ accentColor: '#003f7a' }} />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 13, color: '#191c20' }}>{s.day}</div>
                      <div style={{ fontSize: 11, color: '#424750' }}>{s.time} ({s.duration})</div>
                    </div>
                  </label>
                ))}
              </div>
              <div style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#424750', marginBottom: 6 }}>Meeting Intent</div>
                <select style={{ width: '100%', padding: '8px 12px', borderRadius: 8, border: '1px solid #c2c6d2', fontSize: 13, outline: 'none', background: '#fff' }}>
                  <option>Methodology Review</option>
                  <option>Thesis Defense Prep</option>
                  <option>General Advising</option>
                </select>
              </div>
              <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '10px', fontWeight: 600, fontSize: 13, cursor: 'pointer', width: '100%', marginBottom: 12 }}>
                Confirm Booking
              </button>
              <div style={{ borderTop: '1px solid #eef0f4', paddingTop: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#003f7a' }}>check_circle</span>
                  <span style={{ fontSize: 12, color: '#424750' }}>Tagged: <strong style={{ color: '#191c20' }}>Thesis Ch. 4</strong></span>
                </div>
                <div style={{ fontSize: 11, color: '#424750' }}>Primary Advisor · Hierarchy Line</div>
              </div>
            </div>

            {/* AI Insight */}
            <div style={{ background: '#f0fdf4', border: '1px solid #a7f3d0', borderRadius: 14, padding: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <span style={{ color: '#10B981', fontSize: 16, fontWeight: 700 }}>✦</span>
                <span style={{ fontWeight: 600, fontSize: 14, color: '#191c20' }}>AI Insight</span>
              </div>
              <p style={{ fontSize: 12, color: '#424750', lineHeight: 1.6 }}>Dr. Vance typically responds to methodology queries within 2 hours during office hours. His feedback patterns suggest a preference for constrained statistical models.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
