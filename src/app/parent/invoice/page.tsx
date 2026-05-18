'use client'
import Link from 'next/link'
import { CreditCard, CheckCircle, AlertCircle, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'

const TABS = ['All', 'Outstanding', 'Paid', 'Overdue'] as const
type Tab = typeof TABS[number]

const INVOICES = [
  {
    id: 'EW-2023-0156',
    description: 'Term 3 Tuition Fee',
    student: 'Leo Thompson',
    amount: 1800,
    dueDate: 'Oct 15, 2024',
    status: 'unpaid',
  },
  {
    id: 'EW-2023-0157',
    description: 'Sports Activities Fee',
    student: 'Leo Thompson',
    amount: 250,
    dueDate: 'Oct 15, 2024',
    status: 'unpaid',
  },
  {
    id: 'EW-2023-0148',
    description: 'IT Lab Fee',
    student: 'Maya Thompson',
    amount: 120,
    dueDate: 'Oct 1, 2024',
    status: 'paid',
  },
  {
    id: 'EW-2023-0142',
    description: 'Term 2 Tuition Fee',
    student: 'Leo Thompson',
    amount: 1800,
    dueDate: 'Jul 5, 2024',
    status: 'paid',
  },
  {
    id: 'EW-2023-0140',
    description: 'School Trip — Science Museum',
    student: 'Maya Thompson',
    amount: 85,
    dueDate: 'Sep 20, 2024',
    status: 'overdue',
  },
  {
    id: 'EW-2023-0135',
    description: 'Library Resource Fee',
    student: 'Leo Thompson',
    amount: 45,
    dueDate: 'Sep 10, 2024',
    status: 'paid',
  },
]

const STATUS_CONFIG = {
  unpaid: { label: 'Unpaid', variant: 'warning' as const, icon: Clock },
  paid: { label: 'Paid', variant: 'success' as const, icon: CheckCircle },
  overdue: { label: 'Overdue', variant: 'error' as const, icon: AlertCircle },
}

export default function ParentInvoicePage() {
  const [activeTab, setActiveTab] = useState<Tab>('All')

  const filtered = INVOICES.filter(inv => {
    if (activeTab === 'All') return true
    if (activeTab === 'Outstanding') return inv.status === 'unpaid'
    if (activeTab === 'Paid') return inv.status === 'paid'
    if (activeTab === 'Overdue') return inv.status === 'overdue'
    return true
  })

  const outstanding = INVOICES.filter(i => i.status === 'unpaid' || i.status === 'overdue').reduce((s, i) => s + i.amount, 0)
  const paidThisTerm = INVOICES.filter(i => i.status === 'paid').reduce((s, i) => s + i.amount, 0)
  const nextDue = INVOICES.find(i => i.status === 'unpaid')?.dueDate ?? '—'

  const fmt = (n: number) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(n)

  return (
    <div className="p-6 space-y-6">
      <h1 className="font-display font-bold text-2xl text-on-surface">Invoices</h1>

      {/* Summary Strip */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 rounded-2xl p-4 space-y-1">
          <p className="text-xs text-red-600 font-medium">Outstanding</p>
          <p className="font-display font-bold text-xl text-red-700">{fmt(outstanding)}</p>
        </div>
        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 rounded-2xl p-4 space-y-1">
          <p className="text-xs text-green-600 font-medium">Paid this term</p>
          <p className="font-display font-bold text-xl text-green-700">{fmt(paidThisTerm)}</p>
        </div>
        <div className="bg-surface-lowest border border-outline-variant rounded-2xl p-4 space-y-1">
          <p className="text-xs text-on-surface-variant font-medium">Next due</p>
          <p className="font-display font-bold text-xl text-on-surface">{nextDue}</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-1 bg-surface-low rounded-xl p-1 w-fit">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab
                ? 'bg-white dark:bg-surface-mid text-on-surface shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Invoice List */}
      <div className="space-y-3">
        {filtered.map(inv => {
          const cfg = STATUS_CONFIG[inv.status as keyof typeof STATUS_CONFIG]
          const Icon = cfg.icon
          return (
            <div key={inv.id} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                inv.status === 'paid' ? 'bg-green-100' : inv.status === 'overdue' ? 'bg-red-100' : 'bg-amber-100'
              }`}>
                <Icon className={`h-5 w-5 ${inv.status === 'paid' ? 'text-green-600' : inv.status === 'overdue' ? 'text-red-600' : 'text-amber-600'}`} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-sm font-semibold text-on-surface">{inv.description}</p>
                  <span className="text-xs text-on-surface-variant">— {inv.student}</span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <p className="text-xs text-on-surface-variant">Invoice #{inv.id}</p>
                  <span className="text-xs text-on-surface-variant">·</span>
                  <p className="text-xs text-on-surface-variant">{inv.status === 'paid' ? 'Paid' : 'Due'} {inv.dueDate}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <p className="font-display font-bold text-base text-on-surface">{fmt(inv.amount)}</p>
                {inv.status !== 'paid' ? (
                  <Link href="/parent/payment">
                    <Button size="sm" variant={inv.status === 'overdue' ? 'destructive' : 'primary'}>
                      Pay Now
                    </Button>
                  </Link>
                ) : (
                  <Link href={`/parent/invoice/${inv.id}`}>
                    <Badge variant="success" size="sm" className="gap-1">
                      <CheckCircle className="h-3 w-3" /> Paid
                    </Badge>
                  </Link>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
