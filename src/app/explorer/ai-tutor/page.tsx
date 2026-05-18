'use client'
import { Button } from '@/components/ui/button'

const MESSAGES = [
  { sender: 'ai', text: "Hi Explorer! 👋 Ready to blast off? Today we're going to explore Mars — the Red Planet! What do you want to know?" },
  { sender: 'user', text: 'Why is Mars red?' },
  { sender: 'ai', text: "Great question! Mars is red because of iron oxide — that's rust! — on its surface. The dust is so fine it even colors the sky pink!" },
]

const CHIPS = [
  { icon: '🌡', label: 'How hot is it?' },
  { icon: '💧', label: 'Is there water?' },
  { icon: '🚀', label: 'Can we visit?' },
]

export default function ExplorerAiTutorPage() {
  return (
    <div className="flex flex-col h-screen bg-slate-900">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-amber-400 text-lg">⚡</span>
          <span className="text-white font-semibold text-sm">Spark Chat</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-amber-400">⭐</span>
          <span className="text-orange-400">🔥</span>
          <div className="w-7 h-7 rounded-full bg-primary/30 flex items-center justify-center">
            <span className="text-white text-xs font-bold">E</span>
          </div>
        </div>
      </div>

      <div className="px-4 py-3 bg-slate-800 border-b border-white/10">
        <p className="text-[10px] text-slate-400 uppercase font-semibold">Science Explorer</p>
        <div className="flex items-center gap-2">
          <h1 className="text-white font-semibold text-sm">Journey to Mars</h1>
          <span className="text-[10px] bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full font-semibold">🚀 Mission Active</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {MESSAGES.map((m, i) => (
          <div key={i} className={`flex items-start gap-3 ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}>
            {m.sender === 'ai' && (
              <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                <span className="text-sm">⚡</span>
              </div>
            )}
            <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${m.sender === 'ai' ? 'bg-slate-700 text-white' : 'bg-primary text-white'}`}>
              <p className="text-sm">{m.text}</p>
            </div>
          </div>
        ))}

        <div className="bg-slate-700 border border-white/10 rounded-2xl p-3 flex items-start gap-2">
          <span className="text-lg shrink-0">🔬</span>
          <div>
            <p className="text-xs font-semibold text-white">Science Fact</p>
            <p className="text-xs text-slate-300 mt-0.5">Iron oxide dust on Mars is so fine it floats in the atmosphere, giving the sky a pinkish hue!</p>
          </div>
        </div>
      </div>

      <div className="px-4 pb-2 flex gap-2 overflow-x-auto">
        {CHIPS.map(c => (
          <button key={c.label} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-700 rounded-full text-xs text-slate-200 hover:bg-slate-600 transition-colors whitespace-nowrap shrink-0">
            <span>{c.icon}</span> {c.label}
          </button>
        ))}
      </div>

      <div className="p-4 border-t border-white/10 flex gap-2">
        <input
          type="text"
          placeholder="Ask Spark anything..."
          className="flex-1 bg-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
        />
        <Button className="bg-amber-500 hover:bg-amber-600 text-white px-4">⚡</Button>
      </div>
    </div>
  )
}
