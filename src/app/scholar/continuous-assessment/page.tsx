'use client'
import { Sparkles, TrendingUp, AlertTriangle, ChevronRight } from 'lucide-react'

const COMPONENTS = [
  { name: 'Midterm Examinations', score: 85, total: 100 },
  { name: 'Quizzes & Assignments', score: 92, total: 100 },
  { name: 'Class Participation', score: 100, total: 100 },
  { name: 'Laboratory Practicals', score: 68, total: 100, warning: true },
]

const RECENT = [
  { icon: '📝', title: 'Algorithms Quiz 3', date: 'Oct 12 2024', grade: 'A (94%)' },
  { icon: '📄', title: 'Literature Essay Draft', date: 'Oct 10 2024', grade: 'B+ (88%)' },
]

export default function ScholarContinuousAssessmentPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="font-display font-bold text-2xl text-on-surface">Continuous Assessment</h1>
        <p className="text-sm text-on-surface-variant mt-1">Aggregate summary and projected standing for this academic term.</p>
      </div>

      {/* AI Projection */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-4 w-4 text-ai" />
          <p className="font-semibold text-sm text-ai">EduWorld AI Projection</p>
        </div>
        <p className="text-sm text-on-surface-variant">You are on a <strong className="text-on-surface">High Distinction</strong> trajectory. Your practicals performance is the primary factor to address before finals.</p>
        <div className="flex items-center gap-1.5 mt-2">
          <TrendingUp className="h-3.5 w-3.5 text-green-500" />
          <span className="text-xs font-semibold text-green-600">Positive trajectory</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Current Standing */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-6 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Current Standing</h2>
          <div className="text-center py-4">
            <p className="font-display font-bold text-5xl text-on-surface">82%</p>
            <p className="text-sm font-semibold text-on-surface-variant mt-1">Overall CA</p>
            <div className="mt-3 inline-flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1.5 rounded-full">
              <TrendingUp className="h-3.5 w-3.5" />
              <span className="text-xs font-semibold">Projected Tier: First Class Honors</span>
            </div>
          </div>
        </div>

        {/* Component Breakdown */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-semibold text-on-surface">Component Breakdown</h2>
            <button className="text-xs text-primary hover:underline flex items-center gap-1">View Details <ChevronRight className="h-3 w-3" /></button>
          </div>
          <div className="space-y-4">
            {COMPONENTS.map(c => (
              <div key={c.name} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-on-surface-variant flex items-center gap-1">
                    {c.warning && <AlertTriangle className="h-3 w-3 text-amber-500" />}
                    {c.name}
                  </span>
                  <span className="font-bold text-on-surface">{c.score}/{c.total}</span>
                </div>
                <div className="h-2 bg-surface-high rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${c.warning ? 'bg-amber-500' : 'bg-primary'}`} style={{ width: `${c.score}%` }} />
                </div>
                {c.warning && <p className="text-xs text-amber-600 font-semibold">⚠ Action required — practicals are below target</p>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Assessments */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Recent Assessments</h2>
        <div className="space-y-3">
          {RECENT.map(r => (
            <div key={r.title} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
              <span className="text-xl">{r.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-on-surface">{r.title}</p>
                <p className="text-xs text-on-surface-variant">{r.date}</p>
              </div>
              <span className="text-sm font-bold text-green-600">{r.grade}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
