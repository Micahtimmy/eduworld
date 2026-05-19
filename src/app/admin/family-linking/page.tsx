'use client'
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
  { icon: 'person_add', label: 'Student Intake', href: '/admin/student-intake', active: true },
  { icon: 'groups', label: 'Students', href: '/admin/students' },
  { icon: 'school', label: 'Teachers', href: '/admin/teacher-roster' },
  { icon: 'analytics', label: 'Analytics', href: '/admin/analytics' },
  { icon: 'calendar_month', label: 'Events', href: '/admin/events' },
  { icon: 'payments', label: 'Finance', href: '/admin/finance' },
  { icon: 'policy', label: 'Roles & Permissions', href: '/admin/roles' },
  { icon: 'menu_book', label: 'Curriculum', href: '/admin/curriculum' },
  { icon: 'monitor_heart', label: 'System Health', href: '/admin/health-monitor' },
]

const STEPS = [
  { label: 'Profile', done: true },
  { label: 'Family', active: true },
  { label: 'Academic', pending: true },
]

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

export default function AdminFamilyLinkingPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32, display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 20, width: '100%', maxWidth: 520, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '20px 24px', borderBottom: `1px solid ${T.border}` }}>
            <div>
              <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, background: T.primary + '15', color: T.primary, padding: '2px 10px', borderRadius: 20, marginBottom: 8 }}>EWD-008</span>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary }}>Individual Enrollment Step 2</div>
            </div>
            <button style={{ fontSize: 18, color: T.textMuted, background: 'none', border: 'none', cursor: 'pointer' }}>✕</button>
          </div>

          {/* Steps */}
          <div style={{ display: 'flex', alignItems: 'center', padding: '16px 24px', borderBottom: `1px solid ${T.border}` }}>
            {STEPS.map((s, i) => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: s.done ? '#16a34a' : s.active ? T.primary : T.border + '60', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: s.done || s.active ? '#fff' : T.textMuted }}>
                    {s.done ? '✓' : i + 1}
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: T.textMuted, marginTop: 4 }}>{s.label}</div>
                </div>
                {i < STEPS.length - 1 && <div style={{ height: 1, width: '100%', background: STEPS[i + 1].done || STEPS[i + 1].active ? T.primary : T.border, marginBottom: 18 }} />}
              </div>
            ))}
          </div>

          <div style={{ padding: 24 }}>
            <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary, marginBottom: 4 }}>Family & Guardian Link</div>
            <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 16 }}>Establish household connection. Search existing accounts or create a new guardian profile.</p>

            {/* AI Insight */}
            <div style={{ background: T.ai + '08', border: `1px solid ${T.ai}30`, borderRadius: 10, padding: '12px 14px', marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                <span style={{ fontSize: 13, color: T.ai }}>✦</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: T.ai }}>EduWorld AI Insight:</span>
              </div>
              <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 8 }}>2 potential siblings already enrolled under "The Doe Family." Would you like to link Jane to this household?</p>
              <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 14px', background: T.ai, border: 'none', borderRadius: 8, fontSize: 12, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>group</span>Link Household
              </button>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: 4, background: T.bg, borderRadius: 10, padding: 4, marginBottom: 16 }}>
              {['Search Existing Family', 'Add New Guardian'].map((t, i) => (
                <button key={t} style={{ flex: 1, padding: '8px 0', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer', background: i === 0 ? T.primary : 'transparent', color: i === 0 ? '#fff' : T.textMuted, border: 'none' }}>{t}</button>
              ))}
            </div>

            {/* Search */}
            <div style={{ position: 'relative', marginBottom: 14 }}>
              <span className="material-symbols-outlined" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', fontSize: 18, color: T.textMuted }}>search</span>
              <input style={{ width: '100%', padding: '10px 14px 10px 40px', background: T.bg, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 14, color: T.textPrimary, outline: 'none', boxSizing: 'border-box' }} placeholder="Search families..." />
            </div>

            <div style={{ marginBottom: 8, fontSize: 12, fontWeight: 600, color: T.textMuted }}>Search Results (1)</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', background: T.bg, border: `1px solid ${T.primary}30`, borderRadius: 12 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 32, color: T.primary }}>family_restroom</span>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, color: T.textPrimary }}>The Doe Family</div>
                <div style={{ fontSize: 12, color: T.textMuted }}>Primary: John Doe · (555) 123-4567</div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '16px 24px', borderTop: `1px solid ${T.border}` }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 13, color: T.textMuted, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_back</span> Back
            </button>
            <div style={{ flex: 1 }} />
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 18px', background: T.primary, border: 'none', borderRadius: 8, fontSize: 13, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
              Next: Academic Assignment <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
