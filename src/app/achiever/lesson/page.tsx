'use client'
import { useState } from 'react'
import Link from 'next/link'

const CHAPTERS = [
  { title: '4.1 Antiderivatives', duration: '12 min', done: true },
  { title: '4.2 Fundamental Theorem of Calculus', duration: '18 min', done: false, active: true },
  { title: '4.3 Definite Integrals', duration: '14 min', done: false },
  { title: '4.4 U-Substitution', duration: '16 min', done: false },
]

const TAKEAWAYS = [
  'FTC links differentiation and integration as inverse operations.',
  'Part 1: every continuous function has an antiderivative.',
  'Part 2: definite integrals computed using antiderivatives.',
]

export default function AchieverLessonPage() {
  const [activeTab, setActiveTab] = useState('Guide')
  const [note, setNote] = useState('')

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
        {/* Breadcrumb topbar */}
        <div style={{ height: '60px', background: '#0D1117', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', position: 'sticky' as const, top: 0, zIndex: 30 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Link href="/achiever/subjects/ap-calculus" style={{ color: '#94A3B8', fontSize: '13px', textDecoration: 'none' }}>Advanced Calculus</Link>
            <span style={{ color: '#475569' }}>/</span>
            <span style={{ color: '#CBD5E1', fontSize: '13px' }}>Module 4: Integrals</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '100px', padding: '5px 12px' }}>
              <span className="material-symbols-outlined" style={{ color: '#F59E0B', fontSize: '16px', fontVariationSettings: '"FILL" 1' }}>military_tech</span>
              <span style={{ color: '#F59E0B', fontWeight: 700, fontSize: '13px' }}>1,240 XP</span>
            </div>
          </div>
        </div>

        <div style={{ padding: '28px', maxWidth: '900px' }}>
          {/* Video player */}
          <div style={{ background: '#111827', borderRadius: '16px', overflow: 'hidden', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ aspectRatio: '16/9', background: 'linear-gradient(135deg, #0F172A, #1E293B)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' as const }}>
              <div style={{ width: '64px', height: '64px', background: 'rgba(255,255,255,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(4px)' }}>
                <span className="material-symbols-outlined" style={{ color: '#FFFFFF', fontSize: '28px', fontVariationSettings: '"FILL" 1', marginLeft: '4px' }}>play_arrow</span>
              </div>
              <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                <div style={{ height: '3px', background: 'rgba(255,255,255,0.2)', borderRadius: '100px', overflow: 'hidden', marginBottom: '6px' }}>
                  <div style={{ height: '100%', width: '33%', background: '#06B6D4', borderRadius: '100px' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px' }}>12:45</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px' }}>38:20</span>
                </div>
              </div>
              <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(124,58,237,0.8)', borderRadius: '6px', padding: '3px 8px' }}>
                <span style={{ color: '#FFFFFF', fontSize: '11px', fontWeight: 700 }}>Achiever Tier</span>
              </div>
            </div>
          </div>

          {/* Lesson header */}
          <div style={{ marginBottom: '20px' }}>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '22px', margin: '0 0 6px' }}>4.2 Fundamental Theorem of Calculus</h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p style={{ color: '#94A3B8', fontSize: '13px', margin: 0 }}>Prof. Sarah Jenkins · Recorded 2 days ago</p>
              <button style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.25)', borderRadius: '8px', padding: '7px 14px', color: '#06B6D4', fontSize: '12px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>group</span>
                Start Huddle
              </button>
            </div>
          </div>

          {/* AI takeaways */}
          <div style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '14px', padding: '16px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span className="material-symbols-outlined" style={{ color: '#10B981', fontSize: '18px' }}>auto_awesome</span>
              <p style={{ color: '#10B981', fontWeight: 700, fontSize: '13px', margin: 0 }}>EduWorld AI Key Takeaways</p>
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column' as const, gap: '7px' }}>
              {TAKEAWAYS.map(t => (
                <li key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ color: '#10B981', fontSize: '14px', marginTop: '1px', flexShrink: 0 }}>•</span>
                  <span style={{ color: '#CBD5E1', fontSize: '13px' }}>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
            {['Guide', 'My Notes', 'Chapters'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{ background: activeTab === tab ? '#06B6D4' : 'rgba(255,255,255,0.06)', border: 'none', borderRadius: '20px', padding: '7px 16px', color: activeTab === tab ? '#FFFFFF' : '#94A3B8', fontSize: '13px', fontWeight: activeTab === tab ? 700 : 400, cursor: 'pointer' }}>{tab}</button>
            ))}
          </div>

          {activeTab === 'Guide' && (
            <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: '0 0 12px' }}>Overview</h2>
              <p style={{ color: '#CBD5E1', fontSize: '14px', lineHeight: 1.7, margin: '0 0 16px' }}>
                The Fundamental Theorem of Calculus establishes the relationship between differentiation and integration. These two operations are essentially inverses of each other. Both Part 1 and Part 2 are covered in depth in this module.
              </p>
              <div style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '12px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="material-symbols-outlined" style={{ color: '#7C3AED', fontSize: '22px' }}>bar_chart</span>
                <div>
                  <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '13px', margin: '0 0 2px' }}>Interactive Figure 4.1</p>
                  <p style={{ color: '#94A3B8', fontSize: '12px', margin: 0 }}>Tap to interact with the visualization</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'My Notes' && (
            <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '18px' }}>edit_note</span>
                <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '14px', margin: 0 }}>Quick Note</p>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <input
                  type="text"
                  value={note}
                  onChange={e => setNote(e.target.value)}
                  placeholder="Jot something down..."
                  style={{ flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '10px 14px', color: '#FFFFFF', fontSize: '13px', outline: 'none' }}
                />
                <button style={{ background: '#06B6D4', border: 'none', borderRadius: '10px', padding: '10px 16px', color: '#FFFFFF', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}>Save</button>
              </div>
            </div>
          )}

          {activeTab === 'Chapters' && (
            <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: '0 0 14px' }}>Module 4 Chapters</h2>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '8px' }}>
                {CHAPTERS.map(ch => (
                  <div key={ch.title} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', background: ch.active ? 'rgba(6,182,212,0.1)' : 'rgba(255,255,255,0.03)', borderRadius: '10px', border: ch.active ? '1px solid rgba(6,182,212,0.25)' : '1px solid transparent', cursor: 'pointer' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: ch.done ? '#22C55E' : ch.active ? '#06B6D4' : 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ color: ch.done || ch.active ? '#FFFFFF' : '#475569', fontSize: '14px', fontVariationSettings: '"FILL" 1' }}>{ch.done ? 'check' : 'play_arrow'}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ color: ch.active ? '#06B6D4' : '#CBD5E1', fontWeight: ch.active ? 600 : 400, fontSize: '13px', margin: 0 }}>{ch.title}</p>
                    </div>
                    <span style={{ color: '#64748B', fontSize: '12px' }}>{ch.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
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
