'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronRight, Check } from 'lucide-react'
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

const SUBJECTS = [
  { id: 'maths', label: 'Mathematics', emoji: '📐' },
  { id: 'science', label: 'Science', emoji: '🔬' },
  { id: 'english', label: 'English', emoji: '📖' },
  { id: 'history', label: 'History', emoji: '🏛️' },
  { id: 'art', label: 'Art', emoji: '🎨' },
  { id: 'cs', label: 'Computer Science', emoji: '💻' },
  { id: 'physics', label: 'Physics', emoji: '⚛️' },
  { id: 'chemistry', label: 'Chemistry', emoji: '🧪' },
  { id: 'biology', label: 'Biology', emoji: '🌱' },
  { id: 'geography', label: 'Geography', emoji: '🌍' },
  { id: 'languages', label: 'Languages', emoji: '🌐' },
  { id: 'other', label: 'Other', emoji: '📚' },
]

const GRADE_LEVELS = ['Primary', 'Lower Secondary', 'Upper Secondary', 'A-Level']

export default function TeacherOnboardingSubjectsPage() {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])
  const [gradeLevel, setGradeLevel] = useState('')
  const router = useRouter()

  function toggleSubject(id: string) {
    setSelectedSubjects(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    )
  }

  const canContinue = selectedSubjects.length > 0 && gradeLevel !== ''

  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Progress */}
        <ProgressBar step={1} total={6} />

        {/* Back */}
        <div className="flex items-center gap-3">
          <Link href="/teacher/onboarding/welcome" className="w-8 h-8 rounded-full bg-surface-lowest border border-outline-variant flex items-center justify-center hover:bg-surface transition-colors">
            <ArrowLeft className="h-4 w-4 text-on-surface" />
          </Link>
          <span className="text-xs text-on-surface-variant font-label">Step 1 of 5</span>
        </div>

        {/* Header */}
        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl text-on-surface">What do you teach?</h1>
          <p className="text-sm text-on-surface-variant">Select all subjects you teach. You can update these later.</p>
        </div>

        {/* Subject grid */}
        <div className="space-y-2">
          <label className="text-sm font-label font-semibold text-on-surface">Subjects</label>
          <div className="grid grid-cols-3 gap-2">
            {SUBJECTS.map(s => {
              const isSelected = selectedSubjects.includes(s.id)
              return (
                <button
                  key={s.id}
                  onClick={() => toggleSubject(s.id)}
                  className={`relative py-3 px-2 rounded-xl border text-center transition-all duration-150 ${
                    isSelected
                      ? 'bg-primary/5 border-primary shadow-sm shadow-primary/10'
                      : 'bg-surface-lowest border-outline-variant hover:border-primary/30'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-1.5 right-1.5 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                      <Check className="h-2.5 w-2.5 text-white" />
                    </div>
                  )}
                  <div className="text-xl mb-1">{s.emoji}</div>
                  <p className={`text-xs font-semibold leading-tight ${isSelected ? 'text-primary' : 'text-on-surface-variant'}`}>
                    {s.label}
                  </p>
                </button>
              )
            })}
          </div>
        </div>

        {/* Grade level */}
        <div className="space-y-3">
          <label className="text-sm font-label font-semibold text-on-surface">Grade level range</label>
          <div className="grid grid-cols-2 gap-2">
            {GRADE_LEVELS.map(g => (
              <button
                key={g}
                onClick={() => setGradeLevel(g)}
                className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all duration-150 ${
                  gradeLevel === g
                    ? 'bg-primary text-white border-primary shadow-md shadow-primary/20'
                    : 'bg-surface-lowest border-outline-variant text-on-surface hover:border-primary/50 hover:bg-primary/5'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Continue */}
        <Button
          className="w-full h-12 text-base gap-2"
          disabled={!canContinue}
          onClick={() => router.push('/teacher/onboarding/institution')}
        >
          Continue
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
