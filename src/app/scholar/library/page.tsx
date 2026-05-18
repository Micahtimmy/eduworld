'use client'
import { Upload, Plus, BookOpen, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ACQUISITIONS = [
  { title: 'Quantum Supremacy in Neuromorphic Architectures', venue: 'IEEE Trans.', authors: 'Dr. H. Vance, S. O\'Connor', year: '2023', tags: ['Quantum Hardware'] },
  { title: 'Cognitive Load Modeling in High-Density Interfaces', venue: 'CHI \'24', authors: 'A. Miller, et al.', year: '2024', tags: ['HCI', 'UX'] },
]

const READING_LIST = [
  { title: 'Neural Network Topologies', pct: 75 },
  { title: 'Ethics in Autonomous Systems', pct: 30 },
  { title: 'Advanced Fluid Dynamics Ch. 4', pct: 10 },
]

export default function ScholarLibraryPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">Advanced Research Tier</span>
          </div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Library & Citation Manager</h1>
          <p className="text-sm text-on-surface-variant mt-1">Manage your academic references, reading lists, and AI-assisted summaries.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1.5"><Upload className="h-3.5 w-3.5" /> Import RIS/BibTeX</Button>
          <Button size="sm" className="gap-1.5"><Plus className="h-3.5 w-3.5" /> Manual Entry</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Acquisitions */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-semibold text-on-surface">Recent Acquisitions</h2>
              <button className="text-xs text-primary hover:underline">View Full Database →</button>
            </div>
            <div className="space-y-3">
              {ACQUISITIONS.map(a => (
                <div key={a.title} className="border border-outline-variant rounded-xl p-4 space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-on-surface">{a.title}</p>
                      <p className="text-xs text-on-surface-variant mt-1">{a.authors} · {a.venue} · {a.year}</p>
                    </div>
                    <button className="text-on-surface-variant hover:text-on-surface text-xs">⋮</button>
                  </div>
                  <div className="flex gap-1.5">
                    {a.tags.map(t => (
                      <span key={t} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Citation Generator */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">"</span>
              <h2 className="font-display font-semibold text-on-surface">Citation Generator</h2>
            </div>
            <div className="flex gap-2">
              {['APA 7', 'MLA 9', 'Chicago'].map((style, i) => (
                <button key={style} className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${i === 0 ? 'bg-primary text-white' : 'bg-surface-low text-on-surface-variant hover:bg-surface-high'}`}>{style}</button>
              ))}
            </div>
            <div className="bg-surface-low rounded-xl p-3">
              <p className="text-xs text-on-surface font-mono">Vance, H., &amp; O&apos;Connor, S. (2023). Quantum Supremacy in Neuromorphic Architectures. <em>IEEE Transactions on Neural Networks</em></p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-1.5">📋 Copy</Button>
              <Button size="sm">Generate</Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* Reading List */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-on-surface-variant" />
              <p className="font-semibold text-sm text-on-surface">Active Reading List</p>
            </div>
            <div className="space-y-3">
              {READING_LIST.map(r => (
                <div key={r.title} className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-on-surface font-semibold line-clamp-1">{r.title}</span>
                    <span className="text-on-surface-variant shrink-0 ml-2">{r.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-surface-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${r.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" className="w-full">Manage List</Button>
          </div>

          {/* AI Abstract Summarizer */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-ai" />
              <p className="font-semibold text-sm text-on-surface">AI Abstract Summarizer</p>
              <span className="text-xs bg-ai/10 text-ai px-2 py-0.5 rounded-full font-semibold">Beta</span>
            </div>
            <textarea
              className="w-full h-24 px-3 py-2.5 text-xs bg-surface-low border border-outline-variant rounded-xl outline-none focus:border-ai placeholder:text-on-surface-variant resize-none"
              placeholder="Paste a long abstract here to generate a concise, bulleted summary..."
            />
            <Button size="sm" className="w-full gap-1.5 bg-ai hover:bg-ai/90 text-white">✦ Generate Summary</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
