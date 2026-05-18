'use client'
import { Sparkles, Play, Shuffle, UserPlus, Download, Eye, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PAIRINGS = [
  { station: 'Station 01', students: ['L. Chen', 'J. Smith'], active: true },
  { station: 'Station 02', students: ['M. Rodriguez', 'A. Kim'], active: false },
  { station: 'Station 03', students: ['E. Wilson', 'D. Gupta'], active: false },
  { station: 'Station 04', students: ['T. Brown', 'S. Patel'], active: false },
]

const EQUIPMENT = [
  { name: 'Digital Oscilloscopes', status: '8 / 10 Ready', ok: true },
  { name: 'Helmholtz Coils', status: '10 / 10 Ready', ok: true },
  { name: 'Variable Resistors', status: '4 / 10 Available', ok: false },
]

const RESOURCES = [
  { name: 'Instructor_Manual_Phy4.pdf', type: 'PDF', size: '4.2 MB' },
  { name: 'Student_Observation_Sheet.xlsx', type: 'Excel', size: '1.1 MB' },
]

const REPORTS = [
  { title: 'Flux Density Analysis - Group A', group: 'Leo Chen & Julia Smith', time: '12 mins ago', status: 'Pending Review' },
  { title: 'Magnetic Fields in Solids - Group B', group: 'Draft in progress', time: '4 mins ago', status: 'Awaiting Submission' },
]

export default function TeacherLabSessionPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <p className="text-xs text-on-surface-variant">Practicals / Physics Lab #4</p>
        <div className="flex items-start justify-between mt-1">
          <div>
            <h1 className="font-display font-bold text-2xl text-on-surface">Electromagnetic Induction & Flux</h1>
            <p className="text-sm text-on-surface-variant mt-1">Unit 4: Advanced Electromagnetism. Class 12-B Practical Session.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1.5">Share Session</Button>
            <Button size="sm" className="gap-1.5"><Play className="h-3.5 w-3.5" /> Start Lab Session</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Student Pairings */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-display font-semibold text-on-surface">Student Pairings</h2>
                <p className="text-xs text-on-surface-variant">Active assignments for the current session</p>
              </div>
              <Button variant="outline" size="sm" className="gap-1.5"><Shuffle className="h-3.5 w-3.5" /> Auto-Shuffle</Button>
            </div>
            <div className="space-y-2">
              {PAIRINGS.map(p => (
                <div key={p.station} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
                  <span className="text-xs font-mono text-on-surface-variant w-16">{p.station}</span>
                  <div className="flex items-center gap-2 flex-1">
                    {p.students.map(s => (
                      <div key={s} className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">{s.charAt(0)}</div>
                    ))}
                    <span className="text-sm text-on-surface">{p.students.join(' & ')}</span>
                  </div>
                  {p.active && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Active</span>}
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" className="gap-1.5"><UserPlus className="h-3.5 w-3.5" /> Add Manual Pairing</Button>
          </div>

          {/* Lab Reports */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <h2 className="font-display font-semibold text-on-surface">Recent Lab Reports</h2>
            <p className="text-xs text-on-surface-variant">Live feed of student submissions and grading status</p>
            <div className="space-y-3">
              {REPORTS.map(r => (
                <div key={r.title} className="border border-outline-variant rounded-xl p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${r.status === 'Pending Review' ? 'bg-amber-100 text-amber-700' : 'bg-surface-high text-on-surface-variant'}`}>{r.status}</span>
                    <span className="text-xs text-on-surface-variant">{r.time}</span>
                  </div>
                  <p className="font-semibold text-sm text-on-surface">{r.title}</p>
                  <p className="text-xs text-on-surface-variant">{r.group}</p>
                  {r.status === 'Pending Review' && (
                    <Button size="sm" variant="outline" className="h-7 text-xs gap-1.5"><Eye className="h-3 w-3" /> Grade Now</Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* Lab Setup */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <h2 className="font-semibold text-sm text-on-surface">Lab Setup</h2>
            <div className="space-y-2">
              {EQUIPMENT.map(e => (
                <div key={e.name} className="flex items-center justify-between p-2.5 bg-surface-low rounded-xl">
                  <span className="text-xs text-on-surface">{e.name}</span>
                  <span className={`text-xs font-semibold ${e.ok ? 'text-green-600' : 'text-amber-600'}`}>{e.status}</span>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
              <AlertTriangle className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-amber-800">Low Inventory Warning</p>
                <p className="text-xs text-amber-700">6 resistors marked &apos;Damaged&apos;. Request replacements.</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full gap-1.5"><Download className="h-3.5 w-3.5" /> Download Sheet</Button>
          </div>

          {/* Resources */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <h2 className="font-semibold text-sm text-on-surface">Lab Resources</h2>
            <div className="space-y-2">
              {RESOURCES.map(r => (
                <div key={r.name} className="flex items-center gap-2 p-2.5 bg-surface-low rounded-xl">
                  <span className="text-lg">{r.type === 'PDF' ? '📄' : '📊'}</span>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-on-surface truncate">{r.name}</p>
                    <p className="text-xs text-on-surface-variant">{r.size}</p>
                  </div>
                  <button className="text-primary hover:text-primary/70"><Download className="h-3.5 w-3.5" /></button>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insight */}
          <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 space-y-2">
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-ai" />
              <span className="text-xs font-bold text-ai">AI Insight</span>
            </div>
            <p className="text-xs text-on-surface-variant">Students are showing difficulty with Lenz&apos;s Law visualization at Station 3. AR walkthrough may help.</p>
            <Button size="sm" className="w-full gap-1.5 bg-ai hover:bg-ai/90 text-white text-xs">Launch AR Visualization</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
