'use client'
import Link from 'next/link'
import { ArrowLeft, Lock, Plus, CreditCard, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const SAVED_CARDS = [
  { id: 'card-1', brand: 'Visa', last4: '4242', expiry: '08/26', isDefault: true },
  { id: 'card-2', brand: 'Mastercard', last4: '8521', expiry: '12/25', isDefault: false },
]

const INVOICE = {
  id: 'EW-2023-0156',
  description: 'Term 3 Tuition Fee',
  student: 'Leo Thompson',
  amount: 1800,
  processingFee: 0,
}

const fmt = (n: number) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(n)

export default function PaymentPage() {
  const [selectedCard, setSelectedCard] = useState('card-1')
  const [addingCard, setAddingCard] = useState(false)
  const [newCard, setNewCard] = useState({ number: '', expiry: '', cvv: '', name: '' })
  const [loading, setLoading] = useState(false)

  const total = INVOICE.amount + INVOICE.processingFee

  const handlePay = () => {
    setLoading(true)
    setTimeout(() => {
      window.location.href = '/parent/payment-success'
    }, 1800)
  }

  return (
    <div className="p-6 max-w-lg mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link href="/parent/invoice">
          <button className="flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-on-surface">
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
        </Link>
        <div className="flex-1 flex items-center justify-center gap-2">
          <Lock className="h-4 w-4 text-green-600" />
          <h1 className="font-display font-bold text-xl text-on-surface">Secure Payment</h1>
        </div>
      </div>

      {/* Invoice Summary */}
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 space-y-2">
        <p className="text-xs text-on-surface-variant">Paying for</p>
        <p className="font-display font-semibold text-on-surface">{INVOICE.description}</p>
        <p className="text-sm text-on-surface-variant">{INVOICE.student} · Invoice #{INVOICE.id}</p>
        <p className="font-display font-bold text-2xl text-primary">{fmt(INVOICE.amount)}</p>
      </div>

      {/* Saved Cards */}
      <div className="space-y-3">
        <p className="text-sm font-semibold text-on-surface">Payment method</p>

        {SAVED_CARDS.map(card => (
          <label
            key={card.id}
            className={`flex items-center gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
              selectedCard === card.id ? 'border-primary bg-primary/5' : 'border-outline-variant bg-surface-lowest'
            }`}
          >
            <input
              type="radio"
              name="card"
              value={card.id}
              checked={selectedCard === card.id}
              onChange={() => { setSelectedCard(card.id); setAddingCard(false) }}
              className="accent-primary"
            />
            <div className={`w-10 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
              card.brand === 'Visa' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-600'
            }`}>
              {card.brand === 'Visa' ? 'VISA' : 'MC'}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-on-surface">{card.brand} ending {card.last4}</p>
              <p className="text-xs text-on-surface-variant">Expires {card.expiry}</p>
            </div>
            {card.isDefault && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">Default</span>
            )}
          </label>
        ))}

        {/* Add new card */}
        <button
          onClick={() => { setAddingCard(v => !v); setSelectedCard('') }}
          className={`w-full flex items-center gap-3 p-4 rounded-2xl border cursor-pointer transition-all text-left ${
            addingCard ? 'border-primary bg-primary/5' : 'border-dashed border-outline-variant hover:border-primary/40'
          }`}
        >
          <Plus className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-primary">Add new card</span>
        </button>

        {addingCard && (
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <div className="space-y-1">
              <label className="text-xs text-on-surface-variant">Name on card</label>
              <input
                type="text"
                placeholder="Sarah Thompson"
                value={newCard.name}
                onChange={e => setNewCard(v => ({ ...v, name: e.target.value }))}
                className="w-full bg-surface-low border border-outline-variant rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-on-surface-variant">Card number</label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant" />
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={newCard.number}
                  onChange={e => setNewCard(v => ({ ...v, number: e.target.value }))}
                  className="w-full bg-surface-low border border-outline-variant rounded-xl pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs text-on-surface-variant">Expiry</label>
                <input
                  type="text"
                  placeholder="MM / YY"
                  value={newCard.expiry}
                  onChange={e => setNewCard(v => ({ ...v, expiry: e.target.value }))}
                  className="w-full bg-surface-low border border-outline-variant rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-on-surface-variant">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  value={newCard.cvv}
                  onChange={e => setNewCard(v => ({ ...v, cvv: e.target.value }))}
                  className="w-full bg-surface-low border border-outline-variant rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Total */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-2">
        <div className="flex justify-between text-sm text-on-surface-variant">
          <span>Invoice amount</span>
          <span>{fmt(INVOICE.amount)}</span>
        </div>
        {INVOICE.processingFee > 0 && (
          <div className="flex justify-between text-sm text-on-surface-variant">
            <span>Processing fee</span>
            <span>{fmt(INVOICE.processingFee)}</span>
          </div>
        )}
        <div className="flex justify-between font-bold text-on-surface border-t border-outline-variant pt-2">
          <span>Total</span>
          <span className="text-primary">{fmt(total)}</span>
        </div>
      </div>

      {/* Pay Button */}
      <Button
        size="lg"
        className="w-full gap-2"
        loading={loading}
        onClick={handlePay}
        disabled={!selectedCard && !addingCard}
      >
        <Lock className="h-4 w-4" />
        Pay {fmt(total)} securely
      </Button>

      {/* Security Badges */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {['256-bit SSL', 'Stripe Secured', 'PCI Compliant'].map(badge => (
          <div key={badge} className="flex items-center gap-1.5 text-xs text-on-surface-variant">
            <Shield className="h-3.5 w-3.5 text-green-600" />
            {badge}
          </div>
        ))}
      </div>

      <p className="text-xs text-on-surface-variant text-center">
        You will be charged immediately. By proceeding you agree to our{' '}
        <Link href="/legal/terms" className="text-primary hover:underline">payment terms</Link>.
      </p>
    </div>
  )
}
