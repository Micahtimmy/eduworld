'use client'
import { useState } from 'react'
import { Search, Plus } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { getInitials } from '@/lib/utils'

const EMPLOYEES = Array.from({ length: 10 }, (_, i) => ({
  id: `e${i + 1}`,
  name: ['Sarah Kim', 'James Okafor', 'Maya Patel', 'Tom Chen', 'Lisa Müller',
    'David Osei', 'Anna Kowalski', 'Marco Rossi', 'Fatima Al-Hassan', 'Jake Thompson'][i],
  department: ['Engineering', 'Product', 'Design', 'Engineering', 'HR',
    'Sales', 'Product', 'Engineering', 'Compliance', 'Design'][i],
  completion: 60 + Math.floor(Math.random() * 40),
  courses: 5 + Math.floor(Math.random() * 10),
  status: i % 7 === 0 ? 'inactive' : 'active',
}))

export default function EnterpriseEmployeesPage() {
  const [search, setSearch] = useState('')
  const filtered = EMPLOYEES.filter(e => e.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="max-w-5xl mx-auto px-4 lg:px-6 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Employees</h1>
          <p className="text-sm text-on-surface-variant">{EMPLOYEES.length} enrolled in L&D programs</p>
        </div>
        <Button size="sm" className="gap-2">
          <Plus className="h-4 w-4" /> Invite Employee
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant" />
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search employees..."
          className="w-full h-10 pl-9 pr-4 rounded-xl border border-outline-variant bg-surface-lowest text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 font-body"
        />
      </div>

      <div className="space-y-2">
        {filtered.map(emp => (
          <Card key={emp.id}>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <Avatar size="sm">
                  <AvatarFallback>{getInitials(emp.name)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="font-label font-semibold text-on-surface text-sm">{emp.name}</p>
                  <p className="text-xs text-on-surface-variant">{emp.department} · {emp.courses} courses</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <Progress value={emp.completion} size="sm" className="w-28" />
                    <span className="text-xs font-label text-on-surface-variant">{emp.completion}%</span>
                  </div>
                </div>
                <Badge variant={emp.status === 'active' ? 'success' : 'neutral'} size="sm">
                  {emp.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
