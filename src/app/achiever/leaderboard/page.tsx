'use client'
import { useState } from 'react'
import Link from 'next/link'

const LEADERBOARD = [
  { rank: 1, name: 'Alex K.', school: 'Westbrook Academy', xp: 14250, streak: 42 },
  { rank: 2, name: 'Sarah M.', school: 'Lincoln High', xp: 13900, streak: 12 },
  { rank: 3, name: 'James L.', school: 'St. Andrews', xp: 13120, streak: 28 },
  { rank: 42, name: 'You', school: "St. Peter's Academy", xp: 8450, streak: 5, isMe: true },
]

const ACTIVITY_FEED = [
  { avatar: 'J', name: 'James L.', action: 'scored 98% on AP Physics C Quiz', time: '2m ago', xp: '+120 XP', color: '#F59E0B' },
  { avatar: 'S', name: 'Sarah M.', action: 'completed Calculus Chapter 7', time: '15m ago', xp: '+80 XP', color: '#06B6D4' },
  { avatar: 'P', name: 'Priya R.', action: 'hit a 30-day study streak', time: '1h ago', xp: '+500 XP', color: '#10B981' },
  { avatar: 'C', name: 'Carlos M.', action: 'submitted AP Biology lab report', time: '2h ago', xp: '+60 XP', color: '#7C3AED' },
  { avatar: 'M', name: 'Maya T.', action: 'unlocked "Quiz Master" badge', time: '3h ago', xp: '+200 XP', color: '#EF4444' },
]

export default function AchieverLeaderboardPage() {
  const [view, setView] = useState('Global')

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
            { icon: 'group', label: 'Community', href: '/achiever/leaderboard', active: true },
          ].map(l => (
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

      <div className="ach-main" style={{ marginLeft: 0 }}>
        <div style={{ height: '60px', background: '#0D1117', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', position: 'sticky' as const, top: 0, zIndex: 30 }}>
          <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '18px', margin: 0, fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>Welcome back, Alex</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '22px', cursor: 'pointer' }}>notifications</span>
            <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #7c3aed, #06B6D4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#FFFFFF', fontSize: '14px', cursor: 'pointer', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>A</div>
          </div>
        </div>

        <div style={{ padding: '28px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '20px', alignItems: 'start' }}>
          {/* Left: Leaderboard */}
          <div>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div>
                <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '24px', margin: '0 0 4px' }}>Peer Leaderboard</h1>
                <p style={{ color: '#94A3B8', fontSize: '13px', margin: 0 }}>Season ends in 12 days</p>
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                {['Global', 'School', 'Class'].map(v => (
                  <button key={v} onClick={() => setView(v)} style={{ background: view === v ? '#06B6D4' : 'rgba(255,255,255,0.06)', border: 'none', borderRadius: '100px', padding: '5px 12px', color: view === v ? '#FFFFFF' : '#94A3B8', fontSize: '12px', fontWeight: view === v ? 700 : 400, cursor: 'pointer' }}>{v}</button>
                ))}
              </div>
            </div>

            {/* My rank banner */}
            <div style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(6,182,212,0.2))', border: '1px solid rgba(6,182,212,0.3)', borderRadius: '14px', padding: '16px 18px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '44px', height: '44px', background: '#06B6D4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#FFFFFF', fontSize: '18px', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>A</div>
              <div>
                <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: '0 0 2px', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>Your Global Rank: #42</p>
                <p style={{ color: '#94A3B8', fontSize: '13px', margin: 0 }}>Top 5% at St. Peter&apos;s Academy · 8,450 XP</p>
              </div>
            </div>

            <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '16px' }}>
              {LEADERBOARD.map(p => (
                <div key={p.rank} style={{
                  display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 8px',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                  background: p.isMe ? 'rgba(6,182,212,0.07)' : 'transparent',
                  borderRadius: p.isMe ? '8px' : '0',
                }}>
                  <span style={{ color: p.rank <= 3 ? '#F59E0B' : p.isMe ? '#06B6D4' : '#64748B', fontWeight: 700, fontSize: '14px', width: '28px', flexShrink: 0 }}>#{p.rank}</span>
                  <div style={{ width: '34px', height: '34px', background: p.isMe ? '#06B6D4' : 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#FFFFFF', fontSize: '14px', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', flexShrink: 0 }}>{p.name[0]}</div>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: p.isMe ? '#06B6D4' : '#FFFFFF', fontWeight: 600, fontSize: '14px', margin: 0 }}>{p.name}</p>
                    <p style={{ color: '#64748B', fontSize: '12px', margin: 0 }}>{p.school}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '14px', margin: 0 }}>{p.xp.toLocaleString()} XP</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px', justifyContent: 'flex-end' }}>
                      <span className="material-symbols-outlined" style={{ color: '#F97316', fontSize: '12px', fontVariationSettings: '"FILL" 1' }}>local_fire_department</span>
                      <span style={{ color: '#64748B', fontSize: '11px' }}>{p.streak}</span>
                    </div>
                  </div>
                </div>
              ))}
              <Link href="/achiever/leaderboard/global" style={{ textDecoration: 'none' }}>
                <button style={{ width: '100%', marginTop: '10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '10px', color: '#94A3B8', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
                  View Full Leaderboard →
                </button>
              </Link>
            </div>
          </div>

          {/* Right: Activity Feed */}
          <div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '18px', margin: '0 0 16px' }}>Huddle Feed</h2>
            <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '0' }}>
              {ACTIVITY_FEED.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', padding: '12px 0', borderBottom: i < ACTIVITY_FEED.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none', alignItems: 'flex-start' }}>
                  <div style={{ width: '34px', height: '34px', background: `rgba(${item.color === '#F59E0B' ? '245,158,11' : item.color === '#06B6D4' ? '6,182,212' : item.color === '#10B981' ? '16,185,129' : item.color === '#7C3AED' ? '124,58,237' : '239,68,68'}, 0.2)`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: item.color, fontSize: '14px', flexShrink: 0, fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>{item.avatar}</div>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: '#CBD5E1', fontSize: '13px', margin: '0 0 3px', lineHeight: 1.4 }}>
                      <strong style={{ color: '#FFFFFF' }}>{item.name}</strong> {item.action}
                    </p>
                    <p style={{ color: '#64748B', fontSize: '11px', margin: 0 }}>{item.time}</p>
                  </div>
                  <span style={{ color: '#22C55E', fontSize: '11px', fontWeight: 700, flexShrink: 0 }}>{item.xp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="ach-mnav" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#0A0E1A', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', zIndex: 50, padding: '8px 0 12px' }}>
        {[{ icon: 'dashboard', label: 'Home', href: '/achiever/dashboard' }, { icon: 'analytics', label: 'Exams', href: '/achiever/exam-tracker' }, { icon: 'storm', label: 'AI', href: '/achiever/ai-study-partner' }, { icon: 'group', label: 'Community', href: '/achiever/leaderboard', active: true }].map(item => (
          <Link key={item.href} href={item.href} style={{ flex: 1, textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
            <span className="material-symbols-outlined" style={{ color: item.active ? '#06B6D4' : '#94A3B8', fontSize: '22px' }}>{item.icon}</span>
            <span style={{ color: item.active ? '#06B6D4' : '#94A3B8', fontSize: '10px', fontWeight: item.active ? 600 : 400 }}>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
