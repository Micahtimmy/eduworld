'use client'
import { TrendingUp, TrendingDown, Download, Plus, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BarChart } from '@/components/shared/charts/BarChart'

const STATS = [
  { icon: '💰', label: 'Total Annual Revenue', value: '£14,284,500', delta: '+12.4%', up: true, sub: '88% of annual target reached' },
  { icon: '✅', label: 'Fee Collection Rate', value: '94.8%', delta: '+2.1%', up: true, sub: 'Optimal — Top 5% Academies' },
  { icon: '⚠️', label: 'Outstanding Debt', value: '£642,310', delta: '-4.2%', up: false, sub: '14 accounts in high-risk' },
  { icon: '⭐', label: 'Premium Subscriptions', value: '£2,105,400', delta: '+18.5%', up: true, sub: '+24 New tiers this week' },
]

const TRANSACTIONS = [
  { initials: 'S', color: 'bg-blue-500', entity: "St. Mary's Trust", sub: 'Annual Licensing', ref: '#EW-2023-0941', category: 'Institutional', amount: '£142,500.00', status: 'Cleared' },
  { initials: 'G', color: 'bg-green-500', entity: 'Global Edu Fund', sub: 'Scholarship Disbursement', ref: '#EW-2023-0882', category: 'Grant', amount: '£89,000.00', status: 'Cleared' },
  { initials: 'P', color: 'bg-purple-500', entity: 'Premium Tier Apex', sub: 'Batch Subscription', ref: '#EW-2023-1004', category: 'Premium', amount: '£24,300.00', status: 'Processing' },
]

const CHART_DATA = [
  { name: 'Jan', value: 1100000 },
  { name: 'Feb', value: 980000 },
  { name: 'Mar', value: 1250000 },
  { name: 'Apr', value: 1180000 },
  { name: 'May', value: 1420000 },
  { name: 'Jun', value: 1350000 },
  { name: 'Jul', value: 900000 },
  { name: 'Aug', value: 850000 },
  { name: 'Sep', value: 1300000 },
  { name: 'Oct', value: 1800000 },
  { name: 'Nov', value: 1600000 },
  { name: 'Dec', value: 1450000 },
]

export default function AdminBillingPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Financial Intelligence</h1>
          <p className="text-sm text-on-surface-variant mt-1">Institutional Finance Overview</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50 border border-green-200">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs font-medium text-green-700">Stripe Sync Active</span>
            <span className="text-xs text-green-600">· 2m ago</span>
          </div>
          <Button size="sm" className="gap-2"><Plus className="h-4 w-4" /> Create Invoice</Button>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map(s => (
          <div key={s.label} className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xl">{s.icon}</span>
              <span className={`text-xs font-semibold flex items-center gap-0.5 ${s.up ? 'text-green-600' : 'text-red-500'}`}>
                {s.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {s.delta}
              </span>
            </div>
            <p className="font-display font-bold text-xl text-on-surface">{s.value}</p>
            <p className="text-xs text-on-surface-variant">{s.label}</p>
            <p className="text-xs text-on-surface-variant/70">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-display font-semibold text-on-surface">Revenue vs. Forecast</h2>
            <p className="text-xs text-on-surface-variant">Monthly comparison — actual vs projected targets</p>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" /> Export
          </Button>
        </div>
        <BarChart data={CHART_DATA} height={220} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Transactions */}
        <div className="lg:col-span-2 bg-surface-lowest rounded-2xl border border-outline-variant p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-semibold text-on-surface">Recent Large Transactions</h2>
            <button className="text-xs font-semibold text-primary hover:underline">View Audit Log →</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-outline-variant">
                  {['Entity', 'Reference', 'Category', 'Amount', 'Status'].map(h => (
                    <th key={h} className="text-left pb-2 text-xs font-semibold uppercase text-on-surface-variant pr-4 last:pr-0">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {TRANSACTIONS.map(t => (
                  <tr key={t.ref} className="hover:bg-surface-low transition-colors">
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${t.color}`}>{t.initials}</div>
                        <div>
                          <p className="text-sm font-medium text-on-surface">{t.entity}</p>
                          <p className="text-xs text-on-surface-variant">{t.sub}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 pr-4 text-xs text-on-surface-variant font-mono">{t.ref}</td>
                    <td className="py-3 pr-4"><Badge variant="secondary" size="sm">{t.category}</Badge></td>
                    <td className="py-3 pr-4 text-sm font-semibold text-on-surface">{t.amount}</td>
                    <td className="py-3">
                      <Badge variant={t.status === 'Cleared' ? 'success' : 'warning'} size="sm">{t.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pending Invoices */}
        <div className="space-y-4">
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5">
            <h2 className="font-display font-semibold text-on-surface mb-1">Pending Invoices</h2>
            <p className="text-xs text-on-surface-variant mb-4">Requiring immediate administrative action</p>
            <div className="space-y-3">
              {[
                { color: 'border-red-400 bg-red-50', badge: 'bg-red-100 text-red-700', label: 'Overdue (>30 Days)', count: '42 Invoices', amount: '£112,400', action: 'Email Reminders' },
                { color: 'border-amber-400 bg-amber-50', badge: 'bg-amber-100 text-amber-700', label: 'Awaiting Verification', count: '12 Documents', amount: '£56,200', action: 'Review' },
                { color: 'border-blue-400 bg-blue-50', badge: 'bg-blue-100 text-blue-700', label: 'Next Batch (Due in 7d)', count: '156 Invoices', amount: '£210,800', action: 'Schedule' },
              ].map(i => (
                <div key={i.label} className={`border-l-4 rounded-r-xl p-3 ${i.color}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${i.badge}`}>{i.label}</span>
                    <button className="text-xs font-semibold text-primary">{i.action}</button>
                  </div>
                  <p className="text-sm font-bold text-on-surface">{i.amount}</p>
                  <p className="text-xs text-on-surface-variant">{i.count}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insight */}
          <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 flex gap-2">
            <Sparkles className="h-4 w-4 text-ai shrink-0 mt-0.5" />
            <p className="text-xs text-on-surface-variant italic">Based on current velocity, 92% of pending invoices are projected to clear within the next billing cycle.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
