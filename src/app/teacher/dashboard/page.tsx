'use client'
import { useState } from 'react'
import Link from 'next/link'

const T = {
  bg: '#f9f9ff',
  surface: '#ffffff',
  primary: '#003f7a',
  primaryContainer: '#1e5799',
  ai: '#10B981',
  xp: '#F59E0B',
  textPrimary: '#191c20',
  textMuted: '#424750',
  border: '#c2c6d2',
  error: '#ba1a1a',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
}

const sidebarItems = [
  { icon: 'dashboard', label: 'Dashboard', href: '/teacher/dashboard', active: true },
  { icon: 'school', label: 'My Classes', href: '/teacher/classes' },
  { icon: 'assignment', label: 'Assignments', href: '/teacher/assignments' },
  { icon: 'analytics', label: 'Analytics', href: '/teacher/student-insights' },
  { icon: 'people', label: 'Students', href: '/teacher/student-groups' },
  { icon: 'calendar_month', label: 'Calendar', href: '/teacher/calendar' },
  { icon: 'inbox', label: 'Inbox', href: '/teacher/inbox' },
]

const stats = [
  { label: 'Students', value: '128', icon: 'people', color: T.primary },
  { label: 'Classes', value: '4', icon: 'school', color: '#7c3aed' },
  { label: 'Pending Grades', value: '23', icon: 'grading', color: T.xp },
  { label: 'Avg Score', value: '87%', icon: 'trending_up', color: T.ai },
]

const schedule = [
  { title: 'AP Physics — Section 1', sub: 'Room 402 · Thermodynamics', time: '09:00 AM', color: T.primary },
  { title: 'Office Hours', sub: 'Virtual (Zoom) & Room 402', time: '11:30 AM', color: T.ai },
  { title: 'World History — Section 3', sub: 'Room 310 · Cold War', time: '01:00 PM', color: T.xp },
  { title: 'AP Literature — Section 2', sub: 'Room 215 · Modernism', time: '03:00 PM', color: '#7c3aed' },
]

const submissions = [
  { student: 'Alex Rivera', subject: 'AP Physics', type: 'Lab Report', status: 'Pending', statusColor: T.xp },
  { student: 'Maya Chen', subject: 'World History', type: 'Essay', status: 'Graded', statusColor: T.ai },
  { student: 'Jordan Lee', subject: 'AP Literature', type: 'Analysis', status: 'Pending', statusColor: T.xp },
  { student: 'Sam Patel', subject: 'AP Physics', type: 'Problem Set', status: 'Late', statusColor: T.error },
  { student: 'Priya Nair', subject: 'Calculus', type: 'Quiz', status: 'Pending', statusColor: T.xp },
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
          color: T.primary, background: '#e8f0fe', borderRadius: 6, padding: '2px 8px',
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

export default function TeacherDashboardPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <p style={{ fontSize: 13, color: T.textMuted, marginBottom: 4 }}>Monday, May 18, 2026</p>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 26, fontWeight: 800, color: T.textPrimary, margin: 0 }}>
              Good morning, Mr. Johnson
            </h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Here's what's happening in your classes today</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px',
              background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10,
              fontSize: 14, color: T.textPrimary, cursor: 'pointer', fontFamily: T.fontBody,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>notifications</span>
              <span style={{ background: T.error, color: '#fff', borderRadius: '50%', width: 18, height: 18, fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</span>
            </button>
            <Link href="/teacher/assignments" style={{ textDecoration: 'none' }}>
              <button style={{
                display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px',
                background: T.primary, border: 'none', borderRadius: 10,
                fontSize: 14, color: '#fff', cursor: 'pointer', fontFamily: T.fontBody, fontWeight: 600,
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>add</span>
                Create Assignment
              </button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 28 }}>
          {stats.map(s => (
            <div key={s.label} style={{
              background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14,
              padding: '20px 20px', display: 'flex', alignItems: 'center', gap: 14,
            }}>
              <div style={{
                width: 46, height: 46, borderRadius: 12, background: s.color + '18',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: 22, color: s.color }}>{s.icon}</span>
              </div>
              <div>
                <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 24, color: T.textPrimary }}>{s.value}</div>
                <div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Suggestion */}
        <div style={{
          background: T.ai + '12', border: `1px solid ${T.ai}40`, borderRadius: 14,
          padding: '16px 20px', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <span style={{ fontSize: 18, color: T.ai }}>✦</span>
          <div style={{ flex: 1 }}>
            <span style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 14, color: T.ai }}>AI Insight · </span>
            <span style={{ fontSize: 14, color: T.textPrimary }}>3 students need additional support in Calculus. Review their recent quiz performance and consider a targeted revision session.</span>
          </div>
          <button style={{
            padding: '8px 16px', background: T.ai, color: '#fff', border: 'none',
            borderRadius: 8, fontSize: 13, cursor: 'pointer', fontWeight: 600,
          }}>View Students</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 24 }}>
          {/* Today's Schedule */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 18 }}>Today's Schedule</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {schedule.map(s => (
                <div key={s.title} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '12px 14px', borderRadius: 10, background: T.bg,
                  borderLeft: `4px solid ${s.color}`,
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 14, color: T.textPrimary }}>{s.title}</div>
                    <div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>{s.sub}</div>
                  </div>
                  <div style={{ fontWeight: 600, fontSize: 13, color: T.textMuted }}>{s.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Submissions */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Recent Submissions</h2>
              <Link href="/teacher/gradebook" style={{ fontSize: 13, color: T.primary, fontWeight: 600, textDecoration: 'none' }}>View All</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {submissions.map((s, i) => (
                <div key={s.student} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '11px 0', borderBottom: i < submissions.length - 1 ? `1px solid ${T.border}` : 'none',
                }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: T.textPrimary }}>{s.student}</div>
                    <div style={{ fontSize: 12, color: T.textMuted }}>{s.subject} · {s.type}</div>
                  </div>
                  <span style={{
                    fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 20,
                    background: s.statusColor + '20', color: s.statusColor,
                  }}>{s.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
          {[
            { label: 'Grade Queue', icon: 'grading', href: '/teacher/gradebook' },
            { label: 'Message Students', icon: 'message', href: '/teacher/student-comms' },
            { label: 'Take Attendance', icon: 'how_to_reg', href: '/teacher/classroom' },
            { label: 'Upload Resources', icon: 'upload', href: '/teacher/resources' },
          ].map(a => (
            <Link key={a.label} href={a.href} style={{ textDecoration: 'none', flex: 1 }}>
              <button style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '12px 16px', background: T.surface, border: `1px solid ${T.border}`,
                borderRadius: 10, fontSize: 14, color: T.textPrimary, cursor: 'pointer',
                fontFamily: T.fontBody, fontWeight: 500, transition: 'border-color 0.2s',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.primary }}>{a.icon}</span>
                {a.label}
              </button>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
