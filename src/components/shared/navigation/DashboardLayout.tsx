'use client'
import { useAppStore } from '@/stores/app-store'
import { cn } from '@/lib/utils'
import { Sidebar } from './Sidebar'
import { BottomTabBar } from './BottomTabBar'
import { TopBar } from './TopBar'

type MobileRole = 'explorer' | 'achiever' | 'parent'
type DesktopRole = 'scholar' | 'teacher' | 'admin' | 'government' | 'enterprise'
type Role = MobileRole | DesktopRole

const MOBILE_ROLES: Role[] = ['explorer', 'achiever', 'parent']
const DESKTOP_ROLES: Role[] = ['scholar', 'teacher', 'admin', 'government', 'enterprise']

interface DashboardLayoutProps {
  role: Role
  title?: string
  children: React.ReactNode
  /** Hides the TopBar (use MobileTopBar inside page instead) */
  noTopBar?: boolean
  /** Apply dark class to this layout's root (role-level dark default) */
  darkDefault?: boolean
}

export function DashboardLayout({ role, title, children, noTopBar, darkDefault }: DashboardLayoutProps) {
  const { sidebarOpen } = useAppStore()
  const isMobileRole = MOBILE_ROLES.includes(role)
  const isDesktopRole = DESKTOP_ROLES.includes(role)

  return (
    <div className={cn('min-h-screen bg-surface', darkDefault && 'dark')}>
      {/* Desktop sidebar */}
      {isDesktopRole && <Sidebar role={role as DesktopRole} />}

      {/* Top bar */}
      {!noTopBar && (
        <TopBar
          title={title}
          showSearch={isDesktopRole}
          showMenuButton={isMobileRole}
        />
      )}

      {/* Main content */}
      <main className={cn(
        'transition-all duration-300',
        // Desktop: offset by sidebar
        isDesktopRole && 'lg:pl-16',
        isDesktopRole && sidebarOpen && 'lg:pl-56',
        // All: offset by top bar
        !noTopBar && 'pt-16',
        // Mobile: offset by bottom tab bar
        isMobileRole && 'pb-20',
      )}>
        {children}
      </main>

      {/* Mobile bottom tab bar */}
      {isMobileRole && <BottomTabBar role={role as MobileRole} />}
    </div>
  )
}
