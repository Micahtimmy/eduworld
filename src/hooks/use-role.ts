'use client'
import { useAppStore } from '@/stores/app-store'
import type { Role } from '@/lib/constants'

export function useRole() {
  const profile = useAppStore((s) => s.profile)
  return {
    role: profile?.role as Role | undefined,
    isExplorer: profile?.role === 'explorer',
    isAchiever: profile?.role === 'achiever',
    isScholar: profile?.role === 'scholar',
    isTeacher: profile?.role === 'teacher',
    isParent: profile?.role === 'parent',
    isAdmin: profile?.role === 'admin',
    isGovernment: profile?.role === 'government',
    isEnterprise: profile?.role === 'enterprise_manager',
  }
}
