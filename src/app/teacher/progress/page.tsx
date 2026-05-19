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
  { icon: 'analytics', label: 'Analytics', href: '/teacher/student-insights', active: true },
  { icon: 'people', label: 'Students', href: '/teacher/student-groups' },
  { icon: 'calendar_month', label: 'Calendar', href: '/teacher/calendar' },
  { icon: 'inbox', label: 'Inbox', href: '/teacher/inbox' },
]

const STUDENTS = [
  { id: 's1', name: 'Amara Kofi', initials: 'AK', cls: '9A', avg: 94, trend: 3, submissions: 12, lastActive: '2h ago' },
  { id: 's2', name: 'Jide Okafor', initials: 'JO', cls: '9A', avg: 71, trend: -2, submissions: 10, lastActive: '1d ago' },
  { id: 's3', name: 'Priya Sharma', initials: 'PS', cls: '9B', avg: 88, trend: 5, submissions: 13, lastActive: '30m ago' },
  { id: 's4', name: 'Luis García', initials: 'LG', cls: '10A', avg: 65, trend: -5, submissions: 8, lastActive: '3d ago' },
  { id: 's5', name: 'Mei Chen', initials: 'MC', cls: '10B', avg: 91, trend: 2, submissions: 14, lastActive: '1h ago' },
]

const RECS = [
  { student: 'Jide Okafor', type: 'Revision', msg: 'Assign additional practice on Quadratic Equations', priority: 'High', color: T.error },
  { student: 'Luis García', type: 'Support Session', msg: 'Schedule 1-on-1 before next assignment', priority: 'High', color: T.error },
  { student: 'Amara Kofi', type: 'Extension', msg: 'Advanced challenges in Calculus recommended', priority: 'Low', color: T.ai },
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

export default function TeacherProgressPage() {
  const [search, setSearch] = useState('')
  const filtered = STUDENTS.filter(s => s.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>AI Recommendation Control Centre</h1>
          <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>AI-generated recommendations for each student. Accept, dismiss, or customise.</p>
        </div>

        {/* Grade distribution */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 24 }}>
          <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 16 }}>Grade Distribution</h2>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, height: 100 }}>
            {[
              { label: 'A (90+)', count: 12, color: T.ai },
              { label: 'B (80-89)', count: 28, color: T.primary },
              { label: 'C (70-79)', count: 35, color: '#0891b2' },
              { label: 'D (60-69)', count: 18, color: T.xp },
              { label: 'F (<60)', count: 7, color: T.error },
            ].map(g => (
              <div key={g.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{ width: '100%', background: g.color, borderRadius: '4px 4px 0 0', height: `${(g.count / 35) * 80}px` }} />
                <div style={{ fontSize: 10, color: T.textMuted, textAlign: 'center' }}>{g.label}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: g.color }}>{g.count}</div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Recommendations */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <span style={{ fontSize: 16, color: T.ai }}>✦</span>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>AI Recommendations</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {RECS.map(r => (
              <div key={r.student} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', background: T.bg, borderRadius: 12, borderLeft: `4px solid ${r.color}` }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>{r.student}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 10, background: r.color + '20', color: r.color }}>{r.priority}</span>
                  </div>
                  <div style={{ fontSize: 13, color: T.textMuted }}>{r.type}: {r.msg}</div>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button style={{ padding: '7px 14px', background: T.primary, color: '#fff', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Accept</button>
                  <button style={{ padding: '7px 14px', background: T.surface, color: T.textMuted, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, cursor: 'pointer' }}>Dismiss</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student List */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Student Progress</h2>
            <div style={{ display: 'flex', alignItems: 'center', background: T.bg, border: `1px solid ${T.border}`, borderRadius: 10, padding: '0 10px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.textMuted }}>search</span>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search students..." style={{ border: 'none', outline: 'none', padding: '8px 8px', fontFamily: T.fontBody, fontSize: 13, background: 'transparent', width: 160, color: T.textPrimary }} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {filtered.map(s => (
              <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 14px', background: T.bg, borderRadius: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: T.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: T.primary, flexShrink: 0 }}>{s.initials}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <span style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>{s.name}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 10, background: T.primary + '15', color: T.primary }}>{s.cls}</span>
                    <span style={{ fontSize: 11, color: T.textMuted }}>Active: {s.lastActive}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ flex: 1, maxWidth: 180, height: 8, background: T.border + '60', borderRadius: 4, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${s.avg}%`, background: s.avg >= 80 ? T.ai : s.avg >= 70 ? T.xp : T.error, borderRadius: 4 }} />
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary }}>{s.avg}%</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: s.trend >= 0 ? T.ai : T.error }}>{s.trend >= 0 ? '▲' : '▼'} {Math.abs(s.trend)}%</span>
                  </div>
                </div>
                <div style={{ fontSize: 12, color: T.textMuted }}>{s.submissions} submitted</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
