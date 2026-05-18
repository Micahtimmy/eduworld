'use client'
import { Sparkles, Send, Paperclip, CheckCircle, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const CHIPS = [
  { label: 'All Year 10 Parents', selected: true },
  { label: 'All STEM Faculty', selected: false },
  { label: 'Sixth Form Students', selected: false },
  { label: 'Campus Security Team', selected: false },
]

const ALERTS = [
  { status: 'DELIVERED', statusColor: 'bg-green-100 text-green-700', title: 'Emergency: Campus Entry Protocols', body: 'Main gate maintenance required. All staff please use South Entrance...', metric: '92%', target: 'Global Faculty', time: '2h ago' },
  { status: 'SCHEDULED', statusColor: 'bg-amber-100 text-amber-700', title: 'Monthly STEM Newsletter', body: 'Robotics team win in Berlin and upcoming lab upgrades...', metric: '12,400+', target: 'Year 7–13 Parents', time: 'In 4h' },
  { status: 'ARCHIVED', statusColor: 'bg-surface-high text-on-surface-variant', title: 'Health Advisory Update', body: 'Seasonal flu vaccination protocols at the medical wing...', metric: '64%', target: 'Staff & Students', time: 'Yesterday' },
]

export default function AdminMessagingPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-on-surface-variant">Institutional Hub</p>
          <h1 className="font-display font-bold text-2xl text-on-surface mt-1">Messaging & Alerts</h1>
          <p className="text-sm text-on-surface-variant mt-1">Coordinate communications across the global academy infrastructure.</p>
        </div>
        <Button className="gap-2">📢 Broadcast Message</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Draft Panel */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-semibold text-on-surface">Draft New Alert</h2>
            <span className="text-xs bg-ai/10 text-ai px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">
              <Sparkles className="h-3 w-3" /> EDUWORLD AI ASSIST ACTIVE
            </span>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-on-surface-variant">Recipient Cohort</p>
            <div className="flex flex-wrap gap-2">
              {CHIPS.map(c => (
                <button key={c.label} className={cn('text-xs px-3 py-1.5 rounded-full font-semibold border transition-colors flex items-center gap-1', c.selected ? 'bg-primary/10 text-primary border-primary/30' : 'bg-surface-low text-on-surface-variant border-outline-variant hover:bg-surface-high')}>
                  {c.selected && <CheckCircle className="h-3 w-3" />}
                  {c.label}
                </button>
              ))}
              <button className="text-xs px-3 py-1.5 rounded-full border border-dashed border-outline-variant text-on-surface-variant hover:bg-surface-low">+ Custom Group</button>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-on-surface-variant">Subject Heading</label>
            <input className="w-full mt-1 px-3 py-2 text-sm bg-surface-low border border-outline-variant rounded-xl outline-none focus:border-primary placeholder:text-on-surface-variant" placeholder="Enter subject..." />
          </div>

          <div>
            <label className="text-xs font-semibold text-on-surface-variant">Message Content</label>
            <textarea className="w-full mt-1 px-3 py-2 text-sm bg-surface-low border border-outline-variant rounded-xl outline-none focus:border-primary resize-none placeholder:text-on-surface-variant" rows={5} defaultValue="Dear Parents and Guardians, please be advised that the revised exam schedule for upcoming Year 10 mock examinations is now available via EduWorld AI insights." />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button className="text-xs text-on-surface-variant flex items-center gap-1 hover:text-on-surface"><Paperclip className="h-3.5 w-3.5" /> Attach PDF schedule</button>
            <div className="flex gap-2 ml-auto">
              <Button variant="outline" size="sm" className="gap-1"><Clock className="h-3.5 w-3.5" /> Schedule Post</Button>
              <Button variant="outline" size="sm">Discard</Button>
              <Button size="sm" className="gap-1"><Send className="h-3.5 w-3.5" /> Send Now</Button>
            </div>
          </div>
        </div>

        {/* Live Preview */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div>
            <h2 className="font-display font-semibold text-on-surface">Live Preview</h2>
            <p className="text-xs text-on-surface-variant">Multi-Channel Visualiser</p>
          </div>

          {/* Push notification preview */}
          <div className="bg-surface-low rounded-2xl p-3 border border-outline-variant space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center text-white text-xs">E</div>
              <p className="text-xs font-semibold text-on-surface">EDUWORLD GLOBAL · Now</p>
            </div>
            <p className="text-sm font-semibold text-on-surface">Academic Term Update</p>
            <p className="text-xs text-on-surface-variant">Revised schedule for the upcoming Year 10 mock examinations is now available...</p>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">ℹ Official Alert</span>
          </div>

          {/* Email preview */}
          <div className="bg-surface-low rounded-2xl p-3 border border-outline-variant space-y-2">
            <p className="text-sm font-semibold text-on-surface">Winter Assessment Schedule</p>
            <p className="text-xs text-on-surface-variant">Dear Parents, please find the revised schedule for the upcoming Year 10 examinations...</p>
            <div className="flex items-center gap-1 text-xs text-on-surface-variant">
              <Paperclip className="h-3 w-3" /> PDF Attachment
            </div>
          </div>

          <div className="flex gap-3 justify-center">
            {['📱', '💻', '✉️'].map(c => (
              <div key={c} className="w-10 h-10 rounded-xl bg-surface-high flex items-center justify-center text-xl">{c}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Alerts */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex gap-1">
          {['All History', 'Active Now'].map((t, i) => (
            <button key={t} className={cn('px-3 py-1.5 rounded-lg text-xs font-medium', i === 0 ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-low')}>{t}</button>
          ))}
        </div>
        <div className="space-y-3">
          {ALERTS.map(a => (
            <div key={a.title} className="p-4 bg-surface-low rounded-xl space-y-2">
              <div className="flex items-center gap-2">
                <span className={cn('text-xs px-2 py-0.5 rounded-full font-semibold', a.statusColor)}>{a.status}</span>
                <span className="text-xs text-on-surface-variant">{a.time}</span>
              </div>
              <p className="text-sm font-semibold text-on-surface">{a.title}</p>
              <p className="text-xs text-on-surface-variant">{a.body}</p>
              <div className="flex items-center gap-3 text-xs text-on-surface-variant">
                <span>Read: <strong className="text-on-surface">{a.metric}</strong></span>
                <span>Target: {a.target}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
