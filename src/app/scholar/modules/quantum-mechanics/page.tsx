'use client'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const MODULES = [
  { icon: '✓', label: '1. Postulates & Formalism', detail: 'Completed Jan 15', status: 'done' },
  { icon: '▶', label: '2. The Dirac Equation', detail: 'Current Module', status: 'active' },
  { icon: '🔒', label: '3. Perturbation Theory', detail: 'Locked', status: 'locked' },
  { icon: '🔒', label: '4. Quantum Entanglement', detail: 'Locked', status: 'locked' },
]

const READINGS = [
  { icon: '📄', title: 'The Quantum Theory of the Electron', author: 'P.A.M. Dirac (1928)', badge: 'Seminal • Required' },
  { icon: '📄', title: 'Feynman Lectures on Physics, Vol. III', author: 'Chapter 11: More Two-State Systems', badge: '' },
]

export default function ScholarQuantumMechanicsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">PHYS-801 Doctoral Level</span>
          </div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Advanced Quantum Mechanics</h1>
          <p className="text-sm text-on-surface-variant mt-1">Prof. H. Everett · Semester II</p>
        </div>
        <Button variant="outline" size="sm" className="gap-1.5">↗ Export Syllabus</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Live Lecture Recording */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
            <div className="relative bg-slate-800 aspect-video flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                <p className="text-white/40 text-sm">Quantum Physics Blackboard</p>
              </div>
              <button className="relative z-10 w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center">
                <span className="text-white text-3xl ml-1">▶</span>
              </button>
              <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full font-semibold">LIVE LECTURE RECORDING</div>
            </div>
            <div className="p-4 space-y-2">
              <p className="font-semibold text-on-surface">Derivation of the Dirac Equation</p>
              <p className="text-xs text-on-surface-variant">Recorded Feb 02, 2024 · 1h 45m</p>
              <div className="space-y-1 mt-2">
                {[
                  { time: '00:15:00', label: 'Relativistic Wave Equations' },
                  { time: '00:42:30', label: 'Spinors and Gamma Matrices' },
                ].map(ts => (
                  <button key={ts.time} className="flex items-center gap-2 text-xs text-primary hover:underline">
                    <span className="font-mono">{ts.time}</span>
                    <span>{ts.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Module Notes */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">📄</span>
                <div>
                  <h2 className="font-semibold text-on-surface">Module 2: Complete Theorem Notes</h2>
                  <p className="text-xs text-on-surface-variant">PDF · 4.2 MB · Uploaded by Prof. Everett</p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="h-7 text-xs">↓ Download</Button>
            </div>
            <blockquote className="border-l-4 border-primary pl-4 italic text-sm text-on-surface-variant">
              &ldquo;...transition from the non-relativistic Schrödinger framework to a fully relativistic description of spin-1/2 particles.&rdquo;
            </blockquote>
          </div>

          {/* AI Context Synthesis */}
          <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-ai" />
              <h2 className="font-display font-semibold text-on-surface">AI Context Synthesis</h2>
            </div>
            <p className="text-sm text-on-surface-variant">Review the <strong className="text-on-surface">Klein-Gordon equation</strong> — difficulty with negative energy solutions detected in your recent submissions.</p>
            <Button size="sm" className="gap-1.5 bg-ai hover:bg-ai/90 text-white"><Sparkles className="h-3 w-3" /> Generate Refresher Deck</Button>
          </div>

          {/* Required Reading */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">📚</span>
                <h2 className="font-display font-semibold text-on-surface">Required Reading</h2>
              </div>
              <Button size="sm" variant="outline" className="h-7 text-xs">↑ Upload Reference</Button>
            </div>
            <div className="space-y-2">
              {READINGS.map(r => (
                <div key={r.title} className="flex items-start gap-3 p-3 bg-surface-low rounded-xl">
                  <span className="text-lg">{r.icon}</span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-on-surface">{r.title}</p>
                    <p className="text-xs text-on-surface-variant">{r.author}</p>
                  </div>
                  {r.badge && <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold shrink-0">{r.badge}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar: Syllabus Progress */}
        <div>
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-lg">📈</span>
              <h2 className="font-display font-semibold text-on-surface">Syllabus Progress</h2>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-on-surface-variant">Overall Completion</span>
                <span className="font-bold text-on-surface">42%</span>
              </div>
              <div className="h-2 bg-surface-high rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '42%' }} />
              </div>
            </div>
            <div className="space-y-2">
              {MODULES.map(m => (
                <div key={m.label} className={`flex items-start gap-3 p-3 rounded-xl ${
                  m.status === 'active' ? 'bg-primary/10 border border-primary/30' :
                  m.status === 'locked' ? 'bg-surface-low opacity-60' :
                  'bg-surface-low'
                }`}>
                  <span className={`text-sm shrink-0 font-bold ${
                    m.status === 'done' ? 'text-green-500' :
                    m.status === 'active' ? 'text-primary' :
                    'text-on-surface-variant'
                  }`}>{m.icon}</span>
                  <div>
                    <p className="text-xs font-semibold text-on-surface">{m.label}</p>
                    <p className="text-xs text-on-surface-variant">{m.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
