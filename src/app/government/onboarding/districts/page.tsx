'use client'
import { useState, KeyboardEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronRight, X, Plus, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

function ProgressBar({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1 flex-1 rounded-full transition-all duration-300 ${i < step ? 'bg-primary' : 'bg-outline-variant'}`}
        />
      ))}
    </div>
  )
}

const EXAMPLE_DISTRICTS = ['Lagos Island', 'Lagos Mainland', 'Ikeja', 'Surulere', 'Eti-Osa']

export default function GovernmentOnboardingDistrictsPage() {
  const [districts, setDistricts] = useState<string[]>([])
  const [input, setInput] = useState('')
  const router = useRouter()

  function addDistrict() {
    const trimmed = input.trim()
    if (!trimmed || districts.includes(trimmed)) return
    setDistricts(prev => [...prev, trimmed])
    setInput('')
  }

  function removeDistrict(d: string) {
    setDistricts(prev => prev.filter(x => x !== d))
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault()
      addDistrict()
    }
  }

  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Progress */}
        <ProgressBar step={2} total={4} />

        {/* Back */}
        <div className="flex items-center gap-3">
          <Link href="/government/onboarding/ministry" className="w-8 h-8 rounded-full bg-surface-lowest border border-outline-variant flex items-center justify-center hover:bg-surface transition-colors">
            <ArrowLeft className="h-4 w-4 text-on-surface" />
          </Link>
          <span className="text-xs text-on-surface-variant font-label">Step 2 of 3</span>
        </div>

        {/* Header */}
        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl text-on-surface">Configure your districts</h1>
          <p className="text-sm text-on-surface-variant">Add the districts, regions, or zones you oversee. Type a name and press Enter.</p>
        </div>

        {/* Input */}
        <div className="space-y-2">
          <label className="text-sm font-label font-semibold text-on-surface">District / Region names</label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant" />
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="e.g. Lagos Island, Kano North..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-outline-variant bg-surface-lowest text-on-surface placeholder:text-on-surface-variant outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm"
              />
            </div>
            <button
              onClick={addDistrict}
              disabled={!input.trim()}
              className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center disabled:opacity-40 hover:bg-primary/90 transition-colors shrink-0"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Districts list */}
        {districts.length > 0 ? (
          <div className="bg-surface-lowest border border-outline-variant rounded-2xl p-4">
            <p className="text-xs font-label font-semibold text-on-surface-variant uppercase tracking-wider mb-3">{districts.length} district{districts.length !== 1 ? 's' : ''} added</p>
            <div className="flex flex-wrap gap-2">
              {districts.map(d => (
                <span
                  key={d}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold"
                >
                  <MapPin className="h-3 w-3" />
                  {d}
                  <button
                    onClick={() => removeDistrict(d)}
                    className="opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="border-2 border-dashed border-outline-variant rounded-2xl p-8 text-center">
            <MapPin className="h-6 w-6 text-on-surface-variant mx-auto mb-2 opacity-40" />
            <p className="text-sm text-on-surface-variant">Districts will appear here</p>
          </div>
        )}

        {/* Example hint */}
        <div className="bg-surface-lowest border border-outline-variant rounded-xl p-4">
          <p className="text-xs text-on-surface-variant mb-2 font-semibold">Example district names:</p>
          <div className="flex flex-wrap gap-1.5">
            {EXAMPLE_DISTRICTS.map(e => (
              <button
                key={e}
                onClick={() => {
                  if (!districts.includes(e)) setDistricts(prev => [...prev, e])
                }}
                className="text-xs px-2.5 py-1 rounded-full border border-outline-variant text-on-surface-variant hover:border-primary/40 hover:text-on-surface transition-colors disabled:opacity-40"
                disabled={districts.includes(e)}
              >
                {e}
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <Button
            className="w-full h-12 text-base gap-2"
            disabled={districts.length === 0}
            onClick={() => router.push('/government/onboarding/ready')}
          >
            Continue
            <ChevronRight className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            className="w-full h-11 text-sm text-on-surface-variant"
            onClick={() => router.push('/government/onboarding/ready')}
          >
            Skip — configure districts later
          </Button>
        </div>
      </div>
    </div>
  )
}
