'use client'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AchieverLessonPage() {
  return (
    <div className="p-4 space-y-5 pb-24">
      <div className="flex items-center gap-3">
        <button className="text-on-surface-variant hover:text-on-surface text-sm">← Advanced Calculus</button>
        <span className="text-on-surface-variant">/</span>
        <span className="text-sm text-on-surface-variant">Module 4: Integrals</span>
        <div className="ml-auto flex items-center gap-1.5 bg-xp/10 text-xp px-2 py-0.5 rounded-full">
          <span className="text-xs">🏅</span>
          <span className="text-xs font-bold">1,240 XP</span>
        </div>
      </div>

      {/* Video Player */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
        <div className="relative bg-slate-800 aspect-video flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900" />
          <button className="relative z-10 w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center">
            <span className="text-white text-2xl ml-1">▶</span>
          </button>
          <div className="absolute bottom-3 left-3 right-3">
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: '33%' }} />
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-white/60 text-xs">12:45</span>
              <span className="text-white/60 text-xs">38:20</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lesson Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">Achiever Tier</span>
        </div>
        <h1 className="font-display font-bold text-xl text-on-surface">4.2 Fundamental Theorem of Calculus</h1>
        <p className="text-sm text-on-surface-variant">Prof. Sarah Jenkins · Recorded 2 days ago</p>
        <Button size="sm" variant="outline" className="gap-1.5">🎥 Start Huddle</Button>
      </div>

      {/* AI Summary */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 space-y-2">
        <div className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-ai" />
          <p className="text-xs font-semibold text-on-surface">EduWorld AI Key Takeaways</p>
        </div>
        <ul className="space-y-1">
          {[
            'FTC links differentiation and integration as inverse operations.',
            'Part 1: every continuous function has an antiderivative.',
            'Part 2: definite integrals computed using antiderivatives.',
          ].map(t => (
            <li key={t} className="flex items-start gap-2 text-xs text-on-surface-variant">
              <span className="text-ai shrink-0 mt-0.5">•</span>
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        {['Course Guide', 'My Notes', 'Chapters'].map((tab, i) => (
          <button key={tab} className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${i === 0 ? 'bg-primary text-white' : 'bg-surface-low text-on-surface-variant hover:bg-surface-high'}`}>{tab}</button>
        ))}
      </div>

      {/* Overview */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Overview</h2>
        <p className="text-sm text-on-surface-variant">The Fundamental Theorem of Calculus bridges differentiation and integration. Both Part 1 and Part 2 are covered in depth in this module.</p>

        <div className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
          <span className="text-xl">📊</span>
          <div>
            <p className="text-sm font-semibold text-on-surface">Interactive Figure 4.1</p>
            <p className="text-xs text-on-surface-variant">Tap to interact</p>
          </div>
        </div>
      </div>

      {/* Quick Note */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-on-surface-variant">✏</span>
          <p className="text-sm font-semibold text-on-surface">Quick Note</p>
        </div>
        <div className="flex gap-2">
          <input type="text" placeholder="Jot something down..." className="flex-1 bg-surface-low rounded-xl px-3 py-2 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/30" />
          <Button size="sm">→</Button>
        </div>
      </div>
    </div>
  )
}
