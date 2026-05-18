'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronRight, Plus, UserCircle2 } from 'lucide-react'
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

// Placeholder: the first linked child
const LINKED_CHILD = {
  name: 'Adeola Johnson',
  school: 'St. Joseph Academy',
  grade: 'Year 8',
  initials: 'AJ',
}

export default function ParentOnboardingMoreChildrenPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Progress */}
        <ProgressBar step={2} total={5} />

        {/* Back */}
        <div className="flex items-center gap-3">
          <Link href="/parent/onboarding/link-child" className="w-8 h-8 rounded-full bg-surface-lowest border border-outline-variant flex items-center justify-center hover:bg-surface transition-colors">
            <ArrowLeft className="h-4 w-4 text-on-surface" />
          </Link>
          <span className="text-xs text-on-surface-variant font-label">Step 2 of 4</span>
        </div>

        {/* Header */}
        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl text-on-surface">Add another child?</h1>
          <p className="text-sm text-on-surface-variant">You can track all your children's progress from one account.</p>
        </div>

        {/* Linked children */}
        <div className="space-y-3">
          <p className="text-xs font-label font-semibold text-on-surface-variant uppercase tracking-wider">Linked children</p>

          {/* Existing child card */}
          <div className="bg-surface-lowest border border-outline-variant rounded-2xl p-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-primary">{LINKED_CHILD.initials}</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-on-surface">{LINKED_CHILD.name}</p>
              <p className="text-xs text-on-surface-variant">{LINKED_CHILD.school} · {LINKED_CHILD.grade}</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-ai" />
          </div>

          {/* Add another child button */}
          <button
            onClick={() => router.push('/parent/onboarding/link-child')}
            className="w-full rounded-2xl border-2 border-dashed border-outline-variant p-4 flex items-center gap-3 hover:border-primary/40 hover:bg-primary/5 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-surface-low flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
              <Plus className="h-5 w-5 text-on-surface-variant group-hover:text-primary transition-colors" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Add another child</p>
              <p className="text-xs text-on-surface-variant">Link another student account</p>
            </div>
          </button>
        </div>

        {/* Info */}
        <div className="flex items-start gap-3 bg-surface-lowest border border-outline-variant rounded-xl p-4">
          <UserCircle2 className="h-4 w-4 text-on-surface-variant shrink-0 mt-0.5" />
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Each child's data is kept separate. Switch between children easily from your dashboard.
          </p>
        </div>

        {/* Continue */}
        <Button
          className="w-full h-12 text-base gap-2"
          onClick={() => router.push('/parent/onboarding/notifications')}
        >
          Continue
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
