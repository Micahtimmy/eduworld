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

const LECTURES = [
  { num: 1, title: 'Wave-Particle Duality & Postulates', duration: '1h 20m', done: true },
  { num: 2, title: 'The Schrödinger Equation', duration: '1h 45m', done: true },
  { num: 3, title: 'Operators and Observables', duration: '1h 30m', done: true },
  { num: 4, title: 'Uncertainty Principle', duration: '1h 15m', done: false, active: true },
  { num: 5, title: 'Quantum Harmonic Oscillator', duration: '2h 00m', done: false },
  { num: 6, title: 'Hydrogen Atom & Angular Momentum', duration: '1h 50m', done: false },
]

const LABS = [
  { title: 'Double Slit Experiment Simulation', status: 'Completed', grade: '92/100', date: 'Apr 5' },
  { title: 'Stern-Gerlach Apparatus Virtual Lab', status: 'Completed', grade: '88/100', date: 'Apr 12' },
  { title: 'Quantum Tunneling Simulation', status: 'Due Apr 26', grade: null, date: 'Apr 26' },
]

export default function QuantumMechanicsPage() {
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
        </div>
      </aside>

      <main style={{ marginLeft: 260, flex: 1, padding: 32 }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: 13, color: '#424750', marginBottom: 16 }}>
          <Link href="/scholar/course-registration" style={{ color: '#003f7a', textDecoration: 'none' }}>Courses</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span>Quantum Mechanics</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
          <div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
              <span style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>PHYS401</span>
              <span style={{ background: '#d1fae5', color: '#10B981', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>4 Credits</span>
            </div>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Quantum Mechanics</h1>
            <p style={{ color: '#424750', fontSize: 14, marginTop: 6 }}>Dr. Chen Wei · Lecture Hall B-204 · Mon/Wed 9:00–10:30 AM</p>
          </div>
          <button style={{ background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 8, padding: '9px 18px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>↗ Export Syllabus</button>
        </div>

        {/* Progress */}
        <div style={{ background: 'linear-gradient(135deg, #003f7a, #0060b9)', borderRadius: 14, padding: '20px 24px', marginBottom: 24, color: '#fff', display: 'flex', alignItems: 'center', gap: 32 }}>
          <div>
            <div style={{ fontSize: 12, opacity: 0.75, marginBottom: 4 }}>MODULE PROGRESS</div>
            <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 32 }}>72%</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ height: 8, borderRadius: 99, background: 'rgba(255,255,255,0.2)', overflow: 'hidden', marginBottom: 8 }}>
              <div style={{ height: '100%', width: '72%', borderRadius: 99, background: '#fff' }} />
            </div>
            <div style={{ display: 'flex', gap: 24, fontSize: 13 }}>
              <span>3/6 Lectures complete</span>
              <span>2/3 Labs submitted</span>
              <span>Next: Uncertainty Principle</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }}>
          <div>
            {/* Lecture List */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Lectures</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {LECTURES.map(l => (
                  <div key={l.num} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 10, border: `1px solid ${l.active ? '#003f7a' : '#c2c6d2'}`, background: l.active ? '#f0f4ff' : '#f9f9ff', cursor: 'pointer' }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: l.done ? '#d1fae5' : (l.active ? '#003f7a' : '#eef0f4'), display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {l.done ? <span style={{ color: '#10B981', fontWeight: 700, fontSize: 14 }}>✓</span> : <span style={{ color: l.active ? '#fff' : '#424750', fontWeight: 700, fontSize: 13 }}>{l.num}</span>}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 14, color: '#191c20' }}>{l.title}</div>
                      <div style={{ fontSize: 12, color: '#424750' }}>{l.duration}</div>
                    </div>
                    {l.active && <span style={{ background: '#003f7a', color: '#fff', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>Current</span>}
                    <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#424750' }}>play_circle</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lab Sessions */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Lab Sessions</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {LABS.map(lab => (
                  <div key={lab.title} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderRadius: 10, border: '1px solid #c2c6d2', background: '#f9f9ff' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 22, color: lab.grade ? '#10B981' : '#F59E0B' }}>science</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 14, color: '#191c20' }}>{lab.title}</div>
                      <div style={{ fontSize: 12, color: '#424750', marginTop: 2 }}>{lab.date}</div>
                    </div>
                    {lab.grade ? (
                      <span style={{ background: '#d1fae5', color: '#10B981', fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>{lab.grade}</span>
                    ) : (
                      <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 6, padding: '5px 12px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Submit</button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* AI Context */}
            <div style={{ background: '#f0fdf4', border: '1px solid #a7f3d0', borderRadius: 14, padding: 20, marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span style={{ color: '#10B981', fontSize: 18, fontWeight: 700 }}>✦</span>
                <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 14, color: '#191c20' }}>AI Insight</span>
              </div>
              <p style={{ fontSize: 13, color: '#191c20', lineHeight: 1.6, marginBottom: 12 }}>
                Based on your quiz scores, you may benefit from reviewing the <strong>Klein-Gordon equation</strong> before tackling the Uncertainty Principle lecture. Difficulty detected in your recent submissions.
              </p>
              <button style={{ background: '#10B981', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 16px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>
                ✦ Generate Refresher Deck
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20', marginBottom: 14 }}>Module Info</div>
              {[
                { label: 'Lecturer', value: 'Dr. Chen Wei' },
                { label: 'Credits', value: '4' },
                { label: 'Schedule', value: 'Mon/Wed 9:00 AM' },
                { label: 'Room', value: 'Science B-204' },
                { label: 'Final Exam', value: 'Jun 12, 2025' },
              ].map((s, i) => (
                <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 10, marginBottom: 10, borderBottom: i === 4 ? 'none' : '1px solid #eef0f4' }}>
                  <span style={{ fontSize: 13, color: '#424750' }}>{s.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#191c20' }}>{s.value}</span>
                </div>
              ))}
            </div>

            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20', marginBottom: 14 }}>Assignments Due</div>
              {[
                { title: 'Problem Set 4', due: 'Apr 24', urgent: true },
                { title: 'Lab Report #3', due: 'Apr 28', urgent: false },
                { title: 'Mid-term Paper', due: 'May 5', urgent: false },
              ].map((a, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, paddingBottom: 10, marginBottom: 10, borderBottom: i === 2 ? 'none' : '1px solid #eef0f4' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: a.urgent ? '#ef4444' : '#c2c6d2', marginTop: 5, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#191c20' }}>{a.title}</div>
                    <div style={{ fontSize: 12, color: a.urgent ? '#ef4444' : '#424750' }}>Due {a.due}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20', marginBottom: 12 }}>Required Reading</div>
              {[
                { title: 'The Quantum Theory of the Electron', author: 'P.A.M. Dirac (1928)', required: true },
                { title: 'Feynman Lectures Vol. III', author: 'Chapter 11', required: false },
              ].map((r, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, paddingBottom: 10, marginBottom: 10, borderBottom: i === 1 ? 'none' : '1px solid #eef0f4' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#003f7a', flexShrink: 0 }}>article</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#191c20' }}>{r.title}</div>
                    <div style={{ fontSize: 11, color: '#424750' }}>{r.author}</div>
                    {r.required && <span style={{ background: '#fee2e2', color: '#ef4444', fontSize: 10, fontWeight: 700, padding: '1px 6px', borderRadius: 99, marginTop: 4, display: 'inline-block' }}>Required</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
