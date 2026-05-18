'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const YEARS = ['1st', '2nd', '3rd', '4th', 'Masters', 'PhD']

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

export default function ScholarOnboardingProgrammePage() {
  const [programme, setProgramme] = useState('')
  const [year, setYear] = useState('')
  const router = useRouter()

  const canContinue = programme.trim().length > 0 && year !== ''

  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Progress */}
        <ProgressBar step={1} total={6} />

        {/* Back */}
        <div className="flex items-center gap-3">
          <Link href="/scholar/onboarding/welcome" className="w-8 h-8 rounded-full bg-surface-lowest border border-outline-variant flex items-center justify-center hover:bg-surface transition-colors">
            <ArrowLeft className="h-4 w-4 text-on-surface" />
          </Link>
          <span className="text-xs text-on-surface-variant font-label">Step 1 of 5</span>
        </div>

        {/* Header */}
        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl text-on-surface">Your programme</h1>
          <p className="text-sm text-on-surface-variant">Tell us what you're studying so we can personalise your experience.</p>
        </div>

        {/* Programme input */}
        <div className="space-y-2">
          <label className="text-sm font-label font-semibold text-on-surface">Programme / Degree</label>
          <input
            type="text"
            value={programme}
            onChange={e => setProgramme(e.target.value)}
            placeholder="e.g. BSc Computer Science, MBA, LLB..."
            className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-lowest text-on-surface placeholder:text-on-surface-variant outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm"
          />
        </div>

        {/* Year selector */}
        <div className="space-y-3">
          <label className="text-sm font-label font-semibold text-on-surface">Year of study</label>
          <div className="grid grid-cols-3 gap-2">
            {YEARS.map(y => (
              <button
                key={y}
                onClick={() => setYear(y)}
                className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all duration-150 ${
                  year === y
                    ? 'bg-primary text-white border-primary shadow-md shadow-primary/20'
                    : 'bg-surface-lowest border-outline-variant text-on-surface hover:border-primary/50 hover:bg-primary/5'
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        {/* Continue */}
        <Button
          className="w-full h-12 text-base gap-2"
          disabled={!canContinue}
          onClick={() => router.push('/scholar/onboarding/institution')}
        >
          Continue
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
