'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@/lib/supabase/client'
import { toast } from 'sonner'

export default function ParentOnboardingPage() {
  const [childName, setChildName] = useState('')
  const [childAge, setChildAge] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleComplete() {
    setLoading(true)
    const supabase = createBrowserClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      await supabase.from('profiles').update({ onboarding_completed: true } as never).eq('id', user.id)
    }
    toast.success('Welcome to EduWorld!')
    router.replace('/parent/dashboard')
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
      <div style={{ width: '100%', maxWidth: 480 }}>
        <div style={{
          background: '#ffffff',
          border: '1px solid #e2e4ea',
          borderRadius: 20,
          padding: '40px 36px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
        }}>
          {/* Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{
              width: 52, height: 52, borderRadius: 14,
              backgroundColor: 'rgba(0,63,122,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 28, color: '#003f7a' }}>family_home</span>
            </div>
            <h1 style={{
              fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
              fontSize: 26, fontWeight: 700, color: '#191c20', margin: 0,
            }}>Welcome, Parent.</h1>
            <p style={{ fontSize: 14, color: '#424750', margin: 0, lineHeight: 1.6 }}>
              Tell us a bit about your child to set up progress monitoring and notifications.
            </p>
          </div>

          {/* Fields */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { id: 'child-name', label: "Child's full name", placeholder: 'e.g. Amara Johnson', value: childName, onChange: setChildName, type: 'text' },
              { id: 'child-age',  label: "Child's age",       placeholder: 'e.g. 10',           value: childAge,  onChange: setChildAge,  type: 'number' },
            ].map(f => (
              <div key={f.id}>
                <label htmlFor={f.id} style={{
                  display: 'block', fontSize: 13, fontWeight: 600,
                  color: '#191c20', marginBottom: 4,
                  fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                }}>{f.label}</label>
                <input
                  id={f.id}
                  type={f.type}
                  placeholder={f.placeholder}
                  value={f.value}
                  onChange={e => f.onChange(e.target.value)}
                  style={{
                    width: '100%', padding: '11px 14px',
                    border: '1px solid #c2c6d2', borderRadius: 8,
                    fontSize: 14, color: '#191c20',
                    outline: 'none', transition: 'border-color 150ms',
                    boxSizing: 'border-box', background: '#ffffff',
                  }}
                  onFocus={e => { e.target.style.borderColor = '#003f7a'; e.target.style.boxShadow = '0 0 0 3px rgba(0,63,122,0.12)' }}
                  onBlur={e => { e.target.style.borderColor = '#c2c6d2'; e.target.style.boxShadow = 'none' }}
                />
              </div>
            ))}
          </div>

          {/* Info banner */}
          <div style={{
            background: 'rgba(0,63,122,0.05)', border: '1px solid rgba(0,63,122,0.12)',
            borderRadius: 10, padding: '12px 16px',
            display: 'flex', alignItems: 'flex-start', gap: 10,
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#003f7a', marginTop: 1 }}>info</span>
            <p style={{ fontSize: 13, color: '#424750', margin: 0, lineHeight: 1.5 }}>
              You can link to your child's account or invite them after setup. This information helps personalise reports.
            </p>
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
            {loading ? 'Setting up…' : 'Go to Dashboard'}
            {!loading && <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>}
          </button>
        </div>

        <p style={{ textAlign: 'center', fontSize: 11, color: '#c2c6d2', marginTop: 16, letterSpacing: '0.08em' }}>EWD-PAR-001</p>
      </div>
    </div>
  )
}
