'use client'
import { Button } from '@/components/ui/button'

const MILESTONES = [
  { icon: '🔬', title: 'Science Mastery', progress: 80, level: 4, color: 'bg-blue-500' },
  { icon: '🧮', title: 'Math Wizardry', progress: 45, level: 3, color: 'bg-purple-500' },
]

const BADGES = [
  { icon: '🔬', title: 'Science Cadet', desc: 'Completed 10 Labs', unlocked: true },
  { icon: '📖', title: 'Word Wizard', desc: 'Read 50 Books', unlocked: true },
  { icon: '🤝', title: 'Team Player', desc: 'Helped 5 Peers', unlocked: true },
  { icon: '🌅', title: 'Early Bird', desc: '30 Days Streak', unlocked: true },
  { icon: '🔒', title: '???', desc: 'Keep Exploring!', unlocked: false },
]

export default function ExplorerAchievementsPage() {
  return (
    <div className="p-4 space-y-5 pb-24">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">Level 12 Wizard</span>
          <h1 className="font-display font-bold text-xl text-on-surface mt-1">Your Achievement Gallery</h1>
        </div>
        <div className="flex items-center gap-1.5 bg-xp/10 text-xp px-2 py-0.5 rounded-full">
          <span className="text-xs">⭐</span>
          <span className="text-xs font-bold">3,240 XP</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl p-6 text-center space-y-2">
        <span className="text-5xl">🏆</span>
        <p className="text-white font-semibold">Welcome, Explorer!</p>
        <p className="text-white/80 text-xs">Your curiosity and hard work are paying off!</p>
      </div>

      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">🏅 Mastery Milestones</h2>
          <button className="text-xs text-primary hover:underline">View All</button>
        </div>
        <div className="space-y-4">
          {MILESTONES.map(m => (
            <div key={m.title}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{m.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-on-surface">{m.title}</p>
                    <span className="text-xs text-on-surface-variant">Lvl {m.level}</span>
                  </div>
                  <p className="text-xs text-on-surface-variant">{m.progress}% to next rank</p>
                </div>
              </div>
              <div className="h-2 bg-surface-high rounded-full overflow-hidden">
                <div className={`h-full ${m.color} rounded-full`} style={{ width: `${m.progress}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-4">
        <h2 className="font-display font-semibold text-on-surface">🏅 Earned Badges</h2>
        <div className="grid grid-cols-3 gap-3">
          {BADGES.map(b => (
            <div key={b.title} className={`rounded-2xl p-3 text-center space-y-1 ${b.unlocked ? 'bg-surface-low' : 'bg-surface-high opacity-50'}`}>
              <span className="text-2xl">{b.icon}</span>
              <p className="text-xs font-semibold text-on-surface">{b.title}</p>
              <p className="text-[10px] text-on-surface-variant">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Button className="w-full gap-2">🚀 Start Learning</Button>
    </div>
  )
}
