'use client'
import { Sparkles, Calendar, Users, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

const TEMPLATES = [
  { emoji: '🔬', title: 'Scientific Inquiry Lab', desc: 'Includes peer-review for data validation.' },
  { emoji: '✍️', title: 'Creative Narrative', desc: 'Focused on stylistic flair and tone.' },
  { emoji: '🤝', title: 'Collaborative Capstone', desc: 'Team-based grading and milestone tracking.' },
  { emoji: '⚡', title: 'Micro-Assessment', desc: 'Quick check-ins for student comprehension.' },
]

export default function TeacherAssignmentCreationPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <p className="text-xs text-on-surface-variant">Lesson Plans › New Assignment</p>
        <h1 className="font-display font-bold text-2xl text-on-surface mt-1">Assignment Creation Hub</h1>
        <p className="text-sm text-on-surface-variant mt-1">Configure your lesson, set rigorous rubrics, and enable peer learning dynamics.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Core Details */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Core Details</h2>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-on-surface-variant">Assignment Title</label>
              <input className="w-full mt-1 px-3 py-2 text-sm bg-surface-low border border-outline-variant rounded-xl outline-none focus:border-primary placeholder:text-on-surface-variant" placeholder="e.g. Cell Division Lab Report" />
            </div>
            <div>
              <label className="text-xs font-semibold text-on-surface-variant">Course / Section</label>
              <select className="w-full mt-1 px-3 py-2 text-sm bg-surface-low border border-outline-variant rounded-xl outline-none">
                <option>Art History 101 - A</option>
                <option>Modern Philosophy 202 - B</option>
                <option>Biology Grade 10 - C</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-on-surface-variant">Description & Instructions</label>
              <textarea rows={4} className="w-full mt-1 px-3 py-2 text-sm bg-surface-low border border-outline-variant rounded-xl outline-none resize-none placeholder:text-on-surface-variant" placeholder="Describe the assignment objectives and instructions..." />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-on-surface-variant">Submission Deadline</label>
                <div className="relative mt-1">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-on-surface-variant" />
                  <input type="date" className="w-full pl-8 pr-3 py-2 text-sm bg-surface-low border border-outline-variant rounded-xl outline-none" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-on-surface-variant">Points Possible</label>
                <input type="number" defaultValue={100} className="w-full mt-1 px-3 py-2 text-sm bg-surface-low border border-outline-variant rounded-xl outline-none" />
              </div>
            </div>
          </div>
        </div>

        {/* AI Rubric Builder */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-ai" />
            <h2 className="font-display font-semibold text-on-surface">AI Rubric Builder</h2>
          </div>
          <p className="text-xs text-on-surface-variant">Generate a professional rubric from your assignment description and learning objectives.</p>
          <Button className="w-full gap-2 bg-ai hover:bg-ai/90 text-white"><Sparkles className="h-4 w-4" /> Generate Rubric</Button>
          <div className="bg-surface-low rounded-xl p-3 space-y-1">
            <p className="text-xs font-semibold text-on-surface">Active Rubric: 4 Criteria</p>
            <p className="text-xs text-on-surface-variant truncate">Critical Analysis, Composition, Citation, Originality...</p>
          </div>
          <div className="space-y-2">
            {['Critical Analysis — 30%', 'Composition — 25%', 'Citation Accuracy — 25%', 'Originality — 20%'].map(r => (
              <div key={r} className="flex items-center gap-2 p-2.5 bg-primary/5 border border-primary/20 rounded-lg">
                <span className="text-xs text-on-surface">{r}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="space-y-4">
          {/* Peer Review */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <h2 className="font-display font-semibold text-on-surface">Peer-Review</h2>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-on-surface">Reviews per student</span>
              <div className="flex items-center gap-2">
                <button className="w-7 h-7 rounded-lg bg-surface-low border border-outline-variant text-sm font-bold text-on-surface hover:bg-surface-high">-</button>
                <span className="text-sm font-bold text-on-surface w-6 text-center">3</span>
                <button className="w-7 h-7 rounded-lg bg-surface-low border border-outline-variant text-sm font-bold text-on-surface hover:bg-surface-high">+</button>
              </div>
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded" defaultChecked />
              <span className="text-sm text-on-surface">Anonymous feedback</span>
            </label>
          </div>

          {/* Educator Impact */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-amber-500" />
              <div>
                <p className="text-xs text-on-surface-variant">Educator Impact</p>
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-bold">LVL 4</span>
              </div>
            </div>
            <p className="text-xs text-on-surface-variant">You&apos;re 12 assignments away from the <strong>&apos;Engager&apos;</strong> badge!</p>
            <div className="h-2 bg-surface-high rounded-full overflow-hidden">
              <div className="h-full bg-amber-500 rounded-full" style={{ width: '72%' }} />
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">Save Draft</Button>
            <Button size="sm" className="flex-1">Distribute Now</Button>
          </div>
        </div>
      </div>

      {/* Quick Start Templates */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <h2 className="font-display font-semibold text-on-surface">Quick Start Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TEMPLATES.map(t => (
            <div key={t.title} className="bg-surface-low rounded-xl p-4 space-y-2">
              <span className="text-3xl">{t.emoji}</span>
              <p className="font-semibold text-sm text-on-surface">{t.title}</p>
              <p className="text-xs text-on-surface-variant">{t.desc}</p>
              <Button size="sm" variant="outline" className="w-full h-7 text-xs">Use Template</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
