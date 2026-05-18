'use client'
import { Button } from '@/components/ui/button'

const CRITERIA = [
  { label: 'Teaching Clarity', desc: 'Ability to explain complex concepts.' },
  { label: 'Availability', desc: 'Responsiveness and office hour presence.' },
  { label: 'Material Quality', desc: 'Relevance and structure of course materials.' },
]

export default function ScholarLecturerEvaluationPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="font-display font-bold text-2xl text-on-surface">Lecturer Evaluation</h1>
        <p className="text-sm text-on-surface-variant mt-1">Provide constructive feedback for your Fall 2024 courses.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Quantitative Assessment */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <div>
              <h2 className="font-display font-semibold text-on-surface">Quantitative Assessment</h2>
              <p className="text-xs text-on-surface-variant mt-1">Rate the following criteria on a scale of 1 (Poor) to 5 (Excellent).</p>
            </div>
            <div className="space-y-4">
              {CRITERIA.map(c => (
                <div key={c.label}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm font-semibold text-on-surface">{c.label}</p>
                      <p className="text-xs text-on-surface-variant">{c.desc}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map(n => (
                      <button key={n} className={`flex-1 py-2 rounded-xl text-sm font-bold border ${n === 4 ? 'bg-primary text-white border-primary' : 'bg-surface-low border-outline-variant text-on-surface hover:border-primary/50'}`}>{n}</button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Constructive Suggestions */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">✏️</span>
              <h2 className="font-display font-semibold text-on-surface">Constructive Suggestions</h2>
            </div>
            <textarea
              className="w-full h-32 px-3 py-2.5 text-sm bg-surface-low border border-outline-variant rounded-xl outline-none focus:border-primary placeholder:text-on-surface-variant resize-none"
              placeholder="Open Form Feedback — share your thoughts on how to improve the course..."
            />
            <Button className="w-full">Submit Evaluation</Button>
          </div>
        </div>

        {/* Lecturer Profile */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold text-primary mx-auto">AV</div>
            <p className="font-display font-semibold text-on-surface">Dr. Alistair Vance</p>
            <p className="text-xs text-on-surface-variant">Department of Computer Science</p>
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">CS401: Algorithms</span>
          </div>
          <div className="border-t border-outline-variant pt-4 space-y-2">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-ai text-xs">✦</span>
              <p className="text-xs font-semibold text-on-surface">Teaching Style Insights</p>
            </div>
            <p className="text-xs text-on-surface-variant">Strong theoretical rigor. Students consistently highlight comprehensive slide decks and thorough problem walkthroughs.</p>
            <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">Highly Theoretical</span>
          </div>
        </div>
      </div>
    </div>
  )
}
