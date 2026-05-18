'use client'
import { Download, TrendingUp, CheckCircle, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

const MATCHES = [
  { letter: 'S', name: 'STEM Excellence Fellowship', desc: 'Awarded to top engineering students researching sustainable energy systems.', tag: 'RESEARCH MERIT', amount: '$15,000', fit: 98 },
  { letter: 'N', name: 'National Tech Consortium Grant', desc: 'Funding for juniors and seniors involved in published terminal-level computing research.', tag: 'COMP-SCI PUBLISHED', amount: '$5,000', fit: 92 },
  { letter: 'A', name: 'Alumni Memorial Fund', desc: 'General scholarship for returning students maintaining a GPA above 3.5.', tag: 'GENERAL', amount: 'Var.', fit: 85, drafting: true },
]

const LEDGER = [
  { date: 'Sep 01, 2024', desc: 'University Merit Scholarship · Fall 2024', type: 'GRANT', amount: '$12,000.00', status: 'cleared' },
  { date: 'Sep 05, 2024', desc: 'Federal Pell Grant · Fall 2024', type: 'GRANT', amount: '$3,245.00', status: 'cleared' },
  { date: 'Jan 15, 2025', desc: 'University Merit Scholarship · Spring 2025', type: 'GRANT', amount: '$12,000.00', status: 'scheduled' },
]

export default function ScholarFinancialAidPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Financial Profile</h1>
          <p className="text-sm text-on-surface-variant mt-1">Academic Year 2024-2025. Monitor grant distributions, track renewal eligibility, and manage scholarship applications.</p>
        </div>
        <Button variant="outline" size="sm" className="gap-1.5"><Download className="h-3.5 w-3.5" /> Tax Documents</Button>
      </div>

      {/* Total Aid */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-on-surface-variant">Total Aid Secured (YTD)</p>
          <div className="flex items-center gap-1 text-green-600">
            <TrendingUp className="h-3.5 w-3.5" />
            <span className="text-xs font-semibold">+12% vs LY</span>
          </div>
        </div>
        <p className="font-display font-bold text-3xl text-on-surface">$42,500.00</p>
        <div className="space-y-2">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-on-surface-variant">Grants & Scholarships $36,000</span>
              <span className="font-bold text-on-surface">85%</span>
            </div>
            <div className="h-2 bg-surface-high rounded-full overflow-hidden"><div className="h-full bg-primary rounded-full" style={{ width: '85%' }} /></div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-on-surface-variant">Subsidized Loans $6,500</span>
              <span className="font-bold text-on-surface">15%</span>
            </div>
            <div className="h-2 bg-surface-high rounded-full overflow-hidden"><div className="h-full bg-surface-high rounded-full" style={{ width: '15%' }} /></div>
          </div>
        </div>
      </div>

      {/* Renewal Eligibility */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-green-500">✅</span>
          <h2 className="font-display font-semibold text-on-surface">Renewal Eligibility</h2>
        </div>
        <div className="space-y-2">
          {[
            { label: 'Cumulative GPA 3.98 / 3.0 Req', pct: 100, ok: true },
            { label: 'Credits Earned 102 / 90 Req', pct: 100, ok: true },
            { label: 'FAFSA Submission — PENDING', pct: 0, ok: false },
          ].map(r => (
            <div key={r.label}>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className={r.ok ? 'text-on-surface' : 'text-amber-700 font-semibold'}>{r.label}</span>
                {r.ok ? <CheckCircle className="h-3.5 w-3.5 text-green-500" /> : <span className="text-amber-600">⚠</span>}
              </div>
              <div className="h-1.5 bg-surface-high rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${r.ok ? 'bg-green-500' : 'bg-amber-400'}`} style={{ width: r.ok ? '100%' : '5%' }} />
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-amber-700">Due by March 1st. Missing tax transcript.</p>
        <Button variant="outline" size="sm">View Audit Report</Button>
      </div>

      {/* Scholarship Matches */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">🧠 Intelligence: Scholarship Matches</h2>
          <button className="text-xs text-primary hover:underline">View All Matches →</button>
        </div>
        {MATCHES.map(m => (
          <div key={m.name} className="border border-outline-variant rounded-xl p-4 space-y-2">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0">{m.letter}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-semibold text-sm text-on-surface">{m.name}</p>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">FIT SCORE {m.fit}%</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-1">{m.desc}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">{m.tag}</span>
                  <span className="text-xs font-bold text-on-surface">{m.amount}</span>
                </div>
              </div>
            </div>
            <Button size="sm" variant={m.drafting ? 'outline' : 'default'} className="h-7 text-xs" disabled={m.drafting}>
              {m.drafting ? 'Drafting...' : 'Apply'}
            </Button>
          </div>
        ))}
      </div>

      {/* Ledger */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <h2 className="font-display font-semibold text-on-surface">Disbursement Ledger</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-xs text-on-surface-variant border-b border-outline-variant">
              <th className="text-left pb-3 font-semibold">Date</th>
              <th className="text-left pb-3 font-semibold">Transaction</th>
              <th className="text-left pb-3 font-semibold">Type</th>
              <th className="text-right pb-3 font-semibold">Amount</th>
              <th className="text-left pb-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {LEDGER.map(l => (
              <tr key={l.date + l.desc} className="border-b border-outline-variant last:border-0">
                <td className="py-3 text-xs text-on-surface-variant">{l.date}</td>
                <td className="py-3 text-xs text-on-surface">{l.desc}</td>
                <td className="py-3"><span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-semibold">{l.type}</span></td>
                <td className="py-3 text-right font-semibold text-on-surface">{l.amount}</td>
                <td className="py-3">
                  {l.status === 'cleared'
                    ? <CheckCircle className="h-4 w-4 text-green-500" />
                    : <Clock className="h-4 w-4 text-amber-500" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
