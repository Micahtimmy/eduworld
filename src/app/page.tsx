'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const NODES = [
  { top: '20%', left: '15%', size: 4, bg: 'rgba(255,255,255,0.4)', shadow: '0 0 10px 2px rgba(255,255,255,0.2)', delay: '0s' },
  { top: '60%', left: '25%', size: 4, bg: 'rgba(255,255,255,0.4)', shadow: '0 0 10px 2px rgba(255,255,255,0.2)', delay: '-5s' },
  { top: '30%', left: '75%', size: 4, bg: 'rgba(255,255,255,0.4)', shadow: '0 0 10px 2px rgba(255,255,255,0.2)', delay: '-10s' },
  { top: '70%', left: '80%', size: 4, bg: 'rgba(255,255,255,0.4)', shadow: '0 0 10px 2px rgba(255,255,255,0.2)', delay: '-15s' },
  { top: '85%', left: '45%', size: 4, bg: 'rgba(255,255,255,0.4)', shadow: '0 0 10px 2px rgba(255,255,255,0.2)', delay: '-2s' },
  { top: '15%', left: '55%', size: 4, bg: 'rgba(255,255,255,0.4)', shadow: '0 0 10px 2px rgba(255,255,255,0.2)', delay: '-7s' },
  { top: '45%', left: '50%', size: 6, bg: 'rgba(108,248,187,0.6)', shadow: '0 0 15px 3px rgba(108,248,187,0.3)', delay: '-12s' },
]

const CONNECTIONS = [
  { top: '20%', left: '15%', width: '45%', rotate: '20deg', delay: '0s' },
  { top: '45%', left: '50%', width: '30%', rotate: '-30deg', delay: '-3s' },
  { top: '60%', left: '25%', width: '25%', rotate: '15deg', delay: '-6s' },
  { top: '45%', left: '50%', width: '40%', rotate: '45deg', delay: '-9s' },
]

export default function WelcomePage() {
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      nodeRefs.current.forEach((node, i) => {
        if (!node) return
        const speed = (i + 1) * 0.5
        const moveX = (x - 0.5) * speed * 20
        const moveY = (y - 0.5) * speed * 20
        node.style.transform = `translate(${moveX}px, ${moveY}px)`
      })
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <div
      className="relative h-screen w-screen overflow-hidden flex flex-col items-center justify-center"
      style={{ backgroundColor: '#0F2340' }}
    >
      {/* ── Network animation layer ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ opacity: 0.6 }}>
        {/* SVG curved paths */}
        <svg className="absolute w-full h-full" style={{ opacity: 0.3 }} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-100,100 Q150,300 400,-50 T900,400"
            stroke="#6cf8bb"
            strokeDasharray="4 4"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M0,400 Q200,100 500,200 T1000,0"
            stroke="#d5e3ff"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          />
        </svg>

        {/* Connection lines */}
        {CONNECTIONS.map((c, i) => (
          <div
            key={i}
            className="absolute h-px"
            style={{
              top: c.top,
              left: c.left,
              width: c.width,
              background: 'linear-gradient(to right, rgba(255,255,255,0.1), transparent)',
              transform: `rotate(${c.rotate})`,
              transformOrigin: 'left center',
              animation: `pulseConnection 10s infinite`,
              animationDelay: c.delay,
            }}
          />
        ))}

        {/* Floating nodes */}
        {NODES.map((node, i) => (
          <div
            key={i}
            ref={el => { nodeRefs.current[i] = el }}
            className="absolute rounded-full"
            style={{
              top: node.top,
              left: node.left,
              width: node.size,
              height: node.size,
              backgroundColor: node.bg,
              boxShadow: node.shadow,
              animation: `floatNode 20s ease-in-out infinite alternate`,
              animationDelay: node.delay,
            }}
          />
        ))}
      </div>

      {/* ── Main content ── */}
      <div
        className="relative z-10 flex flex-col items-center text-center"
        style={{ gap: '32px', maxWidth: '896px', padding: '0 24px' }}
      >
        {/* Branding */}
        <div className="flex flex-col items-center" style={{ gap: '8px' }}>
          <h1
            style={{
              fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
              fontSize: '48px',
              lineHeight: '56px',
              letterSpacing: '-0.02em',
              fontWeight: 700,
              color: '#ffffff',
              margin: 0,
            }}
          >
            EduWorld
          </h1>
          <p
            style={{
              fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
              fontSize: '24px',
              lineHeight: '32px',
              fontWeight: 600,
              color: 'rgba(166, 200, 255, 0.9)',
              margin: 0,
            }}
          >
            The world learns here.
          </p>
        </div>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center"
          style={{ gap: '16px', paddingTop: '24px' }}
        >
          <Link
            href="/login"
            className="flex items-center justify-center transition-all"
            style={{
              padding: '8px 32px',
              borderRadius: '8px',
              border: '2px solid rgba(255,255,255,0.30)',
              background: 'transparent',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              color: '#ffffff',
              fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              lineHeight: '20px',
              textDecoration: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.10)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="flex items-center justify-center transition-all"
            style={{
              padding: '8px 32px',
              borderRadius: '8px',
              background: '#ffffff',
              color: '#0F2340',
              fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              lineHeight: '20px',
              textDecoration: 'none',
              boxShadow: '0 8px 16px -4px rgba(30,87,153,0.10), 0 4px 8px -4px rgba(30,87,153,0.06)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#f3f3f9' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#ffffff' }}
          >
            Get started
          </Link>
        </div>
      </div>

      {/* ── Powered by badge ── */}
      <div
        className="absolute pointer-events-none z-10"
        style={{
          bottom: '48px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          color: 'rgba(108,248,187,0.8)',
          opacity: 0.8,
          fontFamily: '"Inter", system-ui, sans-serif',
          fontSize: '14px',
          lineHeight: '20px',
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>auto_awesome</span>
        <span>Powered by Global Intelligence</span>
      </div>

      {/* ── EWD-001 watermark ── */}
      <div
        className="fixed pointer-events-none select-none"
        aria-hidden="true"
        style={{
          bottom: '16px',
          right: '16px',
          zIndex: 50,
          fontFamily: '"Inter", system-ui, sans-serif',
          fontSize: '14px',
          color: 'rgba(166,200,255,0.3)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}
      >
        EWD-001
      </div>

      <style>{`
        @keyframes floatNode {
          0%   { translate: 0 0; }
          100% { translate: calc(10vw - 5vw) calc(10vh - 5vh); }
        }
        @keyframes pulseConnection {
          0%, 100% { opacity: 0; }
          50%       { opacity: 0.2; }
        }
      `}</style>
    </div>
  )
}
