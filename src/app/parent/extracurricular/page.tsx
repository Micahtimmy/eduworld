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
  { icon: 'people', label: 'My Children', href: '/parent/multi-child' },
  { icon: 'calendar_month', label: 'Calendar', href: '/parent/calendar' },
  { icon: 'folder', label: 'Documents', href: '/parent/documents' },
  { icon: 'sports_soccer', label: 'Extracurricular', href: '/parent/extracurricular', active: true },
  { icon: 'chat', label: 'Messages', href: '/parent/messages' },
  { icon: 'payments', label: 'Tuition & Fees', href: '/parent/tuition' },
]

const FEATURED = [
  { name: 'Elite Robotics & AI Labs', badge: '✦ Recommended for Alex (STEM)', price: '$450/Term', schedule: 'Tue/Thu 4:00 PM', spots: '4 Slots Left', color: T.ai },
  { name: 'Advanced Debate & Rhetoric', badge: 'Arts & Leadership', price: '$320/Term', schedule: 'Wed 3:30 PM', spots: 'Open Enrollment', color: '#7c3aed' },
]

const ACTIVITIES = [
  { name: 'Varsity Football Academy', category: 'Sports · Advanced Elite', schedule: 'Mon/Wed/Fri', fee: '$680/Term', status: '2 Spots left!', cta: 'Enroll Alex', urgent: true },
  { name: 'Digital Orchestration', category: 'Arts · Music Tech', schedule: 'Saturdays 10 AM', fee: '$210/Term', status: 'Open Enrollment', cta: 'Enroll Alex', urgent: false },
  { name: 'Ethics in AI Seminar', category: 'Leadership · Global Citizenship', schedule: 'Fridays 3:30 PM', fee: 'Free (Scholarship)', status: 'Waitlist Only', cta: 'Join Waitlist', urgent: false },
]

const ENROLLMENTS = [
  { icon: 'science', name: 'Intro to Quantum', schedule: 'Mon/Wed · 4:30 PM', color: T.primary },
  { icon: 'palette', name: 'Oil Painting', schedule: 'Fridays · 3:00 PM', color: '#7c3aed' },
]

const CATEGORIES = [
  { icon: 'sports_soccer', label: 'Sports' },
  { icon: 'science', label: 'STEM' },
  { icon: 'palette', label: 'Arts' },
  { icon: 'groups', label: 'Leadership' },
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

export default function ParentExtracurricularPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32, maxWidth: 900 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 700, background: T.primary + '15', color: T.primary, padding: '3px 10px', borderRadius: 20 }}>Spring Term 2025</span>
        </div>
        <div style={{ marginBottom: 24, marginTop: 8 }}>
          <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Extracurricular Discovery</h1>
          <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Empower Alex's potential with curated high-performance clubs and elite sports academies.</p>
        </div>

        {/* Child Toggle */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
          {['Alex', 'Sarah', 'Leo'].map((child, i) => (
            <button key={child} style={{ padding: '7px 18px', borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: 'pointer', background: i === 0 ? T.primary : T.surface, color: i === 0 ? '#fff' : T.textMuted, border: i === 0 ? 'none' : `1px solid ${T.border}` }}>{child}</button>
          ))}
        </div>

        {/* Recommended */}
        <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary, marginBottom: 12 }}>AI Recommended for Alex</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
          {FEATURED.map(f => (
            <div key={f.name} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10, marginBottom: 10 }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: T.textPrimary, marginBottom: 4 }}>{f.name}</div>
                  <span style={{ fontSize: 11, fontWeight: 700, background: f.color + '20', color: f.color, padding: '2px 8px', borderRadius: 10 }}>{f.badge}</span>
                </div>
              </div>
              <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 4 }}>{f.schedule} · {f.spots}</div>
              <div style={{ fontWeight: 800, fontSize: 16, color: f.color, marginBottom: 14 }}>{f.price}</div>
              <button style={{ width: '100%', padding: '9px 0', background: T.primary, color: '#fff', border: 'none', borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Enroll Alex Now</button>
            </div>
          ))}
        </div>

        {/* Browse by Category */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 22, marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary }}>Browse by Category</h2>
            <button style={{ fontSize: 13, color: T.primary, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>View All →</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            {CATEGORIES.map(c => (
              <button key={c.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '14px 8px', background: T.bg, borderRadius: 12, border: `1px solid ${T.border}`, cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 24, color: T.primary }}>{c.icon}</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: T.textMuted }}>{c.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Activity List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
          {ACTIVITIES.map(a => (
            <div key={a.name} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: T.textPrimary, marginBottom: 2 }}>{a.name}</div>
                <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 6 }}>{a.category}</div>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 12 }}>
                  <span style={{ color: T.textMuted }}>📅 {a.schedule}</span>
                  <span style={{ fontWeight: 700, color: T.primary }}>{a.fee}</span>
                  <span style={{ fontWeight: 600, color: a.urgent ? T.error : T.textMuted }}>{a.status}</span>
                </div>
              </div>
              <button style={{ padding: '8px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, fontWeight: 600, color: T.primary, cursor: 'pointer', flexShrink: 0 }}>{a.cta}</button>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {/* Alex's Enrollments */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 22 }}>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary, marginBottom: 14 }}>Alex's Enrollments</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {ENROLLMENTS.map(e => (
                <div key={e.name} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', background: T.bg, borderRadius: 10 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: e.color }}>{e.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13, color: T.textPrimary }}>{e.name}</div>
                    <div style={{ fontSize: 11, color: T.textMuted }}>{e.schedule}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress */}
          <div style={{ background: T.primary + '08', border: `1px solid ${T.primary}20`, borderRadius: 14, padding: 22 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.xp }}>emoji_events</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>Rising Leader</div>
                <div style={{ fontSize: 12, color: T.textMuted }}>Alex is 20 hours from Platinum Ribbon</div>
              </div>
            </div>
            <div style={{ height: 8, background: T.border + '60', borderRadius: 4, overflow: 'hidden', marginBottom: 6 }}>
              <div style={{ height: '100%', width: '80%', background: T.xp, borderRadius: 4 }} />
            </div>
            <div style={{ fontSize: 12, color: T.textMuted }}>80 / 100 Hours Logged</div>
          </div>
        </div>
      </main>
    </div>
  )
}
