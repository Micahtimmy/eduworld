'use client'
import Link from 'next/link'
import { TrendingUp, AlertTriangle, Plus, Sparkles, BookOpen, Calendar, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { RadarChart } from '@/components/shared/charts/RadarChart'

const MODULES = [
  { code: 'CS-801', name: 'Advanced Cryptography', credits: 4, focus: 'Zero-knowledge proofs, quantum-resistant algorithms', status: 'Active' },
  { code: 'ECON-740', name: 'Structural Economics', credits: 3, focus: 'Decentralized network resource allocation', status: 'Midterm Prep' },
  { code: 'BIO-900', name: 'Bioinformatics Seminar', credits: 3, focus: 'Computational genomics, protein modeling', status: 'Active' },
]

const RADAR_DATA = [
  { subject: 'Physics', value: 88 },
  { subject: 'Calculus', value: 72 },
  { subject: 'History', value: 65 },
  { subject: 'Literature', value: 78 },
  { subject: 'Chemistry', value: 82 },
  { subject: 'Biology', value: 60 },
]

export default function ScholarDashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Scholar Terminal</h1>
          <p className="text-sm text-on-surface-variant mt-1">Ivy League Research — Academic Command Center</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1">
            <span className="text-sm font-bold text-primary">GPA 3.98</span>
          </div>
          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" /> New Initiative
          </Button>
        </div>
      </div>

      {/* Stat Widgets */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-1">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <p className="text-xs text-on-surface-variant">Global Impact Score</p>
          </div>
          <p className="font-display font-bold text-2xl text-on-surface">94.2</p>
          <p className="text-xs text-green-600">↑ +2.4 points this cycle</p>
        </div>
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-1">
          <p className="text-xs text-on-surface-variant">Node Allocation</p>
          <p className="text-sm font-semibold text-on-surface">Primary Research</p>
          <p className="font-display font-bold text-lg text-on-surface">120h</p>
          <p className="text-xs text-on-surface-variant">Data Synthesis: 45h</p>
        </div>
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-1">
          <p className="text-xs text-on-surface-variant">Active Grants</p>
          <p className="font-display font-bold text-2xl text-on-surface">$1.24M</p>
          <p className="text-xs text-on-surface-variant">Across 3 active projects</p>
        </div>
        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 rounded-2xl p-4 space-y-1">
          <div className="flex items-center gap-1">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <p className="text-xs text-amber-700 font-semibold">Workload Alert</p>
          </div>
          <p className="text-xs text-on-surface">Cognitive Overload Predicted</p>
          <p className="text-xs text-on-surface-variant">Week 4 overlap → 22% efficiency drop. Shift 'Data Ethics' reading.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Modules */}
        <div className="lg:col-span-2 bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Active Modules</h2>
          <div className="space-y-3">
            {MODULES.map(m => (
              <div key={m.code} className="border border-outline-variant rounded-xl p-4 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-on-surface">{m.name}</p>
                  <Badge variant={m.status === 'Midterm Prep' ? 'warning' : 'secondary'} size="sm">{m.status}</Badge>
                </div>
                <p className="text-xs text-on-surface-variant">{m.code} · {m.credits} Credits</p>
                <p className="text-xs text-on-surface-variant">{m.focus}</p>
              </div>
            ))}
          </div>
          <Link href="/scholar/courses">
            <button className="text-xs text-primary hover:underline">View Ledger →</button>
          </Link>
        </div>

        {/* Knowledge Graph */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Knowledge Graph</h2>
          <RadarChart data={RADAR_DATA} height={200} />
          <div className="flex flex-wrap gap-2">
            {RADAR_DATA.map(d => (
              <span key={d.subject} className={`text-xs px-2 py-0.5 rounded-full font-medium ${d.value >= 80 ? 'bg-green-100 text-green-700' : d.value >= 70 ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-600'}`}>
                {d.subject} {d.value}%
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* AI Insight */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 flex items-start gap-3">
        <Sparkles className="h-5 w-5 text-ai shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-on-surface">EduWorld AI Research Insight</p>
          <p className="text-xs text-on-surface-variant mt-1">Your bioinformatics module shows correlation opportunities with Advanced Cryptography — consider a cross-disciplinary review of computational genomics encryption protocols.</p>
        </div>
      </div>
    </div>
  )
}
