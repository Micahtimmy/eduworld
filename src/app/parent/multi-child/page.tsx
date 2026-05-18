'use client'
import { Sparkles, TrendingUp, AlertTriangle, Rocket, LayoutGrid, LineChart } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CHILDREN = [
  { initials: 'AV', name: 'Alex Vance', grade: 'Grade 11 · Science Track', gpa: 'A- (92%)', attendance: '98.4%', xp: 'Top 3%', behavior: '94/100', premium: true },
  { initials: 'SV', name: 'Sarah Vance', grade: 'Grade 8 · Arts Track', gpa: 'A+ (97%)', attendance: '99.1%', xp: 'Top 1%', behavior: '98/100', premium: false },
  { initials: 'LV', name: 'Leo Vance', grade: 'Grade 3 · Primary', gpa: 'B+ (88%)', attendance: '95.0%', xp: 'Top 12%', behavior: '82/100', premium: false },
]

const ALERTS = [
  { severity: 'urgent', child: 'Alex', time: '2h ago', alert: 'Missed Calculus Quiz', sub: 'Scheduled for retake on Friday' },
  { severity: 'info', child: 'Sarah', time: '5h ago', alert: 'Science Fair Project Submitted', sub: 'Awaiting teacher feedback' },
  { severity: 'event', child: 'Leo', time: '1d ago', alert: 'Picnic Day Permission Slip', sub: 'Needs signature by Wednesday' },
]

const ACHIEVEMENTS = [
  { icon: '🎓', category: 'Academic', child: 'Alex', title: 'State Physics Olympiad - Finalist', date: 'Oct 24, 2023', desc: 'Top 5% of participants statewide. 50 Academic XP earned.' },
  { icon: '🎨', category: 'Arts', child: 'Sarah', title: 'Solo Exhibition - Digital Design', date: 'Oct 15, 2023', desc: 'Community engagement: 150+ views.' },
  { icon: '🧠', category: 'Development', child: 'Leo', title: 'Reading Level Mastery - Level 4', date: 'Sep 28, 2023', desc: 'Exceeded quarterly reading target by 2 books.' },
]

const SEVERITY_STYLES: Record<string, string> = {
  urgent: 'bg-red-100 text-red-700',
  info: 'bg-blue-100 text-blue-700',
  event: 'bg-amber-100 text-amber-700',
}

export default function ParentMultiChildPage() {
  return (
    <div className="p-4 space-y-5 pb-24">
      <div>
        <h1 className="font-display font-bold text-2xl text-on-surface">Household Performance Comparison</h1>
        <p className="text-sm text-on-surface-variant mt-1">Unified metrics for Alex, Sarah, and Leo</p>
      </div>

      {/* View toggle */}
      <div className="flex gap-2">
        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white rounded-full text-xs font-semibold"><LayoutGrid className="h-3 w-3" /> Comparison Grid</button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-low text-on-surface-variant rounded-full text-xs hover:bg-surface-high transition-colors"><LineChart className="h-3 w-3" /> Timeline View</button>
      </div>

      {/* Alerts */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-amber-500" />
          <p className="font-semibold text-sm text-on-surface">Unified Household Alerts</p>
        </div>
        <div className="space-y-2">
          {ALERTS.map(a => (
            <div key={a.alert} className="flex items-start gap-3 p-3 bg-surface-low rounded-xl">
              <span className={`text-xs px-2 py-0.5 rounded-full font-semibold shrink-0 ${SEVERITY_STYLES[a.severity]}`}>{a.severity.charAt(0).toUpperCase() + a.severity.slice(1)}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-on-surface">{a.child}: {a.alert}</p>
                  <span className="text-xs text-on-surface-variant">{a.time}</span>
                </div>
                <p className="text-xs text-on-surface-variant">{a.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="text-xs text-primary hover:underline">View All Notifications</button>
      </div>

      {/* Child Cards */}
      <div className="space-y-3">
        {CHILDREN.map(c => (
          <div key={c.name} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">{c.initials}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-on-surface">{c.name}</p>
                  {c.premium && <span className="text-xs">⭐</span>}
                </div>
                <p className="text-xs text-on-surface-variant">{c.grade}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Avg. Grade', value: c.gpa },
                { label: 'Attendance', value: c.attendance },
                { label: 'XP Rank', value: c.xp },
                { label: 'Behavior Score', value: c.behavior },
              ].map(m => (
                <div key={m.label} className="bg-surface-low rounded-xl p-2.5">
                  <p className="text-xs text-on-surface-variant">{m.label}</p>
                  <p className="font-bold text-sm text-on-surface">{m.value}</p>
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" className="w-full">Detailed Analytics</Button>
          </div>
        ))}
      </div>

      {/* AI Synergy */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 space-y-3">
        <div className="flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-ai" />
          <span className="text-xs font-bold text-ai">EduWorld AI: Household Synergy Analysis</span>
        </div>
        <div className="space-y-2">
          {[
            { icon: TrendingUp, label: 'Common Strengths', desc: 'High STEM engagement across all three children', color: 'text-green-600' },
            { icon: AlertTriangle, label: 'Shared Opportunities', desc: 'Tuesday morning attendance dip noted — avg -12% vs weekday average', color: 'text-amber-600' },
            { icon: Rocket, label: 'Next Strategy', desc: 'Peer Mentorship program recommendation for family XP challenges', color: 'text-primary' },
          ].map(s => (
            <div key={s.label} className="flex items-start gap-2">
              <s.icon className={`h-3.5 w-3.5 shrink-0 mt-0.5 ${s.color}`} />
              <div>
                <p className="text-xs font-semibold text-on-surface">{s.label}</p>
                <p className="text-xs text-on-surface-variant">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Timeline */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <h2 className="font-semibold text-sm text-on-surface">Achievement Timeline</h2>
        <div className="space-y-3">
          {ACHIEVEMENTS.map(a => (
            <div key={a.title} className="flex gap-3 p-3 bg-surface-low rounded-xl">
              <span className="text-2xl">{a.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">{a.category}</span>
                  <span className="text-xs text-on-surface-variant">{a.child} · {a.date}</span>
                </div>
                <p className="text-sm font-semibold text-on-surface">{a.title}</p>
                <p className="text-xs text-on-surface-variant mt-1">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
