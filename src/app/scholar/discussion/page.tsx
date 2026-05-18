'use client'
import Link from 'next/link'
import { Plus, MessageSquare, Pin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { useState } from 'react'

const COURSES = ['CS-701', 'MATH-620', 'BIO-540', 'ECON-480'] as const
type Course = typeof COURSES[number]

const THREADS: Record<Course, Array<{
  id: string
  title: string
  preview: string
  author: string
  authorInitials: string
  replies: number
  lastActivity: string
  pinned?: boolean
  solved?: boolean
  tag?: string
}>> = {
  'CS-701': [
    {
      id: 'cs-1',
      title: '📌 Midterm Format & Resources — READ FIRST',
      preview: 'The midterm will cover weeks 1–8. It consists of 40 MCQs and one coding task. Closed book, 90 minutes. No NumPy allowed for the coding section...',
      author: 'Dr. Sarah Mitchell',
      authorInitials: 'SM',
      replies: 18,
      lastActivity: '2 hours ago',
      pinned: true,
      tag: 'Announcement',
    },
    {
      id: 'cs-2',
      title: 'Question about the midterm format — can we use our notes?',
      preview: 'Hi all, I wanted to clarify whether the midterm is open book or closed book. The syllabus says "restricted materials allowed" but I\'m not sure what that means...',
      author: 'James Okonkwo',
      authorInitials: 'JO',
      replies: 12,
      lastActivity: '3 hours ago',
      tag: 'Question',
    },
    {
      id: 'cs-3',
      title: 'Resources for Chapter 5 — Convolutional Networks',
      preview: 'Found some great supplementary material on CS231n from Stanford. The notes on backprop through convolution layers are really clear. Sharing here for everyone...',
      author: 'Priya Sharma',
      authorInitials: 'PS',
      replies: 7,
      lastActivity: 'Yesterday',
      tag: 'Resources',
    },
    {
      id: 'cs-4',
      title: 'Study group forming for finals — Thursday evenings, Library Room 3',
      preview: 'Hey everyone, a few of us are forming a study group to prep for the final exam. We\'ll meet Thursday evenings from 6–8pm in Library Study Room 3. All welcome!',
      author: 'Marcus Wei',
      authorInitials: 'MW',
      replies: 23,
      lastActivity: '2 days ago',
      tag: 'Study Group',
    },
    {
      id: 'cs-5',
      title: 'Is gradient clipping required for the assignment?',
      preview: 'The assignment spec says "implement appropriate regularisation" — does that include gradient clipping or just dropout and L2? The autograder seems strict about this...',
      author: 'Aisha Bakr',
      authorInitials: 'AB',
      replies: 5,
      lastActivity: '3 days ago',
      solved: true,
      tag: 'Question',
    },
  ],
  'MATH-620': [
    {
      id: 'math-1',
      title: '📌 Problem Set 4 — Extended Deadline',
      preview: 'Due to the campus event on Friday, Problem Set 4 deadline has been moved to Monday 23:59. Please submit via the portal as usual...',
      author: 'Prof. Alan Torres',
      authorInitials: 'AT',
      replies: 4,
      lastActivity: '1 day ago',
      pinned: true,
      tag: 'Announcement',
    },
    {
      id: 'math-2',
      title: 'Confused on the DFT orthogonality proof',
      preview: 'I\'m stuck on step 3 of the orthogonality proof in Lecture 12. Specifically when we sum the complex exponentials — can anyone walk me through the telescoping step?',
      author: 'Laura Chen',
      authorInitials: 'LC',
      replies: 8,
      lastActivity: '5 hours ago',
      tag: 'Question',
    },
    {
      id: 'math-3',
      title: 'Useful visualisation tool for Fourier Transforms',
      preview: 'Found this interactive site that lets you draw a wave and see its Fourier components in real time. Massively helped me understand frequency domain representation...',
      author: 'Omar Hassan',
      authorInitials: 'OH',
      replies: 15,
      lastActivity: '4 days ago',
      tag: 'Resources',
    },
  ],
  'BIO-540': [
    {
      id: 'bio-1',
      title: '📌 Lab Report Submission Guidelines — Updated',
      preview: 'Please use the new LaTeX template for lab reports. The old Word template is no longer accepted. Template available on the module page...',
      author: 'Dr. Chen Wei',
      authorInitials: 'CW',
      replies: 6,
      lastActivity: '6 hours ago',
      pinned: true,
      tag: 'Announcement',
    },
    {
      id: 'bio-2',
      title: 'CRISPR off-target effects — any good recent papers?',
      preview: 'For the essay on gene editing ethics, I need current literature on CRISPR off-target effects post-2022. Has anyone come across good sources on this?',
      author: 'Sofia Nakamura',
      authorInitials: 'SN',
      replies: 9,
      lastActivity: '1 day ago',
      tag: 'Question',
    },
  ],
  'ECON-480': [
    {
      id: 'econ-1',
      title: '📌 Guest Lecture — Prof. Ivanova — Fri 3pm',
      preview: 'We have a special guest lecture this Friday from Prof. Elena Ivanova of LSE on "Game Theory in Climate Policy". Attendance is mandatory for registered students...',
      author: 'Dr. James Keller',
      authorInitials: 'JK',
      replies: 11,
      lastActivity: '30 mins ago',
      pinned: true,
      tag: 'Announcement',
    },
    {
      id: 'econ-2',
      title: 'The Nash Equilibrium in real-world oligopoly markets',
      preview: 'I\'ve been reading about the OPEC oil production decisions as a real-world Nash Equilibrium scenario. Anyone else looking at this for the applied assignment?',
      author: 'Raj Patel',
      authorInitials: 'RP',
      replies: 14,
      lastActivity: '2 days ago',
      tag: 'Discussion',
    },
  ],
}

const TAG_COLORS: Record<string, string> = {
  Announcement: 'bg-red-100 text-red-700',
  Question: 'bg-blue-100 text-blue-700',
  Resources: 'bg-green-100 text-green-700',
  'Study Group': 'bg-purple-100 text-purple-700',
  Discussion: 'bg-amber-100 text-amber-700',
}

export default function ScholarDiscussionPage() {
  const [activeCourse, setActiveCourse] = useState<Course>('CS-701')
  const threads = THREADS[activeCourse]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Course Discussions</h1>
          <p className="text-sm text-on-surface-variant mt-1">Ask questions, share resources, connect with classmates</p>
        </div>
        <Button size="md" className="gap-2 shrink-0">
          <Plus className="h-4 w-4" /> New Thread
        </Button>
      </div>

      {/* Course Tabs */}
      <div className="flex gap-1 overflow-x-auto pb-1">
        {COURSES.map(course => (
          <button
            key={course}
            onClick={() => setActiveCourse(course)}
            className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
              activeCourse === course
                ? 'bg-primary text-white shadow-sm'
                : 'bg-surface-low text-on-surface-variant hover:bg-surface-mid hover:text-on-surface'
            }`}
          >
            {course}
          </button>
        ))}
      </div>

      {/* Thread List */}
      <div className="space-y-3">
        {threads.map(thread => (
          <Link key={thread.id} href={`/scholar/discussion/${thread.id}`}>
            <div className={`bg-surface-lowest rounded-2xl border border-outline-variant p-4 hover:shadow-md transition-all cursor-pointer ${
              thread.pinned ? 'bg-primary/5 border-primary/20' : ''
            }`}>
              <div className="flex items-start gap-3">
                <Avatar className="h-9 w-9 shrink-0">
                  <AvatarFallback className="text-xs font-semibold bg-primary/10 text-primary">
                    {thread.authorInitials}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2 flex-wrap">
                    {thread.pinned && <Pin className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />}
                    <h3 className="text-sm font-semibold text-on-surface leading-snug">{thread.title}</h3>
                  </div>

                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <span className="text-xs text-on-surface-variant">{thread.author}</span>
                    {thread.tag && (
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${TAG_COLORS[thread.tag] ?? 'bg-surface-high text-on-surface-variant'}`}>
                        {thread.tag}
                      </span>
                    )}
                    {thread.solved && (
                      <Badge variant="success" size="sm">Resolved</Badge>
                    )}
                  </div>

                  <p className="text-xs text-on-surface-variant mt-1.5 line-clamp-2 leading-relaxed">{thread.preview}</p>

                  <div className="flex items-center gap-3 mt-2">
                    <span className="flex items-center gap-1 text-xs text-on-surface-variant">
                      <MessageSquare className="h-3 w-3" /> {thread.replies} replies
                    </span>
                    <span className="text-xs text-on-surface-variant">{thread.lastActivity}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
