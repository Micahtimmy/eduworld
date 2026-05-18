'use client'
import { Button } from '@/components/ui/button'

const STATS = [
  { icon: '💻', label: 'Laptops Total', value: '1,240' },
  { icon: '🏛', label: 'Learning Spaces', value: '84' },
  { icon: '🔧', label: 'Pending Repairs', value: '12' },
  { icon: '🛡', label: 'Audit Score', value: '98.2%' },
]

const LICENSES = [
  { label: 'Academic Journal Licenses', used: 412, total: 500 },
  { label: 'Design Software (Adobe Suite)', used: 88, total: 100 },
  { label: 'Cloud Storage (Student Nodes)', used: 1200, total: 2000, unit: 'PB' },
]

const CALENDAR = [
  { day: 'MON', event: 'Main Hall: Graduation Rehearsal (09:00)' },
  { day: 'TUE', event: 'Science Lab B: Bio-Genetics (14:00)' },
  { day: 'WED', event: 'Media Suite: Podcast Prep (11:00)' },
  { day: 'THU', event: null },
  { day: 'FRI', event: 'Theater: Drama Society (16:30)' },
]

const LOGS = [
  { asset: 'SmartBoard Calibration — Rm 402', type: 'Hardware', staff: 'Arjun V.', time: 'OCT 24, 08:42 AM', status: 'COMPLETED', color: 'text-green-600' },
  { asset: 'Digital Library Server Maintenance', type: 'Network', staff: 'SYSTEM (AI)', time: 'OCT 24, 02:15 AM', status: 'AUTO-RESOLVED', color: 'text-ai' },
  { asset: 'Asset Check-out: Laptop #L-902', type: 'Check-out', staff: 'Sarah L.', time: 'OCT 23, 04:55 PM', status: 'LOGGED', color: 'text-on-surface-variant' },
]

export default function AdminInfrastructurePage() {
  return (
    <div className="p-4 md:p-6 space-y-6 max-w-5xl mx-auto">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Infrastructure &amp; Asset Tracking</h1>
          <p className="text-sm text-on-surface-variant mt-1">Real-time monitoring · London Central Academy</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" size="sm">⬇ Export</Button>
          <Button size="sm">+ Add New Asset</Button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {STATS.map(s => (
          <div key={s.label} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 text-center space-y-1">
            <span className="text-2xl">{s.icon}</span>
            <p className="font-display font-bold text-xl text-on-surface">{s.value}</p>
            <p className="text-xs text-on-surface-variant">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Facility Insights */}
        <div className="space-y-4">
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-on-surface">Science Lab B</p>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">✦ Optimized</span>
            </div>
            <p className="text-xs text-on-surface-variant">Current Peak: 92% (Tuesdays)</p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 space-y-2">
              <p className="text-xs font-semibold text-amber-700">⚠ Maintenance Required</p>
              <p className="text-xs text-on-surface-variant">💻 Teacher Laptops (Batch C) — Battery health below 40%</p>
              <p className="text-xs text-on-surface-variant">💨 HVAC Unit — Block B — Filter replacement overdue</p>
            </div>
            <Button size="sm" variant="outline" className="w-full">Dispatch Maintenance Team</Button>
          </div>

          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <h2 className="font-display font-semibold text-on-surface">Digital Library</h2>
            <div className="space-y-3">
              {LICENSES.map(l => (
                <div key={l.label}>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs text-on-surface-variant">{l.label}</p>
                    <span className="text-xs font-semibold text-on-surface">{l.used}/{l.total}{l.unit || ''}</span>
                  </div>
                  <div className="h-1.5 bg-surface-high rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${(l.used / l.total) > 0.9 ? 'bg-amber-500' : 'bg-primary'}`} style={{ width: `${(l.used / l.total) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Space Booking */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-semibold text-on-surface">Space Booking</h2>
            <div className="flex gap-1 text-on-surface-variant text-sm">
              <button>‹</button>
              <span className="text-xs text-on-surface-variant">Oct 24–30</span>
              <button>›</button>
            </div>
          </div>
          <div className="space-y-2">
            {CALENDAR.map(c => (
              <div key={c.day} className={`flex items-center gap-3 p-2 rounded-xl ${c.event ? 'bg-surface-low' : 'bg-transparent'}`}>
                <span className="text-xs font-bold text-on-surface-variant w-8 shrink-0">{c.day}</span>
                {c.event ? (
                  <p className="text-xs text-on-surface">{c.event}</p>
                ) : (
                  <button className="text-xs text-primary hover:underline">+ Add Booking</button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Audit Log */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-outline-variant">
          <h2 className="font-display font-semibold text-on-surface">Audit &amp; Log Feed</h2>
          <Button size="sm" variant="outline" className="h-7 text-xs">Filter Logs</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-outline-variant bg-surface-low">
                {['Asset / Event', 'Type', 'Staff', 'Timestamp', 'Status'].map(h => (
                  <th key={h} className="text-left p-3 text-on-surface-variant font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {LOGS.map(l => (
                <tr key={l.asset}>
                  <td className="p-3 font-medium text-on-surface">{l.asset}</td>
                  <td className="p-3 text-on-surface-variant">{l.type}</td>
                  <td className="p-3 text-on-surface-variant">{l.staff}</td>
                  <td className="p-3 text-on-surface-variant whitespace-nowrap">{l.time}</td>
                  <td className={`p-3 font-bold ${l.color}`}>{l.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
