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
  xp: '#F59E0B',
  xpLight: '#fef3c7',
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
  { icon: 'school', label: 'Learning Hub', href: '/teacher/classes' },
  { icon: 'analytics', label: 'Analytics', href: '/teacher/student-insights' },
  { icon: 'trending_up', label: 'Workforce ROI', href: '/teacher/workforce-roi' },
  { icon: 'psychology', label: 'Skills Gap', href: '/teacher/skills-gap' },
  { icon: 'sync', label: 'Grade Sync', href: '/teacher/grade-sync', active: true },
  { icon: 'auto_awesome', label: 'AI Insights', href: '/teacher/ai-recommendations' },
  { icon: 'help', label: 'Help Center', href: '/teacher/help' },
  { icon: 'logout', label: 'Logout', href: '/sign-out' },
]

interface Submission {
  initials: string
  name: string
  midterm: string
  finalExam: string
  overall: string
  grade: string
  status: 'Verified' | 'Discrepancy'
  color: string
  flagged: boolean
}

const submissions: Submission[] = [
  { initials: 'AA', name: 'Avery Adams', midterm: '88%', finalExam: '94%', overall: '91.4%', grade: 'A', status: 'Verified', color: '#003f7a', flagged: false },
  { initials: 'BM', name: 'Blake Miller', midterm: '74%', finalExam: '76%', overall: '75.2%', grade: 'C+', status: 'Verified', color: '#7c3aed', flagged: false },
  { initials: 'CH', name: 'Casey Huang', midterm: '92%', finalExam: '45%', overall: '64.0%', grade: 'D', status: 'Discrepancy', color: '#E53935', flagged: true },
  { initials: 'DT', name: 'Dana Torres', midterm: '81%', finalExam: '83%', overall: '82.0%', grade: 'B', status: 'Verified', color: '#F59E0B', flagged: false },
  { initials: 'EO', name: 'Eli Okafor', midterm: '67%', finalExam: '95%', overall: '78.4%', grade: 'C+', status: 'Discrepancy', color: '#10B981', flagged: true },
]

const gradeData = [
  { grade: 'F', count: 3, color: '#E53935', pct: 3 },
  { grade: 'D', count: 8, color: '#F97316', pct: 8 },
  { grade: 'C', count: 22, color: '#F59E0B', pct: 22 },
  { grade: 'B', count: 48, color: '#10B981', pct: 48 },
  { grade: 'A', count: 43, color: '#003f7a', pct: 43 },
]
const maxCount = Math.max(...gradeData.map(g => g.count))

function Sidebar() {
  return (
    <aside style={{
      width: 260, minHeight: '100vh', background: T.surface,
      borderRight: `1px solid ${T.border}`, display: 'flex',
      flexDirection: 'column', padding: '24px 0', flexShrink: 0,
    }}>
      <div style={{ padding: '0 20px 24px', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: T.primary }}>EduWorld</div>
        <div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>Curriculum Grading Review Reports</div>
      </div>
      <div style={{ padding: '12px 20px 12px', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {['search', 'notifications', 'auto_awesome', 'account_circle'].map(icon => (
            <span key={icon} className="material-symbols-outlined" style={{ fontSize: 20, color: T.textMuted, cursor: 'pointer' }}>{icon}</span>
          ))}
        </div>
      </div>
      <div style={{ padding: '12px 20px 16px', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 38, height: 38, borderRadius: '50%', background: T.primary,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontWeight: 700, fontSize: 13,
          }}>SJ</div>
          <div>
            <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 13, color: T.textPrimary }}>Dr. Sarah Jenkins</div>
            <div style={{ fontSize: 11, color: T.textMuted }}>EduWorld Global</div>
          </div>
        </div>
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
      <div style={{
        padding: '12px 20px', margin: '0 12px 12px', borderRadius: 10,
        background: T.primaryLight, display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.primary }}>verified_user</span>
        <span style={{ fontSize: 12, fontWeight: 600, color: T.primary }}>Institutional Bridge Interface</span>
      </div>
    </aside>
  )
}

export default function GradeSyncPage() {
  const [syncDone, setSyncDone] = useState(false)

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />

      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>

        {/* Page Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 24 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 28, fontWeight: 800, color: T.textPrimary, margin: '0 0 6px' }}>
              Final Grade Review & Sync
            </h1>
            <p style={{ fontSize: 14, color: T.textMuted, margin: 0 }}>
              Reviewing AP World History - Section B · 124 students · Academic Year 2025–2026
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{
              padding: '10px 18px', background: T.surface, border: `1px solid ${T.border}`,
              borderRadius: 8, fontSize: 13, color: T.textPrimary, cursor: 'pointer',
              fontFamily: T.fontBody, fontWeight: 500,
            }}>Save Draft</button>
            <button style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px',
              background: T.primary, border: 'none', borderRadius: 8,
              fontSize: 13, color: '#fff', cursor: 'pointer', fontFamily: T.fontBody, fontWeight: 700,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>sync</span>
              Sign & Submit Sync
            </button>
          </div>
        </div>

        {/* Panel 1 — Grade Distribution */}
        <div style={{
          background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14,
          padding: 24, marginBottom: 20,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary }}>Grade Distribution</div>
              <span style={{
                background: T.xpLight, color: T.xp, fontSize: 11, fontWeight: 700,
                borderRadius: 20, padding: '3px 10px', border: `1px solid ${T.xp}30`,
              }}>Amber Target met</span>
            </div>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.primary }}>auto_awesome</span>
          </div>

          {/* Bar Chart */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, height: 100, marginBottom: 8, paddingBottom: 8, borderBottom: `1px solid ${T.border}` }}>
            {gradeData.map(g => (
              <div key={g.grade} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: T.textMuted }}>{g.count}</span>
                <div style={{
                  width: '100%', background: g.color, borderRadius: '4px 4px 0 0',
                  height: `${(g.count / maxCount) * 80}px`, transition: 'height 0.3s',
                }} />
                <span style={{ fontSize: 13, fontWeight: 700, color: T.textPrimary }}>{g.grade}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 16 }}>
            {[
              { label: 'Class Average', value: '84.2%' },
              { label: 'Median Grade', value: 'B+' },
              { label: 'Pass Rate', value: '94.8%' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 28, color: T.textPrimary }}>{s.value}</div>
                <div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Panel 2 — AI Discrepancy Analysis */}
        <div style={{
          background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14,
          padding: 24, marginBottom: 20,
        }}>
          <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary, marginBottom: 16 }}>
            AI Discrepancy Analysis
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {/* Critical */}
            <div style={{
              border: `1px solid ${T.error}30`, borderRadius: 12, padding: 16,
              background: T.errorLight, borderLeft: `4px solid ${T.error}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{
                    background: T.error, color: '#fff', fontSize: 11, fontWeight: 700,
                    borderRadius: 20, padding: '2px 10px',
                  }}>Critical</span>
                  <span style={{ fontWeight: 600, fontSize: 14, color: T.textPrimary }}>Anomalous Improvement</span>
                </div>
                <div style={{ display: 'flex' }}>
                  {submissions.filter(s => s.flagged).slice(0, 2).map((s, i) => (
                    <div key={s.name} style={{
                      width: 28, height: 28, borderRadius: '50%', background: s.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff', fontWeight: 700, fontSize: 10,
                      marginLeft: i === 0 ? 0 : -8, border: '2px solid #fff',
                    }}>{s.initials}</div>
                  ))}
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%', background: T.textMuted,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontWeight: 700, fontSize: 10,
                    marginLeft: -8, border: '2px solid #fff',
                  }}>+1</div>
                </div>
              </div>
              <p style={{ fontSize: 13, color: T.textPrimary, margin: '0 0 12px', lineHeight: 1.5 }}>
                3 students showed &gt;40% jump from Midterm to Final Exam. Manual audit recommended before submitting to institution records.
              </p>
              <div style={{ display: 'flex', gap: 8 }}>
                <button style={{
                  padding: '7px 14px', background: T.surface, border: `1px solid ${T.error}`,
                  borderRadius: 8, fontSize: 12, color: T.error, cursor: 'pointer',
                  fontFamily: T.fontBody, fontWeight: 600,
                }}>Message Student</button>
                <button style={{
                  padding: '7px 14px', background: T.error, border: 'none',
                  borderRadius: 8, fontSize: 12, color: '#fff', cursor: 'pointer',
                  fontFamily: T.fontBody, fontWeight: 600,
                }}>Resolve All Flags</button>
              </div>
            </div>

            {/* Warning */}
            <div style={{
              border: `1px solid ${T.xp}30`, borderRadius: 12, padding: 16,
              background: T.xpLight, borderLeft: `4px solid ${T.xp}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <span style={{
                  background: T.xp, color: '#fff', fontSize: 11, fontWeight: 700,
                  borderRadius: 20, padding: '2px 10px',
                }}>Warning</span>
                <span style={{ fontWeight: 600, fontSize: 14, color: T.textPrimary }}>Missing Data Points</span>
              </div>
              <p style={{ fontSize: 13, color: T.textPrimary, margin: 0, lineHeight: 1.5 }}>
                Liam O&apos;Connell is missing 2 lab submissions. Current calculated grade is <strong>&apos;I&apos;</strong> (Incomplete) and cannot be synced until resolved.
              </p>
            </div>
          </div>
        </div>

        {/* Panel 3 — Portal Readiness */}
        <div style={{
          background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14,
          padding: 24, marginBottom: 20,
        }}>
          <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary, marginBottom: 16 }}>
            Portal Readiness
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { icon: 'family_history', portal: 'Parent Portal', status: 'Scheduled: 5:00 PM', ready: true },
              { icon: 'admin_panel_settings', portal: 'Admin Ledger', status: 'Pending Signature', ready: false },
              { icon: 'school', portal: 'Student Records', status: 'Ready to Sync', ready: true },
            ].map(p => (
              <div key={p.portal} style={{
                display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px',
                background: T.bg, borderRadius: 10, border: `1px solid ${T.border}`,
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10, background: T.primaryLight,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.primary }}>{p.icon}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: T.textPrimary }}>{p.portal}</div>
                  <div style={{ fontSize: 12, color: T.textMuted }}>{p.status}</div>
                </div>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: p.ready ? T.ai : T.textMuted }}>
                  {p.ready ? 'check_circle' : 'radio_button_unchecked'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Panel 4 — Recent Submissions Audit */}
        <div style={{
          background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14,
          padding: 24, marginBottom: 20,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 16, color: T.textPrimary }}>Recent Submissions Audit</div>
            <button style={{
              fontSize: 13, color: T.primary, fontWeight: 600, background: 'none',
              border: 'none', cursor: 'pointer', fontFamily: T.fontBody,
              textDecoration: 'underline',
            }}>View All 124</button>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: T.bg }}>
                  {['Student', 'Midterm', 'Final Exam', 'Overall', 'Status', ''].map(col => (
                    <th key={col} style={{
                      padding: '10px 14px', textAlign: 'left', fontSize: 11, fontWeight: 700,
                      color: T.textMuted, textTransform: 'uppercase', letterSpacing: '0.05em',
                      borderBottom: `1px solid ${T.border}`,
                    }}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {submissions.map((sub, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${T.border}`, background: sub.flagged ? T.errorLight : T.surface }}>
                    <td style={{ padding: '12px 14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{
                          width: 30, height: 30, borderRadius: '50%', background: sub.color,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: '#fff', fontWeight: 700, fontSize: 11, flexShrink: 0,
                        }}>{sub.initials}</div>
                        <span style={{ fontSize: 14, fontWeight: 500, color: T.textPrimary }}>{sub.name}</span>
                      </div>
                    </td>
                    <td style={{ padding: '12px 14px', fontSize: 14, color: T.textMuted }}>{sub.midterm}</td>
                    <td style={{ padding: '12px 14px', fontSize: 14, color: T.textMuted }}>{sub.finalExam}</td>
                    <td style={{ padding: '12px 14px' }}>
                      <div style={{ fontSize: 14, fontWeight: 700, color: T.textPrimary }}>{sub.overall}</div>
                      <div style={{ fontSize: 11, color: T.textMuted }}>{sub.grade}</div>
                    </td>
                    <td style={{ padding: '12px 14px' }}>
                      <span style={{
                        background: sub.status === 'Verified' ? T.aiLight : T.errorLight,
                        color: sub.status === 'Verified' ? T.ai : T.error,
                        fontSize: 12, fontWeight: 700, borderRadius: 20, padding: '4px 10px',
                      }}>{sub.status}</span>
                    </td>
                    <td style={{ padding: '12px 14px' }}>
                      {sub.flagged && (
                        <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.textMuted, cursor: 'pointer' }}>draw</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Final Approval Footer */}
        {!syncDone ? (
          <div style={{
            background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14,
            padding: 24, textAlign: 'center',
          }}>
            <p style={{ fontSize: 14, color: T.textMuted, marginBottom: 16, lineHeight: 1.6 }}>
              By authorizing this sync, you confirm that all grades have been reviewed, discrepancies resolved, and the data is accurate for institutional reporting. This action is logged and compliant with regional data governance standards.
            </p>
            <button
              onClick={() => setSyncDone(true)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 32px',
                background: T.primary, border: 'none', borderRadius: 10,
                fontSize: 15, color: '#fff', cursor: 'pointer', fontFamily: T.fontHead, fontWeight: 700,
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>cloud_sync</span>
              AUTHORIZE GLOBAL SYNC
            </button>
          </div>
        ) : (
          <div style={{
            background: T.aiLight, border: `1px solid ${T.ai}40`, borderRadius: 14,
            padding: 32, textAlign: 'center',
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: 48, color: T.ai, display: 'block', marginBottom: 8 }}>cloud_done</span>
            <h2 style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 22, color: T.textPrimary, marginBottom: 8 }}>Sync Successful</h2>
            <p style={{ fontSize: 14, color: T.textMuted, marginBottom: 16 }}>
              Grades are now published to the Parent Portal, Admin Ledger, and Student Records.
            </p>
            <Link href="/teacher/dashboard" style={{
              fontSize: 14, color: T.primary, fontWeight: 600, textDecoration: 'none',
            }}>← Back to Dashboard</Link>
          </div>
        )}
      </main>
    </div>
  )
}
