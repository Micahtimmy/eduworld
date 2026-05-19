'use client'
import { useState } from 'react'
import Link from 'next/link'

const T = {
  bg: '#f4f6f9',
  surface: '#ffffff',
  primary: '#003f7a',
  primaryLight: '#e8f0fe',
  ai: '#10B981',
  aiLight: '#d1fae5',
  teal: '#00897B',
  tealLight: '#e0f2f1',
  purple: '#7c4dff',
  purpleLight: '#ede9fe',
  xp: '#FFC107',
  xpLight: '#fff8e1',
  error: '#E53935',
  errorLight: '#fef2f2',
  textPrimary: '#191c20',
  textMuted: '#6B7280',
  border: '#e2e5ea',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
}

const sidebarItems = [
  { icon: 'dashboard', label: 'Dashboard', href: '/teacher/dashboard' },
  { icon: 'school', label: 'My Classes', href: '/teacher/classes' },
  { icon: 'assignment', label: 'Assignments', href: '/teacher/assignments' },
  { icon: 'analytics', label: 'Analytics', href: '/teacher/student-insights' },
  { icon: 'people', label: 'Students', href: '/teacher/student-groups' },
  { icon: 'auto_awesome', label: 'AI Lesson Plan', href: '/teacher/ai-lesson-plan' },
  { icon: 'psychology', label: 'AI Recommendations', href: '/teacher/ai-recommendations' },
  { icon: 'live_tv', label: 'Live Classroom', href: '/teacher/live-classroom' },
  { icon: 'lock', label: 'Content Access', href: '/teacher/content-access', active: true },
  { icon: 'calendar_month', label: 'Calendar', href: '/teacher/calendar' },
]

type Permission = 'allow' | 'deny' | 'partial'

interface MatrixRow {
  icon: string
  label: string
  teachers: Permission
  students: Permission
  parents: Permission
}

const matrixRows: MatrixRow[] = [
  { icon: 'menu_book', label: 'Lesson Plan Drafts', teachers: 'allow', students: 'deny', parents: 'deny' },
  { icon: 'quiz', label: 'Upcoming Assessments', teachers: 'allow', students: 'deny', parents: 'deny' },
  { icon: 'analytics', label: 'Performance Analytics', teachers: 'allow', students: 'partial', parents: 'partial' },
  { icon: 'auto_awesome', label: 'AI Feedback Logs', teachers: 'allow', students: 'deny', parents: 'deny' },
  { icon: 'grade', label: 'Graded Submissions', teachers: 'allow', students: 'allow', parents: 'allow' },
  { icon: 'forum', label: 'Class Discussions', teachers: 'allow', students: 'allow', parents: 'deny' },
  { icon: 'assignment', label: 'Assignment Rubrics', teachers: 'allow', students: 'allow', parents: 'partial' },
  { icon: 'event_note', label: 'Attendance Records', teachers: 'allow', students: 'partial', parents: 'allow' },
]

const recentAdjustments = [
  { time: 'Today, 10:24 AM', title: 'Draft Restriction Applied', detail: 'Science Dept parent role — Lesson Plan Drafts hidden', icon: 'lock' },
  { time: 'Yesterday, 4:45 PM', title: 'Global PII Shield Active', detail: 'Automated privacy masking enabled for student feedback logs', icon: 'shield' },
  { time: 'Oct 24, 9:15 AM', title: 'New Teacher Role Added', detail: 'Assistant teacher added with limited read-only privileges', icon: 'person_add' },
]

function PermissionCell({ perm }: { perm: Permission }) {
  if (perm === 'allow') {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.ai }}>check_circle</span>
      </div>
    )
  }
  if (perm === 'deny') {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.error }}>block</span>
      </div>
    )
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.xp }}>remove_circle</span>
    </div>
  )
}

function Sidebar() {
  return (
    <aside style={{
      width: 260, minHeight: '100vh', background: T.surface,
      borderRight: `1px solid ${T.border}`, display: 'flex',
      flexDirection: 'column', padding: '24px 0', flexShrink: 0,
    }}>
      <div style={{ padding: '0 20px 24px', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: T.primary }}>EduWorld</div>
        <span style={{
          display: 'inline-block', marginTop: 4, fontSize: 11, fontWeight: 600,
          color: T.primary, background: T.primaryLight, borderRadius: 6, padding: '2px 8px',
        }}>Teacher</span>
      </div>
      <nav style={{ flex: 1, padding: '16px 12px' }}>
        {sidebarItems.map(item => (
          <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px',
              borderRadius: 8, marginBottom: 2, cursor: 'pointer',
              background: item.active ? '#f3f3f9' : 'transparent',
              borderLeft: item.active ? `3px solid ${T.primary}` : '3px solid transparent',
              color: item.active ? T.primary : T.textMuted,
              fontFamily: T.fontBody, fontWeight: item.active ? 600 : 400, fontSize: 14,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
      <div style={{ padding: '0 12px' }}>
        <Link href="/settings" style={{ textDecoration: 'none' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px',
            borderRadius: 8, color: T.textMuted, fontFamily: T.fontBody, fontSize: 14,
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>settings</span>
            Settings
          </div>
        </Link>
      </div>
    </aside>
  )
}

export default function ContentAccessPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />

      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        {/* Top Header Bar */}
        <div style={{
          background: T.surface, borderRadius: 14, border: `1px solid ${T.border}`,
          padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: 28,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.textMuted }}>search</span>
            <input placeholder="Search content or roles…" style={{
              border: 'none', outline: 'none', fontSize: 14, color: T.textPrimary,
              fontFamily: T.fontBody, width: 200, background: 'transparent',
            }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <button style={{
              display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px',
              background: T.purpleLight, border: `1px solid ${T.purple}40`, borderRadius: 8,
              fontSize: 13, color: T.purple, cursor: 'pointer', fontFamily: T.fontBody, fontWeight: 600,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>auto_awesome</span>
              AI Lesson Generator
            </button>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.textMuted, cursor: 'pointer' }}>notifications</span>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.textMuted, cursor: 'pointer' }}>help</span>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.textMuted, cursor: 'pointer' }}>settings</span>
            <div style={{
              width: 36, height: 36, borderRadius: '50%', background: T.primary,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontWeight: 700, fontSize: 14,
            }}>MJ</div>
          </div>
        </div>

        {/* Page Title */}
        <div style={{ marginBottom: 24 }}>
          <h1 style={{ fontFamily: T.fontHead, fontSize: 28, fontWeight: 800, color: T.textPrimary, margin: '0 0 6px' }}>
            Access Control
          </h1>
        </div>

        {/* Curriculum Visibility Matrix Card */}
        <div style={{
          background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14,
          padding: 24, marginBottom: 20,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
            <div>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary, marginBottom: 4 }}>
                Curriculum Visibility Matrix
              </div>
              <p style={{ fontSize: 13, color: T.textMuted, margin: 0 }}>
                Manage exactly what data each role can access across the EduWorld ecosystem.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button style={{
                padding: '8px 16px', background: T.surface, border: `1px solid ${T.border}`,
                borderRadius: 8, fontSize: 13, color: T.textPrimary, cursor: 'pointer',
                fontFamily: T.fontBody, fontWeight: 500,
              }}>Export Logs</button>
              <button style={{
                padding: '8px 16px', background: T.primary, border: 'none',
                borderRadius: 8, fontSize: 13, color: '#fff', cursor: 'pointer',
                fontFamily: T.fontBody, fontWeight: 600,
              }}>Save Changes</button>
            </div>
          </div>

          {/* View Toggle */}
          <div style={{ display: 'flex', gap: 4, marginBottom: 20, marginTop: 16 }}>
            {(['grid', 'list'] as const).map(mode => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                style={{
                  padding: '6px 16px', borderRadius: 6, fontSize: 12, fontWeight: 600,
                  cursor: 'pointer', fontFamily: T.fontBody, border: 'none',
                  background: viewMode === mode ? T.primary : T.bg,
                  color: viewMode === mode ? '#fff' : T.textMuted,
                  textTransform: 'capitalize',
                }}
              >{mode === 'grid' ? 'Grid View' : 'Detailed List'}</button>
            ))}
          </div>

          {/* Permission Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: T.bg }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 12, fontWeight: 700, color: T.textMuted, textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: `1px solid ${T.border}` }}>
                    Curriculum Component
                  </th>
                  {['Teachers', 'Students', 'Parents'].map(col => (
                    <th key={col} style={{ padding: '12px 16px', textAlign: 'center', fontSize: 12, fontWeight: 700, color: T.textMuted, textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: `1px solid ${T.border}`, width: 120 }}>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrixRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${T.border}`, background: i % 2 === 0 ? T.surface : T.bg }}>
                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.textMuted }}>{row.icon}</span>
                        <span style={{ fontSize: 14, color: T.textPrimary, fontWeight: 500 }}>{row.label}</span>
                      </div>
                    </td>
                    <td style={{ padding: '12px 16px' }}><PermissionCell perm={row.teachers} /></td>
                    <td style={{ padding: '12px 16px' }}><PermissionCell perm={row.students} /></td>
                    <td style={{ padding: '12px 16px' }}><PermissionCell perm={row.parents} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div style={{ display: 'flex', gap: 20, marginTop: 16, padding: '12px 0', borderTop: `1px solid ${T.border}` }}>
            {[
              { icon: 'check_circle', color: T.ai, label: 'Full Access' },
              { icon: 'block', color: T.error, label: 'No Access' },
              { icon: 'remove_circle', color: T.xp, label: 'Partial Access' },
            ].map(l => (
              <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16, color: l.color }}>{l.icon}</span>
                <span style={{ fontSize: 12, color: T.textMuted }}>{l.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Audit Recommendation */}
        <div style={{
          background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14,
          padding: 20, marginBottom: 20, borderLeft: `4px solid ${T.purple}`,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.purple }}>bolt</span>
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.purple }}>auto_awesome</span>
            <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 15, color: T.textPrimary }}>AI Audit Recommendation</div>
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, color: T.purple, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>Privacy Optimization</div>
          <p style={{ fontSize: 14, color: T.textMuted, marginBottom: 16, lineHeight: 1.6 }}>
            Our AI detected that 14% of student feedback logs contain identifying personal data visible to parents. Applying auto-restriction will anonymise names and specific comments while preserving summary insights.
          </p>
          <button style={{
            display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px',
            background: T.purple, border: 'none', borderRadius: 8,
            fontSize: 13, color: '#fff', cursor: 'pointer', fontFamily: T.fontBody, fontWeight: 600,
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>shield</span>
            Apply Auto-Restriction
          </button>
        </div>

        {/* Bottom Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {/* Active User Summary */}
          <div style={{
            background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 20,
          }}>
            <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 15, color: T.textPrimary, marginBottom: 16 }}>Active User Summary</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 14 }}>
              {[
                { icon: 'person', label: 'Teachers', value: '1,240', color: T.primary },
                { icon: 'group', label: 'Students', value: '18,500', color: T.ai },
                { icon: 'family_restroom', label: 'Parents', value: '22,100', color: T.purple },
                { icon: 'sync', label: 'Sync Status', value: '94%', color: T.teal },
              ].map(s => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, background: s.color + '15',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 6px',
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18, color: s.color }}>{s.icon}</span>
                  </div>
                  <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 18, color: T.textPrimary }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: T.textMuted }}>{s.label}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: T.textMuted, margin: 0 }}>Curriculum data synced across all regions.</p>
          </div>

          {/* Recent Access Policy Adjustments */}
          <div style={{
            background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 20,
          }}>
            <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 15, color: T.textPrimary, marginBottom: 16 }}>Recent Access Policy Adjustments</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {recentAdjustments.map((adj, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: '50%', background: T.primaryLight,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.primary }}>{adj.icon}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: T.textPrimary }}>{adj.title}</div>
                    <div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>{adj.detail}</div>
                    <div style={{ fontSize: 11, color: T.textMuted, marginTop: 3 }}>{adj.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Preview Experience */}
        <div style={{
          background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 20, marginTop: 16,
        }}>
          <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 15, color: T.textPrimary, marginBottom: 16 }}>Preview Experience</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
            {[
              { icon: 'person', role: 'Teacher View', status: 'All Modules Visible', statusIcon: 'analytics', color: T.ai },
              { icon: 'group', role: 'Student View', status: '5 Items Restricted', statusIcon: 'visibility_off', color: T.xp },
              { icon: 'family_restroom', role: 'Parent View', status: 'Strict Guardrail Active', statusIcon: 'lock', color: T.error },
            ].map(p => (
              <div key={p.role} style={{
                border: `1px solid ${T.border}`, borderRadius: 10, padding: '16px',
                display: 'flex', flexDirection: 'column', gap: 10, cursor: 'pointer',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, background: p.color + '15',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 22, color: p.color }}>{p.icon}</span>
                </div>
                <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 14, color: T.textPrimary }}>{p.role}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16, color: p.color }}>{p.statusIcon}</span>
                  <span style={{ fontSize: 12, color: T.textMuted }}>{p.status}</span>
                </div>
                <button style={{
                  padding: '7px 12px', background: T.bg, border: `1px solid ${T.border}`,
                  borderRadius: 6, fontSize: 12, color: T.primary, cursor: 'pointer',
                  fontFamily: T.fontBody, fontWeight: 500,
                }}>Preview Role</button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
