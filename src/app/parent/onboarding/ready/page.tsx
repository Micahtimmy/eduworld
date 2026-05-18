'use client'
import Link from 'next/link'
import { ChevronRight, Sparkles, CheckCircle, Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'

function ProgressBar({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1 flex-1 rounded-full transition-all duration-300 ${i < step ? 'bg-primary' : 'bg-outline-variant'}`}
        />
      ))}
    </div>
  )
}

const LINKED_CHILD = {
  name: 'Adeola Johnson',
  school: 'St. Joseph Academy',
  grade: 'Year 8',
  initials: 'AJ',
}

export default function ParentOnboardingReadyPage() {
  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Progress — all filled */}
        <ProgressBar step={5} total={5} />

        {/* Celebration */}
        <div className="text-center space-y-4 pt-4">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/30">
              <span className="text-4xl">🤝</span>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="font-display font-bold text-3xl text-on-surface">You're connected!</h1>
            <p className="text-base text-on-surface-variant">You're now linked to your child's EduWorld account.</p>
          </div>
        </div>

        {/* Child card */}
        <div className="bg-surface-lowest border border-outline-variant rounded-2xl p-5 flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <span className="font-bold text-xl text-primary">{LINKED_CHILD.initials}</span>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-on-surface">{LINKED_CHILD.name}</p>
            <p className="text-xs text-on-surface-variant">{LINKED_CHILD.school} · {LINKED_CHILD.grade}</p>
            <p className="text-xs text-ai mt-0.5 font-semibold">Linked ✓</p>
          </div>
        </div>

        {/* AI weekly report info */}
        <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 flex items-start gap-3">
          <Sparkles className="h-5 w-5 text-ai shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-sm font-semibold text-on-surface">AI Weekly Report</p>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Your personalised summary of {LINKED_CHILD.name.split(' ')[0]}'s learning week will arrive every <strong className="text-on-surface">Monday morning</strong>.
            </p>
          </div>
        </div>

        {/* What's included */}
        <div className="bg-surface-lowest border border-outline-variant rounded-2xl p-5 space-y-3">
          <p className="text-sm font-semibold text-on-surface">Your dashboard includes</p>
          {[
            'Real-time grade tracking',
            'Attendance notifications',
            'Assignment due dates',
            'School fee invoices',
            'AI weekly summary reports',
          ].map(item => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 text-ai shrink-0" />
              <p className="text-sm text-on-surface-variant">{item}</p>
            </div>
          ))}
        </div>

        {/* Notification note */}
        <div className="flex items-center gap-2 px-1">
          <Bell className="h-4 w-4 text-on-surface-variant shrink-0" />
          <p className="text-xs text-on-surface-variant">Make sure to allow notifications when prompted for the best experience.</p>
        </div>

        {/* CTA */}
        <Link href="/parent/dashboard" className="block">
          <Button className="w-full h-12 text-base gap-2">
            Go to my dashboard
            <ChevronRight className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
