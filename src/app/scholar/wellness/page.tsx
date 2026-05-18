'use client'
import { Button } from '@/components/ui/button'

const MENTORSHIP = [
  { label: 'Thesis Advisor Communication', badge: 'Healthy', color: 'green' },
  { label: 'Peer Review Feedback Tone', badge: 'Constructive', color: 'blue' },
  { label: 'Departmental Alignment', badge: 'Attention Needed', color: 'amber' },
]

export default function ScholarWellnessPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">GPA: 3.98</span>
          </div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Well-being &amp; Workload</h1>
          <p className="text-sm text-on-surface-variant mt-1">Cognitive fatigue vs. social engagement optimization.</p>
        </div>
      </div>

      {/* Cognitive Load Index */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-ai">✦</span>
          <h2 className="font-display font-semibold text-on-surface">Cognitive Load Index</h2>
        </div>
        <p className="text-xs text-on-surface-variant">7-Day Trajectory vs. Recommended Baseline</p>
        <div className="flex items-end gap-1 h-24">
          {[
            { day: 'MON', val: 40 }, { day: 'TUE', val: 65 }, { day: 'WED', val: 55 },
            { day: 'THU', val: 80 }, { day: 'FRI', val: 70 }, { day: 'SAT', val: 35 }, { day: 'SUN', val: 50 },
          ].map(d => (
            <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full rounded-t-lg bg-primary/70" style={{ height: `${d.val}%` }} />
              <span className="text-[10px] text-on-surface-variant">{d.day}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">Load</span>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Recovery</span>
        </div>
      </div>

      {/* Schedule Balancer */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Schedule Balancer</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-xl">
            <span className="text-xl">☕</span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-on-surface">Suggested Break</p>
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">IN 15 MINS</span>
              </div>
              <p className="text-xs text-on-surface-variant mt-0.5">Fatigue spike detected. Rest for 25m.</p>
            </div>
            <div className="flex gap-1.5 shrink-0">
              <Button size="sm" variant="outline" className="h-7 text-xs">Schedule</Button>
              <Button size="sm" variant="outline" className="h-7 text-xs">Dismiss</Button>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-xl">
            <span className="text-xl">👥</span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-on-surface">Peer Huddle Optimal</p>
              <p className="text-xs text-on-surface-variant mt-0.5">Social wellness low. 3 peers available.</p>
            </div>
            <div className="flex gap-1.5 shrink-0">
              <Button size="sm" variant="outline" className="h-7 text-xs">Schedule</Button>
              <Button size="sm" variant="outline" className="h-7 text-xs">Dismiss</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mentorship Sentiment */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Mentorship Sentiment</h2>
          <button className="text-on-surface-variant text-sm">⋮</button>
        </div>
        <div className="space-y-2">
          {MENTORSHIP.map(m => (
            <div key={m.label} className="flex items-center justify-between p-3 bg-surface-low rounded-xl">
              <p className="text-sm text-on-surface">{m.label}</p>
              <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                m.color === 'green' ? 'bg-green-100 text-green-700' :
                m.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                'bg-amber-100 text-amber-700'
              }`}>{m.badge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* University Health Services */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">🏥</span>
          <h2 className="font-display font-semibold text-on-surface">University Health Services</h2>
        </div>
        <p className="text-xs text-on-surface-variant">Access campus clinical, counseling, and wellness resources anytime.</p>
        <div className="flex gap-3">
          <Button size="sm" className="gap-1.5">📅 Book Consultation</Button>
          <Button size="sm" variant="outline" className="gap-1.5">💬 Crisis Chat</Button>
        </div>
      </div>
    </div>
  )
}
