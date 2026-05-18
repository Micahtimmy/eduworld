'use client'
import { Sparkles, AlertTriangle, Calendar, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BarChart } from '@/components/shared/charts/BarChart'

const MASTERY_DATA = [
  { name: 'Algebra Basics', value: 85 },
  { name: 'Quadratics', value: 45 },
  { name: 'Geometry', value: 78 },
  { name: 'Trigonometry', value: 32 },
  { name: 'Data Stats', value: 92 },
]

const TUTORS = [
  { name: 'Marcus Thorne', role: 'Math Expert • Year 11', badge: 'Top 1% Trig Pro' },
  { name: 'Sarah Chen', role: 'Algebra Coach • Year 10', badge: 'Peer Lead Geometry' },
]

const OFFICE_HOURS = [
  { day: 'Tuesday, Oct 24', time: '3:30–3:45 PM' },
  { day: 'Thursday, Oct 26', time: '4:00–4:15 PM' },
]

export default function ParentInterventionPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <p className="text-xs text-on-surface-variant">Academic Mastery › Intervention Plan</p>
        <div className="flex items-start justify-between mt-1">
          <div>
            <h1 className="font-display font-bold text-2xl text-on-surface">Path to Mastery: Alex Johnson</h1>
            <p className="text-sm text-on-surface-variant mt-1">3 math conceptual gaps identified requiring targeted intervention.</p>
          </div>
          <span className="flex items-center gap-1.5 text-xs bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full font-semibold">
            <AlertTriangle className="h-3.5 w-3.5" /> Intervention Active
          </span>
        </div>
      </div>

      {/* Mastery Gap Analysis */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <h2 className="font-display font-semibold text-on-surface">Mastery Gap Analysis</h2>
        <p className="text-xs text-on-surface-variant">Curriculum vs. target proficiency (80%)</p>
        <BarChart data={MASTERY_DATA} height={200} />
      </div>

      {/* AI Intervention Path */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-ai" />
          <h2 className="font-display font-semibold text-on-surface">AI Intervention Path</h2>
        </div>
        <div className="space-y-3">
          <div className="border border-outline-variant rounded-xl p-3 flex items-start gap-3">
            <span className="text-xl">📚</span>
            <div>
              <p className="text-sm font-semibold text-on-surface">Revisit: Factoring Foundations</p>
              <p className="text-xs text-on-surface-variant">Recommended 30m module based on Trigonometry struggle points</p>
            </div>
          </div>
          <div className="border border-outline-variant rounded-xl p-3 flex items-start gap-3">
            <span className="text-xl">▶️</span>
            <div>
              <p className="text-sm font-semibold text-on-surface">Visualizing Sine Waves</p>
              <p className="text-xs text-on-surface-variant">Interactive lab session</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-on-surface">Mastery Momentum</p>
            <div className="flex items-center gap-2">
              <div className="w-32 h-1.5 bg-surface-high rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '60%' }} />
              </div>
              <span className="text-xs text-amber-600">In Recovery — 60% to Goal</span>
            </div>
          </div>
          <Button size="sm" className="bg-ai hover:bg-ai/90 gap-2"><Sparkles className="h-4 w-4" /> Assign to Alex</Button>
        </div>
      </div>

      {/* Peer Tutors */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Recommended Peer Tutors</h2>
          <button className="text-xs text-primary hover:underline">View All</button>
        </div>
        <div className="space-y-3">
          {TUTORS.map(t => (
            <div key={t.name} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-on-surface">{t.name}</p>
                <p className="text-xs text-on-surface-variant">{t.role}</p>
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{t.badge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Office Hours */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-primary" />
          <h2 className="font-display font-semibold text-on-surface">Office Hours — Mr. Henderson</h2>
        </div>
        <p className="text-xs text-on-surface-variant">Schedule a 15-minute session:</p>
        <div className="space-y-2">
          {OFFICE_HOURS.map(s => (
            <div key={s.day} className="flex items-center justify-between p-3 border border-outline-variant rounded-xl">
              <div>
                <p className="text-sm font-semibold text-on-surface">{s.day}</p>
                <p className="text-xs text-on-surface-variant">{s.time}</p>
              </div>
              <button className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
        <button className="text-xs text-primary hover:underline">Request Alternative Time</button>
      </div>
    </div>
  )
}
