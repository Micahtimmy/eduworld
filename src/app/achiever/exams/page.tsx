'use client'
import { useState } from 'react'
import Link from 'next/link'

const EXAMS = [
  { subject: 'AP Physics C', paper: 'Paper 1: Core Mechanics', type: 'AP Board Exam', countdown: 14, target: '85%', urgency: 'high', color: '#EF4444' },
  { subject: 'AP Calculus BC', paper: 'Pure Mathematics 2', type: 'Internal Assessment', countdown: 28, target: '90%', urgency: 'medium', color: '#F59E0B' },
  { subject: 'AP Chemistry', paper: 'Paper 1 & 2 Combined', type: 'AP Board Exam', countdown: 40, target: '80%', urgency: 'low', color: '#10B981' },
]

const TOPICS = [
  { name: 'Core Mechanics', score: 92, status: 'Mastery achieved. Ready for advanced synthesis questions.', color: '#22C55E' },
  { name: 'Wave Phenomena', score: 78, status: 'Good understanding. Continue practice.', color: '#06B6D4' },
  { name: 'Electromagnetism', score: 45, status: "Critical area. Review Faraday's Law modules before next mock.", color: '#EF4444', critical: true },
]

// Simple SVG line chart data
const CHART_POINTS = [
  { x: 0, y: 52 },
  { x: 1, y: 68 },
  { x: 2, y: 62 },
  { x: 3, y: 84 },
  { x: 4, y: 89 },
]
const MONTHS = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan']

export default function AchieverExamsPage() {
  const [activeSubject, setActiveSubject] = useState('Physics')

  // Chart math
  const W = 420
  const H = 120
  const pad = 20
  const maxY = 100
  const xs = CHART_POINTS.map(p => pad + (p.x / 4) * (W - pad * 2))
  const ys = CHART_POINTS.map(p => H - pad - ((p.y - 40) / 60) * (H - pad * 2))
  const polyline = xs.map((x, i) => `${x},${ys[i]}`).join(' ')
  const area = `${xs[0]},${H - pad} ` + xs.map((x, i) => `${x},${ys[i]}`).join(' ') + ` ${xs[xs.length - 1]},${H - pad}`

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
            { icon: 'analytics', label: 'Exam Tracker', href: '/achiever/exam-tracker', active: true },
            { icon: 'storm', label: 'AI Lab', href: '/achiever/ai-study-partner' },
            { icon: 'shopping_cart', label: 'Shop', href: '/achiever/shop' },
            { icon: 'group', label: 'Community', href: '/achiever/leaderboard' },
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
          <div style={{ marginBottom: '24px' }}>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '28px', margin: '0 0 6px' }}>Exam Tracker</h1>
            <p style={{ color: '#94A3B8', fontSize: '14px', margin: 0 }}>Monitor progress, performance trends, and upcoming milestones.</p>
          </div>

          {/* AI Grade Predictor */}
          <div style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '16px', padding: '18px 20px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span className="material-symbols-outlined" style={{ color: '#10B981', fontSize: '22px' }}>auto_awesome</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <p style={{ color: '#10B981', fontWeight: 700, fontSize: '13px', margin: 0 }}>EduWorld AI Grade Predictor</p>
                <span style={{ background: 'rgba(34,197,94,0.15)', color: '#22C55E', borderRadius: '100px', padding: '2px 8px', fontSize: '11px', fontWeight: 600 }}>+5% confidence</span>
              </div>
              <p style={{ color: '#CBD5E1', fontSize: '13px', margin: 0 }}>Trending toward A* in Physics. Recommend focusing on Electromagnetism before next mock.</p>
            </div>
            <div style={{ textAlign: 'center', flexShrink: 0 }}>
              <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#7C3AED', fontWeight: 700, fontSize: '28px', margin: 0 }}>A*</p>
              <p style={{ color: '#94A3B8', fontSize: '11px', margin: 0 }}>Predicted</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {/* Upcoming Exams */}
            <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: '0 0 16px' }}>Upcoming Exams</h2>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
                {EXAMS.map(ex => (
                  <div key={ex.subject} style={{ background: ex.urgency === 'high' ? 'rgba(239,68,68,0.05)' : 'rgba(255,255,255,0.03)', border: `1px solid ${ex.urgency === 'high' ? 'rgba(239,68,68,0.2)' : 'rgba(255,255,255,0.06)'}`, borderRadius: '12px', padding: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                      <div>
                        <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '14px', margin: '0 0 2px' }}>{ex.subject}</p>
                        <p style={{ color: '#94A3B8', fontSize: '12px', margin: '0 0 2px' }}>{ex.paper}</p>
                        <p style={{ color: '#64748B', fontSize: '11px', margin: 0 }}>{ex.type}</p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ color: ex.color, fontWeight: 700, fontSize: '15px', margin: '0 0 2px' }}>{ex.countdown}d</p>
                        <p style={{ color: '#94A3B8', fontSize: '11px', margin: 0 }}>Target: {ex.target}</p>
                      </div>
                    </div>
                    <Link href="/achiever/exam-prep" style={{ textDecoration: 'none' }}>
                      <span style={{ color: '#06B6D4', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>View Prep Plan →</span>
                    </Link>
                  </div>
                ))}
              </div>
              <Link href="/achiever/calendar" style={{ textDecoration: 'none' }}>
                <p style={{ color: '#06B6D4', fontSize: '12px', fontWeight: 600, margin: '12px 0 0', cursor: 'pointer' }}>View Full Calendar →</p>
              </Link>
            </div>

            {/* Score Analytics */}
            <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: '0 0 6px' }}>Score Analytics</h2>
              <p style={{ color: '#94A3B8', fontSize: '12px', margin: '0 0 12px' }}>Performance trajectory across all mock exams</p>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
                {['Physics', 'Mathematics', 'Chemistry'].map(s => (
                  <button key={s} onClick={() => setActiveSubject(s)} style={{ background: activeSubject === s ? '#06B6D4' : 'rgba(255,255,255,0.06)', border: 'none', borderRadius: '6px', padding: '5px 12px', color: activeSubject === s ? '#FFFFFF' : '#94A3B8', fontSize: '12px', fontWeight: activeSubject === s ? 600 : 400, cursor: 'pointer' }}>{s}</button>
                ))}
              </div>
              <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: '110px' }}>
                <defs>
                  <linearGradient id="exGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                <polygon points={area} fill="url(#exGrad)" />
                <polyline points={polyline} fill="none" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                {xs.map((x, i) => (
                  <circle key={i} cx={x} cy={ys[i]} r="3.5" fill="#06B6D4" />
                ))}
                {MONTHS.map((m, i) => (
                  <text key={m} x={xs[i]} y={H - 4} textAnchor="middle" fill="#475569" fontSize="9">{m}</text>
                ))}
              </svg>
            </div>
          </div>

          {/* Topic Breakdown */}
          <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px', marginTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: 0 }}>Physics: Topic Breakdown</h2>
              <Link href="/achiever/exam-prep" style={{ textDecoration: 'none' }}>
                <span style={{ color: '#06B6D4', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>Details →</span>
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
              {TOPICS.map(t => (
                <div key={t.name} style={{ background: t.critical ? 'rgba(239,68,68,0.04)' : 'rgba(255,255,255,0.03)', border: t.critical ? '1px solid rgba(239,68,68,0.2)' : '1px solid transparent', borderRadius: '12px', padding: '12px 14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {t.critical && <span className="material-symbols-outlined" style={{ color: '#EF4444', fontSize: '16px', fontVariationSettings: '"FILL" 1' }}>warning</span>}
                      <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '14px', margin: 0 }}>{t.name}</p>
                    </div>
                    <span style={{ background: `${t.color}20`, color: t.color, borderRadius: '100px', padding: '3px 10px', fontSize: '12px', fontWeight: 700 }}>{t.score}%</span>
                  </div>
                  <div style={{ height: '5px', background: 'rgba(255,255,255,0.08)', borderRadius: '100px', overflow: 'hidden', marginBottom: '6px' }}>
                    <div style={{ height: '100%', width: `${t.score}%`, background: t.color, borderRadius: '100px' }} />
                  </div>
                  <p style={{ color: '#94A3B8', fontSize: '12px', margin: 0 }}>{t.status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="ach-mnav" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#0A0E1A', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', zIndex: 50, padding: '8px 0 12px' }}>
        {[{ icon: 'dashboard', label: 'Home', href: '/achiever/dashboard' }, { icon: 'analytics', label: 'Exams', href: '/achiever/exam-tracker', active: true }, { icon: 'storm', label: 'AI', href: '/achiever/ai-study-partner' }, { icon: 'group', label: 'Community', href: '/achiever/leaderboard' }].map(item => (
          <Link key={item.href} href={item.href} style={{ flex: 1, textDecoration: 'none', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '3px' }}>
            <span className="material-symbols-outlined" style={{ color: (item as { active?: boolean }).active ? '#06B6D4' : '#94A3B8', fontSize: '22px' }}>{item.icon}</span>
            <span style={{ color: (item as { active?: boolean }).active ? '#06B6D4' : '#94A3B8', fontSize: '10px', fontWeight: (item as { active?: boolean }).active ? 600 : 400 }}>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
