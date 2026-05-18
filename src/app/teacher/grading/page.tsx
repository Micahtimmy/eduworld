'use client'
import { Sparkles, ChevronLeft, ChevronRight, Mic, Video, ZoomIn, ZoomOut, Save } from 'lucide-react'
import { Button } from '@/components/ui/button'

const RUBRIC = [
  { category: 'Historical Accuracy', score: 25, max: 30 },
  { category: 'Analysis & Critical Thinking', score: 18, max: 20 },
  { category: 'Formatting & Grammar', score: 9, max: 10 },
]

const ESSAY_TEXT = `The Industrial Revolution

The Industrial Revolution, which began in Britain in the late 18th century, fundamentally transformed human society and economic systems across the world. This pivotal period marked the transition from agrarian, handcraft economies to manufacturing and industry.

The introduction of the steam engine by James Watt in 1769 proved to be the most transformative technological advancement of the era. Steam power mechanized production processes, enabling factories to operate with unprecedented efficiency. Textile mills, iron foundries, and coal mines expanded rapidly, reshaping Britain's economic landscape.

Urbanization accelerated dramatically as workers migrated from rural areas to industrial cities in search of employment. Manchester's population grew from 25,000 in 1772 to over 300,000 by 1850. While industrial growth created new wealth, it also generated significant social challenges, including poor working conditions, child labor, and inadequate housing for the working class.`

export default function TeacherGradingPage() {
  return (
    <div className="p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button className="w-8 h-8 rounded-lg hover:bg-surface-low flex items-center justify-center text-on-surface-variant transition-colors">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex-1">
          <h1 className="font-display font-bold text-xl text-on-surface">Grading: Final History Essay</h1>
          <p className="text-xs text-on-surface-variant">12 / 30 Graded</p>
        </div>
        <div className="h-2 w-48 bg-surface-high rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full" style={{ width: '40%' }} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Essay Panel */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-outline-variant bg-surface-low">
            <div className="flex-1">
              <p className="text-sm font-semibold text-on-surface">Sarah Jenkins</p>
              <p className="text-xs text-on-surface-variant">Submitted 2 hours ago</p>
            </div>
            <div className="flex gap-1">
              <button className="w-7 h-7 rounded-lg hover:bg-surface-high text-on-surface-variant flex items-center justify-center"><ZoomIn className="h-3.5 w-3.5" /></button>
              <button className="w-7 h-7 rounded-lg hover:bg-surface-high text-on-surface-variant flex items-center justify-center"><ZoomOut className="h-3.5 w-3.5" /></button>
            </div>
            <div className="flex gap-1">
              <button className="w-7 h-7 rounded-lg hover:bg-surface-high text-on-surface-variant flex items-center justify-center"><ChevronLeft className="h-3.5 w-3.5" /></button>
              <button className="w-7 h-7 rounded-lg hover:bg-surface-high text-on-surface-variant flex items-center justify-center"><ChevronRight className="h-3.5 w-3.5" /></button>
            </div>
          </div>
          <div className="p-6">
            <pre className="text-sm text-on-surface whitespace-pre-wrap font-sans leading-relaxed">{ESSAY_TEXT}</pre>
          </div>
        </div>

        {/* Feedback & Rubric Panel */}
        <div className="space-y-4">
          {/* AI Insights */}
          <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-ai" />
              <h2 className="font-display font-semibold text-on-surface">AI Insights</h2>
            </div>
            <div className="space-y-2">
              <div className="p-2.5 bg-green-50 rounded-xl border border-green-100">
                <p className="text-xs font-semibold text-green-700">Strength</p>
                <p className="text-xs text-on-surface-variant mt-0.5">Strong comprehension of steam engine's role and its mechanization impact.</p>
              </div>
              <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-100">
                <p className="text-xs font-semibold text-amber-700">Needs Development</p>
                <p className="text-xs text-on-surface-variant mt-0.5">Global implications underdeveloped — suggest mentioning colonial trade routes and raw material sourcing.</p>
              </div>
            </div>
          </div>

          {/* Rubric Scorecard */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <h2 className="font-display font-semibold text-on-surface">Rubric Scorecard</h2>
            <div className="space-y-3">
              {RUBRIC.map(r => (
                <div key={r.category} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-on-surface">{r.category}</p>
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        defaultValue={r.score}
                        min={0}
                        max={r.max}
                        className="w-12 text-center text-sm font-semibold bg-surface-low border border-outline-variant rounded-lg py-1 text-on-surface"
                      />
                      <span className="text-xs text-on-surface-variant">/ {r.max}</span>
                    </div>
                  </div>
                  <div className="h-1.5 bg-surface-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${(r.score / r.max) * 100}%` }} />
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between pt-2 border-t border-outline-variant">
                <p className="font-semibold text-on-surface">Total</p>
                <p className="font-display font-bold text-xl text-primary">52 / 60</p>
              </div>
            </div>
          </div>

          {/* General Comments */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-semibold text-on-surface">General Comments</h2>
              <div className="flex gap-1">
                <button className="w-7 h-7 rounded-lg hover:bg-surface-low text-on-surface-variant flex items-center justify-center"><Mic className="h-3.5 w-3.5" /></button>
                <button className="w-7 h-7 rounded-lg hover:bg-surface-low text-on-surface-variant flex items-center justify-center"><Video className="h-3.5 w-3.5" /></button>
              </div>
            </div>
            <textarea
              className="w-full text-sm bg-surface-low border border-outline-variant rounded-xl p-3 text-on-surface placeholder:text-on-surface-variant resize-none outline-none focus:border-primary/50"
              rows={4}
              placeholder="Add feedback for the student..."
              defaultValue="Good understanding of key mechanics. Your analysis of urbanization impacts is solid. Consider expanding on the global trade implications in your next draft."
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1 gap-2"><Save className="h-4 w-4" /> Save Draft</Button>
            <Button className="flex-1 gap-2">Submit Grade & Next <ChevronRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </div>
    </div>
  )
}
