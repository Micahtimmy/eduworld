'use client'
import { Sparkles, Download, TrendingUp, Users, Target, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const METRICS = [
  { label: 'Overall Workforce Readiness', value: '74.2%', trend: '↑5.4%', sub: 'Average competency across 12 core domains', color: 'text-green-600' },
  { label: 'Target Gaps', value: '3 critical domains', sub: 'Cloud · Data · Ethics', color: 'text-red-600' },
  { label: 'Active Training', value: '82%', sub: 'Enrollment rate in upskilling programs', badge: 'High Engagement' },
]

const HEATMAP = [
  { dept: 'Engineering & DevOps', scores: [92, 78, 65, 42, 20] },
  { dept: 'Data Intelligence', scores: [81, 95, 88, 54, 30] },
  { dept: 'Product Strategy', scores: [15, 48, 61, 22, 91] },
]
const SKILLS = ['Cloud Arch', 'Data Gov', 'AI Eng', 'Ethical Hacking', 'Product Growth']

const PROGRAMS = [
  { icon: '🔐', title: 'Advanced Ethical Hacking & SecOps', priority: 'Critical', cat: 'Engineering', duration: '12 weeks', enrollments: 42 },
  { icon: '🤖', title: 'Enterprise AI Strategy & Governance', priority: 'Strategic Growth', cat: 'Data', duration: '8 weeks', enrollments: 128 },
]

const TALENT = [
  { name: 'Elena Rodriguez', match: 98, role: 'Lead Data Architect' },
  { name: 'Marcus Chen', match: 94, role: 'DevOps Specialist' },
  { name: 'Sarah Jenkins', match: 89, role: 'Senior UX Strategist' },
]

function scoreColor(s: number) {
  if (s >= 80) return 'bg-green-500'
  if (s >= 60) return 'bg-yellow-400'
  if (s >= 40) return 'bg-orange-400'
  return 'bg-red-500'
}

export default function SkillsGapPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Skills Gap Analysis &amp; Strategy</h1>
          <p className="text-sm text-on-surface-variant mt-1">Identify workforce readiness gaps and prioritize targeted upskilling.</p>
        </div>
        <Button className="gap-2 bg-ai hover:bg-ai/90">
          <Sparkles className="h-4 w-4" /> Generate AI Skills Report
        </Button>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {METRICS.map(m => (
          <div key={m.label} className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-2">
            <p className="text-xs text-on-surface-variant">{m.label}</p>
            <p className={cn('font-display font-bold text-2xl text-on-surface', m.color)}>{m.value}</p>
            {m.trend && <p className="text-xs text-green-600 font-medium">{m.trend}</p>}
            <p className="text-xs text-on-surface-variant">{m.sub}</p>
            {m.badge && <Badge variant="success" size="sm">{m.badge}</Badge>}
          </div>
        ))}
      </div>

      {/* Competency Heatmap */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-display font-semibold text-on-surface">Competency Heatmap</h2>
            <p className="text-xs text-on-surface-variant">Departmental proficiency vs. industry benchmarks</p>
          </div>
          <div className="flex gap-2">
            <button className="text-xs border border-outline-variant px-3 py-1 rounded-lg text-on-surface hover:bg-surface-low">Q2-2024</button>
            <button className="text-xs bg-primary text-white px-3 py-1 rounded-lg">Q3-2024</button>
            <button className="p-1.5 rounded-lg hover:bg-surface-low text-on-surface-variant"><Download className="h-4 w-4" /></button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="text-left pb-2 text-xs font-semibold uppercase text-on-surface-variant pr-4">Department</th>
                {SKILLS.map(s => <th key={s} className="text-center pb-2 text-xs font-semibold uppercase text-on-surface-variant px-2">{s}</th>)}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {HEATMAP.map(r => (
                <tr key={r.dept}>
                  <td className="py-3 pr-4 text-sm font-medium text-on-surface whitespace-nowrap">{r.dept}</td>
                  {r.scores.map((s, i) => (
                    <td key={i} className="py-3 px-2 text-center">
                      <div className={cn('inline-flex items-center justify-center w-10 h-8 rounded-lg text-white text-xs font-bold', scoreColor(s))}>{s}</div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Training Programs */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="font-display font-semibold text-on-surface">Recommended Training Programs</h2>
            <span className="text-xs px-2 py-0.5 rounded-full bg-ai/10 text-ai font-medium">✦ AI Optimized</span>
          </div>
          {PROGRAMS.map(p => (
            <div key={p.title} className="border border-outline-variant rounded-xl p-4 space-y-2">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{p.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-on-surface">{p.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={cn('text-xs px-2 py-0.5 rounded-full font-medium', p.priority === 'Critical' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700')}>{p.priority}</span>
                    <span className="text-xs text-on-surface-variant">{p.cat} · {p.duration}</span>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-1">{p.enrollments} enrolled</p>
                </div>
              </div>
              <Button size="sm" className="w-full">Assign</Button>
            </div>
          ))}
        </div>

        {/* Top Talent */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Top Talent Readiness</h2>
          <div className="space-y-3">
            {TALENT.map(t => (
              <div key={t.name} className="flex items-center gap-3 p-3 rounded-xl bg-surface-low">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-sm text-primary">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-on-surface">{t.name}</p>
                  <p className="text-xs text-on-surface-variant">{t.role}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">{t.match}%</p>
                  <p className="text-xs text-on-surface-variant">match</p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full">View All Talent Matrix</Button>
        </div>
      </div>
    </div>
  )
}
