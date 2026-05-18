'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  Home, BookOpen, Brain, Trophy, Users, MessageCircle,
  BarChart2, Star, Compass, GraduationCap, ClipboardList,
  Bell, Settings, PieChart
} from 'lucide-react'

type Role = 'explorer' | 'achiever' | 'parent'

interface TabItem {
  label: string
  href: string
  icon: React.ElementType
  activePattern?: RegExp
}

const TABS: Record<Role, TabItem[]> = {
  explorer: [
    { label: 'Home', href: '/explorer', icon: Home, activePattern: /^\/explorer$/ },
    { label: 'Learn', href: '/explorer/learn', icon: BookOpen },
    { label: 'Quest', href: '/explorer/quest', icon: Compass },
    { label: 'Tutor', href: '/explorer/tutor', icon: Brain },
    { label: 'Awards', href: '/explorer/achievements', icon: Trophy },
  ],
  achiever: [
    { label: 'Home', href: '/achiever', icon: Home, activePattern: /^\/achiever$/ },
    { label: 'Study', href: '/achiever/study', icon: BookOpen },
    { label: 'AI Tutor', href: '/achiever/tutor', icon: Brain },
    { label: 'Rank', href: '/achiever/leaderboard', icon: Star },
    { label: 'Profile', href: '/achiever/profile', icon: GraduationCap },
  ],
  parent: [
    { label: 'Home', href: '/parent', icon: Home, activePattern: /^\/parent$/ },
    { label: 'Children', href: '/parent/children', icon: Users },
    { label: 'Progress', href: '/parent/progress', icon: BarChart2 },
    { label: 'Messages', href: '/parent/messages', icon: MessageCircle },
    { label: 'Reports', href: '/parent/reports', icon: ClipboardList },
  ],
}

interface BottomTabBarProps {
  role: Role
}

export function BottomTabBar({ role }: BottomTabBarProps) {
  const pathname = usePathname()
  const tabs = TABS[role]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-outline-variant bg-surface-lowest pb-safe">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const isActive = tab.activePattern
            ? tab.activePattern.test(pathname)
            : pathname.startsWith(tab.href)
          const Icon = tab.icon

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                'flex flex-col items-center gap-0.5 px-3 py-2 min-w-[56px] transition-colors',
                isActive ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
              )}
            >
              <div className={cn(
                'relative flex items-center justify-center w-12 h-6 rounded-full transition-all',
                isActive && 'bg-primary/10'
              )}>
                <Icon className="h-5 w-5" strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={cn(
                'text-xs font-label',
                isActive ? 'font-semibold text-primary' : 'font-medium text-on-surface-variant'
              )}>
                {tab.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
