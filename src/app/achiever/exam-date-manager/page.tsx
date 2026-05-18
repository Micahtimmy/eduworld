'use client'

import { useState } from 'react'
import { Plus, Trash2, AlertTriangle, CalendarDays } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Exam = {
  id: string
  subject: string
  emoji: string
  paper: string
  date: string
  board: string
  daysLeft: number
}

const INITIAL_EXAMS: Exam[] = [
  {
    id: '1',
    subject: 'Physics',
    emoji: '⚡',
    paper: 'A-Level Paper 1',
    date: '2025-06-01',
    board: 'Cambridge',
    daysLeft: 14,
  },
  {
    id: '2',
    subject: 'Mathematics',
    emoji: '🧮',
    paper: 'Mock Paper',
    date: '2025-06-15',
    board: 'Internal',
    daysLeft: 28,
  },
  {
    id: '3',
    subject: 'Chemistry',
    emoji: '⚗️',
    paper: 'IGCSE Paper 2',
    date: '2025-07-01',
    board: 'IGCSE',
    daysLeft: 45,
  },
  {
    id: '4',
    subject: 'Biology',
    emoji: '🧬',
    paper: 'End of Term Exam',
    date: '2025-07-20',
    board: 'School',
    daysLeft: 63,
  },
]

const SUBJECT_OPTIONS = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'History', 'Geography']
const BOARD_OPTIONS = ['WAEC', 'IGCSE', 'A-Level', 'Cambridge', 'Internal', 'School']

function getUrgency(daysLeft: number): 'high' | 'medium' | 'low' {
  if (daysLeft <= 14) return 'high'
  if (daysLeft <= 30) return 'medium'
  return 'low'
}

function CountdownBadge({ daysLeft }: { daysLeft: number }) {
  const urgency = getUrgency(daysLeft)
  return (
    <span className={cn(
      'text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap',
      urgency === 'high' ? 'bg-red-100 text-red-700' :
      urgency === 'medium' ? 'bg-amber-100 text-amber-700' :
      'bg-green-100 text-green-700'
    )}>
      {daysLeft}d left
    </span>
  )
}

export default function AchieverExamDateManagerPage() {
  const [exams, setExams] = useState<Exam[]>(INITIAL_EXAMS)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ subject: '', paper: '', date: '', board: '' })

  const hasUrgentExam = exams.some(e => e.daysLeft <= 7)

  const handleAdd = () => {
    if (!form.subject || !form.date) return
    const dateObj = new Date(form.date)
    const today = new Date()
    const daysLeft = Math.max(0, Math.floor((dateObj.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)))
    const emojiMap: Record<string, string> = {
      Mathematics: '🧮', Physics: '⚡', Chemistry: '⚗️', Biology: '🧬',
      English: '📚', History: '🏛️', Geography: '🌍',
    }
    const newExam: Exam = {
      id: Date.now().toString(),
      subject: form.subject,
      emoji: emojiMap[form.subject] || '📝',
      paper: form.paper || 'Exam',
      date: form.date,
      board: form.board || 'Unknown',
      daysLeft,
    }
    setExams(prev => [...prev, newExam].sort((a, b) => a.daysLeft - b.daysLeft))
    setForm({ subject: '', paper: '', date: '', board: '' })
    setShowForm(false)
  }

  const handleDelete = (id: string) => {
    setExams(prev => prev.filter(e => e.id !== id))
  }

  return (
    <div className="min-h-screen bg-surface-lowest p-4 space-y-5 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">My Exams</h1>
          <p className="text-sm text-on-surface-variant mt-1">Track all upcoming exam dates</p>
        </div>
        <Button
          onClick={() => setShowForm(!showForm)}
          size="sm"
          className="gap-2 shrink-0"
        >
          <Plus className="h-4 w-4" />
          Add Exam
        </Button>
      </div>

      {/* Urgent Alert */}
      {hasUrgentExam && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-red-900 text-sm">Exam within 7 days!</p>
            <p className="text-xs text-red-700 mt-0.5">Make sure your revision is on track. Check your planner for today&apos;s sessions.</p>
          </div>
        </div>
      )}

      {/* Add Exam Form */}
      {showForm && (
        <div className="bg-surface-low rounded-2xl border border-primary/30 p-4 space-y-3">
          <p className="font-semibold text-on-surface text-sm">Add New Exam</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <select
              value={form.subject}
              onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
              className="bg-surface-lowest border border-outline-variant rounded-xl px-3 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Subject</option>
              {SUBJECT_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <input
              type="text"
              placeholder="Paper / exam name"
              value={form.paper}
              onChange={e => setForm(f => ({ ...f, paper: e.target.value }))}
              className="bg-surface-lowest border border-outline-variant rounded-xl px-3 py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="date"
              value={form.date}
              onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
              className="bg-surface-lowest border border-outline-variant rounded-xl px-3 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <select
              value={form.board}
              onChange={e => setForm(f => ({ ...f, board: e.target.value }))}
              className="bg-surface-lowest border border-outline-variant rounded-xl px-3 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Exam Board</option>
              {BOARD_OPTIONS.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>
          <div className="flex gap-2 pt-1">
            <Button variant="outline" size="sm" onClick={() => setShowForm(false)} className="flex-1">Cancel</Button>
            <Button size="sm" onClick={handleAdd} className="flex-1 gap-1">
              <Plus className="h-3.5 w-3.5" />
              Add
            </Button>
          </div>
        </div>
      )}

      {/* Exam List */}
      <div className="space-y-3">
        <p className="text-xs text-on-surface-variant font-medium uppercase tracking-wider">
          {exams.length} exam{exams.length !== 1 ? 's' : ''} — sorted by date
        </p>
        {exams.map(exam => {
          const urgency = getUrgency(exam.daysLeft)
          return (
            <div
              key={exam.id}
              className={cn(
                'bg-surface-low rounded-2xl border p-4 space-y-3',
                urgency === 'high' ? 'border-red-200' :
                urgency === 'medium' ? 'border-amber-200' :
                'border-outline-variant'
              )}
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  'w-12 h-12 rounded-2xl flex items-center justify-center shrink-0',
                  urgency === 'high' ? 'bg-red-100' :
                  urgency === 'medium' ? 'bg-amber-100' :
                  'bg-primary/10'
                )}>
                  <span className="text-2xl">{exam.emoji}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-semibold text-on-surface text-sm">{exam.subject} {exam.paper}</p>
                    <CountdownBadge daysLeft={exam.daysLeft} />
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <CalendarDays className="h-3 w-3 text-on-surface-variant" />
                    <span className="text-xs text-on-surface-variant">{exam.date}</span>
                    <span className="text-xs bg-surface-high px-1.5 py-0.5 rounded font-medium text-on-surface-variant">{exam.board}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(exam.id)}
                  className="w-8 h-8 rounded-full hover:bg-red-100 flex items-center justify-center transition-colors shrink-0"
                >
                  <Trash2 className="h-4 w-4 text-on-surface-variant hover:text-red-500" />
                </button>
              </div>

              {/* Revision Coverage Bar */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-on-surface-variant">Revision coverage</span>
                  <span className="font-bold text-on-surface">{Math.min(100, Math.round((1 - exam.daysLeft / 90) * 100))}%</span>
                </div>
                <div className="h-1.5 bg-surface-high rounded-full overflow-hidden">
                  <div
                    className={cn('h-full rounded-full',
                      urgency === 'high' ? 'bg-red-500' :
                      urgency === 'medium' ? 'bg-amber-500' :
                      'bg-green-500'
                    )}
                    style={{ width: `${Math.min(100, Math.round((1 - exam.daysLeft / 90) * 100))}%` }}
                  />
                </div>
              </div>
            </div>
          )
        })}

        {exams.length === 0 && (
          <div className="bg-surface-low rounded-2xl border border-outline-variant p-8 text-center space-y-2">
            <span className="text-4xl">📅</span>
            <p className="font-semibold text-on-surface">No exams added yet</p>
            <p className="text-sm text-on-surface-variant">Add your upcoming exams to start tracking</p>
          </div>
        )}
      </div>
    </div>
  )
}
