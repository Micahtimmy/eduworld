'use client'
import { Timer, Zap, ChevronRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const TOPICS = [
  { subject: 'Calculus AB', score: 92, note: 'Strong proficiency. Focus on optimization problems.' },
  { subject: 'Physics C', score: 68, note: 'Needs review. AI suggests mechanics drills.' },
  { subject: 'Chemistry', score: 85, note: 'Solid progress. Continue with current pace.' },
]

export default function AchieverDashboardPage() {
  return (
    <div className="p-4 space-y-4">
      {/* Greeting */}
      <div>
        <h1 className="font-display font-bold text-2xl text-on-surface">Welcome back, Alex</h1>
      </div>

      {/* AI Status Banner */}
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-3 flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-primary shrink-0" />
        <p className="text-sm text-on-surface">Your AI readiness score is trending up <strong>4%</strong> this week.</p>
      </div>

      {/* Cards Row */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-2">
          <div className="flex items-center gap-2">
            <Timer className="h-4 w-4 text-primary" />
            <p className="text-xs font-semibold text-on-surface-variant">Next Milestone</p>
          </div>
          <p className="font-semibold text-on-surface">Advanced Calculus</p>
          <p className="text-xs text-on-surface-variant">14 days left</p>
          <button className="text-primary"><ChevronRight className="h-4 w-4" /></button>
        </div>
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-2">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-amber-500" />
            <p className="text-xs font-semibold text-on-surface-variant">Daily Energy Goal</p>
          </div>
          <p className="font-semibold text-on-surface">850 / 1000 XP</p>
          <div className="h-1.5 bg-surface-high rounded-full overflow-hidden">
            <div className="h-full bg-amber-400 rounded-full" style={{ width: '85%' }} />
          </div>
          <Button size="sm" className="h-6 text-xs w-full">Claim Bonus</Button>
        </div>
      </div>

      {/* Topic Mastery */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display font-semibold text-on-surface">Topic Mastery Readiness</h2>
            <p className="text-xs text-on-surface-variant">AI-driven confidence scores based on recent practice.</p>
          </div>
          <button className="text-xs text-primary hover:underline flex items-center gap-1">View Details <ChevronRight className="h-3 w-3" /></button>
        </div>
        <div className="space-y-3">
          {TOPICS.map(t => (
            <div key={t.subject}>
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-semibold text-on-surface">{t.subject}</p>
                <span className={`text-sm font-bold ${t.score >= 90 ? 'text-green-600' : t.score >= 80 ? 'text-primary' : 'text-amber-600'}`}>{t.score}%</span>
              </div>
              <div className="h-2 bg-surface-high rounded-full overflow-hidden mb-1">
                <div className={`h-full rounded-full ${t.score >= 90 ? 'bg-green-500' : t.score >= 80 ? 'bg-primary' : 'bg-amber-400'}`} style={{ width: `${t.score}%` }} />
              </div>
              <p className="text-xs text-on-surface-variant">{t.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAB */}
      <div className="fixed bottom-20 right-4">
        <button className="w-14 h-14 rounded-full bg-primary shadow-lg flex items-center justify-center text-white">
          <Sparkles className="h-6 w-6" />
        </button>
        <p className="text-xs text-center mt-1 text-on-surface-variant">AI Session</p>
      </div>
    </div>
  )
}
