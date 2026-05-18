'use client'
import { useState } from 'react'
import { Send, Paperclip, Smile, Mic, Sparkles } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

const CONTACTS = [
  { id: 1, name: 'Ms. Julia Simmons', role: 'Mathematics · 8th Grade', preview: 'Leo is doing great in class...', time: '10m', unread: 0, online: true },
  { id: 2, name: 'Mr. Robert Chen', role: 'History · 8th Grade', preview: '📎 Attachment', time: '2h', unread: 0, online: false },
  { id: 3, name: 'School Administration', role: 'Oakwood High · Main Office', preview: 'Please review the new policy...', time: 'Yesterday', unread: 2, online: true },
]

const MESSAGES = [
  { id: 1, from: 'teacher', text: "Good morning! I wanted to share that Leo has been showing exceptional progress in our calculus unit. His problem-solving skills have really improved this term.", time: '9:14 AM' },
  { id: 2, from: 'parent', text: "That's wonderful to hear! He's been putting in a lot of extra study time. Are there any areas he should focus on for the upcoming assessment?", time: '9:32 AM' },
  { id: 3, from: 'teacher', text: "He should review integration by parts and related rates. I've attached the practice worksheet we covered in class.", time: '9:45 AM', attachment: { name: 'calculus-practice.pdf', size: '1.2 MB' } },
  { id: 4, from: 'parent', text: "Perfect, thank you so much! I'll make sure he goes through it this weekend.", time: '9:51 AM', read: true },
]

export default function ParentMessagesPage() {
  const [activeContact, setActiveContact] = useState(CONTACTS[0])
  const [message, setMessage] = useState('')
  const [tab, setTab] = useState("Leo's Teachers")

  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden bg-surface">
      {/* Contact List */}
      <div className="w-72 border-r border-outline-variant flex flex-col bg-surface-lowest shrink-0">
        <div className="p-4 border-b border-outline-variant">
          <h2 className="font-display font-semibold text-on-surface">Communication Hub</h2>
          <p className="text-xs text-on-surface-variant mt-0.5">Connect with your child's teachers</p>
        </div>
        <div className="flex gap-1 px-4 py-2 border-b border-outline-variant overflow-x-auto">
          {["All Contacts", "Leo's Teachers", "School Admins"].map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn('px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap transition-colors', tab === t ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-low')}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex-1 overflow-y-auto divide-y divide-outline-variant">
          {CONTACTS.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveContact(c)}
              className={cn('w-full text-left flex items-start gap-3 p-4 hover:bg-surface-low transition-colors', activeContact.id === c.id && 'bg-surface-low')}
            >
              <div className="relative shrink-0">
                <Avatar size="md">
                  <AvatarFallback>{c.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</AvatarFallback>
                </Avatar>
                {c.online && <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-surface-lowest" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-on-surface truncate">{c.name}</p>
                  <span className="text-xs text-on-surface-variant shrink-0">{c.time}</span>
                </div>
                <p className="text-xs text-on-surface-variant">{c.role}</p>
                <p className="text-xs text-on-surface-variant truncate mt-0.5">{c.preview}</p>
              </div>
              {c.unread > 0 && (
                <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold shrink-0">{c.unread}</div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Message Thread */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Thread Header */}
        <div className="flex items-center gap-3 p-4 border-b border-outline-variant bg-surface-lowest">
          <div className="relative">
            <Avatar size="md">
              <AvatarFallback>{activeContact.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</AvatarFallback>
            </Avatar>
            {activeContact.online && <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-surface-lowest" />}
          </div>
          <div className="flex-1">
            <p className="font-semibold text-on-surface">{activeContact.name}</p>
            <p className="text-xs text-on-surface-variant">{activeContact.role} · {activeContact.online ? 'Active now' : 'Offline'}</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="text-center">
            <span className="text-xs text-on-surface-variant bg-surface-low px-3 py-1 rounded-full">Today, June 14</span>
          </div>
          {MESSAGES.map(m => (
            <div key={m.id} className={cn('flex gap-3', m.from === 'parent' && 'flex-row-reverse')}>
              {m.from === 'teacher' && (
                <Avatar size="sm">
                  <AvatarFallback>{activeContact.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</AvatarFallback>
                </Avatar>
              )}
              <div className={cn('max-w-sm space-y-1', m.from === 'parent' && 'items-end flex flex-col')}>
                <div className={cn('px-4 py-2.5 rounded-2xl text-sm', m.from === 'teacher' ? 'bg-surface-low text-on-surface' : 'bg-primary text-white')}>
                  {m.text}
                  {m.attachment && (
                    <div className="mt-2 flex items-center gap-2 p-2 rounded-lg bg-black/10">
                      <span className="text-base">📄</span>
                      <div>
                        <p className="text-xs font-medium">{m.attachment.name}</p>
                        <p className="text-xs opacity-70">{m.attachment.size}</p>
                      </div>
                    </div>
                  )}
                </div>
                <span className="text-xs text-on-surface-variant">{m.time}</span>
              </div>
            </div>
          ))}

          {/* AI suggested reply */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-3 mx-8 space-y-2">
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-ai" />
              <span className="text-xs font-semibold text-on-surface">Suggested Reply</span>
            </div>
            <p className="text-xs text-on-surface-variant italic">"Thank you for the worksheet! We'll make sure Leo reviews it before the weekend."</p>
            <button className="text-xs font-semibold px-3 py-1 bg-primary text-white rounded-full">Use Draft</button>
          </div>
        </div>

        {/* Compose */}
        <div className="border-t border-outline-variant p-3 flex items-center gap-2">
          <div className="flex gap-1 text-on-surface-variant">
            <button className="p-2 rounded-full hover:bg-surface-low"><Paperclip className="h-4 w-4" /></button>
            <button className="p-2 rounded-full hover:bg-surface-low"><Smile className="h-4 w-4" /></button>
            <button className="p-2 rounded-full hover:bg-surface-low"><Mic className="h-4 w-4" /></button>
          </div>
          <input
            className="flex-1 bg-surface-low rounded-full px-4 py-2 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder="Type a message..."
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <button className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 shrink-0">
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Teacher Info Panel */}
      <div className="w-64 border-l border-outline-variant bg-surface-lowest flex-col hidden lg:flex p-4 space-y-4 overflow-y-auto">
        <div className="flex flex-col items-center text-center pt-2">
          <Avatar size="lg">
            <AvatarFallback>{activeContact.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</AvatarFallback>
          </Avatar>
          <p className="font-semibold text-on-surface mt-2">{activeContact.name}</p>
          <p className="text-xs text-on-surface-variant">{activeContact.role}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 bg-surface-low rounded-xl p-3">
          <div className="text-center">
            <p className="font-bold text-on-surface">4.9</p>
            <p className="text-xs text-on-surface-variant">Rating</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-on-surface">12</p>
            <p className="text-xs text-on-surface-variant">Yrs Exp.</p>
          </div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-3 space-y-1">
          <p className="text-xs font-semibold text-on-surface">Office Hours</p>
          <p className="text-xs text-on-surface-variant">Mon/Wed: 3:30 – 4:30 PM</p>
          <p className="text-xs text-on-surface-variant">Fri Virtual: 4:00 – 5:00 PM</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-on-surface">Shared Files</p>
            <button className="text-xs text-primary">View All</button>
          </div>
          {['Report Card Q2.pdf', 'Physics Lab Slip.pdf'].map(f => (
            <div key={f} className="flex items-center gap-2 p-2 rounded-lg hover:bg-surface-low">
              <span className="text-red-500">📄</span>
              <p className="text-xs text-on-surface truncate">{f}</p>
            </div>
          ))}
        </div>
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-3">
          <div className="flex items-center gap-1.5 mb-1">
            <Sparkles className="h-3 w-3 text-ai" />
            <span className="text-xs font-semibold text-on-surface">EduWorld AI Tip</span>
          </div>
          <p className="text-xs text-on-surface-variant">Teachers respond fastest between 3–5 PM on weekdays.</p>
        </div>
      </div>
    </div>
  )
}
