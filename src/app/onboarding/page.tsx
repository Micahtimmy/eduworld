'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@/lib/supabase/client'

const ONBOARDING_START: Record<string, string> = {
  explorer: '/explorer/onboarding/name',
  achiever: '/achiever/onboarding/welcome',
  scholar: '/scholar/command-center',
  teacher: '/teacher/dashboard',
  parent: '/parent/dashboard',
  admin: '/admin/dashboard',
  enterprise_manager: '/enterprise/dashboard',
  enterprise: '/enterprise/dashboard',
}

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

export default function OnboardingRouter() {
  const router = useRouter()

  useEffect(() => {
    async function route() {
      const supabase = createBrowserClient()
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        router.replace('/login')
        return
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('role, onboarding_completed')
        .eq('id', user.id)
        .single() as { data: { role: string; onboarding_completed: boolean } | null }

      if (!profile) {
        // Profile not created yet (happens right after OAuth first login)
        // Stay and show spinner — profile will be created by a Supabase trigger
        return
      }

      if (profile.onboarding_completed) {
        router.replace(ROLE_HOME[profile.role] ?? '/login')
      } else {
        router.replace(ONBOARDING_START[profile.role] ?? '/login')
      }
    }
    route()
  }, [router])

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f9f9ff',
      fontFamily: '"Inter", system-ui, sans-serif',
      gap: 16,
    }}>
      <div style={{
        width: 48, height: 48, borderRadius: '50%',
        border: '3px solid #c2c6d2',
        borderTopColor: '#003f7a',
        animation: 'spin 0.8s linear infinite',
      }} />
      <p style={{ color: '#424750', fontSize: 14 }}>Setting up your experience…</p>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
