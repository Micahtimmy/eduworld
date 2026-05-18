'use client'
import { useState } from 'react'
import { MobileTopBar } from '@/components/shared/navigation/TopBar'
import { Search, Filter } from 'lucide-react'
import Link from 'next/link'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { SUBJECTS } from '@/lib/constants'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

const RECENT_LESSONS = [
  { id: 'l1', subject: 'Mathematics', title: 'Quadratic Equations', progress: 70, icon: '➕' },
  { id: 'l2', subject: 'Physics', title: 'Newton\'s Laws', progress: 45, icon: '⚛️' },
  { id: 'l3', subject: 'Chemistry', title: 'Periodic Table', progress: 90, icon: '🧪' },
]

export default function AchieverStudyPage() {
  const [search, setSearch] = useState('')

  return (
    <div>
      <MobileTopBar title="Study" />
      <div className="px-4 py-4 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search lessons, topics..."
            className="w-full h-10 pl-9 pr-4 rounded-xl border border-outline-variant bg-surface-lowest text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 font-body"
          />
        </div>

        <Tabs defaultValue="subjects">
          <TabsList className="w-full">
            <TabsTrigger value="subjects" className="flex-1">Subjects</TabsTrigger>
            <TabsTrigger value="recent" className="flex-1">Recent</TabsTrigger>
            <TabsTrigger value="saved" className="flex-1">Saved</TabsTrigger>
          </TabsList>

          <TabsContent value="subjects">
            <div className="space-y-2">
              {SUBJECTS.filter(s => s.name.toLowerCase().includes(search.toLowerCase())).map(s => (
                <Link
                  key={s.id}
                  href={`/achiever/study/${s.id}`}
                  className="flex items-center gap-4 p-4 bg-surface-lowest rounded-2xl border border-outline-variant hover:border-primary/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                    style={{ backgroundColor: `${s.color}20` }}>
                    {s.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-label font-semibold text-on-surface">{s.name}</p>
                    <p className="text-xs text-on-surface-variant mb-1.5">12 lessons · 3 practice tests</p>
                    <Progress value={Math.floor(Math.random() * 80) + 10} size="sm" />
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent">
            <div className="space-y-2">
              {RECENT_LESSONS.map(lesson => (
                <Link
                  key={lesson.id}
                  href={`/achiever/study/lesson/${lesson.id}`}
                  className="flex items-center gap-4 p-4 bg-surface-lowest rounded-2xl border border-outline-variant hover:border-primary/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-surface-high flex items-center justify-center text-2xl shrink-0">
                    {lesson.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-label font-semibold text-on-surface">{lesson.title}</p>
                    <p className="text-xs text-on-surface-variant mb-1.5">{lesson.subject}</p>
                    <Progress value={lesson.progress} size="sm" />
                  </div>
                  <Badge variant="neutral" size="sm">{lesson.progress}%</Badge>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="saved">
            <div className="text-center py-12">
              <p className="text-4xl mb-3">📌</p>
              <p className="font-label font-semibold text-on-surface">No saved lessons yet</p>
              <p className="text-sm text-on-surface-variant mt-1">Bookmark lessons to access them here.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
