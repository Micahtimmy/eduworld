'use client'
import { Sparkles, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PERMISSIONS = [
  { icon: '📖', item: 'Lesson Plan Drafts', teachers: true, students: false, parents: false },
  { icon: '📝', item: 'Upcoming Assessments', teachers: true, students: false, parents: false },
  { icon: '📊', item: 'Performance Analytics', teachers: true, students: null, parents: null },
  { icon: '✦', item: 'AI Feedback Logs', teachers: true, students: null, parents: null },
]

const LOG = [
  { time: 'Today, 10:24 AM', event: 'Draft Restriction Applied', detail: 'Admin restricted \'Draft Lessons\' for Parent role, Science Dept' },
  { time: 'Yesterday, 4:45 PM', event: 'Global PII Shield Active', detail: 'Automated privacy masking enabled on parent dashboards' },
  { time: 'Oct 24, 9:15 AM', event: 'New Teacher Role Added', detail: '\'Assistant Teacher\' role, limited assessment viewing' },
]

export default function TeacherAccessControlPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Access Control</h1>
          <p className="text-sm text-on-surface-variant mt-1">Curriculum Visibility Matrix — manage data access per role across the ecosystem.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1.5"><Download className="h-3.5 w-3.5" /> Export Logs</Button>
          <Button size="sm">Save Changes</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {/* Permission Grid */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <h2 className="font-display font-semibold text-on-surface">Main Permission Grid</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-on-surface-variant border-b border-outline-variant">
                  <th className="text-left pb-3 font-semibold">Curriculum Component</th>
                  <th className="text-center pb-3 font-semibold">Teachers</th>
                  <th className="text-center pb-3 font-semibold">Students</th>
                  <th className="text-center pb-3 font-semibold">Parents</th>
                </tr>
              </thead>
              <tbody>
                {PERMISSIONS.map(p => (
                  <tr key={p.item} className="border-b border-outline-variant last:border-0">
                    <td className="py-3 flex items-center gap-2"><span>{p.icon}</span><span className="text-on-surface">{p.item}</span></td>
                    <td className="py-3 text-center">{p.teachers ? '✅' : '⛔'}</td>
                    <td className="py-3 text-center">{p.students === null ? '—' : p.students ? '✅' : '⛔'}</td>
                    <td className="py-3 text-center">{p.parents === null ? '—' : p.parents ? '✅' : '⛔'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Recent Adjustments */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <h2 className="font-display font-semibold text-on-surface">Recent Access Policy Adjustments</h2>
            <div className="space-y-2">
              {LOG.map(l => (
                <div key={l.time} className="flex gap-3 p-3 bg-surface-low rounded-xl">
                  <div className="w-1 rounded-full bg-primary shrink-0" />
                  <div>
                    <p className="text-xs text-on-surface-variant">{l.time}</p>
                    <p className="text-sm font-semibold text-on-surface">{l.event}</p>
                    <p className="text-xs text-on-surface-variant">{l.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* AI Audit */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 space-y-3">
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              <span className="text-xs font-bold text-amber-700 uppercase">AI Audit Recommendation</span>
            </div>
            <p className="font-semibold text-sm text-on-surface">Privacy Optimization</p>
            <p className="text-xs text-on-surface-variant">14% of student feedback logs contain identifying personal data visible to parents. Adjust &apos;Feedback PII&apos; visibility toggle.</p>
            <Button size="sm" className="w-full h-7 text-xs">Apply Auto-Restriction</Button>
          </div>

          {/* Active Users */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <p className="font-semibold text-sm text-on-surface">Active User Summary</p>
            {[
              { icon: '👤', role: 'Teachers', count: '1,240' },
              { icon: '👥', role: 'Students', count: '18,500' },
              { icon: '👨‍👩‍👧', role: 'Parents', count: '22,100' },
            ].map(u => (
              <div key={u.role} className="flex items-center gap-2">
                <span>{u.icon}</span>
                <span className="text-sm text-on-surface flex-1">{u.role}</span>
                <span className="font-bold text-on-surface">{u.count}</span>
              </div>
            ))}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-on-surface-variant">Sync Status</span>
                <span className="font-bold text-on-surface">94%</span>
              </div>
              <div className="h-2 bg-surface-high rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '94%' }} />
              </div>
              <p className="text-xs text-on-surface-variant mt-1">Curriculum data synced across all regions.</p>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <p className="font-semibold text-sm text-on-surface">Preview Experience</p>
            {[
              { icon: '👤', role: 'Teacher View', status: 'All Modules Visible', color: 'green' },
              { icon: '👥', role: 'Student View', status: '5 Items Restricted', color: 'amber' },
              { icon: '👨‍👩‍👧', role: 'Parent View', status: 'Strict Guardrail Active', color: 'red' },
            ].map(v => (
              <div key={v.role} className="flex items-center gap-2 p-2.5 bg-surface-low rounded-xl">
                <span>{v.icon}</span>
                <span className="text-sm text-on-surface flex-1">{v.role}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${v.color === 'green' ? 'bg-green-100 text-green-700' : v.color === 'amber' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>{v.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
