'use client'
import Link from 'next/link'

export default function AchieverOnboardingAIPartnerPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0A0F1E',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '"Inter", system-ui, sans-serif',
      padding: '24px',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '640px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '32px',
      }}>
        {/* Hero */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(16, 185, 129, 0.12)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '100px',
            padding: '5px 12px',
            marginBottom: '16px',
          }}>
            <span className="material-symbols-outlined" style={{ color: '#10B981', fontSize: '14px' }}>auto_awesome</span>
            <span style={{ color: '#10B981', fontSize: '12px', fontWeight: 600 }}>EduWorld AI Integration</span>
          </div>
          <h1 style={{
            fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
            fontSize: '48px',
            fontWeight: 700,
            color: '#FFFFFF',
            margin: 0,
            lineHeight: 1.15,
          }}>
            Meet your new<br />study partner.
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '16px', marginTop: '16px', lineHeight: 1.6, maxWidth: '480px' }}>
            Your AI tutor analyzes your performance, adapts to your learning style, and guides you
            through every concept — available 24/7.
          </p>
        </div>

        {/* Feature Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', width: '100%' }}>
          {[
            { icon: 'analytics', title: 'Performance Analysis', desc: 'Real-time insights into strengths, gaps, and exam readiness.', color: '#06B6D4' },
            { icon: 'psychology', title: 'Adaptive Learning', desc: 'Content that adjusts to your pace, level, and learning style.', color: '#10B981' },
          ].map(card => (
            <div key={card.title} style={{
              background: '#161D2F',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '20px',
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                background: `rgba(${card.color === '#06B6D4' ? '6,182,212' : '16,185,129'}, 0.12)`,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '14px',
              }}>
                <span className="material-symbols-outlined" style={{ color: card.color, fontSize: '24px' }}>{card.icon}</span>
              </div>
              <h3 style={{
                fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                color: '#FFFFFF',
                fontSize: '15px',
                fontWeight: 600,
                margin: '0 0 8px',
              }}>{card.title}</h3>
              <p style={{ color: '#94A3B8', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Chat Preview */}
        <div style={{
          width: '100%',
          background: '#161D2F',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          overflow: 'hidden',
        }}>
          {/* Chat header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 18px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            background: 'rgba(255,255,255,0.02)',
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              background: 'rgba(16, 185, 129, 0.15)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span className="material-symbols-outlined" style={{ color: '#10B981', fontSize: '16px' }}>auto_awesome</span>
            </div>
            <div>
              <p style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '14px', margin: 0 }}>
                <span style={{ color: '#F59E0B' }}>✦</span> Achiever AI
              </p>
            </div>
            <div style={{
              marginLeft: 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}>
              <div style={{ width: '7px', height: '7px', background: '#22C55E', borderRadius: '50%' }} />
              <span style={{ color: '#22C55E', fontSize: '12px', fontWeight: 500 }}>Online</span>
            </div>
          </div>

          {/* Chat body */}
          <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{
              alignSelf: 'flex-start',
              background: '#0F172A',
              borderLeft: '3px solid #10B981',
              borderRadius: '0 12px 12px 12px',
              padding: '12px 14px',
              maxWidth: '80%',
            }}>
              <p style={{ color: '#CBD5E1', fontSize: '14px', margin: '0 0 10px', lineHeight: 1.5 }}>
                In an isothermal expansion, entropy increases as the gas expands into a larger volume.
              </p>
              <div style={{
                background: '#0D1117',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                borderRadius: '8px',
                padding: '10px 12px',
                fontFamily: '"JetBrains Mono", "Courier New", monospace',
                fontSize: '13px',
                color: '#06B6D4',
              }}>
                ΔS = nR ln(V₂/V₁)
              </div>
              <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                {['Explain terms', 'Show example'].map(t => (
                  <button key={t} style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    padding: '4px 10px',
                    color: '#94A3B8',
                    fontSize: '12px',
                    cursor: 'pointer',
                  }}>{t}</button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', width: '100%' }}>
          <Link href="/achiever/dashboard" style={{ width: '100%', textDecoration: 'none' }}>
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
              fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
            }}>
              Go to Dashboard
            </button>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span className="material-symbols-outlined" style={{ color: '#22C55E', fontSize: '16px' }}>verified</span>
            <span style={{ color: '#94A3B8', fontSize: '13px' }}>Curriculum Aligned · Updated 2025</span>
          </div>
        </div>

        <p style={{ color: '#1E2A40', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em' }}>EWD-031</p>
      </div>
    </div>
  )
}
