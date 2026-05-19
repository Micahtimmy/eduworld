'use client'
import { useState } from 'react'
import Link from 'next/link'

const ASSIGNMENTS = [
  { urgency: 'Due in 4h', subject: 'AP Chemistry', title: 'Kinetics Lab Report: Iodine Clock Reaction', desc: 'Complete data analysis and write Arrhenius equation conclusion.', status: 'In Progress', statusColor: '#F59E0B', icon: 'science' },
  { urgency: 'Tomorrow', subject: 'European History', title: 'French Revolution DBQ Essay', desc: 'Analyze the Reign of Terror through primary source documents.', status: 'Not Started', statusColor: '#94A3B8', icon: 'history_edu' },
  { urgency: 'Friday', subject: 'AP Calculus BC', title: 'Problem Set 4: Integration by Parts', desc: 'Questions 1–25 odd. Show all steps clearly.', status: 'Submitted', statusColor: '#22C55E', icon: 'functions' },
  { urgency: 'Next Mon', subject: 'AP Biology', title: 'Cell Respiration Written Analysis', desc: 'Compare aerobic and anaerobic respiration pathways with examples.', status: 'Not Started', statusColor: '#94A3B8', icon: 'biotech' },
]

const FILTERS = ['All', 'Pending', 'In Progress', 'Submitted']

export default function AchieverAssignmentsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <div style={{ background: '#0D1117', minHeight: '100vh', fontFamily: '"Inter", system-ui, sans-serif' }}>
      <style>{`@media(min-width:1024px){.ach-sb{display:flex!important}.ach-main{margin-left:260px!important}.ach-mnav{display:none!important}}`}</style>

      <aside className="ach-sb" style={{ display: 'none', width: '260px', minWidth: '260px', background: '#0A0E1A', height: '100vh', position: 'fixed' as const, left: 0, top: 0, flexDirection: 'column' as const, borderRight: '1px solid rgba(255,255,255,0.06)', zIndex: 40 }}>
        <div style={{ padding: '24px 20px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #7c3aed, #06B6D4)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 800, color: '#FFFFFF', fontSize: '16px' }}>A</div>
            <div>
              <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '15px', margin: 0, fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>Achievers</p>
              <p style={{ color: '#94A3B8', fontSize: '11px', margin: 0 }}>Study Smarter</p>
            </div>
          </div>
        </div>
        <div style={{ padding: '0 16px 20px' }}>
          <Link href="/achiever/ai-study-partner" style={{ textDecoration: 'none' }}>
            <button style={{ width: '100%', background: 'linear-gradient(135deg, #7c3aed, #06B6D4)', border: 'none', borderRadius: '10px', padding: '10px 14px', color: '#FFFFFF', fontSize: '13px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '7px', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>storm</span>Start AI Session
            </button>
          </Link>
        </div>
        <nav style={{ flex: 1, padding: '0 12px', display: 'flex', flexDirection: 'column' as const, gap: '2px' }}>
          {[
            { icon: 'dashboard', label: 'Dashboard', href: '/achiever/dashboard' },
            { icon: 'analytics', label: 'Exam Tracker', href: '/achiever/exam-tracker' },
            { icon: 'storm', label: 'AI Lab', href: '/achiever/ai-study-partner' },
            { icon: 'shopping_cart', label: 'Shop', href: '/achiever/shop' },
            { icon: 'group', label: 'Community', href: '/achiever/leaderboard' },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: '10px', background: 'transparent', cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '20px' }}>{l.icon}</span>
                <span style={{ color: '#94A3B8', fontSize: '14px' }}>{l.label}</span>
              </div>
            </Link>
          ))}
        </nav>
        <div style={{ padding: '12px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {[{ icon: 'settings', label: 'Settings', href: '/settings' }, { icon: 'help', label: 'Help', href: '#' }].map(l => (
            <Link key={l.href} href={l.href} style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 12px', borderRadius: '10px', cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '20px' }}>{l.icon}</span>
                <span style={{ color: '#94A3B8', fontSize: '14px' }}>{l.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </aside>

      <div className="ach-main" style={{ marginLeft: 0 }}>
        <div style={{ height: '60px', background: '#0D1117', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', position: 'sticky' as const, top: 0, zIndex: 30 }}>
          <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '18px', margin: 0, fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>Welcome back, Alex</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '22px', cursor: 'pointer' }}>notifications</span>
            <span style={{ color: '#F59E0B', fontWeight: 700, fontSize: '14px' }}>🔥 2,450 XP</span>
            <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #7c3aed, #06B6D4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#FFFFFF', fontSize: '14px', cursor: 'pointer', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>A</div>
          </div>
        </div>

        <div style={{ padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
            <div>
              <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '28px', margin: '0 0 6px' }}>My Assignments</h1>
              <p style={{ color: '#94A3B8', fontSize: '14px', margin: 0 }}>Track your academic tasks and deadlines.</p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '8px 14px' }}>
                <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '16px' }}>search</span>
                <input placeholder="Search assignments..." style={{ background: 'none', border: 'none', outline: 'none', color: '#CBD5E1', fontSize: '13px', width: '180px', fontFamily: '"Inter", system-ui, sans-serif' }} />
              </div>
            </div>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
            {FILTERS.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} style={{
                background: activeFilter === f ? '#06B6D4' : 'rgba(255,255,255,0.06)',
                border: activeFilter === f ? 'none' : '1px solid rgba(255,255,255,0.1)',
                borderRadius: '100px', padding: '7px 16px',
                color: activeFilter === f ? '#FFFFFF' : '#94A3B8',
                fontSize: '13px', fontWeight: activeFilter === f ? 600 : 400,
                cursor: 'pointer', fontFamily: '"Inter", system-ui, sans-serif',
              }}>{f}</button>
            ))}
          </div>

          {/* Assignment Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            {ASSIGNMENTS.map(a => (
              <div key={a.title} style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{
                    width: '42px', height: '42px',
                    background: 'rgba(6,182,212,0.1)',
                    borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <span className="material-symbols-outlined" style={{ color: '#06B6D4', fontSize: '20px' }}>{a.icon}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '5px', flexWrap: 'wrap' }}>
                      <span style={{
                        background: a.urgency.includes('4h') ? 'rgba(239,68,68,0.15)' : 'rgba(6,182,212,0.1)',
                        color: a.urgency.includes('4h') ? '#EF4444' : '#06B6D4',
                        borderRadius: '100px', padding: '3px 10px',
                        fontSize: '11px', fontWeight: 700,
                      }}>{a.urgency}</span>
                      <span style={{ color: '#94A3B8', fontSize: '12px' }}>{a.subject}</span>
                    </div>
                    <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '15px', margin: '0 0 4px', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>{a.title}</p>
                    <p style={{ color: '#94A3B8', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>{a.desc}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px', flexShrink: 0 }}>
                    <span style={{
                      background: `${a.statusColor}20`,
                      color: a.statusColor,
                      borderRadius: '100px', padding: '4px 12px',
                      fontSize: '12px', fontWeight: 600,
                    }}>{a.status}</span>
                    <button style={{
                      background: a.status === 'Submitted' ? 'rgba(255,255,255,0.06)' : '#06B6D4',
                      border: a.status === 'Submitted' ? '1px solid rgba(255,255,255,0.1)' : 'none',
                      borderRadius: '8px', padding: '7px 16px',
                      color: a.status === 'Submitted' ? '#94A3B8' : '#FFFFFF',
                      fontSize: '12px', fontWeight: 600, cursor: 'pointer',
                      fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                    }}>
                      {a.status === 'In Progress' ? 'Resume' : a.status === 'Submitted' ? 'View' : 'Start'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Teacher Feedback */}
          <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: 0 }}>Teacher Feedback</h2>
              <span style={{ background: 'rgba(6,182,212,0.15)', color: '#06B6D4', borderRadius: '100px', padding: '3px 10px', fontSize: '11px', fontWeight: 700 }}>3 New</span>
            </div>
            {[
              { init: 'DS', name: 'Dr. Smith', subject: 'Literature', time: '2h ago', note: 'Excellent thesis statement. Consider expanding on the symbolism in the final act...' },
              { init: 'MJ', name: 'Mr. Johnson', subject: 'Physics', time: '1d ago', note: 'Good data collection, but review your error propagation calculations.' },
            ].map(f => (
              <div key={f.name} style={{ display: 'flex', gap: '12px', paddingBottom: '14px', marginBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '34px', height: '34px', background: 'rgba(124,58,237,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, color: '#A78BFA', flexShrink: 0, fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>{f.init}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <span style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '13px' }}>{f.name}</span>
                    <span style={{ color: '#64748B', fontSize: '12px' }}>· {f.subject}</span>
                    <span style={{ color: '#64748B', fontSize: '11px', marginLeft: 'auto' }}>{f.time}</span>
                  </div>
                  <p style={{ color: '#94A3B8', fontSize: '13px', margin: 0, lineHeight: 1.4 }}>{f.note}</p>
                </div>
              </div>
            ))}
            <button style={{ background: 'none', border: 'none', color: '#06B6D4', fontSize: '13px', fontWeight: 600, cursor: 'pointer', padding: 0 }}>View All Feedback</button>
          </div>
        </div>
      </div>

      <div className="ach-mnav" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#0A0E1A', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', zIndex: 50, padding: '8px 0 12px' }}>
        {[{ icon: 'dashboard', label: 'Home', href: '/achiever/dashboard' }, { icon: 'analytics', label: 'Exams', href: '/achiever/exam-tracker' }, { icon: 'storm', label: 'AI', href: '/achiever/ai-study-partner' }, { icon: 'group', label: 'Community', href: '/achiever/leaderboard' }].map(item => (
          <Link key={item.href} href={item.href} style={{ flex: 1, textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
            <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '22px' }}>{item.icon}</span>
            <span style={{ color: '#94A3B8', fontSize: '10px' }}>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
