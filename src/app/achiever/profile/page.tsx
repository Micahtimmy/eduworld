'use client'
import { MobileTopBar } from '@/components/shared/navigation/TopBar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { LevelBadge } from '@/components/shared/gamification/LevelBadge'
import { StreakBadge } from '@/components/shared/gamification/StreakBadge'
import { XPBar } from '@/components/shared/gamification/XPBar'
import { AchievementBadge } from '@/components/shared/gamification/AchievementBadge'
import { useUser } from '@/hooks/use-user'
import { getInitials } from '@/lib/utils'
import { RadarChart } from '@/components/shared/charts/RadarChart'
import { Settings, Edit3 } from 'lucide-react'
import Link from 'next/link'
import type { Achievement } from '@/types/app.types'

const MOCK_ACHIEVEMENTS: Achievement[] = [
  { id: '1', title: 'First Step', icon: '⭐', tier: 'bronze', xp_reward: 10, description: '' },
  { id: '2', title: 'Quick Learner', icon: '⚡', tier: 'silver', xp_reward: 25, description: '' },
  { id: '3', title: 'Streak Master', icon: '🔥', tier: 'gold', xp_reward: 50, description: '' },
]

const SUBJECT_SCORES = [
  { subject: 'Maths', value: 78 },
  { subject: 'Physics', value: 65 },
  { subject: 'Chemistry', value: 82 },
  { subject: 'English', value: 90 },
  { subject: 'Biology', value: 71 },
]

export default function AchieverProfilePage() {
  const { profile } = useUser()
  const displayName = profile?.full_name ?? 'Achiever'
  const xp = profile?.xp ?? 2450
  const streak = profile?.streak_days ?? 12

  return (
    <div>
      <MobileTopBar
        title="Profile"
        rightAction={
          <Link href="/achiever/settings" className="p-2 rounded-lg hover:bg-surface-high text-on-surface-variant">
            <Settings className="h-5 w-5" />
          </Link>
        }
      />
      <div className="px-4 py-4 space-y-5">
        {/* Profile header */}
        <div className="flex flex-col items-center py-4">
          <div className="relative">
            <Avatar size="xl">
              {profile?.avatar_url && <AvatarImage src={profile.avatar_url} alt={displayName} />}
              <AvatarFallback>{getInitials(displayName)}</AvatarFallback>
            </Avatar>
            <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center">
              <Edit3 className="h-3.5 w-3.5" />
            </button>
          </div>
          <h1 className="mt-3 font-display font-bold text-xl text-on-surface">{displayName}</h1>
          <div className="flex items-center gap-3 mt-2">
            <LevelBadge xp={xp} size="sm" />
            <StreakBadge streak={streak} showLabel />
          </div>
        </div>

        {/* XP progress */}
        <XPBar xp={xp} size="lg" />

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Lessons', value: '47' },
            { label: 'Quizzes', value: '23' },
            { label: 'Achievements', value: '8' },
          ].map(s => (
            <div key={s.label} className="bg-surface-lowest rounded-2xl border border-outline-variant p-3 text-center">
              <p className="font-display font-bold text-xl text-on-surface">{s.value}</p>
              <p className="text-xs font-label text-on-surface-variant mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Subject radar */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4">
          <h2 className="font-display font-semibold text-on-surface mb-2">Subject Performance</h2>
          <RadarChart data={SUBJECT_SCORES} height={180} />
        </div>

        {/* Achievements */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display font-semibold text-on-surface">Achievements</h2>
            <Link href="/achiever/achievements" className="text-xs font-label font-semibold text-primary">View all</Link>
          </div>
          <div className="flex gap-4">
            {MOCK_ACHIEVEMENTS.map(a => (
              <AchievementBadge key={a.id} achievement={a} unlocked size="md" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
