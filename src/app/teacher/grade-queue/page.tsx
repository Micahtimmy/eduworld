'use client'
import Link from 'next/link'
import { Sparkles, Filter, Clock, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { useState } from 'react'

const TABS = ['All', 'Ungraded', 'In Review', 'Graded'] as const
type Tab = typeof TABS[number]

const SUBMISSIONS = [
  {
    id: 'sub-1',
    student: 'Emma Richardson',
    initials: 'ER',
    assignment: 'Industrial Revolution Essay',
    class: 'World History — Period 3',
    submitted: '2 hours ago',
    status: 'ungraded',
    aiDraft: true,
  },
  {
    id: 'sub-2',
    student: 'Liam Nguyen',
    initials: 'LN',
    assignment: 'Industrial Revolution Essay',
    class: 'World History — Period 3',
    submitted: '3 hours ago',
    status: 'ungraded',
    aiDraft: true,
  },
  {
    id: 'sub-3',
    student: 'Sofia Martinez',
    initials: 'SM',
    assignment: 'Thermodynamics Problem Set',
    class: 'AP Physics — Period 1',
    submitted: '5 hours ago',
    status: 'ungraded',
    aiDraft: false,
  },
  {
    id: 'sub-4',
    student: 'James Okonkwo',
    initials: 'JO',
    assignment: 'Thermodynamics Problem Set',
    class: 'AP Physics — Period 1',
    submitted: '6 hours ago',
    status: 'ungraded',
    aiDraft: true,
  },
  {
    id: 'sub-5',
    student: 'Priya Patel',
    initials: 'PP',
    assignment: 'Cold War Short Response',
    class: 'World History — Period 5',
    submitted: 'Yesterday',
    status: 'in_review',
    aiDraft: true,
  },
  {
    id: 'sub-6',
    student: 'Marcus Chen',
    initials: 'MC',
    assignment: 'Cold War Short Response',
    class: 'World History — Period 5',
    submitted: 'Yesterday',
    status: 'in_review',
    aiDraft: false,
  },
  {
    id: 'sub-7',
    student: 'Aisha Williams',
    initials: 'AW',
    assignment: 'Periodic Table Quiz',
    class: 'Chemistry — Period 2',
    submitted: '2 days ago',
    status: 'graded',
    aiDraft: false,
  },
  {
    id: 'sub-8',
    student: 'Noah Thompson',
    initials: 'NT',
    assignment: 'Periodic Table Quiz',
    class: 'Chemistry — Period 2',
    submitted: '2 days ago',
    status: 'graded',
    aiDraft: false,
  },
]

const STATUS_LABELS: Record<string, string> = {
  ungraded: 'Ungraded',
  in_review: 'In Review',
  graded: 'Graded',
}

const STATUS_COLORS: Record<string, string> = {
  ungraded: 'bg-red-100 text-red-700',
  in_review: 'bg-amber-100 text-amber-700',
  graded: 'bg-green-100 text-green-700',
}

export default function GradeQueuePage() {
  const [activeTab, setActiveTab] = useState<Tab>('All')

  const filtered = SUBMISSIONS.filter(s => {
    if (activeTab === 'All') return true
    if (activeTab === 'Ungraded') return s.status === 'ungraded'
    if (activeTab === 'In Review') return s.status === 'in_review'
    if (activeTab === 'Graded') return s.status === 'graded'
    return true
  })

  const ungradedCount = SUBMISSIONS.filter(s => s.status === 'ungraded').length
  const aiDraftCount = SUBMISSIONS.filter(s => s.aiDraft && s.status === 'ungraded').length

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Grade Queue</h1>
          <p className="text-sm text-on-surface-variant mt-1">Review and publish student submissions</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="error" size="md">{ungradedCount} pending</Badge>
        </div>
      </div>

      {/* AI Batch Grade Banner */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 flex items-center gap-3">
        <Sparkles className="h-5 w-5 text-ai shrink-0" />
        <div className="flex-1">
          <p className="text-sm font-semibold text-on-surface">Grade with AI Assist</p>
          <p className="text-xs text-on-surface-variant mt-0.5">AI draft grades available for {aiDraftCount} ungraded submissions — review required before publishing</p>
        </div>
        <Button size="sm" variant="ai" className="gap-2 shrink-0">
          <Sparkles className="h-3.5 w-3.5" /> Grade {aiDraftCount} with AI
        </Button>
      </div>

      {/* Filters Row */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex gap-1 bg-surface-low rounded-xl p-1 w-fit">
          {(['All', 'Ungraded', 'In Review', 'Graded'] as Tab[]).map(tab => (
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

        <button className="flex items-center gap-1.5 text-sm text-on-surface-variant px-3 py-1.5 rounded-xl border border-outline-variant hover:border-primary/30 transition-all">
          <Filter className="h-3.5 w-3.5" /> Sort <ChevronDown className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Submission List */}
      <div className="space-y-3">
        {filtered.map(sub => (
          <div key={sub.id} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 flex items-center gap-4">
            <Avatar className="h-10 w-10 shrink-0">
              <AvatarFallback className="text-sm font-semibold bg-primary/10 text-primary">{sub.initials}</AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-sm font-semibold text-on-surface">{sub.student}</p>
                {sub.aiDraft && sub.status !== 'graded' && (
                  <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-ai/10 text-ai font-medium">
                    <Sparkles className="h-3 w-3" /> AI Draft
                  </span>
                )}
              </div>
              <p className="text-xs text-on-surface font-medium mt-0.5">{sub.assignment}</p>
              <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                <p className="text-xs text-on-surface-variant">{sub.class}</p>
                <span className="text-xs text-on-surface-variant">·</span>
                <div className="flex items-center gap-1 text-xs text-on-surface-variant">
                  <Clock className="h-3 w-3" /> {sub.submitted}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className={`hidden sm:inline-flex text-xs px-2 py-0.5 rounded-full font-medium ${STATUS_COLORS[sub.status]}`}>
                {STATUS_LABELS[sub.status]}
              </span>
              {sub.status !== 'graded' && (
                <Link href={`/teacher/grade-queue/${sub.id}`}>
                  <Button size="sm" variant={sub.aiDraft ? 'ai' : 'primary'} className="gap-1.5">
                    {sub.aiDraft && <Sparkles className="h-3.5 w-3.5" />}
                    Grade Now
                  </Button>
                </Link>
              )}
              {sub.status === 'graded' && (
                <Badge variant="success" size="sm">Published</Badge>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
