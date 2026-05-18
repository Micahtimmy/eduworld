'use client'
import { cn } from '@/lib/utils'
import { Flame } from 'lucide-react'

interface StreakBadgeProps {
  streak: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showLabel?: boolean
  animate?: boolean
}

const STREAK_TIERS = [
  { min: 0, color: 'text-on-surface-variant', bg: 'bg-surface-high' },
  { min: 3, color: 'text-amber-600', bg: 'bg-amber-100' },
  { min: 7, color: 'text-orange-600', bg: 'bg-orange-100' },
  { min: 14, color: 'text-red-600', bg: 'bg-red-100' },
  { min: 30, color: 'text-rose-600', bg: 'bg-rose-100' },
]

function getTier(streak: number) {
  return [...STREAK_TIERS].reverse().find(t => streak >= t.min) ?? STREAK_TIERS[0]
}

export function StreakBadge({ streak, size = 'md', className, showLabel = false, animate }: StreakBadgeProps) {
  const tier = getTier(streak)
  const isHot = streak >= 7

  const sizes = {
    sm: 'h-6 px-2 gap-1 text-xs',
    md: 'h-8 px-2.5 gap-1.5 text-sm',
    lg: 'h-10 px-3 gap-2 text-base',
  }
  const iconSizes = { sm: 'h-3 w-3', md: 'h-4 w-4', lg: 'h-5 w-5' }

  return (
    <div className={cn(
      'inline-flex items-center rounded-full font-label font-semibold',
      sizes[size],
      tier.bg,
      tier.color,
      animate && isHot && 'animate-streak-pop',
      className
    )}>
      <Flame className={cn(iconSizes[size], isHot && 'fill-current opacity-80')} />
      <span>{streak}</span>
      {showLabel && <span className="font-medium opacity-75">{streak === 1 ? 'day' : 'days'}</span>}
    </div>
  )
}
