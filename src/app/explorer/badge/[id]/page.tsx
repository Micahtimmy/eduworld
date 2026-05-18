'use client'

import Link from 'next/link'
import { ArrowLeft, Share2, Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const BADGE = {
  icon: '🔬',
  name: 'Science Cadet',
  earnedOn: 'October 22, 2023',
  howEarned: 'Completed 5 Science lessons',
  description: 'The Science Cadet badge is awarded to Explorers who demonstrate curiosity and dedication to scientific knowledge. You\'ve shown a real love for discovery by completing your first five science lessons. The world needs more curious minds like yours!',
  color: 'from-blue-400 to-blue-600',
  shadowColor: 'shadow-blue-200',
}

const RELATED_BADGES = [
  { icon: '⚗️', name: 'Science Explorer', desc: 'Complete 10 Science lessons', locked: true },
  { icon: '🌡️', name: 'Lab Master', desc: 'Complete all lab activities', locked: true },
  { icon: '🚀', name: 'Science Genius', desc: 'Score 90%+ on 5 Science quizzes', locked: true },
]

export default function ExplorerBadgeDetailPage() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Top Bar */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-outline-variant px-4 py-3 flex items-center gap-3">
        <Link href="/explorer/achievements" className="flex items-center justify-center w-9 h-9 rounded-full bg-surface-low hover:bg-surface-high transition-colors">
          <ArrowLeft className="h-5 w-5 text-on-surface" />
        </Link>
        <span className="font-label font-semibold text-on-surface">Badge Detail</span>
      </div>

      <div className="px-5 py-8 max-w-sm mx-auto space-y-7">
        {/* Badge Hero */}
        <div className="flex flex-col items-center gap-5">
          <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${BADGE.color} flex items-center justify-center shadow-xl ${BADGE.shadowColor}`}>
            <span className="text-6xl">{BADGE.icon}</span>
          </div>
          <div className="text-center space-y-1">
            <h1 className="font-display font-bold text-2xl text-on-surface">{BADGE.name}</h1>
            <p className="text-sm text-on-surface-variant">Earned on {BADGE.earnedOn}</p>
          </div>
          {/* How earned */}
          <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
            <Check className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-green-800">{BADGE.howEarned}</span>
          </div>
        </div>

        {/* Description */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-2">
          <h2 className="font-display font-semibold text-on-surface">About this badge</h2>
          <p className="text-sm text-on-surface-variant leading-relaxed">{BADGE.description}</p>
        </div>

        {/* Share Section */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center gap-2">
            <Share2 className="h-4 w-4 text-on-surface" />
            <h2 className="font-display font-semibold text-on-surface">Share this badge</h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleCopy}
              className="flex-1 flex items-center justify-center gap-2 border border-outline-variant rounded-xl py-2.5 text-sm font-medium text-on-surface hover:bg-surface-low transition-colors"
            >
              {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-blue-500 text-white rounded-xl py-2.5 text-sm font-medium hover:bg-blue-600 transition-colors">
              <span>🐦</span>
              Share
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white rounded-xl py-2.5 text-sm font-medium hover:bg-green-600 transition-colors">
              <span>📱</span>
              WhatsApp
            </button>
          </div>
        </div>

        {/* Related Badges */}
        <div className="space-y-4">
          <h2 className="font-display font-semibold text-on-surface">What&apos;s next to earn 🎯</h2>
          <div className="space-y-3">
            {RELATED_BADGES.map(badge => (
              <div key={badge.name} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 flex items-center gap-4 opacity-70">
                <div className="w-12 h-12 rounded-2xl bg-surface-high flex items-center justify-center shrink-0">
                  <span className="text-2xl">{badge.icon}</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-on-surface text-sm">{badge.name}</p>
                  <p className="text-xs text-on-surface-variant">{badge.desc}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-surface-high flex items-center justify-center">
                  <span className="text-sm">🔒</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link href="/explorer/subjects">
          <Button className="w-full h-12 font-semibold">
            Keep Exploring 🚀
          </Button>
        </Link>
      </div>
    </div>
  )
}
