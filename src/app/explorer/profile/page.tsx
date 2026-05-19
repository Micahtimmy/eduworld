'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

const NAV_LINKS = [
  { icon: 'home', label: 'Home', href: '/explorer/dashboard' },
  { icon: 'school', label: 'Lessons', href: '/explorer/lessons' },
  { icon: 'workspace_premium', label: 'Quests', href: '/explorer/daily-quest' },
  { icon: 'shopping_bag', label: 'Shop', href: '/explorer/shop' },
  { icon: 'person', label: 'Profile', href: '/explorer/profile', active: true },
]

const SUBJECTS = [
  { icon: 'science', color: '#0891b2', bg: '#ecfeff', name: 'Science', level: 4, xp: 820, maxXp: 1000 },
  { icon: 'calculate', color: '#7c3aed', bg: '#f5f3ff', name: 'Math', level: 3, xp: 540, maxXp: 750 },
  { icon: 'menu_book', color: '#d97706', bg: '#fffbeb', name: 'Reading', level: 5, xp: 1200, maxXp: 1500 },
  { icon: 'palette', color: '#f43f5e', bg: '#fff1f2', name: 'Art', level: 2, xp: 310, maxXp: 500 },
]

const BADGES = [
  { icon: 'science', color: '#0891b2', bg: '#ecfeff', title: 'Science Cadet' },
  { icon: 'menu_book', color: '#d97706', bg: '#fffbeb', title: 'Word Wizard' },
  { icon: 'wb_sunny', color: '#f59e0b', bg: '#fffbeb', title: 'Early Bird' },
  { icon: 'groups', color: '#16a34a', bg: '#f0fdf4', title: 'Team Player' },
]

const STATS = [
  { value: '3,240', label: 'Total XP' },
  { value: '28', label: 'Day Streak 🔥' },
  { value: '12', label: 'Badges' },
]

export default function ExplorerProfilePage() {
  const router = useRouter()

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        fontFamily: '"Nunito", system-ui, sans-serif',
        backgroundColor: '#f3f3f9',
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
        <div style={{ fontWeight: 800, fontSize: 22, color: '#fff', marginBottom: 32 }}>EduWorld</div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            backgroundColor: 'rgba(255,255,255,0.15)',
            borderRadius: 20,
            padding: '6px 14px',
            marginBottom: 20,
            alignSelf: 'flex-start',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#FFD700' }}>local_fire_department</span>
          <span style={{ fontWeight: 700, fontSize: 14, color: '#fff' }}>5 Day Streak</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: 20,
              color: '#fff',
              border: '2px solid rgba(255,255,255,0.5)',
            }}
          >
            A
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: '#fff' }}>Alex Explorer</div>
            <div style={{ fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.75)' }}>Level 12 Wizard</div>
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
                color: link.active ? '#fff' : 'rgba(255,255,255,0.8)',
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

      {/* Main content */}
      <main style={{ flex: 1, padding: '32px', overflowY: 'auto', maxWidth: 800 }}>
        {/* Profile header card */}
        <div
          style={{
            background: 'linear-gradient(135deg, #6c63ff 0%, #4f46e5 50%, #3b82f6 100%)',
            borderRadius: 24,
            padding: '32px 28px',
            textAlign: 'center',
            color: '#fff',
            marginBottom: 20,
            boxShadow: '0 4px 20px rgba(108,99,255,0.35)',
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.2)',
              margin: '0 auto 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '3px solid rgba(255,255,255,0.5)',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 46, color: '#fff' }}>smart_toy</span>
          </div>
          <h1 style={{ fontWeight: 800, fontSize: 22, margin: '0 0 4px 0' }}>Alex Explorer</h1>
          <p style={{ fontWeight: 500, fontSize: 14, color: 'rgba(255,255,255,0.75)', margin: '0 0 20px 0' }}>
            Level 12 Wizard · EWD-022
          </p>
          {/* Stats row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 0 }}>
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  flex: 1,
                  textAlign: 'center',
                  borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                  padding: '0 8px',
                }}
              >
                <div style={{ fontWeight: 800, fontSize: 22 }}>{stat.value}</div>
                <div style={{ fontWeight: 500, fontSize: 12, color: 'rgba(255,255,255,0.75)', marginTop: 2 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* XP Progress */}
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: 20,
            padding: '20px 24px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            marginBottom: 16,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontWeight: 700, fontSize: 14, color: '#1a1a2e' }}>Level 12</span>
            <span style={{ fontWeight: 600, fontSize: 13, color: '#9ca3af' }}>Level 13</span>
          </div>
          <div style={{ height: 10, backgroundColor: '#f3f4f6', borderRadius: 5, overflow: 'hidden', marginBottom: 6 }}>
            <div
              style={{
                width: '72%',
                height: '100%',
                background: 'linear-gradient(90deg, #6c63ff, #3b82f6)',
                borderRadius: 5,
              }}
            />
          </div>
          <p style={{ fontWeight: 500, fontSize: 12, color: '#9ca3af', textAlign: 'center' }}>
            3,240 / 4,500 XP to next level
          </p>
        </div>

        {/* Subject Levels */}
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: 20,
            padding: '20px 24px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            marginBottom: 16,
          }}
        >
          <h2 style={{ fontWeight: 800, fontSize: 17, color: '#1a1a2e', margin: '0 0 16px 0' }}>Subject Levels</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {SUBJECTS.map((s) => (
              <div
                key={s.name}
                style={{
                  backgroundColor: '#fafafa',
                  borderRadius: 16,
                  padding: '14px',
                  border: '1px solid #f3f4f6',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      backgroundColor: s.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 20, color: s.color }}>{s.icon}</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13, color: '#1a1a2e' }}>{s.name}</div>
                    <div style={{ fontWeight: 500, fontSize: 11, color: '#9ca3af' }}>Level {s.level}</div>
                  </div>
                </div>
                <div style={{ height: 5, backgroundColor: '#e5e7eb', borderRadius: 3, overflow: 'hidden', marginBottom: 4 }}>
                  <div
                    style={{
                      width: `${(s.xp / s.maxXp) * 100}%`,
                      height: '100%',
                      backgroundColor: s.color,
                      borderRadius: 3,
                    }}
                  />
                </div>
                <span style={{ fontWeight: 600, fontSize: 11, color: '#9ca3af' }}>{s.xp} XP</span>
              </div>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: 20,
            padding: '20px 24px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            marginBottom: 20,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <h2 style={{ fontWeight: 800, fontSize: 17, color: '#1a1a2e', margin: 0 }}>Badges</h2>
            <button
              style={{ background: 'none', border: 'none', color: '#6c63ff', fontWeight: 700, fontSize: 13, cursor: 'pointer', fontFamily: '"Nunito", system-ui, sans-serif' }}
              onClick={() => router.push('/explorer/achievements')}
            >
              View All
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            {BADGES.map((b) => (
              <div
                key={b.title}
                style={{
                  backgroundColor: '#fafafa',
                  borderRadius: 14,
                  padding: '12px 8px',
                  textAlign: 'center',
                  border: '1px solid #f3f4f6',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    backgroundColor: b.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 22, color: b.color }}>{b.icon}</span>
                </div>
                <span style={{ fontWeight: 700, fontSize: 10, color: '#1a1a2e', lineHeight: 1.3 }}>{b.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Edit profile */}
        <button
          onClick={() => {}}
          style={{
            width: '100%',
            padding: '14px',
            borderRadius: 50,
            background: 'linear-gradient(90deg, #6c63ff, #3b82f6)',
            color: '#fff',
            fontWeight: 800,
            fontSize: 15,
            border: 'none',
            cursor: 'pointer',
            fontFamily: '"Nunito", system-ui, sans-serif',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            boxShadow: '0 4px 15px rgba(108,99,255,0.35)',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>edit</span>
          Edit Profile
        </button>
      </main>

      {/* Mobile bottom nav */}
      <nav
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#fff',
          borderTop: '1px solid #e5e7eb',
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
              color: link.active ? '#6c63ff' : '#9ca3af',
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
