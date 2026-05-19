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
  purple: '#7c3aed',
  purpleLight: '#ede9fe',
  error: '#E53935',
  success: '#16a34a',
  successLight: '#dcfce7',
  textPrimary: '#191c20',
  textMuted: '#6B7280',
  border: '#e2e5ea',
  fontHead: '"Plus Jakarta Sans", system-ui, sans-serif',
  fontBody: '"Inter", system-ui, sans-serif',
}

const sidebarItems = [
  { icon: 'dashboard', label: 'Dashboard', href: '/teacher/dashboard' },
  { icon: 'school', label: 'Classrooms', href: '/teacher/classes' },
  { icon: 'menu_book', label: 'Lesson Plans', href: '/teacher/ai-lesson-plan' },
  { icon: 'forum', label: 'Communications', href: '/teacher/inbox' },
  { icon: 'grade', label: 'Grading', href: '/teacher/grade-queue' },
  { icon: 'rate_review', label: 'Student Feedback', href: '/teacher/student-feedback', active: true },
]

interface FeedbackItem {
  initials: string
  name: string
  subject: string
  type: string
  statusLabel: string
  statusColor: string
  statusBg: string
  excerpt: string
  tags: string[]
  extra?: string
  rating?: number
  avatarColor: string
}

const feedbackItems: FeedbackItem[] = [
  {
    initials: 'MS',
    name: 'Marcus Sterling',
    subject: 'Applied Mathematics',
    type: 'Query',
    statusLabel: 'Unanswered',
    statusColor: T.xp,
    statusBg: T.xpLight,
    excerpt: "I'm struggling to understand the integration of third-order differential equations when the boundary conditions involve complex imaginary components. Could you walk through...",
    tags: ['AI'],
    avatarColor: T.primary,
  },
  {
    initials: 'SC',
    name: 'Sophia Chen',
    subject: 'Practical: Chemical Synthesis',
    type: 'Evaluation',
    statusLabel: 'High Praise',
    statusColor: T.success,
    statusBg: T.successLight,
    excerpt: "The practical session on exothermic reactions was incredibly well-organized. The step-by-step safety briefing before the experiment made me feel confident throughout...",
    tags: [],
    extra: 'Acknowledged by Department Head · 2h ago',
    rating: 5,
    avatarColor: T.purple,
  },
]

const recentActivity = [
  { icon: 'check', text: 'You responded to Alex Rivera', time: '15 mins ago' },
  { icon: 'history_edu', text: 'Commentary published for Lab Group B', time: '1 hour ago' },
  { icon: 'person_add', text: 'New Query from Elena Rossi', time: '3 hours ago' },
]

function Sidebar() {
  return (
    <aside style={{
      width: 260, minHeight: '100vh', background: T.surface,
      borderRight: `1px solid ${T.border}`, display: 'flex',
      flexDirection: 'column', padding: '24px 0', flexShrink: 0,
    }}>
      <div style={{ padding: '0 20px 16px', borderBottom: `1px solid ${T.border}` }}>
        <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 20, color: T.primary, marginBottom: 12 }}>EduWorld Admin</div>
        <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 12 }}>Educator Portal</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
          <div style={{
            width: 40, height: 40, borderRadius: '50%', background: T.primary,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontWeight: 700, fontSize: 14,
          }}>MJ</div>
          <div>
            <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 13, color: T.textPrimary }}>Mr. Johnson</div>
            <div style={{ fontSize: 11, color: T.textMuted }}>Physics · Biology · History</div>
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
      <div style={{ padding: '8px 12px 8px' }}>
        {[
          { icon: 'library_books', label: 'Resources', href: '/teacher/content-access' },
          { icon: 'contact_support', label: 'Support', href: '/teacher/help' },
        ].map(item => (
          <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px',
              borderRadius: 8, marginBottom: 2, color: T.textMuted,
              fontFamily: T.fontBody, fontSize: 14,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </div>
          </Link>
        ))}
      </div>
    </aside>
  )
}

export default function StudentFeedbackPage() {
  const [dismissed, setDismissed] = useState<number[]>([])

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: T.bg, fontFamily: T.fontBody }}>
      <Sidebar />

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>

        {/* Top Header Bar */}
        <div style={{
          background: T.surface, borderBottom: `1px solid ${T.border}`,
          padding: '14px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <h1 style={{ fontFamily: T.fontHead, fontSize: 22, fontWeight: 800, color: T.textPrimary, margin: 0 }}>
              Student Feedback Loop
            </h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: T.bg, borderRadius: 8, padding: '8px 12px', border: `1px solid ${T.border}` }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16, color: T.textMuted }}>search</span>
              <input placeholder="Search feedback…" style={{
                border: 'none', outline: 'none', fontSize: 13, color: T.textPrimary,
                fontFamily: T.fontBody, width: 160, background: 'transparent',
              }} />
            </div>
            <button style={{
              display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px',
              background: T.purpleLight, border: `1px solid ${T.purple}30`, borderRadius: 8,
              fontSize: 13, color: T.purple, cursor: 'pointer', fontFamily: T.fontBody, fontWeight: 600,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>auto_awesome</span>
              AI Lesson Generator
            </button>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.textMuted, cursor: 'pointer' }}>notifications</span>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.textMuted, cursor: 'pointer' }}>help</span>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.textMuted, cursor: 'pointer' }}>settings</span>
          </div>
        </div>

        <div style={{ display: 'flex', flex: 1 }}>
          {/* Main Content */}
          <div style={{ flex: 1, padding: 28 }}>

            {/* Summary Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 28 }}>
              {/* Card 1 */}
              <div style={{
                background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 20,
                borderLeft: `4px solid ${T.xp}`,
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div>
                    <span style={{
                      background: T.error, color: '#fff', fontSize: 10, fontWeight: 700,
                      borderRadius: 4, padding: '2px 6px', marginBottom: 6, display: 'inline-block',
                    }}>Priority</span>
                    <div style={{ fontSize: 13, color: T.textMuted }}>Unresolved Evaluations</div>
                  </div>
                  <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.xp }}>rate_review</span>
                </div>
                <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 32, color: T.textPrimary }}>42</div>
                <div style={{ fontSize: 12, color: T.textMuted, marginTop: 4 }}>Pending review for Advanced Physics Lab</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 8 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 14, color: T.ai }}>trending_up</span>
                  <span style={{ fontSize: 12, color: T.ai, fontWeight: 600 }}>+12% this week</span>
                </div>
              </div>

              {/* Card 2 */}
              <div style={{
                background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 20,
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div style={{ fontSize: 13, color: T.textMuted }}>Active Academic Queries</div>
                  <span className="material-symbols-outlined" style={{ fontSize: 22, color: T.primary }}>question_answer</span>
                </div>
                <div style={{ fontFamily: T.fontHead, fontWeight: 800, fontSize: 32, color: T.textPrimary }}>15</div>
                <div style={{ fontSize: 12, color: T.textMuted, marginTop: 4 }}>65% response rate target reached</div>
                <div style={{ marginTop: 10 }}>
                  <div style={{ background: '#e5e7eb', borderRadius: 4, height: 6 }}>
                    <div style={{ width: '65%', height: '100%', background: T.primary, borderRadius: 4 }} />
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div style={{
                background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 20,
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div style={{ fontSize: 13, color: T.textMuted }}>AI Sentiment Summary</div>
                  <div style={{ display: 'flex', gap: 4 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.purple }}>psychology</span>
                    <span className="material-symbols-outlined" style={{ fontSize: 20, color: T.ai }}>auto_awesome</span>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: T.textPrimary, lineHeight: 1.55, marginBottom: 12 }}>
                  Overall student sentiment is <strong>positive (78%)</strong>. Key themes: lesson pacing, practical sessions praised, homework load flagged by 22% of respondents.
                </p>
                <Link href="/teacher/student-insights" style={{
                  fontSize: 13, color: T.primary, fontWeight: 600, textDecoration: 'none',
                  display: 'flex', alignItems: 'center', gap: 4,
                }}>
                  View Detailed Insights
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Feedback Queue */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 18, color: T.textPrimary }}>Feedback Queue</div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button style={{
                  display: 'flex', alignItems: 'center', gap: 6, padding: '7px 12px',
                  background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8,
                  fontSize: 12, color: T.textMuted, cursor: 'pointer', fontFamily: T.fontBody,
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>filter_list</span> Filter
                </button>
                <button style={{
                  display: 'flex', alignItems: 'center', gap: 6, padding: '7px 12px',
                  background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8,
                  fontSize: 12, color: T.textMuted, cursor: 'pointer', fontFamily: T.fontBody,
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>sort</span> Sort: Newest
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {feedbackItems.filter((_, i) => !dismissed.includes(i)).map((item, i) => (
                <div key={i} style={{
                  background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 20,
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: '50%', background: item.avatarColor,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#fff', fontWeight: 700, fontSize: 14, flexShrink: 0,
                      }}>{item.initials}</div>
                      <div>
                        <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 15, color: T.textPrimary }}>{item.name}</div>
                        <div style={{ fontSize: 12, color: T.textMuted }}>{item.subject} · {item.type}</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{
                        background: item.statusBg, color: item.statusColor, fontSize: 12, fontWeight: 700,
                        borderRadius: 20, padding: '4px 10px',
                      }}>{item.statusLabel}</span>
                      {item.tags.map(tag => (
                        <span key={tag} style={{
                          background: T.purpleLight, color: T.purple, fontSize: 11, fontWeight: 700,
                          borderRadius: 4, padding: '2px 6px',
                        }}>{tag}</span>
                      ))}
                      <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.textMuted, cursor: 'pointer' }}>more_horiz</span>
                    </div>
                  </div>

                  {item.rating !== undefined && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 8 }}>
                      {Array.from({ length: 5 }).map((_, j) => (
                        <span key={j} className="material-symbols-outlined" style={{ fontSize: 18, color: T.xp }}>star</span>
                      ))}
                      <span style={{ fontSize: 13, color: T.textMuted, marginLeft: 4 }}>5.0 / 5.0</span>
                    </div>
                  )}

                  <p style={{ fontSize: 14, color: T.textMuted, lineHeight: 1.6, marginBottom: item.extra ? 8 : 14 }}>
                    {item.excerpt}
                  </p>

                  {item.extra && (
                    <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 14 }}>{item.extra}</div>
                  )}

                  <div style={{ display: 'flex', gap: 8 }}>
                    <button
                      onClick={() => setDismissed(prev => [...prev, i])}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px',
                        background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8,
                        fontSize: 12, color: T.textMuted, cursor: 'pointer', fontFamily: T.fontBody,
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>delete</span>
                      Archive
                    </button>
                    {item.type === 'Query' ? (
                      <button style={{
                        display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px',
                        background: T.primary, border: 'none', borderRadius: 8,
                        fontSize: 12, color: '#fff', cursor: 'pointer', fontFamily: T.fontBody, fontWeight: 700,
                      }}>
                        Respond Now
                      </button>
                    ) : (
                      <button style={{
                        display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px',
                        background: T.primary, border: 'none', borderRadius: 8,
                        fontSize: 12, color: '#fff', cursor: 'pointer', fontFamily: T.fontBody, fontWeight: 600,
                      }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>comment</span>
                        Add Commentary
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {/* Empty State */}
              {feedbackItems.every((_, i) => dismissed.includes(i)) && (
                <div style={{
                  background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14,
                  padding: 40, textAlign: 'center',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 48, color: T.border, display: 'block', marginBottom: 12 }}>inventory</span>
                  <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 18, color: T.textPrimary, marginBottom: 8 }}>That&apos;s it for now!</div>
                  <p style={{ fontSize: 14, color: T.textMuted, marginBottom: 16 }}>All feedback has been addressed. Check back later or review your monthly analytics.</p>
                  <Link href="/teacher/student-insights" style={{
                    fontSize: 13, color: T.primary, fontWeight: 600, textDecoration: 'none',
                  }}>Review Monthly Analytics →</Link>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <div style={{
            width: 280, background: T.surface, borderLeft: `1px solid ${T.border}`,
            padding: '24px 20px', flexShrink: 0,
          }}>
            {/* Term Response Goal */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 14, color: T.textPrimary, marginBottom: 14 }}>Term Response Goal</div>
              <div style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: T.textMuted, marginBottom: 4 }}>
                  <span>Individual Response Rate</span>
                  <span style={{ fontWeight: 700, color: T.primary }}>88%</span>
                </div>
                <div style={{ background: '#e5e7eb', borderRadius: 4, height: 8 }}>
                  <div style={{ width: '88%', height: '100%', background: T.ai, borderRadius: 4 }} />
                </div>
              </div>
              <div style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: T.textMuted, marginBottom: 4 }}>
                  <span>Department Average</span>
                  <span style={{ fontWeight: 700, color: T.textMuted }}>72%</span>
                </div>
                <div style={{ background: '#e5e7eb', borderRadius: 4, height: 8 }}>
                  <div style={{ width: '72%', height: '100%', background: T.textMuted, borderRadius: 4 }} />
                </div>
              </div>
              <div style={{
                background: T.xpLight, borderRadius: 10, padding: '10px 12px',
                display: 'flex', alignItems: 'flex-start', gap: 8,
                border: `1px solid ${T.xp}30`,
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.xp, flexShrink: 0 }}>military_tech</span>
                <p style={{ fontSize: 12, color: T.textPrimary, margin: 0, lineHeight: 1.5 }}>
                  You are currently in the <strong>top 5%</strong> of responsive educators this term!
                </p>
              </div>
            </div>

            {/* AI Commentary Assist */}
            <div style={{
              background: T.bg, border: `1px solid ${T.border}`, borderRadius: 12,
              padding: 16, marginBottom: 24,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: T.ai }}>auto_fix_high</span>
                <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 13, color: T.textPrimary }}>AI Commentary Assist</div>
              </div>
              <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 12, lineHeight: 1.5 }}>
                Let AI draft a response based on the feedback context and your past reply patterns.
              </p>
              <button style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '10px', background: T.ai, border: 'none', borderRadius: 8,
                fontSize: 13, color: '#fff', cursor: 'pointer', fontFamily: T.fontBody, fontWeight: 700,
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>magic_button</span>
                Generate Draft
              </button>
            </div>

            {/* Recent Responses */}
            <div>
              <div style={{ fontFamily: T.fontHead, fontWeight: 700, fontSize: 14, color: T.textPrimary, marginBottom: 14 }}>Recent Responses</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {recentActivity.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: '50%', background: T.primaryLight,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 14, color: T.primary }}>{item.icon}</span>
                    </div>
                    <div>
                      <div style={{ fontSize: 12, color: T.textPrimary, lineHeight: 1.4 }}>{item.text}</div>
                      <div style={{ fontSize: 11, color: T.textMuted, marginTop: 2 }}>{item.time}</div>
                    </div>
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
