'use client'
import { useState } from 'react'
import { Search, Download, UserPlus, Eye, ChevronLeft, ChevronRight, TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const TEACHERS = [
  { id: 1, name: 'Sarah Jenkins', role: 'Senior Lead', dept: 'Science', subjects: 'AP Physics, Molecular Bio', workload: 92, status: 'Active' },
  { id: 2, name: 'Marcus Thorne', role: 'Department Head', dept: 'Humanities', subjects: 'Ethics, World History', workload: 68, status: 'Active' },
  { id: 3, name: 'Elena Rossi', role: 'Faculty Member', dept: 'Arts', subjects: 'Visual Arts, Digital Design', workload: 45, status: 'On Leave' },
  { id: 4, name: 'Julian Vane', role: 'Research Lead', dept: 'Science', subjects: 'Chemistry, Theoretical Physics', workload: 88, status: 'Active' },
  { id: 5, name: 'Priya Sharma', role: 'Faculty Member', dept: 'Mathematics', subjects: 'Calculus, Statistics', workload: 74, status: 'Active' },
  { id: 6, name: 'Derek Owens', role: 'Senior Lead', dept: 'Technology', subjects: 'Computer Science, Robotics', workload: 61, status: 'Active' },
]

const STATS = [
  { label: 'Total Faculty', value: '142', trend: '+2.4%', up: true, icon: '🎓' },
  { label: 'Avg. Workload', value: '82%', trend: '-1.2%', up: false, icon: '⏳' },
  { label: 'Burnout Risk (AI)', value: '3 Low', trend: 'Optimized', up: null, icon: '✦' },
  { label: 'On Leave', value: '9', trend: 'Stable', up: null, icon: '📅' },
]

function getWorkloadColor(w: number) {
  if (w >= 86) return 'bg-red-500'
  if (w >= 70) return 'bg-amber-500'
  return 'bg-green-500'
}

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2)
}

export default function AdminTeachersPage() {
  const [search, setSearch] = useState('')
  const [dept, setDept] = useState('All')
  const [status, setStatus] = useState('Any')
  const [selected, setSelected] = useState<typeof TEACHERS[0] | null>(null)

  const filtered = TEACHERS.filter(t => {
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase())
    const matchDept = dept === 'All' || t.dept === dept
    const matchStatus = status === 'Any' || t.status === status
    return matchSearch && matchDept && matchStatus
  })

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Teacher Roster & Workload</h1>
          <p className="text-sm text-on-surface-variant mt-1">Live monitoring of instructional capacity across 12 departments.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" /> Export Report
          </Button>
          <Button size="sm" className="gap-2">
            <UserPlus className="h-4 w-4" /> Onboard Teacher
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map(s => (
          <div key={s.label} className="bg-surface-lowest rounded-xl border border-outline-variant p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-lg">{s.icon}</div>
            <div>
              <p className="font-display font-bold text-xl text-on-surface">{s.value}</p>
              <p className="text-xs text-on-surface-variant">{s.label}</p>
              {s.up === true && <span className="text-xs text-green-600 flex items-center gap-0.5"><TrendingUp className="h-3 w-3" />{s.trend}</span>}
              {s.up === false && <span className="text-xs text-red-500 flex items-center gap-0.5"><TrendingDown className="h-3 w-3" />{s.trend}</span>}
              {s.up === null && <span className="text-xs text-on-surface-variant flex items-center gap-0.5"><Minus className="h-3 w-3" />{s.trend}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-48">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant" />
          <input
            className="w-full pl-9 pr-3 py-2 text-sm bg-surface-low border border-outline-variant rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 text-on-surface"
            placeholder="Search teachers..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <select
          className="px-3 py-2 text-sm bg-surface-low border border-outline-variant rounded-xl text-on-surface focus:outline-none"
          value={dept}
          onChange={e => setDept(e.target.value)}
        >
          {['All', 'Science', 'Arts', 'Humanities', 'Technology', 'Mathematics'].map(d => (
            <option key={d}>{d}</option>
          ))}
        </select>
        <select
          className="px-3 py-2 text-sm bg-surface-low border border-outline-variant rounded-xl text-on-surface focus:outline-none"
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          {['Any', 'Active', 'On Leave', 'Sabbatical'].map(s => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <span className="text-sm text-on-surface-variant">Showing {filtered.length} teachers</span>
      </div>

      {/* Table */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="text-left px-4 py-3 text-xs font-semibold uppercase text-on-surface-variant">Teacher</th>
                <th className="text-left px-4 py-3 text-xs font-semibold uppercase text-on-surface-variant">Department</th>
                <th className="text-left px-4 py-3 text-xs font-semibold uppercase text-on-surface-variant hidden md:table-cell">Primary Subjects</th>
                <th className="text-left px-4 py-3 text-xs font-semibold uppercase text-on-surface-variant">Workload</th>
                <th className="text-left px-4 py-3 text-xs font-semibold uppercase text-on-surface-variant">Status</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {filtered.map(t => (
                <tr key={t.id} className="hover:bg-surface-low transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <Avatar size="sm">
                        <AvatarFallback>{getInitials(t.name)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold text-on-surface">{t.name}</p>
                        <p className="text-xs text-on-surface-variant">{t.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-on-surface">{t.dept}</td>
                  <td className="px-4 py-3 text-sm text-on-surface-variant hidden md:table-cell">{t.subjects}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 min-w-24">
                      <div className="flex-1 h-2 bg-surface-high rounded-full overflow-hidden">
                        <div className={cn('h-full rounded-full transition-all', getWorkloadColor(t.workload))} style={{ width: `${t.workload}%` }} />
                      </div>
                      <span className={cn('text-xs font-semibold', t.workload >= 86 ? 'text-red-500' : t.workload >= 70 ? 'text-amber-500' : 'text-green-600')}>{t.workload}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={t.status === 'Active' ? 'success' : 'warning'} size="sm">{t.status}</Badge>
                  </td>
                  <td className="px-4 py-3">
                    <button onClick={() => setSelected(t)} className="p-1.5 rounded-lg hover:bg-surface-high text-on-surface-variant">
                      <Eye className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-outline-variant">
          <button className="flex items-center gap-1 text-sm text-on-surface-variant hover:text-on-surface px-2 py-1 rounded-lg hover:bg-surface-low">
            <ChevronLeft className="h-4 w-4" /> Previous
          </button>
          <div className="flex items-center gap-1">
            {[1, 2, 3].map(p => (
              <button key={p} className={cn('w-8 h-8 rounded-lg text-sm font-medium', p === 1 ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-low')}>
                {p}
              </button>
            ))}
            <span className="px-1 text-on-surface-variant">…</span>
            <button className="w-8 h-8 rounded-lg text-sm font-medium text-on-surface-variant hover:bg-surface-low">12</button>
          </div>
          <button className="flex items-center gap-1 text-sm text-on-surface-variant hover:text-on-surface px-2 py-1 rounded-lg hover:bg-surface-low">
            Next <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Teacher Detail Drawer */}
      {selected && (
        <>
          <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setSelected(null)} />
          <div className="fixed right-0 top-0 h-full w-80 lg:w-96 bg-surface-lowest z-50 shadow-2xl overflow-y-auto">
            <div className="p-6 space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="font-display font-bold text-lg text-on-surface">Teacher Profile</h2>
                <button onClick={() => setSelected(null)} className="p-1 rounded-lg hover:bg-surface-high text-on-surface-variant">✕</button>
              </div>

              <div className="flex flex-col items-center text-center pt-2">
                <Avatar size="xl">
                  <AvatarFallback>{getInitials(selected.name)}</AvatarFallback>
                </Avatar>
                <h3 className="font-display font-bold text-xl text-on-surface mt-3">{selected.name}</h3>
                <p className="text-sm text-on-surface-variant">{selected.role} • {selected.dept} Department</p>
              </div>

              {selected.workload >= 85 && (
                <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-red-700 dark:text-red-400 flex items-center gap-1.5">✦ AI Burnout Risk Assessment</span>
                    <Badge variant="destructive" size="sm">High Priority</Badge>
                  </div>
                  <p className="font-bold text-red-700 dark:text-red-400 text-sm">Risk Score Critical ({selected.workload}%)</p>
                  <p className="text-xs text-red-600 dark:text-red-500 italic">Instructional hours have exceeded the 40-hour threshold for the third consecutive week.</p>
                  <Button size="sm" variant="outline" className="border-red-300 text-red-700 w-full">✦ Adjust Schedule</Button>
                </div>
              )}

              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-on-surface">Weekly Timetable</h4>
                {[
                  { day: 'Mon', slots: ['09:00–10:30 — AP Physics Lab • Room 402', '13:00–14:30 — Molecular Bio • Room 108'] },
                  { day: 'Tue', slots: [] },
                  { day: 'Wed', slots: ['10:00–11:30 — Faculty Meeting • Conf A'] },
                ].map(d => (
                  <div key={d.day}>
                    <p className="text-xs font-semibold text-on-surface-variant mb-1">{d.day}</p>
                    {d.slots.length === 0
                      ? <p className="text-xs text-on-surface-variant italic pl-2">Planning & Research Blocks</p>
                      : d.slots.map(s => (
                        <div key={s} className="text-xs bg-surface-low border-l-2 border-primary pl-2 py-1 rounded-r mb-1 text-on-surface">{s}</div>
                      ))
                    }
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-on-surface">Competency Map</h4>
                <div className="flex flex-wrap gap-2">
                  {['Quantum Mechanics', 'Data Science', 'Laboratory Safety', 'Curriculum Design'].map(c => (
                    <span key={c} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">{c}</span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">Message</Button>
                <Button size="sm" className="flex-1">Edit Profile</Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
