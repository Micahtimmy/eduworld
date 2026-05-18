'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertTriangle, CreditCard, Phone } from 'lucide-react'

export default function PaymentFailedPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-6 text-center">
        {/* Icon */}
        <div className="flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center">
            <AlertTriangle className="h-12 w-12 text-amber-500" />
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl text-on-surface">Payment could not be processed</h1>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Your card was declined. Please check your card details or try another card.
          </p>
        </div>

        {/* Reason Card */}
        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 rounded-2xl p-4 text-left space-y-2">
          <p className="text-sm font-semibold text-amber-800">What might have happened</p>
          <ul className="space-y-1.5">
            {[
              'Insufficient funds on the card',
              'Card details entered incorrectly',
              'Card has expired or been cancelled',
              'Bank blocked the transaction for security',
            ].map(reason => (
              <li key={reason} className="flex items-start gap-2 text-xs text-amber-700">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                {reason}
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Link href="/parent/payment">
            <Button size="lg" className="w-full gap-2">
              Try Again
            </Button>
          </Link>
          <Link href="/parent/payment">
            <Button variant="outline" size="lg" className="w-full gap-2">
              <CreditCard className="h-4 w-4" /> Use a Different Card
            </Button>
          </Link>
        </div>

        {/* Help text */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 text-sm text-on-surface-variant space-y-2">
          <p>Contact your bank or our support team if this continues</p>
          <div className="flex items-center justify-center gap-4">
            <a href="mailto:support@eduworld.app" className="flex items-center gap-1.5 text-primary hover:underline text-xs">
              support@eduworld.app
            </a>
            <Link href="/support" className="flex items-center gap-1.5 text-primary hover:underline text-xs">
              <Phone className="h-3.5 w-3.5" /> Help Centre
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
