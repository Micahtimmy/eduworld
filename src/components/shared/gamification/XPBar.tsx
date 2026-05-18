'use client'
import { Progress } from '@/components/ui/progress'
import { getLevelFromXP, getXPForLevel, getXPForNextLevel } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface XPBarProps {
  xp: number
  className?: string
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
  animate?: boolean
}

export function XPBar({ xp, className, showLabel = true, size = 'md', animate = true }: XPBarProps) {
  const level = getLevelFromXP(xp)
  const xpForThisLevel = getXPForLevel(level)
  const xpForNextLevel = getXPForNextLevel(level)
  const xpInLevel = xp - xpForThisLevel
  const xpNeeded = xpForNextLevel - xpForThisLevel
  const percent = Math.min(100, Math.round((xpInLevel / Math.max(1, xpNeeded)) * 100))

  return (
    <div className={cn('space-y-1', className)}>
      {showLabel && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-xp text-white text-xs font-bold font-label">
              {level}
            </span>
            <span className="text-xs font-label font-semibold text-on-surface-variant">Level {level}</span>
          </div>
          <span className="text-xs font-label text-on-surface-variant">
            {xpInLevel.toLocaleString()} / {xpNeeded.toLocaleString()} XP
          </span>
        </div>
      )}
      <Progress
        value={percent}
        variant="xp"
        size={size}
        className={cn(animate && 'transition-all duration-1000')}
      />
    </div>
  )
}
