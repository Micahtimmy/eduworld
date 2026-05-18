'use client'
import Link from 'next/link'
import { MapPin, TrendingUp, Calendar, CheckCircle, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const STATS = [
  { icon: '✅', label: 'Attendance', value: 'Checked In 08:15 AM', sub: 'On Campus', color: 'text-green-600' },
  { icon: '📍', label: 'Current Status', value: 'Campus Zone B', sub: 'Live location', color: 'text-blue-600' },
  { icon: '📊', label: 'Average Grade', value: 'A- (92.4%)', sub: '+2.4% from last semester', color: 'text-on-surface' },
  { icon: '⚡', label: 'XP Earned', value: 'LVL 42 / 14,250', sub: 'Global Rank #1,204', color: 'text-amber-600' },
]

const ACTIVITY = [
  { icon: '✦', label: 'AI Breakthrough', time: '10m ago', detail: 'Calculus II improvement noted. Focus on "Integrals" suggested for continued growth.', iconColor: 'text-ai' },
  { icon: '📝', label: 'Teacher Note', time: '2h ago', detail: 'Mr. Henderson (Physics): Praise for lab leadership & fluid dynamics report.', iconColor: 'text-blue-500' },
  { icon: '🏆', label: 'Assignment Graded', time: 'Yesterday', detail: 'Modern History essay scored 95/100.', iconColor: 'text-amber-500' },
]

const EVENTS = [
  { month: 'OCT', day: '14', title: 'Parent-Teacher Meet', time: '4:30 PM', location: 'Conference Hall C' },
  { month: 'OCT', day: '18', title: 'Science Fair Finals', time: '10:00 AM', location: 'Volunteer Entry' },
]

export default function ParentDashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="font-display font-bold text-2xl text-on-surface">Good Morning, Sarah</h1>
        <p className="text-sm text-on-surface-variant mt-1">Alex Johnson is at St. Xavier High — all looks great today.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map(s => (
          <div key={s.label} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-1">
            <span className="text-xl">{s.icon}</span>
            <p className="text-xs text-on-surface-variant">{s.label}</p>
            <p className={`font-semibold text-sm ${s.color}`}>{s.value}</p>
            <p className="text-xs text-on-surface-variant">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Recent Activity</h2>
          <div className="space-y-3">
            {ACTIVITY.map(a => (
              <div key={a.label} className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full bg-surface-low flex items-center justify-center text-sm ${a.iconColor}`}>{a.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-on-surface">{a.label}</p>
                    <span className="text-xs text-on-surface-variant">{a.time}</span>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-0.5">{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <h2 className="font-display font-semibold text-on-surface">Upcoming Events</h2>
          <div className="space-y-3">
            {EVENTS.map(e => (
              <div key={e.title} className="flex items-center gap-3 p-3 rounded-xl bg-surface-low">
                <div className="text-center bg-primary/10 rounded-xl p-2 min-w-[48px]">
                  <p className="text-xs font-bold text-primary">{e.month}</p>
                  <p className="font-display font-bold text-xl text-on-surface">{e.day}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-on-surface">{e.title}</p>
                  <p className="text-xs text-on-surface-variant">{e.time} · {e.location}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="flex items-center gap-2 text-sm text-primary hover:underline">
            <Calendar className="h-4 w-4" /> Sync to Calendar
          </button>
        </div>

        {/* Location */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-green-500" />
            <h2 className="font-display font-semibold text-on-surface">Live Location</h2>
            <div className="flex items-center gap-1 ml-auto">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-green-600">Live</span>
            </div>
          </div>
          <div className="bg-surface-low rounded-xl h-32 flex items-center justify-center">
            <div className="text-center space-y-1">
              <p className="font-semibold text-on-surface">Main Gymnasium</p>
              <p className="text-xs text-on-surface-variant">Updated 2 minutes ago</p>
            </div>
          </div>
        </div>

        {/* AI Quick Links */}
        <div className="bg-gradient-to-r from-primary to-ai rounded-2xl p-5 text-white space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            <h2 className="font-display font-semibold">EduWorld AI</h2>
          </div>
          <p className="text-sm opacity-90">How can I help you today? Ask about Alex's progress, upcoming deadlines, or school events.</p>
          <div className="flex flex-wrap gap-2">
            {["How is Alex doing?", "Any upcoming exams?", "Recent grades"].map(q => (
              <button key={q} className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full">{q}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
