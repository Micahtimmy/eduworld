'use client'
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const ROLES = [
  { icon: '🧭', label: 'Student (Explorer/Achiever)', sub: 'Begin your learning journey.', value: 'student' },
  { icon: '🎓', label: 'Scholar (University)', sub: 'Advanced academic research.', value: 'scholar' },
  { icon: '🧑‍🏫', label: 'Teacher', sub: 'Guide and inspire students.', value: 'teacher' },
  { icon: '👪', label: 'Parent / Guardian', sub: 'Monitor learning progress.', value: 'parent' },
  { icon: '🏫', label: 'School Admin', sub: 'Manage institutional operations.', value: 'admin' },
  { icon: '🏛️', label: 'Government Official', sub: 'Oversee educational policy.', value: 'government' },
  { icon: '💼', label: 'Enterprise Manager', sub: 'Corporate training oversight.', value: 'enterprise' },
  { icon: '🏢', label: 'Institution Administrator', sub: 'Multi-campus management.', value: 'institution' },
]

export default function RoleSelectionPage() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center space-y-2">
          <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">EWD-002</p>
          <h1 className="font-display font-bold text-3xl text-on-surface">Choose your role</h1>
          <p className="text-sm text-on-surface-variant">Select the experience that fits you best.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ROLES.map(role => (
            <button
              key={role.value}
              onClick={() => setSelected(role.value)}
              className={cn(
                'flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all',
                selected === role.value
                  ? 'border-primary bg-primary/5'
                  : 'border-outline-variant bg-surface-lowest hover:border-primary/40 hover:bg-surface-low'
              )}
            >
              <span className="text-2xl">{role.icon}</span>
              <div className="flex-1">
                <p className="font-semibold text-sm text-on-surface">{role.label}</p>
                <p className="text-xs text-on-surface-variant">{role.sub}</p>
              </div>
              {selected === role.value && (
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <Button variant="outline" className="gap-2"><ChevronLeft className="h-4 w-4" /> Back</Button>
          <Button className="gap-2" disabled={!selected}>Next <ChevronRight className="h-4 w-4" /></Button>
        </div>
      </div>
    </div>
  )
}
