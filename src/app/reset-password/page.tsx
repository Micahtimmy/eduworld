'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@/lib/supabase/client'
import { toast } from 'sonner'

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (password.length < 8) { toast.error('Password must be at least 8 characters'); return }
    if (password !== confirm) { toast.error('Passwords do not match'); return }
    setLoading(true)
    const supabase = createBrowserClient()
    const { error } = await supabase.auth.updateUser({ password })
    if (error) {
      toast.error(error.message)
      setLoading(false)
    } else {
      toast.success('Password updated successfully!')
      router.push('/login')
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9f9ff', padding: 24, fontFamily: '"Inter", system-ui, sans-serif' }}>
      <div style={{ width: '100%', maxWidth: 420 }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 40, justifyContent: 'center' }}>
          <div style={{ width: 40, height: 40, borderRadius: 8, background: '#003f7a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 24, color: '#fff' }}>public</span>
          </div>
          <span style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontWeight: 700, fontSize: 22, color: '#003f7a' }}>EduWorld</span>
        </div>

        <div style={{ background: '#fff', border: '1px solid #c2c6d2', borderRadius: 16, padding: 32, boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
          <div style={{ marginBottom: 28 }}>
            <h1 style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontSize: 28, fontWeight: 700, color: '#191c20', margin: '0 0 6px' }}>Set new password</h1>
            <p style={{ color: '#424750', fontSize: 15, margin: 0 }}>Choose a strong password for your account.</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {[
              { id: 'pw', label: 'New password', value: password, onChange: setPassword, placeholder: 'At least 8 characters' },
              { id: 'cpw', label: 'Confirm password', value: confirm, onChange: setConfirm, placeholder: 'Repeat your password' },
            ].map(f => (
              <div key={f.id}>
                <label htmlFor={f.id} style={{ display: 'block', fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontSize: 14, fontWeight: 600, color: '#191c20', marginBottom: 4 }}>{f.label}</label>
                <input
                  id={f.id} type="password" required placeholder={f.placeholder} value={f.value}
                  onChange={e => f.onChange(e.target.value)}
                  style={{ width: '100%', padding: '12px 16px', fontSize: 16, color: '#191c20', background: '#fff', border: '1px solid #c2c6d2', borderRadius: 8, outline: 'none', boxSizing: 'border-box', transition: 'border-color 150ms, box-shadow 150ms' }}
                  onFocus={e => { e.target.style.borderColor = '#003f7a'; e.target.style.boxShadow = '0 0 0 3px rgba(0,63,122,0.2)' }}
                  onBlur={e => { e.target.style.borderColor = '#c2c6d2'; e.target.style.boxShadow = 'none' }}
                />
              </div>
            ))}

            <button
              type="submit" disabled={loading}
              style={{ width: '100%', padding: '13px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif', fontSize: 14, fontWeight: 600, color: '#fff', background: loading ? '#1e5799' : '#003f7a', border: 'none', borderRadius: 8, cursor: loading ? 'not-allowed' : 'pointer', transition: 'background 150ms', marginTop: 4 }}
              onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#1e5799' }}
              onMouseLeave={e => { if (!loading) e.currentTarget.style.background = '#003f7a' }}
            >
              {loading ? 'Updating…' : 'Update password'}
              {!loading && <span className="material-symbols-outlined" style={{ fontSize: 18 }}>lock_reset</span>}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
