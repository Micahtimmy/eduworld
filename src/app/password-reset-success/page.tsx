'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PasswordResetSuccessPage() {
  const [countdown, setCountdown] = useState(3)
  const router = useRouter()

  useEffect(() => {
    if (countdown <= 0) {
      router.push('/login')
      return
    }
    const timer = setTimeout(() => setCountdown(c => c - 1), 1000)
    return () => clearTimeout(timer)
  }, [countdown, router])

  const progressWidth = `${((3 - countdown) / 3) * 100}%`

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-surface flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center mb-3">
            <GraduationCap className="h-7 w-7 text-white" />
          </div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Password updated!</h1>
          <p className="text-sm text-on-surface-variant mt-1 font-body text-center">
            Your new password is set. You&apos;re good to go.
          </p>
        </div>

        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-6 shadow-sm text-center">
          {/* Animated checkmark */}
          <div className="flex items-center justify-center mx-auto mb-5">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="overflow-visible"
            >
              <circle cx="40" cy="40" r="38" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
              <path
                d="M22 40 L35 53 L58 28"
                stroke="#16a34a"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                strokeDasharray="60"
                strokeDashoffset="0"
                style={{ animation: 'drawCheck 0.5s ease-out forwards' }}
              />
            </svg>
          </div>

          <style>{`
            @keyframes drawCheck {
              from { stroke-dashoffset: 60; }
              to   { stroke-dashoffset: 0;  }
            }
          `}</style>

          <p className="font-label font-semibold text-on-surface">
            All done!
          </p>
          <p className="text-sm text-on-surface-variant font-body mt-1">
            Redirecting to sign in in {countdown}s...
          </p>

          {/* Progress bar */}
          <div className="mt-4 h-1.5 w-full bg-outline-variant rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-1000 ease-linear"
              style={{ width: progressWidth }}
            />
          </div>

          <div className="mt-5">
            <Link href="/login">
              <Button className="w-full">
                Sign in now →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
