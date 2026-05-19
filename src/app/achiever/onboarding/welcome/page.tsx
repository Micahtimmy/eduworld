'use client'
import Link from 'next/link'

export default function AchieverOnboardingWelcomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0D1137',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '"Inter", system-ui, sans-serif',
      padding: '24px',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '480px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
      }}>
        {/* Tier Badge */}
        <div style={{
          background: 'rgba(124, 58, 237, 0.15)',
          border: '1px solid rgba(124, 58, 237, 0.4)',
          borderRadius: '100px',
          padding: '6px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          <span style={{ color: '#F59E0B', fontSize: '12px' }}>✦</span>
          <span style={{ color: '#C4B5FD', fontSize: '13px', fontWeight: 600 }}>Tier 1 Invited</span>
        </div>

        {/* Logo + Label */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '56px',
            height: '56px',
            background: 'rgba(6, 182, 212, 0.15)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span className="material-symbols-outlined" style={{ color: '#06B6D4', fontSize: '28px' }}>school</span>
          </div>
          <span style={{ color: '#94A3B8', fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Achievers</span>
        </div>

        {/* Heading */}
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
            fontSize: '32px',
            fontWeight: 700,
            color: '#FFFFFF',
            margin: 0,
            lineHeight: 1.25,
          }}>
            Welcome to the Achiever Tier, Alex.
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '15px', marginTop: '12px', lineHeight: 1.6 }}>
            You&apos;ve been granted access to EduWorld&apos;s elite learning tier. AI-powered tools,
            personalized study plans, and real exam preparation — all in one place.
          </p>
        </div>

        {/* Institution Card */}
        <div style={{
          width: '100%',
          background: '#161D2F',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'rgba(6, 182, 212, 0.12)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <span className="material-symbols-outlined" style={{ color: '#06B6D4', fontSize: '22px' }}>account_balance</span>
          </div>
          <div>
            <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '15px', margin: 0 }}>St. Peter&apos;s Academy</p>
            <p style={{ color: '#94A3B8', fontSize: '13px', margin: '2px 0 0' }}>Verified Educational Institution</p>
          </div>
          <span className="material-symbols-outlined" style={{ color: '#22C55E', fontSize: '20px', marginLeft: 'auto' }}>verified</span>
        </div>

        {/* Course Chips */}
        <div style={{ width: '100%' }}>
          <p style={{ color: '#94A3B8', fontSize: '13px', marginBottom: '10px' }}>Enrolled Courses</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {[
              { icon: 'functions', label: 'AP Calculus', color: '#7C3AED' },
              { icon: 'biotech', label: 'AP Biology', color: '#06B6D4' },
              { icon: 'menu_book', label: 'English Lit', color: '#3B82F6' },
            ].map(chip => (
              <div key={chip.label} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '100px',
                padding: '6px 12px',
              }}>
                <span className="material-symbols-outlined" style={{ color: chip.color, fontSize: '16px' }}>{chip.icon}</span>
                <span style={{ color: '#CBD5E1', fontSize: '13px', fontWeight: 500 }}>{chip.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Activated Banner */}
        <div style={{
          width: '100%',
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(124, 58, 237, 0.12))',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: '12px',
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
          <span style={{ color: '#F59E0B', fontSize: '16px' }}>✦</span>
          <span style={{ color: '#FCD34D', fontWeight: 600, fontSize: '14px' }}>EduWorld AI Activated</span>
          <span style={{ color: '#94A3B8', fontSize: '13px', marginLeft: 'auto' }}>claude-sonnet-4</span>
        </div>

        {/* CTA Button */}
        <Link href="/achiever/onboarding/goals" style={{ width: '100%', textDecoration: 'none' }}>
          <button style={{
            width: '100%',
            background: 'linear-gradient(135deg, #7c3aed, #06B6D4)',
            border: 'none',
            borderRadius: '12px',
            padding: '14px 24px',
            color: '#FFFFFF',
            fontSize: '15px',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
          }}>
            Get Started
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
          </button>
        </Link>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span className="material-symbols-outlined" style={{ color: '#94A3B8', fontSize: '15px' }}>lock</span>
          <p style={{ color: '#64748B', fontSize: '12px', margin: 0 }}>Secure login authenticated via Single Sign-On.</p>
        </div>

        {/* Watermark */}
        <p style={{ color: '#1E2A40', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em' }}>EWD-029</p>
      </div>
    </div>
  )
}
