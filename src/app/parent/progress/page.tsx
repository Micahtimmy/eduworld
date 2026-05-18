'use client'
import { MobileTopBar } from '@/components/shared/navigation/TopBar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { LineChart } from '@/components/shared/charts/LineChart'
import { RadarChart } from '@/components/shared/charts/RadarChart'

const WEEKLY_XP = [
  { day: 'Mon', kofi: 30, ama: 80 }, { day: 'Tue', kofi: 50, ama: 60 },
  { day: 'Wed', kofi: 20, ama: 90 }, { day: 'Thu', kofi: 70, ama: 40 },
  { day: 'Fri', kofi: 40, ama: 75 }, { day: 'Sat', kofi: 60, ama: 30 },
  { day: 'Sun', kofi: 80, ama: 55 },
]

const KOFI_SUBJECTS = [
  { subject: 'Maths', value: 82 }, { subject: 'English', value: 90 },
  { subject: 'Science', value: 75 }, { subject: 'Art', value: 65 },
]

const AMA_SUBJECTS = [
  { subject: 'Physics', value: 76 }, { subject: 'Chemistry', value: 82 },
  { subject: 'Maths', value: 70 }, { subject: 'English', value: 88 },
]

export default function ParentProgressPage() {
  return (
    <div>
      <MobileTopBar title="Progress Overview" showBack />
      <div className="px-4 py-4 space-y-6">
        {/* Weekly XP comparison */}
        <Card>
          <CardHeader><CardTitle className="text-sm">Weekly XP Earned</CardTitle></CardHeader>
          <CardContent>
            <LineChart
              data={WEEKLY_XP}
              series={[
                { key: 'kofi', label: 'Kofi', color: '#1e5799' },
                { key: 'ama', label: 'Ama', color: '#10b981' },
              ]}
              xKey="day"
              height={180}
              showLegend
            />
          </CardContent>
        </Card>

        {/* Per child subject radar */}
        {[
          { name: 'Kofi Mensah', subjects: KOFI_SUBJECTS, color: '#1e5799' },
          { name: 'Ama Mensah', subjects: AMA_SUBJECTS, color: '#10b981' },
        ].map(child => (
          <Card key={child.name}>
            <CardHeader>
              <CardTitle className="text-sm">{child.name} — Subject Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <RadarChart data={child.subjects} height={200} color={child.color} />
              <div className="mt-3 space-y-2">
                {child.subjects.map(s => (
                  <div key={s.subject} className="flex items-center gap-3">
                    <span className="text-xs font-label font-semibold text-on-surface w-20 shrink-0">{s.subject}</span>
                    <Progress value={s.value} size="sm" className="flex-1" />
                    <span className="text-xs font-label text-on-surface-variant w-8 text-right">{s.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
