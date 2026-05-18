'use client'
import Link from 'next/link'
import { GraduationCap, AlertTriangle, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AccountSuspendedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-surface flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center mb-3">
            <GraduationCap className="h-7 w-7 text-white" />
          </div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Account temporarily restricted</h1>
          <p className="text-sm text-on-surface-variant mt-1 font-body text-center">
            Your account needs attention — we&apos;re here to help.
          </p>
        </div>

        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-6 shadow-sm text-center">
          {/* Amber warning illustration */}
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-amber-50 mx-auto mb-5">
            <AlertTriangle className="h-10 w-10 text-amber-500" />
          </div>

          {/* Amber badge strip */}
          <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
            <span className="text-xs font-label font-semibold text-amber-700">Access restricted</span>
          </div>

          <p className="font-label font-semibold text-on-surface">
            This is temporary
          </p>
          <p className="text-sm text-on-surface-variant font-body mt-2 leading-relaxed">
            Your account has been restricted, usually due to unusual activity or a policy review. Reach out to support and we&apos;ll get things sorted quickly.
          </p>

          <div className="mt-6 space-y-3">
            <Link href="/support">
              <Button className="w-full gap-2">
                Contact support
                <ExternalLink className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="mt-4">
            <Link
              href="/support#account-restrictions"
              className="text-xs font-label font-semibold text-primary hover:underline"
            >
              Learn more about account restrictions
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
