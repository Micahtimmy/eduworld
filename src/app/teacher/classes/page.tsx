'use client'
import { Plus, Users } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ProgressRing } from '@/components/shared/charts/ProgressRing'

const CLASSES = [
  { id: '1', name: 'Year 9A', subject: 'Mathematics', students: 30, avgScore: 78, completion: 68 },
  { id: '2', name: 'Year 9B', subject: 'Mathematics', students: 28, avgScore: 82, completion: 72 },
  { id: '3', name: 'Year 10A', subject: 'Mathematics', students: 29, avgScore: 71, completion: 55 },
  { id: '4', name: 'Year 10B', subject: 'Mathematics', students: 31, avgScore: 85, completion: 80 },
  { id: '5', name: 'Year 11A', subject: 'Mathematics', students: 24, avgScore: 69, completion: 45 },
]

export default function TeacherClassesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-6 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">My Classes</h1>
          <p className="text-sm text-on-surface-variant">{CLASSES.length} classes · {CLASSES.reduce((a, c) => a + c.students, 0)} students</p>
        </div>
        <Button size="sm" className="gap-2">
          <Plus className="h-4 w-4" /> Add Class
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {CLASSES.map(cls => (
          <Card key={cls.id} interactive>
            <CardContent className="p-5">
              <Link href={`/teacher/classes/${cls.id}`} className="block">
                <div className="flex items-center gap-4">
                  <ProgressRing value={cls.completion} size={64} strokeWidth={6} label="done" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-label font-semibold text-on-surface">{cls.name}</p>
                      <Badge variant={cls.avgScore >= 80 ? 'success' : cls.avgScore >= 70 ? 'warning' : 'error'} size="sm">
                        Avg {cls.avgScore}%
                      </Badge>
                    </div>
                    <p className="text-xs text-on-surface-variant mt-0.5">{cls.subject}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Users className="h-3.5 w-3.5 text-on-surface-variant" />
                      <span className="text-xs font-label text-on-surface-variant">{cls.students} students</span>
                    </div>
                  </div>
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
