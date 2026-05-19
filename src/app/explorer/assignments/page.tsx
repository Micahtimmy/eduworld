'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const NAV_LINKS = [
  { icon: 'home', label: 'Home', href: '/explorer/dashboard' },
  { icon: 'school', label: 'Lessons', href: '/explorer/lessons', active: true },
  { icon: 'workspace_premium', label: 'Quests', href: '/explorer/daily-quest' },
  { icon: 'shopping_bag', label: 'Shop', href: '/explorer/shop' },
  { icon: 'person', label: 'Profile', href: '/explorer/profile' },
]

const ASSIGNMENTS = [
  {
    icon: 'rocket_launch',
    iconColor: '#2563eb',
    iconBg: '#eff6ff',
    title: 'Solar System Model',
    desc: 'Build a 3D model showing all 8 planets in order from the Sun.',
    subject: 'Science',
    subjectColor: '#0891b2',
    subjectBg: '#ecfeff',
    status: 'pending',
    dueDate: 'Due Friday',
  },
  {
    icon: 'history_edu',
    iconColor: '#16a34a',
    iconBg: '#f0fdf4',
    title: 'History Essay',
    desc: 'Write about the impact of the Industrial Revolution on daily life.',
    subject: 'History',
    subjectColor: '#92400e',
    subjectBg: '#fef3c7',
    status: 'graded',
    score: 95,
    dueDate: 'Submitted',
  },
  {
    icon: 'calculate',
    iconColor: '#7c3aed',
    iconBg: '#f5f3ff',
    title: 'Math Quiz: Fractions',
    desc: 'Complete 20 questions on adding and subtracting fractions.',
    subject: 'Math',
    subjectColor: '#7c3aed',
    subjectBg: '#f5f3ff',
    status: 'submitted',
    dueDate: 'Submitted',
  },
  {
    icon: 'menu_book',
    iconColor: '#9ca3af',
    iconBg: '#f9fafb',
    title: 'Book Report',
    desc: 'Write a 500-word report on your chosen book from the reading list.',
    subject: 'English',
    subjectColor: '#6b7280',
    subjectBg: '#f9fafb',
    status: 'locked',
    dueDate: 'Unlocks Friday',
    lockReason: 'Finish Math Quiz to unlock',
  },
]

const FILTER_TABS = ['Pending', 'Due Today']

export default function ExplorerAssignmentsPage() {
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState('Pending')

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
      <main style={{ flex: 1, padding: '32px', overflowY: 'auto' }}>
        {/* Header banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #6c63ff 0%, #4f46e5 50%, #3b82f6 100%)',
            borderRadius: 20,
            padding: '28px 28px',
            color: '#fff',
            marginBottom: 24,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: -20,
              right: -20,
              width: 120,
              height: 120,
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.08)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: -30,
              right: 60,
              width: 80,
              height: 80,
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.06)',
            }}
          />
          <div style={{ fontSize: 11, fontWeight: 600, opacity: 0.75, marginBottom: 4 }}>Explorer Level 1</div>
          <h1 style={{ fontWeight: 800, fontSize: 26, margin: '0 0 6px 0' }}>Assignment Hub 🚀</h1>
          <p style={{ fontWeight: 500, fontSize: 14, opacity: 0.9, margin: 0 }}>
            Complete your tasks to earn stars and level up!
          </p>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                borderRadius: 12,
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>pending_actions</span>
              <div>
                <div style={{ fontWeight: 800, fontSize: 18 }}>2</div>
                <div style={{ fontWeight: 500, fontSize: 11, opacity: 0.8 }}>Pending</div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                borderRadius: 12,
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>check_circle</span>
              <div>
                <div style={{ fontWeight: 800, fontSize: 18 }}>1</div>
                <div style={{ fontWeight: 500, fontSize: 11, opacity: 0.8 }}>Graded</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              style={{
                padding: '8px 20px',
                borderRadius: 50,
                backgroundColor: activeFilter === tab ? '#6c63ff' : '#fff',
                color: activeFilter === tab ? '#fff' : '#6b7280',
                fontWeight: activeFilter === tab ? 700 : 600,
                fontSize: 13,
                border: activeFilter === tab ? 'none' : '1.5px solid #e5e7eb',
                cursor: 'pointer',
                fontFamily: '"Nunito", system-ui, sans-serif',
                transition: 'all 0.15s',
                display: 'flex',
                alignItems: 'center',
                gap: 5,
              }}
            >
              {tab === 'Pending' && (
                <span className="material-symbols-outlined" style={{ fontSize: 15 }}>schedule</span>
              )}
              {tab === 'Due Today' && (
                <span className="material-symbols-outlined" style={{ fontSize: 15 }}>today</span>
              )}
              {tab}
            </button>
          ))}
        </div>

        {/* Assignment cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {ASSIGNMENTS.map((a) => (
            <div
              key={a.title}
              style={{
                backgroundColor: '#fff',
                borderRadius: 20,
                padding: '18px 20px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                display: 'flex',
                gap: 16,
                alignItems: 'center',
                opacity: a.status === 'locked' ? 0.65 : 1,
                border: a.status === 'graded' ? '1.5px solid #86efac' : '1.5px solid transparent',
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 16,
                  backgroundColor: a.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 28, color: a.iconColor }}>{a.icon}</span>
              </div>

              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontWeight: 700, fontSize: 15, color: '#1a1a2e' }}>{a.title}</span>
                  <span
                    style={{
                      padding: '2px 8px',
                      borderRadius: 20,
                      backgroundColor: a.subjectBg,
                      color: a.subjectColor,
                      fontWeight: 700,
                      fontSize: 11,
                      flexShrink: 0,
                    }}
                  >
                    {a.subject}
                  </span>
                </div>
                <p
                  style={{
                    fontWeight: 500,
                    fontSize: 13,
                    color: '#6b7280',
                    margin: '0 0 6px 0',
                    lineHeight: 1.4,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {a.desc}
                </p>

                {/* Status info */}
                {a.status === 'graded' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 15, color: '#16a34a' }}>check_circle</span>
                    <span style={{ fontWeight: 700, fontSize: 12, color: '#16a34a' }}>Graded</span>
                    <span
                      style={{
                        padding: '2px 8px',
                        borderRadius: 20,
                        backgroundColor: '#dcfce7',
                        color: '#16a34a',
                        fontWeight: 700,
                        fontSize: 12,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 13 }}>star</span>
                      {a.score}
                    </span>
                  </div>
                )}
                {a.status === 'submitted' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 15, color: '#d97706' }}>hourglass_top</span>
                    <span style={{ fontWeight: 700, fontSize: 12, color: '#d97706' }}>Waiting for Grade</span>
                  </div>
                )}
                {a.status === 'locked' && (
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 12, color: '#9ca3af', marginBottom: 1 }}>{a.dueDate}</div>
                    <div style={{ fontWeight: 500, fontSize: 11, color: '#d1d5db' }}>{a.lockReason}</div>
                  </div>
                )}
                {(a.status === 'pending') && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 14, color: '#9ca3af' }}>calendar_today</span>
                    <span style={{ fontWeight: 600, fontSize: 12, color: '#9ca3af' }}>{a.dueDate}</span>
                  </div>
                )}
              </div>

              {/* Action button */}
              <div style={{ flexShrink: 0 }}>
                {a.status === 'pending' && (
                  <button
                    style={{
                      padding: '10px 18px',
                      borderRadius: 50,
                      backgroundColor: '#6c63ff',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: 13,
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: '"Nunito", system-ui, sans-serif',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      boxShadow: '0 2px 8px rgba(108,99,255,0.3)',
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>play_arrow</span>
                    Start
                  </button>
                )}
                {a.status === 'graded' && (
                  <button
                    style={{
                      padding: '10px 18px',
                      borderRadius: 50,
                      backgroundColor: 'transparent',
                      color: '#16a34a',
                      fontWeight: 700,
                      fontSize: 13,
                      border: '1.5px solid #86efac',
                      cursor: 'pointer',
                      fontFamily: '"Nunito", system-ui, sans-serif',
                    }}
                  >
                    View
                  </button>
                )}
                {a.status === 'locked' && (
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      backgroundColor: '#f3f4f6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#9ca3af' }}>lock</span>
                  </div>
                )}
              </div>
            </div>
          ))}
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
