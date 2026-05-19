'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const NAV_LINKS = [
  { icon: 'home', label: 'Home', href: '/explorer/dashboard' },
  { icon: 'school', label: 'Lessons', href: '/explorer/lessons' },
  { icon: 'workspace_premium', label: 'Quests', href: '/explorer/daily-quest', active: true },
  { icon: 'shopping_bag', label: 'Shop', href: '/explorer/shop' },
  { icon: 'person', label: 'Profile', href: '/explorer/profile' },
]

const OPTIONS = [
  { label: 'Earth', colorBg: '#dbeafe', colorAccent: '#2563eb', icon: 'public' },
  { label: 'Mars', colorBg: '#fee2e2', colorAccent: '#dc2626', icon: 'brightness_1' },
  { label: 'Jupiter', colorBg: '#fef9c3', colorAccent: '#ca8a04', icon: 'circle' },
  { label: 'Saturn', colorBg: '#f3e8ff', colorAccent: '#9333ea', icon: 'radio_button_unchecked' },
]

export default function ExplorerDailyQuestPage() {
  const router = useRouter()
  const [selected, setSelected] = useState<string | null>(null)
  const [checked, setChecked] = useState(false)
  const isCorrect = selected === 'Mars'

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
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '40px 32px', maxWidth: 640, margin: '0 auto', width: '100%' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
          <button
            onClick={() => router.push('/explorer/dashboard')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              color: '#6b7280',
              fontFamily: '"Nunito", system-ui, sans-serif',
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>close</span>
            Exit Quest
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span
              style={{
                padding: '4px 12px',
                borderRadius: 20,
                backgroundColor: '#ecfdf5',
                color: '#059669',
                fontWeight: 700,
                fontSize: 13,
              }}
            >
              Science
            </span>
            <span
              style={{
                padding: '4px 12px',
                borderRadius: 20,
                backgroundColor: '#fef3c7',
                color: '#d97706',
                fontWeight: 700,
                fontSize: 13,
              }}
            >
              Planet Quest
            </span>
          </div>
        </div>

        {/* Progress indicators */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 32 }}>
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              style={{
                flex: 1,
                height: 6,
                borderRadius: 3,
                backgroundColor: n === 1 ? '#6c63ff' : '#e5e7eb',
              }}
            />
          ))}
        </div>

        {/* Question meta */}
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontWeight: 600, fontSize: 13, color: '#9ca3af', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>timer</span>
            Question 1 of 5 · 30s
          </div>
          <h1
            style={{
              fontWeight: 800,
              fontSize: 24,
              color: '#1a1a2e',
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            Which planet is known as the Red Planet?
          </h1>
        </div>

        {/* Answer grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 14,
            marginBottom: 24,
            flex: 1,
          }}
        >
          {OPTIONS.map((opt) => {
            const isSelected = selected === opt.label
            return (
              <button
                key={opt.label}
                onClick={() => { if (!checked) setSelected(opt.label) }}
                style={{
                  backgroundColor: checked && opt.label === 'Mars'
                    ? '#dcfce7'
                    : checked && isSelected && opt.label !== 'Mars'
                      ? '#fee2e2'
                      : isSelected
                        ? opt.colorBg
                        : '#fff',
                  border: `2px solid ${
                    checked && opt.label === 'Mars'
                      ? '#16a34a'
                      : checked && isSelected && opt.label !== 'Mars'
                        ? '#dc2626'
                        : isSelected
                          ? opt.colorAccent
                          : '#e5e7eb'
                  }`,
                  borderRadius: 20,
                  padding: '24px 16px',
                  cursor: checked ? 'default' : 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 12,
                  fontFamily: '"Nunito", system-ui, sans-serif',
                  transition: 'all 0.15s',
                  minHeight: 140,
                }}
              >
                {/* Planet illustration placeholder */}
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    backgroundColor: opt.colorBg,
                    border: `3px solid ${opt.colorAccent}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 36, color: opt.colorAccent }}>
                    {opt.icon}
                  </span>
                  {opt.label === 'Saturn' && (
                    <div
                      style={{
                        position: 'absolute',
                        width: '110%',
                        height: 6,
                        backgroundColor: opt.colorAccent,
                        opacity: 0.4,
                        transform: 'rotate(-15deg)',
                      }}
                    />
                  )}
                </div>
                <span style={{ fontWeight: 700, fontSize: 15, color: '#1a1a2e' }}>{opt.label}</span>
                {checked && opt.label === 'Mars' && (
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#16a34a' }}>check_circle</span>
                )}
                {checked && isSelected && opt.label !== 'Mars' && (
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#dc2626' }}>cancel</span>
                )}
              </button>
            )
          })}
        </div>

        {/* Feedback card */}
        {checked && (
          <div
            style={{
              backgroundColor: isCorrect ? '#f0fdf4' : '#fff1f2',
              border: `1px solid ${isCorrect ? '#86efac' : '#fecdd3'}`,
              borderRadius: 16,
              padding: '16px 20px',
              marginBottom: 20,
              display: 'flex',
              gap: 12,
              alignItems: 'flex-start',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 24, color: isCorrect ? '#16a34a' : '#dc2626', flexShrink: 0, marginTop: 2 }}>
              {isCorrect ? 'check_circle' : 'cancel'}
            </span>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, color: '#1a1a2e', marginBottom: 4 }}>
                {isCorrect ? 'Awesome! 🎉' : 'Not quite!'}
              </div>
              <div style={{ fontWeight: 400, fontSize: 13, color: '#374151', lineHeight: 1.5 }}>
                Mars is called the Red Planet because its surface is covered in iron oxide (rust), giving it a distinctive red colour!
              </div>
              {isCorrect && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
                  <span
                    style={{
                      padding: '3px 10px',
                      borderRadius: 20,
                      backgroundColor: '#dcfce7',
                      color: '#16a34a',
                      fontWeight: 700,
                      fontSize: 12,
                    }}
                  >
                    +10 XP
                  </span>
                  <span style={{ fontSize: 12, color: '#6b7280', fontWeight: 600 }}>
                    🔥 Streak +1
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Bottom actions */}
        <div style={{ display: 'flex', gap: 12, paddingBottom: 8 }}>
          <button
            onClick={() => router.push('/explorer/dashboard')}
            style={{
              flex: 1,
              padding: '14px',
              borderRadius: 50,
              backgroundColor: 'transparent',
              border: '2px solid #e5e7eb',
              color: '#6b7280',
              fontWeight: 700,
              fontSize: 15,
              cursor: 'pointer',
              fontFamily: '"Nunito", system-ui, sans-serif',
            }}
          >
            Skip
          </button>
          <button
            onClick={() => {
              if (!checked && selected) setChecked(true)
              else if (checked) router.push('/explorer/dashboard')
            }}
            disabled={!selected && !checked}
            style={{
              flex: 2,
              padding: '14px',
              borderRadius: 50,
              backgroundColor: checked ? '#0891b2' : selected ? '#6c63ff' : '#e5e7eb',
              color: '#fff',
              fontWeight: 800,
              fontSize: 15,
              border: 'none',
              cursor: selected || checked ? 'pointer' : 'not-allowed',
              fontFamily: '"Nunito", system-ui, sans-serif',
              transition: 'background-color 0.2s',
            }}
          >
            {checked ? 'Continue' : 'Check Answer'}
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
