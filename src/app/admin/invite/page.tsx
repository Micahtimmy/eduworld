'use client'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AdminInvitePage() {
  return (
    <div className="p-6 space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-xl text-on-surface">Add Students</h1>
          <p className="text-sm text-on-surface-variant mt-1">Enroll new learners into your institution&apos;s registry.</p>
        </div>
        <button className="text-on-surface-variant hover:text-on-surface">✕</button>
      </div>

      {/* Mode Cards */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { icon: '👤', title: 'Individual Enrollment', desc: 'Manually enter details for a single student', selected: false },
          { icon: '👥', title: 'Bulk Import', desc: 'Import via CSV or connect external data sources', selected: true },
        ].map(m => (
          <button key={m.title} className={`rounded-2xl border-2 p-4 text-left space-y-2 transition-colors ${m.selected ? 'border-primary bg-primary/5' : 'border-outline-variant bg-surface-lowest hover:border-primary/40'}`}>
            <span className="text-2xl">{m.icon}</span>
            <p className="text-sm font-semibold text-on-surface">{m.title}</p>
            <p className="text-xs text-on-surface-variant">{m.desc}</p>
            {m.selected && <span className="text-primary text-sm">✓</span>}
          </button>
        ))}
      </div>

      {/* Bulk Import Stepper */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-5">
        <div className="flex items-center gap-2">
          {['Upload', 'Map Fields', 'Validate', 'Invite'].map((step, i) => (
            <div key={step} className="flex items-center gap-2 flex-1">
              <div className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold shrink-0 ${i === 0 ? 'bg-primary text-white' : 'bg-surface-high text-on-surface-variant'}`}>{i + 1}</div>
              <span className={`text-xs font-semibold ${i === 0 ? 'text-primary' : 'text-on-surface-variant'} hidden md:block`}>{step}</span>
              {i < 3 && <div className="h-px flex-1 bg-outline-variant" />}
            </div>
          ))}
        </div>

        {/* CSV Drop Zone */}
        <div className="border-2 border-dashed border-outline-variant rounded-2xl p-8 text-center space-y-3">
          <span className="text-4xl">📤</span>
          <p className="text-sm font-semibold text-on-surface">Drop your CSV file here</p>
          <p className="text-xs text-on-surface-variant">or click to browse from your computer</p>
          <Button variant="outline">Select File</Button>
          <button className="block mx-auto text-xs text-primary hover:underline">⬇ Download CSV Template</button>
        </div>

        {/* External Sources */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-on-surface-variant uppercase">External Data Connections</p>
          {[
            { icon: '🎓', label: 'Google Classroom', desc: 'Sync rosters instantly' },
            { icon: '🖥', label: 'SIS Integration', desc: 'Connect your Student Info System' },
          ].map(s => (
            <button key={s.label} className="w-full flex items-center gap-3 p-3 bg-surface-low rounded-xl hover:bg-surface-high transition-colors">
              <span className="text-xl shrink-0">{s.icon}</span>
              <div className="flex-1 text-left">
                <p className="text-sm font-semibold text-on-surface">{s.label}</p>
                <p className="text-xs text-on-surface-variant">{s.desc}</p>
              </div>
              <span className="text-on-surface-variant">›</span>
            </button>
          ))}
        </div>

        {/* AI Banner */}
        <div className="bg-ai/5 border border-ai/20 rounded-xl p-3 flex items-start gap-2">
          <Sparkles className="h-3.5 w-3.5 text-ai mt-0.5 shrink-0" />
          <p className="text-xs text-on-surface-variant">EduWorld AI will automatically detect and map standard fields like First Name, Last Name, and Email from your CSV.</p>
        </div>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" className="flex-1">Cancel</Button>
        <Button className="flex-1">Continue to Mapping →</Button>
      </div>
    </div>
  )
}
