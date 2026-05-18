'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const GRADES = [
  { course: 'Advanced Calculus', code: 'MATH301', grade: 'A-', percent: 91, assignments: 8, quizzes: 4 },
  { course: 'Organic Chemistry', code: 'CHEM240', grade: 'B+', percent: 87, assignments: 6, quizzes: 3 },
  { course: 'Data Structures', code: 'CS201', grade: 'A', percent: 95, assignments: 10, quizzes: 5 },
  { course: 'Modern History', code: 'HIST150', grade: 'B', percent: 83, assignments: 5, quizzes: 2 },
]

const GRADE_COLORS: Record<string, string> = {
  'A': 'success', 'A-': 'success', 'A+': 'success',
  'B+': 'success', 'B': 'warning', 'B-': 'warning',
  'C+': 'warning', 'C': 'warning',
  'D': 'error', 'F': 'error',
}

const GPA = (GRADES.reduce((sum, g) => sum + g.percent, 0) / GRADES.length / 25 * 1).toFixed(2)

export default function ScholarGradesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 lg:px-6 py-6 space-y-6">
      <div>
        <h1 className="font-display font-bold text-2xl text-on-surface">My Grades</h1>
        <p className="text-sm text-on-surface-variant">Current semester · 4 courses</p>
      </div>

      {/* GPA card */}
      <div className="bg-primary rounded-2xl p-6 text-white text-center">
        <p className="text-sm font-label opacity-75 uppercase tracking-wide">Cumulative GPA</p>
        <p className="font-display font-extrabold text-5xl mt-1">3.74</p>
        <p className="text-sm opacity-75 mt-1">Dean&apos;s List eligibility threshold: 3.5</p>
      </div>

      {/* Grade cards */}
      <div className="space-y-3">
        {GRADES.map(g => (
          <Card key={g.code}>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-lg">{g.grade}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-label font-semibold text-on-surface">{g.course}</p>
                  <p className="text-xs text-on-surface-variant">{g.code} · {g.assignments} assignments · {g.quizzes} quizzes</p>
                </div>
                <Badge variant={GRADE_COLORS[g.grade] as 'success' | 'warning' | 'error'} size="sm">
                  {g.percent}%
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
