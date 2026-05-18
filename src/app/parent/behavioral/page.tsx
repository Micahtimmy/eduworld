'use client'
import { Sparkles, Download, Mail, TrendingUp, AlertTriangle, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

const MILESTONES = [
  { icon: '⭐', date: 'Nov 15, 2023', title: 'Elected Class Representative', tags: ['Leadership', 'Public Speaking'] },
  { icon: '⚽', date: 'Oct 02, 2023', title: 'Joined Varsity Soccer Team', tags: ['Sportsmanship', 'Dedication'] },
  { icon: '❤️', date: 'Sep 20, 2023', title: 'Community Outreach Lead', tags: ['Service', 'Empathy'] },
]

const TEACHER_NOTES = [
  { initials: 'TH', name: 'Mr. Thomas Harris', subject: 'History', time: '2 Days Ago', note: 'Alex was instrumental in helping a new student settle in this week. Their emotional intelligence is far beyond their years.' },
  { initials: 'SL', name: 'Ms. Sarah Lee', subject: 'Biology', time: '1 Week Ago', note: 'Slight distraction during the lab session on Tuesday. However, Alex took feedback well and stayed back to complete all tasks.' },
  { initials: 'DK', name: 'Coach David King', subject: 'PE', time: '2 Weeks Ago', note: 'Alex is a natural captain. Encouraged the bench players during the rainy final last Thursday.' },
]

const ENGAGEMENT = [
  { label: 'Teamwork', pct: 80 },
  { label: 'Participation', pct: 60 },
  { label: 'Empathy', pct: 90 },
  { label: 'Conflict Res', pct: 40 },
]

export default function ParentBehavioralPage() {
  return (
    <div className="p-4 space-y-5 pb-24">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Behavior & Social Development</h1>
          <p className="text-sm text-on-surface-variant mt-1">Tracking Alex&apos;s growth beyond the classroom — empathy, leadership, community engagement.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1"><Download className="h-3 w-3" /> PDF</Button>
          <Button variant="outline" size="sm" className="gap-1"><Mail className="h-3 w-3" /> Counselor</Button>
        </div>
      </div>

      {/* Behavior Score */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <p className="text-xs text-on-surface-variant font-semibold">Behavior Score / Current Term</p>
        <div className="flex items-end gap-4">
          <p className="font-display font-bold text-4xl text-on-surface">840</p>
          <div className="flex items-center gap-1 text-green-600 pb-1">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-semibold">↑ 12% vs last month</span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs text-on-surface-variant">Positive Awards: <strong className="text-green-600">+24</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-400" />
            <span className="text-xs text-on-surface-variant">Points Deducted: <strong className="text-red-600">-4</strong></span>
          </div>
        </div>
        <div className="bg-ai/5 border border-ai/20 rounded-xl p-3 flex items-start gap-2">
          <Sparkles className="h-3.5 w-3.5 text-ai shrink-0 mt-0.5" />
          <p className="text-xs text-on-surface-variant">Alex shows high resilience. Despite a deduction for &apos;Late to Class&apos;, they recovered with three &apos;Peer Support&apos; awards this week.</p>
        </div>
      </div>

      {/* Social Engagement */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <h2 className="font-semibold text-sm text-on-surface">Social Engagement Mix</h2>
        <div className="space-y-2">
          {ENGAGEMENT.map(e => (
            <div key={e.label} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-on-surface">{e.label}</span>
                <span className="font-semibold text-on-surface">{e.pct}%</span>
              </div>
              <div className="h-2 bg-surface-high rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${e.pct >= 80 ? 'bg-green-500' : e.pct >= 60 ? 'bg-primary' : e.pct >= 40 ? 'bg-amber-400' : 'bg-red-400'}`} style={{ width: `${e.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <h2 className="font-semibold text-sm text-on-surface">Social Milestones — Academic Year 2023-24</h2>
        <div className="space-y-3">
          {MILESTONES.map(m => (
            <div key={m.title} className="flex gap-3">
              <span className="text-2xl">{m.icon}</span>
              <div>
                <p className="text-xs text-on-surface-variant">{m.date}</p>
                <p className="text-sm font-semibold text-on-surface">{m.title}</p>
                <div className="flex gap-1.5 mt-1">
                  {m.tags.map(t => (
                    <span key={t} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Teacher Notes */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <h2 className="font-semibold text-sm text-on-surface">Teacher Notes</h2>
        <div className="space-y-3">
          {TEACHER_NOTES.map(n => (
            <div key={n.name} className="flex gap-3 p-3 bg-surface-low rounded-xl">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0">{n.initials}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-on-surface">{n.name}</p>
                    <p className="text-xs text-on-surface-variant">{n.subject}</p>
                  </div>
                  <span className="text-xs text-on-surface-variant">{n.time}</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-1 line-clamp-3">{n.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAB */}
      <div className="fixed bottom-20 right-4">
        <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg text-white">
          <Plus className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
