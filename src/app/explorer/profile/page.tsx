'use client'
import { Button } from '@/components/ui/button'

const SUBJECTS = [
  { name: 'Science', emoji: '🔬', level: 4, xp: 820 },
  { name: 'Math', emoji: '🧮', level: 3, xp: 540 },
  { name: 'Reading', emoji: '📚', level: 5, xp: 1200 },
  { name: 'Art', emoji: '🎨', level: 2, xp: 310 },
]

const BADGES = [
  { icon: '🔬', title: 'Science Cadet' },
  { icon: '📖', title: 'Word Wizard' },
  { icon: '🌅', title: 'Early Bird' },
  { icon: '🤝', title: 'Team Player' },
]

export default function ExplorerProfilePage() {
  return (
    <div className="p-4 space-y-5 pb-24">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-primary to-purple-500 rounded-2xl p-6 text-white text-center space-y-3">
        <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto">
          <span className="text-4xl">🧙</span>
        </div>
        <div>
          <h1 className="font-display font-bold text-xl">Alex Explorer</h1>
          <p className="text-white/80 text-sm">Level 12 Wizard · EWD-022</p>
        </div>
        <div className="flex justify-center gap-6">
          <div className="text-center">
            <p className="font-bold text-lg">3,240</p>
            <p className="text-white/70 text-xs">Total XP</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-lg">28</p>
            <p className="text-white/70 text-xs">Day Streak 🔥</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-lg">12</p>
            <p className="text-white/70 text-xs">Badges</p>
          </div>
        </div>
      </div>

      {/* XP Bar */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-on-surface">Level 12</span>
          <span className="text-on-surface-variant">Level 13</span>
        </div>
        <div className="h-3 bg-surface-high rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full" style={{ width: '72%' }} />
        </div>
        <p className="text-xs text-on-surface-variant text-center">3,240 / 4,500 XP to next level</p>
      </div>

      {/* Subject Levels */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-4">
        <h2 className="font-display font-semibold text-on-surface">Subject Levels</h2>
        <div className="grid grid-cols-2 gap-3">
          {SUBJECTS.map(s => (
            <div key={s.name} className="bg-surface-low rounded-2xl p-3 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{s.emoji}</span>
                <div>
                  <p className="text-sm font-semibold text-on-surface">{s.name}</p>
                  <p className="text-xs text-on-surface-variant">Level {s.level}</p>
                </div>
              </div>
              <div className="h-1.5 bg-surface-high rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: `${(s.xp / 1500) * 100}%` }} />
              </div>
              <p className="text-[10px] text-on-surface-variant">{s.xp} XP</p>
            </div>
          ))}
        </div>
      </div>

      {/* Badges */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Badges</h2>
          <button className="text-xs text-primary hover:underline">View All</button>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {BADGES.map(b => (
            <div key={b.title} className="bg-surface-low rounded-2xl p-3 text-center space-y-1">
              <span className="text-2xl">{b.icon}</span>
              <p className="text-[9px] font-semibold text-on-surface leading-tight">{b.title}</p>
            </div>
          ))}
        </div>
      </div>

      <Button className="w-full gap-2">✏ Edit Profile</Button>
    </div>
  )
}
