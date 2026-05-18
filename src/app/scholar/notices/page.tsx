'use client'
import { Button } from '@/components/ui/button'

const MANDATORY = [
  { title: 'Lab Safety Protocol Update', tag: 'Mandatory Reading', date: 'Oct 15', urgent: true },
  { title: 'AI Week Ahead — Departmental Briefing', tag: 'Mandatory Reading', date: 'Oct 14', urgent: false },
]

const MEMOS = [
  { title: 'Research Ethics Committee Memo', from: 'Prof. R. Hawthorne', date: 'Oct 13' },
  { title: 'Revised Lab Booking Policy', from: 'Department Admin', date: 'Oct 10' },
  { title: 'Funding Cycle Reminder', from: 'Faculty Finance', date: 'Oct 8' },
]

const SEMINARS = [
  { title: 'Renewable Energy Systems Symposium', date: 'Oct 18', time: '2:00 PM', room: 'Lecture Hall B', seats: 12 },
  { title: 'Alumni Research Panel', date: 'Oct 22', time: '5:00 PM', room: 'Virtual — Zoom', seats: 40 },
]

export default function ScholarNoticesPage() {
  return (
    <div className="p-4 md:p-6 space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="font-display font-bold text-2xl text-on-surface">Departmental Notice Board</h1>
        <p className="text-sm text-on-surface-variant mt-1">Computer Science &amp; AI — Doctoral Division</p>
      </div>

      {/* Mandatory Reading */}
      <div className="space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Mandatory Reading</h2>
        {MANDATORY.map(m => (
          <div key={m.title} className={`rounded-2xl border p-4 flex items-start gap-3 ${m.urgent ? 'bg-red-50 border-red-200' : 'bg-surface-lowest border-outline-variant'}`}>
            <span className={`text-lg shrink-0 ${m.urgent ? 'text-red-500' : 'text-amber-500'}`}>{m.urgent ? '🚨' : '📋'}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-on-surface">{m.title}</p>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${m.urgent ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>{m.tag}</span>
                <span className="text-xs text-on-surface-variant">{m.date}</span>
              </div>
            </div>
            <Button size="sm" variant="outline" className="shrink-0">Read</Button>
          </div>
        ))}
      </div>

      {/* Recent Memos */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Recent Memos</h2>
        <div className="divide-y divide-outline-variant">
          {MEMOS.map(m => (
            <div key={m.title} className="flex items-center gap-3 py-2.5">
              <span className="text-on-surface-variant text-sm shrink-0">📄</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-on-surface">{m.title}</p>
                <p className="text-xs text-on-surface-variant">{m.from} · {m.date}</p>
              </div>
              <button className="text-xs text-primary hover:underline shrink-0">View</button>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Seminars */}
      <div className="space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Upcoming Seminars</h2>
        {SEMINARS.map(s => (
          <div key={s.title} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 flex items-start gap-4">
            <div className="bg-primary/10 rounded-xl p-3 text-center min-w-[56px] shrink-0">
              <p className="text-xs font-semibold text-primary">{s.date.split(' ')[0]}</p>
              <p className="text-lg font-bold text-primary">{s.date.split(' ')[1]}</p>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-on-surface">{s.title}</p>
              <p className="text-xs text-on-surface-variant mt-0.5">{s.time} · {s.room}</p>
              <p className="text-xs text-on-surface-variant">{s.seats} seats available</p>
            </div>
            <Button size="sm" className="shrink-0">RSVP</Button>
          </div>
        ))}
      </div>

      {/* House Announcements */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-2">
        <h2 className="font-display font-semibold text-on-surface">House Announcements</h2>
        <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-xl border border-primary/20">
          <span className="text-xl shrink-0">🏛</span>
          <div>
            <p className="text-sm font-semibold text-on-surface">Alpha Cohort — End of Term Gala</p>
            <p className="text-xs text-on-surface-variant mt-0.5">All Alpha Cohort doctoral candidates are invited to the end-of-term research showcase. November 28, Grand Hall.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
