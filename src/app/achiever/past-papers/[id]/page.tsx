'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Flag, Clock, CheckSquare, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const PAPER = {
  name: 'Mathematics — Paper 1 (2023)',
  board: 'WAEC',
  duration: '1h 30m',
  totalQuestions: 50,
}

const QUESTION = {
  number: 7,
  text: 'A circle has a radius of 5 cm. What is the exact area of the circle?',
  options: [
    { label: 'A', text: '10π cm²' },
    { label: 'B', text: '25π cm²' },
    { label: 'C', text: '50π cm²' },
    { label: 'D', text: '5π cm²' },
  ],
}

// Mock answered questions state
const ANSWERED = [1, 2, 3, 5, 6]
const FLAGGED = [4, 9]

type QuestionStatus = 'answered' | 'flagged' | 'current' | 'unanswered'

function getStatus(qNum: number, current: number): QuestionStatus {
  if (qNum === current) return 'current'
  if (FLAGGED.includes(qNum)) return 'flagged'
  if (ANSWERED.includes(qNum)) return 'answered'
  return 'unanswered'
}

export default function AchieverPastPaperViewerPage() {
  const [currentQ, setCurrentQ] = useState(7)
  const [selected, setSelected] = useState<string | null>(null)
  const [flagged, setFlaggedState] = useState(false)
  const [showNavSheet, setShowNavSheet] = useState(false)
  const [timeLeft] = useState('1:12:34')

  const answeredCount = ANSWERED.length + (selected ? 1 : 0)

  return (
    <div className="min-h-screen bg-surface-lowest flex flex-col">
      {/* Top Bar */}
      <div className="sticky top-0 z-30 bg-surface-lowest border-b border-outline-variant px-4 py-3">
        <div className="flex items-center gap-3">
          <Link href="/achiever/past-papers" className="flex items-center justify-center w-9 h-9 rounded-full bg-surface-low hover:bg-surface-high transition-colors shrink-0">
            <ArrowLeft className="h-5 w-5 text-on-surface" />
          </Link>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-on-surface text-sm truncate">{PAPER.name}</p>
            <p className="text-xs text-on-surface-variant">{PAPER.board} · {answeredCount}/{PAPER.totalQuestions} answered</p>
          </div>
          <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-2.5 py-1 rounded-full shrink-0">
            <Clock className="h-3 w-3" />
            <span className="text-xs font-mono font-bold">{timeLeft}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar - Question Navigation */}
        <aside className="hidden lg:flex flex-col w-56 bg-surface-low border-r border-outline-variant p-4 space-y-4 overflow-y-auto">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-on-surface text-sm">Questions</h3>
            <div className="flex flex-col gap-1 text-[10px] text-on-surface-variant">
              <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-green-500" />Done</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-amber-400" />Flagged</div>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-1.5">
            {Array.from({ length: PAPER.totalQuestions }, (_, i) => i + 1).map(q => {
              const status = getStatus(q, currentQ)
              return (
                <button
                  key={q}
                  onClick={() => setCurrentQ(q)}
                  className={cn(
                    'w-9 h-9 rounded-lg text-xs font-bold transition-colors',
                    status === 'current' ? 'bg-primary text-white' :
                    status === 'answered' ? 'bg-green-500 text-white' :
                    status === 'flagged' ? 'bg-amber-400 text-white' :
                    'bg-surface-high text-on-surface-variant hover:bg-surface-low'
                  )}
                >
                  {q}
                </button>
              )
            })}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6 pb-32">
          <div className="max-w-2xl mx-auto space-y-5">
            {/* Question Header */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-on-surface-variant">Question {currentQ} of {PAPER.totalQuestions}</span>
              <button
                onClick={() => setFlaggedState(!flagged)}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors',
                  flagged ? 'bg-amber-100 text-amber-700 border border-amber-300' : 'bg-surface-low text-on-surface-variant border border-outline-variant hover:bg-surface-high'
                )}
              >
                <Flag className={cn('h-3.5 w-3.5', flagged ? 'text-amber-600 fill-amber-400' : '')} />
                {flagged ? 'Flagged' : 'Flag for review'}
              </button>
            </div>

            {/* Question Card */}
            <div className="bg-white dark:bg-surface-low rounded-2xl border border-outline-variant p-6 space-y-4">
              <p className="font-display font-semibold text-lg text-on-surface leading-snug">
                {QUESTION.text}
              </p>

              {/* Options */}
              <div className="space-y-3 pt-2">
                {QUESTION.options.map(option => (
                  <button
                    key={option.label}
                    onClick={() => setSelected(option.label)}
                    className={cn(
                      'w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all',
                      selected === option.label
                        ? 'border-primary bg-primary/5'
                        : 'border-outline-variant hover:border-primary/40 hover:bg-surface-low'
                    )}
                  >
                    <div className={cn(
                      'w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm shrink-0',
                      selected === option.label ? 'bg-primary text-white' : 'bg-surface-high text-on-surface-variant'
                    )}>
                      {option.label}
                    </div>
                    <span className={cn('text-sm font-medium', selected === option.label ? 'text-primary' : 'text-on-surface')}>
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Question Nav Toggle */}
      <div className="lg:hidden fixed bottom-20 right-4 z-40">
        <button
          onClick={() => setShowNavSheet(true)}
          className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg"
        >
          <CheckSquare className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile Nav Sheet */}
      {showNavSheet && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowNavSheet(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-surface-low rounded-t-3xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-semibold text-on-surface">Question Navigator</h3>
              <button onClick={() => setShowNavSheet(false)} className="w-8 h-8 rounded-full bg-surface-high flex items-center justify-center">
                <ChevronDown className="h-4 w-4 text-on-surface" />
              </button>
            </div>
            <div className="flex gap-3 text-xs text-on-surface-variant">
              <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-primary" />Current</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-green-500" />Done</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-amber-400" />Flagged</div>
            </div>
            <div className="grid grid-cols-8 gap-2 max-h-56 overflow-y-auto">
              {Array.from({ length: PAPER.totalQuestions }, (_, i) => i + 1).map(q => {
                const status = getStatus(q, currentQ)
                return (
                  <button
                    key={q}
                    onClick={() => { setCurrentQ(q); setShowNavSheet(false) }}
                    className={cn(
                      'w-10 h-10 rounded-lg text-xs font-bold transition-colors',
                      status === 'current' ? 'bg-primary text-white' :
                      status === 'answered' ? 'bg-green-500 text-white' :
                      status === 'flagged' ? 'bg-amber-400 text-white' :
                      'bg-surface-high text-on-surface-variant'
                    )}
                  >
                    {q}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-white dark:bg-surface-low border-t border-outline-variant px-4 py-4">
        <div className="flex items-center gap-3 max-w-2xl mx-auto">
          <Button
            variant="outline"
            className="flex-1 h-11 gap-2"
            onClick={() => setCurrentQ(q => Math.max(1, q - 1))}
            disabled={currentQ <= 1}
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </Button>
          {currentQ < PAPER.totalQuestions ? (
            <Button
              className="flex-1 h-11 gap-2"
              onClick={() => setCurrentQ(q => Math.min(PAPER.totalQuestions, q + 1))}
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button className="flex-1 h-11 bg-green-600 hover:bg-green-700">
              Submit Paper
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
