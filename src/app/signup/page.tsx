'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@/lib/supabase/client'
import { toast } from 'sonner'

type RoleId = 'explorer' | 'scholar' | 'teacher' | 'parent' | 'admin' | 'government' | 'enterprise_manager'

const ROLE_CARDS = [
  { id: 'explorer' as RoleId,           icon: 'explore',               title: 'Student (Explorer/Achiever)',  desc: 'Begin your learning journey.' },
  { id: 'scholar' as RoleId,            icon: 'school',                title: 'Scholar (University)',         desc: 'Advanced academic research.' },
  { id: 'teacher' as RoleId,            icon: 'co_present',            title: 'Teacher',                      desc: 'Guide and inspire students.' },
  { id: 'parent' as RoleId,             icon: 'family_home',           title: 'Parent / Guardian',            desc: 'Monitor learning progress.' },
  { id: 'admin' as RoleId,              icon: 'admin_panel_settings',  title: 'School Admin',                 desc: 'Manage institutional operations.' },
  { id: 'government' as RoleId,         icon: 'account_balance',       title: 'Government Official',          desc: 'Oversee educational policy.' },
  { id: 'enterprise_manager' as RoleId, icon: 'business_center',       title: 'Enterprise Manager',           desc: 'Corporate training oversight.' },
  { id: 'admin' as RoleId,              icon: 'domain',                title: 'Institution Administrator',    desc: 'Multi-campus management.' },
]

const LABEL: Record<RoleId, string> = {
  explorer:           'Student (Explorer/Achiever)',
  scholar:            'Scholar',
  teacher:            'Teacher',
  parent:             'Parent / Guardian',
  admin:              'Administrator',
  government:         'Government Official',
  enterprise_manager: 'Enterprise Manager',
}

export default function SignupPage() {
  const [step, setStep] = useState<'role' | 'details'>('role')
  const [selectedRole, setSelectedRole] = useState<RoleId | null>(null)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!selectedRole) return
    setLoading(true)
    const supabase = createBrowserClient()
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName, role: selectedRole } },
    })
    if (error) {
      toast.error(error.message)
      setLoading(false)
    } else {
      toast.success('Account created! Check your email to confirm.')
      router.push('/onboarding')
    }
  }

  /* ── Step 1: Role selection ── */
  if (step === 'role') {
    return (
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          fontFamily: '"Inter", system-ui, sans-serif',
        }}
      >
        <div style={{ width: '100%', maxWidth: 1024, display: 'flex', flexDirection: 'column', gap: 32 }}>

          {/* Header */}
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <h1
              style={{
                fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: 'clamp(40px, 6vw, 56px)',
                letterSpacing: '-0.02em',
                fontWeight: 700,
                color: '#191c20',
                margin: 0,
              }}
            >
              Choose your role
            </h1>
            <p
              style={{
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: '18px',
                lineHeight: '28px',
                fontWeight: 400,
                color: '#424750',
                margin: 0,
              }}
            >
              Select the experience that fits you best.
            </p>
          </div>

          {/* Role cards grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(1, 1fr)',
              gap: 16,
            }}
            className="sm:grid-cols-2 lg:grid-cols-4"
          >
            {ROLE_CARDS.map((card, idx) => {
              const isSelected = selectedRole === card.id && idx === ROLE_CARDS.findIndex((c, i) => c.id === card.id && i === idx)
              const selected = selectedRole === card.id
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedRole(card.id)}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: 16,
                    padding: 24,
                    textAlign: 'left',
                    backgroundColor: selected ? '#f9f9ff' : '#ffffff',
                    border: selected ? '1px solid #003f7a' : '1px solid #c2c6d2',
                    borderRadius: 8,
                    cursor: 'pointer',
                    transition: 'all 200ms',
                    boxShadow: selected
                      ? '0 10px 15px -3px rgba(0,63,122,0.1), 0 4px 6px -4px rgba(0,63,122,0.1)'
                      : 'none',
                  }}
                  onMouseEnter={e => {
                    if (!selected) {
                      e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(30,87,153,0.10)'
                      e.currentTarget.style.transform = 'translateY(-4px)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!selected) {
                      e.currentTarget.style.boxShadow = 'none'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      padding: 8,
                      borderRadius: 9999,
                      backgroundColor: 'rgba(30,87,153,0.10)',
                      color: '#003f7a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background-color 150ms, color 150ms',
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 24 }}>
                      {card.icon}
                    </span>
                  </div>

                  {/* Text */}
                  <div>
                    <h3
                      style={{
                        fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontWeight: 600,
                        color: '#191c20',
                        margin: 0,
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: '"Inter", system-ui, sans-serif',
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontWeight: 400,
                        color: '#424750',
                        margin: '4px 0 0 0',
                      }}
                    >
                      {card.desc}
                    </p>
                  </div>

                  {/* Check indicator */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      opacity: selected ? 1 : 0,
                      transition: 'opacity 150ms',
                      color: '#003f7a',
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 24 }}>check_circle</span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Actions row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: 32,
              marginTop: 48,
              borderTop: '1px solid #c2c6d2',
            }}
          >
            {/* Back */}
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                padding: '8px 24px',
                fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: 600,
                color: '#003f7a',
                background: 'transparent',
                border: 'none',
                borderRadius: 4,
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'background-color 150ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#ededf4' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_back</span>
              Back
            </Link>

            {/* Next */}
            <button
              type="button"
              disabled={!selectedRole}
              onClick={() => { if (selectedRole) setStep('details') }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                padding: '8px 24px',
                fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: 600,
                color: '#ffffff',
                backgroundColor: selectedRole ? '#003f7a' : '#c2c6d2',
                border: 'none',
                borderRadius: 4,
                cursor: selectedRole ? 'pointer' : 'not-allowed',
                boxShadow: selectedRole ? '0 1px 2px 0 rgba(30,87,153,0.05)' : 'none',
                transition: 'background-color 150ms, box-shadow 150ms',
              }}
              onMouseEnter={e => {
                if (selectedRole) e.currentTarget.style.backgroundColor = '#004787'
              }}
              onMouseLeave={e => {
                if (selectedRole) e.currentTarget.style.backgroundColor = '#003f7a'
              }}
            >
              Next
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </button>
          </div>
        </div>

        {/* EWD-002 watermark */}
        <div
          className="pointer-events-none select-none"
          aria-hidden="true"
          style={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            fontFamily: '"Inter", system-ui, sans-serif',
            fontSize: '14px',
            color: 'rgba(66,71,80,0.5)',
            zIndex: 50,
          }}
        >
          EWD-002
        </div>

        <style>{`
          .sm\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
          @media (min-width: 1024px) {
            .lg\\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
          }
        `}</style>
      </div>
    )
  }

  /* ── Step 2: Account details ── */
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f9f9ff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div style={{ width: '100%', maxWidth: 420 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h1
            style={{
              fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
              fontSize: '32px',
              lineHeight: '40px',
              letterSpacing: '-0.01em',
              fontWeight: 600,
              color: '#191c20',
              margin: '0 0 8px 0',
            }}
          >
            Create your account
          </h1>
          <p style={{ fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', color: '#424750', margin: 0 }}>
            Signing up as{' '}
            <strong style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, color: '#003f7a' }}>
              {selectedRole ? LABEL[selectedRole] : ''}
            </strong>
          </p>
        </div>

        {/* Form card */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #c2c6d2',
            borderRadius: 16,
            padding: 24,
            boxShadow: '0 1px 2px 0 rgba(30,87,153,0.05)',
          }}
        >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { id: 'name', label: 'Full name', type: 'text', placeholder: 'Your full name', value: fullName, onChange: (v: string) => setFullName(v), autoComplete: 'name' },
              { id: 'email', label: 'Email', type: 'email', placeholder: 'name@example.com', value: email, onChange: (v: string) => setEmail(v), autoComplete: 'email' },
              { id: 'password', label: 'Password', type: 'password', placeholder: 'At least 8 characters', value: password, onChange: (v: string) => setPassword(v), autoComplete: 'new-password' },
            ].map(field => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  style={{
                    display: 'block',
                    fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#191c20',
                    marginBottom: 4,
                  }}
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  value={field.value}
                  autoComplete={field.autoComplete}
                  onChange={e => field.onChange(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontFamily: '"Inter", system-ui, sans-serif',
                    fontSize: '16px',
                    color: '#191c20',
                    backgroundColor: '#ffffff',
                    border: '1px solid #c2c6d2',
                    borderRadius: 8,
                    outline: 'none',
                    transition: 'border-color 150ms, box-shadow 150ms',
                    boxSizing: 'border-box',
                  }}
                  onFocus={e => {
                    e.target.style.borderColor = '#003f7a'
                    e.target.style.boxShadow = '0 0 0 3px rgba(0,63,122,0.20)'
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = '#c2c6d2'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>
            ))}

            <button
              type="submit"
              disabled={loading}
              style={{
                marginTop: 8,
                width: '100%',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                color: '#ffffff',
                backgroundColor: loading ? '#1e5799' : '#003f7a',
                border: 'none',
                borderRadius: 8,
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'background-color 150ms, transform 100ms',
              }}
              onMouseEnter={e => { if (!loading) e.currentTarget.style.backgroundColor = '#1e5799' }}
              onMouseLeave={e => { if (!loading) e.currentTarget.style.backgroundColor = '#003f7a' }}
              onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.98)' }}
              onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              {loading ? 'Creating account…' : 'Create account'}
            </button>

            <button
              type="button"
              onClick={() => setStep('role')}
              style={{
                width: '100%',
                padding: '8px',
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: '14px',
                color: '#424750',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 150ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#191c20' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#424750' }}
            >
              ← Change role
            </button>
          </form>
        </div>

        <p style={{ textAlign: 'center', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', color: '#424750', marginTop: 24 }}>
          Already have an account?{' '}
          <Link
            href="/login"
            style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 600, color: '#003f7a', textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.textDecoration = 'underline' }}
            onMouseLeave={e => { e.currentTarget.style.textDecoration = 'none' }}
          >
            Sign in
          </Link>
        </p>

        <p style={{ textAlign: 'center', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', color: '#424750', marginTop: 16 }}>
          By signing up, you agree to our{' '}
          <Link href="/terms" style={{ textDecoration: 'underline', color: '#424750' }}>Terms</Link>
          {' '}and{' '}
          <Link href="/privacy" style={{ textDecoration: 'underline', color: '#424750' }}>Privacy Policy</Link>.
        </p>
      </div>
    </div>
  )
}
