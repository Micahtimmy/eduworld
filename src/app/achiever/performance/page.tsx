'use client'
import Link from 'next/link'

// This page is the same as analytics — performance overview
const STATS = [
  { label: 'Overall GPA', value: '3.8', icon: 'school', color: '#22C55E', trend: '+0.2 this term' },
  { label: 'Study Hours', value: '142h', icon: 'schedule', color: '#06B6D4', trend: '28h this week' },
  { label: 'XP Earned', value: '8,450', icon: 'bolt', color: '#F59E0B', trend: '+640 today' },
  { label: 'Day Streak', value: '21', icon: 'local_fire_department', color: '#EF4444', trend: 'Personal best!' },
]

const SUBJECTS = [
  { name: 'AP Calculus BC', score: 94, trend: '+3', color: '#7C3AED' },
  { name: 'AP Physics C', score: 78, trend: '-2', color: '#F59E0B' },
  { name: 'AP Biology', score: 88, trend: '+5', color: '#10B981' },
  { name: 'English Lit', score: 92, trend: '+1', color: '#3B82F6' },
  { name: 'Chemistry', score: 71, trend: '+8', color: '#22C55E' },
]

export default function AchieverPerformancePage() {
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
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '28px' }}>
            <div>
              <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '28px', margin: '0 0 6px' }}>Performance Overview</h1>
              <p style={{ color: '#94A3B8', fontSize: '14px', margin: 0 }}>Your academic results and progress across all subjects.</p>
            </div>
            <button style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '9px 16px', color: '#CBD5E1', fontSize: '13px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: '"Inter", system-ui, sans-serif' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>download</span>
              Export Report
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
            {STATS.map(stat => (
              <div key={stat.label} style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <span className="material-symbols-outlined" style={{ color: stat.color, fontSize: '18px', fontVariationSettings: '"FILL" 1' }}>{stat.icon}</span>
                  <p style={{ color: '#94A3B8', fontSize: '12px', margin: 0 }}>{stat.label}</p>
                </div>
                <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '28px', margin: '0 0 5px' }}>{stat.value}</p>
                <p style={{ color: stat.color, fontSize: '12px', margin: 0 }}>{stat.trend}</p>
              </div>
            ))}
          </div>

          {/* Subject Grades */}
          <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px', marginBottom: '20px' }}>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: '0 0 18px' }}>Subject Performance</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {SUBJECTS.map(sub => (
                <div key={sub.name} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <p style={{ color: '#CBD5E1', fontSize: '14px', fontWeight: 500, margin: 0, width: '180px', flexShrink: 0 }}>{sub.name}</p>
                  <div style={{ flex: 1, height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${sub.score}%`, background: sub.color, borderRadius: '100px' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '80px', justifyContent: 'flex-end' }}>
                    <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '14px' }}>{sub.score}%</span>
                    <span style={{ color: sub.trend.startsWith('+') ? '#22C55E' : '#EF4444', fontSize: '12px', fontWeight: 600 }}>{sub.trend}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Analysis */}
          <div style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '16px', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span className="material-symbols-outlined" style={{ color: '#10B981', fontSize: '20px' }}>auto_awesome</span>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#10B981', fontWeight: 700, fontSize: '16px', margin: 0 }}>AI Performance Analysis</h2>
            </div>
            <p style={{ color: '#CBD5E1', fontSize: '14px', lineHeight: 1.6, margin: '0 0 12px' }}>
              You&apos;re showing strong improvement in Chemistry (+8%) this term. Your biggest opportunity is in AP Physics C — a 2-week focused review could push you from 78% to 85%+ before the exam.
            </p>
            <Link href="/achiever/ai-study-partner" style={{ textDecoration: 'none' }}>
              <button style={{ background: '#10B981', border: 'none', borderRadius: '10px', padding: '10px 18px', color: '#FFFFFF', fontSize: '13px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>auto_awesome</span>
                Create Improvement Plan
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
