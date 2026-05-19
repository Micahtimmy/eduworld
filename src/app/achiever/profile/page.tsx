'use client'
import Link from 'next/link'

const SUBJECT_SCORES = [
  { name: 'Calculus', score: 94, color: '#7C3AED' },
  { name: 'Physics', score: 78, color: '#F59E0B' },
  { name: 'Biology', score: 88, color: '#10B981' },
  { name: 'English', score: 97, color: '#3B82F6' },
  { name: 'Chemistry', score: 71, color: '#22C55E' },
]

const ACHIEVEMENTS = [
  { icon: 'star', color: '#F59E0B', label: 'First Step' },
  { icon: 'bolt', color: '#06B6D4', label: 'Quick Learner' },
  { icon: 'local_fire_department', color: '#EF4444', label: 'Streak Master' },
  { icon: 'storm', color: '#10B981', label: 'AI Explorer' },
  { icon: 'dark_mode', color: '#8B5CF6', label: 'Night Owl' },
]

const STATS = [
  { label: 'Lessons', value: '47' },
  { label: 'Quizzes', value: '23' },
  { label: 'Achievements', value: '5' },
  { label: 'Study Hours', value: '142' },
]

// Radar SVG math
const cx = 80, cy = 80, r = 55
const angles = SUBJECT_SCORES.map((_, i) => (i / SUBJECT_SCORES.length) * 2 * Math.PI - Math.PI / 2)
const radarPoints = SUBJECT_SCORES.map((s, i) => ({
  x: cx + r * (s.score / 100) * Math.cos(angles[i]),
  y: cy + r * (s.score / 100) * Math.sin(angles[i]),
}))
const radarPolygon = radarPoints.map(p => `${p.x},${p.y}`).join(' ')
const gridPolygon = angles.map(a => `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`).join(' ')

export default function AchieverProfilePage() {
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
          <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '18px', margin: 0, fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>Profile</p>
          <Link href="/settings" style={{ textDecoration: 'none' }}>
            <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '22px', cursor: 'pointer' }}>settings</span>
          </Link>
        </div>

        <div style={{ padding: '28px', maxWidth: '800px' }}>
          {/* Profile header */}
          <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '28px', marginBottom: '20px', textAlign: 'center' }}>
            <div style={{ position: 'relative' as const, display: 'inline-block', marginBottom: '14px' }}>
              <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #7c3aed, #06B6D4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 800, color: '#FFFFFF', fontSize: '28px' }}>A</div>
              <button style={{ position: 'absolute', bottom: '0', right: '0', width: '24px', height: '24px', background: '#06B6D4', border: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <span className="material-symbols-outlined" style={{ color: '#FFFFFF', fontSize: '13px', fontVariationSettings: '"FILL" 1' }}>edit</span>
              </button>
            </div>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '22px', margin: '0 0 6px' }}>Alexander Johnson</h1>
            <p style={{ color: '#94A3B8', fontSize: '13px', margin: '0 0 14px' }}>Grade 11 · St. Peter&apos;s Academy</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.25)', borderRadius: '100px', padding: '5px 12px' }}>
                <span className="material-symbols-outlined" style={{ color: '#7C3AED', fontSize: '14px', fontVariationSettings: '"FILL" 1' }}>military_tech</span>
                <span style={{ color: '#7C3AED', fontWeight: 700, fontSize: '12px' }}>Level 12</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '100px', padding: '5px 12px' }}>
                <span className="material-symbols-outlined" style={{ color: '#EF4444', fontSize: '14px', fontVariationSettings: '"FILL" 1' }}>local_fire_department</span>
                <span style={{ color: '#EF4444', fontWeight: 700, fontSize: '12px' }}>21 Day Streak</span>
              </div>
            </div>
          </div>

          {/* XP Progress */}
          <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px 20px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: '#CBD5E1', fontSize: '13px', fontWeight: 600 }}>XP Progress — Level 12</span>
              <span style={{ color: '#F59E0B', fontSize: '13px', fontWeight: 700 }}>2,450 / 3,000 XP</span>
            </div>
            <div style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '82%', background: 'linear-gradient(90deg, #7C3AED, #06B6D4)', borderRadius: '100px' }} />
            </div>
            <p style={{ color: '#94A3B8', fontSize: '12px', margin: '6px 0 0' }}>550 XP to Level 13</p>
          </div>

          {/* Stats row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '20px' }}>
            {STATS.map(s => (
              <div key={s.label} style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '16px', textAlign: 'center' }}>
                <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '22px', margin: '0 0 4px' }}>{s.value}</p>
                <p style={{ color: '#94A3B8', fontSize: '12px', margin: 0 }}>{s.label}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            {/* Subject radar */}
            <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '15px', margin: '0 0 16px' }}>Subject Performance</h2>
              <svg viewBox="0 0 160 160" style={{ width: '100%', maxWidth: '160px', display: 'block', margin: '0 auto' }}>
                {[0.25, 0.5, 0.75, 1].map(scale => (
                  <polygon key={scale} points={angles.map(a => `${cx + r * scale * Math.cos(a)},${cy + r * scale * Math.sin(a)}`).join(' ')} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                ))}
                <polygon points={gridPolygon} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <polygon points={radarPolygon} fill="rgba(6,182,212,0.15)" stroke="#06B6D4" strokeWidth="1.5" />
                {SUBJECT_SCORES.map((s, i) => (
                  <text key={s.name} x={cx + (r + 12) * Math.cos(angles[i])} y={cy + (r + 12) * Math.sin(angles[i]) + 3} textAnchor="middle" fill="#94A3B8" fontSize="8">{s.name}</text>
                ))}
              </svg>
            </div>

            {/* Achievements */}
            <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '15px', margin: 0 }}>Achievements</h2>
                <Link href="/achiever/achievements" style={{ textDecoration: 'none' }}>
                  <span style={{ color: '#06B6D4', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>View all</span>
                </Link>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '10px' }}>
                {ACHIEVEMENTS.map(a => (
                  <div key={a.label} style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '44px', height: '44px', background: `${a.color}20`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span className="material-symbols-outlined" style={{ color: a.color, fontSize: '22px', fontVariationSettings: '"FILL" 1' }}>{a.icon}</span>
                    </div>
                    <span style={{ color: '#94A3B8', fontSize: '10px', textAlign: 'center' as const }}>{a.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Subject scores */}
          <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '15px', margin: '0 0 16px' }}>Subject Breakdown</h2>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
              {SUBJECT_SCORES.map(s => (
                <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <p style={{ color: '#CBD5E1', fontSize: '13px', fontWeight: 500, margin: 0, width: '130px', flexShrink: 0 }}>{s.name}</p>
                  <div style={{ flex: 1, height: '5px', background: 'rgba(255,255,255,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${s.score}%`, background: s.color, borderRadius: '100px' }} />
                  </div>
                  <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '13px', width: '36px', textAlign: 'right' as const }}>{s.score}%</span>
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
