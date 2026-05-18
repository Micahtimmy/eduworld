'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronRight, Bell, BarChart3, CalendarCheck, BookOpen, Receipt, Sparkles } from 'lucide-react'
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

type NotifKey = 'summary' | 'grade' | 'attendance' | 'assignment' | 'invoice' | 'aiReport'

const NOTIFICATIONS: { key: NotifKey; icon: React.ReactNode; title: string; desc: string }[] = [
  { key: 'summary', icon: <BarChart3 className="h-4 w-4 text-primary" />, title: 'Daily learning summary', desc: 'What your child learned today' },
  { key: 'grade', icon: <BookOpen className="h-4 w-4 text-ai" />, title: 'Grade published', desc: 'When a teacher releases a grade' },
  { key: 'attendance', icon: <CalendarCheck className="h-4 w-4 text-xp" />, title: 'Attendance alert', desc: 'If your child is absent or late' },
  { key: 'assignment', icon: <Bell className="h-4 w-4 text-purple-500" />, title: 'Assignment due', desc: '24 hours before a due date' },
  { key: 'invoice', icon: <Receipt className="h-4 w-4 text-orange-500" />, title: 'Invoice due', desc: 'Fee payment reminders' },
  { key: 'aiReport', icon: <Sparkles className="h-4 w-4 text-ai" />, title: 'AI weekly report', desc: 'Every Monday morning summary' },
]

function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${on ? 'bg-primary' : 'bg-outline-variant'}`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform duration-200 ${on ? 'translate-x-5' : 'translate-x-0.5'}`}
      />
    </button>
  )
}

export default function ParentOnboardingNotificationsPage() {
  const [settings, setSettings] = useState<Record<NotifKey, boolean>>({
    summary: true,
    grade: true,
    attendance: true,
    assignment: true,
    invoice: true,
    aiReport: true,
  })
  const router = useRouter()

  function toggle(key: NotifKey) {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Progress */}
        <ProgressBar step={3} total={5} />

        {/* Back */}
        <div className="flex items-center gap-3">
          <Link href="/parent/onboarding/more-children" className="w-8 h-8 rounded-full bg-surface-lowest border border-outline-variant flex items-center justify-center hover:bg-surface transition-colors">
            <ArrowLeft className="h-4 w-4 text-on-surface" />
          </Link>
          <span className="text-xs text-on-surface-variant font-label">Step 3 of 4</span>
        </div>

        {/* Header */}
        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl text-on-surface">Stay in the loop</h1>
          <p className="text-sm text-on-surface-variant">Choose what updates you'd like to receive. Customise anytime in settings.</p>
        </div>

        {/* Notification toggles */}
        <div className="bg-surface-lowest border border-outline-variant rounded-2xl overflow-hidden divide-y divide-outline-variant">
          {NOTIFICATIONS.map(n => (
            <div key={n.key} className="flex items-center gap-3 px-5 py-4">
              <div className="w-8 h-8 rounded-lg bg-surface-low flex items-center justify-center shrink-0">
                {n.icon}
              </div>
              <div className="flex-1 space-y-0.5">
                <p className="text-sm font-semibold text-on-surface">{n.title}</p>
                <p className="text-xs text-on-surface-variant">{n.desc}</p>
              </div>
              <Toggle on={settings[n.key]} onToggle={() => toggle(n.key)} />
            </div>
          ))}
        </div>

        {/* Info */}
        <p className="text-xs text-on-surface-variant text-center">
          Customise these anytime in <strong className="text-on-surface">Settings → Notifications</strong>
        </p>

        {/* Continue */}
        <Button
          className="w-full h-12 text-base gap-2"
          onClick={() => router.push('/parent/onboarding/ready')}
        >
          Continue
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
