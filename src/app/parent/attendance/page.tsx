'use client'
import Link from 'next/link'

const T = {
  bg: '#f9f9ff', surface: '#ffffff', primary: '#003f7a',
  ai: '#10B981', xp: '#F59E0B', textPrimary: '#191c20',
  textMuted: '#424750', border: '#c2c6d2', error: '#ba1a1a',
  indigo: '#5B6CF9', lavender: '#EDE9FE',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
}

const sidebarItems = [
  { icon: 'dashboard', label: 'Dashboard', href: '/parent/dashboard' },
  { icon: 'people', label: 'My Children', href: '/parent/multi-child' },
  { icon: 'security', label: 'Attendance', href: '/parent/attendance', active: true },
  { icon: 'insights', label: 'Performance', href: '/parent/performance' },
  { icon: 'calendar_month', label: 'Calendar', href: '/parent/calendar' },
  { icon: 'folder', label: 'Documents', href: '/parent/documents' },
  { icon: 'chat', label: 'Messages', href: '/parent/messages' },
  { icon: 'payments', label: 'Tuition & Fees', href: '/parent/tuition' },
]

const EVENTS = [
  { icon: 'login', title: 'Entered Campus', time: 'Today, 08:12 AM', detail: 'Main North Gate — RFID scan verified.', color: T.ai },
  { icon: 'meeting_room', title: 'Homeroom Check-in', time: 'Today, 08:30 AM', detail: 'Room 402 — QR code scan successful.', color: T.indigo },
  { icon: 'logout', title: 'Left Campus (Early)', time: 'Yesterday, 02:15 PM', detail: 'Medical Appointment — Approved by Mrs. Gable.', color: T.xp },
]

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const CAL_DATA: Record<number, 'present' | 'absent' | 'tardy' | null> = {
  1: 'present', 2: 'present', 3: 'present', 4: 'tardy', 5: 'present',
  8: 'present', 9: 'present', 10: 'present', 11: 'present', 12: 'absent',
  15: 'present', 16: 'present', 17: 'present', 18: 'present', 19: 'present',
  22: 'present', 23: 'present', 24: 'present', 25: 'present', 26: 'present',
}
const STATUS_COLORS: Record<string, string> = {
  present: '#22C55E', absent: '#EF4444', tardy: '#F59E0B',
}

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
          <p style={{ fontSize: 11, color: T.textMuted, margin: 0 }}>Track attendance, submit notes, and view campus location.</p>
        </div>
      </div>
    </aside>
  )
}

export default function ParentAttendancePage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        {/* Header */}
        <div style={{ marginBottom: 20 }}>
          <h1 style={{ fontFamily: T.fontHead, fontSize: 26, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Safety &amp; Attendance</h1>
          <p style={{ fontSize: 14, color: T.textMuted, marginTop: 6 }}>Real-time tracking and historical data for Alex Johnson.</p>
        </div>

        {/* AI Insight Banner */}
        <div style={{ background: T.lavender, border: '1px solid #C4B5FD', borderRadius: 12, padding: '14px 18px', marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#7C3AED' }}>auto_awesome</span>
            <div>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#4C1D95' }}>✦ EduWorld AI Insight</span>
              <p style={{ fontSize: 13, color: '#5B21B6', margin: '4px 0 0' }}>Alex has been present for 98% of classes this month. Commute patterns show consistent on-time arrivals via the North Gate, averaging check-in at 08:10 AM.</p>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
          {/* Security Events */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, margin: 0 }}>Security Events</h2>
              <button style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '5px 10px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.textMuted, cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>filter_list</span> Filter
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {EVENTS.map((e, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '12px', background: '#FAFAFA', borderRadius: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: e.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18, color: e.color }}>{e.icon}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary }}>{e.title}</div>
                    <div style={{ fontSize: 11, color: T.textMuted, marginTop: 2 }}>{e.time}</div>
                    <div style={{ fontSize: 12, color: T.textMuted, marginTop: 4 }}>{e.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Absence Note */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 6 }}>Submit Absence Note</h2>
            <p style={{ fontSize: 13, color: T.textMuted, marginBottom: 20 }}>Plan ahead and notify the school of upcoming absences.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: T.textPrimary, marginBottom: 6 }}>Start Date</label>
                <input type="date" style={{ width: '100%', padding: '9px 12px', border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, background: T.surface, boxSizing: 'border-box', outline: 'none' }} defaultValue="2024-10-28" />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: T.textPrimary, marginBottom: 6 }}>End Date</label>
                <input type="date" style={{ width: '100%', padding: '9px 12px', border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, background: T.surface, boxSizing: 'border-box', outline: 'none' }} defaultValue="2024-10-29" />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: T.textPrimary, marginBottom: 6 }}>Reason</label>
                <select style={{ width: '100%', padding: '9px 12px', border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, background: T.surface, outline: 'none', cursor: 'pointer' }}>
                  <option>Medical Appointment</option>
                  <option>Family Emergency</option>
                  <option>Illness</option>
                  <option>Religious Observance</option>
                </select>
              </div>
              <button style={{ padding: '11px', background: T.primary, color: '#fff', border: 'none', borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
                Submit Digital Note
              </button>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
          {/* Attendance Calendar */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 22, gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.textMuted }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>chevron_left</span>
              </button>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, margin: 0 }}>October 2023</h2>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.textMuted }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>chevron_right</span>
              </button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, marginBottom: 8 }}>
              {DAYS.map((d, i) => (
                <div key={i} style={{ textAlign: 'center', fontSize: 12, fontWeight: 700, color: T.textMuted, paddingBottom: 4 }}>{d}</div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
              {/* Empty cells for offset - October 2023 starts on Sunday */}
              {[null, null, null, null, null, null].map((_, i) => <div key={`e${i}`} />)}
              {Array.from({ length: 31 }, (_, i) => i + 1).map(day => {
                const status = CAL_DATA[day]
                return (
                  <div key={day} style={{ textAlign: 'center', padding: '6px 0', borderRadius: 8, background: status ? STATUS_COLORS[status] + '20' : 'transparent', position: 'relative' }}>
                    <span style={{ fontSize: 12, color: status ? STATUS_COLORS[status] : T.textMuted, fontWeight: status ? 700 : 400 }}>{day}</span>
                    {status && <div style={{ width: 5, height: 5, borderRadius: '50%', background: STATUS_COLORS[status], margin: '2px auto 0' }} />}
                  </div>
                )
              })}
            </div>
            <div style={{ display: 'flex', gap: 20, marginTop: 16, justifyContent: 'center' }}>
              {[['Present', '#22C55E'], ['Absent', '#EF4444'], ['Tardy', '#F59E0B']].map(([label, color]) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: color }} />
                  <span style={{ fontSize: 12, color: T.textMuted }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 22, flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.ai }}>event_available</span>
                <span style={{ fontSize: 13, color: T.textMuted }}>Monthly Presence</span>
              </div>
              <div style={{ fontFamily: T.fontHead, fontSize: 36, fontWeight: 900, color: T.ai }}>98%</div>
              <div style={{ fontSize: 12, color: T.textMuted, marginTop: 4 }}>21 of 22 school days</div>
            </div>
            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 22, flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.indigo }}>timer</span>
                <span style={{ fontSize: 13, color: T.textMuted }}>Punctuality</span>
              </div>
              <div style={{ fontFamily: T.fontHead, fontSize: 36, fontWeight: 900, color: T.indigo }}>92%</div>
              <div style={{ fontSize: 12, color: T.textMuted, marginTop: 4 }}>On-time arrivals this month</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
