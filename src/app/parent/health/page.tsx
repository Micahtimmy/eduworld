'use client'
import { Sparkles, AlertTriangle, Heart, Activity, Thermometer, Wind } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ALERTS = [
  { type: 'medication', label: 'Medication Due', detail: 'Asthma inhaler — 12:30 PM today', color: 'amber' },
  { type: 'allergy', label: 'Allergy Flag Active', detail: 'Peanuts — shared with all staff', color: 'red' },
]

const VITALS = [
  { icon: Thermometer, label: 'Temperature', value: '98.6°F', sub: 'Normal', color: 'green' },
  { icon: Heart, label: 'Heart Rate', value: '72 BPM', sub: 'Resting', color: 'green' },
  { icon: Wind, label: 'Activity Level', value: 'Active', sub: 'PE completed', color: 'blue' },
  { icon: Activity, label: 'Energy Score', value: '85/100', sub: '+5 from yesterday', color: 'green' },
]

const STATS = [
  { label: 'Days Present', value: '47', sub: 'This term' },
  { label: 'Medical Visits', value: '1', sub: 'This year' },
  { label: 'Wellness Score', value: '92%', sub: 'AI assessed' },
  { label: 'Sleep Average', value: '8.2h', sub: 'Last 7 days' },
]

export default function ParentHealthPage() {
  return (
    <div className="p-4 space-y-5 pb-24">
      <div>
        <h1 className="font-display font-bold text-2xl text-on-surface">Health & Wellbeing</h1>
        <p className="text-sm text-on-surface-variant mt-1">Alex Johnson · Grade 5A · Updated 2h ago</p>
      </div>

      {/* Alerts */}
      <div className="space-y-2">
        {ALERTS.map(a => (
          <div key={a.label} className={`flex items-start gap-3 p-3 rounded-2xl border ${a.color === 'amber' ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200'}`}>
            <AlertTriangle className={`h-4 w-4 shrink-0 mt-0.5 ${a.color === 'amber' ? 'text-amber-500' : 'text-red-500'}`} />
            <div>
              <p className={`text-sm font-semibold ${a.color === 'amber' ? 'text-amber-800' : 'text-red-800'}`}>{a.label}</p>
              <p className={`text-xs ${a.color === 'amber' ? 'text-amber-600' : 'text-red-600'}`}>{a.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Vitals */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <p className="font-semibold text-sm text-on-surface">Daily Vitals</p>
        <div className="grid grid-cols-2 gap-3">
          {VITALS.map(v => (
            <div key={v.label} className="bg-surface-low rounded-xl p-3 space-y-1">
              <div className="flex items-center gap-1.5">
                <v.icon className={`h-3.5 w-3.5 ${v.color === 'green' ? 'text-green-500' : v.color === 'blue' ? 'text-blue-500' : 'text-primary'}`} />
                <span className="text-xs text-on-surface-variant">{v.label}</span>
              </div>
              <p className="font-bold text-on-surface">{v.value}</p>
              <p className="text-xs text-on-surface-variant">{v.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Wellness */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 space-y-2">
        <div className="flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-ai" />
          <span className="text-xs font-bold text-ai">AI Wellness Advisor — Dr. Elena Vance</span>
        </div>
        <p className="text-sm font-semibold text-on-surface">Overall Wellness Score: 92%</p>
        <p className="text-xs text-on-surface-variant">Alex is maintaining excellent health metrics this term. Recommend ensuring consistent sleep schedule on weekends and hydration during PE sessions.</p>
        <div className="h-2 bg-surface-high rounded-full overflow-hidden">
          <div className="h-full bg-ai rounded-full" style={{ width: '92%' }} />
        </div>
      </div>

      {/* Physical Activity */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <p className="font-semibold text-sm text-on-surface">Physical Activity — This Week</p>
        <div className="space-y-2">
          {[
            { day: 'Monday', activity: 'PE — Basketball', duration: '45 min', done: true },
            { day: 'Wednesday', activity: 'PE — Track & Field', duration: '45 min', done: true },
            { day: 'Friday', activity: 'PE — Swimming', duration: '45 min', done: false },
          ].map(a => (
            <div key={a.day} className="flex items-center gap-3 p-2.5 bg-surface-low rounded-xl">
              <div className={`w-2 h-2 rounded-full shrink-0 ${a.done ? 'bg-green-500' : 'bg-surface-high'}`} />
              <div className="flex-1">
                <p className="text-xs font-semibold text-on-surface">{a.day} — {a.activity}</p>
                <p className="text-xs text-on-surface-variant">{a.duration}</p>
              </div>
              {!a.done && <span className="text-xs text-on-surface-variant">Upcoming</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {STATS.map(s => (
          <div key={s.label} className="bg-surface-lowest rounded-2xl border border-outline-variant p-3 text-center space-y-1">
            <p className="font-display font-bold text-xl text-on-surface">{s.value}</p>
            <p className="text-xs font-semibold text-on-surface">{s.label}</p>
            <p className="text-xs text-on-surface-variant">{s.sub}</p>
          </div>
        ))}
      </div>

      <Button className="w-full">Contact School Nurse</Button>
    </div>
  )
}
