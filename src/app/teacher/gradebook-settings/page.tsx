'use client'
import { Sparkles, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

const BENCHMARKS = [
  { icon: '🏆', label: 'Final Exam', badge: 'ADMIN SET', weight: '25%' },
  { icon: '📜', label: 'Midterm Assessment', badge: 'ADMIN SET', weight: '15%' },
]

const CATEGORIES = [
  { icon: '❓', label: 'Quizzes & Unit Tests', source: 'Department Head', subWeight: '40%', status: 'LOCKED' },
  { icon: '📝', label: 'Homework & Labs', source: 'Teacher Configured', subWeight: '30%', status: 'EDITABLE' },
  { icon: '👥', label: 'Participation & Projects', source: 'Teacher Configured', subWeight: '30%', status: 'EDITABLE' },
]

export default function TeacherGradebookSettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Grading Configuration</h1>
          <p className="text-sm text-on-surface-variant mt-1">Reconcile teacher assessments with admin benchmarks for accurate final grade calculations.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Revert to Global Defaults</Button>
          <Button size="sm">Save Configuration</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Weightage Reconciliation */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="font-display font-semibold text-on-surface">Weightage Reconciliation</h2>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">ACTIVE SEMESTER 2</span>
              <button className="text-on-surface-variant ml-auto">✏</button>
            </div>
            <div className="space-y-4">
              {[
                { icon: '📋', label: 'Teacher-Graded Assignments', value: 60 },
                { icon: '🛡', label: 'Admin-Set Benchmarks', value: 40 },
              ].map(w => (
                <div key={w.label} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span>{w.icon}</span>
                      <span className="text-sm font-semibold text-on-surface">{w.label}</span>
                    </div>
                    <span className="font-bold text-on-surface">{w.value}%</span>
                  </div>
                  <div className="h-2 bg-surface-high rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${w.value >= 50 ? 'bg-primary' : 'bg-primary/60'}`} style={{ width: `${w.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-ai/5 border border-ai/20 rounded-xl p-3 flex items-start gap-2">
              <Sparkles className="h-3.5 w-3.5 text-ai shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-xs text-on-surface-variant">Based on prior semester data, a 65/35 teacher-to-admin split yields the highest grade accuracy correlation.</p>
              </div>
              <Button size="sm" variant="outline" className="h-7 text-xs shrink-0">Apply Optimized Split</Button>
            </div>
          </div>

          {/* Mandatory Benchmarks */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-semibold text-on-surface">Mandatory Benchmarks</h2>
              <button className="text-xs text-primary hover:underline">View Benchmark Policy</button>
            </div>
            <div className="space-y-2">
              {BENCHMARKS.map(b => (
                <div key={b.label} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
                  <span className="text-lg">{b.icon}</span>
                  <span className="text-sm font-semibold text-on-surface flex-1">{b.label}</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">{b.badge}</span>
                  <span className="font-bold text-on-surface">{b.weight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Assignment Types */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-semibold text-on-surface">Teacher Assignment Types</h2>
              <Button size="sm" variant="outline" className="gap-1.5 h-7 text-xs"><Plus className="h-3 w-3" /> Add Category</Button>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-on-surface-variant border-b border-outline-variant">
                  <th className="text-left pb-3 font-semibold">Category</th>
                  <th className="text-left pb-3 font-semibold">Source</th>
                  <th className="text-center pb-3 font-semibold">Sub-Weight</th>
                  <th className="text-center pb-3 font-semibold">Status</th>
                  <th className="pb-3" />
                </tr>
              </thead>
              <tbody>
                {CATEGORIES.map(c => (
                  <tr key={c.label} className="border-b border-outline-variant last:border-0">
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <span>{c.icon}</span>
                        <span className="font-semibold text-on-surface">{c.label}</span>
                      </div>
                    </td>
                    <td className="py-3 text-xs text-on-surface-variant">{c.source}</td>
                    <td className="py-3 text-center font-bold text-on-surface">{c.subWeight}</td>
                    <td className="py-3 text-center">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${c.status === 'LOCKED' ? 'bg-surface-high text-on-surface-variant' : 'bg-green-100 text-green-700'}`}>{c.status}</span>
                    </td>
                    <td className="py-3 text-right"><button className="text-on-surface-variant hover:text-on-surface text-xs">⋮</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          {/* Total Assigned Weight */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 text-center space-y-2">
            <p className="text-xs text-on-surface-variant font-semibold">Total Assigned Weight</p>
            <p className="font-display font-bold text-5xl text-green-600">100%</p>
            <p className="text-xs text-on-surface-variant">Allocation valid for final grade calculation</p>
            <span className="text-green-500 text-2xl">✓</span>
          </div>

          {/* Grading Logic */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <h2 className="font-semibold text-sm text-on-surface">The EduWorld Grading Logic</h2>
            <p className="text-xs text-on-surface-variant">Hybrid gradebook balancing teacher-assessed rigor with institutional benchmarks for equitable outcomes.</p>
            <div className="space-y-1.5">
              {['Automatic late-penalty reconciliation', 'Standardized benchmark normalization', 'AI-powered anomalous grade detection'].map(f => (
                <div key={f} className="flex items-center gap-1.5">
                  <span className="text-green-500 text-xs">✓</span>
                  <span className="text-xs text-on-surface-variant">{f}</span>
                </div>
              ))}
            </div>
            <Button size="sm" variant="outline" className="w-full gap-1.5">▶ View Logic Demo</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
