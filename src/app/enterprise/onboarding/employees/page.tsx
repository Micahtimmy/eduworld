'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronRight, Upload, Database, CheckCircle } from 'lucide-react'
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

const HR_SYSTEMS = [
  { id: 'workday', label: 'Workday', logo: '🏢' },
  { id: 'bamboohr', label: 'BambooHR', logo: '🌿' },
  { id: 'sap', label: 'SAP SuccessFactors', logo: '⚙️' },
  { id: 'adp', label: 'ADP', logo: '📊' },
]

export default function EnterpriseOnboardingEmployeesPage() {
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
        <ProgressBar step={2} total={4} />

        {/* Back */}
        <div className="flex items-center gap-3">
          <Link href="/enterprise/onboarding/organisation" className="w-8 h-8 rounded-full bg-surface-lowest border border-outline-variant flex items-center justify-center hover:bg-surface transition-colors">
            <ArrowLeft className="h-4 w-4 text-on-surface" />
          </Link>
          <span className="text-xs text-on-surface-variant font-label">Step 2 of 3</span>
        </div>

        {/* Header */}
        <div className="space-y-2">
          <h1 className="font-display font-bold text-2xl text-on-surface">Import your employees</h1>
          <p className="text-sm text-on-surface-variant">Connect your HR system or upload a CSV to add employees to EduWorld.</p>
        </div>

        {/* CSV upload */}
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
            onClick={() => document.getElementById('emp-csv-input')?.click()}
          >
            <input
              id="emp-csv-input"
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
            <p className="text-sm font-semibold text-on-surface">Upload employee CSV</p>
            <p className="text-xs text-on-surface-variant mt-1">name, email, department, job title</p>
          </div>
        ) : (
          <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-ai shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-on-surface">employees.csv uploaded</p>
              <p className="text-xs text-on-surface-variant">Ready to process</p>
            </div>
            <button onClick={() => setUploaded(false)} className="text-xs text-on-surface-variant hover:text-on-surface underline">Remove</button>
          </div>
        )}

        <div className="flex items-center gap-3">
          <div className="flex-1 border-t border-outline-variant" />
          <span className="text-xs text-on-surface-variant font-label">or connect HR system</span>
          <div className="flex-1 border-t border-outline-variant" />
        </div>

        {/* HR system integrations */}
        <div className="grid grid-cols-2 gap-2">
          {HR_SYSTEMS.map(hr => (
            <button
              key={hr.id}
              className="bg-surface-lowest border border-outline-variant rounded-xl p-3 flex items-center gap-3 hover:border-primary/30 hover:bg-primary/5 transition-all"
            >
              <span className="text-2xl">{hr.logo}</span>
              <div className="text-left">
                <p className="text-sm font-semibold text-on-surface">{hr.label}</p>
                <p className="text-xs text-primary">Connect →</p>
              </div>
            </button>
          ))}
        </div>

        {/* Info note */}
        <div className="flex items-start gap-2">
          <Database className="h-4 w-4 text-on-surface-variant shrink-0 mt-0.5" />
          <p className="text-xs text-on-surface-variant leading-relaxed">
            HR integrations are in beta. Connect your team and configure sync settings from your admin panel after setup.
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <Button
            className="w-full h-12 text-base gap-2"
            disabled={!uploaded}
            onClick={() => router.push('/enterprise/onboarding/ready')}
          >
            Import employees
            <ChevronRight className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            className="w-full h-11 text-sm text-on-surface-variant"
            onClick={() => router.push('/enterprise/onboarding/ready')}
          >
            Skip for now
          </Button>
        </div>
      </div>
    </div>
  )
}
