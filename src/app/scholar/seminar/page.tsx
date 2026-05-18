'use client'
import { Sparkles, Play, BookOpen, Clock, Users, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const MODULES = [
  { id: 1, title: 'Quantum Superposition & State Vectors', duration: '45 min', type: 'Lecture', status: 'Completed', score: 94 },
  { id: 2, title: 'Measurement & Wave Function Collapse', duration: '50 min', type: 'Interactive', status: 'Completed', score: 88 },
  { id: 3, title: 'Entanglement & Bell Inequalities', duration: '60 min', type: 'Seminar', status: 'In Progress', score: null },
  { id: 4, title: 'Quantum Circuits & Gates', duration: '55 min', type: 'Lab', status: 'Locked', score: null },
  { id: 5, title: 'Quantum Error Correction', duration: '70 min', type: 'Research', status: 'Locked', score: null },
]

const SEMINARS = [
  { title: 'Frontier Applications in Quantum Computing', host: 'Prof. Sarah Mitchell', date: 'Oct 28, 2023', time: '3:00 PM', seats: 8, registered: true },
  { title: 'Photonic Quantum Systems Overview', host: 'Dr. James Patel', date: 'Nov 04, 2023', time: '2:00 PM', seats: 15, registered: false },
]

export default function ScholarSeminarPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-on-surface-variant">Physics Department · PHYS-401</p>
          <h1 className="font-display font-bold text-2xl text-on-surface mt-1">Atomic Learning & Seminar Hub</h1>
          <p className="text-sm text-on-surface-variant mt-1">Quantum Mechanics: Advanced Concepts</p>
        </div>
        <Button className="gap-2 bg-ai hover:bg-ai/90"><Sparkles className="h-4 w-4" /> AI Study Mode</Button>
      </div>

      {/* Course Progress */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-display font-semibold text-on-surface">Course Progress</p>
            <p className="text-xs text-on-surface-variant">2 of 5 modules completed</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-2xl text-primary">40%</p>
            <p className="text-xs text-on-surface-variant">Overall</p>
          </div>
        </div>
        <div className="h-2.5 bg-surface-high rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full" style={{ width: '40%' }} />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[{ label: 'Avg Score', value: '91%', color: 'text-green-600' }, { label: 'Time Spent', value: '8.5h', color: 'text-primary' }, { label: 'XP Earned', value: '2,400', color: 'text-xp' }].map(s => (
            <div key={s.label} className="text-center p-3 bg-surface-low rounded-xl">
              <p className={cn('font-bold text-lg', s.color)}>{s.value}</p>
              <p className="text-xs text-on-surface-variant">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Module List */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <h2 className="font-display font-semibold text-on-surface">Learning Modules</h2>
        <div className="space-y-2">
          {MODULES.map(m => (
            <div
              key={m.id}
              className={cn(
                'flex items-center gap-4 p-4 rounded-xl border transition-colors',
                m.status === 'Locked' ? 'opacity-50 border-outline-variant bg-surface-low cursor-not-allowed' :
                m.status === 'In Progress' ? 'border-primary/30 bg-primary/5 cursor-pointer hover:bg-primary/10' :
                'border-outline-variant bg-surface-low cursor-pointer hover:bg-surface-high'
              )}
            >
              <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0',
                m.status === 'Completed' ? 'bg-green-100 text-green-700' :
                m.status === 'In Progress' ? 'bg-primary/20 text-primary' :
                'bg-surface-high text-on-surface-variant'
              )}>
                {m.status === 'Completed' ? '✓' : m.status === 'Locked' ? '🔒' : <Play className="h-4 w-4" />}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-on-surface">{m.title}</p>
                <div className="flex items-center gap-3 mt-0.5">
                  <span className="text-xs text-on-surface-variant flex items-center gap-1"><Clock className="h-3 w-3" />{m.duration}</span>
                  <span className="text-xs text-on-surface-variant">{m.type}</span>
                </div>
              </div>
              {m.score !== null && (
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{m.score}%</span>
              )}
              {m.status !== 'Locked' && <ChevronRight className="h-4 w-4 text-on-surface-variant" />}
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Seminars */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <h2 className="font-display font-semibold text-on-surface">Upcoming Seminars</h2>
          </div>
          <button className="text-xs text-primary hover:underline">View All</button>
        </div>
        <div className="space-y-3">
          {SEMINARS.map(s => (
            <div key={s.title} className="flex items-start gap-4 p-4 bg-surface-low rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-on-surface">{s.title}</p>
                <p className="text-xs text-on-surface-variant">{s.host}</p>
                <p className="text-xs text-on-surface-variant mt-1">{s.date} · {s.time} · {s.seats} seats left</p>
              </div>
              <Button size="sm" variant={s.registered ? 'outline' : 'default'} className="shrink-0 h-8 text-xs">
                {s.registered ? 'Registered ✓' : 'Register'}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insight */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 flex items-start gap-3">
        <Sparkles className="h-4 w-4 text-ai mt-0.5 shrink-0" />
        <p className="text-xs text-on-surface-variant">Your comprehension of superposition is in the <strong className="text-on-surface">top 8%</strong> of all PHYS-401 students. The upcoming Entanglement module builds directly on this — consider attending the Oct 28 seminar to deepen your understanding before the exam.</p>
      </div>
    </div>
  )
}
