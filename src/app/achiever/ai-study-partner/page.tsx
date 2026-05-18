'use client'
import { Sparkles, Paperclip, Send, BookOpen, MoreHorizontal } from 'lucide-react'

const MESSAGES = [
  { role: 'ai', text: 'Hey! I see you\'re working through Chapter 4 on Binary Trees. What concept would you like to start with today?', time: '10:40 AM' },
  { role: 'user', text: 'Can you explain in-order traversal? I keep getting confused about the order.', time: '10:41 AM' },
  { role: 'ai', text: 'Great question! In-order traversal follows: Left → Node → Right. Here\'s a Python implementation:', time: '10:42 AM', code: `def inorderTraversal(root):\n    if root is None:\n        return []\n    result = []\n    result += inorderTraversal(root.left)\n    result.append(root.val)\n    result += inorderTraversal(root.right)\n    return result` },
]

export default function AchieverAiStudyPartnerPage() {
  return (
    <div className="p-6 h-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
        {/* Source Text Panel */}
        <div className="lg:col-span-7 bg-surface-lowest rounded-2xl border border-outline-variant flex flex-col">
          <div className="flex gap-1 p-1 border-b border-outline-variant m-4 mb-0 bg-surface-low rounded-xl w-fit">
            {['Source Text', 'My Notes', 'Citations'].map((t, i) => (
              <button key={t} className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${i === 0 ? 'bg-primary text-white' : 'text-on-surface-variant hover:bg-surface-high'}`}>{t}</button>
            ))}
          </div>
          <div className="flex-1 p-5 space-y-4 overflow-y-auto">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-primary" />
              <h2 className="font-display font-semibold text-on-surface">Chapter 4: Advanced Data Structures</h2>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Tree data structures are hierarchical structures that consist of nodes connected by edges. Each tree has a root node at the top, and nodes can have child nodes branching downward. Binary trees are a special type where each node has at most two children — left and right.
            </p>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              The height of a tree determines the time complexity of operations — searching in a balanced binary search tree runs in <em>O(h)</em> time, where in the best case h = <em>O(log n)</em> and in the worst case (degenerate tree) h = <em>O(n)</em>.
            </p>
            <div className="bg-gray-900 rounded-xl p-4 font-mono text-xs text-green-400">
              <p className="text-gray-400 mb-2"># Binary Tree Node</p>
              <p>class TreeNode:</p>
              <p className="ml-4">def __init__(self, val=0):</p>
              <p className="ml-8">self.val = val</p>
              <p className="ml-8">self.left = None</p>
              <p className="ml-8">self.right = None</p>
            </div>
          </div>
        </div>

        {/* AI Chat Panel */}
        <div className="lg:col-span-5 bg-surface-lowest rounded-2xl border border-outline-variant flex flex-col">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-outline-variant">
            <div className="w-8 h-8 rounded-full bg-ai/20 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-ai" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm text-on-surface">EduWorld AI Tutor</p>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Peer Mode Active</span>
            </div>
            <button className="text-on-surface-variant hover:text-on-surface"><MoreHorizontal className="h-4 w-4" /></button>
          </div>
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {MESSAGES.map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                {m.role === 'ai' && (
                  <div className="w-7 h-7 rounded-full bg-ai/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="h-3.5 w-3.5 text-ai" />
                  </div>
                )}
                <div className={`max-w-[80%] space-y-2 ${m.role === 'user' ? 'items-end' : 'items-start'} flex flex-col`}>
                  <div className={`px-3 py-2.5 rounded-2xl text-sm ${m.role === 'user' ? 'bg-primary text-white rounded-br-sm' : 'bg-surface-low text-on-surface rounded-bl-sm'}`}>
                    {m.text}
                  </div>
                  {m.code && (
                    <div className="bg-gray-900 rounded-xl p-3 font-mono text-xs text-green-400 w-full">
                      {m.code.split('\n').map((line, j) => <p key={j}>{line}</p>)}
                    </div>
                  )}
                  <p className="text-xs text-on-surface-variant">{m.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 pb-2">
            <p className="text-xs text-on-surface-variant italic mb-2">AI Study Partner can make mistakes. Consider verifying important information.</p>
          </div>
          <div className="px-4 py-3 border-t border-outline-variant flex items-center gap-2">
            <span className="text-xs bg-surface-low border border-outline-variant rounded-full px-2 py-1 flex items-center gap-1 text-on-surface-variant">
              <BookOpen className="h-3 w-3" /> Chapter 4.2
            </span>
            <button className="text-on-surface-variant hover:text-primary"><Paperclip className="h-4 w-4" /></button>
            <input className="flex-1 bg-surface-low rounded-xl px-3 py-2 text-sm outline-none border border-outline-variant focus:border-primary placeholder:text-on-surface-variant" placeholder="Ask a question..." />
            <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white"><Send className="h-3.5 w-3.5" /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
