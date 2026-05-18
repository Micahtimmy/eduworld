'use client'
import { Plus, TrendingUp, AlertTriangle, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const METRICS = [
  { label: 'Global Impact Score', value: '94.2', delta: '+2.4 points this cycle', icon: TrendingUp, iconColor: 'text-green-500', bg: 'bg-green-100' },
  { label: 'Node Allocation', value: '120h', delta: 'Primary Research / 45h Data Synthesis', icon: TrendingUp, iconColor: 'text-primary', bg: 'bg-primary/10' },
  { label: 'Active Grants', value: '$1.24M', delta: 'Across 3 active structural projects', icon: TrendingUp, iconColor: 'text-amber-500', bg: 'bg-amber-100' },
  { label: 'Workload Alert', value: '⚠', delta: 'Cognitive Overload — Week 4 efficiency warning', icon: AlertTriangle, iconColor: 'text-red-500', bg: 'bg-red-100' },
]

const MODULES = [
  { code: 'CS-801', title: 'Advanced Cryptography', credits: '4 Credits', desc: 'Public-key systems, lattice-based cryptography, and post-quantum standards.' },
  { code: 'ECON-740', title: 'Structural Economics', credits: 'Midterm Prep', desc: 'Game theory, mechanism design, and macroeconomic equilibrium models.' },
  { code: 'BIO-900', title: 'Bioinformatics Seminar', credits: '3 Credits', desc: 'Genomic data analysis, sequence alignment, and computational biology.' },
]

export default function ScholarCommandCenterPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-on-surface-variant">Ivy League Research</p>
          <h1 className="font-display font-bold text-2xl text-on-surface mt-0.5">Academic Command Center</h1>
          <p className="text-sm text-on-surface-variant mt-1">High-density overview of your research, modules, and grants.</p>
        </div>
        <Button className="gap-2"><Plus className="h-4 w-4" /> New Initiative</Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {METRICS.map(m => (
          <div key={m.label} className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-2">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-lg ${m.bg} flex items-center justify-center`}>
                <m.icon className={`h-4 w-4 ${m.iconColor}`} />
              </div>
              <p className="text-xs text-on-surface-variant">{m.label}</p>
            </div>
            <p className="font-display font-bold text-3xl text-on-surface">{m.value}</p>
            <p className="text-xs text-on-surface-variant">{m.delta}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Modules */}
        <div className="lg:col-span-2 bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Active Modules</h2>
          <div className="space-y-3">
            {MODULES.map(m => (
              <div key={m.code} className="flex items-center gap-4 p-4 bg-surface-low rounded-xl cursor-pointer hover:bg-surface-high">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-sm text-on-surface">{m.title}</p>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">{m.code}</span>
                    <span className="text-xs text-on-surface-variant">{m.credits}</span>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-1">{m.desc}</p>
                </div>
                <span className="text-primary text-lg">›</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="space-y-4">
          {/* Knowledge Graph */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <h2 className="font-display font-semibold text-on-surface">Knowledge Graph Map</h2>
            <div className="bg-surface-low rounded-xl p-4 min-h-[120px] flex items-center justify-center relative">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold text-primary">Core Logic</div>
              <div className="absolute top-3 right-3 w-12 h-12 rounded-full bg-ai/20 flex items-center justify-center text-xs font-semibold text-ai">Emergent</div>
            </div>
          </div>

          {/* Grants */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <h2 className="font-display font-semibold text-on-surface">Active Grants</h2>
            <p className="font-display font-bold text-3xl text-on-surface">$1.24M</p>
            <p className="text-xs text-on-surface-variant">Across 3 active structural research projects</p>
            <button className="text-xs text-primary hover:underline flex items-center gap-1">View Ledger ›</button>
          </div>

          {/* AI */}
          <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-3.5 w-3.5 text-ai" />
              <span className="text-xs font-semibold text-ai">AI Insight</span>
            </div>
            <p className="text-xs text-on-surface-variant">Your Week 4 cognitive load is unusually high. Consider rescheduling the Bioinformatics seminar prep.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
