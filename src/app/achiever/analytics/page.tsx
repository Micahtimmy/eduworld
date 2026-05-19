'use client'
import Link from 'next/link'

const LINKS = [
  { icon: 'dashboard', label: 'Dashboard', href: '/achiever/dashboard' },
  { icon: 'analytics', label: 'Exam Tracker', href: '/achiever/exam-tracker' },
  { icon: 'storm', label: 'AI Lab', href: '/achiever/ai-study-partner' },
  { icon: 'shopping_cart', label: 'Shop', href: '/achiever/shop' },
  { icon: 'group', label: 'Community', href: '/achiever/leaderboard' },
]

const STATS = [
  { label: 'Overall GPA', value: '3.8', icon: 'school', color: '#22C55E', trend: '+0.2 this term' },
  { label: 'Study Hours', value: '142h', icon: 'schedule', color: '#06B6D4', trend: '28h this week' },
  { label: 'XP Earned', value: '8,450', icon: 'bolt', color: '#F59E0B', trend: '+640 today' },
  { label: 'Day Streak', value: '21', icon: 'local_fire_department', color: '#EF4444', trend: 'Personal best!' },
]

const SUBJECTS = [
  { name: 'AP Calculus BC', score: 94, color: '#7C3AED' },
  { name: 'AP Physics C', score: 78, color: '#F59E0B' },
  { name: 'AP Biology', score: 88, color: '#10B981' },
  { name: 'English Lit', score: 92, color: '#06B6D4' },
  { name: 'Chemistry', score: 71, color: '#EF4444' },
]

const AI_INSIGHTS = [
  'Your Calculus score improved 8% after focusing on integration techniques — keep going.',
  'Physics weak spot: Electromagnetic Induction. AI suggests 2 targeted sessions this week.',
  'You\'re on track for a top 5% finish in your school cohort this semester.',
]

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

export default function AchieverAnalyticsPage() {
  return (
    <div style={{ background: '#0D1117', minHeight: '100vh', fontFamily: '"Inter", system-ui, sans-serif' }}>
      <style>{`@media(min-width:1024px){.ach-sb{display:flex!important}.ach-main{margin-left:260px!important}.ach-mnav{display:none!important}}`}</style>
      <div className="ach-sb" style={{ display: 'none' }}><Sidebar /></div>
      <div className="ach-main" style={{ marginLeft: 0 }}>
        {/* Topbar */}
        <div style={{ height: '60px', background: '#0D1117', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', position: 'sticky' as const, top: 0, zIndex: 30 }}>
          <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '18px', margin: 0, fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>Welcome back, Alex</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '22px', cursor: 'pointer' }}>notifications</span>
            <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '22px', cursor: 'pointer' }}>bolt</span>
            <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #7c3aed, #06B6D4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#FFFFFF', fontSize: '14px', cursor: 'pointer', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>A</div>
          </div>
        </div>

        <div style={{ padding: '28px' }}>
          <div style={{ marginBottom: '28px' }}>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '28px', margin: '0 0 6px' }}>Performance & Analytics</h1>
            <p style={{ color: '#94A3B8', fontSize: '15px', margin: 0 }}>Your academic performance overview and AI-driven insights.</p>
          </div>

          {/* Stat Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
            {STATS.map(stat => (
              <div key={stat.label} style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <span className="material-symbols-outlined" style={{ color: stat.color, fontSize: '18px' }}>{stat.icon}</span>
                  <p style={{ color: '#94A3B8', fontSize: '12px', margin: 0 }}>{stat.label}</p>
                </div>
                <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '28px', margin: '0 0 5px' }}>{stat.value}</p>
                <p style={{ color: stat.color, fontSize: '12px', margin: 0 }}>{stat.trend}</p>
              </div>
            ))}
          </div>

          {/* Study Time Chart + Subject Breakdown */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '20px', marginBottom: '20px' }}>
            {/* Line Chart */}
            <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: '0 0 20px' }}>Study Time Trend</h2>
              <div style={{ position: 'relative', height: '120px' }}>
                <svg viewBox="0 0 600 120" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 100 L100 80 L200 85 L300 55 L400 40 L500 30 L600 20" stroke="#06B6D4" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <path d="M0 100 L100 80 L200 85 L300 55 L400 40 L500 30 L600 20 L600 120 L0 120Z" fill="url(#lineGrad)" />
                  {[[0, 100], [200, 85], [300, 55], [500, 30], [600, 20]].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="4" fill="#06B6D4" />
                  ))}
                </svg>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                {['W1', 'W2', 'W3', 'W4', 'W5', 'W6'].map(w => (
                  <span key={w} style={{ color: '#64748B', fontSize: '11px' }}>{w}</span>
                ))}
              </div>
            </div>

            {/* Subject Bars */}
            <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: '0 0 20px' }}>Subject Breakdown</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {SUBJECTS.map(sub => (
                  <div key={sub.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <span style={{ color: '#CBD5E1', fontSize: '13px', fontWeight: 500 }}>{sub.name}</span>
                      <span style={{ color: sub.color, fontSize: '13px', fontWeight: 700 }}>{sub.score}%</span>
                    </div>
                    <div style={{ height: '5px', background: 'rgba(255,255,255,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${sub.score}%`, background: sub.color, borderRadius: '100px' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Insights */}
          <div style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '16px', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <span className="material-symbols-outlined" style={{ color: '#10B981', fontSize: '20px' }}>auto_awesome</span>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#10B981', fontWeight: 700, fontSize: '16px', margin: 0 }}>AI Insights</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {AI_INSIGHTS.map((insight, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <div style={{ width: '20px', height: '20px', background: 'rgba(16,185,129,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                    <span style={{ color: '#10B981', fontSize: '12px' }}>✦</span>
                  </div>
                  <p style={{ color: '#CBD5E1', fontSize: '14px', margin: 0, lineHeight: 1.5 }}>{insight}</p>
                </div>
              ))}
            </div>
            <Link href="/achiever/ai-study-partner" style={{ textDecoration: 'none' }}>
              <button style={{ marginTop: '16px', background: '#10B981', border: 'none', borderRadius: '10px', padding: '10px 18px', color: '#FFFFFF', fontSize: '13px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>auto_awesome</span>
                Generate Study Guide
              </button>
            </Link>
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
