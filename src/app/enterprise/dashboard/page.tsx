'use client'
import Link from 'next/link'
import { useState } from 'react'

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
  { icon: 'corporate_fare', label: 'Dashboard', href: '/enterprise/dashboard', active: true },
  { icon: 'group', label: 'Employees', href: '/enterprise/employees' },
  { icon: 'school', label: 'Programs', href: '/enterprise/programs' },
  { icon: 'troubleshoot', label: 'Skills Gap', href: '/enterprise/skills-gap' },
  { icon: 'trending_up', label: 'Performance', href: '/enterprise/employee-performance' },
  { icon: 'analytics', label: 'ROI Analytics', href: '/enterprise/roi' },
  { icon: 'psychology', label: 'AI Training', href: '/enterprise/ai-training' },
]

const stats = [
  { icon: 'group', label: 'Total Employees', value: '3,847', trend: '+12 this month', trendUp: true, color: T.purple },
  { icon: 'school', label: 'Active Learners', value: '2,614', trend: '68% participation', trendUp: true, color: T.indigo },
  { icon: 'check_circle', label: 'Avg Completion Rate', value: '74.2%', trend: '+5.1% vs last Q', trendUp: true, color: T.success },
  { icon: 'trending_up', label: 'Training ROI', value: '3.8×', trend: '↑ from 3.2× last Q', trendUp: true, color: T.warning },
]

const programs = [
  { name: 'Global Data Privacy 2024', dept: 'All Departments', enrolled: 1240, completed: 980, pct: 79, status: 'Active', statusColor: T.success },
  { name: 'Leadership Acceleration', dept: 'Management', enrolled: 340, completed: 204, pct: 60, status: 'Active', statusColor: T.success },
  { name: 'AI Tools for Productivity', dept: 'Engineering & Product', enrolled: 620, completed: 589, pct: 95, status: 'Completed', statusColor: T.purple },
  { name: 'Compliance Fundamentals', dept: 'Legal & Finance', enrolled: 480, completed: 320, pct: 67, status: 'Active', statusColor: T.success },
  { name: 'Cybersecurity Essentials', dept: 'IT & Security', enrolled: 290, completed: 95, pct: 33, status: 'In Progress', statusColor: T.warning },
]

const skillsGap = [
  { skill: 'Data Analysis', demand: 88, supply: 54, gap: 34 },
  { skill: 'AI / ML Literacy', demand: 92, supply: 41, gap: 51 },
  { skill: 'Cybersecurity', demand: 76, supply: 63, gap: 13 },
  { skill: 'Project Management', demand: 70, supply: 68, gap: 2 },
  { skill: 'Communication', demand: 65, supply: 72, gap: -7 },
]

const aiRecommendations = [
  {
    icon: 'psychology',
    title: 'Close AI Literacy Gap',
    detail: '420 employees in Engineering and Product need AI/ML upskilling. Suggested program: "AI Tools for Productivity — Advanced Module".',
    priority: 'High Priority',
    priorityColor: T.error,
  },
  {
    icon: 'trending_up',
    title: 'Fast-track Top Performers',
    detail: '87 learners with >90% completion rates are eligible for Leadership Acceleration. Early promotion pipeline opportunity.',
    priority: 'Medium Priority',
    priorityColor: T.warning,
  },
  {
    icon: 'school',
    title: 'Renew Compliance Certifications',
    detail: '312 employees\' GDPR certifications expire within 60 days. Schedule a refresher batch to maintain 98%+ compliance.',
    priority: 'Urgent',
    priorityColor: '#dc2626',
  },
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
      <div style={{ padding: '16px 10px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <button style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '9px 12px', borderRadius: 8, background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.35)', color: T.purpleLight, fontSize: 12, fontWeight: 700, cursor: 'pointer', marginBottom: 6 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>auto_awesome</span>
          AI Training Assistant
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 12px', borderRadius: 8, color: T.sidebarText, fontSize: 12, cursor: 'pointer' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>settings</span>Settings
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 12px', borderRadius: 8, color: T.sidebarText, fontSize: 12, cursor: 'pointer' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>help_outline</span>Support
        </div>
      </div>
    </aside>
  )
}

export default function EnterpriseDashboardPage() {
  const [programFilter, setProgramFilter] = useState<'all' | 'active' | 'completed'>('all')

  const filteredPrograms = programs.filter(p => {
    if (programFilter === 'active') return p.status === 'Active' || p.status === 'In Progress'
    if (programFilter === 'completed') return p.status === 'Completed'
    return true
  })

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />

      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>

        {/* Page Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 24, fontWeight: 800, color: T.textPrimary, margin: 0 }}>Enterprise Dashboard</h1>
            <p style={{ fontSize: 14, color: T.textMuted, marginTop: 5 }}>Organisation-wide learning performance and workforce development overview.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 700, background: T.purpleDim, color: T.purple, padding: '5px 12px', borderRadius: 20 }}>Q2 2026</span>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', background: T.purple, border: 'none', borderRadius: 10, fontSize: 12, color: '#ffffff', fontWeight: 600, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 15 }}>auto_awesome</span>AI Insights
            </button>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: T.indigo, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13, fontWeight: 700 }}>EM</div>
          </div>
        </div>

        {/* KPI Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 28 }}>
          {stats.map(stat => (
            <div key={stat.label} style={{ background: T.surface, borderRadius: 14, padding: '20px 20px', border: `1px solid ${T.border}` }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: stat.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: stat.color }}>{stat.icon}</span>
                </div>
                <span style={{ fontSize: 10, fontWeight: 700, color: stat.trendUp ? T.success : T.error, background: stat.trendUp ? '#f0fdf4' : '#fef2f2', borderRadius: 20, padding: '2px 8px' }}>
                  {stat.trend}
                </span>
              </div>
              <div style={{ fontSize: 28, fontWeight: 800, color: T.textPrimary, fontFamily: T.fontHead, lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontSize: 12, color: T.textMuted, marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Recent Programs Table */}
        <div style={{ background: T.surface, borderRadius: 16, border: `1px solid ${T.border}`, marginBottom: 24, overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', borderBottom: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontFamily: T.fontHead, fontSize: 16, fontWeight: 700, color: T.textPrimary }}>Recent Programs</div>
            <div style={{ display: 'flex', gap: 4, background: T.bg, borderRadius: 8, padding: 3 }}>
              {(['all', 'active', 'completed'] as const).map(f => (
                <button key={f} onClick={() => setProgramFilter(f)} style={{ padding: '4px 12px', fontSize: 11, fontWeight: 600, background: programFilter === f ? T.purple : 'transparent', color: programFilter === f ? '#ffffff' : T.textMuted, border: 'none', borderRadius: 6, cursor: 'pointer', textTransform: 'capitalize' }}>{f === 'all' ? 'All' : f === 'active' ? 'Active' : 'Completed'}</button>
              ))}
            </div>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#fafafa' }}>
                  {['Program Name', 'Department', 'Enrolled', 'Completed', 'Progress', 'Status'].map(col => (
                    <th key={col} style={{ padding: '10px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: T.textMuted, letterSpacing: '0.06em', borderBottom: `1px solid ${T.border}` }}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredPrograms.map((p, i) => (
                  <tr key={p.name} style={{ borderBottom: i < filteredPrograms.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                    <td style={{ padding: '13px 16px' }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: T.textPrimary }}>{p.name}</div>
                    </td>
                    <td style={{ padding: '13px 16px' }}>
                      <span style={{ fontSize: 12, color: T.textMuted }}>{p.dept}</span>
                    </td>
                    <td style={{ padding: '13px 16px' }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: T.textPrimary }}>{p.enrolled.toLocaleString()}</span>
                    </td>
                    <td style={{ padding: '13px 16px' }}>
                      <span style={{ fontSize: 13, color: T.textMuted }}>{p.completed.toLocaleString()}</span>
                    </td>
                    <td style={{ padding: '13px 16px', minWidth: 140 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ flex: 1, height: 6, background: '#eef2ff', borderRadius: 3, overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${p.pct}%`, background: p.pct >= 80 ? T.success : p.pct >= 50 ? T.purple : T.warning, borderRadius: 3 }} />
                        </div>
                        <span style={{ fontSize: 12, fontWeight: 700, color: T.textPrimary, minWidth: 32 }}>{p.pct}%</span>
                      </div>
                    </td>
                    <td style={{ padding: '13px 16px' }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: p.statusColor, background: p.statusColor + '15', borderRadius: 20, padding: '3px 10px' }}>{p.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom row: Skills Gap + AI Recommendations */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>

          {/* Skills Gap Summary */}
          <div style={{ background: T.surface, borderRadius: 16, border: `1px solid ${T.border}`, overflow: 'hidden' }}>
            <div style={{ padding: '16px 20px', borderBottom: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.purple }}>troubleshoot</span>
                Skills Gap Summary
              </div>
              <Link href="/enterprise/skills-gap" style={{ fontSize: 12, color: T.purple, fontWeight: 600, textDecoration: 'none' }}>View Full Report →</Link>
            </div>
            <div style={{ padding: '16px 20px' }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 2, background: T.indigo }} />
                  <span style={{ fontSize: 11, color: T.textMuted }}>Demand</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 2, background: T.purple }} />
                  <span style={{ fontSize: 11, color: T.textMuted }}>Supply</span>
                </div>
              </div>
              {skillsGap.map(item => (
                <div key={item.skill} style={{ marginBottom: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: T.textPrimary }}>{item.skill}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: item.gap > 20 ? T.error : item.gap > 0 ? T.warning : T.success }}>
                      {item.gap > 0 ? `Gap: ${item.gap}%` : `Surplus: ${Math.abs(item.gap)}%`}
                    </span>
                  </div>
                  <div style={{ position: 'relative', height: 8, background: '#f0f0f8', borderRadius: 4, overflow: 'hidden', marginBottom: 3 }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: `${item.demand}%`, background: T.indigo + '40', borderRadius: 4 }} />
                    <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: `${item.supply}%`, background: T.purple, borderRadius: 4 }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 10, color: T.textMuted }}>Supply {item.supply}%</span>
                    <span style={{ fontSize: 10, color: T.textMuted }}>Demand {item.demand}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Training Recommendations */}
          <div style={{ background: T.surface, borderRadius: 16, border: `1px solid ${T.border}`, overflow: 'hidden' }}>
            <div style={{ padding: '16px 20px', borderBottom: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: T.fontHead, fontSize: 15, fontWeight: 700, color: T.textPrimary }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.purple }}>psychology</span>
                AI Training Recommendations
              </div>
              <Link href="/enterprise/ai-training" style={{ fontSize: 12, color: T.purple, fontWeight: 600, textDecoration: 'none' }}>View All →</Link>
            </div>
            <div style={{ padding: '16px 20px' }}>
              {aiRecommendations.map((rec, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '14px 0', borderBottom: i < aiRecommendations.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: T.purpleDim, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.purple }}>{rec.icon}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary }}>{rec.title}</span>
                      <span style={{ fontSize: 10, fontWeight: 700, color: rec.priorityColor, background: rec.priorityColor + '15', borderRadius: 10, padding: '1px 7px' }}>{rec.priority}</span>
                    </div>
                    <p style={{ fontSize: 12, color: T.textMuted, lineHeight: 1.5, margin: 0 }}>{rec.detail}</p>
                    <button style={{ marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 4, padding: '5px 12px', background: T.purpleDim, border: `1px solid ${T.purple}30`, borderRadius: 6, fontSize: 11, color: T.purple, fontWeight: 600, cursor: 'pointer' }}>
                      Take Action
                      <span className="material-symbols-outlined" style={{ fontSize: 13 }}>arrow_forward</span>
                    </button>
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
