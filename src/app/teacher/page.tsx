'use client'
import { Users, BookOpen, Brain, ClipboardList, TrendingUp, Bell, Plus } from 'lucide-react'
import Link from 'next/link'
import { useUser } from '@/hooks/use-user'
import { StatCard } from '@/components/shared/StatCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BarChart } from '@/components/shared/charts/BarChart'

const CLASS_PERFORMANCE = [
  { class: '9A', avg: 78 }, { class: '9B', avg: 82 }, { class: '10A', avg: 71 },
  { class: '10B', avg: 85 }, { class: '11A', avg: 69 },
]

const RECENT_SUBMISSIONS = [
  { student: 'Amara K.', assignment: 'Algebra Set 3', grade: 94, time: '2h ago' },
  { student: 'Jide O.', assignment: 'Algebra Set 3', grade: 71, time: '3h ago' },
  { student: 'Priya S.', assignment: 'Geometry Quiz', grade: 88, time: '5h ago' },
]

export default function TeacherDashboard() {
  const { profile } = useUser()
  const firstName = profile?.full_name?.split(' ')[0] ?? 'Teacher'

  return (
    <div className="max-w-5xl mx-auto px-4 lg:px-6 py-6 space-y-6">
      {/* Welcome */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Good morning, {firstName}</h1>
          <p className="text-sm text-on-surface-variant">You have 3 assignments to review today.</p>
        </div>
        <div className="flex gap-2">
          <Link href="/teacher/lessons">
            <Button size="sm" className="gap-2">
              <Plus className="h-4 w-4" /> New Lesson
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Students" value="142" subtitle="5 classes" icon={Users} iconColor="text-primary" />
        <StatCard title="Active Lessons" value="18" subtitle="this term" icon={BookOpen} iconColor="text-ai" />
        <StatCard title="Pending Reviews" value="7" trend={-3} trendLabel="3 less than yesterday" icon={ClipboardList} iconColor="text-xp" />
        <StatCard title="Class Avg" value="78%" trend={2} trendLabel="+2% vs last week" icon={TrendingUp} iconColor="text-primary" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {/* Class performance chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Class Average Scores</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                data={CLASS_PERFORMANCE}
                dataKey="avg"
                xKey="class"
                color="#1e5799"
                colorByValue
                maxColor="#10b981"
                height={180}
                showGrid
              />
            </CardContent>
          </Card>

          {/* Recent submissions */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Recent Submissions</CardTitle>
                <Link href="/teacher/assignments">
                  <Button variant="ghost" size="sm">View all</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {RECENT_SUBMISSIONS.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-xs font-bold font-label text-primary">
                    {s.student.split(' ')[0][0]}{s.student.split(' ')[1]?.[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-label font-semibold text-on-surface">{s.student}</p>
                    <p className="text-xs text-on-surface-variant truncate">{s.assignment} · {s.time}</p>
                  </div>
                  <Badge variant={s.grade >= 80 ? 'success' : s.grade >= 60 ? 'warning' : 'error'} size="sm">
                    {s.grade}%
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* AI Studio */}
          <Card className="border-ai/20 bg-ai/5">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-ai/20 flex items-center justify-center">
                  <Brain className="h-5 w-5 text-ai" />
                </div>
                <div>
                  <p className="font-label font-semibold text-on-surface text-sm">AI Lesson Studio</p>
                  <p className="text-xs text-on-surface-variant">Generate lessons & quizzes</p>
                </div>
              </div>
              <Link href="/teacher/ai-studio">
                <Button variant="ai" className="w-full" size="sm">Open Studio</Button>
              </Link>
            </CardContent>
          </Card>

          {/* My classes */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">My Classes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {['Year 9A — Maths', 'Year 9B — Maths', 'Year 10A — Maths', 'Year 10B — Maths', 'Year 11A — Maths'].map((c, i) => (
                <Link
                  key={i}
                  href={`/teacher/classes/${i + 1}`}
                  className="flex items-center justify-between py-2 border-b border-outline-variant last:border-0 hover:text-primary transition-colors"
                >
                  <span className="text-sm font-label text-on-surface">{c}</span>
                  <span className="text-xs text-on-surface-variant">28–30 students</span>
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
