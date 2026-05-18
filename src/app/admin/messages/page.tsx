'use client'
import { useState } from 'react'
import { Send, Paperclip, Clock, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const RECIPIENTS = ['All Year 10 Parents', 'All STEM Faculty', 'Sixth Form Students', 'Campus Security Team']

const ALERTS = [
  { status: 'DELIVERED', color: 'border-green-500', badge: 'bg-green-100 text-green-700', time: '2h ago', title: 'Emergency: Campus Entry Protocols', body: 'Main gate maintenance required. All staff please use South Entrance and follow revised safety protocols.', metric: '92%', target: 'Global Faculty' },
  { status: 'SCHEDULED', color: 'border-blue-400', badge: 'bg-blue-100 text-blue-700', time: 'In 4h', title: 'Monthly STEM Newsletter', body: 'Celebrating our recent Robotics win in Berlin and upcoming lab upgrades across the Science wing.', metric: '12,400+', target: 'Year 7–13 Parents' },
  { status: 'ARCHIVED', color: 'border-outline-variant', badge: 'bg-surface-high text-on-surface-variant', time: 'Yesterday', title: 'Health Advisory Update', body: 'Updated protocols for seasonal flu vaccinations available at the medical wing for all staff and students.', metric: '64%', target: 'Staff & Students' },
]

export default function AdminMessagesPage() {
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('Dear Parents and Guardians, please find the revised schedule for the upcoming Year 10 mock examinations...')
  const [selectedRecipients, setSelectedRecipients] = useState(RECIPIENTS.slice(0, 2))
  const [sent, setSent] = useState(false)

  function toggleRecipient(r: string) {
    setSelectedRecipients(prev => prev.includes(r) ? prev.filter(x => x !== r) : [...prev, r])
  }

  if (sent) {
    return (
      <div className="p-6 flex items-center justify-center min-h-96">
        <div className="text-center space-y-4 max-w-md">
          <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
          <h2 className="font-display font-bold text-2xl text-on-surface">Broadcast Sent Successfully</h2>
          <p className="text-on-surface-variant">Your institutional alert has been dispatched to 14,202 recipients across all integrated platforms.</p>
          <Button onClick={() => setSent(false)}>Back to Dashboard</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Messaging & Alerts</h1>
          <p className="text-sm text-on-surface-variant mt-1">Coordinate communications across the global academy infrastructure.</p>
        </div>
        <Button variant="destructive" size="sm" className="gap-2">
          <AlertTriangle className="h-4 w-4" /> Broadcast Message
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Compose */}
        <div className="lg:col-span-3 bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-semibold text-on-surface">Draft New Alert</h2>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-ai/10 text-ai">AI ASSIST ACTIVE</span>
          </div>

          {/* Recipients */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-on-surface-variant uppercase">Recipient Cohorts</p>
            <div className="flex flex-wrap gap-2">
              {RECIPIENTS.map(r => (
                <button
                  key={r}
                  onClick={() => toggleRecipient(r)}
                  className={cn(
                    'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border-2 transition-all',
                    selectedRecipients.includes(r)
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-dashed border-outline-variant text-on-surface-variant hover:border-primary/50'
                  )}
                >
                  {selectedRecipients.includes(r) && <CheckCircle2 className="h-3 w-3" />}
                  {r}
                </button>
              ))}
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border-2 border-dashed border-outline-variant text-on-surface-variant hover:border-primary/50">
                + Custom Group
              </button>
            </div>
          </div>

          {/* Subject */}
          <input
            className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface-low text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder="Subject Heading"
            value={subject}
            onChange={e => setSubject(e.target.value)}
          />

          {/* Body */}
          <textarea
            rows={5}
            className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface-low text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            value={body}
            onChange={e => setBody(e.target.value)}
          />

          {/* Actions */}
          <div className="flex items-center justify-between pt-1">
            <button className="flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-on-surface">
              <Paperclip className="h-4 w-4" /> Attach PDF schedule
            </button>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-1.5"><Clock className="h-4 w-4" /> Schedule</Button>
              <Button variant="ghost" size="sm">Discard</Button>
              <Button size="sm" className="gap-1.5" onClick={() => setSent(true)}>
                <Send className="h-4 w-4" /> Send Now
              </Button>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="lg:col-span-2 bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Multi-Channel Preview</h2>

          {/* Push preview */}
          <div className="bg-surface-low rounded-xl p-3 border border-outline-variant">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-white text-xs font-bold">E</div>
              <span className="text-xs font-semibold text-on-surface">EDUWORLD GLOBAL</span>
              <span className="text-xs text-on-surface-variant ml-auto">Now</span>
            </div>
            <p className="text-xs font-semibold text-on-surface">{subject || 'Academic Term Update'}</p>
            <p className="text-xs text-on-surface-variant mt-0.5 line-clamp-2">{body}</p>
            <span className="mt-1 inline-block text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">Official Alert</span>
          </div>

          {/* Email preview */}
          <div className="bg-surface-low rounded-xl p-3 border border-outline-variant space-y-1">
            <p className="text-xs font-semibold text-on-surface">{subject || 'Winter Assessment Schedule'}</p>
            <p className="text-xs text-on-surface-variant line-clamp-3">{body}</p>
            <div className="flex items-center gap-2 mt-2 p-2 rounded-lg bg-surface-high">
              <span className="text-red-500 text-base">📄</span>
              <div>
                <p className="text-xs font-medium text-on-surface">schedule.pdf</p>
                <p className="text-xs text-on-surface-variant">2.4 MB · PDF File</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6 pt-2 text-on-surface-variant/50">
            <span title="Mobile Push" className="text-2xl">📱</span>
            <span title="Web Portal" className="text-2xl">💻</span>
            <span title="Email" className="text-2xl">📧</span>
          </div>
        </div>
      </div>

      {/* Recent Alerts */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-semibold text-on-surface">Recent Alerts & Insights</h2>
          <div className="flex gap-1">
            {['All', 'History', 'Active Now'].map((t, i) => (
              <button key={t} className={cn('px-3 py-1 text-xs font-medium rounded-lg', i === 0 ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-low')}>{t}</button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ALERTS.map(a => (
            <div key={a.title} className={cn('bg-surface-lowest rounded-2xl border-l-4 p-4 space-y-2 border border-outline-variant', a.color)}>
              <div className="flex items-center justify-between">
                <span className={cn('text-xs font-semibold px-2 py-0.5 rounded-full', a.badge)}>{a.status}</span>
                <span className="text-xs text-on-surface-variant">{a.time}</span>
              </div>
              <h3 className="text-sm font-semibold text-on-surface">{a.title}</h3>
              <p className="text-xs text-on-surface-variant line-clamp-2">{a.body}</p>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-medium text-on-surface">Read Receipt: {a.metric}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-surface-high text-on-surface-variant">{a.target}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
