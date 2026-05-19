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

const MILESTONES = [
  {
    icon: 'science',
    title: 'Science Mastery',
    progress: 80,
    level: 4,
    color: '#7c3aed',
    bg: '#f5f3ff',
  },
  {
    icon: 'calculate',
    title: 'Math Wizardry',
    progress: 45,
    level: 3,
    color: '#6c63ff',
    bg: '#eef2ff',
  },
]

const BADGES = [
  {
    icon: 'science',
    iconColor: '#0891b2',
    iconBg: '#ecfeff',
    title: 'Science Cadet',
    desc: 'Completed 10 Labs',
    unlocked: true,
  },
  {
    icon: 'menu_book',
    iconColor: '#d97706',
    iconBg: '#fffbeb',
    title: 'Word Wizard',
    desc: 'Read 50 Books',
    unlocked: true,
  },
  {
    icon: 'groups',
    iconColor: '#16a34a',
    iconBg: '#f0fdf4',
    title: 'Team Player',
    desc: 'Helped 5 Peers',
    unlocked: true,
  },
  {
    icon: 'wb_sunny',
    iconColor: '#f59e0b',
    iconBg: '#fffbeb',
    title: 'Early Bird',
    desc: '30 Days Streak',
    unlocked: true,
  },
  {
    icon: 'lock',
    iconColor: '#9ca3af',
    iconBg: '#f3f4f6',
    title: '???',
    desc: 'Keep Exploring!',
    unlocked: false,
  },
]

export default function ExplorerAchievementsPage() {
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
          background: 'linear-gradient(180deg, #4A148C 0%, #6c63ff 60%, #3b82f6 100%)',
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
            E
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: '#fff' }}>Welcome, Explorer!</div>
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
      <main style={{ flex: 1, padding: '40px 32px', overflowY: 'auto' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
          <div>
            <span
              style={{
                padding: '4px 12px',
                borderRadius: 20,
                backgroundColor: '#ede9fe',
                color: '#7c3aed',
                fontWeight: 700,
                fontSize: 12,
                marginRight: 8,
              }}
            >
              Level 12 Wizard
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 24, color: '#f97316' }}>local_fire_department</span>
            <span className="material-symbols-outlined" style={{ fontSize: 24, color: '#eab308' }}>auto_awesome</span>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                backgroundColor: '#ede9fe',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: 15,
                color: '#7c3aed',
              }}
            >
              E
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1
          style={{
            fontWeight: 800,
            fontSize: 28,
            color: '#1a1a2e',
            margin: '0 0 4px 0',
          }}
        >
          Your Achievement Gallery
        </h1>
        <p style={{ fontWeight: 500, fontSize: 14, color: '#6b7280', marginBottom: 28 }}>
          Your curiosity and hard work are paying off!
        </p>

        {/* Mastery Milestones card */}
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: 20,
            padding: '24px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            marginBottom: 20,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#f59e0b' }}>emoji_events</span>
              <span style={{ fontWeight: 800, fontSize: 17, color: '#1a1a2e' }}>Mastery Milestones</span>
            </div>
            <button
              style={{
                background: 'none',
                border: 'none',
                color: '#6c63ff',
                fontWeight: 700,
                fontSize: 13,
                cursor: 'pointer',
                fontFamily: '"Nunito", system-ui, sans-serif',
              }}
            >
              View All
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {MILESTONES.map((m) => (
              <div key={m.title}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: m.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 24, color: m.color }}>{m.icon}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 700, fontSize: 14, color: '#1a1a2e' }}>{m.title}</span>
                      <span style={{ fontWeight: 600, fontSize: 13, color: '#9ca3af' }}>Lvl {m.level}</span>
                    </div>
                    <span style={{ fontWeight: 500, fontSize: 12, color: '#6b7280' }}>{m.progress}% to next rank</span>
                  </div>
                </div>
                <div style={{ height: 8, backgroundColor: '#f3f4f6', borderRadius: 4, overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${m.progress}%`,
                      height: '100%',
                      backgroundColor: m.color,
                      borderRadius: 4,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Earned Badges */}
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: 20,
            padding: '24px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#f59e0b' }}>military_tech</span>
            <span style={{ fontWeight: 800, fontSize: 17, color: '#1a1a2e' }}>Earned Badges</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
              gap: 12,
            }}
          >
            {BADGES.map((badge) => (
              <div
                key={badge.title}
                style={{
                  backgroundColor: badge.unlocked ? '#fafafa' : '#f9fafb',
                  borderRadius: 16,
                  padding: '16px 12px',
                  textAlign: 'center',
                  opacity: badge.unlocked ? 1 : 0.55,
                  border: badge.unlocked ? '1px solid #e5e7eb' : '1.5px dashed #d1d5db',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    backgroundColor: badge.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 26, color: badge.iconColor }}>{badge.icon}</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: 12, color: '#1a1a2e', lineHeight: 1.3 }}>{badge.title}</div>
                <div style={{ fontWeight: 500, fontSize: 11, color: '#6b7280', lineHeight: 1.3 }}>{badge.desc}</div>
              </div>
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
