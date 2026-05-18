'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, Copy, Check, Globe, BarChart3, CheckCircle } from 'lucide-react'
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

const MINISTRY_CODE = 'EWD-GOV-M4K9'

export default function GovernmentOnboardingReadyPage() {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(MINISTRY_CODE)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Progress — all filled */}
        <ProgressBar step={4} total={4} />

        {/* Celebration */}
        <div className="text-center space-y-4 pt-4">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/30">
              <Globe className="h-10 w-10 text-white" />
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="font-display font-bold text-3xl text-on-surface">Ministry dashboard ready</h1>
            <p className="text-base text-on-surface-variant">Your national education intelligence portal is live.</p>
          </div>
        </div>

        {/* Ministry code */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 space-y-3">
          <p className="text-sm font-semibold text-on-surface">Your ministry code</p>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Share this code with school administrators to connect their institutions to your ministry dashboard.
          </p>
          <div className="flex items-center gap-2 bg-surface-lowest rounded-xl border border-primary/20 p-3">
            <code className="text-base font-mono font-bold text-primary flex-1 tracking-widest">{MINISTRY_CODE}</code>
            <button
              onClick={handleCopy}
              className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors shrink-0"
            >
              {copied ? (
                <Check className="h-4 w-4 text-primary" />
              ) : (
                <Copy className="h-4 w-4 text-primary" />
              )}
            </button>
          </div>
          <p className="text-xs text-on-surface-variant">
            Schools enter this under <strong className="text-on-surface">Settings → Connect to Ministry</strong>
          </p>
        </div>

        {/* What you can do */}
        <div className="bg-surface-lowest border border-outline-variant rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-primary" />
            <p className="text-sm font-semibold text-on-surface">Available from your dashboard</p>
          </div>
          {[
            'National enrolment statistics',
            'School performance by district',
            'Attendance and dropout trends',
            'Gender parity reports',
            'Export data for government reports',
          ].map(item => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 text-ai shrink-0" />
              <p className="text-sm text-on-surface-variant">{item}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link href="/government" className="block">
          <Button className="w-full h-12 text-base gap-2">
            Enter ministry dashboard
            <ChevronRight className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
