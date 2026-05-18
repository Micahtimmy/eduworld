'use client'
import { Download, MessageSquare } from 'lucide-react'
import { Sparkles } from 'lucide-react'
import { BarChart } from '@/components/shared/charts/BarChart'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const SUBJECTS = ['Math', 'Science', 'Art', 'History', 'PE', 'English']

const MASTERY = [
  { label: 'Scientific Inquiry', status: 'Exceeding', color: 'bg-green-500' },
  { label: 'Algebraic Thinking', status: 'Meeting', color: 'bg-blue-500' },
  { label: 'Historical Analysis', status: 'Approaching', color: 'bg-amber-500' },
]

const GROWTH = [
  { name: 'Term 1', value: 60 },
  { name: 'Term 2', value: 68 },
  { name: 'Current', value: 82 },
]

export default function StudentInsightsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center font-display font-bold text-2xl text-primary">AT</div>
          <div>
            <h1 className="font-display font-bold text-2xl text-on-surface">Alex Thompson</h1>
            <p className="text-sm text-on-surface-variant">Grade 10 · ID: 8942-AT · Homeroom 10B (Ms. Davis)</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2"><MessageSquare className="h-4 w-4" /> Message Parents</Button>
          <Button variant="outline" size="sm" className="gap-2"><Download className="h-4 w-4" /> Export Report</Button>
        </div>
      </div>

      {/* Subject Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {SUBJECTS.map((s, i) => (
          <button key={s} className={cn('px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors', i === 0 ? 'bg-primary text-white' : 'border border-outline-variant text-on-surface hover:bg-surface-low')}>
            {s}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Projection */}
        <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-ai" />
            <h2 className="font-display font-semibold text-on-surface">AI Projection</h2>
          </div>
          <div className="text-center py-3">
            <p className="font-display font-bold text-4xl text-on-surface">A-</p>
            <p className="text-sm text-on-surface-variant mt-1">Predicted Final Grade</p>
          </div>
          <p className="text-xs text-on-surface-variant">Alex is on track to improve half a letter grade this term. Focus recommended on algebraic concepts to strengthen overall performance.</p>
        </div>

        {/* Mastery Map */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Mastery Map</h2>
          <div className="space-y-3">
            {MASTERY.map(m => (
              <div key={m.label} className="flex items-center justify-between p-3 rounded-xl bg-surface-low">
                <p className="text-sm text-on-surface">{m.label}</p>
                <span className={cn('text-xs font-bold px-2 py-1 rounded-full text-white', m.color)}>{m.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Attendance */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
          <h2 className="font-display font-semibold text-on-surface">Attendance</h2>
          <div className="text-center py-3">
            <p className="font-display font-bold text-4xl text-green-600">96%</p>
            <p className="text-sm text-on-surface-variant mt-1">2 absences this term</p>
          </div>
          <div className="h-2 bg-surface-high rounded-full overflow-hidden">
            <div className="h-full bg-green-500 rounded-full" style={{ width: '96%' }} />
          </div>
        </div>
      </div>

      {/* Growth Chart */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5">
        <h2 className="font-display font-semibold text-on-surface mb-4">Growth Over Time</h2>
        <BarChart data={GROWTH} height={160} />
      </div>

      {/* Educator Notes */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Educator Notes</h2>
          <div className="flex items-center gap-2">
            <button className="text-xs text-primary hover:underline">Edit</button>
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">#GroupWork</span>
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">#ReadingComp</span>
          </div>
        </div>
        <p className="text-sm text-on-surface-variant">Alex actively participates in group work and is encouraged to continue developing public speaking confidence. Some focus on reading comprehension exercises is recommended to strengthen textual analysis skills.</p>
      </div>
    </div>
  )
}
