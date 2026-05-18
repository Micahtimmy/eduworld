'use client'
import { Users, GraduationCap, BookOpen, TrendingUp, UserCheck, AlertTriangle } from 'lucide-react'
import { useUser } from '@/hooks/use-user'
import { StatCard } from '@/components/shared/StatCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LineChart } from '@/components/shared/charts/LineChart'
import { BarChart } from '@/components/shared/charts/BarChart'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const ENROLLMENT_TREND = [
  { month: 'Jan', students: 320 }, { month: 'Feb', students: 335 },
  { month: 'Mar', students: 342 }, { month: 'Apr', students: 356 },
  { month: 'May', students: 378 },
]

const CLASS_SIZES = [
  { class: '7A', students: 32 }, { class: '7B', students: 28 }, { class: '8A', students: 30 },
  { class: '8B', students: 27 }, { class: '9A', students: 29 }, { class: '9B', students: 31 },
]

const ALERTS = [
  { type: 'warning', message: '3 students have <50% attendance this week', time: '1h ago' },
  { type: 'info', message: 'New curriculum update available for Year 10 Maths', time: '3h ago' },
  { type: 'error', message: '2 teacher accounts are inactive', time: '1d ago' },
]

export default function AdminDashboard() {
  const { profile } = useUser()
  const firstName = profile?.full_name?.split(' ')[0] ?? 'Admin'

  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-6 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">School Overview</h1>
          <p className="text-sm text-on-surface-variant">Welcome back, {firstName}</p>
        </div>
        <Link href="/admin/reports">
          <Button size="sm" variant="secondary">Download Report</Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Students" value="378" trend={3} trendLabel="+22 this month" icon={GraduationCap} iconColor="text-primary" />
        <StatCard title="Teachers" value="24" subtitle="2 pending approval" icon={UserCheck} iconColor="text-ai" />
        <StatCard title="Avg Attendance" value="91%" trend={1} trendLabel="+1% vs last week" icon={TrendingUp} iconColor="text-xp" />
        <StatCard title="Active Classes" value="18" subtitle="this term" icon={BookOpen} iconColor="text-primary" />
      </div>

      {/* Alerts */}
      {ALERTS.length > 0 && (
        <div className="space-y-2">
          {ALERTS.map((alert, i) => (
            <div key={i} className={`flex items-center gap-3 p-3 rounded-xl border ${
              alert.type === 'error' ? 'bg-red-50 border-red-200' :
              alert.type === 'warning' ? 'bg-amber-50 border-amber-200' :
              'bg-blue-50 border-blue-200'
            }`}>
              <AlertTriangle className={`h-4 w-4 shrink-0 ${
                alert.type === 'error' ? 'text-red-500' :
                alert.type === 'warning' ? 'text-amber-500' : 'text-blue-500'
              }`} />
              <p className="text-sm font-label text-on-surface flex-1">{alert.message}</p>
              <span className="text-xs text-on-surface-variant">{alert.time}</span>
            </div>
          ))}
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle className="text-base">Student Enrollment Trend</CardTitle></CardHeader>
          <CardContent>
            <LineChart
              data={ENROLLMENT_TREND}
              series={[{ key: 'students', label: 'Students', color: '#1e5799' }]}
              xKey="month"
              height={200}
              showGrid
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base">Class Sizes</CardTitle></CardHeader>
          <CardContent>
            <BarChart data={CLASS_SIZES} dataKey="students" xKey="class" height={200} showGrid />
          </CardContent>
        </Card>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: 'Add Student', href: '/admin/students/new', icon: GraduationCap },
          { label: 'Add Teacher', href: '/admin/teachers/new', icon: UserCheck },
          { label: 'Create Class', href: '/admin/classes/new', icon: Users },
          { label: 'View Reports', href: '/admin/reports', icon: TrendingUp },
        ].map(item => (
          <Link key={item.href} href={item.href}>
            <Card interactive>
              <CardContent className="p-4 flex items-center gap-3">
                <item.icon className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-label font-semibold text-on-surface">{item.label}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
