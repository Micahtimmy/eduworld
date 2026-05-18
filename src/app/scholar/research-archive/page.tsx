'use client'
import { Upload, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LineChart } from '@/components/shared/charts/LineChart'

const CITATIONS_DATA = [
  { label: '2018', value: 40 },
  { label: '2020', value: 180 },
  { label: '2022', value: 320 },
  { label: '2024', value: 428 },
]

const ALUMNI = [
  { initials: 'ER', name: 'Dr. Elena Rostova', title: 'Director of AI Ethics, MIT', connected: false },
  { initials: 'ML', name: 'Prof. Marcus Lin', title: 'Lead Quantum Physics, CERN', connected: true },
  { initials: 'SJ', name: 'Sarah Jenkins, PhD', title: 'Senior Fellow, Brookings Inst.', connected: false },
]

export default function ScholarResearchArchivePage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="font-display font-bold text-2xl text-on-surface">Legacy Vault</h1>
        <p className="text-sm text-on-surface-variant mt-1">Manage your long-term research storage, track published works, and analyze the enduring impact of your academic contributions.</p>
      </div>

      {/* Citations Over Time */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Citations Over Time</h2>
          <div className="flex gap-1">
            {['1Y', 'ALL'].map((t, i) => (
              <button key={t} className={`px-3 py-1 rounded-lg text-xs font-semibold ${i === 1 ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-low'}`}>{t}</button>
            ))}
          </div>
        </div>
        <div className="h-40">
          <LineChart data={CITATIONS_DATA} lines={[{ key: 'value', label: 'Citations', color: '#6366f1' }]} />
        </div>
        <div className="text-center">
          <span className="text-2xl font-bold text-on-surface">428</span>
          <span className="text-xs text-on-surface-variant ml-1">peak citations (2024)</span>
        </div>
      </div>

      {/* Legacy Analyzer */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">✦</span>
          <div>
            <h2 className="font-display font-semibold text-on-surface">Legacy Analyzer</h2>
            <p className="text-xs text-on-surface-variant">AI-driven impact tracking across multi-disciplinary fields.</p>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-on-surface-variant">Field Dominance (Neuroscience)</span>
              <span className="font-bold text-on-surface">92%</span>
            </div>
            <div className="h-2.5 bg-surface-high rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: '92%' }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-on-surface-variant">Global Reach Index</span>
              <span className="font-bold text-on-surface">8.4 / 10</span>
            </div>
            <div className="h-2.5 bg-surface-high rounded-full overflow-hidden">
              <div className="h-full bg-ai rounded-full" style={{ width: '84%' }} />
            </div>
          </div>
        </div>
        <p className="text-xs text-on-surface-variant italic">Your recent paper on synaptic plasticity has triggered a 14% increase in cross-disciplinary citations from neurotechnology and quantum biology journals.</p>
      </div>

      {/* Institutional Repository */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Institutional Repository</h2>
        <div className="border-2 border-dashed border-outline-variant rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
          <Upload className="h-8 w-8 text-on-surface-variant mx-auto mb-2" />
          <p className="text-sm font-semibold text-on-surface">Drag and drop vault archives</p>
          <p className="text-xs text-on-surface-variant mt-1 mb-3">Supports .pdf, .csv, .hdf5 — up to 50GB</p>
          <Button size="sm" variant="outline">Browse Local Storage</Button>
        </div>
      </div>

      {/* Distinguished Alumni */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Distinguished Alumni Connections</h2>
          <button className="text-xs text-primary hover:underline flex items-center gap-1">View All <ArrowRight className="h-3 w-3" /></button>
        </div>
        {ALUMNI.map(a => (
          <div key={a.name} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
            <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0">{a.initials}</div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-on-surface">{a.name}</p>
              <p className="text-xs text-on-surface-variant">{a.title}</p>
            </div>
            <Button size="sm" variant={a.connected ? 'outline' : 'default'} className="h-7 text-xs">
              {a.connected ? '✓ Connected' : 'Connect'}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
