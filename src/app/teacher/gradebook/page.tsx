'use client'
import { Sparkles, Plus, MoreVertical, Lock, Edit3, CheckCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const BENCHMARKS = [
  { icon: '🏆', label: 'Final Exam', badge: 'ADMIN SET', weight: '25%' },
  { icon: '📜', label: 'Midterm Assessment', badge: 'ADMIN SET', weight: '15%' },
]

const CATEGORIES = [
  { icon: '📝', name: 'Quizzes & Unit Tests', source: 'Department Head', weight: '40%', status: 'LOCKED', locked: true },
  { icon: '🧪', name: 'Homework & Labs', source: 'Teacher Configured', weight: '30%', status: 'EDITABLE', locked: false },
  { icon: '🤝', name: 'Participation & Projects', source: 'Teacher Configured', weight: '30%', status: 'EDITABLE', locked: false },
]

const FEATURES = [
  'Automatic reconciliation of late penalties',
  'Standardized benchmark normalization',
  'AI-powered outlier detection for anomalous grades',
]

export default function GradebookPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Grading Configuration</h1>
          <p className="text-sm text-on-surface-variant mt-1">Reconcile teacher assessments and admin benchmarks to define final grade weightings.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Revert to Global Defaults</Button>
          <Button size="sm">Save Configuration</Button>
        </div>
      </div>

      {/* Weightage Reconciliation */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-display font-semibold text-on-surface">Weightage Reconciliation</h2>
            <Badge variant="secondary" size="sm">ACTIVE SEMESTER 2</Badge>
          </div>
          <button className="text-on-surface-variant hover:text-on-surface"><Edit3 className="h-4 w-4" /></button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-outline-variant rounded-xl p-4 space-y-2">
            <p className="text-sm font-semibold text-on-surface">Teacher-Graded</p>
            <p className="text-xs text-on-surface-variant">Quizzes, homework, and participation</p>
            <p className="font-display font-bold text-2xl text-primary">60%</p>
          </div>
          <div className="border border-outline-variant rounded-xl p-4 space-y-2">
            <p className="text-sm font-semibold text-on-surface">Admin Benchmarks</p>
            <p className="text-xs text-on-surface-variant">Standardized midterms and final exams</p>
            <p className="font-display font-bold text-2xl text-primary">40%</p>
          </div>
        </div>
        <div className="bg-ai/5 border border-ai/20 rounded-xl p-4 space-y-2">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-ai" />
            <p className="text-sm font-semibold text-on-surface">EduWorld AI Suggestion</p>
          </div>
          <p className="text-xs text-on-surface-variant">A 65/35 split is recommended based on your class data — this reduces grading variance and shows a 4% increase in standardized score alignment across similar cohorts.</p>
          <Button size="sm" variant="outline" className="text-xs">Apply Optimized Split</Button>
        </div>
      </div>

      {/* Mandatory Benchmarks */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <h2 className="font-display font-semibold text-on-surface">Mandatory Benchmarks</h2>
        <div className="space-y-3">
          {BENCHMARKS.map(b => (
            <div key={b.label} className="flex items-center justify-between p-3 rounded-xl bg-surface-low">
              <div className="flex items-center gap-3">
                <span className="text-xl">{b.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-on-surface">{b.label}</p>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{b.badge}</span>
                </div>
              </div>
              <p className="font-display font-bold text-lg text-on-surface">{b.weight}</p>
            </div>
          ))}
        </div>
        <button className="text-xs text-primary hover:underline">View Benchmark Policy →</button>
      </div>

      {/* Total Weight */}
      <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 rounded-2xl p-4 flex items-center gap-4">
        <CheckCircle className="h-6 w-6 text-green-600" />
        <div>
          <p className="font-display font-bold text-3xl text-green-700">100%</p>
          <p className="text-xs text-green-600">Allocation valid for final grade calculation</p>
        </div>
      </div>

      {/* Assignment Types Table */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-semibold text-on-surface">Teacher Assignment Types</h2>
          <Button size="sm" variant="outline" className="gap-2">
            <Plus className="h-4 w-4" /> Add Category
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-outline-variant">
                {['Category', 'Source', 'Sub-Weight', 'Status', ''].map(h => (
                  <th key={h} className="text-left pb-2 text-xs font-semibold uppercase text-on-surface-variant pr-4 last:pr-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {CATEGORIES.map(c => (
                <tr key={c.name} className="hover:bg-surface-low transition-colors">
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{c.icon}</span>
                      <p className="text-sm font-semibold text-on-surface">{c.name}</p>
                    </div>
                  </td>
                  <td className="py-3 pr-4 text-xs text-on-surface-variant">{c.source}</td>
                  <td className="py-3 pr-4 font-semibold text-sm text-on-surface">{c.weight}</td>
                  <td className="py-3 pr-4">
                    <div className={cn('flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full w-fit', c.locked ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700')}>
                      {c.locked && <Lock className="h-3 w-3" />}
                      {c.status}
                    </div>
                  </td>
                  <td className="py-3">
                    <button className="p-1 rounded-lg hover:bg-surface-low text-on-surface-variant"><MoreVertical className="h-4 w-4" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grading Logic */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <h2 className="font-display font-semibold text-on-surface">The EduWorld Grading Logic</h2>
        <p className="text-sm text-on-surface-variant">EduWorld's hybrid gradebook gives teachers flexibility while maintaining standardization through admin benchmarks. The system ensures student growth is reflected accurately.</p>
        <div className="space-y-2">
          {FEATURES.map(f => (
            <div key={f} className="flex items-center gap-2 text-sm text-on-surface">
              <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
              {f}
            </div>
          ))}
        </div>
        <button className="flex items-center gap-2 text-sm text-primary hover:underline font-medium">
          ▶ View Logic Demonstration
        </button>
      </div>
    </div>
  )
}
