'use client'

import { useState, KeyboardEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function ExplorerOnboardingNamePage() {
  const [name, setName] = useState('')
  const router = useRouter()

  function handleSubmit() {
    if (!name.trim()) return
    router.push('/explorer/interests')
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSubmit()
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#F0F0EB',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        fontFamily: '"Nunito", system-ui, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blobs */}
      <div style={{ position: 'absolute', top: -40, left: -40, width: 180, height: 180, borderRadius: '50%', backgroundColor: '#6DBF67', opacity: 0.15, zIndex: 0 }} />
      <div style={{ position: 'absolute', top: 60, right: -30, width: 120, height: 120, borderRadius: '50%', backgroundColor: '#6DBF67', opacity: 0.12, zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: -50, left: 80, width: 200, height: 200, borderRadius: '50%', backgroundColor: '#6DBF67', opacity: 0.1, zIndex: 0 }} />
      <div style={{ position: 'absolute', top: 120, left: -20, width: 80, height: 80, borderRadius: '50%', backgroundColor: '#FFD700', opacity: 0.18, zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: 80, right: 40, width: 60, height: 60, borderRadius: '50%', backgroundColor: '#FFD700', opacity: 0.2, zIndex: 0 }} />
      <div style={{ position: 'absolute', top: 40, left: '45%', width: 24, height: 24, borderRadius: '50%', backgroundColor: '#3b82f6', opacity: 0.25, zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: 160, left: 20, width: 16, height: 16, borderRadius: '50%', backgroundColor: '#3b82f6', opacity: 0.3, zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: 40, right: 120, width: 20, height: 20, borderRadius: '50%', backgroundColor: '#3b82f6', opacity: 0.25, zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '50%', right: -20, width: 100, height: 100, borderRadius: '60% 40% 70% 30%', backgroundColor: '#6DBF67', opacity: 0.1, zIndex: 0 }} />

      {/* Card */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          backgroundColor: '#ffffff',
          borderRadius: 24,
          padding: '48px 40px',
          maxWidth: 420,
          width: '100%',
          boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 4px 20px rgba(0,0,0,0.08)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
        }}
      >
        {/* Robot mascot */}
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            backgroundColor: '#E8F5E9',
            border: '3px solid #6DBF67',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: 64, color: '#6DBF67' }}
          >
            smart_toy
          </span>
        </div>

        {/* Heading */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <h1
            style={{
              fontFamily: '"Nunito", system-ui, sans-serif',
              fontWeight: 800,
              fontSize: 32,
              color: '#1a1a2e',
              margin: 0,
            }}
          >
            Hi Explorer!
          </h1>
          <p
            style={{
              fontFamily: '"Nunito", system-ui, sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: '#6b7280',
              margin: 0,
            }}
          >
            What&apos;s your name?
          </p>
        </div>

        {/* Input */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter your name..."
          style={{
            width: '100%',
            padding: '14px 18px',
            border: `2px solid ${name ? '#6DBF67' : '#e0e0e0'}`,
            borderRadius: 12,
            fontFamily: '"Nunito", system-ui, sans-serif',
            fontSize: 16,
            fontWeight: 600,
            color: '#1a1a2e',
            outline: 'none',
            boxSizing: 'border-box',
            transition: 'border-color 0.2s',
            backgroundColor: '#fafafa',
          }}
          onFocus={(e) => { e.target.style.borderColor = '#6DBF67' }}
          onBlur={(e) => { e.target.style.borderColor = name ? '#6DBF67' : '#e0e0e0' }}
        />

        {/* CTA Button */}
        <button
          onClick={handleSubmit}
          disabled={!name.trim()}
          style={{
            width: '100%',
            padding: '14px 24px',
            borderRadius: 50,
            backgroundColor: name.trim() ? '#6DBF67' : '#d1d5db',
            color: '#ffffff',
            fontFamily: '"Nunito", system-ui, sans-serif',
            fontWeight: 800,
            fontSize: 16,
            border: 'none',
            cursor: name.trim() ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            transition: 'background-color 0.2s, transform 0.1s',
            boxShadow: name.trim() ? '0 4px 15px rgba(109,191,103,0.4)' : 'none',
          }}
          onMouseEnter={(e) => { if (name.trim()) (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#5aad55' }}
          onMouseLeave={(e) => { if (name.trim()) (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#6DBF67' }}
        >
          Let&apos;s Go!
          <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_forward</span>
        </button>
      </div>

      {/* Watermark */}
      <div
        style={{
          position: 'fixed',
          bottom: 12,
          right: 16,
          fontFamily: '"Nunito", system-ui, sans-serif',
          fontSize: 11,
          color: '#9ca3af',
          zIndex: 10,
        }}
      >
        EWD-013
      </div>
    </div>
  )
}
