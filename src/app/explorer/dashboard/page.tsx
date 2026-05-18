'use client'
import { Sparkles, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SUBJECTS = [
  { icon: '🔢', label: 'Math', level: 4, pct: 80 },
  { icon: '🔬', label: 'Science', level: 3, pct: 45 },
  { icon: '📚', label: 'English', level: 5, pct: 92 },
  { icon: '🎨', label: 'Art', level: 2, pct: 15 },
]

export default function ExplorerDashboardPage() {
  return (
    <div className="p-4 space-y-4">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary/20 to-ai/10 rounded-2xl p-4">
        <p className="font-display font-bold text-xl text-on-surface">Good morning, Explorer!</p>
        <p className="text-xs text-on-surface-variant mt-1">Keep up the great momentum on your learning journey!</p>
        <div className="flex items-center gap-1.5 mt-2">
          <span className="text-lg">🔥</span>
          <span className="text-sm font-bold text-amber-600">5 Day Streak!</span>
        </div>
      </div>

      {/* Quest Card */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-2">
        <div className="flex items-center gap-1.5">
          <Sparkles className="h-4 w-4 text-ai" />
          <span className="text-xs font-bold text-ai uppercase">Ready for today&apos;s quest?</span>
        </div>
        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">Science</span>
        <p className="text-xs text-on-surface-variant">Recommended for you</p>
        <p className="font-display font-bold text-on-surface">The Water Cycle</p>
        <p className="text-xs text-on-surface-variant">Discover how water moves through clouds and rain to keep our planet alive!</p>
        <Button className="w-full">Start Mission</Button>
      </div>

      {/* Continue Card */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm">🦁</span>
          <p className="text-xs font-semibold text-on-surface-variant">Continue Playing</p>
        </div>
        <p className="font-semibold text-on-surface">Fraction Safari</p>
        <div className="flex items-center gap-2 my-2">
          <div className="flex-1 h-2 bg-surface-high rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: '60%' }} />
          </div>
          <span className="text-xs font-bold text-on-surface">60%</span>
        </div>
        <p className="text-xs text-on-surface-variant mb-3">Help find the missing animal fractions before time runs out!</p>
        <Button variant="outline" className="w-full gap-2"><Play className="h-3.5 w-3.5" /> Resume</Button>
      </div>

      {/* Subject Hubs */}
      <div>
        <h2 className="font-display font-semibold text-on-surface mb-3">Subject Hubs</h2>
        <div className="grid grid-cols-2 gap-3">
          {SUBJECTS.map(s => (
            <div key={s.label} className="bg-surface-lowest rounded-2xl border border-outline-variant p-3 space-y-2 cursor-pointer hover:border-primary/50">
              <span className="text-2xl">{s.icon}</span>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm text-on-surface">{s.label}</p>
                <span className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded-full font-semibold">Lvl {s.level}</span>
              </div>
              <div className="h-1.5 bg-surface-high rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
