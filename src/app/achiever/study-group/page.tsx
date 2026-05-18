'use client'

import { useState } from 'react'
import { Plus, Users, MessageCircle, BookOpen, Calendar, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const GROUP = {
  name: 'A-Level Physics Squad',
  members: 4,
  currentTopic: 'Thermodynamics',
  membersOnline: 2,
  avatar: 'APS',
}

const SHARED_NOTES = [
  {
    author: 'Adeola I.',
    initials: 'AI',
    topic: 'Thermodynamics Notes',
    snippet: 'First law: ΔU = Q - W. Key equations for the exam — remember to check sign conventions...',
    time: '2h ago',
    color: 'bg-blue-500',
  },
  {
    author: 'Chuka N.',
    initials: 'CN',
    topic: 'Past Paper Solutions',
    snippet: 'Solved Q14-Q20 from 2022 paper. The trick for Q17 is to use the Maxwell relations...',
    time: '5h ago',
    color: 'bg-purple-500',
  },
  {
    author: 'Fatima A.',
    initials: 'FA',
    topic: 'Formula Sheet',
    snippet: 'Updated formula sheet with all thermodynamics equations + common derivations...',
    time: '1d ago',
    color: 'bg-green-500',
  },
]

const CHAT_MESSAGES = [
  { sender: 'Adeola', initials: 'AI', text: 'Does anyone have the derivation for entropy change?', time: '10 min', color: 'bg-blue-500', isMe: false },
  { sender: 'You', initials: 'ME', text: 'Check the formula sheet Fatima uploaded 👆', time: '8 min', color: 'bg-primary', isMe: true },
  { sender: 'Chuka', initials: 'CN', text: 'Session tonight at 8pm — who\'s in?', time: '5 min', color: 'bg-purple-500', isMe: false },
]

const UPCOMING_SESSION = {
  day: 'Friday',
  time: '8:00 PM',
  topic: 'Past Papers — Electricity & Magnetism',
}

export default function AchieverStudyGroupPage() {
  const [message, setMessage] = useState('')
  const [showCreateModal, setShowCreateModal] = useState(false)

  return (
    <div className="min-h-screen bg-surface-lowest p-4 space-y-5 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Study Groups</h1>
          <p className="text-sm text-on-surface-variant mt-1">Collaborate with your peers</p>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="gap-1.5 text-xs">
            Join
          </Button>
          <Button size="sm" onClick={() => setShowCreateModal(true)} className="gap-1.5 text-xs">
            <Plus className="h-3.5 w-3.5" />
            Create
          </Button>
        </div>
      </div>

      {/* Active Group Card */}
      <div className="bg-surface-low rounded-2xl border border-outline-variant p-4 space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
            <span className="font-display font-bold text-primary text-sm">{GROUP.avatar}</span>
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-on-surface">{GROUP.name}</h2>
            <div className="flex items-center gap-3 mt-1">
              <div className="flex items-center gap-1 text-xs text-on-surface-variant">
                <Users className="h-3.5 w-3.5" />
                {GROUP.members} members
              </div>
              <div className="flex items-center gap-1 text-xs text-on-surface-variant">
                <BookOpen className="h-3.5 w-3.5" />
                {GROUP.currentTopic}
              </div>
            </div>
          </div>
        </div>

        {/* Live Session Banner */}
        <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <div>
              <p className="text-sm font-semibold text-green-900">Session live!</p>
              <p className="text-xs text-green-700">{GROUP.membersOnline} members currently active</p>
            </div>
          </div>
          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs h-8">
            Join Now
          </Button>
        </div>
      </div>

      {/* Upcoming Session */}
      <div className="bg-surface-low rounded-2xl border border-outline-variant p-4 flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
          <Calendar className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-on-surface text-sm">Next Session</p>
          <p className="text-xs text-on-surface-variant">{UPCOMING_SESSION.day} at {UPCOMING_SESSION.time} — {UPCOMING_SESSION.topic}</p>
        </div>
        <Button size="sm" variant="outline" className="text-xs shrink-0">RSVP</Button>
      </div>

      {/* Shared Notes */}
      <div className="bg-surface-low rounded-2xl border border-outline-variant p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">Shared Notes</h2>
          <button className="text-xs text-primary hover:underline">View all</button>
        </div>
        <div className="space-y-3">
          {SHARED_NOTES.map((note, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-xl bg-surface-lowest border border-outline-variant hover:bg-surface-low transition-colors cursor-pointer">
              <div className={cn('w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0', note.color)}>
                {note.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-on-surface text-sm truncate">{note.topic}</p>
                  <span className="text-xs text-on-surface-variant shrink-0">{note.time}</span>
                </div>
                <p className="text-xs text-on-surface-variant line-clamp-2 mt-0.5">{note.snippet}</p>
                <p className="text-xs text-on-surface-variant mt-1">by {note.author}</p>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" size="sm" className="w-full gap-2">
          <Plus className="h-4 w-4" />
          Share a Note
        </Button>
      </div>

      {/* Group Chat Preview */}
      <div className="bg-surface-low rounded-2xl border border-outline-variant p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4 text-on-surface" />
            <h2 className="font-display font-semibold text-on-surface">Group Chat</h2>
          </div>
          <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full font-medium">2 new</span>
        </div>

        {/* Messages */}
        <div className="space-y-3">
          {CHAT_MESSAGES.map((msg, i) => (
            <div key={i} className={cn('flex gap-2', msg.isMe ? 'flex-row-reverse' : 'flex-row')}>
              <div className={cn('w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0', msg.color)}>
                {msg.initials}
              </div>
              <div className={cn('max-w-[75%] space-y-0.5', msg.isMe ? 'items-end' : 'items-start')}>
                {!msg.isMe && <p className="text-xs text-on-surface-variant">{msg.sender}</p>}
                <div className={cn(
                  'px-3 py-2 rounded-2xl text-sm',
                  msg.isMe
                    ? 'bg-primary text-white rounded-tr-sm'
                    : 'bg-surface-lowest border border-outline-variant text-on-surface rounded-tl-sm'
                )}>
                  {msg.text}
                </div>
                <p className={cn('text-[10px] text-on-surface-variant', msg.isMe ? 'text-right' : 'text-left')}>{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="flex gap-2 pt-1">
          <input
            type="text"
            placeholder="Message the group..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="flex-1 bg-surface-lowest border border-outline-variant rounded-xl px-3 py-2 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-end lg:items-center justify-center p-4">
          <div className="bg-white dark:bg-surface-low rounded-3xl p-6 w-full max-w-sm space-y-4">
            <h3 className="font-display font-bold text-lg text-on-surface">Create Study Group</h3>
            <input
              type="text"
              placeholder="Group name"
              className="w-full bg-surface-lowest border border-outline-variant rounded-xl px-3 py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              placeholder="Subject (e.g. A-Level Physics)"
              className="w-full bg-surface-lowest border border-outline-variant rounded-xl px-3 py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1" onClick={() => setShowCreateModal(false)}>Cancel</Button>
              <Button className="flex-1" onClick={() => setShowCreateModal(false)}>Create</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
