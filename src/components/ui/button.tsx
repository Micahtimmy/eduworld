'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion } from 'framer-motion'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded font-label font-semibold text-label-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-[#1e5799] text-white hover:bg-[#003f7a] shadow-sm',
        default: 'bg-[#1e5799] text-white hover:bg-[#003f7a] shadow-sm',
        secondary: 'bg-surface-mid text-on-surface hover:bg-surface-high border border-outline-variant',
        ghost: 'text-[#1e5799] hover:bg-[#1e5799]/8',
        destructive: 'bg-error text-on-error hover:bg-error/90',
        ai: 'bg-ai text-white hover:bg-ai-dark shadow-ai',
        outline: 'border border-[#1e5799] text-[#1e5799] hover:bg-[#1e5799]/8',
        xp: 'bg-xp text-white hover:bg-xp-600 shadow-sm',
        link: 'text-[#1e5799] underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
        xl: 'h-14 px-8 text-lg',
        icon: 'h-10 w-10 p-0',
        'icon-sm': 'h-8 w-8 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
  asChild?: boolean
}

const MotionButton = motion.button

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, children, disabled, asChild = false, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          ref={ref}
          className={cn(buttonVariants({ variant, size }), className)}
          {...props}
        >
          {children}
        </Slot>
      )
    }

    return (
      <MotionButton
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.1 }}
        {...(props as React.ComponentPropsWithoutRef<typeof MotionButton>)}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </MotionButton>
    )
  }
)
Button.displayName = 'Button'

export { buttonVariants }
