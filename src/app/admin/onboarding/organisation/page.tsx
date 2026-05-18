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
  'Nigeria', 'Ghana', 'Kenya', 'South Africa', 'Egypt', 'Ethiopia', 'Tanzania',
  'United Kingdom', 'United States', 'Canada', 'Australia', 'India', 'Singapore', 'Other',
]

const TIMEZONES = [
  'Africa/Lagos (WAT, UTC+1)',
  'Africa/Accra (GMT, UTC+0)',
  'Africa/Nairobi (EAT, UTC+3)',
  'Africa/Johannesburg (SAST, UTC+2)',
  'Africa/Cairo (EET, UTC+2)',
  'Europe/London (GMT/BST)',
  'America/New_York (EST/EDT)',
  'America/Los_Angeles (PST/PDT)',
  'Asia/Kolkata (IST, UTC+5:30)',
  'Asia/Singapore (SGT, UTC+8)',
  'Australia/Sydney (AEST/AEDT)',
]

const INSTITUTION_TYPES = ['Primary School', 'Secondary School', 'Polytechnic', 'University', 'Other']

export default function AdminOnboardingOrganisationPage() {
  const [orgName, setOrgName] = useState('')
  const [country, setCountry] = useState('')
  const [timezone, setTimezone] = useState('')
  const [institutionType, setInstitutionType] = useState('')
  const router = useRouter()

  const canContinue = orgName.trim().length > 0 && country !== '' && timezone !== '' && institutionType !== ''

  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Progress */}
        <ProgressBar step={1} total={6} />

        {/* Back */}
        <div className="flex items-center gap-3">
          <Link href="/admin/onboarding/welcome" className="w-8 h-8 rounded-full bg-surface-lowest border border-outline-variant flex items-center justify-center hover:bg-surface transition-colors">
            <ArrowLeft className="h-4 w-4 text-on-surface" />
          </Link>
          <span className="text-xs text-on-surface-variant font-label">Step 1 of 5</span>
        </div>

        {/* Header */}
        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl text-on-surface">Your organisation</h1>
          <p className="text-sm text-on-surface-variant">Tell us about your institution so we can configure it correctly.</p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Org name */}
          <div className="space-y-2">
            <label className="text-sm font-label font-semibold text-on-surface">Organisation name</label>
            <input
              type="text"
              value={orgName}
              onChange={e => setOrgName(e.target.value)}
              placeholder="e.g. Sunshine Academy, University of Lagos..."
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

          {/* Timezone */}
          <div className="space-y-2">
            <label className="text-sm font-label font-semibold text-on-surface">Timezone</label>
            <div className="relative">
              <select
                value={timezone}
                onChange={e => setTimezone(e.target.value)}
                className="w-full px-4 py-3 pr-10 rounded-xl border border-outline-variant bg-surface-lowest text-on-surface outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm appearance-none"
              >
                <option value="">Select timezone...</option>
                {TIMEZONES.map(tz => <option key={tz} value={tz}>{tz}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant pointer-events-none" />
            </div>
          </div>

          {/* Institution type */}
          <div className="space-y-3">
            <label className="text-sm font-label font-semibold text-on-surface">Institution type</label>
            <div className="grid grid-cols-2 gap-2">
              {INSTITUTION_TYPES.map(t => (
                <button
                  key={t}
                  onClick={() => setInstitutionType(t)}
                  className={`py-3 px-3 rounded-xl border text-sm font-semibold text-left transition-all duration-150 ${
                    institutionType === t
                      ? 'bg-primary/5 border-primary text-primary'
                      : 'bg-surface-lowest border-outline-variant text-on-surface hover:border-primary/30'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Continue */}
        <Button
          className="w-full h-12 text-base gap-2"
          disabled={!canContinue}
          onClick={() => router.push('/admin/onboarding/academic-year')}
        >
          Continue
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
