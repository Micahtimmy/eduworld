'use client'
import { Download, AlertTriangle, CheckCircle, TrendingDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const COURSES = [
  { name: 'Systems Thinking for Product Leaders', category: 'Strategy', date: 'Jan 12, 2024', progress: 100, score: '98/100' },
  { name: 'Advanced Design Tokens & Handover', category: 'Technical', date: 'Feb 05, 2024', progress: 45, score: '—' },
  { name: 'Empathy-Driven Leadership', category: 'Soft Skills', date: 'Dec 15, 2023', progress: 100, score: '92/100' },
]

const SKILLS = [
  { name: 'Visual Design', pct: 96 },
  { name: 'Prototyping', pct: 82 },
]

export default function EnterpriseEmployeePerformancePage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3">
        <button className="text-on-surface-variant hover:text-on-surface text-sm">← Back</button>
        <div className="h-4 w-px bg-outline-variant" />
        <h1 className="font-display font-bold text-xl text-on-surface">Employee Performance Detail</h1>
      </div>

      {/* Profile Card */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-6 space-y-4">
        <div className="flex items-start gap-5">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center font-bold text-2xl text-primary shrink-0">AM</div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="font-display font-bold text-xl text-on-surface">Alexandria Mercer</h2>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">Level 4</span>
            </div>
            <p className="text-sm text-on-surface-variant">Senior Product Designer</p>
            <p className="text-xs text-on-surface-variant mt-2">Leading accessibility initiative across the platform. Top-5% standing in quarterly performance review.</p>
            <div className="flex items-center gap-3 mt-2 flex-wrap">
              <span className="text-xs text-on-surface-variant">📍 London Hub</span>
              <span className="text-xs text-on-surface-variant">📅 Joined 2.5 Years ago</span>
              <span className="text-xs text-on-surface-variant">⭐ 4.9 Performance Score</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1.5"><Download className="h-3.5 w-3.5" /> Report</Button>
            <Button size="sm">Edit Profile</Button>
          </div>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
          <p className="text-xs text-on-surface-variant font-semibold">Skill Mastery</p>
          <p className="font-display font-bold text-3xl text-on-surface">88%</p>
          <p className="text-xs text-green-600 font-semibold">✓ Verified</p>
          <div className="space-y-2">
            {SKILLS.map(s => (
              <div key={s.name} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-on-surface-variant">{s.name}</span>
                  <span className="font-semibold text-on-surface">{s.pct}%</span>
                </div>
                <div className="h-1.5 bg-surface-high rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-2">
          <p className="text-xs text-on-surface-variant font-semibold">Time-to-Completion</p>
          <p className="font-display font-bold text-3xl text-on-surface">14.2 days</p>
          <p className="text-xs text-on-surface-variant">average per module</p>
          <div className="flex items-center gap-1 text-green-600 text-xs font-semibold">
            <TrendingDown className="h-3 w-3" />
            15% faster than department benchmark
          </div>
        </div>
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-2">
          <p className="text-xs text-on-surface-variant font-semibold">Achievements</p>
          <div className="flex gap-2 flex-wrap">
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-bold">🔥 STREAK: 12 DAYS</span>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold">🏆 TOP 5% TEAM</span>
          </div>
          <div className="flex gap-2 mt-2">
            {['Leadership', 'Strategy', 'Technical', 'Soft Skills'].map(t => (
              <button key={t} className="text-xs text-on-surface-variant hover:text-primary transition-colors">{t}</button>
            ))}
          </div>
        </div>
      </div>

      {/* AI Growth Plan */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-ai">✦</span>
          <h2 className="font-display font-semibold text-on-surface">AI Growth Plan</h2>
          <span className="text-xs bg-ai/10 text-ai px-2 py-0.5 rounded-full font-semibold">Personalized roadmap for Q3/Q4</span>
          <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold ml-auto">High Priority</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded-xl">
            <AlertTriangle className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-on-surface">Front-end Handoff</p>
              <p className="text-xs text-on-surface-variant">Limited design-token and React documentation experience identified.</p>
            </div>
          </div>
          <div className="flex items-start gap-2 p-3 bg-green-50 border border-green-200 rounded-xl">
            <CheckCircle className="h-3.5 w-3.5 text-green-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-on-surface">Accessibility (WCAG 2.1)</p>
              <p className="text-xs text-on-surface-variant">Advanced mastery confirmed via recent audit project.</p>
            </div>
          </div>
        </div>
        <div className="border border-outline-variant rounded-xl p-4 flex items-center gap-3">
          <div className="flex-1">
            <p className="text-sm font-semibold text-on-surface">Advanced Tailwind Integration</p>
            <p className="text-xs text-on-surface-variant">⭐ 4.8 · 8.5 Hours · Certificate included</p>
          </div>
          <Button size="sm" variant="outline" className="h-7 text-xs">View →</Button>
        </div>
        <Button size="sm" className="gap-1.5">Update Growth Roadmap</Button>
      </div>

      {/* Course Progress Table */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
        <div className="p-4 border-b border-outline-variant flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Course Progress</h2>
          <div className="flex gap-2">
            {['All Modules', 'Completed', 'In Progress'].map((tab, i) => (
              <button key={tab} className={`text-xs px-3 py-1 rounded-full font-semibold transition-colors ${i === 0 ? 'bg-primary text-white' : 'bg-surface-low text-on-surface-variant hover:bg-surface-high'}`}>{tab}</button>
            ))}
          </div>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs text-on-surface-variant bg-surface-low border-b border-outline-variant">
              <th className="text-left px-4 py-3 font-semibold">Course Name</th>
              <th className="text-left px-4 py-3 font-semibold">Category</th>
              <th className="text-left px-4 py-3 font-semibold">Start Date</th>
              <th className="text-left px-4 py-3 font-semibold">Progress</th>
              <th className="text-right px-4 py-3 font-semibold">Score</th>
            </tr>
          </thead>
          <tbody>
            {COURSES.map(c => (
              <tr key={c.name} className="border-b border-outline-variant last:border-0 hover:bg-surface-low transition-colors">
                <td className="px-4 py-3 font-semibold text-on-surface">{c.name}</td>
                <td className="px-4 py-3"><span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">{c.category}</span></td>
                <td className="px-4 py-3 text-xs text-on-surface-variant">{c.date}</td>
                <td className="px-4 py-3">
                  {c.progress === 100
                    ? <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Completed</span>
                    : <div className="flex items-center gap-2"><div className="h-1.5 w-20 bg-surface-high rounded-full overflow-hidden"><div className="h-full bg-primary rounded-full" style={{ width: `${c.progress}%` }} /></div><span className="text-xs text-on-surface-variant">{c.progress}%</span></div>}
                </td>
                <td className="px-4 py-3 text-right font-semibold text-on-surface">{c.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 border-t border-outline-variant">
          <button className="text-xs text-primary hover:underline">View All Course History</button>
        </div>
      </div>
    </div>
  )
}
