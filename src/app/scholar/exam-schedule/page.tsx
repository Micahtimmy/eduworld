'use client'
import { Download, MapPin, Sparkles, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const EXAMS = [
  { date: 'Oct 12', subject: 'Advanced Quantum Mechanics', time: '09:00–12:00', location: 'Hall 4B, Main Campus' },
  { date: 'Oct 15', subject: 'Statistical Thermodynamics', time: '14:00–17:00', location: 'Gymnasium, North Wing' },
  { date: 'Oct 18', subject: 'Electromagnetic Theory II', time: '09:00–11:30', location: 'Room 102, Physics Bldg' },
]

const AI_RESOURCES = [
  { icon: '📋', title: 'Wave Function Collapse Summary', note: 'Generated 2 hrs ago' },
  { icon: '📝', title: 'Mock Paper: 2023 Formats', note: 'Recommended based on syllabus' },
]

export default function ScholarExamSchedulePage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="font-display font-bold text-2xl text-on-surface">Examination Hall</h1>
        <p className="text-sm text-on-surface-variant mt-1">Secure portal for timetables, seating assignments, and official documentation.</p>
      </div>

      {/* Alert Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="text-sm font-semibold text-amber-800">Upcoming Major Assessment</p>
          <p className="text-sm font-bold text-amber-900 mt-0.5">Advanced Quantum Mechanics</p>
          <p className="text-xs text-amber-700 mt-1">Hall 4B · Open Book · Requires Identity Verification</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-amber-700 font-semibold">T-Minus</p>
          <p className="font-display font-bold text-lg text-amber-800">03d : 14h : 22m</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Digital Pass */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">📱</span>
            <h2 className="font-display font-semibold text-on-surface">Digital Pass</h2>
          </div>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary mx-auto">AM</div>
            <div>
              <p className="font-semibold text-on-surface">Alex Mercer</p>
              <p className="text-xs text-on-surface-variant">ID: 8492-AX-99</p>
            </div>
            <div className="bg-surface-low rounded-xl p-3 font-mono text-xs text-on-surface-variant border border-outline-variant">
              ████ ████ ████ ████ ████
            </div>
            <Button size="sm" variant="outline" className="w-full gap-1.5"><Download className="h-3.5 w-3.5" /> Save Offline</Button>
          </div>
        </div>

        {/* Master Timetable */}
        <div className="lg:col-span-2 bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-semibold text-on-surface">Master Timetable</h2>
            <button className="text-xs text-primary hover:underline">View All</button>
          </div>
          <div className="space-y-3">
            {EXAMS.map(e => (
              <div key={e.subject} className="flex items-center gap-4 p-4 bg-surface-low rounded-xl">
                <div className="text-center shrink-0">
                  <p className="text-xs text-on-surface-variant">Oct</p>
                  <p className="font-display font-bold text-xl text-primary">{e.date.split(' ')[1]}</p>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm text-on-surface">{e.subject}</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">⏰ {e.time}</p>
                  <p className="text-xs text-on-surface-variant flex items-center gap-1 mt-0.5"><MapPin className="h-3 w-3" />{e.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Seating Widget */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
          <h2 className="font-display font-semibold text-on-surface">Seating Assignment</h2>
          <div className="flex items-center gap-4 p-4 bg-primary/5 border border-primary/20 rounded-xl">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-xl font-bold text-primary">G12</div>
            <div className="flex-1">
              <p className="font-semibold text-on-surface">Hall 4B</p>
              <p className="text-xs text-on-surface-variant">Row G · Desk 12</p>
            </div>
            <button className="text-xs text-primary hover:underline flex items-center gap-1"><MapPin className="h-3 w-3" /> View Map</button>
          </div>
        </div>

        {/* Smart Revision Panel */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-ai" />
            <h2 className="font-display font-semibold text-on-surface">Smart Revision</h2>
            <span className="text-xs text-on-surface-variant">EduWorld AI</span>
          </div>
          <div className="space-y-2">
            {AI_RESOURCES.map(r => (
              <div key={r.title} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl cursor-pointer hover:bg-surface-high">
                <span className="text-xl">{r.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-on-surface">{r.title}</p>
                  <p className="text-xs text-on-surface-variant">{r.note}</p>
                </div>
                <span className="text-primary text-sm">›</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
