'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronRight, Upload, FileText, CheckCircle } from 'lucide-react'
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

const CSV_COLUMNS = [
  { col: 'first_name', req: true, desc: 'Student first name' },
  { col: 'last_name', req: true, desc: 'Student last name' },
  { col: 'email', req: false, desc: 'Student email (optional)' },
  { col: 'student_id', req: false, desc: 'School student ID number' },
  { col: 'grade_level', req: false, desc: 'e.g. Year 7, Grade 10' },
  { col: 'parent_email', req: false, desc: 'Parent / guardian email' },
]

export default function AdminOnboardingImportPage() {
  const [isDragging, setIsDragging] = useState(false)
  const [uploaded, setUploaded] = useState(false)
  const router = useRouter()

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault()
    setIsDragging(true)
  }

  function handleDragLeave() {
    setIsDragging(false)
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setIsDragging(false)
    setUploaded(true)
  }

  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Progress */}
        <ProgressBar step={3} total={6} />

        {/* Back */}
        <div className="flex items-center gap-3">
          <Link href="/admin/onboarding/academic-year" className="w-8 h-8 rounded-full bg-surface-lowest border border-outline-variant flex items-center justify-center hover:bg-surface transition-colors">
            <ArrowLeft className="h-4 w-4 text-on-surface" />
          </Link>
          <span className="text-xs text-on-surface-variant font-label">Step 3 of 5</span>
        </div>

        {/* Header */}
        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl text-on-surface">Import your students</h1>
          <p className="text-sm text-on-surface-variant">Upload a CSV file to bulk-add students, or skip and add them manually later.</p>
        </div>

        {/* Upload zone */}
        {!uploaded ? (
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all cursor-pointer ${
              isDragging
                ? 'border-primary bg-primary/5 scale-[1.02]'
                : 'border-outline-variant hover:border-primary/40 hover:bg-primary/2'
            }`}
            onClick={() => document.getElementById('csv-input')?.click()}
          >
            <input
              id="csv-input"
              type="file"
              accept=".csv"
              className="hidden"
              onChange={() => setUploaded(true)}
            />
            <div className="flex justify-center mb-3">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Upload className="h-7 w-7 text-primary" />
              </div>
            </div>
            <p className="text-sm font-semibold text-on-surface">Drag & drop your CSV file here</p>
            <p className="text-xs text-on-surface-variant mt-1">or click to browse</p>
            <p className="text-xs text-on-surface-variant mt-3">Supports .csv files up to 5 MB</p>
          </div>
        ) : (
          <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-ai shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-on-surface">students_roster.csv uploaded</p>
              <p className="text-xs text-on-surface-variant">Tap Continue to process and import</p>
            </div>
            <button
              onClick={() => setUploaded(false)}
              className="text-xs text-on-surface-variant hover:text-on-surface underline"
            >
              Remove
            </button>
          </div>
        )}

        {/* Expected columns */}
        <div className="bg-surface-lowest border border-outline-variant rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-on-surface-variant" />
            <p className="text-sm font-semibold text-on-surface">Expected CSV columns</p>
          </div>
          <div className="space-y-2">
            {CSV_COLUMNS.map(col => (
              <div key={col.col} className="flex items-center gap-3">
                <code className={`text-xs px-2 py-0.5 rounded font-mono ${
                  col.req ? 'bg-primary/10 text-primary' : 'bg-surface-low text-on-surface-variant'
                }`}>
                  {col.col}
                </code>
                <span className="text-xs text-on-surface-variant flex-1">{col.desc}</span>
                {col.req && <span className="text-xs text-red-500 font-semibold">required</span>}
              </div>
            ))}
          </div>
          <button className="text-xs text-primary hover:underline font-semibold">
            Download template CSV →
          </button>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <Button
            className="w-full h-12 text-base gap-2"
            disabled={!uploaded}
            onClick={() => router.push('/admin/onboarding/invite-staff')}
          >
            Import students
            <ChevronRight className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            className="w-full h-11 text-sm text-on-surface-variant"
            onClick={() => router.push('/admin/onboarding/invite-staff')}
          >
            Skip for now — add manually later
          </Button>
        </div>
      </div>
    </div>
  )
}
