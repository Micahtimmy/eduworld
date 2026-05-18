'use client'
import { Search, Plus } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'

const COURSES = [
  { id: 'c1', name: 'Advanced Calculus', code: 'MATH301', credits: 4, progress: 68, lessons: 24, instructor: 'Dr. Adeyemi', color: '#3b82f6' },
  { id: 'c2', name: 'Organic Chemistry', code: 'CHEM240', credits: 3, progress: 45, lessons: 18, instructor: 'Prof. Chen', color: '#10b981' },
  { id: 'c3', name: 'Data Structures & Algorithms', code: 'CS201', credits: 4, progress: 82, lessons: 30, instructor: 'Dr. Osei', color: '#8b5cf6' },
  { id: 'c4', name: 'Modern World History', code: 'HIST150', credits: 3, progress: 20, lessons: 20, instructor: 'Prof. Ibrahim', color: '#f59e0b' },
]

export default function ScholarCoursesPage() {
  const [search, setSearch] = useState('')
  const filtered = COURSES.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.code.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-6 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">My Courses</h1>
          <p className="text-sm text-on-surface-variant">{COURSES.length} enrolled courses</p>
        </div>
        <Button size="sm" className="gap-2">
          <Plus className="h-4 w-4" />
          Enroll
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant" />
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search courses..."
          className="w-full h-10 pl-9 pr-4 rounded-xl border border-outline-variant bg-surface-lowest text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 font-body"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map(course => (
          <Card key={course.id} interactive>
            <CardContent className="p-5">
              <Link href={`/scholar/courses/${course.id}`} className="block space-y-3">
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${course.color}20` }}>
                    <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: course.color }} />
                  </div>
                  <Badge variant="neutral" size="sm">{course.credits} credits</Badge>
                </div>
                <div>
                  <p className="font-label font-semibold text-on-surface">{course.name}</p>
                  <p className="text-xs text-on-surface-variant">{course.code} · {course.instructor}</p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs font-label text-on-surface-variant">{course.lessons} lessons</p>
                    <span className="text-xs font-label font-semibold text-on-surface">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} size="sm" />
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
