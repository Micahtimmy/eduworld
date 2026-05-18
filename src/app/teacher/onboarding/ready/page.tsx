'use client'
import Link from 'next/link'
import { Sparkles, BookOpen, ClipboardCheck, BarChart3, ChevronRight, CheckCircle } from 'lucide-react'
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

export default function TeacherOnboardingReadyPage() {
  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Progress — all filled */}
        <ProgressBar step={6} total={6} />

        {/* Celebration */}
        <div className="text-center space-y-4 pt-4">
          <div className="text-5xl">🎉</div>
          <div className="space-y-2">
            <h1 className="font-display font-bold text-3xl text-on-surface">Your classroom is ready!</h1>
            <p className="text-base text-on-surface-variant">Everything is set up. Let's start teaching with the power of AI.</p>
          </div>
        </div>

        {/* AI features */}
        <div className="bg-surface-lowest border border-outline-variant rounded-2xl p-5 space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-ai" />
            <p className="text-sm font-semibold text-on-surface">AI tools available now</p>
          </div>
          <div className="space-y-3">
            {[
              { icon: <BookOpen className="h-4 w-4 text-primary" />, title: 'Lesson Generator', desc: 'Full lesson plans in seconds' },
              { icon: <Sparkles className="h-4 w-4 text-xp" />, title: 'Quiz Builder', desc: 'Generate assessments from any topic' },
              { icon: <ClipboardCheck className="h-4 w-4 text-ai" />, title: 'Smart Grading', desc: 'AI drafts, you approve' },
              { icon: <BarChart3 className="h-4 w-4 text-purple-500" />, title: 'Progress Analytics', desc: 'Real-time class performance' },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-surface-low flex items-center justify-center shrink-0">
                  {f.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-on-surface">{f.title}</p>
                  <p className="text-xs text-on-surface-variant">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Checklist */}
        <div className="bg-surface-lowest border border-outline-variant rounded-2xl p-5 space-y-3">
          <p className="text-sm font-semibold text-on-surface">Setup complete</p>
          {[
            'Profile created',
            'Subjects configured',
            'First classroom created',
            'AI tools activated',
          ].map(item => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 text-ai shrink-0" />
              <p className="text-sm text-on-surface-variant">{item}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link href="/teacher/dashboard" className="block">
          <Button className="w-full h-12 text-base gap-2">
            Let's start teaching
            <ChevronRight className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
