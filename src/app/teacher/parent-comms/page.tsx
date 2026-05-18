'use client'
import { Sparkles, Phone, Video, Paperclip, Send, Plus, Calendar, History } from 'lucide-react'
import { Button } from '@/components/ui/button'

const THREADS = [
  { name: 'Maria Garcia', time: '10:42 AM', preview: 'RE: Leo\'s Math progress this week', student: 'Leo Garcia' },
  { name: 'David Chen', time: 'Yesterday', preview: 'Emma\'s reading assignment feedback', student: 'Emma Chen', unread: true },
]

const MESSAGES = [
  { sender: 'Maria Garcia', text: 'Good morning! I noticed Leo\'s math scores have improved. How is he doing with fractions?', time: '10:40 AM', isMe: false },
  { sender: 'Me', text: "Good morning Maria! Leo has been making excellent progress. He completed the worksheet I sent and got 8/10. I've attached the next worksheet for extra practice!", time: '10:45 AM', isMe: true },
]

const CONFERENCES = [
  { family: 'Chen Family', student: 'Emma Chen', topic: 'Math Progress', date: 'Tomorrow', time: '3:30–4:00 PM' },
  { family: 'Smith Family', student: 'John Smith', topic: 'Behavior Plan', date: 'Oct 24', time: '4:15–4:45 PM' },
]

const ACTIVITY = [
  { text: 'Broadcast sent to Grade 4 parents', time: '2h ago' },
  { text: 'Message received from David Chen', time: 'Yesterday' },
  { text: 'System report auto-generated', time: '3 days ago' },
]

export default function TeacherParentCommsPage() {
  return (
    <div className="p-6 h-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
        {/* Conversations */}
        <div className="lg:col-span-3 bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-4">
          <div>
            <h2 className="font-display font-semibold text-on-surface">Conversations</h2>
            <p className="text-xs text-on-surface-variant">Active parent threads</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">🌐 Auto-Translate On</span>
          </div>
          <div className="space-y-2">
            {THREADS.map(t => (
              <div key={t.name} className={`p-3 rounded-xl cursor-pointer transition-colors ${t.name === 'Maria Garcia' ? 'bg-primary/5 border border-primary/20' : 'hover:bg-surface-low'}`}>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-on-surface">{t.name}</p>
                  <p className="text-xs text-on-surface-variant">{t.time}</p>
                </div>
                <p className="text-xs text-on-surface-variant mt-0.5">👤 {t.student}</p>
                <p className="text-xs text-on-surface-variant truncate mt-0.5">{t.preview}</p>
                {t.unread && <span className="text-xs bg-primary text-white px-1.5 py-0.5 rounded-full font-semibold">Unread</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Chat */}
        <div className="lg:col-span-6 bg-surface-lowest rounded-2xl border border-outline-variant flex flex-col">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-outline-variant">
            <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">MG</div>
            <div className="flex-1">
              <p className="font-semibold text-sm text-on-surface">Maria Garcia</p>
              <p className="text-xs text-on-surface-variant">Parent of: Leo Garcia (Grade 4)</p>
            </div>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-lg bg-surface-low flex items-center justify-center text-on-surface-variant hover:bg-surface-high"><Phone className="h-3.5 w-3.5" /></button>
              <button className="w-8 h-8 rounded-lg bg-surface-low flex items-center justify-center text-on-surface-variant hover:bg-surface-high"><Video className="h-3.5 w-3.5" /></button>
            </div>
          </div>
          <div className="text-center py-2">
            <span className="text-xs bg-surface-lowest text-on-surface-variant px-3 py-0.5 rounded-full border border-outline-variant">Today</span>
          </div>
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {MESSAGES.map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.isMe ? 'flex-row-reverse' : ''}`}>
                {!m.isMe && <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0 mt-0.5">MG</div>}
                <div className={`max-w-xs ${m.isMe ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                  <div className={`px-4 py-2.5 rounded-2xl text-sm ${m.isMe ? 'bg-primary text-white rounded-br-sm' : 'bg-surface-low text-on-surface rounded-bl-sm'}`}>{m.text}</div>
                  <p className="text-xs text-on-surface-variant">{m.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 py-2 border-t border-outline-variant">
            <div className="flex items-center gap-1 mb-2">
              <Sparkles className="h-3 w-3 text-ai" />
              <p className="text-xs text-ai">AI Reply Suggestion Active</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-on-surface-variant hover:text-primary"><Paperclip className="h-4 w-4" /></button>
              <input className="flex-1 bg-surface-low rounded-xl px-3 py-2 text-sm outline-none border border-outline-variant focus:border-primary placeholder:text-on-surface-variant" placeholder="Type a message..." />
              <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white"><Send className="h-3.5 w-3.5" /></button>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="lg:col-span-3 space-y-4">
          {/* Broadcast */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-base">📢</span>
              <h2 className="font-display font-semibold text-on-surface">Broadcast</h2>
            </div>
            <select className="w-full px-3 py-2 text-sm bg-surface-low border border-outline-variant rounded-xl outline-none text-on-surface">
              <option>All Parents (Grade 4)</option>
              <option>Whole School</option>
              <option>Specific Class...</option>
            </select>
            <textarea className="w-full px-3 py-2 text-sm bg-surface-low border border-outline-variant rounded-xl outline-none resize-none placeholder:text-on-surface-variant" rows={3} placeholder="Type announcement..." />
            <Button size="sm" className="w-full gap-2"><Send className="h-3.5 w-3.5" /> Send Broadcast</Button>
          </div>

          {/* Conferences */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <h2 className="font-display font-semibold text-on-surface">Upcoming Conferences</h2>
              </div>
              <button className="text-xs text-primary hover:underline">View Calendar</button>
            </div>
            <div className="space-y-2">
              {CONFERENCES.map(c => (
                <div key={c.family} className="p-3 bg-surface-low rounded-xl">
                  <p className="text-sm font-semibold text-on-surface">{c.family}</p>
                  <p className="text-xs text-on-surface-variant">👤 {c.student} · {c.topic}</p>
                  <p className="text-xs text-on-surface-variant">{c.date} · ⏰ {c.time}</p>
                </div>
              ))}
            </div>
            <Button size="sm" variant="outline" className="w-full gap-1"><Plus className="h-3.5 w-3.5" /> Schedule New</Button>
          </div>

          {/* Activity */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <div className="flex items-center gap-2">
              <History className="h-4 w-4 text-primary" />
              <h2 className="font-display font-semibold text-on-surface">Recent Activity</h2>
            </div>
            <div className="space-y-2">
              {ACTIVITY.map(a => (
                <div key={a.text}>
                  <p className="text-xs text-on-surface">{a.text}</p>
                  <p className="text-xs text-on-surface-variant">{a.time}</p>
                </div>
              ))}
            </div>
            <button className="text-xs text-primary hover:underline">View Full Log →</button>
          </div>
        </div>
      </div>
    </div>
  )
}
