'use client'
import { useState } from 'react'
import { Flame, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const LEADERBOARD = [
  { rank: 1, name: 'Alex K.', xp: 14250, streak: 42, isMe: false },
  { rank: 2, name: 'Sarah M.', xp: 13900, streak: 12, isMe: false },
  { rank: 3, name: 'James L.', xp: 13120, streak: 28, isMe: false },
  { rank: 42, name: 'You', xp: 8450, streak: 5, isMe: true },
  { rank: 43, name: 'Elena R.', xp: 8410, streak: 0, isMe: false },
]

const CHALLENGES = [
  { title: 'Perfect Attendance', desc: '5 consecutive logins', reward: '+500 XP', progress: 3, total: 5 },
  { title: 'Quiz Master', desc: '90%+ on 2 quizzes', reward: '+800 XP', progress: 1, total: 2 },
]

export default function GlobalLeaderboardPage() {
  const [view, setView] = useState('Global')

  return (
    <div className="p-4 space-y-5 dark:bg-gray-900 min-h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Global Leaderboard</h1>
          <div className="flex items-center gap-1 mt-1 text-xs text-on-surface-variant">
            <Clock className="h-3.5 w-3.5" />
            <span>Season ends in 12 days</span>
          </div>
        </div>
        <div className="flex gap-1">
          {['Global', 'School Cohort'].map(v => (
            <button key={v} onClick={() => setView(v)} className={cn('px-3 py-1.5 rounded-full text-xs font-medium transition-colors', view === v ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-low')}>
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* User Rank Card */}
      <div className="bg-gradient-to-r from-primary to-ai rounded-2xl p-4 text-white">
        <p className="text-sm opacity-80">Achiever Tier</p>
        <p className="font-display font-bold text-3xl">Global Rank #42</p>
        <p className="text-sm opacity-80">✦ Study Partner</p>
        <p className="text-xs mt-1 opacity-70">Top 5% at St. Peter's Academy for study hours</p>
      </div>

      {/* Table */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">🏆</span>
          <h2 className="font-display font-semibold text-on-surface">Global Top Performers</h2>
        </div>
        <div className="divide-y divide-outline-variant">
          {LEADERBOARD.map(p => (
            <div key={p.rank} className={cn('flex items-center gap-3 py-3', p.isMe && 'bg-primary/5 rounded-xl px-2')}>
              <div className={cn('w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm', p.rank === 1 ? 'bg-amber-400 text-white' : p.rank === 2 ? 'bg-gray-300 text-gray-800' : p.rank === 3 ? 'bg-amber-600 text-white' : 'bg-surface-high text-on-surface-variant')}>
                {p.rank <= 3 ? ['🥇', '🥈', '🥉'][p.rank - 1] : p.rank}
              </div>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                {p.name[0]}
              </div>
              <div className="flex-1">
                <p className={cn('text-sm font-semibold', p.isMe ? 'text-primary' : 'text-on-surface')}>{p.name}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-on-surface">{p.xp.toLocaleString()} XP</p>
                <div className="flex items-center gap-1 justify-end">
                  <Flame className="h-3 w-3 text-orange-500" />
                  <span className="text-xs text-on-surface-variant">{p.streak}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full">View Full Standings</Button>
      </div>

      {/* Weekly Challenges */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Weekly Challenges</h2>
        {CHALLENGES.map(c => (
          <div key={c.title} className="border border-outline-variant rounded-xl p-3 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-on-surface">{c.title}</p>
              <span className="text-xs font-bold text-green-600">{c.reward}</span>
            </div>
            <p className="text-xs text-on-surface-variant">{c.desc}</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-surface-high rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: `${(c.progress / c.total) * 100}%` }} />
              </div>
              <span className="text-xs text-on-surface-variant">{c.progress}/{c.total}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
