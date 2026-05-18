'use client'
import Link from 'next/link'
import { Bell, TrendingUp, BookOpen, Brain, Clock } from 'lucide-react'
import { useUser } from '@/hooks/use-user'
import { XPBar } from '@/components/shared/gamification/XPBar'
import { StreakBadge } from '@/components/shared/gamification/StreakBadge'
import { LevelBadge } from '@/components/shared/gamification/LevelBadge'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { StatCard } from '@/components/shared/StatCard'
import { SUBJECTS } from '@/lib/constants'

const UPCOMING_EXAMS = [
  { subject: 'Mathematics', date: 'Mon 26 May', daysLeft: 4, icon: '➕' },
  { subject: 'Physics', date: 'Thu 29 May', daysLeft: 7, icon: '⚛️' },
]

export default function AchieverDashboard() {
  const { profile } = useUser()
  const firstName = profile?.full_name?.split(' ')[0] ?? 'Achiever'
  const xp = profile?.xp ?? 2450
  const streak = profile?.streak_days ?? 12

  return (
    <div className="min-h-screen bg-surface dark:bg-gray-950">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-surface-lowest dark:bg-gray-900 border-b border-outline-variant px-4 py-3 flex items-center gap-3">
        <div className="flex-1">
          <p className="text-xs font-label text-on-surface-variant">Dashboard</p>
          <p className="font-display font-bold text-on-surface">{firstName}</p>
        </div>
        <StreakBadge streak={streak} animate />
        <Link href="/achiever/notifications" className="relative p-2 rounded-full hover:bg-surface-high">
          <Bell className="h-5 w-5 text-on-surface-variant" />
        </Link>
      </div>

      <div className="px-4 py-4 space-y-5">
        {/* XP Card */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <LevelBadge xp={xp} size="lg" />
              <div className="flex-1">
                <XPBar xp={xp} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick stats */}
        <div className="grid grid-cols-2 gap-3">
          <StatCard title="Study Hours" value="4.5h" subtitle="this week" icon={Clock} iconColor="text-primary" />
          <StatCard title="Avg Grade" value="87%" trend={3} trendLabel="+3% vs last week" icon={TrendingUp} iconColor="text-ai" />
        </div>

        {/* Upcoming exams */}
        {UPCOMING_EXAMS.length > 0 && (
          <section>
            <h2 className="font-display font-semibold text-on-surface mb-3">Upcoming Exams</h2>
            <div className="space-y-2">
              {UPCOMING_EXAMS.map(exam => (
                <div key={exam.subject} className="flex items-center gap-3 p-3 bg-surface-lowest rounded-xl border border-outline-variant">
                  <span className="text-xl">{exam.icon}</span>
                  <div className="flex-1">
                    <p className="font-label font-semibold text-sm text-on-surface">{exam.subject}</p>
                    <p className="text-xs text-on-surface-variant">{exam.date}</p>
                  </div>
                  <Badge variant={exam.daysLeft <= 3 ? 'error' : 'warning'} size="sm">
                    {exam.daysLeft}d left
                  </Badge>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Study + Tutor CTA */}
        <div className="grid grid-cols-2 gap-3">
          <Link href="/achiever/study" className="p-4 bg-primary rounded-2xl flex flex-col gap-2 hover:opacity-90 transition-opacity">
            <BookOpen className="h-6 w-6 text-white" />
            <p className="font-label font-semibold text-white text-sm">Study</p>
            <p className="text-xs text-white/70">Pick up where you left off</p>
          </Link>
          <Link href="/achiever/tutor" className="p-4 bg-ai/10 rounded-2xl border border-ai/20 flex flex-col gap-2 hover:bg-ai/15 transition-colors">
            <Brain className="h-6 w-6 text-ai" />
            <p className="font-label font-semibold text-on-surface text-sm">AI Tutor</p>
            <p className="text-xs text-on-surface-variant">Ask anything, anytime</p>
          </Link>
        </div>

        {/* Subject quick access */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display font-semibold text-on-surface">My Subjects</h2>
            <Link href="/achiever/study" className="text-xs font-label font-semibold text-primary">View all</Link>
          </div>
          <div className="flex gap-3 overflow-x-auto scrollbar-thin pb-1">
            {SUBJECTS.slice(0, 6).map(s => (
              <Link
                key={s.id}
                href={`/achiever/study/${s.id}`}
                className="shrink-0 flex flex-col items-center gap-1.5 p-3 bg-surface-lowest rounded-2xl border border-outline-variant w-20 hover:border-primary/50 transition-colors"
              >
                <span className="text-2xl">{s.emoji}</span>
                <p className="text-xs font-label font-semibold text-on-surface text-center leading-tight">{s.name}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
