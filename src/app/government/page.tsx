'use client'
import { Building2, GraduationCap, TrendingUp, Globe, BookOpen, Users, Shield } from 'lucide-react'
import { StatCard } from '@/components/shared/StatCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LineChart } from '@/components/shared/charts/LineChart'
import { BarChart } from '@/components/shared/charts/BarChart'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const NATIONAL_TREND = [
  { month: 'Jan', rate: 78 }, { month: 'Feb', rate: 79 }, { month: 'Mar', rate: 81 },
  { month: 'Apr', rate: 82 }, { month: 'May', rate: 84 },
]

const DISTRICT_PERFORMANCE = [
  { district: 'North', avg: 84 }, { district: 'South', avg: 79 },
  { district: 'East', avg: 88 }, { district: 'West', avg: 72 },
  { district: 'Central', avg: 82 },
]

export default function GovernmentDashboard() {
  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-6 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">National Education Overview</h1>
          <p className="text-sm text-on-surface-variant">Ministry of Education · Academic Year 2024/25</p>
        </div>
        <Button size="sm" variant="secondary">Export Data</Button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Schools" value="2,847" trend={2} trendLabel="+52 this year" icon={Building2} iconColor="text-primary" />
        <StatCard title="Enrolled Students" value="1.2M" trend={3} trendLabel="+3% YoY" icon={GraduationCap} iconColor="text-ai" />
        <StatCard title="Literacy Rate" value="84%" trend={2} trendLabel="+2% vs last year" icon={BookOpen} iconColor="text-xp" />
        <StatCard title="Districts" value="47" subtitle="all monitored" icon={Globe} iconColor="text-primary" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle className="text-base">National Literacy Rate Trend</CardTitle></CardHeader>
          <CardContent>
            <LineChart
              data={NATIONAL_TREND}
              series={[{ key: 'rate', label: 'Literacy Rate (%)', color: '#1e5799' }]}
              xKey="month"
              height={200}
              showGrid
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base">Performance by District</CardTitle></CardHeader>
          <CardContent>
            <BarChart data={DISTRICT_PERFORMANCE} dataKey="avg" xKey="district" height={200} colorByValue showGrid />
          </CardContent>
        </Card>
      </div>

      {/* Quick navigation */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { label: 'All Districts', href: '/government/districts', icon: Globe, desc: '47 districts monitored' },
          { label: 'Schools', href: '/government/schools', icon: Building2, desc: '2,847 registered' },
          { label: 'Curriculum', href: '/government/curriculum', icon: BookOpen, desc: 'National standards' },
          { label: 'Performance', href: '/government/performance', icon: TrendingUp, desc: 'Analysis & insights' },
          { label: 'Compliance', href: '/government/compliance', icon: Shield, desc: '94% compliance rate' },
          { label: 'Reports', href: '/government/reports', icon: Users, desc: 'Download & share' },
        ].map(item => (
          <Link key={item.href} href={item.href}>
            <Card interactive>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-label font-semibold text-on-surface text-sm">{item.label}</p>
                    <p className="text-xs text-on-surface-variant">{item.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
