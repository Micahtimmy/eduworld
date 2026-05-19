'use client'
import Link from 'next/link'

const FEED_ITEMS = [
  { icon: 'assignment', iconColor: '#06B6D4', bg: 'rgba(6,182,212,0.12)', author: 'Mr. Henderson', role: 'Teacher', action: 'posted a new assignment', detail: 'Problem Set 9: Series & Sequences — Due Friday', time: '5 min ago', hasAction: true, actionLabel: 'View Assignment' },
  { icon: 'emoji_events', iconColor: '#F59E0B', bg: 'rgba(245,158,11,0.12)', author: 'Sarah M.', role: 'Classmate', action: 'scored 98% on AP Physics C Quiz', detail: 'Kinematics — Chapter 4', time: '20 min ago', hasAction: false, actionLabel: '' },
  { icon: 'auto_awesome', iconColor: '#10B981', bg: 'rgba(16,185,129,0.12)', author: 'Achiever AI', role: 'AI Tutor', action: 'suggests a study session', detail: 'Applications of Integration — identified as your weakest area before the exam', time: '1 hour ago', hasAction: true, actionLabel: 'Start Session' },
  { icon: 'grade', iconColor: '#22C55E', bg: 'rgba(34,197,94,0.12)', author: 'Dr. Chen', role: 'Teacher', action: 'graded your essay', detail: 'French Revolution DBQ — Score: 88/100 (A-)', time: '2 hours ago', hasAction: true, actionLabel: 'View Feedback' },
  { icon: 'group', iconColor: '#7C3AED', bg: 'rgba(124,58,237,0.12)', author: 'James L.', role: 'Classmate', action: 'invited you to a study group', detail: 'AP Calculus BC Prep — Saturday 2PM', time: '3 hours ago', hasAction: true, actionLabel: 'Join Group' },
  { icon: 'local_fire_department', iconColor: '#F97316', bg: 'rgba(249,115,22,0.12)', author: 'EduWorld', role: 'Platform', action: 'Priya R. hit a 30-day streak!', detail: 'She earned the "Iron Will" badge', time: '4 hours ago', hasAction: false, actionLabel: '' },
  { icon: 'announcement', iconColor: '#3B82F6', bg: 'rgba(59,130,246,0.12)', author: 'Ms. Martinez', role: 'Teacher', action: 'posted a class announcement', detail: 'Physics midterm rescheduled to May 22 — additional prep time granted.', time: '5 hours ago', hasAction: false, actionLabel: '' },
]

export default function AchieverActivityFeedPage() {
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

        <div style={{ padding: '28px', maxWidth: '720px' }}>
          <div style={{ marginBottom: '24px' }}>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '28px', margin: '0 0 6px' }}>Class Activity Feed</h1>
            <p style={{ color: '#94A3B8', fontSize: '14px', margin: 0 }}>EWD-027 · Live updates from your classes, teachers, and peers.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {FEED_ITEMS.map((item, i) => (
              <div key={i} style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '16px 18px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', background: item.bg, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span className="material-symbols-outlined" style={{ color: item.iconColor, fontSize: '20px', fontVariationSettings: '"FILL" 1' }}>{item.icon}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px', flexWrap: 'wrap' }}>
                    <span style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '14px' }}>{item.author}</span>
                    <span style={{ color: '#64748B', fontSize: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', padding: '1px 6px' }}>{item.role}</span>
                    <span style={{ color: '#94A3B8', fontSize: '13px' }}>{item.action}</span>
                  </div>
                  <p style={{ color: '#94A3B8', fontSize: '13px', margin: '0 0 10px', lineHeight: 1.4 }}>{item.detail}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ color: '#475569', fontSize: '11px' }}>{item.time}</span>
                    {item.hasAction && (
                      <button style={{
                        background: 'rgba(6,182,212,0.1)',
                        border: '1px solid rgba(6,182,212,0.2)',
                        borderRadius: '8px',
                        padding: '5px 12px',
                        color: '#06B6D4',
                        fontSize: '12px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontFamily: '"Inter", system-ui, sans-serif',
                      }}>{item.actionLabel}</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '11px 24px', color: '#94A3B8', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
              Load More Activity
            </button>
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
