'use client'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

const BACKUPS = [
  { id: '#EDU-VLT-092', type: 'Student Records', status: 'Encrypted', lastBackup: '2 mins ago', size: '4.2 GB' },
  { id: '#EDU-VLT-088', type: 'Financial Ledger', status: 'Secure', lastBackup: '6 hours ago', size: '128 MB' },
  { id: '#EDU-VLT-074', type: 'LMS Media Assets', status: 'Idle', lastBackup: 'Yesterday', size: '842 GB' },
]

const AUDIT = [
  { icon: '☁', label: 'Automatic Backup Completed', time: '14:02 PM', detail: 'System mirrored #EDU-VLT-092 to Asia-Pacific (Tokyo).' },
  { icon: '🛡', label: 'AI Threat Mitigation Active', time: '11:45 AM', detail: 'Login anomaly from IP 192.168.1.105 blocked by "Neural Sentry."' },
  { icon: '⚙', label: 'Admin Configuration Changed', time: '09:12 AM', detail: "Administrator 'Marcus V.' updated retention policy for Student Records to 7 years." },
]

const STATUS_STYLES: Record<string, string> = {
  Encrypted: 'bg-green-100 text-green-700',
  Secure: 'bg-blue-100 text-blue-700',
  Idle: 'bg-surface-high text-on-surface-variant',
}

export default function AdminDataGovernancePage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Secure</span>
          </div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Data Vault &amp; Backup</h1>
          <p className="text-sm text-on-surface-variant mt-1">Institutional data security, backup registry, and compliance management.</p>
        </div>
      </div>

      {/* AI Security Monitor */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-ai">✦</span>
          <h2 className="font-display font-semibold text-on-surface">AI Security Monitor</h2>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold ml-auto">System Integrity: Nominal</span>
        </div>
        <p className="text-sm text-on-surface-variant">AI scanning 12.4TB institutional data. No unauthorized access in 24 hours. Backup redundancy 100% across 3 regions.</p>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Active Threats', value: '0' },
            { label: 'Uptime Velocity', value: '99.9%' },
            { label: 'Avg. Latency', value: '2.4ms' },
          ].map(s => (
            <div key={s.label} className="bg-surface-low rounded-xl p-3 text-center">
              <p className="font-display font-bold text-xl text-on-surface">{s.value}</p>
              <p className="text-xs text-on-surface-variant mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Export */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 flex items-center gap-4">
        <span className="text-3xl">📤</span>
        <div className="flex-1">
          <h2 className="font-display font-semibold text-on-surface">Compliance Export</h2>
          <p className="text-xs text-on-surface-variant mt-0.5">Generate encrypted data bundles for GDPR/FERPA audits.</p>
        </div>
        <div className="flex gap-2">
          <Button size="sm" className="gap-1.5">Start Audit Export →</Button>
          <Button size="sm" variant="outline">View Export Logs</Button>
        </div>
      </div>

      {/* Backup Registry */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
        <div className="p-4 border-b border-outline-variant flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Backup Registry</h2>
          <Button size="sm" variant="outline" className="gap-1.5 h-7 text-xs"><Plus className="h-3 w-3" /> Schedule New Backup</Button>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs text-on-surface-variant bg-surface-low border-b border-outline-variant">
              <th className="text-left px-4 py-3 font-semibold">Vault ID</th>
              <th className="text-left px-4 py-3 font-semibold">Type</th>
              <th className="text-left px-4 py-3 font-semibold">Status</th>
              <th className="text-left px-4 py-3 font-semibold">Last Backup</th>
              <th className="text-right px-4 py-3 font-semibold">Size</th>
            </tr>
          </thead>
          <tbody>
            {BACKUPS.map(b => (
              <tr key={b.id} className="border-b border-outline-variant last:border-0 hover:bg-surface-low transition-colors">
                <td className="px-4 py-3 font-mono text-xs text-on-surface-variant">{b.id}</td>
                <td className="px-4 py-3 font-semibold text-on-surface">{b.type}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${STATUS_STYLES[b.status]}`}>{b.status}</span>
                </td>
                <td className="px-4 py-3 text-xs text-on-surface-variant">{b.lastBackup}</td>
                <td className="px-4 py-3 text-right text-xs font-semibold text-on-surface">{b.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Key Management */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">🔑</span>
          <h2 className="font-display font-semibold text-on-surface">Key Management</h2>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
            <span className="text-green-500">✓</span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-on-surface">RSA-4096 Health 94%</p>
              <p className="text-xs text-on-surface-variant">Next rotation scheduled in 14 days.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-amber-50 border border-amber-200 rounded-xl">
            <span className="text-amber-500">⚠</span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-on-surface">Legacy Keys</p>
              <p className="text-xs text-on-surface-variant">2 keys deprecated</p>
            </div>
          </div>
        </div>
        <Button size="sm" variant="outline">Rotate Global Keys</Button>
      </div>

      {/* Security Audit Trail */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
        <div className="p-4 border-b border-outline-variant flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Security Audit Trail</h2>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="h-7 text-xs">Export CSV</Button>
            <Button size="sm" variant="outline" className="h-7 text-xs">Filters</Button>
          </div>
        </div>
        <div className="divide-y divide-outline-variant">
          {AUDIT.map(a => (
            <div key={a.label} className="flex items-start gap-3 p-4">
              <span className="text-lg shrink-0">{a.icon}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-on-surface">{a.label}</p>
                  <span className="text-xs text-on-surface-variant shrink-0">{a.time}</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-0.5">{a.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
