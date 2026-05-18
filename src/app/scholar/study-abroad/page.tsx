'use client'
import { Download, Plus, CheckCircle, Circle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const INSTITUTIONS = [
  { icon: '🎓', name: 'University of Oxford', dept: 'Department of Quantum Information · Trinity Term', match: 98, label: 'Research Alignment', probability: 'High Probability', deadline: 'Oct 15' },
  { icon: '🏛️', name: 'ETH Zurich', dept: 'Institute for Theoretical Physics · Spring Semester', match: 94, label: 'Faculty Sponsor', probability: 'Moderate', deadline: 'Nov 01' },
]

const LOGISTICS = [
  {
    title: 'Tier 4 (General) Student Visa — UK',
    status: 'In Progress',
    items: [
      { label: 'CAS Number Issued', done: true },
      { label: 'Financial Proof Verified', done: true },
      { label: 'Biometrics Appointment (Pending)', done: false },
    ],
  },
  {
    title: 'National Visa D — Switzerland',
    status: 'Draft',
    items: [
      { label: 'Letter of Acceptance', done: false },
      { label: 'Proof of Accommodation', done: false },
      { label: 'Health Insurance Coverage', done: false },
    ],
  },
]

const COMMUNITY = [
  { initials: 'ER', name: 'Dr. Elena Rostova', affiliation: 'Oxford · Q-Computing', msg: 'The new lab access protocols for visiting researchers have been streamlined. You can now register within 48 hours of arrival.' },
  { initials: 'MC', name: 'Markus Chen', affiliation: 'ETH Zurich · Physics', msg: 'Just secured housing in Kreis 6. Be warned: the cantonal registration process requires original wet-ink signatures — no digital copies accepted.' },
]

export default function ScholarStudyAbroadPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Global Exchange Planner</h1>
          <p className="text-sm text-on-surface-variant mt-1">Coordinate international research terms, align institutional requirements, and model financial trajectories.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1.5"><Download className="h-3.5 w-3.5" /> Export Dossier</Button>
          <Button size="sm" className="gap-1.5"><Plus className="h-3.5 w-3.5" /> Start Application</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Institutional Matching */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="font-display font-semibold text-on-surface">Institutional Matching</h2>
              <span className="text-xs bg-ai/10 text-ai px-2 py-0.5 rounded-full font-semibold">Algorithm Active</span>
            </div>
            <div className="space-y-3">
              {INSTITUTIONS.map(inst => (
                <div key={inst.name} className="border border-outline-variant rounded-xl p-4 space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{inst.icon}</span>
                      <div>
                        <p className="font-semibold text-on-surface">{inst.name}</p>
                        <p className="text-xs text-on-surface-variant">{inst.dept}</p>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold shrink-0 ${inst.probability === 'High Probability' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>{inst.probability}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-on-surface-variant">{inst.label}</span>
                        <span className="font-bold text-primary">{inst.match}%</span>
                      </div>
                      <div className="h-1.5 bg-surface-high rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${inst.match}%` }} />
                      </div>
                    </div>
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold shrink-0">Deadline: {inst.deadline}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Logistics */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <h2 className="font-display font-semibold text-on-surface">Logistics & Clearances</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {LOGISTICS.map(l => (
                <div key={l.title} className="border border-outline-variant rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-on-surface">{l.title}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${l.status === 'In Progress' ? 'bg-primary/10 text-primary' : 'bg-surface-high text-on-surface-variant'}`}>{l.status}</span>
                  </div>
                  <div className="space-y-1.5">
                    {l.items.map(item => (
                      <div key={item.label} className="flex items-center gap-2">
                        {item.done ? <CheckCircle className="h-3.5 w-3.5 text-green-500 shrink-0" /> : <Circle className="h-3.5 w-3.5 text-on-surface-variant shrink-0" />}
                        <span className={`text-xs ${item.done ? 'text-on-surface' : 'text-on-surface-variant'}`}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Trajectory */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <h2 className="font-display font-semibold text-on-surface">Financial Trajectory</h2>
            <p className="text-xs text-on-surface-variant">Estimated costs for Oxford vs. Zurich (per term)</p>
            <div className="space-y-3">
              {[
                { label: 'Housing', oxford: 3200, zurich: 3800, currency: '£/CHF' },
                { label: 'Subsistence', oxford: 1800, zurich: 2400, currency: '£/CHF' },
                { label: 'Lab Fees', oxford: 3500, zurich: 5800, currency: '£/CHF' },
              ].map(r => (
                <div key={r.label} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-on-surface font-semibold">{r.label}</span>
                    <div className="flex gap-3">
                      <span className="text-blue-600">Oxford £{r.oxford.toLocaleString()}</span>
                      <span className="text-red-600">Zurich CHF {r.zurich.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="h-2 bg-blue-100 rounded-full overflow-hidden"><div className="h-full bg-blue-500 rounded-full" style={{ width: `${(r.oxford / 6000) * 100}%` }} /></div>
                    <div className="h-2 bg-red-100 rounded-full overflow-hidden"><div className="h-full bg-red-400 rounded-full" style={{ width: `${(r.zurich / 6000) * 100}%` }} /></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Scholars */}
        <div className="space-y-4">
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <p className="font-semibold text-sm text-on-surface">🌍 Global Scholars</p>
            <div className="space-y-3">
              {COMMUNITY.map(c => (
                <div key={c.name} className="space-y-2 pb-3 border-b border-outline-variant last:border-0 last:pb-0">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0">{c.initials}</div>
                    <div>
                      <p className="text-xs font-semibold text-on-surface">{c.name}</p>
                      <p className="text-xs text-on-surface-variant">{c.affiliation}</p>
                    </div>
                  </div>
                  <p className="text-xs text-on-surface-variant line-clamp-3">{c.msg}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
