'use client'
import Link from 'next/link'

const T = {
  bg: '#f0f2f8', surface: '#ffffff', primary: '#003f7a',
  ai: '#10B981', xp: '#F59E0B', textPrimary: '#191c20',
  textMuted: '#424750', border: '#c2c6d2', error: '#ba1a1a',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
  sidebarBg: '#0d1b4b', sidebarText: '#c8d0e8', sidebarActive: '#1e3372',
}

const sidebarItems = [
  { icon: 'dashboard', label: 'Dashboard', href: '/admin/dashboard' },
  { icon: 'person_add', label: 'Student Intake', href: '/admin/student-intake' },
  { icon: 'groups', label: 'Students', href: '/admin/students' },
  { icon: 'school', label: 'Teachers', href: '/admin/teacher-roster' },
  { icon: 'analytics', label: 'Analytics', href: '/admin/analytics' },
  { icon: 'calendar_month', label: 'Events', href: '/admin/events', active: true },
  { icon: 'payments', label: 'Finance', href: '/admin/finance' },
  { icon: 'policy', label: 'Roles & Permissions', href: '/admin/roles' },
  { icon: 'menu_book', label: 'Curriculum', href: '/admin/curriculum' },
  { icon: 'monitor_heart', label: 'System Health', href: '/admin/health-monitor' },
]

const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

type CalEvent = { label: string; color: string }
const EVENTS: Record<number, CalEvent[]> = {
  1: [{ label: 'Public Holiday', color: '#64748b' }],
  6: [{ label: 'Term 3 Starts', color: T.ai }],
  8: [{ label: 'Staff In-Service', color: '#0891b2' }],
  14: [{ label: 'Exam Period: Yr 12', color: T.error }, { label: 'PTC: Humanities', color: '#7c3aed' }],
  15: [{ label: 'Exam Period: Yr 12', color: T.error }],
  16: [{ label: 'Exam Period: Yr 12', color: T.error }, { label: 'Sports Day Gala', color: T.xp }],
}

const CLASHES = [
  { title: 'Double Booking Detected', detail: 'May 14: Yr 12 Final Exams overlaps with Humanities Parent-Teacher Conference in West Wing.', actions: ['Reschedule', 'Ignore'] },
  { title: 'Resource Conflict', detail: 'May 16: Sports Day requires the Athletics Ground, currently booked for Science Fieldwork.', actions: ['Fix Booking'] },
]

const SYNC = [
  { label: 'Teacher Portal', status: 'LIVE', color: T.ai },
  { label: 'Student App', status: 'PENDING', color: T.xp },
  { label: 'Parent Connect', status: 'PENDING', color: T.xp },
]

function Sidebar() {
  return (
    <aside style={{ width: 240, minHeight: '100vh', background: T.sidebarBg, display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0 }}>
      <div style={{ padding: '0 20px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: '#ffffff' }}>EduWorld</div>
        <span style={{ display: 'inline-block', marginTop: 4, fontSize: 11, fontWeight: 600, color: '#93c5fd', background: 'rgba(147,197,253,0.15)', borderRadius: 6, padding: '2px 8px' }}>Admin</span>
      </div>
      <nav style={{ flex: 1, padding: '16px 10px' }}>
        {sidebarItems.map(item => (
          <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 8, marginBottom: 2, background: item.active ? T.sidebarActive : 'transparent', color: item.active ? '#ffffff' : T.sidebarText, fontFamily: T.fontBody, fontWeight: item.active ? 600 : 400, fontSize: 13 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{item.icon}</span>
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default function AdminEventsPage() {
  const dates = Array.from({ length: 31 }, (_, i) => i + 1)

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Master Institutional Calendar</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Academic Year 2025/26 · Session A</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ display: 'flex', border: `1px solid ${T.border}`, borderRadius: 10, overflow: 'hidden' }}>
              {['Month', 'Week', 'Day'].map((v, i) => (
                <button key={v} style={{ padding: '7px 14px', fontSize: 12, fontWeight: 600, cursor: 'pointer', background: i === 0 ? T.primary : T.surface, color: i === 0 ? '#fff' : T.textMuted, border: 'none', borderRight: i < 2 ? `1px solid ${T.border}` : 'none' }}>{v}</button>
              ))}
            </div>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', background: T.primary, border: 'none', borderRadius: 10, fontSize: 13, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>campaign</span>Publish to All Tiers
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20 }}>
          {/* Calendar */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 20px', borderBottom: `1px solid ${T.border}` }}>
              <button style={{ fontSize: 18, color: T.textMuted, background: 'none', border: 'none', cursor: 'pointer' }}>‹</button>
              <h2 style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary }}>May 2025</h2>
              <button style={{ fontSize: 18, color: T.textMuted, background: 'none', border: 'none', cursor: 'pointer' }}>›</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', borderBottom: `1px solid ${T.border}` }}>
              {DAYS.map(d => (
                <div key={d} style={{ textAlign: 'center', fontSize: 10, fontWeight: 700, color: T.textMuted, padding: '8px 0', background: T.bg }}>{d}</div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={`e${i}`} style={{ minHeight: 72, borderBottom: `1px solid ${T.border}`, borderRight: `1px solid ${T.border}`, padding: 4 }} />
              ))}
              {dates.map(d => (
                <div key={d} style={{ minHeight: 72, borderBottom: `1px solid ${T.border}`, borderRight: `1px solid ${T.border}`, padding: 4 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: T.textPrimary, marginBottom: 2 }}>{d}</div>
                  {(EVENTS[d] || []).map(ev => (
                    <div key={ev.label} style={{ background: ev.color, borderRadius: 3, padding: '1px 4px', marginBottom: 2 }}>
                      <div style={{ color: '#fff', fontSize: 8, fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ev.label}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right panels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Clash Detection */}
            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <h2 style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary }}>Clash Detection</h2>
                <span style={{ fontSize: 10, fontWeight: 700, background: T.ai + '15', color: T.ai, padding: '2px 8px', borderRadius: 20 }}>AI AUDIT</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {CLASHES.map(c => (
                  <div key={c.title} style={{ background: T.xp + '08', border: `1px solid ${T.xp}40`, borderRadius: 10, padding: '12px 14px' }}>
                    <div style={{ fontWeight: 700, fontSize: 13, color: T.textPrimary, marginBottom: 4 }}>⚠ {c.title}</div>
                    <div style={{ fontSize: 11, color: T.textMuted, marginBottom: 8 }}>{c.detail}</div>
                    <div style={{ display: 'flex', gap: 6 }}>
                      {c.actions.map(a => (
                        <button key={a} style={{ padding: '4px 12px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 6, fontSize: 11, fontWeight: 600, color: T.primary, cursor: 'pointer' }}>{a}</button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sync Status */}
            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 20 }}>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary, marginBottom: 12 }}>Sync Status</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {SYNC.map(s => (
                  <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', background: T.bg, borderRadius: 10 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: s.color, flexShrink: 0 }} />
                    <span style={{ flex: 1, fontSize: 13, color: T.textPrimary }}>{s.label}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: s.color }}>{s.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Broadcast CTA */}
            <div style={{ background: T.primary + '08', border: `1px solid ${T.primary}20`, borderRadius: 14, padding: 20, textAlign: 'center' }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary, marginBottom: 4 }}>Global Sync Ready</div>
              <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 14 }}>Click to broadcast updates to all tiers</div>
              <button style={{ width: '100%', padding: '10px 0', background: T.primary, color: '#fff', border: 'none', borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>📢 Broadcast Now</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
