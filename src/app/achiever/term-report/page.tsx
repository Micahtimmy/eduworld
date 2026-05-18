'use client'
import { Download, TrendingUp, TrendingDown, Minus, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LineChart } from '@/components/shared/charts/LineChart'

const SUBJECTS = [
  { name: 'Advanced Calculus (MAT-301)', credits: '4.0', grade: 'A', rank: '2 / 145', trend: 'up' },
  { name: 'Quantum Mechanics Intro (PHY-205)', credits: '4.0', grade: 'A-', rank: '15 / 120', trend: 'flat' },
  { name: 'Modern Literature (ENG-210)', credits: '3.0', grade: 'B+', rank: '42 / 200', trend: 'down' },
  { name: 'Data Structures (CS-201)', credits: '4.0', grade: 'A', rank: '5 / 180', trend: 'up' },
]

const CHART_DATA = [
  { label: 'Wk 1', student: 3.2, cohort: 3.0 },
  { label: 'Wk 3', student: 3.4, cohort: 3.1 },
  { label: 'Wk 6', student: 3.6, cohort: 3.2 },
  { label: 'Wk 9', student: 3.75, cohort: 3.25 },
  { label: 'Wk 12', student: 3.82, cohort: 3.3 },
  { label: 'Final', student: 3.84, cohort: 3.35 },
]

export default function AchieverTermReportPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Term Performance Report</h1>
          <p className="text-sm text-on-surface-variant mt-1">Fall Term 2023 • Comprehensive Analysis</p>
        </div>
        <Button variant="outline" size="sm" className="gap-1.5"><Download className="h-3.5 w-3.5" /> Download Official Report</Button>
      </div>

      {/* AI Synthesis */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-4 w-4 text-ai" />
          <p className="font-semibold text-sm text-ai">AI Performance Synthesis</p>
        </div>
        <p className="text-sm text-on-surface-variant">You rank in the <strong className="text-on-surface">top 2%</strong> for Advanced Calculus this term. Your literary analysis thesis structure has room to improve. Overall trajectory is <strong className="text-green-600">strongly positive</strong>.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* GPA Chart */}
        <div className="lg:col-span-2 bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">GPA Trajectory</h2>
          <div className="h-48">
            <LineChart data={CHART_DATA} lines={[{ key: 'student', label: 'Your GPA', color: '#6366f1' }, { key: 'cohort', label: 'Cohort Avg', color: '#94a3b8' }]} />
          </div>
        </div>

        {/* GPA Summary */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Cumulative GPA</h2>
          <div>
            <p className="font-display font-bold text-4xl text-on-surface">3.84 / 4.0</p>
            <div className="flex items-center gap-1.5 mt-1">
              <TrendingUp className="h-3.5 w-3.5 text-green-500" />
              <span className="text-xs font-semibold text-green-600">Top 5% of Cohort</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-on-surface-variant">Academic Rigor</span>
                <span className="font-bold text-on-surface">92%</span>
              </div>
              <div className="h-2 bg-surface-high rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '92%' }} />
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-on-surface-variant">Attendance</span>
                <span className="font-bold text-on-surface">98%</span>
              </div>
              <div className="h-2 bg-surface-high rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '98%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subject Table */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Subject-by-Subject Ranking</h2>
          <Button variant="outline" size="sm" className="h-7 text-xs">View Rubrics</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-on-surface-variant border-b border-outline-variant">
                <th className="text-left pb-3 font-semibold">Subject</th>
                <th className="text-left pb-3 font-semibold">Credits</th>
                <th className="text-left pb-3 font-semibold">Final Grade</th>
                <th className="text-left pb-3 font-semibold">Cohort Rank</th>
                <th className="text-left pb-3 font-semibold">Trend</th>
              </tr>
            </thead>
            <tbody className="space-y-2">
              {SUBJECTS.map(s => (
                <tr key={s.name} className="border-b border-outline-variant last:border-0">
                  <td className="py-3 font-medium text-on-surface">{s.name}</td>
                  <td className="py-3 text-on-surface-variant">{s.credits}</td>
                  <td className="py-3 font-bold text-on-surface">{s.grade}</td>
                  <td className="py-3 text-on-surface-variant">{s.rank}</td>
                  <td className="py-3">
                    {s.trend === 'up' && <TrendingUp className="h-4 w-4 text-green-500" />}
                    {s.trend === 'down' && <TrendingDown className="h-4 w-4 text-red-500" />}
                    {s.trend === 'flat' && <Minus className="h-4 w-4 text-on-surface-variant" />}
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
