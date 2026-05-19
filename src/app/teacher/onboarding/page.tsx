'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@/lib/supabase/client'
import { toast } from 'sonner'

const SUBJECTS = [
  { icon: 'functions',    label: 'Mathematics' },
  { icon: 'science',      label: 'Science' },
  { icon: 'menu_book',    label: 'English' },
  { icon: 'public',       label: 'Social Studies' },
  { icon: 'palette',      label: 'Arts' },
  { icon: 'sports',       label: 'Physical Education' },
  { icon: 'computer',     label: 'Technology' },
  { icon: 'translate',    label: 'Languages' },
]

export default function TeacherOnboardingPage() {
  const [subjects, setSubjects] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  function toggle(label: string) {
    setSubjects(prev => prev.includes(label) ? prev.filter(x => x !== label) : [...prev, label])
  }

  async function handleComplete() {
    setLoading(true)
    const supabase = createBrowserClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      await supabase.from('profiles').update({ onboarding_completed: true } as never).eq('id', user.id)
    }
    toast.success('Welcome to EduWorld!')
    router.replace('/teacher/dashboard')
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f9f9ff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      fontFamily: '"Inter", system-ui, sans-serif',
    }}>
      <div style={{ width: '100%', maxWidth: 560 }}>

        {/* Card */}
        <div style={{
          background: '#ffffff',
          border: '1px solid #e2e4ea',
          borderRadius: 20,
          padding: '40px 36px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        }}>
          {/* Header */}
          <div style={{ marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{
              width: 52, height: 52, borderRadius: 14,
              backgroundColor: 'rgba(0,63,122,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 8,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 28, color: '#003f7a' }}>co_present</span>
            </div>
            <h1 style={{
              fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
              fontSize: 26, fontWeight: 700, color: '#191c20', margin: 0,
            }}>Welcome, Teacher.</h1>
            <p style={{ fontSize: 14, color: '#424750', margin: 0, lineHeight: 1.6 }}>
              Select the subjects you teach so we can personalise your dashboard.
            </p>
          </div>

          {/* Subject grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 28 }}>
            {SUBJECTS.map(s => {
              const active = subjects.includes(s.label)
              return (
                <button
                  key={s.label}
                  onClick={() => toggle(s.label)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '12px 16px',
                    background: active ? '#f0f4ff' : '#f9f9ff',
                    border: `1px solid ${active ? '#003f7a' : '#e2e4ea'}`,
                    borderRadius: 10,
                    cursor: 'pointer',
                    transition: 'all 120ms',
                    textAlign: 'left',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: active ? '#003f7a' : '#9aa0ab' }}>{s.icon}</span>
                  <span style={{ fontSize: 13, fontWeight: 500, color: active ? '#003f7a' : '#424750', flex: 1 }}>{s.label}</span>
                  {active && <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#003f7a' }}>check</span>}
                </button>
              )
            })}
          </div>

          {/* CTA */}
          <button
            onClick={handleComplete}
            disabled={loading}
            style={{
              width: '100%', padding: '13px 24px',
              background: loading ? '#1e5799' : '#003f7a',
              border: 'none', borderRadius: 10,
              color: '#ffffff',
              fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
              fontWeight: 600, fontSize: 14,
              cursor: loading ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              transition: 'background-color 150ms',
            }}
            onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#1e5799' }}
            onMouseLeave={e => { if (!loading) e.currentTarget.style.background = '#003f7a' }}
          >
            {loading ? 'Setting up your classroom…' : 'Go to Dashboard'}
            {!loading && <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>}
          </button>
        </div>

        <p style={{ textAlign: 'center', fontSize: 11, color: '#c2c6d2', marginTop: 16, letterSpacing: '0.08em' }}>EWD-TCH-001</p>
      </div>
    </div>
  )
}
