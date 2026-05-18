'use client'
import { Users, BookOpen, Brain, TrendingUp, PieChart, Briefcase, Award } from 'lucide-react'
import { StatCard } from '@/components/shared/StatCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LineChart } from '@/components/shared/charts/LineChart'
import { DonutChart } from '@/components/shared/charts/DonutChart'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const COMPLETION_TREND = [
  { month: 'Jan', rate: 62 }, { month: 'Feb', rate: 67 }, { month: 'Mar', rate: 71 },
  { month: 'Apr', rate: 74 }, { month: 'May', rate: 78 },
]

const COURSE_DISTRIBUTION = [
  { name: 'Leadership', value: 28, color: '#1e5799' },
  { name: 'Technical', value: 35, color: '#10b981' },
  { name: 'Compliance', value: 20, color: '#f59e0b' },
  { name: 'Soft Skills', value: 17, color: '#8b5cf6' },
]

const TOP_PERFORMERS = [
  { name: 'Sarah K.', dept: 'Engineering', completion: 95, courses: 12 },
  { name: 'James O.', dept: 'Product', completion: 91, courses: 10 },
  { name: 'Maya P.', dept: 'Design', completion: 88, courses: 9 },
]

export default function EnterpriseDashboard() {
  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-6 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">L&D Dashboard</h1>
          <p className="text-sm text-on-surface-variant">Acme Corp · Q2 2025</p>
        </div>
        <div className="flex gap-2">
          <Link href="/enterprise/ai-training">
            <Button size="sm" variant="ai" className="gap-2">
              <Brain className="h-4 w-4" /> AI Training
            </Button>
          </Link>
          <Button size="sm" variant="secondary">Export Report</Button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Employees" value="1,240" subtitle="enrolled" icon={Users} iconColor="text-primary" />
        <StatCard title="Completion Rate" value="78%" trend={4} trendLabel="+4% this quarter" icon={TrendingUp} iconColor="text-ai" />
        <StatCard title="Active Programs" value="14" subtitle="running now" icon={BookOpen} iconColor="text-xp" />
        <StatCard title="Certifications" value="342" trend={8} trendLabel="+8% this month" icon={Award} iconColor="text-primary" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader><CardTitle className="text-base">Completion Rate Trend</CardTitle></CardHeader>
            <CardContent>
              <LineChart
                data={COMPLETION_TREND}
                series={[{ key: 'rate', label: 'Completion %', color: '#1e5799' }]}
                xKey="month"
                height={180}
                showGrid
              />
            </CardContent>
          </Card>

          {/* Top performers */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Top Performers</CardTitle>
                <Link href="/enterprise/employees">
                  <Button variant="ghost" size="sm">View all</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {TOP_PERFORMERS.map((emp, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold font-label text-primary shrink-0">
                    {emp.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-label font-semibold text-on-surface">{emp.name}</p>
                    <p className="text-xs text-on-surface-variant">{emp.dept} · {emp.courses} courses</p>
                  </div>
                  <Badge variant="success" size="sm">{emp.completion}%</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          {/* Course distribution */}
          <Card>
            <CardHeader><CardTitle className="text-sm">Course Distribution</CardTitle></CardHeader>
            <CardContent>
              <DonutChart
                data={COURSE_DISTRIBUTION}
                height={160}
                centerLabel="Courses"
                centerValue="14"
                showLegend
              />
            </CardContent>
          </Card>

          {/* AI Training */}
          <Card className="border-ai/20 bg-ai/5">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-ai/20 flex items-center justify-center">
                  <Brain className="h-5 w-5 text-ai" />
                </div>
                <div>
                  <p className="font-label font-semibold text-on-surface text-sm">AI-Powered Training</p>
                  <p className="text-xs text-on-surface-variant">Personalised for each employee</p>
                </div>
              </div>
              <Link href="/enterprise/ai-training">
                <Button variant="ai" className="w-full" size="sm">Manage Programs</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
