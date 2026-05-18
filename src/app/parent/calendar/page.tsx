'use client'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const EVENTS: Record<number, { label: string; color: string }[]> = {
  2: [{ label: 'Labor Day', color: 'bg-blue-400' }],
  7: [{ label: 'Football Finals', color: 'bg-green-500' }],
  9: [{ label: 'Physics Deadline', color: 'bg-red-500' }, { label: 'Parent-Teacher Conf', color: 'bg-purple-500' }],
  14: [{ label: 'Macbeth Performance', color: 'bg-amber-500' }],
}

const REGISTRATIONS = [
  { label: 'Macbeth Book Tickets', status: 'Pending', icon: '🎭', cta: 'Book Now', ctaColor: 'bg-primary text-white' },
  { label: 'Parent-Teacher Conference', status: 'Registered', icon: '👩‍🏫', info: 'TODAY — 5:00 PM', ctaColor: 'bg-green-100 text-green-700', cta: '✓ Confirmed' },
  { label: 'Sports Day Sign-Up', status: 'Pending', icon: '⚽', cta: 'Sign Up', ctaColor: 'bg-primary text-white' },
]

const LEGEND = [
  { color: 'bg-blue-400', label: 'School Events' },
  { color: 'bg-green-500', label: 'Sports' },
  { color: 'bg-red-500', label: 'Academic Deadlines' },
  { color: 'bg-purple-500', label: 'Parent Events' },
  { color: 'bg-amber-500', label: 'Arts & Culture' },
]

export default function ParentCalendarPage() {
  const dates = Array.from({ length: 30 }, (_, i) => i + 1)

  return (
    <div className="p-4 space-y-5 pb-24">
      <h1 className="font-display font-bold text-xl text-on-surface">School Calendar</h1>

      {/* AI Banner */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 flex items-start gap-3">
        <Sparkles className="h-4 w-4 text-ai mt-0.5 shrink-0" />
        <div className="flex-1">
          <p className="text-sm font-semibold text-on-surface">Alex has 3 upcoming deadlines this week</p>
          <p className="text-xs text-on-surface-variant mt-0.5">Physics assignment due Sept 9 · Parent-Teacher Conference today · Football Finals Sept 7</p>
        </div>
        <button className="text-xs text-primary font-semibold shrink-0">View Schedule</button>
      </div>

      {/* Month Nav */}
      <div className="flex items-center justify-between">
        <button className="p-2 rounded-xl hover:bg-surface-low text-on-surface-variant">‹</button>
        <h2 className="font-display font-semibold text-on-surface">September 2024</h2>
        <button className="p-2 rounded-xl hover:bg-surface-low text-on-surface-variant">›</button>
      </div>

      {/* Calendar Grid */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
        <div className="grid grid-cols-7 border-b border-outline-variant">
          {DAYS.map(d => (
            <div key={d} className="text-center text-xs font-semibold text-on-surface-variant py-2">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {/* Sept 1 = Sunday (offset 6) */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`empty-${i}`} className="min-h-[60px] border-b border-r border-outline-variant p-1" />
          ))}
          {dates.map(d => (
            <div key={d} className={`min-h-[60px] border-b border-r border-outline-variant p-1 ${d === 9 ? 'bg-primary/5' : ''}`}>
              <p className={`text-xs font-semibold mb-0.5 ${d === 9 ? 'text-primary' : 'text-on-surface'}`}>{d}</p>
              <div className="space-y-0.5">
                {(EVENTS[d] || []).map(ev => (
                  <div key={ev.label} className={`${ev.color} rounded px-0.5 py-0.5`}>
                    <p className="text-white text-[8px] font-semibold truncate leading-tight">{ev.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3">
        {LEGEND.map(l => (
          <div key={l.label} className="flex items-center gap-1.5">
            <div className={`w-2.5 h-2.5 rounded-full ${l.color}`} />
            <span className="text-xs text-on-surface-variant">{l.label}</span>
          </div>
        ))}
      </div>

      {/* Calendar Sync */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Calendar Sync</h2>
        <div className="flex gap-2 flex-wrap">
          {['Google', 'Outlook', 'iCal'].map(s => (
            <Button key={s} size="sm" variant="outline" className="gap-1.5">📅 {s}</Button>
          ))}
        </div>
      </div>

      {/* Registration */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Registration</h2>
          <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">3 Pending</span>
        </div>
        <div className="space-y-2">
          {REGISTRATIONS.map(r => (
            <div key={r.label} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
              <span className="text-xl shrink-0">{r.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-on-surface">{r.label}</p>
                {r.info && <p className="text-xs text-on-surface-variant">{r.info}</p>}
              </div>
              <button className={`text-xs font-semibold px-3 py-1.5 rounded-xl shrink-0 ${r.ctaColor}`}>{r.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
