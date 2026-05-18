'use client'
import Link from 'next/link'
import { Plus, Users, FileText, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const MEMBERS = [
  { name: 'Jordan Kim', initials: 'JK', online: true },
  { name: 'Priya Sharma', initials: 'PS', online: true },
  { name: 'Marcus Wei', initials: 'MW', online: false },
  { name: 'Aisha Bakr', initials: 'AB', online: false },
]

const SECTIONS = [
  { label: 'Research', percent: 80, color: 'text-green-600', bg: 'bg-green-500', trackBg: 'bg-green-100' },
  { label: 'Implementation', percent: 45, color: 'text-amber-600', bg: 'bg-amber-500', trackBg: 'bg-amber-100' },
  { label: 'Report', percent: 20, color: 'text-blue-600', bg: 'bg-blue-400', trackBg: 'bg-blue-100' },
]

const FILES = [
  { name: 'Literature_Review_v2.pdf', type: 'PDF', size: '2.4 MB', uploaded: 'Oct 20 · Jordan Kim' },
  { name: 'model_training.py', type: 'PY', size: '18 KB', uploaded: 'Oct 19 · Priya Sharma' },
  { name: 'Project_Outline_Draft.docx', type: 'DOCX', size: '340 KB', uploaded: 'Oct 17 · Marcus Wei' },
]

const FILE_COLORS: Record<string, string> = {
  PDF: 'bg-red-100 text-red-700',
  PY: 'bg-blue-100 text-blue-700',
  DOCX: 'bg-indigo-100 text-indigo-700',
}

function ProgressRing({ percent, color }: { percent: number; color: string }) {
  const r = 28
  const circ = 2 * Math.PI * r
  const offset = circ - (percent / 100) * circ
  return (
    <svg width="72" height="72" viewBox="0 0 72 72">
      <circle cx="36" cy="36" r={r} stroke="currentColor" className="text-outline-variant" strokeWidth="6" fill="none" />
      <circle
        cx="36" cy="36" r={r}
        stroke="currentColor"
        className={color.replace('text-', 'text-')}
        strokeWidth="6"
        fill="none"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 36 36)"
      />
      <text x="36" y="41" textAnchor="middle" className="text-xs font-bold" fill="currentColor" fontSize="13">{percent}%</text>
    </svg>
  )
}

export default function GroupProjectPage() {
  const overallProgress = Math.round(SECTIONS.reduce((sum, s) => sum + s.percent, 0) / SECTIONS.length)

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Group Projects</h1>
          <p className="text-sm text-on-surface-variant mt-1">Collaborate and track progress with your team</p>
        </div>
        <Button size="md" className="gap-2 shrink-0">
          <Plus className="h-4 w-4" /> New Project
        </Button>
      </div>

      {/* Active Project Card */}
      <Link href="/scholar/group-project/ml-final">
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-5 hover:shadow-md transition-all cursor-pointer">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="font-display font-semibold text-lg text-on-surface">Machine Learning Final Project</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-blue-100 text-blue-700">CS-701</span>
                <div className="flex items-center gap-1 text-xs text-on-surface-variant">
                  <Calendar className="h-3 w-3" /> Due Nov 30, 2024
                </div>
              </div>
            </div>
            <div className="text-right shrink-0">
              <p className="font-display font-bold text-2xl text-primary">{overallProgress}%</p>
              <p className="text-xs text-on-surface-variant">Complete</p>
            </div>
          </div>

          {/* Overall progress bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-on-surface-variant">
              <span>Overall progress</span>
              <span>{overallProgress}%</span>
            </div>
            <div className="h-2 bg-surface-low rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
          </div>

          {/* Section progress rings */}
          <div className="flex items-center gap-4 justify-around">
            {SECTIONS.map(s => (
              <div key={s.label} className="flex flex-col items-center gap-1.5">
                <div className={s.color}>
                  <ProgressRing percent={s.percent} color={s.color} />
                </div>
                <p className="text-xs font-medium text-on-surface">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Team */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-on-surface-variant" />
              <span className="text-sm text-on-surface-variant">{MEMBERS.length} members</span>
              <div className="flex -space-x-2 ml-1">
                {MEMBERS.map(m => (
                  <div key={m.name} className="relative">
                    <Avatar className="h-7 w-7 border-2 border-white dark:border-surface-mid">
                      <AvatarFallback className="text-xs font-semibold bg-primary/10 text-primary">{m.initials}</AvatarFallback>
                    </Avatar>
                    {m.online && (
                      <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 border border-white rounded-full" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <Badge variant="warning" size="sm">Active</Badge>
          </div>
        </div>
      </Link>

      {/* Recent Files */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Recent Files</h2>
          <Link href="/scholar/group-project/ml-final">
            <button className="text-xs text-primary hover:underline">View all →</button>
          </Link>
        </div>
        <div className="space-y-3">
          {FILES.map(f => (
            <div key={f.name} className="flex items-center gap-3">
              <div className={`text-xs font-bold px-2 py-1 rounded-lg shrink-0 ${FILE_COLORS[f.type]}`}>{f.type}</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-on-surface truncate">{f.name}</p>
                <p className="text-xs text-on-surface-variant">{f.size} · {f.uploaded}</p>
              </div>
              <FileText className="h-4 w-4 text-on-surface-variant shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
