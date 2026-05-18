'use client'
import { Sparkles, CheckCircle, Clock, PlayCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ASSIGNMENTS = [
  {
    icon: '🧪',
    urgency: 'Due in 4h',
    subject: 'AP Chemistry',
    title: 'Kinetics Lab Report: Iodine Clock Reaction',
    desc: 'Complete data analysis and write Arrhenius equation conclusion.',
    status: 'In Progress',
    statusColor: 'amber',
    action: 'Resume',
  },
  {
    icon: '📜',
    urgency: 'Tomorrow',
    subject: 'European History',
    title: 'French Revolution DBQ Essay',
    desc: 'Analyze the Reign of Terror through primary source documents.',
    status: 'Not Started',
    statusColor: 'gray',
    action: 'Start',
  },
  {
    icon: '∫',
    urgency: 'Friday',
    subject: 'Calculus BC',
    title: 'Problem Set 4: Integration by Parts',
    desc: 'Questions 1–25 odd. Show all steps clearly.',
    status: 'Submitted',
    statusColor: 'green',
    action: 'View',
  },
]

const FEEDBACK = [
  { initials: 'DS', name: 'Dr. Smith', subject: 'Literature', time: '2h ago', excerpt: 'Excellent thesis statement. Consider expanding on the symbolism in the final act...' },
  { initials: 'MJ', name: 'Mr. Johnson', subject: 'Physics', time: '1d ago', excerpt: 'Good data collection, but review your error propagation calculations.' },
]

const STATUS_STYLES: Record<string, string> = {
  amber: 'bg-amber-100 text-amber-700',
  gray: 'bg-surface-high text-on-surface-variant',
  green: 'bg-green-100 text-green-700',
}

export default function AchieverAssignmentsPage() {
  return (
    <div className="p-4 space-y-5 pb-24">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">My Assignments</h1>
          <p className="text-sm text-on-surface-variant mt-1">Track your high-priority academic tasks.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-xp">🔥 XP: 2,450</span>
        </div>
      </div>

      {/* Filter row */}
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-low border border-outline-variant rounded-full text-xs text-on-surface-variant hover:border-primary/50 transition-colors">
          Filter
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-ai/10 text-ai rounded-full text-xs font-semibold">
          <Sparkles className="h-3 w-3" /> Smart Sort
        </button>
      </div>

      {/* Assignment Cards */}
      <div className="space-y-3">
        {ASSIGNMENTS.map(a => (
          <div key={a.title} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">{a.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${a.urgency.includes('4h') ? 'bg-red-100 text-red-700' : 'bg-primary/10 text-primary'}`}>{a.urgency}</span>
                  <span className="text-xs text-on-surface-variant">{a.subject}</span>
                </div>
                <p className="font-semibold text-on-surface">{a.title}</p>
                <p className="text-xs text-on-surface-variant mt-1">{a.desc}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${STATUS_STYLES[a.statusColor]}`}>
                {a.status === 'In Progress' && <Clock className="h-3 w-3 inline mr-1" />}
                {a.status === 'Submitted' && <CheckCircle className="h-3 w-3 inline mr-1" />}
                {a.status}
              </span>
              <Button size="sm" variant={a.status === 'Submitted' ? 'outline' : 'default'} className="h-7 text-xs gap-1.5">
                {a.status === 'In Progress' && <PlayCircle className="h-3 w-3" />}
                {a.action}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Teacher Feedback */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-sm text-on-surface">Teacher Feedback</h2>
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">3 New</span>
        </div>
        <div className="space-y-3">
          {FEEDBACK.map(f => (
            <div key={f.name} className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0">{f.initials}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-xs font-semibold text-on-surface">{f.name}</p>
                  <span className="text-xs text-on-surface-variant">·</span>
                  <p className="text-xs text-on-surface-variant">{f.subject}</p>
                  <p className="text-xs text-on-surface-variant ml-auto">{f.time}</p>
                </div>
                <p className="text-xs text-on-surface-variant mt-1 line-clamp-2">{f.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="text-xs text-primary hover:underline">View All Feedback</button>
      </div>
    </div>
  )
}
