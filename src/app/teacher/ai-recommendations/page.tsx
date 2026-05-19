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
  teal: '#00897B',
  tealLight: '#e0f2f1',
  purple: '#7c3aed',
  purpleLight: '#ede9fe',
  error: '#E53935',
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
  { icon: 'psychology', label: 'AI Recommendations', href: '/teacher/ai-recommendations', active: true },
  { icon: 'live_tv', label: 'Live Classroom', href: '/teacher/live-classroom' },
  { icon: 'calendar_month', label: 'Calendar', href: '/teacher/calendar' },
  { icon: 'inbox', label: 'Inbox', href: '/teacher/inbox' },
]

const interventionStudents = [
  {
    name: 'Julianna Drabek',
    initials: 'JD',
    tags: [
      { label: 'Lags in Geometry', color: '#F59E0B', bg: '#fef3c7' },
      { label: 'Top 5% Visual Learner', color: '#00897B', bg: '#e0f2f1' },
    ],
    aiIcon: 'psychology',
    aiLabel: 'AI-SUGGESTED PATH: Visual Spatial Reinforcement',
    aiText: 'Assign interactive diagram-based exercises and visual proofs for geometric concepts. Replace text-heavy problems with annotated figure activities to leverage spatial learning strength.',
    avatarColor: '#7c3aed',
  },
  {
    name: 'Amir Mansoor',
    initials: 'AM',
    tags: [
      { label: 'Accelerated Pace', color: '#003f7a', bg: '#e8f0fe' },
      { label: 'Advanced Logic', color: '#10B981', bg: '#d1fae5' },
    ],
    aiIcon: 'bolt',
    aiLabel: 'ENRICHMENT SUGGESTION: Calculus Foundations Preview',
    aiText: 'This student has demonstrated mastery of all Algebra II benchmarks 3 weeks ahead of schedule. Introduce limits and derivatives preview modules to maintain engagement and challenge.',
    avatarColor: '#003f7a',
  },
  {
    name: 'Priya Nair',
    initials: 'PN',
    tags: [
      { label: 'Below Average — Statistics', color: '#E53935', bg: '#fef2f2' },
      { label: 'Strong in Algebra', color: '#10B981', bg: '#d1fae5' },
    ],
    aiIcon: 'school',
    aiLabel: 'INTERVENTION PATH: Statistics Remediation',
    aiText: 'Data shows consistent low scores on probability and statistics units. Recommend targeted micro-lesson sequence with visual data representations and real-world data sets.',
    avatarColor: '#F59E0B',
  },
]

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

export default function AIRecommendationsPage() {
  const [selectedClass, setSelectedClass] = useState('AP Mathematics - Section B Algebra Fundamentals')

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />

      <main style={{ flex: 1, overflowY: 'auto', padding: 32 }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: 13, color: T.textMuted, marginBottom: 12 }}>
          <Link href="/teacher/dashboard" style={{ color: T.textMuted, textDecoration: 'none' }}>Teacher</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: T.textPrimary }}>Recommendation Engine</span>
        </div>

        {/* Page Title */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 24 }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 26, fontWeight: 800, color: T.textPrimary, margin: '0 0 6px' }}>
              AI Recommendation Engine
            </h1>
            <p style={{ fontSize: 14, color: T.textMuted, margin: 0 }}>
              Personalised intervention paths and enrichment suggestions for each student, powered by real-time learning data.
            </p>
          </div>
          <select
            value={selectedClass}
            onChange={e => setSelectedClass(e.target.value)}
            style={{
              padding: '10px 16px', background: T.surface, border: `1px solid ${T.border}`,
              borderRadius: 20, fontSize: 13, color: T.textPrimary, fontFamily: T.fontBody,
              outline: 'none', cursor: 'pointer', fontWeight: 500,
            }}
          >
            <option>AP Mathematics - Section B Algebra Fundamentals</option>
            <option>Biology 101 - Period 2</option>
            <option>World History - Section 3</option>
          </select>
        </div>

        {/* High-Priority Interventions */}
        <div style={{
          background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14,
          padding: 24, marginBottom: 20,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.xp }}>auto_awesome</span>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 17, color: T.textPrimary }}>High-Priority Interventions</div>
            </div>
            <span style={{
              fontSize: 12, fontWeight: 600, color: T.textMuted,
              background: T.bg, borderRadius: 20, padding: '4px 10px', border: `1px solid ${T.border}`,
            }}>Updated 5m ago</span>
          </div>
          <p style={{ fontSize: 14, color: T.textMuted, marginBottom: 20 }}>AI detected 3 students requiring immediate resource adjustment.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {interventionStudents.map((student, i) => (
              <div key={i} style={{
                border: `1px solid ${T.border}`, borderRadius: 12, padding: 18,
                background: T.bg,
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: '50%', background: student.avatarColor,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff', fontWeight: 700, fontSize: 14, flexShrink: 0,
                    }}>{student.initials}</div>
                    <div>
                      <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 15, color: T.textPrimary }}>{student.name}</div>
                      <div style={{ display: 'flex', gap: 6, marginTop: 4, flexWrap: 'wrap' }}>
                        {student.tags.map((tag, j) => (
                          <span key={j} style={{
                            fontSize: 11, fontWeight: 600, color: tag.color, background: tag.bg,
                            borderRadius: 20, padding: '3px 8px',
                          }}>{tag.label}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button style={{
                      padding: '7px 14px', background: T.surface, border: `1px solid ${T.border}`,
                      borderRadius: 8, fontSize: 12, color: T.textPrimary, cursor: 'pointer',
                      fontFamily: T.fontBody, fontWeight: 500,
                    }}>Modify</button>
                    <button style={{
                      padding: '7px 14px', background: T.primary, border: 'none',
                      borderRadius: 8, fontSize: 12, color: '#fff', cursor: 'pointer',
                      fontFamily: T.fontBody, fontWeight: 600,
                    }}>Approve Path</button>
                  </div>
                </div>
                <div style={{
                  background: T.surface, border: `1px solid ${T.ai}30`, borderRadius: 10,
                  padding: '12px 14px', borderLeft: `3px solid ${T.ai}`,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.ai }}>{student.aiIcon}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: T.ai, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{student.aiLabel}</span>
                  </div>
                  <p style={{ fontSize: 13, color: T.textMuted, margin: 0, lineHeight: 1.55 }}>{student.aiText}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Grid: 3 columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 20 }}>
          {/* Cohort Performance */}
          <div style={{
            background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 20,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.primary }}>analytics</span>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 14, color: T.textPrimary }}>Cohort Performance</div>
            </div>
            <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 28, color: T.ai, marginBottom: 4 }}>+15%</div>
            <div style={{ fontSize: 13, color: T.textMuted, marginBottom: 14 }}>Retention increase this month</div>
            <div style={{ marginBottom: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: T.textMuted, marginBottom: 4 }}>
                <span>Target Completion</span>
                <span style={{ fontWeight: 600, color: T.textPrimary }}>75%</span>
              </div>
              <div style={{ background: '#e5e7eb', borderRadius: 4, height: 8 }}>
                <div style={{ width: '75%', height: '100%', background: T.primary, borderRadius: 4 }} />
              </div>
            </div>
          </div>

          {/* Student Flow Status */}
          <div style={{
            background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 20,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.teal }}>people</span>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 14, color: T.textPrimary }}>Student Flow Status</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 14 }}>
              {[
                { label: 'On Track', value: '18', color: T.ai },
                { label: 'Modified Path', value: '7', color: T.xp },
                { label: 'Awaiting Review', value: '3', color: T.error },
              ].map(s => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 22, color: s.color }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: T.textMuted, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <Link href="/teacher/student-groups" style={{
              fontSize: 13, color: T.primary, fontWeight: 600, textDecoration: 'none',
              display: 'flex', alignItems: 'center', gap: 4,
            }}>
              View All Students
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
            </Link>
          </div>

          {/* Model Precision */}
          <div style={{
            background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 20,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.ai }}>verified</span>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 14, color: T.textPrimary }}>Model Precision</div>
            </div>
            <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 36, color: T.textPrimary, marginBottom: 4 }}>94%</div>
            <div style={{ fontSize: 13, color: T.textMuted, marginBottom: 14 }}>Recommendation accuracy this term</div>
            <div style={{
              background: T.aiLight, borderRadius: 8, padding: '8px 12px',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.ai }}>trending_up</span>
              <span style={{ fontSize: 12, color: T.ai, fontWeight: 600 }}>+2.3% from last month</span>
            </div>
          </div>
        </div>

        {/* Bottom Row: Global Resource Library + EduWorld Gold Upsell */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {/* Global Resource Library */}
          <div style={{
            background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 20,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.primary }}>library_books</span>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 14, color: T.textPrimary }}>Global Resource Library</div>
            </div>
            <p style={{ fontSize: 13, color: T.textMuted, marginBottom: 14, lineHeight: 1.5 }}>
              12 new trending math resources curated by the AI engine based on your current cohort's needs.
            </p>
            <Link href="/teacher/content-access" style={{
              fontSize: 13, color: T.primary, fontWeight: 600, textDecoration: 'none',
              display: 'flex', alignItems: 'center', gap: 4,
            }}>
              Browse Recommended
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
            </Link>
          </div>

          {/* EduWorld Gold Upsell */}
          <div style={{
            background: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
            border: `1px solid ${T.xp}40`, borderRadius: 14, padding: 20,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.xp }}>workspace_premium</span>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 14, color: T.textPrimary }}>EduWorld Gold</div>
            </div>
            <p style={{ fontSize: 13, color: T.textMuted, marginBottom: 14, lineHeight: 1.5 }}>
              Unlock unlimited AI recommendations, advanced cohort analytics, and priority model updates.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{
                padding: '8px 16px', background: T.xp, border: 'none',
                borderRadius: 8, fontSize: 12, color: '#fff', cursor: 'pointer',
                fontFamily: T.fontBody, fontWeight: 700,
              }}>Go Premium</button>
              <button style={{
                padding: '8px 16px', background: 'transparent', border: `1px solid ${T.xp}`,
                borderRadius: 8, fontSize: 12, color: T.xp, cursor: 'pointer',
                fontFamily: T.fontBody, fontWeight: 500,
              }}>Nudge (Preview)</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
