'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

const FEATURES = [
  { icon: 'school', title: 'Direct Teacher Access', desc: 'Book 1-on-1 sessions with certified teachers anytime, anywhere.' },
  { icon: 'auto_awesome', title: 'Advanced Spark AI', desc: 'Unlimited AI tutoring with personalized learning paths and instant feedback.' },
  { icon: 'storefront', title: 'Exclusive Shop Items', desc: 'Unlock rare avatars, costumes, and power-ups only for Premium members.' },
  { icon: 'block', title: 'Ad-Free Learning', desc: 'Distraction-free environment with zero advertisements.' },
]

const PLANS = [
  {
    name: 'Monthly Explorer',
    price: '$9.99',
    period: '/month',
    billed: null,
    badge: null,
    features: ['All Premium Benefits', 'Cancel Anytime', '1 Student Account'],
    cta: 'Select Monthly',
    highlight: false,
  },
  {
    name: 'Yearly Champion',
    price: '$5.99',
    period: '/month',
    billed: 'Billed at $71.88/yr',
    badge: 'BEST VALUE — SAVE 40%',
    features: ['All Premium Benefits', 'Priority Support', 'Golden Avatar Frame', '2 Friend Passes'],
    cta: 'Select Yearly',
    highlight: true,
  },
]

export default function ExplorerPremiumPage() {
  const router = useRouter()

  return (
    <div
      style={{
        minHeight: '100vh',
        fontFamily: '"Nunito", system-ui, sans-serif',
        background: 'linear-gradient(180deg, #1a0533 0%, #0d1117 100%)',
        paddingBottom: 48,
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 20px',
        }}
      >
        <button
          onClick={() => router.back()}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 36,
            height: 36,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.1)',
            border: 'none',
            cursor: 'pointer',
            color: '#fff',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#fff' }}>arrow_back</span>
        </button>

        <button
          onClick={() => router.push('/explorer/dashboard')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '8px 16px',
            borderRadius: 20,
            backgroundColor: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: '#fff',
            fontWeight: 700,
            fontSize: 12,
            cursor: 'pointer',
            fontFamily: '"Nunito", system-ui, sans-serif',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>rocket_launch</span>
          Start Adventure
        </button>
      </div>

      {/* Hero */}
      <div style={{ textAlign: 'center', padding: '24px 24px 0' }}>
        {/* Rocket mascot area */}
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #7c3aed, #6c63ff)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            boxShadow: '0 0 40px rgba(108,99,255,0.4)',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 48, color: '#fff' }}>rocket_launch</span>
        </div>

        <h1
          style={{
            fontWeight: 800,
            fontSize: 32,
            color: '#fff',
            margin: '0 0 12px',
            lineHeight: 1.2,
          }}
        >
          Unleash Your
          <br />
          <span style={{ color: '#FFD700' }}>Potential</span>
        </h1>

        <p style={{ fontWeight: 500, fontSize: 15, color: '#8892a4', margin: '0 0 24px', lineHeight: 1.6 }}>
          Join thousands of Explorers learning faster and earning more XP with EduWorld Premium.
        </p>

        <button
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '14px 28px',
            borderRadius: 50,
            background: 'linear-gradient(135deg, #FFD700, #f97316)',
            color: '#1a1a2e',
            fontWeight: 800,
            fontSize: 15,
            border: 'none',
            cursor: 'pointer',
            fontFamily: '"Nunito", system-ui, sans-serif',
            boxShadow: '0 4px 20px rgba(255,215,0,0.35)',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 20 }}>rocket</span>
          Get Premium Now
        </button>
      </div>

      {/* Why Go Premium */}
      <div style={{ padding: '36px 20px 0' }}>
        <h2 style={{ fontWeight: 800, fontSize: 20, color: '#fff', margin: '0 0 16px', textAlign: 'center' }}>
          Why Go Premium?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12 }}>
          {FEATURES.map((feat) => (
            <div
              key={feat.title}
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 16,
                padding: '18px 16px',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  backgroundColor: 'rgba(108,99,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 24, color: '#a78bfa' }}>{feat.icon}</span>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, color: '#fff', marginBottom: 4 }}>{feat.title}</div>
                <div style={{ fontWeight: 500, fontSize: 12, color: '#6b7280', lineHeight: 1.5 }}>{feat.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div style={{ padding: '32px 20px 0' }}>
        <h2 style={{ fontWeight: 800, fontSize: 20, color: '#fff', margin: '0 0 20px', textAlign: 'center' }}>
          Choose Your Plan
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              style={{
                backgroundColor: plan.highlight ? 'rgba(108,99,255,0.12)' : 'rgba(255,255,255,0.04)',
                border: plan.highlight ? '2px solid rgba(108,99,255,0.5)' : '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20,
                padding: '20px',
                position: 'relative',
              }}
            >
              {plan.badge && (
                <div
                  style={{
                    position: 'absolute',
                    top: -12,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#6c63ff',
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: 10,
                    padding: '4px 12px',
                    borderRadius: 20,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <div style={{ marginBottom: 16 }}>
                <div style={{ fontWeight: 600, fontSize: 13, color: '#8892a4', marginBottom: 4 }}>{plan.name}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                  <span style={{ fontWeight: 800, fontSize: 32, color: '#fff' }}>{plan.price}</span>
                  <span style={{ fontWeight: 500, fontSize: 14, color: '#6b7280' }}>{plan.period}</span>
                </div>
                {plan.billed && (
                  <div style={{ fontWeight: 500, fontSize: 12, color: '#6b7280', marginTop: 2 }}>{plan.billed}</div>
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
                {plan.features.map((feat) => (
                  <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: '50%',
                        backgroundColor: '#22c55e',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 12, color: '#fff' }}>check</span>
                    </div>
                    <span style={{ fontWeight: 600, fontSize: 13, color: '#c8cdd8' }}>{feat}</span>
                  </div>
                ))}
              </div>

              <button
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: 50,
                  backgroundColor: plan.highlight ? '#6c63ff' : 'transparent',
                  border: plan.highlight ? 'none' : '1px solid rgba(255,255,255,0.2)',
                  color: plan.highlight ? '#fff' : '#c8cdd8',
                  fontWeight: 800,
                  fontSize: 14,
                  cursor: 'pointer',
                  fontFamily: '"Nunito", system-ui, sans-serif',
                  boxShadow: plan.highlight ? '0 4px 14px rgba(108,99,255,0.35)' : 'none',
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer note */}
      <p style={{ textAlign: 'center', fontWeight: 500, fontSize: 12, color: '#4b5563', marginTop: 24, padding: '0 20px' }}>
        Secure payment via Stripe · Cancel anytime · No hidden fees
      </p>

      {/* Bottom nav */}
      <nav
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#1a1a2e',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          justifyContent: 'space-around',
          padding: '8px 0 12px',
          zIndex: 50,
        }}
        className="flex md:hidden"
      >
        {[
          { icon: 'home', label: 'Home', href: '/explorer/dashboard' },
          { icon: 'workspace_premium', label: 'Exams', href: '/explorer/daily-quest' },
          { icon: 'shopping_bag', label: 'Shop', href: '/explorer/shop' },
          { icon: 'person', label: 'Profile', href: '/explorer/profile' },
        ].map((link) => (
          <Link
            key={link.label}
            href={link.href}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              color: '#6b7280',
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
