'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const NEW_ABILITIES = [
  { icon: '🔓', text: 'Advanced Science lessons' },
  { icon: '🔓', text: 'Challenge quizzes' },
  { icon: '🔓', text: 'New avatar frame' },
]

const PARTICLES = [
  { top: '5%', left: '8%', color: '#1e5799', size: 8, delay: '0s', dur: '3s' },
  { top: '10%', left: '88%', color: '#f59e0b', size: 10, delay: '0.3s', dur: '2.7s' },
  { top: '20%', left: '15%', color: '#10b981', size: 6, delay: '0.6s', dur: '3.2s' },
  { top: '15%', left: '70%', color: '#a855f7', size: 9, delay: '0.1s', dur: '2.9s' },
  { top: '3%', left: '50%', color: '#f43f5e', size: 7, delay: '0.5s', dur: '3.1s' },
  { top: '30%', left: '92%', color: '#f59e0b', size: 11, delay: '0.2s', dur: '2.5s' },
  { top: '8%', left: '35%', color: '#10b981', size: 8, delay: '0.8s', dur: '3.4s' },
  { top: '22%', left: '55%', color: '#1e5799', size: 12, delay: '0.4s', dur: '2.8s' },
  { top: '35%', left: '5%', color: '#a855f7', size: 7, delay: '0.7s', dur: '3s' },
  { top: '12%', left: '78%', color: '#f43f5e', size: 9, delay: '0.9s', dur: '2.6s' },
  { top: '40%', left: '80%', color: '#f59e0b', size: 6, delay: '0.3s', dur: '3.3s' },
  { top: '28%', left: '30%', color: '#10b981', size: 10, delay: '1.1s', dur: '2.7s' },
]

export default function ExplorerLevelUpPage() {
  const [showContent, setShowContent] = useState(false)
  const [showAbilities, setShowAbilities] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setShowContent(true), 200)
    const t2 = setTimeout(() => setShowAbilities(true), 900)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-6 py-10 relative overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-bounce"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              animationDelay: p.delay,
              animationDuration: p.dur,
              opacity: 0.7,
            }}
          />
        ))}
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-sm mx-auto space-y-6 text-center">
        {/* Level Badge */}
        <div
          className="mx-auto"
          style={{
            transform: showContent ? 'scale(1)' : 'scale(0.5)',
            opacity: showContent ? 1 : 0,
            transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <div className="w-36 h-36 rounded-full bg-gradient-to-br from-primary via-blue-500 to-purple-600 flex flex-col items-center justify-center mx-auto shadow-2xl shadow-primary/40">
            <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Level</span>
            <span className="font-display font-black text-5xl text-white leading-none">13</span>
          </div>
        </div>

        {/* Text */}
        <div
          style={{
            opacity: showContent ? 1 : 0,
            transform: showContent ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.5s ease 0.3s',
          }}
        >
          <h1 className="font-display font-black text-4xl text-white tracking-tight">LEVEL UP!</h1>
          <p className="text-white/70 text-lg mt-1">You reached Level 13!</p>
        </div>

        {/* New Abilities */}
        {showAbilities && (
          <div
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-5 space-y-3 text-left"
            style={{ animation: 'fadeSlideIn 0.4s ease' }}
          >
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest text-center">New Abilities Unlocked</p>
            {NEW_ABILITIES.map((ability, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/10 rounded-2xl px-4 py-3"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="text-xl">{ability.icon}</span>
                <span className="text-white text-sm font-medium">{ability.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div
          style={{
            opacity: showAbilities ? 1 : 0,
            transition: 'opacity 0.4s ease 0.3s',
          }}
        >
          <Link href="/explorer/dashboard">
            <Button className="w-full h-12 font-semibold bg-white text-primary hover:bg-white/90 text-base">
              Awesome! →
            </Button>
          </Link>
          <p className="text-white/40 text-xs mt-3">or tap anywhere to continue</p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
