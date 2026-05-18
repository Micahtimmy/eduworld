'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

const RECEIPT = {
  amount: '£1,800.00',
  reference: 'EW-2023-0156',
  date: 'Oct 14, 2024 at 10:23 AM',
  student: 'Leo Thompson',
  description: 'Term 3 Tuition Fee',
  email: 'sarah.thompson@email.com',
}

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-6 text-center">
        {/* Animated checkmark */}
        <div className="flex items-center justify-center">
          <div className="relative w-24 h-24">
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center animate-[scale-in_0.4s_ease-out]">
              <svg
                viewBox="0 0 52 52"
                className="w-12 h-12"
                style={{ animation: 'draw-check 0.6s ease-out 0.3s both' }}
              >
                <circle cx="26" cy="26" r="25" fill="none" className="stroke-green-500" strokeWidth="2" />
                <path
                  fill="none"
                  className="stroke-green-600"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 27l8 8 16-16"
                  style={{
                    strokeDasharray: 40,
                    strokeDashoffset: 0,
                    animation: 'drawCheck 0.5s ease-out 0.4s both',
                  }}
                />
              </svg>
            </div>
            <div className="absolute inset-0 rounded-full bg-green-200 animate-ping opacity-30" />
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-1">
          <h1 className="font-display font-bold text-2xl text-on-surface">Payment successful!</h1>
          <p className="text-sm text-on-surface-variant">Your payment has been processed and confirmed</p>
        </div>

        {/* Receipt Card */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 text-left space-y-3">
          <p className="text-sm font-semibold text-on-surface">Receipt Summary</p>
          <div className="space-y-2">
            {[
              { label: 'Amount paid', value: RECEIPT.amount, valueClass: 'font-bold text-green-600' },
              { label: 'Invoice reference', value: RECEIPT.reference },
              { label: 'Date & time', value: RECEIPT.date },
              { label: 'Student', value: RECEIPT.student },
              { label: 'Description', value: RECEIPT.description },
            ].map(row => (
              <div key={row.label} className="flex items-start justify-between gap-2">
                <span className="text-xs text-on-surface-variant">{row.label}</span>
                <span className={`text-xs text-on-surface text-right ${row.valueClass ?? ''}`}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Email confirmation */}
        <div className="flex items-center justify-center gap-2 text-sm text-on-surface-variant">
          <Mail className="h-4 w-4 text-green-600" />
          <span>Email receipt sent to <strong className="text-on-surface">{RECEIPT.email}</strong></span>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Link href="/parent/invoice/EW-2023-0156" className="flex-1">
            <Button variant="outline" size="md" className="w-full">View Invoice</Button>
          </Link>
          <Link href="/parent/invoice" className="flex-1">
            <Button variant="primary" size="md" className="w-full">Back to Invoices</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
