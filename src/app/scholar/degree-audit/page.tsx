'use client'
import { Download, CheckCircle, Clock, Flag, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CORE_COURSES = [
  { icon: '✓', title: 'NEUR-801: Advanced Neural Networks', semester: 'Fall 2024', grade: 'A', credits: 4, done: true },
  { icon: '✓', title: 'COMP-750: Algorithmic Complexity', semester: 'Spring 2025', grade: 'A-', credits: 4, done: true },
  { icon: '⏳', title: 'NEUR-850: Cognitive Modeling', semester: 'Pending Enrollment', grade: 'Required', credits: 4, done: false },
]

const MILESTONES = [
  { title: 'Submit Thesis Proposal', status: 'Completed: Oct 12, 2024', action: null },
  { title: 'Comprehensive Exams', status: 'Due: Dec 01, 2025', action: 'Schedule Now' },
  { title: 'Final Oral Defense', status: 'Expected: Spring 2026', action: null },
]

export default function ScholarDegreeAuditPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Degree Audit & Credit Tracker</h1>
          <p className="text-sm text-on-surface-variant mt-1">Ph.D. in Computational Neuroscience — Cohort 2024</p>
        </div>
        <Button variant="outline" size="sm" className="gap-1.5"><Download className="h-3.5 w-3.5" /> Export Official Audit</Button>
      </div>

      {/* Graduation Readiness */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5">
        <div className="flex items-center gap-1.5 mb-4">
          <p className="font-display font-semibold text-on-surface">Graduation Readiness</p>
        </div>
        <div className="flex gap-6 items-center">
          <div className="relative w-24 h-24 shrink-0">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" className="text-surface-high" strokeWidth="10" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" className="text-primary" strokeWidth="10"
                strokeDasharray={`${2 * Math.PI * 40 * 0.82} ${2 * Math.PI * 40}`} strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-bold text-xl text-on-surface">82%</span>
            </div>
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">↑ On Track</span>
              <span className="text-xs text-on-surface-variant">Est. Completion: May 2026</span>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-on-surface-variant">Credit Hour Accumulation</span>
                <span className="font-bold text-on-surface">98 / 120</span>
              </div>
              <div className="h-2 bg-surface-high rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '81.6%' }} />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Core Requirements', val: '45/60', pct: 75 },
                { label: 'Advanced Electives', val: '23/30', pct: 76 },
                { label: 'Dissertation Research', val: '30/30', pct: 100 },
              ].map(b => (
                <div key={b.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-on-surface-variant">{b.label}</span>
                    <span className="font-semibold text-on-surface">{b.val}</span>
                  </div>
                  <div className="h-1.5 bg-surface-high rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${b.pct === 100 ? 'bg-green-500' : 'bg-primary'}`} style={{ width: `${b.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center shrink-0">
            <p className="text-xs text-on-surface-variant mb-1">Cumulative GPA</p>
            <p className="font-display font-bold text-3xl text-on-surface">3.98</p>
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">Top 5%</span>
          </div>
        </div>
      </div>

      {/* Academic Requirements */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Academic Requirements</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="h-7 text-xs">Expand All</Button>
            <Button variant="outline" size="sm" className="h-7 text-xs">Pending</Button>
          </div>
        </div>

        {/* Core Methodologies */}
        <div className="border border-outline-variant rounded-xl overflow-hidden">
          <div className="flex items-center justify-between p-4 bg-surface-low">
            <div className="flex items-center gap-2">
              <span className="text-sm">🔬</span>
              <div>
                <p className="font-semibold text-sm text-on-surface">Core Methodologies</p>
                <p className="text-xs text-on-surface-variant">45 of 60 Credits Completed</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">In Progress</span>
              <ChevronRight className="h-4 w-4 text-on-surface-variant" />
            </div>
          </div>
          <div className="divide-y divide-outline-variant">
            {CORE_COURSES.map(c => (
              <div key={c.title} className="flex items-center gap-3 px-4 py-3">
                {c.done ? <CheckCircle className="h-4 w-4 text-green-500 shrink-0" /> : <Clock className="h-4 w-4 text-amber-500 shrink-0" />}
                <div className="flex-1">
                  <p className="text-sm font-medium text-on-surface">{c.title}</p>
                  <p className="text-xs text-on-surface-variant">{c.semester}</p>
                </div>
                <span className="text-xs font-bold text-on-surface">{c.grade}</span>
                <span className="text-xs text-on-surface-variant w-14 text-right">{c.credits} credits</span>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Electives */}
        <div className="flex items-center justify-between p-4 border border-outline-variant rounded-xl">
          <div className="flex items-center gap-2">
            <span className="text-sm">🧩</span>
            <div>
              <p className="font-semibold text-sm text-on-surface">Specialized Electives</p>
              <p className="text-xs text-on-surface-variant">23 of 30 Credits Completed</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">In Progress</span>
            <ChevronRight className="h-4 w-4 text-on-surface-variant" />
          </div>
        </div>

        {/* Dissertation */}
        <div className="flex items-center justify-between p-4 border border-outline-variant rounded-xl">
          <div className="flex items-center gap-2">
            <span className="text-sm">🏆</span>
            <div>
              <p className="font-semibold text-sm text-on-surface">Dissertation & Defense</p>
              <p className="text-xs text-on-surface-variant">30 of 30 Credits Completed</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Completed</span>
            <ChevronRight className="h-4 w-4 text-on-surface-variant" />
          </div>
        </div>
      </div>

      {/* Critical Milestones */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Flag className="h-4 w-4 text-primary" />
          <h2 className="font-display font-semibold text-on-surface">Critical Milestones</h2>
        </div>
        <div className="space-y-2">
          {MILESTONES.map(m => (
            <div key={m.title} className="flex items-center justify-between p-3 bg-surface-low rounded-xl">
              <div>
                <p className="text-sm font-semibold text-on-surface">{m.title}</p>
                <p className="text-xs text-on-surface-variant">{m.status}</p>
              </div>
              {m.action && <Button size="sm" variant="outline" className="h-7 text-xs">{m.action}</Button>}
            </div>
          ))}
        </div>
      </div>

      {/* Advisor Note */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary shrink-0">DR</div>
          <div>
            <p className="text-sm font-semibold text-on-surface">Dr. Aris Thorne</p>
            <p className="text-xs text-on-surface-variant mb-2">Posted: 2 days ago</p>
            <blockquote className="text-sm text-on-surface-variant italic border-l-2 border-primary/30 pl-3">
              &ldquo;Excellent progress on the algorithmic complexity module. Ensure you register for NEUR-850 in the upcoming semester to stay on track for your May 2026 defense.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
