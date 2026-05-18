'use client'
import { Sparkles, TrendingUp, Globe, CheckCircle, XCircle, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const FUNDING_DB = [
  { name: 'DOE Energy Research Grant', org: 'Dept. of Energy', amount: '$250,000', deadline: 'Nov 30, 2023', match: '94%', status: 'Open' },
  { name: 'Horizon Europe — Digital', org: 'European Commission', amount: '€180,000', deadline: 'Dec 15, 2023', match: '87%', status: 'Open' },
  { name: 'NSF CAREER Award', org: 'Natl Science Foundation', amount: '$500,000', deadline: 'Jan 20, 2024', match: '91%', status: 'Open' },
]

const PROPOSALS = [
  { title: 'Quantum-Neural Interface Research', funder: 'NSF', score: 88, status: 'Draft', updated: 'Oct 24, 2023' },
  { title: 'Climate Modeling AI Framework', funder: 'DOE', score: 76, status: 'Submitted', updated: 'Oct 20, 2023' },
]

export default function ScholarGrantsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Grant Proposals & Funding Hub</h1>
          <p className="text-sm text-on-surface-variant mt-1">Discover funding opportunities and optimize proposals with AI assistance.</p>
        </div>
        <Button className="gap-2"><Plus className="h-4 w-4" /> New Proposal</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Proposal Optimizer */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-ai" />
              <h2 className="font-display font-semibold text-on-surface">AI Proposal Optimizer</h2>
            </div>
            {PROPOSALS.map(p => (
              <div key={p.title} className="bg-surface-lowest rounded-xl border border-outline-variant p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-sm text-on-surface">{p.title}</p>
                    <p className="text-xs text-on-surface-variant">{p.funder} · Updated {p.updated}</p>
                  </div>
                  <span className={cn('text-xs px-2 py-0.5 rounded-full font-medium', p.status === 'Draft' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700')}>{p.status}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-on-surface-variant">
                    <span>AI Score</span>
                    <span className="font-semibold text-on-surface">{p.score}/100</span>
                  </div>
                  <div className="h-2 bg-surface-high rounded-full overflow-hidden">
                    <div className="h-full bg-ai rounded-full transition-all" style={{ width: `${p.score}%` }} />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="gap-1.5 bg-ai hover:bg-ai/90 h-8 text-xs"><Sparkles className="h-3.5 w-3.5" /> Optimize</Button>
                  <Button size="sm" variant="outline" className="h-8 text-xs">Edit Draft</Button>
                </div>
              </div>
            ))}
          </div>

          {/* Global Funding Database */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <h2 className="font-display font-semibold text-on-surface">Global Funding Database</h2>
              </div>
              <Button variant="outline" size="sm">Filter</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-outline-variant">
                    {['Grant Name', 'Organization', 'Amount', 'Deadline', 'AI Match', 'Status'].map(h => (
                      <th key={h} className="text-left pb-2 text-xs font-semibold uppercase text-on-surface-variant pr-4 last:pr-0">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {FUNDING_DB.map(f => (
                    <tr key={f.name} className="hover:bg-surface-low transition-colors">
                      <td className="py-3 pr-4 text-sm font-semibold text-on-surface">{f.name}</td>
                      <td className="py-3 pr-4 text-xs text-on-surface-variant">{f.org}</td>
                      <td className="py-3 pr-4 text-sm font-semibold text-primary">{f.amount}</td>
                      <td className="py-3 pr-4 text-xs text-on-surface-variant">{f.deadline}</td>
                      <td className="py-3 pr-4">
                        <span className="text-xs bg-ai/10 text-ai px-2 py-0.5 rounded-full font-semibold">{f.match}</span>
                      </td>
                      <td className="py-3">
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{f.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Department Analytics */}
        <div className="space-y-4">
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="font-display font-semibold text-on-surface">Department Analytics</h2>
            </div>
            <div className="text-center py-4">
              <p className="font-display font-bold text-4xl text-primary">64%</p>
              <p className="text-sm text-on-surface-variant mt-1">Win Rate</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 bg-green-50 rounded-xl">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <p className="font-bold text-xl text-green-700">24</p>
                </div>
                <p className="text-xs text-on-surface-variant">Approved</p>
              </div>
              <div className="text-center p-3 bg-red-50 rounded-xl">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <XCircle className="h-4 w-4 text-red-600" />
                  <p className="font-bold text-xl text-red-700">13</p>
                </div>
                <p className="text-xs text-on-surface-variant">Rejected</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-on-surface">Top Funding Sources</p>
              {[{ name: 'NSF', pct: 40 }, { name: 'DOE', pct: 35 }, { name: 'EU Horizon', pct: 25 }].map(s => (
                <div key={s.name} className="space-y-1">
                  <div className="flex justify-between text-xs text-on-surface-variant">
                    <span>{s.name}</span><span>{s.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-surface-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-ai" />
              <p className="text-sm font-semibold text-on-surface">AI Insight</p>
            </div>
            <p className="text-xs text-on-surface-variant">Your quantum computing proposal scores <strong className="text-on-surface">12% higher</strong> than department average. Submit before Nov 30 deadline.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
