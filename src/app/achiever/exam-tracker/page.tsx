'use client'
import { Sparkles, TrendingUp, Download, Plus, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LineChart } from '@/components/shared/charts/LineChart'
import { cn } from '@/lib/utils'

const SCORE_DATA = [
  { name: 'Sep', value: 52 },
  { name: 'Oct', value: 68 },
  { name: 'Nov', value: 62 },
  { name: 'Dec', value: 84 },
  { name: 'Jan', value: 89 },
]

const UPCOMING_EXAMS = [
  { subject: 'Physics A-Level', type: 'Paper 1: Core Mechanics', category: 'Official Board Exam', days: 14, target: '85%' },
  { subject: 'Maths Mock', type: 'Pure Mathematics 2', category: 'Internal Assessment', days: 28, target: '90%' },
]

const TOPICS = [
  { name: 'Core Mechanics', score: 92, note: 'Mastery achieved. Ready for advanced synthesis questions.', status: 'good' },
  { name: 'Wave Phenomena', score: 78, note: 'On track. Review diffraction patterns before exam.', status: 'ok' },
  { name: 'Electromagnetism', score: 45, note: "Critical area. Review Faraday's Law modules immediately.", status: 'bad' },
]

export default function AchieverExamTrackerPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Exam Tracker</h1>
          <p className="text-sm text-on-surface-variant mt-1">Progress monitoring, performance trends, and upcoming milestones.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2"><Download className="h-4 w-4" /> Export Data</Button>
          <Button size="sm" className="gap-2"><Plus className="h-4 w-4" /> Add Exam</Button>
        </div>
      </div>

      {/* AI Grade Predictor */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-ai" />
          <h2 className="font-display font-semibold text-on-surface">EduWorld AI Grade Predictor</h2>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-on-surface-variant max-w-md">Based on your mock exam velocity and topic mastery analysis, you're trending toward an <strong className="text-on-surface">A*</strong> in Physics. Focus on Electromagnetism to confirm the grade.</p>
          </div>
          <div className="text-center shrink-0 ml-6">
            <p className="font-display font-bold text-4xl text-ai">A*</p>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp className="h-3.5 w-3.5 text-green-600" />
              <span className="text-xs text-green-600 font-semibold">+5% confidence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Exams */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-semibold text-on-surface">Upcoming Exams</h2>
            <button className="text-xs text-primary hover:underline">View Full Calendar</button>
          </div>
          <div className="space-y-3">
            {UPCOMING_EXAMS.map(e => (
              <div key={e.subject} className="p-4 bg-surface-low rounded-xl space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-sm text-on-surface">{e.subject}</p>
                    <p className="text-xs text-on-surface-variant">{e.type}</p>
                  </div>
                  <span className={cn('text-xs px-2 py-0.5 rounded-full font-semibold shrink-0', e.days <= 14 ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700')}>
                    {e.days} Days
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-on-surface-variant">
                  <span>{e.category}</span>
                  <span>Target: <strong className="text-on-surface">{e.target}</strong></span>
                </div>
                <button className="text-xs text-primary hover:underline">Prep Plan →</button>
              </div>
            ))}
          </div>
        </div>

        {/* Score Analytics */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div>
            <h2 className="font-display font-semibold text-on-surface">Score Analytics</h2>
            <p className="text-xs text-on-surface-variant">Performance trajectory across all mock exams</p>
          </div>
          <div className="flex gap-2 mb-2">
            {['Physics', 'Mathematics', 'Chemistry'].map((t, i) => (
              <button key={t} className={cn('text-xs px-3 py-1.5 rounded-full font-medium transition-colors', i === 0 ? 'bg-primary text-white' : 'bg-surface-low text-on-surface-variant hover:bg-surface-high')}>{t}</button>
            ))}
          </div>
          <LineChart data={SCORE_DATA} height={160} />
        </div>
      </div>

      {/* Physics Topic Breakdown */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Physics: Topic Breakdown</h2>
          <button className="text-xs text-primary hover:underline">Details →</button>
        </div>
        <div className="space-y-3">
          {TOPICS.map(t => (
            <div key={t.name} className={cn('p-4 rounded-xl border', t.status === 'bad' ? 'bg-red-50 border-red-200' : t.status === 'ok' ? 'bg-surface-low border-outline-variant' : 'bg-green-50 border-green-200')}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {t.status === 'bad' && <AlertTriangle className="h-4 w-4 text-red-500 shrink-0" />}
                  <p className="text-sm font-semibold text-on-surface">{t.name}</p>
                </div>
                <span className={cn('font-bold text-sm', t.status === 'bad' ? 'text-red-600' : t.status === 'ok' ? 'text-amber-600' : 'text-green-600')}>{t.score}%</span>
              </div>
              <div className="h-1.5 bg-surface-high rounded-full overflow-hidden mb-2">
                <div className={cn('h-full rounded-full', t.status === 'bad' ? 'bg-red-500' : t.status === 'ok' ? 'bg-amber-500' : 'bg-green-500')} style={{ width: `${t.score}%` }} />
              </div>
              <p className="text-xs text-on-surface-variant">{t.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
