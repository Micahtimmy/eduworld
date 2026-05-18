'use client'
import { Sparkles, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const SECURITY_EVENTS = [
  { icon: '🔑', event: 'Entered Campus', time: 'Today 08:12 AM', detail: 'Main North Gate – RFID' },
  { icon: '🏫', event: 'Homeroom Check-in', time: 'Today 08:30 AM', detail: 'Room 402 – QR code' },
  { icon: '🚪', event: 'Left Campus (Early)', time: 'Yesterday 02:15 PM', detail: 'Medical – Approved by Mrs. Gable' },
]

const DAYS = Array.from({ length: 31 }, (_, i) => i + 1)
const STATUS_MAP: Record<number, 'present' | 'absent' | 'tardy'> = {
  1: 'present', 2: 'present', 3: 'present', 4: 'tardy', 5: 'present',
  8: 'present', 9: 'present', 10: 'absent', 11: 'present', 12: 'present',
  15: 'present', 16: 'present', 17: 'present', 18: 'present', 19: 'tardy',
  22: 'present', 23: 'present', 24: 'present', 25: 'present', 26: 'present',
}

export default function ParentSafetyPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="font-display font-bold text-2xl text-on-surface">Safety, Attendance & Absence Management</h1>

      {/* AI Banner */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 flex items-start gap-3">
        <Sparkles className="h-4 w-4 text-ai mt-0.5 shrink-0" />
        <p className="text-sm text-on-surface-variant">Alex has been present for <strong className="text-on-surface">98% of classes this month</strong>. Safety check-ins are consistent and all absences have been pre-authorized.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Security Events */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-semibold text-on-surface">Security Events</h2>
            <Button variant="outline" size="sm" className="gap-2"><Filter className="h-4 w-4" /> Filter</Button>
          </div>
          <div className="space-y-3">
            {SECURITY_EVENTS.map(e => (
              <div key={e.event} className="flex items-start gap-3 p-3 bg-surface-low rounded-xl">
                <span className="text-xl">{e.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-on-surface">{e.event}</p>
                  <p className="text-xs text-on-surface-variant">{e.detail}</p>
                </div>
                <span className="text-xs text-on-surface-variant whitespace-nowrap">{e.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Absence Form */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Submit Absence Note</h2>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-on-surface-variant">Start Date</label>
              <input type="date" className="mt-1 w-full border border-outline-variant rounded-xl px-3 py-2 text-sm bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="text-xs text-on-surface-variant">End Date</label>
              <input type="date" className="mt-1 w-full border border-outline-variant rounded-xl px-3 py-2 text-sm bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="text-xs text-on-surface-variant">Reason</label>
              <select className="mt-1 w-full border border-outline-variant rounded-xl px-3 py-2 text-sm bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Medical Appointment</option>
                <option>Family Emergency</option>
                <option>Illness</option>
                <option>Religious Observance</option>
              </select>
            </div>
            <Button className="w-full">Submit Digital Note</Button>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">October 2023</h2>
          <div className="flex gap-3 text-xs">
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" /> Present</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" /> Absent</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" /> Tardy</span>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
            <div key={i} className="text-xs font-semibold text-on-surface-variant py-1">{d}</div>
          ))}
          {DAYS.map(d => {
            const status = STATUS_MAP[d]
            return (
              <div key={d} className={cn('rounded-lg py-1.5 text-xs font-medium transition-colors',
                status === 'present' ? 'bg-green-100 dark:bg-green-950/30 text-green-700' :
                status === 'absent' ? 'bg-red-100 dark:bg-red-950/30 text-red-700' :
                status === 'tardy' ? 'bg-amber-100 dark:bg-amber-950/30 text-amber-700' :
                'text-on-surface-variant'
              )}>{d}</div>
            )
          })}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 text-center">
          <p className="font-display font-bold text-3xl text-green-600">98%</p>
          <p className="text-xs text-on-surface-variant mt-1">Monthly Presence</p>
        </div>
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 text-center">
          <p className="font-display font-bold text-3xl text-primary">92%</p>
          <p className="text-xs text-on-surface-variant mt-1">Punctuality</p>
        </div>
      </div>
    </div>
  )
}
