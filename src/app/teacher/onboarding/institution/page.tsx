'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronRight, Hash, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

function ProgressBar({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1 flex-1 rounded-full transition-all duration-300 ${i < step ? 'bg-primary' : 'bg-outline-variant'}`}
        />
      ))}
    </div>
  )
}

export default function TeacherOnboardingInstitutionPage() {
  const [mode, setMode] = useState<'code' | 'manual' | null>(null)
  const [schoolCode, setSchoolCode] = useState('')
  const router = useRouter()

  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Progress */}
        <ProgressBar step={2} total={6} />

        {/* Back */}
        <div className="flex items-center gap-3">
          <Link href="/teacher/onboarding/subjects" className="w-8 h-8 rounded-full bg-surface-lowest border border-outline-variant flex items-center justify-center hover:bg-surface transition-colors">
            <ArrowLeft className="h-4 w-4 text-on-surface" />
          </Link>
          <span className="text-xs text-on-surface-variant font-label">Step 2 of 5</span>
        </div>

        {/* Header */}
        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl text-on-surface">Connect to your school</h1>
          <p className="text-sm text-on-surface-variant">Use your school code to join your institution, or set up your classroom manually.</p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {/* School code option */}
          <button
            onClick={() => setMode('code')}
            className={`w-full text-left rounded-2xl border-2 p-4 transition-all duration-150 ${
              mode === 'code'
                ? 'bg-primary/5 border-primary'
                : 'bg-surface-lowest border-outline-variant hover:border-primary/30'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${mode === 'code' ? 'bg-primary/10' : 'bg-surface-low'}`}>
                <Hash className={`h-5 w-5 ${mode === 'code' ? 'text-primary' : 'text-on-surface-variant'}`} />
              </div>
              <div>
                <p className="text-sm font-semibold text-on-surface">I have a school code</p>
                <p className="text-xs text-on-surface-variant">Your admin provided a code to connect you</p>
              </div>
            </div>
          </button>

          {/* Manual option */}
          <button
            onClick={() => setMode('manual')}
            className={`w-full text-left rounded-2xl border-2 p-4 transition-all duration-150 ${
              mode === 'manual'
                ? 'bg-primary/5 border-primary'
                : 'bg-surface-lowest border-outline-variant hover:border-primary/30'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${mode === 'manual' ? 'bg-primary/10' : 'bg-surface-low'}`}>
                <Building2 className={`h-5 w-5 ${mode === 'manual' ? 'text-primary' : 'text-on-surface-variant'}`} />
              </div>
              <div>
                <p className="text-sm font-semibold text-on-surface">Set up manually</p>
                <p className="text-xs text-on-surface-variant">Create your classroom independently</p>
              </div>
            </div>
          </button>
        </div>

        {/* School code input — shown when code mode selected */}
        {mode === 'code' && (
          <div className="space-y-2">
            <label className="text-sm font-label font-semibold text-on-surface">School code</label>
            <input
              type="text"
              value={schoolCode}
              onChange={e => setSchoolCode(e.target.value.toUpperCase())}
              placeholder="e.g. EWD-SCH-12345"
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-lowest text-on-surface placeholder:text-on-surface-variant outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm font-mono tracking-wider uppercase"
            />
            <p className="text-xs text-on-surface-variant">Your admin can find this code in their dashboard under School Settings.</p>
          </div>
        )}

        {/* Buttons */}
        <div className="space-y-3">
          <Button
            className="w-full h-12 text-base gap-2"
            disabled={!mode || (mode === 'code' && !schoolCode.trim())}
            onClick={() => router.push('/teacher/onboarding/classroom')}
          >
            Continue
            <ChevronRight className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            className="w-full h-11 text-sm text-on-surface-variant"
            onClick={() => router.push('/teacher/onboarding/classroom')}
          >
            Skip for now
          </Button>
        </div>
      </div>
    </div>
  )
}
