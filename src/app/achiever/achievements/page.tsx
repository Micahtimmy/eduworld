'use client'
import { useState } from 'react'
import Link from 'next/link'

const ACHIEVEMENTS = [
  { id: '1', title: 'First Step', desc: 'Complete your first lesson', icon: 'star', color: '#F59E0B', tier: 'bronze', xp: 10, unlocked: true },
  { id: '2', title: 'Quick Learner', desc: 'Complete 5 lessons', icon: 'bolt', color: '#06B6D4', tier: 'silver', xp: 25, unlocked: true },
  { id: '3', title: 'Streak Master', desc: '7 day study streak', icon: 'local_fire_department', color: '#EF4444', tier: 'gold', xp: 50, unlocked: true },
  { id: '4', title: 'AI Explorer', desc: 'Ask the AI tutor 10 questions', icon: 'storm', color: '#10B981', tier: 'bronze', xp: 15, unlocked: true },
  { id: '5', title: 'Math Wizard', desc: 'Score 100% on a maths quiz', icon: 'functions', color: '#7C3AED', tier: 'gold', xp: 40, unlocked: false },
  { id: '6', title: 'Science Star', desc: 'Complete all science lessons', icon: 'biotech', color: '#3B82F6', tier: 'platinum', xp: 100, unlocked: false },
  { id: '7', title: 'Speed Runner', desc: 'Finish a lesson in under 5 min', icon: 'speed', color: '#22C55E', tier: 'silver', xp: 20, unlocked: false },
  { id: '8', title: 'Perfect Score', desc: 'Ace 3 quizzes in a row', icon: 'emoji_events', color: '#F59E0B', tier: 'diamond', xp: 150, unlocked: false },
  { id: '9', title: 'Night Owl', desc: 'Study after 10 PM', icon: 'dark_mode', color: '#8B5CF6', tier: 'bronze', xp: 10, unlocked: true },
  { id: '10', title: 'Top of Class', desc: 'Rank #1 on the leaderboard', icon: 'workspace_premium', color: '#F59E0B', tier: 'diamond', xp: 200, unlocked: false },
  { id: '11', title: 'Group Leader', desc: 'Lead 3 study huddles', icon: 'group', color: '#06B6D4', tier: 'silver', xp: 30, unlocked: false },
  { id: '12', title: 'Consistent', desc: '30 day study streak', icon: 'calendar_month', color: '#EF4444', tier: 'platinum', xp: 120, unlocked: false },
]

const TIER_COLORS: Record<string, string> = {
  bronze: '#CD7F32',
  silver: '#94A3B8',
  gold: '#F59E0B',
  platinum: '#06B6D4',
  diamond: '#7C3AED',
}

export default function AchieverAchievementsPage() {
  const [filter, setFilter] = useState('All')
  const unlocked = ACHIEVEMENTS.filter(a => a.unlocked)
  const filtered = filter === 'All' ? ACHIEVEMENTS : filter === 'Unlocked' ? ACHIEVEMENTS.filter(a => a.unlocked) : ACHIEVEMENTS.filter(a => !a.unlocked)

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
          <div style={{ marginBottom: '28px' }}>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '28px', margin: '0 0 6px' }}>Achievements</h1>
            <p style={{ color: '#94A3B8', fontSize: '14px', margin: 0 }}>Your badges, milestones, and earned XP rewards.</p>
          </div>

          {/* Summary banner */}
          <div style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.18), rgba(6,182,212,0.1))', border: '1px solid rgba(124,58,237,0.3)', borderRadius: '16px', padding: '20px 24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '32px' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '32px', margin: 0 }}>{unlocked.length}</p>
              <p style={{ color: '#94A3B8', fontSize: '13px', margin: 0 }}>Unlocked</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#94A3B8', fontWeight: 700, fontSize: '32px', margin: 0 }}>{ACHIEVEMENTS.length - unlocked.length}</p>
              <p style={{ color: '#94A3B8', fontSize: '13px', margin: 0 }}>Locked</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#F59E0B', fontWeight: 700, fontSize: '32px', margin: 0 }}>{unlocked.reduce((acc, a) => acc + a.xp, 0)}</p>
              <p style={{ color: '#94A3B8', fontSize: '13px', margin: 0 }}>XP Earned</p>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ color: '#CBD5E1', fontSize: '13px', fontWeight: 600 }}>Progress</span>
                <span style={{ color: '#CBD5E1', fontSize: '13px' }}>{unlocked.length}/{ACHIEVEMENTS.length}</span>
              </div>
              <div style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${(unlocked.length / ACHIEVEMENTS.length) * 100}%`, background: 'linear-gradient(90deg, #7C3AED, #06B6D4)', borderRadius: '100px' }} />
              </div>
            </div>
          </div>

          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
            {['All', 'Unlocked', 'Locked'].map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{ background: filter === f ? '#06B6D4' : 'rgba(255,255,255,0.06)', border: 'none', borderRadius: '8px', padding: '7px 16px', color: filter === f ? '#FFFFFF' : '#94A3B8', fontSize: '13px', fontWeight: filter === f ? 700 : 400, cursor: 'pointer' }}>{f}</button>
            ))}
          </div>

          {/* Achievement grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '14px' }}>
            {filtered.map(ach => (
              <div key={ach.id} style={{ background: '#161D2F', border: `1px solid ${ach.unlocked ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)'}`, borderRadius: '16px', padding: '20px', textAlign: 'center', opacity: ach.unlocked ? 1 : 0.5, position: 'relative' as const, overflow: 'hidden' }}>
                {ach.unlocked && (
                  <div style={{ position: 'absolute', top: '10px', right: '10px', width: '18px', height: '18px', background: '#22C55E', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="material-symbols-outlined" style={{ color: '#FFFFFF', fontSize: '11px', fontVariationSettings: '"FILL" 1' }}>check</span>
                  </div>
                )}
                <div style={{ width: '56px', height: '56px', background: `${ach.color}20`, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                  <span className="material-symbols-outlined" style={{ color: ach.unlocked ? ach.color : '#475569', fontSize: '26px', fontVariationSettings: '"FILL" 1' }}>{ach.unlocked ? ach.icon : 'lock'}</span>
                </div>
                <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '13px', margin: '0 0 4px' }}>{ach.title}</p>
                <p style={{ color: '#94A3B8', fontSize: '11px', margin: '0 0 10px', lineHeight: 1.4 }}>{ach.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <div style={{ width: '8px', height: '8px', background: TIER_COLORS[ach.tier], borderRadius: '50%' }} />
                  <span style={{ color: TIER_COLORS[ach.tier], fontSize: '10px', fontWeight: 700, textTransform: 'uppercase' as const }}>{ach.tier}</span>
                  <span style={{ color: '#475569', fontSize: '10px' }}>·</span>
                  <span style={{ color: '#F59E0B', fontSize: '11px', fontWeight: 600 }}>+{ach.xp} XP</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="ach-mnav" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#0A0E1A', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', zIndex: 50, padding: '8px 0 12px' }}>
        {[{ icon: 'dashboard', label: 'Home', href: '/achiever/dashboard' }, { icon: 'analytics', label: 'Exams', href: '/achiever/exam-tracker' }, { icon: 'storm', label: 'AI', href: '/achiever/ai-study-partner' }, { icon: 'group', label: 'Community', href: '/achiever/leaderboard' }].map(item => (
          <Link key={item.href} href={item.href} style={{ flex: 1, textDecoration: 'none', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '3px' }}>
            <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '22px' }}>{item.icon}</span>
            <span style={{ color: '#94A3B8', fontSize: '10px' }}>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
