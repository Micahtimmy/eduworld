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

const CONVOS = [
  { id: 1, label: '👥', name: 'Advanced Physics Grp B', badge: 'Live', preview: 'Alex: The formula in slide 14 seems...', active: true },
  { id: 2, initials: 'MC', name: 'Marcus Chen', badge: '10:45 AM', preview: "I've uploaded my draft for the project." },
  { id: 3, initials: 'SJ', name: 'Sarah Jenkins', badge: '9:12 AM', preview: 'Can we discuss the assignment?' },
  { id: 4, ai: true, name: 'EduWorld Assistant', badge: '✦ AI', preview: '3 pending questions categorized.' },
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

export default function TeacherStudentCommsPage() {
  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: T.fontBody, overflow: 'hidden' }}>
      <Sidebar />
      {/* Conversation list */}
      <div style={{ width: 280, background: T.surface, borderRight: `1px solid ${T.border}`, display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
        <div style={{ padding: '20px 16px', borderBottom: `1px solid ${T.border}` }}>
          <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 12 }}>Communication Hub</h2>
          <div style={{ display: 'flex', alignItems: 'center', background: T.bg, border: `1px solid ${T.border}`, borderRadius: 10, padding: '0 10px' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.textMuted }}>search</span>
            <input placeholder="Search..." style={{ border: 'none', outline: 'none', padding: '8px 8px', fontFamily: T.fontBody, fontSize: 13, background: 'transparent', flex: 1 }} />
          </div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {CONVOS.map(c => (
            <div key={c.id} style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', cursor: 'pointer',
              background: c.active ? T.primary + '08' : 'transparent',
              borderRight: c.active ? `3px solid ${T.primary}` : '3px solid transparent',
              borderBottom: `1px solid ${T.border}`,
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: c.ai ? 18 : c.label ? 18 : 12, fontWeight: 700,
                background: c.ai ? T.ai + '20' : T.primary + '20', color: c.ai ? T.ai : T.primary,
              }}>
                {c.ai ? '✦' : c.label ? c.label : (c as { initials?: string }).initials}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600, fontSize: 13, color: T.textPrimary }}>{c.name}</span>
                  <span style={{ fontSize: 10, fontWeight: 700, padding: c.badge === 'Live' ? '2px 7px' : '0', borderRadius: 10, background: c.badge === 'Live' ? T.ai : 'transparent', color: c.badge === 'Live' ? '#fff' : c.badge === '✦ AI' ? T.ai : T.textMuted }}>{c.badge}</span>
                </div>
                <div style={{ fontSize: 12, color: T.textMuted, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginTop: 2 }}>{c.preview}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding: 12, borderTop: `1px solid ${T.border}` }}>
          <div style={{ background: T.xp + '15', border: `1px solid ${T.xp}30`, borderRadius: 10, padding: '8px 12px', textAlign: 'center' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: T.xp }}>⏰ Office Hours Active</div>
            <div style={{ fontSize: 11, color: T.textMuted }}>Ends in 45m — Open for 1:1</div>
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: T.bg }}>
        <div style={{ padding: '14px 20px', background: T.surface, borderBottom: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 24 }}>👥</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: T.textPrimary }}>Advanced Physics Grp B</div>
            <div style={{ fontSize: 12, color: T.ai, fontWeight: 600 }}>● 4 students currently active</div>
          </div>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.textMuted }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>videocam</span>
          </button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Student message */}
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: '50%', background: T.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: T.primary, flexShrink: 0 }}>MC</div>
            <div style={{ maxWidth: '60%' }}>
              <div style={{ fontSize: 11, color: T.textMuted, marginBottom: 4 }}>Marcus Chen · 10:48 AM</div>
              <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: '4px 16px 16px 16px', padding: '12px 14px', fontSize: 14, color: T.textPrimary }}>
                Hello Professor! I'm stuck on the quantum tunneling exercise. Is there a specific resource you'd recommend for probability wave calculations?
              </div>
            </div>
          </div>

          {/* AI Suggestion */}
          <div style={{ background: T.ai + '10', border: `1px solid ${T.ai}30`, borderRadius: 12, padding: 14, maxWidth: '60%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
              <span style={{ fontSize: 14, color: T.ai }}>✦</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: T.ai }}>AI Suggestion</span>
            </div>
            <p style={{ fontSize: 12, color: T.textMuted }}>3 other students asked similar questions today. Schedule a 15-minute group huddle?</p>
            <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
              <button style={{ padding: '5px 14px', background: T.ai, color: '#fff', border: 'none', borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Create Huddle</button>
              <button style={{ padding: '5px 14px', background: 'transparent', color: T.textMuted, border: `1px solid ${T.border}`, borderRadius: 6, fontSize: 12, cursor: 'pointer' }}>Dismiss</button>
            </div>
          </div>

          {/* Teacher reply */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ maxWidth: '60%' }}>
              <div style={{ fontSize: 11, color: T.textMuted, marginBottom: 4, textAlign: 'right' }}>You · 10:50 AM</div>
              <div style={{ background: T.primary, borderRadius: '16px 4px 16px 16px', padding: '12px 14px', fontSize: 14, color: '#fff' }}>
                Great question, Marcus. I've just attached a specialized worksheet to this thread that covers the probability wave functions step by step.
              </div>
            </div>
          </div>
        </div>

        {/* Compose */}
        <div style={{ padding: '12px 20px', background: T.surface, borderTop: `1px solid ${T.border}`, display: 'flex', gap: 10, alignItems: 'center' }}>
          <input placeholder="Type a message..." style={{ flex: 1, background: T.bg, border: `1px solid ${T.border}`, borderRadius: 24, padding: '10px 16px', fontFamily: T.fontBody, fontSize: 14, color: T.textPrimary, outline: 'none' }} />
          <button style={{ width: 40, height: 40, borderRadius: '50%', background: T.primary, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#fff' }}>send</span>
          </button>
        </div>
      </div>

      {/* Right panel */}
      <div style={{ width: 240, background: T.surface, borderLeft: `1px solid ${T.border}`, display: 'flex', flexDirection: 'column', flexShrink: 0, padding: 16, gap: 16 }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: T.textMuted, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Shared Files</span>
            <button style={{ fontSize: 12, color: T.primary, background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>View All</button>
          </div>
          {[
            { name: 'Lecture_Notes_04.pdf', meta: 'Shared by you · 2h ago', icon: 'picture_as_pdf', color: '#dc2626' },
            { name: 'Physics_Constants.xlsx', meta: 'Shared by Sarah · Yesterday', icon: 'table_chart', color: '#15803d' },
          ].map(f => (
            <div key={f.name} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18, color: f.color }}>{f.icon}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: T.textPrimary, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.name}</div>
                <div style={{ fontSize: 11, color: T.textMuted }}>{f.meta}</div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: T.textMuted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10 }}>Quick Actions</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {['Announce', 'Poll', 'Schedule', 'Bulk Share'].map(a => (
              <button key={a} style={{ padding: '10px 6px', background: T.bg, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 12, color: T.textPrimary, cursor: 'pointer', fontWeight: 500 }}>{a}</button>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <button style={{ width: '100%', padding: '10px 0', background: T.primary, color: '#fff', border: 'none', borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Compose</button>
        </div>
      </div>
    </div>
  )
}
