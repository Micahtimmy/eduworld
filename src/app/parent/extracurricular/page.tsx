'use client'
import { Button } from '@/components/ui/button'

const FEATURED = [
  { name: 'Elite Robotics & AI Labs', badge: '✦ Recommended for Alex STEM', price: '$450/Term', schedule: 'Tue/Thu 4:00 PM', spots: '4 Slots Left' },
  { name: 'Advanced Debate & Rhetoric', badge: 'Arts', price: '$320/Term', schedule: '', spots: '' },
]

const ACTIVITIES = [
  { name: 'Varsity Football Academy', category: 'Sports • Advanced Elite', schedule: 'Mon/Wed/Fri', fee: '$680/Term', status: '2 Spots left!', cta: 'Enroll Student' },
  { name: 'Digital Orchestration', category: 'Arts • Music Tech', schedule: 'Saturdays 10 AM', fee: '$210/Term', status: 'Open Enrollment', cta: 'Enroll Student' },
  { name: 'Ethics in AI Seminar', category: 'Leadership • Global Citizenship', schedule: 'Fridays 3:30 PM', fee: 'Free (Scholarship)', status: 'Waitlist Only', cta: 'Join Waitlist' },
]

const ENROLLMENTS = [
  { icon: '🔬', name: 'Intro to Quantum', schedule: 'Mon/Wed • 4:30 PM' },
  { icon: '🎨', name: 'Oil Painting', schedule: 'Fridays • 3:00 PM' },
]

export default function ParentExtracurricularPage() {
  return (
    <div className="p-4 space-y-5 pb-24">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs bg-surface-high text-on-surface-variant px-2 py-0.5 rounded-full font-semibold">Spring Term 2024</span>
      </div>
      <div>
        <h1 className="font-display font-bold text-2xl text-on-surface">Extracurricular Discovery</h1>
        <p className="text-sm text-on-surface-variant mt-1">Empower Alex&apos;s potential with curated high-performance clubs &amp; elite sports academies.</p>
      </div>

      <div className="flex gap-2">
        {['Alex', 'Sophie'].map((child, i) => (
          <button key={child} className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${i === 0 ? 'bg-primary text-white' : 'bg-surface-low text-on-surface-variant hover:bg-surface-high'}`}>{child}</button>
        ))}
      </div>

      <div className="space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Recommended</h2>
        {FEATURED.map(f => (
          <div key={f.name} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-2">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-semibold text-on-surface">{f.name}</p>
                  <span className="text-xs bg-ai/10 text-ai px-2 py-0.5 rounded-full font-semibold">{f.badge}</span>
                </div>
                {f.schedule && <p className="text-xs text-on-surface-variant mt-0.5">{f.schedule} · {f.spots}</p>}
                <p className="text-sm font-bold text-primary mt-1">{f.price}</p>
              </div>
              <Button size="sm" className="shrink-0">Enroll Alex Now</Button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Explore by Category</h2>
          <button className="text-xs text-primary hover:underline">View all →</button>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[{ icon: '⚽', label: 'Sports' }, { icon: '🔬', label: 'STEM' }, { icon: '🎨', label: 'Arts' }, { icon: '👥', label: 'Leadership' }].map(c => (
            <button key={c.label} className="flex flex-col items-center gap-1 p-2 bg-surface-low rounded-xl hover:bg-surface-high transition-colors">
              <span className="text-xl">{c.icon}</span>
              <span className="text-xs text-on-surface-variant font-semibold">{c.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-surface-low rounded-xl px-3 py-2 flex items-center gap-2">
            <span className="text-on-surface-variant text-sm">🔍</span>
            <span className="text-sm text-on-surface-variant">Search activities...</span>
          </div>
          <button className="p-2 bg-surface-low rounded-xl text-on-surface-variant">⚙</button>
        </div>
        {ACTIVITIES.map(a => (
          <div key={a.name} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-2">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <p className="font-semibold text-on-surface">{a.name}</p>
                <p className="text-xs text-on-surface-variant">{a.category}</p>
                <div className="flex items-center gap-3 mt-1 flex-wrap">
                  <span className="text-xs text-on-surface-variant">📅 {a.schedule}</span>
                  <span className="text-xs font-bold text-primary">{a.fee}</span>
                  <span className="text-xs text-amber-600 font-semibold">{a.status}</span>
                </div>
              </div>
              <Button size="sm" variant="outline" className="shrink-0 h-7 text-xs">{a.cta}</Button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Alex&apos;s Enrollments</h2>
        <div className="space-y-2">
          {ENROLLMENTS.map(e => (
            <div key={e.name} className="flex items-center gap-3 p-2.5 bg-surface-low rounded-xl">
              <span className="text-lg">{e.icon}</span>
              <div>
                <p className="text-sm font-semibold text-on-surface">{e.name}</p>
                <p className="text-xs text-on-surface-variant">{e.schedule}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <div className="flex items-center gap-2">
          <h2 className="font-display font-semibold text-on-surface">Action Required</h2>
          <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold">2 LATE</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-3 bg-amber-50 border border-amber-200 rounded-xl">
            <span className="text-amber-500">⚠</span>
            <div className="flex-1">
              <p className="text-xs font-semibold text-on-surface">Sports Physical 2024</p>
              <p className="text-xs text-on-surface-variant">Required for Varsity Football</p>
            </div>
            <Button size="sm" className="h-7 text-xs bg-red-600 hover:bg-red-700 text-white shrink-0">UPLOAD NOW</Button>
          </div>
          <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-xl">
            <span className="text-green-500">✓</span>
            <div className="flex-1">
              <p className="text-xs font-semibold text-on-surface">Emergency Contact Update</p>
              <p className="text-xs text-on-surface-variant">Verified on Jan 12</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 flex items-center gap-3">
        <span className="text-2xl">🏆</span>
        <div className="flex-1">
          <p className="font-semibold text-on-surface text-sm">Rising Leader</p>
          <p className="text-xs text-on-surface-variant">Alex is 20 hours from Platinum Ribbon</p>
          <div className="mt-2 h-1.5 bg-surface-high rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: '80%' }} />
          </div>
          <p className="text-xs text-on-surface-variant mt-1">80/100 Hours Logged</p>
        </div>
      </div>
    </div>
  )
}
