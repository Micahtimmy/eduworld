'use client'
import { useState } from 'react'
import { Download, UserPlus, MessageSquare, History, Eye, TrendingUp } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const STATS = [
  { icon: '👥', label: 'Total Students', value: '28' },
  { icon: '🏆', label: 'Class Average', value: '87.4%', sub: '+1.2%' },
  { icon: '📅', label: 'Avg. Attendance', value: '94.2%' },
]

const STUDENTS = [
  { id: '94821', name: 'Alex Carter', status: 'On Track', grade: '92%', gradeLabel: 'A-', attendance: '98%', statusVariant: 'success' as const },
  { id: '94822', name: 'Mia Sharma', status: '✦ High Achiever', grade: '98%', gradeLabel: 'A+', attendance: '100%', statusVariant: 'warning' as const },
  { id: '94823', name: 'Jordan Lee', status: 'At Risk', grade: '68%', gradeLabel: 'D+', attendance: '75%', statusVariant: 'destructive' as const },
  { id: '94824', name: 'Emma Patel', status: 'On Track', grade: '85%', gradeLabel: 'B+', attendance: '92%', statusVariant: 'success' as const },
  { id: '94825', name: 'Lucas Kim', status: 'On Track', grade: '79%', gradeLabel: 'C+', attendance: '88%', statusVariant: 'success' as const },
]

const TABS = ['All Students', 'At Risk', 'High Achievers']

export default function ClassRosterPage() {
  const [activeTab, setActiveTab] = useState('All Students')

  const filtered = activeTab === 'At Risk'
    ? STUDENTS.filter(s => s.status === 'At Risk')
    : activeTab === 'High Achievers'
    ? STUDENTS.filter(s => s.status.includes('High Achiever'))
    : STUDENTS

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">AP Physics — Section A</h1>
          <p className="text-sm text-on-surface-variant mt-1">Room 302 · Fall Semester 2024</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" /> Export Attendance
          </Button>
          <Button size="sm" className="gap-2">
            <UserPlus className="h-4 w-4" /> Add Student
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {STATS.map(s => (
          <div key={s.label} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 flex items-center gap-3">
            <span className="text-2xl">{s.icon}</span>
            <div>
              <p className="text-xs text-on-surface-variant">{s.label}</p>
              <p className="font-display font-bold text-xl text-on-surface">{s.value}</p>
              {s.sub && <p className="text-xs text-green-600 font-medium">{s.sub}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Student Table */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <div className="flex gap-1">
            {TABS.map(t => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={cn('px-3 py-1.5 rounded-full text-xs font-medium transition-colors', activeTab === t ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-low')}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 text-xs text-on-surface-variant border border-outline-variant rounded-lg px-3 py-1.5 hover:bg-surface-low">
              More Filters
            </button>
            <div className="flex rounded-lg overflow-hidden border border-outline-variant">
              <button className="px-3 py-1.5 text-xs bg-primary text-white">List</button>
              <button className="px-3 py-1.5 text-xs text-on-surface-variant hover:bg-surface-low">Seating</button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-outline-variant">
                {['Student', 'Status', 'Grade', 'Attendance', 'Actions'].map(h => (
                  <th key={h} className="text-left pb-2 text-xs font-semibold uppercase text-on-surface-variant pr-4 last:pr-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {filtered.map(s => (
                <tr key={s.id} className="hover:bg-surface-low transition-colors">
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-3">
                      <Avatar size="sm">
                        <AvatarFallback>{s.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold text-on-surface">{s.name}</p>
                        <p className="text-xs text-on-surface-variant">ID: {s.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 pr-4">
                    <Badge variant={s.statusVariant} size="sm">{s.status}</Badge>
                  </td>
                  <td className="py-3 pr-4">
                    <p className="text-sm font-semibold text-on-surface">{s.grade}</p>
                    <p className="text-xs text-on-surface-variant">{s.gradeLabel}</p>
                  </td>
                  <td className="py-3 pr-4">
                    <p className="text-sm text-on-surface">{s.attendance}</p>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 rounded-lg hover:bg-surface-low text-on-surface-variant"><MessageSquare className="h-4 w-4" /></button>
                      <button className="p-1.5 rounded-lg hover:bg-surface-low text-on-surface-variant"><History className="h-4 w-4" /></button>
                      <button className="p-1.5 rounded-lg hover:bg-surface-low text-on-surface-variant"><Eye className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
