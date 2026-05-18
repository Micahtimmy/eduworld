'use client'
import { Button } from '@/components/ui/button'

export default function ExplorerDailyQuestPage() {
  return (
    <div className="min-h-screen bg-surface-low flex flex-col">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 bg-surface-lowest border-b border-outline-variant">
        <button className="text-on-surface-variant">✕</button>
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-on-surface">Explorer Tier</span>
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            <span className="font-bold text-on-surface">4</span>
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 p-5 space-y-5">
        <div className="text-center space-y-2">
          <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">Science · Planet Quest</span>
          <h1 className="font-display font-bold text-xl text-on-surface">Which planet is known as the Red Planet?</h1>
        </div>

        {/* Answer Grid */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Earth', emoji: '🌍', correct: false },
            { label: 'Mars', emoji: '🔴', correct: true },
            { label: 'Jupiter', emoji: '🟠', correct: false },
            { label: 'Saturn', emoji: '🪐', correct: false },
          ].map((opt, i) => (
            <div key={opt.label} className={`rounded-2xl border-2 p-4 cursor-pointer transition-colors flex flex-col items-center gap-2 ${i === 1 ? 'border-primary bg-primary/5' : 'border-outline-variant bg-surface-lowest hover:border-primary/50'}`}>
              <span className="text-4xl">{opt.emoji}</span>
              <p className="text-sm font-semibold text-on-surface">{opt.label}</p>
            </div>
          ))}
        </div>

        {/* Feedback Overlay */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto text-2xl">✅</div>
          <h2 className="font-display font-bold text-lg text-on-surface">Awesome!</h2>
          <p className="text-sm text-on-surface-variant">Mars is the Red Planet. Its surface is covered in iron oxide (rust), giving it a distinctive red color!</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs bg-xp/10 text-xp px-2 py-0.5 rounded-full font-semibold">+10 XP</span>
            <span className="text-xs text-on-surface-variant">🔥 Streak +1</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 flex gap-3 pb-8">
        <Button variant="outline" className="flex-1">Skip</Button>
        <Button className="flex-1">Continue</Button>
      </div>
    </div>
  )
}
