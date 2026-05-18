'use client'
import { Sparkles, Download, Plus, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DonutChart } from '@/components/shared/charts/DonutChart'
import { cn } from '@/lib/utils'

const TRANSACTIONS = [
  { date: 'Oct 24, 2023 14:32 PM', event: 'Perfect Score: Math Quiz Algebraic Foundations Module 4', category: 'Academic Achievement', amount: +500, status: 'Credited' },
  { date: 'Oct 23, 2023 09:15 AM', event: 'Unlocked: Advanced Python Course Premium Learning Path', category: 'Course Unlock', amount: -1200, status: 'Redeemed' },
  { date: 'Oct 22, 2023 17:45 PM', event: 'Weekly Streak Reward 7 Consecutive Days Active', category: 'Behavior Reward', amount: +250, status: 'Credited' },
  { date: 'Oct 21, 2023 11:20 AM', event: 'Legendary Sword Avatar Item Virtual Store Purchase', category: 'Store Item', amount: -3500, status: 'Purchased' },
]

const CATEGORIES = [
  { name: 'Store Items', value: 45, color: '#6366f1' },
  { name: 'Course Unlocks', value: 30, color: '#22c55e' },
  { name: 'Game Avatars', value: 25, color: '#f59e0b' },
]

export default function ParentXPActivityPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-on-surface-variant">Finance › XP Activity</p>
          <h1 className="font-display font-bold text-2xl text-on-surface mt-1">XP Activity Log</h1>
          <p className="text-sm text-on-surface-variant mt-1">Educational rewards & redemption history for Liam's account.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2"><Download className="h-4 w-4" /> Export CSV</Button>
          <Button size="sm" className="gap-2"><Plus className="h-4 w-4" /> Grant Manual XP</Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-1">
          <p className="text-xs text-on-surface-variant">Available Balance</p>
          <p className="font-display font-bold text-3xl text-on-surface">12,450 XP</p>
        </div>
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-2">
          <p className="text-xs text-on-surface-variant">Tier Progress (Gold)</p>
          <div className="h-2 bg-surface-high rounded-full overflow-hidden">
            <div className="h-full bg-amber-500 rounded-full" style={{ width: '85%' }} />
          </div>
          <p className="text-xs text-amber-600 font-semibold">85% to next tier</p>
        </div>
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-1">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <p className="text-xs text-on-surface-variant">Earned This Month</p>
          </div>
          <p className="font-display font-bold text-3xl text-on-surface">+2,800 XP</p>
          <div className="flex items-center gap-1">
            <Sparkles className="h-3 w-3 text-ai" />
            <p className="text-xs text-ai">15% more than last month</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Spending Categories */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Top Spending Categories</h2>
          <DonutChart data={CATEGORIES} height={160} />
          <div className="space-y-2">
            {CATEGORIES.map(c => (
              <div key={c.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                  <span className="text-xs text-on-surface-variant">{c.name}</span>
                </div>
                <span className="text-xs font-semibold text-on-surface">{c.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Transaction Table */}
        <div className="lg:col-span-2 bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-semibold text-on-surface">Transaction History</h2>
            <div className="flex gap-2">
              {['All', 'Earned', 'Spent'].map((t, i) => (
                <button key={t} className={cn('text-xs px-3 py-1 rounded-full transition-colors', i === 0 ? 'bg-primary text-white' : 'border border-outline-variant text-on-surface-variant hover:bg-surface-low')}>{t}</button>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-outline-variant">
                  {['Date & Time', 'Transaction', 'Category', 'Amount', 'Status'].map(h => (
                    <th key={h} className="text-left pb-2 text-xs font-semibold uppercase text-on-surface-variant pr-4 last:pr-0">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {TRANSACTIONS.map(t => (
                  <tr key={t.date} className="hover:bg-surface-low transition-colors">
                    <td className="py-3 pr-4 text-xs text-on-surface-variant whitespace-nowrap">{t.date}</td>
                    <td className="py-3 pr-4 text-sm text-on-surface max-w-xs">{t.event}</td>
                    <td className="py-3 pr-4 text-xs text-on-surface-variant">{t.category}</td>
                    <td className={cn('py-3 pr-4 text-sm font-bold whitespace-nowrap', t.amount > 0 ? 'text-green-600' : 'text-red-600')}>
                      {t.amount > 0 ? '+' : ''}{t.amount.toLocaleString()} XP
                    </td>
                    <td className="py-3 text-xs text-on-surface-variant">{t.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-on-surface-variant">Showing 1 to 4 of 128 transactions</p>
        </div>
      </div>

      {/* AI Analysis */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-ai" />
          <h2 className="font-display font-semibold text-on-surface">EduWorld AI Transaction Analysis</h2>
        </div>
        <p className="text-sm text-on-surface-variant">Liam earns XP <strong className="text-on-surface">~20% faster in Science vs. Math</strong>. He prefers larger premium unlocks over small store items — a strong signal of high intrinsic motivation.</p>
        <Button size="sm" className="bg-ai hover:bg-ai/90 gap-2">View Full Learning Report</Button>
      </div>
    </div>
  )
}
