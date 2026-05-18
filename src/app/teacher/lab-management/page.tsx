'use client'
import { Plus, Download, AlertTriangle, CheckCircle, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

const EQUIPMENT = [
  { name: 'Electron Microscope EM-400', code: 'LAB-001', status: 'available', condition: 'Excellent', lastChecked: 'Nov 12' },
  { name: 'Spectrometer Array Set', code: 'LAB-002', status: 'in-use', condition: 'Good', lastChecked: 'Nov 14' },
  { name: 'High-Voltage PSU (×4)', code: 'LAB-003', status: 'maintenance', condition: 'Needs Calibration', lastChecked: 'Nov 10' },
  { name: 'Oscilloscope Bank (×6)', code: 'LAB-004', status: 'available', condition: 'Excellent', lastChecked: 'Nov 13' },
  { name: 'Bunsen Burner Set (×12)', code: 'LAB-005', status: 'available', condition: 'Good', lastChecked: 'Nov 11' },
]

const SESSIONS = [
  { title: 'Quantum Interference Lab', date: 'Nov 18, 9:00 AM', students: 24, room: 'Lab 3A', status: 'confirmed' },
  { title: 'Spectrometry Practical', date: 'Nov 20, 11:00 AM', students: 18, room: 'Lab 2B', status: 'pending' },
  { title: 'Electromagnetic Induction Demo', date: 'Nov 22, 9:00 AM', students: 26, room: 'Lab 3A', status: 'confirmed' },
]

const STATUS_STYLES: Record<string, string> = {
  available: 'bg-green-100 text-green-700',
  'in-use': 'bg-blue-100 text-blue-700',
  maintenance: 'bg-amber-100 text-amber-700',
}

export default function TeacherLabManagementPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Practical & Lab Management Hub</h1>
          <p className="text-sm text-on-surface-variant mt-1">AP Physics · Room 3A · Fall 2024</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1.5"><Download className="h-3.5 w-3.5" /> Safety Report</Button>
          <Button size="sm" className="gap-1.5"><Plus className="h-3.5 w-3.5" /> Book Session</Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Equipment Items', value: '42' },
          { label: 'Available', value: '38', color: 'text-green-600' },
          { label: 'In Maintenance', value: '3', color: 'text-amber-600' },
          { label: 'Sessions This Month', value: '12' },
        ].map(s => (
          <div key={s.label} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 text-center">
            <p className={`font-display font-bold text-2xl ${s.color ?? 'text-on-surface'}`}>{s.value}</p>
            <p className="text-xs text-on-surface-variant mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Alert */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
        <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="text-sm font-semibold text-on-surface">High-Voltage PSU requires calibration before next practical session.</p>
          <p className="text-xs text-on-surface-variant mt-1">Schedule calibration with technician — next lab session is Nov 18. Allow 48h for service.</p>
        </div>
        <Button size="sm" variant="outline" className="h-7 text-xs shrink-0">Schedule</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Equipment Inventory */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-semibold text-on-surface">Equipment Inventory</h2>
            <button className="text-xs text-primary hover:underline">View All</button>
          </div>
          <div className="space-y-2">
            {EQUIPMENT.map(e => (
              <div key={e.code} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-on-surface">{e.name}</p>
                  <p className="text-xs text-on-surface-variant">{e.code} · {e.condition} · Checked {e.lastChecked}</p>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${STATUS_STYLES[e.status]}`}>
                  {e.status.charAt(0).toUpperCase() + e.status.slice(1).replace('-', ' ')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Upcoming Lab Sessions</h2>
          <div className="space-y-3">
            {SESSIONS.map(s => (
              <div key={s.title} className="border border-outline-variant rounded-xl p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-on-surface">{s.title}</p>
                  {s.status === 'confirmed'
                    ? <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                    : <Clock className="h-4 w-4 text-amber-500 shrink-0" />}
                </div>
                <div className="flex items-center gap-3 text-xs text-on-surface-variant">
                  <span>📅 {s.date}</span>
                  <span>👥 {s.students} students</span>
                  <span>📍 {s.room}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
