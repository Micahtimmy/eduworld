'use client'
import Link from 'next/link'
import { Sparkles, BookOpen, Quote, CalendarDays, ChevronRight, CheckCircle, GraduationCap } from 'lucide-react'
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

export default function ScholarOnboardingReadyPage() {
  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Progress — all filled */}
        <ProgressBar step={6} total={6} />

        {/* Celebration */}
        <div className="text-center space-y-4 pt-4">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/30">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="font-display font-bold text-3xl text-on-surface">
              You're all set!
            </h1>
            <p className="text-base text-on-surface-variant">Your Scholar dashboard is ready. Let's do great work.</p>
          </div>
        </div>

        {/* AI intro panel */}
        <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-ai" />
            <p className="text-sm font-semibold text-on-surface">EduWorld AI is ready</p>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Your AI assistant can help with <strong className="text-on-surface">research</strong>, <strong className="text-on-surface">citations</strong>, <strong className="text-on-surface">study planning</strong>, and writing support — whenever you need it.
          </p>
          <div className="grid grid-cols-3 gap-2">
            {[
              { icon: <BookOpen className="h-4 w-4 text-ai" />, label: 'Research help' },
              { icon: <Quote className="h-4 w-4 text-ai" />, label: 'Citations' },
              { icon: <CalendarDays className="h-4 w-4 text-ai" />, label: 'Study plans' },
            ].map((item, i) => (
              <div key={i} className="bg-ai/5 rounded-xl p-2 text-center space-y-1">
                <div className="flex justify-center">{item.icon}</div>
                <p className="text-xs text-on-surface-variant">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What's ready */}
        <div className="bg-surface-lowest border border-outline-variant rounded-2xl p-5 space-y-3">
          <p className="text-sm font-semibold text-on-surface">Your account includes</p>
          <div className="space-y-2.5">
            {[
              'Personalised study dashboard',
              'AI-powered research assistant',
              'Smart citation generator',
              'Thesis writing workspace',
              'Course progress tracking',
            ].map(item => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 text-ai shrink-0" />
                <p className="text-sm text-on-surface-variant">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link href="/scholar/dashboard" className="block">
          <Button className="w-full h-12 text-base gap-2">
            Go to my dashboard
            <ChevronRight className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
