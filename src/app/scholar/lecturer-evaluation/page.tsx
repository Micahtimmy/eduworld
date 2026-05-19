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

const CRITERIA = [
  { label: 'Teaching Clarity', desc: 'Ability to explain complex concepts with clarity and structure.' },
  { label: 'Availability', desc: 'Responsiveness outside class, office hour presence, and communication.' },
  { label: 'Material Quality', desc: 'Relevance, structure, and up-to-date nature of course materials.' },
  { label: 'Assessment Fairness', desc: 'Clarity of marking rubrics and consistency in grading.' },
]

const PENDING_COURSES = [
  { code: 'PHYS401', name: 'Advanced Quantum Mechanics', lecturer: 'Dr. Chen Wei', deadline: 'Jun 5' },
  { code: 'CS501', name: 'Advanced Algorithms', lecturer: 'Dr. James Ridley', deadline: 'Jun 5' },
  { code: 'MATH301', name: 'Linear Algebra', lecturer: 'Dr. Sofia Reyes', deadline: 'Jun 7' },
]

export default function LecturerEvaluationPage() {
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
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Lecturer Evaluation & Reviews</h1>
          <p style={{ color: '#424750', fontSize: 14, marginTop: 6 }}>Provide constructive, anonymous feedback for your Term 2 2025 courses.</p>
        </div>

        {/* Pending Evaluations Banner */}
        <div style={{ background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: 14, padding: '16px 20px', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 14 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 24, color: '#d97706', flexShrink: 0 }}>pending_actions</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: '#78350f', marginBottom: 2 }}>3 Evaluations Pending</div>
            <div style={{ fontSize: 12, color: '#92400e' }}>All evaluations are anonymous and close on June 7, 2025.</div>
          </div>
          <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
            {PENDING_COURSES.map((c, i) => (
              <span key={i} style={{ background: '#fef3c7', color: '#d97706', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>{c.code}</span>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }}>
          <div>
            {/* Quantitative Assessment */}
            <div style={cardStyle}>
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 4 }}>Quantitative Assessment</div>
                <div style={{ fontSize: 13, color: '#424750' }}>Rate the following criteria on a scale of 1 (Poor) to 5 (Excellent).</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {CRITERIA.map((c, i) => (
                  <div key={i}>
                    <div style={{ marginBottom: 10 }}>
                      <div style={{ fontWeight: 700, fontSize: 14, color: '#191c20', marginBottom: 2 }}>{c.label}</div>
                      <div style={{ fontSize: 12, color: '#424750' }}>{c.desc}</div>
                    </div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      {[1, 2, 3, 4, 5].map(n => (
                        <button key={n} style={{ flex: 1, padding: '10px 0', borderRadius: 10, fontWeight: 700, fontSize: 15, border: `1px solid ${n === 4 ? '#003f7a' : '#c2c6d2'}`, background: n === 4 ? '#003f7a' : '#f9f9ff', color: n === 4 ? '#fff' : '#424750', cursor: 'pointer' }}>
                          {n}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Constructive Suggestions */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <span style={{ fontSize: 18 }}>✏️</span>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20' }}>Constructive Suggestions</div>
              </div>
              <textarea
                placeholder="Open form feedback — share your thoughts on how to improve the course experience..."
                style={{ width: '100%', height: 120, padding: '12px', borderRadius: 10, border: '1px solid #c2c6d2', fontSize: 13, outline: 'none', resize: 'none', fontFamily: '"Inter", system-ui, sans-serif', marginBottom: 14, boxSizing: 'border-box' }}
              />
              <div style={{ display: 'flex', gap: 10 }}>
                <button style={{ flex: 1, background: '#f9f9ff', color: '#424750', border: '1px solid #c2c6d2', borderRadius: 8, padding: '10px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Save Draft</button>
                <button style={{ flex: 2, background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '10px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Submit Evaluation Anonymously</button>
              </div>
            </div>

            {/* Pending Courses List */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Pending Evaluations</div>
              {PENDING_COURSES.map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 12, background: '#f9f9ff', border: '1px solid #eef0f4', marginBottom: 10 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: '#e8f0fe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#003f7a' }}>school</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: '#191c20' }}>{c.name}</div>
                    <div style={{ fontSize: 12, color: '#424750' }}>{c.code} · {c.lecturer}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end', flexShrink: 0 }}>
                    <span style={{ background: '#fee2e2', color: '#dc2626', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>Closes {c.deadline}</span>
                    <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 6, padding: '4px 10px', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>Evaluate</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lecturer Profile */}
          <div>
            <div style={cardStyle}>
              <div style={{ textAlign: 'center', marginBottom: 16 }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#e8f0fe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 20, color: '#003f7a', margin: '0 auto 10px' }}>CW</div>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 16, color: '#191c20' }}>Dr. Chen Wei</div>
                <div style={{ fontSize: 12, color: '#424750', marginBottom: 8 }}>Department of Physics</div>
                <span style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>PHYS401: Quantum Mechanics</span>
              </div>
              <div style={{ borderTop: '1px solid #eef0f4', paddingTop: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                  <span style={{ color: '#10B981', fontSize: 14, fontWeight: 700 }}>✦</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#191c20' }}>Teaching Style Insights</span>
                </div>
                <p style={{ fontSize: 12, color: '#424750', lineHeight: 1.6, marginBottom: 10 }}>Strong theoretical rigor. Students consistently highlight comprehensive slide decks and thorough problem walkthroughs.</p>
                <span style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>Highly Theoretical</span>
              </div>
            </div>

            {/* Evaluation Tips */}
            <div style={{ background: '#f0fdf4', border: '1px solid #a7f3d0', borderRadius: 14, padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span style={{ color: '#10B981', fontSize: 18, fontWeight: 700 }}>✦</span>
                <span style={{ fontWeight: 600, fontSize: 14, color: '#191c20' }}>Evaluation Tips</span>
              </div>
              <ul style={{ fontSize: 12, color: '#424750', lineHeight: 1.8, paddingLeft: 16, margin: 0 }}>
                <li>Be specific and constructive — mention examples</li>
                <li>Focus on teaching effectiveness, not personal style</li>
                <li>All responses are fully anonymous</li>
                <li>Results are shared with faculty after term ends</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
