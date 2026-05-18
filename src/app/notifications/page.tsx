'use client'
import { useState } from 'react'
import { useNotificationStore } from '@/stores/notificationStore'
import type { NotificationRole } from '@/stores/notificationStore'
import { Bell, CheckCheck, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { formatDistanceToNow } from 'date-fns'

const ROLES: { id: NotificationRole; label: string; emoji: string }[] = [
  { id: 'explorer', label: 'Explorer', emoji: '🧒' },
  { id: 'achiever', label: 'Achiever', emoji: '🎯' },
  { id: 'scholar', label: 'Scholar', emoji: '🎓' },
  { id: 'teacher', label: 'Teacher', emoji: '👩‍🏫' },
  { id: 'parent', label: 'Parent', emoji: '👨‍👩‍👧' },
  { id: 'admin', label: 'Admin', emoji: '🏫' },
]

const TYPE_ICONS: Record<string, string> = {
  assignment_assigned: '📋',
  assignment_graded: '✅',
  lesson_assigned: '📖',
  quiz_result: '🧠',
  attendance_alert: '📅',
  fee_invoice: '💳',
  fee_paid: '✅',
  ai_risk_flag: '⚠️',
  achievement_earned: '🏆',
  level_up: '⭐',
  streak_at_risk: '🔥',
  announcement: '📢',
  parent_weekly_report: '📊',
}

export default function NotificationsPage() {
  const [activeRole, setActiveRole] = useState<NotificationRole>('explorer')
  const { markRead, markAllRead, dismissAll, getUnreadCount, getForRole, addNotification } = useNotificationStore()

  const roleNotifs = getForRole(activeRole)
  const unread = getUnreadCount(activeRole)

  function seedDemoNotifications() {
    addNotification({ recipientRole: 'achiever', type: 'assignment_graded', title: 'Physics test graded', body: "You scored 78/100 on Newton's Laws. Well done!" })
    addNotification({ recipientRole: 'parent', type: 'assignment_graded', title: 'Assignment graded', body: 'Your child scored 78/100 on "Newton\'s Laws".' })
    addNotification({ recipientRole: 'teacher', type: 'ai_risk_flag', title: 'AI Alert: Amara may need support', body: 'Mathematics: Consistently scoring below 50% on algebra assessments.' })
    addNotification({ recipientRole: 'parent', type: 'fee_invoice', title: 'New school fee invoice', body: 'Term 3 Tuition — ₦85,000 due 2026-06-01.' })
    addNotification({ recipientRole: 'explorer', type: 'achievement_earned', title: '+150 XP earned!', body: 'Completed Science Quest: The Water Cycle' })
    addNotification({ recipientRole: 'explorer', type: 'assignment_assigned', title: 'New quest: Fractions Fun', body: 'Mathematics — due Friday. Open the app to start.' })
  }

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Notifications</h1>
          <p className="text-sm text-on-surface-variant">Cross-role activity feed</p>
        </div>
        <Bell className="h-6 w-6 text-on-surface-variant" />
      </div>

      {/* Role tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {ROLES.map(r => {
          const count = getUnreadCount(r.id)
          return (
            <button
              key={r.id}
              onClick={() => setActiveRole(r.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
                activeRole === r.id
                  ? 'bg-primary text-white'
                  : 'bg-surface-low text-on-surface-variant hover:bg-surface-mid'
              }`}
            >
              <span>{r.emoji}</span>
              <span>{r.label}</span>
              {count > 0 && (
                <span className={`text-xs rounded-full px-1.5 py-0.5 font-bold ${
                  activeRole === r.id ? 'bg-white/20 text-white' : 'bg-primary text-white'
                }`}>
                  {count}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Actions */}
      {roleNotifs.length > 0 && (
        <div className="flex items-center gap-2">
          {unread > 0 && (
            <button
              onClick={() => markAllRead(activeRole)}
              className="flex items-center gap-1.5 text-xs text-primary hover:underline"
            >
              <CheckCheck className="h-3.5 w-3.5" />
              Mark all read
            </button>
          )}
          <button
            onClick={() => dismissAll(activeRole)}
            className="flex items-center gap-1.5 text-xs text-on-surface-variant hover:text-red-500 ml-auto"
          >
            <Trash2 className="h-3.5 w-3.5" />
            Clear all
          </button>
        </div>
      )}

      {/* Notification list */}
      {roleNotifs.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 space-y-4 text-center">
          <div className="w-16 h-16 rounded-full bg-surface-low flex items-center justify-center">
            <Bell className="h-8 w-8 text-on-surface-variant opacity-40" />
          </div>
          <div className="space-y-1">
            <p className="font-semibold text-on-surface">All caught up</p>
            <p className="text-sm text-on-surface-variant">No notifications for this role yet.</p>
          </div>
          <Button variant="secondary" onClick={seedDemoNotifications}>
            Load demo notifications
          </Button>
        </div>
      ) : (
        <div className="space-y-2">
          {roleNotifs.map(n => (
            <div
              key={n.id}
              onClick={() => markRead(n.id)}
              className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-colors ${
                n.read
                  ? 'bg-surface-lowest border-outline-variant opacity-70'
                  : 'bg-surface-lowest border-primary/30 shadow-sm'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-surface-low flex items-center justify-center flex-shrink-0 text-xl">
                {TYPE_ICONS[n.type] ?? '🔔'}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className={`text-sm font-semibold leading-snug ${n.read ? 'text-on-surface-variant' : 'text-on-surface'}`}>
                    {n.title}
                  </p>
                  {!n.read && (
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1" />
                  )}
                </div>
                <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">{n.body}</p>
                <p className="text-[10px] text-on-surface-variant/60 mt-1">
                  {formatDistanceToNow(new Date(n.createdAt), { addSuffix: true })}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
