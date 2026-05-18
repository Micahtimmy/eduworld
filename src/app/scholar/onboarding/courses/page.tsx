'use client'
import { useState, KeyboardEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronRight, X, Plus } from 'lucide-react'
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

const COURSE_COLORS = [
  'bg-primary/10 text-primary border-primary/20',
  'bg-ai/10 text-ai border-ai/20',
  'bg-xp/10 text-xp border-xp/20',
  'bg-purple-100 text-purple-700 border-purple-200',
  'bg-pink-100 text-pink-700 border-pink-200',
  'bg-blue-100 text-blue-700 border-blue-200',
  'bg-orange-100 text-orange-700 border-orange-200',
  'bg-teal-100 text-teal-700 border-teal-200',
]

export default function ScholarOnboardingCoursesPage() {
  const [courses, setCourses] = useState<string[]>([])
  const [input, setInput] = useState('')
  const router = useRouter()

  const MAX = 8

  function addCourse() {
    const trimmed = input.trim()
    if (!trimmed || courses.length >= MAX || courses.includes(trimmed)) return
    setCourses(prev => [...prev, trimmed])
    setInput('')
  }

  function removeCourse(c: string) {
    setCourses(prev => prev.filter(x => x !== c))
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault()
      addCourse()
    }
  }

  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Progress */}
        <ProgressBar step={3} total={6} />

        {/* Back */}
        <div className="flex items-center gap-3">
          <Link href="/scholar/onboarding/institution" className="w-8 h-8 rounded-full bg-surface-lowest border border-outline-variant flex items-center justify-center hover:bg-surface transition-colors">
            <ArrowLeft className="h-4 w-4 text-on-surface" />
          </Link>
          <span className="text-xs text-on-surface-variant font-label">Step 3 of 5</span>
        </div>

        {/* Header */}
        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl text-on-surface">Add your courses this semester</h1>
          <p className="text-sm text-on-surface-variant">Type a course name and press Enter to add it as a tag. Up to {MAX} courses.</p>
        </div>

        {/* Input */}
        <div className="space-y-2">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="e.g. Advanced Algorithms, Organic Chemistry..."
              disabled={courses.length >= MAX}
              className="flex-1 px-4 py-3 rounded-xl border border-outline-variant bg-surface-lowest text-on-surface placeholder:text-on-surface-variant outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm disabled:opacity-50"
            />
            <button
              onClick={addCourse}
              disabled={!input.trim() || courses.length >= MAX}
              className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center disabled:opacity-40 hover:bg-primary/90 transition-colors shrink-0"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
          <p className="text-xs text-on-surface-variant text-right">{courses.length}/{MAX} courses added</p>
        </div>

        {/* Pills */}
        {courses.length > 0 && (
          <div className="bg-surface-lowest border border-outline-variant rounded-2xl p-4">
            <div className="flex flex-wrap gap-2">
              {courses.map((c, i) => (
                <span
                  key={c}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold ${COURSE_COLORS[i % COURSE_COLORS.length]}`}
                >
                  {c}
                  <button
                    onClick={() => removeCourse(c)}
                    className="opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

        {courses.length === 0 && (
          <div className="border-2 border-dashed border-outline-variant rounded-2xl p-8 text-center">
            <p className="text-sm text-on-surface-variant">Your courses will appear here as tags</p>
          </div>
        )}

        {/* Buttons */}
        <div className="space-y-3">
          <Button
            className="w-full h-12 text-base gap-2"
            disabled={courses.length === 0}
            onClick={() => router.push('/scholar/onboarding/goal')}
          >
            Continue
            <ChevronRight className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            className="w-full h-11 text-sm text-on-surface-variant"
            onClick={() => router.push('/scholar/onboarding/goal')}
          >
            Skip for now
          </Button>
        </div>
      </div>
    </div>
  )
}
