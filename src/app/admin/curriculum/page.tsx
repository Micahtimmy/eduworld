'use client'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const FRAMEWORKS = [
  { name: 'International Baccalaureate (IB)', subjects: 28, alignment: 99, status: 'active' },
  { name: 'Cambridge A-Levels', subjects: 34, alignment: 97, status: 'active' },
  { name: 'IGCSE Curriculum', subjects: 41, alignment: 95, status: 'active' },
  { name: 'Common Core (US)', subjects: 22, alignment: 88, status: 'review' },
]

const LOGS = [
  { action: 'Framework Updated', detail: 'IB MYP — Unit 4 Chemistry', time: '2 hours ago', type: 'update' },
  { action: 'AI Auto-Mapped', detail: '14 learning objectives linked', time: '5 hours ago', type: 'ai' },
  { action: 'Staff Review Triggered', detail: 'A-Level Physics Syllabus', time: 'Yesterday', type: 'review' },
]

export default function AdminCurriculumPage() {
  return (
    <div className="p-4 md:p-6 space-y-6 max-w-5xl mx-auto">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Curriculum &amp; Standards</h1>
          <p className="text-sm text-on-surface-variant mt-1">Manage frameworks, alignment, and learning objectives</p>
        </div>
        <Button size="sm" className="gap-2 shrink-0">+ Add Framework</Button>
      </div>

      {/* Global Alignment Banner */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Frameworks', value: '12' },
          { label: 'Global Alignment', value: '94.2%' },
          { label: 'Active Subjects', value: '127' },
          { label: 'Pending Reviews', value: '6' },
        ].map(m => (
          <div key={m.label} className="text-center">
            <p className="font-display font-bold text-2xl text-on-surface">{m.value}</p>
            <p className="text-xs text-on-surface-variant mt-0.5">{m.label}</p>
          </div>
        ))}
      </div>

      {/* AI Auto-Map */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 flex items-start gap-3">
        <Sparkles className="h-4 w-4 text-ai mt-0.5 shrink-0" />
        <div className="flex-1">
          <p className="text-sm font-semibold text-on-surface">AI Auto-Map &amp; Staff Competency</p>
          <p className="text-xs text-on-surface-variant mt-0.5">EduWorld AI can automatically map curriculum objectives to staff skills and lesson content across all frameworks.</p>
        </div>
        <Button size="sm" className="bg-ai hover:bg-ai/90 text-white shrink-0 gap-1.5">
          <Sparkles className="h-3 w-3" /> Run Auto-Map
        </Button>
      </div>

      {/* Frameworks */}
      <div className="space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Curriculum Frameworks</h2>
        {FRAMEWORKS.map(f => (
          <div key={f.name} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 flex items-center gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-sm font-semibold text-on-surface">{f.name}</p>
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${f.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                  {f.status === 'active' ? 'Active' : 'Under Review'}
                </span>
              </div>
              <p className="text-xs text-on-surface-variant mt-0.5">{f.subjects} subjects</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex-1 h-1.5 bg-surface-high rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${f.alignment}%` }} />
                </div>
                <span className="text-xs font-semibold text-on-surface shrink-0">{f.alignment}%</span>
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <Button size="sm" variant="outline">Edit</Button>
              <Button size="sm" variant="outline">View</Button>
            </div>
          </div>
        ))}
      </div>

      {/* Activity Log */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Recent Activity</h2>
        <div className="space-y-2">
          {LOGS.map(l => (
            <div key={l.detail} className="flex items-start gap-3 p-2.5 bg-surface-low rounded-xl">
              <span className={`text-sm mt-0.5 shrink-0 ${l.type === 'ai' ? 'text-ai' : l.type === 'update' ? 'text-primary' : 'text-amber-500'}`}>
                {l.type === 'ai' ? '✦' : l.type === 'update' ? '●' : '⚠'}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-on-surface">{l.action}</p>
                <p className="text-xs text-on-surface-variant">{l.detail}</p>
              </div>
              <span className="text-xs text-on-surface-variant shrink-0">{l.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
