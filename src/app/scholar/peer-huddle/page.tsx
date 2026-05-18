'use client'
import { Sparkles, Mic, MicOff, Users, GitCommit, Play, Square } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const ROOMS = [
  { name: 'Quantum Computing Lab', participants: 4, status: 'ACTIVE', color: 'bg-green-100 text-green-700' },
  { name: 'Biology Study Group', participants: 0, status: 'EMPTY', color: 'bg-surface-high text-on-surface-variant' },
  { name: 'Literature Circle', participants: 2, status: 'ACTIVE', color: 'bg-green-100 text-green-700' },
]

const PARTICIPANTS = [
  { name: 'Dr. E. Thorne', role: 'Presenting', initials: 'ET', active: true },
  { name: 'Alex Johnson', role: 'Listener', initials: 'AJ', active: false },
  { name: 'Maria Santos', role: 'Listener', initials: 'MS', active: false },
  { name: 'James Park', role: 'Listener', initials: 'JP', active: false },
]

const CANVAS_NODES = [
  { label: 'Quantum Entanglement', x: '20%', y: '30%', color: 'bg-primary/10 border-primary/30' },
  { label: 'Neural Networks', x: '55%', y: '20%', color: 'bg-ai/10 border-ai/30' },
  { label: 'Superposition', x: '70%', y: '55%', color: 'bg-primary/10 border-primary/30' },
  { label: 'Decoherence', x: '30%', y: '65%', color: 'bg-amber-100 border-amber-300' },
]

const SPRINTS = [
  { title: 'Q3 Data Analysis', assigned: 'Team Alpha', due: 'Oct 28', status: 'In Progress' },
  { title: 'Literature Review', assigned: 'Team Beta', due: 'Nov 02', status: 'Pending' },
]

export default function ScholarPeerHuddlePage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Peer Research & Huddle Hub</h1>
          <p className="text-sm text-on-surface-variant mt-1">Collaborate in real-time with spatial audio rooms and shared workspaces.</p>
        </div>
        <Button className="gap-2 bg-ai hover:bg-ai/90"><Sparkles className="h-4 w-4" /> AI Research Mode</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Spatial Audio Rooms */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Spatial Audio Rooms</h2>
          <div className="space-y-3">
            {ROOMS.map(room => (
              <div key={room.name} className="flex items-center justify-between p-3 bg-surface-low rounded-xl">
                <div>
                  <p className="text-sm font-semibold text-on-surface">{room.name}</p>
                  <p className="text-xs text-on-surface-variant">{room.participants} participants</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={cn('text-xs px-2 py-0.5 rounded-full font-semibold', room.color)}>{room.status}</span>
                  {room.status === 'ACTIVE' && (
                    <Button size="sm" variant="outline" className="h-7 text-xs">Join</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full gap-2"><Play className="h-4 w-4" /> Create New Room</Button>
        </div>

        {/* Live Sprint Session */}
        <div className="lg:col-span-2 bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display font-semibold text-on-surface">Live Sprint: Q3 Data Analysis</h2>
              <p className="text-xs text-on-surface-variant">4 participants · Spatial audio active</p>
            </div>
            <span className="flex items-center gap-1.5 text-xs bg-green-100 text-green-700 px-3 py-1.5 rounded-full font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> LIVE
            </span>
          </div>

          {/* Participants */}
          <div className="flex gap-3 flex-wrap">
            {PARTICIPANTS.map(p => (
              <div key={p.name} className={cn('flex items-center gap-2 p-2 rounded-xl border', p.active ? 'border-primary bg-primary/5' : 'border-outline-variant bg-surface-low')}>
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">{p.initials}</div>
                <div>
                  <p className="text-xs font-semibold text-on-surface">{p.name}</p>
                  <p className="text-xs text-on-surface-variant">{p.role}</p>
                </div>
                {p.active ? <Mic className="h-3.5 w-3.5 text-green-600" /> : <MicOff className="h-3.5 w-3.5 text-on-surface-variant" />}
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <Button size="sm" variant="outline" className="gap-2"><Mic className="h-4 w-4" /> Unmute</Button>
            <Button size="sm" variant="outline" className="gap-2 text-red-600 border-red-200"><Square className="h-4 w-4" /> Leave Room</Button>
          </div>
        </div>
      </div>

      {/* Persistent Canvas */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Persistent Research Canvas</h2>
          <Button size="sm" variant="outline">Edit Canvas</Button>
        </div>
        <div className="relative h-48 bg-surface-low rounded-xl overflow-hidden border border-outline-variant">
          {CANVAS_NODES.map(node => (
            <div
              key={node.label}
              className={cn('absolute px-3 py-1.5 rounded-xl border text-xs font-semibold text-on-surface', node.color)}
              style={{ left: node.x, top: node.y }}
            >
              {node.label}
            </div>
          ))}
          <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
            <line x1="25%" y1="35%" x2="57%" y2="25%" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.5" />
            <line x1="57%" y1="25%" x2="72%" y2="58%" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.5" />
            <line x1="25%" y1="35%" x2="33%" y2="68%" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* Lab Notebook */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-semibold text-on-surface">Lab Notebook</h2>
            <span className="text-xs font-mono text-on-surface-variant bg-surface-low px-2 py-1 rounded-lg">commit a7f892c</span>
          </div>
          <div className="space-y-2">
            <div className="p-3 bg-surface-low rounded-xl">
              <p className="text-xs font-mono text-on-surface-variant">Oct 24, 2023 · 2:34 PM</p>
              <p className="text-sm text-on-surface mt-1">Initial observations: quantum decoherence patterns align with neural activation sequences at 847Hz frequency band.</p>
            </div>
            <div className="p-3 bg-surface-low rounded-xl">
              <p className="text-xs font-mono text-on-surface-variant">Oct 24, 2023 · 3:10 PM</p>
              <p className="text-sm text-on-surface mt-1">Cross-reference with Santos et al. (2022) confirms hypothesis. Running regression analysis.</p>
            </div>
          </div>
          <Button variant="outline" className="w-full gap-2"><GitCommit className="h-4 w-4" /> Commit Entry</Button>
        </div>

        {/* Active Sprints */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Active Sprints</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-outline-variant">
                  {['Sprint', 'Assigned', 'Due', 'Status'].map(h => (
                    <th key={h} className="text-left pb-2 text-xs font-semibold uppercase text-on-surface-variant pr-4 last:pr-0">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {SPRINTS.map(s => (
                  <tr key={s.title} className="hover:bg-surface-low transition-colors">
                    <td className="py-3 pr-4 text-sm font-semibold text-on-surface">{s.title}</td>
                    <td className="py-3 pr-4 text-xs text-on-surface-variant">{s.assigned}</td>
                    <td className="py-3 pr-4 text-xs text-on-surface-variant">{s.due}</td>
                    <td className="py-3">
                      <span className={cn('text-xs px-2 py-0.5 rounded-full font-medium', s.status === 'In Progress' ? 'bg-primary/10 text-primary' : 'bg-surface-high text-on-surface-variant')}>{s.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Button variant="outline" className="w-full gap-2"><Users className="h-4 w-4" /> View All Sprints</Button>
        </div>
      </div>
    </div>
  )
}
