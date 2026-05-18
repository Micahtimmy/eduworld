import type { Role } from '@/lib/constants'

export interface User {
  id: string
  email: string
  role: Role
  onboarding_completed: boolean
  created_at: string
}

export interface Profile {
  id: string
  user_id: string
  role: Role
  full_name: string
  avatar_url: string | null
  school_id: string | null
  onboarding_completed: boolean
  xp: number
  level: number
  streak_days: number
  last_active: string
  preferences: UserPreferences
  created_at: string
  updated_at: string
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system'
  language: string
  notifications_enabled: boolean
}

export interface School {
  id: string
  name: string
  logo_url: string | null
  type: 'primary' | 'secondary' | 'university' | 'college'
  country: string
  timezone: string
  subscription_tier: 'free' | 'standard' | 'premium' | 'enterprise'
}

export interface Subject {
  id: string
  name: string
  color: string
  icon: string
  grade_level: string
  school_id: string
}

export interface Lesson {
  id: string
  title: string
  subject_id: string
  teacher_id: string
  content_type: 'video' | 'text' | 'interactive' | 'quiz'
  duration_minutes: number
  xp_reward: number
  thumbnail_url: string | null
  created_at: string
}

export interface Assignment {
  id: string
  title: string
  description: string
  subject_id: string
  teacher_id: string
  due_date: string
  max_score: number
  xp_reward: number
  status: 'draft' | 'published' | 'closed'
  type: 'homework' | 'project' | 'quiz' | 'exam'
}

export interface Achievement {
  id: string
  title: string
  description: string
  /** emoji or URL */
  icon: string
  /** backwards-compat alias */
  icon_url?: string
  tier: 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond'
  xp_reward: number
  created_at?: string
  condition_type?: string
  condition_value?: number
}

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export interface NavItem {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  badge?: number | string
}

export interface StatCardDef {
  label: string
  value: string | number
  trend?: {
    direction: 'up' | 'down' | 'neutral'
    value: string
  }
  icon?: React.ComponentType<{ className?: string }>
  color?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  count: number
  page: number
  pageSize: number
  hasMore: boolean
}
