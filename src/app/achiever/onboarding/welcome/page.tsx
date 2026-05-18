'use client'
import { Sparkles, ChevronRight, BookOpen, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const COURSES = [
  { code: 'CALC-BC', name: 'AP Calculus BC', teacher: 'Mr. Henderson', grade: 'Grade 11', color: 'bg-primary/10 text-primary' },
  { code: 'PHYS-A', name: 'Advanced Physics', teacher: 'Ms. Martinez', grade: 'Grade 11', color: 'bg-blue-100 text-blue-700' },
  { code: 'LIT-W', name: 'World Literature', teacher: 'Dr. Chen', grade: 'Grade 11', color: 'bg-purple-100 text-purple-700' },
]

export default function AchieverOnboardingWelcomePage() {
  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-semibold">
            EWD-029 · Tier 1 Invited
          </div>
          <h1 className="font-display font-bold text-3xl text-on-surface">
            Welcome to the<br />
            <span className="text-primary">Achiever Tier, Alex!</span>
          </h1>
          <p className="text-sm text-on-surface-variant">You've been enrolled in the Achiever program at your institution. Your AI-powered learning journey starts now.</p>
        </div>

        {/* AI Banner */}
        <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-ai shrink-0" />
          <div>
            <p className="text-sm font-semibold text-on-surface">EduWorld AI Activated</p>
            <p className="text-xs text-on-surface-variant">Your personal AI tutor is ready to help you achieve your academic goals.</p>
          </div>
          <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
        </div>

        {/* Institution Card */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <span className="font-bold text-xl text-primary">SP</span>
          </div>
          <div>
            <p className="font-semibold text-on-surface">St. Peter's Academy</p>
            <p className="text-xs text-on-surface-variant">Secondary School · Grade 11</p>
            <p className="text-xs text-primary mt-0.5">Verified Institution ✓</p>
          </div>
        </div>

        {/* Enrolled Courses */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <h2 className="font-display font-semibold text-on-surface">Your Enrolled Courses</h2>
          </div>
          <div className="space-y-2">
            {COURSES.map(c => (
              <div key={c.code} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 ${c.color}`}>
                  {c.code.split('-')[0]}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-on-surface">{c.name}</p>
                  <p className="text-xs text-on-surface-variant">{c.teacher} · {c.grade}</p>
                </div>
                <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Progress Setup */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
          <h2 className="font-display font-semibold text-on-surface">Setup Progress</h2>
          {[
            { step: 'Account Created', done: true },
            { step: 'Institution Verified', done: true },
            { step: 'Courses Enrolled', done: true },
            { step: 'Set Your Learning Goals', done: false },
          ].map(s => (
            <div key={s.step} className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${s.done ? 'bg-green-500' : 'border-2 border-outline-variant'}`}>
                {s.done && <CheckCircle className="h-3.5 w-3.5 text-white" />}
              </div>
              <p className={`text-sm ${s.done ? 'text-on-surface line-through opacity-60' : 'text-on-surface font-semibold'}`}>{s.step}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Button className="w-full gap-2 h-12 text-base">
          Let's Get Started
          <ChevronRight className="h-5 w-5" />
        </Button>

        <p className="text-center text-xs text-on-surface-variant">By continuing, you agree to EduWorld's <button className="text-primary hover:underline">Terms of Service</button> and <button className="text-primary hover:underline">Privacy Policy</button>.</p>
      </div>
    </div>
  )
}
