'use client'
import { Sparkles, BookOpen, Link, FileText, Save, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const INTELLIGENCE_NODES = [
  {
    type: 'suggestion',
    icon: Sparkles,
    iconColor: 'text-ai',
    bg: 'bg-ai/5 border-ai/20',
    label: 'Contextual Analysis',
    content: 'The concept of quantum decoherence in section 2.3 could be strengthened by referencing recent work on topological quantum codes. This would reinforce your main thesis.',
  },
  {
    type: 'citation',
    icon: BookOpen,
    iconColor: 'text-primary',
    bg: 'bg-surface-low border-outline-variant',
    label: 'Suggested Citation',
    content: 'Preskill, J. (2022). Quantum Computing in the NISQ Era and Beyond. Quantum, 6, 620. DOI: 10.22331/q-2022-09-19-620',
  },
  {
    type: 'citation',
    icon: Link,
    iconColor: 'text-blue-500',
    bg: 'bg-blue-50 border-blue-100',
    label: 'Related Source',
    content: 'Santos et al. (2023). Neural correlates of quantum state preparation. Nature Physics, 19, 1234–1241.',
  },
]

const DOCUMENT_CONTENT = `Quantum Entanglement in Neural Networks: A Theoretical Framework

Abstract
This paper presents a novel theoretical framework exploring the potential applications of quantum entanglement principles within artificial neural network architectures. We propose that quantum superposition states, when applied to weight initialization protocols, may offer computational advantages over classical stochastic methods.

1. Introduction
The intersection of quantum mechanics and neural computation represents one of the most promising frontiers in modern computer science. While quantum computers remain nascent technology, the mathematical formalisms underlying quantum information theory offer powerful abstractions for understanding learning dynamics in classical neural networks...

2. Theoretical Background
2.1 Quantum State Representation
Let |ψ⟩ denote a quantum state vector in Hilbert space H. For a two-qubit system, the general entangled state is expressed as:

|ψ⟩ = α|00⟩ + β|01⟩ + γ|10⟩ + δ|11⟩

where α, β, γ, δ ∈ ℂ and |α|² + |β|² + |γ|² + |δ|² = 1.

2.2 Neural Network Mapping
We propose a direct correspondence between quantum entanglement...`

export default function ScholarAIResearchPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">AI Research Assistant</h1>
          <p className="text-sm text-on-surface-variant mt-1">Write, cite, and analyze with AI-powered research intelligence.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2"><Share2 className="h-4 w-4" /> Share</Button>
          <Button size="sm" className="gap-2 bg-ai hover:bg-ai/90"><Sparkles className="h-4 w-4" /> AI Mode</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Document Editor */}
        <div className="lg:col-span-2 bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
          {/* Editor Toolbar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-outline-variant bg-surface-low">
            <div className="flex gap-1">
              {['B', 'I', 'U'].map(f => (
                <button key={f} className="w-7 h-7 rounded-lg hover:bg-surface-high text-xs font-semibold text-on-surface-variant transition-colors">{f}</button>
              ))}
            </div>
            <div className="w-px h-5 bg-outline-variant mx-1" />
            <div className="flex gap-1">
              {['H1', 'H2', '¶'].map(f => (
                <button key={f} className="px-2 h-7 rounded-lg hover:bg-surface-high text-xs font-mono text-on-surface-variant transition-colors">{f}</button>
              ))}
            </div>
            <div className="ml-auto flex gap-2">
              <Button size="sm" variant="outline" className="h-7 gap-1.5 text-xs"><Save className="h-3.5 w-3.5" /> Save</Button>
              <Button size="sm" className="h-7 gap-1.5 text-xs bg-ai hover:bg-ai/90"><Sparkles className="h-3.5 w-3.5" /> Improve</Button>
            </div>
          </div>

          {/* Document Content */}
          <div className="p-6">
            <div className="space-y-4">
              <div className="border-b border-outline-variant pb-4">
                <h2 className="font-display font-bold text-xl text-on-surface">Quantum Entanglement in Neural Networks: A Theoretical Framework</h2>
                <p className="text-xs text-on-surface-variant mt-1">Draft · Last saved 2 minutes ago · 1,247 words</p>
              </div>
              <pre className="text-sm text-on-surface whitespace-pre-wrap font-sans leading-relaxed">
                {DOCUMENT_CONTENT}
              </pre>
            </div>
          </div>

          {/* Editor Footer */}
          <div className="flex items-center justify-between px-6 py-3 border-t border-outline-variant bg-surface-low">
            <p className="text-xs text-on-surface-variant">1,247 words · 8,342 characters</p>
            <div className="flex items-center gap-3">
              <button className="text-xs text-primary hover:underline flex items-center gap-1"><FileText className="h-3.5 w-3.5" /> Export PDF</button>
              <button className="text-xs text-primary hover:underline flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" /> Citation Manager</button>
            </div>
          </div>
        </div>

        {/* Intelligence Nodes Panel */}
        <div className="space-y-4">
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-4 w-4 text-ai" />
              <h2 className="font-display font-semibold text-on-surface">Intelligence Nodes</h2>
            </div>
            <div className="space-y-3">
              {INTELLIGENCE_NODES.map((node, i) => (
                <div key={i} className={cn('rounded-xl border p-3 space-y-2', node.bg)}>
                  <div className="flex items-center gap-2">
                    <node.icon className={cn('h-3.5 w-3.5', node.iconColor)} />
                    <span className={cn('text-xs font-semibold', node.iconColor)}>{node.label}</span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{node.content}</p>
                  <div className="flex gap-2">
                    <button className="text-xs text-primary hover:underline">Insert</button>
                    <button className="text-xs text-on-surface-variant hover:underline">Dismiss</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Stats */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <h2 className="font-display font-semibold text-on-surface">Research Stats</h2>
            {[{ label: 'Citations Found', value: '24' }, { label: 'Plagiarism Risk', value: '2%' }, { label: 'AI Score', value: '91/100' }].map(s => (
              <div key={s.label} className="flex items-center justify-between">
                <p className="text-xs text-on-surface-variant">{s.label}</p>
                <p className="text-xs font-bold text-on-surface">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
