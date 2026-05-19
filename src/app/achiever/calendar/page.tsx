'use client'
import { useState } from 'react'
import Link from 'next/link'

const EVENTS = [
  { day: 5, label: 'Physics Lab Due', type: 'assignment', color: '#F59E0B' },
  { day: 10, label: 'English Essay Due', type: 'assignment', color: '#3B82F6' },
  { day: 15, label: 'AP Calculus BC Exam', type: 'exam', color: '#EF4444' },
  { day: 18, label: 'Today', type: 'today', color: '#7C3AED' },
  { day: 22, label: 'AP Physics C Exam', type: 'exam', color: '#EF4444' },
  { day: 25, label: 'Biology Project', type: 'assignment', color: '#10B981' },
  { day: 28, label: 'Chemistry Quiz', type: 'quiz', color: '#06B6D4' },
]

const UPCOMING = [
  { date: 'May 22', label: 'AP Physics C Exam', days: 4, type: 'exam', color: '#EF4444', icon: 'bolt' },
  { date: 'May 25', label: 'AP Biology Group Project', days: 7, type: 'assignment', color: '#10B981', icon: 'biotech' },
  { date: 'May 28', label: 'Chemistry Quiz — Chapter 8', days: 10, type: 'quiz', color: '#06B6D4', icon: 'science' },
  { date: 'June 1', label: 'SAT Exam Registration Deadline', days: 14, type: 'deadline', color: '#F59E0B', icon: 'school' },
  { date: 'June 5', label: 'SAT Exam', days: 18, type: 'exam', color: '#EF4444', icon: 'school' },
]

export default function AchieverCalendarPage() {
  const [view, setView] = useState('Month')

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
            <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #7c3aed, #06B6D4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#FFFFFF', fontSize: '14px', cursor: 'pointer', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>A</div>
          </div>
        </div>

        <div style={{ padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
            <div>
              <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '28px', margin: '0 0 6px' }}>Academic Calendar</h1>
              <p style={{ color: '#94A3B8', fontSize: '14px', margin: 0 }}>Exams, assignments, and deadlines at a glance.</p>
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
              {['Month', 'Week'].map(v => (
                <button key={v} onClick={() => setView(v)} style={{ background: view === v ? '#06B6D4' : 'rgba(255,255,255,0.06)', border: 'none', borderRadius: '8px', padding: '7px 14px', color: view === v ? '#FFFFFF' : '#94A3B8', fontSize: '12px', fontWeight: view === v ? 700 : 400, cursor: 'pointer' }}>{v}</button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '20px' }}>
            {/* Calendar Grid */}
            <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: 0 }}>May 2025</h2>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <button style={{ background: 'rgba(255,255,255,0.06)', border: 'none', borderRadius: '6px', padding: '5px 8px', color: '#94A3B8', cursor: 'pointer' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>chevron_left</span>
                  </button>
                  <button style={{ background: 'rgba(255,255,255,0.06)', border: 'none', borderRadius: '6px', padding: '5px 8px', color: '#94A3B8', cursor: 'pointer' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>chevron_right</span>
                  </button>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px', marginBottom: '6px' }}>
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                  <div key={d} style={{ textAlign: 'center', color: '#475569', fontSize: '11px', fontWeight: 600, padding: '4px 0' }}>{d}</div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '3px' }}>
                {Array.from({ length: 3 }).map((_, i) => <div key={`o${i}`} />)}
                {Array.from({ length: 31 }, (_, i) => {
                  const day = i + 1
                  const event = EVENTS.find(e => e.day === day)
                  const isToday = day === 18
                  return (
                    <div key={day} style={{
                      aspectRatio: '1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '7px',
                      fontSize: '12px',
                      fontWeight: event || isToday ? 700 : 400,
                      background: isToday ? '#7C3AED' : event ? `${event.color}20` : 'transparent',
                      color: isToday ? '#FFFFFF' : event ? event.color : '#CBD5E1',
                      border: event && !isToday ? `1px solid ${event.color}50` : '1px solid transparent',
                      cursor: 'pointer',
                      position: 'relative' as const,
                    }}>
                      {day}
                      {event && !isToday && (
                        <div style={{ position: 'absolute', bottom: '2px', left: '50%', transform: 'translateX(-50%)', width: '4px', height: '4px', background: event.color, borderRadius: '50%' }} />
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Legend */}
              <div style={{ display: 'flex', gap: '14px', marginTop: '14px', flexWrap: 'wrap' }}>
                {[
                  { label: 'Exam', color: '#EF4444' },
                  { label: 'Assignment', color: '#3B82F6' },
                  { label: 'Quiz', color: '#06B6D4' },
                  { label: 'Today', color: '#7C3AED' },
                ].map(l => (
                  <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <div style={{ width: '8px', height: '8px', background: l.color, borderRadius: '50%' }} />
                    <span style={{ color: '#94A3B8', fontSize: '11px' }}>{l.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: '0 0 16px' }}>Upcoming Deadlines</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {UPCOMING.map(ev => (
                  <div key={ev.label} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '10px', padding: '12px 14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '36px', height: '36px', background: `${ev.color}20`, borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ color: ev.color, fontSize: '18px' }}>{ev.icon}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '13px', margin: '0 0 2px' }}>{ev.label}</p>
                      <p style={{ color: '#94A3B8', fontSize: '11px', margin: 0 }}>{ev.date}</p>
                    </div>
                    <span style={{
                      background: ev.days <= 7 ? 'rgba(239,68,68,0.15)' : 'rgba(245,158,11,0.12)',
                      color: ev.days <= 7 ? '#EF4444' : '#F59E0B',
                      borderRadius: '100px', padding: '3px 8px',
                      fontSize: '11px', fontWeight: 700, flexShrink: 0,
                    }}>{ev.days}d</span>
                  </div>
                ))}
              </div>
            </div>
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
