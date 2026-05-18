'use client'
import Link from 'next/link'
import { ArrowLeft, ThumbsUp, ThumbsDown, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { useState } from 'react'

const THREAD = {
  id: 'cs-2',
  title: 'Question about the midterm format — can we use our notes?',
  course: 'CS-701',
  courseName: 'Machine Learning',
  resolved: false,
  originalPost: {
    author: 'James Okonkwo',
    initials: 'JO',
    timestamp: 'Oct 21, 2024 at 2:34 PM',
    upvotes: 14,
    content: `Hi all, I wanted to clarify whether the midterm is open book or closed book. The syllabus says "restricted materials allowed" but I'm not sure what that means exactly.

Specifically, I'm wondering:
1. Can we bring handwritten notes?
2. Can we use printed slides from the lectures?
3. Is the formula sheet provided or do we make our own?

I emailed the professor but haven't heard back yet. Anyone else know the answer to this?`,
  },
  replies: [
    {
      id: 'r1',
      author: 'Priya Sharma',
      initials: 'PS',
      timestamp: 'Oct 21, 2024 at 3:15 PM',
      upvotes: 8,
      content: 'I asked at the last lecture and Dr. Mitchell said one A4 sheet of handwritten notes (both sides) is allowed. No printed materials. The formula sheet is NOT provided so include key equations in your notes!',
    },
    {
      id: 'r2',
      author: 'Marcus Wei',
      initials: 'MW',
      timestamp: 'Oct 21, 2024 at 4:02 PM',
      upvotes: 3,
      content: 'Confirming what Priya said — one A4 handwritten sheet. I\'d prioritise backprop equations, activation function derivatives, and loss function formulae. Those come up every year based on past papers.',
    },
    {
      id: 'r3',
      author: 'Dr. Sarah Mitchell',
      initials: 'SM',
      timestamp: 'Oct 22, 2024 at 9:00 AM',
      upvotes: 22,
      content: `Good question James, and thanks Priya for the accurate answer! To confirm officially:

**Allowed:** One A4 sheet of handwritten notes, both sides.
**Not allowed:** Printed slides, textbooks, calculators with symbolic math, or digital devices.

I will post a formula reference guide for the statistical sections to the module page by Thursday. Focus your note sheet on algorithm implementations and key derivations.

Best of luck everyone!`,
      isInstructor: true,
    },
    {
      id: 'r4',
      author: 'Aisha Bakr',
      initials: 'AB',
      timestamp: 'Oct 22, 2024 at 10:45 AM',
      upvotes: 5,
      content: 'Thank you Dr. Mitchell! Should the note sheet be submitted at the end of the exam or can we take it with us?',
    },
  ],
}

export default function DiscussionThreadPage() {
  const [reply, setReply] = useState('')

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link href="/scholar/discussion">
          <button className="flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-on-surface transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to discussions
          </button>
        </Link>
      </div>

      {/* Thread title + meta */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-blue-100 text-blue-700">{THREAD.course}</span>
          {THREAD.resolved && <Badge variant="success" size="sm">Resolved</Badge>}
        </div>
        <h1 className="font-display font-bold text-xl text-on-surface">{THREAD.title}</h1>
      </div>

      {/* Original Post */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-start gap-3">
          <Avatar className="h-9 w-9 shrink-0">
            <AvatarFallback className="text-xs font-semibold bg-primary/10 text-primary">
              {THREAD.originalPost.initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-semibold text-on-surface">{THREAD.originalPost.author}</p>
              <span className="text-xs text-on-surface-variant shrink-0">{THREAD.originalPost.timestamp}</span>
            </div>
          </div>
        </div>

        <div className="text-sm text-on-surface leading-relaxed whitespace-pre-line pl-12">
          {THREAD.originalPost.content}
        </div>

        <div className="flex items-center gap-3 pl-12">
          <button className="flex items-center gap-1.5 text-xs text-on-surface-variant hover:text-primary transition-colors">
            <ThumbsUp className="h-3.5 w-3.5" /> {THREAD.originalPost.upvotes}
          </button>
          <button className="flex items-center gap-1.5 text-xs text-on-surface-variant hover:text-red-500 transition-colors">
            <ThumbsDown className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Replies */}
      <div className="space-y-4">
        <h2 className="font-semibold text-sm text-on-surface">{THREAD.replies.length} replies</h2>
        {THREAD.replies.map(r => (
          <div
            key={r.id}
            className={`rounded-2xl border p-4 space-y-3 ml-6 ${
              r.isInstructor
                ? 'bg-primary/5 border-primary/20'
                : 'bg-surface-lowest border-outline-variant'
            }`}
          >
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8 shrink-0">
                <AvatarFallback className={`text-xs font-semibold ${r.isInstructor ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                  {r.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-sm font-semibold text-on-surface">{r.author}</p>
                  {r.isInstructor && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary text-white font-medium">Instructor</span>
                  )}
                  <span className="text-xs text-on-surface-variant ml-auto shrink-0">{r.timestamp}</span>
                </div>
              </div>
            </div>
            <div className="text-sm text-on-surface leading-relaxed whitespace-pre-line pl-11">
              {r.content}
            </div>
            <div className="flex items-center gap-3 pl-11">
              <button className="flex items-center gap-1.5 text-xs text-on-surface-variant hover:text-primary transition-colors">
                <ThumbsUp className="h-3.5 w-3.5" /> {r.upvotes}
              </button>
              <button className="flex items-center gap-1.5 text-xs text-on-surface-variant hover:text-red-500 transition-colors">
                <ThumbsDown className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Reply Input */}
      {!THREAD.resolved && (
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
          <p className="text-sm font-semibold text-on-surface">Post a reply</p>
          <textarea
            value={reply}
            onChange={e => setReply(e.target.value)}
            placeholder="Write your reply..."
            rows={4}
            className="w-full bg-surface-low border border-outline-variant rounded-xl p-3 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
          />
          <div className="flex justify-end">
            <Button size="sm" className="gap-2" disabled={reply.trim().length === 0}>
              <Send className="h-3.5 w-3.5" /> Post Reply
            </Button>
          </div>
        </div>
      )}

      {THREAD.resolved && (
        <div className="text-center py-4">
          <Badge variant="success" size="md">This thread is resolved — replies are closed</Badge>
        </div>
      )}
    </div>
  )
}
