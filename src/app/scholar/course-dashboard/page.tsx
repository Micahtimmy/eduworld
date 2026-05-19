'use client'

import Link from 'next/link'

const NAV = [
  { icon: 'dashboard', label: 'Dashboard', href: '/scholar/command-center', active: true },
  { icon: 'school', label: 'My Courses', href: '/scholar/course-registration' },
  { icon: 'biotech', label: 'Practicals', href: '/scholar/lab-tracking' },
  { icon: 'chat_bubble', label: 'Feedback', href: '/scholar/feedback-tracker' },
  { icon: 'calendar_month', label: 'Schedule', href: '/scholar/exam-schedule' },
  { icon: 'history_edu', label: 'Academic Records', href: '/scholar/grades' },
]

const COURSES = [
  { code: 'CS4012', name: 'Advanced Machine Learning', attendance: 94, ca: 88, attendanceColor: '#f59e0b' },
  { code: 'ENG305', name: 'Systems Architecture', attendance: 100, ca: 92, attendanceColor: '#10B981' },
  { code: 'MATH401', name: 'Real Analysis', attendance: 89, ca: 85, attendanceColor: '#f59e0b' },
  { code: 'PHYS301', name: 'Quantum Mechanics', attendance: 96, ca: 91, attendanceColor: '#10B981' },
]

const TIMELINE_STAGES = [
  { label: 'Orientation', done: true },
  { label: 'Mid-Terms', done: false, active: true },
  { label: 'Reading Week', done: false },
  { label: 'Finals', done: false },
]

const FEEDBACK = [
  {
    author: 'Prof. R. Vance',
    time: '2 days ago',
    course: 'CS4012 - Practical 3',
    quote: 'Excellent implementation of the neural network backpropagation. Code was clean and well-documented.',
    initials: 'RV',
    color: '#7c3aed',
  },
  {
    author: 'Dr. L. Chen',
    time: '1 week ago',
    course: 'ENG305 - Assignment 1',
    quote: 'Solid grasp of the architectural constraints. The proposed solution is viable, but consider the scaling implications more carefully.',
    initials: 'LC',
    color: '#003f7a',
  },
]

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

export default function CourseDashboardPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f9f9ff', fontFamily: '"Inter", system-ui, sans-serif' }}>
      {/* Sidebar */}
      <aside style={{ width: 260, minWidth: 260, background: '#003f7a', height: '100vh', position: 'fixed', top: 0, left: 0, display: 'flex', flexDirection: 'column', zIndex: 40 }}>
        <div style={{ padding: '24px 20px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ color: '#fff', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 20 }}>EduWorld</div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, marginTop: 2 }}>Scholar Tier · Academic Session 2024</div>
        </div>
        <div style={{ padding: '12px 20px 10px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, color: '#fff', flexShrink: 0 }}>AS</div>
            <div>
              <div style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>Amara Suleiman</div>
              <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 11 }}>GPA: 3.85 · Year 3</div>
            </div>
          </div>
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
            <input placeholder="Search courses, assignments…" style={{ border: 'none', outline: 'none', fontSize: 14, color: '#191c20', background: 'transparent', width: 200 }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ background: '#f0fdf4', color: '#10B981', fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>GPA: 3.85</span>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#424750', cursor: 'pointer' }}>notifications</span>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#424750', cursor: 'pointer' }}>account_balance_wallet</span>
          </div>
        </div>

        {/* Page Header */}
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 28, color: '#191c20', margin: '0 0 6px' }}>Semester Overview</h1>
          <p style={{ color: '#424750', fontSize: 14, margin: 0 }}>Track your academic progress, continuous assessments, and semester milestones.</p>
        </div>

        {/* Academic Timeline */}
        <div style={cardBase}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#003f7a' }}>timeline</span>
              <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 17, color: '#191c20' }}>Academic Timeline</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>Week 8 of 14</span>
              <span style={{ background: '#fef3c7', color: '#d97706', fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>Mid-Terms Active</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
            {TIMELINE_STAGES.map((stage, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', border: `3px solid ${stage.active ? '#003f7a' : stage.done ? '#10B981' : '#c2c6d2'}`, background: stage.active ? '#003f7a' : stage.done ? '#10B981' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 6 }}>
                    {stage.done && <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#fff' }}>check</span>}
                    {stage.active && <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#fff' }} />}
                  </div>
                  <span style={{ fontSize: 12, fontWeight: stage.active ? 700 : 500, color: stage.active ? '#003f7a' : '#424750', textAlign: 'center' }}>{stage.label}</span>
                </div>
                {i < TIMELINE_STAGES.length - 1 && (
                  <div style={{ flex: 1, height: 3, background: stage.done ? '#10B981' : '#eef0f4', borderRadius: 99, maxWidth: 80, margin: '0 4px', marginBottom: 20 }} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 24 }}>
          {/* Registered Courses */}
          <div>
            <div style={cardBase}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 17, color: '#191c20', marginBottom: 16 }}>Registered Courses</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {COURSES.map((c, i) => (
                  <Link key={i} href={`/scholar/course-detail?code=${c.code}`} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', borderRadius: 12, background: '#f9f9ff', border: '1px solid #eef0f4', textDecoration: 'none', transition: 'border-color 0.15s' }}>
                    <div style={{ width: 42, height: 42, borderRadius: 10, background: '#e8f0fe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 11, color: '#003f7a' }}>{c.code.substring(0, 2)}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 11, color: '#424750', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase' }}>{c.code}</div>
                      <div style={{ fontWeight: 600, fontSize: 15, color: '#191c20', marginTop: 2 }}>{c.name}</div>
                    </div>
                    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 16, color: c.attendanceColor }}>{c.attendance}%</div>
                        <div style={{ fontSize: 10, color: '#424750' }}>Attendance</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 16, color: '#003f7a' }}>{c.ca} / 100</div>
                        <div style={{ fontSize: 10, color: '#424750' }}>CA Score</div>
                      </div>
                      <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#c2c6d2' }}>chevron_right</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Lecturer Feedback */}
          <div>
            <div style={cardBase}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 17, color: '#191c20' }}>Lecturer Feedback</div>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#424750' }}>open_in_new</span>
                </button>
              </div>
              {/* AI Summary */}
              <div style={{ background: 'linear-gradient(135deg, #f0fdf4, #ecfdf5)', border: '1px solid #a7f3d0', borderRadius: 10, padding: '12px 14px', marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                  <span style={{ fontSize: 14, color: '#10B981' }}>✦</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#065f46' }}>EduWorld AI Summary</span>
                </div>
                <p style={{ fontSize: 13, color: '#065f46', lineHeight: 1.55, margin: 0 }}>
                  Your practical lab scores are consistently high. Focus attention on upcoming theoretical assignments to maintain your CA average.
                </p>
              </div>
              {FEEDBACK.map((f, i) => (
                <div key={i} style={{ padding: '14px 0', borderTop: '1px solid #eef0f4' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: f.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 11, color: '#fff', flexShrink: 0 }}>{f.initials}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: 13, color: '#191c20' }}>{f.author}</div>
                      <div style={{ fontSize: 11, color: '#424750' }}>{f.time}</div>
                    </div>
                    <span style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>{f.course}</span>
                  </div>
                  <p style={{ fontSize: 13, color: '#424750', lineHeight: 1.5, margin: 0, fontStyle: 'italic' }}>
                    &ldquo;{f.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
