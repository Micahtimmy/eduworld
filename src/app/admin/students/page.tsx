'use client'
import { useState } from 'react'
import { Search, Plus, Filter } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { getInitials } from '@/lib/utils'

const STUDENTS = Array.from({ length: 12 }, (_, i) => ({
  id: `s${i + 1}`,
  name: ['Amara Okafor', 'Jide Mensah', 'Priya Sharma', 'Liu Wei', 'Sofia Martínez',
    'Kwame Asante', 'Aisha Diallo', 'Carlos Ruiz', 'Yuki Tanaka', 'Omar Hassan', 'Lena Müller', 'Fatima Nour'][i],
  grade: ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12'][i % 6],
  class: ['7A', '8B', '9A', '10B', '11A', '12B'][i % 6],
  avgScore: 60 + Math.floor(Math.random() * 35),
  status: i % 8 === 0 ? 'inactive' : 'active',
}))

export default function AdminStudentsPage() {
  const [search, setSearch] = useState('')
  const filtered = STUDENTS.filter(s => s.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="max-w-5xl mx-auto px-4 lg:px-6 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Students</h1>
          <p className="text-sm text-on-surface-variant">{STUDENTS.length} registered students</p>
        </div>
        <Button size="sm" className="gap-2">
          <Plus className="h-4 w-4" /> Add Student
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant" />
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search students..."
          className="w-full h-10 pl-9 pr-4 rounded-xl border border-outline-variant bg-surface-lowest text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 font-body"
        />
      </div>

      <div className="space-y-2">
        {filtered.map(student => (
          <Card key={student.id}>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <Avatar size="sm">
                  <AvatarFallback>{getInitials(student.name)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="font-label font-semibold text-on-surface text-sm truncate">{student.name}</p>
                  <p className="text-xs text-on-surface-variant">{student.grade} · Class {student.class}</p>
                </div>
                <Badge variant={student.avgScore >= 80 ? 'success' : student.avgScore >= 60 ? 'warning' : 'error'} size="sm">
                  {student.avgScore}%
                </Badge>
                <Badge variant={student.status === 'active' ? 'success' : 'neutral'} size="sm">
                  {student.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
