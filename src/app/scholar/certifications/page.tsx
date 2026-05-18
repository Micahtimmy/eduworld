'use client'
import { Sparkles, Plus, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const COMPETENCIES = [
  { icon: '📊', skill: 'Advanced Predictive Analytics', issuer: 'Oxford AI Institute', level: 'Expert', pct: 94 },
  { icon: '📦', skill: 'Lean Supply Chain Mgmt.', issuer: 'Peer-endorsed & Exam', level: 'Advanced', pct: 88 },
  { icon: '🌐', skill: 'Cross-Border Compliance', issuer: 'Mandarin/English trade law', level: 'Bilingual', pct: 92 },
  { icon: '📈', skill: 'Strategic Negotiation', issuer: 'Harvard case simulations', level: 'Intermediate', pct: 76 },
]

const CREDENTIALS = [
  { title: 'Google Data Pro', issuer: 'Google', date: 'Aug 2023', status: 'Active', statusColor: 'bg-green-100 text-green-700' },
  { title: 'Lean Six Sigma', issuer: 'IASSC', date: 'Sep 2023', status: 'Active', statusColor: 'bg-green-100 text-green-700' },
  { title: 'Global Trade Law', issuer: 'WTO Institute', date: 'Oct 2023', status: 'Active', statusColor: 'bg-green-100 text-green-700' },
  { title: 'AWS Cloud Practitioner', issuer: 'Amazon', date: '70% Complete', status: 'In Progress', statusColor: 'bg-amber-100 text-amber-700' },
]

const ROADMAP = [
  { icon: '📉', title: 'Advanced Python for Supply Chain', priority: 'High Priority', timeline: 'Q1 2024' },
  { icon: '🌍', title: 'IATA Global Logistics Professional', priority: 'Prerequisite Required', timeline: 'Q3 2024' },
]

export default function ScholarCertificationsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Professional Competency & Certifications</h1>
          <p className="text-sm text-on-surface-variant mt-1">Alex Chen · MSc Global Logistics & Supply Chain · University of London</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-semibold">
            <span>⭐</span> Top 5% Globally
          </div>
          <Button variant="outline" size="sm" className="gap-1.5">Connect Recruiter</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Verified Competencies */}
        <div className="lg:col-span-2 bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Verified Competencies</h2>
          <div className="space-y-4">
            {COMPETENCIES.map(c => (
              <div key={c.skill} className="p-4 bg-surface-low rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{c.icon}</span>
                    <div>
                      <p className="font-semibold text-sm text-on-surface">{c.skill}</p>
                      <p className="text-xs text-on-surface-variant">{c.issuer}</p>
                    </div>
                  </div>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">{c.level}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-on-surface-variant">Proficiency</span>
                    <span className="font-bold text-on-surface">{c.pct}%</span>
                  </div>
                  <div className="h-2 bg-surface-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${c.pct}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="space-y-4">
          {/* AI Career Path */}
          <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-ai" />
              <p className="font-semibold text-sm text-ai">AI Career Path</p>
            </div>
            <p className="text-xs text-on-surface-variant">You are aligned for <strong className="text-on-surface">Predictive Logistics</strong> and high-growth E-commerce Unicorn pathways. A Python certification would increase your visibility by <strong className="text-on-surface">40%</strong>.</p>
            <Button size="sm" className="w-full gap-1.5 bg-ai hover:bg-ai/90 text-white"><Sparkles className="h-3.5 w-3.5" /> Optimize Profile</Button>
          </div>

          {/* Integration */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <h2 className="font-display font-semibold text-on-surface">Integration Status</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-sm font-bold text-blue-700">in</div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-on-surface">LinkedIn Sync</p>
                  <p className="text-xs text-green-600">Last synced 2h ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-surface-high flex items-center justify-center">📤</div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-on-surface">Public Portfolio</p>
                  <p className="text-xs text-amber-600">Pending Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Credential Showcase */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Credential Showcase</h2>
          <button className="text-xs text-primary hover:underline flex items-center gap-1">View All Credentials <ChevronRight className="h-3 w-3" /></button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {CREDENTIALS.map(c => (
            <div key={c.title} className={`p-4 rounded-xl border text-center space-y-2 ${c.status === 'In Progress' ? 'bg-surface-high border-outline-variant opacity-60' : 'bg-surface-low border-outline-variant'}`}>
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-xl mx-auto">🏅</div>
              <p className="text-xs font-semibold text-on-surface">{c.title}</p>
              <p className="text-xs text-on-surface-variant">{c.issuer}</p>
              <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${c.statusColor}`}>{c.date}</span>
            </div>
          ))}
        </div>
        <button className="text-xs text-primary hover:underline flex items-center gap-1"><Plus className="h-3.5 w-3.5" /> Add Certificate</button>
      </div>

      {/* Certification Roadmap */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <h2 className="font-display font-semibold text-on-surface">Certification Roadmap</h2>
        <div className="space-y-3">
          {ROADMAP.map(r => (
            <div key={r.title} className="flex items-center gap-4 p-4 bg-surface-low rounded-xl">
              <span className="text-xl">{r.icon}</span>
              <div className="flex-1">
                <p className="font-semibold text-sm text-on-surface">{r.title}</p>
                <p className="text-xs text-on-surface-variant">{r.priority}</p>
              </div>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">{r.timeline}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
