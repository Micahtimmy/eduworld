'use client'
import { Sparkles, TrendingUp, AlertTriangle } from 'lucide-react'
import { LineChart } from '@/components/shared/charts/LineChart'
import { RadarChart } from '@/components/shared/charts/RadarChart'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const TRAJECTORY = [
  { name: 'Week 1', value: 55 },
  { name: 'Week 4', value: 68 },
  { name: 'Week 8', value: 74 },
  { name: 'Midterms', value: 82 },
]

const RADAR_DATA = [
  { subject: 'Physics', value: 82 },
  { subject: 'Calculus', value: 58 },
  { subject: 'History', value: 75 },
  { subject: 'Literature', value: 80 },
  { subject: 'Chemistry', value: 71 },
  { subject: 'Biology', value: 65 },
]

const FEED = [
  { icon: '📝', event: 'Physics Lab Report', detail: 'Graded: A-', time: '2h ago' },
  { icon: '📚', event: 'Prof. Davis posted a resource', detail: 'Calculus III', time: '5h ago' },
  { icon: '📅', event: 'Midterm Scheduled', detail: 'Literature', time: '1d ago' },
]

export default function AchieverAnalyticsPage() {
  return (
    <div className="p-4 space-y-5">
      <div>
        <h1 className="font-display font-bold text-2xl text-on-surface">Performance Analytics</h1>
        <p className="text-sm text-on-surface-variant mt-1">Academic trajectory and active insights.</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-1">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <p className="text-xs text-on-surface-variant">Global Mastery Score</p>
          </div>
          <p className="font-display font-bold text-3xl text-on-surface">84.2</p>
          <p className="text-xs text-green-600">↑ +12% this term</p>
        </div>
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-1">
          <p className="text-xs text-on-surface-variant">Completion Rate</p>
          <p className="font-display font-bold text-3xl text-on-surface">96%</p>
          <p className="text-xs text-amber-600">2 assignments due</p>
        </div>
        <div className="bg-red-50 dark:bg-red-950/20 rounded-2xl border border-red-200 p-4 space-y-1">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-red-500" />
            <p className="text-xs text-red-700 font-semibold">Weak Points Identified</p>
          </div>
          <p className="font-display font-bold text-3xl text-on-surface">3</p>
          <p className="text-xs text-red-600">Advanced Calculus, Thermodynamics...</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trajectory Chart */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
          <h2 className="font-display font-semibold text-on-surface">Trajectory Analysis</h2>
          <div className="flex gap-3 text-xs">
            <div className="flex items-center gap-1"><div className="w-3 h-1.5 rounded bg-primary" /><span className="text-on-surface-variant">Exams</span></div>
            <div className="flex items-center gap-1"><div className="w-3 h-1.5 rounded bg-green-500" /><span className="text-on-surface-variant">Assignments</span></div>
          </div>
          <LineChart data={TRAJECTORY} height={160} />
        </div>

        {/* Radar Chart */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
          <h2 className="font-display font-semibold text-on-surface">Subject Weak Points</h2>
          <p className="text-xs text-amber-600">15% deviation below running average flagged for Biology</p>
          <RadarChart data={RADAR_DATA} height={200} />
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-ai" />
          <h2 className="font-display font-semibold text-on-surface">AI Insights</h2>
        </div>
        <p className="text-sm text-on-surface-variant">Focus on <strong className="text-on-surface">Cellular Respiration</strong> in Biology this week. Projected mastery score increase: <strong className="text-green-600">+4.2 points</strong></p>
        <div className="flex gap-3">
          <Button size="sm" className="bg-ai hover:bg-ai/90">Generate Study Guide</Button>
          <Button size="sm" variant="outline">View Past Mistakes</Button>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Class Activities</h2>
        {FEED.map(f => (
          <div key={f.event} className="flex items-start gap-3 py-2 border-b border-outline-variant last:border-0">
            <span className="text-xl">{f.icon}</span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-on-surface">{f.event}</p>
              <p className="text-xs text-on-surface-variant">{f.detail}</p>
            </div>
            <span className="text-xs text-on-surface-variant">{f.time}</span>
          </div>
        ))}
        <button className="text-xs text-primary hover:underline">View all activity →</button>
      </div>
    </div>
  )
}
