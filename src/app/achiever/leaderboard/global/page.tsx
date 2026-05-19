'use client'
import { useState } from 'react'
import Link from 'next/link'

const LEADERBOARD = [
  { rank: 1, name: 'Alex K.', school: 'Westbrook Academy', xp: 14250, streak: 42 },
  { rank: 2, name: 'Sarah M.', school: 'Lincoln High', xp: 13900, streak: 12 },
  { rank: 3, name: 'James L.', school: 'St. Andrews', xp: 13120, streak: 28 },
  { rank: 4, name: 'Priya R.', school: 'Oakridge School', xp: 12450, streak: 19 },
  { rank: 5, name: 'Carlos M.', school: 'Pacific High', xp: 11800, streak: 7 },
  { rank: 42, name: 'You', school: "St. Peter's Academy", xp: 8450, streak: 5, isMe: true },
  { rank: 43, name: 'Elena R.', school: "St. Peter's Academy", xp: 8410, streak: 0 },
]

export default function GlobalLeaderboardPage() {
  const [view, setView] = useState('Global')

  return (
    <div style={{ background: '#0D1117', minHeight: '100vh', fontFamily: '"Inter", system-ui, sans-serif' }}>
      <style>{`@media(min-width:1024px){.ach-sb{display:flex!important}.ach-main{margin-left:260px!important}.ach-mnav{display:none!important}}`}</style>

      {/* Sidebar */}
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

        <div style={{ padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
            <div>
              <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '28px', margin: '0 0 6px' }}>Global Leaderboard</h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '16px' }}>schedule</span>
                <span style={{ color: '#94A3B8', fontSize: '13px' }}>Season ends in 12 days</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['Global', 'School', 'Class'].map(v => (
                <button key={v} onClick={() => setView(v)} style={{
                  background: view === v ? '#06B6D4' : 'rgba(255,255,255,0.06)',
                  border: view === v ? 'none' : '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '100px', padding: '7px 14px',
                  color: view === v ? '#FFFFFF' : '#94A3B8',
                  fontSize: '12px', fontWeight: view === v ? 700 : 400,
                  cursor: 'pointer', fontFamily: '"Inter", system-ui, sans-serif',
                }}>{v}</button>
              ))}
            </div>
          </div>

          {/* Top 3 Podium */}
          <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '28px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '20px' }}>
              {/* 2nd */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '52px', height: '52px', background: 'rgba(148,163,184,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#FFFFFF', fontSize: '18px', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>S</div>
                <p style={{ color: '#CBD5E1', fontSize: '13px', fontWeight: 600, margin: 0 }}>Sarah M.</p>
                <p style={{ color: '#94A3B8', fontSize: '11px', margin: 0 }}>13,900 XP</p>
                <div style={{ width: '70px', height: '60px', background: 'rgba(148,163,184,0.15)', borderRadius: '8px 8px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#94A3B8', fontSize: '20px', fontWeight: 700 }}>2</span>
                </div>
              </div>
              {/* 1st */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ width: '64px', height: '64px', background: 'rgba(6,182,212,0.25)', border: '2px solid #06B6D4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#FFFFFF', fontSize: '22px', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', boxShadow: '0 0 20px rgba(6,182,212,0.4)' }}>A</div>
                  <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', fontSize: '16px' }}>👑</div>
                </div>
                <p style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 700, margin: 0, fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>Alex K.</p>
                <p style={{ color: '#06B6D4', fontSize: '12px', margin: 0, fontWeight: 600 }}>14,250 XP</p>
                <div style={{ width: '70px', height: '90px', background: 'rgba(6,182,212,0.15)', border: '1px solid rgba(6,182,212,0.3)', borderRadius: '8px 8px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#06B6D4', fontSize: '24px', fontWeight: 700 }}>1</span>
                </div>
              </div>
              {/* 3rd */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '52px', height: '52px', background: 'rgba(245,158,11,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#FFFFFF', fontSize: '18px', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>J</div>
                <p style={{ color: '#CBD5E1', fontSize: '13px', fontWeight: 600, margin: 0 }}>James L.</p>
                <p style={{ color: '#94A3B8', fontSize: '11px', margin: 0 }}>13,120 XP</p>
                <div style={{ width: '70px', height: '45px', background: 'rgba(245,158,11,0.12)', borderRadius: '8px 8px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#F59E0B', fontSize: '20px', fontWeight: 700 }}>3</span>
                </div>
              </div>
            </div>
          </div>

          {/* Full Ranked List */}
          <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr auto auto', gap: '0 16px', padding: '0 0 10px', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: '8px' }}>
              {['Rank', 'Student', 'School', 'XP'].map(h => (
                <p key={h} style={{ color: '#64748B', fontSize: '11px', fontWeight: 600, margin: 0 }}>{h}</p>
              ))}
            </div>
            {LEADERBOARD.map(p => (
              <div key={p.rank} style={{
                display: 'grid',
                gridTemplateColumns: '40px 1fr auto auto',
                gap: '0 16px',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                background: p.isMe ? 'rgba(6,182,212,0.06)' : 'transparent',
                borderRadius: p.isMe ? '8px' : '0',
                paddingLeft: p.isMe ? '8px' : '0',
                alignItems: 'center',
              }}>
                <span style={{
                  color: p.rank <= 3 ? '#F59E0B' : p.isMe ? '#06B6D4' : '#64748B',
                  fontWeight: 700, fontSize: '14px',
                }}>#{p.rank}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: p.isMe ? '#06B6D4' : 'rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, color: '#FFFFFF', fontSize: '13px',
                    fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                    flexShrink: 0,
                  }}>{p.name[0]}</div>
                  <span style={{ color: p.isMe ? '#06B6D4' : '#FFFFFF', fontWeight: p.isMe ? 700 : 500, fontSize: '14px' }}>
                    {p.name}
                    {p.isMe && <span style={{ marginLeft: '6px', background: '#06B6D4', borderRadius: '4px', padding: '1px 6px', fontSize: '10px', fontWeight: 600 }}>You</span>}
                  </span>
                </div>
                <span style={{ color: '#94A3B8', fontSize: '12px' }}>{p.school}</span>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '14px', margin: 0, fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>{p.xp.toLocaleString()}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px', justifyContent: 'flex-end', marginTop: '2px' }}>
                    <span className="material-symbols-outlined" style={{ color: '#F97316', fontSize: '12px', fontVariationSettings: '"FILL" 1' }}>local_fire_department</span>
                    <span style={{ color: '#64748B', fontSize: '11px' }}>{p.streak}</span>
                  </div>
                </div>
              </div>
            ))}
            <button style={{ width: '100%', marginTop: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '11px', color: '#94A3B8', fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: '"Inter", system-ui, sans-serif' }}>
              View Full Standings
            </button>
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
