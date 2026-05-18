'use client'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AchieverOnboardingAIPartnerPage() {
  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl">⚡</span>
            <span className="font-display font-bold text-xl text-on-surface">Achievers</span>
            <span className="text-xs bg-ai/10 text-ai px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">
              <Sparkles className="h-3 w-3" /> EduWorld AI Integration
            </span>
          </div>
          <h1 className="font-display font-bold text-3xl text-on-surface">Meet your new study partner.</h1>
          <p className="text-sm text-on-surface-variant max-w-md mx-auto">A 24/7 peer-to-peer collaborator for past papers, calculus, and essay structuring. Always available, always aligned to your curriculum.</p>
          <Button className="gap-2 mt-4">Go to Dashboard <ArrowRight className="h-4 w-4" /></Button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">📊</div>
            <h3 className="font-semibold text-on-surface">Past Paper Analysis</h3>
            <p className="text-xs text-on-surface-variant">Identify patterns and recurring themes across exam papers.</p>
          </div>
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-ai/10 flex items-center justify-center">🧠</div>
            <h3 className="font-semibold text-on-surface">Complex Problem Solving</h3>
            <p className="text-xs text-on-surface-variant">STEM step-by-step hints that build understanding, not shortcuts.</p>
          </div>
        </div>

        {/* Chat Demo */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-outline-variant bg-surface-low">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-ai" />
              <span className="font-semibold text-sm text-on-surface">Achiever AI</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Online</span>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex justify-end">
              <div className="bg-primary text-white text-sm px-4 py-2.5 rounded-2xl rounded-br-sm max-w-xs">
                Can you explain entropy and thermodynamics for my A-Level exam?
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-ai/20 flex items-center justify-center shrink-0">
                <Sparkles className="h-4 w-4 text-ai" />
              </div>
              <div className="bg-surface-low rounded-2xl rounded-bl-sm p-3 max-w-xs space-y-2">
                <p className="text-xs font-semibold text-ai">EduWorld Insight</p>
                <p className="text-sm text-on-surface">In an isothermal expansion, entropy increases as the gas expands into a larger volume.</p>
                <code className="text-xs bg-surface-high px-2 py-1 rounded font-mono block">ΔS = nR ln(V₂/V₁)</code>
                <div className="flex gap-2 mt-2">
                  <button className="text-xs border border-outline-variant px-2 py-1 rounded-lg text-on-surface-variant hover:bg-surface-high">Explain terms</button>
                  <button className="text-xs border border-outline-variant px-2 py-1 rounded-lg text-on-surface-variant hover:bg-surface-high">Show example</button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-ai">
              <Sparkles className="h-3 w-3" />
              <span>Analyzing variables...</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-3 border-t border-outline-variant">
            <input className="flex-1 text-sm bg-surface-low rounded-xl px-3 py-2 border border-outline-variant outline-none focus:border-primary placeholder:text-on-surface-variant" placeholder="Ask anything..." />
            <button className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white">→</button>
          </div>
        </div>

        {/* Trust badge */}
        <div className="flex items-center justify-center gap-3 text-xs text-on-surface-variant">
          <span>✅ Curriculum Aligned</span>
          <span>·</span>
          <span>✅ Updated for 2024</span>
        </div>
        <p className="text-center text-xs text-on-surface-variant">EWD-031</p>
      </div>
    </div>
  )
}
