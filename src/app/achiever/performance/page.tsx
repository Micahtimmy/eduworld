'use client'
import { Sparkles, Download, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LineChart } from '@/components/shared/charts/LineChart'
import { RadarChart } from '@/components/shared/charts/RadarChart'

const STATS = [
  { label: 'Global Mastery Score', value: '84.2', change: '+12%', icon: TrendingUp, positive: true },
  { label: 'Completion Rate', value: '96%', note: '2 Due', icon: TrendingUp, positive: true },
  { label: 'Identified Weak Points', value: '3 Areas', note: 'Advanced Calculus, Thermodynamics...', icon: AlertTriangle, positive: false },
]

const TRAJECTORY_DATA = [
  { name: 'Week 1', value: 68 },
  { name: 'Week 4', value: 74 },
  { name: 'Week 8', value: 82 },
  { name: 'Midterms', value: 78 },
]

const RADAR_DATA = [
  { subject: 'Physics', value: 80 },
  { subject: 'Calculus', value: 45 },
  { subject: 'History', value: 72 },
  { subject: 'Literature', value: 65 },
  { subject: 'Chemistry', value: 58 },
  { subject: 'Biology', value: 55 },
]

const ACTIVITIES = [
  { icon: '📋', title: 'Physics Lab Report', meta: 'Graded: A- · 2h ago' },
  { icon: '💬', title: 'Prof. Davis posted a resource', meta: 'Calculus III · 5h ago' },
  { icon: '📅', title: 'Midterm Scheduled', meta: 'Literature · 1d ago' },
]

export default function AchieverPerformancePage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Performance Analytics</h1>
          <p className="text-sm text-on-surface-variant mt-1">Comprehensive view of your academic trajectory and mastery progression.</p>
        </div>
        <Button variant="outline" size="sm" className="gap-2"><Download className="h-4 w-4" /> Export Report</Button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {STATS.map(s => (
          <div key={s.label} className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-xs text-on-surface-variant">{s.label}</p>
              <s.icon className={`h-4 w-4 ${s.positive ? 'text-green-600' : 'text-amber-500'}`} />
            </div>
            <p className="font-display font-bold text-3xl text-on-surface">{s.value}</p>
            {s.change && <p className="text-xs text-green-600 font-semibold">{s.change}</p>}
            {s.note && <p className="text-xs text-on-surface-variant">{s.note}</p>}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trajectory Chart */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div>
            <h2 className="font-display font-semibold text-on-surface">Trajectory Analysis</h2>
            <p className="text-xs text-on-surface-variant">Assignments vs. Examination Performance</p>
          </div>
          <LineChart data={TRAJECTORY_DATA} height={180} />
        </div>

        {/* Radar Chart */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Weak Points Radar</h2>
          <RadarChart data={RADAR_DATA} height={180} />
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
            <p className="text-xs text-amber-700">Biology concepts show a 15% deviation below your running average.</p>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-ai" />
          <h2 className="font-display font-semibold text-on-surface">EduWorld AI Insights</h2>
        </div>
        <p className="text-sm text-on-surface-variant">Focusing on <strong className="text-on-surface">Cellular Respiration</strong> could improve your Biology score by up to <strong className="text-on-surface">4.2 points</strong>.</p>
        <div className="flex gap-2">
          <Button size="sm" className="gap-2 bg-ai hover:bg-ai/90"><Sparkles className="h-4 w-4" /> Generate Study Guide</Button>
          <Button size="sm" variant="outline">View Past Mistakes</Button>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <h2 className="font-display font-semibold text-on-surface">Class Activities</h2>
        <div className="space-y-3">
          {ACTIVITIES.map(a => (
            <div key={a.title} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
              <span className="text-xl">{a.icon}</span>
              <div>
                <p className="text-sm font-semibold text-on-surface">{a.title}</p>
                <p className="text-xs text-on-surface-variant">{a.meta}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="text-xs text-primary hover:underline">View all activity</button>
      </div>
    </div>
  )
}
