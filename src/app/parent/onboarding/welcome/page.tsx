'use client'
import Link from 'next/link'
import { ChevronRight, BarChart3, CalendarCheck, Receipt, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ParentOnboardingWelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-surface via-surface-low to-surface flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Illustration */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
            <span className="text-5xl">👨‍👩‍👧</span>
          </div>
        </div>

        {/* Hero text */}
        <div className="text-center space-y-3">
          <p className="text-xs font-label font-semibold text-primary uppercase tracking-widest">EduWorld for Parents</p>
          <h1 className="font-display font-bold text-3xl text-on-surface leading-tight">
            Stay connected to your<br />
            <span className="text-primary">child's education</span>
          </h1>
          <p className="text-base text-on-surface-variant font-body">
            Everything you need to support your child's learning journey — all in one place.
          </p>
        </div>

        {/* Feature cards */}
        <div className="space-y-3">
          {[
            {
              icon: <BarChart3 className="h-5 w-5 text-primary" />,
              bg: 'bg-primary/5 border-primary/15',
              title: 'Progress Reports',
              desc: 'See grades, completed lessons, and quiz scores in real time',
            },
            {
              icon: <CalendarCheck className="h-5 w-5 text-ai" />,
              bg: 'bg-ai/5 border-ai/15',
              title: 'Attendance Tracking',
              desc: 'Instant alerts when your child is absent or late',
            },
            {
              icon: <Receipt className="h-5 w-5 text-xp" />,
              bg: 'bg-xp/5 border-xp/15',
              title: 'School Invoices',
              desc: 'View and pay school fees securely online',
            },
            {
              icon: <Sparkles className="h-5 w-5 text-purple-500" />,
              bg: 'bg-purple-500/5 border-purple-500/15',
              title: 'AI Weekly Report',
              desc: "A personalised summary of your child's week, every Monday",
            },
          ].map((f, i) => (
            <div key={i} className={`${f.bg} border rounded-xl p-4 flex items-center gap-3`}>
              <div className="w-10 h-10 rounded-xl bg-surface-lowest flex items-center justify-center shrink-0">
                {f.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-on-surface">{f.title}</p>
                <p className="text-xs text-on-surface-variant">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link href="/parent/onboarding/link-child" className="block">
          <Button className="w-full h-12 text-base gap-2">
            Let's get connected
            <ChevronRight className="h-5 w-5" />
          </Button>
        </Link>

        <p className="text-center text-xs text-on-surface-variant">
          Setup takes less than 2 minutes
        </p>
      </div>
    </div>
  )
}
