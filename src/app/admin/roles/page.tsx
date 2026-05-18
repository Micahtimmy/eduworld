'use client'
import { Sparkles, Shield, Key, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

const STAFF = [
  { initials: 'JD', name: 'James D. Sullivan', role: 'Super Admin', color: 'bg-primary/20 text-primary' },
  { initials: 'MR', name: 'Maria Rossi', role: 'Registrar', color: 'bg-blue-100 text-blue-700' },
  { initials: 'AK', name: 'Arjun Kapoor', role: 'Financial Officer', color: 'bg-green-100 text-green-700' },
  { initials: 'LH', name: 'Linda Hsiung', role: 'Department Head', color: 'bg-purple-100 text-purple-700' },
]

const PERMISSIONS = [
  { icon: '📊', label: 'View Analytics', superAdmin: true, registrar: true, financial: true, dept: true },
  { icon: '💰', label: 'Edit Fees', superAdmin: true, registrar: false, financial: true, dept: false },
  { icon: '👤', label: 'Invite Staff', superAdmin: true, registrar: true, financial: false, dept: false },
  { icon: '🔒', label: 'Access System Logs', superAdmin: true, registrar: false, financial: false, dept: false },
  { icon: '📚', label: 'Edit Curriculum', superAdmin: true, registrar: true, financial: false, dept: true },
]

const AUDIT = [
  { icon: '🔑', event: 'Password Reset', detail: 'Sullivan reset password for "staff #8821"', time: '2 mins ago · IP: 192.168.1.1' },
  { icon: '✅', event: 'Role Modification', detail: 'Kapoor elevated to Financial Officer', time: '45 mins ago · System' },
  { icon: '⚠️', event: 'Unauthorized Access', detail: 'Denied: Dept. Head access to Financial Records.', time: '2 hours ago · Portal-A' },
  { icon: '☁️', event: 'Policy Sync', detail: 'Policies synced with Global HQ', time: '5 hours ago' },
]

export default function AdminRolesPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-on-surface-variant">EduWorld Global · London Central Academy</p>
          <h1 className="font-display font-bold text-2xl text-on-surface mt-1">Roles & Permissions</h1>
          <p className="text-sm text-on-surface-variant mt-1">Granular access control for London Central Academy staff.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2"><Download className="h-4 w-4" /> Export Report</Button>
          <Button size="sm">+ New Admin Staff</Button>
        </div>
      </div>

      {/* Staff Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STAFF.map(s => (
          <div key={s.name} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${s.color}`}>{s.initials}</div>
            <div>
              <p className="text-sm font-semibold text-on-surface">{s.name}</p>
              <p className="text-xs text-on-surface-variant">{s.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Permission Matrix */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          <h2 className="font-display font-semibold text-on-surface">Master Permission Matrix</h2>
        </div>
        <div className="flex gap-1">
          {['Global Roles', 'Custom Tags'].map((t, i) => (
            <button key={t} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${i === 0 ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-low'}`}>{t}</button>
          ))}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="text-left pb-2 text-xs font-semibold text-on-surface-variant">Permission</th>
                {['Super Admin', 'Registrar', 'Financial Off.', 'Dept. Head'].map(h => (
                  <th key={h} className="pb-2 text-xs font-semibold text-on-surface-variant text-center">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {PERMISSIONS.map(p => (
                <tr key={p.label} className="hover:bg-surface-low">
                  <td className="py-3 pr-4 text-sm text-on-surface flex items-center gap-2">{p.icon} {p.label}</td>
                  {[p.superAdmin, p.registrar, p.financial, p.dept].map((granted, i) => (
                    <td key={i} className="py-3 text-center">
                      <span className={granted ? 'text-green-600' : 'text-on-surface-variant/30'}>{granted ? '✓' : '○'}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-on-surface-variant">Changes to permissions are logged and require dual-factor verification.</p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Reset Default</Button>
          <Button size="sm">Save Matrix Changes</Button>
        </div>
      </div>

      {/* AI Insight */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-ai" />
          <h2 className="font-display font-semibold text-on-surface">EduWorld AI: Access Anomaly Detected</h2>
        </div>
        <p className="text-sm text-on-surface-variant">Linda Hsiung made two denied attempts to access the &quot;Financial Ledger&quot; within the last 24 hours.</p>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">Review Attempt</Button>
          <Button size="sm" variant="outline">Dismiss Insight</Button>
        </div>
      </div>

      {/* Audit Log */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Key className="h-5 w-5 text-primary" />
          <h2 className="font-display font-semibold text-on-surface">Security Audit Log</h2>
          <p className="text-xs text-on-surface-variant ml-1">Real-time administrative activity.</p>
        </div>
        <div className="space-y-3">
          {AUDIT.map(a => (
            <div key={a.event} className="flex items-start gap-3 p-3 bg-surface-low rounded-xl">
              <span className="text-lg mt-0.5">{a.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-on-surface">{a.event}</p>
                <p className="text-xs text-on-surface-variant">{a.detail}</p>
                <p className="text-xs text-on-surface-variant mt-0.5">{a.time}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="text-xs text-primary hover:underline">View Full Integrity Report</button>
      </div>
    </div>
  )
}
