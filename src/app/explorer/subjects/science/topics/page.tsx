'use client'
import { Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

const UNITS = [
  { icon: '🌍', title: "Earth's Layers", status: 'completed', detail: null },
  { icon: '🚀', title: 'The Solar System', status: 'active', detail: 'Lesson 3 of 5', pct: 60 },
  { icon: '⚗️', title: 'Chemistry Basics', status: 'locked', detail: 'Finish Unit 2 First' },
  { icon: '🌿', title: 'Ecosystems', status: 'locked', detail: 'Locked' },
]

export default function ExplorerScienceTopicsPage() {
  return (
    <div className="p-4 space-y-4">
      {/* Subject Header */}
      <div className="bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-2xl p-5 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">Subject Mastery</span>
        </div>
        <h1 className="font-display font-bold text-2xl text-on-surface">Science Adventures</h1>
        <p className="text-xs text-on-surface-variant">Explore the universe, from microscopic cells to vast galaxies.</p>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-lg">🏅</span>
            <span className="text-xs font-bold text-on-surface">Level 4 Scholar</span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-on-surface-variant">XP Progress</span>
              <span className="font-semibold text-on-surface">450 / 600 XP</span>
            </div>
            <div className="h-2 bg-white/30 rounded-full overflow-hidden">
              <div className="h-full bg-xp rounded-full" style={{ width: '75%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Units */}
      <div className="space-y-3">
        {UNITS.map((u, i) => (
          <div key={u.title} className={`bg-surface-lowest rounded-2xl border p-4 ${u.status === 'locked' ? 'opacity-60 border-outline-variant' : 'border-outline-variant'}`}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{u.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm text-on-surface">Unit {i + 1}: {u.title}</p>
                  {u.status === 'completed' && <span className="text-green-500 text-xs">✓ Completed</span>}
                  {u.status === 'locked' && <span className="text-xs text-on-surface-variant">🔒</span>}
                </div>
                {u.detail && u.status === 'active' && (
                  <p className="text-xs text-on-surface-variant">{u.detail}</p>
                )}
                {u.detail && u.status === 'locked' && (
                  <p className="text-xs text-on-surface-variant">{u.detail}</p>
                )}
                {u.pct !== undefined && (
                  <div className="mt-2 h-1.5 bg-surface-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${u.pct}%` }} />
                  </div>
                )}
              </div>
              {u.status === 'completed' && <Button variant="outline" size="sm" className="h-7 text-xs">Review</Button>}
              {u.status === 'active' && <Button size="sm" className="h-7 text-xs gap-1"><Play className="h-3 w-3" /> Continue</Button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
