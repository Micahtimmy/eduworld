'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { GraduationCap, ArrowLeft, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function EmailVerificationPage() {
  const [countdown, setCountdown] = useState(60)
  const [canResend, setCanResend] = useState(false)
  const [resending, setResending] = useState(false)

  // In a real implementation this email would come from router search params
  const email = 'you@example.com'

  useEffect(() => {
    if (countdown <= 0) {
      setCanResend(true)
      return
    }
    const timer = setTimeout(() => setCountdown(c => c - 1), 1000)
    return () => clearTimeout(timer)
  }, [countdown])

  function formatCountdown(seconds: number): string {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  async function handleResend() {
    if (!canResend) return
    setResending(true)
    // Simulate resend delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    setCountdown(60)
    setCanResend(false)
    setResending(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-surface flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center mb-3">
            <GraduationCap className="h-7 w-7 text-white" />
          </div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Check your inbox</h1>
          <p className="text-sm text-on-surface-variant mt-1 font-body text-center">
            We sent a verification link to your email
          </p>
        </div>

        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-6 shadow-sm text-center">
          {/* Envelope illustration */}
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mx-auto mb-5">
            <Mail className="h-10 w-10 text-primary" />
          </div>

          <p className="font-label font-semibold text-on-surface text-sm">
            We sent a link to
          </p>
          <p className="font-label font-bold text-on-surface mt-0.5 break-all">
            {email}
          </p>
          <p className="text-sm text-on-surface-variant font-body mt-1">
            Click it to verify your account.
          </p>

          <div className="mt-6 space-y-3">
            <Button
              className="w-full"
              onClick={handleResend}
              disabled={!canResend}
              loading={resending}
            >
              {canResend ? 'Resend email' : `Resend in ${formatCountdown(countdown)}`}
            </Button>
          </div>

          <p className="text-xs text-on-surface-variant font-body mt-4">
            Can&apos;t find it? Check your spam or junk folder.
          </p>
        </div>

        <Link
          href="/signup"
          className="flex items-center justify-center gap-1.5 mt-6 text-sm font-label font-semibold text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Wrong email? Go back
        </Link>
      </div>
    </div>
  )
}
