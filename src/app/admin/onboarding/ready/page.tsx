'use client'
import Link from 'next/link'
import { ChevronRight, Users, CalendarCheck, BarChart3, CreditCard, CheckCircle } from 'lucide-react'
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

export default function AdminOnboardingReadyPage() {
  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Progress — all filled */}
        <ProgressBar step={6} total={6} />

        {/* Celebration */}
        <div className="text-center space-y-4 pt-4">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/30">
              <span className="text-4xl">🏫</span>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="font-display font-bold text-3xl text-on-surface">Institution ready!</h1>
            <p className="text-base text-on-surface-variant">Your EduWorld admin dashboard is configured and ready to go.</p>
          </div>
        </div>

        {/* Quick stats */}
        <div className="bg-surface-lowest border border-outline-variant rounded-2xl p-5">
          <p className="text-xs text-on-surface-variant font-label uppercase tracking-wider mb-4">Institution overview</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: <Users className="h-5 w-5 text-primary" />, value: '0', label: 'Students enrolled', hint: 'Will update as you add students' },
              { icon: <Users className="h-5 w-5 text-ai" />, value: '0', label: 'Teachers', hint: 'Invitations sent' },
              { icon: <CalendarCheck className="h-5 w-5 text-xp" />, value: '0%', label: 'Attendance tracked', hint: 'Starts once class begins' },
              { icon: <BarChart3 className="h-5 w-5 text-purple-500" />, value: '0', label: 'Classrooms', hint: 'Add from your dashboard' },
            ].map((s, i) => (
              <div key={i} className="bg-surface-low rounded-xl p-3 space-y-1">
                {s.icon}
                <p className="text-xl font-display font-bold text-on-surface">{s.value}</p>
                <p className="text-xs font-semibold text-on-surface">{s.label}</p>
                <p className="text-xs text-on-surface-variant leading-tight">{s.hint}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Setup checklist */}
        <div className="bg-surface-lowest border border-outline-variant rounded-2xl p-5 space-y-3">
          <p className="text-sm font-semibold text-on-surface">Setup complete</p>
          {[
            'Organisation profile created',
            'Academic year configured',
            'Student data imported',
            'Staff invitations sent',
          ].map(item => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 text-ai shrink-0" />
              <p className="text-sm text-on-surface-variant">{item}</p>
            </div>
          ))}
        </div>

        {/* What's next */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
          <p className="text-xs font-label font-semibold text-primary uppercase tracking-wider mb-2">Next steps</p>
          <div className="space-y-1.5">
            {[
              'Add classrooms and assign teachers',
              'Set up fee structures',
              'Configure school timetable',
            ].map(s => (
              <p key={s} className="text-xs text-on-surface-variant flex items-start gap-2">
                <span className="text-primary mt-0.5">→</span>
                {s}
              </p>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link href="/admin" className="block">
          <Button className="w-full h-12 text-base gap-2">
            Go to dashboard
            <ChevronRight className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
