'use client'
import { Sparkles, Upload, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const STEPS = ['Upload', 'Map Fields', 'Validate', 'Invite']

export default function AdminStudentIntakePage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">EWD-005</span>
          </div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Add Students</h1>
          <p className="text-sm text-on-surface-variant mt-1">Enroll new learners into your institution&apos;s registry.</p>
        </div>
        <button className="text-on-surface-variant hover:text-on-surface"><X className="h-5 w-5" /></button>
      </div>

      {/* Panel Selection */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3 opacity-60 cursor-pointer hover:opacity-80">
          <div className="w-10 h-10 rounded-xl bg-surface-high flex items-center justify-center text-xl">👤</div>
          <p className="font-semibold text-on-surface">Individual Enrollment</p>
          <p className="text-xs text-on-surface-variant">Manually enter student details one at a time.</p>
        </div>
        <div className="bg-primary/5 border-2 border-primary rounded-2xl p-5 space-y-3 cursor-pointer relative">
          <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</div>
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-xl">👥</div>
          <p className="font-semibold text-on-surface">Bulk Import</p>
          <p className="text-xs text-on-surface-variant">Import via CSV or connect to external systems.</p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center gap-0 mb-6">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${i === 0 ? 'bg-primary text-white' : 'bg-surface-high text-on-surface-variant border border-outline-variant'}`}>
                  {i + 1}
                </div>
                <p className="text-xs mt-1 text-on-surface-variant">{s}</p>
              </div>
              {i < STEPS.length - 1 && <div className="h-0.5 w-full bg-surface-high" />}
            </div>
          ))}
        </div>

        {/* Upload Zone */}
        <div className="border-2 border-dashed border-outline-variant rounded-2xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
          <Upload className="h-10 w-10 text-on-surface-variant mx-auto mb-3" />
          <p className="font-semibold text-on-surface">Drop your CSV file here</p>
          <p className="text-xs text-on-surface-variant mt-1 mb-4">or click to browse from your computer</p>
          <Button size="sm" variant="outline">Select File</Button>
          <p className="text-xs text-primary hover:underline mt-2 cursor-pointer">Download CSV Template</p>
        </div>

        {/* External Data */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-on-surface-variant">Or import from external systems:</p>
          <div className="flex items-center gap-3 p-3 bg-surface-low rounded-xl cursor-pointer hover:bg-surface-high">
            <div className="w-8 h-8 rounded-lg bg-white border border-outline-variant flex items-center justify-center text-sm font-bold text-green-600">G</div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-on-surface">Google Classroom</p>
              <p className="text-xs text-on-surface-variant">Sync rosters instantly</p>
            </div>
            <span className="text-primary text-lg">›</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-surface-low rounded-xl cursor-pointer hover:bg-surface-high">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">🔌</div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-on-surface">SIS Integration</p>
              <p className="text-xs text-on-surface-variant">Connect via API</p>
            </div>
            <span className="text-primary text-lg">›</span>
          </div>
        </div>

        {/* AI Banner */}
        <div className="bg-ai/5 border border-ai/20 rounded-xl p-3">
          <div className="flex items-center gap-1.5 mb-1">
            <Sparkles className="h-3.5 w-3.5 text-ai" />
            <span className="text-xs font-semibold text-ai">EduWorld AI</span>
          </div>
          <p className="text-xs text-on-surface-variant">AI will auto-detect standard fields (First Name, Last Name, Email) from your CSV and map them automatically.</p>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Continue to Mapping</Button>
      </div>
    </div>
  )
}
