'use client'
import { Trophy, Flame, Sparkles, Clock, CheckCircle, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const LEADERBOARD = [
  { rank: 1, initials: 'AK', name: 'Alex K.', xp: '14,250', streak: 42 },
  { rank: 2, initials: 'SM', name: 'Sarah M.', xp: '13,900', streak: 12 },
  { rank: 3, initials: 'JL', name: 'James L.', xp: '13,120', streak: 28 },
  { rank: 42, initials: 'ME', name: 'You', xp: '8,450', streak: 5, isMe: true },
  { rank: 43, initials: 'ER', name: 'Elena R.', xp: '8,410', streak: 0 },
]

const CHALLENGES = [
  { icon: CheckCircle, title: 'Perfect Attendance', desc: 'Log in 5 consecutive days', reward: '+500 XP', progress: 3, total: 5 },
  { icon: Trophy, title: 'Quiz Master', desc: 'Score 90%+ on 2 practice quizzes', reward: '+800 XP', progress: 1, total: 2 },
]

export default function AchieverLeaderboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Achiever</h1>
          <p className="text-sm text-on-surface-variant mt-1">Global Leaderboard & Peer Comparison</p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-on-surface-variant bg-surface-lowest border border-outline-variant rounded-full px-3 py-1.5">
          <Clock className="h-3 w-3" />
          Season ends in 12 days
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leaderboard Table */}
        <div className="lg:col-span-2 bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            <h2 className="font-display font-semibold text-on-surface">Global Top Performers</h2>
          </div>
          <div className="flex gap-1 p-1 bg-surface-low rounded-xl w-fit">
            {['Global', 'School Cohort'].map((t, i) => (
              <button key={t} className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${i === 0 ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-high'}`}>{t}</button>
            ))}
          </div>
          <div className="space-y-2">
            <div className="grid grid-cols-4 text-xs font-semibold text-on-surface-variant px-3 pb-1">
              <span>Rank</span><span className="col-span-2">Student</span><span>Energy XP</span>
            </div>
            {LEADERBOARD.map(e => (
              <div key={e.rank} className={`grid grid-cols-4 items-center px-3 py-2.5 rounded-xl text-sm ${e.isMe ? 'bg-primary/10 border border-primary/30' : 'hover:bg-surface-low'}`}>
                <span className={`font-bold ${e.rank <= 3 ? 'text-amber-500' : e.isMe ? 'text-primary' : 'text-on-surface-variant'}`}>#{e.rank}</span>
                <div className="col-span-2 flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${e.isMe ? 'bg-primary text-white' : 'bg-primary/20 text-primary'}`}>{e.initials}</div>
                  <span className={`font-semibold ${e.isMe ? 'text-primary' : 'text-on-surface'}`}>{e.name}</span>
                  {e.isMe && <span className="text-xs bg-primary text-white px-1.5 py-0.5 rounded-full">Me</span>}
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-on-surface">{e.xp}</span>
                  <span className="text-xs text-on-surface-variant flex items-center gap-0.5"><Flame className="h-3 w-3 text-orange-500" />{e.streak}</span>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" size="sm" className="w-full">View Full Standings</Button>
        </div>

        {/* Right Panel */}
        <div className="space-y-4">
          {/* Peer Insights */}
          <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-ai" />
              <h2 className="font-display font-semibold text-on-surface">Peer Insights</h2>
            </div>
            <p className="text-xs text-on-surface-variant">You are in the <strong className="text-on-surface">top 5%</strong> of your school for consistent monthly study hours.</p>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-3.5 w-3.5 text-green-500" />
              <span className="text-xs font-semibold text-green-600">Your Pace · Top 5%</span>
            </div>
          </div>

          {/* Weekly Challenges */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <h2 className="font-display font-semibold text-on-surface">Weekly Challenges</h2>
            <div className="space-y-4">
              {CHALLENGES.map(c => (
                <div key={c.title} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <c.icon className="h-4 w-4 text-primary" />
                    <p className="text-sm font-semibold text-on-surface">{c.title}</p>
                  </div>
                  <p className="text-xs text-on-surface-variant">{c.desc}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-on-surface-variant">{c.progress}/{c.total}</span>
                    <span className="font-semibold text-amber-600">{c.reward}</span>
                  </div>
                  <div className="h-1.5 bg-surface-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${(c.progress / c.total) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
