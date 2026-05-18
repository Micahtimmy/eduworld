'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronRight, ChevronDown } from 'lucide-react'
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

const COUNTRIES = [
  'Nigeria', 'Ghana', 'Kenya', 'South Africa', 'Egypt', 'Ethiopia',
  'Tanzania', 'Uganda', 'Rwanda', 'Senegal', 'Cameroon', 'Ivory Coast',
  'United Kingdom', 'United States', 'Canada', 'India', 'Other',
]

export default function GovernmentOnboardingMinistryPage() {
  const [ministryName, setMinistryName] = useState('')
  const [country, setCountry] = useState('')
  const [roleTitle, setRoleTitle] = useState('')
  const router = useRouter()

  const canContinue = ministryName.trim().length > 0 && country !== '' && roleTitle.trim().length > 0

  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Progress */}
        <ProgressBar step={1} total={4} />

        {/* Back */}
        <div className="flex items-center gap-3">
          <Link href="/government/onboarding/welcome" className="w-8 h-8 rounded-full bg-surface-lowest border border-outline-variant flex items-center justify-center hover:bg-surface transition-colors">
            <ArrowLeft className="h-4 w-4 text-on-surface" />
          </Link>
          <span className="text-xs text-on-surface-variant font-label">Step 1 of 3</span>
        </div>

        {/* Header */}
        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl text-on-surface">Ministry details</h1>
          <p className="text-sm text-on-surface-variant">Tell us about your ministry so we can configure the dashboard correctly.</p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Ministry name */}
          <div className="space-y-2">
            <label className="text-sm font-label font-semibold text-on-surface">Ministry name</label>
            <input
              type="text"
              value={ministryName}
              onChange={e => setMinistryName(e.target.value)}
              placeholder="e.g. Federal Ministry of Education"
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-lowest text-on-surface placeholder:text-on-surface-variant outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm"
            />
          </div>

          {/* Country */}
          <div className="space-y-2">
            <label className="text-sm font-label font-semibold text-on-surface">Country</label>
            <div className="relative">
              <select
                value={country}
                onChange={e => setCountry(e.target.value)}
                className="w-full px-4 py-3 pr-10 rounded-xl border border-outline-variant bg-surface-lowest text-on-surface outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm appearance-none"
              >
                <option value="">Select country...</option>
                {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant pointer-events-none" />
            </div>
          </div>

          {/* Role / Title */}
          <div className="space-y-2">
            <label className="text-sm font-label font-semibold text-on-surface">Your role / title</label>
            <input
              type="text"
              value={roleTitle}
              onChange={e => setRoleTitle(e.target.value)}
              placeholder="e.g. Director of Education, Deputy Minister..."
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-lowest text-on-surface placeholder:text-on-surface-variant outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm"
            />
          </div>
        </div>

        {/* Continue */}
        <Button
          className="w-full h-12 text-base gap-2"
          disabled={!canContinue}
          onClick={() => router.push('/government/onboarding/districts')}
        >
          Continue
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
