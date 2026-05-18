'use client'
import { Bell, Settings } from 'lucide-react'
import Link from 'next/link'
import { useUser } from '@/hooks/use-user'
import { XPBar } from '@/components/shared/gamification/XPBar'
import { StreakBadge } from '@/components/shared/gamification/StreakBadge'
import { LevelBadge } from '@/components/shared/gamification/LevelBadge'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SUBJECTS } from '@/lib/constants'

const DAILY_QUESTS = [
  { id: 'q1', label: 'Complete 1 lesson', xp: 20, done: false },
  { id: 'q2', label: 'Answer 5 questions', xp: 15, done: true },
  { id: 'q3', label: 'Chat with AI tutor', xp: 10, done: false },
]

const FEATURED_SUBJECTS = SUBJECTS.slice(0, 4)

export default function ExplorerDashboard() {
  const { profile } = useUser()
  const firstName = profile?.full_name?.split(' ')[0] ?? 'Explorer'
  const xp = profile?.xp ?? 120
  const streak = profile?.streak_days ?? 3

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'

  return (
    <div className="pb-4">
      {/* Top bar */}
      <div className="sticky top-0 z-20 bg-surface-lowest border-b border-outline-variant px-4 py-3 flex items-center gap-3">
        <div className="flex-1">
          <p className="text-xs font-label text-on-surface-variant">{greeting} 👋</p>
          <p className="font-display font-bold text-on-surface">{firstName}</p>
        </div>
        <StreakBadge streak={streak} animate />
        <Link href="/explorer/notifications" className="relative p-2 rounded-full hover:bg-surface-high">
          <Bell className="h-5 w-5 text-on-surface-variant" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error" />
        </Link>
      </div>

      <div className="px-4 space-y-5 mt-4">
        {/* XP + Level */}
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

        {/* Daily quests */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display font-semibold text-on-surface">Daily Quests</h2>
            <Badge variant="xp" size="sm">{DAILY_QUESTS.filter(q => q.done).length}/{DAILY_QUESTS.length}</Badge>
          </div>
          <div className="space-y-2">
            {DAILY_QUESTS.map(quest => (
              <div
                key={quest.id}
                className={`flex items-center gap-3 p-3 rounded-xl border-2 ${quest.done ? 'border-green-200 bg-green-50' : 'border-outline-variant bg-surface-lowest'}`}
              >
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${quest.done ? 'border-green-500 bg-green-500' : 'border-outline-variant'}`}>
                  {quest.done && <span className="text-white text-xs">✓</span>}
                </div>
                <p className={`flex-1 text-sm font-label font-semibold ${quest.done ? 'text-green-700 line-through' : 'text-on-surface'}`}>
                  {quest.label}
                </p>
                <Badge variant="xp" size="sm">+{quest.xp} XP</Badge>
              </div>
            ))}
          </div>
        </section>

        {/* Continue learning */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display font-semibold text-on-surface">Continue Learning</h2>
            <Link href="/explorer/learn" className="text-xs font-label font-semibold text-primary">See all</Link>
          </div>
          <Card interactive className="overflow-hidden">
            <CardContent className="p-0">
              <Link href="/explorer/learn/maths-chapter-3" className="block p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl shrink-0">
                    ➕
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-label font-semibold text-on-surface truncate">Addition & Subtraction</p>
                    <p className="text-xs text-on-surface-variant">Mathematics · Chapter 3</p>
                    <div className="mt-2 bg-surface-high rounded-full h-1.5 w-full">
                      <div className="bg-primary h-1.5 rounded-full w-[65%] transition-all" />
                    </div>
                    <p className="text-xs text-on-surface-variant mt-1">65% complete</p>
                  </div>
                </div>
              </Link>
            </CardContent>
          </Card>
        </section>

        {/* Subject grid */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display font-semibold text-on-surface">Subjects</h2>
            <Link href="/explorer/learn" className="text-xs font-label font-semibold text-primary">All subjects</Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {FEATURED_SUBJECTS.map(subject => (
              <Link
                key={subject.id}
                href={`/explorer/learn/${subject.id}`}
                className="bg-surface-lowest rounded-2xl p-4 border border-outline-variant flex flex-col gap-2 hover:border-primary/50 hover:shadow-sm transition-all"
              >
                <span className="text-2xl">{subject.emoji}</span>
                <p className="font-label font-semibold text-sm text-on-surface">{subject.name}</p>
                <div className="bg-surface-high rounded-full h-1">
                  <div className="bg-primary h-1 rounded-full" style={{ width: `${Math.random() * 60 + 20}%` }} />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* AI Tutor prompt */}
        <Link href="/explorer/tutor">
          <div className="rounded-2xl bg-gradient-to-r from-ai/20 to-ai/5 border border-ai/20 p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-ai/20 flex items-center justify-center text-xl">
              🤖
            </div>
            <div>
              <p className="font-label font-semibold text-on-surface text-sm">Got a question?</p>
              <p className="text-xs text-on-surface-variant">Ask your AI tutor anything</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
