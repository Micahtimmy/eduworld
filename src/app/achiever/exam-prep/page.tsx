'use client'
import { Sparkles, TrendingUp, TrendingDown, FileText, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

const STRENGTHS = [
  { label: 'Kinematics', pct: 92 },
  { label: "Newton's Laws", pct: 88 },
]
const FOCUS = [
  { label: 'Rotational Inertia', pct: 45 },
  { label: 'SHM', pct: 52 },
]
const SYLLABUS = [
  { topic: 'Kinematics', pct: 92 },
  { topic: "Newton's Laws of Motion", pct: 88 },
  { topic: 'Work, Energy, and Power', pct: 60 },
  { topic: 'Systems of Particles and Linear Momentum', pct: 75 },
]
const PAPERS = [
  { title: '2023 Official FRQ', type: 'College Board · 45 mins' },
  { title: '2022 Full Practice Exam', type: 'Multiple Choice · 90 mins' },
  { title: '2021 Official FRQ', type: 'College Board · 45 mins' },
]

export default function AchieverExamPrepPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Hero Card */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">Advanced Placement</span>
          <span className="text-xs text-on-surface-variant flex items-center gap-1">📅 42 Days Left</span>
        </div>
        <h1 className="font-display font-bold text-2xl text-on-surface">AP Physics C: Mechanics</h1>
        <p className="text-sm text-on-surface-variant">Master every concept for a perfect score. Your readiness is building fast.</p>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-on-surface">Overall Readiness</p>
            <p className="text-sm font-bold text-primary">65%</p>
          </div>
          <div className="h-2 bg-surface-high rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: '65%' }} />
          </div>
          <p className="text-xs text-green-600 font-semibold">✓ On track for Target</p>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-ai" />
          <h2 className="font-display font-semibold text-on-surface">EduWorld AI Insights</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-1 text-xs font-semibold text-green-600">
              <TrendingUp className="h-3.5 w-3.5" /> Strengths
            </div>
            {STRENGTHS.map(s => (
              <div key={s.label} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-on-surface">{s.label}</span>
                  <span className="font-bold text-green-600">{s.pct}%</span>
                </div>
                <div className="h-1.5 bg-surface-high rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-1 text-xs font-semibold text-red-500">
              <TrendingDown className="h-3.5 w-3.5" /> Focus Areas
            </div>
            {FOCUS.map(f => (
              <div key={f.label} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-on-surface">{f.label}</span>
                  <span className="font-bold text-red-500">{f.pct}%</span>
                </div>
                <div className="h-1.5 bg-surface-high rounded-full overflow-hidden">
                  <div className="h-full bg-red-400 rounded-full" style={{ width: `${f.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button className="gap-2 bg-ai hover:bg-ai/90"><Sparkles className="h-4 w-4" /> Generate Custom Practice Set</Button>
      </div>

      {/* Stats Row */}
      <div className="flex gap-4">
        <div className="flex-1 bg-surface-lowest rounded-2xl border border-outline-variant p-4 flex items-center gap-3">
          <span className="text-2xl">📜</span>
          <div>
            <p className="font-display font-bold text-2xl text-on-surface">12</p>
            <p className="text-xs text-on-surface-variant">Past Papers Completed</p>
          </div>
          <button className="ml-auto text-xs text-primary hover:underline">Review Mistakes →</button>
        </div>
        <div className="flex-1 bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-1">
          <p className="text-xs font-semibold text-on-surface-variant">Recent Achievements</p>
          <div className="flex gap-1">
            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">🏆 Kinematics Master</span>
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">🔥 3-Day Streak</span>
          </div>
        </div>
      </div>

      {/* Syllabus Mastery */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Syllabus Mastery</h2>
          <button className="text-xs text-primary hover:underline">Expand All</button>
        </div>
        <div className="space-y-3">
          {SYLLABUS.map(s => (
            <div key={s.topic} className="space-y-1.5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-on-surface">{s.topic}</p>
                <p className="text-sm font-bold text-on-surface">{s.pct}%</p>
              </div>
              <div className="h-1.5 bg-surface-high rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${s.pct >= 80 ? 'bg-green-500' : s.pct >= 60 ? 'bg-primary' : 'bg-amber-500'}`} style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Papers */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <h2 className="font-display font-semibold text-on-surface">Past Papers</h2>
        <div className="space-y-2">
          {PAPERS.map(p => (
            <div key={p.title} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
              <FileText className="h-5 w-5 text-on-surface-variant shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-on-surface">{p.title}</p>
                <p className="text-xs text-on-surface-variant">{p.type}</p>
              </div>
              <button className="text-on-surface-variant hover:text-primary"><Download className="h-4 w-4" /></button>
            </div>
          ))}
        </div>
        <button className="text-xs text-primary hover:underline">View Archive</button>
      </div>
    </div>
  )
}
