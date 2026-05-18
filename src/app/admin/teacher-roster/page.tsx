'use client'
import { TrendingUp, TrendingDown, Sparkles, Minus, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'

const METRICS = [
  { label: 'Total Faculty', value: '142', delta: '+2.4%', dir: 'up' },
  { label: 'Avg. Workload', value: '82%', delta: '-1.2%', dir: 'down' },
  { label: 'Burnout Risk (AI)', value: '3 Low', delta: 'Optimized', dir: 'flat' },
  { label: 'On Leave', value: '9', delta: 'Stable', dir: 'flat' },
]

const TEACHERS = [
  { initials: 'SJ', name: 'Sarah Jenkins', role: 'Senior Lead', dept: 'Science', subjects: 'AP Physics, Molecular Bio', workload: 92, status: 'Active', statusColor: 'bg-green-100 text-green-700' },
  { initials: 'MT', name: 'Marcus Thorne', role: 'Department Head', dept: 'Humanities', subjects: 'Ethics, World History', workload: 68, status: 'Active', statusColor: 'bg-green-100 text-green-700' },
  { initials: 'ER', name: 'Elena Rossi', role: 'Faculty Member', dept: 'Arts', subjects: 'Visual Arts, Digital Design', workload: 45, status: 'On Leave', statusColor: 'bg-amber-100 text-amber-700' },
  { initials: 'JV', name: 'Julian Vane', role: 'Research Lead', dept: 'Science', subjects: 'Chemistry, Theoretical Phys', workload: 88, status: 'Active', statusColor: 'bg-green-100 text-green-700' },
]

export default function AdminTeacherRosterPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="font-display font-bold text-2xl text-on-surface">Teacher Roster & Workload</h1>
        <p className="text-sm text-on-surface-variant mt-1">London Central Academy · Faculty management and AI burnout monitoring.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {METRICS.map(m => (
          <div key={m.label} className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-2">
            <p className="text-xs text-on-surface-variant">{m.label}</p>
            <p className="font-display font-bold text-3xl text-on-surface">{m.value}</p>
            <div className="flex items-center gap-1">
              {m.dir === 'up' && <TrendingUp className="h-3.5 w-3.5 text-green-500" />}
              {m.dir === 'down' && <TrendingDown className="h-3.5 w-3.5 text-amber-500" />}
              {m.dir === 'flat' && <Minus className="h-3.5 w-3.5 text-on-surface-variant" />}
              <span className={`text-xs font-semibold ${m.dir === 'up' ? 'text-green-600' : m.dir === 'down' ? 'text-amber-600' : 'text-on-surface-variant'}`}>{m.delta}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 flex-wrap">
        <select className="px-3 py-1.5 text-sm bg-surface-low border border-outline-variant rounded-xl outline-none">
          <option>All Departments</option>
          <option>Science</option>
          <option>Arts</option>
          <option>Humanities</option>
          <option>Technology</option>
        </select>
        <select className="px-3 py-1.5 text-sm bg-surface-low border border-outline-variant rounded-xl outline-none">
          <option>Any Status</option>
          <option>Active</option>
          <option>On Leave</option>
          <option>Sabbatical</option>
        </select>
        <span className="text-xs text-on-surface-variant ml-auto">Showing 142 teachers</span>
      </div>

      {/* Roster Table */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-surface-low border-b border-outline-variant">
              <tr className="text-xs text-on-surface-variant">
                <th className="text-left px-4 py-3 font-semibold">Teacher Name</th>
                <th className="text-left px-4 py-3 font-semibold">Department</th>
                <th className="text-left px-4 py-3 font-semibold">Primary Subjects</th>
                <th className="text-left px-4 py-3 font-semibold">Workload Score</th>
                <th className="text-left px-4 py-3 font-semibold">Status</th>
                <th className="text-left px-4 py-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {TEACHERS.map(t => (
                <tr key={t.name} className="border-b border-outline-variant last:border-0 hover:bg-surface-low">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">{t.initials}</div>
                      <div>
                        <p className="font-semibold text-on-surface">{t.name}</p>
                        <p className="text-xs text-on-surface-variant">{t.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-on-surface-variant">{t.dept}</td>
                  <td className="px-4 py-3 text-on-surface-variant text-xs">{t.subjects}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-20 bg-surface-high rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${t.workload >= 85 ? 'bg-red-500' : t.workload >= 70 ? 'bg-amber-500' : 'bg-green-500'}`} style={{ width: `${t.workload}%` }} />
                      </div>
                      <span className="text-xs font-bold text-on-surface">{t.workload}%</span>
                      {t.workload >= 85 && <Sparkles className="h-3 w-3 text-red-500" />}
                    </div>
                  </td>
                  <td className="px-4 py-3"><span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${t.statusColor}`}>{t.status}</span></td>
                  <td className="px-4 py-3">
                    <Button size="sm" variant="outline" className="h-7 text-xs gap-1"><Eye className="h-3 w-3" /> View</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-4 py-3 border-t border-outline-variant text-xs text-on-surface-variant">
          <span>Showing 4 of 142</span>
          <div className="flex gap-1">
            {['Previous', '1', '2', '3', '...', '12', 'Next'].map(p => (
              <button key={p} className={`px-2 py-1 rounded ${p === '1' ? 'bg-primary text-white' : 'hover:bg-surface-low'}`}>{p}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
