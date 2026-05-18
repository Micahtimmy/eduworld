'use client'
import { Sparkles, TrendingUp, TrendingDown, Minus, UserPlus, Megaphone, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const STUDENTS = [
  { initials: 'AL', name: 'Ava Lawrence', id: '#STU-8821', grade: '11th Grade', status: 'Active', photo: false },
  { initials: 'BH', name: 'Benjamin Hayes', id: '#STU-7490', grade: '10th Grade', status: 'At Risk', photo: false },
  { initials: 'CM', name: 'Chloe Martinez', id: '#STU-9102', grade: '12th Grade', status: 'Active', photo: false },
  { initials: 'DC', name: 'David Chen', id: '#STU-6544', grade: '9th Grade', status: 'On Leave', photo: false },
  { initials: 'EP', name: 'Elena Patel', id: '#STU-8899', grade: '11th Grade', status: 'Active', photo: false },
  { initials: 'FZ', name: 'Felix Zimmerman', id: '#STU-7102', grade: '10th Grade', status: 'Active', photo: false },
]

const STATUS_STYLES: Record<string, string> = {
  Active: 'bg-green-100 text-green-700',
  'At Risk': 'bg-red-100 text-red-700',
  'On Leave': 'bg-surface-high text-on-surface-variant',
}

export default function AdminDashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Admin Console</h1>
          <p className="text-sm text-on-surface-variant mt-1">System overview and critical metrics.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">System Normal</span>
          <div className="flex items-center gap-1.5 bg-ai/10 text-ai px-3 py-1.5 rounded-full">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="text-xs font-semibold">AI Assistant</span>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Students', value: '4,281', trend: TrendingUp, trendText: '+12 this week', color: 'text-green-600' },
          { label: 'Active Teachers', value: '342', trend: Minus, trendText: 'Stable', color: 'text-on-surface-variant' },
          { label: 'Attendance Rate', value: '94.2%', trend: TrendingDown, trendText: '-1.8% vs last month', color: 'text-red-600' },
          { label: '✦ AI Usage (Wkly)', value: '12.5k', trend: TrendingUp, trendText: '+24% interactions', color: 'text-green-600' },
        ].map(m => (
          <div key={m.label} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-2">
            <p className="text-xs text-on-surface-variant font-semibold">{m.label}</p>
            <p className="font-display font-bold text-2xl text-on-surface">{m.value}</p>
            <div className={`flex items-center gap-1 text-xs font-semibold ${m.color}`}>
              <m.trend className="h-3 w-3" />
              <span>{m.trendText}</span>
            </div>
          </div>
        ))}
      </div>

      {/* AI Insights */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-ai" />
          <h2 className="font-display font-semibold text-on-surface">EduWorld AI Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="border border-amber-200 bg-amber-50 rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-amber-500">⚠</span>
              <p className="text-sm font-semibold text-on-surface">Attendance Drop Alert</p>
            </div>
            <p className="text-xs text-on-surface-variant">Grade 10 cohort showing ~4.2% anomalous drop in unexcused absences, concentrated in afternoon STEM blocks.</p>
            <Button size="sm" className="h-7 text-xs gap-1.5">Investigate Cohort <ChevronRight className="h-3 w-3" /></Button>
          </div>
          <div className="border border-blue-200 bg-blue-50 rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-blue-500">📊</span>
              <p className="text-sm font-semibold text-on-surface">Overdue Assignments Surge</p>
            </div>
            <p className="text-xs text-on-surface-variant">15% spike in missed deadlines for History class. Automated parent notification suggested.</p>
            <div className="flex gap-2">
              <Button size="sm" className="h-7 text-xs">Draft Notices</Button>
              <Button size="sm" variant="outline" className="h-7 text-xs">Dismiss</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-3">
        <Button className="gap-1.5"><UserPlus className="h-4 w-4" /> Add Student</Button>
        <Button variant="outline" className="gap-1.5"><Megaphone className="h-4 w-4" /> Broadcast</Button>
      </div>

      {/* Student Directory */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
        <div className="p-4 border-b border-outline-variant flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Student Directory</h2>
          <button className="text-xs text-on-surface-variant hover:text-on-surface">⋯</button>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs text-on-surface-variant bg-surface-low border-b border-outline-variant">
              <th className="text-left px-4 py-3 font-semibold">Student Name</th>
              <th className="text-left px-4 py-3 font-semibold">ID</th>
              <th className="text-left px-4 py-3 font-semibold">Grade</th>
              <th className="text-left px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {STUDENTS.map(s => (
              <tr key={s.id} className="border-b border-outline-variant last:border-0 hover:bg-surface-low transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">{s.initials}</div>
                    <span className="font-semibold text-on-surface">{s.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-xs font-mono text-on-surface-variant">{s.id}</td>
                <td className="px-4 py-3 text-xs text-on-surface-variant">{s.grade}</td>
                <td className="px-4 py-3"><span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${STATUS_STYLES[s.status]}`}>{s.status}</span></td>
                <td className="px-4 py-3 text-right"><button className="text-xs text-on-surface-variant hover:text-on-surface">⋯</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 border-t border-outline-variant">
          <button className="text-xs text-primary hover:underline">View All Students</button>
        </div>
      </div>
    </div>
  )
}
