'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { StatCard } from '@/components/shared/StatCard'
import { LineChart } from '@/components/shared/charts/LineChart'
import { BarChart } from '@/components/shared/charts/BarChart'
import { RadarChart } from '@/components/shared/charts/RadarChart'
import { Clock, TrendingUp, BookOpen, Award } from 'lucide-react'

const STUDY_HOURS = [
  { week: 'W1', hours: 12 }, { week: 'W2', hours: 15 }, { week: 'W3', hours: 10 },
  { week: 'W4', hours: 18 }, { week: 'W5', hours: 14 }, { week: 'W6', hours: 20 },
]

const QUIZ_SCORES = [
  { date: 'May 1', score: 72 }, { date: 'May 5', score: 78 }, { date: 'May 10', score: 82 },
  { date: 'May 15', score: 80 }, { date: 'May 18', score: 88 },
]

const SUBJECT_STRENGTHS = [
  { subject: 'Calculus', value: 82 }, { subject: 'Algebra', value: 75 },
  { subject: 'Chemistry', value: 68 }, { subject: 'Physics', value: 71 },
  { subject: 'CS', value: 90 },
]

export default function ScholarAnalyticsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-6 py-6 space-y-6">
      <div>
        <h1 className="font-display font-bold text-2xl text-on-surface">My Analytics</h1>
        <p className="text-sm text-on-surface-variant">Performance insights over the last 6 weeks</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Study Hours" value="89h" subtitle="past 6 weeks" icon={Clock} iconColor="text-primary" />
        <StatCard title="Quiz Average" value="82%" trend={6} trendLabel="+6% trend" icon={TrendingUp} iconColor="text-ai" />
        <StatCard title="Lessons Done" value="34" subtitle="this term" icon={BookOpen} iconColor="text-xp" />
        <StatCard title="Achievements" value="12" subtitle="earned" icon={Award} iconColor="text-primary" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle className="text-base">Weekly Study Hours</CardTitle></CardHeader>
          <CardContent>
            <BarChart data={STUDY_HOURS} dataKey="hours" xKey="week" height={180} showGrid />
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base">Quiz Score Trend</CardTitle></CardHeader>
          <CardContent>
            <LineChart
              data={QUIZ_SCORES}
              series={[{ key: 'score', label: 'Score %', color: '#10b981' }]}
              xKey="date"
              height={180}
              showGrid
            />
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader><CardTitle className="text-base">Subject Strengths</CardTitle></CardHeader>
          <CardContent>
            <RadarChart data={SUBJECT_STRENGTHS} height={220} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
