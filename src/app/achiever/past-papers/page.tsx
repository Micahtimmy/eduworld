'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Clock, BookOpen, Play, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const SUBJECTS = ['All', 'Maths', 'Physics', 'Chemistry', 'Biology']
const YEARS = ['2024', '2023', '2022', '2021']

const PAPERS = [
  {
    id: 'math-paper1-2023',
    subject: 'Mathematics',
    emoji: '🧮',
    paper: 'Paper 1',
    year: '2023',
    board: 'WAEC',
    duration: '1h 30m',
    questions: 50,
    difficulty: 3,
    status: 'not-started',
  },
  {
    id: 'physics-paper2-2023',
    subject: 'Physics',
    emoji: '⚡',
    paper: 'Paper 2',
    year: '2023',
    board: 'WAEC',
    duration: '2h',
    questions: 80,
    difficulty: 4,
    status: 'not-started',
  },
  {
    id: 'chemistry-paper1-2022',
    subject: 'Chemistry',
    emoji: '⚗️',
    paper: 'Paper 1',
    year: '2022',
    board: 'IGCSE',
    duration: '1h 45m',
    questions: 60,
    difficulty: 3,
    status: 'in-progress',
    progress: 38,
  },
  {
    id: 'biology-paper1-2023',
    subject: 'Biology',
    emoji: '🧬',
    paper: 'Paper 1',
    year: '2023',
    board: 'WAEC',
    duration: '1h 30m',
    questions: 50,
    difficulty: 2,
    status: 'completed',
    score: 78,
  },
  {
    id: 'math-paper2-2022',
    subject: 'Mathematics',
    emoji: '🧮',
    paper: 'Paper 2',
    year: '2022',
    board: 'IGCSE',
    duration: '2h 30m',
    questions: 80,
    difficulty: 5,
    status: 'not-started',
  },
  {
    id: 'physics-paper1-2022',
    subject: 'Physics',
    emoji: '⚡',
    paper: 'Paper 1',
    year: '2022',
    board: 'A-Level',
    duration: '2h',
    questions: 40,
    difficulty: 4,
    status: 'not-started',
  },
]

type Paper = typeof PAPERS[0]

function DifficultyDots({ level, max = 5 }: { level: number; max?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <div
          key={i}
          className={cn('w-1.5 h-1.5 rounded-full', i < level ? 'bg-primary' : 'bg-surface-high')}
        />
      ))}
    </div>
  )
}

export default function AchieverPastPapersPage() {
  const [activeSubject, setActiveSubject] = useState('All')
  const [activeYear, setActiveYear] = useState('2023')

  const filtered = PAPERS.filter(p => {
    const subjectMatch = activeSubject === 'All' || p.subject === activeSubject
    const yearMatch = p.year === activeYear
    return subjectMatch && yearMatch
  })

  return (
    <div className="min-h-screen bg-surface-lowest p-4 space-y-5 pb-24">
      {/* Header */}
      <div>
        <h1 className="font-display font-bold text-2xl text-on-surface">Past Papers Library</h1>
        <p className="text-sm text-on-surface-variant mt-1">Practice with real exam questions</p>
      </div>

      {/* Subject Filter */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {SUBJECTS.map(sub => (
          <button
            key={sub}
            onClick={() => setActiveSubject(sub)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap shrink-0 transition-colors',
              activeSubject === sub
                ? 'bg-primary text-white'
                : 'bg-surface-low border border-outline-variant text-on-surface-variant hover:bg-surface-high'
            )}
          >
            {sub}
          </button>
        ))}
      </div>

      {/* Year Tabs */}
      <div className="grid grid-cols-4 gap-2">
        {YEARS.map(year => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className={cn(
              'py-2 rounded-xl text-sm font-semibold transition-colors',
              activeYear === year
                ? 'bg-primary text-white'
                : 'bg-surface-low border border-outline-variant text-on-surface-variant hover:bg-surface-high'
            )}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Papers List */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="bg-surface-low rounded-2xl border border-outline-variant p-8 text-center">
            <p className="text-2xl mb-2">📄</p>
            <p className="text-sm font-semibold text-on-surface">No papers found</p>
            <p className="text-xs text-on-surface-variant mt-1">Try a different subject or year</p>
          </div>
        ) : (
          filtered.map((paper: Paper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))
        )}
      </div>
    </div>
  )
}

function PaperCard({ paper }: { paper: Paper }) {
  return (
    <div className="bg-white dark:bg-surface-low rounded-2xl border border-outline-variant p-4 space-y-3">
      <div className="flex items-start gap-3">
        {/* Subject Emoji */}
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
          <span className="text-2xl">{paper.emoji}</span>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-semibold text-on-surface text-sm">{paper.subject} — {paper.paper} ({paper.year})</p>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{paper.board}</span>
                <span className="flex items-center gap-1 text-xs text-on-surface-variant">
                  <Clock className="h-3 w-3" /> {paper.duration}
                </span>
                <span className="flex items-center gap-1 text-xs text-on-surface-variant">
                  <BookOpen className="h-3 w-3" /> {paper.questions} Qs
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <DifficultyDots level={paper.difficulty} />
            <span className="text-xs text-on-surface-variant">Difficulty</span>
          </div>
        </div>
      </div>

      {/* Progress or Score */}
      {paper.status === 'in-progress' && paper.progress != null && (
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span className="text-on-surface-variant">In progress</span>
            <span className="font-bold text-amber-600">{paper.progress}%</span>
          </div>
          <div className="h-1.5 bg-surface-high rounded-full overflow-hidden">
            <div className="h-full bg-amber-500 rounded-full" style={{ width: `${paper.progress}%` }} />
          </div>
        </div>
      )}

      {paper.status === 'completed' && paper.score != null && (
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">Score: {paper.score}%</span>
          <span className="text-xs text-on-surface-variant">Completed</span>
        </div>
      )}

      {/* Action */}
      <Link href={`/achiever/past-papers/${paper.id}`}>
        <Button
          size="sm"
          className={cn(
            'w-full gap-2',
            paper.status === 'in-progress' ? 'bg-amber-500 hover:bg-amber-600' : ''
          )}
          variant={paper.status === 'completed' ? 'outline' : 'default'}
        >
          {paper.status === 'not-started' && <><Play className="h-3.5 w-3.5" /> Start</>}
          {paper.status === 'in-progress' && <><RotateCcw className="h-3.5 w-3.5" /> Resume</>}
          {paper.status === 'completed' && <><RotateCcw className="h-3.5 w-3.5" /> Redo</>}
        </Button>
      </Link>
    </div>
  )
}
