'use client'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AdminEnrollmentPage() {
  return (
    <div className="p-6 space-y-6 max-w-2xl mx-auto">
      <div>
        <div className="flex items-center gap-2 mb-3">
          {['Profile', 'Family', 'Academic', 'Review'].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${i === 0 ? 'bg-primary text-white' : 'bg-surface-high text-on-surface-variant'}`}>
                {i + 1} {step}
              </div>
              {i < 3 && <div className="h-px w-4 bg-outline-variant" />}
            </div>
          ))}
        </div>
        <p className="text-xs text-on-surface-variant">Individual Enrollment · EWD-006 · Step 1 of 4</p>
      </div>

      <div>
        <h1 className="font-display font-bold text-xl text-on-surface">Student Profile</h1>
        <p className="text-sm text-on-surface-variant mt-1">Enter the student&apos;s basic information to begin enrollment.</p>
      </div>

      {/* AI Banner */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 flex items-start gap-3">
        <Sparkles className="h-4 w-4 text-ai mt-0.5 shrink-0" />
        <p className="text-xs text-on-surface-variant">EduWorld AI will auto-suggest grade placement based on date of birth and regional curriculum standards.</p>
      </div>

      {/* Form */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <h2 className="font-display font-semibold text-on-surface">Basic Information</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-on-surface-variant mb-1 block">First Name</label>
            <input
              type="text"
              placeholder="First name"
              defaultValue=""
              className="w-full bg-surface-low rounded-xl px-3 py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-on-surface-variant mb-1 block">Last Name</label>
            <input
              type="text"
              placeholder="Last name"
              defaultValue=""
              className="w-full bg-surface-low rounded-xl px-3 py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-on-surface-variant mb-1 block">Student ID</label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Auto-generate"
              className="flex-1 bg-surface-low rounded-xl px-3 py-2.5 text-sm text-on-surface-variant placeholder:text-on-surface-variant border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/30"
              readOnly
            />
            <Button size="sm" variant="outline">Generate</Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-on-surface-variant mb-1 block">Date of Birth</label>
            <input
              type="date"
              className="w-full bg-surface-low rounded-xl px-3 py-2.5 text-sm text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-on-surface-variant mb-1 block">Gender</label>
            <select className="w-full bg-surface-low rounded-xl px-3 py-2.5 text-sm text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Non-binary</option>
              <option>Prefer not to say</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-on-surface-variant mb-1 block">Grade Level</label>
          <select className="w-full bg-surface-low rounded-xl px-3 py-2.5 text-sm text-on-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/30">
            <option>Grade 10 (AI Suggested — Age 15)</option>
            <option>Grade 9</option>
            <option>Grade 11</option>
            <option>Grade 12</option>
          </select>
          <div className="mt-1.5 flex items-center gap-1.5">
            <Sparkles className="h-3 w-3 text-ai" />
            <p className="text-xs text-ai">AI confirmed: Grade 10 based on DOB</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" className="flex-1">← Cancel</Button>
        <Button className="flex-1">Save &amp; Continue →</Button>
      </div>
    </div>
  )
}
