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

const STUDENTS = [
  { id: '94821', name: 'Alex Carter', initials: 'AC', status: 'On Track', grade: '92%', gradeLabel: 'A-', attendance: '98%', statusColor: T.ai },
  { id: '94822', name: 'Mia Sharma', initials: 'MS', status: 'High Achiever', grade: '98%', gradeLabel: 'A+', attendance: '100%', statusColor: '#7c3aed' },
  { id: '94823', name: 'Jordan Lee', initials: 'JL', status: 'At Risk', grade: '68%', gradeLabel: 'D+', attendance: '75%', statusColor: T.error },
  { id: '94824', name: 'Emma Patel', initials: 'EP', status: 'On Track', grade: '85%', gradeLabel: 'B+', attendance: '92%', statusColor: T.ai },
  { id: '94825', name: 'Lucas Kim', initials: 'LK', status: 'On Track', grade: '79%', gradeLabel: 'C+', attendance: '88%', statusColor: T.ai },
  { id: '94826', name: 'Sofia Reyes', initials: 'SR', status: 'On Track', grade: '88%', gradeLabel: 'B+', attendance: '95%', statusColor: T.ai },
  { id: '94827', name: 'Marcus Brown', initials: 'MB', status: 'At Risk', grade: '62%', gradeLabel: 'D', attendance: '70%', statusColor: T.error },
]

const TABS = ['All Students', 'At Risk', 'High Achievers']

export default function ClassRosterPage() {
  const [activeTab, setActiveTab] = useState('All Students')

  const filtered = activeTab === 'At Risk'
    ? STUDENTS.filter(s => s.status === 'At Risk')
    : activeTab === 'High Achievers'
    ? STUDENTS.filter(s => s.status === 'High Achiever')
    : STUDENTS

  return (
    <div style={{ padding: 32, fontFamily: T.fontBody, background: T.bg, minHeight: '100vh' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, fontSize: 13, color: T.textMuted }}>
          <Link href="/teacher/classes" style={{ color: T.primary, textDecoration: 'none', fontWeight: 600 }}>My Classes</Link>
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chevron_right</span>
          <span>AP Physics — Section A</span>
        </div>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>AP Physics — Section A</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Room 302 · Fall Semester 2025 · Mr. Johnson</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '9px 16px',
              background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10,
              fontSize: 13, color: T.textPrimary, cursor: 'pointer', fontFamily: T.fontBody,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span>
              Export Attendance
            </button>
            <button style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '9px 16px',
              background: T.primary, border: 'none', borderRadius: 10,
              fontSize: 13, color: '#fff', cursor: 'pointer', fontFamily: T.fontBody, fontWeight: 600,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>person_add</span>
              Add Student
            </button>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 28 }}>
          {[
            { label: 'Total Students', value: '28', icon: 'people', color: T.primary },
            { label: 'Class Average', value: '87.4%', sub: '▲ +1.2% this week', icon: 'grade', color: T.ai },
            { label: 'Avg. Attendance', value: '94.2%', icon: 'calendar_month', color: T.xp },
          ].map(s => (
            <div key={s.label} style={{
              background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14,
              padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 14,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12, background: s.color + '18',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: 22, color: s.color }}>{s.icon}</span>
              </div>
              <div>
                <div style={{ fontSize: 12, color: T.textMuted }}>{s.label}</div>
                <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 22, color: T.textPrimary }}>{s.value}</div>
                {s.sub && <div style={{ fontSize: 11, color: T.ai, fontWeight: 600 }}>{s.sub}</div>}
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <div style={{ display: 'flex', gap: 6 }}>
              {TABS.map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} style={{
                  padding: '7px 14px', borderRadius: 20, fontSize: 13, fontWeight: 600,
                  cursor: 'pointer', fontFamily: T.fontBody,
                  background: activeTab === tab ? T.primary : 'transparent',
                  color: activeTab === tab ? '#fff' : T.textMuted,
                  border: activeTab === tab ? 'none' : `1px solid ${T.border}`,
                }}>{tab}</button>
              ))}
            </div>
            <div style={{
              display: 'flex', alignItems: 'center', background: T.bg,
              border: `1px solid ${T.border}`, borderRadius: 10, padding: '0 10px',
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.textMuted }}>search</span>
              <input placeholder="Search students..." style={{
                border: 'none', outline: 'none', padding: '8px 8px',
                fontFamily: T.fontBody, fontSize: 13, color: T.textPrimary, background: 'transparent', width: 160,
              }} />
            </div>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${T.border}` }}>
                {['Student', 'Status', 'Grade', 'Letter', 'Attendance', 'Actions'].map(h => (
                  <th key={h} style={{
                    textAlign: 'left', paddingBottom: 10, paddingRight: 16,
                    fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: 'uppercase', letterSpacing: '0.05em',
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((s, i) => (
                <tr key={s.id} style={{ borderBottom: i < filtered.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                  <td style={{ padding: '14px 16px 14px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{
                        width: 36, height: 36, borderRadius: '50%', background: T.primary + '20',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 12, fontWeight: 700, color: T.primary, flexShrink: 0,
                      }}>{s.initials}</div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 14, color: T.textPrimary }}>{s.name}</div>
                        <div style={{ fontSize: 12, color: T.textMuted }}>ID: {s.id}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ paddingRight: 16 }}>
                    <span style={{
                      fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 20,
                      background: s.statusColor + '20', color: s.statusColor,
                    }}>{s.status}</span>
                  </td>
                  <td style={{ paddingRight: 16, fontWeight: 700, fontSize: 14, color: T.textPrimary }}>{s.grade}</td>
                  <td style={{ paddingRight: 16, fontSize: 13, color: T.textMuted }}>{s.gradeLabel}</td>
                  <td style={{ paddingRight: 16, fontSize: 14, color: T.textPrimary }}>{s.attendance}</td>
                  <td>
                    <div style={{ display: 'flex', gap: 4 }}>
                      {['message', 'history', 'visibility'].map(icon => (
                        <button key={icon} style={{
                          padding: 6, borderRadius: 8, border: 'none', background: 'transparent',
                          cursor: 'pointer', color: T.textMuted,
                        }}>
                          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{icon}</span>
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
