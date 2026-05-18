'use client'
import { Sparkles, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

const MODULES = [
  { name: 'Advanced Epistemology', code: 'MOD-801', pct: 65 },
  { name: 'Cybernetics Seminar', code: 'SEM-412', pct: 92 },
  { name: 'Data Structure Logic', code: 'LOG-204', pct: 34 },
]

export default function ScholarResearchWorkspacePage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">Advanced Research Tier</span>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">SYSTEM ONLINE</span>
          </div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Command Center</h1>
          <p className="text-sm text-on-surface-variant mt-1">Overview of your active intelligence and academic metrics.</p>
        </div>
        <Button size="sm" className="gap-1.5"><Plus className="h-3.5 w-3.5" /> New Research Project</Button>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-2">
          <p className="text-xs text-on-surface-variant font-semibold">Cumulative Impact</p>
          <p className="font-display font-bold text-3xl text-on-surface">94.2%</p>
          <p className="text-xs text-green-600 font-semibold">+1.4% vs last semester</p>
        </div>
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-2">
          <p className="text-xs text-on-surface-variant font-semibold">Node Allocation</p>
          <p className="font-display font-bold text-3xl text-on-surface">142hrs</p>
          <p className="text-xs text-on-surface-variant">Active Synthesis · Target: 180hrs</p>
          <div className="h-1.5 bg-surface-high rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: `${(142 / 180) * 100}%` }} />
          </div>
        </div>
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-2">
          <p className="text-xs text-on-surface-variant font-semibold">Imminent Operation</p>
          <p className="font-display font-bold text-lg text-on-surface">Quantum Cryptography 401</p>
          <p className="text-xs text-on-surface-variant">Hall of Synthesis, Sector 4</p>
          <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-mono font-bold">T-MINUS 02:14:00</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* AI Research Spotlight */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-ai" />
              <p className="font-semibold text-sm text-on-surface">AI Research Spotlight</p>
              <span className="text-xs bg-ai/10 text-ai px-2 py-0.5 rounded-full font-semibold">Neural Networks Citation Insight</span>
            </div>
            <p className="font-display font-semibold text-on-surface">Predictive Modeling in Non-Linear Temporal Structures</p>
            <p className="text-xs text-on-surface-variant">Cross-referencing parameter tuning algorithms from Chen et al. (2023) yields a projected 14% optimization in convergence rate for recursive temporal models. Pattern matched across 18 active citations.</p>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Pattern Matched</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm">Integrate Finding</Button>
              <Button size="sm" variant="outline">View Full Analysis →</Button>
            </div>
          </div>

          {/* Active Modules */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-semibold text-on-surface">Active Modules</h2>
              <button className="text-xs text-primary hover:underline">View Full Directory ›</button>
            </div>
            <div className="space-y-3">
              {MODULES.map(m => (
                <div key={m.code} className="flex items-center gap-4 p-3 bg-surface-low rounded-xl">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1.5">
                      <p className="text-sm font-semibold text-on-surface">{m.name}</p>
                      <span className="text-xs font-mono text-on-surface-variant">{m.code}</span>
                    </div>
                    <div className="h-1.5 bg-surface-high rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${m.pct}%` }} />
                    </div>
                  </div>
                  <span className={`text-xs font-semibold w-16 text-right ${m.pct >= 80 ? 'text-green-600' : m.pct >= 50 ? 'text-primary' : 'text-amber-600'}`}>{m.pct}% SYNTH</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar stats */}
        <div className="space-y-4">
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <p className="font-semibold text-sm text-on-surface">Research Pipeline</p>
            {[
              { label: 'Active Projects', value: '4' },
              { label: 'Pending Reviews', value: '7' },
              { label: 'Citations Indexed', value: '248' },
              { label: 'Publications (YTD)', value: '2' },
            ].map(s => (
              <div key={s.label} className="flex items-center justify-between py-1 border-b border-outline-variant last:border-0">
                <span className="text-xs text-on-surface-variant">{s.label}</span>
                <span className="font-bold text-on-surface">{s.value}</span>
              </div>
            ))}
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 space-y-2">
            <p className="font-semibold text-sm text-on-surface">Advisor Office Hours</p>
            <p className="text-xs text-on-surface-variant">Dr. Aris Thorne — Available Thu 2–4 PM</p>
            <Button size="sm" variant="outline" className="w-full">Book Session</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
