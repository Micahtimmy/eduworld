'use client'
import { Button } from '@/components/ui/button'

const SIMULATIONS = [
  {
    title: 'Organic Chemistry — Reaction Pathways',
    subject: 'CHEM-301',
    type: '3D Molecular Simulation',
    status: 'Available',
    statusColor: 'bg-green-100 text-green-700',
    icon: '⚗',
  },
  {
    title: 'Quantum Entanglement Visualizer',
    subject: 'PHYS-801',
    type: 'Interactive Quantum Sim',
    status: 'Available',
    statusColor: 'bg-green-100 text-green-700',
    icon: '⚛',
  },
  {
    title: 'Neural Network Training Sandbox',
    subject: 'CS-701',
    type: 'ML Simulation Environment',
    status: 'Running',
    statusColor: 'bg-blue-100 text-blue-700',
    icon: '🧠',
  },
  {
    title: 'CRISPR Gene Editing Simulation',
    subject: 'BIO-502',
    type: 'Genomics Lab',
    status: 'Locked',
    statusColor: 'bg-surface-high text-on-surface-variant',
    icon: '🔬',
  },
]

const RECENT = [
  { name: 'Spectroscopy Analysis — Run #14', date: 'Oct 22', score: '94%', subject: 'PHYS-205' },
  { name: 'Enzyme Kinetics Simulation', date: 'Oct 18', score: '81%', subject: 'CHEM-201' },
]

export default function ScholarVirtualLabPage() {
  return (
    <div className="p-4 md:p-6 space-y-6 max-w-5xl mx-auto">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Virtual Lab &amp; Simulation Portal</h1>
          <p className="text-sm text-on-surface-variant mt-1">Advanced research simulations for doctoral candidates</p>
        </div>
        <div className="flex items-center gap-1.5 bg-surface-low border border-outline-variant px-3 py-1 rounded-xl">
          <span className="text-xs font-semibold text-on-surface">6 / 12 Labs This Term</span>
        </div>
      </div>

      {/* Active Simulation Banner */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400 uppercase font-semibold">Currently Active</p>
            <h2 className="text-lg font-bold mt-0.5">Neural Network Training Sandbox</h2>
            <p className="text-xs text-slate-300 mt-1">CS-701 · Epoch 42/100 · Loss: 0.0312</p>
          </div>
          <span className="text-4xl">🧠</span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-blue-400 rounded-full" style={{ width: '42%' }} />
        </div>
        <div className="flex gap-2">
          <Button className="bg-white text-slate-900 hover:bg-white/90 gap-1">▶ Resume</Button>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">📊 View Results</Button>
        </div>
      </div>

      {/* Simulation Library */}
      <div className="space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Simulation Library</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {SIMULATIONS.map(s => (
            <div key={s.title} className={`bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3 ${s.status === 'Locked' ? 'opacity-60' : ''}`}>
              <div className="flex items-start justify-between">
                <span className="text-3xl">{s.icon}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${s.statusColor}`}>{s.status}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-on-surface">{s.title}</p>
                <p className="text-xs text-on-surface-variant">{s.subject} · {s.type}</p>
              </div>
              <Button size="sm" variant={s.status === 'Locked' ? 'outline' : 'default'} className="w-full" disabled={s.status === 'Locked'}>
                {s.status === 'Running' ? '▶ Continue' : s.status === 'Locked' ? '🔒 Locked' : '▶ Launch Simulation'}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Results */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Recent Results</h2>
          <button className="text-xs text-primary hover:underline">View All</button>
        </div>
        <div className="space-y-2">
          {RECENT.map(r => (
            <div key={r.name} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
              <span className="text-xl">📊</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-on-surface truncate">{r.name}</p>
                <p className="text-xs text-on-surface-variant">{r.subject} · {r.date}</p>
              </div>
              <span className="text-sm font-bold text-green-600 shrink-0">{r.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
