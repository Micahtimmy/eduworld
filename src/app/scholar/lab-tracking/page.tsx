'use client'
import { Button } from '@/components/ui/button'

const SESSIONS = [
  {
    month: 'Oct', day: '24', course: 'CHEM-301', time: '14:00 – 17:00',
    title: 'Organic Synthesis: Esterification', location: 'Science Complex, Room 402-B',
    badge: 'Upcoming', badgeColor: 'amber',
  },
  {
    month: 'Oct', day: '17', course: 'PHYS-205', time: '',
    title: 'Spectroscopy Calibration', location: 'Physics Annex, Room 101',
    badge: 'Logged', badgeColor: 'green',
  },
]

const TOOLS = [
  { icon: '📄', name: 'Synthesis Manual v2.4', format: 'PDF', size: '2.4 MB' },
  { icon: '📓', name: 'Jupyter Log Template', format: 'IPYNB', size: '15 KB' },
  { icon: '🔗', name: 'Equipment Booking Portal', format: 'External Link', size: '' },
]

export default function ScholarLabTrackingPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">Academic Session 2024</span>
          </div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Practical Lab Tracking</h1>
          <p className="text-sm text-on-surface-variant mt-1">Manage lab sessions, submit logs, and connect with lab partners.</p>
        </div>
      </div>

      {/* Term Progress */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4">
          <p className="text-xs text-on-surface-variant font-semibold">Term Progress</p>
          <p className="font-display font-bold text-3xl text-on-surface mt-1">6 / 12</p>
          <p className="text-xs text-on-surface-variant">Labs completed</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-amber-500">⚠</span>
            <p className="text-xs font-semibold text-on-surface">Pre-Lab Safety Protocol</p>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-0.5 shrink-0" />
            <p className="text-xs text-on-surface-variant">I have reviewed the MSDS for Reagent A. PPE acquired.</p>
          </div>
        </div>
      </div>

      {/* Scheduled Sessions */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">📅 Scheduled Sessions</h2>
          <button className="text-xs text-primary hover:underline">View Full Calendar</button>
        </div>
        <div className="space-y-3">
          {SESSIONS.map(s => (
            <div key={s.title} className="flex gap-4 p-3 bg-surface-low rounded-xl">
              <div className="text-center shrink-0 w-12">
                <p className="text-xs font-semibold text-on-surface-variant uppercase">{s.month}</p>
                <p className="font-display font-bold text-2xl text-on-surface">{s.day}</p>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-primary">{s.course}</span>
                  {s.time && <span className="text-xs text-on-surface-variant">{s.time}</span>}
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ml-auto ${
                    s.badgeColor === 'green' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                  }`}>{s.badge}</span>
                </div>
                <p className="text-sm font-semibold text-on-surface mt-0.5">{s.title}</p>
                <p className="text-xs text-on-surface-variant">{s.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Log Submission Portal */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <h2 className="font-display font-semibold text-on-surface">Log Submission Portal</h2>
        <div>
          <p className="text-sm font-semibold text-on-surface">Target: Organic Synthesis Report</p>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-xs text-amber-600 font-semibold">⏱ Due in 2 days (Oct 26, 23:59 UTC)</span>
            <span className="text-xs text-on-surface-variant font-mono">LOG-8492</span>
          </div>
        </div>
        <div className="border-2 border-dashed border-outline-variant rounded-xl p-6 text-center space-y-2">
          <span className="text-3xl">☁</span>
          <p className="text-sm font-semibold text-on-surface">Drag &amp; drop files here</p>
          <p className="text-xs text-on-surface-variant">Supports .pdf, .docx, .ipynb · Max 50MB</p>
          <p className="text-xs text-on-surface-variant">Raw data tables must be included</p>
          <Button size="sm" variant="outline">Browse Files</Button>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="flex-1">Save Draft</Button>
          <Button size="sm" className="flex-1 gap-1.5">Submit Final Log →</Button>
        </div>
      </div>

      {/* Partner Match */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center gap-2">
          <h2 className="font-display font-semibold text-on-surface">🤝 Partner Match</h2>
          <span className="text-xs bg-ai/10 text-ai px-2 py-0.5 rounded-full font-semibold">✦ AI Suggested</span>
          <button className="text-on-surface-variant text-sm ml-auto">↺</button>
        </div>
        <div className="flex items-start gap-3 p-3 bg-surface-low rounded-xl">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-sm text-primary shrink-0">ER</div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-on-surface">Dr. Elena Rostova</p>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">Complementary Skillset: Spectroscopy</span>
            <p className="text-xs text-on-surface-variant mt-1">Elena&apos;s data analysis strengths complement your synthesis focus.</p>
          </div>
          <div className="flex gap-1.5 shrink-0">
            <Button size="sm" className="h-7 text-xs">Connect</Button>
            <Button size="sm" variant="outline" className="h-7 text-xs">✉</Button>
          </div>
        </div>
      </div>

      {/* Tools & Manuals */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">🔧 Tools &amp; Manuals</h2>
        <div className="space-y-2">
          {TOOLS.map(t => (
            <div key={t.name} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
              <span className="text-lg">{t.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-on-surface">{t.name}</p>
                <p className="text-xs text-on-surface-variant">{t.format}{t.size ? ` · ${t.size}` : ''}</p>
              </div>
              <button className="text-primary text-sm">↓</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
