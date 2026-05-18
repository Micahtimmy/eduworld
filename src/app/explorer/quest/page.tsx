'use client'
import { MobileTopBar } from '@/components/shared/navigation/TopBar'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const QUESTS = [
  {
    id: 'daily',
    label: 'Daily',
    quests: [
      { id: 'd1', title: 'Complete a Maths lesson', xp: 20, progress: 0, total: 1, icon: '➕' },
      { id: 'd2', title: 'Answer 5 quiz questions', xp: 15, progress: 5, total: 5, icon: '❓' },
      { id: 'd3', title: 'Ask the AI tutor a question', xp: 10, progress: 1, total: 1, icon: '🤖' },
    ],
  },
  {
    id: 'weekly',
    label: 'Weekly',
    quests: [
      { id: 'w1', title: 'Study 5 different subjects', xp: 50, progress: 2, total: 5, icon: '📚' },
      { id: 'w2', title: 'Earn 100 XP this week', xp: 30, progress: 65, total: 100, icon: '⭐' },
      { id: 'w3', title: 'Maintain a 5-day streak', xp: 75, progress: 3, total: 5, icon: '🔥' },
    ],
  },
]

export default function ExplorerQuestPage() {
  return (
    <div>
      <MobileTopBar title="Quests" />
      <div className="px-4 py-4 space-y-6">
        {QUESTS.map(section => (
          <section key={section.id}>
            <h2 className="font-display font-semibold text-on-surface mb-3 flex items-center gap-2">
              {section.label} Quests
              <Badge variant="xp" size="sm">
                {section.quests.filter(q => q.progress >= q.total).length}/{section.quests.length}
              </Badge>
            </h2>
            <div className="space-y-3">
              {section.quests.map(quest => {
                const done = quest.progress >= quest.total
                return (
                  <div
                    key={quest.id}
                    className={cn(
                      'p-4 rounded-2xl border-2',
                      done ? 'border-green-200 bg-green-50' : 'bg-surface-lowest border-outline-variant'
                    )}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{quest.icon}</span>
                      <div className="flex-1">
                        <p className={cn(
                          'font-label font-semibold text-sm',
                          done ? 'text-green-700' : 'text-on-surface'
                        )}>
                          {quest.title}
                        </p>
                        <p className="text-xs text-on-surface-variant">{quest.progress}/{quest.total} complete</p>
                      </div>
                      <Badge variant={done ? 'success' : 'xp'} size="sm">+{quest.xp} XP</Badge>
                    </div>
                    <Progress
                      value={(quest.progress / quest.total) * 100}
                      variant={done ? 'primary' : 'xp'}
                      size="sm"
                    />
                  </div>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
