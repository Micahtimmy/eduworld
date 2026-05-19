'use client'
import Link from 'next/link'

const LINKS = [
  { icon: 'dashboard', label: 'Dashboard', href: '/achiever/dashboard' },
  { icon: 'analytics', label: 'Exam Tracker', href: '/achiever/exam-tracker' },
  { icon: 'storm', label: 'AI Lab', href: '/achiever/ai-study-partner' },
  { icon: 'shopping_cart', label: 'Shop', href: '/achiever/shop' },
  { icon: 'group', label: 'Community', href: '/achiever/leaderboard' },
]

const TOPICS = [
  { name: 'Limits & Continuity', score: 95, status: 'excellent' },
  { name: 'Derivatives', score: 88, status: 'good' },
  { name: 'Integrals', score: 72, status: 'ok' },
  { name: 'Applications of Integration', score: 45, status: 'weak' },
  { name: 'Series & Sequences', score: 58, status: 'ok' },
]

const PAST_PAPERS = [
  { title: '2024 AP Calculus BC FRQ', type: 'College Board · 45 mins', score: '87/100' },
  { title: '2023 Full Practice Exam', type: 'Multiple Choice + FRQ · 3h', score: '82/100' },
  { title: '2022 Official FRQ', type: 'College Board · 45 mins', score: '78/100' },
]

function Sidebar() {
  return (
    <aside style={{ width: '260px', minWidth: '260px', background: '#0A0E1A', height: '100vh', position: 'fixed' as const, left: 0, top: 0, display: 'flex', flexDirection: 'column' as const, borderRight: '1px solid rgba(255,255,255,0.06)', zIndex: 40 }}>
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
        {LINKS.map(l => (
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
  )
}

export default function AchieverExamPrepPage() {
  return (
    <div style={{ background: '#0D1117', minHeight: '100vh', fontFamily: '"Inter", system-ui, sans-serif' }}>
      <style>{`@media(min-width:1024px){.ach-sb{display:flex!important}.ach-main{margin-left:260px!important}.ach-mnav{display:none!important}}`}</style>
      <div className="ach-sb" style={{ display: 'none' }}><Sidebar /></div>
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
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '28px', margin: '0 0 6px' }}>AP Calculus BC — Exam Prep</h1>
            <p style={{ color: '#94A3B8', fontSize: '14px', margin: 0 }}>EWD-026 · 14 days to exam · Overall readiness: 78%</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '20px', marginBottom: '20px' }}>
            {/* Confidence Gauge */}
            <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <p style={{ color: '#94A3B8', fontSize: '13px', margin: 0 }}>Overall Confidence</p>
              <div style={{ position: 'relative', width: '140px', height: '140px' }}>
                <svg viewBox="0 0 140 140" style={{ width: '100%', height: '100%' }}>
                  <circle cx="70" cy="70" r="55" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="12" />
                  <circle cx="70" cy="70" r="55" fill="none" stroke="#06B6D4" strokeWidth="12"
                    strokeDasharray={`${2 * Math.PI * 55 * 0.78} ${2 * Math.PI * 55}`}
                    strokeDashoffset={2 * Math.PI * 55 * 0.25}
                    strokeLinecap="round" transform="rotate(-90 70 70)" />
                </svg>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '28px' }}>78%</span>
                  <span style={{ color: '#94A3B8', fontSize: '11px' }}>Readiness</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '8px', height: '8px', background: '#06B6D4', borderRadius: '50%' }} />
                  <span style={{ color: '#94A3B8', fontSize: '11px' }}>Current</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '8px', height: '8px', background: '#22C55E', borderRadius: '50%' }} />
                  <span style={{ color: '#94A3B8', fontSize: '11px' }}>Target 90%</span>
                </div>
              </div>
            </div>

            {/* Topics */}
            <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: '0 0 16px' }}>Topic Mastery</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {TOPICS.map(t => {
                  const color = t.status === 'excellent' ? '#22C55E' : t.status === 'good' ? '#06B6D4' : t.status === 'ok' ? '#F59E0B' : '#EF4444'
                  return (
                    <div key={t.name}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ color: '#CBD5E1', fontSize: '13px', fontWeight: 500 }}>{t.name}</span>
                        <span style={{ color, fontSize: '13px', fontWeight: 700 }}>{t.score}%</span>
                      </div>
                      <div style={{ height: '5px', background: 'rgba(255,255,255,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${t.score}%`, background: color, borderRadius: '100px' }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* AI Recommendation */}
          <div style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '14px', padding: '16px 18px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span className="material-symbols-outlined" style={{ color: '#10B981', fontSize: '22px' }}>auto_awesome</span>
            <div style={{ flex: 1 }}>
              <p style={{ color: '#10B981', fontWeight: 700, fontSize: '14px', margin: '0 0 3px' }}>✦ AI Suggests: Focus on Optimization next</p>
              <p style={{ color: '#94A3B8', fontSize: '13px', margin: 0 }}>Applications of Integration is your weakest area — 3 targeted sessions can bring it to 75%+ before your exam.</p>
            </div>
            <Link href="/achiever/ai-study-partner" style={{ textDecoration: 'none' }}>
              <button style={{ background: '#10B981', border: 'none', borderRadius: '8px', padding: '8px 14px', color: '#FFFFFF', fontSize: '12px', fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
                Start Session
              </button>
            </Link>
          </div>

          {/* Past Papers */}
          <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px', marginBottom: '20px' }}>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: '0 0 16px' }}>Past Papers & Practice</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {PAST_PAPERS.map(p => (
                <div key={p.title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '12px 14px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                  <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '20px' }}>description</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '14px', margin: '0 0 2px', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>{p.title}</p>
                    <p style={{ color: '#94A3B8', fontSize: '12px', margin: 0 }}>{p.type}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: '#22C55E', fontSize: '13px', fontWeight: 700 }}>{p.score}</span>
                    <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '18px' }}>download</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button style={{ flex: 1, background: 'linear-gradient(135deg, #7c3aed, #06B6D4)', border: 'none', borderRadius: '12px', padding: '13px', color: '#FFFFFF', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
              Start Practice Quiz
            </button>
            <button style={{ flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '13px', color: '#CBD5E1', fontSize: '14px', fontWeight: 600, cursor: 'pointer', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
              Study Resources
            </button>
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
