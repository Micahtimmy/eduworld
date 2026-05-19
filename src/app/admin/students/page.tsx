'use client'
import { useState } from 'react'
import Link from 'next/link'

const T = {
  bg: '#f0f2f8', surface: '#ffffff', primary: '#003f7a',
  ai: '#10B981', xp: '#F59E0B', textPrimary: '#191c20',
  textMuted: '#424750', border: '#c2c6d2', error: '#ba1a1a',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
  sidebarBg: '#0d1b4b', sidebarText: '#c8d0e8', sidebarActive: '#1e3372',
}

const sidebarItems = [
  { icon: 'dashboard', label: 'Dashboard', href: '/admin/dashboard' },
  { icon: 'person_add', label: 'Student Intake', href: '/admin/student-intake' },
  { icon: 'groups', label: 'Students', href: '/admin/students', active: true },
  { icon: 'school', label: 'Teachers', href: '/admin/teacher-roster' },
  { icon: 'analytics', label: 'Analytics', href: '/admin/analytics' },
  { icon: 'calendar_month', label: 'Events', href: '/admin/events' },
  { icon: 'payments', label: 'Finance', href: '/admin/finance' },
  { icon: 'policy', label: 'Roles & Permissions', href: '/admin/roles' },
  { icon: 'menu_book', label: 'Curriculum', href: '/admin/curriculum' },
  { icon: 'monitor_heart', label: 'System Health', href: '/admin/health-monitor' },
]

const STUDENTS = [
  { id: 's1', initials: 'AO', name: 'Amara Okafor', grade: 'Year 7', cls: '7A', avg: 88, status: 'Active' },
  { id: 's2', initials: 'JM', name: 'Jide Mensah', grade: 'Year 8', cls: '8B', avg: 74, status: 'Active' },
  { id: 's3', initials: 'PS', name: 'Priya Sharma', grade: 'Year 9', cls: '9A', avg: 92, status: 'Active' },
  { id: 's4', initials: 'LW', name: 'Liu Wei', grade: 'Year 10', cls: '10B', avg: 65, status: 'At Risk' },
  { id: 's5', initials: 'SM', name: 'Sofia Martínez', grade: 'Year 11', cls: '11A', avg: 81, status: 'Active' },
  { id: 's6', initials: 'KA', name: 'Kwame Asante', grade: 'Year 12', cls: '12B', avg: 76, status: 'Active' },
  { id: 's7', initials: 'AD', name: 'Aisha Diallo', grade: 'Year 7', cls: '7B', avg: 95, status: 'Active' },
  { id: 's8', initials: 'CR', name: 'Carlos Ruiz', grade: 'Year 8', cls: '8A', avg: 58, status: 'At Risk' },
  { id: 's9', initials: 'YT', name: 'Yuki Tanaka', grade: 'Year 9', cls: '9B', avg: 83, status: 'Active' },
  { id: 's10', initials: 'OH', name: 'Omar Hassan', grade: 'Year 10', cls: '10A', avg: 71, status: 'On Leave' },
]

const STATUS: Record<string, { bg: string; text: string }> = {
  Active: { bg: T.ai + '20', text: T.ai },
  'At Risk': { bg: T.error + '20', text: T.error },
  'On Leave': { bg: T.border + '60', text: T.textMuted },
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
    </aside>
  )
}

export default function AdminStudentsPage() {
  const [search, setSearch] = useState('')
  const filtered = STUDENTS.filter(s => s.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Students</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>{STUDENTS.length} registered students — London Central Academy</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>filter_list</span>Filter
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 18px', background: T.primary, border: 'none', borderRadius: 10, fontSize: 13, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>person_add</span>Add Student
            </button>
          </div>
        </div>

        {/* Search */}
        <div style={{ display: 'flex', alignItems: 'center', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: '0 14px', marginBottom: 20, maxWidth: 400 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.textMuted }}>search</span>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search students..."
            style={{ flex: 1, padding: '10px 10px', border: 'none', outline: 'none', fontFamily: T.fontBody, fontSize: 14, color: T.textPrimary, background: 'transparent' }}
          />
        </div>

        {/* Student list */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, overflow: 'hidden' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {filtered.map((s, i) => (
              <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 20px', borderBottom: i < filtered.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: T.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, color: T.primary, flexShrink: 0 }}>{s.initials}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>{s.name}</div>
                  <div style={{ fontSize: 12, color: T.textMuted }}>{s.grade} · Class {s.cls}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 80, height: 6, background: T.border + '60', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${s.avg}%`, background: s.avg >= 80 ? T.ai : s.avg >= 65 ? T.xp : T.error, borderRadius: 3 }} />
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: T.textPrimary, width: 32 }}>{s.avg}%</span>
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, background: STATUS[s.status].bg, color: STATUS[s.status].text }}>{s.status}</span>
                <button style={{ padding: '6px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.textMuted, cursor: 'pointer' }}>View</button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
