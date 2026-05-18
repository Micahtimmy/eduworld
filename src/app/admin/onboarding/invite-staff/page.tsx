'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronRight, Mail, Users } from 'lucide-react'
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

const EMAIL_PREVIEW = `Hi [Name],

You've been invited to join [School Name] on EduWorld — the AI-powered learning platform your school is using this year.

Click the link below to set up your teacher account:
👉 https://eduworld.app/invite/tchr-xxxxxx

This link expires in 7 days.

— The EduWorld Team`

export default function AdminOnboardingInviteStaffPage() {
  const [emails, setEmails] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const router = useRouter()

  const emailCount = emails
    .split('\n')
    .map(e => e.trim())
    .filter(e => e.includes('@')).length

  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Progress */}
        <ProgressBar step={4} total={6} />

        {/* Back */}
        <div className="flex items-center gap-3">
          <Link href="/admin/onboarding/import" className="w-8 h-8 rounded-full bg-surface-lowest border border-outline-variant flex items-center justify-center hover:bg-surface transition-colors">
            <ArrowLeft className="h-4 w-4 text-on-surface" />
          </Link>
          <span className="text-xs text-on-surface-variant font-label">Step 4 of 5</span>
        </div>

        {/* Header */}
        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl text-on-surface">Invite your teachers</h1>
          <p className="text-sm text-on-surface-variant">Paste teacher email addresses, one per line. They'll each receive an invitation email.</p>
        </div>

        {/* Email input */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-label font-semibold text-on-surface">Teacher emails</label>
            {emailCount > 0 && (
              <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-semibold">
                {emailCount} teacher{emailCount !== 1 ? 's' : ''}
              </span>
            )}
          </div>
          <textarea
            value={emails}
            onChange={e => setEmails(e.target.value)}
            placeholder={`teacher1@school.edu\nteacher2@school.edu\nteacher3@school.edu`}
            rows={6}
            className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-lowest text-on-surface placeholder:text-on-surface-variant outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm font-mono resize-none"
          />
        </div>

        {/* Email preview toggle */}
        <div className="bg-surface-lowest border border-outline-variant rounded-2xl overflow-hidden">
          <button
            onClick={() => setShowPreview(v => !v)}
            className="w-full flex items-center gap-3 p-4 hover:bg-surface-low transition-colors"
          >
            <Mail className="h-4 w-4 text-on-surface-variant" />
            <p className="text-sm font-semibold text-on-surface flex-1 text-left">Preview invitation email</p>
            <ChevronRight className={`h-4 w-4 text-on-surface-variant transition-transform ${showPreview ? 'rotate-90' : ''}`} />
          </button>
          {showPreview && (
            <div className="px-4 pb-4">
              <div className="bg-surface-low rounded-xl p-4">
                <pre className="text-xs text-on-surface-variant font-mono whitespace-pre-wrap leading-relaxed">{EMAIL_PREVIEW}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Info note */}
        <div className="flex items-start gap-2">
          <Users className="h-4 w-4 text-on-surface-variant shrink-0 mt-0.5" />
          <p className="text-xs text-on-surface-variant leading-relaxed">
            You can invite more staff anytime from <strong className="text-on-surface">Admin → Staff Management</strong>.
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <Button
            className="w-full h-12 text-base gap-2"
            disabled={emailCount === 0}
            onClick={() => router.push('/admin/onboarding/ready')}
          >
            Send invitations ({emailCount})
            <ChevronRight className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            className="w-full h-11 text-sm text-on-surface-variant"
            onClick={() => router.push('/admin/onboarding/ready')}
          >
            Skip for now
          </Button>
        </div>
      </div>
    </div>
  )
}
