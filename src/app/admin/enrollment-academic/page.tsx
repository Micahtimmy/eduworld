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

const CORE_SUBJECTS = ['Math', 'Science', 'English Lit', 'History', 'Geography', 'Phys Ed', 'Comp Sci', 'Language Arts']
const ELECTIVES = ['Art Studio', 'Choir', 'Theater', 'Creative Writing', 'Debate']

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

export default function AdminEnrollmentAcademicPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32, display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: 600 }}>
          {/* Stepper */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
              {['Profile', 'Family', 'Academic'].map((step, i) => (
                <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 20, background: i < 2 ? '#16a34a' : T.primary, color: '#fff', fontSize: 12, fontWeight: 600 }}>
                    {i < 2 ? '✓' : `${i + 1}`} {step}
                  </div>
                  {i < 2 && <div style={{ width: 16, height: 1, background: T.border }} />}
                </div>
              ))}
            </div>
            <div style={{ fontSize: 12, color: T.textMuted }}>Individual Enrollment · EWD-010</div>
          </div>

          {/* AI Banner */}
          <div style={{ background: T.ai + '08', border: `1px solid ${T.ai}30`, borderRadius: 14, padding: '14px 18px', marginBottom: 20, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <span style={{ fontSize: 16, color: T.ai }}>✦</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: T.textPrimary, marginBottom: 2 }}>EduWorld AI Assignment</div>
              <p style={{ fontSize: 13, color: T.textMuted }}>8 core subjects pre-selected for Grade 5 regional standards. Jane is also eligible for 2 Creative Arts electives.</p>
            </div>
          </div>

          {/* Class & House */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 16 }}>
            <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary, marginBottom: 16 }}>Class & House</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: T.textMuted, marginBottom: 6 }}>Grade Level</label>
                <div style={{ padding: '10px 14px', background: T.bg, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 14, color: T.textMuted }}>Grade 5 (Pre-filled via Age/Profile)</div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: T.textMuted, marginBottom: 6 }}>Section / Class</label>
                <select style={{ width: '100%', padding: '10px 14px', background: T.bg, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 14, color: T.textPrimary, outline: 'none' }}>
                  <option>5A (Morning Cohort)</option>
                  <option>5B (Morning Cohort)</option>
                  <option>5C (Afternoon Cohort)</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: T.textMuted, marginBottom: 6 }}>House / Tribe Assignment</label>
                <select style={{ width: '100%', padding: '10px 14px', background: T.bg, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 14, color: T.textPrimary, outline: 'none' }}>
                  <option>Auto-Assign</option>
                  <option>Dragons (Red)</option>
                  <option>Griffins (Gold)</option>
                  <option>Krakens (Blue)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Learning Support */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 20, marginBottom: 16 }}>
            <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary, marginBottom: 12 }}>Learning Support</div>
            <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
              <input type="checkbox" style={{ width: 16, height: 16 }} />
              <span style={{ fontSize: 14, color: T.textPrimary }}>Requires Special Educational Needs (SEN) Support</span>
            </label>
          </div>

          {/* Subject Selection */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 20 }}>
            <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary, marginBottom: 16 }}>Subject Selection</div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10 }}>Core Subjects — Locked (8)</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {CORE_SUBJECTS.map(s => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px', background: T.bg, borderRadius: 8, opacity: 0.7 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 14, color: T.textMuted }}>lock</span>
                    <span style={{ fontSize: 13, color: T.textPrimary }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Electives</div>
                <span style={{ fontSize: 11, fontWeight: 700, background: T.primary + '15', color: T.primary, padding: '2px 10px', borderRadius: 20 }}>0 / 2 selected</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {ELECTIVES.map(e => (
                  <label key={e} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px', background: T.bg, borderRadius: 8, cursor: 'pointer' }}>
                    <input type="checkbox" style={{ width: 16, height: 16 }} />
                    <span style={{ fontSize: 13, color: T.textPrimary }}>{e}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            <button style={{ flex: 1, padding: '12px 0', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 14, color: T.textMuted, cursor: 'pointer' }}>← Back</button>
            <Link href="/admin/enrollment-review" style={{ flex: 1, textDecoration: 'none' }}>
              <button style={{ width: '100%', padding: '12px 0', background: T.primary, border: 'none', borderRadius: 10, fontSize: 14, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>Review & Complete →</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
