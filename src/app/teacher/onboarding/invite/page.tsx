'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronRight, Copy, Check, Upload, Link as LinkIcon } from 'lucide-react'
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

const CLASSROOM_LINK = 'https://eduworld.app/join/cls-a3f7g9k2'

export default function TeacherOnboardingInvitePage() {
  const [copied, setCopied] = useState(false)
  const router = useRouter()

  function handleCopy() {
    navigator.clipboard.writeText(CLASSROOM_LINK)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Progress */}
        <ProgressBar step={4} total={6} />

        {/* Back */}
        <div className="flex items-center gap-3">
          <Link href="/teacher/onboarding/classroom" className="w-8 h-8 rounded-full bg-surface-lowest border border-outline-variant flex items-center justify-center hover:bg-surface transition-colors">
            <ArrowLeft className="h-4 w-4 text-on-surface" />
          </Link>
          <span className="text-xs text-on-surface-variant font-label">Step 4 of 5</span>
        </div>

        {/* Header */}
        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl text-on-surface">Invite your students</h1>
          <p className="text-sm text-on-surface-variant">Choose how you want to bring your students into the classroom.</p>
        </div>

        {/* Classroom link */}
        <div className="bg-surface-lowest border border-outline-variant rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2">
            <LinkIcon className="h-4 w-4 text-primary" />
            <p className="text-sm font-semibold text-on-surface">Your classroom link</p>
          </div>
          <div className="flex items-center gap-2 bg-surface-low rounded-xl border border-outline-variant p-3">
            <p className="text-xs text-on-surface-variant font-mono flex-1 truncate">{CLASSROOM_LINK}</p>
            <button
              onClick={handleCopy}
              className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors shrink-0"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-primary" />
              ) : (
                <Copy className="h-3.5 w-3.5 text-primary" />
              )}
            </button>
          </div>
          <p className="text-xs text-on-surface-variant">Share this link with students — they'll join your classroom instantly after signing up.</p>
        </div>

        {/* Import options */}
        <div className="space-y-3">
          <p className="text-sm font-label font-semibold text-on-surface">Or import a class list</p>

          {/* CSV upload */}
          <button className="w-full rounded-2xl border-2 border-dashed border-outline-variant p-5 text-center hover:border-primary/40 hover:bg-primary/5 transition-all group">
            <Upload className="h-6 w-6 text-on-surface-variant group-hover:text-primary mx-auto mb-2 transition-colors" />
            <p className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Upload CSV roster</p>
            <p className="text-xs text-on-surface-variant mt-1">One student per row: name, email (optional)</p>
          </button>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <Button
            className="w-full h-12 text-base gap-2"
            onClick={() => router.push('/teacher/onboarding/ready')}
          >
            Continue
            <ChevronRight className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            className="w-full h-11 text-sm text-on-surface-variant"
            onClick={() => router.push('/teacher/onboarding/ready')}
          >
            Skip for now
          </Button>
        </div>
      </div>
    </div>
  )
}
