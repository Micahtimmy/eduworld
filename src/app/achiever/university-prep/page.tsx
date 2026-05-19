'use client'
import Link from 'next/link'

const APPLICATIONS = [
  { school: 'MIT', deadline: 'Nov 1, 2025', status: 'In Progress', progress: 45, color: '#EF4444' },
  { school: 'Stanford University', deadline: 'Nov 1, 2025', status: 'Not Started', progress: 0, color: '#F59E0B' },
  { school: 'UC Berkeley', deadline: 'Nov 30, 2025', status: 'In Progress', progress: 70, color: '#06B6D4' },
  { school: 'Carnegie Mellon', deadline: 'Jan 1, 2026', status: 'Not Started', progress: 0, color: '#7C3AED' },
]

const PORTFOLIO = [
  { title: 'AP Calculus BC — 5 (Expected)', type: 'Academic', icon: 'functions', color: '#7C3AED', done: true },
  { title: 'Science Fair 2nd Place Award', type: 'Extracurricular', icon: 'emoji_events', color: '#F59E0B', done: true },
  { title: 'Common App Essay Draft', type: 'Essay', icon: 'edit_note', color: '#10B981', done: false },
  { title: 'Letters of Recommendation (2/3)', type: 'LOR', icon: 'mail', color: '#06B6D4', done: false },
]

export default function AchieverUniversityPrepPage() {
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
          <div style={{ marginBottom: '28px' }}>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '28px', margin: '0 0 6px' }}>University Prep & Portfolio</h1>
            <p style={{ color: '#94A3B8', fontSize: '14px', margin: 0 }}>Application tracker, portfolio builder, and deadline countdown.</p>
          </div>

          {/* Overview Banner */}
          <div style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.1))', border: '1px solid rgba(124,58,237,0.3)', borderRadius: '16px', padding: '20px 24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div>
              <p style={{ color: '#94A3B8', fontSize: '12px', margin: '0 0 4px' }}>Next Deadline</p>
              <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '20px', margin: '0 0 4px' }}>MIT Early Action</p>
              <p style={{ color: '#EF4444', fontWeight: 600, fontSize: '13px', margin: 0 }}>Nov 1, 2025 — 167 days away</p>
            </div>
            <div style={{ marginLeft: 'auto', textAlign: 'center' }}>
              <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '36px', margin: 0 }}>4</p>
              <p style={{ color: '#94A3B8', fontSize: '12px', margin: 0 }}>Applications</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#F59E0B', fontWeight: 700, fontSize: '36px', margin: 0 }}>2</p>
              <p style={{ color: '#94A3B8', fontSize: '12px', margin: 0 }}>In Progress</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {/* Application Tracker */}
            <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: '0 0 16px' }}>Application Tracker</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {APPLICATIONS.map(app => (
                  <div key={app.school} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', padding: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '8px', height: '8px', background: app.color, borderRadius: '50%' }} />
                        <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '14px', margin: 0 }}>{app.school}</p>
                      </div>
                      <span style={{
                        background: app.status === 'In Progress' ? 'rgba(245,158,11,0.15)' : 'rgba(148,163,184,0.1)',
                        color: app.status === 'In Progress' ? '#F59E0B' : '#94A3B8',
                        borderRadius: '100px', padding: '3px 10px',
                        fontSize: '11px', fontWeight: 600,
                      }}>{app.status}</span>
                    </div>
                    <p style={{ color: '#94A3B8', fontSize: '12px', margin: '0 0 6px' }}>Deadline: {app.deadline}</p>
                    {app.progress > 0 && (
                      <div style={{ height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${app.progress}%`, background: app.color, borderRadius: '100px' }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Portfolio Items */}
            <div style={{ background: '#161D2F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h2 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: 0 }}>Portfolio Items</h2>
                <button style={{ background: '#06B6D4', border: 'none', borderRadius: '8px', padding: '6px 12px', color: '#FFFFFF', fontSize: '12px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>add</span>
                  Add Item
                </button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {PORTFOLIO.map(item => (
                  <div key={item.title} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px' }}>
                    <div style={{ width: '36px', height: '36px', background: `rgba(${item.color === '#7C3AED' ? '124,58,237' : item.color === '#F59E0B' ? '245,158,11' : item.color === '#10B981' ? '16,185,129' : '6,182,212'}, 0.15)`, borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ color: item.color, fontSize: '18px' }}>{item.icon}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ color: '#FFFFFF', fontWeight: 500, fontSize: '13px', margin: '0 0 2px' }}>{item.title}</p>
                      <p style={{ color: '#64748B', fontSize: '11px', margin: 0 }}>{item.type}</p>
                    </div>
                    <div style={{
                      width: '20px', height: '20px', borderRadius: '50%',
                      background: item.done ? '#22C55E' : 'rgba(255,255,255,0.1)',
                      border: item.done ? 'none' : '2px solid rgba(255,255,255,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {item.done && <span className="material-symbols-outlined" style={{ color: '#FFFFFF', fontSize: '13px', fontVariationSettings: '"FILL" 1' }}>check</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI guidance */}
          <div style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '14px', padding: '16px 18px', marginTop: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="material-symbols-outlined" style={{ color: '#10B981', fontSize: '22px' }}>auto_awesome</span>
            <div style={{ flex: 1 }}>
              <p style={{ color: '#10B981', fontWeight: 700, fontSize: '13px', margin: '0 0 3px' }}>✦ AI College Advisor</p>
              <p style={{ color: '#CBD5E1', fontSize: '13px', margin: 0 }}>Your Common App essay draft needs a stronger hook. AI can help you rewrite the opening paragraph to increase admissions impact.</p>
            </div>
            <button style={{ background: '#10B981', border: 'none', borderRadius: '8px', padding: '8px 14px', color: '#FFFFFF', fontSize: '12px', fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
              Improve Essay
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
