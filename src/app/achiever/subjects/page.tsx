'use client'
import { Sparkles, ChevronRight, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const COURSES = [
  {
    icon: '∫',
    name: 'AP Calculus BC',
    badge: 'Honors',
    grade: '94% A',
    aiReadiness: 'High',
    readinessColor: 'bg-green-100 text-green-700',
    mastery: 'Unit 4',
    masteryPct: 88,
    nextTask: 'Taylor Series Quiz',
    desc: 'Advanced placement calculus covering limits, derivatives, integrals, and series.',
  },
  {
    icon: 'φ',
    name: 'Advanced Physics',
    badge: 'Honors',
    grade: '89% B+',
    aiReadiness: 'Med',
    readinessColor: 'bg-amber-100 text-amber-700',
    mastery: 'Kinematics',
    masteryPct: 72,
    nextTask: 'Lab Report #3',
    desc: 'Mechanics, electromagnetism, waves, and modern physics for science-track students.',
  },
  {
    icon: '📖',
    name: 'World Literature',
    badge: 'Honors',
    grade: '96% A',
    aiReadiness: 'High',
    readinessColor: 'bg-green-100 text-green-700',
    mastery: 'Essay Drafting',
    masteryPct: 95,
    nextTask: 'Thesis Submission',
    desc: 'Global literary traditions, critical analysis, and comparative essay writing.',
  },
]

export default function AchieverSubjectsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Subject Library</h1>
          <p className="text-sm text-on-surface-variant mt-1">Your enrolled honors courses and readiness metrics.</p>
        </div>
      </div>

      <div className="flex gap-1 p-1 bg-surface-lowest border border-outline-variant rounded-xl w-fit">
        {['All Resources', 'Practice Sets'].map((t, i) => (
          <button key={t} className={`px-4 py-1.5 rounded-lg text-xs font-semibold ${i === 0 ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-low'}`}>{t}</button>
        ))}
      </div>

      <div className="space-y-4">
        {COURSES.map(c => (
          <div key={c.name} className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">{c.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-display font-semibold text-on-surface">{c.name}</p>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">{c.badge}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${c.readinessColor}`}>AI Readiness: {c.aiReadiness}</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-1">{c.desc}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-on-surface">{c.grade}</p>
                <ChevronRight className="h-4 w-4 text-on-surface-variant ml-auto mt-1" />
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-on-surface-variant">Mastery: {c.mastery}</span>
                <span className="font-semibold text-on-surface">{c.masteryPct}%</span>
              </div>
              <div className="h-2 bg-surface-high rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: `${c.masteryPct}%` }} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-on-surface-variant">Next: <strong className="text-on-surface">{c.nextTask}</strong></span>
              <Button size="sm" variant="outline" className="h-7 text-xs">Start Task</Button>
            </div>
          </div>
        ))}
      </div>

      {/* AI Recommendation */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-4 w-4 text-ai" />
          <p className="font-semibold text-sm text-ai">AI Study Recommendation</p>
        </div>
        <p className="text-xs text-on-surface-variant mb-3">Complete a 20-minute Kinematics review before your next Calculus session to strengthen cross-subject problem-solving.</p>
        <div className="flex items-center gap-2">
          <TrendingUp className="h-3.5 w-3.5 text-green-500" />
          <Button size="sm" className="h-7 text-xs bg-ai hover:bg-ai/90 text-white gap-1"><Sparkles className="h-3 w-3" /> Review Plan</Button>
        </div>
      </div>
    </div>
  )
}
