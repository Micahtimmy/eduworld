'use client'
import { Shield, Download, UserPlus, Sparkles, CheckCircle2, Circle, Key, BadgeCheck, AlertTriangle, CloudSync } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

const STAFF = [
  { initials: 'JD', name: 'James D. Sullivan', role: 'Super Admin', color: 'bg-indigo-500' },
  { initials: 'MR', name: 'Maria Rossi', role: 'Registrar', color: 'bg-rose-500' },
  { initials: 'AK', name: 'Arjun Kapoor', role: 'Financial Officer', color: 'bg-teal-500' },
  { initials: 'LH', name: 'Linda Hsiung', role: 'Department Head', color: 'bg-orange-500' },
]

const PERMISSIONS = [
  { icon: '📊', label: 'View Analytics', superAdmin: true, registrar: true, financial: true, deptHead: true },
  { icon: '💳', label: 'Edit Fees', superAdmin: true, registrar: false, financial: true, deptHead: false },
  { icon: '👤', label: 'Invite Staff', superAdmin: true, registrar: true, financial: false, deptHead: false },
  { icon: '📋', label: 'Access System Logs', superAdmin: true, registrar: false, financial: false, deptHead: false },
  { icon: '📚', label: 'Edit Curriculum', superAdmin: true, registrar: true, financial: false, deptHead: true },
]

const AUDIT = [
  { icon: <Key className="h-4 w-4" />, color: 'bg-blue-100 text-blue-600', title: 'Password Reset', desc: 'James D. Sullivan reset password for staff #8821.', meta: '2 mins ago • IP: 192.168.1.1' },
  { icon: <BadgeCheck className="h-4 w-4" />, color: 'bg-green-100 text-green-600', title: 'Role Modification', desc: 'Arjun Kapoor elevated to Financial Officer status.', meta: '45 mins ago • System' },
  { icon: <AlertTriangle className="h-4 w-4" />, color: 'bg-red-100 text-red-600', title: 'Unauthorized Access', desc: 'Denied: Dept. Head access to Financial Records.', meta: '2 hours ago • Portal-A' },
  { icon: <span>🔄</span>, color: 'bg-teal-100 text-teal-600', title: 'Policy Sync', desc: 'Institutional security policies synchronized with Global HQ.', meta: '5 hours ago' },
]

function Check({ ok }: { ok: boolean }) {
  return ok
    ? <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
    : <Circle className="h-5 w-5 text-on-surface-variant/30 mx-auto" />
}

export default function AdminPermissionsPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Roles & Permissions</h1>
          <p className="text-sm text-on-surface-variant mt-1">Granular access control for London Central Academy staff.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2"><Download className="h-4 w-4" /> Export Report</Button>
          <Button size="sm" className="gap-2"><UserPlus className="h-4 w-4" /> New Admin Staff</Button>
        </div>
      </div>

      {/* Staff Profile Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STAFF.map(s => (
          <div key={s.name} className="bg-surface-lowest rounded-xl border border-outline-variant p-4 flex items-center gap-3">
            <div className={cn('w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0', s.color)}>{s.initials}</div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-on-surface truncate">{s.name}</p>
              <p className="text-xs text-on-surface-variant">{s.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Permission Matrix */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <h2 className="font-display font-semibold text-on-surface">Master Permission Matrix</h2>
            </div>
            <div className="flex rounded-lg overflow-hidden border border-outline-variant">
              {['Global Roles', 'Custom Tags'].map((t, i) => (
                <button key={t} className={`px-3 py-1 text-xs font-medium ${i === 0 ? 'bg-primary text-white' : 'text-on-surface-variant'}`}>{t}</button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-outline-variant">
                  <th className="text-left py-2 pr-4 text-xs font-semibold uppercase text-on-surface-variant">Permission</th>
                  <th className="py-2 text-xs font-semibold uppercase text-on-surface-variant text-center w-16">Super<br/>Admin</th>
                  <th className="py-2 text-xs font-semibold uppercase text-on-surface-variant text-center w-16">Registrar</th>
                  <th className="py-2 text-xs font-semibold uppercase text-on-surface-variant text-center w-16">Finance</th>
                  <th className="py-2 text-xs font-semibold uppercase text-on-surface-variant text-center w-16">Dept<br/>Head</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {PERMISSIONS.map(p => (
                  <tr key={p.label}>
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2 text-sm text-on-surface">
                        <span>{p.icon}</span> {p.label}
                      </div>
                    </td>
                    <td className="py-3 text-center"><Check ok={p.superAdmin} /></td>
                    <td className="py-3 text-center"><Check ok={p.registrar} /></td>
                    <td className="py-3 text-center"><Check ok={p.financial} /></td>
                    <td className="py-3 text-center"><Check ok={p.deptHead} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-on-surface-variant italic">Changes to permissions are logged and require dual-factor verification.</p>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">Reset Default</Button>
            <Button size="sm" className="flex-1">Save Matrix Changes</Button>
          </div>
        </div>

        <div className="space-y-4">
          {/* AI Anomaly Alert */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-ai" />
              <span className="text-sm font-semibold text-on-surface">✦ EduWorld AI: Access Anomaly Detected</span>
            </div>
            <p className="text-sm text-on-surface-variant">
              Department Head <strong className="text-on-surface">'Linda Hsiung'</strong> attempted to access <strong className="text-on-surface">'Financial Ledger'</strong> twice in the last 24 hours. Permission denied. Suggests reviewing if elevated role is required.
            </p>
            <div className="flex gap-2">
              <Button size="sm" className="flex-1">Review Attempt</Button>
              <Button variant="ghost" size="sm" className="flex-1">Dismiss Insight</Button>
            </div>
          </div>

          {/* Audit Log */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5">
            <h2 className="font-display font-semibold text-on-surface mb-1">Security Audit Log</h2>
            <p className="text-xs text-on-surface-variant mb-4">Real-time administrative activity.</p>
            <div className="divide-y divide-outline-variant">
              {AUDIT.map(e => (
                <div key={e.title} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
                  <div className={cn('w-8 h-8 rounded-full flex items-center justify-center shrink-0', e.color)}>{e.icon}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-on-surface">{e.title}</p>
                    <p className="text-xs text-on-surface-variant">{e.desc}</p>
                    <p className="text-xs text-on-surface-variant/60 mt-0.5">{e.meta}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 text-xs font-semibold text-primary hover:underline w-full text-center">View Full Integrity Report</button>
          </div>
        </div>
      </div>
    </div>
  )
}
