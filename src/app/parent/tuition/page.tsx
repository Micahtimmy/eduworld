'use client'
import { Download, CreditCard, Landmark, CheckCircle, Receipt } from 'lucide-react'
import { Button } from '@/components/ui/button'

const INVOICE_ITEMS = [
  { icon: '🎓', label: 'Tuition Fees - Year 8', desc: 'Standard curriculum coverage', amount: '$4,250.00' },
  { icon: '🔬', label: 'Practical Lab Fees', desc: 'Physics & Chemistry equipment', amount: '$450.00' },
  { icon: '🏀', label: 'Extracurricular: Advanced Robotics', desc: 'Club materials & competition entry', amount: '$225.00' },
  { icon: '📋', label: 'Tax (VAT 5%)', desc: '', amount: '$246.25' },
]

const TRANSACTIONS = [
  { date: 'Oct 12, 2023', ref: '#TRX-9981-L', type: 'Term 1 Tuition', method: 'Bank Transfer', amount: '$4,925.00' },
  { date: 'Sep 05, 2023', ref: '#TRX-8210-X', type: 'Uniforms & Kits', method: 'Visa ****4412', amount: '$320.50' },
  { date: 'Aug 22, 2023', ref: '#TRX-7741-K', type: 'Tech Deposit', method: 'Cash at Desk', amount: '$1,000.00' },
]

export default function ParentTuitionPage() {
  return (
    <div className="p-4 space-y-5 pb-24">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-primary font-semibold uppercase">Academic Year 2023/24</p>
          <h1 className="font-display font-bold text-2xl text-on-surface mt-1">Financial Statement</h1>
          <p className="text-sm text-on-surface-variant mt-1">Tuition & Lab Fees for Alex Johnson</p>
        </div>
        <Button variant="outline" size="sm" className="gap-1.5"><Download className="h-3.5 w-3.5" /> Statement PDF</Button>
      </div>

      {/* Invoice */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-on-surface">Term 2 Invoice: #INV-2023-082</p>
            <p className="text-xs text-on-surface-variant">Alex Johnson · Year 8 · St. Mary&apos;s Academy</p>
          </div>
          <span className="text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-semibold">Due in 5 Days</span>
        </div>
        <div className="space-y-2">
          {INVOICE_ITEMS.map(item => (
            <div key={item.label} className="flex items-center gap-3 py-2 border-b border-outline-variant last:border-0">
              <span className="text-lg">{item.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-on-surface">{item.label}</p>
                {item.desc && <p className="text-xs text-on-surface-variant">{item.desc}</p>}
              </div>
              <span className="font-semibold text-on-surface">{item.amount}</span>
            </div>
          ))}
          <div className="flex items-center justify-between pt-2">
            <span className="font-display font-bold text-on-surface">Total Payable</span>
            <span className="font-display font-bold text-xl text-on-surface">$5,171.25</span>
          </div>
        </div>
      </div>

      {/* Quick Pay */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <p className="font-semibold text-sm text-on-surface">Quick Pay</p>
        <p className="text-xs text-on-surface-variant">Select your preferred secure payment method.</p>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-3 border-2 border-primary rounded-xl bg-primary/5 cursor-pointer">
            <CreditCard className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-semibold text-on-surface">Debit / Credit Card</p>
              <p className="text-xs text-on-surface-variant">Secure Stripe processing</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 border border-outline-variant rounded-xl bg-surface-low cursor-pointer hover:border-primary/50 transition-colors">
            <Landmark className="h-5 w-5 text-on-surface-variant" />
            <div>
              <p className="text-sm font-semibold text-on-surface">Bank Transfer</p>
              <p className="text-xs text-on-surface-variant">0.5% Discount applies</p>
            </div>
          </div>
        </div>
        <div className="bg-ai/5 border border-ai/20 rounded-xl p-3 flex items-start gap-2">
          <span className="text-ai text-sm">✦</span>
          <p className="text-xs text-on-surface-variant">Setting up an automatic payment plan could save you $50 in transaction fees this year.</p>
        </div>
        <Button className="w-full">Confirm & Pay $5,171.25</Button>
        <button className="w-full text-xs text-primary hover:underline">Need Financial Aid? Ask about installment plans or scholarships →</button>
      </div>

      {/* Payment History */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <h2 className="font-semibold text-sm text-on-surface">Payment History</h2>
        <div className="space-y-2">
          {TRANSACTIONS.map(t => (
            <div key={t.ref} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
              <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
              <div className="flex-1">
                <p className="text-xs font-semibold text-on-surface">{t.type}</p>
                <p className="text-xs text-on-surface-variant">{t.date} · {t.ref} · {t.method}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-on-surface">{t.amount}</p>
                <button className="text-xs text-primary hover:underline flex items-center gap-0.5"><Receipt className="h-3 w-3" /> Receipt</button>
              </div>
            </div>
          ))}
        </div>
        <button className="text-xs text-primary hover:underline">View All History →</button>
      </div>
    </div>
  )
}
