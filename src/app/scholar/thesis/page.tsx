'use client'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const MILESTONES = [
  { icon: '✓', title: 'Lit Review Submission', detail: 'Approved by Dr. Alan Stern on Oct 1.', status: 'done' },
  { icon: '✏', title: 'Draft 3 Integration', detail: 'Incorporate feedback from external reviewers...', progress: 65, status: 'active' },
  { icon: '⚖', title: 'Mock Defense Panel', detail: 'Scheduled for Nov 5.', status: 'upcoming' },
]

const ADVISOR_NOTES = [
  { name: 'Dr. E. Vance', time: '2h ago', note: 'Chapter 4 argument needs tighter framing. The causal chain in section 4.2 is unclear — tighten the statistical inference.' },
  { name: 'Dr. M. Li', time: 'Yesterday', note: 'Dataset B normalization looks off — check against the control group baseline again before the next draft.' },
]

const DATASETS = [
  { icon: '🗄', name: 'Q3_Neural_Telemetry.csv', size: '1.2 GB', updated: '2 days ago' },
  { icon: '📦', name: 'Legacy_Control_Group_Alpha', size: '450 MB', updated: 'Static Repository' },
]

const COMMITTEE = [
  { initials: 'EV', name: 'Dr. Vance', role: 'Chair' },
  { initials: 'ML', name: 'Dr. Li', role: 'Reader' },
  { initials: '+', name: 'External', role: 'Pending' },
]

export default function ScholarThesisPage() {
  return (
    <div className="p-4 md:p-6 space-y-6 max-w-5xl mx-auto">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-on-surface-variant uppercase font-semibold">Dissertation Workspace</p>
          <h1 className="font-display font-bold text-2xl text-on-surface mt-1">Neural Arch. in Quant. Systems</h1>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-bold">⏰ 42 DAYS TO DEFENSE</span>
            <span className="text-xs text-on-surface-variant">Nov 15, 2024 · Committee Review Room B</span>
          </div>
        </div>
      </div>

      {/* Defense Milestones */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Defense Milestones</h2>
          <button className="text-xs text-primary hover:underline">View Full Plan</button>
        </div>
        <div className="space-y-3">
          {MILESTONES.map(m => (
            <div key={m.title} className="flex items-start gap-3">
              <span className={`text-sm shrink-0 mt-0.5 ${m.status === 'done' ? 'text-green-500' : m.status === 'active' ? 'text-primary' : 'text-on-surface-variant'}`}>{m.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-on-surface">{m.title}</p>
                <p className="text-xs text-on-surface-variant">{m.detail}</p>
                {m.progress !== undefined && (
                  <div className="mt-1.5 h-1.5 bg-surface-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${m.progress}%` }} />
                  </div>
                )}
              </div>
              {m.progress !== undefined && <span className="text-xs font-bold text-on-surface shrink-0">{m.progress}%</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Advisor Notes */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <h2 className="font-display font-semibold text-on-surface">Advisor Notes</h2>
        <div className="space-y-3">
          {ADVISOR_NOTES.map(n => (
            <div key={n.name} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-primary">{n.name.slice(3, 5).toUpperCase()}</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-xs font-semibold text-on-surface">{n.name}</p>
                  <span className="text-xs text-on-surface-variant">{n.time}</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-0.5 italic">&ldquo;{n.note}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input type="text" placeholder="Reply to advisor..." className="flex-1 bg-surface-low rounded-xl px-3 py-2 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/30 border border-outline-variant" />
          <Button size="sm">→</Button>
        </div>
      </div>

      {/* AI Structural Analysis */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-ai" />
          <h2 className="font-display font-semibold text-on-surface">AI Structural Analysis</h2>
        </div>
        <p className="text-xs text-on-surface-variant">Draft v2.4 → Proposed v2.5</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-red-50 border border-red-200 rounded-xl p-3">
            <p className="text-[10px] font-semibold text-red-700 mb-1">Draft v2.4</p>
            <p className="text-xs text-on-surface-variant">Informal language, vague phrasing — &ldquo;results seem to suggest...&rdquo;</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-3">
            <p className="text-[10px] font-semibold text-green-700 mb-1">Proposed v2.5</p>
            <p className="text-xs text-on-surface-variant">Precise statistical language — &ldquo;results indicate significance at p &lt; 0.05&rdquo;</p>
          </div>
        </div>
        <Button size="sm" className="gap-1.5 bg-ai hover:bg-ai/90 text-white">✓ Accept Revision</Button>
      </div>

      {/* Source Datasets */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Source Datasets</h2>
        <div className="space-y-2">
          {DATASETS.map(d => (
            <div key={d.name} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
              <span className="text-xl shrink-0">{d.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-on-surface truncate">{d.name}</p>
                <p className="text-xs text-on-surface-variant">{d.size} · {d.updated}</p>
              </div>
              <button className="text-xs text-primary hover:underline shrink-0">⬇</button>
            </div>
          ))}
        </div>
      </div>

      {/* Committee Status */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center gap-2">
          <h2 className="font-display font-semibold text-on-surface">Committee Status</h2>
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">3 Members</span>
        </div>
        <div className="flex gap-3">
          {COMMITTEE.map(c => (
            <div key={c.name} className="flex-1 text-center space-y-1">
              <div className={`w-12 h-12 rounded-full mx-auto flex items-center justify-center ${c.role === 'Pending' ? 'border-2 border-dashed border-outline-variant' : 'bg-primary/10'}`}>
                <span className={`text-sm font-bold ${c.role === 'Pending' ? 'text-on-surface-variant' : 'text-primary'}`}>{c.initials}</span>
              </div>
              <p className="text-xs font-semibold text-on-surface">{c.name}</p>
              <p className="text-[10px] text-on-surface-variant">{c.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
