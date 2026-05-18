'use client'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SKILLS = ['Transformers', 'Attention Mechanisms', 'LLM Fine-tuning']

export default function ExplorerJourneyMapPage() {
  return (
    <div className="p-4 space-y-5 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="font-display font-bold text-xl text-on-surface">Learning Explorer</h1>
        <div className="flex items-center gap-1.5 bg-xp/10 text-xp px-2 py-0.5 rounded-full">
          <span className="text-xs">⭐</span>
          <span className="text-xs font-bold">3,240 XP</span>
        </div>
      </div>

      {/* Global Progress */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-on-surface">Global Progress</span>
          <span className="font-bold text-primary">64%</span>
        </div>
        <div className="h-2 bg-surface-high rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full" style={{ width: '64%' }} />
        </div>
      </div>

      {/* Island Map */}
      <div className="space-y-3">
        {/* Island 1 — Completed */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-green-200 flex items-center justify-center shrink-0">
            <span className="text-2xl">🏝</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-on-surface">Foundations Island</p>
            <p className="text-xs text-green-700 font-semibold">✓ Completed</p>
          </div>
          <span className="text-green-500 text-xl">✓</span>
        </div>

        {/* Island 2 — Active */}
        <div className="bg-primary/5 border-2 border-primary rounded-2xl p-4 space-y-3">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center shrink-0 relative">
              <span className="text-2xl">🧠</span>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">72%</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-on-surface">AI & Machine Learning</p>
                <span className="text-[10px] bg-ai/10 text-ai px-1.5 py-0.5 rounded font-bold">✦ Current Quest</span>
              </div>
              <p className="text-xs text-on-surface-variant">Neural Networks</p>
              <p className="text-xs text-primary font-semibold mt-0.5">Finish 2 more modules to level up!</p>
            </div>
          </div>
          <div className="h-1.5 bg-surface-high rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: '72%' }} />
          </div>
        </div>

        {/* Island 3 — Locked */}
        <div className="bg-surface-lowest border border-outline-variant rounded-2xl p-4 flex items-center gap-4 opacity-60">
          <div className="w-14 h-14 rounded-2xl bg-surface-high flex items-center justify-center shrink-0">
            <span className="text-2xl">🔒</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-on-surface">Executive Leadership</p>
            <p className="text-xs text-on-surface-variant">Locked — complete current quest to unlock</p>
          </div>
        </div>

        {/* Island 4 — Locked */}
        <div className="bg-surface-lowest border border-outline-variant rounded-2xl p-4 flex items-center gap-4 opacity-40">
          <div className="w-14 h-14 rounded-2xl bg-surface-high flex items-center justify-center shrink-0">
            <span className="text-2xl">🔒</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-on-surface">Global Ethics</p>
            <p className="text-xs text-on-surface-variant">Locked</p>
          </div>
        </div>
      </div>

      {/* Daily Quest */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-ai">✦</span>
            <h2 className="font-display font-semibold text-on-surface">Daily Quest</h2>
          </div>
          <span className="text-xs bg-xp/10 text-xp px-2 py-0.5 rounded-full font-bold">+200 XP</span>
        </div>
        <p className="text-xs text-on-surface-variant">Complete the &apos;Linear Regression&apos; quiz with a score over 85% to claim your daily XP reward.</p>
        <div className="flex items-center gap-2">
          <span className="text-xs text-on-surface-variant">Quiz Progress</span>
          <span className="text-xs font-bold text-on-surface">1/3</span>
        </div>
        <Button className="w-full">⚡ Jump In</Button>
      </div>

      {/* AI Skill Forecast */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-ai" />
          <p className="text-sm font-semibold text-on-surface">AI Skill Forecast</p>
        </div>
        <p className="text-sm font-semibold text-on-surface">Bridge your gaps in Advanced NLP</p>
        <p className="text-xs text-on-surface-variant">This path could increase your hireability by 15% based on current market demand.</p>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map(s => (
            <span key={s} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">{s}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
