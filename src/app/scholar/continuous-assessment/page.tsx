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

const COMPONENTS = [
  { name: 'Midterm Examinations', score: 85, total: 100, color: '#003f7a', warning: false },
  { name: 'Quizzes & Assignments', score: 92, total: 100, color: '#003f7a', warning: false },
  { name: 'Class Participation', score: 100, total: 100, color: '#10B981', warning: false },
  { name: 'Laboratory Practicals', score: 68, total: 100, color: '#F59E0B', warning: true },
]

const RECENT = [
  { title: 'Algorithms Quiz 3', course: 'CS501', date: 'May 12 2025', grade: 'A', pct: 94, icon: 'quiz' },
  { title: 'Literature Essay Draft', course: 'PHYS401', date: 'May 10 2025', grade: 'B+', pct: 88, icon: 'description' },
  { title: 'Lab Report: Wave Diffraction', course: 'PHYS350', date: 'May 8 2025', grade: 'A-', pct: 90, icon: 'science' },
  { title: 'Data Structures Assignment 2', course: 'CS501', date: 'May 5 2025', grade: 'B', pct: 83, icon: 'code' },
]

const COURSES = [
  { name: 'Advanced Quantum Mechanics', code: 'PHYS401', ca: 91, exam: 85, final: 89, grade: 'A' },
  { name: 'Statistical Thermodynamics', code: 'PHYS350', ca: 78, exam: null, final: null, grade: 'TBD' },
  { name: 'Advanced Algorithms', code: 'CS501', ca: 88, exam: null, final: null, grade: 'TBD' },
]

export default function ContinuousAssessmentPage() {
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
          <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Continuous Assessment Scoreboard</h1>
          <p style={{ color: '#424750', fontSize: 14, marginTop: 6 }}>Aggregate summary and projected standing for this academic term.</p>
        </div>

        {/* AI Projection */}
        <div style={{ background: '#f0fdf4', border: '1px solid #a7f3d0', borderRadius: 14, padding: 20, marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{ color: '#10B981', fontSize: 18, fontWeight: 700 }}>✦</span>
            <span style={{ fontWeight: 600, fontSize: 14, color: '#191c20' }}>EduWorld AI Projection</span>
          </div>
          <p style={{ fontSize: 14, color: '#424750', lineHeight: 1.6, marginBottom: 8 }}>You are on a <strong style={{ color: '#191c20' }}>High Distinction</strong> trajectory. Your practicals performance is the primary factor to address before finals — consider booking extra lab sessions.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#10B981' }}>trending_up</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#10B981' }}>Positive trajectory — keep it up</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 0 }}>
          {/* Current Standing */}
          <div style={cardStyle}>
            <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Current Standing</div>
            <div style={{ textAlign: 'center', padding: '16px 0 24px' }}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 52, color: '#191c20' }}>82%</div>
              <div style={{ fontSize: 14, color: '#424750', marginTop: 4 }}>Overall CA Score</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#d1fae5', color: '#10B981', borderRadius: 99, padding: '6px 14px', marginTop: 12 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>trending_up</span>
                <span style={{ fontSize: 12, fontWeight: 700 }}>Projected: First Class Honours</span>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
              {[
                { label: 'GPA', value: '3.9' },
                { label: 'Credits', value: '68' },
                { label: 'Rank', value: 'Top 5%' },
              ].map(s => (
                <div key={s.label} style={{ background: '#f9f9ff', borderRadius: 10, padding: '12px', textAlign: 'center' }}>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 18, color: '#003f7a' }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: '#424750', marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Component Breakdown */}
          <div style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20' }}>Component Breakdown</div>
              <button style={{ color: '#003f7a', fontSize: 13, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>View Details →</button>
            </div>
            {COMPONENTS.map((c, i) => (
              <div key={i} style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#424750', marginBottom: 6 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    {c.warning && <span className="material-symbols-outlined" style={{ fontSize: 14, color: '#F59E0B' }}>warning</span>}
                    <span>{c.name}</span>
                  </div>
                  <span style={{ fontWeight: 700, color: '#191c20' }}>{c.score}/{c.total}</span>
                </div>
                <div style={{ height: 8, borderRadius: 99, background: '#eef0f4', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${c.score}%`, borderRadius: 99, background: c.color }} />
                </div>
                {c.warning && (
                  <div style={{ fontSize: 11, color: '#d97706', fontWeight: 600, marginTop: 4 }}>⚠ Action required — practicals are below target</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Course Grade Table */}
        <div style={cardStyle}>
          <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Course Grade Summary</div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #c2c6d2' }}>
                {['Course', 'Code', 'CA Score', 'Exam', 'Final', 'Grade'].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '8px 12px', fontSize: 11, fontWeight: 700, color: '#424750', textTransform: 'uppercase' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COURSES.map((c, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #eef0f4' }}>
                  <td style={{ padding: '12px', fontWeight: 600, color: '#191c20' }}>{c.name}</td>
                  <td style={{ padding: '12px', color: '#424750' }}>{c.code}</td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ background: c.ca >= 90 ? '#d1fae5' : '#e8f0fe', color: c.ca >= 90 ? '#10B981' : '#003f7a', fontSize: 12, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>{c.ca}%</span>
                  </td>
                  <td style={{ padding: '12px', color: '#424750' }}>{c.exam ? `${c.exam}%` : '—'}</td>
                  <td style={{ padding: '12px', color: '#424750' }}>{c.final ? `${c.final}%` : '—'}</td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ background: c.grade !== 'TBD' ? '#d1fae5' : '#f9f9ff', color: c.grade !== 'TBD' ? '#10B981' : '#424750', fontSize: 12, fontWeight: 700, padding: '2px 8px', borderRadius: 99, border: c.grade === 'TBD' ? '1px solid #c2c6d2' : 'none' }}>{c.grade}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recent Assessments */}
        <div style={cardStyle}>
          <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Recent Assessments</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {RECENT.map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px', borderRadius: 10, background: '#f9f9ff', border: '1px solid #eef0f4' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#003f7a', flexShrink: 0 }}>{r.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 13, color: '#191c20' }}>{r.title}</div>
                  <div style={{ fontSize: 11, color: '#424750', marginTop: 2 }}>{r.course} · {r.date}</div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: '#10B981' }}>{r.grade}</div>
                  <div style={{ fontSize: 11, color: '#424750' }}>{r.pct}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
