'use client'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function TeacherError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center space-y-5">
      <div className="text-6xl">😔</div>
      <div className="space-y-2">
        <h2 className="text-xl font-display font-bold text-on-surface">Something went wrong</h2>
        <p className="text-sm text-on-surface-variant max-w-xs">
          Class data is secure. Try again or go back.
        </p>
      </div>
      <div className="flex gap-3">
        <Button variant="secondary" onClick={() => window.history.back()}>
          Go Back
        </Button>
        <Button onClick={reset}>Try Again</Button>
      </div>
    </div>
  )
}
