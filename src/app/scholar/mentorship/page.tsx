'use client'
import { Sparkles, Calendar, Users, School, Megaphone, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const MESSAGES = [
  {
    icon: School,
    sender: 'Dr. Evelyn Vance',
    time: '10:42 AM',
    subject: 'Thesis Proposal Review - Action Required',
    excerpt: 'The methodology section requires clarification on control group variables. Please resubmit by Thursday with the revised section.',
    unread: true,
    type: 'faculty',
  },
  {
    icon: Megaphone,
    sender: 'University Registrar',
    time: 'Yesterday',
    subject: 'Spring Semester Registration Deadlines',
    excerpt: 'Course selection opens November 15th. Prerequisites must be verified beforehand. Please check your academic standing.',
    unread: true,
    type: 'official',
  },
  {
    icon: Calendar,
    sender: 'Prof. Aris Thorne',
    time: 'Oct 28',
    subject: 'Office Hours Confirmation',
    excerpt: 'Tuesday appointment at 14:00 confirmed for "Advanced Computational Models" final project discussion. Room 402B.',
    unread: false,
    type: 'faculty',
  },
]

export default function ScholarMentorshipPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">Scholar Terminal</span>
            <span className="text-xs text-on-surface-variant">GPA: 3.98</span>
          </div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Mentorship & Inbox</h1>
          <p className="text-sm text-on-surface-variant mt-1">Manage communications, office hours, and faculty advisor connections.</p>
        </div>
        <Button className="gap-2 bg-ai hover:bg-ai/90"><Sparkles className="h-4 w-4" /> Advanced Research Tier</Button>
      </div>

      {/* Priority Communications */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Priority Communications</h2>
          <div className="flex gap-1">
            {['All', 'Unread', 'Official'].map((t, i) => (
              <button key={t} className={cn('text-xs px-3 py-1.5 rounded-full transition-colors', i === 0 ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-low')}>{t}</button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          {MESSAGES.map(m => (
            <div key={m.subject} className={cn('flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-colors hover:bg-surface-high', m.unread ? 'bg-surface-low' : 'bg-surface-lowest')}>
              <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center shrink-0', m.type === 'official' ? 'bg-primary/10' : 'bg-ai/10')}>
                <m.icon className={cn('h-5 w-5', m.type === 'official' ? 'text-primary' : 'text-ai')} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-0.5">
                  <p className={cn('text-sm', m.unread ? 'font-bold text-on-surface' : 'font-semibold text-on-surface')}>{m.sender}</p>
                  <p className="text-xs text-on-surface-variant shrink-0">{m.time}</p>
                </div>
                <p className={cn('text-sm', m.unread ? 'font-semibold text-on-surface' : 'text-on-surface-variant')}>{m.subject}</p>
                <p className="text-xs text-on-surface-variant mt-0.5 truncate">{m.excerpt}</p>
              </div>
              {m.unread && <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mentor Matching */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <h2 className="font-display font-semibold text-on-surface">Mentor Matching</h2>
          </div>
          <div className="bg-ai/5 border border-ai/20 rounded-xl p-3 flex items-start gap-2">
            <Sparkles className="h-4 w-4 text-ai mt-0.5 shrink-0" />
            <p className="text-xs text-on-surface-variant">Algorithmic matching based on thesis trajectory and academic interests.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-semibold">Machine Learning Ethics</span>
            <button className="text-xs text-primary hover:underline">+ Edit Filters</button>
          </div>
          <div className="space-y-2">
            {['Dr. Sarah Mitchell', 'Prof. James Patel', 'Dr. Chen Wei'].map(name => (
              <div key={name} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                  {name.split(' ').slice(-1)[0][0]}{name.split(' ')[1][0]}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-on-surface">{name}</p>
                  <p className="text-xs text-on-surface-variant">ML Ethics · Research Supervisor</p>
                </div>
                <button className="text-xs text-primary hover:underline">Connect</button>
              </div>
            ))}
          </div>
          <Button className="w-full gap-2"><Sparkles className="h-4 w-4" /> Initiate Match Protocol</Button>
        </div>

        {/* Office Hours */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <h2 className="font-display font-semibold text-on-surface">Office Hours</h2>
          </div>
          <div className="p-4 bg-surface-low rounded-xl border border-outline-variant space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-sm text-on-surface">Prof. Aris Thorne</p>
                <p className="text-xs text-on-surface-variant">Advanced Computational Models</p>
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Tomorrow · Confirmed</span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs text-on-surface-variant">
              <div><p className="font-semibold text-on-surface">Time</p><p>14:00–14:30</p></div>
              <div><p className="font-semibold text-on-surface">Location</p><p>Room 402B</p></div>
            </div>
          </div>
          <button className="text-xs text-primary hover:underline flex items-center gap-1">
            <span>Schedule Another Session</span><ChevronRight className="h-3 w-3" />
          </button>

          {/* Upcoming sessions */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-on-surface-variant">Other Available Slots</p>
            {[{ time: 'Nov 02 · 10:00–10:30', faculty: 'Dr. Maria Santos' }, { time: 'Nov 07 · 14:00–14:30', faculty: 'Prof. Aris Thorne' }].map(s => (
              <div key={s.time} className="flex items-center justify-between p-3 bg-surface-low rounded-xl">
                <div>
                  <p className="text-xs font-semibold text-on-surface">{s.time}</p>
                  <p className="text-xs text-on-surface-variant">{s.faculty}</p>
                </div>
                <Button size="sm" variant="outline" className="h-7 text-xs">Book</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
