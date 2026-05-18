'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, GripVertical, Play, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const WEEK = {
  label: 'Week 3',
  dateRange: 'Nov 13 to Nov 19',
}

const DAYS_DATA = [
  {
    day: 'Monday',
    date: 'Nov 13',
    sessions: [
      { subject: 'Physics', emoji: '⚡', topic: 'Thermodynamics — Laws 1 & 2', duration: '2h', done: true },
      { subject: 'Mathematics', emoji: '🧮', topic: 'Integration by Parts', duration: '1h', done: true },
    ],
    completedSessions: 2,
  },
  {
    day: 'Tuesday',
    date: 'Nov 14',
    sessions: [
      { subject: 'Chemistry', emoji: '⚗️', topic: 'Organic Chemistry — Alkanes & Alkenes', duration: '1.5h', done: true },
      { subject: 'Biology', emoji: '🧬', topic: 'Cell Division — Mitosis', duration: '1h', done: false },
    ],
    completedSessions: 1,
  },
  {
    day: 'Wednesday',
    date: 'Nov 15',
    sessions: [
      { subject: 'Mathematics', emoji: '🧮', topic: 'Differential Equations', duration: '2h', done: false },
      { subject: 'Physics', emoji: '⚡', topic: 'Electromagnetic Waves', duration: '1h', done: false },
    ],
    completedSessions: 0,
  },
  {
    day: 'Thursday',
    date: 'Nov 16',
    sessions: [
      { subject: 'Chemistry', emoji: '⚗️', topic: 'Redox Reactions & Electrochemistry', duration: '2h', done: false },
    ],
    completedSessions: 0,
  },
  {
    day: 'Friday',
    date: 'Nov 17',
    sessions: [
      { subject: 'Biology', emoji: '🧬', topic: 'Genetics — Mendelian Inheritance', duration: '1.5h', done: false },
      { subject: 'Past Papers', emoji: '📝', topic: 'WAEC Physics 2022 — Full Paper', duration: '2h', done: false },
    ],
    completedSessions: 0,
  },
  {
    day: 'Saturday',
    date: 'Nov 18',
    sessions: [
      { subject: 'Mathematics', emoji: '🧮', topic: 'Statistics & Probability', duration: '1.5h', done: false },
    ],
    completedSessions: 0,
  },
  {
    day: 'Sunday',
    date: 'Nov 19',
    sessions: [],
    completedSessions: 0,
  },
]

export default function AchieverRevisionPlannerWeekPage() {
  const [completedMap, setCompletedMap] = useState<Record<string, boolean>>({
    'Mon-0': true,
    'Mon-1': true,
    'Tue-0': true,
  })

  const toggleDone = (key: string) => {
    setCompletedMap(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const totalSessions = DAYS_DATA.reduce((acc, d) => acc + d.sessions.length, 0)
  const doneSessions = Object.values(completedMap).filter(Boolean).length

  return (
    <div className="min-h-screen bg-surface-lowest p-4 space-y-5 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link href="/achiever/revision-planner">
          <button className="flex items-center justify-center w-9 h-9 rounded-full bg-surface-low hover:bg-surface-high transition-colors">
            <ArrowLeft className="h-5 w-5 text-on-surface" />
          </button>
        </Link>
        <div className="text-center">
          <h1 className="font-display font-bold text-lg text-on-surface">{WEEK.label}</h1>
          <p className="text-xs text-on-surface-variant">{WEEK.dateRange}</p>
        </div>
        <button className="flex items-center justify-center w-9 h-9 rounded-full bg-surface-low hover:bg-surface-high transition-colors">
          <ArrowRight className="h-5 w-5 text-on-surface" />
        </button>
      </div>

      {/* Week Progress */}
      <div className="bg-surface-low rounded-2xl border border-outline-variant p-4 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-on-surface">Week Progress</span>
          <span className="font-bold text-primary">{doneSessions}/{totalSessions} sessions</span>
        </div>
        <div className="h-2.5 bg-surface-high rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${totalSessions > 0 ? (doneSessions / totalSessions) * 100 : 0}%` }}
          />
        </div>
      </div>

      {/* Day-by-Day Breakdown */}
      <div className="space-y-4">
        {DAYS_DATA.map((day, dayIndex) => {
          const completedCount = day.sessions.filter((_, si) => completedMap[`${day.day.slice(0, 3)}-${si}`]).length
          const isToday = dayIndex === 2 // Wednesday as "today"

          return (
            <div
              key={day.day}
              className={cn(
                'bg-surface-low rounded-2xl border p-4 space-y-3',
                isToday ? 'border-primary' : 'border-outline-variant'
              )}
            >
              {/* Day Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {isToday && (
                    <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full font-medium">Today</span>
                  )}
                  <p className="font-semibold text-on-surface">{day.day}</p>
                  <span className="text-xs text-on-surface-variant">{day.date}</span>
                </div>
                {day.sessions.length > 0 && (
                  <div className="text-xs text-on-surface-variant">
                    {completedCount}/{day.sessions.length} done
                  </div>
                )}
              </div>

              {/* Progress Bar */}
              {day.sessions.length > 0 && (
                <div className="h-1.5 bg-surface-high rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full transition-all duration-500"
                    style={{ width: `${day.sessions.length > 0 ? (completedCount / day.sessions.length) * 100 : 0}%` }}
                  />
                </div>
              )}

              {/* Sessions */}
              {day.sessions.length === 0 ? (
                <p className="text-sm text-on-surface-variant text-center py-3">Rest day 😴</p>
              ) : (
                <div className="space-y-2">
                  {day.sessions.map((session, si) => {
                    const key = `${day.day.slice(0, 3)}-${si}`
                    const done = !!completedMap[key]
                    return (
                      <div
                        key={si}
                        className={cn(
                          'flex items-center gap-3 p-3 rounded-xl border transition-colors',
                          done ? 'border-green-200 bg-green-50' : 'border-outline-variant bg-surface-lowest'
                        )}
                      >
                        <GripVertical className="h-4 w-4 text-on-surface-variant opacity-40 shrink-0 cursor-grab" />
                        <span className="text-lg shrink-0">{session.emoji}</span>
                        <div className="flex-1 min-w-0">
                          <p className={cn('text-sm font-semibold', done ? 'text-on-surface-variant line-through' : 'text-on-surface')}>
                            {session.subject}
                          </p>
                          <p className="text-xs text-on-surface-variant truncate">{session.topic}</p>
                          <p className="text-xs text-on-surface-variant">{session.duration}</p>
                        </div>
                        <button
                          onClick={() => toggleDone(key)}
                          className="shrink-0"
                        >
                          {done ? (
                            <CheckCircle2 className="h-6 w-6 text-green-600" />
                          ) : (
                            <div className="w-6 h-6 rounded-full border-2 border-outline-variant flex items-center justify-center hover:border-primary transition-colors">
                              <Play className="h-3 w-3 text-on-surface-variant" />
                            </div>
                          )}
                        </button>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <Button variant="outline" className="w-full h-11">
        Regenerate This Week with AI ✦
      </Button>
    </div>
  )
}
