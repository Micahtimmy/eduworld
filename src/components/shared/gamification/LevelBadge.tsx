'use client'
import { cn } from '@/lib/utils'
import { getLevelFromXP } from '@/lib/utils'

interface LevelBadgeProps {
  xp?: number
  level?: number
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  showXP?: boolean
}

const LEVEL_TIER_COLORS: Array<{ min: number; gradient: string; border: string; text: string }> = [
  { min: 0,  gradient: 'from-slate-400 to-slate-500',     border: 'border-slate-300',  text: 'text-white' },
  { min: 5,  gradient: 'from-green-400 to-emerald-500',   border: 'border-green-300',  text: 'text-white' },
  { min: 10, gradient: 'from-blue-400 to-[#1e5799]',      border: 'border-blue-300',   text: 'text-white' },
  { min: 20, gradient: 'from-purple-400 to-violet-600',   border: 'border-purple-300', text: 'text-white' },
  { min: 30, gradient: 'from-amber-400 to-orange-500',    border: 'border-amber-300',  text: 'text-white' },
  { min: 50, gradient: 'from-rose-400 to-red-600',        border: 'border-rose-300',   text: 'text-white' },
]

function getTierColor(level: number) {
  return [...LEVEL_TIER_COLORS].reverse().find(t => level >= t.min) ?? LEVEL_TIER_COLORS[0]
}

export function LevelBadge({ xp, level: levelProp, size = 'md', className, showXP }: LevelBadgeProps) {
  const level = levelProp ?? (xp !== undefined ? getLevelFromXP(xp) : 1)
  const tier = getTierColor(level)

  const sizes = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-14 h-14 text-lg',
    xl: 'w-20 h-20 text-2xl',
  }

  return (
    <div className={cn('flex flex-col items-center gap-0.5', className)}>
      <div className={cn(
        'rounded-full flex items-center justify-center',
        'bg-gradient-to-br border-2 font-label font-bold',
        sizes[size],
        tier.gradient,
        tier.border,
        tier.text,
      )}>
        {level}
      </div>
      {showXP && xp !== undefined && (
        <span className="text-xs font-label text-on-surface-variant">{xp.toLocaleString()} XP</span>
      )}
    </div>
  )
}
