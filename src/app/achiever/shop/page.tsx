'use client'
import Link from 'next/link'

const ITEMS = {
  academic: [
    { icon: 'square_foot', label: 'Targeted Math Drill', desc: 'AI-generated personalized practice set', xp: 300, color: '#7C3AED' },
    { icon: 'description', label: 'Premium Mock Exam', desc: 'Full SAT/ACT simulation with analysis', xp: 500, color: '#06B6D4' },
    { icon: 'edit_note', label: 'Essay Review Pass', desc: 'AI + peer review for college essays', xp: 450, color: '#10B981' },
  ],
  mentorship: [
    { icon: 'account_balance', label: 'Ivy League App Review', desc: '1-on-1 session with admissions mentor', xp: 1200, color: '#F59E0B' },
    { icon: 'work', label: 'Tech Career Chat', desc: 'Connect with a FAANG engineer for 30 mins', xp: 800, color: '#3B82F6' },
  ],
  prestige: [
    { icon: 'workspace_premium', label: 'Gold Profile Frame', desc: 'Exclusive profile border', xp: 400, color: '#F59E0B' },
    { icon: 'local_fire_department', label: 'Streak Saver', desc: 'Protect your learning streak for 1 day', xp: 150, color: '#F97316' },
    { icon: 'dark_mode', label: 'Dark Theme Pro', desc: 'Unlock the midnight scholar theme', xp: 250, color: '#7C3AED' },
    { icon: 'bolt', label: 'XP Booster', desc: 'Double XP for 24 hours', xp: 600, color: '#22C55E' },
  ],
}

export default function AchieverShopPage() {
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
            { icon: 'shopping_cart', label: 'Shop', href: '/achiever/shop', active: true },
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '100px', padding: '6px 14px' }}>
              <span className="material-symbols-outlined" style={{ color: '#F59E0B', fontSize: '18px', fontVariationSettings: '"FILL" 1' }}>military_tech</span>
              <span style={{ color: '#F59E0B', fontWeight: 700, fontSize: '14px' }}>2,450 XP</span>
            </div>
            <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #7c3aed, #06B6D4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#FFFFFF', fontSize: '14px', cursor: 'pointer', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>A</div>
          </div>
        </div>

        <div style={{ padding: '28px' }}>
          <div style={{ marginBottom: '28px' }}>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '28px', margin: '0 0 6px' }}>Elite XP Exchange</h1>
            <p style={{ color: '#94A3B8', fontSize: '14px', margin: 0 }}>Spend your hard-earned XP on academic tools, mentorship, and prestige perks.</p>
          </div>

          {/* Academic Boosters */}
          <div style={{ marginBottom: '28px' }}>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '18px', margin: '0 0 14px' }}>Academic Boosters</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {ITEMS.academic.map(item => (
                <div key={item.label} style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '16px 18px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '44px', height: '44px', background: `rgba(${item.color === '#7C3AED' ? '124,58,237' : item.color === '#06B6D4' ? '6,182,212' : '16,185,129'}, 0.15)`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span className="material-symbols-outlined" style={{ color: item.color, fontSize: '22px' }}>{item.icon}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '15px', margin: '0 0 3px', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>{item.label}</p>
                    <p style={{ color: '#94A3B8', fontSize: '13px', margin: 0 }}>{item.desc}</p>
                  </div>
                  <button style={{ background: '#06B6D4', border: 'none', borderRadius: '10px', padding: '9px 16px', color: '#FFFFFF', fontSize: '13px', fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '14px', fontVariationSettings: '"FILL" 1' }}>military_tech</span>
                    {item.xp}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Mentorship */}
          <div style={{ marginBottom: '28px' }}>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '18px', margin: '0 0 14px' }}>Mentorship</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {ITEMS.mentorship.map(item => (
                <div key={item.label} style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '16px 18px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '44px', height: '44px', background: `rgba(${item.color === '#F59E0B' ? '245,158,11' : '59,130,246'}, 0.15)`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span className="material-symbols-outlined" style={{ color: item.color, fontSize: '22px' }}>{item.icon}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '15px', margin: '0 0 3px', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>{item.label}</p>
                    <p style={{ color: '#94A3B8', fontSize: '13px', margin: 0 }}>{item.desc}</p>
                  </div>
                  <button style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', padding: '9px 16px', color: '#CBD5E1', fontSize: '13px', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '14px', fontVariationSettings: '"FILL" 1', color: '#F59E0B' }}>military_tech</span>
                    {item.xp}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Prestige */}
          <div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '18px', margin: '0 0 14px' }}>Prestige</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {ITEMS.prestige.map(item => (
                <div key={item.label} style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '18px' }}>
                  <div style={{ width: '44px', height: '44px', background: `rgba(${item.color === '#F59E0B' ? '245,158,11' : item.color === '#F97316' ? '249,115,22' : item.color === '#7C3AED' ? '124,58,237' : '34,197,94'}, 0.15)`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                    <span className="material-symbols-outlined" style={{ color: item.color, fontSize: '22px', fontVariationSettings: '"FILL" 1' }}>{item.icon}</span>
                  </div>
                  <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '14px', margin: '0 0 4px', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>{item.label}</p>
                  <p style={{ color: '#94A3B8', fontSize: '12px', margin: '0 0 12px' }}>{item.desc}</p>
                  <button style={{ width: '100%', background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', borderRadius: '8px', padding: '8px', color: '#06B6D4', fontSize: '12px', fontWeight: 700, cursor: 'pointer', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '14px', fontVariationSettings: '"FILL" 1', color: '#F59E0B' }}>military_tech</span>
                    {item.xp} XP
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="ach-mnav" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#0A0E1A', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', zIndex: 50, padding: '8px 0 12px' }}>
        {[{ icon: 'dashboard', label: 'Home', href: '/achiever/dashboard' }, { icon: 'analytics', label: 'Exams', href: '/achiever/exam-tracker' }, { icon: 'storm', label: 'AI', href: '/achiever/ai-study-partner' }, { icon: 'shopping_cart', label: 'Shop', href: '/achiever/shop', active: true }].map(item => (
          <Link key={item.href} href={item.href} style={{ flex: 1, textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
            <span className="material-symbols-outlined" style={{ color: item.active ? '#06B6D4' : '#94A3B8', fontSize: '22px' }}>{item.icon}</span>
            <span style={{ color: item.active ? '#06B6D4' : '#94A3B8', fontSize: '10px', fontWeight: item.active ? 600 : 400 }}>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
