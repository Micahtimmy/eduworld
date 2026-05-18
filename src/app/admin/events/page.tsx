'use client'
import { Button } from '@/components/ui/button'

const EVENTS: Record<number, { label: string; color: string }[]> = {
  1: [{ label: 'Public Holiday', color: 'bg-slate-400' }],
  6: [{ label: 'Term 3 Starts', color: 'bg-green-500' }],
  8: [{ label: 'Staff In-Service', color: 'bg-blue-500' }],
  14: [{ label: 'Exam Period: Yr 12', color: 'bg-red-500' }, { label: 'PTC: Humanities', color: 'bg-purple-500' }],
  15: [{ label: 'Exam Period: Yr 12', color: 'bg-red-500' }],
  16: [{ label: 'Exam Period: Yr 12', color: 'bg-red-500' }, { label: 'Sports Day Gala', color: 'bg-amber-500' }],
}

const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

const SYNC = [
  { label: 'Teacher Portal', status: 'LIVE', color: 'text-green-600', dot: 'bg-green-500' },
  { label: 'Student App', status: 'PENDING', color: 'text-amber-600', dot: 'bg-amber-500' },
  { label: 'Parent Connect', status: 'PENDING', color: 'text-amber-600', dot: 'bg-amber-500' },
]

const CLASHES = [
  {
    icon: '⚠',
    title: 'Double Booking Detected',
    detail: 'May 14: Yr 12 Final Exams overlaps with Humanities Parent-Teacher Conference in West Wing.',
    actions: ['Reschedule', 'Ignore'],
  },
  {
    icon: '📅',
    title: 'Resource Conflict',
    detail: 'May 16: Sports Day requires the Athletics Ground, currently booked for Science Fieldwork.',
    actions: ['Fix Booking'],
  },
]

export default function AdminEventsPage() {
  const dates = Array.from({ length: 31 }, (_, i) => i + 1)

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-6xl mx-auto">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Master Institutional Calendar</h1>
          <p className="text-sm text-on-surface-variant mt-1">Academic Year 2024/25 · Session A</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <div className="flex border border-outline-variant rounded-xl overflow-hidden text-xs">
            {['Month', 'Week', 'Day'].map((v, i) => (
              <button key={v} className={`px-3 py-1.5 font-semibold ${i === 0 ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-low'}`}>{v}</button>
            ))}
          </div>
          <Button size="sm" className="gap-1">📢 Publish to All Tiers</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Calendar */}
        <div className="lg:col-span-2 bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-outline-variant">
            <button className="text-on-surface-variant">‹</button>
            <h2 className="font-display font-semibold text-on-surface">May 2025</h2>
            <button className="text-on-surface-variant">›</button>
          </div>
          <div className="grid grid-cols-7 border-b border-outline-variant">
            {DAYS.map(d => (
              <div key={d} className="text-center text-[10px] font-semibold text-on-surface-variant py-2">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {/* May 1 = Thursday, offset 3 */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={`e${i}`} className="min-h-[72px] border-b border-r border-outline-variant p-1" />
            ))}
            {dates.map(d => (
              <div key={d} className="min-h-[72px] border-b border-r border-outline-variant p-1">
                <p className="text-[10px] font-semibold text-on-surface mb-0.5">{d}</p>
                <div className="space-y-0.5">
                  {(EVENTS[d] || []).map(ev => (
                    <div key={ev.label} className={`${ev.color} rounded px-0.5`}>
                      <p className="text-white text-[8px] font-semibold truncate leading-tight">{ev.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panels */}
        <div className="space-y-4">
          {/* Clash Detection */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <div className="flex items-center gap-2">
              <h2 className="font-display font-semibold text-on-surface">Clash Detection</h2>
              <span className="text-[10px] bg-ai/10 text-ai px-2 py-0.5 rounded-full font-bold">AI AUDIT</span>
            </div>
            <div className="space-y-3">
              {CLASHES.map(c => (
                <div key={c.title} className="bg-amber-50 border border-amber-200 rounded-xl p-3 space-y-2">
                  <p className="text-xs font-semibold text-on-surface">{c.icon} {c.title}</p>
                  <p className="text-[10px] text-on-surface-variant">{c.detail}</p>
                  <div className="flex gap-2">
                    {c.actions.map(a => (
                      <Button key={a} size="sm" variant="outline" className="h-6 text-[10px]">{a}</Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sync Status */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <h2 className="font-display font-semibold text-on-surface">Sync Status</h2>
            <div className="space-y-2">
              {SYNC.map(s => (
                <div key={s.label} className="flex items-center gap-3 p-2.5 bg-surface-low rounded-xl">
                  <div className={`w-2 h-2 rounded-full ${s.dot} shrink-0`} />
                  <span className="text-xs text-on-surface flex-1">{s.label}</span>
                  <span className={`text-xs font-bold ${s.color}`}>{s.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Global Sync CTA */}
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4 text-center space-y-2">
            <p className="text-sm font-semibold text-on-surface">Global Sync Ready</p>
            <p className="text-xs text-on-surface-variant">Click to broadcast updates to all tiers</p>
            <Button className="w-full">📢 Broadcast Now</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
