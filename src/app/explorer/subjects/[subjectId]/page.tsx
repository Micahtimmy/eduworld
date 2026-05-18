'use client'
import Link from 'next/link'
import { CheckCircle, Lock, PlayCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const UNITS = [
  { id: 1, icon: '🌍', title: "Earth's Layers", status: 'completed', lessons: '5/5', progress: 100 },
  { id: 2, icon: '🚀', title: 'The Solar System', status: 'in-progress', lessons: '3/5', progress: 60 },
  { id: 3, icon: '⚗️', title: 'Chemistry Basics', status: 'locked', lessons: '0/6', progress: 0, lockMsg: 'Finish Unit 2 First' },
  { id: 4, icon: '🌿', title: 'Ecosystems', status: 'locked', lessons: '0/5', progress: 0, lockMsg: 'Complete previous units' },
]

export default function ExplorerSubjectPage() {
  return (
    <div className="p-4 space-y-5">
      {/* Subject Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-5 text-white space-y-2">
        <div className="flex items-center gap-2 text-sm opacity-80">
          <span>🔥 12 day streak</span>
          <span>·</span>
          <span>🏅 Level 4 Scholar</span>
        </div>
        <h1 className="font-display font-bold text-2xl">Science Adventures</h1>
        <p className="text-sm opacity-90">Explore the wonders of the universe, from tiny atoms to massive galaxies.</p>
        <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 w-fit text-xs font-medium">
          🏅 Level 4 Scholar — 450/600 XP
        </div>
      </div>

      {/* Units */}
      <div className="space-y-3">
        {UNITS.map(u => (
          <div key={u.id} className={cn('bg-surface-lowest rounded-2xl border p-4 space-y-3', u.status === 'locked' ? 'border-outline-variant opacity-60' : 'border-outline-variant')}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{u.icon}</span>
                <div>
                  <p className="font-semibold text-sm text-on-surface">Unit {u.id}: {u.title}</p>
                  <p className="text-xs text-on-surface-variant">{u.lessons} lessons</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {u.status === 'completed' && <CheckCircle className="h-5 w-5 text-green-500" />}
                {u.status === 'in-progress' && <PlayCircle className="h-5 w-5 text-primary" />}
                {u.status === 'locked' && <Lock className="h-5 w-5 text-on-surface-variant" />}
              </div>
            </div>
            {u.status !== 'locked' && (
              <div className="h-2 bg-surface-high rounded-full overflow-hidden">
                <div className={cn('h-full rounded-full transition-all', u.status === 'completed' ? 'bg-green-500' : 'bg-primary')} style={{ width: `${u.progress}%` }} />
              </div>
            )}
            {u.status === 'locked' && <p className="text-xs text-on-surface-variant">{u.lockMsg}</p>}
            {u.status === 'completed' && <Button variant="outline" size="sm" className="w-full">Review</Button>}
            {u.status === 'in-progress' && (
              <Link href={`/explorer/learn`}>
                <Button size="sm" className="w-full">Continue</Button>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
