'use client'
import Link from 'next/link'

const T = {
  bg: '#f9f9ff', surface: '#ffffff', primary: '#003f7a',
  ai: '#10B981', xp: '#F59E0B', textPrimary: '#191c20',
  textMuted: '#424750', border: '#c2c6d2', error: '#ba1a1a',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
}

const sidebarItems = [
  { icon: 'dashboard', label: 'Dashboard', href: '/parent/dashboard', active: true },
  { icon: 'people', label: 'My Children', href: '/parent/multi-child' },
  { icon: 'calendar_month', label: 'Calendar', href: '/parent/calendar' },
  { icon: 'folder', label: 'Documents', href: '/parent/documents' },
  { icon: 'sports_soccer', label: 'Extracurricular', href: '/parent/extracurricular' },
  { icon: 'chat', label: 'Messages', href: '/parent/messages' },
  { icon: 'payments', label: 'Tuition & Fees', href: '/parent/tuition' },
]

const STATS = [
  { icon: 'check_circle', label: 'Attendance', value: 'Checked In 08:15', sub: 'On Campus', color: T.ai },
  { icon: 'location_on', label: 'Current Location', value: 'Campus Zone B', sub: 'Live tracking', color: '#0891b2' },
  { icon: 'bar_chart', label: 'Average Grade', value: 'A- (92.4%)', sub: '+2.4% this term', color: T.primary },
  { icon: 'bolt', label: 'XP & Level', value: 'LVL 42 / 14,250', sub: 'Global Rank #1,204', color: T.xp },
]

const ACTIVITY = [
  { icon: 'auto_awesome', label: 'AI Breakthrough', time: '10m ago', detail: 'Calculus II improvement noted. Focus on "Integrals" suggested for continued growth.', color: T.ai },
  { icon: 'edit_note', label: 'Teacher Note', time: '2h ago', detail: 'Mr. Henderson (Physics): Praised lab leadership and fluid dynamics report.', color: '#0891b2' },
  { icon: 'emoji_events', label: 'Assignment Graded', time: 'Yesterday', detail: 'Modern History essay scored 95/100. Outstanding analysis.', color: T.xp },
]

const EVENTS = [
  { month: 'NOV', day: '14', title: 'Parent-Teacher Meet', time: '4:30 PM', location: 'Conference Hall C' },
  { month: 'NOV', day: '18', title: 'Science Fair Finals', time: '10:00 AM', location: 'Volunteer Entry' },
]

function Sidebar() {
  return (
    <aside style={{ width: 260, minHeight: '100vh', background: T.surface, borderRight: `1px solid ${T.border}`, display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0 }}>
      <div style={{ padding: '0 20px 24px', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: T.primary }}>EduWorld</div>
        <span style={{ display: 'inline-block', marginTop: 4, fontSize: 11, fontWeight: 600, color: T.primary, background: '#e8f0fe', borderRadius: 6, padding: '2px 8px' }}>Parent</span>
      </div>
      <nav style={{ flex: 1, padding: '16px 12px' }}>
        {sidebarItems.map(item => (
          <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, marginBottom: 2, background: item.active ? '#f3f3f9' : 'transparent', borderLeft: item.active ? `3px solid ${T.primary}` : '3px solid transparent', color: item.active ? T.primary : T.textMuted, fontFamily: T.fontBody, fontWeight: item.active ? 600 : 400, fontSize: 14 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
      <div style={{ padding: '0 16px 16px' }}>
        <div style={{ background: T.primary + '10', borderRadius: 12, padding: '12px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <span style={{ fontSize: 13, color: T.ai }}>✦</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: T.textPrimary }}>EduWorld AI</span>
          </div>
          <p style={{ fontSize: 11, color: T.textMuted }}>Ask about Alex's progress, grades, or upcoming events.</p>
        </div>
      </div>
    </aside>
  )
}

export default function ParentDashboardPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Good Morning, Sarah</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Alex Johnson is at St. Xavier High — all looks great today.</p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>notifications</span>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: T.error, display: 'inline-block' }} />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
          {STATS.map(s => (
            <div key={s.label} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 20 }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: s.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: s.color }}>{s.icon}</span>
              </div>
              <div style={{ fontSize: 11, color: T.textMuted, marginBottom: 2 }}>{s.label}</div>
              <div style={{ fontWeight: 700, fontSize: 15, color: T.textPrimary }}>{s.value}</div>
              <div style={{ fontSize: 11, color: s.color, fontWeight: 600, marginTop: 2 }}>{s.sub}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
          {/* Recent Activity */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 16 }}>Recent Activity</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {ACTIVITY.map(a => (
                <div key={a.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{ width: 34, height: 34, borderRadius: '50%', background: a.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18, color: a.color }}>{a.icon}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: 700, fontSize: 13, color: T.textPrimary }}>{a.label}</span>
                      <span style={{ fontSize: 11, color: T.textMuted }}>{a.time}</span>
                    </div>
                    <p style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>{a.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Upcoming Events</h2>
              <button style={{ fontSize: 13, color: T.primary, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {EVENTS.map(e => (
                <div key={e.title} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', background: T.bg, borderRadius: 12 }}>
                  <div style={{ textAlign: 'center', background: T.primary + '15', borderRadius: 10, padding: '6px 12px', minWidth: 48, flexShrink: 0 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: T.primary }}>{e.month}</div>
                    <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: T.textPrimary }}>{e.day}</div>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: T.textPrimary }}>{e.title}</div>
                    <div style={{ fontSize: 12, color: T.textMuted }}>{e.time} · {e.location}</div>
                  </div>
                </div>
              ))}
            </div>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: T.primary, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', marginTop: 12 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>calendar_month</span>
              Sync to Calendar
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {/* Live Location */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.ai }}>location_on</span>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Live Location</h2>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: T.ai }} />
                <span style={{ fontSize: 11, color: T.ai, fontWeight: 600 }}>Live</span>
              </div>
            </div>
            <div style={{ background: T.bg, borderRadius: 12, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px dashed ${T.border}`, marginBottom: 12 }}>
              <div style={{ textAlign: 'center' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 32, color: T.border }}>map</span>
                <div style={{ fontSize: 12, color: T.textMuted, marginTop: 4 }}>Main Gymnasium</div>
              </div>
            </div>
            <div style={{ fontSize: 12, color: T.textMuted }}>Updated 2 minutes ago · Building C, Ground Floor</div>
          </div>

          {/* AI Quick Links */}
          <div style={{ background: `linear-gradient(135deg, ${T.primary}, #0052a3)`, borderRadius: 16, padding: 24, color: '#fff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <span style={{ fontSize: 16 }}>✦</span>
              <span style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16 }}>EduWorld AI</span>
            </div>
            <p style={{ fontSize: 13, opacity: 0.9, marginBottom: 16 }}>Ask about Alex's progress, upcoming deadlines, or school events. I'm here 24/7.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {["How is Alex doing?", "Any upcoming exams?", "Recent grades"].map(q => (
                <button key={q} style={{ fontSize: 12, background: 'rgba(255,255,255,0.2)', color: '#fff', border: 'none', borderRadius: 20, padding: '6px 12px', cursor: 'pointer' }}>{q}</button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
