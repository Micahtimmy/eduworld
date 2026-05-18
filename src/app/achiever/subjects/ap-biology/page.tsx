'use client'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const UNITS = [
  { name: 'Unit 1: Chemistry of Life', weight: '8-11% of AP Exam Weight', mastery: 92, status: 'done', expanded: true },
  { name: 'Unit 2: Cell Structure and Function', weight: '10-13% of AP Exam Weight', mastery: 64, status: 'normal', expanded: false },
  { name: 'Unit 3: Cellular Energetics', weight: '', mastery: 35, status: 'attention', expanded: false },
  { name: 'Unit 4: Cell Communication and Cell Cycle', weight: '', mastery: 0, status: 'locked', expanded: false },
]

const UNIT1_ITEMS = [
  { label: '1.1 Structure of Water and Hydrogen Bonding', quiz: '100%', done: true },
  { label: '1.2 Elements of Life', quiz: '90%', done: true },
  { label: '1.3 Introduction to Biological Macromolecules', quiz: '', done: false },
]

const QUIZZES = [
  { icon: '📝', name: 'Macromolecules Quiz', date: 'Today, 10:30 AM', score: '90%', scoreColor: 'text-green-600' },
  { icon: '📝', name: 'Cell Structure Basics', date: 'Yesterday', score: '75%', scoreColor: 'text-green-600' },
  { icon: '📚', name: 'Enzyme Kinematics', date: 'Oct 12', score: '45%', scoreColor: 'text-red-600' },
]

export default function AchieverAPBiologyPage() {
  return (
    <div className="p-4 space-y-5 pb-24">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-on-surface-variant">Science › Advanced Placement</p>
          <h1 className="font-display font-bold text-xl text-on-surface mt-1">AP Biology <span className="text-ai">✦</span></h1>
          <p className="text-xs text-ai font-semibold">AI Readiness: 84%</p>
          <p className="text-sm text-on-surface-variant mt-1">Master life principles from molecules to ecosystems for AP Exam success.</p>
        </div>
        <div className="text-right shrink-0">
          <div className="flex items-center gap-1.5 bg-xp/10 text-xp px-2 py-0.5 rounded-full">
            <span className="text-xs">🏅</span>
            <span className="text-xs font-bold">2,450 XP</span>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-on-surface">68% Overall Mastery</span>
          <span className="text-on-surface-variant">42 Days Until Exam</span>
        </div>
        <div className="h-2 bg-surface-high rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full" style={{ width: '68%' }} />
        </div>
      </div>

      {/* Units */}
      <div className="space-y-3">
        {UNITS.map(u => (
          <div key={u.name} className={`bg-surface-lowest rounded-2xl border overflow-hidden ${
            u.status === 'attention' ? 'border-amber-300' : u.status === 'locked' ? 'border-outline-variant opacity-60' : 'border-outline-variant'
          }`}>
            <div className="flex items-center gap-3 p-4">
              <span className={`text-lg shrink-0 ${
                u.status === 'done' ? 'text-green-500' :
                u.status === 'attention' ? 'text-amber-500' :
                u.status === 'locked' ? 'text-on-surface-variant' :
                'text-primary'
              }`}>
                {u.status === 'done' ? '✓' : u.status === 'locked' ? '🔒' : u.status === 'attention' ? '⚠' : '●'}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-on-surface">{u.name}</p>
                {u.weight && <p className="text-xs text-on-surface-variant">{u.weight}</p>}
                {u.status === 'attention' && <p className="text-xs text-amber-600 font-semibold">Needs Attention — Below Target</p>}
                {u.status === 'locked' && <p className="text-xs text-on-surface-variant">Unlock by completing Unit 3</p>}
              </div>
              {u.mastery > 0 && (
                <span className={`text-sm font-bold shrink-0 ${u.mastery >= 70 ? 'text-green-600' : 'text-amber-600'}`}>{u.mastery}%</span>
              )}
            </div>
            {u.expanded && (
              <div className="border-t border-outline-variant divide-y divide-outline-variant">
                {UNIT1_ITEMS.map(item => (
                  <div key={item.label} className="flex items-center gap-3 px-4 py-2.5">
                    <span className={`text-sm shrink-0 ${item.done ? 'text-green-500' : 'text-on-surface-variant'}`}>{item.done ? '✓' : '○'}</span>
                    <p className="text-xs text-on-surface flex-1">{item.label}</p>
                    {item.quiz ? (
                      <span className="text-xs text-green-600 font-semibold">Quiz: {item.quiz}</span>
                    ) : (
                      <Button size="sm" variant="outline" className="h-6 text-xs">Practice</Button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* AI Readiness Insight */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-ai" />
          <p className="text-sm font-semibold text-on-surface">AI Readiness Insight</p>
        </div>
        <p className="text-xs text-on-surface-variant">Unit 2 strengths in membrane transport, but organelle interactions need work before the exam.</p>
        <div className="space-y-1">
          <p className="text-xs font-semibold text-on-surface">🎯 Recommended Focus</p>
          <p className="text-xs text-on-surface-variant">• Review the Endomembrane System</p>
          <p className="text-xs text-on-surface-variant">• Practice: Cellular Respiration MCQs</p>
        </div>
        <Button size="sm" className="gap-1.5 bg-ai hover:bg-ai/90 text-white"><Sparkles className="h-3 w-3" /> Generate Study Plan</Button>
      </div>

      {/* Recent Quizzes */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Recent Quizzes</h2>
          <button className="text-xs text-primary hover:underline">View All</button>
        </div>
        <div className="space-y-2">
          {QUIZZES.map(q => (
            <div key={q.name} className="flex items-center gap-3 p-2.5 bg-surface-low rounded-xl">
              <span className="text-lg">{q.icon}</span>
              <div className="flex-1">
                <p className="text-xs font-semibold text-on-surface">{q.name}</p>
                <p className="text-xs text-on-surface-variant">{q.date}</p>
              </div>
              <span className={`text-sm font-bold ${q.scoreColor}`}>{q.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
