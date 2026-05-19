'use client'
import { useState } from 'react'
import Link from 'next/link'

const SIDEBAR_LINKS = [
  { icon: 'dashboard', label: 'Dashboard', href: '/achiever/dashboard', active: true },
  { icon: 'analytics', label: 'Exam Tracker', href: '/achiever/exam-tracker' },
  { icon: 'storm', label: 'AI Lab', href: '/achiever/ai-study-partner' },
  { icon: 'shopping_cart', label: 'Shop', href: '/achiever/shop' },
  { icon: 'group', label: 'Community', href: '/achiever/leaderboard' },
]

const TOPICS = [
  { subject: 'Calculus AB', score: 92, color: '#22C55E', bar: '#22C55E' },
  { subject: 'Physics C', score: 68, color: '#F59E0B', bar: '#F59E0B' },
  { subject: 'Chemistry', score: 85, color: '#06B6D4', bar: '#06B6D4' },
]

function Sidebar({ active }: { active: string }) {
  return (
    <aside style={{
      width: '260px',
      minWidth: '260px',
      background: '#0A0E1A',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      display: 'flex',
      flexDirection: 'column',
      borderRight: '1px solid rgba(255,255,255,0.06)',
      zIndex: 40,
      fontFamily: '"Inter", system-ui, sans-serif',
    }}>
      {/* Brand */}
      <div style={{ padding: '24px 20px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            background: 'linear-gradient(135deg, #7c3aed, #06B6D4)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
            fontWeight: 800,
            color: '#FFFFFF',
            fontSize: '16px',
          }}>A</div>
          <div>
            <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '15px', margin: 0, fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>Achievers</p>
            <p style={{ color: '#94A3B8', fontSize: '11px', margin: 0 }}>Study Smarter</p>
          </div>
        </div>
      </div>

      {/* AI Session CTA */}
      <div style={{ padding: '0 16px 20px' }}>
        <Link href="/achiever/ai-study-partner" style={{ textDecoration: 'none' }}>
          <button style={{
            width: '100%',
            background: 'linear-gradient(135deg, #7c3aed, #06B6D4)',
            border: 'none',
            borderRadius: '10px',
            padding: '10px 14px',
            color: '#FFFFFF',
            fontSize: '13px',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
            fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>storm</span>
            Start AI Session
          </button>
        </Link>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '0 12px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {SIDEBAR_LINKS.map(link => (
          <Link key={link.href} href={link.href} style={{ textDecoration: 'none' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '10px',
              background: link.href === active ? 'rgba(6, 182, 212, 0.12)' : 'transparent',
              cursor: 'pointer',
            }}>
              <span className="material-symbols-outlined" style={{
                color: link.href === active ? '#06B6D4' : '#94A3B8',
                fontSize: '20px',
              }}>{link.icon}</span>
              <span style={{
                color: link.href === active ? '#06B6D4' : '#94A3B8',
                fontSize: '14px',
                fontWeight: link.href === active ? 600 : 400,
              }}>{link.label}</span>
            </div>
          </Link>
        ))}
      </nav>

      {/* Bottom links */}
      <div style={{ padding: '12px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        {[
          { icon: 'settings', label: 'Settings', href: '/settings' },
          { icon: 'help', label: 'Help', href: '#' },
        ].map(link => (
          <Link key={link.href} href={link.href} style={{ textDecoration: 'none' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '9px 12px',
              borderRadius: '10px',
              cursor: 'pointer',
            }}>
              <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '20px' }}>{link.icon}</span>
              <span style={{ color: '#94A3B8', fontSize: '14px' }}>{link.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  )
}

function TopBar() {
  return (
    <div style={{
      height: '60px',
      background: '#0D1117',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 28px',
      position: 'sticky',
      top: 0,
      zIndex: 30,
    }}>
      <div>
        <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '18px', margin: 0, fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>Welcome back, Alex</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px' }}>
          <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '22px' }}>notifications</span>
        </button>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px' }}>
          <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '22px' }}>bolt</span>
        </button>
        <div style={{
          width: '36px',
          height: '36px',
          background: 'linear-gradient(135deg, #7c3aed, #06B6D4)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          color: '#FFFFFF',
          fontSize: '14px',
          cursor: 'pointer',
          fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
        }}>A</div>
      </div>
    </div>
  )
}

function MobileBottomNav() {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#0A0E1A',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      display: 'flex',
      zIndex: 50,
      padding: '8px 0 12px',
    }}>
      {[
        { icon: 'dashboard', label: 'Home', href: '/achiever/dashboard', active: true },
        { icon: 'analytics', label: 'Exams', href: '/achiever/exam-tracker' },
        { icon: 'storm', label: 'AI', href: '/achiever/ai-study-partner' },
        { icon: 'group', label: 'Community', href: '/achiever/leaderboard' },
      ].map(item => (
        <Link key={item.href} href={item.href} style={{ flex: 1, textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
          <span className="material-symbols-outlined" style={{ color: item.active ? '#06B6D4' : '#94A3B8', fontSize: '22px' }}>{item.icon}</span>
          <span style={{ color: item.active ? '#06B6D4' : '#94A3B8', fontSize: '10px', fontWeight: item.active ? 600 : 400 }}>{item.label}</span>
        </Link>
      ))}
    </div>
  )
}

export default function AchieverDashboardPage() {
  return (
    <div style={{ background: '#0D1117', minHeight: '100vh', fontFamily: '"Inter", system-ui, sans-serif' }}>
      {/* Sidebar — desktop only */}
      <div style={{ display: 'none' }} className="sidebar-desktop">
        <Sidebar active="/achiever/dashboard" />
      </div>
      <style>{`
        @media (min-width: 1024px) {
          .sidebar-desktop { display: block !important; }
          .main-content { margin-left: 260px !important; }
          .mobile-nav { display: none !important; }
        }
      `}</style>

      {/* Main */}
      <div className="main-content" style={{ marginLeft: 0 }}>
        <TopBar />
        <div style={{ padding: '28px', maxWidth: '960px' }}>
          {/* AI Banner */}
          <div style={{
            background: 'rgba(6, 182, 212, 0.06)',
            border: '1px solid rgba(6, 182, 212, 0.2)',
            borderRadius: '12px',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '24px',
          }}>
            <span className="material-symbols-outlined" style={{ color: '#06B6D4', fontSize: '18px' }}>storm</span>
            <p style={{ color: '#CBD5E1', fontSize: '14px', margin: 0 }}>
              Your AI readiness score is trending up <strong style={{ color: '#FFFFFF' }}>4%</strong> this week.
            </p>
          </div>

          {/* Top 2 cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            {/* Next Milestone */}
            <div style={{
              background: '#161D2F',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '20px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="material-symbols-outlined" style={{ color: '#06B6D4', fontSize: '18px' }}>timer</span>
                <p style={{ color: '#94A3B8', fontSize: '12px', fontWeight: 600, margin: 0 }}>NEXT MILESTONE</p>
              </div>
              <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: '0 0 4px', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>Advanced Calculus</p>
              <p style={{ color: '#94A3B8', fontSize: '13px', margin: '0 0 14px' }}>14 days left</p>
              <Link href="/achiever/exam-tracker" style={{ textDecoration: 'none' }}>
                <button style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: 0,
                }}>
                  <span style={{ color: '#06B6D4', fontSize: '13px', fontWeight: 600 }}>View Plan</span>
                  <span className="material-symbols-outlined" style={{ color: '#06B6D4', fontSize: '16px' }}>arrow_forward</span>
                </button>
              </Link>
            </div>

            {/* Daily Energy Goal */}
            <div style={{
              background: '#161D2F',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '20px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="material-symbols-outlined" style={{ color: '#F59E0B', fontSize: '18px' }}>bolt</span>
                <p style={{ color: '#94A3B8', fontSize: '12px', fontWeight: 600, margin: 0 }}>DAILY ENERGY GOAL</p>
              </div>
              <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '16px', margin: '0 0 8px', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>850 / 1000 XP</p>
              <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '100px', overflow: 'hidden', marginBottom: '14px' }}>
                <div style={{ height: '100%', width: '85%', background: 'linear-gradient(90deg, #F59E0B, #EF4444)', borderRadius: '100px' }} />
              </div>
              <button style={{
                background: '#06B6D4',
                border: 'none',
                borderRadius: '8px',
                padding: '7px 14px',
                color: '#FFFFFF',
                fontSize: '12px',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
              }}>
                Claim Bonus
              </button>
            </div>
          </div>

          {/* Topic Mastery + Priority Exam */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {/* Topic Mastery */}
            <div style={{
              background: '#161D2F',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '20px',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '6px' }}>
                <div>
                  <h2 style={{
                    fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '16px',
                    margin: '0 0 4px',
                  }}>Topic Mastery Readiness</h2>
                  <p style={{ color: '#94A3B8', fontSize: '12px', margin: 0 }}>AI-driven confidence scores based on recent practice</p>
                </div>
                <Link href="/achiever/analytics" style={{ textDecoration: 'none' }}>
                  <span style={{ color: '#06B6D4', fontSize: '12px', fontWeight: 600, whiteSpace: 'nowrap' }}>View Details</span>
                </Link>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
                {TOPICS.map(t => (
                  <div key={t.subject}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <span style={{ color: '#CBD5E1', fontSize: '14px', fontWeight: 500 }}>{t.subject}</span>
                      <span style={{ color: t.color, fontSize: '14px', fontWeight: 700 }}>{t.score}%</span>
                    </div>
                    <div style={{ height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${t.score}%`, background: t.bar, borderRadius: '100px', transition: 'width 0.5s ease' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Priority Exam */}
            <div style={{
              background: 'linear-gradient(135deg, #1E0A4F 0%, #0F1A3E 60%, #0D1117 100%)',
              border: '1px solid rgba(124, 58, 237, 0.3)',
              borderRadius: '16px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined" style={{ color: '#A78BFA', fontSize: '20px' }}>functions</span>
                <span style={{ color: '#A78BFA', fontSize: '13px', fontWeight: 600 }}>PRIORITY EXAM</span>
              </div>
              <div>
                <p style={{
                  fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '20px',
                  margin: '0 0 6px',
                }}>Advanced Calculus</p>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  borderRadius: '100px',
                  padding: '4px 10px',
                }}>
                  <span className="material-symbols-outlined" style={{ color: '#F59E0B', fontSize: '14px' }}>timer</span>
                  <span style={{ color: '#F59E0B', fontSize: '12px', fontWeight: 600 }}>14 Days Left</span>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ color: '#94A3B8', fontSize: '13px', lineHeight: 1.5 }}>
                  Limits, Derivatives, Integrals, Applications of Integrals, Series
                </p>
              </div>
              <Link href="/achiever/exam-prep" style={{ textDecoration: 'none' }}>
                <button style={{
                  width: '100%',
                  background: 'rgba(124, 58, 237, 0.3)',
                  border: '1px solid rgba(124, 58, 237, 0.5)',
                  borderRadius: '10px',
                  padding: '10px',
                  color: '#C4B5FD',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                }}>
                  Start Prep Session
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile bottom nav */}
      <div className="mobile-nav">
        <MobileBottomNav />
      </div>
    </div>
  )
}
