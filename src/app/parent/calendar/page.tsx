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
  { icon: 'dashboard', label: 'Dashboard', href: '/parent/dashboard' },
  { icon: 'people', label: 'My Children', href: '/parent/multi-child' },
  { icon: 'calendar_month', label: 'Calendar', href: '/parent/calendar', active: true },
  { icon: 'folder', label: 'Documents', href: '/parent/documents' },
  { icon: 'sports_soccer', label: 'Extracurricular', href: '/parent/extracurricular' },
  { icon: 'chat', label: 'Messages', href: '/parent/messages' },
  { icon: 'payments', label: 'Tuition & Fees', href: '/parent/tuition' },
]

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

type CalEvent = { label: string; color: string }
const EVENTS: Record<number, CalEvent[]> = {
  2: [{ label: 'Labor Day', color: '#0891b2' }],
  7: [{ label: 'Football Finals', color: T.ai }],
  9: [{ label: 'Physics Deadline', color: T.error }, { label: 'Parent-Teacher', color: '#7c3aed' }],
  14: [{ label: 'Macbeth Show', color: T.xp }],
  21: [{ label: 'Sports Day', color: T.ai }],
}

const LEGEND = [
  { color: '#0891b2', label: 'School Events' },
  { color: T.ai, label: 'Sports' },
  { color: T.error, label: 'Academic Deadlines' },
  { color: '#7c3aed', label: 'Parent Events' },
  { color: T.xp, label: 'Arts & Culture' },
]

const REGISTRATIONS = [
  { label: 'Parent-Teacher Conference', status: 'Confirmed', icon: 'school', info: 'Nov 9 — 5:00 PM', confirmed: true },
  { label: 'Macbeth Book Tickets', status: 'Pending', icon: 'theater_comedy', info: 'Nov 14', confirmed: false },
  { label: 'Sports Day Sign-Up', status: 'Pending', icon: 'sports', info: 'Nov 21', confirmed: false },
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
    </aside>
  )
}

export default function ParentCalendarPage() {
  const dates = Array.from({ length: 30 }, (_, i) => i + 1)

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32, maxWidth: 960 }}>
        <div style={{ marginBottom: 20 }}>
          <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>School Calendar</h1>
          <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Alex Johnson · St. Xavier High · November 2025</p>
        </div>

        {/* AI Banner */}
        <div style={{ background: T.ai + '08', border: `1px solid ${T.ai}30`, borderRadius: 14, padding: '14px 18px', marginBottom: 20, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <span style={{ fontSize: 14, color: T.ai, marginTop: 1 }}>✦</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>Alex has 3 upcoming deadlines this week</div>
            <div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>Physics assignment due Nov 9 · Parent-Teacher Conference today · Football Finals Nov 7</div>
          </div>
          <button style={{ fontSize: 13, color: T.primary, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>View Schedule</button>
        </div>

        {/* Month Nav */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <button style={{ padding: '6px 14px', borderRadius: 8, border: `1px solid ${T.border}`, background: T.surface, cursor: 'pointer', fontSize: 16, color: T.textMuted }}>‹</button>
          <h2 style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 18, color: T.textPrimary }}>November 2025</h2>
          <button style={{ padding: '6px 14px', borderRadius: 8, border: `1px solid ${T.border}`, background: T.surface, cursor: 'pointer', fontSize: 16, color: T.textMuted }}>›</button>
        </div>

        {/* Calendar Grid */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, overflow: 'hidden', marginBottom: 20 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', borderBottom: `1px solid ${T.border}` }}>
            {DAYS.map(d => (
              <div key={d} style={{ textAlign: 'center', fontSize: 12, fontWeight: 700, color: T.textMuted, padding: '10px 0', background: T.bg }}>{d}</div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={`e${i}`} style={{ minHeight: 72, borderBottom: `1px solid ${T.border}`, borderRight: `1px solid ${T.border}`, padding: 4 }} />
            ))}
            {dates.map(d => (
              <div key={d} style={{ minHeight: 72, borderBottom: `1px solid ${T.border}`, borderRight: `1px solid ${T.border}`, padding: 4, background: d === 9 ? T.primary + '08' : 'transparent' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: d === 9 ? T.primary : T.textPrimary, marginBottom: 2 }}>{d}</div>
                {(EVENTS[d] || []).map(ev => (
                  <div key={ev.label} style={{ background: ev.color, borderRadius: 3, padding: '1px 4px', marginBottom: 2 }}>
                    <div style={{ color: '#fff', fontSize: 9, fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ev.label}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 24 }}>
          {LEGEND.map(l => (
            <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: l.color }} />
              <span style={{ fontSize: 12, color: T.textMuted }}>{l.label}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {/* Calendar Sync */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 22 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary, marginBottom: 14 }}>Calendar Sync</h2>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {[
                { icon: 'calendar_month', label: 'Google' },
                { icon: 'calendar_today', label: 'Outlook' },
                { icon: 'event', label: 'iCal' },
              ].map(s => (
                <button key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{s.icon}</span>
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Registration */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 22 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary }}>Registration</h2>
              <span style={{ fontSize: 11, fontWeight: 700, background: T.xp + '20', color: T.xp, padding: '2px 8px', borderRadius: 20 }}>2 Pending</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {REGISTRATIONS.map(r => (
                <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', background: T.bg, borderRadius: 10 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: r.confirmed ? T.ai : T.textMuted }}>{r.icon}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: 13, color: T.textPrimary }}>{r.label}</div>
                    <div style={{ fontSize: 11, color: T.textMuted }}>{r.info}</div>
                  </div>
                  {r.confirmed ? (
                    <span style={{ fontSize: 11, fontWeight: 700, background: T.ai + '20', color: T.ai, padding: '3px 8px', borderRadius: 20 }}>Confirmed</span>
                  ) : (
                    <button style={{ padding: '5px 12px', background: T.primary, color: '#fff', border: 'none', borderRadius: 8, fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>Register</button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
