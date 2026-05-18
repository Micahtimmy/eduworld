'use client'
import { Sparkles, AlertTriangle, Target, Clock, BookOpen, Brain } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const PLAN_CARDS = [
  {
    icon: AlertTriangle,
    iconColor: 'text-amber-500',
    bgColor: 'bg-amber-50 border-amber-200',
    badge: 'Weak Point',
    badgeColor: 'bg-amber-100 text-amber-700',
    title: 'Calculus: Integration Techniques',
    desc: 'You scored 42% on the last integration quiz. AI recommends a focused 45-min review session.',
    cta: 'Start Review',
    ctaVariant: 'default' as const,
  },
  {
    icon: Target,
    iconColor: 'text-primary',
    bgColor: 'bg-surface-lowest border-outline-variant',
    badge: 'Daily AI Goal',
    badgeColor: 'bg-primary/10 text-primary',
    title: '2 / 5 Tasks Complete · 7-Day Streak',
    desc: 'You\'re on a 7-day learning streak! Complete 3 more tasks today to maintain your momentum.',
    cta: 'Continue Tasks',
    ctaVariant: 'default' as const,
  },
  {
    icon: Clock,
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-50 border-blue-200',
    badge: 'Upcoming',
    badgeColor: 'bg-blue-100 text-blue-700',
    title: 'Physics Lab 3 Due Tomorrow',
    desc: 'Lab report on Newton\'s Third Law. AI has pre-filled your data tables based on your measurements.',
    cta: 'Open Lab Report',
    ctaVariant: 'outline' as const,
  },
  {
    icon: Brain,
    iconColor: 'text-purple-500',
    bgColor: 'bg-purple-50 border-purple-200',
    badge: 'Flashcards',
    badgeColor: 'bg-purple-100 text-purple-700',
    title: 'Organic Chemistry — 45 Cards',
    desc: 'AI spaced repetition recommends reviewing 12 cards today. Estimated time: 15 minutes.',
    cta: 'Review Now',
    ctaVariant: 'outline' as const,
  },
]

const SCHEDULE = [
  { time: '3:30 PM', subject: 'Calculus Integration', duration: '45 min', type: 'Weak Point Review' },
  { time: '4:30 PM', subject: 'Physics Lab Report', duration: '30 min', type: 'Assignment' },
  { time: '5:15 PM', subject: 'Organic Chemistry', duration: '15 min', type: 'Flashcards' },
]

export default function AchieverStudyPlanPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">AI Personalized Study Plan</h1>
          <p className="text-sm text-on-surface-variant mt-1">Your adaptive learning path for today — powered by AI analysis.</p>
        </div>
        <Button className="gap-2 bg-ai hover:bg-ai/90"><Sparkles className="h-4 w-4" /> Regenerate Plan</Button>
      </div>

      {/* Progress Summary */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="font-display font-semibold text-on-surface">Today's Progress</p>
            <p className="text-xs text-on-surface-variant">2 of 5 tasks completed</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <div>
              <p className="font-bold text-on-surface">7</p>
              <p className="text-xs text-on-surface-variant">Day Streak</p>
            </div>
          </div>
        </div>
        <div className="h-3 bg-surface-high rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all" style={{ width: '40%' }} />
        </div>
        <div className="flex justify-between mt-1">
          <p className="text-xs text-on-surface-variant">40% Complete</p>
          <p className="text-xs text-primary font-semibold">+250 XP Available</p>
        </div>
      </div>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PLAN_CARDS.map(card => (
          <div key={card.title} className={cn('rounded-2xl border p-5 space-y-3', card.bgColor)}>
            <div className="flex items-center justify-between">
              <span className={cn('text-xs px-2 py-0.5 rounded-full font-semibold', card.badgeColor)}>{card.badge}</span>
              <card.icon className={cn('h-5 w-5', card.iconColor)} />
            </div>
            <div>
              <p className="font-semibold text-sm text-on-surface">{card.title}</p>
              <p className="text-xs text-on-surface-variant mt-1">{card.desc}</p>
            </div>
            <Button size="sm" variant={card.ctaVariant} className="h-8 text-xs">{card.cta}</Button>
          </div>
        ))}
      </div>

      {/* Today's Schedule */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Recommended Schedule</h2>
          <button className="text-xs text-primary hover:underline">Customize</button>
        </div>
        <div className="space-y-2">
          {SCHEDULE.map(s => (
            <div key={s.time} className="flex items-center gap-4 p-3 bg-surface-low rounded-xl">
              <div className="text-right w-16 shrink-0">
                <p className="text-xs font-semibold text-on-surface">{s.time}</p>
                <p className="text-xs text-on-surface-variant">{s.duration}</p>
              </div>
              <div className="w-0.5 h-8 bg-outline-variant" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-on-surface">{s.subject}</p>
                <p className="text-xs text-on-surface-variant">{s.type}</p>
              </div>
              <BookOpen className="h-4 w-4 text-on-surface-variant" />
            </div>
          ))}
        </div>
      </div>

      {/* AI Insight */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 flex items-start gap-3">
        <Sparkles className="h-4 w-4 text-ai mt-0.5 shrink-0" />
        <p className="text-xs text-on-surface-variant">Based on your recent performance, focusing on <strong className="text-on-surface">integration by parts</strong> will yield the highest exam score improvement. Your predicted grade rises from B+ to A− with 3 focused sessions.</p>
      </div>
    </div>
  )
}
