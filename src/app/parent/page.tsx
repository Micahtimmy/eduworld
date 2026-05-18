'use client'
import Link from 'next/link'
import { Bell, ChevronRight, TrendingUp, Clock, Trophy } from 'lucide-react'
import { MobileTopBar } from '@/components/shared/navigation/TopBar'
import { useUser } from '@/hooks/use-user'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { getInitials } from '@/lib/utils'

const CHILDREN = [
  {
    id: 'c1', name: 'Kofi Mensah', age: 9, grade: 'Year 4', emoji: '🌟',
    xp: 450, streak: 5, avgScore: 82, studyTime: '3.2h',
    subjects: ['Maths', 'English', 'Science'],
    recentActivity: 'Completed Fractions lesson',
    alerts: 0,
  },
  {
    id: 'c2', name: 'Ama Mensah', age: 14, grade: 'Year 9', emoji: '🚀',
    xp: 2100, streak: 12, avgScore: 76, studyTime: '5.8h',
    subjects: ['Physics', 'Chemistry', 'Maths'],
    recentActivity: 'Scored 88% on Physics quiz',
    alerts: 1,
  },
]

export default function ParentDashboard() {
  const { profile } = useUser()
  const firstName = profile?.full_name?.split(' ')[0] ?? 'Parent'

  return (
    <div>
      <div className="sticky top-0 z-20 bg-surface-lowest border-b border-outline-variant px-4 py-3 flex items-center gap-3">
        <div className="flex-1">
          <p className="text-xs font-label text-on-surface-variant">Parent Portal</p>
          <p className="font-display font-bold text-on-surface">{firstName}</p>
        </div>
        <Link href="/parent/notifications" className="relative p-2 rounded-full hover:bg-surface-high">
          <Bell className="h-5 w-5 text-on-surface-variant" />
          {CHILDREN.some(c => c.alerts > 0) && (
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error" />
          )}
        </Link>
      </div>

      <div className="px-4 py-4 space-y-5">
        <h2 className="font-display font-semibold text-on-surface">My Children</h2>

        {CHILDREN.map(child => (
          <Link key={child.id} href={`/parent/children/${child.id}`}>
            <Card interactive className="mb-3">
              <CardContent className="p-4 space-y-4">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl shrink-0">
                    {child.emoji}
                  </div>
                  <div className="flex-1">
                    <p className="font-label font-semibold text-on-surface">{child.name}</p>
                    <p className="text-xs text-on-surface-variant">{child.grade} · Age {child.age}</p>
                  </div>
                  {child.alerts > 0 && (
                    <Badge variant="error" size="sm">{child.alerts} alert</Badge>
                  )}
                  <ChevronRight className="h-4 w-4 text-on-surface-variant" />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-surface-high rounded-xl p-2">
                    <p className="font-display font-bold text-sm text-primary">{child.avgScore}%</p>
                    <p className="text-xs text-on-surface-variant font-label">Avg Score</p>
                  </div>
                  <div className="bg-surface-high rounded-xl p-2">
                    <p className="font-display font-bold text-sm text-ai">{child.studyTime}</p>
                    <p className="text-xs text-on-surface-variant font-label">This week</p>
                  </div>
                  <div className="bg-surface-high rounded-xl p-2">
                    <p className="font-display font-bold text-sm text-xp">🔥 {child.streak}</p>
                    <p className="text-xs text-on-surface-variant font-label">Day streak</p>
                  </div>
                </div>

                {/* Recent activity */}
                <p className="text-xs text-on-surface-variant font-body">
                  Latest: <span className="font-semibold text-on-surface">{child.recentActivity}</span>
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}

        {/* Quick links */}
        <section>
          <h2 className="font-display font-semibold text-on-surface mb-3">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'View Progress', href: '/parent/progress', icon: TrendingUp, color: 'text-primary' },
              { label: 'Study Reports', href: '/parent/reports', icon: Clock, color: 'text-ai' },
              { label: 'Achievements', href: '/parent/achievements', icon: Trophy, color: 'text-xp' },
              { label: 'Notifications', href: '/parent/notifications', icon: Bell, color: 'text-on-surface-variant' },
            ].map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 p-3 bg-surface-lowest rounded-xl border border-outline-variant hover:border-primary/50 transition-colors"
              >
                <item.icon className={`h-5 w-5 ${item.color}`} />
                <span className="text-sm font-label font-semibold text-on-surface">{item.label}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
