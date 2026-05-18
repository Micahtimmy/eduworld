'use client'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const AGENDA = [
  'Review Alex\'s recent academic progress and grade trajectory',
  'Discuss geometric reasoning improvement (15% gain this term)',
  'Address History unit challenges and support strategies',
  'Set goals and expectations for the remainder of term',
]

export default function ParentConferenceConfirmationPage() {
  return (
    <div className="p-4 space-y-5 pb-24">
      {/* Success Header */}
      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center space-y-2">
        <span className="text-4xl">✅</span>
        <h1 className="font-display font-bold text-xl text-on-surface">Meeting Successfully Scheduled</h1>
        <p className="text-sm text-green-700 font-semibold">You&apos;re all set!</p>
      </div>

      {/* Teacher & Meeting Details */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <span className="text-xl">👩‍🏫</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-on-surface">Ms. Julia Simmons</p>
            <p className="text-xs text-on-surface-variant">Lead Educator · Year 4</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-surface-low rounded-xl p-3">
            <p className="text-xs text-on-surface-variant">Date &amp; Time</p>
            <p className="text-sm font-semibold text-on-surface mt-0.5">Sept 24 · 4:15 PM</p>
          </div>
          <div className="bg-surface-low rounded-xl p-3">
            <p className="text-xs text-on-surface-variant">Location</p>
            <p className="text-sm font-semibold text-on-surface mt-0.5">Virtual Classroom 4B</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button className="flex-1 gap-1.5">📹 Join Meeting</Button>
          <Button variant="outline" className="flex-1">Add to Calendar</Button>
        </div>
      </div>

      {/* AI Suggested Agenda */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-ai" />
          <p className="text-sm font-semibold text-on-surface">AI Suggested Meeting Agenda</p>
        </div>
        <div className="space-y-2">
          {AGENDA.map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-xs font-bold text-ai shrink-0 mt-0.5">{i + 1}.</span>
              <p className="text-xs text-on-surface-variant">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pre-meeting Resources */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Before the Meeting</h2>
        <div className="space-y-2">
          {[
            { icon: '📊', label: 'Progress Report', desc: 'Alex\'s full term performance summary', action: 'View' },
            { icon: '📋', label: 'Behavior Dashboard', desc: 'Attendance, engagement, and participation', action: 'View' },
          ].map(r => (
            <div key={r.label} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
              <span className="text-xl shrink-0">{r.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-on-surface">{r.label}</p>
                <p className="text-xs text-on-surface-variant">{r.desc}</p>
              </div>
              <button className="text-xs text-primary hover:underline shrink-0">{r.action}</button>
            </div>
          ))}
        </div>
        <div className="flex items-start gap-2 p-3 bg-blue-50 border border-blue-200 rounded-xl">
          <Sparkles className="h-3.5 w-3.5 text-ai shrink-0 mt-0.5" />
          <p className="text-xs text-on-surface-variant">AI Insight: Alex shows 15% improvement in geometric reasoning — this is worth celebrating in the meeting!</p>
        </div>
      </div>
    </div>
  )
}
