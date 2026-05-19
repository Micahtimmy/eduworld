'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@/lib/supabase/client'
import { toast } from 'sonner'

const INSTITUTION_TYPES = [
  { icon: 'school',             label: 'Primary School' },
  { icon: 'account_balance',    label: 'Secondary School' },
  { icon: 'apartment',          label: 'College / Polytechnic' },
  { icon: 'domain',             label: 'University' },
  { icon: 'business_center',    label: 'Corporate Training' },
  { icon: 'hub',                label: 'Multi-Campus Institution' },
]

export default function AdminOnboardingPage() {
  const [institutionName, setInstitutionName] = useState('')
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleComplete() {
    if (!institutionName.trim()) {
      toast.error('Please enter your institution name')
      return
    }
    setLoading(true)
    const supabase = createBrowserClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      await supabase.from('profiles').update({ onboarding_completed: true } as never).eq('id', user.id)
    }
    toast.success('Institution configured!')
    router.replace('/admin/dashboard')
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
        <div style={{
          background: '#ffffff',
          border: '1px solid #e2e4ea',
          borderRadius: 20,
          padding: '40px 36px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
        }}>
          {/* Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{
              width: 52, height: 52, borderRadius: 14,
              backgroundColor: 'rgba(0,63,122,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 28, color: '#003f7a' }}>admin_panel_settings</span>
            </div>
            <h1 style={{
              fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
              fontSize: 26, fontWeight: 700, color: '#191c20', margin: 0,
            }}>Set up your institution.</h1>
            <p style={{ fontSize: 14, color: '#424750', margin: 0, lineHeight: 1.6 }}>
              Configure your school or organisation on EduWorld.
            </p>
          </div>

          {/* Institution name */}
          <div>
            <label htmlFor="inst-name" style={{
              display: 'block', fontSize: 13, fontWeight: 600,
              color: '#191c20', marginBottom: 6,
              fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
            }}>Institution name</label>
            <input
              id="inst-name"
              type="text"
              placeholder="e.g. Greenfield Academy"
              value={institutionName}
              onChange={e => setInstitutionName(e.target.value)}
              style={{
                width: '100%', padding: '11px 14px',
                border: '1px solid #c2c6d2', borderRadius: 8,
                fontSize: 14, color: '#191c20', outline: 'none',
                transition: 'border-color 150ms, box-shadow 150ms',
                boxSizing: 'border-box', background: '#ffffff',
              }}
              onFocus={e => { e.target.style.borderColor = '#003f7a'; e.target.style.boxShadow = '0 0 0 3px rgba(0,63,122,0.12)' }}
              onBlur={e => { e.target.style.borderColor = '#c2c6d2'; e.target.style.boxShadow = 'none' }}
            />
          </div>

          {/* Institution type */}
          <div>
            <p style={{
              fontSize: 13, fontWeight: 600, color: '#191c20', margin: '0 0 10px 0',
              fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
            }}>Institution type</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {INSTITUTION_TYPES.map(t => {
                const active = selectedType === t.label
                return (
                  <button
                    key={t.label}
                    onClick={() => setSelectedType(t.label)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      padding: '11px 14px',
                      background: active ? '#f0f4ff' : '#f9f9ff',
                      border: `1px solid ${active ? '#003f7a' : '#e2e4ea'}`,
                      borderRadius: 10, cursor: 'pointer',
                      transition: 'all 120ms', textAlign: 'left',
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 18, color: active ? '#003f7a' : '#9aa0ab' }}>{t.icon}</span>
                    <span style={{ fontSize: 13, fontWeight: 500, color: active ? '#003f7a' : '#424750' }}>{t.label}</span>
                  </button>
                )
              })}
            </div>
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

        <p style={{ textAlign: 'center', fontSize: 11, color: '#c2c6d2', marginTop: 16, letterSpacing: '0.08em' }}>EWD-ADM-001</p>
      </div>
    </div>
  )
}
