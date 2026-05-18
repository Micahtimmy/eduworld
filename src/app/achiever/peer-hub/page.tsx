'use client'
import { useState } from 'react'
import { Flame, Zap, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Sparkles } from 'lucide-react'

const PULSE = [
  { icon: '✅', event: 'Leo M. completed Calculus Prep', time: '2 min ago' },
  { icon: '🏅', event: 'Sarah K. earned History Buff badge', time: '15 min ago' },
  { icon: '👥', event: '4 people joined Chem 101 Huddle', time: '22 min ago' },
]

const TABS = ['Overall', 'Calculus AB', 'Biology', 'AP World History', 'Macroeconomics']

const LEADERS = [
  { rank: 1, name: 'Jade Simmons', title: 'Lv.42 • Math Genius', pts: 12450 },
  { rank: 2, name: 'Marcus Webb', title: 'Lv.39 • Bio King', pts: 11890 },
  { rank: 3, name: 'Elena Rodriguez', title: 'Lv.37 • Polyglot', pts: 10200 },
  { rank: 14, name: 'You', title: 'Top 5%', pts: 8150, isMe: true },
]

const HUDDLES = [
  { title: 'Calc Midterm Grind', status: 'LIVE', subject: 'MATH', members: 15, desc: 'Focused on integrals and area under curve — co-working format.', ai: true, cta: 'Join Room' },
  { title: 'Bio Flashcards Blitz', status: 'QUIZ', subject: 'BIO', members: 8, desc: 'AI bot "Aria" hosting a 20-question Genetics quiz.', countdown: '04:30', cta: 'Enter Quiz' },
]

export default function PeerHubPage() {
  const [activeTab, setActiveTab] = useState('Overall')

  return (
    <div className="p-4 space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Achiever Hub</h1>
          <p className="text-sm text-on-surface-variant mt-1">Join active huddles and rise through the ranks.</p>
        </div>
        <div className="flex items-center gap-2 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 rounded-full px-3 py-1">
          <span className="text-amber-500">🏆</span>
          <span className="text-xs font-semibold text-amber-700">Season 4 ends in 12 days</span>
        </div>
      </div>

      {/* Live Pulse */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-amber-500" />
          <h2 className="font-display font-semibold text-on-surface">Live Pulse</h2>
        </div>
        {PULSE.map(p => (
          <div key={p.event} className="flex items-center gap-2 text-sm">
            <span>{p.icon}</span>
            <span className="text-on-surface flex-1">{p.event}</span>
            <span className="text-xs text-on-surface-variant">{p.time}</span>
          </div>
        ))}
        <div className="bg-ai/5 border border-ai/20 rounded-xl p-3 space-y-2">
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-ai" />
            <span className="text-xs font-semibold text-on-surface">AI Advisor</span>
          </div>
          <p className="text-xs text-on-surface-variant">You're 12 XP behind Marcus. A 15-min study session now could close the gap before the season ends.</p>
          <Button size="sm" className="text-xs bg-ai hover:bg-ai/90">Get Started</Button>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Peer Leaderboard</h2>
        <div className="flex gap-1 overflow-x-auto pb-1">
          {TABS.map(t => (
            <button key={t} onClick={() => setActiveTab(t)} className={cn('px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors', activeTab === t ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-low')}>
              {t}
            </button>
          ))}
        </div>
        <div className="divide-y divide-outline-variant">
          {LEADERS.map(l => (
            <div key={l.rank} className={cn('flex items-center gap-3 py-2.5', l.isMe && 'bg-primary/5 rounded-xl px-2')}>
              <span className="w-6 text-center text-sm font-bold text-on-surface-variant">{l.rank <= 3 ? ['🥇','🥈','🥉'][l.rank-1] : l.rank}</span>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">{l.name[0]}</div>
              <div className="flex-1">
                <p className={cn('text-sm font-semibold', l.isMe ? 'text-primary' : 'text-on-surface')}>{l.name}</p>
                <p className="text-xs text-on-surface-variant">{l.title}</p>
              </div>
              <p className="text-sm font-bold text-on-surface">{l.pts.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <button className="text-xs text-primary hover:underline">View All →</button>
      </div>

      {/* Active Huddles */}
      <div className="space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Active Huddles</h2>
        {HUDDLES.map(h => (
          <div key={h.title} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={cn('text-xs font-bold px-2 py-0.5 rounded-full', h.status === 'LIVE' ? 'bg-red-100 text-red-700' : 'bg-purple-100 text-purple-700')}>{h.status}</span>
                  <span className="text-xs bg-surface-high text-on-surface-variant px-2 py-0.5 rounded-full">{h.subject}</span>
                  {h.ai && <span className="text-xs text-ai">✦ AI MODERATED</span>}
                </div>
                <p className="font-semibold text-on-surface">{h.title}</p>
                <p className="text-xs text-on-surface-variant mt-0.5">{h.desc}</p>
              </div>
              <div className="flex items-center gap-1 text-xs text-on-surface-variant">
                <Users className="h-3.5 w-3.5" />
                <span>{h.members}</span>
              </div>
            </div>
            {h.countdown && <p className="text-xs text-on-surface-variant">Next round in <span className="font-bold text-primary">{h.countdown}</span></p>}
            <Button size="sm" className="w-full">{h.cta}</Button>
          </div>
        ))}
      </div>

      {/* Progress */}
      <div className="bg-gradient-to-r from-primary to-ai rounded-2xl p-4 text-white space-y-2">
        <p className="text-sm opacity-80">Current: Academic Warrior (Level 42)</p>
        <p className="text-xs opacity-70">Next: Scholar Legend</p>
        <p className="text-xs">Progress to Level 43</p>
        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full" style={{ width: '70%' }} />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs opacity-80">850 / 1,200 XP</span>
          <button className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full font-medium">Claim Reward</button>
        </div>
      </div>
    </div>
  )
}
