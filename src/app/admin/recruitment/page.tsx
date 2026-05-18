'use client'
import { CheckCircle, Clock, AlertTriangle, MoreHorizontal, UserPlus } from 'lucide-react'
import { Button } from '@/components/ui/button'

const APPLIED = [
  { initials: 'ER', name: 'Dr. Elena Rostova', role: 'Physics Professor', match: 94, tags: ['STEM', 'PHD'], dbs: 'PENDING', dbsColor: 'bg-amber-100 text-amber-700', desc: 'Extensive research in quantum mechanics with 12+ years of Ivy League teaching experience...' },
  { initials: 'MT', name: 'Marcus Thorne', role: 'Digital Arts Lead', match: 88, tags: ['ART'], dbs: 'REQUIRED', dbsColor: 'bg-orange-100 text-orange-700', desc: 'Expert in immersive VR education and industry-standard creative suite instruction...' },
]
const INTERVIEWING = [
  { initials: 'SJ', name: 'Sarah Jenkins', role: 'History & Humanities', match: 98, dbs: 'VERIFIED', dbsColor: 'bg-green-100 text-green-700', stage: 3, stages: 4, event: 'TODAY, 14:00' },
]
const VERIFICATION = [
  { initials: 'LG', name: 'Prof. Liam Gallagher', role: 'Head of Mathematics', match: 92, ref: 'REF: EW-4492-X', checks: [{ label: 'Global Background Check', done: true }, { label: 'DBS Enhanced Disclosure', done: false }] },
]

export default function AdminRecruitmentPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-on-surface-variant">Recruitment › Educator Pipeline</p>
          <h1 className="font-display font-bold text-2xl text-on-surface mt-1">Staff Onboarding & Recruitment</h1>
          <p className="text-sm text-on-surface-variant mt-1">Manage global talent acquisition with EduWorld AI Match Intelligence.</p>
        </div>
        <Button className="gap-2"><UserPlus className="h-4 w-4" /> Invite New Educator</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
        {/* Applied */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="font-display font-semibold text-sm text-on-surface">Applied</h3>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">4</span>
            </div>
            <button className="text-on-surface-variant hover:text-on-surface"><MoreHorizontal className="h-4 w-4" /></button>
          </div>
          <div className="space-y-3">
            {APPLIED.map(c => (
              <div key={c.name} className="bg-surface-low rounded-xl p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">{c.initials}</div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-on-surface">{c.name}</p>
                    <p className="text-xs text-on-surface-variant">{c.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs bg-ai/10 text-ai px-2 py-0.5 rounded-full font-bold">{c.match}% MATCH</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${c.dbsColor}`}>DBS: {c.dbs}</span>
                </div>
                <p className="text-xs text-on-surface-variant truncate">{c.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {c.tags.map(t => <span key={t} className="text-xs bg-surface-high text-on-surface-variant px-1.5 py-0.5 rounded font-semibold">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interviewing */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="font-display font-semibold text-sm text-on-surface">Interviewing</h3>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">2</span>
            </div>
            <button className="text-on-surface-variant hover:text-on-surface"><MoreHorizontal className="h-4 w-4" /></button>
          </div>
          {INTERVIEWING.map(c => (
            <div key={c.name} className="bg-surface-low rounded-xl p-3 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">{c.initials}</div>
                <div>
                  <p className="text-sm font-semibold text-on-surface">{c.name}</p>
                  <p className="text-xs text-on-surface-variant">{c.role}</p>
                </div>
              </div>
              <span className="text-xs bg-ai/10 text-ai px-2 py-0.5 rounded-full font-bold">{c.match}% MATCH</span>
              <div>
                <p className="text-xs text-on-surface-variant mb-1">INTERVIEW STAGE {c.stage} OF {c.stages}</p>
                <div className="flex gap-1">
                  {Array.from({ length: c.stages }).map((_, i) => (
                    <div key={i} className={`h-1.5 flex-1 rounded-full ${i < c.stage ? 'bg-primary' : 'bg-surface-high'}`} />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${c.dbsColor}`}>DBS: {c.dbs}</span>
                <span className="text-xs font-semibold text-primary">{c.event}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verification */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="font-display font-semibold text-sm text-on-surface">Verification</h3>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">3</span>
            </div>
            <button className="text-on-surface-variant hover:text-on-surface"><MoreHorizontal className="h-4 w-4" /></button>
          </div>
          {VERIFICATION.map(c => (
            <div key={c.name} className="bg-surface-low rounded-xl p-3 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">{c.initials}</div>
                <div>
                  <p className="text-sm font-semibold text-on-surface">{c.name}</p>
                  <p className="text-xs text-on-surface-variant">{c.role}</p>
                </div>
              </div>
              <span className="text-xs bg-ai/10 text-ai px-2 py-0.5 rounded-full font-bold">{c.match}% MATCH</span>
              <div className="space-y-1">
                {c.checks.map(ch => (
                  <div key={ch.label} className="flex items-center gap-2 text-xs">
                    {ch.done ? <CheckCircle className="h-3.5 w-3.5 text-green-500" /> : <Clock className="h-3.5 w-3.5 text-amber-500" />}
                    <span className={ch.done ? 'text-on-surface' : 'text-on-surface-variant'}>{ch.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-on-surface-variant font-mono">{c.ref}</p>
            </div>
          ))}
        </div>

        {/* Contracted */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="font-display font-semibold text-sm text-on-surface">Contracted</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">8</span>
            </div>
            <button className="text-on-surface-variant hover:text-on-surface"><MoreHorizontal className="h-4 w-4" /></button>
          </div>
          <div className="border-2 border-dashed border-outline-variant rounded-xl p-6 text-center">
            <AlertTriangle className="h-5 w-5 text-on-surface-variant mx-auto mb-2" />
            <p className="text-xs text-on-surface-variant">DRAG COMPLETED ONBOARDING HERE</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-3">
            <p className="text-xs text-green-700 font-semibold">Compliance: 98.2% (+2.4%)</p>
            <p className="text-xs text-green-600 mt-0.5">All active recruitments meet Tier-1 Safety Standards.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
