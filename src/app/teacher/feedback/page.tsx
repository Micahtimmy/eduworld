'use client'
import { Sparkles, Filter, Archive, Star, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const STATS = [
  { label: 'Unresolved Evaluations', value: '42', note: '+12% this week', sub: 'Pending review for Advanced Physics Lab' },
  { label: 'Active Academic Queries', value: '15', note: 'Priority', sub: '65% response rate target reached' },
]

const QUEUE = [
  { initials: 'MS', name: 'Marcus Sterling', meta: 'Applied Mathematics · Query', badge: 'Unanswered', badgeColor: 'bg-amber-100 text-amber-700', preview: "I'm struggling to understand the integration of third-order differential equations...", ai: true },
  { initials: 'SC', name: 'Sophia Chen', meta: 'Practical: Chemical Synthesis · Evaluation', badge: 'High Praise', badgeColor: 'bg-green-100 text-green-700', preview: 'The practical session on exothermic reactions was incredibly well-organized...', stars: 5, ai: false },
]

const ACTIVITY = [
  { icon: '✅', text: 'You responded to Alex Rivera', time: '15 mins ago' },
  { icon: '📖', text: 'Commentary published for Lab Group B', time: '1 hour ago' },
  { icon: '👤', text: 'New Query from Elena Rossi', time: '3 hours ago' },
]

export default function TeacherFeedbackPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="font-display font-bold text-2xl text-on-surface">Student Feedback & Review Loop</h1>
        <p className="text-sm text-on-surface-variant mt-1">Manage evaluations, queries, and academic feedback from your students.</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {STATS.map(s => (
          <div key={s.label} className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-2">
            <p className="text-xs text-on-surface-variant">{s.label}</p>
            <p className="font-display font-bold text-3xl text-on-surface">{s.value}</p>
            <p className="text-xs font-semibold text-amber-600">{s.note}</p>
            <p className="text-xs text-on-surface-variant">{s.sub}</p>
          </div>
        ))}
        <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 space-y-2">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-ai" />
            <p className="text-xs font-semibold text-ai">AI Sentiment Summary</p>
          </div>
          <p className="text-xs text-on-surface-variant">&quot;Students report high clarity on topics from this term.&quot;</p>
          <button className="text-xs text-ai hover:underline">View Detailed Insights →</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Feedback Queue */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-semibold text-on-surface">Feedback Queue</h2>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="gap-1 h-7 text-xs"><Filter className="h-3 w-3" /> Filter</Button>
              <Button size="sm" variant="outline" className="h-7 text-xs">Sort: Newest</Button>
            </div>
          </div>
          <div className="space-y-3">
            {QUEUE.map(q => (
              <div key={q.name} className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary shrink-0">{q.initials}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-sm text-on-surface">{q.name}</p>
                      <span className={cn('text-xs px-2 py-0.5 rounded-full font-semibold', q.badgeColor)}>{q.badge}</span>
                      {q.ai && <span className="text-xs bg-ai/10 text-ai px-1.5 py-0.5 rounded font-semibold">AI</span>}
                    </div>
                    <p className="text-xs text-on-surface-variant">{q.meta}</p>
                  </div>
                </div>
                {q.stars && (
                  <div className="flex items-center gap-1">
                    {Array.from({ length: q.stars }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-on-surface ml-1">{q.stars}.0 / 5.0</span>
                  </div>
                )}
                <p className="text-sm text-on-surface-variant italic">&quot;{q.preview}&quot;</p>
                <div className="flex items-center gap-2">
                  <button className="text-xs text-on-surface-variant flex items-center gap-1 hover:text-on-surface"><Archive className="h-3.5 w-3.5" /> Archive</button>
                  <Button size="sm" className="h-7 text-xs ml-auto">Respond Now</Button>
                </div>
              </div>
            ))}
            <div className="text-center p-6 text-on-surface-variant">
              <p className="text-2xl mb-2">📦</p>
              <p className="text-sm font-semibold">That&apos;s it for now!</p>
              <p className="text-xs">Review monthly analytics for detailed feedback trends.</p>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-4">
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <h2 className="font-display font-semibold text-on-surface">Term Response Goal</h2>
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-on-surface-variant">Individual Response Rate</span>
                  <span className="font-bold text-on-surface">88%</span>
                </div>
                <div className="h-2 bg-surface-high rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '88%' }} />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-on-surface-variant">Department Average</span>
                  <span className="font-bold text-on-surface">72%</span>
                </div>
                <div className="h-2 bg-surface-high rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '72%' }} />
                </div>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2">
              <p className="text-xs text-amber-700 font-semibold">🏆 You are currently in the top 5% of responsive educators this term!</p>
            </div>
          </div>

          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-ai" />
              <h2 className="font-display font-semibold text-on-surface">AI Commentary Assist</h2>
            </div>
            <Button className="w-full gap-2 bg-ai hover:bg-ai/90"><Sparkles className="h-4 w-4" /> Generate Draft</Button>
          </div>

          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <h2 className="font-display font-semibold text-on-surface">Recent Responses</h2>
            <div className="space-y-2">
              {ACTIVITY.map(a => (
                <div key={a.text} className="flex items-start gap-2">
                  <span className="text-base">{a.icon}</span>
                  <div>
                    <p className="text-xs text-on-surface">{a.text}</p>
                    <p className="text-xs text-on-surface-variant">{a.time}</p>
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
