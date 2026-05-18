'use client'
import { Sparkles, Download, Search, Filter, CreditCard, Building2, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const INVOICE_ITEMS = [
  { icon: '🏫', label: 'Tuition Fees - Year 8', detail: 'Standard curriculum', amount: '$4,250.00' },
  { icon: '🔬', label: 'Practical Lab Fees', detail: 'Physics & Chemistry', amount: '$450.00' },
  { icon: '🏀', label: 'Extracurricular: Advanced Robotics', detail: 'Club/competition', amount: '$225.00' },
  { icon: '💰', label: 'Tax (VAT 5%)', detail: '', amount: '$246.25' },
]

const HISTORY = [
  { date: 'Oct 12, 2023', ref: '#TRX-9981-L', type: 'Term 1 Tuition', method: 'Bank Transfer', amount: '$4,925.00', status: 'Successful' },
  { date: 'Sep 05, 2023', ref: '#TRX-8210-X', type: 'Uniforms & Kits', method: 'Visa **** 4412', amount: '$320.50', status: 'Successful' },
  { date: 'Aug 22, 2023', ref: '#TRX-7741-K', type: 'Tech Deposit', method: 'Cash at Desk', amount: '$1,000.00', status: 'Successful' },
]

export default function ParentFeesPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-xs bg-ai/10 text-ai px-2 py-0.5 rounded-full">ACADEMIC YEAR 2023/24</span>
          <h1 className="font-display font-bold text-2xl text-on-surface mt-2">Financial Statement</h1>
          <p className="text-sm text-on-surface-variant mt-1">Fee history and payment management for Alex Johnson.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2"><Download className="h-4 w-4" /> Statement PDF</Button>
          <Button size="sm" className="gap-2"><CreditCard className="h-4 w-4" /> Pay Total Balance</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Invoice */}
        <div className="lg:col-span-2 bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display font-semibold text-on-surface">Term 2 Invoice: #INV-2023-082</h2>
            </div>
            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-semibold">Due in 5 Days</span>
          </div>
          <div className="space-y-3">
            {INVOICE_ITEMS.map(item => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-on-surface">{item.label}</p>
                  {item.detail && <p className="text-xs text-on-surface-variant">{item.detail}</p>}
                </div>
                <p className="text-sm font-semibold text-on-surface">{item.amount}</p>
              </div>
            ))}
            <div className="border-t border-outline-variant pt-3 flex justify-between">
              <p className="font-display font-bold text-on-surface">Total Payable</p>
              <p className="font-display font-bold text-xl text-primary">$5,171.25</p>
            </div>
          </div>
        </div>

        {/* Quick Pay */}
        <div className="space-y-4">
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <h2 className="font-display font-semibold text-on-surface">Quick Pay</h2>
            <div className="space-y-2">
              {[
                { icon: CreditCard, label: 'Debit / Credit Card', sub: 'Secure Stripe processing' },
                { icon: Building2, label: 'Bank Transfer', sub: '0.5% Discount applies' },
              ].map(m => (
                <div key={m.label} className="flex items-center gap-3 p-3 border border-outline-variant rounded-xl cursor-pointer hover:bg-surface-low transition-colors">
                  <m.icon className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-on-surface">{m.label}</p>
                    <p className="text-xs text-on-surface-variant">{m.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-ai/5 border border-ai/20 rounded-xl p-3 flex items-start gap-2">
              <Sparkles className="h-4 w-4 text-ai mt-0.5 shrink-0" />
              <p className="text-xs text-on-surface-variant">Enable autopay to save <strong className="text-on-surface">$50 in transaction fees</strong> per term.</p>
            </div>
            <Button className="w-full">Confirm & Pay $5,171.25</Button>
            <button className="text-xs text-primary hover:underline w-full text-center">Need Financial Aid?</button>
          </div>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Payment History</h2>
          <div className="flex gap-2">
            <div className="flex items-center gap-2 border border-outline-variant rounded-xl px-3 py-1.5">
              <Search className="h-3.5 w-3.5 text-on-surface-variant" />
              <input className="text-xs bg-transparent outline-none text-on-surface placeholder:text-on-surface-variant w-32" placeholder="Search transactions..." />
            </div>
            <Button variant="outline" size="sm"><Filter className="h-4 w-4" /></Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-outline-variant">
                {['Date', 'Reference', 'Type', 'Method', 'Amount', 'Status'].map(h => (
                  <th key={h} className="text-left pb-2 text-xs font-semibold uppercase text-on-surface-variant pr-4 last:pr-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {HISTORY.map(h => (
                <tr key={h.ref} className="hover:bg-surface-low transition-colors">
                  <td className="py-3 pr-4 text-xs text-on-surface-variant whitespace-nowrap">{h.date}</td>
                  <td className="py-3 pr-4 text-xs text-on-surface font-mono">{h.ref}</td>
                  <td className="py-3 pr-4 text-sm text-on-surface">{h.type}</td>
                  <td className="py-3 pr-4 text-xs text-on-surface-variant">{h.method}</td>
                  <td className="py-3 pr-4 text-sm font-semibold text-on-surface">{h.amount}</td>
                  <td className="py-3">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">✓ {h.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-on-surface-variant">Showing last 3 transactions. <button className="text-primary hover:underline">View All History →</button></p>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 text-xs text-on-surface-variant">
        <Shield className="h-4 w-4 text-green-500" />
        <span>EduWorld Official Finance · Global Educational Infrastructure ·</span>
        <button className="text-primary hover:underline">Payment Security Policy</button>
        <span>·</span>
        <button className="text-primary hover:underline">Tuition Refund Terms</button>
      </div>
    </div>
  )
}
