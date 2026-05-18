'use client'
import { Button } from '@/components/ui/button'

export default function ExplorerSolarSystemPage() {
  return (
    <div className="p-4 space-y-5 pb-24">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">🔭</span>
          <h1 className="font-display font-bold text-xl text-on-surface">The Solar System</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl">🔥</span>
          <span className="text-xl">⭐</span>
          <span className="text-xl">🧭</span>
        </div>
      </div>

      {/* Hero illustration */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-center space-y-2 min-h-32 flex items-center justify-center">
        <span className="text-6xl">🌌</span>
      </div>

      {/* Introduction */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <p className="text-sm text-on-surface leading-relaxed">
          Our solar system is made up of the Sun, eight planets, dozens of moons, and millions of asteroids, comets, and meteoroids. Each planet orbits the Sun in a unique path determined by gravity.
        </p>

        {/* Did you know callout */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 flex items-start gap-2">
          <span className="text-xl shrink-0">🌍</span>
          <div>
            <p className="text-sm font-semibold text-on-surface">Did you know?</p>
            <p className="text-xs text-on-surface-variant mt-0.5">Earth is the third planet from the Sun and the only known location in the universe with life!</p>
          </div>
        </div>
      </div>

      {/* The Giant Planets */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">The Giant Planets</h2>
        <p className="text-sm text-on-surface-variant">Jupiter and Saturn are the two largest planets in our solar system — enormous gas giants with no solid surface.</p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: 'Jupiter', emoji: '🟠', color: 'from-amber-600 to-amber-800' },
            { name: 'Saturn', emoji: '🪐', color: 'from-yellow-500 to-yellow-700' },
          ].map(p => (
            <div key={p.name} className="bg-surface-low rounded-xl overflow-hidden">
              <div className={`bg-gradient-to-br ${p.color} h-24 flex items-center justify-center`}>
                <span className="text-4xl">{p.emoji}</span>
              </div>
              <p className="text-center text-sm font-semibold text-on-surface py-2">{p.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Chat prompt */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 flex items-center gap-3">
        <span className="text-2xl">🧠</span>
        <p className="text-sm text-on-surface flex-1">Have a question about the planets? I can help!</p>
        <Button size="sm" variant="outline" className="shrink-0">Ask AI</Button>
      </div>

      {/* Finish Lesson */}
      <Button className="w-full gap-2">✅ Finish Lesson</Button>
    </div>
  )
}
