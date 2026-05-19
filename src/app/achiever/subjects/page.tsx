'use client'
import { useState } from 'react'
import Link from 'next/link'

const LINKS = [
  { icon: 'dashboard', label: 'Dashboard', href: '/achiever/dashboard' },
  { icon: 'analytics', label: 'Exam Tracker', href: '/achiever/exam-tracker' },
  { icon: 'storm', label: 'AI Lab', href: '/achiever/ai-study-partner' },
  { icon: 'shopping_cart', label: 'Shop', href: '/achiever/shop' },
  { icon: 'group', label: 'Community', href: '/achiever/leaderboard' },
]

const SUBJECTS = [
  { icon: 'functions', name: 'AP Calculus BC', lessons: 52, progress: 87, color: '#7C3AED', bg: 'rgba(124,58,237,0.12)', href: '/achiever/subjects/ap-calculus' },
  { icon: 'biotech', name: 'AP Biology', lessons: 48, progress: 62, color: '#10B981', bg: 'rgba(16,185,129,0.12)', href: '/achiever/subjects/ap-biology' },
  { icon: 'bolt', name: 'AP Physics C', lessons: 44, progress: 74, color: '#F59E0B', bg: 'rgba(245,158,11,0.12)', href: '/achiever/subjects/ap-physics' },
  { icon: 'menu_book', name: 'English Literature', lessons: 36, progress: 91, color: '#3B82F6', bg: 'rgba(59,130,246,0.12)', href: '/achiever/subjects' },
  { icon: 'science', name: 'AP Chemistry', lessons: 50, progress: 55, color: '#22C55E', bg: 'rgba(34,197,94,0.12)', href: '/achiever/subjects' },
  { icon: 'history_edu', name: 'World History', lessons: 40, progress: 79, color: '#F97316', bg: 'rgba(249,115,22,0.12)', href: '/achiever/subjects' },
]

const FILTERS = ['All', 'Sciences', 'Humanities', 'Math']

function Sidebar() {
  return (
    <aside style={{ width: '260px', minWidth: '260px', background: '#0A0E1A', height: '100vh', position: 'fixed' as const, left: 0, top: 0, display: 'flex', flexDirection: 'column' as const, borderRight: '1px solid rgba(255,255,255,0.06)', zIndex: 40 }}>
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
        {LINKS.map(l => (
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
  )
}

export default function AchieverSubjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <div style={{ background: '#0D1117', minHeight: '100vh', fontFamily: '"Inter", system-ui, sans-serif' }}>
      <style>{`@media(min-width:1024px){.ach-sb{display:flex!important}.ach-main{margin-left:260px!important}.ach-mnav{display:none!important}}`}</style>
      <div className="ach-sb" style={{ display: 'none' }}><Sidebar /></div>
      <div className="ach-main" style={{ marginLeft: 0 }}>
        <div style={{ height: '60px', background: '#0D1117', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', position: 'sticky' as const, top: 0, zIndex: 30 }}>
          <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '18px', margin: 0, fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>Welcome back, Alex</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '22px', cursor: 'pointer' }}>notifications</span>
            <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #7c3aed, #06B6D4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#FFFFFF', fontSize: '14px', cursor: 'pointer', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>A</div>
          </div>
        </div>

        <div style={{ padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
            <div>
              <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '28px', margin: '0 0 6px' }}>Subject Library</h1>
              <p style={{ color: '#94A3B8', fontSize: '15px', margin: 0 }}>Your enrolled courses and mastery progress.</p>
            </div>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
            {FILTERS.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} style={{
                background: activeFilter === f ? '#06B6D4' : 'rgba(255,255,255,0.06)',
                border: activeFilter === f ? 'none' : '1px solid rgba(255,255,255,0.1)',
                borderRadius: '100px',
                padding: '8px 16px',
                color: activeFilter === f ? '#FFFFFF' : '#94A3B8',
                fontSize: '13px',
                fontWeight: activeFilter === f ? 600 : 400,
                cursor: 'pointer',
                fontFamily: '"Inter", system-ui, sans-serif',
              }}>{f}</button>
            ))}
          </div>

          {/* Subject Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {SUBJECTS.map(subject => (
              <Link key={subject.name} href={subject.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#161D2F',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'border-color 0.15s',
                }}>
                  <div style={{
                    width: '48px', height: '48px',
                    background: subject.bg,
                    borderRadius: '14px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '14px',
                  }}>
                    <span className="material-symbols-outlined" style={{ color: subject.color, fontSize: '24px' }}>{subject.icon}</span>
                  </div>
                  <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '15px', margin: '0 0 4px' }}>{subject.name}</p>
                  <p style={{ color: '#94A3B8', fontSize: '13px', margin: '0 0 14px' }}>{subject.lessons} lessons</p>
                  <div style={{ marginBottom: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                      <span style={{ color: '#64748B', fontSize: '11px' }}>Progress</span>
                      <span style={{ color: subject.color, fontSize: '11px', fontWeight: 700 }}>{subject.progress}%</span>
                    </div>
                    <div style={{ height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${subject.progress}%`, background: subject.color, borderRadius: '100px' }} />
                    </div>
                  </div>
                  <button style={{
                    width: '100%',
                    background: subject.bg,
                    border: `1px solid ${subject.color}30`,
                    borderRadius: '8px',
                    padding: '8px',
                    color: subject.color,
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                  }}>
                    Continue
                  </button>
                </div>
              </Link>
            ))}
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
