import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, leftIcon, rightIcon, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="font-label font-semibold text-label-md text-on-surface">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              'flex h-10 w-full rounded border bg-surface-lowest px-3 py-2 text-body-md text-on-surface',
              'border-outline-variant placeholder:text-on-surface-variant',
              'focus:outline-none focus:ring-2 focus:ring-[#1e5799]/30 focus:border-[#1e5799]',
              'disabled:cursor-not-allowed disabled:opacity-50',
              error && 'border-error focus:ring-error/30 focus:border-error',
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              className
            )}
            {...props}
          />
          {rightIcon && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
              {rightIcon}
            </span>
          )}
        </div>
        {error && <p className="text-body-sm text-error">{error}</p>}
        {hint && !error && <p className="text-body-sm text-on-surface-variant">{hint}</p>}
      </div>
    )
  }
)
Input.displayName = 'Input'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="font-label font-semibold text-label-md text-on-surface">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            'flex min-h-[80px] w-full rounded border bg-surface-lowest px-3 py-2 text-body-md text-on-surface',
            'border-outline-variant placeholder:text-on-surface-variant resize-none',
            'focus:outline-none focus:ring-2 focus:ring-[#1e5799]/30 focus:border-[#1e5799]',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-error',
            className
          )}
          {...props}
        />
        {error && <p className="text-body-sm text-error">{error}</p>}
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'
