'use client'
import { Download, FileText, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const STUDENTS = [
  { id: 's1', name: 'Emma Richardson', number: 'STU-001', avg: 91 },
  { id: 's2', name: 'Liam Nguyen', number: 'STU-002', avg: 84 },
  { id: 's3', name: 'Sofia Martinez', number: 'STU-003', avg: 78 },
  { id: 's4', name: 'James Okonkwo', number: 'STU-004', avg: 95 },
  { id: 's5', name: 'Priya Patel', number: 'STU-005', avg: 88 },
  { id: 's6', name: 'Marcus Chen', number: 'STU-006', avg: 73 },
  { id: 's7', name: 'Aisha Williams', number: 'STU-007', avg: 82 },
  { id: 's8', name: 'Noah Thompson', number: 'STU-008', avg: 90 },
  { id: 's9', name: 'Chloe Davis', number: 'STU-009', avg: 69 },
  { id: 's10', name: 'Ethan Brooks', number: 'STU-010', avg: 76 },
]

const PREVIEW_STUDENT = STUDENTS[0]

function gradeFromAvg(avg: number) {
  if (avg >= 90) return 'A'
  if (avg >= 80) return 'B'
  if (avg >= 70) return 'C'
  if (avg >= 60) return 'D'
  return 'F'
}

export default function ReportCardPage() {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set(STUDENTS.map(s => s.id)))
  const [aiComments, setAiComments] = useState(true)
  const [includeAttendance, setIncludeAttendance] = useState(true)
  const [includeSubjects, setIncludeSubjects] = useState(true)
  const [selectedClass, setSelectedClass] = useState('AP Physics — Period 1')
  const [selectedTerm, setSelectedTerm] = useState('Term 1 2024–25')

  const toggleAll = () => {
    if (selectedIds.size === STUDENTS.length) {
      setSelectedIds(new Set())
    } else {
      setSelectedIds(new Set(STUDENTS.map(s => s.id)))
    }
  }

  const toggle = (id: string) => {
    const next = new Set(selectedIds)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    setSelectedIds(next)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Report Card Generator</h1>
          <p className="text-sm text-on-surface-variant mt-1">Generate, preview, and download term report cards</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left — Controls */}
        <div className="lg:col-span-1 space-y-4">
          {/* Class & Term selectors */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <p className="text-sm font-semibold text-on-surface">Report Settings</p>
            <div className="space-y-2">
              <label className="text-xs text-on-surface-variant">Class</label>
              <select
                value={selectedClass}
                onChange={e => setSelectedClass(e.target.value)}
                className="w-full bg-surface-low border border-outline-variant rounded-xl px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option>AP Physics — Period 1</option>
                <option>World History — Period 3</option>
                <option>World History — Period 5</option>
                <option>Chemistry — Period 2</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs text-on-surface-variant">Term</label>
              <select
                value={selectedTerm}
                onChange={e => setSelectedTerm(e.target.value)}
                className="w-full bg-surface-low border border-outline-variant rounded-xl px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option>Term 1 2024–25</option>
                <option>Term 2 2024–25</option>
                <option>Term 3 2024–25</option>
              </select>
            </div>
          </div>

          {/* Options */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <p className="text-sm font-semibold text-on-surface">Generate Options</p>
            {[
              { label: 'AI-drafted comments', sub: 'Personalised summary per student', state: aiComments, set: setAiComments },
              { label: 'Include attendance', sub: 'Days present / absent / late', state: includeAttendance, set: setIncludeAttendance },
              { label: 'Include all subjects', sub: 'Scores per subject taught', state: includeSubjects, set: setIncludeSubjects },
            ].map(opt => (
              <div key={opt.label} className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-on-surface">{opt.label}</p>
                  <p className="text-xs text-on-surface-variant">{opt.sub}</p>
                </div>
                <button
                  onClick={() => opt.set(v => !v)}
                  className={`relative w-10 h-6 rounded-full transition-colors ${opt.state ? 'bg-primary' : 'bg-surface-high'}`}
                >
                  <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${opt.state ? 'translate-x-5' : 'translate-x-1'}`} />
                </button>
              </div>
            ))}
            {aiComments && (
              <div className="flex items-center gap-2 text-xs text-ai bg-ai/5 rounded-xl p-2 border border-ai/20">
                <Sparkles className="h-3.5 w-3.5 shrink-0" />
                <span>AI comments require review before sending to parents</span>
              </div>
            )}
          </div>

          {/* Student List */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-on-surface">Students</p>
              <button onClick={toggleAll} className="text-xs text-primary hover:underline">
                {selectedIds.size === STUDENTS.length ? 'Deselect all' : 'Select all'}
              </button>
            </div>
            <div className="space-y-1 max-h-52 overflow-y-auto">
              {STUDENTS.map(s => (
                <label key={s.id} className="flex items-center gap-3 py-1.5 cursor-pointer hover:bg-surface-low rounded-lg px-2 transition-colors">
                  <input
                    type="checkbox"
                    checked={selectedIds.has(s.id)}
                    onChange={() => toggle(s.id)}
                    className="accent-primary rounded"
                  />
                  <span className="text-sm text-on-surface flex-1">{s.name}</span>
                  <span className={`text-xs font-bold ${gradeFromAvg(s.avg) === 'A' ? 'text-green-600' : gradeFromAvg(s.avg) === 'B' ? 'text-blue-600' : 'text-amber-600'}`}>
                    {gradeFromAvg(s.avg)}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <Button size="lg" className="w-full gap-2">
            <FileText className="h-4 w-4" /> Generate Report Cards ({selectedIds.size})
          </Button>

          {/* Download Options */}
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1 gap-1.5">
              <Download className="h-3.5 w-3.5" /> PDF
            </Button>
            <Button variant="outline" size="sm" className="flex-1 gap-1.5">
              <Download className="h-3.5 w-3.5" /> Bulk ZIP
            </Button>
          </div>
        </div>

        {/* Right — Preview */}
        <div className="lg:col-span-2">
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-6 space-y-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-on-surface">Preview — {PREVIEW_STUDENT.name}</p>
              <span className="text-xs text-on-surface-variant">Sample only</span>
            </div>

            {/* Mock Report Card */}
            <div className="border border-outline-variant rounded-xl overflow-hidden">
              {/* Header */}
              <div className="bg-primary px-6 py-4 text-white">
                <p className="font-display font-bold text-lg">EduWorld Academy</p>
                <p className="text-sm opacity-80">Student Report Card — {selectedTerm}</p>
              </div>

              {/* Student Info */}
              <div className="p-5 space-y-4">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-xs text-on-surface-variant">Student Name</p>
                    <p className="font-semibold text-on-surface">{PREVIEW_STUDENT.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant">Student Number</p>
                    <p className="font-semibold text-on-surface">{PREVIEW_STUDENT.number}</p>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant">Class</p>
                    <p className="font-semibold text-on-surface">{selectedClass}</p>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant">Overall Grade</p>
                    <p className="font-display font-bold text-xl text-primary">{gradeFromAvg(PREVIEW_STUDENT.avg)} ({PREVIEW_STUDENT.avg}%)</p>
                  </div>
                </div>

                {includeSubjects && (
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-on-surface">Subject Scores</p>
                    {['Physics', 'Mathematics', 'English', 'History'].map((subj, i) => {
                      const score = [91, 87, 94, 89][i]
                      return (
                        <div key={subj} className="flex items-center gap-3">
                          <p className="text-xs text-on-surface w-24">{subj}</p>
                          <div className="flex-1 h-1.5 bg-surface-low rounded-full">
                            <div className="h-full bg-primary rounded-full" style={{ width: `${score}%` }} />
                          </div>
                          <p className="text-xs font-semibold text-on-surface w-8 text-right">{score}%</p>
                        </div>
                      )
                    })}
                  </div>
                )}

                {includeAttendance && (
                  <div className="grid grid-cols-3 gap-3 text-center">
                    {[{ label: 'Days Present', value: '48' }, { label: 'Days Absent', value: '2' }, { label: 'Days Late', value: '1' }].map(a => (
                      <div key={a.label} className="bg-surface-low rounded-xl p-3">
                        <p className="font-display font-bold text-xl text-on-surface">{a.value}</p>
                        <p className="text-xs text-on-surface-variant">{a.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {aiComments && (
                  <div className="bg-ai/5 border border-ai/20 rounded-xl p-3 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-ai" />
                      <p className="text-xs font-semibold text-on-surface">Teacher Comment (AI Draft)</p>
                    </div>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Emma has demonstrated exceptional commitment this term. Her analytical skills are particularly evident in written work, consistently producing well-structured arguments with strong use of evidence. She would benefit from continuing to challenge herself with the extension material provided.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
