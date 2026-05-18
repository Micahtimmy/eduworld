'use client'
import { MobileTopBar } from '@/components/shared/navigation/TopBar'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { StreakBadge } from '@/components/shared/gamification/StreakBadge'
import { LevelBadge } from '@/components/shared/gamification/LevelBadge'
import Link from 'next/link'
import { ChevronRight, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SUBJECTS } from '@/lib/constants'

const CHILDREN = [
  {
    id: 'c1', name: 'Kofi Mensah', age: 9, grade: 'Year 4', emoji: '🌟',
    xp: 450, streak: 5, avgScore: 82,
    subjects: SUBJECTS.slice(0, 3).map(s => ({ ...s, progress: 65 + Math.floor(Math.random() * 30) })),
  },
  {
    id: 'c2', name: 'Ama Mensah', age: 14, grade: 'Year 9', emoji: '🚀',
    xp: 2100, streak: 12, avgScore: 76,
    subjects: SUBJECTS.slice(1, 5).map(s => ({ ...s, progress: 45 + Math.floor(Math.random() * 50) })),
  },
]

export default function ParentChildrenPage() {
  return (
    <div>
      <MobileTopBar
        title="My Children"
        rightAction={
          <Button size="sm" variant="ghost" className="gap-1">
            <Plus className="h-4 w-4" /> Add
          </Button>
        }
      />
      <div className="px-4 py-4 space-y-4">
        {CHILDREN.map(child => (
          <Card key={child.id}>
            <CardContent className="p-4 space-y-4">
              {/* Header */}
              <Link href={`/parent/children/${child.id}`} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl shrink-0">
                  {child.emoji}
                </div>
                <div className="flex-1">
                  <p className="font-label font-semibold text-on-surface">{child.name}</p>
                  <p className="text-xs text-on-surface-variant">{child.grade} · Age {child.age}</p>
                </div>
                <div className="flex items-center gap-2">
                  <LevelBadge xp={child.xp} size="sm" />
                  <StreakBadge streak={child.streak} size="sm" />
                  <ChevronRight className="h-4 w-4 text-on-surface-variant" />
                </div>
              </Link>

              {/* Subject progress */}
              <div className="space-y-2">
                {child.subjects.map(s => (
                  <div key={s.id} className="flex items-center gap-3">
                    <span className="text-sm w-5">{s.emoji}</span>
                    <span className="text-xs font-label font-semibold text-on-surface w-20 shrink-0 truncate">{s.name}</span>
                    <Progress value={s.progress} size="sm" className="flex-1" />
                    <span className="text-xs font-label text-on-surface-variant w-8 text-right">{s.progress}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
