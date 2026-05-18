'use client'
import { Sparkles } from 'lucide-react'
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const RADAR_DATA = [
  { subject: 'Math', A: 92 },
  { subject: 'Science', A: 88 },
  { subject: 'History', A: 74 },
  { subject: 'English', A: 81 },
  { subject: 'Art', A: 95 },
]

const GRADE_HISTORY = [
  { month: 'SEP', grade: 78 },
  { month: 'OCT', grade: 82 },
  { month: 'NOV', grade: 79 },
  { month: 'DEC', grade: 85 },
  { month: 'JAN', grade: 88 },
  { month: 'FEB', grade: 91 },
]

const MODULES = [
  { name: 'Algebra II', progress: 87, color: 'bg-primary' },
  { name: 'Cell Biology', progress: 72, color: 'bg-green-500' },
  { name: 'World War I', progress: 60, color: 'bg-amber-500' },
  { name: 'Creative Writing', progress: 94, color: 'bg-purple-500' },
]

const ASSESSMENTS = [
  { name: 'Algebra Midterm', date: 'Oct 20', score: '92%', grade: 'A', color: 'text-green-600' },
  { name: 'Biology Lab Report', date: 'Oct 18', score: '78%', grade: 'B+', color: 'text-green-600' },
  { name: 'History Essay', date: 'Oct 14', score: '65%', grade: 'C+', color: 'text-amber-600' },
]

export default function ParentAcademicProgressPage() {
  return (
    <div className="p-4 space-y-5 pb-24">
      <div>
        <h1 className="font-display font-bold text-xl text-on-surface">Child Academic Performance</h1>
        <p className="text-sm text-on-surface-variant">Alex Thompson · Grade 9 · Term 1 2024</p>
      </div>

      {/* Radar Chart */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Mastery Radar</h2>
        <div className="h-52">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={RADAR_DATA}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11 }} />
              <Radar dataKey="A" stroke="#6366f1" fill="#6366f1" fillOpacity={0.3} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[{ label: 'Math', val: '92%' }, { label: 'Science', val: '88%' }, { label: 'History', val: '74%' }].map(s => (
            <div key={s.label} className="text-center bg-surface-low rounded-xl p-2">
              <p className="text-sm font-bold text-on-surface">{s.val}</p>
              <p className="text-xs text-on-surface-variant">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Grade History Bar Chart */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Grade History</h2>
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={GRADE_HISTORY} barSize={24}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis domain={[60, 100]} tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar dataKey="grade" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Insight */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 space-y-2">
        <div className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-ai" />
          <p className="text-sm font-semibold text-on-surface">AI Excellence Highlight</p>
        </div>
        <p className="text-xs text-on-surface-variant">Alex shows exceptional growth in Mathematics — 15% improvement in geometric reasoning since last term. History requires additional support.</p>
        <p className="text-xs font-semibold text-amber-600">⚠ Growth Opportunity: World War I unit — consider tutoring sessions</p>
      </div>

      {/* Module Progress */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Module Progress</h2>
        <div className="space-y-3">
          {MODULES.map(m => (
            <div key={m.name}>
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-semibold text-on-surface">{m.name}</p>
                <span className="text-xs text-on-surface-variant">{m.progress}%</span>
              </div>
              <div className="h-2 bg-surface-high rounded-full overflow-hidden">
                <div className={`h-full ${m.color} rounded-full`} style={{ width: `${m.progress}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Assessments */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Recent Assessments</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="text-left pb-2 text-on-surface-variant font-semibold">Assessment</th>
                <th className="text-left pb-2 text-on-surface-variant font-semibold">Date</th>
                <th className="text-right pb-2 text-on-surface-variant font-semibold">Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {ASSESSMENTS.map(a => (
                <tr key={a.name}>
                  <td className="py-2 text-on-surface font-medium">{a.name}</td>
                  <td className="py-2 text-on-surface-variant">{a.date}</td>
                  <td className="py-2 text-right">
                    <span className={`font-bold ${a.color}`}>{a.score}</span>
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
