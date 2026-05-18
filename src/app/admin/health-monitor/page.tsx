'use client'
import { TrendingDown, AlertTriangle, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const KPI = [
  { label: 'Total Monthly OpEx', value: '$4.2M', badge: null, delta: '↓ 1.4%', deltaColor: 'text-green-600', note: 'Forecasted 2% reduction in energy overhead for Q4.' },
  { label: 'Staff Attendance', value: '94.2%', badge: 'LIVE', badgeColor: 'bg-green-100 text-green-700', delta: 'vs target 95%', deltaColor: 'text-amber-600', note: '3 campuses flagged: London, Jakarta, Berlin' },
  { label: 'Facility Issues', value: '12 Open', badge: 'CRITICAL', badgeColor: 'bg-red-100 text-red-700', delta: 'Tickets', deltaColor: 'text-on-surface-variant', note: 'HVAC Failure - Tokyo Hub · Power Grid - Sao Paulo' },
]

const LOG = [
  { icon: '✅', title: 'Sydney Campus Reopened', detail: 'Maintenance completed 14:20 GMT' },
  { icon: '❗', title: 'Security Alert - Berlin', detail: 'Unauthorized access attempt at Gate 3' },
  { icon: '💲', title: 'Q3 Budget Reconciliation', detail: 'New York Center approved extra funding' },
  { icon: '👤', title: 'New Dean Appointment', detail: 'Dr. Aris V. confirmed for Jakarta Lab' },
]

const CAMPUSES = [
  { name: 'London Academy', attendance: '91%', status: 'Watchlist', statusColor: 'bg-amber-100 text-amber-700' },
  { name: 'Tokyo Hub', status: 'Emergency', issue: 'HVAC Outage', statusColor: 'bg-red-100 text-red-700' },
]

export default function AdminHealthMonitorPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-on-surface-variant">EduWorld Global</p>
          <h1 className="font-display font-bold text-2xl text-on-surface mt-0.5">Operational Overview</h1>
          <p className="text-sm text-on-surface-variant mt-1">Real-time status · 14 global campuses</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-on-surface-variant">Last 24 Hours</span>
          <Button variant="outline" size="sm" className="gap-1.5"><TrendingDown className="h-3.5 w-3.5" /> Export Report</Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {KPI.map(k => (
          <div key={k.label} className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-xs text-on-surface-variant">{k.label}</p>
              {k.badge && <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${k.badgeColor}`}>{k.badge}</span>}
            </div>
            <p className="font-display font-bold text-2xl text-on-surface">{k.value}</p>
            <p className={`text-xs font-semibold ${k.deltaColor}`}>{k.delta}</p>
            <p className="text-xs text-on-surface-variant">{k.note}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Global Resource Distribution */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display font-semibold text-on-surface">Global Resource Distribution</h2>
              <p className="text-xs text-on-surface-variant">Staff Density vs. Facility Utilization</p>
            </div>
          </div>
          <div className="flex gap-1">
            {['Staffing', 'Facilities'].map((t, i) => (
              <button key={t} className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${i === 0 ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-low'}`}>{t}</button>
            ))}
          </div>
          <div className="bg-surface-low rounded-xl p-4 min-h-[160px] flex items-center justify-center relative">
            <div className="text-center">
              <p className="text-2xl mb-2">🗺️</p>
              <p className="text-xs text-on-surface-variant">Global campus map visualization</p>
            </div>
          </div>
          <div className="space-y-2">
            {CAMPUSES.map(c => (
              <div key={c.name} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
                <AlertTriangle className={`h-4 w-4 ${c.status === 'Emergency' ? 'text-red-500' : 'text-amber-500'}`} />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-on-surface">{c.name}</p>
                  <p className="text-xs text-on-surface-variant">{c.attendance ? `Attendance ${c.attendance}` : c.issue}</p>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${c.statusColor}`}>{c.status}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between text-xs text-on-surface-variant">
            <span>Active Campuses: <strong className="text-on-surface">14</strong></span>
            <span>Global Reach: <strong className="text-on-surface">8.2k Staff</strong></span>
          </div>
        </div>

        {/* Operations Log */}
        <div className="space-y-4">
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-semibold text-on-surface">Operations Log</h2>
              <span className="text-xs text-on-surface-variant">Last updated 2 mins ago</span>
            </div>
            <div className="space-y-3">
              {LOG.map(l => (
                <div key={l.title} className="flex items-start gap-3 p-3 bg-surface-low rounded-xl">
                  <span className="text-xl">{l.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-on-surface">{l.title}</p>
                    <p className="text-xs text-on-surface-variant">{l.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="text-xs text-primary hover:underline">View All Activity →</button>
          </div>

          {/* AI Insight */}
          <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-ai" />
              <p className="font-semibold text-sm text-ai">Strategic Efficiency Insight</p>
            </div>
            <p className="text-xs text-on-surface-variant">Shifting ~15% of remote operations from London → Berlin Hub shows projected savings of <strong className="text-on-surface">$12k/week</strong>.</p>
            <div className="flex gap-2">
              <Button size="sm" className="h-7 text-xs flex-1">Apply Simulation</Button>
              <Button size="sm" variant="outline" className="h-7 text-xs flex-1">Review Full Report</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
