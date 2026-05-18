'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AlertTriangle, Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const RESULTS = {
  score: 85,
  correct: 4,
  total: 5,
  timeTaken: '1:32',
  xpEarned: 200,
  questions: [
    { number: 1, correct: true, answer: 'The Sun\'s heat and light energy' },
    { number: 2, correct: true, answer: 'Condensation' },
    { number: 3, correct: true, answer: 'Precipitation' },
    { number: 4, correct: false, answer: 'Evaporation (correct: Transpiration)' },
    { number: 5, correct: true, answer: 'Groundwater' },
  ],
  weakTopic: 'evaporation',
}

const RADIUS = 52
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export default function ExplorerQuizResultsPage() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(RESULTS.score), 300)
    return () => clearTimeout(timer)
  }, [])

  const strokeDashoffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE

  const getMessage = () => {
    if (RESULTS.score >= 80) return { text: 'Great work! 🎉', color: 'text-green-600' }
    if (RESULTS.score >= 60) return { text: 'Good effort! 👍', color: 'text-primary' }
    return { text: 'Keep practising! 💪', color: 'text-amber-600' }
  }

  const message = getMessage()

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Score Hero */}
      <div className="bg-gradient-to-b from-primary/5 to-white pt-10 pb-6 flex flex-col items-center gap-4 px-5">
        {/* Circular Score Ring */}
        <div className="relative w-36 h-36">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r={RADIUS}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="10"
            />
            <circle
              cx="60"
              cy="60"
              r={RADIUS}
              fill="none"
              stroke="#1e5799"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={strokeDashoffset}
              style={{ transition: 'stroke-dashoffset 1.2s ease-out' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display font-black text-3xl text-on-surface">{progress}%</span>
            <span className="text-xs text-on-surface-variant">Score</span>
          </div>
        </div>

        <div className="text-center space-y-1">
          <p className={cn('font-display font-bold text-2xl', message.color)}>{message.text}</p>
        </div>

        {/* XP Badge */}
        <div className="flex items-center gap-2 bg-xp/10 text-xp px-4 py-2 rounded-full">
          <span className="text-lg">⭐</span>
          <span className="font-bold">+{RESULTS.xpEarned} XP earned!</span>
        </div>
      </div>

      <div className="px-5 space-y-5 max-w-sm mx-auto">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-3 text-center space-y-1">
            <p className="font-display font-bold text-xl text-on-surface">{RESULTS.correct}/{RESULTS.total}</p>
            <p className="text-xs text-on-surface-variant">Correct</p>
          </div>
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-3 text-center space-y-1">
            <p className="font-display font-bold text-xl text-on-surface font-mono">{RESULTS.timeTaken}</p>
            <p className="text-xs text-on-surface-variant">Time</p>
          </div>
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-3 text-center space-y-1">
            <p className="font-display font-bold text-xl text-xp">+{RESULTS.xpEarned}</p>
            <p className="text-xs text-on-surface-variant">XP</p>
          </div>
        </div>

        {/* Question Breakdown */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
          <h2 className="font-display font-semibold text-on-surface">Question Breakdown</h2>
          <div className="space-y-2">
            {RESULTS.questions.map(q => (
              <div key={q.number} className={cn(
                'flex items-start gap-3 p-3 rounded-xl',
                q.correct ? 'bg-green-50' : 'bg-red-50'
              )}>
                <div className={cn(
                  'w-7 h-7 rounded-full flex items-center justify-center shrink-0',
                  q.correct ? 'bg-green-500' : 'bg-red-400'
                )}>
                  {q.correct ? (
                    <Check className="h-4 w-4 text-white" />
                  ) : (
                    <X className="h-4 w-4 text-white" />
                  )}
                </div>
                <div className="flex-1">
                  <p className={cn('text-xs font-semibold', q.correct ? 'text-green-800' : 'text-red-800')}>
                    Question {q.number}
                  </p>
                  <p className={cn('text-xs mt-0.5', q.correct ? 'text-green-700' : 'text-red-700')}>
                    {q.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weak Topic Callout */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-amber-900 text-sm">You found {RESULTS.weakTopic} tricky</p>
            <p className="text-xs text-amber-700">Let&apos;s review it — a quick AI explainer can help you master this topic!</p>
            <Link href="/explorer/ai-tutor">
              <button className="text-xs font-semibold text-amber-800 underline mt-1">Review with AI Tutor →</button>
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <Link href="/explorer/quiz/water-cycle" className="flex-1">
            <Button variant="outline" className="w-full h-12">
              Try Again
            </Button>
          </Link>
          <Link href="/explorer/lessons" className="flex-[2]">
            <Button className="w-full h-12 font-semibold">
              Next Lesson →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
