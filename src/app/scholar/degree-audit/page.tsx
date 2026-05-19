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

const REQUIREMENTS = [
  {
    category: 'Core Courses',
    icon: '📚',
    completed: 45,
    total: 60,
    courses: [
      { code: 'PHYS401', name: 'Quantum Mechanics', grade: 'A', credits: 4, done: true },
      { code: 'MATH301', name: 'Linear Algebra', grade: 'In Progress', credits: 3, done: false },
      { code: 'CS501', name: 'Advanced Algorithms', grade: 'In Progress', credits: 4, done: false },
      { code: 'CHEM301', name: 'Physical Chemistry', grade: 'A-', credits: 3, done: true },
    ]
  },
  {
    category: 'Electives',
    icon: '🧩',
    completed: 15,
    total: 30,
    courses: [
      { code: 'CS420', name: 'Machine Learning', grade: 'A', credits: 3, done: true },
      { code: 'BIO201', name: 'Molecular Biology', grade: 'B+', credits: 3, done: true },
    ]
  },
  {
    category: 'Dissertation Research',
    icon: '🏆',
    completed: 8,
    total: 30,
    courses: [
      { code: 'THES901', name: 'Thesis Proposal', grade: 'Pass', credits: 2, done: true },
      { code: 'THES902', name: 'Research I', grade: 'In Progress', credits: 6, done: false },
    ]
  },
]

const MILESTONES = [
  { title: 'Submit Thesis Proposal', status: 'Completed: Oct 12, 2024', done: true },
  { title: 'Comprehensive Exams', status: 'Due: Dec 01, 2025', done: false },
  { title: 'Research Presentation', status: 'Due: Mar 15, 2026', done: false },
  { title: 'Final Oral Defense', status: 'Expected: May 2026', done: false },
]

export default function DegreeAuditPage() {
  const creditsDone = 68
  const creditsTotal = 120
  const pct = Math.round((creditsDone / creditsTotal) * 100)
  const radius = 70
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference * (1 - pct / 100)

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f9f9ff', fontFamily: '"Inter", system-ui, sans-serif' }}>
      <aside style={sidebarStyle}>
        <div style={{ padding: '24px 20px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ color: '#fff', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 20 }}>EduWorld</div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, marginTop: 2 }}>Scholar Portal</div>
        </div>
        <nav style={{ flex: 1, padding: '12px 12px', overflowY: 'auto' }}>
          {NAV.map(item => (
            <Link key={item.href} href={item.href} style={{ ...navItemStyle, ...(item.active ? { background: 'rgba(255,255,255,0.15)', borderLeft: '3px solid #fff', paddingLeft: 9, color: '#fff' } : {}) }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div style={{ padding: '12px 12px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Link href="/settings" style={navItemStyle}><span className="material-symbols-outlined" style={{ fontSize: 20 }}>settings</span>Settings</Link>
          <Link href="/help" style={navItemStyle}><span className="material-symbols-outlined" style={{ fontSize: 20 }}>help</span>Help</Link>
        </div>
      </aside>

      <main style={{ marginLeft: 260, flex: 1, padding: 32 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Predictive Degree Audit & Planning</h1>
            <p style={{ color: '#424750', fontSize: 14, marginTop: 6 }}>B.Sc. Physics — Spring Semester 2025 · 3rd Year</p>
          </div>
          <button style={{ background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 8, padding: '9px 18px', fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>download</span> Export Audit
          </button>
        </div>

        {/* Hero — Degree Progress Ring */}
        <div style={{ ...cardStyle, background: 'linear-gradient(135deg, #003f7a 0%, #0060b9 100%)', color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
            {/* Ring */}
            <div style={{ position: 'relative', width: 180, height: 180, flexShrink: 0 }}>
              <svg width="180" height="180" viewBox="0 0 180 180">
                <circle cx="90" cy="90" r={radius} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="14" />
                <circle
                  cx="90" cy="90" r={radius}
                  fill="none" stroke="#fff" strokeWidth="14"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                  strokeLinecap="round"
                  transform="rotate(-90 90 90)"
                />
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 800, fontSize: 32, color: '#fff' }}>{pct}%</div>
                <div style={{ fontSize: 12, opacity: 0.8 }}>Complete</div>
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 28, color: '#fff', marginBottom: 8 }}>
                {creditsDone} / {creditsTotal} Credits
              </div>
              <div style={{ opacity: 0.85, fontSize: 14, marginBottom: 20 }}>Predicted Graduation: May 2027 · On Track</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
                {[
                  { label: 'Cumulative GPA', value: '3.9' },
                  { label: 'Credits Remaining', value: `${creditsTotal - creditsDone}` },
                  { label: 'Class Standing', value: 'Top 5%' },
                ].map(s => (
                  <div key={s.label}>
                    <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 22 }}>{s.value}</div>
                    <div style={{ fontSize: 12, opacity: 0.75, marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
          <div>
            {/* Requirements */}
            {REQUIREMENTS.map(req => (
              <div key={req.category} style={cardStyle}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 20 }}>{req.icon}</span>
                    <div>
                      <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20' }}>{req.category}</div>
                      <div style={{ fontSize: 12, color: '#424750' }}>{req.completed} of {req.total} credits</div>
                    </div>
                  </div>
                  <span style={{
                    background: req.completed >= req.total ? '#d1fae5' : '#fef3c7',
                    color: req.completed >= req.total ? '#10B981' : '#d97706',
                    fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 99
                  }}>
                    {req.completed >= req.total ? 'Complete' : 'In Progress'}
                  </span>
                </div>
                <div style={{ height: 6, borderRadius: 99, background: '#eef0f4', overflow: 'hidden', marginBottom: 14 }}>
                  <div style={{ height: '100%', width: `${(req.completed / req.total) * 100}%`, borderRadius: 99, background: req.completed >= req.total ? '#10B981' : '#003f7a' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {req.courses.map(c => (
                    <div key={c.code} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', borderRadius: 8, background: '#f9f9ff', border: '1px solid #eef0f4' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 18, color: c.done ? '#10B981' : '#c2c6d2' }}>
                        {c.done ? 'check_circle' : 'radio_button_unchecked'}
                      </span>
                      <div style={{ flex: 1 }}>
                        <span style={{ fontWeight: 600, fontSize: 13, color: '#191c20' }}>{c.name}</span>
                        <span style={{ fontSize: 11, color: '#424750', marginLeft: 8 }}>{c.code}</span>
                      </div>
                      <span style={{ fontSize: 12, color: '#424750' }}>{c.credits} cr</span>
                      <span style={{
                        fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 99,
                        background: c.done ? '#d1fae5' : '#f9f9ff',
                        color: c.done ? '#10B981' : '#424750',
                        border: c.done ? 'none' : '1px solid #c2c6d2'
                      }}>{c.grade}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right */}
          <div>
            {/* Milestones */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20', marginBottom: 14 }}>Critical Milestones</div>
              {MILESTONES.map((m, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, paddingBottom: 14, marginBottom: 14, borderBottom: i === MILESTONES.length - 1 ? 'none' : '1px solid #eef0f4' }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: m.done ? '#d1fae5' : '#f9f9ff', border: `2px solid ${m.done ? '#10B981' : '#c2c6d2'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {m.done ? <span style={{ color: '#10B981', fontSize: 14 }}>✓</span> : <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#c2c6d2', display: 'block' }} />}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13, color: '#191c20' }}>{m.title}</div>
                    <div style={{ fontSize: 12, color: m.done ? '#10B981' : '#424750', marginTop: 2 }}>{m.status}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Prediction */}
            <div style={{ ...cardStyle, background: '#f0fdf4', border: '1px solid #a7f3d0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span style={{ color: '#10B981', fontSize: 18, fontWeight: 700 }}>✦</span>
                <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 14, color: '#191c20' }}>Predictive Analysis</span>
              </div>
              <p style={{ fontSize: 13, color: '#191c20', lineHeight: 1.6 }}>
                At your current pace, you will complete your degree by <strong>May 2027</strong>. Enrolling in one additional elective per semester would advance graduation to <strong>December 2026</strong>.
              </p>
              <Link href="/scholar/course-registration" style={{ display: 'block', marginTop: 12, background: '#10B981', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 14px', fontWeight: 600, fontSize: 13, cursor: 'pointer', textAlign: 'center', textDecoration: 'none' }}>
                Plan Courses →
              </Link>
            </div>

            {/* Advisor Note */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20', marginBottom: 12 }}>Advisor Note</div>
              <div style={{ display: 'flex', gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#003f7a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>AT</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13, color: '#191c20' }}>Dr. Aris Thorne</div>
                  <div style={{ fontSize: 12, color: '#424750', marginTop: 2 }}>Posted 3 days ago</div>
                  <p style={{ fontSize: 13, color: '#424750', lineHeight: 1.5, marginTop: 8, fontStyle: 'italic' }}>
                    &quot;Excellent progress. Ensure you register for the dissertation research module next semester to stay on track for your May 2027 defense.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
