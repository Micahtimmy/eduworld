'use client'
import { Sparkles, MessageCircle, Headphones, Video, Plus, Edit } from 'lucide-react'
import { Button } from '@/components/ui/button'

const DMS = [
  { initials: 'SJ', name: 'Sarah Jenkins', time: '10:42 AM', preview: 'Did you finish the physics lab report?' },
  { initials: 'MC', name: 'Marcus Chen', time: 'Yesterday', preview: 'Thanks for the notes!' },
  { initials: 'AG', name: 'Study Group Alpha', time: 'Mon', preview: "Emily: I'll book the library room." },
]

const HUDDLES = [
  { title: 'Calculus Prep Room', type: 'Voice Channel', members: '+2', action: 'Join Huddle', icon: Headphones },
  { title: 'Literature Debate', type: 'Video / Voice', members: '1', action: 'Join Video', icon: Video },
]

const SCHEDULED = [
  { icon: '🔴', title: 'Advanced Chemistry (Lab Intro)', badge: 'Live Now', instructor: 'Prof. Henderson', time: '11:00 AM - 12:30 PM', students: '24 Students waiting', link: 'Join via Zoom' },
  { icon: '🎥', title: 'European History Seminar', badge: '1:00p', instructor: 'Dr. Alarie', time: '1:00 PM - 2:00 PM', students: null, link: 'Link opens in 45m' },
]

export default function AchieverCollaborationPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Collaboration Hub</h1>
          <p className="text-sm text-on-surface-variant mt-1">Connect with peers, join study huddles, and attend scheduled sessions.</p>
        </div>
        <Button className="gap-2">+ New Huddle Space</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Direct Messages */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              <h2 className="font-display font-semibold text-on-surface">Direct Messages</h2>
            </div>
            <button className="text-on-surface-variant hover:text-primary"><Edit className="h-4 w-4" /></button>
          </div>
          <input className="w-full px-3 py-2 text-sm bg-surface-low border border-outline-variant rounded-xl outline-none focus:border-primary placeholder:text-on-surface-variant" placeholder="Search messages..." />
          <div className="space-y-2">
            {DMS.map(d => (
              <div key={d.name} className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-low cursor-pointer">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0">{d.initials}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-on-surface">{d.name}</p>
                    <p className="text-xs text-on-surface-variant">{d.time}</p>
                  </div>
                  <p className="text-xs text-on-surface-variant truncate">{d.preview}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full text-xs text-ai bg-ai/5 border border-ai/20 rounded-xl py-2 flex items-center justify-center gap-1 hover:bg-ai/10">
            <Sparkles className="h-3.5 w-3.5" /> Summarize unread chats
          </button>
        </div>

        {/* Active Huddles */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-base">📻</span>
              <h2 className="font-display font-semibold text-on-surface">Active Huddles</h2>
            </div>
            <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-semibold">3 Live</span>
          </div>
          <div className="space-y-3">
            {HUDDLES.map(h => (
              <div key={h.title} className="bg-surface-low rounded-xl p-4 space-y-3">
                <div>
                  <p className="text-sm font-semibold text-on-surface">{h.title}</p>
                  <p className="text-xs text-on-surface-variant">{h.type}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-1">
                    {[1, 2].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center text-xs font-bold text-primary">{String.fromCharCode(64 + i)}</div>
                    ))}
                    <div className="w-6 h-6 rounded-full bg-surface-high border-2 border-white flex items-center justify-center text-xs text-on-surface-variant">{h.members}</div>
                  </div>
                  <Button size="sm" className="h-7 text-xs gap-1">
                    <h.icon className="h-3 w-3" /> {h.action}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scheduled Sessions */}
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-semibold text-on-surface">Scheduled Class Huddles</h2>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-2 text-center">
            <p className="text-xs text-green-700 font-semibold">✓ Integration: Zoom & Meet Active</p>
          </div>
          <div className="space-y-3">
            {SCHEDULED.map(s => (
              <div key={s.title} className="bg-surface-low rounded-xl p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <span>{s.icon}</span>
                  <p className="text-sm font-semibold text-on-surface flex-1">{s.title}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${s.badge === 'Live Now' ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-surface-high text-on-surface-variant'}`}>{s.badge}</span>
                </div>
                <p className="text-xs text-on-surface-variant">{s.instructor} · {s.time}</p>
                {s.students && <p className="text-xs text-on-surface-variant">👥 {s.students}</p>}
                <button className="text-xs text-primary hover:underline font-semibold">{s.link} ↗</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
