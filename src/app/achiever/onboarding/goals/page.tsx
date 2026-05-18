'use client'
import { Button } from '@/components/ui/button'

const GOALS = [
  {
    icon: '🏅',
    title: 'Standardized Tests',
    desc: 'Prepare for SAT, ACT, and AP exams with personalized practice.',
    badge: '⚡ AI Practice Generator',
  },
  {
    icon: '🏛',
    title: 'University Prep',
    desc: 'Build your application portfolio, essays, and recommendation pipeline.',
    badge: '📄 Essay Review Access',
  },
  {
    icon: '🧠',
    title: 'Subject Mastery',
    desc: 'Deep-dive into your core subjects with smart spaced repetition.',
    badge: '⚡ Smart Spaced Repetition',
  },
]

export default function AchieverOnboardingGoalsPage() {
  return (
    <div className="min-h-screen bg-surface-lowest flex items-center justify-center p-6">
      <div className="w-full max-w-lg space-y-6">
        <div className="text-center space-y-1">
          <p className="text-xs font-semibold text-on-surface-variant">Step 2 of 4</p>
          <div className="h-1 bg-surface-high rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: '50%' }} />
          </div>
        </div>

        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">What&apos;s your mission this term?</h1>
          <p className="text-sm text-on-surface-variant mt-2">Choose your focus and EduWorld AI will personalize your study plans, resources, and difficulty calibration.</p>
        </div>

        <div className="space-y-3">
          {GOALS.map((g, i) => (
            <button key={g.title} className={`w-full flex items-start gap-4 p-4 rounded-2xl border-2 text-left transition-colors ${i === 0 ? 'border-primary bg-primary/5' : 'border-outline-variant bg-surface-lowest hover:border-primary/40'}`}>
              <span className="text-2xl">{g.icon}</span>
              <div className="flex-1">
                <p className="font-semibold text-on-surface">{g.title}</p>
                <p className="text-xs text-on-surface-variant mt-0.5">{g.desc}</p>
                <span className="inline-block mt-1.5 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">{g.badge}</span>
              </div>
              <span className={`text-lg shrink-0 ${i === 0 ? 'text-primary' : 'text-on-surface-variant'}`}>{i === 0 ? '✓' : '○'}</span>
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          <Button variant="outline" className="flex-1">← Back</Button>
          <Button className="flex-1">Continue to Dashboard →</Button>
        </div>
      </div>
    </div>
  )
}
