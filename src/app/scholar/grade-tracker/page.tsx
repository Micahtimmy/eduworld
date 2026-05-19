'use client'

import { useState } from 'react'
import Link from 'next/link'

const NAV = [
  { icon: 'dashboard', label: 'Dashboard', href: '/scholar/command-center' },
  { icon: 'school', label: 'My Courses', href: '/scholar/course-registration' },
  { icon: 'biotech', label: 'Practicals', href: '/scholar/lab-tracking' },
  { icon: 'chat_bubble', label: 'Feedback', href: '/scholar/feedback-tracker', active: true },
  { icon: 'calendar_month', label: 'Schedule', href: '/scholar/exam-schedule' },
  { icon: 'history_edu', label: 'Academic Records', href: '/scholar/grades' },
]

const SUBMISSIONS = [
  {
    icon: 'science',
    iconBg: '#e8f0fe',
    iconColor: '#003f7a',
    title: 'Thermodynamics Lab Report',
    courseDate: 'PHY301 · Submitted Oct 12',
    score: '92%',
    scoreColor: '#10B981',
    trendIcon: 'trending_up',
    trendLabel: '+4% vs avg',
    trendColor: '#10B981',
    instructorQuote: 'Excellent data analysis. The error propagation was handled flawlessly. Next time, expand slightly on the conclusion\'s real-world applications.',
    instructor: 'Dr. H. Vance',
    tags: ['Data Analysis', 'AI Reviewed'],
    acknowledged: false,
  },
  {
    icon: 'code',
    iconBg: '#f3e8ff',
    iconColor: '#7c3aed',
    title: 'Data Structures Midterm',
    courseDate: 'CSC205 · Submitted Oct 05',
    score: '85%',
    scoreColor: '#003f7a',
    trendIcon: 'trending_flat',
    trendLabel: 'Avg score',
    trendColor: '#9e9e9e',
    instructorQuote: 'Solid understanding of tree traversals. You lost points on the dynamic programming section due to an unoptimized base case.',
    instructor: 'Dr. K. Mensah',
    tags: ['Algorithms'],
    acknowledged: true,
  },
]

const GRADE_POINTS = [80, 85, 75, 92]
const GRADE_LABELS = ['W1', 'W2', 'W3', 'W4']

const navItemBase: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 12,
  padding: '10px 12px', borderRadius: 8,
  color: 'rgba(255,255,255,0.75)', fontSize: 14, fontWeight: 500,
  cursor: 'pointer', marginBottom: 2, textDecoration: 'none',
}
const cardBase: React.CSSProperties = {
  background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2',
  padding: 24, boxShadow: '0 1px 4px rgba(0,0,0,0.05)', marginBottom: 20,
}

export default function GradeTrackerPage() {
  const [ackMap, setAckMap] = useState<Record<number, boolean>>({ 0: false, 1: true })

  const maxPoint = Math.max(...GRADE_POINTS)

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f9f9ff', fontFamily: '"Inter", system-ui, sans-serif' }}>
      {/* Sidebar */}
      <aside style={{ width: 260, minWidth: 260, background: '#003f7a', height: '100vh', position: 'fixed', top: 0, left: 0, display: 'flex', flexDirection: 'column', zIndex: 40 }}>
        <div style={{ padding: '24px 20px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ color: '#fff', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 20 }}>EduWorld</div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, marginTop: 2 }}>Scholar Tier</div>
        </div>
        <nav style={{ flex: 1, padding: '12px 12px', overflowY: 'auto' }}>
          {NAV.map(item => (
            <Link key={item.href} href={item.href} style={{ ...navItemBase, ...(item.active ? { background: 'rgba(255,255,255,0.15)', borderLeft: '3px solid #fff', paddingLeft: 9, color: '#fff' } : {}) }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </Link>
          ))}
          <div style={{ marginTop: 12 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.4)', borderRadius: 8, padding: '10px 12px', color: '#10B981', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
              <span style={{ fontSize: 16 }}>✦</span> View AI Insights
            </button>
          </div>
        </nav>
        <div style={{ padding: '12px 12px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Link href="/settings" style={navItemBase}><span className="material-symbols-outlined" style={{ fontSize: 20 }}>settings</span>Settings</Link>
          <Link href="/support" style={navItemBase}><span className="material-symbols-outlined" style={{ fontSize: 20 }}>help</span>Support</Link>
        </div>
      </aside>

      {/* Main */}
      <main style={{ marginLeft: 260, flex: 1, padding: 32 }}>
        {/* Topbar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28, background: '#fff', borderRadius: 12, padding: '12px 20px', border: '1px solid #c2c6d2', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#424750' }}>search</span>
            <input placeholder="Search feedback…" style={{ border: 'none', outline: 'none', fontSize: 14, color: '#191c20', background: 'transparent', width: 180 }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ background: '#f0fdf4', color: '#10B981', fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>GPA: 3.85</span>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#424750', cursor: 'pointer' }}>notifications</span>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#424750', cursor: 'pointer' }}>account_balance_wallet</span>
          </div>
        </div>

        {/* Page Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 28, color: '#191c20', margin: '0 0 6px' }}>Feedback Tracker</h1>
            <p style={{ color: '#424750', fontSize: 14, margin: 0 }}>Review recent assessments and monitor your academic trajectory.</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#fff', border: '1px solid #c2c6d2', borderRadius: 9, padding: '9px 16px', color: '#191c20', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>filter_list</span>
              Filter
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#fff', border: '1px solid #c2c6d2', borderRadius: 9, padding: '9px 16px', color: '#191c20', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span>
              Export Report
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 24 }}>
          <div>
            {/* Submissions */}
            <div>
              {SUBMISSIONS.map((s, idx) => (
                <div key={idx} style={cardBase}>
                  <div style={{ display: 'flex', gap: 14, marginBottom: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: s.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 22, color: s.iconColor }}>{s.icon}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 16, color: '#191c20', marginBottom: 3 }}>{s.title}</div>
                      <div style={{ fontSize: 12, color: '#424750' }}>{s.courseDate}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 24, color: s.scoreColor }}>{s.score}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'flex-end' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 14, color: s.trendColor }}>{s.trendIcon}</span>
                        <span style={{ fontSize: 11, color: s.trendColor, fontWeight: 600 }}>{s.trendLabel}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div style={{ padding: '12px 14px', borderRadius: 10, background: '#f9f9ff', border: '1px solid #eef0f4', marginBottom: 12 }}>
                    <p style={{ fontSize: 13, color: '#424750', lineHeight: 1.55, margin: '0 0 6px', fontStyle: 'italic' }}>
                      &ldquo;{s.instructorQuote}&rdquo;
                    </p>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#424750' }}>— {s.instructor}</span>
                  </div>

                  {/* Tags + Action */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', gap: 6 }}>
                      {s.tags.map((t, ti) => (
                        <span key={ti} style={{ background: t === 'AI Reviewed' ? '#f0fdf4' : '#e8f0fe', color: t === 'AI Reviewed' ? '#10B981' : '#003f7a', fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 99, display: 'flex', alignItems: 'center', gap: 3 }}>
                          {t === 'AI Reviewed' && <span style={{ fontSize: 11 }}>✦</span>}
                          {t}
                        </span>
                      ))}
                    </div>
                    {ackMap[idx] ? (
                      <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, fontWeight: 600, color: '#10B981' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>check_circle</span>
                        Acknowledged
                      </span>
                    ) : (
                      <button
                        onClick={() => setAckMap(prev => ({ ...prev, [idx]: true }))}
                        style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}
                      >
                        Acknowledge Feedback
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Grade Trend Chart */}
            <div style={cardBase}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 16, color: '#191c20' }}>Grade Trend</div>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#424750' }}>more_horiz</span>
                </button>
              </div>

              {/* Simple bar chart */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, height: 120, padding: '0 4px', marginBottom: 8 }}>
                {GRADE_POINTS.map((point, i) => {
                  const pct = (point / maxPoint) * 100
                  const isLast = i === GRADE_POINTS.length - 1
                  return (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: isLast ? '#10B981' : '#424750' }}>{point}%</div>
                      <div style={{ width: '100%', height: `${pct}%`, background: isLast ? '#10B981' : '#003f7a', borderRadius: '4px 4px 0 0', minHeight: 8, opacity: isLast ? 1 : 0.6 }} />
                    </div>
                  )
                })}
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                {GRADE_LABELS.map((l, i) => (
                  <div key={i} style={{ flex: 1, textAlign: 'center', fontSize: 11, color: '#424750', fontWeight: 500 }}>{l}</div>
                ))}
              </div>
            </div>

            {/* AI Insight */}
            <div style={{ background: 'linear-gradient(135deg, #f0fdf4, #ecfdf5)', border: '1px solid #a7f3d0', borderRadius: 14, padding: 22, boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span style={{ fontSize: 18, color: '#10B981' }}>✦</span>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 15, color: '#065f46' }}>EduWorld AI Insight</div>
              </div>
              <p style={{ fontSize: 13, color: '#065f46', lineHeight: 1.55, marginBottom: 16 }}>
                You show consistent strength in <strong>Quantitative Analysis</strong>. Your recurring gap is in <strong>Theoretical Documentation</strong> — expanding your conclusion sections would raise your average by an estimated 3–5%.
              </p>
              <button style={{ width: '100%', background: '#10B981', color: '#fff', border: 'none', borderRadius: 9, padding: '11px', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>
                Generate Study Plan
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
