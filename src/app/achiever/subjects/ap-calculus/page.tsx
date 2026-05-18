'use client'
import { Sparkles, ChevronRight, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ASSIGNMENTS = [
  { icon: '📝', title: 'Problem Set 8.2', sub: 'Submitted 2 days ago', score: '92/100' },
  { icon: '❓', title: 'Pop Quiz: L\'Hôpital\'s', sub: 'Submitted last week', score: '85/100' },
]

export default function AchieverAPCalculusPage() {
  return (
    <div className="p-4 space-y-5 pb-24">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">Achiever Tier · Secondary Honors</span>
        </div>
        <h1 className="font-display font-bold text-2xl text-on-surface">AP Calculus BC</h1>
        <p className="text-sm text-on-surface-variant mt-1">Math-401 Advanced Placement · Dr. Aris Thorne · Spring 2024 · Virtual Hall 4</p>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-sm font-bold text-xp">⭐ 1,240 XP</span>
        </div>
      </div>

      {/* Current Standing */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 text-center space-y-1">
        <p className="text-xs text-on-surface-variant font-semibold">Current Standing</p>
        <p className="font-display font-bold text-4xl text-on-surface">94%</p>
        <p className="text-sm text-on-surface-variant">(A)</p>
      </div>

      {/* AI Insight */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 space-y-2">
        <div className="flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-ai" />
          <span className="text-xs font-bold text-ai">EduWorld AI Insight</span>
          <span className="text-xs text-on-surface-variant ml-auto">Updated 2h ago</span>
        </div>
        <p className="font-semibold text-sm text-on-surface">✦ Master Integrals: Area Between Curves</p>
        <p className="text-xs text-on-surface-variant">Strong anti-derivative proficiency. Integration bounds tasks are taking 30% longer than the cohort average — targeted practice recommended.</p>
        <div className="flex gap-2">
          <Button size="sm" className="h-7 text-xs gap-1 bg-ai hover:bg-ai/90 text-white"><Sparkles className="h-3 w-3" /> Generate Targeted Practice</Button>
          <Button size="sm" variant="outline" className="h-7 text-xs">Review Concept Video</Button>
        </div>
      </div>

      {/* Syllabus Progress */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <h2 className="font-semibold text-sm text-on-surface">Syllabus Progress</h2>
        <div>
          <p className="text-sm font-semibold text-on-surface">Unit 8: Applications of Integration</p>
          <p className="text-xs text-on-surface-variant mt-1">Module 3 of 5</p>
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-on-surface-variant">Progress</span>
            <span className="font-bold text-on-surface">60%</span>
          </div>
          <div className="h-2 bg-surface-high rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: '60%' }} />
          </div>
        </div>
        <div className="flex items-center gap-2 p-2.5 bg-surface-low rounded-xl">
          <ArrowRight className="h-3.5 w-3.5 text-primary shrink-0" />
          <p className="text-xs text-on-surface">Next Milestone — Volumes with Washer Method <span className="text-on-surface-variant">(Due Friday)</span></p>
        </div>
      </div>

      {/* Recent Assignments */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-sm text-on-surface">Recent Assignments</h2>
          <button className="text-xs text-primary hover:underline">View All</button>
        </div>
        <div className="space-y-2">
          {ASSIGNMENTS.map(a => (
            <div key={a.title} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl hover:bg-surface-high transition-colors cursor-pointer">
              <span className="text-lg">{a.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-on-surface">{a.title}</p>
                <p className="text-xs text-on-surface-variant">{a.sub}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-on-surface">{a.score}</span>
                <ChevronRight className="h-3.5 w-3.5 text-on-surface-variant" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Required */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <h2 className="font-semibold text-sm text-on-surface">Action Required</h2>
        <div className="space-y-2">
          <div className="flex gap-3 p-3 bg-surface-low rounded-xl">
            <span className="text-lg">📖</span>
            <div>
              <p className="text-sm font-semibold text-on-surface">Read Chapter 8.4: Arc Length — Tomorrow</p>
              <p className="text-xs text-on-surface-variant">Pages 412–420 · Focus on derivation proofs</p>
            </div>
          </div>
          <div className="flex gap-3 p-3 bg-amber-50 border border-amber-200 rounded-xl">
            <span className="text-lg">📤</span>
            <div>
              <p className="text-sm font-semibold text-on-surface">Midterm Project Submission — Oct 24</p>
              <p className="text-xs text-amber-700">PDF upload required · See assignment brief</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
