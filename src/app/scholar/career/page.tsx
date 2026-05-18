'use client'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ALUMNI = [
  { name: 'Dr. Elena Rostova', role: 'AI Research Lead, DeepMind', match: 98, initials: 'ER', connected: false },
  { name: 'Marcus Chen', role: 'Principal Engineer, Google Brain', match: 85, initials: 'MC', connected: true },
]

const TIMELINE = [
  { quarter: 'Q3 2024', milestone: 'Complete Thesis Chapter 3', status: 'current' },
  { quarter: 'Q4 2024', milestone: 'Submit to Nature AI Journal', status: 'upcoming' },
  { quarter: 'Q2 2025', milestone: 'PhD Defense & Graduation', status: 'future' },
]

const SCENARIOS = [
  { path: 'Academia Track', fit: 94, desc: 'Professor / Research Lead at R1 University' },
  { path: 'Industry Research', fit: 91, desc: 'Staff Scientist at FAANG or DeepTech' },
  { path: 'Founding Path', fit: 78, desc: 'AI Startup Founder in Bio-AI space' },
]

export default function ScholarCareerPage() {
  return (
    <div className="p-4 md:p-6 space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="font-display font-bold text-2xl text-on-surface">Career Convergence Gateway</h1>
        <p className="text-sm text-on-surface-variant mt-1">AI-powered career intelligence for your doctoral journey</p>
      </div>

      {/* Predictive Skill Mapping */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-ai" />
            <p className="text-sm font-semibold text-on-surface">Predictive Skill Mapping</p>
          </div>
          <span className="text-2xl font-bold text-ai">94%</span>
        </div>
        <p className="text-xs text-on-surface-variant">Your current skill trajectory is highly aligned with top-tier AI research roles. 3 skill gaps identified in quantum bio-simulation.</p>
        <Button size="sm" className="bg-ai hover:bg-ai/90 text-white gap-1.5">
          <Sparkles className="h-3 w-3" /> What-If Scenario
        </Button>
      </div>

      {/* Convergence Timeline */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <h2 className="font-display font-semibold text-on-surface">Convergence Timeline</h2>
        <div className="space-y-3">
          {TIMELINE.map((t, i) => (
            <div key={t.quarter} className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                t.status === 'current' ? 'bg-primary text-white' :
                t.status === 'upcoming' ? 'bg-surface-high text-on-surface' :
                'bg-surface-low text-on-surface-variant'
              }`}>{i + 1}</div>
              <div className="flex-1">
                <p className="text-xs text-on-surface-variant">{t.quarter}</p>
                <p className="text-sm font-semibold text-on-surface">{t.milestone}</p>
              </div>
              {t.status === 'current' && <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">Now</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Simulation Matrix */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Simulation Matrix</h2>
        <p className="text-xs text-on-surface-variant">Career path fit based on your current profile and trajectory</p>
        <div className="space-y-3">
          {SCENARIOS.map(s => (
            <div key={s.path} className="flex items-center gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-on-surface">{s.path}</p>
                <p className="text-xs text-on-surface-variant">{s.desc}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <div className="flex-1 h-1.5 bg-surface-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${s.fit}%` }} />
                  </div>
                </div>
              </div>
              <span className={`text-sm font-bold shrink-0 ${s.fit >= 90 ? 'text-green-600' : 'text-amber-600'}`}>{s.fit}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Alumni Network */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <h2 className="font-display font-semibold text-on-surface">Alumni Network</h2>
        <div className="space-y-3">
          {ALUMNI.map(a => (
            <div key={a.name} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-primary">{a.initials}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-on-surface">{a.name}</p>
                <p className="text-xs text-on-surface-variant">{a.role}</p>
                <p className="text-xs text-ai font-semibold">{a.match}% match</p>
              </div>
              <Button size="sm" variant={a.connected ? 'outline' : 'default'} className="shrink-0">
                {a.connected ? 'Message' : 'Connect'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
