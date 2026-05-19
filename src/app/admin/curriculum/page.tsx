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
  { icon: 'person_add', label: 'Student Intake', href: '/admin/student-intake' },
  { icon: 'groups', label: 'Students', href: '/admin/students' },
  { icon: 'school', label: 'Teachers', href: '/admin/teacher-roster' },
  { icon: 'analytics', label: 'Analytics', href: '/admin/analytics' },
  { icon: 'calendar_month', label: 'Events', href: '/admin/events' },
  { icon: 'payments', label: 'Finance', href: '/admin/finance' },
  { icon: 'policy', label: 'Roles & Permissions', href: '/admin/roles' },
  { icon: 'menu_book', label: 'Curriculum', href: '/admin/curriculum', active: true },
  { icon: 'monitor_heart', label: 'System Health', href: '/admin/health-monitor' },
]

const FRAMEWORKS = [
  { name: 'International Baccalaureate (IB)', subjects: 28, alignment: 99, status: 'active' },
  { name: 'Cambridge A-Levels', subjects: 34, alignment: 97, status: 'active' },
  { name: 'IGCSE Curriculum', subjects: 41, alignment: 95, status: 'active' },
  { name: 'Common Core (US)', subjects: 22, alignment: 88, status: 'review' },
]

const STATS = [
  { label: 'Frameworks', value: '12' },
  { label: 'Global Alignment', value: '94.2%' },
  { label: 'Active Subjects', value: '127' },
  { label: 'Pending Reviews', value: '6' },
]

const LOGS = [
  { icon: 'update', label: 'Framework Updated', detail: 'IB MYP — Unit 4 Chemistry', time: '2 hours ago', color: T.primary },
  { icon: 'auto_awesome', label: 'AI Auto-Mapped', detail: '14 learning objectives linked', time: '5 hours ago', color: T.ai },
  { icon: 'rate_review', label: 'Staff Review Triggered', detail: 'A-Level Physics Syllabus', time: 'Yesterday', color: T.xp },
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

export default function AdminCurriculumPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 4 }}>EduWorld Global · London Central Academy</p>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Curriculum & Standards</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Manage frameworks, alignment, and learning objectives across all campuses.</p>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 18px', background: T.primary, border: 'none', borderRadius: 10, fontSize: 13, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>add</span>Add Framework
          </button>
        </div>

        {/* Global Alignment Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
          {STATS.map(s => (
            <div key={s.label} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: '18px 16px', textAlign: 'center' }}>
              <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 26, color: T.textPrimary, marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: T.textMuted }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* AI Auto-Map Banner */}
        <div style={{ background: T.ai + '08', border: `1px solid ${T.ai}30`, borderRadius: 14, padding: '18px 20px', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 16, color: T.ai }}>✦</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary, marginBottom: 2 }}>AI Auto-Map & Staff Competency</div>
            <div style={{ fontSize: 13, color: T.textMuted }}>EduWorld AI can automatically map curriculum objectives to staff skills and lesson content across all frameworks.</div>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', background: T.ai, border: 'none', borderRadius: 10, fontSize: 13, color: '#fff', fontWeight: 600, cursor: 'pointer', flexShrink: 0 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>auto_awesome</span>Run Auto-Map
          </button>
        </div>

        {/* Frameworks List */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.primary }}>menu_book</span>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Curriculum Frameworks</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {FRAMEWORKS.map(f => (
              <div key={f.name} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 18px', background: T.bg, borderRadius: 12, border: `1px solid ${T.border}` }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: T.primary + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.primary }}>auto_stories</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary }}>{f.name}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 20, background: f.status === 'active' ? T.ai + '20' : T.xp + '20', color: f.status === 'active' ? T.ai : T.xp }}>
                      {f.status === 'active' ? 'Active' : 'Under Review'}
                    </span>
                  </div>
                  <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 6 }}>{f.subjects} subjects</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ flex: 1, height: 6, background: T.border + '60', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${f.alignment}%`, background: f.alignment >= 95 ? T.ai : T.primary, borderRadius: 3 }} />
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 700, color: T.textPrimary, minWidth: 36 }}>{f.alignment}%</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                  <button style={{ padding: '6px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.primary, fontWeight: 600, cursor: 'pointer' }}>Edit</button>
                  <button style={{ padding: '6px 14px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, color: T.textMuted, cursor: 'pointer' }}>View</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity Log */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.primary }}>history</span>
            <h2 style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Recent Activity</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {LOGS.map(l => (
              <div key={l.detail} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', background: T.bg, borderRadius: 10 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: l.color, flexShrink: 0 }}>{l.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 13, color: T.textPrimary }}>{l.label}</div>
                  <div style={{ fontSize: 12, color: T.textMuted }}>{l.detail}</div>
                </div>
                <span style={{ fontSize: 11, color: T.textMuted, flexShrink: 0 }}>{l.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
