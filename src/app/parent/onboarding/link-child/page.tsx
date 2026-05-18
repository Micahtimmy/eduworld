'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronRight, Plus, UserCircle2, Send } from 'lucide-react'
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

export default function ParentOnboardingLinkChildPage() {
  const [studentId, setStudentId] = useState('')
  const [schoolCode, setSchoolCode] = useState('')
  const [mode, setMode] = useState<'form' | 'invite'>('form')
  const router = useRouter()

  const canContinue = studentId.trim().length > 0 && schoolCode.trim().length > 0

  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Progress */}
        <ProgressBar step={1} total={5} />

        {/* Back */}
        <div className="flex items-center gap-3">
          <Link href="/parent/onboarding/welcome" className="w-8 h-8 rounded-full bg-surface-lowest border border-outline-variant flex items-center justify-center hover:bg-surface transition-colors">
            <ArrowLeft className="h-4 w-4 text-on-surface" />
          </Link>
          <span className="text-xs text-on-surface-variant font-label">Step 1 of 4</span>
        </div>

        {/* Header */}
        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl text-on-surface">Link your child's account</h1>
          <p className="text-sm text-on-surface-variant">Connect to your child's EduWorld account to see their progress.</p>
        </div>

        {/* Mode toggle */}
        <div className="flex gap-2 bg-surface-lowest border border-outline-variant rounded-xl p-1">
          <button
            onClick={() => setMode('form')}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
              mode === 'form' ? 'bg-primary text-white shadow-sm' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Enter details
          </button>
          <button
            onClick={() => setMode('invite')}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
              mode === 'invite' ? 'bg-primary text-white shadow-sm' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Get invitation
          </button>
        </div>

        {mode === 'form' ? (
          <div className="space-y-4">
            {/* Student ID */}
            <div className="space-y-2">
              <label className="text-sm font-label font-semibold text-on-surface">Student ID number</label>
              <input
                type="text"
                value={studentId}
                onChange={e => setStudentId(e.target.value)}
                placeholder="e.g. STU-2024-001234"
                className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-lowest text-on-surface placeholder:text-on-surface-variant outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm"
              />
              <p className="text-xs text-on-surface-variant">Found on your child's school ID card or enrolment letter</p>
            </div>

            {/* School code */}
            <div className="space-y-2">
              <label className="text-sm font-label font-semibold text-on-surface">School code</label>
              <input
                type="text"
                value={schoolCode}
                onChange={e => setSchoolCode(e.target.value.toUpperCase())}
                placeholder="e.g. EWD-SCH-12345"
                className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-lowest text-on-surface placeholder:text-on-surface-variant outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm font-mono tracking-wider uppercase"
              />
              <p className="text-xs text-on-surface-variant">Contact your child's school to get this code</p>
            </div>

            <Button
              className="w-full h-12 text-base gap-2"
              disabled={!canContinue}
              onClick={() => router.push('/parent/onboarding/more-children')}
            >
              Link account
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Invite via child */}
            <div className="bg-surface-lowest border border-outline-variant rounded-2xl p-5 text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Plus className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-on-surface">Ask your child to send an invitation</p>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Your child can tap <strong>Link Parent</strong> in their EduWorld app. You'll receive a notification to accept.
                </p>
              </div>
              <div className="bg-primary/5 border border-primary/15 rounded-xl p-3 flex items-center gap-2">
                <UserCircle2 className="h-4 w-4 text-primary shrink-0" />
                <p className="text-xs text-on-surface-variant text-left">
                  In child's app: <strong className="text-on-surface">Profile → Settings → Link Parent / Guardian</strong>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-1 border-t border-outline-variant" />
              <span className="text-xs text-on-surface-variant font-label">or</span>
              <div className="flex-1 border-t border-outline-variant" />
            </div>

            <Button
              variant="secondary"
              className="w-full h-11 gap-2 text-sm"
              onClick={() => setMode('form')}
            >
              <Send className="h-4 w-4" />
              Enter details manually instead
            </Button>
          </div>
        )}

        {mode === 'invite' && (
          <Button
            variant="ghost"
            className="w-full h-11 text-sm text-on-surface-variant"
            onClick={() => router.push('/parent/onboarding/more-children')}
          >
            I'll do this later
          </Button>
        )}
      </div>
    </div>
  )
}
