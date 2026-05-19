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
  { icon: 'people', label: 'Students', href: '/teacher/student-groups' },
  { icon: 'calendar_month', label: 'Calendar', href: '/teacher/calendar' },
  { icon: 'inbox', label: 'Inbox', href: '/teacher/inbox' },
]

const WORKLOAD = [
  { label: 'Teaching', hours: 24, color: T.primary },
  { label: 'Grading', hours: 10, color: T.xp },
  { label: 'Admin', hours: 6, color: T.ai },
]

const FEEDBACK = [
  { initials: 'RC', name: 'Dr. Robert Chen', role: 'Principal', time: '2 days ago', text: 'Excellent use of multimedia in the recent History module. Student engagement metrics have notably improved.' },
  { initials: 'DA', name: "Dean's Office", role: 'Administration', time: 'Last month', text: 'Q2 Performance Review: Exceeds Expectations. Your leadership in the staff community board is appreciated.' },
]

const WELLNESS_ITEMS = [
  { label: 'Energy Level', value: 70, emoji: '⚡', color: T.xp },
  { label: 'Work-Life Balance', value: 60, emoji: '⚖️', color: '#0891b2' },
  { label: 'Job Satisfaction', value: 85, emoji: '😊', color: T.ai },
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
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, marginBottom: 2, background: 'transparent', borderLeft: '3px solid transparent', color: T.textMuted, fontFamily: T.fontBody, fontSize: 14 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default function TeacherWellnessPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32, maxWidth: 900 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Good morning, Sarah</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Here is your professional overview for the week.</p>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span>Export Report
          </button>
        </div>

        {/* Workload Analysis */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Workload Analysis</h2>
            <span style={{ fontSize: 12, color: T.textMuted }}>This Week</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {WORKLOAD.map(w => (
              <div key={w.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 72, fontSize: 13, color: T.textMuted, flexShrink: 0 }}>{w.label}</span>
                <div style={{ flex: 1, height: 10, background: T.border + '60', borderRadius: 5, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${(w.hours / 40) * 100}%`, background: w.color, borderRadius: 5 }} />
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary, width: 30, textAlign: 'right' }}>{w.hours}h</span>
              </div>
            ))}
          </div>
          <div style={{ background: T.ai + '10', border: `1px solid ${T.ai}30`, borderRadius: 10, padding: '10px 14px', marginTop: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 14, color: T.ai }}>✦</span>
            <span style={{ fontSize: 12, color: T.textMuted }}>AI Insight: Grading time is up 15%. Consider using the AI Lesson Generator to save prep time.</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
          {/* PD Credits */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 6 }}>PD Credits</h2>
            <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 14 }}>State Requirement Progress (2025-2026)</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ flex: 1, height: 10, background: T.border + '60', borderRadius: 5, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '75%', background: T.primary, borderRadius: 5 }} />
              </div>
              <span style={{ fontSize: 14, fontWeight: 800, color: T.textPrimary }}>45/60 hrs</span>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: T.ai, background: T.ai + '15', padding: '3px 10px', borderRadius: 20 }}>In Good Standing</span>
              <button style={{ padding: '5px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.primary, fontWeight: 600, cursor: 'pointer' }}>Log New Credits</button>
            </div>
          </div>

          {/* Wellness Check-in */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 16 }}>Wellness Check-in</h2>
            {WELLNESS_ITEMS.map(w => (
              <div key={w.label} style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}>
                  <span style={{ color: T.textMuted }}>{w.emoji} {w.label}</span>
                  <span style={{ fontWeight: 700, color: T.textPrimary }}>{w.value}%</span>
                </div>
                <div style={{ height: 8, background: T.border + '60', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${w.value}%`, background: w.color, borderRadius: 4 }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Feedback */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Recent Feedback</h2>
            <button style={{ fontSize: 13, color: T.primary, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
          </div>
          {FEEDBACK.map(f => (
            <div key={f.name} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 38, height: 38, borderRadius: '50%', background: T.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: T.primary, flexShrink: 0 }}>{f.initials}</div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>{f.name}</span>
                  <span style={{ fontSize: 11, color: T.textMuted }}>{f.time}</span>
                </div>
                <div style={{ fontSize: 13, color: T.textMuted, fontStyle: 'italic', marginTop: 3 }}>"{f.text}"</div>
              </div>
            </div>
          ))}
        </div>

        {/* Staff Community */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Staff Community</h2>
            <span style={{ fontSize: 11, fontWeight: 700, color: T.primary, background: T.primary + '15', padding: '2px 10px', borderRadius: 20 }}>2 New</span>
          </div>
          {[
            { initials: 'JM', name: 'James Miller', preview: 'Does anyone have resources for the upcoming science fair?' },
            { initials: 'AT', name: 'Anna Taylor', preview: "Reminder: Friday's staff meeting moved to Room 104." },
          ].map(c => (
            <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', background: T.bg, borderRadius: 10, marginBottom: 8 }}>
              <div style={{ width: 34, height: 34, borderRadius: '50%', background: T.border + '80', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: T.textMuted, flexShrink: 0 }}>{c.initials}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 13, color: T.textPrimary }}>{c.name}</div>
                <div style={{ fontSize: 12, color: T.textMuted, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.preview}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
