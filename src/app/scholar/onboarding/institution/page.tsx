'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronRight, Building2 } from 'lucide-react'
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

export default function ScholarOnboardingInstitutionPage() {
  const [institution, setInstitution] = useState('')
  const router = useRouter()

  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Progress */}
        <ProgressBar step={2} total={6} />

        {/* Back */}
        <div className="flex items-center gap-3">
          <Link href="/scholar/onboarding/programme" className="w-8 h-8 rounded-full bg-surface-lowest border border-outline-variant flex items-center justify-center hover:bg-surface transition-colors">
            <ArrowLeft className="h-4 w-4 text-on-surface" />
          </Link>
          <span className="text-xs text-on-surface-variant font-label">Step 2 of 5</span>
        </div>

        {/* Header */}
        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl text-on-surface">Your institution</h1>
          <p className="text-sm text-on-surface-variant">Which university or college are you studying at?</p>
        </div>

        {/* Institution input */}
        <div className="space-y-2">
          <label className="text-sm font-label font-semibold text-on-surface">Institution name</label>
          <div className="relative">
            <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant" />
            <input
              type="text"
              value={institution}
              onChange={e => setInstitution(e.target.value)}
              placeholder="e.g. University of Lagos, MIT..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-outline-variant bg-surface-lowest text-on-surface placeholder:text-on-surface-variant outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm"
            />
          </div>
        </div>

        {/* Info note */}
        <div className="bg-surface-lowest border border-outline-variant rounded-xl p-4">
          <p className="text-xs text-on-surface-variant leading-relaxed">
            <span className="font-semibold text-on-surface">Connect your uni later too.</span>
            {' '}If your institution is on EduWorld, linking will give you access to your enrolled courses, classmates, and library resources.
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <Button
            className="w-full h-12 text-base gap-2"
            disabled={!institution.trim()}
            onClick={() => router.push('/scholar/onboarding/courses')}
          >
            Continue
            <ChevronRight className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            className="w-full h-11 text-sm text-on-surface-variant"
            onClick={() => router.push('/scholar/onboarding/courses')}
          >
            Skip for now
          </Button>
        </div>
      </div>
    </div>
  )
}
