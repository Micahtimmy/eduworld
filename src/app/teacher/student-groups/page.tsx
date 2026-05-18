'use client'
import { Sparkles, Megaphone, ClipboardList, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

const GROUPS = [
  {
    name: 'Project Alpha', tag: 'High Performance', tagColor: 'green', sub: 'Capstone Research Phase',
    members: ['LC', 'JS', 'MR'], extra: '+2',
    progress: 85, progressLabel: 'Milestone Progress',
    activity: 'Submitted Outline.v2',
  },
  {
    name: 'Advanced Lab', tag: 'AI Generated', tagColor: 'blue', sub: 'Skill-Matched Pairing',
    members: ['AK', 'EW', 'DG'], extra: null,
    compatibility: 98,
    schedule: 'Lab C @ 2:00 PM',
  },
  {
    name: 'Remedial Support', tag: 'Priority Attention', tagColor: 'red', sub: 'Foundational Concepts',
    members: ['TB', 'SP'], extra: null,
    retention: 42,
    alert: 'Critical gap in Module 3 detected.',
  },
  {
    name: 'Science Explorers', tag: 'General', tagColor: 'gray', sub: 'Weekly Fieldwork Prep',
    members: ['FZ', 'EP'], extra: null,
    permissions: true,
    messages: 4,
  },
]

const TAG_STYLES: Record<string, string> = {
  green: 'bg-green-100 text-green-700',
  blue: 'bg-blue-100 text-blue-700',
  red: 'bg-red-100 text-red-700',
  gray: 'bg-surface-high text-on-surface-variant',
}

export default function TeacherStudentGroupsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Groups & Cohorts</h1>
          <p className="text-sm text-on-surface-variant mt-1">Manage student groups, performance-based cohorts, and project pairings.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1.5"><Megaphone className="h-3.5 w-3.5" /> Broadcast Message</Button>
          <Button variant="outline" size="sm" className="gap-1.5"><ClipboardList className="h-3.5 w-3.5" /> Bulk Assignment</Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Total Students', value: '124', sub: '+4 this month' },
          { label: 'Active Groups', value: '12', sub: 'Avg. 6 per group' },
          { label: 'Class Health', value: '92%', sub: '' },
        ].map(s => (
          <div key={s.label} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 text-center">
            <p className="font-display font-bold text-2xl text-on-surface">{s.value}</p>
            <p className="text-xs text-on-surface-variant mt-1">{s.label}</p>
            {s.sub && <p className="text-xs text-green-600 font-semibold">{s.sub}</p>}
          </div>
        ))}
      </div>

      {/* AI Insight */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-3 flex items-center gap-2">
        <Sparkles className="h-3.5 w-3.5 text-ai shrink-0" />
        <p className="text-xs text-on-surface-variant flex-1">Group &apos;Alpha&apos; shows high collaboration. Consider pairing student &apos;L. Chen&apos; for peer-tutoring in the Remedial Support group.</p>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2">
        {['All Cohorts', 'Project Groups', 'Performance-Based'].map((tab, i) => (
          <button key={tab} className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${i === 0 ? 'bg-primary text-white' : 'bg-surface-low text-on-surface-variant hover:bg-surface-high'}`}>{tab}</button>
        ))}
      </div>

      {/* Group Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {GROUPS.map(g => (
          <div key={g.name} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-on-surface">{g.name}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${TAG_STYLES[g.tagColor]}`}>{g.tag}</span>
                </div>
                <p className="text-xs text-on-surface-variant">{g.sub}</p>
              </div>
              <button className="text-on-surface-variant text-sm">⋮</button>
            </div>

            <div className="flex items-center gap-1.5">
              {g.members.map(m => (
                <div key={m} className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">{m}</div>
              ))}
              {g.extra && <span className="text-xs text-on-surface-variant">{g.extra}</span>}
            </div>

            {'progress' in g && g.progress !== undefined && (
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-on-surface-variant">{g.progressLabel}</span>
                  <span className="font-bold text-on-surface">{g.progress}%</span>
                </div>
                <div className="h-1.5 bg-surface-high rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${g.progress}%` }} />
                </div>
                <p className="text-xs text-on-surface-variant">{g.activity}</p>
              </div>
            )}

            {'compatibility' in g && g.compatibility !== undefined && (
              <div className="space-y-1">
                <p className="font-display font-bold text-2xl text-on-surface">{g.compatibility}% <span className="text-sm font-normal text-on-surface-variant">Compatibility</span></p>
                <p className="text-xs text-on-surface-variant">Optimized for collaborative problem solving and peer review stability.</p>
                <p className="text-xs text-on-surface-variant">🕒 {g.schedule}</p>
              </div>
            )}

            {'retention' in g && g.retention !== undefined && (
              <div className="space-y-1">
                <p className="text-xs text-red-600 font-semibold">⚠ Retention Rate: {g.retention}%</p>
                <p className="text-xs text-on-surface-variant">{g.alert}</p>
              </div>
            )}

            {'permissions' in g && g.permissions && (
              <div className="space-y-1">
                <p className="text-xs text-green-600">✓ Permissions Finalized</p>
                {g.messages && <p className="text-xs text-on-surface-variant">💬 {g.messages} unread messages</p>}
              </div>
            )}

            <div className="flex gap-2">
              {g.name === 'Project Alpha' && (
                <><Button size="sm" variant="outline" className="h-7 text-xs flex-1">View Analytics</Button><Button size="sm" className="h-7 text-xs flex-1">Message Group</Button></>
              )}
              {g.name === 'Advanced Lab' && (
                <><Button size="sm" className="h-7 text-xs flex-1">Confirm Setup</Button><Button size="sm" variant="outline" className="h-7 text-xs flex-1">Reshuffle</Button></>
              )}
              {g.name === 'Remedial Support' && (
                <><Button size="sm" className="h-7 text-xs flex-1">Open Live Session</Button><Button size="sm" variant="outline" className="h-7 text-xs flex-1">Add Resource</Button></>
              )}
              {g.name === 'Science Explorers' && (
                <><Button size="sm" variant="outline" className="h-7 text-xs flex-1">Assign Tasks</Button><Button size="sm" variant="outline" className="h-7 text-xs flex-1">Permissions</Button></>
              )}
            </div>
          </div>
        ))}

        {/* Create Cohort card */}
        <div className="border-2 border-dashed border-outline-variant rounded-2xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary/50 transition-colors min-h-40">
          <div className="w-10 h-10 rounded-full bg-surface-low flex items-center justify-center">
            <Plus className="h-5 w-5 text-on-surface-variant" />
          </div>
          <p className="font-semibold text-sm text-on-surface">Create Cohort</p>
          <p className="text-xs text-on-surface-variant">Manually add a new group</p>
        </div>
      </div>

      {/* AI Optimization */}
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-ai" />
          <span className="text-xs font-bold text-ai uppercase">Enhanced Intelligence</span>
        </div>
        <p className="font-semibold text-on-surface">Optimize your classroom dynamics instantly.</p>
        <p className="text-xs text-on-surface-variant">AI analyzes performance data, behavioral compatibility, and historical peer ratings to generate optimal group suggestions.</p>
        <Button size="sm">Start Auto-Grouping</Button>
      </div>
    </div>
  )
}
