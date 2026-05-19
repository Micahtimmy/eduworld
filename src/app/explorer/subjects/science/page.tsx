'use client'

import Link from 'next/link'

const NAV_LINKS = [
  { icon: 'home', label: 'Home', href: '/explorer/dashboard', active: false },
  { icon: 'school', label: 'Lessons', href: '/explorer/lessons', active: true },
  { icon: 'workspace_premium', label: 'Quests', href: '/explorer/daily-quest', active: false },
  { icon: 'shopping_bag', label: 'Shop', href: '/explorer/shop', active: false },
  { icon: 'person', label: 'Profile', href: '/explorer/profile', active: false },
]

const UNITS = [
  {
    id: 1,
    icon: 'nature',
    title: 'Unit 1: The Biosphere',
    status: 'completed',
    note: 'You learned about ecosystems and earned the Naturalist badge.',
    subs: [],
  },
  {
    id: 2,
    icon: 'rocket',
    title: 'Unit 2: Gravity & Orbits',
    status: 'in-progress',
    note: '',
    subs: [
      { icon: 'play_circle', label: 'Watch: The Moon' },
      { icon: 'science', label: 'Lab: Gravity Drop' },
    ],
  },
  {
    id: 3,
    icon: 'science',
    title: 'Unit 3: Chemical Reactions',
    status: 'locked',
    note: 'Complete Unit 2 to unlock the Chemistry Lab!',
    subs: [],
  },
]

const TROPHIES = [
  { icon: 'pest_control_rodent', label: 'Lab Rat', desc: 'Found 10 clues', earned: true },
  { icon: 'rocket', label: 'Space Cadet', desc: 'In progress...', earned: false },
  { icon: 'help', label: '???', desc: 'Locked', earned: false },
  { icon: 'help', label: '???', desc: 'Locked', earned: false },
]

export default function ExplorerSciencePage() {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        fontFamily: '"Nunito", system-ui, sans-serif',
        backgroundColor: '#12122a',
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: 260,
          minHeight: '100vh',
          background: 'linear-gradient(180deg, #6c63ff 0%, #3b82f6 100%)',
          display: 'flex',
          flexDirection: 'column',
          padding: '32px 20px',
          flexShrink: 0,
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflowY: 'auto',
        }}
        className="hidden md:flex"
      >
        <div style={{ fontWeight: 800, fontSize: 22, color: '#fff', marginBottom: 32, letterSpacing: '-0.3px' }}>
          EduWorld
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 32 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: 20,
              color: '#fff',
            }}
          >
            E
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: '#fff' }}>Welcome, Explorer!</div>
            <div style={{ fontWeight: 500, fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>Level 12 Wizard</div>
          </div>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '10px 14px',
                borderRadius: 12,
                backgroundColor: link.active ? 'rgba(255,255,255,0.22)' : 'transparent',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: link.active ? 700 : 600,
                fontSize: 14,
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          style={{
            marginTop: 24,
            padding: '12px 20px',
            borderRadius: 50,
            backgroundColor: '#FFD700',
            color: '#1a1a2e',
            fontWeight: 800,
            fontSize: 14,
            border: 'none',
            cursor: 'pointer',
            fontFamily: '"Nunito", system-ui, sans-serif',
          }}
        >
          Start Learning
        </button>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, padding: '32px 28px', overflowY: 'auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
              <span style={{ fontWeight: 700, fontSize: 13, color: '#f97316', display: 'flex', alignItems: 'center', gap: 4 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>local_fire_department</span>12
              </span>
              <span style={{ fontWeight: 700, fontSize: 13, color: '#facc15', display: 'flex', alignItems: 'center', gap: 4 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>star</span>450
              </span>
            </div>
            <h1 style={{ fontWeight: 800, fontSize: 28, color: '#fff', margin: 0 }}>Science World</h1>
          </div>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #6c63ff, #3b82f6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: 12,
              color: '#fff',
            }}
          >
            L12
          </div>
        </div>

        {/* Current Zone banner */}
        <div
          style={{
            backgroundColor: '#252545',
            border: '1px solid rgba(108,99,255,0.3)',
            borderRadius: 16,
            padding: '20px 24px',
            marginBottom: 24,
          }}
        >
          <div style={{ fontWeight: 600, fontSize: 11, color: '#8892a4', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>
            Current Zone
          </div>
          <h2 style={{ fontWeight: 800, fontSize: 22, color: '#fff', margin: '0 0 8px 0' }}>The Solar System</h2>
          <p style={{ fontWeight: 500, fontSize: 13, color: '#8892a4', margin: 0 }}>
            Explore orbits, gravity, and beyond. Earn the Space Explorer badge!
          </p>
        </div>

        {/* Units */}
        <div
          style={{
            backgroundColor: '#1e1e3a',
            borderRadius: 16,
            padding: '20px',
            marginBottom: 24,
          }}
        >
          <h3 style={{ fontWeight: 800, fontSize: 16, color: '#fff', margin: '0 0 16px 0' }}>Science Units</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {UNITS.map((unit) => (
              <div key={unit.id}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '14px 16px',
                    borderRadius: 12,
                    backgroundColor:
                      unit.status === 'completed'
                        ? 'rgba(0,137,123,0.12)'
                        : unit.status === 'in-progress'
                        ? 'rgba(0,188,212,0.1)'
                        : 'rgba(255,255,255,0.03)',
                    border:
                      unit.status === 'completed'
                        ? '1px solid rgba(0,137,123,0.3)'
                        : unit.status === 'in-progress'
                        ? '1px solid rgba(0,188,212,0.3)'
                        : '1px solid rgba(255,255,255,0.06)',
                    opacity: unit.status === 'locked' ? 0.6 : 1,
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: 24,
                      color:
                        unit.status === 'completed'
                          ? '#00897B'
                          : unit.status === 'in-progress'
                          ? '#00BCD4'
                          : '#6b7280',
                    }}
                  >
                    {unit.icon}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: '#fff' }}>{unit.title}</div>
                    {unit.note && (
                      <div style={{ fontWeight: 500, fontSize: 12, color: '#8892a4', marginTop: 2 }}>{unit.note}</div>
                    )}
                  </div>
                  {unit.status === 'completed' && (
                    <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#00897B' }}>check_circle</span>
                  )}
                  {unit.status === 'locked' && (
                    <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#6b7280' }}>lock</span>
                  )}
                  {unit.status === 'in-progress' && (
                    <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#00BCD4' }}>play_circle</span>
                  )}
                </div>
                {unit.subs.length > 0 && (
                  <div style={{ marginLeft: 24, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {unit.subs.map((sub) => (
                      <div
                        key={sub.label}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                          padding: '8px 12px',
                          borderRadius: 10,
                          backgroundColor: 'rgba(255,255,255,0.04)',
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#00BCD4' }}>{sub.icon}</span>
                        <span style={{ fontWeight: 600, fontSize: 12, color: '#c8cdd8' }}>{sub.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Trophy Cabinet */}
        <div
          style={{
            backgroundColor: '#1e1e3a',
            borderRadius: 16,
            padding: '20px',
            marginBottom: 24,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <h3 style={{ fontWeight: 800, fontSize: 16, color: '#fff', margin: 0 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 6, color: '#facc15' }}>emoji_events</span>
              Trophy Cabinet
            </h3>
            <button style={{ fontWeight: 600, fontSize: 12, color: '#6c63ff', background: 'none', border: 'none', cursor: 'pointer', fontFamily: '"Nunito", system-ui, sans-serif' }}>
              View All
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            {TROPHIES.map((trophy, i) => (
              <div
                key={i}
                style={{
                  padding: '12px 8px',
                  borderRadius: 12,
                  textAlign: 'center',
                  backgroundColor: trophy.earned ? 'rgba(250,204,21,0.08)' : 'rgba(255,255,255,0.03)',
                  border: trophy.earned ? '1px solid rgba(250,204,21,0.25)' : '1px solid rgba(255,255,255,0.06)',
                  opacity: trophy.earned ? 1 : 0.5,
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 28, color: trophy.earned ? '#facc15' : '#6b7280' }}>
                  {trophy.icon}
                </span>
                <div style={{ fontWeight: 700, fontSize: 11, color: '#fff', marginTop: 4 }}>{trophy.label}</div>
                <div style={{ fontWeight: 500, fontSize: 10, color: '#8892a4' }}>{trophy.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Spark */}
        <div
          style={{
            backgroundColor: 'rgba(250,204,21,0.08)',
            border: '1px solid rgba(250,204,21,0.25)',
            borderRadius: 16,
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 24,
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 32, color: '#facc15' }}>bolt</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: '#fff' }}>Daily Spark! ⚡</div>
            <div style={{ fontWeight: 500, fontSize: 12, color: '#8892a4' }}>Answer today's science trivia for bonus points.</div>
          </div>
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '8px 16px',
              borderRadius: 20,
              backgroundColor: '#00897B',
              color: '#fff',
              fontWeight: 700,
              fontSize: 12,
              border: 'none',
              cursor: 'pointer',
              fontFamily: '"Nunito", system-ui, sans-serif',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>play_arrow</span>
            Play Now
          </button>
        </div>

        {/* AI Bubble */}
        <div
          style={{
            backgroundColor: 'rgba(0,188,212,0.06)',
            border: '1px solid rgba(0,188,212,0.2)',
            borderRadius: 16,
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 14,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              backgroundColor: 'rgba(0,188,212,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#00BCD4' }}>smart_toy</span>
          </div>
          <p style={{ fontWeight: 500, fontSize: 13, color: '#8892a4', flex: 1, margin: 0 }}>
            Need help with orbits? I'm here to assist!{' '}
            <Link href="/explorer/ai-tutor" style={{ fontWeight: 700, color: '#00BCD4', textDecoration: 'none' }}>
              Ask Spark →
            </Link>
          </p>
        </div>
      </main>

      {/* Mobile bottom nav */}
      <nav
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#1e1e3a',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'none',
          justifyContent: 'space-around',
          padding: '8px 0 12px',
          zIndex: 50,
        }}
        className="flex md:hidden"
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              color: link.active ? '#6c63ff' : '#6b7280',
              textDecoration: 'none',
              fontSize: 10,
              fontWeight: link.active ? 700 : 600,
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 22 }}>{link.icon}</span>
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
