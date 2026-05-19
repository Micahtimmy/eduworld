'use client'

import Link from 'next/link'

const NAV = [
  { icon: 'dashboard', label: 'Dashboard', href: '/scholar/command-center' },
  { icon: 'school', label: 'My Courses', href: '/scholar/course-registration', active: true },
  { icon: 'biotech', label: 'Practicals', href: '/scholar/lab-tracking' },
  { icon: 'chat_bubble', label: 'Feedback', href: '/scholar/feedback-tracker' },
  { icon: 'calendar_month', label: 'Schedule', href: '/scholar/exam-schedule' },
  { icon: 'history_edu', label: 'Academic Records', href: '/scholar/grades' },
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

export default function CourseDetailPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f9f9ff', fontFamily: '"Inter", system-ui, sans-serif' }}>
      {/* Sidebar */}
      <aside style={{ width: 260, minWidth: 260, background: '#003f7a', height: '100vh', position: 'fixed', top: 0, left: 0, display: 'flex', flexDirection: 'column', zIndex: 40 }}>
        <div style={{ padding: '24px 20px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#fff' }}>school</span>
            <div style={{ color: '#fff', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 18 }}>Scholar Tier</div>
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, background: '#fff', borderRadius: 12, padding: '12px 20px', border: '1px solid #c2c6d2', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#424750' }}>menu</span>
            </button>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#424750' }}>search</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ background: '#f0fdf4', color: '#10B981', fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>GPA: 3.85</span>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#424750', cursor: 'pointer' }}>notifications</span>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#424750', cursor: 'pointer' }}>account_balance_wallet</span>
          </div>
        </div>

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 20, fontSize: 13, color: '#424750' }}>
          <Link href="/scholar/course-registration" style={{ color: '#003f7a', fontWeight: 500, textDecoration: 'none' }}>My Courses</Link>
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chevron_right</span>
          <span style={{ fontWeight: 600, color: '#191c20' }}>EE-301</span>
        </div>

        {/* Course Header */}
        <div style={{ ...cardBase, background: 'linear-gradient(135deg, #003f7a 0%, #1e5799 100%)', border: 'none', marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>Core Module</span>
            <span className="material-symbols-outlined" style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>schedule</span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>Fall 2024</span>
          </div>
          <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 28, color: '#fff', margin: '0 0 8px' }}>Advanced Circuit Analysis</h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.55, margin: '0 0 20px', maxWidth: 560 }}>
            Comprehensive study of linear and non-linear circuit networks, Laplace transforms, and frequency response analysis.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 7, background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', borderRadius: 9, padding: '10px 18px', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>folder_open</span>
              Resources
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 7, background: '#10B981', border: 'none', color: '#fff', borderRadius: 9, padding: '10px 18px', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>play_circle</span>
              Resume Last Lecture
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
          <div>
            {/* Syllabus Progress */}
            <div style={cardBase}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#003f7a' }}>analytics</span>
                <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 17, color: '#191c20' }}>Syllabus Progress</span>
              </div>
              <div style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <span style={{ fontSize: 13, color: '#424750' }}>Modules Completed</span>
                  <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 16, color: '#003f7a' }}>68%</span>
                </div>
                <div style={{ height: 10, borderRadius: 99, background: '#eef0f4', overflow: 'hidden', marginBottom: 10 }}>
                  <div style={{ height: '100%', width: '68%', borderRadius: 99, background: 'linear-gradient(90deg, #003f7a, #1e5799)' }} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: 20, marginBottom: 16 }}>
                <div style={{ padding: '10px 16px', borderRadius: 10, background: '#f9f9ff', border: '1px solid #eef0f4', flex: 1, textAlign: 'center' }}>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 22, color: '#003f7a' }}>5 / 8</div>
                  <div style={{ fontSize: 12, color: '#424750' }}>Modules</div>
                </div>
                <div style={{ padding: '10px 16px', borderRadius: 10, background: '#f9f9ff', border: '1px solid #eef0f4', flex: 1, textAlign: 'center' }}>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 22, color: '#003f7a' }}>12 / 15</div>
                  <div style={{ fontSize: 12, color: '#424750' }}>Assignments</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#f0fdf4', border: '1px solid #a7f3d0', borderRadius: 8, padding: '10px 14px' }}>
                <span style={{ fontSize: 14, color: '#10B981' }}>✦</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#065f46' }}>Next Milestone: Midterm Practicum</span>
              </div>
            </div>

            {/* Lecture Schedule */}
            <div style={cardBase}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 17, color: '#191c20' }}>Lecture Schedule</div>
                <button style={{ color: '#003f7a', fontSize: 13, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
              </div>

              {/* Upcoming Lecture */}
              <div style={{ padding: '14px 16px', borderRadius: 12, background: '#f9f9ff', border: '1px solid #eef0f4', marginBottom: 10 }}>
                <div style={{ display: 'flex', gap: 12 }}>
                  <div style={{ background: '#003f7a', borderRadius: 8, padding: '8px 10px', textAlign: 'center', flexShrink: 0, minWidth: 50 }}>
                    <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', fontWeight: 700 }}>Nov</div>
                    <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 20, color: '#fff', lineHeight: 1 }}>14</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <span style={{ background: '#fee2e2', color: '#b91c1c', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>Live in 2h</span>
                      <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#003f7a' }}>videocam</span>
                      <span style={{ fontSize: 12, color: '#424750' }}>Virtual Hall A</span>
                    </div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: '#191c20', marginBottom: 6 }}>Lec 12: Transient Analysis in RLC Circuits</div>
                    <button style={{ display: 'flex', alignItems: 'center', gap: 5, background: '#003f7a', color: '#fff', border: 'none', borderRadius: 7, padding: '7px 14px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 14 }}>download</span>
                      Join Link
                    </button>
                  </div>
                </div>
              </div>

              {/* Completed Lecture */}
              <div style={{ padding: '14px 16px', borderRadius: 12, background: '#f9f9ff', border: '1px solid #eef0f4' }}>
                <div style={{ display: 'flex', gap: 12 }}>
                  <div style={{ background: '#f5f5f5', borderRadius: 8, padding: '8px 10px', textAlign: 'center', flexShrink: 0, minWidth: 50 }}>
                    <div style={{ fontSize: 9, color: '#424750', textTransform: 'uppercase', fontWeight: 700 }}>Nov</div>
                    <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 20, color: '#191c20', lineHeight: 1 }}>12</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#10B981' }}>check_circle</span>
                      <span style={{ fontSize: 11, fontWeight: 700, color: '#10B981' }}>Completed</span>
                    </div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: '#191c20', marginBottom: 8 }}>Lec 11: Introduction to Laplace Transforms</div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button style={{ display: 'flex', alignItems: 'center', gap: 5, background: '#fff', color: '#003f7a', border: '1px solid #c2c6d2', borderRadius: 7, padding: '6px 12px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 14 }}>picture_as_pdf</span>
                        Slides
                      </button>
                      <button style={{ display: 'flex', alignItems: 'center', gap: 5, background: '#fff', color: '#003f7a', border: '1px solid #c2c6d2', borderRadius: 7, padding: '6px 12px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 14 }}>play_circle</span>
                        Recording
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Instructor */}
            <div style={cardBase}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 16, color: '#191c20', marginBottom: 14 }}>Instructor</div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'linear-gradient(135deg, #003f7a, #1e5799)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 16, color: '#fff', flexShrink: 0 }}>AT</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: '#191c20' }}>Dr. Alan Turing</div>
                  <div style={{ fontSize: 12, color: '#424750' }}>Lead Instructor</div>
                </div>
              </div>
              <p style={{ fontSize: 13, color: '#424750', lineHeight: 1.5, marginBottom: 14, fontStyle: 'italic' }}>
                &ldquo;Office hours are Tue/Thu 2–4 PM. Use the AI Assistant for immediate conceptual queries.&rdquo;
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <button style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 9, padding: '10px', fontWeight: 600, fontSize: 13, cursor: 'pointer', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chat</span>
                  Ask a Question
                </button>
                <button style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#10B981', color: '#fff', border: 'none', borderRadius: 9, padding: '10px', fontWeight: 600, fontSize: 13, cursor: 'pointer', justifyContent: 'center' }}>
                  <span style={{ fontSize: 14 }}>✦</span>
                  Ask AI Tutor
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>smart_toy</span>
                </button>
              </div>
            </div>

            {/* Practical Labs */}
            <div style={cardBase}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#003f7a' }}>biotech</span>
                <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 16, color: '#191c20' }}>Practical Labs</span>
              </div>
              <div style={{ padding: '14px', borderRadius: 12, background: '#f9f9ff', border: '1px solid #eef0f4' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: '#191c20', flex: 1 }}>Lab 4: Op-Amp Configurations</div>
                  <span style={{ background: '#b91c1c', color: '#fff', fontSize: 9, fontWeight: 700, padding: '2px 7px', borderRadius: 4, letterSpacing: '0.5px' }}>MANDATORY</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#424750', marginBottom: 12 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 14 }}>calendar_today</span>
                  Friday, 10:00 AM — Lab B
                </div>
                <div style={{ fontSize: 11, color: '#424750', fontWeight: 600, marginBottom: 6 }}>Required Materials:</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', borderRadius: 8, background: '#fff', border: '1px solid #eef0f4' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#b91c1c' }}>description</span>
                  <span style={{ flex: 1, fontSize: 12, fontWeight: 600, color: '#191c20' }}>Lab4_Manual_v2.pdf</span>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 2 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#003f7a' }}>download</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
