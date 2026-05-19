'use client'

import { useState } from 'react'
import Link from 'next/link'

const NAV = [
  { icon: 'dashboard', label: 'Dashboard', href: '/scholar/command-center' },
  { icon: 'school', label: 'My Courses', href: '/scholar/course-registration' },
  { icon: 'biotech', label: 'Practicals', href: '/scholar/lab-tracking', active: true },
  { icon: 'chat_bubble', label: 'Feedback', href: '/scholar/feedback-tracker' },
  { icon: 'calendar_month', label: 'Schedule', href: '/scholar/exam-schedule' },
  { icon: 'history_edu', label: 'Academic Records', href: '/scholar/grades' },
]

const SESSIONS = [
  { month: 'Oct', day: '24', course: 'CHEM-301', time: '14:00 – 17:00', title: 'Organic Synthesis: Esterification', location: 'Science Complex, Room 402-B', badge: 'Upcoming', upcoming: true },
  { month: 'Oct', day: '17', course: 'PHYS-205', time: '10:00 – 13:00', title: 'Spectroscopy Calibration', location: 'Physics Annex, Room 101', badge: 'Logged', upcoming: false },
  { month: 'Oct', day: '10', course: 'CHEM-301', time: '14:00 – 17:00', title: 'Titration and pH Analysis', location: 'Science Complex, Room 402-B', badge: 'Logged', upcoming: false },
]

const TOOLS = [
  { icon: 'picture_as_pdf', name: 'Synthesis Manual v2.4', format: 'PDF', size: '2.4 MB', actionIcon: 'download' },
  { icon: 'data_object', name: 'Jupyter Log Template', format: 'IPYNB', size: '15 KB', actionIcon: 'download' },
  { icon: 'link', name: 'Equipment Booking Portal', format: 'External Link', size: '', actionIcon: 'open_in_new' },
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

export default function LabManagementPage() {
  const [msdsChecked, setMsdsChecked] = useState(false)
  const [ppeChecked, setPpeChecked] = useState(false)

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f9f9ff', fontFamily: '"Inter", system-ui, sans-serif' }}>
      {/* Sidebar */}
      <aside style={{ width: 260, minWidth: 260, background: '#003f7a', height: '100vh', position: 'fixed', top: 0, left: 0, display: 'flex', flexDirection: 'column', zIndex: 40 }}>
        <div style={{ padding: '24px 20px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#fff' }}>school</span>
            <div style={{ color: '#fff', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 18 }}>Scholar Tier</div>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 11 }}>Academic Session 2024</div>
        </div>
        <div style={{ padding: '10px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)' }}>search</span>
          <span className="material-symbols-outlined" style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)' }}>notifications</span>
          <span className="material-symbols-outlined" style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)' }}>account_balance_wallet</span>
          <span style={{ marginLeft: 'auto', background: '#f0fdf4', color: '#10B981', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>GPA: 3.85</span>
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
        {/* Page Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 24 }}>
          <div>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 26, color: '#191c20', margin: '0 0 6px' }}>Practical Lab Management Hub</h1>
            <p style={{ color: '#424750', fontSize: 14, margin: 0 }}>Managing upcoming lab sessions, experiment log submissions, and lab partner connections.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#fff', border: '1px solid #c2c6d2', borderRadius: 10, padding: '10px 16px' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#f59e0b' }}>bolt</span>
            <div>
              <div style={{ fontSize: 11, color: '#424750', fontWeight: 600 }}>Term Progress</div>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 16, color: '#191c20' }}>6 / 12 Labs</div>
            </div>
          </div>
        </div>

        {/* Safety Banner */}
        <div style={{ background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: 14, padding: '18px 22px', marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#d97706' }}>warning</span>
            <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 15, color: '#191c20' }}>Pre-Lab Safety Protocol Verification</span>
          </div>
          <p style={{ fontSize: 13, color: '#424750', marginBottom: 12 }}>
            You must acknowledge the safety protocols below before accessing the submission portal for the Organic Synthesis lab.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
              <input type="checkbox" checked={msdsChecked} onChange={e => setMsdsChecked(e.target.checked)} style={{ width: 16, height: 16, accentColor: '#003f7a', cursor: 'pointer' }} />
              <span style={{ fontSize: 13, color: '#424750' }}>I have reviewed the MSDS for Reagent A.</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
              <input type="checkbox" checked={ppeChecked} onChange={e => setPpeChecked(e.target.checked)} style={{ width: 16, height: 16, accentColor: '#003f7a', cursor: 'pointer' }} />
              <span style={{ fontSize: 13, color: '#424750' }}>Personal Protective Equipment (PPE) acquired.</span>
            </label>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
          <div>
            {/* Scheduled Sessions */}
            <div style={cardBase}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#003f7a' }}>calendar_month</span>
                  <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 16, color: '#191c20' }}>Scheduled Sessions</span>
                </div>
                <button style={{ color: '#003f7a', fontSize: 13, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>View Full Calendar</button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {SESSIONS.map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, padding: '12px 14px', borderRadius: 12, background: '#f9f9ff', border: '1px solid #eef0f4' }}>
                    <div style={{ textAlign: 'center', flexShrink: 0, width: 46, background: s.upcoming ? '#003f7a' : '#f5f5f5', borderRadius: 8, padding: '6px 0' }}>
                      <div style={{ fontSize: 9, color: s.upcoming ? 'rgba(255,255,255,0.7)' : '#424750', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.5px' }}>{s.month}</div>
                      <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 20, color: s.upcoming ? '#fff' : '#191c20', lineHeight: 1 }}>{s.day}</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#003f7a', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{s.course}</span>
                        <span style={{ fontSize: 11, color: '#424750' }}>{s.time}</span>
                        <span style={{ background: s.upcoming ? '#fef3c7' : '#d1fae5', color: s.upcoming ? '#d97706' : '#065f46', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99, marginLeft: 'auto' }}>{s.badge}</span>
                      </div>
                      <div style={{ fontWeight: 600, fontSize: 14, color: '#191c20', marginBottom: 2 }}>{s.title}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: '#424750' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 13 }}>location_on</span>
                        {s.location}
                      </div>
                    </div>
                    {!s.upcoming && (
                      <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#c2c6d2' }}>upload_file</span>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Log Submission Portal */}
            <div style={cardBase}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 16, color: '#191c20', marginBottom: 16 }}>Log Submission Portal</div>
              <div style={{ padding: '12px 14px', borderRadius: 10, background: '#f9f9ff', border: '1px solid #eef0f4', marginBottom: 14 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: '#191c20', marginBottom: 4 }}>Target: Organic Synthesis Report</div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 12, color: '#d97706', fontWeight: 600 }}>Due in 2 days (Oct 26, 23:59 UTC)</span>
                  <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#424750', background: '#eef0f4', padding: '2px 6px', borderRadius: 4 }}>ID: LOG-8492</span>
                </div>
              </div>
              <div style={{ border: '2px dashed #c2c6d2', borderRadius: 12, padding: '28px 20px', textAlign: 'center', marginBottom: 14, background: '#fdfdff' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 40, color: '#c2c6d2', marginBottom: 8, display: 'block' }}>cloud_upload</span>
                <div style={{ fontWeight: 600, fontSize: 14, color: '#191c20', marginBottom: 4 }}>Drag &amp; drop your lab log here</div>
                <div style={{ fontSize: 12, color: '#424750', marginBottom: 6 }}>.pdf, .docx, or .ipynb (Jupyter) files up to 50MB</div>
                <div style={{ fontSize: 11, color: '#424750', marginBottom: 14 }}>Raw data tables must be included in the submission</div>
                <button style={{ background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 8, padding: '8px 18px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Browse Files</button>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button style={{ flex: 1, background: '#fff', color: '#003f7a', border: '1px solid #003f7a', borderRadius: 8, padding: '10px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Save Draft</button>
                <button style={{ flex: 1, background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '10px', fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                  Submit Final Log
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>send</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div>
            {/* Partner Match */}
            <div style={cardBase}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#003f7a' }}>handshake</span>
                  <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 15, color: '#191c20' }}>Partner Match</span>
                </div>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#424750' }}>refresh</span>
                </button>
              </div>
              <span style={{ background: '#f0fdf4', color: '#10B981', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99, display: 'inline-block', marginBottom: 12 }}>✦ AI Suggested</span>
              <div style={{ padding: '12px', borderRadius: 12, background: '#f9f9ff', border: '1px solid #eef0f4', marginBottom: 10 }}>
                <div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                  <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12, color: '#fff', flexShrink: 0 }}>ER</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13, color: '#191c20' }}>Dr. Elena Rostova</div>
                    <span style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 4 }}>Complementary Skillset: Spectroscopy</span>
                  </div>
                </div>
                <p style={{ fontSize: 12, color: '#424750', lineHeight: 1.5, margin: 0 }}>
                  Elena&apos;s data analysis strengths complement your practical synthesis focus — ideal for the upcoming Esterification lab.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button style={{ flex: 1, background: '#003f7a', color: '#fff', border: 'none', borderRadius: 8, padding: '9px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Connect</button>
                <button style={{ background: '#fff', color: '#424750', border: '1px solid #c2c6d2', borderRadius: 8, padding: '9px 14px', fontWeight: 600, fontSize: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>mail</span>
                </button>
              </div>
            </div>

            {/* Tools & Manuals */}
            <div style={cardBase}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#003f7a' }}>build</span>
                <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 15, color: '#191c20' }}>Tools &amp; Manuals</span>
              </div>
              {TOOLS.map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 10, background: '#f9f9ff', border: '1px solid #eef0f4', marginBottom: 8, cursor: 'pointer' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#003f7a', flexShrink: 0 }}>{t.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 13, color: '#191c20' }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: '#424750' }}>{t.format}{t.size ? ` · ${t.size}` : ''}</div>
                  </div>
                  <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#003f7a', cursor: 'pointer' }}>{t.actionIcon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
