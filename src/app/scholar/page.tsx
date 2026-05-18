'use client'
import { BookOpen, Brain, Calendar, TrendingUp, Clock, Award } from 'lucide-react'
import Link from 'next/link'
import { useUser } from '@/hooks/use-user'
import { StatCard } from '@/components/shared/StatCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { XPBar } from '@/components/shared/gamification/XPBar'
import { Button } from '@/components/ui/button'
import { LineChart } from '@/components/shared/charts/LineChart'

const WEEKLY_ACTIVITY = [
  { day: 'Mon', hours: 2.5 }, { day: 'Tue', hours: 3 }, { day: 'Wed', hours: 1.5 },
  { day: 'Thu', hours: 4 }, { day: 'Fri', hours: 2 }, { day: 'Sat', hours: 0.5 }, { day: 'Sun', hours: 3.5 },
]

const CURRENT_COURSES = [
  { id: 'c1', name: 'Advanced Calculus', code: 'MATH301', progress: 68, nextLesson: 'Integration by Parts' },
  { id: 'c2', name: 'Organic Chemistry', code: 'CHEM240', progress: 45, nextLesson: 'Carbonyl Reactions' },
  { id: 'c3', name: 'Data Structures', code: 'CS201', progress: 82, nextLesson: 'Binary Search Trees' },
]

const UPCOMING_DEADLINES = [
  { title: 'MATH301 Problem Set 4', dueDate: 'Tomorrow', urgent: true },
  { title: 'CHEM240 Lab Report', dueDate: 'Fri 30 May', urgent: false },
  { title: 'CS201 Project Milestone', dueDate: 'Mon 2 Jun', urgent: false },
]

export default function ScholarDashboard() {
  const { profile } = useUser()
  const firstName = profile?.full_name?.split(' ')[0] ?? 'Scholar'
  const xp = profile?.xp ?? 5800

  return (
    <div className="max-w-5xl mx-auto px-4 lg:px-6 py-6 space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="font-display font-bold text-2xl text-on-surface">Welcome back, {firstName}</h1>
        <p className="text-sm text-on-surface-variant mt-0.5">Here&apos;s your study overview for today.</p>
      </div>

      {/* XP bar */}
      <XPBar xp={xp} size="lg" />

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Study Hours" value="17.5h" subtitle="this week" icon={Clock} iconColor="text-primary" />
        <StatCard title="GPA" value="3.7" trend={2} trendLabel="+0.2 vs last sem" icon={TrendingUp} iconColor="text-ai" />
        <StatCard title="Courses" value="3" subtitle="active" icon={BookOpen} iconColor="text-xp" />
        <StatCard title="Achievements" value="12" subtitle="earned" icon={Award} iconColor="text-primary" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Current courses */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-semibold text-on-surface">Current Courses</h2>
            <Link href="/scholar/courses">
              <Button variant="ghost" size="sm">View all</Button>
            </Link>
          </div>
          <div className="space-y-3">
            {CURRENT_COURSES.map(course => (
              <Card key={course.id} interactive>
                <CardContent className="p-4">
                  <Link href={`/scholar/courses/${course.id}`} className="block">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-label font-semibold text-on-surface">{course.name}</p>
                        <p className="text-xs text-on-surface-variant">{course.code}</p>
                      </div>
                      <Badge variant="neutral" size="sm">{course.progress}%</Badge>
                    </div>
                    <Progress value={course.progress} size="sm" className="mb-2" />
                    <p className="text-xs text-on-surface-variant">
                      Next: <span className="font-semibold text-on-surface">{course.nextLesson}</span>
                    </p>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Activity chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Weekly Study Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart
                data={WEEKLY_ACTIVITY}
                series={[{ key: 'hours', label: 'Hours', color: '#1e5799' }]}
                xKey="day"
                height={180}
              />
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* AI Tutor */}
          <Card className="border-ai/20 bg-ai/5">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-ai/20 flex items-center justify-center">
                  <Brain className="h-5 w-5 text-ai" />
                </div>
                <div>
                  <p className="font-label font-semibold text-on-surface text-sm">AI Research Assistant</p>
                  <p className="text-xs text-on-surface-variant">Powered by Claude</p>
                </div>
              </div>
              <Link href="/scholar/tutor">
                <Button variant="ai" className="w-full" size="sm">Start Session</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Upcoming deadlines */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Upcoming Deadlines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {UPCOMING_DEADLINES.map((d, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${d.urgent ? 'bg-error' : 'bg-on-surface-variant'}`} />
                  <div>
                    <p className="text-sm font-label font-semibold text-on-surface">{d.title}</p>
                    <p className={`text-xs ${d.urgent ? 'text-error font-semibold' : 'text-on-surface-variant'}`}>{d.dueDate}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
