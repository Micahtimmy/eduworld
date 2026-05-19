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

const QUEUE = [
  {
    initials: 'MS', name: 'Marcus Sterling', subject: 'AP Physics', type: 'Query', badge: 'Unanswered',
    badgeColor: T.xp, preview: "I'm struggling to understand the integration of third-order differential equations. Could you provide additional worked examples?",
    draft: "Hi Marcus, great question! Third-order DEs can be challenging. I recommend working through these steps: first, find the characteristic equation...",
  },
  {
    initials: 'SC', name: 'Sophia Chen', subject: 'Practical: Chemical Synthesis', type: 'Evaluation', badge: 'High Praise',
    badgeColor: T.ai, preview: 'The practical session on exothermic reactions was incredibly well-organized. I finally understand the concept!',
    draft: "Thank you Sophia, your enthusiasm in the lab was wonderful to see! Your observations on the exothermic reaction were spot-on...",
  },
  {
    initials: 'JL', name: 'Jordan Lee', subject: 'World History', type: 'Essay Feedback', badge: 'Needs Response',
    badgeColor: T.error, preview: 'I submitted my essay but got a low grade. I would like to understand what I did wrong.',
    draft: "Hi Jordan, I appreciate you reaching out. Let's go through the rubric together — your thesis was strong but the body paragraphs need more evidence...",
  },
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

export default function TeacherFeedbackPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Student Feedback & Review Loop</h1>
          <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Manage evaluations, queries, and academic feedback from your students.</p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 28 }}>
          {[
            { label: 'Unresolved Evaluations', value: '42', note: '+12% this week', color: T.xp },
            { label: 'Active Queries', value: '15', note: 'Priority items', color: T.error },
            { label: 'Response Rate', value: '88%', note: 'Top 5% this term', color: T.ai },
          ].map(s => (
            <div key={s.label} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: '20px 22px' }}>
              <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 6 }}>{s.label}</div>
              <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 28, color: T.textPrimary }}>{s.value}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: s.color, marginTop: 4 }}>{s.note}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }}>
          {/* Feedback Queue */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Feedback Queue</h2>
              <div style={{ display: 'flex', gap: 8 }}>
                <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.textMuted, cursor: 'pointer' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 14 }}>filter_list</span>Filter
                </button>
                <button style={{ padding: '7px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.textMuted, cursor: 'pointer' }}>Sort: Newest</button>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {QUEUE.map(q => (
                <div key={q.name} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
                    <div style={{ width: 42, height: 42, borderRadius: '50%', background: T.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: T.primary, flexShrink: 0 }}>{q.initials}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                        <span style={{ fontWeight: 700, fontSize: 15, color: T.textPrimary }}>{q.name}</span>
                        <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 10px', borderRadius: 20, background: q.badgeColor + '20', color: q.badgeColor }}>{q.badge}</span>
                        <span style={{ fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 20, background: T.ai + '15', color: T.ai }}>AI Draft Ready</span>
                      </div>
                      <div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>{q.subject} · {q.type}</div>
                    </div>
                  </div>

                  <div style={{ background: T.bg, borderRadius: 10, padding: '12px 14px', marginBottom: 12, fontSize: 13, color: T.textMuted, fontStyle: 'italic', borderLeft: `3px solid ${T.border}` }}>
                    "{q.preview}"
                  </div>

                  {/* AI Draft */}
                  <div style={{ background: T.ai + '10', border: `1px solid ${T.ai}30`, borderRadius: 12, padding: 14, marginBottom: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                      <span style={{ fontSize: 14, color: T.ai }}>✦</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: T.ai }}>AI Draft Response</span>
                    </div>
                    <div style={{ fontSize: 13, color: T.textPrimary, marginBottom: 8 }}>{q.draft}</div>
                  </div>

                  <div style={{ display: 'flex', gap: 8 }}>
                    <button style={{ flex: 1, padding: '9px 0', background: T.primary, color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Approve & Send</button>
                    <button style={{ flex: 1, padding: '9px 0', background: T.surface, color: T.primary, border: `1px solid ${T.primary}`, borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Edit & Revise</button>
                    <button style={{ padding: '9px 14px', background: T.surface, color: T.textMuted, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 13, cursor: 'pointer' }}>Archive</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 20 }}>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary, marginBottom: 14 }}>Term Response Goal</h2>
              {[
                { label: 'Individual Response Rate', value: 88 },
                { label: 'Department Average', value: 72 },
              ].map(g => (
                <div key={g.label} style={{ marginBottom: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}>
                    <span style={{ color: T.textMuted }}>{g.label}</span>
                    <span style={{ fontWeight: 700, color: T.textPrimary }}>{g.value}%</span>
                  </div>
                  <div style={{ height: 8, background: T.border + '80', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${g.value}%`, background: T.primary, borderRadius: 4 }} />
                  </div>
                </div>
              ))}
              <div style={{ background: T.xp + '15', borderRadius: 10, padding: '8px 12px', marginTop: 8 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: T.xp }}>🏆 Top 5% of responsive educators</span>
              </div>
            </div>

            <div style={{ background: T.ai + '10', border: `1px solid ${T.ai}30`, borderRadius: 16, padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span style={{ fontSize: 16, color: T.ai }}>✦</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: T.ai }}>AI Commentary Assist</span>
              </div>
              <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 12 }}>Generate personalised response drafts for your feedback queue instantly.</p>
              <button style={{ width: '100%', padding: '10px 0', background: T.ai, color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Generate Draft</button>
            </div>

            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 20 }}>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary, marginBottom: 14 }}>Recent Activity</h2>
              {[
                { icon: '✅', text: 'Responded to Alex Rivera', time: '15 mins ago' },
                { icon: '📖', text: 'Commentary for Lab Group B', time: '1 hour ago' },
                { icon: '👤', text: 'New Query from Elena Rossi', time: '3 hours ago' },
              ].map(a => (
                <div key={a.text} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 16, lineHeight: 1.4 }}>{a.icon}</span>
                  <div>
                    <div style={{ fontSize: 13, color: T.textPrimary }}>{a.text}</div>
                    <div style={{ fontSize: 11, color: T.textMuted }}>{a.time}</div>
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
