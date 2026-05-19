'use client'
import { useState } from 'react'
import Link from 'next/link'

const DMS = [
  { initials: 'SJ', name: 'Sarah Jenkins', time: '10:42 AM', preview: 'Did you finish the physics lab report?', color: '#7C3AED' },
  { initials: 'MC', name: 'Marcus Chen', time: 'Yesterday', preview: 'Thanks for the notes!', color: '#06B6D4' },
  { initials: 'SG', name: 'Study Group Alpha', time: 'Mon', preview: "Emily: I'll book the library room.", color: '#10B981' },
]

const HUDDLES = [
  { title: 'Calculus Prep Room', type: 'Voice Channel', members: 3, icon: 'headphones', color: '#7C3AED' },
  { title: 'Literature Debate', type: 'Video / Voice', members: 4, icon: 'videocam', color: '#06B6D4' },
]

const SCHEDULED = [
  { title: 'Advanced Chemistry — Lab Intro', badge: 'Live Now', live: true, instructor: 'Prof. Henderson', time: '11:00 AM – 12:30 PM', students: '24 students waiting', link: 'Join via Zoom' },
  { title: 'European History Seminar', badge: '1:00 PM', live: false, instructor: 'Dr. Alarie', time: '1:00 PM – 2:00 PM', students: null, link: 'Link opens in 45m' },
]

export default function AchieverCollaborationPage() {
  const [dmSearch, setDmSearch] = useState('')

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
          <button style={{ background: '#06B6D4', border: 'none', borderRadius: '10px', padding: '9px 16px', color: '#FFFFFF', fontSize: '13px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add</span>
            New Huddle
          </button>
        </div>

        <div style={{ padding: '28px' }}>
          <div style={{ marginBottom: '24px' }}>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '28px', margin: '0 0 6px' }}>Collaboration Hub</h1>
            <p style={{ color: '#94A3B8', fontSize: '14px', margin: 0 }}>Connect with peers, join study huddles, and attend scheduled sessions.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
            {/* Direct Messages */}
            <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="material-symbols-outlined" style={{ color: '#06B6D4', fontSize: '18px' }}>chat</span>
                  <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '15px', margin: 0 }}>Direct Messages</h2>
                </div>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '18px' }}>edit</span>
                </button>
              </div>
              <input
                type="text"
                value={dmSearch}
                onChange={e => setDmSearch(e.target.value)}
                placeholder="Search messages..."
                style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '8px 12px', color: '#FFFFFF', fontSize: '13px', outline: 'none', boxSizing: 'border-box' as const, marginBottom: '12px' }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '4px' }}>
                {DMS.map(d => (
                  <div key={d.name} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', borderRadius: '10px', cursor: 'pointer', background: 'rgba(255,255,255,0.02)' }}>
                    <div style={{ width: '36px', height: '36px', background: `${d.color}20`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, color: d.color, fontSize: '12px', flexShrink: 0 }}>{d.initials}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '13px', margin: 0 }}>{d.name}</p>
                        <p style={{ color: '#475569', fontSize: '11px', margin: 0 }}>{d.time}</p>
                      </div>
                      <p style={{ color: '#94A3B8', fontSize: '12px', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>{d.preview}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button style={{ width: '100%', marginTop: '12px', background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '10px', padding: '9px', color: '#10B981', fontSize: '12px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>auto_awesome</span>
                Summarize unread chats
              </button>
            </div>

            {/* Active Huddles */}
            <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="material-symbols-outlined" style={{ color: '#F59E0B', fontSize: '18px', fontVariationSettings: '"FILL" 1' }}>podcasts</span>
                  <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '15px', margin: 0 }}>Active Huddles</h2>
                </div>
                <span style={{ background: 'rgba(239,68,68,0.15)', color: '#EF4444', borderRadius: '100px', padding: '3px 8px', fontSize: '11px', fontWeight: 700 }}>3 Live</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
                {HUDDLES.map(h => (
                  <div key={h.title} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', padding: '14px' }}>
                    <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 600, fontSize: '13px', margin: '0 0 3px' }}>{h.title}</p>
                    <p style={{ color: '#94A3B8', fontSize: '12px', margin: '0 0 10px' }}>{h.type}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        {Array.from({ length: Math.min(h.members, 3) }).map((_, i) => (
                          <div key={i} style={{ width: '24px', height: '24px', background: `${h.color}30`, border: `2px solid #161D2F`, borderRadius: '50%', marginLeft: i > 0 ? '-6px' : '0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, color: h.color, fontSize: '9px' }}>{String.fromCharCode(65 + i)}</div>
                        ))}
                        <span style={{ color: '#94A3B8', fontSize: '11px', marginLeft: '6px' }}>{h.members} members</span>
                      </div>
                      <button style={{ background: h.color, border: 'none', borderRadius: '8px', padding: '6px 12px', color: '#FFFFFF', fontSize: '12px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '13px', fontVariationSettings: '"FILL" 1' }}>{h.icon}</span>
                        Join
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scheduled Sessions */}
            <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '15px', margin: '0 0 12px' }}>Scheduled Class Huddles</h2>
              <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '10px', padding: '8px 12px', marginBottom: '14px', textAlign: 'center' }}>
                <p style={{ color: '#22C55E', fontSize: '12px', fontWeight: 600, margin: 0 }}>Integration: Zoom & Meet Active</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
                {SCHEDULED.map(s => (
                  <div key={s.title} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', padding: '12px 14px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 600, fontSize: '13px', margin: 0, flex: 1, paddingRight: '8px' }}>{s.title}</p>
                      <span style={{ background: s.live ? 'rgba(239,68,68,0.15)' : 'rgba(255,255,255,0.06)', color: s.live ? '#EF4444' : '#CBD5E1', borderRadius: '6px', padding: '2px 8px', fontSize: '11px', fontWeight: 600, flexShrink: 0 }}>{s.badge}</span>
                    </div>
                    <p style={{ color: '#94A3B8', fontSize: '12px', margin: '0 0 3px' }}>{s.instructor} · {s.time}</p>
                    {s.students && <p style={{ color: '#64748B', fontSize: '12px', margin: '0 0 6px' }}>{s.students}</p>}
                    <button style={{ background: 'none', border: 'none', color: '#06B6D4', fontSize: '12px', fontWeight: 600, cursor: 'pointer', padding: 0 }}>{s.link} ↗</button>
                  </div>
                ))}
              </div>
            </div>
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
