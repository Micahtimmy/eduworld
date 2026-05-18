'use client'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const CHILDREN = [
  {
    name: 'Alex Johnson', grade: 'Grade 11', track: 'Science', color: 'indigo',
    metrics: { avg: 'A- (92%)', attendance: '98.4%', xpRank: 'Top 3%', behavior: '94/100' },
  },
  {
    name: 'Sarah Johnson', grade: 'Grade 8', track: 'Arts', color: 'pink', top: true,
    metrics: { avg: 'A+ (97%)', attendance: '99.1%', xpRank: 'Top 1%', behavior: '98/100' },
  },
  {
    name: 'Leo Johnson', grade: 'Grade 3', track: 'Primary', color: 'green',
    metrics: { avg: 'B+ (88%)', attendance: '95.0%', xpRank: 'Top 12%', behavior: '82/100' },
  },
]

const ALERTS = [
  { badge: 'Urgent', badgeColor: 'bg-red-500', child: 'Alex', time: '2h ago', title: 'Missed Calculus Quiz' },
  { badge: 'Info', badgeColor: 'bg-blue-400', child: 'Sarah', time: '5h ago', title: 'Science Fair Project Submitted' },
  { badge: 'Event', badgeColor: 'bg-purple-400', child: 'Leo', time: '1d ago', title: 'Picnic Day Permission Slip' },
]

const TIMELINE = [
  { borderColor: 'border-indigo-500', child: 'Alex', icon: '🎓', title: 'State Physics Olympiad — Finalist', date: 'Oct 24, 2023' },
  { borderColor: 'border-pink-500', child: 'Sarah', icon: '🎨', title: 'Solo Exhibition — Digital Design', date: 'Oct 15, 2023' },
  { borderColor: 'border-green-500', child: 'Leo', icon: '📖', title: 'Reading Level Mastery — Level 4', date: 'Sep 28, 2023' },
]

const colorMap: Record<string, string> = {
  indigo: 'ring-indigo-200 bg-indigo-50',
  pink: 'ring-pink-200 bg-pink-50 ring-2 ring-yellow-400',
  green: 'ring-green-200 bg-green-50',
}

export default function ParentComparePage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Multi-Child Performance Comparison</h1>
          <p className="text-sm text-on-surface-variant mt-1">Unified metrics for Alex, Sarah, and Leo</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Comparison Grid</Button>
          <Button variant="outline" size="sm">Timeline View</Button>
        </div>
      </div>

      {/* Alerts Panel */}
      <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded-r-2xl p-4 space-y-3">
        <p className="text-xs font-semibold uppercase text-amber-700 dark:text-amber-400">Unified Alerts</p>
        {ALERTS.map(a => (
          <div key={a.title} className="flex items-center gap-3">
            <span className={cn('text-xs font-semibold text-white px-2 py-0.5 rounded-full', a.badgeColor)}>{a.badge}</span>
            <span className="text-sm font-semibold text-on-surface">{a.child}</span>
            <span className="text-xs text-on-surface-variant">{a.time}</span>
            <span className="text-sm text-on-surface">{a.title}</span>
          </div>
        ))}
        <button className="text-xs text-primary font-semibold hover:underline">View All Notifications →</button>
      </div>

      {/* Child Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CHILDREN.map(c => (
          <div key={c.name} className={cn('bg-surface-lowest rounded-2xl border border-outline-variant p-6 flex flex-col items-center text-center', c.top && 'ring-2 ring-yellow-400')}>
            <div className="relative">
              <div className={cn('w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold bg-surface-high text-on-surface')}>
                {c.name.split(' ')[0][0]}
              </div>
              {c.top && <span className="absolute -top-1 -right-1 text-xl">⭐</span>}
            </div>
            <h3 className="font-display font-bold text-lg text-on-surface mt-3">{c.name}</h3>
            <p className="text-xs text-on-surface-variant">{c.grade} · {c.track}</p>

            <div className="grid grid-cols-2 gap-3 w-full mt-4">
              {[
                { label: 'Avg. Grade', value: c.metrics.avg },
                { label: 'Attendance', value: c.metrics.attendance },
                { label: 'XP Rank', value: c.metrics.xpRank },
                { label: 'Behavior', value: c.metrics.behavior },
              ].map(m => (
                <div key={m.label} className="bg-surface-low rounded-xl p-2.5">
                  <p className="text-xs text-on-surface-variant">{m.label}</p>
                  <p className="text-sm font-bold text-on-surface mt-0.5">{m.value}</p>
                </div>
              ))}
            </div>
            <Button variant="secondary" size="sm" className="mt-4 w-full">Detailed Analytics</Button>
          </div>
        ))}
      </div>

      {/* AI Synergy Panel */}
      <div className="bg-gradient-to-r from-primary to-ai rounded-2xl p-6 text-white space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          <h2 className="font-display font-semibold">EduWorld AI: Household Synergy Analysis</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: '📈', title: 'Common Strengths', color: 'text-green-300', body: 'All three children show strong STEM engagement above national average. Consistent curiosity patterns detected.' },
            { icon: '⚠️', title: 'Shared Opportunities', color: 'text-yellow-300', body: 'Tuesday morning attendance dip across all children averaging -12%. Schedule review recommended.' },
            { icon: '🚀', title: 'Next Strategy', color: 'text-blue-300', body: 'Peer Mentorship program recommended — Alex can support Leo in reading while Sarah mentors Alex in creative writing.' },
          ].map(s => (
            <div key={s.title} className="bg-white/10 rounded-xl p-4 space-y-2">
              <p className={cn('text-sm font-semibold', s.color)}>{s.icon} {s.title}</p>
              <p className="text-xs text-white/80">{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Timeline */}
      <div>
        <h2 className="font-display font-semibold text-on-surface mb-4">Achievement Timeline</h2>
        <div className="space-y-3">
          {TIMELINE.map(t => (
            <div key={t.title} className={cn('flex items-start gap-4 bg-surface-lowest rounded-2xl border border-outline-variant p-4 border-l-4', t.borderColor)}>
              <span className="text-2xl">{t.icon}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-on-surface">{t.title}</p>
                  <span className="text-xs text-on-surface-variant">{t.date}</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-0.5">Achievement logged for {t.child}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
