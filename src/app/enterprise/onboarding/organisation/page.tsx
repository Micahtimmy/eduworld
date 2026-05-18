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

const INDUSTRIES = [
  'Technology', 'Financial Services', 'Healthcare', 'Manufacturing',
  'Retail & E-commerce', 'Telecommunications', 'Energy & Utilities',
  'Consulting & Professional Services', 'Media & Entertainment',
  'Government & Public Sector', 'Education', 'Other',
]

const SIZES = [
  { id: '1-50', label: '1 – 50', desc: 'Small team' },
  { id: '51-200', label: '51 – 200', desc: 'Growing organisation' },
  { id: '201-1000', label: '201 – 1,000', desc: 'Mid-size company' },
  { id: '1000+', label: '1,000+', desc: 'Large enterprise' },
]

export default function EnterpriseOnboardingOrganisationPage() {
  const [orgName, setOrgName] = useState('')
  const [industry, setIndustry] = useState('')
  const [size, setSize] = useState('')
  const router = useRouter()

  const canContinue = orgName.trim().length > 0 && industry !== '' && size !== ''

  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Progress */}
        <ProgressBar step={1} total={4} />

        {/* Back */}
        <div className="flex items-center gap-3">
          <Link href="/enterprise/onboarding/welcome" className="w-8 h-8 rounded-full bg-surface-lowest border border-outline-variant flex items-center justify-center hover:bg-surface transition-colors">
            <ArrowLeft className="h-4 w-4 text-on-surface" />
          </Link>
          <span className="text-xs text-on-surface-variant font-label">Step 1 of 3</span>
        </div>

        {/* Header */}
        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl text-on-surface">Your organisation</h1>
          <p className="text-sm text-on-surface-variant">Help us tailor EduWorld Enterprise to your company.</p>
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
              placeholder="e.g. Acme Corporation, TechCorp Nigeria..."
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-lowest text-on-surface placeholder:text-on-surface-variant outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm"
            />
          </div>

          {/* Industry */}
          <div className="space-y-2">
            <label className="text-sm font-label font-semibold text-on-surface">Industry</label>
            <div className="relative">
              <select
                value={industry}
                onChange={e => setIndustry(e.target.value)}
                className="w-full px-4 py-3 pr-10 rounded-xl border border-outline-variant bg-surface-lowest text-on-surface outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm appearance-none"
              >
                <option value="">Select industry...</option>
                {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant pointer-events-none" />
            </div>
          </div>

          {/* Organisation size */}
          <div className="space-y-3">
            <label className="text-sm font-label font-semibold text-on-surface">Organisation size</label>
            <div className="grid grid-cols-2 gap-2">
              {SIZES.map(s => (
                <button
                  key={s.id}
                  onClick={() => setSize(s.id)}
                  className={`rounded-xl border-2 px-4 py-3 text-left transition-all duration-150 ${
                    size === s.id
                      ? 'bg-primary/5 border-primary'
                      : 'bg-surface-lowest border-outline-variant hover:border-primary/30'
                  }`}
                >
                  <p className={`text-sm font-semibold ${size === s.id ? 'text-primary' : 'text-on-surface'}`}>{s.label}</p>
                  <p className="text-xs text-on-surface-variant">{s.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Continue */}
        <Button
          className="w-full h-12 text-base gap-2"
          disabled={!canContinue}
          onClick={() => router.push('/enterprise/onboarding/employees')}
        >
          Continue
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
