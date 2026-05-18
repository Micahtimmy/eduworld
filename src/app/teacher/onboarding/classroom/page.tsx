'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronRight, ChevronDown } from 'lucide-react'
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
  'Mathematics', 'Science', 'English', 'History', 'Art', 'Computer Science',
  'Physics', 'Chemistry', 'Biology', 'Geography', 'Languages', 'Other',
]

const GRADE_LEVELS = [
  'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6',
  'Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12',
  'Form 1', 'Form 2', 'Form 3', 'Form 4', 'Form 5', 'Form 6',
  'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6',
  'JSS 1', 'JSS 2', 'JSS 3', 'SSS 1', 'SSS 2', 'SSS 3',
]

export default function TeacherOnboardingClassroomPage() {
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [grade, setGrade] = useState('')
  const router = useRouter()

  const canContinue = name.trim().length > 0 && subject !== '' && grade !== ''

  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Progress */}
        <ProgressBar step={3} total={6} />

        {/* Back */}
        <div className="flex items-center gap-3">
          <Link href="/teacher/onboarding/institution" className="w-8 h-8 rounded-full bg-surface-lowest border border-outline-variant flex items-center justify-center hover:bg-surface transition-colors">
            <ArrowLeft className="h-4 w-4 text-on-surface" />
          </Link>
          <span className="text-xs text-on-surface-variant font-label">Step 3 of 5</span>
        </div>

        {/* Header */}
        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl text-on-surface">Create your first classroom</h1>
          <p className="text-sm text-on-surface-variant">You can add more classrooms later from your dashboard.</p>
        </div>

        {/* Form */}
        <div className="bg-surface-lowest border border-outline-variant rounded-2xl p-5 space-y-4">
          {/* Classroom name */}
          <div className="space-y-2">
            <label className="text-sm font-label font-semibold text-on-surface">Classroom name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="e.g. 10A Mathematics, Year 9 Science..."
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-low text-on-surface placeholder:text-on-surface-variant outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm"
            />
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <label className="text-sm font-label font-semibold text-on-surface">Subject</label>
            <div className="relative">
              <select
                value={subject}
                onChange={e => setSubject(e.target.value)}
                className="w-full px-4 py-3 pr-10 rounded-xl border border-outline-variant bg-surface-low text-on-surface outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm appearance-none"
              >
                <option value="">Select a subject...</option>
                {SUBJECTS.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant pointer-events-none" />
            </div>
          </div>

          {/* Grade level */}
          <div className="space-y-2">
            <label className="text-sm font-label font-semibold text-on-surface">Grade / Year level</label>
            <div className="relative">
              <select
                value={grade}
                onChange={e => setGrade(e.target.value)}
                className="w-full px-4 py-3 pr-10 rounded-xl border border-outline-variant bg-surface-low text-on-surface outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm appearance-none"
              >
                <option value="">Select a grade level...</option>
                {GRADE_LEVELS.map(g => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Preview */}
        {name && subject && grade && (
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-primary">{name.substring(0, 2).toUpperCase()}</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-on-surface">{name}</p>
              <p className="text-xs text-on-surface-variant">{subject} · {grade}</p>
            </div>
          </div>
        )}

        {/* Continue */}
        <Button
          className="w-full h-12 text-base gap-2"
          disabled={!canContinue}
          onClick={() => router.push('/teacher/onboarding/invite')}
        >
          Create classroom
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
