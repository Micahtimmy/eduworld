'use client'
import { Upload, Share, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

const GAPS = [
  { title: 'Thermal Decoherence Models', priority: 'High', desc: 'Draft handles non-Markovian dynamics but lacks empirical boundary-condition threshold data from Chen (2022).' },
  { title: 'Methodological Clarification', priority: 'High', desc: 'Transition between equations 3.1 and 3.2 is missing intermediate proof steps per Tier-1 journal standards.' },
  { title: 'Literature Breadth', priority: 'Medium', desc: 'Only 12 of 28 cited sources are from the last 5 years. Broaden to recent publications.' },
]

const CITATIONS = [
  { title: 'EPR Paradox Revisited', author: 'Aspect, 1982' },
  { title: 'Quantum Information Theory', author: 'Nielsen, 2010' },
  { title: 'Bell Inequality Tests', author: 'Clauser, 1978' },
]

export default function ScholarSemanticResearchPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-on-surface-variant">Physics Dept / Q3 Publications</p>
          <h1 className="font-display font-bold text-2xl text-on-surface mt-1">Semantic Research & Gap Analysis</h1>
          <p className="text-sm text-on-surface-variant mt-1">Auto-saved 2m ago</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1.5"><Share className="h-3.5 w-3.5" /> Share</Button>
          <Button size="sm">Submit Draft</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Editor */}
        <div className="lg:col-span-2 space-y-4">
          {/* Toolbar */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-3 flex items-center gap-2 flex-wrap">
            {['Normal Text', 'H1', 'H2', 'B', 'I', 'U'].map(t => (
              <button key={t} className="px-2.5 py-1 text-xs font-semibold bg-surface-low rounded-lg text-on-surface hover:bg-surface-high transition-colors">{t}</button>
            ))}
            <div className="w-px h-5 bg-outline-variant" />
            {['≡', '1.', '"'].map(t => (
              <button key={t} className="px-2.5 py-1 text-xs font-semibold bg-surface-low rounded-lg text-on-surface hover:bg-surface-high transition-colors">{t}</button>
            ))}
            <div className="flex-1" />
            <button className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-ai/10 text-ai rounded-lg hover:bg-ai/20 transition-colors">✦ Format Assist</button>
          </div>

          {/* Document */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-6 min-h-96 space-y-4">
            <h2 className="font-display font-bold text-xl text-on-surface">Research Hub: Quantum Entanglement</h2>
            <p className="text-sm text-on-surface leading-relaxed">Entanglement challenges local realist models; Bell-inequality experiments demonstrate correlations between space-like separated bipartite systems that exceed classical bounds. Non-Markovian dynamics in multi-partite systems under thermal noise suggest a mapping of environmental noise to network topology to predict entanglement sudden death.</p>
            <p className="text-sm text-on-surface leading-relaxed">The interaction Hamiltonian under the rotating-wave approximation yields a time evolution operator that preserves entanglement fidelity above 0.94 for durations under 200 μs in superconducting qubit arrays at 15 mK.</p>
            <p className="text-sm text-on-surface-variant italic">Start typing to continue draft...</p>
          </div>
        </div>

        {/* Intelligence Console */}
        <div className="space-y-4">
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-4">
            <p className="font-semibold text-sm text-on-surface">Intelligence Console</p>

            {/* Synthesizer */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-on-surface">Synthesizer</p>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Active</span>
              </div>
              <div className="border-2 border-dashed border-outline-variant rounded-xl p-3 text-center space-y-1">
                <Upload className="h-5 w-5 text-on-surface-variant mx-auto" />
                <p className="text-xs text-on-surface-variant">Drop literature PDFs here</p>
                <p className="text-xs text-on-surface-variant">AI will extract thematic links instantly</p>
              </div>
              <div className="flex items-center gap-2 p-2 bg-surface-low rounded-lg">
                <span className="text-xs">📄</span>
                <span className="text-xs text-on-surface">Smith_et_al_2023.pdf</span>
              </div>
            </div>

            {/* Gaps */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-on-surface">Identified Gaps</p>
                <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold">{GAPS.filter(g => g.priority === 'High').length} High Priority</span>
              </div>
              {GAPS.map(g => (
                <div key={g.title} className="border border-outline-variant rounded-xl p-3 space-y-2">
                  <p className="text-xs font-semibold text-on-surface">{g.title}</p>
                  <p className="text-xs text-on-surface-variant">{g.desc}</p>
                  <div className="flex gap-2">
                    <button className="text-xs text-primary hover:underline">Inject Context</button>
                    <button className="text-xs text-on-surface-variant hover:text-on-surface">Dismiss</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Semantic Graph */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-on-surface">Semantic Literature Graph</p>
                <button className="text-xs text-primary hover:underline">Expand Full</button>
              </div>
              <div className="bg-surface-low rounded-xl p-3 flex items-center justify-center h-24">
                <div className="flex items-center gap-4 text-xs text-on-surface-variant">
                  <span className="bg-primary/20 text-primary px-2 py-1 rounded-full">GHZ</span>
                  <span className="bg-primary text-white px-2 py-1 rounded-full">Draft</span>
                  <span className="bg-primary/20 text-primary px-2 py-1 rounded-full">Bell</span>
                </div>
              </div>
            </div>

            {/* Pending Citations */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-on-surface">Pending Citations ({CITATIONS.length})</p>
              {CITATIONS.map(c => (
                <div key={c.title} className="flex items-center gap-2 p-2 bg-surface-low rounded-lg">
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-on-surface">{c.title}</p>
                    <p className="text-xs text-on-surface-variant">{c.author}</p>
                  </div>
                  <button className="text-primary hover:text-primary/70"><Send className="h-3.5 w-3.5" /></button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
