'use client'
import { useState } from 'react'
import Link from 'next/link'

const GOALS = [
  {
    icon: 'military_tech',
    title: 'Academic Excellence',
    desc: 'Master your subjects and achieve top grades across all exams.',
    badge: 'AI Practice Generator',
    color: '#F59E0B',
  },
  {
    icon: 'account_balance',
    title: 'University Prep',
    desc: 'Build your application portfolio, essays, and recommendation pipeline.',
    badge: 'Essay Review Access',
    color: '#06B6D4',
  },
  {
    icon: 'psychology',
    title: 'Skill Building',
    desc: 'Develop critical thinking, problem solving, and analytical abilities.',
    badge: 'Smart Spaced Repetition',
    color: '#10B981',
  },
]

export default function AchieverOnboardingGoalsPage() {
  const [selected, setSelected] = useState(0)

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0A0F2E',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '"Inter", system-ui, sans-serif',
      padding: '24px',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '520px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}>
        {/* Progress */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <p style={{ color: '#94A3B8', fontSize: '13px', fontWeight: 500, margin: 0 }}>Step 2 of 4</p>
          <div style={{ height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '100px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '50%', background: 'linear-gradient(90deg, #7c3aed, #06B6D4)', borderRadius: '100px' }} />
          </div>
        </div>

        {/* Heading */}
        <div>
          <h1 style={{
            fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
            fontSize: '28px',
            fontWeight: 700,
            color: '#FFFFFF',
            margin: '0 0 10px',
          }}>
            What are your academic goals?
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '14px', margin: 0, lineHeight: 1.6 }}>
            Choose your focus and EduWorld AI will personalize your study plans, resources, and difficulty calibration.
          </p>
        </div>

        {/* Goal Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {GOALS.map((goal, i) => (
            <button
              key={goal.title}
              onClick={() => setSelected(i)}
              style={{
                background: selected === i ? 'rgba(6, 182, 212, 0.08)' : '#161D2F',
                border: selected === i ? '2px solid #06B6D4' : '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '18px 20px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                textAlign: 'left',
                cursor: 'pointer',
                width: '100%',
                transition: 'all 0.15s',
              }}
            >
              <div style={{
                width: '44px',
                height: '44px',
                background: `rgba(${i === 0 ? '245,158,11' : i === 1 ? '6,182,212' : '16,185,129'}, 0.12)`,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span className="material-symbols-outlined" style={{ color: goal.color, fontSize: '22px' }}>{goal.icon}</span>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{
                  fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '15px',
                  margin: '0 0 5px',
                }}>{goal.title}</p>
                <p style={{ color: '#94A3B8', fontSize: '13px', margin: '0 0 10px', lineHeight: 1.5 }}>{goal.desc}</p>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  background: 'rgba(6, 182, 212, 0.1)',
                  border: '1px solid rgba(6, 182, 212, 0.2)',
                  borderRadius: '100px',
                  padding: '3px 10px',
                }}>
                  <span className="material-symbols-outlined" style={{ color: '#06B6D4', fontSize: '12px' }}>storm</span>
                  <span style={{ color: '#06B6D4', fontSize: '11px', fontWeight: 600 }}>{goal.badge}</span>
                </div>
              </div>
              <div style={{
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                background: selected === i ? '#06B6D4' : 'rgba(255,255,255,0.1)',
                border: selected === i ? 'none' : '2px solid rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '2px',
              }}>
                {selected === i && (
                  <span className="material-symbols-outlined" style={{ color: '#FFFFFF', fontSize: '14px', fontVariationSettings: '"FILL" 1' }}>check</span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <Link href="/achiever/onboarding/welcome" style={{ flex: 1, textDecoration: 'none' }}>
            <button style={{
              width: '100%',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '12px',
              padding: '13px 20px',
              color: '#94A3B8',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
            }}>
              Back
            </button>
          </Link>
          <Link href="/achiever/onboarding/ai-partner" style={{ flex: 2, textDecoration: 'none' }}>
            <button style={{
              width: '100%',
              background: '#06B6D4',
              border: 'none',
              borderRadius: '12px',
              padding: '13px 20px',
              color: '#FFFFFF',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
            }}>
              Continue
            </button>
          </Link>
        </div>

        <p style={{ color: '#1E2A40', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textAlign: 'center' }}>EWD-030</p>
      </div>
    </div>
  )
}
