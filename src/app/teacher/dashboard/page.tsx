'use client'
import { Sparkles, AlertTriangle, CheckSquare, Plus, Users, Calendar, ClipboardCheck, Megaphone, TrendingDown } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LineChart } from '@/components/shared/charts/LineChart'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const CHART_DATA = [
  { name: 'Sep', value: 74 },
  { name: 'Oct', value: 79 },
  { name: 'Nov', value: 76 },
  { name: 'Dec', value: 83 },
  { name: 'Jan', value: 85 },
]

const ALERTS = [
  { name: 'Julian Mercer', detail: 'Missed 3 consecutive assignments in AP Physics.' },
  { name: 'Sarah Jenkins', detail: 'Test score deviation: -25% from personal baseline.' },
]

const TASKS = [
  { icon: '📝', title: 'Grade Midterm Essays', meta: 'World History · 24 submissions', badge: 'Due Today', badgeVariant: 'destructive' as const },
  { icon: '✉️', title: 'Unread Parent Messages', meta: '3 messages pending reply', badge: 'Action Needed', badgeVariant: 'warning' as const },
  { icon: '📋', title: 'Approve Q2 Lesson Plans', meta: 'Department requirement', badge: 'Due Friday', badgeVariant: 'secondary' as const },
]

const SCHEDULE = [
  { title: 'AP Physics — Section 1', sub: 'Room 402 · Topic: Thermodynamics', time: '09:00 AM', color: 'border-blue-500' },
  { title: 'Office Hours', sub: 'Virtual (Zoom) & Room 402', time: '11:30 AM', color: 'border-green-500' },
  { title: 'World History — Section 3', sub: 'Room 310 · Topic: Cold War', time: '01:00 PM', color: 'border-amber-500' },
]

export default function TeacherDashboardPage() {
  const name = 'Sarah Johnson'

  return (
    <div className="p-6 space-y-6">
      {/* Hero */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Overview</h1>
          <p className="text-sm text-on-surface-variant mt-1">Your daily teaching insights and tasks, {name.split(' ')[0]}.</p>
        </div>
        <Link href="/teacher/ai-studio">
          <Button className="gap-2 bg-ai hover:bg-ai/90">
            <Sparkles className="h-4 w-4" /> AI Lesson Generator
          </Button>
        </Link>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3">
        {[
          { icon: <Plus className="h-4 w-4" />, label: 'Create Lesson', href: '/teacher/ai-studio' },
          { icon: <ClipboardCheck className="h-4 w-4" />, label: 'Take Attendance', href: '/teacher/classes' },
          { icon: <Megaphone className="h-4 w-4" />, label: 'Broadcast Announcement', href: '/teacher/messages' },
        ].map(a => (
          <Link key={a.label} href={a.href}>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-outline-variant text-sm font-medium text-on-surface hover:border-primary/50 hover:bg-surface-low transition-all">
              {a.icon} {a.label}
            </button>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Chart */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5">
          <div className="flex items-center justify-between mb-1">
            <h2 className="font-display font-semibold text-on-surface">Class Performance Overview</h2>
            <span className="text-xs px-2 py-0.5 rounded-full bg-ai/10 text-ai font-medium">✦ AI</span>
          </div>
          <p className="text-xs text-on-surface-variant mb-4">Average term scores across all assigned sections</p>
          <LineChart data={CHART_DATA} height={180} />
        </div>

        {/* Critical Alerts */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5">
          <div className="flex items-center gap-2 mb-1">
            <h2 className="font-display font-semibold text-on-surface">Critical Alerts</h2>
            <span className="text-xs px-2 py-0.5 rounded-full bg-ai/10 text-ai font-medium">✦ AI</span>
          </div>
          <p className="text-xs text-on-surface-variant mb-4">AI-flagged students requiring attention</p>
          <div className="divide-y divide-outline-variant">
            {ALERTS.map(a => (
              <div key={a.name} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <TrendingDown className="h-4 w-4 text-red-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-on-surface">{a.name}</p>
                  <p className="text-xs text-on-surface-variant">{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Task Queue */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5">
          <h2 className="font-display font-semibold text-on-surface mb-4">Task Queue</h2>
          <div className="divide-y divide-outline-variant">
            {TASKS.map(t => (
              <div key={t.title} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
                <span className="text-xl">{t.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-on-surface">{t.title}</p>
                  <p className="text-xs text-on-surface-variant">{t.meta}</p>
                </div>
                <Badge variant={t.badgeVariant} size="sm">{t.badge}</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5">
          <h2 className="font-display font-semibold text-on-surface mb-4">Today's Schedule</h2>
          <div className="space-y-3">
            {SCHEDULE.map(s => (
              <div key={s.title} className={`border-l-4 pl-3 py-1 ${s.color}`}>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-on-surface">{s.title}</p>
                  <span className="text-sm font-mono text-on-surface-variant">{s.time}</span>
                </div>
                <p className="text-xs text-on-surface-variant">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
