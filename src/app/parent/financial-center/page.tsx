'use client'
import { CreditCard, Receipt, Filter, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

const TRANSACTIONS = [
  { date: 'Sept 01, 2024', desc: 'Monthly Tuition - Fall Term', amount: '$1,100.00' },
  { date: 'Aug 28, 2024', desc: 'Chess Club Subscription', amount: '$45.00' },
  { date: 'Aug 15, 2024', desc: '2,000 XP Bundle Purchase', amount: '$18.00' },
  { date: 'Aug 10, 2024', desc: 'Annual Facility Fee', amount: '$250.00' },
]

export default function ParentFinancialCenterPage() {
  return (
    <div className="p-4 space-y-4">
      <div>
        <h1 className="font-display font-bold text-2xl text-on-surface">Financial Center</h1>
        <p className="text-sm text-on-surface-variant mt-1">Manage your school commitments, subscriptions, and student XP credits.</p>
      </div>

      {/* Outstanding Balance */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-on-surface-variant" />
          <p className="text-sm font-semibold text-on-surface-variant">Outstanding Balance</p>
        </div>
        <p className="font-display font-bold text-3xl text-on-surface">$1,240.00 <span className="text-sm font-normal text-on-surface-variant">USD</span></p>
        <p className="text-xs text-red-600 font-semibold">📅 Due in 4 days (Sept 15, 2024)</p>
        <div className="flex gap-2">
          <Button className="flex-1 gap-1.5"><CreditCard className="h-3.5 w-3.5" /> Pay Now</Button>
          <Button variant="outline" className="flex-1">View Itemized Bill</Button>
        </div>
      </div>

      {/* Premium Plans */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center gap-1.5">
          <span className="text-sm">✅</span>
          <p className="font-semibold text-on-surface">Premium Plans</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-semibold">Active</span>
                <p className="text-sm font-semibold text-on-surface">Explorer Tier</p>
              </div>
              <p className="text-xs text-on-surface-variant">Liam Smith</p>
            </div>
            <span className="font-bold text-on-surface">$29/mo</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-on-surface">Achiever Tier ✦</p>
              </div>
              <p className="text-xs text-on-surface-variant">Emma Smith</p>
            </div>
            <span className="font-bold text-on-surface">$49/mo</span>
          </div>
        </div>
        <Button variant="outline" className="w-full">Manage Subscriptions</Button>
      </div>

      {/* Quick Recharge */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">🪙</span>
          <p className="font-semibold text-on-surface">Quick Recharge</p>
        </div>
        <div className="flex items-center justify-between p-3 bg-surface-low rounded-xl">
          <p className="text-sm text-on-surface-variant">Available Balance</p>
          <p className="font-bold text-on-surface">5,200 XP</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" size="sm">+500 XP ($5)</Button>
          <Button variant="outline" size="sm">+2k XP ($18)</Button>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-2.5">
          <p className="text-xs text-amber-700">⭐ Emma reached &apos;Expert&apos; — Get 10% off next XP buy!</p>
        </div>
      </div>

      {/* Transactions */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-on-surface">Recent Transactions</p>
          <div className="flex gap-1.5">
            <button className="p-1.5 hover:bg-surface-low rounded-lg"><Filter className="h-4 w-4 text-on-surface-variant" /></button>
            <button className="p-1.5 hover:bg-surface-low rounded-lg"><Download className="h-4 w-4 text-on-surface-variant" /></button>
          </div>
        </div>
        <div className="space-y-2">
          {TRANSACTIONS.map(t => (
            <div key={t.date} className="flex items-center justify-between py-2 border-b border-outline-variant last:border-0">
              <div>
                <p className="text-sm font-medium text-on-surface">{t.desc}</p>
                <p className="text-xs text-on-surface-variant">{t.date}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm text-on-surface">{t.amount}</span>
                <Receipt className="h-4 w-4 text-on-surface-variant" />
              </div>
            </div>
          ))}
        </div>
        <button className="text-xs text-primary hover:underline">View Full History</button>
      </div>
    </div>
  )
}
