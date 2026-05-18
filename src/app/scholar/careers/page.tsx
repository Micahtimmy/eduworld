'use client'
import { Filter, Upload, Bookmark, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const PIPELINE = [
  { icon: '📤', stage: 'Applied', count: 12 },
  { icon: '👁️', stage: 'Under Review', count: 4 },
  { icon: '🎤', stage: 'Interviewing', count: 2 },
]

const LISTINGS = [
  { role: 'Data Science Intern', company: 'Meta', location: 'Menlo Park, CA (Hybrid)', match: 92, posted: '2 days ago', deadline: 'Oct 15' },
  { role: 'Actuarial Summer Analyst', company: 'Prudential Financial', location: 'Newark, NJ', match: 88, posted: '5 days ago', deadline: 'Nov 01' },
]

const MENTORS = [
  { name: 'Dr. Elena Rostova', title: 'VP Data Science, JPMorgan Chase', year: "'12" },
  { name: 'Marcus Chen, PhD', title: 'Senior Researcher, DeepMind', year: "'18" },
]

export default function ScholarCareersPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Career Gateway</h1>
          <p className="text-sm text-on-surface-variant mt-1">Discover internships, connect with mentors, and track your applications.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2"><Filter className="h-4 w-4" /> Filter</Button>
          <Button variant="outline" size="sm" className="gap-2"><Upload className="h-4 w-4" /> Upload Resume</Button>
        </div>
      </div>

      {/* Featured */}
      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-5 text-white space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          <span className="text-xs font-medium opacity-80">Highest AI Fit Score</span>
        </div>
        <h2 className="font-display font-bold text-xl">Quantitative Research Analyst Intern</h2>
        <p className="text-sm opacity-90">Citadel Securities · Chicago, IL · Summer 2025</p>
        <div className="flex flex-wrap gap-2">
          {['Python', 'Stochastic Calculus', 'Machine Learning'].map(t => (
            <span key={t} className="text-xs bg-white/20 px-2 py-0.5 rounded-full">{t}</span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold">Fit Score: 98%</span>
          <Button className="bg-white text-primary hover:bg-white/90">Apply Now</Button>
        </div>
      </div>

      {/* Pipeline */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Application Pipeline</h2>
          <button className="text-xs text-primary hover:underline">View Full Board →</button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {PIPELINE.map(p => (
            <div key={p.stage} className="bg-surface-low rounded-xl p-3 text-center">
              <span className="text-xl">{p.icon}</span>
              <p className="font-bold text-xl text-on-surface mt-1">{p.count}</p>
              <p className="text-xs text-on-surface-variant">{p.stage}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Listings */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <h2 className="font-display font-semibold text-on-surface">Recommended for Applied Mathematics</h2>
        {LISTINGS.map(l => (
          <div key={l.role} className="border border-outline-variant rounded-xl p-4 space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-on-surface">{l.role}</p>
                <p className="text-xs text-on-surface-variant">{l.company} · {l.location}</p>
                <p className="text-xs text-on-surface-variant">Posted {l.posted} · Deadline: {l.deadline}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-green-600">{l.match}% match</span>
                <button className="text-on-surface-variant hover:text-on-surface"><Bookmark className="h-4 w-4" /></button>
              </div>
            </div>
            <Button size="sm" className="w-full">Apply</Button>
          </div>
        ))}
        <button className="text-xs text-primary hover:underline">View All →</button>
      </div>

      {/* Mentor Network */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Mentor Network</h2>
          <button className="text-xs text-primary hover:underline">Browse Directory →</button>
        </div>
        <div className="space-y-3">
          {MENTORS.map(m => (
            <div key={m.name} className="flex items-center gap-3 p-3 rounded-xl bg-surface-low">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                {m.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-on-surface">{m.name}</p>
                <p className="text-xs text-on-surface-variant">{m.title}</p>
              </div>
              <span className="text-xs text-on-surface-variant">Alumni {m.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
