'use client'
import { Sparkles, Lock, CheckCircle, Play, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const UNITS = [
  { id: 1, title: 'Unit 1: The Biosphere', icon: '🌿', status: 'completed', badge: 'Naturalist badge earned', sub: [] },
  {
    id: 2, title: 'Unit 2: Gravity & Orbits', icon: '🚀', status: 'in-progress', badge: '',
    sub: [
      { icon: '⭐', label: 'Watch: The Moon', type: 'video' },
      { icon: '🔬', label: 'Lab: Gravity Drop', type: 'lab' },
    ],
  },
  { id: 3, title: 'Unit 3: Chemical Reactions', icon: '⚗️', status: 'locked', badge: 'Complete Unit 2 to unlock', sub: [] },
]

const TROPHIES = [
  { icon: '🐭', label: 'Lab Rat', desc: 'Found 10 clues', earned: true },
  { icon: '🚀', label: 'Space Cadet', desc: 'In progress...', earned: false },
  { icon: '❓', label: '???', desc: 'Locked', earned: false },
  { icon: '❓', label: '???', desc: 'Locked', earned: false },
]

export default function ExplorerSciencePage() {
  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-on-surface-variant">🔥 12</span>
            <span className="text-sm font-semibold text-on-surface-variant">✨ 450</span>
          </div>
          <h1 className="font-display font-bold text-2xl text-on-surface mt-1">Science World</h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">L12</div>
      </div>

      {/* Current Zone */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 text-white">
        <p className="text-xs font-semibold opacity-75">Current Zone</p>
        <h2 className="font-display font-bold text-xl mt-1">The Solar System</h2>
        <p className="text-sm opacity-90 mt-1">Explore orbits, gravity, and beyond. Earn the Space Explorer badge!</p>
      </div>

      {/* Units */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Science Units</h2>
        <div className="space-y-3">
          {UNITS.map(u => (
            <div key={u.id}>
              <div className={cn('flex items-center gap-3 p-3 rounded-xl border', u.status === 'completed' ? 'border-green-200 bg-green-50' : u.status === 'in-progress' ? 'border-blue-200 bg-blue-50' : 'border-outline-variant bg-surface-low opacity-60')}>
                <span className="text-2xl">{u.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-on-surface">{u.title}</p>
                  {u.badge && <p className="text-xs text-on-surface-variant">{u.badge}</p>}
                </div>
                {u.status === 'completed' && <CheckCircle className="h-5 w-5 text-green-600" />}
                {u.status === 'locked' && <Lock className="h-5 w-5 text-on-surface-variant" />}
                {u.status === 'in-progress' && <Play className="h-5 w-5 text-blue-600" />}
              </div>
              {u.sub.length > 0 && (
                <div className="ml-6 mt-2 space-y-2">
                  {u.sub.map(s => (
                    <div key={s.label} className="flex items-center gap-2 p-2 rounded-lg bg-surface-low">
                      <span>{s.icon}</span>
                      <p className="text-sm text-on-surface">{s.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Trophy Cabinet */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">🏆 Trophy Cabinet</h2>
          <button className="text-xs text-primary hover:underline">View All</button>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {TROPHIES.map((t, i) => (
            <div key={i} className={cn('p-3 rounded-xl text-center border', t.earned ? 'border-amber-200 bg-amber-50' : 'border-outline-variant bg-surface-low opacity-50')}>
              <div className="text-2xl">{t.icon}</div>
              <p className="text-xs font-semibold text-on-surface mt-1">{t.label}</p>
              <p className="text-xs text-on-surface-variant">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Spark */}
      <div className="bg-xp/5 border border-xp/20 rounded-2xl p-4 flex items-center gap-4">
        <Zap className="h-8 w-8 text-xp" />
        <div className="flex-1">
          <p className="font-semibold text-on-surface">Daily Spark! ⚡</p>
          <p className="text-xs text-on-surface-variant">Answer today&apos;s bonus trivia for extra XP!</p>
        </div>
        <button className="bg-xp text-white text-sm font-semibold px-4 py-2 rounded-xl flex items-center gap-1">
          <Play className="h-3.5 w-3.5" /> Play Now
        </button>
      </div>

      {/* AI Bubble */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-ai/20 flex items-center justify-center">
          <Sparkles className="h-5 w-5 text-ai" />
        </div>
        <p className="text-sm text-on-surface-variant flex-1">Need help with orbits? I&apos;m here to assist! <button className="text-ai font-semibold hover:underline">Ask Spark →</button></p>
      </div>
    </div>
  )
}
