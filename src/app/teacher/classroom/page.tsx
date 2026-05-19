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
  { icon: 'school', label: 'My Classes', href: '/teacher/classes', active: true },
  { icon: 'assignment', label: 'Assignments', href: '/teacher/assignments' },
  { icon: 'analytics', label: 'Analytics', href: '/teacher/student-insights' },
  { icon: 'people', label: 'Students', href: '/teacher/student-groups' },
  { icon: 'calendar_month', label: 'Calendar', href: '/teacher/calendar' },
  { icon: 'inbox', label: 'Inbox', href: '/teacher/inbox' },
]

const STUDENTS = [
  { id: 1, name: 'Alex Rivera', initials: 'AR', status: 'present' as const },
  { id: 2, name: 'Maya Chen', initials: 'MC', status: 'present' as const },
  { id: 3, name: 'Jordan Lee', initials: 'JL', status: 'absent' as const },
  { id: 4, name: 'Sam Patel', initials: 'SP', status: 'present' as const },
  { id: 5, name: 'Priya Nair', initials: 'PN', status: 'present' as const },
  { id: 6, name: 'Marcus Brown', initials: 'MB', status: 'late' as const },
  { id: 7, name: 'Sofia Reyes', initials: 'SR', status: 'present' as const },
  { id: 8, name: 'Tyler Kim', initials: 'TK', status: 'present' as const },
  { id: 9, name: 'Lily Zhang', initials: 'LZ', status: 'present' as const },
  { id: 10, name: 'Ethan Moore', initials: 'EM', status: 'absent' as const },
  { id: 11, name: 'Ava Wilson', initials: 'AW', status: 'present' as const },
  { id: 12, name: 'Noah Davis', initials: 'ND', status: 'present' as const },
]

type AttStatus = 'present' | 'absent' | 'late'

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

export default function TeacherClassroomPage() {
  const [attendance, setAttendance] = useState<Record<number, AttStatus>>(
    Object.fromEntries(STUDENTS.map(s => [s.id, s.status]))
  )
  const [raiseHand, setRaiseHand] = useState([3, 7, 11])

  const present = Object.values(attendance).filter(s => s === 'present').length
  const absent = Object.values(attendance).filter(s => s === 'absent').length
  const late = Object.values(attendance).filter(s => s === 'late').length

  const cycleStatus = (id: number) => {
    const order: AttStatus[] = ['present', 'absent', 'late']
    const cur = attendance[id]
    const next = order[(order.indexOf(cur) + 1) % order.length]
    setAttendance(prev => ({ ...prev, [id]: next }))
  }

  const statusColor: Record<AttStatus, string> = { present: T.ai, absent: T.error, late: T.xp }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Live Classroom Tools</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>AP Physics — Section A · Room 402 · Today</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', background: T.primary + '10', border: `1px solid ${T.primary}30`, borderRadius: 10, fontFamily: T.fontHead, fontWeight: 700, fontSize: 18, color: T.primary }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>timer</span>
              47:25
            </div>
            <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', background: T.error, border: 'none', borderRadius: 10, fontSize: 14, color: '#fff', cursor: 'pointer', fontWeight: 600 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>stop_circle</span>End Class
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 24 }}>
          {[
            { label: 'Present', value: present, color: T.ai, icon: 'check_circle' },
            { label: 'Absent', value: absent, color: T.error, icon: 'cancel' },
            { label: 'Late', value: late, color: T.xp, icon: 'schedule' },
            { label: 'Raise Hand', value: raiseHand.length, color: T.primary, icon: 'pan_tool' },
          ].map(s => (
            <div key={s.label} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 22, color: s.color }}>{s.icon}</span>
              <div>
                <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 22, color: T.textPrimary }}>{s.value}</div>
                <div style={{ fontSize: 12, color: T.textMuted }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }}>
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Attendance — Click to toggle</h2>
              <button style={{ padding: '8px 16px', background: T.primary, color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, cursor: 'pointer', fontWeight: 600 }}>Save Attendance</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
              {STUDENTS.map(s => {
                const status = attendance[s.id]
                return (
                  <button key={s.id} onClick={() => cycleStatus(s.id)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '14px 8px', borderRadius: 12, background: statusColor[status] + '15', border: `2px solid ${statusColor[status]}40`, cursor: 'pointer' }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: T.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, color: T.primary }}>{s.initials}</div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: T.textPrimary, textAlign: 'center' }}>{s.name.split(' ')[0]}</div>
                    <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 10, background: statusColor[status] + '20', color: statusColor[status], textTransform: 'uppercase' }}>{status}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 20 }}>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary, marginBottom: 14 }}>Raise Hand Queue ({raiseHand.length})</h2>
              {raiseHand.length === 0 ? (
                <div style={{ textAlign: 'center', padding: 20, color: T.textMuted, fontSize: 13 }}>No raised hands</div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {raiseHand.map(id => {
                    const s = STUDENTS.find(x => x.id === id)!
                    return (
                      <div key={id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 10, background: T.xp + '10', border: `1px solid ${T.xp}30` }}>
                        <span style={{ fontSize: 18 }}>✋</span>
                        <div style={{ flex: 1, fontWeight: 600, fontSize: 13, color: T.textPrimary }}>{s.name}</div>
                        <button onClick={() => setRaiseHand(prev => prev.filter(x => x !== id))} style={{ padding: '4px 10px', background: T.primary, color: '#fff', border: 'none', borderRadius: 6, fontSize: 11, cursor: 'pointer', fontWeight: 600 }}>Done</button>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 20 }}>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary, marginBottom: 14 }}>Classroom Tools</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {[
                  { icon: 'draw', label: 'Whiteboard', color: T.primary },
                  { icon: 'quiz', label: 'Quick Quiz', color: '#7c3aed' },
                  { icon: 'poll', label: 'Poll', color: T.ai },
                  { icon: 'timer', label: 'Timer', color: T.xp },
                ].map(tool => (
                  <button key={tool.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '14px 8px', borderRadius: 10, background: tool.color + '10', border: `1px solid ${tool.color}30`, cursor: 'pointer' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 22, color: tool.color }}>{tool.icon}</span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: tool.color }}>{tool.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
