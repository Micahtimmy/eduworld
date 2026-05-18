'use client'

import { useState } from 'react'
import { Search, Zap, Trophy, Clock, Shuffle, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const ACTIVE_CHALLENGE = {
  opponent: 'Adeola Ibrahim',
  initials: 'AI',
  subject: 'Physics',
  round: 2,
  totalRounds: 5,
  isMyTurn: true,
  score: { me: 1, them: 0 },
}

const LEADERBOARD = [
  { rank: 1, name: 'Fatima Abubakar', initials: 'FA', wins: 24, losses: 3, color: 'bg-amber-400' },
  { rank: 2, name: 'Chuka Nwosu', initials: 'CN', wins: 19, losses: 6, color: 'bg-slate-400' },
  { rank: 3, name: 'You', initials: 'ME', wins: 15, losses: 8, color: 'bg-primary', isMe: true },
  { rank: 4, name: 'Adeola Ibrahim', initials: 'AI', wins: 12, losses: 9, color: 'bg-blue-500' },
  { rank: 5, name: 'Emeka Okafor', initials: 'EO', wins: 10, losses: 11, color: 'bg-green-500' },
]

const QUICK_OPTIONS = [
  { icon: Shuffle, label: 'Random Opponent', desc: 'Match with anyone online', color: 'bg-primary/10 text-primary border-primary/20' },
  { icon: Target, label: 'Topic-Specific', desc: 'Choose a topic to focus on', color: 'bg-purple-500/10 text-purple-600 border-purple-200' },
  { icon: Clock, label: 'Time Attack', desc: 'Race against the clock (30s/Q)', color: 'bg-amber-500/10 text-amber-600 border-amber-200' },
]

export default function AchieverChallengePage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-slate-900 p-4 space-y-5 pb-24">
      {/* Header */}
      <div className="pt-2">
        <div className="flex items-center gap-2 mb-1">
          <Zap className="h-6 w-6 text-amber-400" />
          <h1 className="font-display font-bold text-2xl text-white">Challenge Mode</h1>
        </div>
        <p className="text-sm text-white/60">Test your knowledge against peers</p>
      </div>

      {/* Active Challenge Card */}
      <div className="relative bg-gradient-to-r from-primary via-blue-600 to-purple-600 rounded-2xl p-5 overflow-hidden">
        {/* Decorative sparks */}
        <div className="absolute top-2 right-4 text-2xl opacity-30">⚡</div>
        <div className="absolute bottom-3 right-12 text-xl opacity-20">⚡</div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/80 text-xs font-medium">Active Challenge</span>
          </div>

          {/* Opponents */}
          <div className="flex items-center justify-between">
            {/* Me */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                <span className="font-display font-bold text-white text-lg">ME</span>
              </div>
              <p className="text-white text-xs font-medium">You</p>
              <span className="font-display font-black text-white text-2xl">{ACTIVE_CHALLENGE.score.me}</span>
            </div>

            {/* VS */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-white/60 font-bold text-sm">Round</span>
              <span className="font-display font-black text-white text-3xl">{ACTIVE_CHALLENGE.round}/{ACTIVE_CHALLENGE.totalRounds}</span>
              <span className="text-white/60 text-xs">{ACTIVE_CHALLENGE.subject}</span>
            </div>

            {/* Opponent */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                <span className="font-display font-bold text-white text-lg">{ACTIVE_CHALLENGE.initials}</span>
              </div>
              <p className="text-white text-xs font-medium">{ACTIVE_CHALLENGE.opponent.split(' ')[0]}</p>
              <span className="font-display font-black text-white text-2xl">{ACTIVE_CHALLENGE.score.them}</span>
            </div>
          </div>

          {ACTIVE_CHALLENGE.isMyTurn && (
            <Button className="w-full h-11 bg-white text-primary hover:bg-white/90 font-bold gap-2">
              <Zap className="h-4 w-4" />
              Your Turn — Play Now!
            </Button>
          )}
        </div>
      </div>

      {/* Challenge a Classmate */}
      <div className="bg-slate-800 rounded-2xl border border-slate-700 p-4 space-y-3">
        <h2 className="font-display font-semibold text-white">Challenge a Classmate</h2>
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name or student ID"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-slate-700 border border-slate-600 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <Button size="sm" className="shrink-0 h-10 px-4">
            Send
          </Button>
        </div>
      </div>

      {/* Quick Challenge Options */}
      <div className="space-y-3">
        <h2 className="font-display font-semibold text-white">Quick Start</h2>
        {QUICK_OPTIONS.map((opt, i) => (
          <button
            key={i}
            className={cn(
              'w-full flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all hover:scale-[1.01]',
              opt.color.replace('bg-', 'bg-').replace('text-', 'text-').replace('border-', 'border-'),
              'bg-slate-800 border-slate-700'
            )}
          >
            <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center shrink-0', opt.color.split(' ')[0])}>
              <opt.icon className={cn('h-5 w-5', opt.color.split(' ')[1])} />
            </div>
            <div>
              <p className="font-semibold text-white text-sm">{opt.label}</p>
              <p className="text-xs text-slate-400">{opt.desc}</p>
            </div>
            <Zap className="h-4 w-4 text-slate-500 ml-auto" />
          </button>
        ))}
      </div>

      {/* Leaderboard */}
      <div className="bg-slate-800 rounded-2xl border border-slate-700 p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-amber-400" />
            <h2 className="font-display font-semibold text-white">Challenge Leaderboard</h2>
          </div>
          <span className="text-xs text-slate-400">This month</span>
        </div>

        <div className="space-y-2">
          {LEADERBOARD.map(entry => (
            <div
              key={entry.rank}
              className={cn(
                'flex items-center gap-3 p-3 rounded-xl',
                entry.isMe ? 'bg-primary/20 border border-primary/30' : 'bg-slate-700/50'
              )}
            >
              <span className={cn(
                'w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm shrink-0',
                entry.rank === 1 ? 'bg-amber-400 text-white' :
                entry.rank === 2 ? 'bg-slate-400 text-white' :
                entry.rank === 3 ? 'bg-amber-700 text-white' :
                'bg-slate-600 text-slate-300'
              )}>
                {entry.rank}
              </span>
              <div className={cn('w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0', entry.color)}>
                {entry.initials}
              </div>
              <div className="flex-1">
                <p className={cn('font-semibold text-sm', entry.isMe ? 'text-white' : 'text-white/90')}>
                  {entry.name}
                  {entry.isMe && <span className="ml-1 text-xs text-primary font-medium">(you)</span>}
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-white font-bold text-sm">{entry.wins}W <span className="text-slate-400 font-normal">/</span> {entry.losses}L</p>
                <p className="text-xs text-slate-400">
                  {Math.round((entry.wins / (entry.wins + entry.losses)) * 100)}% win rate
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className="text-xs text-primary hover:underline w-full text-center pt-1">
          View full leaderboard →
        </button>
      </div>
    </div>
  )
}
