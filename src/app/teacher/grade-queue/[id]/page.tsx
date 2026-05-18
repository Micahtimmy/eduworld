'use client'
import Link from 'next/link'
import { ArrowLeft, Sparkles, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { toast } from 'sonner'
import { notifyAssignmentGraded } from '@/lib/crossRoleEvents'

const SUBMISSION = {
  student: 'Emma Richardson',
  assignment: 'Industrial Revolution Essay',
  class: 'World History — Period 3',
  dueDate: 'Oct 18, 2024',
  submittedAt: 'Oct 18, 2024 at 11:42 PM',
  content: `The Industrial Revolution, which began in Britain during the late 18th century and spread throughout Europe and North America in the 19th century, fundamentally transformed not only the economic landscape but also the social fabric of societies that underwent industrialisation.

The shift from agrarian economies to industrial manufacturing was driven by a confluence of factors: abundant coal and iron resources in Britain, a stable political environment that protected private property, accumulated capital from colonial trade, and a growing population that provided both labour and markets.

Perhaps the most profound change was the emergence of the working class as a distinct social group. Before industrialisation, most people lived in rural communities, working as farmers or craftspeople. The factory system concentrated workers in urban centres, creating new forms of social organisation, community, and ultimately class consciousness. Friedrich Engels' observations in Manchester during the 1840s documented the stark contrast between the prosperity of industrial owners and the squalor endured by factory workers.

However, the Industrial Revolution was not without its long-term benefits. Technological innovations — the steam engine, mechanised textile production, the railways — dramatically increased productive capacity and laid the foundations for modern economic growth. Real wages, though depressed during the initial transition, began to rise significantly from the 1840s onwards as productivity gains spread throughout the economy.

The environmental consequences, while not fully appreciated at the time, were enormous. Industrial cities choked with coal smoke. Rivers polluted by chemical runoff from factories and dyes. These consequences shaped environmental policy for the following two centuries.

In conclusion, the Industrial Revolution represents a period of extraordinary economic transformation accompanied by significant social disruption. Its legacy continues to shape contemporary debates about the relationship between economic growth, inequality, and environmental sustainability.`,
  wordCount: 312,
  aiSuggestion: {
    criteria: [
      { name: 'Historical Accuracy', score: 9, max: 10, note: 'Dates and facts are accurate. Good use of Engels as a primary source reference.' },
      { name: 'Argument Development', score: 8, max: 10, note: 'Clear thesis with supporting evidence. Transition to benefits paragraph could be stronger.' },
      { name: 'Use of Evidence', score: 7, max: 10, note: 'Good range of evidence but could benefit from more specific statistics or economic data.' },
      { name: 'Structure & Clarity', score: 9, max: 10, note: 'Well-organised paragraphs with clear topic sentences throughout.' },
      { name: 'Conclusion', score: 8, max: 10, note: 'Conclusion ties themes together effectively and shows awareness of long-term legacy.' },
    ],
    strengths: 'Strong contextual understanding. Demonstrates awareness of multiple perspectives (economic, social, environmental). Writing style is mature and confident.',
    improvements: 'Would benefit from specific quantitative data (e.g., wage statistics, urbanisation rates). The environmental section feels slightly rushed and could be developed further.',
  },
}

export default function SubmissionGraderPage() {
  const [briefOpen, setBriefOpen] = useState(false)
  const [criteriaScores, setCriteriaScores] = useState<number[]>(
    SUBMISSION.aiSuggestion.criteria.map(c => c.score)
  )
  const [feedback, setFeedback] = useState(
    `Well-written essay, Emma. Your contextual awareness of the Industrial Revolution's social impacts is impressive, particularly your reference to Engels. Consider adding more quantitative evidence to strengthen your argument. The environmental section deserves more depth — this is a rapidly growing area of historical scholarship.`
  )

  const totalScore = criteriaScores.reduce((a, b) => a + b, 0)
  const maxScore = SUBMISSION.aiSuggestion.criteria.reduce((a, c) => a + c.max, 0)

  function handlePublishGrade() {
    notifyAssignmentGraded({
      assignmentTitle: SUBMISSION.assignment,
      score: totalScore,
      maxScore,
      feedback: feedback,
      studentRole: 'achiever',
    })
    toast.success('Grade published — student and parent notified')
  }

  return (
    <div className="p-4 md:p-6 space-y-4">
      {/* Top bar */}
      <div className="flex items-center gap-3">
        <Link href="/teacher/grade-queue">
          <button className="flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-on-surface">
            <ArrowLeft className="h-4 w-4" /> Back to queue
          </button>
        </Link>
        <div className="ml-auto text-right">
          <p className="text-sm font-semibold text-on-surface">{SUBMISSION.student}</p>
          <p className="text-xs text-on-surface-variant">{SUBMISSION.assignment}</p>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left — Submission */}
        <div className="flex-1 space-y-4">
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h2 className="font-display font-semibold text-on-surface">{SUBMISSION.assignment}</h2>
                <p className="text-xs text-on-surface-variant mt-0.5">{SUBMISSION.class} · Submitted {SUBMISSION.submittedAt}</p>
              </div>
              <span className="text-xs text-on-surface-variant">{SUBMISSION.wordCount} words</span>
            </div>
            <div className="prose prose-sm max-w-none">
              {SUBMISSION.content.split('\n\n').map((para, i) => (
                <p key={i} className="text-sm text-on-surface leading-relaxed mb-3">{para}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Grading Panel */}
        <div className="lg:w-96 space-y-4 shrink-0">
          {/* Assignment Brief (collapsible) */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
            <button
              onClick={() => setBriefOpen(v => !v)}
              className="w-full flex items-center justify-between p-4 text-sm font-semibold text-on-surface"
            >
              Assignment Brief
              {briefOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            {briefOpen && (
              <div className="px-4 pb-4 text-xs text-on-surface-variant space-y-1">
                <p>Write a 250–350 word essay on the key social and economic impacts of the Industrial Revolution. Include at least two pieces of specific evidence. Consider both short-term disruptions and long-term benefits.</p>
                <p className="mt-2"><strong className="text-on-surface">Due:</strong> {SUBMISSION.dueDate}</p>
                <p><strong className="text-on-surface">Max score:</strong> {maxScore} points</p>
              </div>
            )}
          </div>

          {/* AI Grade Suggestion */}
          <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-ai" />
              <p className="text-sm font-semibold text-on-surface">AI Grade Suggestion</p>
            </div>

            <div className="space-y-2">
              {SUBMISSION.aiSuggestion.criteria.map((c, i) => (
                <div key={c.name} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-on-surface font-medium">{c.name}</span>
                    <span className="text-ai font-semibold">{c.score}/{c.max}</span>
                  </div>
                  <p className="text-xs text-on-surface-variant">{c.note}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-ai/20 pt-3 space-y-2">
              <div>
                <p className="text-xs font-semibold text-on-surface">Strengths</p>
                <p className="text-xs text-on-surface-variant mt-0.5">{SUBMISSION.aiSuggestion.strengths}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-on-surface">Areas to improve</p>
                <p className="text-xs text-on-surface-variant mt-0.5">{SUBMISSION.aiSuggestion.improvements}</p>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 rounded-xl p-2">
              <AlertCircle className="h-3.5 w-3.5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-700">Teacher review required before publishing. AI suggestions are a starting point only.</p>
            </div>
          </div>

          {/* Manual Grade */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-on-surface">Your Grade</p>
              <div className="flex items-baseline gap-1">
                <span className="font-display font-bold text-2xl text-primary">{totalScore}</span>
                <span className="text-sm text-on-surface-variant">/ {maxScore}</span>
              </div>
            </div>

            <div className="space-y-4">
              {SUBMISSION.aiSuggestion.criteria.map((c, i) => (
                <div key={c.name} className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-on-surface">{c.name}</span>
                    <span className="font-semibold text-on-surface">{criteriaScores[i]}/{c.max}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={c.max}
                    value={criteriaScores[i]}
                    onChange={e => {
                      const newScores = [...criteriaScores]
                      newScores[i] = Number(e.target.value)
                      setCriteriaScores(newScores)
                    }}
                    className="w-full accent-primary"
                  />
                </div>
              ))}
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-on-surface">Feedback to student</label>
              <textarea
                value={feedback}
                onChange={e => setFeedback(e.target.value)}
                rows={5}
                className="w-full bg-surface-low border border-outline-variant rounded-xl p-3 text-xs text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
            </div>

            <div className="flex gap-2 pt-1">
              <Button variant="outline" size="sm" className="flex-1">Save Draft</Button>
              <Button variant="primary" size="sm" className="flex-1" onClick={handlePublishGrade}>Publish Grade</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
