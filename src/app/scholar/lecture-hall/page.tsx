'use client'
import { Volume2, Captions, Settings, Maximize, Play, Send, Sparkles } from 'lucide-react'

const TRANSCRIPT = [
  { time: '44:30', text: '...the collapse of the state vector...', active: false },
  { time: '44:45', text: '...a Hilbert space approach.', active: false },
  { time: '45:12', text: '...error gradient calculations...', active: true },
  { time: '45:28', text: '...visualize the probability distribution.', active: false },
  { time: '45:50', text: '...chain rule application here?', active: false },
]

const NODES = [
  { title: 'Backpropagation Error Gradient', desc: 'Core weight-update mechanism via chain rule.', relevance: 'High Relevance', relevanceColor: 'bg-green-100 text-green-700' },
  { title: 'Quantum Superposition in States', desc: 'Qubits exist in probability matrix until observed.', relevance: 'Medium Relevance', relevanceColor: 'bg-amber-100 text-amber-700' },
]

const CHAT = [
  { initials: 'DC', name: 'David C.', time: '10:42 AM', text: 'Can you clarify how activation functions relate to Hilbert space dimensionality?' },
  { initials: 'TA', name: 'TA: Sarah', time: '10:45 AM', text: 'Great question! Check Chapter 4 Section 3.2 — it covers this directly.' },
]

export default function ScholarLectureHallPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="font-display font-bold text-2xl text-on-surface">Lecture Hall</h1>
        <p className="text-sm text-on-surface-variant mt-1">Watch recorded lectures, extract key concepts, and engage in live Q&A.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Video Player */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-gray-900 rounded-2xl overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <button className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center">
                <Play className="h-8 w-8 text-white ml-1" />
              </button>
            </div>
            <div className="px-4 py-3 space-y-2">
              <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '50%' }} />
              </div>
              <div className="flex items-center gap-3 text-white">
                <button><Play className="h-4 w-4" /></button>
                <button><Volume2 className="h-4 w-4" /></button>
                <span className="text-xs flex-1">45:12 / 1:30:00</span>
                <button><Captions className="h-4 w-4" /></button>
                <button><Settings className="h-4 w-4" /></button>
                <button><Maximize className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-display font-semibold text-on-surface">Advanced Neural Architectures & Quantum Computation</p>
                <p className="text-sm text-on-surface-variant mt-0.5">Prof. Elena Rostova · Department of Computer Science</p>
              </div>
              <button className="text-on-surface-variant hover:text-primary"><Sparkles className="h-4 w-4" /></button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">CS-701 Week 4 Core Requirement</span>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="space-y-4">
          {/* Intelligence Nodes */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-ai" />
              <div>
                <p className="font-semibold text-sm text-on-surface">Intelligence Nodes</p>
                <p className="text-xs text-on-surface-variant">Auto-Generated · Formula Extracted</p>
              </div>
            </div>
            <div className="space-y-2">
              {NODES.map(n => (
                <div key={n.title} className="p-3 bg-surface-low rounded-xl space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-on-surface">{n.title}</p>
                    <span className={`text-xs px-1.5 py-0.5 rounded font-semibold ${n.relevanceColor}`}>{n.relevance}</span>
                  </div>
                  <p className="text-xs text-on-surface-variant">{n.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Transcript */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <p className="font-semibold text-sm text-on-surface">Synchronized Transcript</p>
            <div className="space-y-1.5">
              {TRANSCRIPT.map(t => (
                <div key={t.time} className={`flex items-start gap-2 p-2 rounded-lg ${t.active ? 'bg-primary/10 border border-primary/20' : ''}`}>
                  <span className="text-xs font-mono text-on-surface-variant shrink-0">{t.time}</span>
                  <span className={`text-xs ${t.active ? 'font-semibold text-primary' : 'text-on-surface-variant'}`}>{t.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Live Q&A */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm text-on-surface">Live Seminar Q&A</p>
              <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-semibold animate-pulse">Live</span>
            </div>
            <div className="space-y-2">
              {CHAT.map(m => (
                <div key={m.name} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">{m.initials}</div>
                    <span className="text-xs font-semibold text-on-surface">{m.name}</span>
                    <span className="text-xs text-on-surface-variant">{m.time}</span>
                  </div>
                  <p className="text-xs text-on-surface-variant ml-8">{m.text}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <input className="flex-1 bg-surface-low rounded-xl px-3 py-1.5 text-xs outline-none border border-outline-variant focus:border-primary placeholder:text-on-surface-variant" placeholder="Ask a question..." />
              <button className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white"><Send className="h-3 w-3" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
