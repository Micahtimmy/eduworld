'use client'
import { useState } from 'react'
import { Search } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { BarChart } from '@/components/shared/charts/BarChart'

const STUDENTS = [
  { id: 's1', name: 'Amara Kofi', class: '9A', avg: 94, trend: 3, submissions: 12, lastActive: '2h ago' },
  { id: 's2', name: 'Jide Okafor', class: '9A', avg: 71, trend: -2, submissions: 10, lastActive: '1d ago' },
  { id: 's3', name: 'Priya Sharma', class: '9B', avg: 88, trend: 5, submissions: 13, lastActive: '30m ago' },
  { id: 's4', name: 'Luis García', class: '10A', avg: 65, trend: -5, submissions: 8, lastActive: '3d ago' },
  { id: 's5', name: 'Mei Chen', class: '10B', avg: 91, trend: 2, submissions: 14, lastActive: '1h ago' },
]

const GRADE_DIST = [
  { range: 'A (90+)', count: 12 }, { range: 'B (80-89)', count: 28 },
  { range: 'C (70-79)', count: 35 }, { range: 'D (60-69)', count: 18 }, { range: 'F (<60)', count: 7 },
]

export default function TeacherProgressPage() {
  const [search, setSearch] = useState('')
  const [classFilter, setClassFilter] = useState('all')

  const filtered = STUDENTS.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) &&
    (classFilter === 'all' || s.class === classFilter)
  )

  return (
    <div className="max-w-5xl mx-auto px-4 lg:px-6 py-6 space-y-6">
      <div>
        <h1 className="font-display font-bold text-2xl text-on-surface">Student Progress</h1>
        <p className="text-sm text-on-surface-variant">Track performance across all your classes</p>
      </div>

      {/* Grade distribution chart */}
      <Card>
        <CardHeader><CardTitle className="text-base">Grade Distribution</CardTitle></CardHeader>
        <CardContent>
          <BarChart data={GRADE_DIST} dataKey="count" xKey="range" height={160} showGrid />
        </CardContent>
      </Card>

      {/* Filters */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search students..."
            className="w-full h-10 pl-9 pr-4 rounded-xl border border-outline-variant bg-surface-lowest text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 font-body"
          />
        </div>
        <Select onValueChange={setClassFilter}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="All classes" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All classes</SelectItem>
            {['9A', '9B', '10A', '10B', '11A'].map(c => (
              <SelectItem key={c} value={c}>{c}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Student list */}
      <div className="space-y-2">
        {filtered.map(student => (
          <Card key={student.id}>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold font-label text-primary shrink-0">
                  {student.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-label font-semibold text-on-surface text-sm">{student.name}</p>
                    <Badge variant="neutral" size="sm">{student.class}</Badge>
                    <span className="text-xs text-on-surface-variant">Last active: {student.lastActive}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-1.5">
                    <Progress value={student.avg} size="sm" className="w-32" />
                    <span className="text-xs font-label font-semibold text-on-surface">{student.avg}%</span>
                    <Badge variant={student.trend > 0 ? 'success' : 'error'} size="sm">
                      {student.trend > 0 ? '+' : ''}{student.trend}%
                    </Badge>
                  </div>
                </div>
                <p className="text-xs text-on-surface-variant shrink-0">{student.submissions} submitted</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
