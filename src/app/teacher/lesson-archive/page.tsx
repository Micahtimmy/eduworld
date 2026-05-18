'use client'
import { Sparkles, CloudUpload, Filter, Play, MoreVertical, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const SESSIONS = [
  { title: 'Intro to Astrophysics', duration: '45:12', date: 'Jan 12, 2024 · Section B', badges: ['REVISION', 'VIDEO'] },
  { title: 'Literature & Society', duration: '58:04', date: 'Jan 10, 2024 · Section A', badges: ['CORE CONTENT'] },
  { title: 'Organic Chemistry Lab', duration: '32:50', date: 'Jan 08, 2024 · Lab 3', badges: ['MANDATORY'] },
]

const BADGE_COLORS: Record<string, string> = {
  'REVISION': 'bg-blue-100 text-blue-700',
  'VIDEO': 'bg-purple-100 text-purple-700',
  'CORE CONTENT': 'bg-green-100 text-green-700',
  'MANDATORY': 'bg-red-100 text-red-700',
}

const COLLECTIONS = [
  { title: 'Midterm Prep: Calculus I', desc: 'Lessons from Weeks 1 through 6', count: '+8', members: '+24', badge: 'High Activity' },
  { title: 'Advanced Genetics Lab', desc: 'PCR and Electrophoresis demos', count: '+3', members: '+12', badge: 'Internal Only' },
]

export default function TeacherLessonArchivePage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-on-surface-variant">Lesson Plans / Archive & Recordings</p>
          <h1 className="font-display font-bold text-2xl text-on-surface mt-1">Curated Lesson Archive</h1>
          <p className="text-sm text-on-surface-variant mt-1">Revisit, edit, and re-release past lessons to your classes.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2"><Filter className="h-4 w-4" /> Filter Library</Button>
          <Button size="sm" className="gap-2"><CloudUpload className="h-4 w-4" /> Upload Recording</Button>
        </div>
      </div>

      {/* AI Featured */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="h-4 w-4 text-ai" />
          <span className="text-xs font-semibold text-ai">AI Recommendation</span>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold ml-auto">Recommended for Semester 2 Revision</span>
        </div>
        <div className="flex gap-4">
          <div className="w-32 h-20 bg-surface-high rounded-xl flex items-center justify-center shrink-0 relative">
            <Play className="h-8 w-8 text-on-surface-variant" />
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="font-display font-semibold text-on-surface">Mastering Quantum Mechanics III</h3>
            <p className="text-xs text-on-surface-variant">98% student engagement rate · Probability Distribution segment highlighted</p>
            <div className="flex gap-2">
              <Button size="sm" className="h-7 text-xs">Re-release to Class</Button>
              <Button size="sm" variant="outline" className="h-7 text-xs">Edit Snippet</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Library Health */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4">
        <div className="flex items-center justify-between mb-2">
          <p className="font-semibold text-sm text-on-surface">Library Health</p>
          <p className="font-display font-bold text-on-surface">124 Lessons</p>
        </div>
        <div className="h-2 bg-surface-high rounded-full overflow-hidden">
          <div className="h-full bg-amber-500 rounded-full" style={{ width: '84%' }} />
        </div>
        <p className="text-xs text-on-surface-variant mt-1">Storage Used (84%) — 42GB / 50GB</p>
      </div>

      {/* Recent Sessions */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Recent Sessions</h2>
          <button className="text-xs text-primary hover:underline flex items-center gap-1">View all library →</button>
        </div>
        <div className="space-y-3">
          {SESSIONS.map(s => (
            <div key={s.title} className="flex items-center gap-4 p-3 bg-surface-low rounded-xl">
              <div className="w-20 h-14 bg-surface-high rounded-lg flex items-center justify-center shrink-0 relative">
                <Play className="h-5 w-5 text-on-surface-variant" />
                <span className="absolute bottom-1 right-1 text-xs bg-black/60 text-white px-1 rounded">{s.duration}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-on-surface truncate">{s.title}</p>
                <p className="text-xs text-on-surface-variant">{s.date}</p>
                <div className="flex gap-1 mt-1">
                  {s.badges.map(b => (
                    <span key={b} className={cn('text-xs px-1.5 py-0.5 rounded-full font-semibold', BADGE_COLORS[b] || 'bg-surface-high text-on-surface-variant')}>{b}</span>
                  ))}
                </div>
              </div>
              <button className="text-on-surface-variant hover:text-on-surface"><MoreVertical className="h-4 w-4" /></button>
            </div>
          ))}
        </div>
        <button className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-on-surface p-3 rounded-xl border border-dashed border-outline-variant w-full justify-center">
          <Plus className="h-4 w-4" /> Import External Archive (Dropbox / Drive)
        </button>
      </div>

      {/* Revision Collections */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Revision Collections</h2>
          <Button size="sm" variant="outline" className="gap-1 text-xs h-8">+ New Collection</Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {COLLECTIONS.map(c => (
            <div key={c.title} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
              <div className="flex gap-2">
                <div className="w-16 h-12 bg-surface-high rounded-lg flex items-center justify-center text-xs text-on-surface-variant">{c.count}</div>
              </div>
              <div>
                <p className="font-semibold text-on-surface">{c.title}</p>
                <p className="text-xs text-on-surface-variant">{c.desc}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-on-surface-variant">{c.members} students</span>
                <span className={cn('text-xs px-2 py-0.5 rounded-full font-semibold', c.badge === 'High Activity' ? 'bg-amber-100 text-amber-700' : 'bg-surface-high text-on-surface-variant')}>
                  {c.badge === 'High Activity' ? '⚡' : '🔒'} {c.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Revision */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-ai" />
          <h2 className="font-display font-semibold text-on-surface">AI-Generated Revision</h2>
        </div>
        <p className="text-sm font-semibold text-on-surface">Personalised Study Path</p>
        <p className="text-sm text-on-surface-variant">AI curated snippets from 15 lessons based on frequent student questions and weak areas.</p>
        <Button className="gap-2"><Sparkles className="h-4 w-4" /> Deploy to Student Hub</Button>
      </div>
    </div>
  )
}
