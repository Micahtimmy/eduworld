'use client'
import { useState } from 'react'
import Link from 'next/link'

const T = {
  bg: '#f4f6f9',
  surface: '#ffffff',
  primary: '#003f7a',
  primaryLight: '#e8f0fe',
  ai: '#10B981',
  aiLight: '#d1fae5',
  xp: '#F59E0B',
  error: '#E53935',
  errorLight: '#fef2f2',
  textPrimary: '#191c20',
  textMuted: '#6B7280',
  border: '#e2e5ea',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
}

const sidebarItems = [
  { icon: 'dashboard', label: 'Dashboard', href: '/teacher/dashboard' },
  { icon: 'school', label: 'My Classes', href: '/teacher/classes' },
  { icon: 'assignment', label: 'Assignments', href: '/teacher/assignments' },
  { icon: 'analytics', label: 'Analytics', href: '/teacher/student-insights' },
  { icon: 'people', label: 'Students', href: '/teacher/student-groups' },
  { icon: 'auto_awesome', label: 'AI Lesson Plan', href: '/teacher/ai-lesson-plan' },
  { icon: 'psychology', label: 'AI Recommendations', href: '/teacher/ai-recommendations' },
  { icon: 'live_tv', label: 'Live Classroom', href: '/teacher/live-classroom', active: true },
  { icon: 'lock', label: 'Content Access', href: '/teacher/content-access' },
  { icon: 'calendar_month', label: 'Calendar', href: '/teacher/calendar' },
]

type AttendanceStatus = 'present' | 'absent' | 'late'

interface Student {
  name: string
  initials: string
  seat: string
  status: AttendanceStatus
  color: string
}

const students: Student[] = [
  { name: 'Avery Adams', initials: 'AA', seat: 'Row 1 Seat 1', status: 'present', color: '#003f7a' },
  { name: 'Blake Miller', initials: 'BM', seat: 'Row 1 Seat 2', status: 'present', color: '#7c3aed' },
  { name: 'Casey Huang', initials: 'CH', seat: 'Row 1 Seat 3', status: 'absent', color: '#E53935' },
  { name: 'Dana Torres', initials: 'DT', seat: 'Row 2 Seat 1', status: 'late', color: '#F59E0B' },
  { name: 'Eli Okafor', initials: 'EO', seat: 'Row 2 Seat 2', status: 'present', color: '#10B981' },
  { name: 'Fiona Walsh', initials: 'FW', seat: 'Row 2 Seat 3', status: 'present', color: '#003f7a' },
  { name: 'George Lim', initials: 'GL', seat: 'Row 3 Seat 1', status: 'present', color: '#7c3aed' },
  { name: 'Hana Nguyen', initials: 'HN', seat: 'Row 3 Seat 2', status: 'present', color: '#10B981' },
]

function Sidebar() {
  return (
    <aside style={{
      width: 260, minHeight: '100vh', background: T.surface,
      borderRight: `1px solid ${T.border}`, display: 'flex',
      flexDirection: 'column', padding: '24px 0', flexShrink: 0,
    }}>
      <div style={{ padding: '0 20px 24px', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: T.primary }}>EduWorld</div>
        <span style={{
          display: 'inline-block', marginTop: 4, fontSize: 11, fontWeight: 600,
          color: T.primary, background: T.primaryLight, borderRadius: 6, padding: '2px 8px',
        }}>Teacher</span>
      </div>
      <nav style={{ flex: 1, padding: '16px 12px' }}>
        {sidebarItems.map(item => (
          <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px',
              borderRadius: 8, marginBottom: 2, cursor: 'pointer',
              background: item.active ? '#f3f3f9' : 'transparent',
              borderLeft: item.active ? `3px solid ${T.primary}` : '3px solid transparent',
              color: item.active ? T.primary : T.textMuted,
              fontFamily: T.fontBody, fontWeight: item.active ? 600 : 400, fontSize: 14,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
      <div style={{ padding: '0 12px' }}>
        <Link href="/settings" style={{ textDecoration: 'none' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px',
            borderRadius: 8, color: T.textMuted, fontFamily: T.fontBody, fontSize: 14,
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>settings</span>
            Settings
          </div>
        </Link>
      </div>
    </aside>
  )
}

export default function LiveClassroomPage() {
  const [attendance, setAttendance] = useState<Record<string, AttendanceStatus>>(
    Object.fromEntries(students.map(s => [s.name, s.status]))
  )
  const [timerActive, setTimerActive] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null)
  const [points, setPoints] = useState<Record<string, number>>(
    Object.fromEntries(students.map(s => [s.name, 0]))
  )

  const presentCount = Object.values(attendance).filter(v => v === 'present').length

  function pickStudent() {
    const idx = Math.floor(Math.random() * students.length)
    setSelectedStudent(students[idx].name)
  }

  function cycleStatus(name: string) {
    setAttendance(prev => {
      const cur = prev[name]
      const next: AttendanceStatus = cur === 'present' ? 'absent' : cur === 'absent' ? 'late' : 'present'
      return { ...prev, [name]: next }
    })
  }

  function addPoint(name: string, delta: number) {
    setPoints(prev => ({ ...prev, [name]: (prev[name] ?? 0) + delta }))
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />

      <main style={{ flex: 1, overflowY: 'auto', padding: 28 }}>

        {/* Top Header Bar */}
        <div style={{
          background: T.surface, borderRadius: 14, border: `1px solid ${T.border}`,
          padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: 24,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.textMuted }}>search</span>
            <input placeholder="Search students…" style={{
              border: 'none', outline: 'none', fontSize: 14, color: T.textPrimary,
              fontFamily: T.fontBody, width: 180, background: 'transparent',
            }} />
            <div style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: T.ai + '18', borderRadius: 20, padding: '5px 12px',
            }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: T.ai }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: T.ai }}>Live Session 09:41 AM</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.textMuted, cursor: 'pointer' }}>notifications</span>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.textMuted, cursor: 'pointer' }}>help</span>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.textMuted, cursor: 'pointer' }}>settings</span>
            <div style={{
              width: 36, height: 36, borderRadius: '50%', background: T.primary,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontWeight: 700, fontSize: 14,
            }}>MJ</div>
          </div>
        </div>

        {/* Class Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 24 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: '0 0 4px' }}>
              Biology 101
            </h1>
            <p style={{ fontSize: 14, color: T.textMuted, margin: 0 }}>Period 2 · 28 Students</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px',
              background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10,
              fontSize: 14, color: T.textPrimary, cursor: 'pointer', fontFamily: T.fontBody, fontWeight: 500,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>screen_share</span>
              Present
            </button>
            <button style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px',
              background: T.error, border: 'none', borderRadius: 10,
              fontSize: 14, color: '#fff', cursor: 'pointer', fontFamily: T.fontBody, fontWeight: 600,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>check_circle</span>
              End Class
            </button>
          </div>
        </div>

        {/* Grid of Panels */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>

          {/* Panel 1 — Digital Attendance */}
          <div style={{
            background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14,
            padding: 22, gridColumn: '1 / 3',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.primary }}>fact_check</span>
                <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary }}>Digital Attendance</div>
              </div>
              <span style={{
                background: T.ai + '18', color: T.ai, fontWeight: 700, fontSize: 13,
                borderRadius: 20, padding: '4px 12px',
              }}>{presentCount}/28 Present</span>
            </div>
            <p style={{ fontSize: 13, color: T.textMuted, marginBottom: 18 }}>Quick-tap roster for today's session</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 18 }}>
              {students.map(student => {
                const status = attendance[student.name]
                const statusColor = status === 'present' ? T.ai : status === 'absent' ? T.error : T.xp
                const statusLabel = status === 'present' ? 'Present' : status === 'absent' ? 'Absent' : 'Late'
                return (
                  <div key={student.name} style={{
                    display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px',
                    background: T.bg, borderRadius: 10, border: `1px solid ${T.border}`,
                  }}>
                    <div style={{
                      width: 34, height: 34, borderRadius: '50%', background: student.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff', fontWeight: 700, fontSize: 12, flexShrink: 0,
                    }}>{student.initials}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: T.textPrimary, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{student.name}</div>
                      <div style={{ fontSize: 11, color: T.textMuted }}>{student.seat}</div>
                    </div>
                    <button
                      onClick={() => cycleStatus(student.name)}
                      style={{
                        width: 26, height: 26, borderRadius: '50%', background: statusColor + '20',
                        border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}
                      title={statusLabel}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 14, color: statusColor }}>
                        {status === 'present' ? 'check' : status === 'absent' ? 'close' : 'schedule'}
                      </span>
                    </button>
                  </div>
                )
              })}
            </div>

            {/* Timer */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px',
              background: T.bg, borderRadius: 10, border: `1px solid ${T.border}`,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.primary }}>timer</span>
              <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.textMuted }}>hourglass_empty</span>
              <span style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 22, color: T.textPrimary, flex: 1 }}>15:00</span>
              <button
                onClick={() => setTimerActive(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.textMuted }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 22 }}>replay</span>
              </button>
              <button
                onClick={() => setTimerActive(v => !v)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 36, height: 36, borderRadius: '50%', background: T.primary,
                  border: 'none', cursor: 'pointer', color: '#fff',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{timerActive ? 'pause' : 'play_arrow'}</span>
              </button>
            </div>
          </div>

          {/* Panel 2 — Cold Call */}
          <div style={{
            background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 22,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.primary }}>record_voice_over</span>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary }}>Cold Call</div>
            </div>
            <p style={{ fontSize: 13, color: T.textMuted, marginBottom: 18 }}>Randomly select a student to participate</p>

            {selectedStudent && (
              <div style={{
                background: T.primaryLight, borderRadius: 10, padding: '14px 16px',
                marginBottom: 16, textAlign: 'center',
              }}>
                <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 4 }}>Selected Student</div>
                <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 18, color: T.primary }}>{selectedStudent}</div>
              </div>
            )}

            <button
              onClick={pickStudent}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                padding: '12px', background: T.primary, border: 'none', borderRadius: 10,
                fontSize: 14, color: '#fff', cursor: 'pointer', fontFamily: T.fontBody, fontWeight: 700,
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>casino</span>
              Pick Student
            </button>
          </div>

          {/* Panel 3 — Behavior Points */}
          <div style={{
            background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 22,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.xp }}>stars</span>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary }}>Behavior Points</div>
            </div>
            <p style={{ fontSize: 13, color: T.textMuted, marginBottom: 18 }}>Quick-assign points to selected student</p>

            <div style={{ marginBottom: 14 }}>
              <select style={{
                width: '100%', padding: '10px 12px', border: `1px solid ${T.border}`,
                borderRadius: 8, fontSize: 13, color: T.textPrimary, fontFamily: T.fontBody,
                outline: 'none', background: T.surface, marginBottom: 10,
              }}>
                <option value="">Select a student…</option>
                {students.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
              {[
                { label: 'Participation', icon: 'add_circle', delta: 1, color: T.ai },
                { label: 'Teamwork', icon: 'group_add', delta: 2, color: T.primary },
                { label: 'Disruption', icon: 'remove_circle', delta: -1, color: T.error },
                { label: 'Off Task', icon: 'warning', delta: -1, color: T.xp },
              ].map(btn => (
                <button key={btn.label} style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
                  padding: '14px 10px', background: btn.color + '12',
                  border: `1px solid ${btn.color}30`, borderRadius: 10,
                  cursor: 'pointer', fontFamily: T.fontBody,
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 22, color: btn.color }}>{btn.icon}</span>
                  <div style={{ fontSize: 11, fontWeight: 600, color: btn.color }}>{btn.label}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: btn.color }}>{btn.delta > 0 ? '+' : ''}{btn.delta} Point{Math.abs(btn.delta) !== 1 ? 's' : ''}</div>
                </button>
              ))}
            </div>
            <button style={{
              fontSize: 12, color: T.primary, fontWeight: 600, background: 'none',
              border: 'none', cursor: 'pointer', fontFamily: T.fontBody,
              textDecoration: 'underline',
            }}>Customize Points Grid →</button>
          </div>

          {/* Panel 4 — Smart Grouping */}
          <div style={{
            background: 'linear-gradient(135deg, #f0fdf4, #ecfdf5)',
            border: `1px solid ${T.ai}30`, borderRadius: 14, padding: 22,
            gridColumn: '1 / 3',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.ai }}>group_work</span>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary }}>Smart Grouping</div>
              <span style={{ color: T.ai, fontSize: 14 }}>✦</span>
              <span style={{
                background: T.ai, color: '#fff', fontSize: 11, fontWeight: 700,
                borderRadius: 4, padding: '2px 6px',
              }}>AI</span>
            </div>
            <p style={{ fontSize: 14, color: T.textMuted, marginBottom: 18, lineHeight: 1.6 }}>
              Generate optimal student pairings based on performance data, learning styles, and classroom dynamics. The AI factors in recent quiz scores, participation patterns, and peer collaboration history to suggest balanced groups.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {students.slice(0, 4).map((s, i) => (
                  <div key={s.name} style={{
                    width: 36, height: 36, borderRadius: '50%', background: s.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontWeight: 700, fontSize: 12,
                    marginLeft: i === 0 ? 0 : -10,
                    border: '2px solid #fff',
                    zIndex: 4 - i,
                    position: 'relative',
                  }}>{s.initials}</div>
                ))}
                <div style={{
                  width: 36, height: 36, borderRadius: '50%', background: T.textMuted,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontWeight: 700, fontSize: 11,
                  marginLeft: -10, border: '2px solid #fff', position: 'relative',
                }}>+22</div>
              </div>
              <button style={{
                display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px',
                background: T.ai, border: 'none', borderRadius: 10,
                fontSize: 14, color: '#fff', cursor: 'pointer', fontFamily: T.fontBody, fontWeight: 700,
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>auto_awesome</span>
                Generate Pairs
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
