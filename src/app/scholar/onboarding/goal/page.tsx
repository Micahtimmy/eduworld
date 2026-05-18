'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronRight, GraduationCap, BookOpen, FlaskConical, Check } from 'lucide-react'
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

const GOALS = [
  {
    id: 'grades',
    icon: <GraduationCap className="h-7 w-7" />,
    title: 'Ace my grades',
    desc: 'Targeted study plans, past paper practice, and AI tutoring to maximise your GPA',
    color: 'text-primary',
    activeBg: 'bg-primary/5 border-primary',
    inactiveBg: 'bg-surface-lowest border-outline-variant',
  },
  {
    id: 'thesis',
    icon: <BookOpen className="h-7 w-7" />,
    title: 'Complete my thesis',
    desc: 'AI-assisted research, citation management, and structured writing support',
    color: 'text-ai',
    activeBg: 'bg-ai/5 border-ai',
    inactiveBg: 'bg-surface-lowest border-outline-variant',
  },
  {
    id: 'research',
    icon: <FlaskConical className="h-7 w-7" />,
    title: 'Build a research portfolio',
    desc: 'Track projects, document findings, and showcase your academic work',
    color: 'text-purple-600',
    activeBg: 'bg-purple-500/5 border-purple-500',
    inactiveBg: 'bg-surface-lowest border-outline-variant',
  },
]

export default function ScholarOnboardingGoalPage() {
  const [selected, setSelected] = useState<string | null>(null)
  const router = useRouter()

  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Progress */}
        <ProgressBar step={4} total={6} />

        {/* Back */}
        <div className="flex items-center gap-3">
          <Link href="/scholar/onboarding/courses" className="w-8 h-8 rounded-full bg-surface-lowest border border-outline-variant flex items-center justify-center hover:bg-surface transition-colors">
            <ArrowLeft className="h-4 w-4 text-on-surface" />
          </Link>
          <span className="text-xs text-on-surface-variant font-label">Step 4 of 5</span>
        </div>

        {/* Header */}
        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl text-on-surface">What's your main goal?</h1>
          <p className="text-sm text-on-surface-variant">We'll personalise EduWorld around what matters most to you.</p>
        </div>

        {/* Goal cards */}
        <div className="space-y-3">
          {GOALS.map(goal => (
            <button
              key={goal.id}
              onClick={() => setSelected(goal.id)}
              className={`w-full text-left rounded-2xl border-2 p-5 transition-all duration-150 ${
                selected === goal.id ? goal.activeBg : goal.inactiveBg
              } hover:scale-[1.01] active:scale-100`}
            >
              <div className="flex items-start gap-4">
                <div className={`shrink-0 ${selected === goal.id ? goal.color : 'text-on-surface-variant'} transition-colors`}>
                  {goal.icon}
                </div>
                <div className="flex-1 space-y-1">
                  <p className={`font-display font-semibold text-base ${selected === goal.id ? 'text-on-surface' : 'text-on-surface'}`}>
                    {goal.title}
                  </p>
                  <p className="text-sm text-on-surface-variant leading-snug">{goal.desc}</p>
                </div>
                {selected === goal.id && (
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${goal.color.replace('text-', 'bg-').replace('primary', 'primary')} bg-opacity-10`}>
                    <Check className={`h-4 w-4 ${goal.color}`} />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Continue */}
        <Button
          className="w-full h-12 text-base gap-2"
          disabled={!selected}
          onClick={() => router.push('/scholar/onboarding/ready')}
        >
          Continue
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
