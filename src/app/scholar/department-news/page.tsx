'use client'

import { useState } from 'react'
import Link from 'next/link'

const NAV = [
  { icon: 'dashboard', label: 'Dashboard', href: '/scholar/command-center' },
  { icon: 'school', label: 'My Courses', href: '/scholar/course-registration' },
  { icon: 'biotech', label: 'Practicals', href: '/scholar/lab-tracking' },
  { icon: 'chat_bubble', label: 'Feedback', href: '/scholar/feedback-tracker' },
  { icon: 'calendar_month', label: 'Schedule', href: '/scholar/exam-schedule' },
  { icon: 'history_edu', label: 'Academic Records', href: '/scholar/grades' },
]

const SEMINARS = [
  { month: 'OCT', day: '18', title: 'Industry Perspectives: Renewable Energy Tech', location: 'Main Auditorium', time: '2:00 PM' },
  { month: 'OCT', day: '22', title: 'Alumni Talk: Navigating Post-Graduation', location: 'Virtual Room B', time: '4:00 PM' },
]

const MEMOS = [
  { date: 'Yesterday', title: 'Call for Undergraduate Research Assistants' },
  { date: 'Oct 12', title: 'Library Hours Extended for Midterms' },
  { date: 'Oct 10', title: 'IT Maintenance Notice' },
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

export default function DepartmentNewsPage() {
  const [acknowledged, setAcknowledged] = useState(false)

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
            <Link key={item.href} href={item.href} style={navItemBase}>
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
            <input placeholder="Search notices…" style={{ border: 'none', outline: 'none', fontSize: 14, color: '#191c20', background: 'transparent', width: 180 }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ background: '#f0fdf4', color: '#10B981', fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>GPA: 3.85</span>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#424750', cursor: 'pointer' }}>notifications</span>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#424750', cursor: 'pointer' }}>account_balance_wallet</span>
          </div>
        </div>

        {/* Page Header */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 28, color: '#191c20', margin: 0 }}>Departmental Feed</h1>
            <span style={{ fontSize: 12, fontStyle: 'italic', color: '#424750' }}>Vol. 14 · Week 03</span>
          </div>
          <p style={{ color: '#424750', fontSize: 14, margin: 0 }}>Official updates and communications for Fall Semester.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 24 }}>
          <div>
            {/* Mandatory Notice */}
            <div style={{ ...cardBase, border: '1px solid #fca5a5', background: '#fffbfb' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#b91c1c' }}>campaign</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{ background: '#b91c1c', color: '#fff', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 4, letterSpacing: '0.5px' }}>MANDATORY READING</span>
                    <span style={{ fontSize: 11, color: '#424750' }}>Today, 09:00 AM</span>
                  </div>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 16, color: '#191c20', marginBottom: 6 }}>
                    Revised Lab Safety Protocols for Advanced Chemistry Modules
                  </div>
                  <p style={{ fontSize: 13, color: '#424750', lineHeight: 1.5, margin: 0 }}>
                    All students enrolled in advanced chemistry modules must complete the updated digital safety certification before accessing the facilities.
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 14, borderTop: '1px solid #fee2e2' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#003f7a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12, color: '#fff' }}>ET</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13, color: '#191c20' }}>Dr. Evelyn Thorne</div>
                    <div style={{ fontSize: 11, color: '#424750' }}>Dean of Sciences</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#fff', border: '1px solid #c2c6d2', borderRadius: 8, padding: '8px 14px', color: '#10B981', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                    <span style={{ fontSize: 14 }}>✦</span> AI Summary
                  </button>
                  <button
                    onClick={() => setAcknowledged(true)}
                    style={{ display: 'flex', alignItems: 'center', gap: 6, background: acknowledged ? '#10B981' : '#003f7a', border: 'none', borderRadius: 8, padding: '8px 16px', color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>done_all</span>
                    {acknowledged ? 'Acknowledged' : 'Acknowledge Receipt'}
                  </button>
                </div>
              </div>
            </div>

            {/* AI Weekly Summary */}
            <div style={{ ...cardBase, background: 'linear-gradient(135deg, #f0fdf4, #ecfdf5)', border: '1px solid #a7f3d0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span style={{ fontSize: 18, color: '#10B981' }}>✦</span>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 16, color: '#065f46' }}>The Week Ahead</div>
                <span style={{ background: '#d1fae5', color: '#065f46', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>EduWorld AI</span>
              </div>
              <p style={{ fontSize: 13, color: '#065f46', lineHeight: 1.5, marginBottom: 12 }}>
                You have practical assessments this Wednesday. Plan your revision accordingly.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}>
                {[
                  '2 Seminars relevant to your major.',
                  'Guest lecture registration closes tomorrow.',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 14, color: '#10B981' }}>adjust</span>
                    <span style={{ fontSize: 13, color: '#065f46' }}>{item}</span>
                  </div>
                ))}
              </div>
              <button style={{ background: '#10B981', color: '#fff', border: 'none', borderRadius: 8, padding: '9px 18px', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>
                View Full Analysis
              </button>
            </div>

            {/* Recent Memos */}
            <div style={cardBase}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#003f7a' }}>forum</span>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 17, color: '#191c20' }}>Recent Memos</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {MEMOS.map((m, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0', borderBottom: i < MEMOS.length - 1 ? '1px solid #eef0f4' : 'none', cursor: 'pointer' }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: '#424750', minWidth: 70 }}>{m.date}</span>
                    <span style={{ fontSize: 14, fontWeight: 500, color: '#191c20', flex: 1 }}>{m.title}</span>
                    <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#c2c6d2' }}>chevron_right</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid #eef0f4' }}>
                <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', color: '#003f7a', fontSize: 13, fontWeight: 600, cursor: 'pointer', padding: 0 }}>
                  View Archive
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Upcoming Seminars */}
            <div style={cardBase}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#003f7a' }}>event</span>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 16, color: '#191c20' }}>Upcoming Seminars</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {SEMINARS.map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 14px', borderRadius: 12, background: '#f9f9ff', border: '1px solid #eef0f4' }}>
                    <div style={{ textAlign: 'center', background: '#003f7a', borderRadius: 8, padding: '6px 10px', flexShrink: 0, minWidth: 44 }}>
                      <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.7)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{s.month}</div>
                      <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 20, color: '#fff', lineHeight: 1 }}>{s.day}</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 13, color: '#191c20', marginBottom: 4, lineHeight: 1.4 }}>{s.title}</div>
                      <div style={{ fontSize: 11, color: '#424750' }}>{s.location} · {s.time}</div>
                    </div>
                    <button style={{ background: '#e8f0fe', border: 'none', borderRadius: 8, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#003f7a' }}>add</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* House Announcements */}
            <div style={cardBase}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#003f7a' }}>account_balance</span>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 16, color: '#191c20' }}>House Announcements</div>
              </div>
              <div style={{ padding: '12px 14px', borderRadius: 12, background: '#f9f9ff', border: '1px solid #eef0f4' }}>
                <span style={{ background: '#003f7a', color: '#fff', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 4, display: 'inline-block', marginBottom: 8 }}>Alpha Cohort</span>
                <p style={{ fontSize: 13, color: '#424750', lineHeight: 1.55, margin: 0 }}>
                  Thursday study group has been relocated to Study Room 4. Please update your schedules accordingly.
                </p>
              </div>
            </div>

            {/* Quick Info */}
            <div style={{ background: '#f0fdf4', border: '1px solid #a7f3d0', borderRadius: 14, padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                <span style={{ fontSize: 14, color: '#10B981' }}>✦</span>
                <span style={{ fontWeight: 700, fontSize: 14, color: '#065f46' }}>AI Notice Digest</span>
              </div>
              <p style={{ fontSize: 12, color: '#065f46', lineHeight: 1.5, margin: 0 }}>
                3 new notices since your last visit. The most urgent requires acknowledgement before Friday.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
