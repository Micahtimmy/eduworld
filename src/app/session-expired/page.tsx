'use client'
import Link from 'next/link'
import { GraduationCap, Clock, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function SessionExpiredPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-surface flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center mb-3">
            <GraduationCap className="h-7 w-7 text-white" />
          </div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Your session ended</h1>
          <p className="text-sm text-on-surface-variant mt-1 font-body text-center">
            No worries — this is normal after a period of inactivity.
          </p>
        </div>

        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-6 shadow-sm text-center">
          {/* Clock illustration */}
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-amber-50 mx-auto mb-5">
            <Clock className="h-10 w-10 text-amber-500" />
          </div>

          <p className="font-label font-semibold text-on-surface">
            Signed out for your security
          </p>
          <p className="text-sm text-on-surface-variant font-body mt-2 leading-relaxed">
            For your safety, we automatically sign you out after a period of inactivity. Just sign in again to pick up where you left off.
          </p>

          <div className="mt-6">
            <Link href="/login">
              <Button className="w-full">
                Sign in again
              </Button>
            </Link>
          </div>

          {/* Reassurance note */}
          <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-on-surface-variant font-body">
            <ShieldCheck className="h-3.5 w-3.5 flex-shrink-0 text-green-600" />
            <span>You won&apos;t lose any progress</span>
          </div>
        </div>
      </div>
    </div>
  )
}
