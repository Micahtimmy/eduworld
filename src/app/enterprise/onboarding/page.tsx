'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@/lib/supabase/client'
import { toast } from 'sonner'

const FOCUS_AREAS = [
  { icon: 'code',              label: 'Technical Skills' },
  { icon: 'trending_up',       label: 'Leadership & Management' },
  { icon: 'groups',            label: 'Team Collaboration' },
  { icon: 'health_and_safety', label: 'Compliance & Safety' },
  { icon: 'sell',              label: 'Sales & Marketing' },
  { icon: 'support_agent',     label: 'Customer Service' },
]

export default function EnterpriseOnboardingPage() {
  const [orgName, setOrgName] = useState('')
  const [selected, setSelected] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  function toggle(label: string) {
    setSelected(prev => prev.includes(label) ? prev.filter(x => x !== label) : [...prev, label])
  }

  async function handleComplete() {
    if (!orgName.trim()) { toast.error('Please enter your organisation name'); return }
    setLoading(true)
    const supabase = createBrowserClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      await supabase.from('profiles').update({ onboarding_completed: true } as never).eq('id', user.id)
    }
    toast.success('Organisation configured!')
    router.replace('/enterprise/dashboard')
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0c1445 0%, #1a1f3a 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      fontFamily: '"Inter", system-ui, sans-serif',
    }}>
      <div style={{ width: '100%', maxWidth: 560, display: 'flex', flexDirection: 'column', gap: 28 }}>

        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{
            width: 52, height: 52, borderRadius: 14,
            background: 'rgba(59,130,246,0.15)',
            border: '1px solid rgba(59,130,246,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: 28, color: '#60a5fa' }}>business_center</span>
          </div>
          <h1 style={{
            fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
            fontSize: 26, fontWeight: 700, color: '#ffffff', margin: 0,
          }}>Set up your organisation.</h1>
          <p style={{ fontSize: 14, color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>
            Configure EduWorld for your workforce learning programme.
          </p>
        </div>

        {/* Org name */}
        <div>
          <label htmlFor="org-name" style={{
            display: 'block', fontSize: 13, fontWeight: 600,
            color: '#e2e8f0', marginBottom: 6,
            fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
          }}>Organisation name</label>
          <input
            id="org-name"
            type="text"
            placeholder="e.g. Acme Corporation"
            value={orgName}
            onChange={e => setOrgName(e.target.value)}
            style={{
              width: '100%', padding: '11px 14px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 8, fontSize: 14, color: '#ffffff',
              outline: 'none', transition: 'border-color 150ms',
              boxSizing: 'border-box',
            }}
            onFocus={e => { e.target.style.borderColor = '#60a5fa' }}
            onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.12)' }}
          />
        </div>

        {/* Focus areas */}
        <div>
          <p style={{
            fontSize: 13, fontWeight: 600, color: '#e2e8f0', margin: '0 0 10px 0',
            fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
          }}>Training focus areas</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {FOCUS_AREAS.map(f => {
              const active = selected.includes(f.label)
              return (
                <button
                  key={f.label}
                  onClick={() => toggle(f.label)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '12px 16px',
                    background: active ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${active ? 'rgba(59,130,246,0.5)' : 'rgba(255,255,255,0.08)'}`,
                    borderRadius: 10, cursor: 'pointer',
                    transition: 'all 120ms', textAlign: 'left',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 18, color: active ? '#60a5fa' : '#64748b' }}>{f.icon}</span>
                  <span style={{ fontSize: 13, fontWeight: 500, color: active ? '#bfdbfe' : '#94a3b8' }}>{f.label}</span>
                  {active && <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#60a5fa', marginLeft: 'auto' }}>check</span>}
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
            background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
            border: 'none', borderRadius: 10,
            color: '#ffffff',
            fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
            fontWeight: 700, fontSize: 14,
            cursor: loading ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            opacity: loading ? 0.7 : 1,
            transition: 'opacity 150ms',
          }}
        >
          {loading ? 'Setting up…' : 'Launch Dashboard'}
          {!loading && <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>}
        </button>

        <p style={{ textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.15)', letterSpacing: '0.08em' }}>EWD-ENT-001</p>
      </div>
    </div>
  )
}
