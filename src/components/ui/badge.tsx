import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full font-label font-semibold text-label-md transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-[#1e5799]/10 text-[#1e5799]',
        ai: 'bg-ai/10 text-ai-dark border border-ai/20',
        xp: 'bg-xp/10 text-xp-700',
        success: 'bg-green-100 text-green-700',
        warning: 'bg-amber-100 text-amber-700',
        error: 'bg-red-100 text-red-700',
        destructive: 'bg-red-100 text-red-700',
        secondary: 'bg-surface-high text-on-surface-variant',
        neutral: 'bg-surface-high text-on-surface-variant',
        outline: 'border border-outline-variant text-on-surface-variant',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-2.5 py-1 text-xs',
        lg: 'px-3 py-1.5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'neutral',
      size: 'md',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => (
    <span ref={ref} className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
)
Badge.displayName = 'Badge'
