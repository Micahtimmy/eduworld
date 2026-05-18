'use client'
import { Button } from '@/components/ui/button'

const CORE_SUBJECTS = ['Math', 'Science', 'English Lit', 'History', 'Geography', 'Phys Ed', 'Comp Sci', 'Language Arts']
const ELECTIVES = ['Art Studio', 'Choir', 'Theater', 'Creative Writing', 'Debate']

export default function AdminEnrollmentAcademicPage() {
  return (
    <div className="p-6 space-y-6 max-w-2xl mx-auto">
      <div>
        <div className="flex items-center gap-2 mb-3">
          {['Profile', 'Family', 'Academic'].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${i < 2 ? 'bg-green-500 text-white' : 'bg-primary text-white'}`}>
                {i < 2 ? '✓' : `${i + 1}`} {step}
              </div>
              {i < 2 && <div className="h-px w-4 bg-outline-variant" />}
            </div>
          ))}
        </div>
        <p className="text-xs text-on-surface-variant">Individual Enrollment · EWD-010</p>
      </div>

      {/* AI Banner */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 flex items-start gap-3">
        <span className="text-ai text-lg">✦</span>
        <div>
          <p className="text-sm font-semibold text-on-surface">EduWorld AI Assignment</p>
          <p className="text-xs text-on-surface-variant mt-0.5">8 core subjects pre-selected for Grade 5 regional standards. Jane is also eligible for 2 Creative Arts electives.</p>
        </div>
      </div>

      {/* Class & House */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <h2 className="font-display font-semibold text-on-surface">Class &amp; House</h2>
        <div className="space-y-3">
          <div>
            <label className="text-xs font-semibold text-on-surface-variant mb-1 block">Grade Level</label>
            <div className="w-full bg-surface-low rounded-xl px-3 py-2.5 text-sm text-on-surface-variant border border-outline-variant">Grade 5 (Pre-filled via Age/Profile)</div>
          </div>
          <div>
            <label className="text-xs font-semibold text-on-surface-variant mb-1 block">Section / Class</label>
            <select className="w-full bg-surface-low rounded-xl px-3 py-2.5 text-sm text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option>5A (Morning Cohort)</option>
              <option>5B (Morning Cohort)</option>
              <option>5C (Afternoon Cohort)</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-on-surface-variant mb-1 block">House / Tribe Assignment</label>
            <select className="w-full bg-surface-low rounded-xl px-3 py-2.5 text-sm text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option>Auto-Assign</option>
              <option>Dragons (Red)</option>
              <option>Griffins (Gold)</option>
              <option>Krakens (Blue)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Learning Support */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5">
        <h2 className="font-display font-semibold text-on-surface mb-3">Learning Support</h2>
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 rounded accent-primary" />
          <span className="text-sm text-on-surface">Requires Special Educational Needs (SEN) Support</span>
        </label>
      </div>

      {/* Subject Selection */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <h2 className="font-display font-semibold text-on-surface">Subject Selection</h2>
        <div>
          <p className="text-xs font-semibold text-on-surface-variant uppercase mb-2">Core Subjects — Locked (8)</p>
          <div className="grid grid-cols-2 gap-2">
            {CORE_SUBJECTS.map(s => (
              <div key={s} className="flex items-center gap-2 p-2.5 bg-surface-low rounded-xl opacity-70">
                <span className="text-on-surface-variant text-xs">🔒</span>
                <span className="text-sm text-on-surface">{s}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-semibold text-on-surface-variant uppercase">Electives</p>
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">0 / 2 selected</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {ELECTIVES.map(e => (
              <label key={e} className="flex items-center gap-2 p-2.5 bg-surface-low rounded-xl cursor-pointer hover:bg-surface-high transition-colors">
                <input type="checkbox" className="w-4 h-4 rounded accent-primary" />
                <span className="text-sm text-on-surface">{e}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" className="flex-1">← Back</Button>
        <Button className="flex-1">Review &amp; Complete →</Button>
      </div>
    </div>
  )
}
