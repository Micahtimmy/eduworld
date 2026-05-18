'use client'
import Link from 'next/link'
import { ArrowLeft, Download, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const INVOICE = {
  id: 'EW-2023-0156',
  student: 'Leo Thompson',
  school: 'St. Xavier Academy',
  term: 'Term 3 — 2024/25 Academic Year',
  issueDate: 'Sep 25, 2024',
  dueDate: 'Oct 15, 2024',
  status: 'unpaid',
  lineItems: [
    { description: 'Term 3 Tuition Fee (Full Board)', amount: 1600 },
    { description: 'Educational Resources Levy', amount: 120 },
    { description: 'Administration Fee', amount: 80 },
  ],
  subtotal: 1800,
  discount: 0,
  total: 1800,
  paymentHistory: [] as Array<{ date: string; amount: number; method: string }>,
}

const fmt = (n: number) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(n)

export default function InvoiceDetailPage() {
  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <Link href="/parent/invoice">
          <button className="flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-on-surface transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to invoices
          </button>
        </Link>
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="h-3.5 w-3.5" /> Download PDF
        </Button>
      </div>

      {/* Invoice Card */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
        {/* Invoice Header */}
        <div className="bg-primary px-6 py-5 text-white">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-display font-bold text-lg">Invoice</p>
              <p className="text-sm opacity-80">#{INVOICE.id}</p>
            </div>
            <div className="text-right">
              <p className="font-display font-bold text-2xl">{fmt(INVOICE.total)}</p>
              <Badge
                className={`mt-1 ${INVOICE.status === 'paid' ? 'bg-green-400 text-white border-0' : 'bg-amber-400 text-white border-0'}`}
                size="sm"
              >
                {INVOICE.status === 'paid' ? 'Paid' : 'Unpaid'}
              </Badge>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="p-6 space-y-5">
          {/* Student & School */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-xs text-on-surface-variant">Student</p>
              <p className="font-semibold text-on-surface mt-0.5">{INVOICE.student}</p>
              <p className="text-xs text-on-surface-variant mt-0.5">{INVOICE.school}</p>
            </div>
            <div>
              <p className="text-xs text-on-surface-variant">Term</p>
              <p className="font-semibold text-on-surface mt-0.5">{INVOICE.term}</p>
            </div>
            <div>
              <p className="text-xs text-on-surface-variant">Issue Date</p>
              <p className="text-on-surface font-medium mt-0.5">{INVOICE.issueDate}</p>
            </div>
            <div>
              <p className="text-xs text-on-surface-variant">Due Date</p>
              <p className={`font-semibold mt-0.5 ${INVOICE.status === 'unpaid' ? 'text-amber-600' : 'text-on-surface'}`}>
                {INVOICE.dueDate}
              </p>
            </div>
          </div>

          {/* Line Items */}
          <div className="border border-outline-variant rounded-xl overflow-hidden">
            <div className="bg-surface-low px-4 py-2.5 grid grid-cols-3 text-xs font-semibold text-on-surface-variant">
              <span className="col-span-2">Description</span>
              <span className="text-right">Amount</span>
            </div>
            <div className="divide-y divide-outline-variant">
              {INVOICE.lineItems.map((item, i) => (
                <div key={i} className="px-4 py-3 grid grid-cols-3 text-sm">
                  <span className="col-span-2 text-on-surface">{item.description}</span>
                  <span className="text-right text-on-surface font-medium">{fmt(item.amount)}</span>
                </div>
              ))}
            </div>
            <div className="bg-surface-low px-4 py-2.5 space-y-1.5">
              <div className="flex justify-between text-sm text-on-surface-variant">
                <span>Subtotal</span>
                <span>{fmt(INVOICE.subtotal)}</span>
              </div>
              {INVOICE.discount > 0 && (
                <div className="flex justify-between text-sm text-green-600">
                  <span>Discount</span>
                  <span>-{fmt(INVOICE.discount)}</span>
                </div>
              )}
              <div className="flex justify-between text-base font-bold text-on-surface border-t border-outline-variant pt-2">
                <span>Total</span>
                <span>{fmt(INVOICE.total)}</span>
              </div>
            </div>
          </div>

          {/* Due Date Highlight */}
          {INVOICE.status !== 'paid' && (
            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 rounded-xl p-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-amber-800">Payment due {INVOICE.dueDate}</p>
                <p className="text-xs text-amber-600 mt-0.5">Late payments may incur an administrative charge</p>
              </div>
              <Link href="/parent/payment">
                <Button size="md" variant="primary" className="shrink-0">Pay Now</Button>
              </Link>
            </div>
          )}

          {INVOICE.status === 'paid' && (
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 rounded-xl p-4 flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-green-800">Payment received</p>
                <p className="text-xs text-green-600 mt-0.5">Paid on {INVOICE.dueDate} via Visa ending 4242</p>
              </div>
            </div>
          )}

          {/* Payment History */}
          {INVOICE.paymentHistory.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-semibold text-on-surface">Payment History</p>
              {INVOICE.paymentHistory.map((p, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <span className="text-on-surface-variant">{p.date} · {p.method}</span>
                  <span className="font-medium text-on-surface">{fmt(p.amount)}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
