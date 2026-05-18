'use client'

import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

const REWARDS = [
  { icon: '⭐', text: '+100 Bonus XP', desc: 'Added to your balance' },
  { icon: '🛡️', text: 'Streak Shield activated', desc: 'Miss 1 day without losing your streak' },
]

export default function ExplorerStreakPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex flex-col items-center px-5 py-10 pb-24">
      <div className="w-full max-w-sm mx-auto space-y-7">
        {/* Fire Emoji with Glow */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 blur-2xl bg-orange-400/30 rounded-full scale-150" />
            <span
              className="text-8xl relative inline-block"
              style={{
                filter: 'drop-shadow(0 0 20px #fb923c) drop-shadow(0 0 40px #f97316)',
                animation: 'glowPulse 2s ease-in-out infinite',
              }}
            >
              🔥
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center space-y-2">
          <h1 className="font-display font-black text-4xl text-on-surface">7 Day Streak!</h1>
          <p className="text-on-surface-variant text-base">You&apos;ve been learning every day this week!</p>
        </div>

        {/* Week View */}
        <div className="bg-surface-lowest rounded-3xl border border-outline-variant p-5 space-y-4">
          <p className="text-sm font-semibold text-on-surface text-center">This Week</p>
          <div className="flex gap-2">
            {DAYS.map((day, i) => (
              <div key={day} className="flex-1 flex flex-col items-center gap-1.5">
                <div className={cn(
                  'w-9 h-9 rounded-full flex items-center justify-center text-sm transition-all',
                  i < 7
                    ? 'bg-gradient-to-br from-amber-400 to-orange-500 shadow-md shadow-amber-200'
                    : 'bg-surface-high'
                )}>
                  {i < 7 ? (
                    <span className="text-white text-base">🔥</span>
                  ) : (
                    <span className="text-on-surface-variant text-xs font-bold">·</span>
                  )}
                </div>
                <span className="text-[10px] font-medium text-on-surface-variant">{day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Streak Rewards */}
        <div className="space-y-3">
          <p className="text-sm font-semibold text-on-surface">Rewards Unlocked 🎁</p>
          {REWARDS.map((reward, i) => (
            <div key={i} className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                <span className="text-2xl">{reward.icon}</span>
              </div>
              <div>
                <p className="font-semibold text-amber-900 text-sm">{reward.text}</p>
                <p className="text-xs text-amber-700">{reward.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* AI Motivational Message */}
        <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 space-y-2">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-ai" />
            <span className="text-sm font-semibold text-on-surface">EduWorld AI</span>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            You&apos;re building an incredible habit. Consistent daily practice is the #1 predictor of long-term learning success. Keep it up! 🚀
          </p>
        </div>

        {/* CTA */}
        <Link href="/explorer/dashboard">
          <Button className="w-full h-12 font-semibold text-base">
            Claim Reward 🎉
          </Button>
        </Link>
      </div>

      <style jsx global>{`
        @keyframes glowPulse {
          0%, 100% { filter: drop-shadow(0 0 20px #fb923c) drop-shadow(0 0 40px #f97316); }
          50% { filter: drop-shadow(0 0 35px #fb923c) drop-shadow(0 0 60px #f97316); }
        }
      `}</style>
    </div>
  )
}
