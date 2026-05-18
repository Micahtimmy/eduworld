'use client'
import { Button } from '@/components/ui/button'

const ACADEMIC = [
  { name: 'Targeted Math Drill', desc: 'AI-generated personalized practice set', xp: 300, icon: '📐' },
  { name: 'Premium Mock Exam', desc: 'Full SAT/ACT simulation with analysis', xp: 500, icon: '📝' },
  { name: 'Essay Review Pass', desc: 'AI + peer review for college essays', xp: 450, icon: '✍️' },
]

const MENTORSHIP = [
  { name: 'Ivy League App Review', desc: '1-on-1 session with admissions mentor', xp: 1200, icon: '🏛' },
  { name: 'Tech Career Chat', desc: 'Connect with a FAANG engineer for 30 mins', xp: 800, icon: '💼' },
]

const PRESTIGE = [
  { name: 'Gold Profile Frame', desc: 'Exclusive profile border', xp: 400, icon: '🥇' },
  { name: 'Streak Saver', desc: 'Protect your learning streak for 1 day', xp: 150, icon: '🔥' },
  { name: 'Dark Mode Theme', desc: 'Unlock the midnight scholar theme', xp: 250, icon: '🌙' },
  { name: 'XP Booster', desc: 'Double XP for 24 hours', xp: 600, icon: '⚡' },
]

export default function AchieverShopPage() {
  return (
    <div className="p-4 space-y-5 pb-24">
      <div className="flex items-center justify-between">
        <h1 className="font-display font-bold text-xl text-on-surface">Elite Exchange</h1>
        <div className="flex items-center gap-1.5 bg-xp/10 text-xp px-3 py-1 rounded-full">
          <span className="text-sm">🏅</span>
          <span className="text-sm font-bold">2,450 XP</span>
        </div>
      </div>

      {/* Academic Boosters */}
      <div className="space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Academic Boosters</h2>
        {ACADEMIC.map(item => (
          <div key={item.name} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 flex items-center gap-3">
            <span className="text-2xl shrink-0">{item.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-on-surface">{item.name}</p>
              <p className="text-xs text-on-surface-variant">{item.desc}</p>
            </div>
            <Button size="sm" className="shrink-0 gap-1">🏅 {item.xp}</Button>
          </div>
        ))}
      </div>

      {/* Mentorship */}
      <div className="space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Mentorship</h2>
        {MENTORSHIP.map(item => (
          <div key={item.name} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 flex items-center gap-3">
            <span className="text-2xl shrink-0">{item.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-on-surface">{item.name}</p>
              <p className="text-xs text-on-surface-variant">{item.desc}</p>
            </div>
            <Button size="sm" variant="outline" className="shrink-0 gap-1">🏅 {item.xp}</Button>
          </div>
        ))}
      </div>

      {/* Prestige */}
      <div className="space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Prestige</h2>
        <div className="grid grid-cols-2 gap-3">
          {PRESTIGE.map(item => (
            <div key={item.name} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-2">
              <span className="text-3xl">{item.icon}</span>
              <p className="text-sm font-semibold text-on-surface">{item.name}</p>
              <p className="text-xs text-on-surface-variant">{item.desc}</p>
              <button className="w-full text-xs bg-primary/10 text-primary font-semibold py-1.5 rounded-xl hover:bg-primary/20 transition-colors">
                🏅 {item.xp} XP
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
