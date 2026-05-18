'use client'
import { Button } from '@/components/ui/button'

const CAREERS = [
  { icon: '🚀', label: 'Astronaut', checked: true },
  { icon: '🩺', label: 'Doctor', checked: true },
  { icon: '🎨', label: 'Artist', checked: true },
  { icon: '💻', label: 'Developer', checked: true },
  { icon: '🍳', label: 'Chef', checked: true },
  { icon: '🔬', label: 'Scientist', checked: true },
]

export default function ExplorerInterestsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-blue-50 p-4 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-xs font-bold text-primary">12</span>
          </div>
          <div>
            <p className="text-xs font-semibold text-on-surface">Level 12 Wizard</p>
            <p className="text-xs text-on-surface-variant">Explorer Mode</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-xp/10 text-xp px-2 py-0.5 rounded-full">
          <span className="text-xs">⭐</span>
          <span className="text-xs font-bold">3,240 XP</span>
        </div>
      </div>

      <div className="flex-1 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-4xl">🌈</span>
          <h1 className="font-display font-bold text-2xl text-on-surface">Dynamic Interest Exploration</h1>
          <p className="text-sm text-on-surface-variant">What do you want to be when you grow up?</p>
          <p className="text-xs text-on-surface-variant">Pick your dream careers and we&apos;ll build your learning adventure!</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {CAREERS.map(c => (
            <button key={c.label} className={`flex items-center gap-3 p-4 rounded-2xl border-2 text-left transition-all ${c.checked ? 'border-primary bg-primary/5 shadow-sm' : 'border-outline-variant bg-surface-lowest hover:border-primary/40'}`}>
              <span className="text-3xl">{c.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-on-surface">{c.label}</p>
              </div>
              <span className={`text-lg ${c.checked ? 'text-primary' : 'text-on-surface-variant'}`}>{c.checked ? '✓' : '○'}</span>
            </button>
          ))}
        </div>

        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 text-center space-y-1">
          <p className="text-sm font-semibold text-on-surface">6 careers selected!</p>
          <p className="text-xs text-on-surface-variant">Great choices! Your learning journey will cover science, technology, arts, and more.</p>
        </div>

        <Button className="w-full gap-2 text-base py-3">
          🗺 Continue Adventure →
        </Button>
      </div>
    </div>
  )
}
