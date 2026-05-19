'use client'
import { useState } from 'react'
import Link from 'next/link'

const UNITS = [
  { name: 'Unit 1: Chemistry of Life', weight: '8–11% of AP Exam Weight', mastery: 92, status: 'done' as const },
  { name: 'Unit 2: Cell Structure and Function', weight: '10–13% of AP Exam Weight', mastery: 64, status: 'normal' as const },
  { name: 'Unit 3: Cellular Energetics', weight: '12–16% of AP Exam Weight', mastery: 35, status: 'attention' as const },
  { name: 'Unit 4: Cell Communication and Cell Cycle', weight: '', mastery: 0, status: 'locked' as const },
]

const UNIT1_ITEMS = [
  { label: '1.1 Structure of Water and Hydrogen Bonding', quiz: '100%', done: true },
  { label: '1.2 Elements of Life', quiz: '90%', done: true },
  { label: '1.3 Introduction to Biological Macromolecules', quiz: '', done: false },
]

const QUIZZES = [
  { icon: 'quiz', name: 'Macromolecules Quiz', date: 'Today, 10:30 AM', score: '90%', color: '#22C55E' },
  { icon: 'quiz', name: 'Cell Structure Basics', date: 'Yesterday', score: '75%', color: '#22C55E' },
  { icon: 'menu_book', name: 'Enzyme Kinematics', date: 'Oct 12', score: '45%', color: '#EF4444' },
]

export default function AchieverAPBiologyPage() {
  const [expandedUnit, setExpandedUnit] = useState('Unit 1: Chemistry of Life')

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
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Link href="/achiever/subjects" style={{ color: '#94A3B8', fontSize: '13px', textDecoration: 'none' }}>Subjects</Link>
            <span style={{ color: '#475569' }}>/</span>
            <span style={{ color: '#CBD5E1', fontSize: '13px' }}>AP Biology</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '100px', padding: '5px 12px' }}>
              <span className="material-symbols-outlined" style={{ color: '#F59E0B', fontSize: '14px', fontVariationSettings: '"FILL" 1' }}>military_tech</span>
              <span style={{ color: '#F59E0B', fontWeight: 700, fontSize: '12px' }}>2,450 XP</span>
            </div>
          </div>
        </div>

        <div style={{ padding: '28px', maxWidth: '800px' }}>
          {/* Hero */}
          <div style={{ marginBottom: '24px' }}>
            <p style={{ color: '#94A3B8', fontSize: '12px', margin: '0 0 4px' }}>Science › Advanced Placement</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <div style={{ width: '44px', height: '44px', background: 'rgba(16,185,129,0.15)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="material-symbols-outlined" style={{ color: '#10B981', fontSize: '24px', fontVariationSettings: '"FILL" 1' }}>biotech</span>
              </div>
              <div>
                <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '24px', margin: 0 }}>AP Biology <span style={{ color: '#10B981' }}>✦</span></h1>
                <p style={{ color: '#10B981', fontSize: '12px', fontWeight: 600, margin: 0 }}>AI Readiness: 84%</p>
              </div>
            </div>
            <p style={{ color: '#94A3B8', fontSize: '14px', margin: 0 }}>Master life principles from molecules to ecosystems for AP Exam success.</p>
          </div>

          {/* Progress */}
          <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '16px 20px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: '#CBD5E1', fontWeight: 600, fontSize: '14px' }}>68% Overall Mastery</span>
              <span style={{ color: '#94A3B8', fontSize: '13px' }}>42 Days Until Exam</span>
            </div>
            <div style={{ height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '68%', background: '#10B981', borderRadius: '100px' }} />
            </div>
          </div>

          {/* Units */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '10px', marginBottom: '20px' }}>
            {UNITS.map(u => (
              <div key={u.name} style={{ background: '#161D2F', border: `1px solid ${u.status === 'attention' ? 'rgba(245,158,11,0.3)' : u.status === 'locked' ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.08)'}`, borderRadius: '14px', overflow: 'hidden', opacity: u.status === 'locked' ? 0.6 : 1 }}>
                <div
                  onClick={() => u.status !== 'locked' && setExpandedUnit(expandedUnit === u.name ? '' : u.name)}
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', cursor: u.status === 'locked' ? 'default' : 'pointer' }}
                >
                  <div style={{ width: '28px', height: '28px', background: u.status === 'done' ? 'rgba(34,197,94,0.15)' : u.status === 'attention' ? 'rgba(245,158,11,0.15)' : u.status === 'locked' ? 'rgba(255,255,255,0.06)' : 'rgba(16,185,129,0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span className="material-symbols-outlined" style={{ color: u.status === 'done' ? '#22C55E' : u.status === 'attention' ? '#F59E0B' : u.status === 'locked' ? '#475569' : '#10B981', fontSize: '15px', fontVariationSettings: '"FILL" 1' }}>{u.status === 'done' ? 'check_circle' : u.status === 'locked' ? 'lock' : u.status === 'attention' ? 'warning' : 'radio_button_checked'}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '14px', margin: '0 0 2px' }}>{u.name}</p>
                    {u.weight && <p style={{ color: '#64748B', fontSize: '11px', margin: 0 }}>{u.weight}</p>}
                    {u.status === 'attention' && <p style={{ color: '#F59E0B', fontSize: '11px', fontWeight: 600, margin: 0 }}>Needs Attention — Below Target</p>}
                    {u.status === 'locked' && <p style={{ color: '#475569', fontSize: '11px', margin: 0 }}>Unlock by completing Unit 3</p>}
                  </div>
                  {u.mastery > 0 && (
                    <span style={{ color: u.mastery >= 70 ? '#22C55E' : '#F59E0B', fontWeight: 700, fontSize: '14px' }}>{u.mastery}%</span>
                  )}
                  {u.status !== 'locked' && (
                    <span className="material-symbols-outlined" style={{ color: '#475569', fontSize: '18px' }}>{expandedUnit === u.name ? 'expand_less' : 'expand_more'}</span>
                  )}
                </div>
                {expandedUnit === u.name && (
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    {UNIT1_ITEMS.map(item => (
                      <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                        <span className="material-symbols-outlined" style={{ color: item.done ? '#22C55E' : '#475569', fontSize: '16px', fontVariationSettings: item.done ? '"FILL" 1' : '"FILL" 0', flexShrink: 0 }}>{item.done ? 'check_circle' : 'circle'}</span>
                        <p style={{ color: '#CBD5E1', fontSize: '13px', flex: 1, margin: 0 }}>{item.label}</p>
                        {item.quiz ? (
                          <span style={{ color: '#22C55E', fontWeight: 700, fontSize: '12px' }}>Quiz: {item.quiz}</span>
                        ) : (
                          <button style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '6px', padding: '4px 10px', color: '#10B981', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>Practice</button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* AI Readiness Insight */}
          <div style={{ background: 'rgba(16,185,129,0.04)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '14px', padding: '16px 18px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '10px' }}>
              <span className="material-symbols-outlined" style={{ color: '#10B981', fontSize: '16px' }}>auto_awesome</span>
              <p style={{ color: '#10B981', fontWeight: 700, fontSize: '13px', margin: 0 }}>AI Readiness Insight</p>
            </div>
            <p style={{ color: '#CBD5E1', fontSize: '13px', margin: '0 0 10px', lineHeight: 1.5 }}>Unit 2 strengths in membrane transport, but organelle interactions need work before the exam.</p>
            <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '12px', margin: '0 0 6px' }}>Recommended Focus</p>
            <ul style={{ margin: '0 0 12px', padding: '0 0 0 16px', color: '#94A3B8', fontSize: '12px' }}>
              <li style={{ marginBottom: '4px' }}>Review the Endomembrane System</li>
              <li>Practice: Cellular Respiration MCQs</li>
            </ul>
            <button style={{ background: '#10B981', border: 'none', borderRadius: '8px', padding: '8px 16px', color: '#FFFFFF', fontSize: '12px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>auto_awesome</span>
              Generate Study Plan
            </button>
          </div>

          {/* Recent Quizzes */}
          <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '15px', margin: 0 }}>Recent Quizzes</h2>
              <span style={{ color: '#06B6D4', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>View All</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '8px' }}>
              {QUIZZES.map(q => (
                <div key={q.name} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px' }}>
                  <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '20px' }}>{q.icon}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: '#FFFFFF', fontWeight: 500, fontSize: '13px', margin: '0 0 2px' }}>{q.name}</p>
                    <p style={{ color: '#64748B', fontSize: '11px', margin: 0 }}>{q.date}</p>
                  </div>
                  <span style={{ color: q.color, fontWeight: 700, fontSize: '14px' }}>{q.score}</span>
                </div>
              ))}
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
