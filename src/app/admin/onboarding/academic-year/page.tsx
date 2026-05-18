'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

function ProgressBar({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1 flex-1 rounded-full transition-all duration-300 ${i < step ? 'bg-primary' : 'bg-outline-variant'}`}
        />
      ))}
    </div>
  )
}

const TERM_STRUCTURES = [
  { id: '2-terms', label: '2 Terms', desc: 'Two terms per year' },
  { id: '3-terms', label: '3 Terms', desc: 'Three terms per year' },
  { id: 'semesters', label: 'Semesters', desc: 'Two semesters per year' },
]

export default function AdminOnboardingAcademicYearPage() {
  const [academicYear, setAcademicYear] = useState('2025/26')
  const [termStructure, setTermStructure] = useState('')
  const [term1Start, setTerm1Start] = useState('')
  const [term1End, setTerm1End] = useState('')
  const [term2Start, setTerm2Start] = useState('')
  const [term2End, setTerm2End] = useState('')
  const router = useRouter()

  const canContinue = academicYear.trim().length > 0 && termStructure !== ''

  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Progress */}
        <ProgressBar step={2} total={6} />

        {/* Back */}
        <div className="flex items-center gap-3">
          <Link href="/admin/onboarding/organisation" className="w-8 h-8 rounded-full bg-surface-lowest border border-outline-variant flex items-center justify-center hover:bg-surface transition-colors">
            <ArrowLeft className="h-4 w-4 text-on-surface" />
          </Link>
          <span className="text-xs text-on-surface-variant font-label">Step 2 of 5</span>
        </div>

        {/* Header */}
        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl text-on-surface">Academic year setup</h1>
          <p className="text-sm text-on-surface-variant">Configure your institution's academic calendar.</p>
        </div>

        {/* Academic year */}
        <div className="space-y-2">
          <label className="text-sm font-label font-semibold text-on-surface">Academic year</label>
          <input
            type="text"
            value={academicYear}
            onChange={e => setAcademicYear(e.target.value)}
            placeholder="e.g. 2025/26"
            className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-lowest text-on-surface placeholder:text-on-surface-variant outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm"
          />
        </div>

        {/* Term structure */}
        <div className="space-y-3">
          <label className="text-sm font-label font-semibold text-on-surface">Term structure</label>
          <div className="space-y-2">
            {TERM_STRUCTURES.map(t => (
              <button
                key={t.id}
                onClick={() => setTermStructure(t.id)}
                className={`w-full text-left rounded-xl border-2 px-4 py-3 transition-all duration-150 ${
                  termStructure === t.id
                    ? 'bg-primary/5 border-primary'
                    : 'bg-surface-lowest border-outline-variant hover:border-primary/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-sm font-semibold ${termStructure === t.id ? 'text-primary' : 'text-on-surface'}`}>{t.label}</p>
                    <p className="text-xs text-on-surface-variant">{t.desc}</p>
                  </div>
                  <div className={`w-4 h-4 rounded-full border-2 transition-all ${
                    termStructure === t.id ? 'border-primary bg-primary' : 'border-outline-variant'
                  }`}>
                    {termStructure === t.id && (
                      <div className="w-full h-full rounded-full bg-white scale-[0.4] transform" />
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Term dates — shown when structure is selected */}
        {termStructure && (
          <div className="bg-surface-lowest border border-outline-variant rounded-2xl p-5 space-y-4">
            <p className="text-sm font-semibold text-on-surface">Term dates <span className="text-on-surface-variant font-normal">(optional)</span></p>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-label font-semibold text-on-surface-variant mb-2">
                  {termStructure === 'semesters' ? 'Semester 1' : 'Term 1'}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-xs text-on-surface-variant">Start date</label>
                    <input
                      type="date"
                      value={term1Start}
                      onChange={e => setTerm1Start(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-outline-variant bg-surface-low text-on-surface outline-none focus:border-primary text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-on-surface-variant">End date</label>
                    <input
                      type="date"
                      value={term1End}
                      onChange={e => setTerm1End(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-outline-variant bg-surface-low text-on-surface outline-none focus:border-primary text-xs"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs font-label font-semibold text-on-surface-variant mb-2">
                  {termStructure === 'semesters' ? 'Semester 2' : 'Term 2'}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-xs text-on-surface-variant">Start date</label>
                    <input
                      type="date"
                      value={term2Start}
                      onChange={e => setTerm2Start(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-outline-variant bg-surface-low text-on-surface outline-none focus:border-primary text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-on-surface-variant">End date</label>
                    <input
                      type="date"
                      value={term2End}
                      onChange={e => setTerm2End(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-outline-variant bg-surface-low text-on-surface outline-none focus:border-primary text-xs"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Continue */}
        <Button
          className="w-full h-12 text-base gap-2"
          disabled={!canContinue}
          onClick={() => router.push('/admin/onboarding/import')}
        >
          Continue
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
