'use client'

import { useState } from 'react'
import { Sparkles, CheckSquare, Square, Calendar, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const DAYS_SHORT = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const WEEK_GRID = [
  [
    { subject: 'Physics', color: 'bg-blue-500', duration: '2h' },
    { subject: 'Chemistry', color: 'bg-green-500', duration: '1h' },
  ],
  [
    { subject: 'Maths', color: 'bg-purple-500', duration: '2h' },
  ],
  [
    { subject: 'Biology', color: 'bg-emerald-500', duration: '1.5h' },
    { subject: 'Physics', color: 'bg-blue-500', duration: '1h' },
  ],
  [
    { subject: 'Chemistry', color: 'bg-green-500', duration: '2h' },
  ],
  [
    { subject: 'Maths', color: 'bg-purple-500', duration: '2h' },
    { subject: 'Biology', color: 'bg-emerald-500', duration: '1h' },
  ],
  [
    { subject: 'Physics', color: 'bg-blue-500', duration: '1h' },
  ],
  [],
]

const TODAY_SESSIONS = [
  { subject: 'Physics', emoji: '⚡', topic: 'Thermodynamics — Laws 1 & 2', duration: '2h', done: true },
  { subject: 'Chemistry', emoji: '⚗️', topic: 'Organic Chemistry — Alkanes', duration: '1h', done: false },
  { subject: 'Revision', emoji: '📝', topic: 'Past paper questions (2022)', duration: '45m', done: false },
]

const SUBJECTS_LIST = ['Physics', 'Mathematics', 'Chemistry', 'Biology']

export default function AchieverRevisionPlannerPage() {
  const [examDate, setExamDate] = useState('2025-06-15')
  const [hoursPerDay, setHoursPerDay] = useState(3)
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(['Physics', 'Mathematics', 'Chemistry'])
  const [planGenerated, setPlanGenerated] = useState(true)
  const [generating, setGenerating] = useState(false)
  const [checkedSessions, setCheckedSessions] = useState<number[]>([0])

  const toggleSubject = (sub: string) => {
    setSelectedSubjects(prev =>
      prev.includes(sub) ? prev.filter(s => s !== sub) : [...prev, sub]
    )
  }

  const handleGenerate = () => {
    setGenerating(true)
    setTimeout(() => {
      setGenerating(false)
      setPlanGenerated(true)
    }, 1500)
  }

  const toggleSession = (i: number) => {
    setCheckedSessions(prev =>
      prev.includes(i) ? prev.filter(n => n !== i) : [...prev, i]
    )
  }

  return (
    <div className="min-h-screen bg-surface-lowest p-4 space-y-6 pb-24">
      {/* Header */}
      <div>
        <h1 className="font-display font-bold text-2xl text-on-surface">AI Revision Planner</h1>
        <p className="text-sm text-on-surface-variant mt-1">Build a personalised study schedule</p>
      </div>

      {/* Input Section */}
      <div className="bg-surface-low rounded-2xl border border-outline-variant p-5 space-y-5">
        {/* Exam Date */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-on-surface flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            Target Exam Date
          </label>
          <input
            type="date"
            value={examDate}
            onChange={e => setExamDate(e.target.value)}
            className="w-full bg-surface-lowest border border-outline-variant rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Subjects */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-on-surface">Subjects to cover</p>
          <div className="flex flex-wrap gap-2">
            {SUBJECTS_LIST.map(sub => (
              <button
                key={sub}
                onClick={() => toggleSubject(sub)}
                className={cn(
                  'px-3 py-1.5 rounded-full text-sm font-medium transition-colors border',
                  selectedSubjects.includes(sub)
                    ? 'bg-primary text-white border-primary'
                    : 'border-outline-variant text-on-surface-variant hover:bg-surface-high'
                )}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>

        {/* Hours Per Day Slider */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-on-surface flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              Hours per day
            </label>
            <span className="font-display font-bold text-primary text-lg">{hoursPerDay}h</span>
          </div>
          <input
            type="range"
            min={1}
            max={6}
            value={hoursPerDay}
            onChange={e => setHoursPerDay(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-on-surface-variant">
            <span>1h</span>
            <span>6h</span>
          </div>
        </div>

        <Button
          className="w-full h-11 gap-2"
          onClick={handleGenerate}
          disabled={generating}
        >
          <Sparkles className="h-4 w-4" />
          {generating ? 'Generating...' : 'Generate My Plan'}
        </Button>
      </div>

      {/* Generated Plan */}
      {planGenerated && (
        <>
          {/* Week Overview */}
          <div className="bg-surface-low rounded-2xl border border-outline-variant p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-semibold text-on-surface">This Week</h2>
              <div className="flex gap-4 text-xs text-on-surface-variant">
                <span>14h planned</span>
                <span className="text-green-600 font-semibold">8h completed</span>
              </div>
            </div>

            {/* Progress */}
            <div className="space-y-1">
              <div className="h-2 bg-surface-high rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '57%' }} />
              </div>
              <p className="text-xs text-on-surface-variant">8 of 14 hours completed this week</p>
            </div>

            {/* 7-column Grid */}
            <div className="grid grid-cols-7 gap-1.5">
              {DAYS_SHORT.map((day, i) => (
                <div key={day} className="flex flex-col gap-1">
                  <span className="text-[10px] text-on-surface-variant text-center font-medium">{day}</span>
                  <div className="space-y-1 min-h-[60px]">
                    {WEEK_GRID[i].map((session, j) => (
                      <div
                        key={j}
                        className={cn('rounded-lg px-1 py-1 text-white text-center', session.color)}
                        title={`${session.subject} · ${session.duration}`}
                      >
                        <p className="text-[9px] font-bold truncate">{session.subject.slice(0, 3)}</p>
                        <p className="text-[9px] opacity-80">{session.duration}</p>
                      </div>
                    ))}
                    {WEEK_GRID[i].length === 0 && (
                      <div className="rounded-lg bg-surface-high h-8 flex items-center justify-center">
                        <span className="text-[10px] text-on-surface-variant">Rest</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Sessions */}
          <div className="bg-surface-low rounded-2xl border border-outline-variant p-4 space-y-3">
            <h2 className="font-display font-semibold text-on-surface">Today&apos;s Sessions</h2>
            <div className="space-y-3">
              {TODAY_SESSIONS.map((session, i) => (
                <div
                  key={i}
                  className={cn(
                    'flex items-center gap-3 p-3 rounded-xl border transition-colors',
                    checkedSessions.includes(i)
                      ? 'border-green-200 bg-green-50'
                      : 'border-outline-variant bg-surface-lowest'
                  )}
                >
                  <button onClick={() => toggleSession(i)} className="shrink-0">
                    {checkedSessions.includes(i) ? (
                      <CheckSquare className="h-5 w-5 text-green-600" />
                    ) : (
                      <Square className="h-5 w-5 text-on-surface-variant" />
                    )}
                  </button>
                  <span className="text-xl shrink-0">{session.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className={cn('text-sm font-semibold', checkedSessions.includes(i) ? 'line-through text-on-surface-variant' : 'text-on-surface')}>
                      {session.subject}
                    </p>
                    <p className="text-xs text-on-surface-variant truncate">{session.topic}</p>
                  </div>
                  <span className="text-xs font-medium text-on-surface-variant shrink-0">{session.duration}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insight */}
          <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-ai" />
              <p className="text-sm font-semibold text-on-surface">AI Insight</p>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Based on your weak areas in <strong className="text-on-surface">Thermodynamics</strong> and recent Chemistry quiz scores, consider doubling your Chemistry time this week. Projected improvement: <strong className="text-green-600">+8%</strong>
            </p>
          </div>
        </>
      )}
    </div>
  )
}
