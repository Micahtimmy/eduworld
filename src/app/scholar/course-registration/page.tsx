'use client'

import { useState } from 'react'
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

const ENROLLED = [
  { code: 'PHYS401', name: 'Quantum Mechanics', credits: 4, time: 'Mon/Wed 9:00–10:30 AM', room: 'Science Block B-204' },
  { code: 'CHEM350', name: 'Organic Chemistry III', credits: 3, time: 'Tue/Thu 11:00 AM–12:30 PM', room: 'Chemistry Lab 102' },
  { code: 'CS501', name: 'Advanced Algorithms', credits: 4, time: 'Mon/Wed/Fri 2:00–3:00 PM', room: 'Tech Hub 301' },
  { code: 'MATH301', name: 'Linear Algebra', credits: 3, time: 'Tue/Thu 9:00–10:30 AM', room: 'Lecture Hall A' },
]

const AVAILABLE = [
  { code: 'PHYS501', name: 'Statistical Mechanics', credits: 4, prereq: 'PHYS401', seats: 12, instructor: 'Dr. Kim Soo-Jin', canAdd: true },
  { code: 'CS601', name: 'Machine Learning Theory', credits: 3, prereq: 'CS501, MATH301', seats: 8, instructor: 'Prof. Rachel Adams', canAdd: true },
  { code: 'CHEM401', name: 'Biochemistry I', credits: 3, prereq: 'CHEM350', seats: 0, instructor: 'Dr. Oluwaseun Bello', canAdd: false },
  { code: 'MATH401', name: 'Real Analysis', credits: 4, prereq: 'MATH301', seats: 15, instructor: 'Dr. Pierre Martin', canAdd: true },
  { code: 'BIO301', name: 'Molecular Biology', credits: 3, prereq: 'CHEM350', seats: 20, instructor: 'Dr. Amira Hassan', canAdd: true },
]

export default function CourseRegistrationPage() {
  const [added, setAdded] = useState<string[]>([])
  const totalCredits = ENROLLED.reduce((sum, c) => sum + c.credits, 0)
  const maxCredits = 20

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
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: 0 }}>Course Registration & Planning</h1>
            <p style={{ color: '#424750', fontSize: 14, marginTop: 6 }}>Spring Semester 2025 · Add/Drop Period ends May 30</p>
          </div>
          <div style={{ background: '#fff', border: '1px solid #c2c6d2', borderRadius: 12, padding: '12px 20px', textAlign: 'center' }}>
            <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 24, color: '#003f7a' }}>
              {totalCredits + added.length * 3}
              <span style={{ fontSize: 14, color: '#424750', fontWeight: 500 }}>/{maxCredits}</span>
            </div>
            <div style={{ fontSize: 12, color: '#424750', marginTop: 2 }}>Credits Registered</div>
            <div style={{ height: 6, borderRadius: 99, background: '#eef0f4', overflow: 'hidden', marginTop: 8, width: 120 }}>
              <div style={{ height: '100%', width: `${((totalCredits + added.length * 3) / maxCredits) * 100}%`, borderRadius: 99, background: '#003f7a' }} />
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
          <div>
            {/* Current Enrollment */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>
                Currently Enrolled ({ENROLLED.length} courses)
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {ENROLLED.map(c => (
                  <div key={c.code} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', borderRadius: 10, border: '1px solid #c2c6d2', background: '#f9f9ff' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: '#003f7a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ color: '#fff', fontSize: 11, fontWeight: 700 }}>{c.credits}cr</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: 14, color: '#191c20' }}>{c.name}</div>
                      <div style={{ fontSize: 12, color: '#424750', marginTop: 2 }}>{c.code} · {c.time}</div>
                      <div style={{ fontSize: 12, color: '#424750' }}>{c.room}</div>
                    </div>
                    <button style={{ background: '#fff', color: '#ef4444', border: '1px solid #ef4444', borderRadius: 6, padding: '5px 12px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Drop</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Courses */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20' }}>Available Courses</div>
                <input placeholder="Search courses..." style={{ padding: '7px 12px', borderRadius: 8, border: '1px solid #c2c6d2', fontSize: 13, outline: 'none', width: 200 }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {AVAILABLE.map(c => (
                  <div key={c.code} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', borderRadius: 10, border: '1px solid #c2c6d2', opacity: c.seats === 0 ? 0.6 : 1 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ fontWeight: 700, fontSize: 14, color: '#191c20' }}>{c.name}</span>
                        <span style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>{c.credits} cr</span>
                        {c.seats === 0 && <span style={{ background: '#fee2e2', color: '#ef4444', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>Full</span>}
                      </div>
                      <div style={{ fontSize: 12, color: '#424750', marginTop: 3 }}>{c.code} · {c.instructor}</div>
                      <div style={{ fontSize: 12, color: '#424750' }}>Prereq: {c.prereq} · {c.seats > 0 ? `${c.seats} seats left` : 'No seats'}</div>
                    </div>
                    <button
                      disabled={!c.canAdd || c.seats === 0}
                      onClick={() => {
                        if (c.canAdd && c.seats > 0 && !added.includes(c.code)) {
                          setAdded(prev => [...prev, c.code])
                        }
                      }}
                      style={{
                        background: added.includes(c.code) ? '#d1fae5' : (c.canAdd && c.seats > 0 ? '#003f7a' : '#eef0f4'),
                        color: added.includes(c.code) ? '#10B981' : (c.canAdd && c.seats > 0 ? '#fff' : '#c2c6d2'),
                        border: 'none', borderRadius: 6, padding: '7px 14px', fontSize: 13, fontWeight: 600,
                        cursor: c.canAdd && c.seats > 0 ? 'pointer' : 'default'
                      }}
                    >
                      {added.includes(c.code) ? '✓ Added' : 'Add Course'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule Grid */}
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Weekly Schedule</div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', padding: '8px 10px', color: '#424750', fontWeight: 600, borderBottom: '1px solid #c2c6d2' }}>Time</th>
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(d => (
                        <th key={d} style={{ textAlign: 'center', padding: '8px 10px', color: '#424750', fontWeight: 600, borderBottom: '1px solid #c2c6d2' }}>{d}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {['9:00 AM', '11:00 AM', '2:00 PM'].map((t, i) => (
                      <tr key={t} style={{ borderBottom: '1px solid #eef0f4' }}>
                        <td style={{ padding: '10px', color: '#424750' }}>{t}</td>
                        <td style={{ padding: '6px', textAlign: 'center' }}>{(i === 0) && <div style={{ background: '#e8f0fe', color: '#003f7a', borderRadius: 6, padding: '3px 6px', fontSize: 11, fontWeight: 600 }}>PHYS401</div>}</td>
                        <td style={{ padding: '6px', textAlign: 'center' }}>{(i === 1) && <div style={{ background: '#fef3c7', color: '#d97706', borderRadius: 6, padding: '3px 6px', fontSize: 11, fontWeight: 600 }}>CHEM350</div>}</td>
                        <td style={{ padding: '6px', textAlign: 'center' }}>{(i === 0) && <div style={{ background: '#e8f0fe', color: '#003f7a', borderRadius: 6, padding: '3px 6px', fontSize: 11, fontWeight: 600 }}>PHYS401</div>}</td>
                        <td style={{ padding: '6px', textAlign: 'center' }}>{(i === 1) && <div style={{ background: '#fef3c7', color: '#d97706', borderRadius: 6, padding: '3px 6px', fontSize: 11, fontWeight: 600 }}>CHEM350</div>}</td>
                        <td style={{ padding: '6px', textAlign: 'center' }}>{(i === 2) && <div style={{ background: '#d1fae5', color: '#10B981', borderRadius: 6, padding: '3px 6px', fontSize: 11, fontWeight: 600 }}>CS501</div>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div>
            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20', marginBottom: 14 }}>Semester Summary</div>
              {[
                { label: 'Enrolled Courses', value: `${ENROLLED.length}` },
                { label: 'Total Credits', value: `${totalCredits}` },
                { label: 'Credits Remaining', value: `${maxCredits - totalCredits}` },
                { label: 'Semester', value: 'Spring 2025' },
                { label: 'Academic Year', value: '3rd Year' },
              ].map((s, i) => (
                <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 10, marginBottom: 10, borderBottom: i === 4 ? 'none' : '1px solid #eef0f4' }}>
                  <span style={{ fontSize: 13, color: '#424750' }}>{s.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#191c20' }}>{s.value}</span>
                </div>
              ))}
              <button style={{ background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '10px', fontWeight: 600, fontSize: 14, cursor: 'pointer', width: '100%', marginTop: 6 }}>
                Confirm Registration
              </button>
            </div>

            <div style={{ ...cardStyle, background: '#f0fdf4', border: '1px solid #a7f3d0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span style={{ color: '#10B981', fontSize: 18, fontWeight: 700 }}>✦</span>
                <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 14, color: '#191c20' }}>AI Advisor</span>
              </div>
              <p style={{ fontSize: 13, color: '#191c20', lineHeight: 1.6 }}>
                Based on your thesis topic, I recommend adding <strong>CS601 Machine Learning Theory</strong> — it directly supports your quantum neural network research.
              </p>
            </div>

            <div style={cardStyle}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, fontSize: 15, color: '#191c20', marginBottom: 12 }}>Degree Progress</div>
              <Link href="/scholar/degree-audit" style={{ textDecoration: 'none' }}>
                <div style={{ background: '#f9f9ff', borderRadius: 10, padding: '14px 16px', border: '1px solid #c2c6d2' }}>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 22, color: '#003f7a' }}>68 / 120</div>
                  <div style={{ fontSize: 12, color: '#424750', marginTop: 2 }}>Credits earned toward B.Sc.</div>
                  <div style={{ height: 8, borderRadius: 99, background: '#eef0f4', overflow: 'hidden', marginTop: 10 }}>
                    <div style={{ height: '100%', width: '56.7%', borderRadius: 99, background: '#003f7a' }} />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
