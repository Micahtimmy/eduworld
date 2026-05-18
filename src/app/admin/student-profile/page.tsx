'use client'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const STEPS = ['Profile', 'Family', 'Academic']

export default function AdminStudentProfilePage() {
  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant w-full max-w-lg shadow-xl">
        <div className="flex items-center justify-between p-5 border-b border-outline-variant">
          <div>
            <button className="flex items-center gap-1 text-xs text-on-surface-variant mb-2 hover:text-on-surface"><ArrowLeft className="h-3.5 w-3.5" /> Back to Scholar Directory</button>
            <p className="font-display font-semibold text-on-surface">Student Enrollment</p>
            <p className="text-xs text-on-surface-variant">Create a new student profile for the upcoming academic year.</p>
          </div>
        </div>

        {/* Steps */}
        <div className="flex items-center gap-0 px-5 py-4 border-b border-outline-variant">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${i === 0 ? 'bg-primary text-white' : 'bg-surface-high text-on-surface-variant border border-outline-variant'}`}>{i + 1}</div>
                <p className="text-xs mt-1 text-on-surface-variant font-semibold">{s}</p>
              </div>
              {i < STEPS.length - 1 && <div className="h-0.5 w-full bg-surface-high" />}
            </div>
          ))}
        </div>

        <div className="p-5 space-y-4">
          <p className="text-sm font-bold text-on-surface">1. Student Information</p>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-on-surface-variant mb-1 block">Full Name</label>
              <input className="w-full px-3 py-2.5 text-sm bg-surface-low border border-outline-variant rounded-xl outline-none focus:border-primary placeholder:text-on-surface-variant" placeholder="Enter full name" />
            </div>
            <div>
              <label className="text-xs font-semibold text-on-surface-variant mb-1 block">Student ID</label>
              <div className="flex items-center gap-2 px-3 py-2.5 bg-surface-high border border-outline-variant rounded-xl">
                <span className="text-sm text-on-surface-variant">🔒 Auto-generated upon completion</span>
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-on-surface-variant mb-1 block">Date of Birth</label>
              <input type="date" className="w-full px-3 py-2.5 text-sm bg-surface-low border border-outline-variant rounded-xl outline-none focus:border-primary text-on-surface-variant" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-on-surface-variant mb-1 block">Gender</label>
                <select className="w-full px-3 py-2.5 text-sm bg-surface-low border border-outline-variant rounded-xl outline-none focus:border-primary text-on-surface-variant">
                  <option>Select</option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Non-binary</option>
                  <option>Prefer not to say</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-on-surface-variant mb-1 block">Expected Grade</label>
                <select className="w-full px-3 py-2.5 text-sm bg-surface-low border border-outline-variant rounded-xl outline-none focus:border-primary text-on-surface-variant">
                  <option>Select Grade</option>
                  <option>Kindergarten</option>
                  <option>Grade 1</option>
                  <option>Grade 2</option>
                  <option>Grade 3</option>
                  <option>Grade 4</option>
                  <option>Grade 5</option>
                </select>
              </div>
            </div>
          </div>

          {/* AI Check */}
          <div className="bg-ai/5 border border-ai/20 rounded-xl p-3">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-xs">✦</span>
              <span className="text-xs font-semibold text-ai">EduWorld AI Check ✦</span>
            </div>
            <p className="text-xs text-on-surface-variant">Age-10 student mapped to <strong className="text-on-surface">Grade 5</strong>, aligning with standard regional academic milestones.</p>
          </div>
        </div>

        <div className="flex items-center gap-2 p-5 border-t border-outline-variant">
          <Button variant="outline" size="sm">Cancel</Button>
          <div className="flex-1" />
          <Button size="sm" className="gap-1.5">Next: Parent Link <ArrowRight className="h-3.5 w-3.5" /></Button>
        </div>
      </div>
    </div>
  )
}
