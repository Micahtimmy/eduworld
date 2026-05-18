'use client'
import { Sparkles, TrendingUp, AlertTriangle, ChevronRight } from 'lucide-react'
import { LineChart } from '@/components/shared/charts/LineChart'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const EXAMS = [
  { subject: 'Physics A-Level', paper: 'Paper 1: Core Mechanics', type: 'Official Board Exam', countdown: '14 Days', target: '85%', urgency: 'high' },
  { subject: 'Maths Mock', paper: 'Pure Mathematics 2', type: 'Internal Assessment', countdown: '28 Days', target: '90%', urgency: 'medium' },
]

const CHART_DATA = [
  { name: 'Sep', value: 52 },
  { name: 'Oct', value: 68 },
  { name: 'Nov', value: 62 },
  { name: 'Dec', value: 84 },
  { name: 'Jan', value: 89 },
]

const TOPICS = [
  { name: 'Core Mechanics', score: 92, status: 'Mastery achieved. Ready for advanced synthesis questions.', color: 'bg-green-500' },
  { name: 'Wave Phenomena', score: 78, status: 'Good understanding. Continue practice.', color: 'bg-blue-500' },
  { name: 'Electromagnetism', score: 45, status: 'Critical area. Review Faraday\'s Law modules before next mock.', color: 'bg-red-500', critical: true },
]

export default function AchieverExamsPage() {
  return (
    <div className="p-4 space-y-5">
      <h1 className="font-display font-bold text-2xl text-on-surface">Exam Tracker</h1>
      <p className="text-sm text-on-surface-variant">Monitor progress, performance trends, and upcoming milestones.</p>

      {/* AI Grade Predictor */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 flex items-start gap-3">
        <Sparkles className="h-5 w-5 text-ai shrink-0" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-on-surface">EduWorld AI Grade Predictor</p>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> +5% confidence
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5">Trending toward A* in Physics. Recommend focusing on Electromagnetism before next mock.</p>
        </div>
        <div className="text-right">
          <p className="font-display font-bold text-2xl text-primary">A*</p>
          <p className="text-xs text-on-surface-variant">Predicted</p>
        </div>
      </div>

      {/* Upcoming Exams */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Upcoming Exams</h2>
        {EXAMS.map(e => (
          <div key={e.paper} className={cn('border rounded-xl p-4 space-y-2', e.urgency === 'high' ? 'border-red-200 bg-red-50 dark:bg-red-950/10' : 'border-outline-variant')}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-on-surface">{e.subject}</p>
                <p className="text-xs text-on-surface-variant">{e.paper}</p>
                <p className="text-xs text-on-surface-variant mt-0.5">{e.type}</p>
              </div>
              <div className="text-right">
                <p className={cn('font-bold text-sm', e.urgency === 'high' ? 'text-red-600' : 'text-amber-600')}>{e.countdown}</p>
                <p className="text-xs text-on-surface-variant">Target: {e.target}</p>
              </div>
            </div>
            <button className="text-xs text-primary hover:underline">Prep Plan →</button>
          </div>
        ))}
        <button className="text-xs text-primary hover:underline">View Full Calendar →</button>
      </div>

      {/* Score Analytics */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Score Analytics</h2>
        </div>
        <p className="text-xs text-on-surface-variant">Performance trajectory across all mock exams</p>
        <div className="flex gap-2 mb-3">
          {['Physics', 'Mathematics', 'Chemistry'].map((t, i) => (
            <button key={t} className={cn('px-3 py-1 rounded-full text-xs font-medium transition-colors', i === 0 ? 'bg-primary text-white' : 'border border-outline-variant text-on-surface-variant hover:bg-surface-low')}>
              {t}
            </button>
          ))}
        </div>
        <LineChart data={CHART_DATA} height={160} />
      </div>

      {/* Topic Breakdown */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Physics: Topic Breakdown</h2>
          <button className="text-xs text-primary hover:underline">Details →</button>
        </div>
        {TOPICS.map(t => (
          <div key={t.name} className={cn('space-y-1.5 p-3 rounded-xl', t.critical ? 'bg-red-50 dark:bg-red-950/10 border border-red-200' : 'bg-surface-low')}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {t.critical && <AlertTriangle className="h-3.5 w-3.5 text-red-500" />}
                <p className="text-sm font-semibold text-on-surface">{t.name}</p>
              </div>
              <span className={cn('text-xs font-bold px-2 py-0.5 rounded-full text-white', t.color)}>{t.score}%</span>
            </div>
            <div className="h-1.5 bg-surface-high rounded-full overflow-hidden">
              <div className={cn('h-full rounded-full', t.color)} style={{ width: `${t.score}%` }} />
            </div>
            <p className="text-xs text-on-surface-variant">{t.status}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
