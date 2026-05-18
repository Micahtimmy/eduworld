'use client'
import { Button } from '@/components/ui/button'

export default function AdminEnrollmentReviewPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3">
        <button className="text-on-surface-variant hover:text-on-surface text-sm">← Back to Details</button>
        <div className="h-4 w-px bg-outline-variant" />
        <div>
          <p className="text-xs text-on-surface-variant">Step 4 of 4</p>
          <h1 className="font-display font-bold text-xl text-on-surface">Review &amp; Finalize Enrollment</h1>
        </div>
      </div>
      <p className="text-sm text-on-surface-variant">Please review all provided information before confirming admission.</p>

      {/* Progress steps */}
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4].map(s => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${s < 4 ? 'bg-green-500 text-white' : 'bg-primary text-white'}`}>
              {s < 4 ? '✓' : s}
            </div>
            {s < 4 && <div className="h-px w-8 bg-outline-variant" />}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Student Profile */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center font-bold text-xl text-primary shrink-0">ET</div>
            <div>
              <h2 className="font-display font-bold text-lg text-on-surface">Elias Thorne</h2>
              <p className="text-xs text-on-surface-variant font-mono">EWD-2024-8891</p>
              <p className="text-xs text-on-surface-variant mt-1">🏫 Grade 10 - Science Track</p>
            </div>
          </div>
        </div>

        {/* Primary Guardian */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-semibold text-on-surface">Primary Guardian</h2>
            <button className="text-xs text-primary hover:underline">Edit Profile Details</button>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">👤</span>
            <div>
              <p className="text-sm font-semibold text-on-surface">Sarah Thorne</p>
              <p className="text-xs text-on-surface-variant">Mother</p>
              <p className="text-xs text-on-surface-variant">+44 7700 900077</p>
              <p className="text-xs text-on-surface-variant">sarah.thorne@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Curriculum & Support */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <h2 className="font-display font-semibold text-on-surface">📚 Academic Curriculum &amp; Support</h2>
        <div>
          <p className="text-xs font-semibold text-on-surface-variant uppercase mb-2">Core Subjects</p>
          <div className="space-y-1">
            {[
              { icon: '📐', subject: 'Advanced Mathematics' },
              { icon: '🔬', subject: 'Physics & Chemistry' },
              { icon: '📖', subject: 'English Literature' },
            ].map(s => (
              <div key={s.subject} className="flex items-center gap-2 p-2 bg-surface-low rounded-lg">
                <span>{s.icon}</span>
                <span className="text-sm text-on-surface">{s.subject}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-on-surface-variant uppercase mb-2">Extracurriculars</p>
          <div className="flex gap-2">
            {['Robotics Club', 'Debate Team'].map(e => (
              <span key={e} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-semibold">{e}</span>
            ))}
          </div>
        </div>
        <div className="flex items-start gap-2 p-3 bg-blue-50 border border-blue-200 rounded-xl">
          <span className="text-blue-500 shrink-0">ℹ</span>
          <p className="text-xs text-on-surface-variant">Mild dyslexia noted. Requires 15% extra time on written assessments. Medical documentation provided.</p>
        </div>
      </div>

      {/* Required Documents */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">📁 Required Documents</h2>
          <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">1 of 2 Uploaded</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-xl">
            <span className="text-green-500">✓</span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-on-surface">Medical Records &amp; Immunization</p>
              <p className="text-xs text-on-surface-variant">med_records_2024.pdf (2.4 MB)</p>
            </div>
            <button className="text-red-400 hover:text-red-600 text-sm">🗑</button>
          </div>
          <div className="flex items-center gap-3 p-3 bg-amber-50 border border-amber-200 rounded-xl">
            <span className="text-amber-500">⏳</span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-on-surface">Birth Certificate or Passport</p>
              <p className="text-xs text-on-surface-variant">Required for identity verification</p>
            </div>
            <Button size="sm" variant="outline" className="h-7 text-xs gap-1 shrink-0">📤 Upload</Button>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="flex gap-3">
        <Button variant="outline" className="flex-1">Save as Draft</Button>
        <Button className="flex-1 gap-1.5">✅ Confirm &amp; Finalize Enrollment</Button>
      </div>
      <p className="text-xs text-center text-on-surface-variant">Reference Serial: EWD-011 | EduWorld Secure Enrollment System</p>
    </div>
  )
}
