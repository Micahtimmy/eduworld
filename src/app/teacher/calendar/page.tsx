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
  { icon: 'dashboard', label: 'Dashboard', href: '/teacher/dashboard' },
  { icon: 'school', label: 'My Classes', href: '/teacher/classes' },
  { icon: 'assignment', label: 'Assignments', href: '/teacher/assignments' },
  { icon: 'analytics', label: 'Analytics', href: '/teacher/student-insights' },
  { icon: 'people', label: 'Students', href: '/teacher/student-groups' },
  { icon: 'calendar_month', label: 'Calendar', href: '/teacher/calendar', active: true },
  { icon: 'inbox', label: 'Inbox', href: '/teacher/inbox' },
]

const DAYS = ['Mon 16', 'Tue 17', 'Wed 18', 'Thu 19', 'Fri 20']

const EVENTS = [
  { title: 'AP Physics — Block A', room: 'Room 302', time: '9:00–10:00 AM', day: 'Mon', color: T.primary },
  { title: 'Cafeteria Duty', room: '', time: '11:30–12:00 PM', day: 'Mon', color: T.xp },
  { title: 'Dept. Sync (Virtual)', room: 'Zoom', time: '9:00–9:50 AM', day: 'Tue', color: T.ai },
  { title: 'Student Advising', room: 'Room 402', time: '10:30–11:15 AM', day: 'Tue', color: T.xp },
  { title: 'Emergency IEP Meeting', room: 'Room 110', time: '10:45–11:30 AM', day: 'Wed', color: T.error },
  { title: 'AI Webinar', room: 'Online', time: '2:00–3:30 PM', day: 'Wed', color: '#7c3aed' },
  { title: 'World History — Block C', room: 'Room 310', time: '1:00–2:00 PM', day: 'Thu', color: T.primary },
  { title: 'Parent Conference: Lee', room: 'Room 204', time: '4:00–4:30 PM', day: 'Thu', color: '#0891b2' },
  { title: 'AP Literature — Block B', room: 'Room 215', time: '11:00–12:00 PM', day: 'Fri', color: T.primary },
]

function Sidebar() {
  return (
    <aside style={{ width: 260, minHeight: '100vh', background: T.surface, borderRight: `1px solid ${T.border}`, display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0 }}>
      <div style={{ padding: '0 20px 24px', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: T.primary }}>EduWorld</div>
        <span style={{ display: 'inline-block', marginTop: 4, fontSize: 11, fontWeight: 600, color: T.primary, background: '#e8f0fe', borderRadius: 6, padding: '2px 8px' }}>Teacher</span>
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
    </aside>
  )
}

export default function TeacherCalendarPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Academic Calendar</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Educator Portal · May 2026</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ padding: '9px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>Today</button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 18px', background: T.primary, border: 'none', borderRadius: 10, fontSize: 13, color: '#fff', cursor: 'pointer', fontWeight: 600 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>add</span>Add Event
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 24 }}>
          {/* Calendar grid */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, overflow: 'hidden' }}>
            {/* Nav */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 20px', borderBottom: `1px solid ${T.border}` }}>
              <button style={{ width: 32, height: 32, borderRadius: 8, border: `1px solid ${T.border}`, background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.textMuted }}>chevron_left</span>
              </button>
              <div>
                <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary }}>May 2026</div>
                <div style={{ fontSize: 12, color: T.textMuted }}>Week of May 16 – May 22</div>
              </div>
              <button style={{ width: 32, height: 32, borderRadius: 8, border: `1px solid ${T.border}`, background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.textMuted }}>chevron_right</span>
              </button>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
                {['Week', 'Month', 'Agenda'].map((v, i) => (
                  <button key={v} style={{ padding: '5px 12px', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer', background: i === 0 ? T.primary : 'transparent', color: i === 0 ? '#fff' : T.textMuted, border: 'none' }}>{v}</button>
                ))}
              </div>
            </div>

            {/* Day headers */}
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${DAYS.length}, 1fr)`, borderBottom: `1px solid ${T.border}` }}>
              {DAYS.map(d => (
                <div key={d} style={{ padding: '12px 8px', textAlign: 'center', borderRight: `1px solid ${T.border}` }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: T.textMuted, textTransform: 'uppercase' }}>{d.split(' ')[0]}</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: T.textPrimary, marginTop: 2 }}>{d.split(' ')[1]}</div>
                </div>
              ))}
            </div>

            {/* Events */}
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${DAYS.length}, 1fr)`, minHeight: 300 }}>
              {DAYS.map(d => {
                const dayKey = d.split(' ')[0]
                const dayEvents = EVENTS.filter(e => e.day === dayKey)
                return (
                  <div key={d} style={{ borderRight: `1px solid ${T.border}`, padding: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {dayEvents.map(ev => (
                      <div key={ev.title} style={{ borderLeft: `4px solid ${ev.color}`, borderRadius: '0 8px 8px 0', padding: '8px 10px', background: ev.color + '12', cursor: 'pointer' }}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: T.textPrimary, marginBottom: 2 }}>{ev.title}</div>
                        <div style={{ fontSize: 11, color: T.textMuted }}>{ev.time}</div>
                        {ev.room && <div style={{ fontSize: 11, color: T.textMuted }}>{ev.room}</div>}
                      </div>
                    ))}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Sidebar panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 20 }}>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary, marginBottom: 14 }}>Calendar Layers</h2>
              {[
                { label: 'Personal', color: T.primary },
                { label: 'Classes', color: '#0891b2' },
                { label: 'Duties & Roster', color: T.xp },
                { label: 'Professional Dev.', color: T.ai },
              ].map(l => (
                <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 14, height: 14, borderRadius: 4, background: l.color }} />
                  <span style={{ fontSize: 13, color: T.textPrimary }}>{l.label}</span>
                </div>
              ))}
            </div>

            <div style={{ background: T.ai + '10', border: `1px solid ${T.ai}30`, borderRadius: 16, padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span style={{ fontSize: 16, color: T.ai }}>✦</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: T.textPrimary }}>AI Notice</span>
              </div>
              <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 10 }}>Scheduling conflict on Wednesday at 10:45 AM — IEP Meeting overlaps with Student Advising.</p>
              <button style={{ fontSize: 12, fontWeight: 600, color: T.primary, background: 'none', border: 'none', cursor: 'pointer' }}>Resolve Conflict →</button>
            </div>

            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 20 }}>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary, marginBottom: 14 }}>Upcoming</h2>
              {[
                { title: 'End of Term', date: 'Jun 20', color: T.error },
                { title: 'Parent Evening', date: 'May 28', color: T.xp },
                { title: 'Staff Day', date: 'Jun 5', color: T.ai },
              ].map(u => (
                <div key={u.title} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <span style={{ fontSize: 13, color: T.textPrimary }}>{u.title}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: u.color }}>{u.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
