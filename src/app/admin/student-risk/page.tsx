'use client'
import { TrendingDown, TrendingUp, Minus, Download, Send, Sparkles, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const STUDENTS = [
  { initials: 'ER', name: 'Elena Rodriguez', risk: 92, trigger: 'Absence (4 days)', dir: 'down' },
  { initials: 'JV', name: 'Julian Vane', risk: 88, trigger: 'Grade Velocity', dir: 'down' },
  { initials: 'SJ', name: 'Sarah Jenkins', risk: 74, trigger: 'Behavioral Flag', dir: 'flat' },
]

export default function AdminStudentRiskPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="h-4 w-4 text-ai" />
            <span className="text-xs font-semibold text-ai">AI-DRIVEN FORECASTING</span>
          </div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Student Risk & Retention</h1>
          <p className="text-sm text-on-surface-variant mt-1">Churn probability modeling across attendance, behavioral triggers, and grade velocity (90-day window).</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1.5"><Download className="h-3.5 w-3.5" /> Export Risk Report</Button>
          <Button size="sm" className="gap-1.5"><Send className="h-3.5 w-3.5" /> Bulk Notify Stakeholders</Button>
        </div>
      </div>

      {/* Retention Forecast */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Retention Forecast</h2>
          <div className="flex gap-1">
            {['All Departments', 'Science & Tech', 'Humanities'].map((t, i) => (
              <button key={t} className={`px-3 py-1 rounded-lg text-xs font-semibold ${i === 0 ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-low'}`}>{t}</button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2 items-end">
          {[{ w: 'Wk 12', v: 92 }, { w: 'Wk 13', v: 94 }, { w: 'Wk 14', v: 88 }, { w: 'Current', v: 62, risk: true }, { w: 'Projected', v: 78, proj: true }].map(d => (
            <div key={d.w} className="text-center">
              <div className="h-24 flex items-end justify-center">
                <div className={`w-8 rounded-t ${d.risk ? 'bg-red-400' : d.proj ? 'bg-primary/40' : 'bg-primary'}`} style={{ height: `${d.v}%` }} />
              </div>
              <p className="text-xs text-on-surface-variant mt-1">{d.w}</p>
              <p className={`text-xs font-bold ${d.risk ? 'text-red-500' : 'text-on-surface'}`}>{d.v}%</p>
            </div>
          ))}
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            <span className="text-xs font-semibold text-amber-800">AI Insight</span>
          </div>
          <p className="text-xs text-amber-700">A 14% drop in Year 11 engagement detected. Secondary cause: Regional transit strike affecting attendance for 42 students.</p>
          <button className="text-xs text-amber-800 font-semibold hover:underline mt-1">Automate Remote Learning Passes →</button>
        </div>
      </div>

      {/* High-Risk Students Table */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">High-Risk Students</h2>
          <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-bold">42 Alerts</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-on-surface-variant border-b border-outline-variant">
                <th className="text-left pb-3 font-semibold">Student Name</th>
                <th className="text-left pb-3 font-semibold">Risk Score</th>
                <th className="text-left pb-3 font-semibold">Main Trigger</th>
                <th className="text-left pb-3 font-semibold">Trend</th>
                <th className="text-left pb-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {STUDENTS.map(s => (
                <tr key={s.name} className="border-b border-outline-variant last:border-0">
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">{s.initials}</div>
                      <span className="font-medium text-on-surface">{s.name}</span>
                    </div>
                  </td>
                  <td className="py-3"><span className={`text-sm font-bold ${s.risk >= 90 ? 'text-red-600' : s.risk >= 80 ? 'text-amber-600' : 'text-on-surface'}`}>{s.risk}%</span></td>
                  <td className="py-3 text-xs text-on-surface-variant">{s.trigger}</td>
                  <td className="py-3">
                    {s.dir === 'down' && <TrendingDown className="h-4 w-4 text-red-500" />}
                    {s.dir === 'flat' && <Minus className="h-4 w-4 text-on-surface-variant" />}
                    {s.dir === 'up' && <TrendingUp className="h-4 w-4 text-green-500" />}
                  </td>
                  <td className="py-3">
                    <button className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20">
                      <Mail className="h-3.5 w-3.5 text-primary" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="text-xs text-primary hover:underline">View Full Risk Register →</button>
      </div>

      {/* Academy Health Index */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Global Academy Health Index</h2>
          <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">⭐ Top Tier Academy</span>
        </div>
        <p className="text-xs text-on-surface-variant">Goal: 95% retention for Q3</p>
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-on-surface-variant">Current Stability</span>
            <span className="font-bold text-on-surface">89.2% / 95.0% target</span>
          </div>
          <div className="h-3 bg-surface-high rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full relative" style={{ width: '89.2%' }}>
              <div className="absolute right-0 top-0 h-full w-0.5 bg-white/50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
