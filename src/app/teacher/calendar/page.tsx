'use client'
import { Sparkles, ChevronLeft, ChevronRight, Video, MapPin, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const EVENTS = [
  { title: 'AP Physics — Block A', room: 'Room 302', time: '9:00–10:00 AM', day: 'Mon', type: 'class', color: 'border-l-blue-500 bg-blue-50' },
  { title: 'Cafeteria Duty', room: '', time: '11:30–12:00 PM', day: 'Mon', type: 'duty', color: 'border-l-amber-500 bg-amber-50' },
  { title: 'Dept. Sync (Virtual)', room: 'Zoom', time: '9:00–9:50 AM', day: 'Tue', type: 'meeting', color: 'border-l-green-500 bg-green-50', virtual: true },
  { title: 'Student Advising', room: 'Room 402', time: '10:30–11:15 AM', day: 'Tue', type: 'advising', color: 'border-l-amber-500 bg-amber-50', warning: true },
  { title: 'Emergency IEP Meeting', room: '', time: '10:45–11:30 AM', day: 'Wed', type: 'meeting', color: 'border-l-red-500 bg-red-50' },
  { title: 'AI Tools in Curriculum Design Webinar', room: 'Online', time: '2:00–3:30 PM', day: 'Wed', type: 'pd', color: 'border-l-primary bg-primary/5' },
]

const DAYS = ['Mon 16', 'Tue 17', 'Wed 18', 'Thu 19', 'Fri 20']
const LAYERS = ['Personal', 'Classes', 'Duties & Roster', 'Professional Dev.']

export default function TeacherCalendarPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Academic Calendar & Scheduling</h1>
          <p className="text-sm text-on-surface-variant mt-1">Educator Portal · October 2023</p>
        </div>
        <Button className="gap-2"><Sparkles className="h-4 w-4" /> AI Lesson Generator</Button>
      </div>

      {/* Calendar Header */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 rounded-lg hover:bg-surface-low flex items-center justify-center text-on-surface-variant transition-colors">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div>
              <p className="font-display font-semibold text-on-surface">October 2023</p>
              <p className="text-xs text-on-surface-variant">Week of Oct 16 – Oct 22</p>
            </div>
            <button className="w-8 h-8 rounded-lg hover:bg-surface-low flex items-center justify-center text-on-surface-variant transition-colors">
              <ChevronRight className="h-4 w-4" />
            </button>
            <Button variant="outline" size="sm">Today</Button>
          </div>
          <div className="flex gap-1">
            {['Week', 'Month', 'Agenda'].map((v, i) => (
              <button key={v} className={cn('px-3 py-1.5 rounded-lg text-xs font-medium transition-colors', i === 0 ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-low')}>{v}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Weekly Time Grid */}
        <div className="lg:col-span-3 bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
          {/* Day Headers */}
          <div className="grid grid-cols-5 border-b border-outline-variant">
            {DAYS.map(d => (
              <div key={d} className="p-3 text-center border-r border-outline-variant last:border-r-0">
                <p className="text-xs font-semibold text-on-surface-variant">{d.split(' ')[0]}</p>
                <p className="text-lg font-bold text-on-surface">{d.split(' ')[1]}</p>
              </div>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-5 min-h-64">
            {DAYS.map(d => {
              const dayKey = d.split(' ')[0]
              const dayEvents = EVENTS.filter(e => e.day === dayKey)
              return (
                <div key={d} className="border-r border-outline-variant last:border-r-0 p-2 space-y-2">
                  {dayEvents.map(event => (
                    <div key={event.title} className={cn('border-l-4 rounded-r-xl p-2 space-y-1', event.color)}>
                      <div className="flex items-center gap-1">
                        {event.virtual && <Video className="h-3 w-3 text-green-600 shrink-0" />}
                        {event.warning && <AlertTriangle className="h-3 w-3 text-amber-500 shrink-0" />}
                        <p className="text-xs font-semibold text-on-surface line-clamp-2">{event.title}</p>
                      </div>
                      <p className="text-xs text-on-surface-variant">{event.time}</p>
                      {event.room && (
                        <p className="text-xs text-on-surface-variant flex items-center gap-0.5">
                          <MapPin className="h-3 w-3 shrink-0" />{event.room}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )
            })}
          </div>
        </div>

        {/* Calendar Layers */}
        <div className="space-y-4">
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <h2 className="font-display font-semibold text-on-surface">Calendar Layers</h2>
            <div className="space-y-2">
              {LAYERS.map((l, i) => (
                <div key={l} className="flex items-center gap-3">
                  <div className={cn('w-4 h-4 rounded flex items-center justify-center', i === 0 ? 'bg-primary' : i === 1 ? 'bg-blue-500' : i === 2 ? 'bg-amber-500' : 'bg-green-500')}>
                    <div className="w-2 h-2 rounded-sm bg-white" />
                  </div>
                  <p className="text-sm text-on-surface">{l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-ai" />
              <p className="text-sm font-semibold text-on-surface">AI Notice</p>
            </div>
            <p className="text-xs text-on-surface-variant">You have a scheduling conflict on Wednesday at 10:45 AM. The Emergency IEP Meeting overlaps with Student Advising.</p>
            <button className="text-xs text-primary hover:underline">Resolve Conflict →</button>
          </div>
        </div>
      </div>
    </div>
  )
}
