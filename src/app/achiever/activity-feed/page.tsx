'use client'
import { Sparkles, ThumbsUp, MessageCircle, Users, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const LEADERBOARD = [
  { rank: 1, name: 'James Wilson', score: '4,250', star: true },
  { rank: 2, name: 'Aisha Patel', score: '3,980 pts', star: false },
  { rank: 3, name: 'David Kim', score: '3,850 pts', star: false },
  { rank: 14, name: 'You', score: '2,100 pts', star: false, isMe: true },
]

const GROUPS = [
  { icon: '🔬', name: 'Physics 201 Prep', members: '12 members', activity: 'Very Active' },
  { icon: '💻', name: 'Python Masters', members: '8 members', activity: 'Active' },
]

export default function AchieverActivityFeedPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Community Pulse</h1>
          <p className="text-sm text-on-surface-variant mt-1">See what your peers are accomplishing today.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1">
        {['All Activity', 'My Cohort'].map((t, i) => (
          <button key={t} className={cn('px-4 py-2 rounded-xl text-sm font-medium transition-colors', i === 0 ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-low')}>{t}</button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Feed */}
        <div className="lg:col-span-2 space-y-4">
          {/* Card 1 */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-sm font-bold text-blue-600">MT</div>
              <div>
                <p className="text-sm font-semibold text-on-surface">Marcus T. completed a Mock Exam</p>
                <p className="text-xs text-on-surface-variant">2h ago</p>
              </div>
            </div>
            <div className="bg-surface-low rounded-xl p-3">
              <p className="text-sm font-semibold text-on-surface">Advanced Calculus Part II: Integration Techniques</p>
              <p className="text-xs text-green-600 font-semibold mt-1">✓ Score: 92%</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-4 text-xs text-on-surface-variant">
                <button className="flex items-center gap-1 hover:text-primary"><ThumbsUp className="h-3.5 w-3.5" /> 12</button>
                <button className="flex items-center gap-1 hover:text-primary"><MessageCircle className="h-3.5 w-3.5" /> 3</button>
              </div>
              <Button size="sm" variant="outline" className="h-7 text-xs">View Details</Button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-sm font-bold text-purple-600">ER</div>
              <div>
                <p className="text-sm font-semibold text-on-surface">Elena R. earned a new badge</p>
                <p className="text-xs text-on-surface-variant">4h ago</p>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-center gap-3">
              <span className="text-2xl">🔥</span>
              <div>
                <p className="text-sm font-semibold text-amber-700">7-Day Study Streak</p>
                <p className="text-xs text-on-surface-variant">Consistent dedication! Elena has logged study hours every day for a week.</p>
              </div>
            </div>
            <button className="text-sm text-primary hover:underline flex items-center gap-1">🎉 Congratulate</button>
          </div>

          {/* Card 3 — AI Insight */}
          <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-ai" />
              <p className="text-sm font-semibold text-on-surface">EduWorld AI Insight</p>
              <span className="text-xs text-on-surface-variant ml-auto">Just now</span>
            </div>
            <p className="text-sm text-on-surface-variant">Your cohort is trending in <strong className="text-on-surface">Organic Chemistry</strong> — 45% of students just hit a mastery milestone.</p>
            <button className="text-sm text-ai hover:underline flex items-center gap-1">View Cohort Stats <ArrowRight className="h-3.5 w-3.5" /></button>
          </div>

          {/* Card 4 */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-on-surface">Study Group &apos;Data Structs &amp; Algo&apos;</p>
                <p className="text-xs text-on-surface-variant">Yesterday</p>
              </div>
            </div>
            <p className="text-sm text-on-surface-variant">Milestone: <strong className="text-on-surface">100 practice problems solved</strong> this week!</p>
            <div className="flex items-center gap-1">
              {['A', 'B', 'C'].map(l => (
                <div key={l} className="w-7 h-7 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center text-xs font-bold text-primary -ml-1 first:ml-0">{l}</div>
              ))}
              <span className="text-xs text-on-surface-variant ml-2">+4 members</span>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Leaderboard */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <h2 className="font-display font-semibold text-on-surface">Class Leaderboard</h2>
            <div className="space-y-2">
              {LEADERBOARD.map(l => (
                <div key={l.rank} className={cn('flex items-center gap-3 p-2 rounded-xl', l.isMe ? 'bg-primary/5 border border-primary/20' : '')}>
                  <span className="text-xs font-bold text-on-surface-variant w-4">{l.rank}</span>
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                    {l.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                  </div>
                  <p className="text-sm text-on-surface flex-1">{l.name}</p>
                  <p className="text-xs font-semibold text-on-surface">{l.score} {l.star && '⭐'}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Study Groups */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <h2 className="font-display font-semibold text-on-surface">Suggested Study Groups</h2>
            <p className="text-xs text-on-surface-variant">Based on your recent activity.</p>
            <div className="space-y-2">
              {GROUPS.map(g => (
                <div key={g.name} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
                  <span className="text-lg">{g.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-on-surface truncate">{g.name}</p>
                    <p className="text-xs text-on-surface-variant">{g.members} · {g.activity}</p>
                  </div>
                  <Button size="sm" className="h-7 text-xs">Join</Button>
                </div>
              ))}
            </div>
            <button className="text-xs text-primary hover:underline">Explore All Groups</button>
          </div>
        </div>
      </div>
    </div>
  )
}
