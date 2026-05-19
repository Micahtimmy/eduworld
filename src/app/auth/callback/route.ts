import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const ROLE_HOME: Record<string, string> = {
  explorer:           '/explorer/dashboard',
  achiever:           '/achiever/dashboard',
  scholar:            '/scholar/command-center',
  teacher:            '/teacher/dashboard',
  parent:             '/parent/dashboard',
  admin:              '/admin/dashboard',
  enterprise_manager: '/enterprise/dashboard',
  enterprise:         '/enterprise/dashboard',
  government:         '/government/dashboard',
}

const ONBOARDING_START: Record<string, string> = {
  explorer:           '/explorer/onboarding/name',
  achiever:           '/achiever/onboarding/welcome',
  scholar:            '/scholar/onboarding',
  teacher:            '/teacher/onboarding',
  parent:             '/parent/onboarding',
  admin:              '/admin/onboarding',
  enterprise_manager: '/enterprise/onboarding',
  government:         '/government/onboarding',
}

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next')

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      // If caller specified an explicit next (e.g. password reset), honour it
      if (next) {
        return NextResponse.redirect(new URL(next, origin))
      }

      // Otherwise smart-route based on profile
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('role, onboarding_completed')
          .eq('id', user.id)
          .single() as { data: { role: string; onboarding_completed: boolean } | null }

        if (profile) {
          const dest = profile.onboarding_completed
            ? (ROLE_HOME[profile.role] ?? '/onboarding')
            : (ONBOARDING_START[profile.role] ?? '/onboarding')
          return NextResponse.redirect(new URL(dest, origin))
        }
      }
    }
  }

  // Fallback — let /onboarding router figure it out
  return NextResponse.redirect(new URL('/onboarding', origin))
}
