'use client'

import Link from 'next/link'

const sidebarStyle: React.CSSProperties = { width: 260, minWidth: 260, background: '#003f7a', height: '100vh', position: 'fixed', top: 0, left: 0, display: 'flex', flexDirection: 'column', zIndex: 40 }
const navItemStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, color: 'rgba(255,255,255,0.75)', fontSize: 14, fontWeight: 500, cursor: 'pointer', marginBottom: 2, textDecoration: 'none' }
const cardStyle: React.CSSProperties = { background: '#fff', borderRadius: 14, border: '1px solid #c2c6d2', padding: 24, boxShadow: '0 1px 4px rgba(0,0,0,0.05)', marginBottom: 20 }

const NAV = [
  { icon: 'dashboard', label: 'Dashboard', href: '/scholar/command-center' },
  { icon: 'school', label: 'Courses', href: '/scholar/course-registration', active: true },
  { icon: 'science', label: 'Research', href: '/scholar/research-workspace' },
  { icon: 'menu_book', label: 'Library', href: '/scholar/library' },
  { icon: 'work', label: 'Careers', href: '/scholar/careers' },
  { icon: 'people', label: 'Community', href: '/scholar/networking' },
]

const SUBMISSIONS = [
  {
    title: 'Thermodynamics Lab Report',
    course: 'PHY301',
    submitted: 'May 12',
    score: 92,
    trend: '+4% vs avg',
    trendUp: true,
    instructor: 'Dr. H. Vance',
    tag: 'Data Analysis',
    aiReviewed: true,
    feedback: 'Excellent data analysis. The error propagation was handled flawlessly. Next time, expand slightly on theoretical implications in your conclusion section.',
    acknowledged: false,
  },
  {
    title: 'Data Structures Midterm',
    course: 'CS501',
    submitted: 'May 5',
    score: 85,
    trend: 'At avg score',
    trendUp: false,
    instructor: null,
    tag: 'Algorithms',
    aiReviewed: false,
    feedback: 'Solid understanding of tree traversals. You lost points on the dynamic programming section — review memoization techniques before the final.',
    acknowledged: true,
  },
  {
    title: 'Quantum Mechanics Problem Set 4',
    course: 'PHYS401',
    submitted: 'Apr 28',
    score: 96,
    trend: '+8% vs avg',
    trendUp: true,
    instructor: 'Dr. Chen Wei',
    tag: 'Quantum Theory',
    aiReviewed: true,
    feedback: 'Outstanding work on the Bell inequality proofs. Your derivation of the CHSH inequality was the most elegant in the class.',
    acknowledged: true,
  },
]

const GRADE_TREND = [40, 65, 55, 80, 70, 85, 92]
const DAYS = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7']

export default function FeedbackTrackerPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f9f9ff', fontFamily: '"Inter", system-ui, sans-serif' }}>
      <aside style={sidebarStyle}>
        <div style={{ padding: '24px 20px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ color: '#fff', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 20 }}>EduWorld</div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, marginTop: 2 }}>Scholar Portal</div>
        </div>
        <nav style={{ flex: 1, padding: '12px 12px', overflowY: 'auto' }}>
          {NAV.map(item => (
            <Link key={item.href} href={item.href} style={{ ...navItemStyle, ...(item.active ? { background: 'rgba(255,255,255,0.15)', borderLeft: '3px solid #fff', paddingLeft: 9, color: '#fff' } : {}) as React.CSSProperties }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div style={{ padding: '12px 12px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Link href="/settings" style={navItemStyle}><span className="material-symbols-outlined" style={{ fontSize: 20 }}>settings</span>Settings</Link>
        </div>
      </aside>

      <main style={{ marginLeft: 260, flex: 1, padding: 32 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Feedback & Grade Tracker</h1>
            <p style={{ color: '#424750', fontSize: 14, marginTop: 6 }}>Review recent assessments and monitor your academic trajectory.</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button style={{ background: '#fff', color: '#424750', border: '1px solid #c2c6d2', borderRadius: 8, padding: '9px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>filter_list</span> Filter
            </button>
            <button style={{ background: '#fff', color: '#424750', border: '1px solid #c2c6d2', borderRadius: 8, padding: '9px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span> Export Report
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }}>
          {/* Submissions */}
          <div>
            <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Recent Submissions</div>
            {SUBMISSIONS.map((s, i) => (
              <div key={i} style={cardStyle}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 28, color: '#003f7a', flexShrink: 0 }}>description</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
                      <span style={{ fontWeight: 700, fontSize: 14, color: '#191c20' }}>{s.title}</span>
                      <span style={{ background: '#f9f9ff', color: '#424750', fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 99, border: '1px solid #c2c6d2' }}>{s.course}</span>
                      <span style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 99 }}>{s.tag}</span>
                      {s.aiReviewed && (
                        <span style={{ background: '#f0fdf4', color: '#10B981', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>✦ AI Reviewed</span>
                      )}
                    </div>
                    <div style={{ fontSize: 12, color: '#424750' }}>Submitted {s.submitted}{s.instructor ? ` · ${s.instructor}` : ''}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 28, color: '#191c20' }}>{s.score}%</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'flex-end', marginTop: 2 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 14, color: s.trendUp ? '#10B981' : '#424750' }}>{s.trendUp ? 'trending_up' : 'trending_flat'}</span>
                      <span style={{ fontSize: 11, fontWeight: 600, color: s.trendUp ? '#10B981' : '#424750' }}>{s.trend}</span>
                    </div>
                  </div>
                </div>
                <div style={{ borderLeft: '3px solid #e8f0fe', paddingLeft: 12, marginBottom: 12 }}>
                  <p style={{ fontSize: 13, color: '#424750', fontStyle: 'italic', lineHeight: 1.6 }}>&ldquo;{s.feedback}&rdquo;</p>
                </div>
                <button style={{ background: s.acknowledged ? '#f9f9ff' : '#003f7a', color: s.acknowledged ? '#424750' : '#fff', border: s.acknowledged ? '1px solid #c2c6d2' : 'none', borderRadius: 6, padding: '6px 14px', fontWeight: 600, fontSize: 12, cursor: s.acknowledged ? 'default' : 'pointer' }} disabled={s.acknowledged}>
                  {s.acknowledged ? '✓ Acknowledged' : 'Acknowledge Feedback'}
                </button>
              </div>
            ))}
          </div>

          {/* Right Panel */}
          <div>
            {/* Grade Trend Chart */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20', marginBottom: 16 }}>Grade Trend</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 100, marginBottom: 8 }}>
                {GRADE_TREND.map((val, i) => (
                  <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <div style={{ width: '100%', borderRadius: '4px 4px 0 0', background: i === GRADE_TREND.length - 1 ? '#003f7a' : '#e8f0fe', height: `${val}%` }} />
                    <span style={{ fontSize: 10, color: '#424750' }}>{DAYS[i]}</span>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 11, color: '#10B981', fontWeight: 600 }}>↑ Upward trend — improving week over week</div>
            </div>

            {/* AI Insight */}
            <div style={{ background: '#f0fdf4', border: '1px solid #a7f3d0', borderRadius: 14, padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span style={{ color: '#10B981', fontSize: 18, fontWeight: 700 }}>✦</span>
                <span style={{ fontWeight: 600, fontSize: 14, color: '#191c20' }}>EduWorld AI Insight</span>
              </div>
              <p style={{ fontSize: 13, color: '#424750', lineHeight: 1.6, marginBottom: 12 }}>
                You are excelling in <strong style={{ color: '#191c20' }}>Quantitative Analysis</strong>. Recurring gaps detected in <strong style={{ color: '#191c20' }}>Theoretical Documentation</strong> — consider adding detailed methodology sections.
              </p>
              <button style={{ background: '#10B981', color: '#fff', border: 'none', borderRadius: 8, padding: '9px', fontWeight: 600, fontSize: 13, cursor: 'pointer', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <span>✦</span> Generate Study Plan
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
