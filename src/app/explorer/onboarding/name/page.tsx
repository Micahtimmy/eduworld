'use client'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function ExplorerOnboardingNamePage() {
  const [name, setName] = useState('')

  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-8 text-center">
        <div className="text-4xl">✦</div>
        <div className="space-y-2">
          <h1 className="font-display font-bold text-3xl text-on-surface">Hi there!</h1>
          <h2 className="font-display font-semibold text-xl text-on-surface">What&apos;s your name?</h2>
        </div>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Type your name..."
          className="w-full px-4 py-3 rounded-2xl border-2 border-outline-variant bg-surface-lowest text-on-surface placeholder:text-on-surface-variant outline-none focus:border-primary text-center text-lg"
        />
        <p className="text-sm text-on-surface-variant">Your name helps us personalise your Explorer dashboard.</p>
        <Button className="w-full gap-2" disabled={!name.trim()}>
          Let&apos;s Start! <ArrowRight className="h-4 w-4" />
        </Button>
        <p className="text-xs text-on-surface-variant">EWD-013</p>
      </div>
    </div>
  )
}
