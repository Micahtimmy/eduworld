'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Star, Sparkles, Flame } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ExplorerLessonCompletePage() {
  const [xpCount, setXpCount] = useState(0)
  const [showBadge, setShowBadge] = useState(false)
  const [barFill, setBarFill] = useState(72)

  useEffect(() => {
    // Count-up animation for XP
    let start = 0
    const end = 150
    const duration = 1200
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        start = end
        clearInterval(timer)
      }
      setXpCount(Math.floor(start))
    }, 16)

    // Show badge after XP animation
    const badgeTimer = setTimeout(() => setShowBadge(true), 800)

    // Fill XP bar
    const barTimer = setTimeout(() => setBarFill(76), 400)

    return () => {
      clearInterval(timer)
      clearTimeout(badgeTimer)
      clearTimeout(barTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-5 py-10 overflow-hidden relative">
      {/* Confetti dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { color: 'bg-primary', top: '8%', left: '10%', size: 10, delay: '0s', duration: '3s' },
          { color: 'bg-xp', top: '12%', left: '85%', size: 8, delay: '0.2s', duration: '2.8s' },
          { color: 'bg-ai', top: '20%', left: '60%', size: 12, delay: '0.4s', duration: '3.2s' },
          { color: 'bg-red-400', top: '6%', left: '40%', size: 7, delay: '0.1s', duration: '2.5s' },
          { color: 'bg-purple-400', top: '15%', left: '25%', size: 9, delay: '0.6s', duration: '3s' },
          { color: 'bg-pink-400', top: '5%', left: '70%', size: 11, delay: '0.3s', duration: '2.7s' },
          { color: 'bg-green-400', top: '25%', left: '5%', size: 8, delay: '0.5s', duration: '3.4s' },
          { color: 'bg-xp', top: '10%', left: '50%', size: 10, delay: '0.7s', duration: '3.1s' },
          { color: 'bg-primary', top: '18%', left: '92%', size: 6, delay: '0.9s', duration: '2.6s' },
          { color: 'bg-rose-400', top: '30%', left: '78%', size: 9, delay: '0.2s', duration: '2.9s' },
        ].map((dot, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${dot.color} animate-bounce`}
            style={{
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
              animationDelay: dot.delay,
              animationDuration: dot.duration,
              opacity: 0.8,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-sm mx-auto space-y-6 relative z-10">
        {/* Star burst */}
        <div className="text-center animate-bounce" style={{ animationDuration: '2s' }}>
          <span className="text-7xl">⭐</span>
        </div>

        {/* XP earned */}
        <div className="text-center space-y-1">
          <p className="font-display font-black text-5xl text-xp">+{xpCount} XP</p>
          <h1 className="font-display font-bold text-2xl text-on-surface">Lesson Complete!</h1>
          <p className="text-on-surface-variant text-sm">The Water Cycle</p>
        </div>

        {/* XP Bar */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-on-surface">Level 12 → 13</span>
            <span className="font-bold text-primary">{barFill}%</span>
          </div>
          <div className="h-3 bg-surface-high rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${barFill}%` }}
            />
          </div>
          <p className="text-xs text-on-surface-variant">3,390 / 4,000 XP to next level</p>
        </div>

        {/* Achievement Badge */}
        {showBadge && (
          <div className="bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl p-4 flex items-center gap-4 animate-pulse" style={{ animationDuration: '3s' }}>
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <span className="text-2xl">🔬</span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Badge Unlocked!</p>
              <p className="text-white font-bold">Science Explorer 🔬</p>
            </div>
            <Sparkles className="h-5 w-5 text-white ml-auto" />
          </div>
        )}

        {/* Streak */}
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 flex items-center gap-3">
          <Flame className="h-6 w-6 text-orange-500" />
          <div>
            <p className="font-semibold text-orange-900 text-sm">🔥 Day 8 Streak!</p>
            <p className="text-xs text-orange-700">Keep it up — you&apos;re on a roll!</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <Link href="/explorer/lessons">
            <Button className="w-full h-12 font-semibold text-base">
              Next Lesson →
            </Button>
          </Link>
          <Link href="/explorer/subjects">
            <Button variant="outline" className="w-full h-12 font-medium">
              Back to Subjects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
