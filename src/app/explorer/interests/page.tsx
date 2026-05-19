'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const CAREERS = [
  { icon: 'rocket_launch', label: 'Astronaut', desc: 'Explore the cosmos' },
  { icon: 'medical_services', label: 'Doctor', desc: 'Heal and care for others' },
  { icon: 'palette', label: 'Artist', desc: 'Create beautiful things' },
  { icon: 'code', label: 'Developer', desc: 'Build digital worlds' },
  { icon: 'restaurant', label: 'Chef', desc: 'Cook amazing food' },
  { icon: 'science', label: 'Scientist', desc: 'Discover new things' },
  { icon: 'music_note', label: 'Musician', desc: 'Make music magic' },
  { icon: 'sports_soccer', label: 'Athlete', desc: 'Play and compete' },
  { icon: 'architecture', label: 'Architect', desc: 'Design great buildings' },
  { icon: 'biotech', label: 'Engineer', desc: 'Solve big problems' },
]

const NAV_LINKS = [
  { icon: 'home', label: 'Home', href: '/explorer/dashboard' },
  { icon: 'school', label: 'Lessons', href: '/explorer/lessons' },
  { icon: 'workspace_premium', label: 'Quests', href: '/explorer/daily-quest' },
  { icon: 'shopping_bag', label: 'Shop', href: '/explorer/shop' },
  { icon: 'person', label: 'Profile', href: '/explorer/profile' },
]

export default function ExplorerInterestsPage() {
  const router = useRouter()
  const [selected, setSelected] = useState<string[]>(['Astronaut', 'Doctor'])
  const [search, setSearch] = useState('')

  function toggleCareer(label: string) {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    )
  }

  const filtered = CAREERS.filter(
    (c) =>
      c.label.toLowerCase().includes(search.toLowerCase()) ||
      c.desc.toLowerCase().includes(search.toLowerCase())
  )

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
          gap: 0,
          flexShrink: 0,
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
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
                color: 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: 14,
                transition: 'background-color 0.15s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.18)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent' }}
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
          }}
          onClick={() => router.push('/explorer/dashboard')}
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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ maxWidth: 720, width: '100%' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 12 }}>
            <h1
              style={{
                fontWeight: 800,
                fontSize: 24,
                color: '#1a1a2e',
                margin: '0 0 8px 0',
              }}
            >
              What do you want to be when you grow up?
            </h1>
            <p style={{ fontWeight: 400, fontSize: 15, color: '#6b7280', margin: 0 }}>
              Pick your dream careers and we&apos;ll build your learning adventure!
            </p>
          </div>

          {/* Search */}
          <div style={{ position: 'relative', marginBottom: 28, marginTop: 20 }}>
            <span
              className="material-symbols-outlined"
              style={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: 20,
                color: '#9ca3af',
              }}
            >
              search
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search interests..."
              style={{
                width: '100%',
                padding: '12px 16px 12px 46px',
                borderRadius: 50,
                border: '1.5px solid #e0e0e0',
                fontFamily: '"Nunito", system-ui, sans-serif',
                fontSize: 14,
                fontWeight: 500,
                color: '#1a1a2e',
                outline: 'none',
                backgroundColor: '#fff',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Career cards grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 16,
              marginBottom: 32,
            }}
          >
            {filtered.map((career) => {
              const isSelected = selected.includes(career.label)
              return (
                <button
                  key={career.label}
                  onClick={() => toggleCareer(career.label)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 10,
                    padding: '24px 16px',
                    borderRadius: 20,
                    backgroundColor: isSelected ? '#f0ebff' : '#ffffff',
                    border: isSelected ? '2px solid #6c63ff' : '2px solid transparent',
                    cursor: 'pointer',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                    transition: 'all 0.2s',
                    fontFamily: '"Nunito", system-ui, sans-serif',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(108,99,255,0.15)'
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 40, color: isSelected ? '#6c63ff' : '#7c3aed' }}
                  >
                    {career.icon}
                  </span>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: '#1a1a2e', marginBottom: 2 }}>{career.label}</div>
                    <div style={{ fontWeight: 400, fontSize: 12, color: '#6b7280' }}>{career.desc}</div>
                  </div>
                  {isSelected && (
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: '50%',
                        backgroundColor: '#6c63ff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 14, color: '#fff' }}>check</span>
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Continue button */}
          <button
            onClick={() => router.push('/explorer/dashboard')}
            style={{
              width: '100%',
              padding: '16px 24px',
              borderRadius: 50,
              backgroundColor: '#6c63ff',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: 16,
              border: 'none',
              cursor: 'pointer',
              fontFamily: '"Nunito", system-ui, sans-serif',
              boxShadow: '0 4px 20px rgba(108,99,255,0.35)',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#5b52e8' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#6c63ff' }}
          >
            Continue Adventure →
          </button>
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
          display: 'flex',
          justifyContent: 'space-around',
          padding: '8px 0 12px',
          zIndex: 50,
        }}
        className="flex md:hidden"
      >
        {NAV_LINKS.slice(0, 5).map((link) => (
          <Link
            key={link.label}
            href={link.href}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              color: '#9ca3af',
              textDecoration: 'none',
              fontSize: 10,
              fontWeight: 600,
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
