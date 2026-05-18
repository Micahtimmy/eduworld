'use client'
import { useState } from 'react'
import { Sparkles, Users, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const TEMPLATES = [
  { icon: '🔬', title: 'Scientific Inquiry Lab', desc: 'Includes peer-review for data validation.' },
  { icon: '✍️', title: 'Creative Narrative', desc: 'Focused on stylistic flair and tone.' },
  { icon: '🤝', title: 'Collaborative Capstone', desc: 'Team-based grading and milestone tracking.' },
  { icon: '⚡', title: 'Micro-Assessment', desc: 'Quick check-ins for student comprehension.' },
]

export default function NewAssignmentPage() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [rubricGenerated, setRubricGenerated] = useState(true)
  const [anonymous, setAnonymous] = useState(false)
  const [reviewCount, setReviewCount] = useState(3)

  return (
    <div className="p-6 space-y-6">
      <div>
        <p className="text-xs text-on-surface-variant">Lesson Plans › New Assignment</p>
        <h1 className="font-display font-bold text-2xl text-on-surface mt-1">Assignment Creation Hub</h1>
        <p className="text-sm text-on-surface-variant mt-0.5">Configure your lesson, set rigorous rubrics, and enable peer learning dynamics.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-5">
          {/* Core Details */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <h2 className="font-display font-semibold text-on-surface">Core Details</h2>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-on-surface-variant uppercase mb-1 block">Assignment Title</label>
                <input
                  className="w-full border border-outline-variant rounded-xl px-3 py-2 text-sm bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="e.g. Chemical Reactions Lab Report"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-on-surface-variant uppercase mb-1 block">Course / Section</label>
                <select className="w-full border border-outline-variant rounded-xl px-3 py-2 text-sm bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30">
                  <option>Art History 101 - A</option>
                  <option>Modern Philosophy 202 - B</option>
                  <option>AP Physics - Section 1</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-on-surface-variant uppercase mb-1 block">Description &amp; Instructions</label>
                <textarea
                  className="w-full border border-outline-variant rounded-xl px-3 py-2 text-sm bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 min-h-[80px] resize-none"
                  placeholder="Describe what students need to do..."
                  value={desc}
                  onChange={e => setDesc(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-on-surface-variant uppercase mb-1 block">Submission Deadline</label>
                  <input type="date" className="w-full border border-outline-variant rounded-xl px-3 py-2 text-sm bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-on-surface-variant uppercase mb-1 block">Points Possible</label>
                  <input type="number" defaultValue={100} className="w-full border border-outline-variant rounded-xl px-3 py-2 text-sm bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30" />
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
            <p className="text-xs text-on-surface-variant">Generate a professional grading rubric based on your assignment description and learning objectives.</p>
            {rubricGenerated ? (
              <div className="bg-ai/5 border border-ai/20 rounded-xl p-3 space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="success" size="sm">Active Rubric: 4 Criteria</Badge>
                </div>
                <p className="text-xs text-on-surface-variant italic">Critical Analysis, Composition, Citation, Originality...</p>
                <button className="text-xs text-primary hover:underline">Edit Rubric →</button>
              </div>
            ) : (
              <Button onClick={() => setRubricGenerated(true)} className="gap-2 bg-ai hover:bg-ai/90">
                <Sparkles className="h-4 w-4" /> Generate Rubric
              </Button>
            )}
          </div>

          {/* Peer Review */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-on-surface" />
              <h2 className="font-display font-semibold text-on-surface">Peer Review</h2>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-on-surface">Reviews per student</span>
              <div className="flex items-center gap-2">
                <button onClick={() => setReviewCount(c => Math.max(1, c - 1))} className="w-7 h-7 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:bg-surface-low">−</button>
                <span className="text-sm font-bold text-on-surface w-4 text-center">{reviewCount}</span>
                <button onClick={() => setReviewCount(c => c + 1)} className="w-7 h-7 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:bg-surface-low">+</button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setAnonymous(!anonymous)}
                className={`relative w-10 h-5 rounded-full transition-colors ${anonymous ? 'bg-primary' : 'bg-surface-high'}`}
              >
                <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${anonymous ? 'translate-x-5' : 'translate-x-0.5'}`} />
              </button>
              <span className="text-sm text-on-surface">Anonymous feedback</span>
            </div>
          </div>

          {/* Educator Impact */}
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-sm">LVL 4</div>
            <div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                <p className="text-sm font-semibold text-on-surface">Educator Impact</p>
              </div>
              <p className="text-xs text-on-surface-variant">You're 12 assignments away from the 'Engager' badge!</p>
            </div>
          </div>

          <div className="flex gap-3 justify-end">
            <Button variant="outline">Save Draft</Button>
            <Button>Distribute Now</Button>
          </div>
        </div>

        {/* Right Panel — Templates */}
        <div className="space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Quick Start Templates</h2>
          {TEMPLATES.map(t => (
            <div key={t.title} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">{t.icon}</span>
                <p className="text-sm font-semibold text-on-surface">{t.title}</p>
              </div>
              <p className="text-xs text-on-surface-variant">{t.desc}</p>
              <Button variant="secondary" size="sm" className="w-full">Use Template</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
