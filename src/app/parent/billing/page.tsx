'use client'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CHILDREN = [
  {
    name: 'Leo Thompson',
    grade: 'Grade 11',
    total: '$2,850',
    status: 'Due Oct 15',
    statusColor: 'text-amber-600',
    items: [
      { label: 'Tuition Fee', amount: '$2,200', status: 'Unpaid', color: 'text-red-600' },
      { label: 'Lab Materials', amount: '$450', status: 'Paid', color: 'text-green-600' },
      { label: 'Basketball Club', amount: '$200', status: 'Unpaid', color: 'text-red-600' },
    ],
  },
  {
    name: 'Maya Thompson',
    grade: 'Grade 8',
    total: '$1,400',
    status: 'Overdue',
    statusColor: 'text-red-600',
    items: [
      { label: 'Tuition Fee', amount: '$1,200', status: 'Overdue', color: 'text-red-600' },
      { label: 'Art Supplies', amount: '$200', status: 'Overdue', color: 'text-red-600' },
    ],
  },
]

const ACTIVITY = [
  { label: 'Lab Materials — Leo', date: 'Oct 5', amount: '-$450', color: 'text-green-600' },
  { label: 'Late Fee Applied', date: 'Oct 3', amount: '+$25', color: 'text-red-600' },
  { label: 'Art Trip Deposit — Maya', date: 'Sept 28', amount: '-$60', color: 'text-green-600' },
]

export default function ParentBillingPage() {
  return (
    <div className="p-4 space-y-5 pb-24">
      <h1 className="font-display font-bold text-xl text-on-surface">Household Billing</h1>

      {/* Outstanding Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-amber-700 font-semibold">Total Outstanding</p>
            <p className="font-display font-bold text-3xl text-on-surface">$4,250</p>
            <p className="text-xs text-amber-700">Due Oct 15</p>
          </div>
          <Button className="bg-amber-500 hover:bg-amber-600 text-white">Pay Now</Button>
        </div>
      </div>

      {/* AI Insight */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-3 flex items-start gap-2">
        <Sparkles className="h-3.5 w-3.5 text-ai mt-0.5 shrink-0" />
        <p className="text-xs text-on-surface-variant">EduWorld AI: You&apos;re eligible for a 12% multi-child discount — $510 savings. <button className="text-ai font-semibold underline">Apply Now</button></p>
      </div>

      {/* Children Breakdown */}
      {CHILDREN.map(child => (
        <div key={child.name} className="bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
          <div className="flex items-center justify-between p-4 bg-surface-low">
            <div>
              <p className="text-sm font-semibold text-on-surface">{child.name}</p>
              <p className="text-xs text-on-surface-variant">{child.grade}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-on-surface">{child.total}</p>
              <p className={`text-xs font-semibold ${child.statusColor}`}>{child.status}</p>
            </div>
          </div>
          <div className="divide-y divide-outline-variant">
            {child.items.map(item => (
              <div key={item.label} className="flex items-center justify-between px-4 py-2.5">
                <p className="text-xs text-on-surface">{item.label}</p>
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-semibold ${item.color}`}>{item.status}</span>
                  <span className="text-xs font-bold text-on-surface">{item.amount}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3">
            <Button size="sm" variant="outline" className="w-full">Pay {child.name}&apos;s Balance</Button>
          </div>
        </div>
      ))}

      {/* Recent Activity */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Recent Activity</h2>
        <div className="space-y-2">
          {ACTIVITY.map(a => (
            <div key={a.label} className="flex items-center justify-between p-2.5 bg-surface-low rounded-xl">
              <div>
                <p className="text-xs font-semibold text-on-surface">{a.label}</p>
                <p className="text-xs text-on-surface-variant">{a.date}</p>
              </div>
              <span className={`text-sm font-bold ${a.color}`}>{a.amount}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Payment Methods</h2>
          <button className="text-xs text-primary hover:underline">+ Add</button>
        </div>
        <div className="flex items-center gap-3 p-3 bg-surface-low rounded-xl border border-primary/20">
          <span className="text-xl">💳</span>
          <div className="flex-1">
            <p className="text-sm font-semibold text-on-surface">Visa ending in 4242</p>
            <p className="text-xs text-on-surface-variant">Expires 04/27</p>
          </div>
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">Default</span>
        </div>
      </div>
    </div>
  )
}
