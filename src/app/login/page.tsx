'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@/lib/supabase/client'
import { toast } from 'sonner'

const ROLE_HOME: Record<string, string> = {
  explorer: '/explorer/dashboard',
  achiever: '/achiever/dashboard',
  scholar: '/scholar/command-center',
  teacher: '/teacher/dashboard',
  parent: '/parent/dashboard',
  admin: '/admin/dashboard',
  enterprise_manager: '/enterprise/dashboard',
  enterprise: '/enterprise/dashboard',
}

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [oauthLoading, setOauthLoading] = useState<'google' | 'azure' | null>(null)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    const supabase = createBrowserClient()
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      toast.error(error.message)
      setLoading(false)
      return
    }
    // Check profile to decide where to send the user
    const { data: profile } = await supabase
      .from('profiles')
      .select('role, onboarding_completed')
      .eq('id', data.user.id)
      .single() as { data: { role: string; onboarding_completed: boolean } | null }

    if (!profile || !profile.onboarding_completed) {
      router.push('/onboarding')
    } else {
      router.push(ROLE_HOME[profile.role] ?? '/onboarding')
    }
  }

  async function handleGoogle() {
    setOauthLoading('google')
    const supabase = createBrowserClient()
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        queryParams: { access_type: 'offline', prompt: 'consent' },
      },
    })
    if (error) {
      toast.error(error.message)
      setOauthLoading(null)
    }
    // On success the browser navigates away — no need to reset loading
  }

  async function handleMicrosoft() {
    setOauthLoading('azure')
    const supabase = createBrowserClient()
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'azure',
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    })
    if (error) {
      toast.error(error.message)
      setOauthLoading(null)
    }
  }

  return (
    <div
      className="flex h-screen w-full overflow-hidden antialiased"
      style={{ backgroundColor: '#f9f9ff' }}
    >
      {/* ── Left decorative panel (desktop only) ── */}
      <div
        className="hidden md:flex md:w-5/12 lg:w-4/12 relative overflow-hidden flex-col items-center justify-center"
        style={{
          backgroundColor: '#2e3035',
          borderRight: '1px solid rgba(194,198,210,0.2)',
        }}
      >
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(135deg, rgba(0,63,122,0.95) 0%, rgba(46,48,53,0.90) 100%)',
          }}
        />

        {/* SVG decorative network lines */}
        <svg
          className="absolute w-full h-full z-20 pointer-events-none"
          style={{ opacity: 0.3 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100,100 Q150,300 400,-50 T900,400"
            stroke="#6cf8bb"
            strokeDasharray="4 4"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M0,400 Q200,100 500,200 T1000,0"
            stroke="#d5e3ff"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          />
        </svg>

        {/* Floating nodes */}
        {[
          { top: '25%', left: '35%', size: 12, bg: '#6ffbbe', shadow: '0 0 24px #6cf8bb', dur: '6s', delay: '0s' },
          { top: '60%', left: '65%', size: 16, bg: '#d5e3ff', shadow: '0 0 32px #d5e3ff', dur: '8s', delay: '-2s' },
          { top: '75%', left: '25%', size: 8, bg: '#ffddb8', shadow: '0 0 16px #ffddb8', dur: '6s', delay: '-4s' },
        ].map((node, i) => (
          <div
            key={i}
            className="absolute rounded-full z-20 pointer-events-none"
            style={{
              top: node.top,
              left: node.left,
              width: node.size,
              height: node.size,
              backgroundColor: node.bg,
              boxShadow: node.shadow,
              animation: `leftPanelFloat ${node.dur} ease-in-out infinite alternate`,
              animationDelay: node.delay,
            }}
          />
        ))}

        {/* Centered branding */}
        <div className="relative z-30 flex flex-col items-center text-center" style={{ padding: '0 32px' }}>
          {/* Logo icon */}
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 16,
              background: 'rgba(255,255,255,0.10)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.20)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 32,
              boxShadow: '0 48px 96px -16px rgba(30,87,153,0.14)',
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: 40,
                color: '#d5e3ff',
                fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 40",
              }}
            >
              public
            </span>
          </div>

          <h2
            style={{
              fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
              fontSize: '48px',
              lineHeight: '56px',
              letterSpacing: '-0.02em',
              fontWeight: 700,
              color: '#ffffff',
              margin: 0,
            }}
          >
            EduWorld
          </h2>
          <p
            style={{
              fontFamily: '"Inter", system-ui, sans-serif',
              fontSize: '18px',
              lineHeight: '28px',
              fontWeight: 400,
              color: '#a6c8ff',
              marginTop: 16,
              maxWidth: 280,
            }}
          >
            The intelligent global learning network.
          </p>
        </div>
      </div>

      {/* ── Right form panel ── */}
      <div
        className="flex flex-col justify-center overflow-y-auto relative w-full md:w-7/12 lg:w-8/12"
        style={{
          backgroundColor: '#ffffff',
          padding: '48px 24px',
        }}
      >
        <div style={{ maxWidth: 420, margin: '0 auto', width: '100%' }}>

          {/* Mobile-only logo */}
          <div className="flex items-center md:hidden" style={{ gap: 8, marginBottom: 48 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                backgroundColor: '#003f7a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: 24,
                  color: '#ffffff',
                  fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                }}
              >
                public
              </span>
            </div>
            <span
              style={{
                fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                fontSize: '24px',
                lineHeight: '32px',
                fontWeight: 700,
                color: '#003f7a',
              }}
            >
              EduWorld
            </span>
          </div>

          {/* Heading */}
          <div style={{ marginBottom: 32 }}>
            <h1
              style={{
                fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                fontSize: 'clamp(36px, 5vw, 48px)',
                lineHeight: 'clamp(44px, 6vw, 56px)',
                letterSpacing: '-0.02em',
                fontWeight: 700,
                color: '#191c20',
                margin: '0 0 8px 0',
              }}
            >
              Welcome back
            </h1>
            <p
              style={{
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: '16px',
                lineHeight: '24px',
                fontWeight: 400,
                color: '#424750',
                margin: 0,
              }}
            >
              Log in to your EduWorld account.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                style={{
                  display: 'block',
                  fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: 600,
                  color: '#191c20',
                  marginBottom: 4,
                }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                placeholder="name@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontFamily: '"Inter", system-ui, sans-serif',
                  fontSize: '16px',
                  lineHeight: '24px',
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

            {/* Password */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                <label
                  htmlFor="password"
                  style={{
                    fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                    fontSize: '14px',
                    lineHeight: '20px',
                    fontWeight: 600,
                    color: '#191c20',
                  }}
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  style={{
                    fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#003f7a',
                    textDecoration: 'none',
                    transition: 'color 150ms',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#1e5799' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#003f7a' }}
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontFamily: '"Inter", system-ui, sans-serif',
                  fontSize: '16px',
                  lineHeight: '24px',
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

            {/* Sign in button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                marginTop: 8,
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: 600,
                color: '#ffffff',
                backgroundColor: loading ? '#1e5799' : '#003f7a',
                border: 'none',
                borderRadius: 8,
                cursor: loading ? 'not-allowed' : 'pointer',
                boxShadow: '0 1px 2px 0 rgba(30,87,153,0.05)',
                transition: 'background-color 150ms, box-shadow 150ms, transform 100ms',
              }}
              onMouseEnter={e => {
                if (!loading) {
                  e.currentTarget.style.backgroundColor = '#1e5799'
                  e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(30,87,153,0.10)'
                }
              }}
              onMouseLeave={e => {
                if (!loading) {
                  e.currentTarget.style.backgroundColor = '#003f7a'
                  e.currentTarget.style.boxShadow = '0 1px 2px 0 rgba(30,87,153,0.05)'
                }
              }}
              onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.98)' }}
              onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              {loading ? 'Signing in…' : 'Sign in'}
              {!loading && (
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
              )}
            </button>
          </form>

          {/* Divider */}
          <div style={{ position: 'relative', padding: '32px 0', marginTop: 8 }}>
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, backgroundColor: 'rgba(194,198,210,0.6)' }} />
            <span
              style={{
                position: 'relative',
                display: 'block',
                width: 'fit-content',
                margin: '0 auto',
                padding: '0 16px',
                backgroundColor: '#ffffff',
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                color: '#424750',
              }}
            >
              or
            </span>
          </div>

          {/* OAuth buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Google */}
            <button
              type="button"
              onClick={handleGoogle}
              disabled={oauthLoading !== null}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 16,
                padding: '12px 16px',
                fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: 600,
                color: '#191c20',
                backgroundColor: '#f9f9ff',
                border: '1px solid #c2c6d2',
                borderRadius: 8,
                cursor: oauthLoading !== null ? 'not-allowed' : 'pointer',
                opacity: oauthLoading === 'azure' ? 0.5 : 1,
                transition: 'background-color 150ms, border-color 150ms, transform 100ms',
              }}
              onMouseEnter={e => {
                if (!oauthLoading) {
                  e.currentTarget.style.backgroundColor = '#ededf4'
                  e.currentTarget.style.borderColor = '#727781'
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#f9f9ff'
                e.currentTarget.style.borderColor = '#c2c6d2'
              }}
              onMouseDown={e => { if (!oauthLoading) e.currentTarget.style.transform = 'scale(0.99)' }}
              onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              {oauthLoading === 'google' ? (
                <span className="material-symbols-outlined" style={{ fontSize: 20, animation: 'spin 1s linear infinite' }}>progress_activity</span>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              )}
              {oauthLoading === 'google' ? 'Redirecting to Google…' : 'Continue with Google'}
            </button>

            {/* Microsoft */}
            <button
              type="button"
              onClick={handleMicrosoft}
              disabled={oauthLoading !== null}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 16,
                padding: '12px 16px',
                fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: 600,
                color: '#191c20',
                backgroundColor: '#f9f9ff',
                border: '1px solid #c2c6d2',
                borderRadius: 8,
                cursor: oauthLoading !== null ? 'not-allowed' : 'pointer',
                opacity: oauthLoading === 'google' ? 0.5 : 1,
                transition: 'background-color 150ms, border-color 150ms, transform 100ms',
              }}
              onMouseEnter={e => {
                if (!oauthLoading) {
                  e.currentTarget.style.backgroundColor = '#ededf4'
                  e.currentTarget.style.borderColor = '#727781'
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#f9f9ff'
                e.currentTarget.style.borderColor = '#c2c6d2'
              }}
              onMouseDown={e => { if (!oauthLoading) e.currentTarget.style.transform = 'scale(0.99)' }}
              onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              {oauthLoading === 'azure' ? (
                <span className="material-symbols-outlined" style={{ fontSize: 20, animation: 'spin 1s linear infinite' }}>progress_activity</span>
              ) : (
                <svg width="21" height="21" viewBox="0 0 21 21" aria-hidden="true">
                  <rect x="0" y="0" width="10" height="10" fill="#F25022" />
                  <rect x="11" y="0" width="10" height="10" fill="#7FBA00" />
                  <rect x="0" y="11" width="10" height="10" fill="#00A4EF" />
                  <rect x="11" y="11" width="10" height="10" fill="#FFB900" />
                </svg>
              )}
              {oauthLoading === 'azure' ? 'Redirecting to Microsoft…' : 'Continue with Microsoft'}
            </button>
          </div>

          {/* Footer */}
          <p
            style={{
              marginTop: 48,
              textAlign: 'center',
              fontFamily: '"Inter", system-ui, sans-serif',
              fontSize: '16px',
              lineHeight: '24px',
              color: '#424750',
            }}
          >
            New to EduWorld?{' '}
            <Link
              href="/signup"
              style={{
                fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                color: '#003f7a',
                textDecoration: 'none',
                transition: 'color 150ms',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#1e5799'
                e.currentTarget.style.textDecoration = 'underline'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#003f7a'
                e.currentTarget.style.textDecoration = 'none'
              }}
            >
              Signup
            </Link>
          </p>
        </div>

        {/* EWD-003 watermark */}
        <div
          className="absolute pointer-events-none select-none"
          aria-hidden="true"
          style={{
            bottom: 16,
            right: 24,
            fontFamily: '"Inter", system-ui, sans-serif',
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'rgba(66,71,80,0.4)',
          }}
        >
          EWD-003
        </div>
      </div>

      <style>{`
        @keyframes leftPanelFloat {
          0%   { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
