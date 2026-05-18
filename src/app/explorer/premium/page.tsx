'use client'
import { Sparkles, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const BENEFITS = [
  { icon: '👩‍🏫', title: 'Live Teacher Access', desc: 'Book 1-on-1 sessions with certified teachers anytime, anywhere.' },
  { icon: '🤖', title: 'Advanced AI Tutor', desc: 'Unlimited AI tutoring with personalized learning paths and instant feedback.' },
  { icon: '🏪', title: 'Exclusive Shop Items', desc: 'Unlock rare avatars, costumes, and power-ups only available to Premium members.' },
  { icon: '🚫', title: 'Ad-Free Learning', desc: 'Distraction-free environment with zero advertisements across all activities.' },
]

const PLANS = [
  {
    name: 'Monthly',
    price: '$9.99',
    period: '/month',
    features: ['All Premium Benefits', 'Cancel Anytime', '1 Student Account'],
    highlight: false,
    cta: 'Start Monthly',
  },
  {
    name: 'Yearly',
    price: '$5.99',
    period: '/month',
    billed: 'Billed $71.88/year',
    badge: '🏆 BEST VALUE — SAVE 40%',
    features: ['All Premium Benefits', 'Priority Support', 'Up to 3 Student Accounts', 'Exclusive Yearly Badge'],
    highlight: true,
    cta: 'Start Yearly Plan',
  },
]

export default function ExplorerPremiumPage() {
  return (
    <div className="p-6 space-y-8">
      {/* Hero */}
      <div className="text-center space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 bg-xp/10 text-xp px-4 py-2 rounded-full text-sm font-semibold">
          <Sparkles className="h-4 w-4" />
          Upgrade Your Learning
        </div>
        <h1 className="font-display font-bold text-3xl text-on-surface">
          Go Premium &
          <span className="text-primary"> Unlock Everything!</span>
        </h1>
        <p className="text-on-surface-variant max-w-md mx-auto">Join thousands of Explorer students learning faster, earning more XP, and having more fun with EduWorld Premium.</p>
        <Button size="lg" className="gap-2 px-8">
          🚀 Get Premium Now
        </Button>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {BENEFITS.map(b => (
          <div key={b.title} className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 flex items-start gap-4">
            <span className="text-3xl">{b.icon}</span>
            <div>
              <p className="font-semibold text-on-surface">{b.title}</p>
              <p className="text-xs text-on-surface-variant mt-1">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pricing Plans */}
      <div>
        <h2 className="font-display font-bold text-xl text-on-surface text-center mb-6">Choose Your Plan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {PLANS.map(plan => (
            <div
              key={plan.name}
              className={cn(
                'rounded-2xl border p-6 space-y-4 relative',
                plan.highlight ? 'border-2 border-primary bg-primary/5' : 'border-outline-variant bg-surface-lowest'
              )}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">{plan.badge}</span>
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-on-surface-variant">{plan.name}</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="font-display font-bold text-3xl text-on-surface">{plan.price}</span>
                  <span className="text-sm text-on-surface-variant">{plan.period}</span>
                </div>
                {plan.billed && <p className="text-xs text-on-surface-variant mt-1">{plan.billed}</p>}
              </div>
              <div className="space-y-2">
                {plan.features.map(f => (
                  <div key={f} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                      <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-xs text-on-surface">{f}</p>
                  </div>
                ))}
              </div>
              <Button className="w-full" variant={plan.highlight ? 'default' : 'outline'}>{plan.cta}</Button>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-on-surface-variant">Secure payment via Stripe · Cancel anytime · No hidden fees</p>
    </div>
  )
}
