'use client'
import { Sparkles, Play, CheckCircle, Lock, ChevronRight, User, Clock, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const LECTURES = [
  { id: 12, title: 'Lec 12: Phasor Analysis & AC Circuits', duration: '52 min', status: 'Live', date: 'Oct 24, 2023' },
  { id: 11, title: 'Lec 11: Impedance & Frequency Response', duration: '48 min', status: 'Completed', date: 'Oct 22, 2023', score: 91 },
  { id: 10, title: 'Lec 10: Resonance in RLC Circuits', duration: '45 min', status: 'Completed', date: 'Oct 19, 2023', score: 87 },
  { id: 13, title: 'Lec 13: Op-Amps — Part 1', duration: '55 min', status: 'Upcoming', date: 'Oct 26, 2023' },
]

const ASSIGNMENTS = [
  { title: 'Problem Set 12', due: 'Oct 25, 2023', status: 'Due Today', score: null },
  { title: 'Lab Report 4', due: 'Oct 28, 2023', status: 'Upcoming', score: null },
  { title: 'Midterm Reflection', due: 'Oct 18, 2023', status: 'Graded', score: 94 },
  { title: 'Problem Set 11', due: 'Oct 16, 2023', status: 'Graded', score: 88 },
]

export default function ScholarCourseDetailPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-on-surface-variant">
        <button className="hover:text-primary">My Courses</button>
        <ChevronRight className="h-3 w-3" />
        <span className="text-on-surface font-semibold">EE-301</span>
      </div>

      <div className="flex items-start justify-between">
        <div>
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">EE-301</span>
          <h1 className="font-display font-bold text-2xl text-on-surface mt-2">Advanced Circuit Analysis</h1>
          <p className="text-sm text-on-surface-variant mt-1">Electrical Engineering · 3 Credit Hours · Fall 2023</p>
        </div>
        <Button className="gap-2 bg-ai hover:bg-ai/90"><Sparkles className="h-4 w-4" /> AI Study Assistant</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Progress Panel */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Course Progress</h2>
          <div className="text-center py-2">
            <p className="font-display font-bold text-4xl text-primary">68%</p>
            <p className="text-xs text-on-surface-variant mt-1">Overall Completion</p>
          </div>
          <div className="h-2.5 bg-surface-high rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: '68%' }} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[{ label: 'Modules', value: '5 / 8' }, { label: 'Assignments', value: '12 / 15' }, { label: 'Avg Grade', value: '89%' }, { label: 'Attendance', value: '93%' }].map(s => (
              <div key={s.label} className="text-center p-3 bg-surface-low rounded-xl">
                <p className="font-bold text-sm text-on-surface">{s.value}</p>
                <p className="text-xs text-on-surface-variant">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Instructor Card */}
          <div className="pt-2 border-t border-outline-variant">
            <p className="text-xs font-semibold text-on-surface-variant mb-2">Instructor</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">AT</div>
              <div>
                <p className="text-sm font-semibold text-on-surface">Dr. Alan Turing</p>
                <p className="text-xs text-on-surface-variant">alan.turing@university.edu</p>
              </div>
            </div>
            <button className="text-xs text-primary hover:underline mt-2">Send Message</button>
          </div>
        </div>

        {/* Lecture Schedule */}
        <div className="lg:col-span-2 bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-semibold text-on-surface">Lecture Schedule</h2>
            <button className="text-xs text-primary hover:underline">Full Calendar</button>
          </div>
          <div className="space-y-2">
            {LECTURES.map(l => (
              <div
                key={l.id}
                className={cn(
                  'flex items-center gap-4 p-4 rounded-xl border transition-colors cursor-pointer',
                  l.status === 'Live' ? 'border-primary/40 bg-primary/5 hover:bg-primary/10' :
                  l.status === 'Upcoming' ? 'border-outline-variant bg-surface-low opacity-70 cursor-default' :
                  'border-outline-variant bg-surface-low hover:bg-surface-high'
                )}
              >
                <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center shrink-0',
                  l.status === 'Live' ? 'bg-primary text-white' :
                  l.status === 'Completed' ? 'bg-green-100' :
                  'bg-surface-high'
                )}>
                  {l.status === 'Live' ? <Play className="h-4 w-4" /> :
                   l.status === 'Completed' ? <CheckCircle className="h-4 w-4 text-green-600" /> :
                   <Lock className="h-4 w-4 text-on-surface-variant" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-on-surface">{l.title}</p>
                    {l.status === 'Live' && (
                      <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full font-semibold animate-pulse">LIVE</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-0.5">
                    <span className="text-xs text-on-surface-variant flex items-center gap-1"><Clock className="h-3 w-3" />{l.duration}</span>
                    <span className="text-xs text-on-surface-variant">{l.date}</span>
                  </div>
                </div>
                {l.score && <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{l.score}%</span>}
                {l.status !== 'Upcoming' && <ChevronRight className="h-4 w-4 text-on-surface-variant" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Assignments */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <h2 className="font-display font-semibold text-on-surface">Assignments</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-outline-variant">
                {['Assignment', 'Due Date', 'Status', 'Grade'].map(h => (
                  <th key={h} className="text-left pb-2 text-xs font-semibold uppercase text-on-surface-variant pr-4 last:pr-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {ASSIGNMENTS.map(a => (
                <tr key={a.title} className="hover:bg-surface-low transition-colors">
                  <td className="py-3 pr-4 text-sm font-semibold text-on-surface">{a.title}</td>
                  <td className="py-3 pr-4 text-xs text-on-surface-variant">{a.due}</td>
                  <td className="py-3 pr-4">
                    <span className={cn('text-xs px-2 py-0.5 rounded-full font-medium',
                      a.status === 'Graded' ? 'bg-green-100 text-green-700' :
                      a.status === 'Due Today' ? 'bg-red-100 text-red-700' :
                      'bg-amber-100 text-amber-700'
                    )}>{a.status}</span>
                  </td>
                  <td className="py-3">
                    {a.score !== null ? (
                      <span className="text-sm font-bold text-on-surface">{a.score}%</span>
                    ) : (
                      <button className="text-xs text-primary hover:underline">Submit</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Practical Lab */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-on-surface">Lab 4: Filter Design & Implementation</p>
              <p className="text-xs text-on-surface-variant mt-0.5">Practical lab session · Room 3B · Due Oct 28, 2023</p>
            </div>
          </div>
          <Button size="sm" className="gap-2"><Play className="h-4 w-4" /> Open Lab</Button>
        </div>
      </div>
    </div>
  )
}
