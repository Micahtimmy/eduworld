'use client'
import { Paperclip, Send, MoreVertical } from 'lucide-react'

const MESSAGES = [
  { sender: 'Mrs. Sarah', text: "Hi Explorer! 👋 I saw you were working on the Fractions Quest. How's it going?", time: '10:40 AM', isMe: false },
  { sender: 'Me', text: "I'm stuck on problem #4! I don't know how to add 1/2 and 1/4 together.", time: '10:41 AM', isMe: true },
  { sender: 'Mrs. Sarah', text: "Great question! Think of it like pizza slices 🍕 If you have half a pizza and a quarter of a pizza, how many pieces is that out of 4?", time: '10:42 AM', isMe: false, attachment: { name: 'Pizza_Fractions.png', size: '1.2 MB' } },
]

export default function ExplorerMessagesPage() {
  return (
    <div className="flex flex-col h-screen bg-surface-low">
      {/* Chat Header */}
      <div className="bg-surface-lowest border-b border-outline-variant px-4 py-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">MS</div>
        <div className="flex-1">
          <p className="font-semibold text-sm text-on-surface">Mrs. Sarah</p>
          <p className="text-xs text-on-surface-variant flex items-center gap-1">🏫 Your Math Guide</p>
        </div>
        <button className="text-on-surface-variant hover:text-on-surface"><MoreVertical className="h-4 w-4" /></button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="text-center">
          <span className="text-xs bg-surface-lowest text-on-surface-variant px-3 py-1 rounded-full border border-outline-variant">Today</span>
        </div>
        {MESSAGES.map((m, i) => (
          <div key={i} className={`flex gap-3 ${m.isMe ? 'flex-row-reverse' : ''}`}>
            {!m.isMe && (
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0 mt-0.5">MS</div>
            )}
            <div className={`max-w-xs space-y-1 ${m.isMe ? 'items-end' : 'items-start'} flex flex-col`}>
              <div className={`px-4 py-2.5 rounded-2xl text-sm ${m.isMe ? 'bg-primary text-white rounded-br-sm' : 'bg-surface-lowest text-on-surface rounded-bl-sm border border-outline-variant'}`}>
                {m.text}
              </div>
              {m.attachment && (
                <div className="flex items-center gap-2 bg-surface-lowest border border-outline-variant rounded-xl px-3 py-2">
                  <span className="text-base">🖼</span>
                  <div>
                    <p className="text-xs font-semibold text-on-surface">{m.attachment.name}</p>
                    <p className="text-xs text-on-surface-variant">Image · {m.attachment.size}</p>
                  </div>
                </div>
              )}
              <p className={`text-xs text-on-surface-variant ${m.isMe ? 'text-right' : ''}`}>{m.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="bg-surface-lowest border-t border-outline-variant px-4 py-3 flex items-center gap-3">
        <button className="text-on-surface-variant hover:text-primary"><Paperclip className="h-5 w-5" /></button>
        <input className="flex-1 bg-surface-low rounded-2xl px-4 py-2 text-sm outline-none border border-outline-variant focus:border-primary placeholder:text-on-surface-variant" placeholder="Type a message..." />
        <button className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white">
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
