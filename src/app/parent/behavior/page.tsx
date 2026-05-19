'use client'
import Link from 'next/link'

const T = {
  bg: '#f5f7fb', surface: '#ffffff', primary: '#003f7a',
  ai: '#10B981', xp: '#F59E0B', textPrimary: '#1a1a1a',
  textMuted: '#6B7280', border: '#e5e7eb', error: '#EF4444',
  green: '#34A853', teal: '#00BCD4',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
}

const sidebarItems = [
  { icon: 'dashboard', label: 'Overview', href: '/parent/dashboard' },
  { icon: 'security', label: 'Safety Alerts', href: '/parent/attendance' },
  { icon: 'insights', label: 'Academic Mastery', href: '/parent/performance' },
  { icon: 'payments', label: 'Fee Management', href: '/parent/billing' },
  { icon: 'forum', label: 'Teacher Chat', href: '/parent/messages' },
  { icon: 'menu_book', label: 'Resources', href: '/parent/documents' },
  { icon: 'sentiment_satisfied', label: 'Behaviour', href: '/parent/behavior', active: true },
]

const MILESTONES = [
  { date: 'Nov 15, 2023', icon: 'stars', title: 'Elected Class Representative', tags: ['Leadership', 'Public Speaking'], color: '#6366F1' },
  { date: 'Oct 02, 2023', icon: 'sports_soccer', title: 'Joined Varsity Soccer Team', tags: ['Sportsmanship', 'Dedication'], color: '#10B981' },
  { date: 'Sep 20, 2023', icon: 'volunteer_activism', title: 'Community Outreach Lead', tags: ['Community', 'Empathy'], color: '#F59E0B' },
]

const TEACHER_NOTES = [
  { name: 'Mr. Thomas Harris', subject: 'History', recency: '2 Days Ago', tone: 'Positive', note: 'Alex demonstrated remarkable emotional intelligence during the class debate, showing maturity beyond his years.', color: T.green },
  { name: 'Ms. Sarah Lee', subject: 'Biology', recency: '1 Week Ago', tone: 'Mixed', note: 'Occasional distractions noted but Alex accepted feedback graciously and improved focus in the latter half.', color: T.xp },
  { name: 'Coach David King', subject: 'PE', recency: '2 Weeks Ago', tone: 'Positive', note: 'Outstanding leadership on the field. Alex consistently demonstrates excellent sportsmanship and team spirit.', color: T.green },
]

const ENGAGEMENT = [
  { label: 'Teamwork', value: 80, color: '#6366F1' },
  { label: 'Participation', value: 60, color: '#10B981' },
  { label: 'Empathy', value: 90, color: '#EC4899' },
  { label: 'Conflict Res.', value: 40, color: '#F59E0B' },
]

function Sidebar() {
  return (
    <aside style={{ width: 260, minHeight: '100vh', background: T.surface, borderRight: `1px solid ${T.border}`, display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0 }}>
      <div style={{ padding: '0 20px 24px', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: T.primary }}>EduWorld</div>
        <span style={{ display: 'inline-block', marginTop: 4, fontSize: 11, fontWeight: 600, color: T.primary, background: '#e8f0fe', borderRadius: 6, padding: '2px 8px' }}>Parent</span>
      </div>
      {/* Child Profile */}
      <div style={{ padding: '14px 20px', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 38, height: 38, borderRadius: '50%', background: T.primary + '15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.primary }}>face_6</span>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>Alex Johnson</div>
            <div style={{ fontSize: 12, color: T.textMuted }}>Year 8 • St. Mary&apos;s Academy</div>
          </div>
        </div>
        <button style={{ marginTop: 8, fontSize: 12, color: T.primary, background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontWeight: 600 }}>Switch Child</button>
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
      <div style={{ padding: '0 16px 16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Link href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: T.textMuted, textDecoration: 'none', padding: '6px 0' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>help</span> Help Center
          </Link>
          <Link href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: T.textMuted, textDecoration: 'none', padding: '6px 0' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>logout</span> Log Out
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default function ParentBehaviorPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        {/* Header */}
        <div style={{ marginBottom: 8 }}>
          <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 6 }}>Humanist Intelligence ✦ AI-Enhanced Insights</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h1 style={{ fontFamily: T.fontHead, fontSize: 28, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Behaviour &amp; Social Development</h1>
              <p style={{ fontSize: 14, color: T.textMuted, marginTop: 6 }}>Tracking empathy, leadership, and community engagement for Alex Johnson.</p>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span> Export PDF
              </button>
              <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>mail</span> Contact Counselor
              </button>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20, marginTop: 24 }}>
          {/* Behaviour Score */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 6 }}>Current Term standing</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, marginBottom: 14 }}>
              <div style={{ fontFamily: T.fontHead, fontSize: 52, fontWeight: 900, color: T.textPrimary, lineHeight: 1 }}>840</div>
              <div style={{ marginBottom: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: T.green }}>↑ 12% vs last month</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 16, marginBottom: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 14, color: T.green }}>+</span>
                <span style={{ fontFamily: T.fontHead, fontSize: 18, fontWeight: 800, color: T.green }}>24</span>
                <span style={{ fontSize: 12, color: T.textMuted }}>Positive Awards</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontFamily: T.fontHead, fontSize: 18, fontWeight: 800, color: T.error }}>-4</span>
                <span style={{ fontSize: 12, color: T.textMuted }}>Points Deducted</span>
              </div>
            </div>
            <div style={{ background: T.ai + '10', borderRadius: 10, padding: '12px 14px' }}>
              <div style={{ display: 'flex', gap: 6, marginBottom: 4 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 14, color: T.ai }}>auto_awesome</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: T.textPrimary }}>AI Note</span>
              </div>
              <p style={{ fontSize: 12, color: T.textMuted, margin: 0 }}>Resilience recovery noted — peer support awards following a late-class deduction show excellent character development.</p>
            </div>
          </div>

          {/* Social Engagement Mix */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 18 }}>Social Engagement Mix</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {ENGAGEMENT.map(e => (
                <div key={e.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                    <span style={{ fontSize: 13, color: T.textPrimary }}>{e.label}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: e.color }}>{e.value}%</span>
                  </div>
                  <div style={{ height: 10, background: '#F3F4F6', borderRadius: 5, overflow: 'hidden' }}>
                    <div style={{ width: `${e.value}%`, height: '100%', background: e.color, borderRadius: 5 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {/* Social Milestones */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 4 }}>Social Milestones</h2>
            <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 20 }}>Academic Year 2023–24</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {MILESTONES.map((m, i) => (
                <div key={m.title} style={{ display: 'flex', gap: 14, position: 'relative', paddingBottom: i < MILESTONES.length - 1 ? 24 : 0 }}>
                  {i < MILESTONES.length - 1 && (
                    <div style={{ position: 'absolute', left: 17, top: 34, bottom: 0, width: 2, background: T.border }} />
                  )}
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: m.color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18, color: m.color }}>{m.icon}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: T.textMuted, marginBottom: 3 }}>{m.date}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: T.textPrimary, marginBottom: 6 }}>{m.title}</div>
                    <div style={{ display: 'flex', gap: 6 }}>
                      {m.tags.map(tag => (
                        <span key={tag} style={{ fontSize: 11, fontWeight: 600, color: m.color, background: m.color + '15', padding: '2px 8px', borderRadius: 10 }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Teacher Notes */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 4 }}>Teacher Notes</h2>
            <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 18 }}>Recent behavioural observations</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {TEACHER_NOTES.map(n => (
                <div key={n.name} style={{ padding: '14px', background: '#FAFAFA', border: `1px solid ${T.border}`, borderRadius: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 30, height: 30, borderRadius: '50%', background: n.color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 14, color: n.color }}>person</span>
                      </div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary }}>{n.name}</div>
                        <div style={{ fontSize: 11, color: T.textMuted }}>{n.subject}</div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 11, color: T.textMuted }}>{n.recency}</div>
                      <span style={{ fontSize: 11, fontWeight: 700, color: n.color, background: n.color + '15', padding: '2px 7px', borderRadius: 8 }}>{n.tone}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: 12, color: T.textMuted, margin: 0 }}>{n.note}</p>
                </div>
              ))}
            </div>
            <button style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.primary, cursor: 'pointer', fontWeight: 600 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>add</span>
              Add Note
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
