'use client'
import { Play, CheckCircle, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const ASSIGNMENTS = [
  { icon: '🔬', title: 'Solar System Model', status: 'pending', action: 'Start Assignment' },
  { icon: '📜', title: 'History Essay', status: 'graded', score: 95, action: 'View Feedback' },
  { icon: '🔢', title: 'Math Quiz: Fractions', status: 'submitted', action: null },
  { icon: '📚', title: 'Book Report', status: 'locked', unlock: 'Unlocks Friday', dep: 'Finish Math Quiz to unlock', action: null },
]

export default function ExplorerAssignmentsPage() {
  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-4 text-white">
        <p className="text-xs font-semibold opacity-75">Explorer Level 1</p>
        <h1 className="font-display font-bold text-2xl mt-1">Assignment Hub 🚀</h1>
        <p className="text-sm opacity-90 mt-1">Complete assignments to earn stars and level up!</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-1">
        {['Pending', 'Due Today'].map((t, i) => (
          <button key={t} className={cn('px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-1', i === 0 ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-low')}>
            {i === 0 && '⏰'} {t}
          </button>
        ))}
      </div>

      {/* Assignment Cards */}
      <div className="space-y-3">
        {ASSIGNMENTS.map(a => (
          <div key={a.title} className={cn('bg-surface-lowest rounded-2xl border p-4 flex items-center gap-4', a.status === 'locked' ? 'border-outline-variant opacity-60' : 'border-outline-variant')}>
            <div className={cn('w-12 h-12 rounded-2xl flex items-center justify-center text-2xl', a.status === 'graded' ? 'bg-green-100' : a.status === 'locked' ? 'bg-surface-high' : 'bg-primary/10')}>
              {a.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm text-on-surface">{a.title}</p>
              {a.status === 'graded' && (
                <div className="flex items-center gap-1 mt-0.5">
                  <CheckCircle className="h-3.5 w-3.5 text-green-600" />
                  <span className="text-xs text-green-600 font-semibold">Graded · {a.score} ⭐</span>
                </div>
              )}
              {a.status === 'submitted' && (
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-xs text-amber-600 font-semibold">⏳ Waiting for Grade</span>
                </div>
              )}
              {a.status === 'locked' && (
                <div className="space-y-0.5 mt-0.5">
                  <p className="text-xs text-on-surface-variant">{a.unlock}</p>
                  <p className="text-xs text-on-surface-variant">{a.dep}</p>
                </div>
              )}
            </div>
            {a.action && (
              <Button size="sm" className={cn('gap-1.5', a.status === 'graded' ? 'variant-outline' : '')} variant={a.status === 'graded' ? 'outline' : 'default'}>
                {a.status === 'pending' && <Play className="h-3.5 w-3.5" />}
                {a.action}
              </Button>
            )}
            {a.status === 'locked' && <Lock className="h-5 w-5 text-on-surface-variant" />}
          </div>
        ))}
      </div>
    </div>
  )
}
