'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

const NAV_LINKS = [
  { icon: 'home', label: 'Home', href: '/explorer/dashboard', active: true },
  { icon: 'school', label: 'Lessons', href: '/explorer/lessons' },
  { icon: 'workspace_premium', label: 'Quests', href: '/explorer/daily-quest' },
  { icon: 'shopping_bag', label: 'Shop', href: '/explorer/shop' },
  { icon: 'person', label: 'Profile', href: '/explorer/profile' },
]

const HUB_CARDS = [
  {
    icon: 'calculate',
    color: '#7c3aed',
    bgColor: '#f5f3ff',
    title: 'Math Mastery',
    subtitle: 'Fractions & Decimals',
    href: '/explorer/subjects/math',
  },
  {
    icon: 'science',
    color: '#0891b2',
    bgColor: '#ecfeff',
    title: 'Science Lab',
    subtitle: 'Solar System',
    href: '/explorer/subjects/science',
  },
  {
    icon: 'menu_book',
    color: '#d97706',
    bgColor: '#fffbeb',
    title: 'Story Quest',
    subtitle: 'Creative Writing',
    href: '/explorer/lessons',
  },
]

export default function ExplorerDashboardPage() {
  const router = useRouter()

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        fontFamily: '"Nunito", system-ui, sans-serif',
        backgroundColor: '#f0f4ff',
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
        {/* Logo */}
        <div style={{ fontWeight: 800, fontSize: 22, color: '#fff', marginBottom: 32, letterSpacing: '-0.3px' }}>
          EduWorld
        </div>

        {/* Streak badge */}
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

        {/* Avatar + name */}
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
            E
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: '#fff' }}>Welcome, Explorer!</div>
            <div style={{ fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.75)' }}>Level 12 Wizard</div>
          </div>
        </div>

        {/* Nav links */}
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
                transition: 'background-color 0.15s',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Start Learning button */}
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
      <main
        style={{
          flex: 1,
          padding: '40px 32px',
          overflowY: 'auto',
        }}
      >
        {/* Greeting */}
        <div style={{ marginBottom: 32 }}>
          <h1
            style={{
              fontWeight: 800,
              fontSize: 32,
              color: '#1a1a2e',
              margin: '0 0 6px 0',
            }}
          >
            Ready for your next adventure?
          </h1>
          <p style={{ fontWeight: 400, fontSize: 16, color: '#6b7280', margin: 0 }}>
            Continue your quest to mastery!
          </p>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            gap: 16,
            marginBottom: 32,
            flexWrap: 'wrap',
          }}
        >
          {/* Streak card */}
          <div
            style={{
              flex: '1 1 160px',
              backgroundColor: '#fff',
              borderRadius: 20,
              padding: '20px 24px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                backgroundColor: '#fff7ed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 28, color: '#f97316' }}>local_fire_department</span>
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 28, color: '#1a1a2e', lineHeight: 1 }}>5</div>
              <div style={{ fontWeight: 600, fontSize: 13, color: '#6b7280', marginTop: 2 }}>Day Streak</div>
            </div>
          </div>

          {/* XP card */}
          <div
            style={{
              flex: '1 1 160px',
              backgroundColor: '#fff',
              borderRadius: 20,
              padding: '20px 24px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                backgroundColor: '#fefce8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 28, color: '#eab308' }}>star</span>
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 28, color: '#1a1a2e', lineHeight: 1 }}>1,250</div>
              <div style={{ fontWeight: 600, fontSize: 13, color: '#6b7280', marginTop: 2 }}>XP Points</div>
            </div>
          </div>

          {/* Level card */}
          <div
            style={{
              flex: '2 1 240px',
              backgroundColor: '#fff',
              borderRadius: 20,
              padding: '20px 24px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: 20, color: '#1a1a2e' }}>Level 12</div>
                <div style={{ fontWeight: 600, fontSize: 13, color: '#6b7280' }}>Wizard</div>
              </div>
              <div
                style={{
                  padding: '4px 12px',
                  borderRadius: 20,
                  background: 'linear-gradient(135deg, #6c63ff, #3b82f6)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 12,
                }}
              >
                65%
              </div>
            </div>
            <div
              style={{
                height: 8,
                backgroundColor: '#e5e7eb',
                borderRadius: 4,
                overflow: 'hidden',
                marginBottom: 6,
              }}
            >
              <div
                style={{
                  width: '65%',
                  height: '100%',
                  background: 'linear-gradient(90deg, #6c63ff, #3b82f6)',
                  borderRadius: 4,
                }}
              />
            </div>
            <div style={{ fontWeight: 500, fontSize: 12, color: '#9ca3af' }}>350 XP to Level 13</div>
          </div>
        </div>

        {/* Subject Hubs */}
        <div>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 20,
              color: '#1a1a2e',
              margin: '0 0 16px 0',
            }}
          >
            Subject Hubs
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 16,
            }}
          >
            {HUB_CARDS.map((hub) => (
              <Link
                key={hub.title}
                href={hub.href}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 20,
                  padding: '24px 20px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.transform = 'translateY(-3px)'
                  el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    backgroundColor: hub.bgColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 28, color: hub.color }}>
                    {hub.icon}
                  </span>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16, color: '#1a1a2e', marginBottom: 4 }}>{hub.title}</div>
                  <div style={{ fontWeight: 500, fontSize: 13, color: '#6b7280' }}>{hub.subtitle}</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#9ca3af' }}>arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
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
