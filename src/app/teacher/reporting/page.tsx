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

const ALERTS = [
  { initials: 'EL', name: 'Elena Luvov', dept: 'Dept. of Humanities', issue: 'Outdated History Textbooks', date: 'Oct 24, 2025', urgency: 'Critical' },
  { initials: 'JM', name: 'James Morton', dept: 'Computer Science', issue: 'Server Latency (Lab 402)', date: 'Oct 23, 2025', urgency: 'Medium' },
]

const SUBMISSIONS = [
  { title: 'Science Lab Refurbishment', status: 'Approved', sub: 'Awaiting Finance Signature · 2 days ago' },
  { title: 'Math Curriculum Error', status: 'Under Review', sub: 'Assigned to: Dean Miller · 5 hours ago' },
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

export default function TeacherReportingPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 4 }}>EduWorld Admin › Institutional Reporting</p>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Teacher-to-Admin Portal</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Flag curriculum issues, resource requests, and end-of-term reviews.</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ padding: '9px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>View History</button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 18px', background: T.primary, border: 'none', borderRadius: 10, fontSize: 13, color: '#fff', cursor: 'pointer', fontWeight: 600 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>add</span>New Submission
            </button>
          </div>
        </div>

        {/* AI Banner */}
        <div style={{ background: T.xp + '10', border: `1px solid ${T.xp}30`, borderRadius: 16, padding: 22, marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
            <span style={{ fontSize: 14, color: T.xp }}>✦</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: T.xp, textTransform: 'uppercase', letterSpacing: '0.05em' }}>AI Recommendation</span>
          </div>
          <div style={{ fontWeight: 700, fontSize: 15, color: T.textPrimary, marginBottom: 6 }}>Curriculum Optimization Opportunity</div>
          <div style={{ fontSize: 13, color: T.textMuted, marginBottom: 12 }}>EduWorld AI detected a trend in Grade 9 Biology — 14 educators flagged insufficient lab materials for "Cellular Structures."</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', background: T.xp, color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 15 }}>auto_awesome</span>Generate Resource Request
            </button>
            <button style={{ padding: '8px 16px', background: T.surface, color: T.textMuted, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 13, cursor: 'pointer' }}>Dismiss</button>
          </div>
        </div>

        {/* Action Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
          {[
            { icon: 'warning', color: T.error, title: 'Flag Curriculum Issue', desc: 'Report errors, outdated materials, or standards misalignment.', cta: 'Start Report →' },
            { icon: 'inventory_2', color: '#0891b2', title: 'Resource Request', desc: 'Requisitions for supplies, digital tools, guest speaker funding.', cta: 'Submit Request →' },
            { icon: 'assignment', color: '#7c3aed', title: 'End-of-Term Review', desc: 'Feedback on policy, leadership, operational efficiency.', cta: 'Open Now →' },
          ].map(c => (
            <div key={c.title} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: c.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 22, color: c.color }}>{c.icon}</span>
              </div>
              <div style={{ fontWeight: 700, fontSize: 15, color: T.textPrimary, marginBottom: 6 }}>{c.title}</div>
              <div style={{ fontSize: 13, color: T.textMuted, marginBottom: 14 }}>{c.desc}</div>
              <button style={{ fontSize: 13, color: T.primary, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>{c.cta}</button>
            </div>
          ))}
        </div>

        {/* Submissions */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 24 }}>
          <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 14 }}>Active Submissions</h2>
          {SUBMISSIONS.map(s => (
            <div key={s.title} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', background: T.bg, borderRadius: 10, marginBottom: 8 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.ai }}>check_circle</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14, color: T.textPrimary }}>{s.title}</div>
                <div style={{ fontSize: 12, color: T.textMuted }}>{s.sub}</div>
              </div>
              <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, background: s.status === 'Approved' ? T.ai + '20' : T.xp + '20', color: s.status === 'Approved' ? T.ai : T.xp }}>{s.status}</span>
            </div>
          ))}
        </div>

        {/* Systemic Alerts Table */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Global Systemic Alerts</h2>
            <div style={{ display: 'flex', gap: 6 }}>
              {['All Types', 'Pending Only'].map((t, i) => (
                <button key={t} style={{ padding: '5px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: 'pointer', background: i === 0 ? T.primary : 'transparent', color: i === 0 ? '#fff' : T.textMuted, border: i === 0 ? 'none' : `1px solid ${T.border}` }}>{t}</button>
              ))}
            </div>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${T.border}` }}>
                {['Teacher', 'Issue', 'Date Filed', 'Urgency', 'Actions'].map(h => (
                  <th key={h} style={{ textAlign: 'left', paddingBottom: 10, fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: 'uppercase', paddingRight: 16 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ALERTS.map((a, i) => (
                <tr key={a.name} style={{ borderBottom: i < ALERTS.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                  <td style={{ padding: '12px 16px 12px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 30, height: 30, borderRadius: '50%', background: T.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: T.primary }}>{a.initials}</div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 13, color: T.textPrimary }}>{a.name}</div>
                        <div style={{ fontSize: 11, color: T.textMuted }}>{a.dept}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ paddingRight: 16, fontSize: 13, color: T.textMuted }}>{a.issue}</td>
                  <td style={{ paddingRight: 16, fontSize: 12, color: T.textMuted }}>{a.date}</td>
                  <td style={{ paddingRight: 16 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, background: a.urgency === 'Critical' ? T.error + '20' : T.xp + '20', color: a.urgency === 'Critical' ? T.error : T.xp }}>{a.urgency}</span>
                  </td>
                  <td>
                    <button style={{ padding: '5px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.primary, fontWeight: 600, cursor: 'pointer' }}>Review</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
