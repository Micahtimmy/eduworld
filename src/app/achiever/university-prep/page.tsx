'use client'
import { Sparkles, Download, Plus, CheckCircle, Circle, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'

const MILESTONES = [
  { icon: CheckCircle, label: 'Standardized Testing (SAT/ACT)', detail: 'Scores submitted to top 5 choice universities. Verified by counselor.', date: 'Aug 15', done: true },
  { icon: Circle, label: 'Personal Statement Draft V2', detail: 'Mentor feedback needed on hook and conclusion.', date: 'Due in 3 Days', done: false, urgent: true },
  { icon: Circle, label: 'Letters of Recommendation', detail: 'Waiting on two teachers.', date: 'Pending', done: false },
]

const PORTFOLIO = [
  { icon: '🔬', skill: 'Advanced Research', level: 'Level 4', locked: false },
  { icon: '💻', skill: 'Algorithms & Logic', level: 'Level 5 (Max)', locked: false },
  { icon: '🧠', skill: 'Critical Thinking', level: 'Level 3', locked: false },
  { icon: '🌐', skill: 'Global Leadership', level: '—', locked: true },
]

export default function AchieverUniversityPrepPage() {
  return (
    <div className="p-4 space-y-5 pb-24">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">Grade 12 Target</span>
            <span className="text-xs bg-ai/10 text-ai px-2 py-0.5 rounded-full font-semibold">✦ AI Accelerated</span>
          </div>
          <h1 className="font-display font-bold text-2xl text-on-surface">University Prep Hub</h1>
          <p className="text-sm text-on-surface-variant mt-1">Centralized command center for Ivy League prep — requirements, essays, and portfolio.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm"><Download className="h-3.5 w-3.5" /></Button>
          <Button size="sm" className="gap-1.5"><Plus className="h-3.5 w-3.5" /> Add Milestone</Button>
        </div>
      </div>

      {/* Application Milestones */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display font-semibold text-on-surface">Application Milestones</h2>
            <p className="text-xs text-on-surface-variant">Fall 2024 Cycle</p>
          </div>
          <span className="font-bold text-primary">68%</span>
        </div>
        <div className="h-2 bg-surface-high rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full" style={{ width: '68%' }} />
        </div>
        <div className="space-y-3">
          {MILESTONES.map(m => (
            <div key={m.label} className={`flex gap-3 p-3 rounded-xl border ${m.urgent ? 'bg-amber-50 border-amber-200' : 'bg-surface-low border-transparent'}`}>
              {m.done ? <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> : <Circle className="h-4 w-4 text-on-surface-variant shrink-0 mt-0.5" />}
              <div className="flex-1">
                <p className={`text-sm font-semibold ${m.done ? 'text-on-surface' : m.urgent ? 'text-amber-800' : 'text-on-surface'}`}>{m.label}</p>
                <p className={`text-xs mt-0.5 ${m.urgent ? 'text-amber-600' : 'text-on-surface-variant'}`}>{m.detail}</p>
              </div>
              <span className={`text-xs font-semibold shrink-0 ${m.done ? 'text-green-600' : m.urgent ? 'text-amber-700' : 'text-on-surface-variant'}`}>{m.date}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Button size="sm" className="gap-1.5 bg-ai hover:bg-ai/90 text-white"><Sparkles className="h-3 w-3" /> AI Review</Button>
          <Button size="sm" variant="outline">Open Document</Button>
        </div>
      </div>

      {/* Essay Forge */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-ai" />
          <h2 className="font-display font-semibold text-on-surface">Essay Forge</h2>
          <span className="text-xs text-on-surface-variant">Current Draft: Common App · Score: 85/100</span>
        </div>
        <div className="bg-surface-low rounded-xl p-3">
          <p className="text-xs text-on-surface italic">&ldquo;The rhythmic hum of the servers in the basement was my first lullaby...&rdquo;</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Narrative Flow: Strong</span>
          <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">Vocabulary: Needs Polish</span>
        </div>
        <div className="flex gap-2">
          <Button size="sm" className="gap-1.5 bg-ai hover:bg-ai/90 text-white"><Sparkles className="h-3 w-3" /> AI Deep Analysis</Button>
          <Button size="sm" variant="outline">Send to Mentor</Button>
        </div>
      </div>

      {/* Competency Portfolio */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Competency Portfolio</h2>
          <button className="text-xs text-primary hover:underline">View Public Profile</button>
        </div>
        <div className="space-y-2">
          {PORTFOLIO.map(p => (
            <div key={p.skill} className={`flex items-center gap-3 p-3 rounded-xl ${p.locked ? 'bg-surface-low opacity-60' : 'bg-surface-low'}`}>
              <span className="text-xl">{p.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-on-surface">{p.skill}</p>
                <p className="text-xs text-on-surface-variant">{p.level}</p>
              </div>
              {p.locked
                ? <Lock className="h-4 w-4 text-on-surface-variant" />
                : <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Unlocked</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
