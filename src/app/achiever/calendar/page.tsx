'use client'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const EVENTS: Record<number, { label: string; color: string }[]> = {
  1: [{ label: 'CS401 Checkpoint', color: 'bg-blue-500' }],
  3: [{ label: 'Physics Huddle', color: 'bg-green-500' }],
  7: [{ label: 'Bio Mock', color: 'bg-purple-500' }],
  9: [{ label: 'Lit Review', color: 'bg-amber-500' }],
  13: [{ label: 'Math Board Prelim', color: 'bg-red-500' }, { label: 'Calc Study', color: 'bg-blue-400' }],
  14: [{ label: 'Math Board Day 2', color: 'bg-red-500' }],
  16: [{ label: 'Chem Run', color: 'bg-green-600' }],
  22: [{ label: 'CS401 Final', color: 'bg-blue-500' }],
}

const NEXT_48 = [
  { time: 'Today 4PM', label: 'Physics Huddle — Study Group B', color: 'bg-green-500' },
  { time: 'Tomorrow 9AM', label: 'Bio Mock Exam — Room 204', color: 'bg-purple-500' },
]

const FILTERS = ['All', 'Exams', 'Quizzes', 'Huddles', 'Deadlines']
const SUBJECTS = ['Math', 'Bio', 'Physics', 'CS', 'Lit', 'Chem']

export default function AchieverCalendarPage() {
  const dates = Array.from({ length: 30 }, (_, i) => i + 1)

  return (
    <div className="p-4 space-y-5 pb-24">
      <div className="flex items-center justify-between">
        <h1 className="font-display font-bold text-xl text-on-surface">Academic Calendar</h1>
        <div className="flex items-center gap-1.5 bg-xp/10 text-xp px-2 py-0.5 rounded-full">
          <span className="text-xs">🏅</span>
          <span className="text-xs font-bold">2,450 XP</span>
        </div>
      </div>

      {/* Month Nav */}
      <div className="flex items-center justify-between">
        <button className="p-2 rounded-xl hover:bg-surface-low text-on-surface-variant">‹</button>
        <h2 className="font-display font-semibold text-on-surface">November 2023</h2>
        <button className="p-2 rounded-xl hover:bg-surface-low text-on-surface-variant">›</button>
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {FILTERS.map((f, i) => (
          <button key={f} className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 ${i === 0 ? 'bg-primary text-white' : 'bg-surface-low text-on-surface-variant'}`}>{f}</button>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
        <div className="grid grid-cols-7 border-b border-outline-variant">
          {DAYS.map(d => (
            <div key={d} className="text-center text-xs font-semibold text-on-surface-variant py-2">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {/* Offset for Nov 1 = Wednesday (index 2) */}
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={`empty-${i}`} className="min-h-[64px] border-b border-r border-outline-variant p-1" />
          ))}
          {dates.map(d => (
            <div key={d} className={`min-h-[64px] border-b border-r border-outline-variant p-1 ${d === 13 || d === 14 ? 'bg-primary/5' : ''}`}>
              <p className={`text-xs font-semibold mb-1 ${d === 13 || d === 14 ? 'text-primary' : 'text-on-surface'}`}>{d}</p>
              <div className="space-y-0.5">
                {(EVENTS[d] || []).map(ev => (
                  <div key={ev.label} className={`${ev.color} rounded px-1 py-0.5`}>
                    <p className="text-white text-[9px] font-semibold truncate">{ev.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subject Pills */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {SUBJECTS.map(s => (
          <span key={s} className="px-3 py-1 rounded-full text-xs font-semibold bg-surface-low text-on-surface-variant whitespace-nowrap shrink-0">{s}</span>
        ))}
      </div>

      {/* Next 48 Hours */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Next 48 Hours</h2>
        <div className="space-y-2">
          {NEXT_48.map(e => (
            <div key={e.label} className="flex items-center gap-3 p-2.5 bg-surface-low rounded-xl">
              <div className={`w-2 h-2 rounded-full ${e.color} shrink-0`} />
              <div>
                <p className="text-xs font-semibold text-on-surface">{e.label}</p>
                <p className="text-xs text-on-surface-variant">{e.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insight */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 space-y-2">
        <div className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-ai" />
          <p className="text-sm font-semibold text-on-surface">AI Insight</p>
        </div>
        <p className="text-xs text-on-surface-variant">You have a Math Board exam cluster Nov 13–14. I suggest adding 2 extra hours of calculus practice this week.</p>
        <Button size="sm" className="gap-1.5 bg-ai hover:bg-ai/90 text-white">
          <Sparkles className="h-3 w-3" /> Generate Study Plan
        </Button>
      </div>
    </div>
  )
}
