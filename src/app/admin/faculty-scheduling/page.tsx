'use client'
import Link from 'next/link'
import { useState } from 'react'

const T = {
  bg: '#f0f2f8', surface: '#ffffff', primary: '#003f7a',
  ai: '#10B981', xp: '#F59E0B', textPrimary: '#191c20',
  textMuted: '#424750', border: '#c2c6d2', error: '#ba1a1a',
  warning: '#d97706', success: '#059669', purple: '#7c3aed',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
  sidebarBg: '#0d1b4b', sidebarText: '#c8d0e8', sidebarActive: '#1e3372',
}

const sidebarItems = [
  { icon: 'dashboard', label: 'Dashboard', href: '/admin/dashboard' },
  { icon: 'person_add', label: 'Student Intake', href: '/admin/student-intake' },
  { icon: 'groups', label: 'Students', href: '/admin/students' },
  { icon: 'school', label: 'Teachers', href: '/admin/teacher-roster' },
  { icon: 'event_available', label: 'Faculty Scheduling', href: '/admin/faculty-scheduling', active: true },
  { icon: 'person_search', label: 'Staff Onboarding', href: '/admin/staff-onboarding' },
  { icon: 'campaign', label: 'Messaging', href: '/admin/messaging' },
  { icon: 'analytics', label: 'Analytics', href: '/admin/analytics' },
  { icon: 'payments', label: 'Finance', href: '/admin/finance' },
  { icon: 'policy', label: 'Roles & Permissions', href: '/admin/roles' },
]

const faculty = [
  {
    initials: 'ER',
    name: 'Dr. Elena Rodriguez',
    dept: 'Computer Science',
    schedule: {
      MON: { code: 'CS402', title: 'Algorithms', time: '09:00–11:00', room: 'R402', status: 'normal' },
      TUE: { code: 'CS101', title: 'Intro to CS', time: '10:00–12:00', room: 'R402', status: 'clash' },
      WED: { code: 'CS402', title: 'Algorithms', time: '09:00–11:00', room: 'R402', status: 'normal' },
      THU: { code: 'OFFICE', title: 'Office Hours', time: '13:00–15:00', room: '—', status: 'office' },
      FRI: null,
    },
  },
  {
    initials: 'MC',
    name: 'Prof. Marcus Chen',
    dept: 'Mathematics',
    schedule: {
      MON: { code: 'MATH201', title: 'Calculus I', time: '13:00–15:00', room: 'L10', status: 'normal' },
      TUE: { code: 'MATH500', title: 'Advanced Algebra', time: '14:00–16:00', room: 'R12', status: 'normal' },
      WED: { code: 'MATH201', title: 'Calculus I', time: '08:00–12:00', room: 'L10', status: 'workload' },
      THU: { code: 'MATH201', title: 'Calculus I', time: '13:00–15:00', room: 'L10', status: 'normal' },
      FRI: null,
    },
  },
  {
    initials: 'SJ',
    name: 'Dr. Sarah Jenkins',
    dept: 'Business Admin',
    schedule: {
      MON: { code: 'BUS105', title: 'Marketing 101', time: '11:00–13:00', room: 'R301', status: 'normal' },
      TUE: { code: 'BUS302', title: 'Business Ethics', time: '15:00–17:00', room: 'L05', status: 'normal' },
      WED: { code: 'BUS105', title: 'Marketing 101', time: '11:00–13:00', room: 'R301', status: 'normal' },
      THU: null,
      FRI: null,
    },
  },
  {
    initials: 'JD',
    name: 'Dr. James Doe',
    dept: 'Engineering',
    schedule: {
      MON: { code: 'ENG101', title: 'Mechanics', time: '08:00–10:00', room: 'Lab B', status: 'normal' },
      TUE: { code: 'ENG101', title: 'Mechanics', time: '08:00–10:00', room: 'Lab B', status: 'normal' },
      WED: null,
      THU: { code: 'ENG305', title: 'Robotics', time: '14:00–16:00', room: 'Lab C', status: 'normal' },
      FRI: null,
    },
  },
]

const conflicts = [
  { icon: 'warning', type: 'Room Clash: R402', detail: 'CS101 (Rodriguez) vs IT202 (Mayer)', time: 'Tue 10:00–12:00', severity: 'error' },
  { icon: 'person_off', type: 'Faculty Unavailability', detail: 'Prof. Chen (MATH) marked PTO', time: 'Wed All Day', severity: 'warning' },
  { icon: 'warning', type: 'Room Clash: L05', detail: 'BUS302 (Jenkins) vs ENG200 (Kim)', time: 'Tue 15:00–17:00', severity: 'error' },
  { icon: 'schedule', type: 'Workload Warning', detail: 'Prof. Chen has 4-hr unbroken block', time: 'Wed 08:00–12:00', severity: 'warning' },
]

const departments = [
  { name: 'CS', pct: 87 },
  { name: 'MATH', pct: 94 },
  { name: 'BIZ', pct: 72 },
  { name: 'ENG', pct: 65 },
  { name: 'HUM', pct: 58 },
  { name: 'SCI', pct: 80 },
]

const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI'] as const
type Day = typeof DAYS[number]

function statusStyle(status: string) {
  if (status === 'clash') return { bg: '#fee2e2', border: '#fca5a5', text: '#991b1b', badge: 'ROOM CLASH' }
  if (status === 'workload') return { bg: '#fef3c7', border: '#fcd34d', text: '#92400e', badge: 'WORKLOAD PEAK' }
  if (status === 'office') return { bg: '#eff6ff', border: '#93c5fd', text: '#1e40af', badge: null }
  return { bg: '#f0fdf4', border: '#bbf7d0', text: '#14532d', badge: null }
}

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
      <div style={{ padding: '16px 10px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <button style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '9px 12px', borderRadius: 8, background: 'rgba(167,139,250,0.15)', border: '1px solid rgba(167,139,250,0.3)', color: '#c4b5fd', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>auto_awesome</span>
          Launch Intelligence AI
        </button>
      </div>
    </aside>
  )
}

function CellContent({ session }: { session: { code: string; title: string; time: string; room: string; status: string } | null }) {
  if (!session) return <div style={{ height: 60, borderRadius: 8, background: '#f8f9fb', border: '1px dashed #dde1ec' }} />
  const s = statusStyle(session.status)
  return (
    <div style={{ padding: '8px 10px', borderRadius: 8, background: s.bg, border: `1px solid ${s.border}`, minHeight: 60 }}>
      {s.badge && (
        <span style={{ display: 'inline-block', fontSize: 9, fontWeight: 700, color: s.text, background: 'rgba(0,0,0,0.06)', borderRadius: 4, padding: '1px 5px', marginBottom: 3, letterSpacing: '0.04em' }}>
          {s.badge}
        </span>
      )}
      <div style={{ fontSize: 11, fontWeight: 700, color: s.text, fontFamily: T.fontBody }}>{session.code}</div>
      <div style={{ fontSize: 11, color: s.text, opacity: 0.8 }}>{session.title}</div>
      <div style={{ fontSize: 10, color: s.text, opacity: 0.6, marginTop: 2 }}>{session.time} · {session.room}</div>
    </div>
  )
}

export default function FacultySchedulingPage() {
  const [activeView, setActiveView] = useState<'grid' | 'list' | 'room'>('grid')

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Faculty Scheduling</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
              <span style={{ fontSize: 13, color: T.textMuted }}>Spring Semester 2024</span>
              <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.textMuted }}>expand_more</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.textMuted, fontWeight: 500, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 15 }}>filter_list</span>Filters
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', background: T.primary, border: 'none', borderRadius: 8, fontSize: 12, color: '#ffffff', fontWeight: 600, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 15 }}>add</span>Schedule Session
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', background: T.purple, border: 'none', borderRadius: 8, fontSize: 12, color: '#ffffff', fontWeight: 600, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 15 }}>auto_awesome</span>Auto-Optimize
            </button>
          </div>
        </div>

        {/* Status chips + view toggle */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 700, color: '#991b1b', background: '#fee2e2', borderRadius: 20, padding: '4px 12px', border: '1px solid #fca5a5' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 13 }}>error</span>Clash (4)
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 700, color: '#92400e', background: '#fef3c7', borderRadius: 20, padding: '4px 12px', border: '1px solid #fcd34d' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 13 }}>warning</span>Workload Warning (2)
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 700, color: '#14532d', background: '#f0fdf4', borderRadius: 20, padding: '4px 12px', border: '1px solid #bbf7d0' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 13 }}>check_circle</span>Optimized
            </span>
          </div>
          <div style={{ display: 'flex', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, overflow: 'hidden' }}>
            {(['grid', 'list', 'room'] as const).map(v => (
              <button key={v} onClick={() => setActiveView(v)} style={{ padding: '6px 14px', fontSize: 12, fontWeight: 500, background: activeView === v ? T.primary : 'transparent', color: activeView === v ? '#ffffff' : T.textMuted, border: 'none', cursor: 'pointer', textTransform: 'capitalize' }}>
                {v === 'grid' ? 'Grid View' : v === 'list' ? 'List View' : 'Room View'}
              </button>
            ))}
          </div>
        </div>

        {/* AI Insight Card */}
        <div style={{ background: 'linear-gradient(135deg, #7c3aed10, #4f46e510)', border: '1px solid #c4b5fd', borderRadius: 14, padding: '18px 22px', marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#ffffff' }}>psychology</span>
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: T.purple, letterSpacing: '0.06em', marginBottom: 2 }}>✦ AI OPTIMIZATION INSIGHT</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: T.textPrimary, fontFamily: T.fontHead }}>Schedule Efficiency: 94%</div>
              <div style={{ fontSize: 13, color: T.textMuted, marginTop: 4, maxWidth: 560 }}>
                Moving Dr. Rodriguez&apos;s CS101 from Room 402 to the Grand Lecture Hall resolves 2 room clashes and reduces student walking distance by 40%.
              </div>
            </div>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 18px', background: T.purple, border: 'none', borderRadius: 10, fontSize: 13, color: '#ffffff', fontWeight: 600, cursor: 'pointer', flexShrink: 0, whiteSpace: 'nowrap' }}>
            Apply Suggested Change
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
          </button>
        </div>

        {/* KPI Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
          <div style={{ background: T.surface, borderRadius: 14, padding: '18px 22px', border: `1px solid ${T.border}`, display: 'flex', alignItems: 'flex-start', gap: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#dc2626' }}>error</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: T.textPrimary, fontFamily: T.fontHead, lineHeight: 1 }}>04</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: T.textPrimary, marginTop: 4 }}>Active Clash Conflicts</div>
              <div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>Across 3 departments</div>
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, color: T.success, background: '#f0fdf4', borderRadius: 8, padding: '3px 8px' }}>-2 from yesterday</span>
          </div>
          <div style={{ background: T.surface, borderRadius: 14, padding: '18px 22px', border: `1px solid ${T.border}`, display: 'flex', alignItems: 'flex-start', gap: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.primary }}>meeting_room</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: T.textPrimary, fontFamily: T.fontHead, lineHeight: 1 }}>82%</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: T.textPrimary, marginTop: 4 }}>Room Utilization</div>
              <div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>Optimal capacity reached</div>
            </div>
          </div>
        </div>

        {/* Faculty Schedule Grid */}
        <div style={{ background: T.surface, borderRadius: 16, border: `1px solid ${T.border}`, marginBottom: 24, overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', borderBottom: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Faculty Schedule Grid</div>
            <span style={{ fontSize: 12, color: T.textMuted }}>Week of May 19 – 23, 2026</span>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8f9fb' }}>
                  <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: T.textMuted, letterSpacing: '0.06em', width: 200, borderBottom: `1px solid ${T.border}` }}>
                    FACULTY MEMBER
                    <span className="material-symbols-outlined" style={{ fontSize: 14, verticalAlign: 'middle', marginLeft: 4, cursor: 'pointer' }}>swap_vert</span>
                  </th>
                  {DAYS.map(day => (
                    <th key={day} style={{ padding: '10px 12px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: T.textMuted, letterSpacing: '0.06em', minWidth: 160, borderBottom: `1px solid ${T.border}` }}>{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {faculty.map((f, fi) => (
                  <tr key={f.name} style={{ borderBottom: fi < faculty.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                    <td style={{ padding: '14px 16px', verticalAlign: 'top' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 36, height: 36, borderRadius: '50%', background: `hsl(${fi * 60 + 200}, 60%, 50%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{f.initials}</div>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: T.textPrimary }}>{f.name}</div>
                          <div style={{ fontSize: 11, color: T.textMuted }}>{f.dept}</div>
                        </div>
                      </div>
                    </td>
                    {DAYS.map(day => (
                      <td key={day} style={{ padding: '10px 8px', verticalAlign: 'top' }}>
                        <CellContent session={f.schedule[day as Day]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom row: Conflict Logs + Workload Balance */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>

          {/* Conflict Logs */}
          <div style={{ background: T.surface, borderRadius: 16, border: `1px solid ${T.border}`, overflow: 'hidden' }}>
            <div style={{ padding: '16px 20px', borderBottom: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary }}>Active Conflict Logs</div>
              <span style={{ fontSize: 12, color: T.textMuted }}>Showing 4 of 4</span>
            </div>
            <div style={{ padding: '12px 16px' }}>
              {conflicts.map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '10px 0', borderBottom: i < conflicts.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: c.severity === 'error' ? '#fee2e2' : '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16, color: c.severity === 'error' ? '#dc2626' : '#d97706' }}>{c.icon}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: T.textPrimary }}>{c.type}</div>
                    <div style={{ fontSize: 12, color: T.textMuted }}>{c.detail}</div>
                  </div>
                  <span style={{ fontSize: 11, color: T.textMuted, whiteSpace: 'nowrap' }}>{c.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Departmental Workload */}
          <div style={{ background: T.surface, borderRadius: 16, border: `1px solid ${T.border}`, overflow: 'hidden' }}>
            <div style={{ padding: '16px 20px', borderBottom: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>calendar_add_on</span>
                Departmental Workload Balance
              </div>
              <button style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 12px', background: '#f0f2f8', border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 11, color: T.textMuted, fontWeight: 600, cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>download</span>Export PDF Report
              </button>
            </div>
            <div style={{ padding: '16px 20px' }}>
              {departments.map(dept => (
                <div key={dept.name} style={{ marginBottom: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: T.textPrimary }}>{dept.name}</span>
                    <span style={{ fontSize: 12, color: T.textMuted }}>{dept.pct}%</span>
                  </div>
                  <div style={{ height: 8, background: '#eef0f6', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${dept.pct}%`, background: dept.pct >= 90 ? T.error : dept.pct >= 80 ? T.primary : T.ai, borderRadius: 4, transition: 'width 0.6s ease' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}
