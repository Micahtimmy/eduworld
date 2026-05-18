'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Bell, Search, GraduationCap, Menu, X, ChevronDown } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useUser } from '@/hooks/use-user'
import { useAppStore } from '@/stores/app-store'
import { getInitials } from '@/lib/utils'
import { createBrowserClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

interface TopBarProps {
  title?: string
  showSearch?: boolean
  showMenuButton?: boolean
  onMenuClick?: () => void
}

export function TopBar({ title, showSearch = true, showMenuButton, onMenuClick }: TopBarProps) {
  const { user, profile } = useUser()
  const { sidebarOpen } = useAppStore()
  const [profileOpen, setProfileOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const router = useRouter()

  const displayName = profile?.full_name ?? user?.email ?? ''
  const initials = getInitials(displayName)

  async function handleSignOut() {
    const supabase = createBrowserClient()
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <header className={cn(
      'fixed top-0 right-0 z-20 h-16',
      'bg-surface-lowest border-b border-outline-variant',
      'flex items-center px-4 gap-3',
      // Offset by sidebar width on desktop
      'left-0 lg:left-16',
      sidebarOpen && 'lg:left-56',
      'transition-all duration-300'
    )}>
      {showMenuButton && (
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg text-on-surface-variant hover:bg-surface-high"
        >
          <Menu className="h-5 w-5" />
        </button>
      )}

      {/* Logo (mobile) */}
      <Link href="/" className="lg:hidden flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
          <GraduationCap className="h-4 w-4 text-white" />
        </div>
        <span className="font-display font-bold text-primary text-sm">EduWorld</span>
      </Link>

      {title && (
        <h1 className="hidden lg:block font-display font-semibold text-on-surface text-base">
          {title}
        </h1>
      )}

      <div className="flex-1" />

      {/* Search */}
      {showSearch && (
        <button className="hidden md:flex items-center gap-2 h-9 px-3 rounded-lg bg-surface-high text-on-surface-variant text-sm hover:bg-surface-highest transition-colors">
          <Search className="h-4 w-4" />
          <span className="font-label">Search...</span>
          <kbd className="ml-2 text-xs bg-surface-highest px-1.5 py-0.5 rounded">⌘K</kbd>
        </button>
      )}

      {/* Notifications */}
      <div className="relative">
        <button
          onClick={() => { setNotificationsOpen(!notificationsOpen); setProfileOpen(false) }}
          className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-high transition-colors"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error" />
        </button>

        {notificationsOpen && (
          <div className="absolute right-0 mt-1 w-80 bg-surface-lowest border border-outline-variant rounded-xl shadow-md z-50 p-4">
            <p className="font-label font-semibold text-on-surface mb-3">Notifications</p>
            <div className="space-y-3">
              {[
                { title: 'New lesson available', body: 'Mathematics Chapter 5 is ready', time: '2m ago' },
                { title: 'Achievement unlocked!', body: 'You earned "Quick Learner"', time: '1h ago' },
                { title: 'Assignment due', body: 'Physics homework due tomorrow', time: '3h ago' },
              ].map((n, i) => (
                <div key={i} className="flex gap-3 p-2 rounded-lg hover:bg-surface-high cursor-pointer">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <p className="text-sm font-label font-semibold text-on-surface">{n.title}</p>
                    <p className="text-xs text-on-surface-variant">{n.body}</p>
                    <p className="text-xs text-on-surface-variant mt-0.5">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Profile dropdown */}
      <div className="relative">
        <button
          onClick={() => { setProfileOpen(!profileOpen); setNotificationsOpen(false) }}
          className="flex items-center gap-2 p-1 rounded-lg hover:bg-surface-high transition-colors"
        >
          <Avatar size="sm">
            {profile?.avatar_url && <AvatarImage src={profile.avatar_url} alt={displayName} />}
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <ChevronDown className="h-3.5 w-3.5 text-on-surface-variant hidden md:block" />
        </button>

        {profileOpen && (
          <div className="absolute right-0 mt-1 w-56 bg-surface-lowest border border-outline-variant rounded-xl shadow-md z-50 overflow-hidden">
            <div className="px-4 py-3 border-b border-outline-variant">
              <p className="font-label font-semibold text-on-surface text-sm truncate">{displayName}</p>
              <p className="text-xs text-on-surface-variant truncate">{user?.email}</p>
            </div>
            <div className="py-1">
              {[
                { label: 'Profile', href: '#' },
                { label: 'Settings', href: '#' },
                { label: 'Help', href: '/support' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setProfileOpen(false)}
                  className="block px-4 py-2 text-sm font-label text-on-surface hover:bg-surface-high transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={handleSignOut}
                className="w-full text-left px-4 py-2 text-sm font-label text-error hover:bg-surface-high transition-colors"
              >
                Sign out
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

/* Mobile top bar for Explorer/Achiever/Parent — simpler, with back button support */
interface MobileTopBarProps {
  title: string
  showBack?: boolean
  rightAction?: React.ReactNode
}

export function MobileTopBar({ title, showBack, rightAction }: MobileTopBarProps) {
  const router = useRouter()
  return (
    <header className="sticky top-0 z-20 h-14 bg-surface-lowest border-b border-outline-variant flex items-center px-4 gap-3">
      {showBack && (
        <button onClick={() => router.back()} className="p-1.5 rounded-lg hover:bg-surface-high text-on-surface-variant">
          <ChevronDown className="h-5 w-5 rotate-90" />
        </button>
      )}
      <h1 className="flex-1 font-display font-semibold text-on-surface text-base">{title}</h1>
      {rightAction}
    </header>
  )
}
