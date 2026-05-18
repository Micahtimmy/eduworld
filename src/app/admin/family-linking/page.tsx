'use client'
import { Sparkles, Search, ArrowLeft, ArrowRight, X, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

const STEPS = [
  { label: 'Profile', done: true },
  { label: 'Family', active: true },
  { label: 'Academic', pending: true },
]

export default function AdminFamilyLinkingPage() {
  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant w-full max-w-lg shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-outline-variant">
          <div>
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">EWD-008</span>
            <p className="font-display font-semibold text-on-surface mt-1">Individual Enrollment Step 2</p>
          </div>
          <button className="text-on-surface-variant hover:text-on-surface"><X className="h-4 w-4" /></button>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center gap-0 px-5 py-4 border-b border-outline-variant">
          {STEPS.map((s, i) => (
            <div key={s.label} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${s.done ? 'bg-green-500 text-white' : s.active ? 'bg-primary text-white' : 'bg-surface-high text-on-surface-variant border border-outline-variant'}`}>
                  {s.done ? '✓' : i + 1}
                </div>
                <p className="text-xs mt-1 font-semibold text-on-surface-variant">{s.label}</p>
              </div>
              {i < STEPS.length - 1 && <div className={`h-0.5 w-full ${STEPS[i + 1].done || STEPS[i + 1].active ? 'bg-primary' : 'bg-surface-high'}`} />}
            </div>
          ))}
        </div>

        <div className="p-5 space-y-4">
          <div>
            <h2 className="font-display font-semibold text-on-surface">Family & Guardian Link</h2>
            <p className="text-xs text-on-surface-variant mt-1">Establish household connection. Search existing accounts or create a new guardian profile.</p>
          </div>

          {/* AI Insight */}
          <div className="bg-ai/5 border border-ai/20 rounded-xl p-3">
            <div className="flex items-center gap-1.5 mb-1">
              <Sparkles className="h-3.5 w-3.5 text-ai" />
              <span className="text-xs font-semibold text-ai">EduWorld AI Insight:</span>
            </div>
            <p className="text-xs text-on-surface-variant">2 potential siblings already enrolled under &quot;The Doe Family.&quot; Would you like to link Jane to this household?</p>
            <Button size="sm" className="mt-2 h-7 text-xs gap-1"><Users className="h-3 w-3" /> Link Household</Button>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 p-1 bg-surface-low rounded-xl">
            {['Search Existing Family', 'Add New Guardian'].map((t, i) => (
              <button key={t} className={`flex-1 px-3 py-1.5 rounded-lg text-xs font-semibold ${i === 0 ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-high'}`}>{t}</button>
            ))}
          </div>

          {/* Search */}
          <div className="space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant" />
              <input className="w-full pl-9 pr-3 py-2 text-sm bg-surface-low border border-outline-variant rounded-xl outline-none focus:border-primary placeholder:text-on-surface-variant" placeholder="Search families..." />
            </div>
            <div>
              <p className="text-xs font-semibold text-on-surface-variant mb-2">Search Results (1)</p>
              <div className="flex items-center gap-3 p-3 bg-surface-low border border-primary/20 rounded-xl">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold text-sm text-on-surface">The Doe Family</p>
                  <p className="text-xs text-on-surface-variant">Primary: John Doe · (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-2 p-5 border-t border-outline-variant">
          <Button variant="outline" size="sm" className="gap-1.5"><ArrowLeft className="h-3.5 w-3.5" /> Back</Button>
          <div className="flex-1" />
          <Button size="sm" className="gap-1.5">Next: Academic Assignment <ArrowRight className="h-3.5 w-3.5" /></Button>
        </div>
      </div>
    </div>
  )
}
