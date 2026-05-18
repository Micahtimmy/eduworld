'use client'
import { Sparkles, Download, UserPlus } from 'lucide-react'
import { Button } from '@/components/ui/button'

const STUDENTS = [
  { name: 'Alex Carter', id: 'STU-001', status: 'On Track', statusColor: 'green', avg: 92, attendance: '98%', lastActive: '2h ago' },
  { name: 'Mia Sharma', id: 'STU-002', status: 'High Achiever', statusColor: 'blue', avg: 98, attendance: '100%', lastActive: '1h ago' },
  { name: 'Jordan Lee', id: 'STU-003', status: 'At Risk', statusColor: 'red', avg: 68, attendance: '82%', lastActive: '3d ago' },
  { name: 'Priya Nair', id: 'STU-004', status: 'On Track', statusColor: 'green', avg: 85, attendance: '95%', lastActive: '5h ago' },
  { name: 'Ethan Brooks', id: 'STU-005', status: 'On Track', statusColor: 'green', avg: 79, attendance: '91%', lastActive: '1d ago' },
]

const STATUS_COLORS: Record<string, string> = {
  green: 'bg-green-100 text-green-700',
  blue: 'bg-blue-100 text-blue-700',
  red: 'bg-red-100 text-red-700',
}

export default function TeacherClassroomPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">AP Physics — Section A</h1>
          <p className="text-sm text-on-surface-variant mt-1">Grade 11 · Fall 2024 · Room 204 · Mon/Wed/Fri 9:00–10:30 AM</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1.5"><Download className="h-3.5 w-3.5" /> Export</Button>
          <Button size="sm" className="gap-1.5"><UserPlus className="h-3.5 w-3.5" /> Add Student</Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Students', value: '28' },
          { label: 'Class Average', value: '87.4%' },
          { label: 'Attendance Rate', value: '94.2%' },
          { label: 'Assignments Due', value: '3' },
        ].map(s => (
          <div key={s.label} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 text-center">
            <p className="font-display font-bold text-2xl text-on-surface">{s.value}</p>
            <p className="text-xs text-on-surface-variant mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* AI Banner */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 flex items-start gap-3">
        <Sparkles className="h-4 w-4 text-ai mt-0.5 shrink-0" />
        <div className="flex-1">
          <p className="text-sm font-semibold text-on-surface">AI Insight: 3 students showing early signs of struggle in Unit 4 — Electromagnetic Waves.</p>
          <p className="text-xs text-on-surface-variant mt-1">Jordan Lee, Marcus Chan, and Taylor Kim are scoring below 70% on recent quick checks. Consider targeted intervention.</p>
        </div>
        <Button size="sm" variant="outline" className="h-7 text-xs shrink-0">Review</Button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 flex-wrap">
        {['All Students', 'At Risk', 'High Achievers', 'Absent Today'].map((tab, i) => (
          <button key={tab} className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${i === 0 ? 'bg-primary text-white' : 'bg-surface-low text-on-surface-variant hover:bg-surface-high'}`}>{tab}</button>
        ))}
      </div>

      {/* Student Table */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs text-on-surface-variant border-b border-outline-variant bg-surface-low">
              <th className="text-left px-4 py-3 font-semibold">Student</th>
              <th className="text-left px-4 py-3 font-semibold">Status</th>
              <th className="text-right px-4 py-3 font-semibold">Avg Score</th>
              <th className="text-right px-4 py-3 font-semibold">Attendance</th>
              <th className="text-right px-4 py-3 font-semibold">Last Active</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {STUDENTS.map(s => (
              <tr key={s.id} className="border-b border-outline-variant last:border-0 hover:bg-surface-low transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                      {s.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-on-surface">{s.name}</p>
                      <p className="text-xs text-on-surface-variant">{s.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${STATUS_COLORS[s.statusColor]}`}>{s.status}</span>
                </td>
                <td className="px-4 py-3 text-right">
                  <span className={`font-bold ${s.avg >= 90 ? 'text-green-600' : s.avg >= 75 ? 'text-on-surface' : 'text-red-600'}`}>{s.avg}%</span>
                </td>
                <td className="px-4 py-3 text-right text-on-surface-variant">{s.attendance}</td>
                <td className="px-4 py-3 text-right text-xs text-on-surface-variant">{s.lastActive}</td>
                <td className="px-4 py-3 text-right">
                  <button className="text-xs text-primary hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
