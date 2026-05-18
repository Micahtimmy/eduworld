'use client'
import { Sparkles, TrendingUp, TrendingDown, AlertTriangle, Plus, CreditCard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BarChart } from '@/components/shared/charts/BarChart'
import { cn } from '@/lib/utils'

const KPIS = [
  { label: 'Total Annual Revenue', value: '£14,284,500', change: '+12.4%', note: '88% of annual target reached', positive: true, icon: TrendingUp },
  { label: 'Fee Collection Rate', value: '94.8%', change: '+2.1%', note: 'Excellent performance', positive: true, icon: TrendingUp },
  { label: 'Outstanding Debt', value: '£642,310', change: '-4.2%', note: '14 accounts in high-risk', positive: false, icon: TrendingDown, warning: true },
  { label: 'Premium Subscriptions', value: '£2,105,400', change: '+18.5%', note: '+24 New tiers this week', positive: true, icon: TrendingUp },
]

const REVENUE_DATA = [
  { name: 'Jan', value: 1200000 },
  { name: 'Mar', value: 980000 },
  { name: 'May', value: 1450000 },
  { name: 'Jul', value: 760000 },
  { name: 'Sep', value: 1320000 },
  { name: 'Oct', value: 1800000 },
  { name: 'Dec', value: 1100000 },
]

const TRANSACTIONS = [
  { entity: "St. Mary's Trust", ref: '#EW-2023-0941', category: 'Institutional', amount: '£142,500', status: 'Cleared' },
  { entity: 'Global Edu Fund', ref: '#EW-2023-0882', category: 'Grant', amount: '£89,000', status: 'Cleared' },
  { entity: 'Premium Tier Apex', ref: '#EW-2023-1004', category: 'Premium', amount: '£24,300', status: 'Processing' },
]

const PENDING = [
  { label: 'Overdue >30 days', count: '42 invoices', amount: '£112,400', action: 'Email Reminders', color: 'border-red-200 bg-red-50' },
  { label: 'Awaiting Verification', count: '12 documents', amount: '£56,200', action: 'Review', color: 'border-amber-200 bg-amber-50' },
  { label: 'Next Batch (7 days)', count: '156 invoices', amount: '£210,800', action: 'Preview', color: 'border-outline-variant bg-surface-low' },
]

export default function AdminFinancePage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-on-surface-variant">EduWorld Global · London Central Academy</p>
          <h1 className="font-display font-bold text-2xl text-on-surface mt-1">Institutional Finance Overview</h1>
          <p className="text-sm text-on-surface-variant mt-1">Director of Finance · Revenue, collections, and premium subscriptions.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2"><Sparkles className="h-4 w-4" /> Launch Intelligence AI</Button>
          <Button size="sm" className="gap-2"><Plus className="h-4 w-4" /> Create Invoice</Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {KPIS.map(k => (
          <div key={k.label} className={cn('bg-surface-lowest rounded-2xl border p-5 space-y-2', k.warning ? 'border-amber-200' : 'border-outline-variant')}>
            <div className="flex items-center justify-between">
              <p className="text-xs text-on-surface-variant">{k.label}</p>
              <k.icon className={cn('h-4 w-4', k.positive ? 'text-green-600' : 'text-red-500')} />
            </div>
            <p className="font-display font-bold text-xl text-on-surface">{k.value}</p>
            <p className={cn('text-xs font-semibold', k.positive ? 'text-green-600' : 'text-red-600')}>{k.change}</p>
            <p className="text-xs text-on-surface-variant">{k.note}</p>
          </div>
        ))}
      </div>

      {/* Revenue vs. Forecast */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display font-semibold text-on-surface">Revenue vs. Forecast</h2>
            <p className="text-xs text-on-surface-variant">October callout: Actual £1.8M / Target £1.5M (+12%)</p>
          </div>
          <Button variant="outline" size="sm">Export</Button>
        </div>
        <BarChart data={REVENUE_DATA} height={180} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Transactions */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Recent Large Transactions</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-outline-variant">
                  {['Entity', 'Reference', 'Category', 'Amount', 'Status'].map(h => (
                    <th key={h} className="text-left pb-2 text-xs font-semibold uppercase text-on-surface-variant pr-3 last:pr-0">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {TRANSACTIONS.map(t => (
                  <tr key={t.ref} className="hover:bg-surface-low transition-colors">
                    <td className="py-3 pr-3 text-sm font-semibold text-on-surface">{t.entity}</td>
                    <td className="py-3 pr-3 text-xs font-mono text-on-surface-variant">{t.ref}</td>
                    <td className="py-3 pr-3 text-xs text-on-surface-variant">{t.category}</td>
                    <td className="py-3 pr-3 text-sm font-bold text-on-surface">{t.amount}</td>
                    <td className="py-3">
                      <span className={cn('text-xs px-2 py-0.5 rounded-full font-medium', t.status === 'Cleared' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700')}>{t.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pending Invoices */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <h2 className="font-display font-semibold text-on-surface">Pending Invoices</h2>
          </div>
          <div className="space-y-3">
            {PENDING.map(p => (
              <div key={p.label} className={cn('flex items-center justify-between p-3 rounded-xl border', p.color)}>
                <div>
                  <p className="text-sm font-semibold text-on-surface">{p.label}</p>
                  <p className="text-xs text-on-surface-variant">{p.count} · {p.amount}</p>
                </div>
                <button className="text-xs text-primary hover:underline font-semibold">{p.action}</button>
              </div>
            ))}
          </div>

          {/* AI Insight */}
          <div className="bg-ai/5 border border-ai/20 rounded-xl p-3 flex items-start gap-2">
            <Sparkles className="h-4 w-4 text-ai mt-0.5 shrink-0" />
            <p className="text-xs text-on-surface-variant">92% of pending invoices are projected to clear within the next <strong className="text-on-surface">8 business days</strong> based on payment patterns.</p>
          </div>

          {/* Stripe sync */}
          <div className="flex items-center gap-2 text-xs text-on-surface-variant">
            <CreditCard className="h-4 w-4 text-green-500" />
            <span>Stripe Sync Active — Last synced 2m ago</span>
          </div>
        </div>
      </div>
    </div>
  )
}
