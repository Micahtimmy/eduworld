export const APP_NAME = 'EduWorld'
export const APP_TAGLINE = 'The AI-Native Global Learning OS'

export const ROLES = {
  EXPLORER: 'explorer',
  ACHIEVER: 'achiever',
  SCHOLAR: 'scholar',
  TEACHER: 'teacher',
  PARENT: 'parent',
  ADMIN: 'admin',
  GOVERNMENT: 'government',
  ENTERPRISE: 'enterprise_manager',
} as const

export type Role = typeof ROLES[keyof typeof ROLES]

export const ROLE_LABELS: Record<string, string> = {
  explorer: 'Explorer',
  achiever: 'Achiever',
  scholar: 'Scholar',
  teacher: 'Teacher',
  parent: 'Parent / Guardian',
  admin: 'School Admin',
  government: 'Government',
  enterprise_manager: 'Enterprise',
  enterprise: 'Enterprise',
}

export const ROLE_DESCRIPTIONS: Record<string, string> = {
  explorer: 'K-12 student — learn through quests, AI tutoring, and gamified adventures',
  achiever: 'Secondary student — prep for exams, track performance, collaborate with peers',
  scholar: 'University / college student — manage courses, research, career planning',
  teacher: 'Educator — create lessons, manage classes, leverage AI insights',
  parent: 'Parent / guardian — monitor progress, communicate with school, manage fees',
  admin: 'School administrator — manage enrollment, staff, analytics, and operations',
  government: 'Policy maker — district-wide analytics, curriculum oversight, compliance',
  enterprise_manager: 'Enterprise — upskill workforce, track ROI, custom learning paths',
}

export interface SubjectDef {
  id: string
  name: string
  label: string
  emoji: string
  icon: string
  color: string
}

export const SUBJECTS: SubjectDef[] = [
  { id: 'math', name: 'Mathematics', label: 'Mathematics', emoji: '➕', icon: '∑', color: '#3b82f6' },
  { id: 'science', name: 'Science', label: 'Science', emoji: '🔬', icon: '⚗', color: '#10b981' },
  { id: 'english', name: 'English', label: 'English', emoji: '📖', icon: '📖', color: '#8b5cf6' },
  { id: 'history', name: 'History', label: 'History', emoji: '🏛️', icon: '🏛', color: '#f59e0b' },
  { id: 'art', name: 'Art', label: 'Art', emoji: '🎨', icon: '🎨', color: '#ec4899' },
  { id: 'music', name: 'Music', label: 'Music', emoji: '🎵', icon: '🎵', color: '#06b6d4' },
  { id: 'pe', name: 'Physical Education', label: 'Physical Education', emoji: '⚽', icon: '⚽', color: '#f97316' },
  { id: 'tech', name: 'Technology', label: 'Technology', emoji: '💻', icon: '💻', color: '#6366f1' },
  { id: 'geography', name: 'Geography', label: 'Geography', emoji: '🌍', icon: '🌍', color: '#14b8a6' },
  { id: 'languages', name: 'Languages', label: 'Languages', emoji: '🗣️', icon: '🗣', color: '#a855f7' },
]

export const XP_ACTIONS: Record<string, number> = {
  lesson_complete: 50,
  quiz_perfect: 100,
  quiz_pass: 50,
  daily_streak: 25,
  assignment_submit: 75,
  assignment_early: 100,
  peer_help: 30,
  achievement_unlock: 200,
  login_daily: 10,
}

export const ACHIEVEMENT_TIERS = ['bronze', 'silver', 'gold', 'platinum', 'diamond'] as const
