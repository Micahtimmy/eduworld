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

const EXAMS = [
  { date: 'Oct 12', month: 'Oct', day: '12', subject: 'Advanced Quantum Mechanics', code: 'PHYS401', time: '09:00–12:00', location: 'Hall 4B, Main Campus', type: 'Open Book', urgent: true },
  { date: 'Oct 15', month: 'Oct', day: '15', subject: 'Statistical Thermodynamics', code: 'PHYS350', time: '14:00–17:00', location: 'Gymnasium, North Wing', type: 'Closed Book', urgent: false },
  { date: 'Oct 18', month: 'Oct', day: '18', subject: 'Electromagnetic Theory II', code: 'PHYS402', time: '09:00–11:30', location: 'Room 102, Physics Bldg', type: 'Multiple Choice', urgent: false },
  { date: 'Oct 22', month: 'Oct', day: '22', subject: 'Advanced Algorithms', code: 'CS501', time: '14:00–17:00', location: 'Computer Lab 3, Tech Hub', type: 'Practical', urgent: false },
]

const AI_RESOURCES = [
  { title: 'Wave Function Collapse Summary', note: 'Generated 2 hrs ago · PHYS401' },
  { title: 'Mock Paper: 2023 Formats', note: 'Recommended based on syllabus' },
  { title: 'Statistical Mechanics Formula Sheet', note: 'Curated for PHYS350' },
]

export default function ExamSchedulePage() {
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
          <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Examination Hall & Identity Hub</h1>
          <p style={{ color: '#424750', fontSize: 14, marginTop: 6 }}>Secure portal for timetables, seating assignments, and official documentation.</p>
        </div>

        {/* Alert Banner */}
        <div style={{ background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: 14, padding: '16px 20px', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 14 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 24, color: '#d97706', flexShrink: 0 }}>warning</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: '#92400e' }}>Upcoming Major Assessment</div>
            <div style={{ fontWeight: 700, fontSize: 15, color: '#78350f', marginTop: 2 }}>Advanced Quantum Mechanics — PHYS401</div>
            <div style={{ fontSize: 12, color: '#92400e', marginTop: 4 }}>Hall 4B · Open Book · Requires Identity Verification</div>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div style={{ fontSize: 11, color: '#92400e', fontWeight: 600 }}>T-Minus</div>
            <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 22, color: '#92400e' }}>03d : 14h : 22m</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 24, marginBottom: 24 }}>
          {/* Digital Pass */}
          <div style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#003f7a' }}>smartphone</span>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20' }}>Digital Pass</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#e8f0fe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 20, color: '#003f7a', margin: '0 auto 12px' }}>SR</div>
              <div style={{ fontWeight: 700, fontSize: 15, color: '#191c20' }}>Sarah Robertson</div>
              <div style={{ fontSize: 12, color: '#424750', marginBottom: 14 }}>ID: SCH-2024-8902</div>
              {/* Barcode placeholder */}
              <div style={{ background: '#f9f9ff', border: '1px solid #eef0f4', borderRadius: 10, padding: 12, fontFamily: 'monospace', fontSize: 10, color: '#424750', marginBottom: 14, letterSpacing: 2 }}>
                ████ ████ ████ ████ ████
              </div>
              <button style={{ background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 8, padding: '8px', fontWeight: 600, fontSize: 13, cursor: 'pointer', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span> Save Offline
              </button>
            </div>
          </div>

          {/* Master Timetable */}
          <div style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20' }}>Master Timetable</div>
              <button style={{ color: '#003f7a', fontSize: 13, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {EXAMS.map((e, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', borderRadius: 12, background: e.urgent ? '#fffbeb' : '#f9f9ff', border: `1px solid ${e.urgent ? '#fcd34d' : '#eef0f4'}` }}>
                  <div style={{ textAlign: 'center', flexShrink: 0, width: 44 }}>
                    <div style={{ fontSize: 10, color: '#424750', textTransform: 'uppercase' }}>{e.month}</div>
                    <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 22, color: '#003f7a' }}>{e.day}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: '#191c20', marginBottom: 2 }}>{e.subject}</div>
                    <div style={{ fontSize: 12, color: '#424750' }}>{e.code} · {e.type}</div>
                    <div style={{ display: 'flex', gap: 14, fontSize: 12, color: '#424750', marginTop: 3 }}>
                      <span>⏰ {e.time}</span>
                      <span>📍 {e.location}</span>
                    </div>
                  </div>
                  {e.urgent && <span style={{ background: '#fef3c7', color: '#d97706', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99, flexShrink: 0 }}>UPCOMING</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {/* Seating Assignment */}
          <div style={cardStyle}>
            <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Seating Assignment</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px', borderRadius: 12, background: '#e8f0fe', border: '1px solid #bfdbfe', marginBottom: 14 }}>
              <div style={{ width: 52, height: 52, borderRadius: 12, background: '#003f7a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 16, color: '#fff', flexShrink: 0 }}>G12</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#191c20' }}>Hall 4B</div>
                <div style={{ fontSize: 13, color: '#424750' }}>Row G · Desk 12</div>
                <div style={{ fontSize: 12, color: '#424750' }}>Advanced Quantum Mechanics</div>
              </div>
              <button style={{ color: '#003f7a', fontSize: 12, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>location_on</span> View Map
              </button>
            </div>
            <p style={{ fontSize: 12, color: '#424750' }}>Note: Bring your student ID and digital pass. No electronic devices unless specified.</p>
          </div>

          {/* Smart Revision */}
          <div style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ color: '#10B981', fontSize: 18, fontWeight: 700 }}>✦</span>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20' }}>Smart Revision Resources</div>
            </div>
            {AI_RESOURCES.map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px', borderRadius: 10, background: '#f9f9ff', border: '1px solid #eef0f4', marginBottom: 8, cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#003f7a', flexShrink: 0 }}>description</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 13, color: '#191c20' }}>{r.title}</div>
                  <div style={{ fontSize: 11, color: '#424750', marginTop: 2 }}>{r.note}</div>
                </div>
                <span style={{ color: '#003f7a', fontSize: 16 }}>→</span>
              </div>
            ))}
            <button style={{ background: '#10B981', color: '#fff', border: 'none', borderRadius: 8, padding: '9px', fontWeight: 600, fontSize: 13, cursor: 'pointer', width: '100%', marginTop: 4 }}>
              ✦ Generate Revision Plan
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
