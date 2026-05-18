'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const QUIZ = {
  subject: 'Science Quiz',
  totalQuestions: 5,
  currentQuestion: 1,
  question: 'What is the main source of energy that drives the water cycle?',
  options: [
    { label: 'A', text: 'The Moon\'s gravitational pull' },
    { label: 'B', text: 'The Sun\'s heat and light energy' },
    { label: 'C', text: 'Wind patterns in the atmosphere' },
    { label: 'D', text: 'Volcanic activity underground' },
  ],
}

const TOTAL_SECONDS = 120

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function ExplorerQuizPage() {
  const [selected, setSelected] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(TOTAL_SECONDS)

  useEffect(() => {
    if (submitted) return
    if (timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timer)
          return 0
        }
        return t - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [submitted, timeLeft])

  const isLowTime = timeLeft < 30

  const handleSubmit = () => {
    if (!selected) return
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Bar */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-outline-variant px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/explorer/subjects" className="flex items-center justify-center w-9 h-9 rounded-full bg-surface-low hover:bg-surface-high transition-colors">
            <ArrowLeft className="h-5 w-5 text-on-surface" />
          </Link>
          <span className="font-label font-semibold text-on-surface text-sm">{QUIZ.subject}</span>
          <div className={cn(
            'flex items-center gap-1.5 px-3 py-1 rounded-full font-mono font-bold text-sm transition-colors',
            isLowTime ? 'bg-amber-100 text-amber-700' : 'bg-surface-low text-on-surface'
          )}>
            <Clock className={cn('h-3.5 w-3.5', isLowTime ? 'text-amber-600' : 'text-on-surface-variant')} />
            {formatTime(timeLeft)}
          </div>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="px-5 pt-5 pb-2">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-on-surface-variant font-medium">
            Question {QUIZ.currentQuestion} of {QUIZ.totalQuestions}
          </p>
          <p className="text-xs font-bold text-primary">{Math.round((QUIZ.currentQuestion / QUIZ.totalQuestions) * 100)}%</p>
        </div>
        <div className="flex gap-2">
          {Array.from({ length: QUIZ.totalQuestions }).map((_, i) => (
            <div
              key={i}
              className={cn(
                'flex-1 h-2 rounded-full transition-colors',
                i < QUIZ.currentQuestion ? 'bg-primary' : 'bg-surface-high'
              )}
            />
          ))}
        </div>
      </div>

      {/* Question Card */}
      <div className="flex-1 px-5 py-4 space-y-5 max-w-xl mx-auto w-full">
        <div className="bg-surface-lowest rounded-3xl border border-outline-variant p-6 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
            <span className="text-2xl">💧</span>
          </div>
          <p className="font-display font-semibold text-xl text-on-surface leading-snug">
            {QUIZ.question}
          </p>
        </div>

        {/* Answer Options */}
        <div className="space-y-3">
          {QUIZ.options.map(option => {
            const isSelected = selected === option.label
            return (
              <button
                key={option.label}
                onClick={() => !submitted && setSelected(option.label)}
                className={cn(
                  'w-full flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all min-h-[60px]',
                  isSelected
                    ? 'border-primary bg-primary/5 shadow-sm'
                    : 'border-outline-variant bg-white hover:border-outline-variant/60 hover:bg-surface-low',
                  !isSelected && selected ? 'opacity-60' : ''
                )}
              >
                <div className={cn(
                  'w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-colors',
                  isSelected ? 'bg-primary text-white' : 'bg-surface-high text-on-surface-variant'
                )}>
                  {option.label}
                </div>
                <span className={cn(
                  'text-sm font-medium leading-snug',
                  isSelected ? 'text-primary' : 'text-on-surface'
                )}>
                  {option.text}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Bottom Submit */}
      <div className="sticky bottom-0 bg-white/95 backdrop-blur-sm border-t border-outline-variant px-5 py-4">
        {submitted ? (
          <Link href="/explorer/quiz-results">
            <Button className="w-full h-12 font-semibold">
              See Results →
            </Button>
          </Link>
        ) : (
          <Button
            className="w-full h-12 font-semibold"
            disabled={!selected}
            onClick={handleSubmit}
          >
            Submit Answer
          </Button>
        )}
      </div>
    </div>
  )
}
