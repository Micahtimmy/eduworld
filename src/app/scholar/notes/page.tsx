'use client'
import Link from 'next/link'
import { Search, Plus, FileText, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'

const COURSE_COLORS: Record<string, string> = {
  'CS-701': 'border-blue-500',
  'MATH-620': 'border-purple-500',
  'BIO-540': 'border-green-500',
  'ECON-480': 'border-amber-500',
}

const COURSE_TAG_COLORS: Record<string, string> = {
  'CS-701': 'bg-blue-100 text-blue-700',
  'MATH-620': 'bg-purple-100 text-purple-700',
  'BIO-540': 'bg-green-100 text-green-700',
  'ECON-480': 'bg-amber-100 text-amber-700',
}

const NOTES = [
  {
    id: '1',
    title: 'Neural Network Backpropagation — Deep Dive',
    course: 'CS-701',
    courseName: 'Machine Learning',
    date: 'Oct 22, 2024',
    preview: 'Gradient descent optimization works by iteratively adjusting weights to minimise the loss function. The chain rule applies at each layer...',
    wordCount: 1240,
    linkedToLesson: true,
    lessonTitle: 'Week 8 — Backpropagation Algorithms',
  },
  {
    id: '2',
    title: 'Fourier Transform Applications',
    course: 'MATH-620',
    courseName: 'Applied Mathematics',
    date: 'Oct 20, 2024',
    preview: 'The discrete Fourier transform converts a sequence of N complex numbers into another sequence. Key applications include signal processing and data compression...',
    wordCount: 890,
    linkedToLesson: true,
    lessonTitle: 'Lecture 12 — Transforms in Practice',
  },
  {
    id: '3',
    title: 'CRISPR-Cas9 Mechanism & Ethical Considerations',
    course: 'BIO-540',
    courseName: 'Molecular Biology',
    date: 'Oct 18, 2024',
    preview: 'The CRISPR-Cas9 system enables targeted genome editing through a guide RNA that directs the Cas9 protein to specific DNA sequences. Off-target effects remain a concern...',
    wordCount: 2100,
    linkedToLesson: false,
  },
  {
    id: '4',
    title: 'Game Theory — Nash Equilibrium Examples',
    course: 'ECON-480',
    courseName: 'Advanced Economics',
    date: 'Oct 15, 2024',
    preview: 'A Nash equilibrium exists when no player can benefit by unilaterally changing their strategy. The Prisoner\'s Dilemma remains the canonical example demonstrating...',
    wordCount: 760,
    linkedToLesson: true,
    lessonTitle: 'Topic 6 — Strategic Interactions',
  },
  {
    id: '5',
    title: 'Convolutional Neural Networks — Architecture Notes',
    course: 'CS-701',
    courseName: 'Machine Learning',
    date: 'Oct 12, 2024',
    preview: 'CNNs use shared weights and local connectivity to exploit the 2D structure of images. Pooling layers progressively reduce spatial dimensions while increasing feature depth...',
    wordCount: 1580,
    linkedToLesson: true,
    lessonTitle: 'Week 6 — Deep Learning Architectures',
  },
  {
    id: '6',
    title: 'Supply & Demand — Market Equilibrium',
    course: 'ECON-480',
    courseName: 'Advanced Economics',
    date: 'Oct 10, 2024',
    preview: 'At equilibrium, the quantity supplied equals the quantity demanded. Price adjustments act as a signal mechanism guiding resource allocation in a competitive market...',
    wordCount: 610,
    linkedToLesson: false,
  },
]

const TABS = ['All', 'Linked to Lesson', 'Standalone'] as const
type Tab = typeof TABS[number]

export default function ScholarNotesPage() {
  const [activeTab, setActiveTab] = useState<Tab>('All')
  const [search, setSearch] = useState('')

  const filtered = NOTES.filter(n => {
    const matchesTab =
      activeTab === 'All' ||
      (activeTab === 'Linked to Lesson' && n.linkedToLesson) ||
      (activeTab === 'Standalone' && !n.linkedToLesson)
    const matchesSearch =
      search === '' ||
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.preview.toLowerCase().includes(search.toLowerCase())
    return matchesTab && matchesSearch
  })

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Notes Workspace</h1>
          <p className="text-sm text-on-surface-variant mt-1">{NOTES.length} notes across {Object.keys(COURSE_COLORS).length} courses</p>
        </div>
        <Button size="md" className="gap-2 shrink-0">
          <Plus className="h-4 w-4" /> New Note
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant" />
        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-surface-lowest border border-outline-variant rounded-xl text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-1 bg-surface-low rounded-xl p-1 w-fit">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab
                ? 'bg-white dark:bg-surface-mid text-on-surface shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Notes Grid */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center space-y-3">
          <div className="w-16 h-16 rounded-full bg-surface-low flex items-center justify-center">
            <FileText className="h-8 w-8 text-on-surface-variant" />
          </div>
          <p className="font-display font-semibold text-on-surface">Your notes will appear here</p>
          <p className="text-sm text-on-surface-variant max-w-xs">Take your first note in any lesson, or create a standalone note to get started.</p>
          <Button size="sm" className="gap-2 mt-2">
            <Plus className="h-4 w-4" /> Create first note
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map(note => (
            <Link key={note.id} href={`/scholar/notes/${note.id}`}>
              <div className={`bg-surface-lowest rounded-2xl border border-outline-variant p-5 border-l-4 ${COURSE_COLORS[note.course]} hover:shadow-md transition-all cursor-pointer h-full`}>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-sm text-on-surface leading-snug line-clamp-2">{note.title}</h3>
                  {note.linkedToLesson && (
                    <span className="shrink-0">
                      <BookOpen className="h-3.5 w-3.5 text-on-surface-variant" />
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${COURSE_TAG_COLORS[note.course]}`}>
                    {note.course}
                  </span>
                  <span className="text-xs text-on-surface-variant">{note.date}</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-3">{note.preview}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-on-surface-variant">{note.wordCount.toLocaleString()} words</span>
                  {note.linkedToLesson && (
                    <span className="text-xs text-on-surface-variant italic truncate max-w-[140px]">↳ {note.lessonTitle}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
