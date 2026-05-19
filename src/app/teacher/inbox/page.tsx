'use client'
import { useState } from 'react'
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

const MESSAGES = [
  { id: 1, initials: 'LM', name: 'Leo Maxwell', role: 'Student', roleColor: '#0891b2', time: '10:42 AM', preview: 'Regarding the Essay deadline expansion...', unread: true },
  { id: 2, initials: 'SP', name: 'Sarah Peters', role: 'Parent', roleColor: T.ai, time: 'Yesterday', preview: "Grade report for Jacob's last quiz", unread: false },
  { id: 3, initials: 'PD', name: 'Principal Drane', role: 'Admin', roleColor: '#7c3aed', time: 'Jan 24', preview: 'Faculty meeting rescheduled to Friday', unread: false },
  { id: 4, initials: 'EK', name: 'Elena Kovic', role: 'Student', roleColor: '#0891b2', time: 'Jan 23', preview: 'Lab report submission issue', unread: false },
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

export default function TeacherInboxPage() {
  const [selected, setSelected] = useState(1)
  const active = MESSAGES.find(m => m.id === selected)!

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ padding: '24px 32px 16px', borderBottom: `1px solid ${T.border}`, background: T.surface }}>
          <h1 style={{ fontFamily: T.fontHead, fontSize: 22, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Inbox</h1>
          <p style={{ fontSize: 13, color: T.textMuted, marginTop: 3 }}>Professional communications with students, parents, and administration.</p>
        </div>

        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '320px 1fr', overflow: 'hidden' }}>
          {/* Message List */}
          <div style={{ background: T.surface, borderRight: `1px solid ${T.border}`, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
            <div style={{ padding: '12px 16px', borderBottom: `1px solid ${T.border}` }}>
              <div style={{ display: 'flex', alignItems: 'center', background: T.bg, border: `1px solid ${T.border}`, borderRadius: 10, padding: '0 10px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.textMuted }}>search</span>
                <input placeholder="Search messages..." style={{ border: 'none', outline: 'none', padding: '8px 8px', fontFamily: T.fontBody, fontSize: 13, background: 'transparent', flex: 1, color: T.textPrimary }} />
              </div>
              <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
                {['All', 'Unread', 'Student', 'Parent'].map((f, i) => (
                  <button key={f} style={{ padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: 'pointer', background: i === 0 ? T.primary + '15' : 'transparent', color: i === 0 ? T.primary : T.textMuted, border: 'none' }}>{f}</button>
                ))}
              </div>
            </div>
            {MESSAGES.map(m => (
              <button key={m.id} onClick={() => setSelected(m.id)} style={{ width: '100%', padding: '14px 16px', textAlign: 'left', background: selected === m.id ? T.primary + '08' : m.unread ? T.primary + '05' : 'transparent', border: 'none', cursor: 'pointer', borderBottom: `1px solid ${T.border}` }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <div style={{ width: 38, height: 38, borderRadius: '50%', background: T.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: T.primary, flexShrink: 0, position: 'relative' }}>
                    {m.initials}
                    {m.unread && <span style={{ position: 'absolute', top: 0, right: 0, width: 9, height: 9, background: T.error, borderRadius: '50%', border: '2px solid white' }} />}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: m.unread ? 700 : 500, fontSize: 13, color: T.textPrimary }}>{m.name}</span>
                      <span style={{ fontSize: 11, color: T.textMuted }}>{m.time}</span>
                    </div>
                    <div style={{ fontSize: 12, color: T.textMuted, marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.preview}</div>
                    <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 10, background: m.roleColor + '20', color: m.roleColor, marginTop: 4, display: 'inline-block' }}>{m.role}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Conversation */}
          <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            {/* Header */}
            <div style={{ padding: '16px 24px', borderBottom: `1px solid ${T.border}`, background: T.surface, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: T.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: T.primary }}>{active.initials}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontWeight: 700, fontSize: 15, color: T.textPrimary }}>{active.name}</span>
                  <span style={{ fontSize: 11, color: T.ai, fontWeight: 600 }}>● Active Now</span>
                </div>
                <div style={{ fontSize: 12, color: T.textMuted }}>AP Literature · Period 4 · GPA 3.8</div>
              </div>
              <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.textPrimary, cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 15 }}>grade</span>View Gradebook
              </button>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 16, background: T.bg }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: 12, color: T.textMuted, background: T.border + '50', padding: '4px 14px', borderRadius: 20 }}>Thursday, January 25</span>
              </div>

              {/* Student message */}
              <div style={{ display: 'flex', gap: 10 }}>
                <div style={{ width: 34, height: 34, borderRadius: '50%', background: T.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: T.primary, flexShrink: 0 }}>LM</div>
                <div style={{ maxWidth: '65%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ background: T.surface, borderRadius: '16px 16px 16px 4px', padding: '12px 14px', border: `1px solid ${T.border}` }}>
                    <div style={{ fontSize: 14, color: T.textPrimary }}>Hi, I'm having difficulty with the Sylvia Plath analysis. I haven't been feeling well and am struggling to complete it on time.</div>
                    <div style={{ fontSize: 11, color: T.textMuted, marginTop: 6 }}>10:42 AM</div>
                  </div>
                  <div style={{ background: T.surface, borderRadius: '16px 16px 16px 4px', padding: '12px 14px', border: `1px solid ${T.border}` }}>
                    <div style={{ fontSize: 14, color: T.textPrimary }}>Would it be possible to get a 48-hour extension? I can send what I have so far.</div>
                    <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', background: T.bg, borderRadius: 10, border: `1px solid ${T.border}` }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.textMuted }}>description</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 12, fontWeight: 600, color: T.textPrimary }}>Plath_Analysis_Outline.docx</div>
                        <div style={{ fontSize: 11, color: T.textMuted }}>2.4 MB · Word Document</div>
                      </div>
                      <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.primary, cursor: 'pointer' }}>download</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Suggestions */}
              <div style={{ background: T.ai + '10', border: `1px solid ${T.ai}30`, borderRadius: 14, padding: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                  <span style={{ fontSize: 15, color: T.ai }}>✦</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary }}>AI Response Assistant</span>
                </div>
                <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 10 }}>Suggested replies based on your grading policy and Leo's record:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    { label: 'Option A — Accommodating', text: '"Hi Leo, sorry to hear you\'re unwell. I can grant a 48-hour extension. Please submit by Saturday midnight."' },
                    { label: 'Option B — Partial Credit', text: '"Hi Leo, please submit what you have now for partial credit, then we can discuss further."' },
                  ].map(opt => (
                    <div key={opt.label} style={{ background: T.surface, borderRadius: 10, padding: '12px 14px', border: `1px solid ${T.border}` }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: T.textPrimary, marginBottom: 4 }}>{opt.label}</div>
                      <div style={{ fontSize: 12, color: T.textMuted, fontStyle: 'italic', marginBottom: 8 }}>{opt.text}</div>
                      <button style={{ padding: '5px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 6, fontSize: 11, fontWeight: 600, color: T.primary, cursor: 'pointer' }}>Use this draft</button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Teacher reply */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ maxWidth: '65%', background: T.primary, borderRadius: '16px 4px 16px 16px', padding: '12px 16px' }}>
                  <div style={{ fontSize: 14, color: '#fff' }}>Hi Leo, I've granted the extension. New deadline is Saturday midnight. Please rest and take care of yourself.</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', marginTop: 6, textAlign: 'right' }}>11:15 AM ✓</div>
                </div>
              </div>
            </div>

            {/* Compose Bar */}
            <div style={{ padding: '12px 24px', borderTop: `1px solid ${T.border}`, background: T.surface }}>
              <div style={{ display: 'flex', gap: 10 }}>
                <input placeholder="Write a message..." style={{
                  flex: 1, background: T.bg, border: `1px solid ${T.border}`, borderRadius: 12,
                  padding: '10px 16px', fontFamily: T.fontBody, fontSize: 14, color: T.textPrimary, outline: 'none',
                }} />
                <button style={{ padding: '10px 20px', background: T.primary, color: '#fff', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
