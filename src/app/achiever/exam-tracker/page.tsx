'use client'
import Link from 'next/link'

const S = {
  page: { background: '#0D1117', minHeight: '100vh', fontFamily: '"Inter", system-ui, sans-serif' },
  sidebar: { width: '260px', minWidth: '260px', background: '#0A0E1A', height: '100vh', position: 'fixed' as const, left: 0, top: 0, display: 'flex', flexDirection: 'column' as const, borderRight: '1px solid rgba(255,255,255,0.06)', zIndex: 40 },
  main: { marginLeft: '260px', padding: '28px', maxWidth: '1100px' },
  topbar: { height: '60px', background: '#0D1117', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center' as const, justifyContent: 'space-between' as const, padding: '0 28px', position: 'sticky' as const, top: 0, zIndex: 30 },
  card: { background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' },
}

const LINKS = [
  { icon: 'dashboard', label: 'Dashboard', href: '/achiever/dashboard' },
  { icon: 'analytics', label: 'Exam Tracker', href: '/achiever/exam-tracker', active: true },
  { icon: 'storm', label: 'AI Lab', href: '/achiever/ai-study-partner' },
  { icon: 'shopping_cart', label: 'Shop', href: '/achiever/shop' },
  { icon: 'group', label: 'Community', href: '/achiever/leaderboard' },
]

const EXAMS = [
  { subject: 'AP Calculus BC', date: 'May 15, 2025', days: 14, icon: 'functions', color: '#7C3AED', dotColor: '#7C3AED' },
  { subject: 'AP Physics C', date: 'May 22, 2025', days: 21, icon: 'bolt', color: '#F59E0B', dotColor: '#F59E0B' },
  { subject: 'SAT Exam', date: 'June 5, 2025', days: 35, icon: 'school', color: '#06B6D4', dotColor: '#06B6D4' },
  { subject: 'AP Chemistry', date: 'June 10, 2025', days: 40, icon: 'science', color: '#22C55E', dotColor: '#22C55E' },
]

const DAYS_IN_MAY = Array.from({ length: 31 }, (_, i) => i + 1)
const EXAM_DATES_MAY = [15, 22]

function Sidebar() {
  return (
    <aside style={S.sidebar}>
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
      <nav style={{ flex: 1, padding: '0 12px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {LINKS.map(l => (
          <Link key={l.href} href={l.href} style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: '10px', background: l.active ? 'rgba(6,182,212,0.12)' : 'transparent', cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ color: l.active ? '#06B6D4' : '#94A3B8', fontSize: '20px' }}>{l.icon}</span>
              <span style={{ color: l.active ? '#06B6D4' : '#94A3B8', fontSize: '14px', fontWeight: l.active ? 600 : 400 }}>{l.label}</span>
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

export default function AchieverExamTrackerPage() {
  return (
    <div style={S.page}>
      <style>{`@media(min-width:1024px){.ach-sidebar{display:flex!important}.ach-main{margin-left:260px!important}.ach-mnav{display:none!important}}`}</style>
      <div className="ach-sidebar" style={{ display: 'none' }}><Sidebar /></div>

      <div className="ach-main" style={{ marginLeft: 0 }}>
        {/* Topbar */}
        <div style={S.topbar}>
          <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '18px', margin: 0, fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>Welcome back, Alex</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '22px', cursor: 'pointer' }}>notifications</span>
            <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '22px', cursor: 'pointer' }}>bolt</span>
            <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #7c3aed, #06B6D4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#FFFFFF', fontSize: '14px', cursor: 'pointer', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>A</div>
          </div>
        </div>

        <div style={{ padding: '28px' }}>
          {/* Heading */}
          <div style={{ marginBottom: '28px' }}>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '28px', margin: '0 0 6px' }}>Exam Tracker</h1>
            <p style={{ color: '#94A3B8', fontSize: '15px', margin: 0 }}>Track upcoming exams, countdown timers, and prep progress.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {/* Calendar */}
            <div style={S.card}>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: '0 0 16px' }}>May 2025</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', marginBottom: '8px' }}>
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                  <div key={i} style={{ textAlign: 'center', color: '#64748B', fontSize: '11px', fontWeight: 600, padding: '4px 0' }}>{d}</div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
                {/* Offset for May starting on Thursday (index 4) */}
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={`off-${i}`} />
                ))}
                {DAYS_IN_MAY.map(day => {
                  const isExam = EXAM_DATES_MAY.includes(day)
                  const isToday = day === 18
                  return (
                    <div key={day} style={{
                      aspectRatio: '1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: isExam || isToday ? 700 : 400,
                      background: isExam ? 'rgba(6,182,212,0.2)' : isToday ? 'rgba(124,58,237,0.2)' : 'transparent',
                      color: isExam ? '#06B6D4' : isToday ? '#A78BFA' : '#CBD5E1',
                      border: isExam ? '1px solid rgba(6,182,212,0.4)' : isToday ? '1px solid rgba(124,58,237,0.4)' : '1px solid transparent',
                      cursor: 'pointer',
                    }}>{day}</div>
                  )
                })}
              </div>
              <div style={{ marginTop: '14px', display: 'flex', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', background: '#06B6D4', borderRadius: '50%' }} />
                  <span style={{ color: '#94A3B8', fontSize: '12px' }}>Exam Date</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', background: '#A78BFA', borderRadius: '50%' }} />
                  <span style={{ color: '#94A3B8', fontSize: '12px' }}>Today</span>
                </div>
              </div>
            </div>

            {/* Upcoming Exams List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {EXAMS.map(exam => (
                <div key={exam.subject} style={{ ...S.card, padding: '16px 18px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '42px', height: '42px',
                    background: `rgba(${exam.color === '#7C3AED' ? '124,58,237' : exam.color === '#F59E0B' ? '245,158,11' : exam.color === '#06B6D4' ? '6,182,212' : '34,197,94'}, 0.15)`,
                    borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <span className="material-symbols-outlined" style={{ color: exam.color, fontSize: '20px' }}>{exam.icon}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '14px', margin: '0 0 3px', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>{exam.subject}</p>
                    <p style={{ color: '#94A3B8', fontSize: '12px', margin: 0 }}>{exam.date}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                    <div style={{
                      background: exam.days <= 14 ? 'rgba(239,68,68,0.15)' : 'rgba(245,158,11,0.15)',
                      border: `1px solid ${exam.days <= 14 ? 'rgba(239,68,68,0.3)' : 'rgba(245,158,11,0.3)'}`,
                      borderRadius: '100px',
                      padding: '3px 10px',
                    }}>
                      <span style={{ color: exam.days <= 14 ? '#EF4444' : '#F59E0B', fontSize: '11px', fontWeight: 700 }}>{exam.days}d</span>
                    </div>
                    <Link href="/achiever/exam-prep" style={{ textDecoration: 'none' }}>
                      <button style={{ background: '#06B6D4', border: 'none', borderRadius: '8px', padding: '5px 12px', color: '#FFFFFF', fontSize: '11px', fontWeight: 700, cursor: 'pointer', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
                        Study Now
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Trend */}
          <div style={{ ...S.card, marginTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: 0 }}>Performance Trend</h2>
              <div style={{ display: 'flex', gap: '8px' }}>
                {['1M', '3M', 'All'].map((t, i) => (
                  <button key={t} style={{
                    background: i === 0 ? '#06B6D4' : 'rgba(255,255,255,0.06)',
                    border: 'none', borderRadius: '8px', padding: '5px 12px',
                    color: i === 0 ? '#FFFFFF' : '#94A3B8',
                    fontSize: '12px', fontWeight: 600, cursor: 'pointer',
                  }}>{t}</button>
                ))}
              </div>
            </div>
            {/* SVG Mini Chart */}
            <div style={{ position: 'relative', height: '100px' }}>
              <svg viewBox="0 0 600 100" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M 0 80 L 80 65 L 160 70 L 240 45 L 320 35 L 400 25 L 480 20 L 600 15" stroke="#06B6D4" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M 0 80 L 80 65 L 160 70 L 240 45 L 320 35 L 400 25 L 480 20 L 600 15 L 600 100 L 0 100 Z" fill="url(#chartGrad)" />
                {[[80, 65], [240, 45], [400, 25], [600, 15]].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="4" fill="#06B6D4" />
                ))}
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                {['Jan', 'Feb', 'Mar', 'Apr', 'May'].map(m => (
                  <span key={m} style={{ color: '#64748B', fontSize: '11px' }}>{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="ach-mnav" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#0A0E1A', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', zIndex: 50, padding: '8px 0 12px' }}>
        {[{ icon: 'dashboard', label: 'Home', href: '/achiever/dashboard' }, { icon: 'analytics', label: 'Exams', href: '/achiever/exam-tracker', active: true }, { icon: 'storm', label: 'AI', href: '/achiever/ai-study-partner' }, { icon: 'group', label: 'Community', href: '/achiever/leaderboard' }].map(item => (
          <Link key={item.href} href={item.href} style={{ flex: 1, textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
            <span className="material-symbols-outlined" style={{ color: item.active ? '#06B6D4' : '#94A3B8', fontSize: '22px' }}>{item.icon}</span>
            <span style={{ color: item.active ? '#06B6D4' : '#94A3B8', fontSize: '10px', fontWeight: item.active ? 600 : 400 }}>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
