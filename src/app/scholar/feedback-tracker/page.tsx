'use client'
import { TrendingUp, ArrowRight, Sparkles, Filter, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LineChart } from '@/components/shared/charts/LineChart'

const SUBMISSIONS = [
  {
    icon: '🔬',
    title: 'Thermodynamics Lab Report',
    course: 'PHY301',
    submitted: 'Oct 12',
    score: 92,
    trend: '+4% vs avg',
    trendDir: 'up',
    instructor: 'Dr. H. Vance',
    tag: 'Data Analysis',
    aiReviewed: true,
    feedback: 'Excellent data analysis. The error propagation was handled flawlessly. Next time, expand slightly on theoretical implications...',
    acknowledged: false,
  },
  {
    icon: '💻',
    title: 'Data Structures Midterm',
    course: 'CSC205',
    submitted: 'Oct 05',
    score: 85,
    trend: 'Avg score',
    trendDir: 'flat',
    instructor: null,
    tag: 'Algorithms',
    aiReviewed: false,
    feedback: 'Solid understanding of tree traversals. You lost points on the dynamic programming section — review memoization techniques...',
    acknowledged: true,
  },
]

const CHART_DATA = [
  { label: 'W1', score: 80 },
  { label: 'W2', score: 85 },
  { label: 'W3', score: 75 },
  { label: 'W4', score: 92 },
]

export default function ScholarFeedbackTrackerPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Feedback Tracker</h1>
          <p className="text-sm text-on-surface-variant mt-1">Review recent assessments and monitor your academic trajectory.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1.5"><Filter className="h-3.5 w-3.5" /> Filter</Button>
          <Button variant="outline" size="sm" className="gap-1.5"><Download className="h-3.5 w-3.5" /> Export Report</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Submissions */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Recent Submissions</h2>
          {SUBMISSIONS.map(s => (
            <div key={s.title} className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{s.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-semibold text-sm text-on-surface">{s.title}</p>
                    <span className="text-xs bg-surface-low text-on-surface-variant px-2 py-0.5 rounded-full">{s.course}</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{s.tag}</span>
                    {s.aiReviewed && (
                      <span className="text-xs bg-ai/10 text-ai px-1.5 py-0.5 rounded font-semibold flex items-center gap-0.5">
                        <Sparkles className="h-2.5 w-2.5" /> AI Reviewed
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-on-surface-variant mt-0.5">Submitted {s.submitted}{s.instructor ? ` · ${s.instructor}` : ''}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-display font-bold text-2xl text-on-surface">{s.score}%</p>
                  <div className="flex items-center gap-1 justify-end mt-0.5">
                    {s.trendDir === 'up' ? <TrendingUp className="h-3 w-3 text-green-500" /> : <ArrowRight className="h-3 w-3 text-on-surface-variant" />}
                    <span className={`text-xs font-semibold ${s.trendDir === 'up' ? 'text-green-600' : 'text-on-surface-variant'}`}>{s.trend}</span>
                  </div>
                </div>
              </div>
              <blockquote className="text-xs text-on-surface-variant italic border-l-2 border-primary/30 pl-3">&quot;{s.feedback}&quot;</blockquote>
              <Button size="sm" variant={s.acknowledged ? 'outline' : 'default'} className="h-7 text-xs" disabled={s.acknowledged}>
                {s.acknowledged ? '✓ Acknowledged' : 'Acknowledge Feedback'}
              </Button>
            </div>
          ))}
        </div>

        {/* Right Panel */}
        <div className="space-y-4">
          {/* Grade Trend */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <h2 className="font-display font-semibold text-on-surface">Grade Trend</h2>
            <div className="h-32">
              <LineChart data={CHART_DATA} lines={[{ key: 'score', label: 'Score', color: '#6366f1' }]} />
            </div>
          </div>

          {/* AI Insight */}
          <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-ai" />
              <p className="font-semibold text-sm text-ai">EduWorld AI Insight</p>
            </div>
            <p className="text-xs text-on-surface-variant">You are excelling in <strong className="text-on-surface">Quantitative Analysis</strong>. Recurring gaps detected in <strong className="text-on-surface">Theoretical Documentation</strong> — consider detailed methodology sections.</p>
            <Button size="sm" className="w-full gap-1.5 bg-ai hover:bg-ai/90 text-white h-8 text-xs"><Sparkles className="h-3.5 w-3.5" /> Generate Study Plan</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
