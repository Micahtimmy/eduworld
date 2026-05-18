'use client'
import { Button } from '@/components/ui/button'

const MESSAGES = [
  { initials: 'LM', name: 'Leo Maxwell', role: 'Student', time: '10:42 AM', preview: 'Regarding the Essay deadline expansion...', unread: true },
  { initials: 'SP', name: 'Sarah Peters', role: 'Parent', time: 'Yesterday', preview: "Grade report for Jacob's last quiz", unread: false },
  { initials: 'PD', name: 'Principal Drane', role: 'Admin', time: 'Jan 24', preview: 'Faculty meeting rescheduled', unread: false },
  { initials: 'EK', name: 'Elena Kovic', role: 'Student', time: 'Jan 23', preview: 'Lab report submission issue', unread: false },
]

export default function TeacherInboxPage() {
  return (
    <div className="p-6 space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">Inbox</h1>
          <p className="text-sm text-on-surface-variant mt-1">Professional communications with students, parents, and administration.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-160px)]">
        {/* Left: Message List */}
        <div className="lg:col-span-1 bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden flex flex-col">
          <div className="p-4 border-b border-outline-variant">
            <div className="flex gap-2 mb-3">
              {[
                { icon: '📥', label: '12', active: true },
                { icon: '⭐', label: '', active: false },
                { icon: '📤', label: '', active: false },
                { icon: '📝', label: '', active: false },
              ].map((tab, i) => (
                <button key={i} className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${tab.active ? 'bg-primary text-white' : 'bg-surface-low text-on-surface-variant hover:bg-surface-high'}`}>
                  <span>{tab.icon}</span>
                  {tab.label && <span className="bg-red-500 text-white text-[10px] px-1.5 rounded-full">{tab.label}</span>}
                </button>
              ))}
            </div>
            <div className="flex gap-1 flex-wrap">
              {['All', 'Unread', 'Student', 'Parent', 'Admin'].map((f, i) => (
                <button key={f} className={`text-xs px-2.5 py-1 rounded-full font-semibold transition-colors ${i === 0 ? 'bg-primary/10 text-primary' : 'text-on-surface-variant hover:bg-surface-high'}`}>{f}</button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-outline-variant">
            {MESSAGES.map(m => (
              <button key={m.name} className={`w-full p-4 text-left hover:bg-surface-low transition-colors ${m.unread ? 'bg-primary/5' : ''}`}>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0">{m.initials}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-on-surface">{m.name}</p>
                      <span className="text-xs text-on-surface-variant shrink-0">{m.time}</span>
                    </div>
                    <p className="text-xs text-on-surface-variant truncate">{m.preview}</p>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${
                      m.role === 'Student' ? 'bg-blue-100 text-blue-700' :
                      m.role === 'Parent' ? 'bg-green-100 text-green-700' :
                      'bg-surface-high text-on-surface-variant'
                    }`}>{m.role}</span>
                  </div>
                  {m.unread && <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1" />}
                </div>
              </button>
            ))}
          </div>

          <div className="p-3 border-t border-outline-variant">
            <div className="space-y-1">
              {['AP Literature', 'Creative Writing', 'Honors English'].map(g => (
                <button key={g} className="w-full text-left text-xs text-on-surface-variant hover:text-primary px-2 py-1 rounded-lg hover:bg-surface-high transition-colors">{g}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Conversation */}
        <div className="lg:col-span-2 bg-surface-lowest rounded-2xl border border-outline-variant flex flex-col overflow-hidden">
          <div className="p-4 border-b border-outline-variant">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-sm text-primary">LM</div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-on-surface">Leo Maxwell</p>
                    <span className="text-xs text-green-600 font-semibold">● Active Now</span>
                  </div>
                  <div className="flex gap-2">
                    {['AP Literature', 'Period 4', 'GPA 3.8'].map(t => (
                      <span key={t} className="text-xs text-on-surface-variant">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="h-7 text-xs">📋 View Gradebook</Button>
                <button className="text-on-surface-variant">⋮</button>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="text-center">
              <span className="text-xs text-on-surface-variant bg-surface-low px-3 py-1 rounded-full">Thursday, January 25</span>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0">LM</div>
              <div className="max-w-[70%] space-y-2">
                <div className="bg-surface-low rounded-2xl rounded-tl-sm p-3">
                  <p className="text-sm text-on-surface">Hi, I&apos;m having difficulty with the Sylvia Plath analysis. I haven&apos;t been feeling well and am struggling to complete it on time.</p>
                  <p className="text-xs text-on-surface-variant mt-1">10:42 AM</p>
                </div>
                <div className="bg-surface-low rounded-2xl rounded-tl-sm p-3">
                  <p className="text-sm text-on-surface">Would it be possible to get a 48-hour extension? I can send what I have so far.</p>
                  <p className="text-xs text-on-surface-variant mt-1">10:43 AM</p>
                  <div className="mt-2 flex items-center gap-2 p-2 bg-surface-high rounded-xl">
                    <span className="text-on-surface-variant">📄</span>
                    <div>
                      <p className="text-xs font-semibold text-on-surface">Plath_Analysis_Outline.docx</p>
                      <p className="text-xs text-on-surface-variant">2.4 MB • Word Document</p>
                    </div>
                    <button className="ml-auto text-primary text-xs">↓</button>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Suggestions */}
            <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-ai">✦</span>
                <p className="text-xs font-semibold text-on-surface">EduWorld AI Response Assistant</p>
              </div>
              <p className="text-xs text-on-surface-variant">Suggested professional replies based on your grading policy and Leo&apos;s student record:</p>
              <div className="space-y-2">
                <div className="bg-surface-lowest rounded-xl p-3 border border-outline-variant">
                  <p className="text-xs font-semibold text-on-surface mb-1">Option A — Accommodating:</p>
                  <p className="text-xs text-on-surface-variant italic">&ldquo;Hi Leo, sorry to hear you&apos;re unwell. I can grant a 48-hour extension...&rdquo;</p>
                  <Button size="sm" variant="outline" className="h-6 text-xs mt-2">Use this draft</Button>
                </div>
                <div className="bg-surface-lowest rounded-xl p-3 border border-outline-variant">
                  <p className="text-xs font-semibold text-on-surface mb-1">Option B — Partial Credit:</p>
                  <p className="text-xs text-on-surface-variant italic">&ldquo;Hi Leo, please submit what you have now for partial credit, then...&rdquo;</p>
                  <Button size="sm" variant="outline" className="h-6 text-xs mt-2">Use this draft</Button>
                </div>
              </div>
            </div>

            {/* Sent reply */}
            <div className="flex gap-3 justify-end">
              <div className="max-w-[70%] bg-primary rounded-2xl rounded-tr-sm p-3">
                <p className="text-sm text-white">Hi Leo, I&apos;ve granted the extension. New deadline is Saturday midnight. Please rest and take care of yourself.</p>
                <div className="flex items-center justify-end gap-1 mt-1">
                  <p className="text-xs text-white/70">11:15 AM</p>
                  <span className="text-green-400 text-xs">✓</span>
                </div>
              </div>
            </div>
          </div>

          {/* Compose Bar */}
          <div className="p-4 border-t border-outline-variant space-y-2">
            <div className="flex gap-2 text-on-surface-variant text-sm">
              <button className="hover:text-on-surface font-bold">B</button>
              <button className="hover:text-on-surface italic">I</button>
              <button className="hover:text-on-surface">🔗</button>
              <button className="hover:text-on-surface">≡</button>
              <button className="hover:text-on-surface ml-2">📎 Attach Files</button>
            </div>
            <div className="flex gap-2">
              <input type="text" placeholder="Write a message..." className="flex-1 bg-surface-low rounded-xl px-3 py-2 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <Button size="sm">Send →</Button>
            </div>
            <div className="flex gap-3 text-xs text-on-surface-variant">
              <span>📋 History: 4 previous extensions</span>
              <span>Auto-saved as draft at 11:16 AM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
