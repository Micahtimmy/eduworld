'use client'
import { Button } from '@/components/ui/button'

const EVENTS = [
  { title: 'Quantum Decoherence Seminar', host: 'MIT', attendees: '124 Scholars', status: 'Live Now', statusColor: 'bg-red-500' },
  { title: 'CRISPR Ethics Roundtable', host: 'Oxford', attendees: 'Starts in 2h', status: 'Upcoming', statusColor: 'bg-amber-500' },
  { title: 'Neural Network Topologies Huddle', host: 'Stanford', attendees: '8 Scholars', status: 'Active', statusColor: 'bg-green-500' },
]

const CITATIONS = [
  { title: 'Predictive Models in Atmospheric Decarbonization', tags: ['CLIMATE SCI', 'NATURE'], trend: '+342 citations today' },
  { title: 'Algorithmic Bias in Early Stage Diagnostic Tools', tags: ['BIOETHICS'], trend: '+189 citations today' },
]

const HUDDLES = [
  { icon: '👥', title: 'Post-Keynesian Economics Reading Group', host: 'LSE · 12 Scholars active', action: 'Request Join' },
  { icon: '📹', title: 'Guest Lecture: Dr. V. Aris', host: 'Caltech · 304 attending', action: 'Enter Auditorium' },
]

export default function ScholarNetworkingPage() {
  return (
    <div className="p-4 md:p-6 space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Global Research Network</h1>
          <p className="text-sm text-on-surface-variant">Real-time academic activity · Scholar Tier V1.0</p>
        </div>
        <Button size="sm" className="gap-2">⚡ Teleport to Next Live</Button>
      </div>

      {/* Live Events */}
      <div className="space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Live Events</h2>
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
          <div className="bg-slate-800 h-40 flex items-center justify-center relative">
            <span className="text-4xl">🌍</span>
            <div className="absolute top-3 left-3">
              <span className="text-[10px] bg-red-500 text-white px-2 py-0.5 rounded-full font-bold">🔴 LIVE NOW</span>
            </div>
          </div>
          <div className="p-4 space-y-3">
            {EVENTS.map(e => (
              <div key={e.title} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
                <div className={`w-2 h-2 rounded-full ${e.statusColor} shrink-0`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-on-surface">{e.title}</p>
                  <p className="text-xs text-on-surface-variant">{e.host} · {e.attendees}</p>
                </div>
                <Button size="sm" variant="outline" className="shrink-0 text-xs">Join</Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trending Citations */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Trending Citations</h2>
        <div className="space-y-3">
          {CITATIONS.map(c => (
            <div key={c.title} className="p-3 bg-surface-low rounded-xl space-y-1">
              <p className="text-sm font-semibold text-on-surface">{c.title}</p>
              <div className="flex items-center gap-2 flex-wrap">
                {c.tags.map(t => (
                  <span key={t} className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded font-bold">{t}</span>
                ))}
                <span className="text-xs text-green-600 font-semibold">↑ {c.trend}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Huddles */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Active Huddles</h2>
        <div className="space-y-3">
          {HUDDLES.map(h => (
            <div key={h.title} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
              <span className="text-2xl shrink-0">{h.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-on-surface">{h.title}</p>
                <p className="text-xs text-on-surface-variant">{h.host}</p>
              </div>
              <Button size="sm" className="shrink-0 text-xs">{h.action}</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
