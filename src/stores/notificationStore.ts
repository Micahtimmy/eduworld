import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type NotificationRole = 'explorer' | 'achiever' | 'scholar' | 'teacher' | 'parent' | 'admin' | 'government' | 'enterprise'

export type NotificationType =
  | 'assignment_assigned'
  | 'assignment_graded'
  | 'lesson_assigned'
  | 'quiz_result'
  | 'attendance_alert'
  | 'fee_invoice'
  | 'fee_paid'
  | 'ai_risk_flag'
  | 'achievement_earned'
  | 'level_up'
  | 'streak_at_risk'
  | 'announcement'
  | 'parent_weekly_report'

export interface AppNotification {
  id: string
  recipientRole: NotificationRole
  type: NotificationType
  title: string
  body: string
  read: boolean
  createdAt: string
  data?: Record<string, unknown>
}

interface NotificationState {
  notifications: AppNotification[]
  addNotification: (n: Omit<AppNotification, 'id' | 'createdAt' | 'read'>) => void
  markRead: (id: string) => void
  markAllRead: (role: NotificationRole) => void
  dismissAll: (role: NotificationRole) => void
  getUnreadCount: (role: NotificationRole) => number
  getForRole: (role: NotificationRole) => AppNotification[]
}

export const useNotificationStore = create<NotificationState>()(
  persist(
    (set, get) => ({
      notifications: [],

      addNotification: (n) => set(state => ({
        notifications: [
          {
            ...n,
            id: `notif_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
            createdAt: new Date().toISOString(),
            read: false,
          },
          ...state.notifications,
        ].slice(0, 200), // cap at 200
      })),

      markRead: (id) => set(state => ({
        notifications: state.notifications.map(n => n.id === id ? { ...n, read: true } : n),
      })),

      markAllRead: (role) => set(state => ({
        notifications: state.notifications.map(n =>
          n.recipientRole === role ? { ...n, read: true } : n
        ),
      })),

      dismissAll: (role) => set(state => ({
        notifications: state.notifications.filter(n => n.recipientRole !== role),
      })),

      getUnreadCount: (role) => get().notifications.filter(n => n.recipientRole === role && !n.read).length,

      getForRole: (role) => get().notifications.filter(n => n.recipientRole === role),
    }),
    { name: 'eduworld-notifications' }
  )
)
