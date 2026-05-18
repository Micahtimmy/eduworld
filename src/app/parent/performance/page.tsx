'use client'
import { Sparkles } from 'lucide-react'
import { RadarChart } from '@/components/shared/charts/RadarChart'
import { BarChart } from '@/components/shared/charts/BarChart'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const RADAR_DATA = [
  { subject: 'Mathematics', value: 92 },
  { subject: 'Science', value: 88 },
  { subject: 'Language', value: 75 },
  { subject: 'History', value: 74 },
  { subject: 'Arts', value: 65 },
]

const GRADE_HISTORY = [
  { name: 'Sep', value: 82 },
  { name: 'Oct', value: 85 },
  { name: 'Nov', value: 80 },
  { name: 'Dec', value: 94 },
  { name: 'Jan', value: 89 },
  { name: 'Feb', value: 91 },
]

const MODULES = [
  { name: 'Organic Chemistry', pct: 85, color: 'bg-green-500' },
  { name: 'Modern World History', pct: 42, color: 'bg-amber-500' },
  { name: 'Multivariable Calculus', pct: 61, color: 'bg-blue-500' },
  { name: 'Creative Composition', pct: 12, color: 'bg-red-500' },
]

const ASSESSMENTS = [
  { date: 'Oct 24, 2023', subject: 'Science', assignment: 'Chemical Kinetics Lab Report', grade: 'A+', gradeBg: 'bg-green-100 text-green-700', feedback: 'Exceptional critical analysis throughout.' },
  { date: 'Oct 21, 2023', subject: 'Mathematics', assignment: 'Advanced Integral Calculus Test', grade: 'A', gradeBg: 'bg-green-100 text-green-700', feedback: 'Strong methodology, minor calculation errors.' },
  { date: 'Oct 15, 2023', subject: 'English', assignment: 'Literary Analysis: The Great Gatsby', grade: 'B-', gradeBg: 'bg-amber-100 text-amber-700', feedback: 'Good thesis, needs stronger textual evidence.' },
]

export default function ParentPerformancePage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="font-display font-bold text-2xl text-on-surface">Academic Performance & Insights</h1>
        <p className="text-sm text-on-surface-variant mt-1">Detailed progress report for Alex Johnson</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mastery Radar */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-display font-semibold text-on-surface">Mastery Radar</h2>
              <p className="text-xs text-on-surface-variant">Subject area proficiency — Current Term</p>
            </div>
          </div>
          <RadarChart data={RADAR_DATA} height={200} />
          <div className="flex flex-wrap gap-2 mt-4">
            {RADAR_DATA.map(d => (
              <span key={d.subject} className={cn('text-xs px-2.5 py-1 rounded-full font-medium', d.value >= 85 ? 'bg-green-100 text-green-700' : d.value >= 70 ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-600')}>
                {d.subject} {d.value}%
              </span>
            ))}
          </div>
        </div>

        {/* Grade History */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-semibold text-on-surface">Grade History</h2>
            <div className="flex rounded-lg overflow-hidden border border-outline-variant">
              {['6 Months', 'Current Year'].map((t, i) => (
                <button key={t} className={cn('px-3 py-1 text-xs font-medium', i === 0 ? 'bg-primary text-white' : 'text-on-surface-variant')}>{t}</button>
              ))}
            </div>
          </div>
          <BarChart data={GRADE_HISTORY} height={200} />
        </div>

        {/* AI Insights */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-ai" />
            <h2 className="font-display font-semibold text-on-surface">AI Insights</h2>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-3 space-y-1">
            <p className="text-xs font-semibold text-green-700">✦ Excellence Highlight</p>
            <p className="text-sm text-on-surface-variant">Alex is outperforming 94% of peers in logical spatial reasoning and abstract geometry problem-solving this term.</p>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-3 space-y-1">
            <p className="text-xs font-semibold text-amber-700">✦ Growth Opportunity</p>
            <p className="text-sm text-on-surface-variant">Written analysis skills are lagging. Recommend focusing on Comparative Rhetoric modules to build argument structure.</p>
          </div>
          <Button className="w-full">View Full Learning Plan</Button>
        </div>

        {/* Module Progress */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5">
          <h2 className="font-display font-semibold text-on-surface mb-4">Module Progress</h2>
          <div className="space-y-4">
            {MODULES.map(m => (
              <div key={m.name}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-on-surface font-medium">{m.name}</span>
                  <span className="text-on-surface-variant">{m.pct}% Complete</span>
                </div>
                <div className="h-2 bg-surface-high rounded-full overflow-hidden">
                  <div className={cn('h-full rounded-full transition-all', m.color)} style={{ width: `${m.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Assessments */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-semibold text-on-surface">Recent Assessments</h2>
          <button className="text-xs font-semibold text-primary hover:underline">View All →</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-outline-variant">
                {['Date', 'Subject', 'Assignment', 'Grade', 'Feedback'].map(h => (
                  <th key={h} className="text-left pb-2 text-xs font-semibold uppercase text-on-surface-variant pr-4 last:pr-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {ASSESSMENTS.map(a => (
                <tr key={a.assignment} className="hover:bg-surface-low transition-colors">
                  <td className="py-3 pr-4 text-xs text-on-surface-variant whitespace-nowrap">{a.date}</td>
                  <td className="py-3 pr-4 text-sm font-medium text-on-surface">{a.subject}</td>
                  <td className="py-3 pr-4 text-sm text-on-surface">{a.assignment}</td>
                  <td className="py-3 pr-4">
                    <span className={cn('text-xs font-bold px-2 py-1 rounded-lg', a.gradeBg)}>{a.grade}</span>
                  </td>
                  <td className="py-3 text-xs text-on-surface-variant italic">{a.feedback}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
