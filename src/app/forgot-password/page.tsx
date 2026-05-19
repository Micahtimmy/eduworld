'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createBrowserClient } from '@/lib/supabase/client'
import { toast } from 'sonner'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    const supabase = createBrowserClient()
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
    })
    if (error) {
      toast.error(error.message)
      setLoading(false)
    } else {
      setSent(true)
    }
  }

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#f9f9ff', padding: '24px', fontFamily: '"Inter", system-ui, sans-serif',
    }}>
      <div style={{ width: '100%', maxWidth: 420 }}>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 40, justifyContent: 'center' }}>
          <div style={{ width: 40, height: 40, borderRadius: 8, background: '#003f7a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 24, color: '#fff' }}>public</span>
          </div>
          <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 22, color: '#003f7a' }}>EduWorld</span>
        </div>

        {sent ? (
          /* ── Success state ── */
          <div style={{ background: '#fff', border: '1px solid #c2c6d2', borderRadius: 16, padding: 32, textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 32, color: '#10B981' }}>mark_email_read</span>
            </div>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontSize: 24, fontWeight: 700, color: '#191c20', margin: '0 0 8px' }}>Check your email</h1>
            <p style={{ color: '#424750', fontSize: 15, lineHeight: '22px', margin: '0 0 24px' }}>
              We sent a password reset link to <strong style={{ color: '#191c20' }}>{email}</strong>
            </p>
            <p style={{ fontSize: 13, color: '#727781', margin: '0 0 24px' }}>
              Didn&apos;t receive it? Check your spam folder or{' '}
              <button onClick={() => setSent(false)} style={{ background: 'none', border: 'none', color: '#003f7a', fontWeight: 600, cursor: 'pointer', fontSize: 13, padding: 0 }}>
                try again
              </button>.
            </p>
            <Link href="/login" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#003f7a', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_back</span>
              Back to sign in
            </Link>
          </div>
        ) : (
          /* ── Form ── */
          <div style={{ background: '#fff', border: '1px solid #c2c6d2', borderRadius: 16, padding: 32, boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontSize: 28, fontWeight: 700, color: '#191c20', margin: '0 0 8px' }}>Reset your password</h1>
            <p style={{ color: '#424750', fontSize: 15, margin: '0 0 28px' }}>Enter your email and we&apos;ll send you a reset link.</p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <label htmlFor="email" style={{ display: 'block', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontSize: 14, fontWeight: 600, color: '#191c20', marginBottom: 4 }}>
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{ width: '100%', padding: '12px 16px', fontSize: 16, color: '#191c20', background: '#fff', border: '1px solid #c2c6d2', borderRadius: 8, outline: 'none', boxSizing: 'border-box', transition: 'border-color 150ms, box-shadow 150ms' }}
                  onFocus={e => { e.target.style.borderColor = '#003f7a'; e.target.style.boxShadow = '0 0 0 3px rgba(0,63,122,0.2)' }}
                  onBlur={e => { e.target.style.borderColor = '#c2c6d2'; e.target.style.boxShadow = 'none' }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{ width: '100%', padding: '13px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontSize: 14, fontWeight: 600, color: '#fff', background: loading ? '#1e5799' : '#003f7a', border: 'none', borderRadius: 8, cursor: loading ? 'not-allowed' : 'pointer', transition: 'background 150ms' }}
                onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#1e5799' }}
                onMouseLeave={e => { if (!loading) e.currentTarget.style.background = '#003f7a' }}
              >
                {loading ? 'Sending…' : 'Send reset link'}
                {!loading && <span className="material-symbols-outlined" style={{ fontSize: 18 }}>send</span>}
              </button>
            </form>

            <div style={{ textAlign: 'center', marginTop: 24 }}>
              <Link href="/login" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#424750', fontSize: 14, textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#003f7a' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#424750' }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_back</span>
                Back to sign in
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
