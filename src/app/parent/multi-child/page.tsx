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
  { icon: 'dashboard', label: 'Dashboard', href: '/parent/dashboard' },
  { icon: 'people', label: 'My Children', href: '/parent/multi-child', active: true },
  { icon: 'calendar_month', label: 'Calendar', href: '/parent/calendar' },
  { icon: 'folder', label: 'Documents', href: '/parent/documents' },
  { icon: 'sports_soccer', label: 'Extracurricular', href: '/parent/extracurricular' },
  { icon: 'chat', label: 'Messages', href: '/parent/messages' },
  { icon: 'payments', label: 'Tuition & Fees', href: '/parent/tuition' },
]

const CHILDREN = [
  { initials: 'AV', name: 'Alex Vance', grade: 'Grade 11 · Science Track', gpa: 'A- (92%)', attendance: '98.4%', xp: 'Top 3%', behavior: '94/100', color: T.primary },
  { initials: 'SV', name: 'Sarah Vance', grade: 'Grade 8 · Arts Track', gpa: 'A+ (97%)', attendance: '99.1%', xp: 'Top 1%', behavior: '98/100', color: '#7c3aed' },
  { initials: 'LV', name: 'Leo Vance', grade: 'Grade 3 · Primary', gpa: 'B+ (88%)', attendance: '95.0%', xp: 'Top 12%', behavior: '82/100', color: T.xp },
]

const ALERTS = [
  { severity: 'urgent', child: 'Alex', time: '2h ago', alert: 'Missed Calculus Quiz', sub: 'Scheduled for retake on Friday', color: T.error },
  { severity: 'info', child: 'Sarah', time: '5h ago', alert: 'Science Fair Project Submitted', sub: 'Awaiting teacher feedback', color: '#0891b2' },
  { severity: 'event', child: 'Leo', time: '1d ago', alert: 'Picnic Day Permission Slip', sub: 'Needs signature by Wednesday', color: T.xp },
]

const ACHIEVEMENTS = [
  { icon: 'school', category: 'Academic', child: 'Alex', title: 'State Physics Olympiad — Finalist', date: 'Oct 24, 2025', desc: 'Top 5% of participants statewide. 50 XP earned.', color: T.primary },
  { icon: 'palette', category: 'Arts', child: 'Sarah', title: 'Solo Exhibition — Digital Design', date: 'Oct 15, 2025', desc: 'Community engagement: 150+ views.', color: '#7c3aed' },
  { icon: 'psychology', category: 'Development', child: 'Leo', title: 'Reading Level Mastery — Level 4', date: 'Sep 28, 2025', desc: 'Exceeded quarterly reading target by 2 books.', color: T.ai },
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

export default function ParentMultiChildPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Household Performance Overview</h1>
          <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Unified metrics for Alex, Sarah, and Leo</p>
        </div>

        {/* Alerts */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.xp }}>warning</span>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Household Alerts</h2>
            <span style={{ marginLeft: 'auto', fontSize: 11, fontWeight: 700, background: T.error + '20', color: T.error, padding: '2px 10px', borderRadius: 20 }}>3 Active</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {ALERTS.map(a => (
              <div key={a.alert} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 14px', background: T.bg, borderRadius: 12, borderLeft: `4px solid ${a.color}` }}>
                <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 10, background: a.color + '20', color: a.color, flexShrink: 0 }}>{a.severity.toUpperCase()}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 700, fontSize: 13, color: T.textPrimary }}>{a.child}: {a.alert}</span>
                    <span style={{ fontSize: 11, color: T.textMuted }}>{a.time}</span>
                  </div>
                  <div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>{a.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Child Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 24 }}>
          {CHILDREN.map(c => (
            <div key={c.name} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 22 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: c.color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 15, color: c.color, flexShrink: 0 }}>{c.initials}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: T.textPrimary }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: T.textMuted }}>{c.grade}</div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 14 }}>
                {[
                  { label: 'Avg. Grade', value: c.gpa },
                  { label: 'Attendance', value: c.attendance },
                  { label: 'XP Rank', value: c.xp },
                  { label: 'Behaviour', value: c.behavior },
                ].map(m => (
                  <div key={m.label} style={{ background: T.bg, borderRadius: 10, padding: '10px 12px' }}>
                    <div style={{ fontSize: 10, color: T.textMuted, marginBottom: 2 }}>{m.label}</div>
                    <div style={{ fontWeight: 700, fontSize: 13, color: T.textPrimary }}>{m.value}</div>
                  </div>
                ))}
              </div>
              <button style={{ width: '100%', padding: '9px 0', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, fontWeight: 600, color: c.color, cursor: 'pointer' }}>View Full Profile</button>
            </div>
          ))}
        </div>

        {/* AI Synergy */}
        <div style={{ background: T.ai + '08', border: `1px solid ${T.ai}30`, borderRadius: 16, padding: 24, marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
            <span style={{ fontSize: 14, color: T.ai }}>✦</span>
            <span style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>EduWorld AI: Household Synergy Analysis</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { icon: 'trending_up', label: 'Common Strengths', desc: 'High STEM engagement across all three children. Consistent performance in science subjects.', color: T.ai },
              { icon: 'warning', label: 'Shared Opportunities', desc: 'Tuesday morning attendance dip noted — avg -12% vs weekday average. Review morning routines.', color: T.xp },
              { icon: 'rocket_launch', label: 'Next Strategy', desc: 'Peer Mentorship program recommendation for family XP challenges — earn 200 bonus XP together.', color: T.primary },
            ].map(s => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '10px 0' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: s.color, flexShrink: 0 }}>{s.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: T.textPrimary }}>{s.label}</div>
                  <div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Timeline */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
          <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 16 }}>Achievement Timeline</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {ACHIEVEMENTS.map(a => (
              <div key={a.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '14px 16px', background: T.bg, borderRadius: 12 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: a.color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: a.color }}>{a.icon}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, background: a.color + '20', color: a.color, padding: '2px 8px', borderRadius: 10 }}>{a.category}</span>
                    <span style={{ fontSize: 11, color: T.textMuted }}>{a.child} · {a.date}</span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>{a.title}</div>
                  <div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
