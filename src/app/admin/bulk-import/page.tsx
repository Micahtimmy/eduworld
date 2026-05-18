'use client'
import { Sparkles, AlertTriangle, CheckCircle, XCircle, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const MAPPINGS = [
  { csv: 'first_name', field: 'First Name', status: 'ok' },
  { csv: 'last_name', field: 'Last Name', status: 'ok' },
  { csv: 'student_email', field: 'Email Address', status: 'ok' },
  { csv: 'parent_email', field: 'Parent Email', status: 'ok' },
  { csv: 'guard_ph', field: 'Select Field...', status: 'warning' },
  { csv: 'emergency_contact', field: 'Emergency Contact', status: 'ok' },
]

const ROWS = [
  { id: 1, first: 'Sarah', last: 'Connor', email: 'sarah.c@example.com', status: 'valid' },
  { id: 2, first: 'John', last: 'Smith', email: 'john.s@example.com', status: 'valid' },
  { id: 3, first: '--', last: 'Doe', email: 'jane.doe@example.com', status: 'error', error: 'Missing First Name' },
  { id: 4, first: 'Michael', last: 'Scott', email: 'michael.scott.com', status: 'error', error: 'Invalid Email Format' },
  { id: 5, first: 'Jim', last: 'Halpert', email: 'jim.h@example.com', status: 'valid' },
  { id: 6, first: 'Pam', last: 'Beesly', email: 'pam.b@example.com', status: 'valid' },
  { id: 7, first: 'Dwight', last: 'Schrute', email: 'dwight.s@example.com', status: 'valid' },
]

export default function AdminBulkImportPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-on-surface-variant">
        <span>EduWorld</span><ChevronRight className="h-3 w-3" /><span>Admin</span><ChevronRight className="h-3 w-3" />
        <span className="text-on-surface font-semibold">Bulk Import</span>
      </div>

      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Mapping & Validation</h1>
          <p className="text-sm text-on-surface-variant mt-1">Review how your CSV columns map to EduWorld fields. 3 issues found in 250 rows.</p>
          <span className="text-xs bg-surface-low text-on-surface-variant px-2 py-0.5 rounded-full">EWD-007</span>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Cancel Import</Button>
          <Button size="sm" className="gap-2">Complete Import & Invite Students <ChevronRight className="h-4 w-4" /></Button>
        </div>
      </div>

      {/* AI Mapping Banner */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 flex items-center gap-3">
        <Sparkles className="h-4 w-4 text-ai shrink-0" />
        <p className="text-sm text-on-surface"><strong>EduWorld AI Mapping</strong> — We've automatically mapped <strong>8 of 10 columns</strong> based on your header row.</p>
        <span className="ml-auto text-xs bg-ai/10 text-ai px-2 py-0.5 rounded-full font-semibold shrink-0">8/10 Mapped</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Column Mapping Panel */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Data Mapping</h2>
          <div className="space-y-3">
            {MAPPINGS.map(m => (
              <div key={m.csv} className="flex items-center gap-3">
                <div className="flex-1 p-2.5 bg-surface-low rounded-xl text-xs font-mono text-on-surface-variant">{m.csv}</div>
                {m.status === 'warning' ? (
                  <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-on-surface-variant shrink-0" />
                )}
                <div className={cn('flex-1 p-2.5 rounded-xl text-xs font-semibold',
                  m.status === 'warning' ? 'bg-amber-50 border border-amber-200 text-amber-700' : 'bg-primary/5 border border-primary/20 text-on-surface'
                )}>{m.field}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Parent Matching */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Parent Matching</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-surface-low rounded-xl border-2 border-primary">
              <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center mt-0.5 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-on-surface">Match by Email</p>
                <p className="text-xs text-on-surface-variant">Link students to households with matching parent emails.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-surface-low rounded-xl opacity-60">
              <div className="w-4 h-4 rounded-full border-2 border-outline-variant mt-0.5 shrink-0" />
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-on-surface">Match by Phone Number</p>
                  <span className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded-full font-semibold">Pro</span>
                </div>
                <p className="text-xs text-on-surface-variant">Requires SMS verification enabled.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Validation Preview */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Validation Preview</h2>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full"><CheckCircle className="h-3.5 w-3.5" /> 247 Valid</span>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-red-700 bg-red-100 px-2 py-1 rounded-full"><XCircle className="h-3.5 w-3.5" /> 3 Errors</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-outline-variant">
                {['#', 'First Name', 'Last Name', 'Email', 'Status'].map(h => (
                  <th key={h} className="text-left pb-2 text-xs font-semibold uppercase text-on-surface-variant pr-4 last:pr-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {ROWS.map(r => (
                <tr key={r.id} className={cn('transition-colors', r.status === 'error' ? 'bg-red-50' : 'hover:bg-surface-low')}>
                  <td className="py-2.5 pr-4 text-xs text-on-surface-variant">{r.id}</td>
                  <td className="py-2.5 pr-4 text-sm text-on-surface">{r.first}</td>
                  <td className="py-2.5 pr-4 text-sm text-on-surface">{r.last}</td>
                  <td className="py-2.5 pr-4 text-xs font-mono text-on-surface-variant">{r.email}</td>
                  <td className="py-2.5">
                    {r.status === 'valid' ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <div className="flex items-center gap-1.5">
                        <XCircle className="h-4 w-4 text-red-500 shrink-0" />
                        <span className="text-xs text-red-600">{r.error}</span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="text-xs text-primary hover:underline">View All 250 Rows →</button>
      </div>
    </div>
  )
}
