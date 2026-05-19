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
  { icon: 'people', label: 'Students', href: '/teacher/student-groups', active: true },
  { icon: 'calendar_month', label: 'Calendar', href: '/teacher/calendar' },
  { icon: 'inbox', label: 'Inbox', href: '/teacher/inbox' },
]

const GROUPS = [
  { name: 'Project Alpha', tag: 'High Performance', tagColor: T.ai, sub: 'Capstone Research Phase', members: ['LC', 'JS', 'MR', 'AP'], extra: '+2', progress: 85 },
  { name: 'Advanced Lab', tag: 'AI Generated', tagColor: '#0891b2', sub: 'Skill-Matched Pairing', members: ['AK', 'EW', 'DG'], extra: null, compat: 98 },
  { name: 'Remedial Support', tag: 'Priority Attention', tagColor: T.error, sub: 'Foundational Concepts', members: ['TB', 'SP'], extra: null, retention: 42 },
  { name: 'Science Explorers', tag: 'General', tagColor: T.textMuted, sub: 'Weekly Fieldwork Prep', members: ['FZ', 'EP', 'LN'], extra: null },
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

export default function TeacherStudentGroupsPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Groups & Cohorts</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Manage student groups, performance-based cohorts, and project pairings.</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>campaign</span>Broadcast
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 18px', background: T.primary, border: 'none', borderRadius: 10, fontSize: 13, color: '#fff', cursor: 'pointer', fontWeight: 600 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>add</span>Create Group
            </button>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
          {[
            { label: 'Total Students', value: '124', sub: '+4 this month', color: T.primary },
            { label: 'Active Groups', value: '12', sub: 'Avg. 6 per group', color: '#7c3aed' },
            { label: 'Class Health', value: '92%', sub: '▲ Good', color: T.ai },
          ].map(s => (
            <div key={s.label} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: '20px 22px', textAlign: 'center' }}>
              <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 28, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: 12, color: T.textMuted, marginTop: 4 }}>{s.label}</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: T.ai, marginTop: 4 }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* AI Insight */}
        <div style={{ background: T.ai + '10', border: `1px solid ${T.ai}30`, borderRadius: 12, padding: '12px 16px', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 15, color: T.ai }}>✦</span>
          <span style={{ fontSize: 13, color: T.textMuted }}>Group 'Alpha' shows high collaboration. Consider pairing 'L. Chen' for peer-tutoring in Remedial Support.</span>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          {['All Cohorts', 'Project Groups', 'Performance-Based'].map((tab, i) => (
            <button key={tab} style={{ padding: '7px 16px', borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: 'pointer', background: i === 0 ? T.primary : T.surface, color: i === 0 ? '#fff' : T.textMuted, border: i === 0 ? 'none' : `1px solid ${T.border}` }}>{tab}</button>
          ))}
        </div>

        {/* Group Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {GROUPS.map(g => (
            <div key={g.name} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontWeight: 700, fontSize: 16, color: T.textPrimary }}>{g.name}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 10px', borderRadius: 20, background: g.tagColor + '20', color: g.tagColor }}>{g.tag}</span>
                  </div>
                  <div style={{ fontSize: 12, color: T.textMuted }}>{g.sub}</div>
                </div>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: T.textMuted }}>⋮</button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 14 }}>
                {g.members.map(m => (
                  <div key={m} style={{ width: 30, height: 30, borderRadius: '50%', background: T.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: T.primary }}>{m}</div>
                ))}
                {g.extra && <span style={{ fontSize: 12, color: T.textMuted, marginLeft: 4 }}>{g.extra}</span>}
              </div>

              {g.progress !== undefined && (
                <div style={{ marginBottom: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: 12, color: T.textMuted }}>Milestone Progress</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: T.textPrimary }}>{g.progress}%</span>
                  </div>
                  <div style={{ height: 8, background: T.border + '50', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${g.progress}%`, background: T.primary, borderRadius: 4 }} />
                  </div>
                </div>
              )}
              {g.compat !== undefined && (
                <div style={{ marginBottom: 14, padding: '10px 12px', background: T.bg, borderRadius: 10 }}>
                  <span style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 22, color: T.textPrimary }}>{g.compat}% </span>
                  <span style={{ fontSize: 13, color: T.textMuted }}>Compatibility</span>
                </div>
              )}
              {g.retention !== undefined && (
                <div style={{ marginBottom: 14, padding: '10px 12px', background: T.error + '10', borderRadius: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: T.error }}>⚠ Retention: {g.retention}%</div>
                  <div style={{ fontSize: 12, color: T.textMuted, marginTop: 3 }}>Critical gap in Module 3 detected.</div>
                </div>
              )}

              <div style={{ display: 'flex', gap: 8 }}>
                <button style={{ flex: 1, padding: '9px 0', background: T.primary, color: '#fff', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Message Group</button>
                <button style={{ flex: 1, padding: '9px 0', background: T.surface, color: T.primary, border: `1px solid ${T.primary}`, borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>View Analytics</button>
              </div>
            </div>
          ))}

          {/* Create card */}
          <div style={{ border: `2px dashed ${T.border}`, borderRadius: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, cursor: 'pointer', minHeight: 180, padding: 24 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: T.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.textMuted }}>add</span>
            </div>
            <div style={{ fontWeight: 600, fontSize: 14, color: T.textPrimary }}>Create Cohort</div>
            <div style={{ fontSize: 12, color: T.textMuted }}>Manually add a new group</div>
          </div>
        </div>
      </main>
    </div>
  )
}
