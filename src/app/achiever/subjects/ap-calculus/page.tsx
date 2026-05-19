'use client'
import Link from 'next/link'

const CHAPTERS = [
  { name: 'Limits & Continuity', progress: 100, status: 'complete', lessons: 8 },
  { name: 'Derivatives', progress: 100, status: 'complete', lessons: 12 },
  { name: 'Applications of Derivatives', progress: 100, status: 'complete', lessons: 10 },
  { name: 'Integrals', progress: 75, status: 'active', lessons: 14 },
  { name: 'Applications of Integration', progress: 30, status: 'active', lessons: 11 },
  { name: 'Differential Equations', progress: 0, status: 'locked', lessons: 8 },
  { name: 'Series & Sequences', progress: 0, status: 'locked', lessons: 9 },
]

export default function AchieverAPCalculusPage() {
  return (
    <div style={{ background: '#0D1117', minHeight: '100vh', fontFamily: '"Inter", system-ui, sans-serif' }}>
      <style>{`@media(min-width:1024px){.ach-sidebar{display:flex!important}.ach-main-calc{margin-left:260px!important}}`}</style>

      {/* Sidebar */}
      <aside className="ach-sidebar" style={{ display: 'none', width: '260px', minWidth: '260px', background: '#0A0E1A', height: '100vh', position: 'fixed' as const, left: 0, top: 0, flexDirection: 'column' as const, borderRight: '1px solid rgba(255,255,255,0.06)', zIndex: 40 }}>
        <div style={{ padding: '24px 20px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #7c3aed, #06B6D4)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 800, color: '#FFFFFF', fontSize: '16px' }}>A</div>
            <div>
              <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '15px', margin: 0, fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>Achievers</p>
              <p style={{ color: '#94A3B8', fontSize: '11px', margin: 0 }}>Study Smarter</p>
            </div>
          </div>
        </div>
        <nav style={{ flex: 1, padding: '0 12px' }}>
          {[
            { icon: 'dashboard', label: 'Dashboard', href: '/achiever/dashboard' },
            { icon: 'analytics', label: 'Exam Tracker', href: '/achiever/exam-tracker' },
            { icon: 'storm', label: 'AI Lab', href: '/achiever/ai-study-partner' },
            { icon: 'shopping_cart', label: 'Shop', href: '/achiever/shop' },
            { icon: 'group', label: 'Community', href: '/achiever/leaderboard' },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: '10px', cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '20px' }}>{l.icon}</span>
                <span style={{ color: '#94A3B8', fontSize: '14px' }}>{l.label}</span>
              </div>
            </Link>
          ))}
        </nav>
      </aside>

      <div className="ach-main-calc" style={{ marginLeft: 0 }}>
        {/* Topbar */}
        <div style={{ height: '60px', background: '#0D1117', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', position: 'sticky' as const, top: 0, zIndex: 30 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link href="/achiever/subjects" style={{ textDecoration: 'none' }}>
              <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '22px', cursor: 'pointer' }}>arrow_back</span>
            </Link>
            <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: 0, fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>AP Calculus BC</p>
          </div>
          <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #7c3aed, #06B6D4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#FFFFFF', fontSize: '14px', cursor: 'pointer', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>A</div>
        </div>

        <div style={{ padding: '28px' }}>
          {/* Hero Stats */}
          <div style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(6,182,212,0.1) 100%)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: '20px', padding: '24px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span className="material-symbols-outlined" style={{ color: '#A78BFA', fontSize: '24px' }}>functions</span>
              <div>
                <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '22px', margin: 0 }}>AP Calculus BC</p>
                <p style={{ color: '#94A3B8', fontSize: '13px', margin: 0 }}>Dr. Henderson · Spring 2025 · Math-401</p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {[
                { label: 'Mastery', value: '88%', color: '#06B6D4' },
                { label: 'Days to Exam', value: '14', color: '#F59E0B' },
                { label: 'Lessons Done', value: '45/52', color: '#22C55E' },
              ].map(stat => (
                <div key={stat.label} style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: stat.color, fontWeight: 700, fontSize: '26px', margin: '0 0 3px' }}>{stat.value}</p>
                  <p style={{ color: '#94A3B8', fontSize: '12px', margin: 0 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Suggestion */}
          <div style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '14px', padding: '16px 18px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="material-symbols-outlined" style={{ color: '#10B981', fontSize: '20px' }}>auto_awesome</span>
            <div style={{ flex: 1 }}>
              <p style={{ color: '#10B981', fontWeight: 700, fontSize: '13px', margin: '0 0 3px' }}>✦ AI Suggests</p>
              <p style={{ color: '#CBD5E1', fontSize: '13px', margin: 0 }}>Focus on <strong style={{ color: '#FFFFFF' }}>Applications of Integration</strong> next — it&apos;s your weakest area with 14 days to exam.</p>
            </div>
            <Link href="/achiever/ai-study-partner" style={{ textDecoration: 'none' }}>
              <button style={{ background: '#10B981', border: 'none', borderRadius: '8px', padding: '8px 14px', color: '#FFFFFF', fontSize: '12px', fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
                Start Now
              </button>
            </Link>
          </div>

          {/* Chapter List */}
          <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px', marginBottom: '20px' }}>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: '0 0 16px' }}>Course Chapters</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {CHAPTERS.map((ch, i) => (
                <div key={ch.name} style={{
                  background: ch.status === 'active' ? 'rgba(6,182,212,0.06)' : ch.status === 'locked' ? 'rgba(255,255,255,0.02)' : 'rgba(34,197,94,0.06)',
                  border: ch.status === 'active' ? '1px solid rgba(6,182,212,0.2)' : '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '12px',
                  padding: '14px 16px',
                  opacity: ch.status === 'locked' ? 0.5 : 1,
                  cursor: ch.status !== 'locked' ? 'pointer' : 'default',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '32px', height: '32px',
                      background: ch.status === 'complete' ? 'rgba(34,197,94,0.15)' : ch.status === 'active' ? 'rgba(6,182,212,0.15)' : 'rgba(255,255,255,0.05)',
                      borderRadius: '8px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <span className="material-symbols-outlined" style={{
                        color: ch.status === 'complete' ? '#22C55E' : ch.status === 'active' ? '#06B6D4' : '#64748B',
                        fontSize: '16px',
                        fontVariationSettings: '"FILL" 1',
                      }}>
                        {ch.status === 'complete' ? 'check_circle' : ch.status === 'locked' ? 'lock' : 'play_circle'}
                      </span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <p style={{ color: ch.status === 'locked' ? '#64748B' : '#FFFFFF', fontWeight: 600, fontSize: '14px', margin: 0, fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
                          {i + 1}. {ch.name}
                        </p>
                        <span style={{ color: ch.status === 'complete' ? '#22C55E' : ch.status === 'active' ? '#06B6D4' : '#64748B', fontSize: '13px', fontWeight: 700 }}>
                          {ch.progress}%
                        </span>
                      </div>
                      <p style={{ color: '#94A3B8', fontSize: '12px', margin: '0 0 6px' }}>{ch.lessons} lessons</p>
                      {ch.status !== 'locked' && (
                        <div style={{ height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${ch.progress}%`, background: ch.status === 'complete' ? '#22C55E' : '#06B6D4', borderRadius: '100px' }} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link href="/achiever/exam-prep" style={{ textDecoration: 'none', flex: 1 }}>
              <button style={{ width: '100%', background: 'linear-gradient(135deg, #7c3aed, #06B6D4)', border: 'none', borderRadius: '12px', padding: '13px', color: '#FFFFFF', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
                Practice Exam
              </button>
            </Link>
            <Link href="/achiever/ai-study-partner" style={{ textDecoration: 'none', flex: 1 }}>
              <button style={{ width: '100%', background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '12px', padding: '13px', color: '#10B981', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
                Ask AI Tutor
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
