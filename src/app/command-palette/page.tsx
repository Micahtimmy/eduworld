'use client'
import { Search, TrendingUp, Brain, Clock, ChevronRight, Sparkles } from 'lucide-react'

const ACTIONS = [
  { icon: TrendingUp, label: 'Generate Workforce ROI Report for Q3', sub: 'Predictive analysis based on current skills gap' },
  { icon: Brain, label: 'Identify High-Risk Skills Gaps', sub: 'Analyze departments with declining certification rates' },
]

const RECENT = [
  { label: 'Global User Management', href: '/users' },
  { label: 'Cloud Infrastructure Billing', href: '/admin/billing' },
]

const TIERS = ['Ecosystem', 'Governance', 'Operations', 'Learning', 'Analytics', 'Faculty', 'Archive', 'Legacy']

export default function CommandPalettePage() {
  return (
    <div className="min-h-screen bg-black/50 flex items-start justify-center pt-24 px-4">
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant w-full max-w-2xl shadow-2xl overflow-hidden">
        {/* Search Bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-outline-variant">
          <Search className="h-5 w-5 text-on-surface-variant shrink-0" />
          <input
            className="flex-1 bg-transparent text-sm outline-none text-on-surface placeholder:text-on-surface-variant"
            placeholder="Search commands, pages, or ask AI..."
            autoFocus
          />
          <span className="text-xs text-on-surface-variant bg-surface-low px-1.5 py-0.5 rounded border border-outline-variant">ESC</span>
        </div>

        {/* AI Actions */}
        <div className="p-2">
          <p className="text-xs font-semibold text-on-surface-variant px-2 py-1.5 uppercase tracking-wide">AI Actions</p>
          {ACTIONS.map(a => (
            <button key={a.label} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface-low text-left group">
              <div className="w-8 h-8 rounded-lg bg-ai/10 flex items-center justify-center shrink-0">
                <a.icon className="h-4 w-4 text-ai" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-on-surface">{a.label}</p>
                <p className="text-xs text-on-surface-variant">{a.sub}</p>
              </div>
              <ChevronRight className="h-4 w-4 text-on-surface-variant opacity-0 group-hover:opacity-100" />
            </button>
          ))}
        </div>

        <div className="border-t border-outline-variant" />

        {/* Recent */}
        <div className="p-2">
          <p className="text-xs font-semibold text-on-surface-variant px-2 py-1.5 uppercase tracking-wide">Recent</p>
          {RECENT.map(r => (
            <button key={r.label} className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-surface-low text-left">
              <Clock className="h-4 w-4 text-on-surface-variant shrink-0" />
              <span className="text-sm text-on-surface">{r.label}</span>
              <span className="text-xs text-on-surface-variant ml-auto">{r.href}</span>
            </button>
          ))}
        </div>

        <div className="border-t border-outline-variant" />

        {/* User Context */}
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0">SJ</div>
          <div>
            <p className="text-sm font-semibold text-on-surface">Sarah Jenkins</p>
            <p className="text-xs text-on-surface-variant">Global Lead Admin</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">📚 Adv. Data Science</span>
          </div>
        </div>

        <div className="border-t border-outline-variant" />

        {/* Tier Navigation */}
        <div className="px-4 py-3">
          <p className="text-xs font-semibold text-on-surface-variant mb-2">Navigation Tiers</p>
          <div className="flex flex-wrap gap-1.5">
            {TIERS.map((t, i) => (
              <button key={t} className={`text-xs px-2.5 py-1 rounded-lg font-medium ${i === 0 ? 'bg-primary text-white' : 'bg-surface-low text-on-surface-variant hover:bg-surface-high'}`}>{t}</button>
            ))}
          </div>
        </div>

        <div className="border-t border-outline-variant" />

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2">
          <p className="text-xs text-on-surface-variant">Need Assistance? Access the deep-link documentation</p>
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-3 w-3 text-ai" />
            <span className="text-xs text-ai font-semibold">Powered by EduWorld AI</span>
          </div>
        </div>
      </div>
    </div>
  )
}
