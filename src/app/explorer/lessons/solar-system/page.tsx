'use client'

import { useRouter } from 'next/navigation'

export default function ExplorerSolarSystemPage() {
  const router = useRouter()

  return (
    <div
      style={{
        minHeight: '100vh',
        fontFamily: '"Nunito", system-ui, sans-serif',
        backgroundColor: '#ffffff',
        paddingBottom: 80,
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 20px',
          borderBottom: '1px solid #e5e7eb',
          position: 'sticky',
          top: 0,
          backgroundColor: '#fff',
          zIndex: 10,
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
            backgroundColor: '#f3f4f6',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#374151' }}>close</span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#f97316' }}>local_fire_department</span>
          <span className="material-symbols-outlined" style={{ fontSize: 20, color: '#facc15' }}>star</span>
        </div>
      </div>

      {/* Subject label */}
      <div style={{ padding: '8px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#6b7280', fontSize: 12, fontWeight: 600 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 14 }}>explore</span>
          Science Explorer
        </div>
      </div>

      {/* Hero image */}
      <div
        style={{
          margin: '16px 20px',
          borderRadius: 16,
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
          height: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Simulated solar system illustration */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '0 24px' }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', backgroundColor: '#FDB813', boxShadow: '0 0 30px rgba(253,184,19,0.6)' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#c8a97e' }} />
          <div style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: '#4a9eff' }} />
          <div style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#e66b4a' }} />
          <div style={{ width: 22, height: 22, borderRadius: '50%', backgroundColor: '#d4a76a', boxShadow: '0 0 10px rgba(212,167,106,0.3)' }} />
          <div style={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: '#e8c88a', boxShadow: '0 0 8px rgba(232,200,138,0.3)' }} />
        </div>
        {/* Stars */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: i % 4 === 0 ? 2 : 1,
              height: i % 4 === 0 ? 2 : 1,
              borderRadius: '50%',
              backgroundColor: '#fff',
              opacity: Math.random() * 0.6 + 0.2,
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* Title */}
      <h1 style={{ fontWeight: 800, fontSize: 24, color: '#1a1a2e', margin: '0 20px 16px', lineHeight: 1.3 }}>
        The Solar System
      </h1>

      {/* Content */}
      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Intro */}
        <p style={{ fontWeight: 500, fontSize: 15, color: '#374151', lineHeight: 1.7, margin: 0 }}>
          Our solar system is made up of the Sun, eight planets, dozens of moons, and millions of asteroids, comets, and meteoroids. Each planet orbits the Sun in a unique path determined by gravity.
        </p>

        {/* Did you know callout */}
        <div
          style={{
            backgroundColor: '#EFF6FF',
            border: '1px solid #BFDBFE',
            borderRadius: 14,
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 12,
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 24, color: '#1A73E8', flexShrink: 0, marginTop: 2 }}>public</span>
          <div>
            <div style={{ fontWeight: 800, fontSize: 14, color: '#1e3a5f', marginBottom: 4 }}>Did you know?</div>
            <p style={{ fontWeight: 500, fontSize: 13, color: '#3b5e8c', margin: 0, lineHeight: 1.6 }}>
              Earth is the third planet from the Sun and the only known location in the universe with life!
            </p>
          </div>
        </div>

        {/* Giant Planets section */}
        <div>
          <h2 style={{ fontWeight: 800, fontSize: 18, color: '#1a1a2e', margin: '0 0 12px 0' }}>The Giant Planets</h2>
          <p style={{ fontWeight: 500, fontSize: 14, color: '#6b7280', margin: '0 0 14px 0', lineHeight: 1.6 }}>
            Jupiter and Saturn are the two largest planets in our solar system — enormous gas giants with no solid surface.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div style={{ borderRadius: 14, overflow: 'hidden', backgroundColor: '#f9f9f9', border: '1px solid #e5e7eb' }}>
              <div
                style={{
                  height: 100,
                  background: 'linear-gradient(135deg, #92400e, #d97706)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div style={{ width: 60, height: 60, borderRadius: '50%', backgroundColor: '#d97706', boxShadow: 'inset -8px -4px 0 rgba(0,0,0,0.2)' }} />
              </div>
              <div style={{ padding: '10px', textAlign: 'center', fontWeight: 700, fontSize: 14, color: '#1a1a2e' }}>Jupiter</div>
            </div>
            <div style={{ borderRadius: 14, overflow: 'hidden', backgroundColor: '#f9f9f9', border: '1px solid #e5e7eb' }}>
              <div
                style={{
                  height: 100,
                  background: 'linear-gradient(135deg, #78716c, #d4a76a)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: '#d4a76a', boxShadow: 'inset -6px -3px 0 rgba(0,0,0,0.15)' }} />
                <div
                  style={{
                    position: 'absolute',
                    width: 90,
                    height: 16,
                    border: '3px solid rgba(212,167,106,0.6)',
                    borderRadius: '50%',
                    transform: 'rotateX(70deg)',
                    top: '50%',
                    left: '50%',
                    marginLeft: -45,
                    marginTop: -8,
                  }}
                />
              </div>
              <div style={{ padding: '10px', textAlign: 'center', fontWeight: 700, fontSize: 14, color: '#1a1a2e' }}>Saturn</div>
            </div>
          </div>
        </div>

        {/* AI chat prompt */}
        <div
          style={{
            backgroundColor: '#f9f9ff',
            border: '1px solid #e0e0f0',
            borderRadius: 14,
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 24, color: '#6c63ff' }}>psychology</span>
          <p style={{ fontWeight: 500, fontSize: 13, color: '#6b7280', flex: 1, margin: 0 }}>
            Have a question about the planets? I can help!
          </p>
          <button
            onClick={() => window.location.href = '/explorer/ai-tutor'}
            style={{
              padding: '7px 14px',
              borderRadius: 20,
              backgroundColor: 'transparent',
              border: '1px solid #6c63ff',
              color: '#6c63ff',
              fontWeight: 700,
              fontSize: 12,
              cursor: 'pointer',
              fontFamily: '"Nunito", system-ui, sans-serif',
            }}
          >
            Ask AI
          </button>
        </div>
      </div>

      {/* Finish Lesson CTA */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: '16px 20px', backgroundColor: '#fff', borderTop: '1px solid #e5e7eb', zIndex: 20 }}>
        <button
          onClick={() => window.location.href = '/explorer/achievements'}
          style={{
            width: '100%',
            padding: '14px',
            borderRadius: 50,
            backgroundColor: '#22c55e',
            color: '#fff',
            fontWeight: 800,
            fontSize: 16,
            border: 'none',
            cursor: 'pointer',
            fontFamily: '"Nunito", system-ui, sans-serif',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            boxShadow: '0 4px 14px rgba(34,197,94,0.35)',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 20 }}>task_alt</span>
          Finish Lesson
        </button>
      </div>

      {/* Watermark */}
      <div
        style={{
          position: 'fixed',
          bottom: 84,
          right: 16,
          fontFamily: '"Nunito", system-ui, sans-serif',
          fontSize: 11,
          color: '#9ca3af',
          zIndex: 10,
        }}
      >
        EWD-017
      </div>
    </div>
  )
}
