'use client'
import { Sparkles, Search, Archive, Reply, Calendar, CheckCircle2, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const TIERS = [
  { icon: '🔥', label: 'Priority Auth', badge: 2 },
  { icon: '🏛️', label: 'Deans & Admin', badge: null },
  { icon: '🔬', label: 'Faculty / Profs', badge: 14 },
  { icon: '🔗', label: 'Research Mentors', badge: null },
  { icon: '👥', label: 'Peer Cohort', badge: null },
]

const MESSAGES = [
  { initials: 'EV', name: 'Dr. E. Vance', time: '10:42 AM', status: 'Urgent Action Required', active: true },
  { initials: 'AL', name: 'Prof. A. Liang', time: 'Yesterday', status: 'Cleared', active: false },
  { initials: 'DO', name: "Dean's Office", time: 'Oct 12', status: 'For Information', active: false },
]

const SLOTS = [
  { day: 'Thu, Oct 14', time: '10:00 AM', duration: '30m' },
  { day: 'Thu, Oct 14', time: '02:30 PM', duration: '30m' },
  { day: 'Fri, Oct 15', time: '09:00 AM', duration: '30m' },
]

export default function ScholarFacultyCommsPage() {
  return (
    <div className="p-6 h-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
        {/* Left Panel */}
        <div className="lg:col-span-3 bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-4">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant" />
              <input className="w-full pl-9 pr-3 py-2 text-sm bg-surface-low rounded-xl border border-outline-variant outline-none focus:border-primary" placeholder="Search..." />
            </div>
            <button className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">+</button>
          </div>

          {/* Institutional banner */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-3">
            <p className="text-xs font-semibold text-primary">📢 Institutional Directives</p>
            <p className="text-xs text-on-surface-variant mt-1">Grant application deadline — Nov 5. Submit via portal.</p>
          </div>

          {/* Tiers */}
          <div className="space-y-1">
            {TIERS.map(t => (
              <div key={t.label} className={cn('flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer hover:bg-surface-low transition-colors', t.label === 'Faculty / Profs' && 'bg-surface-low')}>
                <span className="text-base">{t.icon}</span>
                <p className="text-sm text-on-surface flex-1">{t.label}</p>
                {t.badge && <span className="text-xs bg-primary text-white px-1.5 py-0.5 rounded-full font-semibold">{t.badge}</span>}
              </div>
            ))}
          </div>

          {/* Message list */}
          <div className="space-y-2">
            {MESSAGES.map(m => (
              <div key={m.name} className={cn('p-3 rounded-xl cursor-pointer transition-colors', m.active ? 'bg-primary/5 border border-primary/20' : 'hover:bg-surface-low')}>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">{m.initials}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-on-surface truncate">{m.name}</p>
                    <p className="text-xs text-on-surface-variant">{m.time}</p>
                  </div>
                </div>
                <p className={cn('text-xs', m.status === 'Urgent Action Required' ? 'text-red-600 font-semibold' : 'text-on-surface-variant')}>{m.status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Thread Panel */}
        <div className="lg:col-span-6 bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden flex flex-col">
          <div className="flex items-center justify-between px-5 py-4 border-b border-outline-variant">
            <h2 className="font-display font-semibold text-on-surface">RE: Methodology revision for Chapter 4</h2>
            <div className="flex gap-2">
              <button className="text-xs text-on-surface-variant hover:text-on-surface flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-surface-low">
                <Archive className="h-3.5 w-3.5" /> Archive
              </button>
              <button className="text-xs text-primary hover:underline flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-primary/5">
                <Reply className="h-3.5 w-3.5" /> Reply
              </button>
            </div>
          </div>
          <div className="p-5 flex-1 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-ai/20 flex items-center justify-center text-sm font-bold text-ai shrink-0">EV</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-semibold text-sm text-on-surface">Dr. Elias Vance</p>
                  <p className="text-xs text-on-surface-variant">&lt;e.vance@university.edu&gt;</p>
                  <p className="text-xs text-on-surface-variant ml-auto">Today, 10:42 AM</p>
                </div>
                <p className="text-sm text-on-surface-variant">To: You</p>
                <div className="mt-3 text-sm text-on-surface space-y-2">
                  <p>The statistical approach in Section 4.2 is misaligned with the thesis parameters. The variance model is too broad for the sample size of n=42.</p>
                  <p>I recommend revisiting the methodology with a more constrained regression model. Please revise and resubmit by Thursday for review before the faculty panel.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Action Panel */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <h2 className="font-display font-semibold text-on-surface">Schedule Office Hour</h2>
            </div>
            <div className="space-y-2">
              {SLOTS.map(s => (
                <label key={s.time + s.day} className="flex items-center gap-3 p-3 rounded-xl border border-outline-variant cursor-pointer hover:bg-surface-low">
                  <input type="radio" name="slot" className="accent-primary" />
                  <div>
                    <p className="text-sm font-semibold text-on-surface">{s.day}</p>
                    <p className="text-xs text-on-surface-variant">{s.time} ({s.duration})</p>
                  </div>
                </label>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-on-surface-variant">Meeting Intent</p>
              <div className="relative">
                <select className="w-full appearance-none px-3 py-2 text-sm bg-surface-low border border-outline-variant rounded-xl text-on-surface outline-none pr-8">
                  <option>Methodology Review</option>
                  <option>Thesis Defense Prep</option>
                  <option>General Advising</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant pointer-events-none" />
              </div>
            </div>
            <Button className="w-full">Confirm Booking</Button>
            <div className="pt-2 border-t border-outline-variant space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <p className="text-xs text-on-surface-variant">Tagged: <span className="font-semibold text-on-surface">Thesis Ch. 4</span></p>
              </div>
              <p className="text-xs text-on-surface-variant">Primary Advisor · Hierarchy Line</p>
            </div>
          </div>

          <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-ai" />
              <p className="text-sm font-semibold text-on-surface">AI Insight</p>
            </div>
            <p className="text-xs text-on-surface-variant">Dr. Vance typically responds to methodology queries within 2 hours during office hours.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
