'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { GraduationCap, ChevronRight, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { createBrowserClient } from '@/lib/supabase/client'
import { useUser } from '@/hooks/use-user'
import { toast } from 'sonner'
import { ROLE_LABELS, SUBJECTS } from '@/lib/constants'

const GRADE_LEVELS = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6', 'Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12']

export default function OnboardingPage() {
  const { user, profile } = useUser()
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [loading, setLoading] = useState(false)

  const [data, setData] = useState({
    full_name: '',
    school_name: '',
    grade_level: '',
    subjects: [] as string[],
    learning_goals: '',
    avatar_emoji: '🎓',
  })

  useEffect(() => {
    if (profile?.full_name) setData(d => ({ ...d, full_name: profile.full_name! }))
  }, [profile])

  const role = profile?.role ?? 'explorer'
  const STEPS = getSteps(role)
  const progress = ((step) / (STEPS.length - 1)) * 100

  function toggleSubject(id: string) {
    setData(d => ({
      ...d,
      subjects: d.subjects.includes(id)
        ? d.subjects.filter(s => s !== id)
        : [...d.subjects, id],
    }))
  }

  async function handleFinish() {
    if (!user) return
    setLoading(true)
    const supabase = createBrowserClient()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await supabase
      .from('profiles')
      .upsert({
        id: user.id,
        full_name: data.full_name,
        role,
        school_name: data.school_name || null,
        grade_level: data.grade_level || null,
        onboarded: true,
      } as any)

    if (error) {
      toast.error('Failed to save profile. Please try again.')
      setLoading(false)
      return
    }

    // Redirect to role dashboard
    const ROLE_HOME: Record<string, string> = {
      explorer: '/explorer',
      achiever: '/achiever',
      scholar: '/scholar',
      teacher: '/teacher',
      parent: '/parent',
      admin: '/admin',
      government: '/government',
      enterprise: '/enterprise',
    }
    router.push(ROLE_HOME[role] ?? '/explorer')
  }

  const currentStep = STEPS[step]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-surface flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <Progress value={progress} variant="primary" size="sm" />
            <p className="text-xs font-label text-on-surface-variant mt-1">
              Step {step + 1} of {STEPS.length}
            </p>
          </div>
        </div>

        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-6 shadow-sm">
          <h2 className="font-display font-bold text-xl text-on-surface mb-1">{currentStep.title}</h2>
          <p className="text-sm text-on-surface-variant font-body mb-6">{currentStep.subtitle}</p>

          {currentStep.id === 'name' && (
            <Input
              label="Your name"
              placeholder="Enter your full name"
              value={data.full_name}
              onChange={e => setData(d => ({ ...d, full_name: e.target.value }))}
              autoFocus
            />
          )}

          {currentStep.id === 'school' && (
            <Input
              label="School name"
              placeholder="e.g. Greenwood Primary"
              value={data.school_name}
              onChange={e => setData(d => ({ ...d, school_name: e.target.value }))}
              hint="Optional — skip if you're home-schooled"
            />
          )}

          {currentStep.id === 'grade' && (
            <div className="grid grid-cols-3 gap-2">
              {GRADE_LEVELS.map(g => (
                <button
                  key={g}
                  onClick={() => setData(d => ({ ...d, grade_level: g }))}
                  className={cn(
                    'py-2 px-3 rounded-xl text-sm font-label font-semibold border-2 transition-all',
                    data.grade_level === g
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-outline-variant text-on-surface-variant hover:border-primary/50'
                  )}
                >
                  {g}
                </button>
              ))}
            </div>
          )}

          {currentStep.id === 'subjects' && (
            <div className="grid grid-cols-2 gap-2">
              {SUBJECTS.slice(0, 10).map(s => (
                <button
                  key={s.id}
                  onClick={() => toggleSubject(s.id)}
                  className={cn(
                    'flex items-center gap-2 py-2.5 px-3 rounded-xl text-sm font-label font-semibold border-2 transition-all text-left',
                    data.subjects.includes(s.id)
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-outline-variant text-on-surface-variant hover:border-primary/50'
                  )}
                >
                  <span>{s.emoji}</span>
                  <span className="truncate">{s.name}</span>
                </button>
              ))}
            </div>
          )}

          {currentStep.id === 'goals' && (
            <div className="space-y-2">
              {[
                'Improve my grades',
                'Prepare for exams',
                'Learn at my own pace',
                'Get ahead of class',
                'Build good study habits',
                'Just explore and have fun',
              ].map(g => (
                <button
                  key={g}
                  onClick={() => setData(d => ({ ...d, learning_goals: g }))}
                  className={cn(
                    'w-full text-left py-2.5 px-4 rounded-xl text-sm font-label font-semibold border-2 transition-all',
                    data.learning_goals === g
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-outline-variant text-on-surface-variant hover:border-primary/50'
                  )}
                >
                  {g}
                </button>
              ))}
            </div>
          )}

          {currentStep.id === 'ready' && (
            <div className="text-center py-4 space-y-4">
              <div className="text-6xl">🎉</div>
              <p className="font-display font-semibold text-on-surface">You&apos;re all set, {data.full_name || 'learner'}!</p>
              <p className="text-sm text-on-surface-variant font-body">
                Your personalised learning journey as a <strong>{ROLE_LABELS[role]}</strong> starts now.
              </p>
            </div>
          )}

          {/* Nav buttons */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setStep(s => s - 1)}
              disabled={step === 0}
              className="gap-1"
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </Button>

            {step < STEPS.length - 1 ? (
              <Button size="sm" onClick={() => setStep(s => s + 1)} className="gap-1">
                Continue
                <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button size="sm" onClick={handleFinish} loading={loading}>
                Start learning!
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function getSteps(role: string) {
  const base = [
    { id: 'name', title: 'What should we call you?', subtitle: 'This is how you\'ll appear on EduWorld.' },
  ]
  const learnerSteps = [
    { id: 'school', title: 'Where do you study?', subtitle: 'Optional — helps us align to your curriculum.' },
    { id: 'grade', title: 'What year are you in?', subtitle: 'We\'ll match content to your level.' },
    { id: 'subjects', title: 'Pick your subjects', subtitle: 'Choose the ones you\'d like to focus on.' },
    { id: 'goals', title: 'What\'s your main goal?', subtitle: 'We\'ll personalise your learning path.' },
  ]
  const end = [{ id: 'ready', title: 'You\'re ready!', subtitle: 'Let\'s begin your journey.' }]

  if (['explorer', 'achiever', 'scholar'].includes(role)) return [...base, ...learnerSteps, ...end]
  return [...base, ...end]
}
