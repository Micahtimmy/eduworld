'use client'
import { Sparkles, CheckCircle, Edit, ChevronRight, Plus, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const INTERVENTIONS = [
  {
    initials: 'JD',
    name: 'Julianna Drabek',
    tags: ['Lags in Geometry', 'Top 5% Visual Learner'],
    aiLabel: 'AI-SUGGESTED PATH: Visual Spatial Reinforcement',
    aiDetail: 'Switch to "Architectural Geometry Labs" (Modules 4–6). Predicted 24% increase in concept retention.',
    aiIcon: '🧠',
  },
  {
    initials: 'AM',
    name: 'Amir Mansoor',
    tags: ['Accelerated Pace', 'Advanced Logic'],
    aiLabel: 'ENRICHMENT SUGGESTION: Calculus Foundations Preview',
    aiDetail: 'Completed modules 3 weeks early. Recommends "Bridge to Calculus" interactive simulations.',
    aiIcon: '⚡',
  },
]

const STATUS = [
  { label: 'On Track', count: 18, color: 'bg-green-100 text-green-700' },
  { label: 'Modified Path', count: 7, color: 'bg-amber-100 text-amber-700' },
  { label: 'Awaiting Review', count: 3, color: 'bg-red-100 text-red-700' },
]

export default function TeacherAiRecommendationsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-on-surface-variant">Admin › Recommendation Engine</p>
          <h1 className="font-display font-bold text-2xl text-on-surface mt-1">AI Recommendation Engine</h1>
          <p className="text-sm text-on-surface-variant mt-1">Review and personalize AI-suggested growth paths for your students.</p>
        </div>
        <select className="px-3 py-2 text-sm bg-surface-low border border-outline-variant rounded-xl outline-none">
          <option>AP Mathematics - Section B</option>
          <option>Algebra Fundamentals</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-4">
          {/* High-Priority Interventions */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-ai" />
                <h2 className="font-display font-semibold text-on-surface">High-Priority Interventions</h2>
              </div>
              <span className="text-xs text-on-surface-variant">Updated 5m ago</span>
            </div>
            <p className="text-xs text-on-surface-variant">AI detected <strong className="text-on-surface">3 students</strong> requiring immediate resource adjustment.</p>
            <div className="space-y-4">
              {INTERVENTIONS.map(s => (
                <div key={s.name} className="p-4 bg-surface-low rounded-xl space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">{s.initials}</div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-on-surface">{s.name}</p>
                      <div className="flex flex-wrap gap-1 mt-0.5">
                        {s.tags.map(t => (
                          <span key={t} className="text-xs bg-surface-high text-on-surface-variant px-2 py-0.5 rounded-full">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-1.5">
                      <Button size="sm" variant="outline" className="h-7 text-xs gap-1"><Edit className="h-3 w-3" /> Modify</Button>
                      <Button size="sm" className="h-7 text-xs gap-1"><CheckCircle className="h-3 w-3" /> Approve Path</Button>
                    </div>
                  </div>
                  <div className="bg-ai/5 border border-ai/20 rounded-xl p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Sparkles className="h-3 w-3 text-ai" />
                      <span className="text-xs font-semibold text-ai">{s.aiLabel}</span>
                    </div>
                    <p className="text-xs text-on-surface-variant">{s.aiDetail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Global Resource Library */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">📚</div>
            <div className="flex-1">
              <p className="font-semibold text-sm text-on-surface">Global Resource Library</p>
              <p className="text-xs text-on-surface-variant">12 new trending math resources from Top Educators in the EduWorld network.</p>
            </div>
            <button className="text-xs text-primary hover:underline flex items-center gap-1">Browse Recommended <ChevronRight className="h-3 w-3" /></button>
          </div>

          {/* Cohort Performance */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              <p className="font-semibold text-sm text-on-surface">Cohort Performance</p>
            </div>
            <p className="text-xs text-on-surface-variant">Class 12-B retention up <strong className="text-green-600">15%</strong> since AI recommendations enabled.</p>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-on-surface-variant">Target Completion</span>
                <span className="font-bold text-on-surface">75%</span>
              </div>
              <div className="h-2 bg-surface-high rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '75%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-4">
          {/* Student Flow */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <h2 className="font-display font-semibold text-on-surface">Student Flow Status</h2>
            <div className="space-y-2">
              {STATUS.map(s => (
                <div key={s.label} className="flex items-center justify-between p-3 bg-surface-low rounded-xl">
                  <span className="text-sm text-on-surface">{s.label}</span>
                  <span className={`text-sm font-bold px-2 py-0.5 rounded-full ${s.color}`}>{s.count}</span>
                </div>
              ))}
            </div>
            <button className="text-xs text-primary hover:underline">View All Students →</button>
          </div>

          {/* Model Precision */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <h2 className="font-display font-semibold text-on-surface">Model Precision</h2>
            </div>
            <p className="font-display font-bold text-3xl text-on-surface">94%</p>
            <p className="text-xs text-on-surface-variant">accuracy for this class cohort</p>
          </div>

          {/* Custom Recommendation */}
          <button className="w-full p-4 bg-primary/5 border border-primary/20 rounded-2xl flex items-center gap-2 hover:bg-primary/10 transition-colors">
            <Plus className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">New Custom Recommendation</span>
          </button>

          {/* Premium Upgrade */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">🏆</span>
              <p className="font-semibold text-sm text-amber-900">EduWorld Gold</p>
            </div>
            <p className="text-xs text-amber-800">Upgrade for real-time biometric sentiment tracking and automated parent report generation.</p>
            <p className="text-xs text-amber-700">Recommended for 800+ student departments.</p>
            <Button size="sm" className="w-full h-7 text-xs bg-amber-500 hover:bg-amber-600 text-white">Go Premium</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
