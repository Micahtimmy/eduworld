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
  { icon: 'calendar_month', label: 'Calendar', href: '/teacher/calendar' },
  { icon: 'inbox', label: 'Inbox', href: '/teacher/inbox', active: true },
]

const THREADS = [
  { initials: 'MG', name: 'Maria Garcia', time: '10:42 AM', preview: "RE: Leo's Math progress this week", student: 'Leo Garcia', active: true },
  { initials: 'DC', name: 'David Chen', time: 'Yesterday', preview: "Emma's reading assignment feedback", student: 'Emma Chen', unread: true },
  { initials: 'RS', name: 'Rachel Smith', time: 'Jan 23', preview: 'Behavior plan follow-up', student: 'John Smith' },
]

const MSGS = [
  { initials: 'MG', text: "Good morning! I noticed Leo's math scores have improved. How is he doing with fractions?", time: '10:40 AM', me: false },
  { initials: 'ME', text: "Good morning Maria! Leo has been making excellent progress. He completed the worksheet and got 8/10. I've attached the next worksheet!", time: '10:45 AM', me: true },
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

export default function TeacherParentCommsPage() {
  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: T.fontBody, overflow: 'hidden' }}>
      <Sidebar />
      {/* Threads list */}
      <div style={{ width: 260, background: T.surface, borderRight: `1px solid ${T.border}`, display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
        <div style={{ padding: '18px 16px', borderBottom: `1px solid ${T.border}` }}>
          <h2 style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary, marginBottom: 4 }}>Parent Conversations</h2>
          <span style={{ fontSize: 11, fontWeight: 700, color: T.ai, background: T.ai + '15', padding: '2px 8px', borderRadius: 20 }}>🌐 Auto-Translate On</span>
        </div>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {THREADS.map(t => (
            <div key={t.name} style={{ padding: '12px 16px', cursor: 'pointer', borderBottom: `1px solid ${T.border}`, background: t.active ? T.primary + '06' : 'transparent', borderLeft: t.active ? `3px solid ${T.primary}` : '3px solid transparent' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, fontSize: 13, color: T.textPrimary }}>{t.name}</span>
                <span style={{ fontSize: 11, color: T.textMuted }}>{t.time}</span>
              </div>
              <div style={{ fontSize: 11, color: T.textMuted, marginTop: 2 }}>👤 {t.student}</div>
              <div style={{ fontSize: 12, color: T.textMuted, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginTop: 2 }}>{t.preview}</div>
              {t.unread && <span style={{ fontSize: 10, fontWeight: 700, background: T.primary, color: '#fff', padding: '2px 8px', borderRadius: 10, marginTop: 4, display: 'inline-block' }}>Unread</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Chat */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: T.bg }}>
        <div style={{ padding: '14px 20px', background: T.surface, borderBottom: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 38, height: 38, borderRadius: '50%', background: T.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: T.primary }}>MG</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: T.textPrimary }}>Maria Garcia</div>
            <div style={{ fontSize: 12, color: T.textMuted }}>Parent of: Leo Garcia (Grade 4)</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {['phone', 'videocam'].map(icon => (
              <button key={icon} style={{ width: 36, height: 36, borderRadius: 8, background: T.bg, border: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.textMuted }}>{icon}</span>
              </button>
            ))}
          </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: 11, color: T.textMuted, background: T.border + '50', padding: '4px 14px', borderRadius: 20 }}>Today</span>
          </div>
          {MSGS.map((m, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, justifyContent: m.me ? 'flex-end' : 'flex-start' }}>
              {!m.me && <div style={{ width: 34, height: 34, borderRadius: '50%', background: T.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: T.primary, flexShrink: 0 }}>MG</div>}
              <div style={{ maxWidth: '55%' }}>
                <div style={{ background: m.me ? T.primary : T.surface, color: m.me ? '#fff' : T.textPrimary, borderRadius: m.me ? '16px 4px 16px 16px' : '4px 16px 16px 16px', padding: '12px 14px', fontSize: 14, border: m.me ? 'none' : `1px solid ${T.border}` }}>{m.text}</div>
                <div style={{ fontSize: 11, color: T.textMuted, marginTop: 4, textAlign: m.me ? 'right' : 'left' }}>{m.time}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding: '12px 20px', background: T.surface, borderTop: `1px solid ${T.border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
            <span style={{ fontSize: 13, color: T.ai }}>✦</span>
            <span style={{ fontSize: 12, color: T.ai, fontWeight: 600 }}>AI Reply Suggestion Active</span>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <input placeholder="Type a message..." style={{ flex: 1, background: T.bg, border: `1px solid ${T.border}`, borderRadius: 12, padding: '10px 16px', fontFamily: T.fontBody, fontSize: 14, color: T.textPrimary, outline: 'none' }} />
            <button style={{ width: 40, height: 40, borderRadius: '50%', background: T.primary, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#fff' }}>send</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div style={{ width: 240, background: T.surface, borderLeft: `1px solid ${T.border}`, padding: 16, display: 'flex', flexDirection: 'column', gap: 16, flexShrink: 0 }}>
        {/* Broadcast */}
        <div>
          <div style={{ fontFamily: T.fontHead, fontSize: 14, fontWeight: 700, color: T.textPrimary, marginBottom: 10 }}>📢 Broadcast</div>
          <select style={{ width: '100%', padding: '8px 12px', background: T.bg, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 13, marginBottom: 8, fontFamily: T.fontBody, color: T.textPrimary }}>
            <option>All Parents (Grade 4)</option>
            <option>Whole School</option>
          </select>
          <textarea placeholder="Type announcement..." rows={3} style={{ width: '100%', padding: '8px 12px', background: T.bg, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 13, resize: 'none', fontFamily: T.fontBody, marginBottom: 8, color: T.textPrimary, boxSizing: 'border-box' }} />
          <button style={{ width: '100%', padding: '9px 0', background: T.primary, color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Send Broadcast</button>
        </div>

        {/* Conferences */}
        <div>
          <div style={{ fontFamily: T.fontHead, fontSize: 14, fontWeight: 700, color: T.textPrimary, marginBottom: 10 }}>Upcoming Conferences</div>
          {[
            { family: 'Chen Family', student: 'Emma Chen', date: 'Tomorrow', time: '3:30–4:00 PM' },
            { family: 'Smith Family', student: 'John Smith', date: 'May 24', time: '4:15–4:45 PM' },
          ].map(c => (
            <div key={c.family} style={{ background: T.bg, borderRadius: 10, padding: '10px 12px', marginBottom: 8 }}>
              <div style={{ fontWeight: 600, fontSize: 13, color: T.textPrimary }}>{c.family}</div>
              <div style={{ fontSize: 11, color: T.textMuted }}>{c.student} · {c.date} · {c.time}</div>
            </div>
          ))}
          <button style={{ width: '100%', padding: '8px 0', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.primary, fontWeight: 600, cursor: 'pointer' }}>+ Schedule New</button>
        </div>
      </div>
    </div>
  )
}
