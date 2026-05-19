import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const ROLE_HOME: Record<string, string> = {
  explorer: '/explorer',
  achiever: '/achiever',
  scholar: '/scholar',
  teacher: '/teacher',
  parent: '/parent',
  admin: '/admin',
  enterprise_manager: '/enterprise',
  enterprise: '/enterprise',
}

const PUBLIC_ROUTES = ['/', '/login', '/signup', '/onboarding', '/forgot-password', '/reset-password', '/support', '/auth']

export async function middleware(request: NextRequest) {
  const response = NextResponse.next({ request })

  // Skip auth entirely if Supabase isn't configured yet
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return response
  }

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()
  const path = request.nextUrl.pathname
  const isPublic = PUBLIC_ROUTES.some(r => path === r || path.startsWith(r + '/'))

  if (!user && !isPublic) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (user && isPublic && path !== '/') {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role, onboarding_completed')
      .eq('id', user.id)
      .single()

    if (profile) {
      if (!profile.onboarding_completed) {
        return NextResponse.redirect(new URL('/onboarding', request.url))
      }
      return NextResponse.redirect(
        new URL(ROLE_HOME[profile.role as string] ?? '/login', request.url)
      )
    }
  }

  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api).*)'],
}
