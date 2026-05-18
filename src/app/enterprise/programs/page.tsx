'use client'
import { Sparkles, GripVertical, Trash2, Calendar, Users, CheckCircle2, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const LIBRARY = [
  { icon: '🔒', title: 'GDPR Essentials', duration: '45 mins', level: 'Advanced' },
  { icon: '⚡', title: 'AI Privacy Risk', duration: '20 mins', level: 'AI Powered' },
  { icon: '📋', title: 'Data Handling 101', duration: '60 mins', level: 'Foundational' },
  { icon: '⚠️', title: 'Breach Response', duration: '30 mins', level: 'Compliance' },
]

const PATH = [
  { icon: '🛡️', title: 'Introduction to GDPR', type: 'Mandatory', note: 'Pass grade: 80%' },
  { icon: '🔐', title: 'Data Encryption Protocols', type: 'Technical Elective', note: '30 mins' },
]

const METRICS = [
  { label: 'Estimated Completion', value: '18 Days' },
  { label: 'Predicted Engagement', value: '92%' },
  { label: 'Skill Points Earned', value: '450 per user' },
  { label: 'Program ROI Score', value: '8.4 / 10' },
]

export default function EnterpriseProgramsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-on-surface-variant">Step 1: Selection / Step 2: Assignment</p>
          <h1 className="font-display font-bold text-2xl text-on-surface mt-1">Custom Program Builder</h1>
        </div>
      </div>

      {/* Program Header Card */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">✓ COMPLIANCE PROGRAM</span>
            <h2 className="font-display font-bold text-xl text-on-surface">Global Data Privacy 2024</h2>
            <p className="text-sm text-on-surface-variant">Mandatory certification for EMEA/APAC regions. GDPR-focused curriculum with audit trail.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Save Draft</Button>
            <Button size="sm">Launch Program</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Course Library */}
        <div className="lg:col-span-4 bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Course Library</h2>
          <div className="space-y-2">
            {LIBRARY.map(c => (
              <div key={c.title} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl cursor-grab">
                <GripVertical className="h-4 w-4 text-on-surface-variant" />
                <span className="text-base">{c.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-on-surface truncate">{c.title}</p>
                  <p className="text-xs text-on-surface-variant">{c.duration} · {c.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Path Roadmap */}
        <div className="lg:col-span-5 bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-semibold text-on-surface">Path Roadmap</h2>
            <span className="text-xs text-on-surface-variant">3 Courses · 1h 35m total</span>
          </div>
          <div className="space-y-2">
            {PATH.map((p, i) => (
              <div key={p.title} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl border border-outline-variant">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">{i + 1}</div>
                <span className="text-base">{p.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-on-surface">{p.title}</p>
                  <p className="text-xs text-on-surface-variant">{p.type} · {p.note}</p>
                </div>
                <button className="text-on-surface-variant hover:text-red-500"><Trash2 className="h-4 w-4" /></button>
              </div>
            ))}
            <div className="border-2 border-dashed border-outline-variant rounded-xl p-4 text-center text-xs text-on-surface-variant">
              Drag courses here to add to path
            </div>
          </div>
          <div className="bg-ai/5 border border-ai/20 rounded-xl p-3 flex items-start gap-2">
            <Sparkles className="h-4 w-4 text-ai mt-0.5 shrink-0" />
            <p className="text-xs text-on-surface-variant"><strong className="text-on-surface">AI Optimization:</strong> Add &quot;Cloud Security Architecture&quot; — trending in APAC regulatory frameworks.</p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <h3 className="font-semibold text-sm text-on-surface">Deadline Management</h3>
            </div>
            <input type="date" className="w-full px-3 py-2 text-sm bg-surface-low border border-outline-variant rounded-xl outline-none focus:border-primary" />
            <p className="text-xs text-on-surface-variant">Reminders Every 3 Days</p>
          </div>

          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-sm text-on-surface">Assignees</h3>
              </div>
              <button className="text-xs text-primary hover:underline">Add All</button>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-semibold flex items-center gap-1">EM EMEA - Sales ×</span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-semibold flex items-center gap-1">AP APAC - Engineering ×</span>
            </div>
            <p className="text-xs text-on-surface-variant">Target Reach: <strong className="text-on-surface">1,240 Employees</strong></p>
          </div>

          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <h3 className="font-semibold text-sm text-on-surface">Compliance Status</h3>
            </div>
            <div className="space-y-1.5">
              <p className="text-xs text-green-600 flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Meets EU Privacy Mandate</p>
              <p className="text-xs text-green-600 flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Audit logging enabled</p>
            </div>
          </div>

          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <h3 className="font-semibold text-sm text-on-surface">Metrics Summary</h3>
            </div>
            {METRICS.map(m => (
              <div key={m.label} className="flex items-center justify-between">
                <p className="text-xs text-on-surface-variant">{m.label}</p>
                <p className="text-xs font-bold text-on-surface">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
