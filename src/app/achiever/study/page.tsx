'use client'
import { useState } from 'react'
import Link from 'next/link'

const SUBJECTS = [
  { id: 'ap-calculus', name: 'AP Calculus BC', icon: 'functions', color: '#7C3AED', lessons: 52, done: 45, progress: 86 },
  { id: 'ap-physics', name: 'AP Physics C', icon: 'bolt', color: '#F59E0B', lessons: 48, done: 32, progress: 67 },
  { id: 'ap-biology', name: 'AP Biology', icon: 'biotech', color: '#10B981', lessons: 60, done: 41, progress: 68 },
  { id: 'english-lit', name: 'English Literature', icon: 'menu_book', color: '#3B82F6', lessons: 40, done: 38, progress: 95 },
  { id: 'chemistry', name: 'AP Chemistry', icon: 'science', color: '#22C55E', lessons: 55, done: 22, progress: 40 },
  { id: 'world-history', name: 'World History', icon: 'public', color: '#F97316', lessons: 44, done: 10, progress: 23 },
]

const RECENT = [
  { subject: 'AP Calculus BC', title: 'Fundamental Theorem of Calculus', progress: 33, icon: 'functions', color: '#7C3AED' },
  { subject: 'AP Physics C', title: "Newton's Laws of Motion", progress: 60, icon: 'bolt', color: '#F59E0B' },
  { subject: 'AP Biology', title: 'Cell Division & Mitosis', progress: 85, icon: 'biotech', color: '#10B981' },
]

const SAVED = [
  { subject: 'English Literature', title: 'The Great Gatsby — Symbolism', icon: 'menu_book', color: '#3B82F6' },
  { subject: 'AP Chemistry', title: 'Redox Reactions Overview', icon: 'science', color: '#22C55E' },
]

export default function AchieverStudyPage() {
  const [tab, setTab] = useState('Subjects')
  const [search, setSearch] = useState('')

  const filteredSubjects = SUBJECTS.filter(s => s.name.toLowerCase().includes(search.toLowerCase()))

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
          <div style={{ marginBottom: '24px' }}>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '28px', margin: '0 0 6px' }}>Study</h1>
            <p style={{ color: '#94A3B8', fontSize: '14px', margin: 0 }}>Browse subjects, continue lessons, and access saved content.</p>
          </div>

          {/* Search */}
          <div style={{ position: 'relative' as const, marginBottom: '20px' }}>
            <span className="material-symbols-outlined" style={{ position: 'absolute' as const, left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#475569', fontSize: '18px' }}>search</span>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search lessons, topics..."
              style={{ width: '100%', background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '11px 14px 11px 44px', color: '#FFFFFF', fontSize: '14px', outline: 'none', boxSizing: 'border-box' as const }}
            />
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
            {['Subjects', 'Recent', 'Saved'].map(t => (
              <button key={t} onClick={() => setTab(t)} style={{ background: tab === t ? '#06B6D4' : 'rgba(255,255,255,0.06)', border: 'none', borderRadius: '8px', padding: '7px 18px', color: tab === t ? '#FFFFFF' : '#94A3B8', fontSize: '13px', fontWeight: tab === t ? 700 : 400, cursor: 'pointer' }}>{t}</button>
            ))}
          </div>

          {tab === 'Subjects' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px' }}>
              {filteredSubjects.map(sub => (
                <Link key={sub.id} href={`/achiever/subjects/${sub.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px', cursor: 'pointer' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                      <div style={{ width: '44px', height: '44px', background: `${sub.color}20`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span className="material-symbols-outlined" style={{ color: sub.color, fontSize: '22px', fontVariationSettings: '"FILL" 1' }}>{sub.icon}</span>
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 600, fontSize: '14px', margin: '0 0 3px' }}>{sub.name}</p>
                        <p style={{ color: '#94A3B8', fontSize: '12px', margin: 0 }}>{sub.done}/{sub.lessons} lessons</p>
                      </div>
                      <span style={{ color: '#94A3B8', fontSize: '14px', fontWeight: 600 }}>{sub.progress}%</span>
                    </div>
                    <div style={{ height: '5px', background: 'rgba(255,255,255,0.08)', borderRadius: '100px', overflow: 'hidden', marginBottom: '12px' }}>
                      <div style={{ height: '100%', width: `${sub.progress}%`, background: sub.color, borderRadius: '100px' }} />
                    </div>
                    <button style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: 'none', borderRadius: '8px', padding: '9px', color: '#CBD5E1', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>Continue</button>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {tab === 'Recent' && (
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
              {RECENT.map(lesson => (
                <Link key={lesson.title} href="/achiever/lesson" style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '16px', display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer' }}>
                    <div style={{ width: '44px', height: '44px', background: `${lesson.color}20`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ color: lesson.color, fontSize: '22px', fontVariationSettings: '"FILL" 1' }}>{lesson.icon}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 600, fontSize: '14px', margin: '0 0 2px' }}>{lesson.title}</p>
                      <p style={{ color: '#94A3B8', fontSize: '12px', margin: '0 0 8px' }}>{lesson.subject}</p>
                      <div style={{ height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${lesson.progress}%`, background: lesson.color, borderRadius: '100px' }} />
                      </div>
                    </div>
                    <span style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '6px', padding: '4px 10px', color: '#CBD5E1', fontSize: '12px', fontWeight: 600, flexShrink: 0 }}>{lesson.progress}%</span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {tab === 'Saved' && (
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
              {SAVED.map(item => (
                <Link key={item.title} href="/achiever/lesson" style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '16px', display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer' }}>
                    <div style={{ width: '44px', height: '44px', background: `${item.color}20`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ color: item.color, fontSize: '22px', fontVariationSettings: '"FILL" 1' }}>{item.icon}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 600, fontSize: '14px', margin: '0 0 3px' }}>{item.title}</p>
                      <p style={{ color: '#94A3B8', fontSize: '12px', margin: 0 }}>{item.subject}</p>
                    </div>
                    <span className="material-symbols-outlined" style={{ color: '#F59E0B', fontSize: '18px', fontVariationSettings: '"FILL" 1' }}>bookmark</span>
                  </div>
                </Link>
              ))}
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
