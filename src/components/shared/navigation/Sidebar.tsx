'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useAppStore } from '@/stores/app-store'
import {
  Home, BookOpen, Brain, Users, BarChart2, Settings,
  GraduationCap, ClipboardList, Bell, MessageCircle,
  Building2, PieChart, Shield, Globe, Briefcase,
  FileText, Award, ChevronLeft, ChevronRight, Lightbulb,
  Calendar, UserCheck, BookMarked, TrendingUp, Layers
} from 'lucide-react'

type DesktopRole = 'scholar' | 'teacher' | 'admin' | 'government' | 'enterprise'

interface NavItem {
  label: string
  href: string
  icon: React.ElementType
  activePattern?: RegExp
}

interface NavSection {
  title?: string
  items: NavItem[]
}

const NAV: Record<DesktopRole, NavSection[]> = {
  scholar: [
    {
      items: [
        { label: 'Dashboard', href: '/scholar', icon: Home, activePattern: /^\/scholar$/ },
        { label: 'Courses', href: '/scholar/courses', icon: BookOpen },
        { label: 'AI Tutor', href: '/scholar/tutor', icon: Brain },
        { label: 'Research', href: '/scholar/research', icon: Lightbulb },
        { label: 'Schedule', href: '/scholar/schedule', icon: Calendar },
      ],
    },
    {
      title: 'Progress',
      items: [
        { label: 'Grades', href: '/scholar/grades', icon: ClipboardList },
        { label: 'Achievements', href: '/scholar/achievements', icon: Award },
        { label: 'Analytics', href: '/scholar/analytics', icon: BarChart2 },
      ],
    },
    {
      title: 'Social',
      items: [
        { label: 'Study Groups', href: '/scholar/groups', icon: Users },
        { label: 'Messages', href: '/scholar/messages', icon: MessageCircle },
      ],
    },
  ],
  teacher: [
    {
      items: [
        { label: 'Dashboard', href: '/teacher', icon: Home, activePattern: /^\/teacher$/ },
        { label: 'My Classes', href: '/teacher/classes', icon: Users },
        { label: 'Lessons', href: '/teacher/lessons', icon: BookOpen },
        { label: 'AI Studio', href: '/teacher/ai-studio', icon: Brain },
        { label: 'Assignments', href: '/teacher/assignments', icon: ClipboardList },
      ],
    },
    {
      title: 'Insights',
      items: [
        { label: 'Student Progress', href: '/teacher/progress', icon: TrendingUp },
        { label: 'Analytics', href: '/teacher/analytics', icon: BarChart2 },
        { label: 'Reports', href: '/teacher/reports', icon: FileText },
      ],
    },
    {
      title: 'Communication',
      items: [
        { label: 'Messages', href: '/teacher/messages', icon: MessageCircle },
        { label: 'Announcements', href: '/teacher/announcements', icon: Bell },
      ],
    },
  ],
  admin: [
    {
      items: [
        { label: 'Dashboard', href: '/admin', icon: Home, activePattern: /^\/admin$/ },
        { label: 'Students', href: '/admin/students', icon: GraduationCap },
        { label: 'Teachers', href: '/admin/teachers', icon: UserCheck },
        { label: 'Classes', href: '/admin/classes', icon: Users },
        { label: 'Curriculum', href: '/admin/curriculum', icon: BookMarked },
      ],
    },
    {
      title: 'Operations',
      items: [
        { label: 'Analytics', href: '/admin/analytics', icon: BarChart2 },
        { label: 'Reports', href: '/admin/reports', icon: FileText },
        { label: 'Fees & Billing', href: '/admin/billing', icon: Building2 },
      ],
    },
    {
      title: 'System',
      items: [
        { label: 'Settings', href: '/admin/settings', icon: Settings },
        { label: 'Permissions', href: '/admin/permissions', icon: Shield },
      ],
    },
  ],
  government: [
    {
      items: [
        { label: 'Overview', href: '/government', icon: Home, activePattern: /^\/government$/ },
        { label: 'Districts', href: '/government/districts', icon: Globe },
        { label: 'Schools', href: '/government/schools', icon: Building2 },
        { label: 'Curriculum', href: '/government/curriculum', icon: BookMarked },
      ],
    },
    {
      title: 'Analytics',
      items: [
        { label: 'Performance', href: '/government/performance', icon: TrendingUp },
        { label: 'Reports', href: '/government/reports', icon: FileText },
        { label: 'Compliance', href: '/government/compliance', icon: Shield },
      ],
    },
    {
      title: 'Policy',
      items: [
        { label: 'Standards', href: '/government/standards', icon: Layers },
        { label: 'Settings', href: '/government/settings', icon: Settings },
      ],
    },
  ],
  enterprise: [
    {
      items: [
        { label: 'Dashboard', href: '/enterprise', icon: Home, activePattern: /^\/enterprise$/ },
        { label: 'Employees', href: '/enterprise/employees', icon: Users },
        { label: 'Programs', href: '/enterprise/programs', icon: BookOpen },
        { label: 'AI Training', href: '/enterprise/ai-training', icon: Brain },
      ],
    },
    {
      title: 'Analytics',
      items: [
        { label: 'Completion', href: '/enterprise/completion', icon: PieChart },
        { label: 'ROI', href: '/enterprise/roi', icon: TrendingUp },
        { label: 'Reports', href: '/enterprise/reports', icon: FileText },
      ],
    },
    {
      title: 'Admin',
      items: [
        { label: 'Billing', href: '/enterprise/billing', icon: Briefcase },
        { label: 'Settings', href: '/enterprise/settings', icon: Settings },
      ],
    },
  ],
}

const ROLE_LABELS: Record<DesktopRole, string> = {
  scholar: 'EduWorld Scholar',
  teacher: 'EduWorld Teacher',
  admin: 'School Admin',
  government: 'Gov Portal',
  enterprise: 'Enterprise',
}

interface SidebarProps {
  role: DesktopRole
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname()
  const { sidebarOpen, setSidebarOpen } = useAppStore()
  const sections = NAV[role]

  return (
    <>
      {/* Desktop sidebar */}
      <aside className={cn(
        'hidden lg:flex flex-col fixed left-0 top-0 bottom-0 z-30',
        'bg-surface-lowest border-r border-outline-variant',
        'transition-all duration-300',
        sidebarOpen ? 'w-56' : 'w-16'
      )}>
        {/* Logo */}
        <div className={cn(
          'flex items-center h-16 border-b border-outline-variant px-3 shrink-0',
          sidebarOpen ? 'gap-3' : 'justify-center'
        )}>
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          {sidebarOpen && (
            <span className="font-display font-bold text-primary text-sm truncate">
              {ROLE_LABELS[role]}
            </span>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-3 space-y-1">
          {sections.map((section, si) => (
            <div key={si} className={cn(si > 0 && 'mt-3')}>
              {section.title && sidebarOpen && (
                <p className="px-3 mb-1 text-xs font-label font-semibold text-on-surface-variant uppercase tracking-wide">
                  {section.title}
                </p>
              )}
              {section.items.map((item) => {
                const isActive = item.activePattern
                  ? item.activePattern.test(pathname)
                  : pathname.startsWith(item.href)
                const Icon = item.icon

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    title={!sidebarOpen ? item.label : undefined}
                    className={cn(
                      'flex items-center gap-3 mx-2 px-2 py-2 rounded-lg text-sm transition-colors',
                      isActive
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-on-surface-variant hover:bg-surface-high hover:text-on-surface',
                      !sidebarOpen && 'justify-center'
                    )}
                  >
                    <Icon className={cn('h-5 w-5 shrink-0', isActive ? 'text-primary' : '')} strokeWidth={isActive ? 2.5 : 2} />
                    {sidebarOpen && (
                      <span className="truncate font-label">{item.label}</span>
                    )}
                  </Link>
                )
              })}
            </div>
          ))}
        </nav>

        {/* Collapse toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="flex items-center justify-center h-10 border-t border-outline-variant text-on-surface-variant hover:text-on-surface hover:bg-surface-high transition-colors"
        >
          {sidebarOpen ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </button>
      </aside>
    </>
  )
}
