import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatXP(xp: number): string {
  if (xp >= 1000000) return `${(xp / 1000000).toFixed(1)}M`
  if (xp >= 1000) return `${(xp / 1000).toFixed(1)}K`
  return xp.toString()
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function formatRelativeTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  const now = new Date()
  const diff = now.getTime() - d.getTime()
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)

  if (minutes < 1) return 'just now'
  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  if (days < 7) return `${days}d ago`
  return d.toLocaleDateString()
}

export function getLevelFromXP(xp: number): number {
  return Math.floor(Math.sqrt(xp / 100)) + 1
}

/** Returns the total XP required to reach `level` from level 0 */
export function getXPForLevel(level: number): number {
  return Math.pow(Math.max(0, level - 1), 2) * 100
}

/** Backwards-compat: returns total XP threshold for the given level */
export function getXPForNextLevel(level: number): number {
  return Math.pow(level, 2) * 100
}

export function getRoleColor(role: string): string {
  const colors: Record<string, string> = {
    explorer: '#10b981',
    achiever: '#8b5cf6',
    scholar: '#3b82f6',
    teacher: '#1e5799',
    parent: '#f59e0b',
    admin: '#ef4444',
    government: '#0ea5e9',
    enterprise_manager: '#6366f1',
  }
  return colors[role] ?? '#727781'
}
