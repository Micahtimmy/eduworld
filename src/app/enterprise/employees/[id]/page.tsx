'use client'
import { Download, Edit, CheckCircle, TrendingDown, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const METRICS = [
  { label: 'Skill Mastery', value: '88%', icon: '✓' },
  { label: 'Visual Design', value: '96%', icon: '🎨' },
  { label: 'Prototyping', value: '82%', icon: '⚡' },
  { label: 'Time-to-Completion', value: '14.2 days', icon: '⏱️', sub: '15% faster than benchmark' },
]

const COURSES = [
  { name: 'Systems Thinking for Product Leaders', cat: 'Strategy', start: 'Jan 12, 2024', progress: 100, score: 98 },
  { name: 'Advanced Design Tokens & Handover', cat: 'Technical', start: 'Feb 05, 2024', progress: 45, score: null },
  { name: 'Empathy-Driven Leadership', cat: 'Soft Skills', start: 'Dec 15, 2023', progress: 100, score: 92 },
]

const TAGS = ['Leadership', 'Strategy', 'Technical', 'Soft Skills', 'Execution']

export default function EmployeeDetailPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Profile */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center font-display font-bold text-2xl text-primary">AM</div>
            <div>
              <h1 className="font-display font-bold text-2xl text-on-surface">Alexandria Mercer</h1>
              <p className="text-sm text-on-surface-variant">Senior Product Designer · Level 4 · London Hub</p>
              <p className="text-xs text-on-surface-variant mt-0.5">Joined 2.5 Years ago · 4.9 Performance Score</p>
              <p className="text-xs text-on-surface-variant">Top 5% in Figma Proficiency and User Research</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2"><Download className="h-4 w-4" /> Report</Button>
            <Button variant="outline" size="sm" className="gap-2"><Edit className="h-4 w-4" /> Edit</Button>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {METRICS.map(m => (
          <div key={m.label} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-1">
            <span className="text-xl">{m.icon}</span>
            <p className="text-xs text-on-surface-variant">{m.label}</p>
            <p className="font-display font-bold text-xl text-on-surface">{m.value}</p>
            {m.sub && <p className="text-xs text-green-600">{m.sub}</p>}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Growth Plan */}
        <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-medium">HIGH Priority</span>
            <p className="text-sm font-semibold text-on-surface">AI Growth Plan</p>
          </div>
          <div className="space-y-2">
            <div className="border-l-4 border-red-500 pl-3 py-1">
              <p className="text-xs font-semibold text-red-700">Gap: Front-end Handoff</p>
              <p className="text-xs text-on-surface-variant">Limited design token/React experience</p>
            </div>
            <div className="border-l-4 border-green-500 pl-3 py-1">
              <p className="text-xs font-semibold text-green-700">Strength: Accessibility WCAG 2.1</p>
              <p className="text-xs text-on-surface-variant">Advanced mastery confirmed</p>
            </div>
          </div>
          <div className="bg-surface rounded-xl border border-outline-variant p-3 space-y-1">
            <p className="text-xs font-semibold text-on-surface">Recommended: Advanced Tailwind Integration</p>
            <p className="text-xs text-on-surface-variant">⭐ 4.8 · 8.5 hrs · Certification included</p>
          </div>
          <Button className="w-full">Update Growth Roadmap</Button>
        </div>

        {/* Achievements */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Achievements</h2>
          <div className="flex flex-wrap gap-2">
            {TAGS.map(t => (
              <span key={t} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{t}</span>
            ))}
          </div>
          <div className="flex gap-3">
            <div className="flex-1 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 rounded-xl p-3 text-center">
              <p className="font-bold text-amber-700">🔥 12 DAYS</p>
              <p className="text-xs text-amber-600">Streak</p>
            </div>
            <div className="flex-1 bg-green-50 dark:bg-green-950/20 border border-green-200 rounded-xl p-3 text-center">
              <p className="font-bold text-green-700">TOP 5%</p>
              <p className="text-xs text-green-600">Team Rank</p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Progress */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Course Progress</h2>
          <div className="flex gap-2">
            {['All Modules', 'Completed', 'In Progress'].map((f, i) => (
              <button key={f} className={cn('text-xs px-3 py-1 rounded-full transition-colors', i === 0 ? 'bg-primary text-white' : 'border border-outline-variant text-on-surface-variant hover:bg-surface-low')}>{f}</button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-outline-variant">
                {['Course', 'Category', 'Start', 'Progress', 'Score'].map(h => (
                  <th key={h} className="text-left pb-2 text-xs font-semibold uppercase text-on-surface-variant pr-4 last:pr-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {COURSES.map(c => (
                <tr key={c.name} className="hover:bg-surface-low transition-colors">
                  <td className="py-3 pr-4 text-sm text-on-surface">{c.name}</td>
                  <td className="py-3 pr-4"><span className="text-xs bg-surface-high px-2 py-0.5 rounded-full text-on-surface-variant">{c.cat}</span></td>
                  <td className="py-3 pr-4 text-xs text-on-surface-variant">{c.start}</td>
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-surface-high rounded-full overflow-hidden">
                        <div className={cn('h-full rounded-full', c.progress === 100 ? 'bg-green-500' : 'bg-primary')} style={{ width: `${c.progress}%` }} />
                      </div>
                      <span className="text-xs text-on-surface-variant">{c.progress}%</span>
                    </div>
                  </td>
                  <td className="py-3">{c.score ? <span className="text-sm font-bold text-green-600">{c.score}/100</span> : <span className="text-xs text-on-surface-variant">—</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="text-xs text-primary hover:underline">View All Course History →</button>
      </div>
    </div>
  )
}
