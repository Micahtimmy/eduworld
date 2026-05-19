'use client'
import Link from 'next/link'

const T = {
  bg: '#f4f4f8', surface: '#ffffff', textPrimary: '#0f0f1a',
  textMuted: '#6b7280', border: '#e5e7eb',
  purple: '#6366f1', purpleLight: '#818cf8', purpleDim: '#eef2ff',
  indigo: '#4f46e5', success: '#10b981', warning: '#f59e0b', error: '#ef4444',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
  sidebarBg: '#1e1e2e', sidebarText: '#a1a1c7', sidebarActive: '#2e2e4e',
}

const sidebarItems = [
  { icon: 'corporate_fare', label: 'Dashboard', href: '/enterprise/dashboard' },
  { icon: 'group', label: 'Employees', href: '/enterprise/employees' },
  { icon: 'school', label: 'Programs', href: '/enterprise/programs' },
  { icon: 'troubleshoot', label: 'Skills Gap', href: '/enterprise/skills-gap', active: true },
  { icon: 'trending_up', label: 'Performance', href: '/enterprise/employee-performance' },
  { icon: 'analytics', label: 'ROI Analytics', href: '/enterprise/roi' },
  { icon: 'psychology', label: 'AI Training', href: '/enterprise/ai-training' },
]

const METRICS = [
  { label: 'Overall Workforce Readiness', value: '74.2%', trend: '↑5.4%', sub: 'Average competency across 12 core domains', valueColor: T.success },
  { label: 'Target Gaps', value: '3 critical', sub: 'Cloud · Data · Ethics', valueColor: T.error },
  { label: 'Active Training', value: '82%', sub: 'Enrollment rate in upskilling programs', badge: 'High Engagement' },
]

const HEATMAP = [
  { dept: 'Engineering & DevOps', scores: [92, 78, 65, 42, 20] },
  { dept: 'Data Intelligence', scores: [81, 95, 88, 54, 30] },
  { dept: 'Product Strategy', scores: [15, 48, 61, 22, 91] },
]
const SKILLS = ['Cloud Arch', 'Data Gov', 'AI Eng', 'Ethical Hacking', 'Product Growth']

const PROGRAMS = [
  { icon: 'lock', title: 'Advanced Ethical Hacking & SecOps', priority: 'Critical', priorityColor: T.error, priorityBg: '#fef2f2', cat: 'Engineering', duration: '12 weeks', enrollments: 42 },
  { icon: 'smart_toy', title: 'Enterprise AI Strategy & Governance', priority: 'Strategic Growth', priorityColor: T.indigo, priorityBg: '#eef2ff', cat: 'Data', duration: '8 weeks', enrollments: 128 },
]

const TALENT = [
  { initials: 'ER', name: 'Elena Rodriguez', match: 98, role: 'Lead Data Architect' },
  { initials: 'MC', name: 'Marcus Chen', match: 94, role: 'DevOps Specialist' },
  { initials: 'SJ', name: 'Sarah Jenkins', match: 89, role: 'Senior UX Strategist' },
]

function scoreColor(s: number) {
  if (s >= 80) return { bg: '#22c55e', text: '#fff' }
  if (s >= 60) return { bg: '#eab308', text: '#fff' }
  if (s >= 40) return { bg: '#f97316', text: '#fff' }
  return { bg: '#ef4444', text: '#fff' }
}

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

export default function EnterpriseSkillsGapPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Skills Gap Analysis & Strategy</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 4 }}>Identify workforce readiness gaps and prioritize targeted upskilling.</p>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 18px', background: T.success, border: 'none', borderRadius: 10, fontSize: 13, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
            <span style={{ fontSize: 14 }}>✦</span> Generate AI Skills Report
          </button>
        </div>

        {/* Metric Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
          {METRICS.map(m => (
            <div key={m.label} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: '20px 18px' }}>
              <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 6 }}>{m.label}</p>
              <p style={{ fontFamily: T.fontHead, fontSize: 26, fontWeight: 800, color: m.valueColor || T.textPrimary, lineHeight: 1, marginBottom: 4 }}>{m.value}</p>
              {m.trend && <p style={{ fontSize: 11, fontWeight: 600, color: T.success, marginBottom: 4 }}>{m.trend}</p>}
              <p style={{ fontSize: 11, color: T.textMuted, marginBottom: m.badge ? 8 : 0 }}>{m.sub}</p>
              {m.badge && <span style={{ fontSize: 10, fontWeight: 700, background: '#f0fdf4', color: T.success, padding: '3px 10px', borderRadius: 20 }}>{m.badge}</span>}
            </div>
          ))}
        </div>

        {/* Competency Heatmap */}
        <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24, marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <div>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary }}>Competency Heatmap</div>
              <p style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>Departmental proficiency vs. industry benchmarks</p>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{ padding: '5px 12px', fontSize: 11, fontWeight: 600, border: `1px solid ${T.border}`, borderRadius: 8, background: T.surface, color: T.textMuted, cursor: 'pointer' }}>Q2-2024</button>
              <button style={{ padding: '5px 12px', fontSize: 11, fontWeight: 600, border: 'none', borderRadius: 8, background: T.purple, color: '#fff', cursor: 'pointer' }}>Q3-2024</button>
              <button style={{ padding: '5px 10px', fontSize: 11, border: `1px solid ${T.border}`, borderRadius: 8, background: T.surface, color: T.textMuted, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span>
              </button>
            </div>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${T.border}` }}>
                  <th style={{ textAlign: 'left', paddingBottom: 10, fontSize: 11, fontWeight: 700, color: T.textMuted, paddingRight: 16, textTransform: 'uppercase' }}>Department</th>
                  {SKILLS.map(s => (
                    <th key={s} style={{ textAlign: 'center', paddingBottom: 10, paddingInline: 8, fontSize: 11, fontWeight: 700, color: T.textMuted, textTransform: 'uppercase' }}>{s}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {HEATMAP.map((r, ri) => (
                  <tr key={r.dept} style={{ borderBottom: ri < HEATMAP.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                    <td style={{ padding: '12px 16px 12px 0', fontSize: 13, fontWeight: 600, color: T.textPrimary, whiteSpace: 'nowrap' }}>{r.dept}</td>
                    {r.scores.map((s, si) => {
                      const col = scoreColor(s)
                      return (
                        <td key={si} style={{ padding: '12px 8px', textAlign: 'center' }}>
                          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 30, borderRadius: 8, background: col.bg, color: col.text, fontSize: 12, fontWeight: 700 }}>{s}</div>
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {/* Recommended Programs */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary }}>Recommended Training Programs</div>
              <span style={{ fontSize: 10, fontWeight: 700, background: T.success + '15', color: T.success, padding: '3px 8px', borderRadius: 20 }}>✦ AI Optimized</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {PROGRAMS.map(p => (
                <div key={p.title} style={{ border: `1px solid ${T.border}`, borderRadius: 12, padding: '14px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.purple, flexShrink: 0 }}>{p.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary, marginBottom: 4 }}>{p.title}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 20, background: p.priorityBg, color: p.priorityColor }}>{p.priority}</span>
                        <span style={{ fontSize: 11, color: T.textMuted }}>{p.cat} · {p.duration}</span>
                      </div>
                      <div style={{ fontSize: 11, color: T.textMuted, marginTop: 4 }}>{p.enrollments} enrolled</div>
                    </div>
                  </div>
                  <button style={{ width: '100%', padding: '8px 0', background: T.purple, border: 'none', borderRadius: 8, fontSize: 12, color: '#fff', fontWeight: 600, cursor: 'pointer' }}>Assign</button>
                </div>
              ))}
            </div>
          </div>

          {/* Top Talent Readiness */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 24 }}>
            <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary, marginBottom: 16 }}>Top Talent Readiness</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
              {TALENT.map(t => (
                <div key={t.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', background: T.bg, borderRadius: 10 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: T.purple + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, color: T.purple, flexShrink: 0 }}>{t.initials}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: T.textPrimary }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: T.textMuted }}>{t.role}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.success }}>{t.match}%</div>
                    <div style={{ fontSize: 10, color: T.textMuted }}>match</div>
                  </div>
                </div>
              ))}
            </div>
            <button style={{ width: '100%', padding: '10px 0', background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, fontSize: 13, color: T.textPrimary, cursor: 'pointer' }}>View All Talent Matrix</button>
          </div>
        </div>
      </main>
    </div>
  )
}
