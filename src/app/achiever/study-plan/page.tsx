'use client'
import Link from 'next/link'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const STUDY_BLOCKS = [
  { day: 0, time: '3:30PM', subject: 'AP Calculus', duration: '45m', color: '#7C3AED', bg: 'rgba(124,58,237,0.15)' },
  { day: 0, time: '4:30PM', subject: 'Physics', duration: '30m', color: '#F59E0B', bg: 'rgba(245,158,11,0.12)' },
  { day: 1, time: '3:00PM', subject: 'AP Biology', duration: '60m', color: '#10B981', bg: 'rgba(16,185,129,0.12)' },
  { day: 1, time: '5:00PM', subject: 'English Lit', duration: '45m', color: '#3B82F6', bg: 'rgba(59,130,246,0.12)' },
  { day: 2, time: '3:30PM', subject: 'AP Calculus', duration: '45m', color: '#7C3AED', bg: 'rgba(124,58,237,0.15)' },
  { day: 3, time: '4:00PM', subject: 'Chemistry', duration: '60m', color: '#22C55E', bg: 'rgba(34,197,94,0.12)' },
  { day: 4, time: '3:00PM', subject: 'Full Review', duration: '90m', color: '#06B6D4', bg: 'rgba(6,182,212,0.12)' },
]

const DAILY_GOALS = [
  { task: 'Complete 2 Calculus practice problems', done: true },
  { task: 'Review Physics Chapter 6 notes', done: true },
  { task: 'AP Biology flashcard session (20 cards)', done: false },
  { task: 'Read English Lit passage for tomorrow', done: false },
  { task: 'Practice exam question from 2022 paper', done: false },
]

export default function AchieverStudyPlanPage() {
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span style={{ color: '#F59E0B', fontSize: '16px' }}>✦</span>
                <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '24px', margin: 0 }}>Your AI Study Plan</h1>
              </div>
              <p style={{ color: '#94A3B8', fontSize: '14px', margin: 0 }}>Adaptive weekly schedule — optimized by AI based on your exam dates and performance.</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '8px', padding: '6px 12px' }}>
              <span className="material-symbols-outlined" style={{ color: '#10B981', fontSize: '16px' }}>auto_awesome</span>
              <span style={{ color: '#10B981', fontSize: '12px', fontWeight: 600 }}>Optimized by AI</span>
            </div>
          </div>

          {/* Progress */}
          <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px 20px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '14px', margin: 0 }}>Today&apos;s Progress — 2 of 5 tasks complete</p>
                <span style={{ color: '#F59E0B', fontWeight: 700, fontSize: '13px' }}>+250 XP Available</span>
              </div>
              <div style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '40%', background: 'linear-gradient(90deg, #7c3aed, #06B6D4)', borderRadius: '100px' }} />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
              <span className="material-symbols-outlined" style={{ color: '#F97316', fontSize: '28px', fontVariationSettings: '"FILL" 1' }}>local_fire_department</span>
              <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '18px', margin: '2px 0 0', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>7</p>
              <p style={{ color: '#94A3B8', fontSize: '11px', margin: 0 }}>Day Streak</p>
            </div>
          </div>

          {/* Weekly Schedule Grid */}
          <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px', marginBottom: '20px' }}>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: '0 0 16px' }}>Weekly Schedule</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
              {DAYS.map((day, di) => {
                const blocks = STUDY_BLOCKS.filter(b => b.day === di)
                return (
                  <div key={day}>
                    <p style={{ color: di === 0 ? '#06B6D4' : '#64748B', fontSize: '12px', fontWeight: 600, margin: '0 0 8px', textAlign: 'center' }}>{day}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', minHeight: '60px' }}>
                      {blocks.length === 0 ? (
                        <div style={{ flex: 1, background: 'rgba(255,255,255,0.03)', borderRadius: '6px', minHeight: '40px' }} />
                      ) : blocks.map((b, bi) => (
                        <div key={bi} style={{ background: b.bg, borderRadius: '6px', padding: '5px 6px', borderLeft: `2px solid ${b.color}` }}>
                          <p style={{ color: b.color, fontSize: '10px', fontWeight: 700, margin: '0 0 1px', lineHeight: 1.2 }}>{b.subject}</p>
                          <p style={{ color: '#64748B', fontSize: '9px', margin: 0 }}>{b.time} · {b.duration}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Daily Goals Checklist + AI recommendation */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: '0 0 14px' }}>Daily Goals</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {DAILY_GOALS.map((g, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div style={{
                      width: '20px', height: '20px', borderRadius: '6px', flexShrink: 0, marginTop: '1px',
                      background: g.done ? '#22C55E' : 'rgba(255,255,255,0.06)',
                      border: g.done ? 'none' : '1px solid rgba(255,255,255,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {g.done && <span className="material-symbols-outlined" style={{ color: '#FFFFFF', fontSize: '14px', fontVariationSettings: '"FILL" 1' }}>check</span>}
                    </div>
                    <p style={{ color: g.done ? '#64748B' : '#CBD5E1', fontSize: '13px', margin: 0, textDecoration: g.done ? 'line-through' : 'none', lineHeight: 1.4 }}>{g.task}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '16px', padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <span className="material-symbols-outlined" style={{ color: '#10B981', fontSize: '20px' }}>auto_awesome</span>
                <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#10B981', fontWeight: 700, fontSize: '15px', margin: 0 }}>AI Recommendation</h2>
              </div>
              <p style={{ color: '#CBD5E1', fontSize: '14px', lineHeight: 1.6, margin: '0 0 16px' }}>
                Focus on <strong style={{ color: '#FFFFFF' }}>integration by parts</strong> this week. Your predicted exam grade rises from B+ to A− with 3 focused sessions on this topic.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="/achiever/ai-study-partner" style={{ textDecoration: 'none' }}>
                  <button style={{ width: '100%', background: '#10B981', border: 'none', borderRadius: '10px', padding: '10px', color: '#FFFFFF', fontSize: '13px', fontWeight: 700, cursor: 'pointer', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
                    Start AI Study Session
                  </button>
                </Link>
                <button style={{ width: '100%', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '10px', padding: '10px', color: '#10B981', fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
                  Regenerate Plan
                </button>
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
