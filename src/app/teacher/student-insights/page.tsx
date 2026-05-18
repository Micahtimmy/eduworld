'use client'
import { Sparkles, Download, MessageSquare, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BarChart } from '@/components/shared/charts/BarChart'
import { cn } from '@/lib/utils'

const MASTERY = [
  { skill: 'Scientific Inquiry', status: 'Exceeding', color: 'bg-green-100 text-green-700' },
  { skill: 'Algebraic Thinking', status: 'Meeting', color: 'bg-blue-100 text-blue-700' },
  { skill: 'Historical Analysis', status: 'Approaching', color: 'bg-amber-100 text-amber-700' },
]

const SUBJECTS = ['Math', 'Science', 'Art', 'History', 'PE', 'English']

const GROWTH_DATA = [
  { name: 'Term 1', value: 60 },
  { name: 'Term 2', value: 68 },
  { name: 'Current', value: 82 },
]

export default function TeacherStudentInsightsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold text-primary">AT</div>
          <div>
            <h1 className="font-display font-bold text-2xl text-on-surface">Alex Thompson</h1>
            <p className="text-sm text-on-surface-variant">Grade 10 · Student ID: 8942-AT · Homeroom: 10B (Ms. Davis)</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2"><MessageSquare className="h-4 w-4" /> Message Parents</Button>
          <Button variant="outline" size="sm" className="gap-2"><Download className="h-4 w-4" /> Export Report</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Projection */}
        <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-ai" />
            <h2 className="font-display font-semibold text-on-surface">AI Projection</h2>
          </div>
          <div className="text-center py-3">
            <p className="font-display font-bold text-4xl text-primary">A-</p>
            <p className="text-sm font-semibold text-on-surface mt-1">Predicted Term Grade</p>
          </div>
          <p className="text-xs text-on-surface-variant">Alex is on track to improve by half a letter grade. Focus on advanced algebraic concepts to secure an &apos;A&apos;.</p>
        </div>

        {/* Mastery Map */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Mastery Map</h2>
          <div className="flex gap-1 overflow-x-auto pb-1">
            {SUBJECTS.map((s, i) => (
              <button key={s} className={cn('px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors', i === 0 ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-low')}>{s}</button>
            ))}
          </div>
          <div className="space-y-2">
            {MASTERY.map(m => (
              <div key={m.skill} className="flex items-center justify-between p-3 bg-surface-low rounded-xl">
                <p className="text-sm text-on-surface">{m.skill}</p>
                <span className={cn('text-xs px-2 py-0.5 rounded-full font-semibold', m.color)}>{m.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-4">
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <h2 className="font-display font-semibold text-on-surface">Growth Over Time</h2>
            <BarChart data={GROWTH_DATA} height={120} />
          </div>
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 text-center">
            <p className="font-display font-bold text-3xl text-primary">96%</p>
            <p className="text-sm font-semibold text-on-surface mt-1">Attendance Rate</p>
            <p className="text-xs text-on-surface-variant mt-0.5">2 absences this term</p>
          </div>
        </div>
      </div>

      {/* Educator Notes */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-on-surface-variant" />
            <h2 className="font-display font-semibold text-on-surface">Educator Notes</h2>
          </div>
          <button className="text-xs text-primary hover:underline">Edit</button>
        </div>
        <p className="text-sm text-on-surface-variant italic">&quot;Alex has shown significant improvement in group participation since being paired with Sarah.&quot;</p>
        <div className="flex gap-2">
          {['#GroupWork', '#ReadingComp'].map(t => (
            <span key={t} className="text-xs bg-surface-low text-on-surface-variant px-2 py-0.5 rounded-full">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
