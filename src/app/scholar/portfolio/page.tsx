'use client'
import { Download, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SKILLS = [
  { name: 'Machine Learning', pct: 92 },
  { name: 'Data Architecture', pct: 88 },
  { name: 'Neural Topology', pct: 95 },
  { name: 'Bio-Statistics', pct: 78 },
]

const CREDENTIALS = [
  { hash: '0x7F...3A2', title: 'Advanced Deep Learning Architectures', issuer: 'Global AI Institute', date: 'Oct 2023' },
  { hash: '0x4B...9E1', title: 'Quantum Computing Foundations', issuer: 'Tech University Node', date: 'Mar 2023' },
]

export default function ScholarPortfolioPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">Advanced Research Tier</span>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Verified Scholar ID: SCH-2024-8902</span>
          </div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Professional Portfolio Hub</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1.5"><Download className="h-3.5 w-3.5" /> Export Dossier</Button>
          <Button size="sm" className="gap-1.5"><Share2 className="h-3.5 w-3.5" /> Share Profile</Button>
        </div>
      </div>

      {/* Profile */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 flex items-start gap-5">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center font-bold text-2xl text-primary shrink-0">ER</div>
        <div>
          <h2 className="font-display font-bold text-xl text-on-surface">Elena Rostova, Ph.D. Candidate</h2>
          <p className="text-sm text-on-surface-variant mt-1">Specializing in computational neuroscience and generative AI research methodologies.</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">GPA: 3.98</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Competency Matrix */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">📡</span>
            <div>
              <h2 className="font-display font-semibold text-on-surface">Competency Matrix</h2>
              <p className="text-xs text-on-surface-variant">Quantified assessment of core research methodologies.</p>
            </div>
          </div>
          <div className="space-y-3">
            {SKILLS.map(s => (
              <div key={s.name} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-on-surface-variant">{s.name}</span>
                  <span className="font-semibold text-on-surface">{s.pct}%</span>
                </div>
                <div className="h-2 bg-surface-high rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Credentials */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-semibold text-on-surface">Verified Credentials</h2>
            <span className="text-xs bg-surface-high text-on-surface-variant px-2 py-0.5 rounded-full font-semibold">🔒 Cryptographically Secured</span>
          </div>
          <div className="space-y-3">
            {CREDENTIALS.map(c => (
              <div key={c.hash} className="flex items-start gap-3 p-3 bg-surface-low rounded-xl">
                <span className="text-green-500 text-lg">✓</span>
                <div className="flex-1">
                  <p className="text-xs font-mono text-on-surface-variant">{c.hash}</p>
                  <p className="text-sm font-semibold text-on-surface">{c.title}</p>
                  <p className="text-xs text-on-surface-variant">{c.issuer} · Issued: {c.date}</p>
                </div>
                <button className="text-primary text-sm shrink-0">→</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Research Nodes & Publications */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Research Nodes &amp; Publications</h2>
          <button className="text-xs text-primary hover:underline">View Full Archive →</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-outline-variant rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">Publication Nature AI</span>
            </div>
            <p className="text-sm font-semibold text-on-surface">Topological Data Analysis in Large Language Models</p>
            <p className="text-xs text-on-surface-variant">Persistent homology approach achieving 15% reduction in hallucination rates.</p>
            <div className="flex items-center gap-3 text-xs text-on-surface-variant">
              <span>📅 Oct 2023</span>
              <span>💬 142 Citations</span>
            </div>
          </div>
          <div className="border border-outline-variant rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🔬</span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">Lab Residency DeepMind Node</span>
            </div>
            <p className="text-sm font-semibold text-on-surface">Cognitive Emulation Engine v2</p>
            <p className="text-xs text-on-surface-variant">Sub-team of 4 researchers. Developed custom loss functions for neural emulation.</p>
            <div className="flex items-center gap-3 text-xs text-on-surface-variant">
              <span>📅 Jan 2023 – Jun 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
