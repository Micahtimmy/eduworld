'use client'
import { MobileTopBar } from '@/components/shared/navigation/TopBar'
import { AchievementBadge } from '@/components/shared/gamification/AchievementBadge'
import { LevelBadge } from '@/components/shared/gamification/LevelBadge'
import { XPBar } from '@/components/shared/gamification/XPBar'
import { useUser } from '@/hooks/use-user'
import type { Achievement } from '@/types/app.types'

const MOCK_ACHIEVEMENTS: Achievement[] = [
  { id: '1', title: 'First Step', description: 'Complete your first lesson', icon: '⭐', tier: 'bronze', xp_reward: 10 },
  { id: '2', title: 'Quick Learner', description: 'Complete 5 lessons', icon: '⚡', tier: 'silver', xp_reward: 25 },
  { id: '3', title: 'Streak Master', description: '7 day study streak', icon: '🔥', tier: 'gold', xp_reward: 50 },
  { id: '4', title: 'AI Explorer', description: 'Ask the tutor 10 questions', icon: '🤖', tier: 'bronze', xp_reward: 15 },
  { id: '5', title: 'Math Wizard', description: 'Score 100% on a maths quiz', icon: '🧮', tier: 'gold', xp_reward: 40 },
  { id: '6', title: 'Science Star', description: 'Complete all science lessons', icon: '🔬', tier: 'platinum', xp_reward: 100 },
  { id: '7', title: 'Speed Runner', description: 'Finish a lesson in under 5 min', icon: '🏃', tier: 'silver', xp_reward: 20 },
  { id: '8', title: 'Perfect Score', description: 'Ace 3 quizzes in a row', icon: '💯', tier: 'diamond', xp_reward: 150 },
]

const UNLOCKED = ['1', '2', '3', '4']

export default function AchieverAchievementsPage() {
  const { profile } = useUser()
  const xp = profile?.xp ?? 2450

  return (
    <div>
      <MobileTopBar title="Achievements" />
      <div className="px-4 py-4 space-y-6">
        <div className="flex items-center gap-4 p-4 bg-surface-lowest rounded-2xl border border-outline-variant">
          <LevelBadge xp={xp} size="lg" />
          <div className="flex-1">
            <XPBar xp={xp} />
          </div>
        </div>

        <div className="text-center">
          <p className="font-display font-bold text-3xl text-on-surface">{UNLOCKED.length}</p>
          <p className="text-sm font-label text-on-surface-variant">of {MOCK_ACHIEVEMENTS.length} achievements unlocked</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {MOCK_ACHIEVEMENTS.map(a => (
            <AchievementBadge
              key={a.id}
              achievement={a}
              unlocked={UNLOCKED.includes(a.id)}
              size="md"
              animate={UNLOCKED.includes(a.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
