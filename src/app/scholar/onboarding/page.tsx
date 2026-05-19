'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@/lib/supabase/client'
import { toast } from 'sonner'

const TRACKS = [
  { icon: 'science',       label: 'STEM & Engineering' },
  { icon: 'gavel',         label: 'Law & Social Sciences' },
  { icon: 'palette',       label: 'Arts & Humanities' },
  { icon: 'local_hospital',label: 'Medicine & Health' },
  { icon: 'bar_chart',     label: 'Business & Economics' },
  { icon: 'travel_explore',label: 'Other / Undecided' },
]

export default function ScholarOnboardingPage() {
  const [selected, setSelected] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  function toggle(label: string) {
    setSelected(prev => prev.includes(label) ? prev.filter(x => x !== label) : [...prev, label])
  }

  async function handleComplete() {
    setLoading(true)
    const supabase = createBrowserClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      await supabase.from('profiles').update({ onboarding_completed: true } as never).eq('id', user.id)
    }
    toast.success('Welcome to EduWorld Scholar!')
    router.replace('/scholar/command-center')
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      fontFamily: '"Inter", system-ui, sans-serif',
    }}>
      <div style={{ width: '100%', maxWidth: 560, display: 'flex', flexDirection: 'column', gap: 32 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{
            width: 64, height: 64, borderRadius: 16,
            background: 'rgba(99,102,241,0.15)',
            border: '1px solid rgba(99,102,241,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto',
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: 32, color: '#818cf8' }}>history_edu</span>
          </div>
          <h1 style={{
            fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
            fontSize: 28, fontWeight: 700, color: '#ffffff', margin: 0,
          }}>Welcome, Scholar.</h1>
          <p style={{ fontSize: 15, color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>
            Select your academic focus areas to personalise your experience.
          </p>
        </div>

        {/* Track grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {TRACKS.map(track => {
            const active = selected.includes(track.label)
            return (
              <button
                key={track.label}
                onClick={() => toggle(track.label)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '16px 20px',
                  background: active ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${active ? 'rgba(99,102,241,0.6)' : 'rgba(255,255,255,0.08)'}`,
                  borderRadius: 12,
                  cursor: 'pointer',
                  transition: 'all 150ms',
                  textAlign: 'left',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 22, color: active ? '#818cf8' : '#64748b' }}>{track.icon}</span>
                <span style={{ fontSize: 14, fontWeight: 500, color: active ? '#e0e7ff' : '#94a3b8' }}>{track.label}</span>
                {active && <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#818cf8', marginLeft: 'auto' }}>check_circle</span>}
              </button>
            )
          })}
        </div>

        {/* CTA */}
        <button
          onClick={handleComplete}
          disabled={loading}
          style={{
            width: '100%', padding: '14px 24px',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            border: 'none', borderRadius: 12,
            color: '#ffffff',
            fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
            fontWeight: 700, fontSize: 15,
            cursor: loading ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? 'Setting up…' : 'Enter Command Centre'}
          {!loading && <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_forward</span>}
        </button>

        <p style={{ textAlign: 'center', fontSize: 11, color: '#475569', letterSpacing: '0.08em', fontWeight: 600 }}>EWD-SCH-001</p>
      </div>
    </div>
  )
}
