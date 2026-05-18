'use client'
import { cn } from '@/lib/utils'
import type { Achievement } from '@/types/app.types'

interface AchievementBadgeProps {
  achievement: Achievement
  unlocked?: boolean
  size?: 'sm' | 'md' | 'lg'
  animate?: boolean
  onClick?: () => void
  className?: string
}

const TIER_STYLES = {
  bronze:   { ring: 'ring-amber-700/40', bg: 'bg-amber-50',   icon: '🥉' },
  silver:   { ring: 'ring-slate-400/40', bg: 'bg-slate-50',   icon: '🥈' },
  gold:     { ring: 'ring-yellow-500/40', bg: 'bg-yellow-50', icon: '🥇' },
  platinum: { ring: 'ring-cyan-400/40',  bg: 'bg-cyan-50',    icon: '💎' },
  diamond:  { ring: 'ring-violet-400/40', bg: 'bg-violet-50', icon: '💠' },
}

export function AchievementBadge({
  achievement,
  unlocked = true,
  size = 'md',
  animate,
  onClick,
  className,
}: AchievementBadgeProps) {
  const tier = TIER_STYLES[achievement.tier ?? 'bronze'] ?? TIER_STYLES.bronze

  const sizes = {
    sm: { outer: 'w-12 h-12', icon: 'text-xl' },
    md: { outer: 'w-16 h-16', icon: 'text-3xl' },
    lg: { outer: 'w-24 h-24', icon: 'text-5xl' },
  }
  const sz = sizes[size]

  return (
    <button
      onClick={onClick}
      disabled={!onClick}
      className={cn(
        'flex flex-col items-center gap-1.5 group',
        onClick && 'cursor-pointer',
        className
      )}
    >
      <div className={cn(
        'relative rounded-2xl ring-2 flex items-center justify-center transition-all',
        sz.outer,
        tier.ring,
        unlocked ? tier.bg : 'bg-surface-highest',
        animate && unlocked && 'animate-badge-unlock',
        onClick && 'group-hover:scale-105 group-hover:shadow-md',
        !unlocked && 'opacity-40 grayscale'
      )}>
        <span className={cn(sz.icon, !unlocked && 'blur-sm')} role="img" aria-label={achievement.title}>
          {achievement.icon ?? achievement.icon_url ?? tier.icon}
        </span>
        {!unlocked && (
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/20">
            <span className="text-white text-xs">🔒</span>
          </div>
        )}
      </div>
      {size !== 'sm' && (
        <span className={cn(
          'text-xs font-label font-semibold text-center leading-tight max-w-[80px]',
          unlocked ? 'text-on-surface' : 'text-on-surface-variant'
        )}>
          {achievement.title}
        </span>
      )}
    </button>
  )
}
