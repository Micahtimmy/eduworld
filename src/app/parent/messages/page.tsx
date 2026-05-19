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
  { icon: 'dashboard', label: 'Dashboard', href: '/parent/dashboard' },
  { icon: 'people', label: 'My Children', href: '/parent/multi-child' },
  { icon: 'calendar_month', label: 'Calendar', href: '/parent/calendar' },
  { icon: 'folder', label: 'Documents', href: '/parent/documents' },
  { icon: 'sports_soccer', label: 'Extracurricular', href: '/parent/extracurricular' },
  { icon: 'chat', label: 'Messages', href: '/parent/messages', active: true },
  { icon: 'payments', label: 'Tuition & Fees', href: '/parent/tuition' },
]

const CONTACTS = [
  { id: 1, name: 'Ms. Julia Simmons', role: 'Mathematics · Grade 11', preview: 'Alex is doing great in class...', time: '10m', unread: 0, online: true },
  { id: 2, name: 'Mr. Robert Chen', role: 'Physics · Grade 11', preview: '📎 Lab worksheet attached', time: '2h', unread: 0, online: false },
  { id: 3, name: 'School Administration', role: 'St. Xavier High · Main Office', preview: 'Please review the new policy...', time: 'Yesterday', unread: 2, online: true },
  { id: 4, name: 'Dr. Amara Osei', role: 'Chemistry · Grade 11', preview: 'Reminder: parent workshop on Fri', time: 'Mon', unread: 0, online: false },
]

const MESSAGES = [
  { id: 1, from: 'teacher', text: "Good morning! I wanted to share that Alex has been showing exceptional progress in our calculus unit. His problem-solving skills have really improved this term.", time: '9:14 AM' },
  { id: 2, from: 'parent', text: "That's wonderful to hear! He's been putting in a lot of extra study time. Are there any areas he should focus on for the upcoming assessment?", time: '9:32 AM' },
  { id: 3, from: 'teacher', text: "He should review integration by parts and related rates. I've attached the practice worksheet we covered in class.", time: '9:45 AM', attachment: 'calculus-practice.pdf · 1.2 MB' },
  { id: 4, from: 'parent', text: "Perfect, thank you so much! I'll make sure he goes through it this weekend.", time: '9:51 AM' },
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

export default function ParentMessagesPage() {
  const [activeId, setActiveId] = useState(1)
  const [message, setMessage] = useState('')
  const activeContact = CONTACTS.find(c => c.id === activeId)!

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      {/* Contact list */}
      <div style={{ width: 300, borderRight: `1px solid ${T.border}`, background: T.surface, display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
        <div style={{ padding: '20px 16px 14px', borderBottom: `1px solid ${T.border}` }}>
          <h2 style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary, marginBottom: 2 }}>Communication Hub</h2>
          <p style={{ fontSize: 12, color: T.textMuted }}>Connect with Alex's teachers</p>
        </div>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {CONTACTS.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              style={{ width: '100%', display: 'flex', alignItems: 'flex-start', gap: 10, padding: '14px 16px', background: activeId === c.id ? T.bg : 'transparent', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: `1px solid ${T.border}`, textAlign: 'left', cursor: 'pointer', position: 'relative' }}
            >
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: T.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, color: T.primary }}>
                  {c.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                </div>
                {c.online && <div style={{ position: 'absolute', bottom: 1, right: 1, width: 8, height: 8, borderRadius: '50%', background: T.ai, border: `2px solid ${T.surface}` }} />}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontWeight: 700, fontSize: 13, color: T.textPrimary }}>{c.name}</span>
                  <span style={{ fontSize: 11, color: T.textMuted }}>{c.time}</span>
                </div>
                <div style={{ fontSize: 11, color: T.textMuted, marginBottom: 2 }}>{c.role}</div>
                <div style={{ fontSize: 12, color: T.textMuted, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.preview}</div>
              </div>
              {c.unread > 0 && (
                <div style={{ width: 18, height: 18, borderRadius: '50%', background: T.error, color: '#fff', fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{c.unread}</div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 20px', background: T.surface, borderBottom: `1px solid ${T.border}`, flexShrink: 0 }}>
          <div style={{ position: 'relative' }}>
            <div style={{ width: 38, height: 38, borderRadius: '50%', background: T.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, color: T.primary }}>
              {activeContact.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
            </div>
            {activeContact.online && <div style={{ position: 'absolute', bottom: 1, right: 1, width: 8, height: 8, borderRadius: '50%', background: T.ai, border: `2px solid ${T.surface}` }} />}
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>{activeContact.name}</div>
            <div style={{ fontSize: 12, color: T.textMuted }}>{activeContact.role} · {activeContact.online ? 'Active now' : 'Offline'}</div>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
            <button style={{ padding: '7px 10px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, cursor: 'pointer', color: T.textMuted }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>call</span>
            </button>
            <button style={{ padding: '7px 10px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, cursor: 'pointer', color: T.textMuted }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>more_vert</span>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: 11, color: T.textMuted, background: T.bg, padding: '4px 12px', borderRadius: 20, border: `1px solid ${T.border}` }}>Today, November 14</span>
          </div>
          {MESSAGES.map(m => (
            <div key={m.id} style={{ display: 'flex', gap: 10, flexDirection: m.from === 'parent' ? 'row-reverse' : 'row' }}>
              {m.from === 'teacher' && (
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: T.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12, color: T.primary, flexShrink: 0 }}>
                  {activeContact.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                </div>
              )}
              <div style={{ maxWidth: '60%', display: 'flex', flexDirection: 'column', alignItems: m.from === 'parent' ? 'flex-end' : 'flex-start' }}>
                <div style={{ padding: '10px 14px', borderRadius: m.from === 'parent' ? '16px 4px 16px 16px' : '4px 16px 16px 16px', background: m.from === 'teacher' ? T.bg : T.primary, color: m.from === 'teacher' ? T.textPrimary : '#fff', fontSize: 14 }}>
                  {m.text}
                  {m.attachment && (
                    <div style={{ marginTop: 8, padding: '8px 10px', background: 'rgba(0,0,0,0.1)', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>description</span>
                      <span style={{ fontSize: 12 }}>{m.attachment}</span>
                    </div>
                  )}
                </div>
                <span style={{ fontSize: 11, color: T.textMuted, marginTop: 3 }}>{m.time}</span>
              </div>
            </div>
          ))}

          {/* AI Suggested Reply */}
          <div style={{ background: T.primary + '08', border: `1px solid ${T.primary}20`, borderRadius: 12, padding: '12px 14px', margin: '0 10%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
              <span style={{ fontSize: 12, color: T.ai }}>✦</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: T.textPrimary }}>Suggested Reply</span>
            </div>
            <p style={{ fontSize: 12, color: T.textMuted, fontStyle: 'italic', marginBottom: 8 }}>"Thank you for the worksheet! We'll make sure Alex reviews it before the weekend."</p>
            <button style={{ padding: '5px 14px', background: T.primary, color: '#fff', border: 'none', borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Use Draft</button>
          </div>
        </div>

        {/* Compose */}
        <div style={{ padding: '12px 16px', background: T.surface, borderTop: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', gap: 10 }}>
          <button style={{ padding: '7px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, cursor: 'pointer', color: T.textMuted }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>attach_file</span>
          </button>
          <input
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Type a message..."
            style={{ flex: 1, padding: '9px 14px', border: `1px solid ${T.border}`, borderRadius: 24, fontFamily: T.fontBody, fontSize: 14, color: T.textPrimary, background: T.bg, outline: 'none' }}
          />
          <button style={{ width: 36, height: 36, borderRadius: '50%', background: T.primary, color: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>send</span>
          </button>
        </div>
      </div>

      {/* Right panel */}
      <div style={{ width: 240, borderLeft: `1px solid ${T.border}`, background: T.surface, padding: 20, display: 'flex', flexDirection: 'column', gap: 16, overflowY: 'auto', flexShrink: 0 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', background: T.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 18, color: T.primary, margin: '0 auto 8px' }}>
            {activeContact.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
          </div>
          <div style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>{activeContact.name}</div>
          <div style={{ fontSize: 12, color: T.textMuted }}>{activeContact.role}</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          <div style={{ background: T.bg, borderRadius: 10, padding: '10px 0', textAlign: 'center' }}>
            <div style={{ fontWeight: 800, fontSize: 18, color: T.textPrimary }}>4.9</div>
            <div style={{ fontSize: 10, color: T.textMuted }}>Rating</div>
          </div>
          <div style={{ background: T.bg, borderRadius: 10, padding: '10px 0', textAlign: 'center' }}>
            <div style={{ fontWeight: 800, fontSize: 18, color: T.textPrimary }}>12</div>
            <div style={{ fontSize: 10, color: T.textMuted }}>Yrs Exp.</div>
          </div>
        </div>
        <div style={{ background: '#eff6ff', borderRadius: 10, padding: '12px 14px' }}>
          <div style={{ fontWeight: 600, fontSize: 12, color: T.textPrimary, marginBottom: 4 }}>Office Hours</div>
          <div style={{ fontSize: 11, color: T.textMuted }}>Mon/Wed: 3:30 – 4:30 PM</div>
          <div style={{ fontSize: 11, color: T.textMuted }}>Fri Virtual: 4:00 – 5:00 PM</div>
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontWeight: 600, fontSize: 12, color: T.textPrimary }}>Shared Files</span>
            <button style={{ fontSize: 11, color: T.primary, background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
          </div>
          {['Report Card Q2.pdf', 'Physics Lab Slip.pdf'].map(f => (
            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 0', borderBottom: `1px solid ${T.border}` }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.error }}>description</span>
              <span style={{ fontSize: 12, color: T.textPrimary, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f}</span>
            </div>
          ))}
        </div>
        <div style={{ background: T.ai + '08', border: `1px solid ${T.ai}30`, borderRadius: 10, padding: '12px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 4 }}>
            <span style={{ fontSize: 11, color: T.ai }}>✦</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: T.textPrimary }}>EduWorld AI Tip</span>
          </div>
          <p style={{ fontSize: 11, color: T.textMuted }}>Teachers respond fastest between 3–5 PM on weekdays.</p>
        </div>
      </div>
    </div>
  )
}
