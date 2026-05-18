'use client'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const STATS = [
  { label: 'Class Average', value: '84.2%' },
  { label: 'Median Grade', value: 'B+' },
  { label: 'Pass Rate', value: '94.8%' },
]

const STUDENTS = [
  { initials: 'AA', name: 'Avery Adams', midterm: '88%', final: '94%', overall: '91.4% (A)', status: 'Verified', statusColor: 'text-green-600' },
  { initials: 'BM', name: 'Blake Miller', midterm: '74%', final: '76%', overall: '75.2% (C+)', status: 'Verified', statusColor: 'text-green-600' },
  { initials: 'CH', name: 'Casey Huang', midterm: '92%', final: '45%', overall: '64.0% (D)', status: 'Discrepancy', statusColor: 'text-red-600' },
]

const PORTALS = [
  { icon: '👪', label: 'Parent Portal', status: 'Scheduled: 5:00 PM', ready: true },
  { icon: '🔒', label: 'Admin Ledger', status: 'Pending Signature', ready: false },
  { icon: '🎓', label: 'Student Records', status: 'Ready to Sync', ready: true },
]

export default function TeacherGradeSyncPage() {
  return (
    <div className="p-4 md:p-6 space-y-6 max-w-5xl mx-auto">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-xs bg-surface-high text-on-surface-variant px-2 py-0.5 rounded-full font-semibold">Institutional Bridge Interface</span>
          <h1 className="font-display font-bold text-2xl text-on-surface mt-1">Final Grade Review &amp; Sync</h1>
          <p className="text-sm text-on-surface-variant">AP World History — Section B · 124 students</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" size="sm">Save Draft</Button>
          <Button size="sm" className="gap-1.5">☁ Sign &amp; Submit Sync</Button>
        </div>
      </div>

      {/* Grade Distribution */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Grade Distribution</h2>
          <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">Target met</span>
        </div>
        <p className="text-xs text-on-surface-variant">Visualizing performance spread for 124 students.</p>
        <div className="flex items-end gap-2 h-24">
          {[{ grade: 'F', pct: 5 }, { grade: 'D', pct: 15 }, { grade: 'C', pct: 30 }, { grade: 'B', pct: 65 }, { grade: 'A', pct: 85 }].map(g => (
            <div key={g.grade} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full bg-primary rounded-t" style={{ height: `${g.pct}%` }} />
              <span className="text-xs font-bold text-on-surface">{g.grade}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3">
          {STATS.map(s => (
            <div key={s.label} className="text-center bg-surface-low rounded-xl p-2">
              <p className="text-sm font-bold text-on-surface">{s.value}</p>
              <p className="text-[10px] text-on-surface-variant">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Discrepancy Analysis */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-ai" />
          <h2 className="font-display font-semibold text-on-surface">AI Discrepancy Analysis</h2>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-3 space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full font-bold">Critical</span>
            <p className="text-sm font-semibold text-on-surface">Anomalous Improvement</p>
          </div>
          <p className="text-xs text-on-surface-variant">3 students showed &gt;40% jump from Midterm. Manual audit recommended.</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs bg-amber-500 text-white px-2 py-0.5 rounded-full font-bold">Warning</span>
            <p className="text-sm font-semibold text-on-surface">Missing Data Points</p>
          </div>
          <p className="text-xs text-on-surface-variant">Liam O&apos;Connell lacks 2 lab submissions. Grade currently &apos;I&apos; (Incomplete).</p>
          <Button size="sm" variant="outline" className="h-7 text-xs">Message Student</Button>
        </div>
        <button className="text-xs text-primary hover:underline">Resolve All Flags</button>
      </div>

      {/* Portal Readiness */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Portal Readiness</h2>
        <div className="space-y-2">
          {PORTALS.map(p => (
            <div key={p.label} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
              <span className="text-xl shrink-0">{p.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-on-surface">{p.label}</p>
                <p className="text-xs text-on-surface-variant">{p.status}</p>
              </div>
              <span className={`text-lg ${p.ready ? 'text-green-500' : 'text-on-surface-variant'}`}>{p.ready ? '✓' : '○'}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Submissions Audit */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-outline-variant">
          <h2 className="font-display font-semibold text-on-surface">Recent Submissions Audit</h2>
          <button className="text-xs text-primary hover:underline">View All 124</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-outline-variant bg-surface-low">
                {['Student', 'Midterm', 'Final Exam', 'Overall', 'Status'].map(h => (
                  <th key={h} className="text-left p-3 text-on-surface-variant font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {STUDENTS.map(s => (
                <tr key={s.name}>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-[10px] font-bold text-primary">{s.initials}</span>
                      </div>
                      <span className="font-medium text-on-surface">{s.name}</span>
                    </div>
                  </td>
                  <td className="p-3 text-on-surface-variant">{s.midterm}</td>
                  <td className="p-3 text-on-surface-variant">{s.final}</td>
                  <td className="p-3 font-semibold text-on-surface">{s.overall}</td>
                  <td className={`p-3 font-bold ${s.statusColor}`}>{s.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Final Approval */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Final Approval Required</h2>
        <p className="text-xs text-on-surface-variant">By signing, you confirm these grades comply with EduWorld Institutional standards and are ready for publication.</p>
        <Button className="w-full gap-2 text-base py-3">☁ AUTHORIZE GLOBAL SYNC</Button>
      </div>
    </div>
  )
}
