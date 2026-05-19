'use client'
import Link from 'next/link'

const T = {
  bg: '#f9f9ff', surface: '#ffffff', primary: '#003f7a',
  ai: '#10B981', xp: '#F59E0B', textPrimary: '#191c20',
  textMuted: '#424750', border: '#c2c6d2', error: '#ba1a1a',
  amber: '#F59E0B', amberLight: '#FFF8E7',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
}

const sidebarItems = [
  { icon: 'dashboard', label: 'Dashboard', href: '/parent/dashboard' },
  { icon: 'people', label: 'My Children', href: '/parent/multi-child' },
  { icon: 'insights', label: 'Performance', href: '/parent/performance' },
  { icon: 'psychology', label: 'Academic Recovery', href: '/parent/academic-recovery', active: true },
  { icon: 'calendar_month', label: 'Calendar', href: '/parent/calendar' },
  { icon: 'folder', label: 'Documents', href: '/parent/documents' },
  { icon: 'chat', label: 'Messages', href: '/parent/messages' },
  { icon: 'payments', label: 'Tuition & Fees', href: '/parent/tuition' },
]

const MASTERY_GAPS = [
  { subject: 'Algebra Basics', pct: 85, color: '#10B981' },
  { subject: 'Quadratics', pct: 45, color: '#F59E0B' },
  { subject: 'Geometry', pct: 78, color: '#10B981' },
  { subject: 'Trigonometry', pct: 32, color: '#EF4444' },
  { subject: 'Data & Stats', pct: 92, color: '#10B981' },
]

const TUTORS = [
  { name: 'Marcus Thorne', role: 'Math Expert • Year 11', badge: 'Top 1% Trig Pro', badgeColor: '#F59E0B' },
  { name: 'Sarah Chen', role: 'Algebra Coach • Year 10', badge: 'Peer Lead Geometry', badgeColor: '#10B981' },
]

const SLOTS = [
  { date: 'Tuesday, Oct 24', time: '3:30 PM – 3:45 PM' },
  { date: 'Thursday, Oct 26', time: '4:00 PM – 4:15 PM' },
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
      <div style={{ padding: '0 16px 16px' }}>
        <div style={{ background: T.primary + '10', borderRadius: 12, padding: '12px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <span style={{ fontSize: 13, color: T.ai }}>✦</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: T.textPrimary }}>EduWorld AI</span>
          </div>
          <p style={{ fontSize: 11, color: T.textMuted, margin: 0 }}>Ask about Alex&apos;s progress, grades, or upcoming events.</p>
        </div>
      </div>
    </aside>
  )
}

export default function ParentAcademicRecoveryPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        {/* Breadcrumb + Title */}
        <p style={{ fontSize: 12, color: T.textMuted, margin: '0 0 6px' }}>Academic Mastery › Intervention Plan</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 26, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Path to Mastery: Alex Johnson</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 6, maxWidth: 600 }}>3 identified learning gaps have been detected. This roadmap provides a structured plan to bring Alex to full proficiency across all curriculum targets.</p>
          </div>
        </div>

        {/* Alert Banner */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: T.amberLight, border: `1px solid ${T.amber}`, borderRadius: 12, padding: '12px 18px', marginBottom: 24 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.amber }}>warning</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: '#92400E' }}>Intervention Active</span>
          <span style={{ fontSize: 13, color: '#92400E', marginLeft: 4 }}>Alex has active learning gaps in Trigonometry and Quadratics requiring immediate attention.</span>
        </div>

        {/* Top row: Mastery Gap + AI Intervention */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
          {/* Mastery Gap Analysis */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, margin: '0 0 4px' }}>Mastery Gap Analysis</h2>
            <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 20 }}>Current curriculum progress vs. target proficiency</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {MASTERY_GAPS.map(g => (
                <div key={g.subject}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                    <span style={{ fontSize: 13, color: T.textPrimary, fontWeight: 500 }}>{g.subject}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: g.color }}>{g.pct}%</span>
                  </div>
                  <div style={{ height: 10, background: '#F3F4F6', borderRadius: 5, overflow: 'hidden', position: 'relative' }}>
                    <div style={{ width: `${g.pct}%`, height: '100%', background: g.color, borderRadius: 5 }} />
                    <div style={{ position: 'absolute', right: 0, top: 0, width: `${100 - g.pct}%`, height: '100%', background: g.color + '20', borderRadius: '0 5px 5px 0' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Intervention Path */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.ai }}>auto_awesome</span>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, margin: 0 }}>AI Intervention Path</h2>
            </div>

            {/* Step 1 */}
            <div style={{ display: 'flex', gap: 12, padding: '14px', background: '#F8FFF8', border: '1px solid #D1FAE5', borderRadius: 12, marginBottom: 12 }}>
              <div style={{ width: 34, height: 34, borderRadius: 10, background: T.primary + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.primary }}>edit_note</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary, marginBottom: 3 }}>Step 1: Revisit Factoring Foundations</div>
                <div style={{ fontSize: 12, color: T.textMuted }}>Recommended 30m module based on Trigonometry struggle points.</div>
              </div>
              <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.primary, alignSelf: 'center', cursor: 'pointer' }}>play_circle</span>
            </div>

            {/* Step 2 */}
            <div style={{ display: 'flex', gap: 12, padding: '14px', background: '#FFFBF0', border: '1px solid #FDE68A', borderRadius: 12, marginBottom: 16 }}>
              <div style={{ width: 34, height: 34, borderRadius: 10, background: T.amber + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.amber }}>science</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary, marginBottom: 3 }}>Step 2: Visualising Sine Waves</div>
                <div style={{ fontSize: 12, color: T.textMuted }}>Interactive lab session to build intuition for wave functions.</div>
              </div>
            </div>

            {/* Assign button */}
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 18px', background: T.ai, color: '#fff', border: 'none', borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: 'pointer', marginBottom: 16 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>auto_awesome</span>
              Assign to Alex
            </button>

            {/* Momentum */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: 13, color: T.textPrimary, fontWeight: 600 }}>Mastery Momentum</span>
                <span style={{ fontSize: 12, color: T.amber, fontWeight: 700 }}>In Recovery</span>
              </div>
              <div style={{ height: 10, background: '#F3F4F6', borderRadius: 5, overflow: 'hidden', marginBottom: 4 }}>
                <div style={{ width: '60%', height: '100%', background: `linear-gradient(90deg, ${T.amber}, #F97316)`, borderRadius: 5 }} />
              </div>
              <span style={{ fontSize: 11, color: T.textMuted }}>60% to Goal</span>
            </div>
          </div>
        </div>

        {/* Bottom row: Peer Tutors + Office Hours */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {/* Recommended Peer Tutors */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, margin: 0 }}>Recommended Peer Tutors</h2>
              <Link href="#" style={{ fontSize: 13, color: T.primary, fontWeight: 600, textDecoration: 'none' }}>View All</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {TUTORS.map(tutor => (
                <div key={tutor.name} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 14px', background: '#F9FAFB', borderRadius: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: T.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.primary }}>person</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: T.textPrimary }}>{tutor.name}</div>
                    <div style={{ fontSize: 12, color: T.textMuted }}>{tutor.role}</div>
                    <span style={{ display: 'inline-block', marginTop: 4, fontSize: 11, fontWeight: 600, color: tutor.badgeColor, background: tutor.badgeColor + '15', padding: '2px 8px', borderRadius: 12 }}>{tutor.badge}</span>
                  </div>
                  <button style={{ padding: '6px 12px', background: T.primary, color: '#fff', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Connect</button>
                </div>
              ))}
            </div>
          </div>

          {/* Office Hours */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.primary }}>event_available</span>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, margin: 0 }}>Office Hours</h2>
            </div>
            <p style={{ fontSize: 13, color: T.textMuted, marginBottom: 20 }}>Schedule a direct 15-min deep dive with Mr. Henderson.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SLOTS.map(slot => (
                <div key={slot.date} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: '#F8FAFF', border: `1px solid ${T.border}`, borderRadius: 12 }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: T.textPrimary }}>{slot.date}</div>
                    <div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>{slot.time}</div>
                  </div>
                  <button style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '6px 12px', background: T.primary, color: '#fff', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>add_circle</span>
                    Book
                  </button>
                </div>
              ))}
            </div>
            <button style={{ marginTop: 14, width: '100%', padding: '10px', background: 'transparent', color: T.primary, border: `1px solid ${T.primary}`, borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
              Request Alternative Time
            </button>
          </div>
        </div>

        {/* FAB */}
        <button style={{ position: 'fixed', bottom: 32, right: 32, width: 52, height: 52, borderRadius: '50%', background: T.ai, color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 16px rgba(16,185,129,0.4)' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 24 }}>chat</span>
        </button>
      </main>
    </div>
  )
}
