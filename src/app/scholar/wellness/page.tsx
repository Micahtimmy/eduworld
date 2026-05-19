'use client'

import Link from 'next/link'

const sidebarStyle: React.CSSProperties = { width: 260, minWidth: 260, background: '#003f7a', height: '100vh', position: 'fixed', top: 0, left: 0, display: 'flex', flexDirection: 'column', zIndex: 40 }
const navItemStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, color: 'rgba(255,255,255,0.75)', fontSize: 14, fontWeight: 500, cursor: 'pointer', marginBottom: 2, textDecoration: 'none' }
const cardStyle: React.CSSProperties = { background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2', padding: 24, boxShadow: '0 1px 4px rgba(0,0,0,0.05)', marginBottom: 20 }

const NAV = [
  { icon: 'dashboard', label: 'Dashboard', href: '/scholar/command-center', active: true },
  { icon: 'school', label: 'Courses', href: '/scholar/course-registration' },
  { icon: 'science', label: 'Research', href: '/scholar/research-workspace' },
  { icon: 'menu_book', label: 'Library', href: '/scholar/library' },
  { icon: 'work', label: 'Careers', href: '/scholar/careers' },
  { icon: 'people', label: 'Community', href: '/scholar/networking' },
]

const COGNITIVE_LOAD = [
  { day: 'MON', val: 40 }, { day: 'TUE', val: 65 }, { day: 'WED', val: 55 },
  { day: 'THU', val: 80 }, { day: 'FRI', val: 70 }, { day: 'SAT', val: 35 }, { day: 'SUN', val: 50 },
]

const MENTORSHIP = [
  { label: 'Thesis Advisor Communication', badge: 'Healthy', color: '#10B981', bg: '#d1fae5' },
  { label: 'Peer Review Feedback Tone', badge: 'Constructive', color: '#003f7a', bg: '#e8f0fe' },
  { label: 'Departmental Alignment', badge: 'Attention Needed', color: '#d97706', bg: '#fef3c7' },
]

const WELLNESS_METRICS = [
  { label: 'Sleep Average', value: '6.2h', icon: 'bedtime', status: 'Below Target', color: '#d97706' },
  { label: 'Focus Sessions', value: '4/day', icon: 'psychology', status: 'On Track', color: '#10B981' },
  { label: 'Social Score', value: '62%', icon: 'people', status: 'Low', color: '#F59E0B' },
  { label: 'Exercise', value: '3x/wk', icon: 'fitness_center', status: 'Good', color: '#10B981' },
]

export default function WellnessPage() {
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
            <span style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 99, display: 'inline-block', marginBottom: 8 }}>GPA: 3.9</span>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Workload & Wellness Optimizer</h1>
            <p style={{ color: '#424750', fontSize: 14, marginTop: 6 }}>Cognitive fatigue vs. social engagement optimization.</p>
          </div>
        </div>

        {/* Wellness Metrics Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 24 }}>
          {WELLNESS_METRICS.map((m, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2', padding: '18px', textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 24, color: m.color, marginBottom: 6, display: 'block' }}>{m.icon}</span>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 22, color: '#191c20' }}>{m.value}</div>
              <div style={{ fontSize: 11, color: '#424750', marginTop: 2 }}>{m.label}</div>
              <span style={{ background: `${m.color}20`, color: m.color, fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99, marginTop: 6, display: 'inline-block' }}>{m.status}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 0 }}>
          {/* Cognitive Load Index */}
          <div style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <span style={{ color: '#10B981', fontSize: 16, fontWeight: 700 }}>✦</span>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20' }}>Cognitive Load Index</div>
            </div>
            <div style={{ fontSize: 12, color: '#424750', marginBottom: 16 }}>7-Day Trajectory vs. Recommended Baseline</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 120, marginBottom: 10 }}>
              {COGNITIVE_LOAD.map((d, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <div style={{ width: '100%', borderRadius: '4px 4px 0 0', background: d.val >= 75 ? '#fca5a5' : '#003f7a', opacity: d.val >= 75 ? 1 : 0.7, height: `${d.val}%` }} />
                  <span style={{ fontSize: 10, color: '#424750' }}>{d.day}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <span style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>Normal Load</span>
              <span style={{ background: '#fee2e2', color: '#dc2626', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>High Load</span>
            </div>
          </div>

          {/* Schedule Balancer */}
          <div style={cardStyle}>
            <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Schedule Balancer</div>
            <div style={{ background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: 12, padding: '14px', marginBottom: 10, display: 'flex', gap: 12 }}>
              <span style={{ fontSize: 20, flexShrink: 0 }}>☕</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontWeight: 700, fontSize: 13, color: '#191c20' }}>Suggested Break</span>
                  <span style={{ background: '#fef3c7', color: '#d97706', fontSize: 10, fontWeight: 700, padding: '2px 6px', borderRadius: 99 }}>IN 15 MINS</span>
                </div>
                <p style={{ fontSize: 12, color: '#424750' }}>Fatigue spike detected. Rest for 25 minutes.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flexShrink: 0 }}>
                <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 6, padding: '5px 10px', fontSize: 11, cursor: 'pointer' }}>Schedule</button>
                <button style={{ background: '#fff', color: '#424750', border: '1px solid #c2c6d2', borderRadius: 6, padding: '5px 10px', fontSize: 11, cursor: 'pointer' }}>Dismiss</button>
              </div>
            </div>
            <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 12, padding: '14px', display: 'flex', gap: 12 }}>
              <span style={{ fontSize: 20, flexShrink: 0 }}>👥</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: '#191c20', marginBottom: 4 }}>Peer Huddle Optimal</div>
                <p style={{ fontSize: 12, color: '#424750' }}>Social wellness low. 3 peers available in Quantum Lab room.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flexShrink: 0 }}>
                <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 6, padding: '5px 10px', fontSize: 11, cursor: 'pointer' }}>Join</button>
                <button style={{ background: '#fff', color: '#424750', border: '1px solid #c2c6d2', borderRadius: 6, padding: '5px 10px', fontSize: 11, cursor: 'pointer' }}>Dismiss</button>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {/* Mentorship Sentiment */}
          <div style={cardStyle}>
            <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Mentorship Sentiment Analysis</div>
            {MENTORSHIP.map((m, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', borderRadius: 10, background: '#f9f9ff', border: '1px solid #eef0f4', marginBottom: 8 }}>
                <span style={{ fontSize: 13, color: '#191c20' }}>{m.label}</span>
                <span style={{ background: m.bg, color: m.color, fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>{m.badge}</span>
              </div>
            ))}
          </div>

          {/* University Health Services */}
          <div style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <span style={{ fontSize: 24 }}>🏥</span>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20' }}>University Health Services</div>
            </div>
            <p style={{ fontSize: 13, color: '#424750', lineHeight: 1.6, marginBottom: 16 }}>Access campus clinical, counseling, and wellness resources anytime. Confidential support is available 24/7.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
              <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '10px', fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>calendar_month</span> Book Session
              </button>
              <button style={{ background: '#fff', color: '#dc2626', border: '1px solid #fca5a5', borderRadius: 8, padding: '10px', fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chat</span> Crisis Chat
              </button>
            </div>
            <div style={{ background: '#f9f9ff', borderRadius: 10, padding: '12px', border: '1px solid #eef0f4' }}>
              <div style={{ fontSize: 12, color: '#424750' }}>
                <div style={{ fontWeight: 600, color: '#191c20', marginBottom: 4 }}>Emergency: +1-800-555-HELP</div>
                <div>Student Counseling · Mon–Fri 8AM–8PM</div>
                <div>Online Wellness Portal: myhealth.university.edu</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
