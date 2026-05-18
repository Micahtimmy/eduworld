import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import type { LucideIcon } from 'lucide-react'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon?: LucideIcon
  iconColor?: string
  trend?: number
  trendLabel?: string
  className?: string
  loading?: boolean
}

export function StatCard({
  title, value, subtitle, icon: Icon, iconColor = 'text-primary',
  trend, trendLabel, className, loading
}: StatCardProps) {
  const TrendIcon = trend === undefined ? null : trend > 0 ? TrendingUp : trend < 0 ? TrendingDown : Minus
  const trendColor = trend === undefined ? '' : trend > 0 ? 'text-green-600' : trend < 0 ? 'text-red-500' : 'text-on-surface-variant'

  if (loading) {
    return (
      <Card className={cn('', className)}>
        <CardContent className="p-4 space-y-3">
          <div className="skeleton h-4 w-24 rounded" />
          <div className="skeleton h-8 w-16 rounded" />
          <div className="skeleton h-3 w-20 rounded" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={cn('', className)}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-label font-semibold text-on-surface-variant uppercase tracking-wide truncate">
              {title}
            </p>
            <p className="mt-1 font-display font-bold text-2xl text-on-surface leading-none">
              {value}
            </p>
            {(subtitle || trend !== undefined) && (
              <div className="mt-1.5 flex items-center gap-1.5">
                {TrendIcon && (
                  <TrendIcon className={cn('h-3.5 w-3.5', trendColor)} />
                )}
                {trendLabel && (
                  <span className={cn('text-xs font-label', trendColor)}>{trendLabel}</span>
                )}
                {subtitle && !trendLabel && (
                  <span className="text-xs font-label text-on-surface-variant">{subtitle}</span>
                )}
              </div>
            )}
          </div>
          {Icon && (
            <div className={cn('p-2.5 rounded-xl bg-surface-high', iconColor.replace('text-', 'bg-').replace('primary', 'primary/10').replace('ai', 'ai/10').replace('xp', 'xp/10'))}>
              <Icon className={cn('h-5 w-5', iconColor)} />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
