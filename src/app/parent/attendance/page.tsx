'use client'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const EVENTS = [
  { icon: '🟢', label: 'Entered Campus', time: 'Today, 08:12 AM', detail: 'Main North Gate — RFID scan verified.' },
  { icon: '🟢', label: 'Homeroom Check-in', time: 'Today, 08:30 AM', detail: 'Room 402 — QR code scan successful.' },
  { icon: '🟡', label: 'Left Campus (Early)', time: 'Yesterday, 02:15 PM', detail: 'Medical Appointment — Approved by Mrs. Gable.' },
]

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const CAL_DATES = [25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8]
const ATTENDANCE_MAP: Record<number, 'present' | 'absent' | 'tardy'> = {
  1: 'present', 2: 'present', 3: 'present', 4: 'present', 5: 'present',
  6: 'absent', 7: 'tardy', 8: 'present',
}

export default function ParentAttendancePage() {
  return (
    <div className="p-4 space-y-5 pb-24">
      <h1 className="font-display font-bold text-xl text-on-surface">Safety &amp; Attendance</h1>
      <p className="text-sm text-on-surface-variant -mt-3">Real-time tracking and historical data for Alex Johnson.</p>

      {/* AI Insight */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 flex items-start gap-3">
        <Sparkles className="h-3.5 w-3.5 text-ai mt-0.5 shrink-0" />
        <p className="text-xs text-on-surface-variant">EduWorld AI: Alex maintains 98% class presence with consistent morning check-in patterns. No concerning patterns detected this term.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        {[{ label: 'Monthly Presence', value: '98%' }, { label: 'Punctuality', value: '92%' }].map(s => (
          <div key={s.label} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 text-center">
            <p className="font-display font-bold text-2xl text-on-surface">{s.value}</p>
            <p className="text-xs text-on-surface-variant mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Security Events */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Security Events</h2>
          <Button size="sm" variant="outline" className="h-7 text-xs">Filter</Button>
        </div>
        <div className="space-y-2">
          {EVENTS.map(e => (
            <div key={e.label} className="flex items-start gap-3 p-2.5 bg-surface-low rounded-xl">
              <span className="text-sm shrink-0 mt-0.5">{e.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-on-surface">{e.label}</p>
                <p className="text-xs text-on-surface-variant">{e.detail}</p>
              </div>
              <span className="text-xs text-on-surface-variant shrink-0">{e.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Attendance Calendar */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">October 2023</h2>
          <div className="flex gap-1">
            <button className="p-1 rounded text-on-surface-variant">‹</button>
            <button className="p-1 rounded text-on-surface-variant">›</button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {DAYS.map((d, i) => (
            <div key={`${d}-${i}`} className="text-center text-xs font-semibold text-on-surface-variant py-1">{d}</div>
          ))}
          {CAL_DATES.map(d => {
            const status = ATTENDANCE_MAP[d]
            return (
              <div key={d} className={`aspect-square rounded-lg flex items-center justify-center text-xs font-semibold ${
                d > 20 ? 'text-on-surface-variant' :
                status === 'present' ? 'bg-green-100 text-green-700' :
                status === 'absent' ? 'bg-red-100 text-red-700' :
                status === 'tardy' ? 'bg-amber-100 text-amber-700' :
                'text-on-surface'
              }`}>{d}</div>
            )
          })}
        </div>
        <div className="flex gap-4 flex-wrap">
          {[{ color: 'bg-green-500', label: 'Present' }, { color: 'bg-red-500', label: 'Absent' }, { color: 'bg-amber-500', label: 'Tardy' }].map(l => (
            <div key={l.label} className="flex items-center gap-1.5">
              <div className={`w-2.5 h-2.5 rounded-full ${l.color}`} />
              <span className="text-xs text-on-surface-variant">{l.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Absence Note */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-4">
        <h2 className="font-display font-semibold text-on-surface">Submit Absence Note</h2>
        <p className="text-xs text-on-surface-variant">Submit a digital note for any upcoming absences for Alex.</p>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-semibold text-on-surface-variant mb-1 block">Start Date</label>
            <input type="date" className="w-full bg-surface-low rounded-xl px-3 py-2 text-sm border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="text-xs font-semibold text-on-surface-variant mb-1 block">End Date</label>
            <input type="date" className="w-full bg-surface-low rounded-xl px-3 py-2 text-sm border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold text-on-surface-variant mb-1 block">Reason</label>
          <select className="w-full bg-surface-low rounded-xl px-3 py-2.5 text-sm text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/30">
            <option>Medical Appointment</option>
            <option>Family Emergency</option>
            <option>Illness</option>
            <option>Religious Observance</option>
          </select>
        </div>
        <Button className="w-full">Submit Digital Note</Button>
      </div>
    </div>
  )
}
