'use client'
import { useState } from 'react'
import Link from 'next/link'

const PULSE = [
  { icon: 'task_alt', event: 'Leo M. completed Calculus Prep', time: '2 min ago', color: '#22C55E' },
  { icon: 'military_tech', event: 'Sarah K. earned History Buff badge', time: '15 min ago', color: '#F59E0B' },
  { icon: 'group', event: '4 people joined Chem 101 Huddle', time: '22 min ago', color: '#06B6D4' },
]

const LEADERS = [
  { rank: 1, name: 'Jade Simmons', title: 'Lv.42 · Math Genius', pts: 12450, initials: 'JS', color: '#F59E0B' },
  { rank: 2, name: 'Marcus Webb', title: 'Lv.39 · Bio King', pts: 11890, initials: 'MW', color: '#94A3B8' },
  { rank: 3, name: 'Elena Rodriguez', title: 'Lv.37 · Polyglot', pts: 10200, initials: 'ER', color: '#CD7F32' },
  { rank: 14, name: 'You', title: 'Top 5%', pts: 8150, initials: 'AJ', color: '#06B6D4', isMe: true },
]

const HUDDLES = [
  { title: 'Calc Midterm Grind', status: 'LIVE', subject: 'MATH', members: 15, desc: 'Focused on integrals and area under curve — co-working format.', ai: true, cta: 'Join Room', color: '#EF4444' },
  { title: 'Bio Flashcards Blitz', status: 'QUIZ', subject: 'BIO', members: 8, desc: 'AI bot "Aria" hosting a 20-question Genetics quiz.', countdown: '04:30', cta: 'Enter Quiz', color: '#7C3AED' },
]

const TABS = ['Overall', 'Calculus', 'Biology', 'History', 'Economics']

export default function AchieverPeerHubPage() {
  const [activeTab, setActiveTab] = useState('Overall')

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
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '100px', padding: '5px 14px' }}>
            <span className="material-symbols-outlined" style={{ color: '#F59E0B', fontSize: '16px', fontVariationSettings: '"FILL" 1' }}>emoji_events</span>
            <span style={{ color: '#F59E0B', fontSize: '12px', fontWeight: 600 }}>Season 4 ends in 12 days</span>
          </div>
        </div>

        <div style={{ padding: '28px' }}>
          <div style={{ marginBottom: '24px' }}>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '28px', margin: '0 0 6px' }}>Achiever Hub</h1>
            <p style={{ color: '#94A3B8', fontSize: '14px', margin: 0 }}>Join active huddles and rise through the ranks.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '20px', marginBottom: '20px' }}>
            {/* Live Pulse */}
            <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <span className="material-symbols-outlined" style={{ color: '#F59E0B', fontSize: '18px', fontVariationSettings: '"FILL" 1' }}>bolt</span>
                <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '15px', margin: 0 }}>Live Pulse</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '10px', marginBottom: '14px' }}>
                {PULSE.map(p => (
                  <div key={p.event} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '28px', height: '28px', background: `${p.color}15`, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ color: p.color, fontSize: '14px', fontVariationSettings: '"FILL" 1' }}>{p.icon}</span>
                    </div>
                    <p style={{ color: '#CBD5E1', fontSize: '13px', margin: 0, flex: 1 }}>{p.event}</p>
                    <span style={{ color: '#475569', fontSize: '11px', flexShrink: 0 }}>{p.time}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '12px', padding: '12px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                  <span className="material-symbols-outlined" style={{ color: '#10B981', fontSize: '14px' }}>auto_awesome</span>
                  <p style={{ color: '#10B981', fontWeight: 600, fontSize: '12px', margin: 0 }}>AI Advisor</p>
                </div>
                <p style={{ color: '#CBD5E1', fontSize: '12px', margin: '0 0 10px', lineHeight: 1.5 }}>You&apos;re 12 XP behind Marcus. A 15-min session now could close the gap before the season ends.</p>
                <button style={{ background: '#10B981', border: 'none', borderRadius: '8px', padding: '7px 14px', color: '#FFFFFF', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>Get Started</button>
              </div>
            </div>

            {/* Leaderboard */}
            <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '15px', margin: '0 0 12px' }}>Peer Leaderboard</h2>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '14px', overflowX: 'auto' as const }}>
                {TABS.map(t => (
                  <button key={t} onClick={() => setActiveTab(t)} style={{ background: activeTab === t ? '#06B6D4' : 'rgba(255,255,255,0.06)', border: 'none', borderRadius: '20px', padding: '5px 12px', color: activeTab === t ? '#FFFFFF' : '#94A3B8', fontSize: '12px', fontWeight: activeTab === t ? 600 : 400, cursor: 'pointer', whiteSpace: 'nowrap' }}>{t}</button>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '4px' }}>
                {LEADERS.map(l => (
                  <div key={l.rank} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', borderRadius: '10px', background: l.isMe ? 'rgba(6,182,212,0.08)' : 'transparent' }}>
                    <span style={{ width: '22px', textAlign: 'center' as const, fontSize: '14px' }}>
                      {l.rank === 1 ? '🥇' : l.rank === 2 ? '🥈' : l.rank === 3 ? '🥉' : <span style={{ color: '#475569', fontWeight: 600, fontSize: '13px' }}>{l.rank}</span>}
                    </span>
                    <div style={{ width: '32px', height: '32px', background: `${l.color}20`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, color: l.color, fontSize: '11px', flexShrink: 0 }}>{l.initials}</div>
                    <div style={{ flex: 1 }}>
                      <p style={{ color: l.isMe ? '#06B6D4' : '#FFFFFF', fontWeight: 600, fontSize: '13px', margin: 0 }}>{l.name}</p>
                      <p style={{ color: '#64748B', fontSize: '11px', margin: 0 }}>{l.title}</p>
                    </div>
                    <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '13px', margin: 0 }}>{l.pts.toLocaleString()}</p>
                  </div>
                ))}
              </div>
              <Link href="/achiever/leaderboard/global" style={{ textDecoration: 'none' }}>
                <p style={{ color: '#06B6D4', fontSize: '12px', fontWeight: 600, margin: '10px 0 0', cursor: 'pointer' }}>View All →</p>
              </Link>
            </div>
          </div>

          {/* Active Huddles */}
          <div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '18px', margin: '0 0 14px' }}>Active Huddles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              {HUDDLES.map(h => (
                <div key={h.title} style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                        <span style={{ background: h.status === 'LIVE' ? 'rgba(239,68,68,0.15)' : 'rgba(124,58,237,0.15)', color: h.status === 'LIVE' ? '#EF4444' : '#7C3AED', borderRadius: '4px', padding: '2px 7px', fontSize: '10px', fontWeight: 700 }}>{h.status}</span>
                        <span style={{ background: 'rgba(255,255,255,0.06)', color: '#CBD5E1', borderRadius: '4px', padding: '2px 7px', fontSize: '10px', fontWeight: 600 }}>{h.subject}</span>
                        {h.ai && <span style={{ color: '#10B981', fontSize: '11px', fontWeight: 600 }}>✦ AI Moderated</span>}
                      </div>
                      <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 600, fontSize: '14px', margin: '0 0 3px' }}>{h.title}</p>
                      <p style={{ color: '#94A3B8', fontSize: '12px', margin: 0 }}>{h.desc}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '14px' }}>group</span>
                      <span style={{ color: '#94A3B8', fontSize: '12px' }}>{h.members}</span>
                    </div>
                  </div>
                  {h.countdown && (
                    <p style={{ color: '#94A3B8', fontSize: '12px', margin: '0 0 10px' }}>Next round in <span style={{ color: '#06B6D4', fontWeight: 700 }}>{h.countdown}</span></p>
                  )}
                  <button style={{ width: '100%', background: h.color, border: 'none', borderRadius: '10px', padding: '9px', color: '#FFFFFF', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}>{h.cta}</button>
                </div>
              ))}
            </div>
          </div>

          {/* Progress banner */}
          <div style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)', borderRadius: '16px', padding: '20px 24px', marginTop: '20px' }}>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', margin: '0 0 3px' }}>Current: Academic Warrior (Level 12)</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', margin: '0 0 10px' }}>Next: Scholar Legend</p>
            <div style={{ height: '6px', background: 'rgba(255,255,255,0.2)', borderRadius: '100px', overflow: 'hidden', marginBottom: '8px' }}>
              <div style={{ height: '100%', width: '70%', background: '#FFFFFF', borderRadius: '100px' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px' }}>850 / 1,200 XP</span>
              <button style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '100px', padding: '5px 14px', color: '#FFFFFF', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>Claim Reward</button>
            </div>
          </div>
        </div>
      </div>

      <div className="ach-mnav" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#0A0E1A', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', zIndex: 50, padding: '8px 0 12px' }}>
        {[{ icon: 'dashboard', label: 'Home', href: '/achiever/dashboard' }, { icon: 'analytics', label: 'Exams', href: '/achiever/exam-tracker' }, { icon: 'storm', label: 'AI', href: '/achiever/ai-study-partner' }, { icon: 'group', label: 'Community', href: '/achiever/leaderboard', active: true }].map(item => (
          <Link key={item.href} href={item.href} style={{ flex: 1, textDecoration: 'none', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '3px' }}>
            <span className="material-symbols-outlined" style={{ color: (item as { active?: boolean }).active ? '#06B6D4' : '#94A3B8', fontSize: '22px' }}>{item.icon}</span>
            <span style={{ color: (item as { active?: boolean }).active ? '#06B6D4' : '#94A3B8', fontSize: '10px', fontWeight: (item as { active?: boolean }).active ? 600 : 400 }}>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
