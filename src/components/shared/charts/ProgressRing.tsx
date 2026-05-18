'use client'
import { cn } from '@/lib/utils'

interface ProgressRingProps {
  value: number
  max?: number
  size?: number
  strokeWidth?: number
  color?: string
  trackColor?: string
  className?: string
  children?: React.ReactNode
  label?: string
}

export function ProgressRing({
  value,
  max = 100,
  size = 80,
  strokeWidth = 7,
  color = '#1e5799',
  trackColor,
  className,
  children,
  label,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const percent = Math.min(1, Math.max(0, value / max))
  const offset = circumference * (1 - percent)

  return (
    <div className={cn('relative inline-flex flex-col items-center', className)}>
      <svg width={size} height={size} className="-rotate-90">
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={trackColor ?? `${color}20`}
          strokeWidth={strokeWidth}
        />
        {/* Fill */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-700 ease-out"
        />
      </svg>
      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center">
        {children ?? (
          <span className="font-display font-bold text-on-surface" style={{ fontSize: size * 0.2 }}>
            {Math.round(percent * 100)}%
          </span>
        )}
      </div>
      {label && (
        <span className="mt-1 text-xs font-label text-on-surface-variant">{label}</span>
      )}
    </div>
  )
}
