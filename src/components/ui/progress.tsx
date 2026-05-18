'use client'
import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cn } from '@/lib/utils'

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    variant?: 'primary' | 'ai' | 'xp'
    size?: 'sm' | 'md' | 'lg'
  }
>(({ className, value, variant = 'primary', size = 'md', ...props }, ref) => {
  const trackColors = {
    primary: 'bg-surface-high',
    ai: 'bg-ai/10',
    xp: 'bg-xp/10',
  }
  const fillColors = {
    primary: 'bg-[#1e5799]',
    ai: 'bg-ai',
    xp: 'bg-xp',
  }
  const heights = { sm: 'h-1.5', md: 'h-2', lg: 'h-3' }
  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn('relative overflow-hidden rounded-full', trackColors[variant], heights[size], className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn('h-full rounded-full transition-all duration-700 ease-out', fillColors[variant])}
        style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
