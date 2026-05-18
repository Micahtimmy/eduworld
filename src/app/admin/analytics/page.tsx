'use client'
import { TrendingUp, TrendingDown, Minus, Download, Sparkles, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

const KPI = [
  { label: 'Avg. Academic Score', value: '82.4%', delta: '+4.2%', dir: 'up' },
  { label: 'National Percentile', value: 'Top 8%', delta: '+1.1%', dir: 'up' },
  { label: 'Grade Improvement', value: '76.8%', delta: '-0.4%', dir: 'down' },
  { label: 'Student Retention', value: '98.2%', delta: '+0.8%', dir: 'up' },
]

const SUBJECTS = [
  { name: 'Mathematics', score: 91, change: '+5%', dir: 'up' },
  { name: 'Science & Technology', score: 88, change: '+2%', dir: 'up' },
  { name: 'English Literature', score: 74, change: '-3%', dir: 'down' },
  { name: 'Humanities', score: 82, change: '0%', dir: 'flat' },
  { name: 'Creative Arts', score: 68, change: '+8%', dir: 'up' },
]

const SKILL_TAGS = [
  { label: 'STEM Focus', color: 'bg-blue-100 text-blue-700' },
  { label: 'Arts Deficit', color: 'bg-red-100 text-red-700' },
  { label: 'Literacy Peak', color: 'bg-green-100 text-green-700' },
  { label: 'Critical Thinking', color: 'bg-purple-100 text-purple-700' },
]

export default function AdminAnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-on-surface-variant">London Central Academy</p>
          <h1 className="font-display font-bold text-2xl text-on-surface mt-0.5">Academic Intelligence Hub</h1>
          <p className="text-sm text-on-surface-variant mt-1">Performance benchmarking for Term 2 (2024-2025)</p>
        </div>
        <Button variant="outline" size="sm" className="gap-1.5"><Download className="h-3.5 w-3.5" /> Export Report</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {KPI.map(k => (
          <div key={k.label} className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-2">
            <p className="text-xs text-on-surface-variant">{k.label}</p>
            <p className="font-display font-bold text-2xl text-on-surface">{k.value}</p>
            <div className="flex items-center gap-1">
              {k.dir === 'up' && <TrendingUp className="h-3.5 w-3.5 text-green-500" />}
              {k.dir === 'down' && <TrendingDown className="h-3.5 w-3.5 text-red-500" />}
              {k.dir === 'flat' && <Minus className="h-3.5 w-3.5 text-on-surface-variant" />}
              <span className={`text-xs font-semibold ${k.dir === 'up' ? 'text-green-600' : k.dir === 'down' ? 'text-red-600' : 'text-on-surface-variant'}`}>{k.delta}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-semibold text-on-surface">Subject Performance Benchmarking</h2>
            <div className="flex gap-1">
              {['Current Term', 'Last Term'].map((t, i) => (
                <button key={t} className={`px-3 py-1 rounded-lg text-xs font-semibold ${i === 0 ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-low'}`}>{t}</button>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {SUBJECTS.map(s => (
              <div key={s.name} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-on-surface">{s.name}</span>
                  <div className="flex items-center gap-2">
                    <span className={`font-semibold ${s.dir === 'up' ? 'text-green-600' : s.dir === 'down' ? 'text-red-600' : 'text-on-surface-variant'}`}>{s.change}</span>
                    <span className="font-bold text-on-surface">{s.score}%</span>
                  </div>
                </div>
                <div className="h-2 bg-surface-high rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${s.score >= 85 ? 'bg-green-500' : s.score >= 75 ? 'bg-primary' : 'bg-amber-500'}`} style={{ width: `${s.score}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <h2 className="font-display font-semibold text-on-surface">Skill Gap Matrix</h2>
            <div className="flex flex-wrap gap-2">
              {SKILL_TAGS.map(t => (
                <span key={t.label} className={`text-xs px-3 py-1.5 rounded-full font-semibold ${t.color}`}>{t.label}</span>
              ))}
            </div>
            <div className="bg-ai/5 border border-ai/20 rounded-xl p-3">
              <div className="flex items-center gap-1.5 mb-1">
                <Sparkles className="h-3 w-3 text-ai" />
                <span className="text-xs font-semibold text-ai">AI Insight</span>
              </div>
              <p className="text-xs text-on-surface-variant">&quot;Creative Arts shows significant upward momentum (+8%), but remains an institutional gap relative to National Standards (Top 15%). Consider shifting STEM auxiliary funding toward interdisciplinary programs.&quot;</p>
            </div>
          </div>

          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <h2 className="font-display font-semibold text-on-surface">Regional Comparison</h2>
            <p className="text-xs text-on-surface-variant">London Central Academy vs. Greater London District & National Averages</p>
            <div className="flex gap-1">
              {['District', 'National', 'Global'].map((t, i) => (
                <button key={t} className={`px-3 py-1 rounded-lg text-xs font-semibold ${i === 0 ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-low'}`}>{t}</button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-surface-low rounded-xl p-3 text-center">
                <p className="text-xs text-on-surface-variant">Academy Rank</p>
                <p className="font-bold text-sm text-on-surface">#12 in Greater London</p>
              </div>
              <div className="bg-surface-low rounded-xl p-3 text-center">
                <p className="text-xs text-on-surface-variant">vs. District Avg</p>
                <p className="font-bold text-sm text-green-600">+14.2%</p>
              </div>
              <div className="bg-surface-low rounded-xl p-3 text-center">
                <p className="text-xs text-on-surface-variant">Institutional Percentile</p>
                <p className="font-bold text-sm text-on-surface">94th</p>
              </div>
              <div className="bg-surface-low rounded-xl p-3 text-center">
                <p className="text-xs text-on-surface-variant">Outperforming</p>
                <p className="font-bold text-sm text-on-surface">822 institutions</p>
              </div>
            </div>
            <button className="text-xs text-primary hover:underline flex items-center gap-1"><Plus className="h-3 w-3" /> Add Comparison Group</button>
          </div>
        </div>
      </div>

      <Button className="w-full gap-2 bg-ai hover:bg-ai/90 text-white">
        <Sparkles className="h-4 w-4" /> Ask Intelligence AI
      </Button>
    </div>
  )
}
