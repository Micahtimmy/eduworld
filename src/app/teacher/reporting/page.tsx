'use client'
import { Sparkles, AlertTriangle, Package, ClipboardList, ChevronRight, MoreHorizontal, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ALERTS = [
  { initials: 'EL', name: 'Elena Luvov', dept: 'Dept. of Humanities', issue: 'Outdated History Textbooks', date: 'Oct 24, 2023', urgency: 'Critical', status: 'Triage' },
  { initials: 'JM', name: 'James Morton', dept: 'Computer Science', issue: 'Server Latency (Lab 402)', date: 'Oct 23, 2023', urgency: 'Medium', status: 'Assigned' },
]

const ACTIVE_SUBMISSIONS = [
  { title: 'Science Lab Refurbishment', status: 'Approved', sub: 'Awaiting Finance Signature • 2 days ago' },
  { title: 'Math Curriculum Error', status: 'Under Review', sub: 'Assigned to: Dean Miller • 5 hours ago' },
]

export default function TeacherReportingPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <p className="text-xs text-on-surface-variant mb-1">EduWorld Admin › Institutional Reporting</p>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-display font-bold text-2xl text-on-surface">Teacher-to-Admin Portal</h1>
            <p className="text-sm text-on-surface-variant mt-1">Flag curriculum issues, resource requests, and end-of-term institutional reviews for administrative oversight.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">View History</Button>
            <Button size="sm">New Submission</Button>
          </div>
        </div>
      </div>

      {/* AI Recommendation Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-1.5 mb-1">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wide">AI Recommendation</span>
            </div>
            <p className="font-semibold text-on-surface">Curriculum Optimization Opportunity</p>
            <p className="text-xs text-on-surface-variant mt-1">EduWorld AI detected a trend in Grade 9 Biology — 14 educators flagged insufficient lab materials for &ldquo;Cellular Structures.&rdquo;</p>
            <div className="flex gap-2 mt-3">
              <Button size="sm" className="h-7 text-xs gap-1 bg-amber-600 hover:bg-amber-700"><Sparkles className="h-3 w-3" /> Generate Resource Request</Button>
              <Button variant="outline" size="sm" className="h-7 text-xs">Dismiss</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-50', title: 'Flag Curriculum Issue', desc: 'Report errors, outdated materials, or standards misalignment.', cta: 'Start Report →' },
          { icon: Package, color: 'text-blue-500', bg: 'bg-blue-50', title: 'Resource Request', desc: 'Requisitions for supplies, digital tools, guest speaker funding.', cta: 'Submit Request →' },
          { icon: ClipboardList, color: 'text-purple-500', bg: 'bg-purple-50', title: 'End-of-Term Institutional Review', desc: 'Feedback on policy, leadership, operational efficiency.', cta: 'Open Now →' },
        ].map(c => (
          <div key={c.title} className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center`}>
              <c.icon className={`h-5 w-5 ${c.color}`} />
            </div>
            <p className="font-semibold text-on-surface">{c.title}</p>
            <p className="text-xs text-on-surface-variant">{c.desc}</p>
            <button className="text-xs text-primary hover:underline font-semibold">{c.cta}</button>
          </div>
        ))}
      </div>

      {/* Active Submissions */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Active Submission Status</h2>
        {ACTIVE_SUBMISSIONS.map(s => (
          <div key={s.title} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
            <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-on-surface">{s.title}</p>
              <p className="text-xs text-on-surface-variant">{s.sub}</p>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${s.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>{s.status}</span>
          </div>
        ))}
        <button className="text-xs text-primary hover:underline">View All Submissions</button>
      </div>

      {/* Institutional Pulse */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 flex items-center gap-2">
        <span className="text-blue-500 text-lg">ℹ</span>
        <p className="text-xs text-blue-700">Faculty feedback volume is up 24% this term, indicating increased educator engagement with administration.</p>
      </div>

      {/* Global Systemic Alerts */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Global Systemic Alerts</h2>
          <div className="flex gap-1">
            {['All Types', 'Pending Only'].map((t, i) => (
              <button key={t} className={`px-3 py-1 rounded-lg text-xs font-semibold ${i === 0 ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-low'}`}>{t}</button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-on-surface-variant border-b border-outline-variant">
                <th className="text-left pb-3 font-semibold">Reporting Teacher</th>
                <th className="text-left pb-3 font-semibold">Issue Category</th>
                <th className="text-left pb-3 font-semibold">Date Filed</th>
                <th className="text-left pb-3 font-semibold">Urgency</th>
                <th className="text-left pb-3 font-semibold">Admin Status</th>
                <th className="text-left pb-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {ALERTS.map(a => (
                <tr key={a.name} className="border-b border-outline-variant last:border-0">
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">{a.initials}</div>
                      <div>
                        <p className="font-medium text-on-surface text-xs">{a.name}</p>
                        <p className="text-xs text-on-surface-variant">{a.dept}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 text-xs text-on-surface-variant">{a.issue}</td>
                  <td className="py-3 text-xs text-on-surface-variant">{a.date}</td>
                  <td className="py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${a.urgency === 'Critical' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>{a.urgency}</span>
                  </td>
                  <td className="py-3 text-xs text-on-surface-variant">{a.status}</td>
                  <td className="py-3">
                    <button className="w-7 h-7 rounded-lg bg-surface-low flex items-center justify-center hover:bg-surface-high">
                      <MoreHorizontal className="h-3.5 w-3.5 text-on-surface-variant" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
