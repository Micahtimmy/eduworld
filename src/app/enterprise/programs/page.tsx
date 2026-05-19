'use client'
import Link from 'next/link'

const T = {
  bg: '#f4f4f8', surface: '#ffffff', textPrimary: '#0f0f1a',
  textMuted: '#6b7280', border: '#e5e7eb',
  purple: '#6366f1', purpleLight: '#818cf8', purpleDim: '#eef2ff',
  indigo: '#4f46e5', success: '#10b981', warning: '#f59e0b', error: '#ef4444',
  ai: '#10b981',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
  sidebarBg: '#1e1e2e', sidebarText: '#a1a1c7', sidebarActive: '#2e2e4e',
}

const sidebarItems = [
  { icon: 'corporate_fare', label: 'Dashboard', href: '/enterprise/dashboard' },
  { icon: 'group', label: 'Employees', href: '/enterprise/employees' },
  { icon: 'school', label: 'Programs', href: '/enterprise/programs', active: true },
  { icon: 'troubleshoot', label: 'Skills Gap', href: '/enterprise/skills-gap' },
  { icon: 'trending_up', label: 'Performance', href: '/enterprise/employee-performance' },
  { icon: 'analytics', label: 'ROI Analytics', href: '/enterprise/roi' },
  { icon: 'psychology', label: 'AI Training', href: '/enterprise/ai-training' },
]

const LIBRARY = [
  { icon: 'lock', title: 'GDPR Essentials', duration: '45 mins', level: 'Advanced' },
  { icon: 'bolt', title: 'AI Privacy Risk', duration: '20 mins', level: 'AI Powered' },
  { icon: 'article', title: 'Data Handling 101', duration: '60 mins', level: 'Foundational' },
  { icon: 'warning', title: 'Breach Response', duration: '30 mins', level: 'Compliance' },
]

const PATH = [
  { num: 1, icon: 'security', title: 'Introduction to GDPR', type: 'Mandatory', note: 'Pass grade: 80%' },
  { num: 2, icon: 'encrypted', title: 'Data Encryption Protocols', type: 'Technical Elective', note: '30 mins' },
]

const METRICS = [
  { label: 'Estimated Completion', value: '18 Days' },
  { label: 'Predicted Engagement', value: '92%' },
  { label: 'Skill Points Earned', value: '450 per user' },
  { label: 'Program ROI Score', value: '8.4 / 10' },
]

function Sidebar() {
  return (
    <aside style={{ width: 240, minHeight: '100vh', background: T.sidebarBg, display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0 }}>
      <div style={{ padding: '0 20px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: '#ffffff' }}>EduWorld</div>
        <span style={{ display: 'inline-block', marginTop: 5, fontSize: 11, fontWeight: 600, color: T.purpleLight, background: 'rgba(129,140,248,0.15)', borderRadius: 6, padding: '2px 8px' }}>Enterprise</span>
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

export default function EnterpriseProgramsPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 4 }}>Step 1: Selection / Step 2: Assignment</p>
          <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Custom Program Builder</h1>
        </div>

        {/* Program Header Card */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
            <div>
              <span style={{ fontSize: 10, fontWeight: 700, background: '#f0fdf4', color: T.success, padding: '3px 10px', borderRadius: 20, display: 'inline-block', marginBottom: 10 }}>✓ COMPLIANCE PROGRAM</span>
              <h2 style={{ fontFamily: T.fontHead, fontSize: 20, fontWeight: 800, color: T.textPrimary, marginBottom: 6 }}>Global Data Privacy 2024</h2>
              <p style={{ fontSize: 13, color: T.textMuted, maxWidth: 480 }}>Mandatory certification for EMEA/APAC regions. GDPR-focused curriculum with audit trail.</p>
            </div>
            <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
              <button style={{ padding: '8px 16px', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>Save Draft</button>
              <button style={{ padding: '8px 18px', background: T.purple, border: 'none', borderRadius: 8, fontSize: 13, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>Launch Program</button>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '5fr 6fr 4fr', gap: 20 }}>
          {/* Course Library */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 20 }}>
            <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 15, color: T.textPrimary, marginBottom: 14 }}>Course Library</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {LIBRARY.map(c => (
                <div key={c.title} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', background: T.bg, borderRadius: 10, cursor: 'grab' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.textMuted }}>drag_indicator</span>
                  <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.purple }}>{c.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: T.textPrimary }}>{c.title}</div>
                    <div style={{ fontSize: 11, color: T.textMuted }}>{c.duration} · {c.level}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Path Roadmap */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 15, color: T.textPrimary }}>Path Roadmap</div>
              <span style={{ fontSize: 11, color: T.textMuted }}>3 Courses · 1h 35m total</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
              {PATH.map(p => (
                <div key={p.title} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', background: T.bg, border: `1px solid ${T.border}`, borderRadius: 10 }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: T.purple + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: T.purple, flexShrink: 0 }}>{p.num}</div>
                  <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.purple }}>{p.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: T.textPrimary }}>{p.title}</div>
                    <div style={{ fontSize: 11, color: T.textMuted }}>{p.type} · {p.note}</div>
                  </div>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.textMuted }}>delete</span>
                  </button>
                </div>
              ))}
              <div style={{ border: `2px dashed ${T.border}`, borderRadius: 10, padding: '14px 0', textAlign: 'center', fontSize: 12, color: T.textMuted }}>
                Drag courses here to add to path
              </div>
            </div>
            <div style={{ background: T.ai + '08', border: `1px solid ${T.ai}30`, borderRadius: 10, padding: '12px 14px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <span style={{ fontSize: 14, color: T.ai }}>✦</span>
                <p style={{ fontSize: 12, color: T.textMuted }}><strong style={{ color: T.textPrimary }}>AI Optimization:</strong> Add &quot;Cloud Security Architecture&quot; — trending in APAC regulatory frameworks.</p>
              </div>
            </div>
          </div>

          {/* Right Sidebar Settings */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.purple }}>calendar_month</span>
                <div style={{ fontWeight: 700, fontSize: 13, color: T.textPrimary }}>Deadline Management</div>
              </div>
              <input type="date" style={{ width: '100%', padding: '8px 12px', fontSize: 12, background: T.bg, border: `1px solid ${T.border}`, borderRadius: 8, outline: 'none', color: T.textPrimary, boxSizing: 'border-box' }} />
              <p style={{ fontSize: 11, color: T.textMuted, marginTop: 8 }}>Reminders Every 3 Days</p>
            </div>

            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.purple }}>groups</span>
                  <div style={{ fontWeight: 700, fontSize: 13, color: T.textPrimary }}>Assignees</div>
                </div>
                <button style={{ fontSize: 11, color: T.purple, background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>Add All</button>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                <span style={{ fontSize: 11, fontWeight: 700, background: T.purpleDim, color: T.purple, padding: '4px 10px', borderRadius: 20 }}>EMEA - Sales ×</span>
                <span style={{ fontSize: 11, fontWeight: 700, background: T.purpleDim, color: T.purple, padding: '4px 10px', borderRadius: 20 }}>APAC - Engineering ×</span>
              </div>
              <p style={{ fontSize: 11, color: T.textMuted }}>Target Reach: <strong style={{ color: T.textPrimary }}>1,240 Employees</strong></p>
            </div>

            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.success }}>check_circle</span>
                <div style={{ fontWeight: 700, fontSize: 13, color: T.textPrimary }}>Compliance Status</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <p style={{ fontSize: 11, color: T.success, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 13 }}>check</span> Meets EU Privacy Mandate
                </p>
                <p style={{ fontSize: 11, color: T.success, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 13 }}>check</span> Audit logging enabled
                </p>
              </div>
            </div>

            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.purple }}>trending_up</span>
                <div style={{ fontWeight: 700, fontSize: 13, color: T.textPrimary }}>Metrics Summary</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {METRICS.map(m => (
                  <div key={m.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, color: T.textMuted }}>{m.label}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: T.textPrimary }}>{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
