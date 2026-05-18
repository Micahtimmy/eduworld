'use client'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const TRANSACTIONS = [
  {
    date: 'Oct 24, 2023 14:32 PM',
    title: 'Perfect Score: Math Quiz — Algebraic Foundations Module 4',
    category: 'Academic Achievement',
    amount: '+500 XP',
    status: 'Credited',
    positive: true,
  },
  {
    date: 'Oct 23, 2023 09:15 AM',
    title: 'Unlocked: Advanced Python Course — Premium Learning Path',
    category: 'Course Unlock',
    amount: '-1,200 XP',
    status: 'Redeemed',
    positive: false,
  },
  {
    date: 'Oct 22, 2023 17:45 PM',
    title: 'Weekly Streak Reward — 7 Consecutive Days Active',
    category: 'Behavior Reward',
    amount: '+250 XP',
    status: 'Credited',
    positive: true,
  },
  {
    date: 'Oct 21, 2023 11:20 AM',
    title: 'Legendary Sword Avatar — Virtual Store Purchase',
    category: 'Store Item',
    amount: '-3,500 XP',
    status: 'Purchased',
    positive: false,
  },
]

const SPENDING = [
  { icon: '🛍', label: 'Store Items', pct: 45 },
  { icon: '🎓', label: 'Course Unlocks', pct: 30 },
  { icon: '🎮', label: 'Game Avatars', pct: 25 },
]

export default function ParentXpHistoryPage() {
  return (
    <div className="p-4 space-y-5 pb-24">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-on-surface-variant">Finance › XP Activity</p>
          <h1 className="font-display font-bold text-xl text-on-surface mt-0.5">XP Activity Log</h1>
          <p className="text-xs text-on-surface-variant">Monitor educational rewards and redemption history for Liam&apos;s account.</p>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap">
        <Button variant="outline" size="sm" className="gap-1">⬇ Export CSV</Button>
        <Button size="sm" className="gap-1">+ Grant Manual XP</Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-2">
          <p className="text-xs text-on-surface-variant">Available Balance</p>
          <p className="font-display font-bold text-2xl text-on-surface">12,450 XP</p>
          <p className="text-xs text-on-surface-variant">Tier Progress (Gold)</p>
          <div className="h-1.5 bg-amber-100 rounded-full overflow-hidden">
            <div className="h-full bg-amber-500 rounded-full" style={{ width: '85%' }} />
          </div>
        </div>
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-2">
          <p className="text-xs text-on-surface-variant">Earned This Month</p>
          <p className="font-display font-bold text-2xl text-green-600">+2,800</p>
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-3 w-3 text-ai" />
            <p className="text-xs text-ai font-semibold">15% more than last month</p>
          </div>
        </div>
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
          <p className="text-xs text-on-surface-variant font-semibold">Top Spending Categories</p>
          {SPENDING.map(s => (
            <div key={s.label} className="flex items-center gap-2">
              <span className="text-sm">{s.icon}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-xs text-on-surface">{s.label}</span>
                  <span className="text-xs font-bold text-on-surface">{s.pct}%</span>
                </div>
                <div className="h-1 bg-surface-high rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transactions */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-outline-variant">
          <h2 className="font-display font-semibold text-on-surface">Transactions</h2>
          <div className="flex gap-2">
            {['All', 'Earned', 'Spent'].map((t, i) => (
              <button key={t} className={`text-xs px-2 py-0.5 rounded-full font-semibold ${i === 0 ? 'bg-primary/10 text-primary' : 'text-on-surface-variant'}`}>{t}</button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-outline-variant bg-surface-low">
                {['Date & Time', 'Transaction', 'Category', 'Amount', 'Status'].map(h => (
                  <th key={h} className="text-left p-3 text-on-surface-variant font-semibold whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {TRANSACTIONS.map(t => (
                <tr key={t.date}>
                  <td className="p-3 text-on-surface-variant whitespace-nowrap">{t.date}</td>
                  <td className="p-3 font-medium text-on-surface max-w-xs">{t.title}</td>
                  <td className="p-3 text-on-surface-variant whitespace-nowrap">{t.category}</td>
                  <td className={`p-3 font-bold whitespace-nowrap ${t.positive ? 'text-green-600' : 'text-red-600'}`}>{t.amount}</td>
                  <td className={`p-3 whitespace-nowrap ${t.positive ? 'text-green-600' : 'text-on-surface-variant'}`}>{t.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between p-3 border-t border-outline-variant text-xs text-on-surface-variant">
          <span>Showing 1 to 4 of 128 transactions</span>
          <div className="flex items-center gap-1">
            <button className="px-2 py-1 hover:bg-surface-low rounded">‹</button>
            {[1, 2, 3, '…'].map((p, i) => (
              <button key={i} className={`px-2 py-1 rounded ${p === 1 ? 'bg-primary/10 text-primary font-bold' : 'hover:bg-surface-low'}`}>{p}</button>
            ))}
            <button className="px-2 py-1 hover:bg-surface-low rounded">›</button>
          </div>
        </div>
      </div>

      {/* AI Analysis */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 space-y-2">
        <div className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-ai" />
          <p className="text-sm font-semibold text-on-surface">EduWorld AI Transaction Analysis</p>
        </div>
        <p className="text-xs text-on-surface-variant">Liam is earning XP 20% faster when studying Science subjects compared to Mathematics. Consider encouraging more Science activities to maximize engagement.</p>
        <button className="text-xs text-ai font-semibold hover:underline">View Full Learning Report →</button>
      </div>
    </div>
  )
}
