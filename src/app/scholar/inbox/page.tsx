'use client'

import { useState } from 'react'
import Link from 'next/link'

const NAV = [
  { icon: 'dashboard', label: 'Dashboard', href: '/scholar/command-center' },
  { icon: 'menu_book', label: 'Modules', href: '/scholar/modules' },
  { icon: 'psychology', label: 'AI Research', href: '/scholar/ai-research' },
  { icon: 'account_box', label: 'Portfolio', href: '/scholar/portfolio' },
  { icon: 'video_library', label: 'Lecture Hall', href: '/scholar/lecture-hall' },
  { icon: 'school', label: 'Graduation', href: '/scholar/degree-audit' },
  { icon: 'groups', label: 'Peer Huddle', href: '/scholar/peer-huddle' },
  { icon: 'work', label: 'Career', href: '/scholar/careers' },
  { icon: 'library_books', label: 'Library', href: '/scholar/library' },
  { icon: 'forum', label: 'Mentorship', href: '/scholar/mentorship', active: true },
]

type FilterTab = 'All' | 'Unread' | 'Official'

const MESSAGES = [
  {
    icon: 'school',
    sender: 'Dr. Evelyn Vance',
    time: '10:42 AM',
    subject: 'Thesis Proposal Review - Action Required',
    body: 'The methodology section needs further clarification regarding the control group variables.',
    unread: true,
    iconColor: '#003f7a',
    iconBg: '#e8f0fe',
  },
  {
    icon: 'campaign',
    sender: 'University Registrar',
    time: 'Yesterday',
    subject: 'Spring Semester Registration Deadlines',
    body: 'Course selection for the upcoming Spring semester will open on November 15th. Please review your academic plan.',
    unread: true,
    iconColor: '#b91c1c',
    iconBg: '#fee2e2',
  },
  {
    icon: 'event',
    sender: 'Prof. Aris Thorne',
    time: 'Oct 28',
    subject: 'Office Hours Confirmation',
    body: 'Your appointment for next Tuesday at 2:00 PM is confirmed. Room 402B, please bring your latest chapter draft.',
    unread: false,
    iconColor: '#7c3aed',
    iconBg: '#f3e8ff',
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

export default function ScholarInboxPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>('All')

  const filtered = MESSAGES.filter(m => {
    if (activeTab === 'Unread') return m.unread
    if (activeTab === 'Official') return m.icon === 'campaign'
    return true
  })

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f9f9ff', fontFamily: '"Inter", system-ui, sans-serif' }}>
      {/* Sidebar */}
      <aside style={{ width: 260, minWidth: 260, background: '#003f7a', height: '100vh', position: 'fixed', top: 0, left: 0, display: 'flex', flexDirection: 'column', zIndex: 40 }}>
        <div style={{ padding: '20px 20px 12px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#fff' }}>account_balance</span>
            <div style={{ color: '#fff', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 17 }}>Scholar Terminal</div>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 11 }}>Advanced Research Tier</div>
        </div>
        <div style={{ padding: '12px 12px' }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 8, padding: '9px 12px', color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>add</span>
            New Research Project
          </button>
        </div>
        <nav style={{ flex: 1, padding: '4px 12px', overflowY: 'auto' }}>
          {NAV.map(item => (
            <Link key={item.href} href={item.href} style={{ ...navItemBase, ...(item.active ? { background: 'rgba(255,255,255,0.15)', borderLeft: '3px solid #fff', paddingLeft: 9, color: '#fff' } : {}) }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div style={{ padding: '12px 12px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Link href="/support" style={navItemBase}><span className="material-symbols-outlined" style={{ fontSize: 20 }}>help</span>Support</Link>
          <Link href="/archive" style={navItemBase}><span className="material-symbols-outlined" style={{ fontSize: 20 }}>archive</span>Archive</Link>
        </div>
      </aside>

      {/* Main */}
      <main style={{ marginLeft: 260, flex: 1, padding: 32 }}>
        {/* Topbar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28, background: '#fff', borderRadius: 12, padding: '12px 20px', border: '1px solid #c2c6d2', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#003f7a' }}>school</span>
            <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 15, color: '#003f7a' }}>EduWorld Scholar</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, maxWidth: 320, margin: '0 24px' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#424750' }}>search</span>
            <input placeholder="Search messages…" style={{ border: 'none', outline: 'none', fontSize: 14, color: '#191c20', background: 'transparent', flex: 1 }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ background: '#f0fdf4', color: '#10B981', fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 99 }}>GPA: 3.98</span>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#424750', cursor: 'pointer' }}>notifications</span>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#424750', cursor: 'pointer' }}>settings</span>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#003f7a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 12, cursor: 'pointer' }}>AS</div>
          </div>
        </div>

        {/* Page Header */}
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 28, color: '#191c20', margin: '0 0 6px' }}>Mentorship & Inbox</h1>
          <p style={{ color: '#424750', fontSize: 14, margin: 0 }}>Faculty advisor communications, office hours scheduling, and connection management.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
          <div>
            {/* Priority Communications */}
            <div style={cardBase}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 17, color: '#191c20', marginBottom: 14 }}>Priority Communications</div>
              {/* Filter Tabs */}
              <div style={{ display: 'flex', gap: 4, marginBottom: 16, background: '#f5f5f5', borderRadius: 10, padding: 4 }}>
                {(['All', 'Unread', 'Official'] as FilterTab[]).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{ flex: 1, background: activeTab === tab ? '#fff' : 'transparent', border: 'none', borderRadius: 8, padding: '7px 0', fontSize: 13, fontWeight: activeTab === tab ? 700 : 500, color: activeTab === tab ? '#191c20' : '#424750', cursor: 'pointer', boxShadow: activeTab === tab ? '0 1px 3px rgba(0,0,0,0.1)' : 'none' }}
                  >
                    {tab} {tab === 'Unread' && <span style={{ background: '#003f7a', color: '#fff', fontSize: 10, fontWeight: 700, padding: '1px 6px', borderRadius: 99, marginLeft: 4 }}>2</span>}
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {filtered.map((msg, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, padding: '14px 0', borderBottom: i < filtered.length - 1 ? '1px solid #eef0f4' : 'none', cursor: 'pointer' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: msg.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 20, color: msg.iconColor }}>{msg.icon}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                        <div style={{ fontWeight: msg.unread ? 700 : 600, fontSize: 14, color: '#191c20' }}>{msg.sender}</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          {msg.unread && <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#003f7a' }} />}
                          <span style={{ fontSize: 11, color: '#424750' }}>{msg.time}</span>
                        </div>
                      </div>
                      <div style={{ fontWeight: 600, fontSize: 13, color: '#191c20', marginBottom: 3 }}>{msg.subject}</div>
                      <div style={{ fontSize: 12, color: '#424750', lineHeight: 1.4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 400 }}>{msg.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Mentor Matching */}
            <div style={cardBase}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#003f7a' }}>hub</span>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 16, color: '#191c20' }}>Mentor Matching</div>
              </div>
              <p style={{ fontSize: 13, color: '#424750', lineHeight: 1.5, marginBottom: 14 }}>
                Algorithmic matching based on thesis trajectory and academic interests.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <span style={{ background: '#e8f0fe', color: '#003f7a', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 99 }}>Machine Learning Ethics</span>
                <button style={{ background: 'none', border: 'none', color: '#003f7a', fontSize: 12, fontWeight: 600, cursor: 'pointer', padding: 0, textDecoration: 'underline' }}>+ Edit Filters</button>
              </div>
              <button style={{ width: '100%', background: '#003f7a', color: '#fff', border: 'none', borderRadius: 10, padding: '11px', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>
                Initiate Match Protocol
              </button>
            </div>

            {/* Office Hours */}
            <div style={cardBase}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#003f7a' }}>calendar_month</span>
                <div style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 16, color: '#191c20' }}>Office Hours</div>
              </div>
              <div style={{ padding: '14px', borderRadius: 12, background: '#f0fdf4', border: '1px solid #a7f3d0', marginBottom: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#10B981' }}>calendar_month</span>
                  <span style={{ background: '#d1fae5', color: '#065f46', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>Tomorrow — Confirmed</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#191c20', marginBottom: 4 }}>Prof. Aris Thorne</div>
                <div style={{ fontSize: 13, color: '#424750', marginBottom: 2 }}>14:00 – 14:30</div>
                <div style={{ fontSize: 12, color: '#424750' }}>Room 402B</div>
              </div>
              <button style={{ display: 'flex', alignItems: 'center', gap: 6, width: '100%', background: '#fff', border: '1px dashed #003f7a', borderRadius: 10, padding: '10px', color: '#003f7a', fontWeight: 600, fontSize: 13, cursor: 'pointer', justifyContent: 'center' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>add_circle</span>
                Schedule Session
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
