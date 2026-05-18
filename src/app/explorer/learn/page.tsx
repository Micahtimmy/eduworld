'use client'
import { useState } from 'react'
import { Search } from 'lucide-react'
import Link from 'next/link'
import { MobileTopBar } from '@/components/shared/navigation/TopBar'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { SUBJECTS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const SUBJECT_PROGRESS: Record<string, number> = {
  maths: 65, english: 40, science: 80, history: 20,
  geography: 55, art: 35, music: 10, pe: 90,
}

export default function ExplorerLearnPage() {
  const [search, setSearch] = useState('')
  const filtered = SUBJECTS.filter(s => s.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <MobileTopBar title="Learn" />
      <div className="px-4 py-4 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search subjects..."
            className="w-full h-10 pl-9 pr-4 rounded-xl border border-outline-variant bg-surface-lowest text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 font-body"
          />
        </div>

        {/* Subjects */}
        <div className="space-y-3">
          {filtered.map(subject => {
            const progress = SUBJECT_PROGRESS[subject.id] ?? 0
            return (
              <Link
                key={subject.id}
                href={`/explorer/learn/${subject.id}`}
                className="flex items-center gap-4 p-4 bg-surface-lowest rounded-2xl border border-outline-variant hover:border-primary/50 hover:shadow-sm transition-all"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                  style={{ backgroundColor: `${subject.color}20` }}>
                  {subject.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-label font-semibold text-on-surface">{subject.name}</p>
                    <span className="text-xs font-label text-on-surface-variant">{progress}%</span>
                  </div>
                  <Progress value={progress} size="sm" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
