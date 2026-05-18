'use client'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const WORKLOAD = [
  { label: 'Teaching', hours: 24, color: 'bg-primary' },
  { label: 'Grading', hours: 10, color: 'bg-amber-500' },
  { label: 'Admin', hours: 6, color: 'bg-green-500' },
]

const FEEDBACK = [
  {
    initials: 'RC',
    name: 'Dr. Robert Chen',
    role: 'Principal',
    time: '2 days ago',
    text: 'Excellent use of multimedia in the recent History module. Student engagement metrics have notably improved.',
  },
  {
    initials: 'DA',
    name: "Dean's Office",
    role: 'Administration',
    time: 'Last month',
    text: 'Q2 Performance Review: Exceeds Expectations. Your leadership in the staff community board is appreciated.',
  },
]

const COMMUNITY = [
  { initials: 'JM', name: 'James Miller', preview: 'Does anyone have resources for the upcoming science fair?' },
  { initials: 'AT', name: 'Anna Taylor', preview: 'Reminder: Friday\'s staff meeting moved to Room 104.' },
]

export default function TeacherWellnessPage() {
  return (
    <div className="p-4 md:p-6 space-y-6 max-w-4xl mx-auto">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Good morning, Sarah</h1>
          <p className="text-sm text-on-surface-variant mt-1">Here is your professional overview for the week.</p>
        </div>
        <Button size="sm" variant="outline" className="gap-1.5 shrink-0">⬇ Export Report</Button>
      </div>

      {/* Workload Analysis */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Workload Analysis</h2>
          <span className="text-xs text-on-surface-variant">This Week</span>
        </div>
        <div className="space-y-3">
          {WORKLOAD.map(w => (
            <div key={w.label} className="flex items-center gap-3">
              <span className="text-xs text-on-surface-variant w-16 shrink-0">{w.label}</span>
              <div className="flex-1 h-2 bg-surface-high rounded-full overflow-hidden">
                <div className={`h-full ${w.color} rounded-full`} style={{ width: `${(w.hours / 40) * 100}%` }} />
              </div>
              <span className="text-xs font-bold text-on-surface w-8 text-right">{w.hours}h</span>
            </div>
          ))}
        </div>
        <div className="bg-ai/5 border border-ai/20 rounded-xl p-3 flex items-start gap-2">
          <Sparkles className="h-3.5 w-3.5 text-ai mt-0.5 shrink-0" />
          <p className="text-xs text-on-surface-variant">AI Insight: Grading time is up 15%. Consider using the AI Lesson Generator to save prep time.</p>
        </div>
      </div>

      {/* PD Credits */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">PD Credits</h2>
        <p className="text-xs text-on-surface-variant">State Requirement Progress (2023-2024)</p>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2 bg-surface-high rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: '75%' }} />
          </div>
          <span className="text-sm font-bold text-on-surface shrink-0">45 / 60 hrs</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">In Good Standing</span>
          <Button size="sm" variant="outline">Log New Credits</Button>
        </div>
      </div>

      {/* Recent Feedback */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Recent Feedback</h2>
          <button className="text-xs text-primary hover:underline">View All</button>
        </div>
        <div className="space-y-4">
          {FEEDBACK.map(f => (
            <div key={f.name} className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-primary">{f.initials}</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-on-surface">{f.name}</p>
                  <span className="text-xs text-on-surface-variant">{f.time}</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-0.5 italic">&ldquo;{f.text}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Staff Community */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Staff Community</h2>
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">2 New</span>
        </div>
        <div className="space-y-2">
          {COMMUNITY.map(c => (
            <div key={c.name} className="flex items-center gap-3 p-2.5 bg-surface-low rounded-xl">
              <div className="w-8 h-8 rounded-full bg-surface-high flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-on-surface-variant">{c.initials}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-on-surface">{c.name}</p>
                <p className="text-xs text-on-surface-variant truncate">{c.preview}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
