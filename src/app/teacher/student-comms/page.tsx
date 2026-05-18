'use client'
import { Search, Video, MoreVertical, Plus, Send, Download, FileText, BarChart2, Calendar, FolderOpen, Sparkles, Edit } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CONVERSATIONS = [
  { id: 1, icon: '👥', name: 'Advanced Physics Grp B', badge: 'Live', preview: 'Alex: The formula in slide 14 seems...' },
  { id: 2, initials: 'MC', name: 'Marcus Chen', badge: '10:45 AM', preview: "I've uploaded my draft for the project." },
  { id: 3, initials: 'SJ', name: 'Sarah Jenkins', badge: '9:12 AM', preview: 'Can we discuss the assignment?' },
  { id: 4, ai: true, name: 'EduWorld Assistant', badge: '✦ AI', preview: '3 pending questions categorized.' },
]

const SHARED_FILES = [
  { icon: FileText, name: 'Lecture_Notes_04.pdf', meta: 'Shared by you • 2h ago' },
  { icon: BarChart2, name: 'Physics_Constants.xlsx', meta: 'Shared by Sarah • Yesterday' },
]

const QUICK_ACTIONS = [
  { icon: '📢', label: 'Announce' },
  { icon: '📊', label: 'Create Poll' },
  { icon: '📅', label: 'Schedule' },
  { icon: '📁', label: 'Bulk Share' },
]

export default function TeacherStudentCommsPage() {
  return (
    <div className="flex h-screen bg-surface-low overflow-hidden">
      {/* Conversation List */}
      <div className="w-72 bg-surface-lowest border-r border-outline-variant flex flex-col shrink-0">
        <div className="p-4 border-b border-outline-variant">
          <h2 className="font-display font-semibold text-on-surface mb-3">Communication Hub</h2>
          <div className="flex items-center gap-1 px-2.5 py-2 bg-surface-low rounded-xl border border-outline-variant">
            <Search className="h-4 w-4 text-on-surface-variant shrink-0" />
            <input className="flex-1 bg-transparent text-sm outline-none placeholder:text-on-surface-variant" placeholder="Search..." />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {CONVERSATIONS.map(c => (
            <div key={c.id} className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-surface-low ${c.id === 1 ? 'bg-primary/5 border-r-2 border-primary' : ''}`}>
              {c.ai ? (
                <div className="w-9 h-9 rounded-full bg-ai/20 flex items-center justify-center shrink-0">
                  <Sparkles className="h-4 w-4 text-ai" />
                </div>
              ) : c.icon ? (
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-lg shrink-0">{c.icon}</div>
              ) : (
                <div className="w-9 h-9 rounded-full bg-surface-high flex items-center justify-center text-xs font-bold text-on-surface shrink-0">{c.initials}</div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-on-surface truncate">{c.name}</p>
                  <span className={`text-xs shrink-0 ml-1 ${c.badge === 'Live' ? 'bg-green-500 text-white px-1.5 py-0.5 rounded-full font-semibold' : c.badge === '✦ AI' ? 'text-ai font-semibold' : 'text-on-surface-variant'}`}>{c.badge}</span>
                </div>
                <p className="text-xs text-on-surface-variant truncate">{c.preview}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 border-t border-outline-variant">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-2 text-center">
            <p className="text-xs text-amber-700 font-semibold">⏰ Office Hours Active</p>
            <p className="text-xs text-amber-600">Ends in 45m — Open for 1:1</p>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Chat Header */}
        <div className="bg-surface-lowest border-b border-outline-variant px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-lg">👥</div>
          <div className="flex-1">
            <p className="font-semibold text-sm text-on-surface">Advanced Physics Grp B</p>
            <p className="text-xs text-on-surface-variant">4 students currently active</p>
          </div>
          <button className="p-1.5 rounded-lg hover:bg-surface-low"><Video className="h-4 w-4 text-on-surface-variant" /></button>
          <button className="p-1.5 rounded-lg hover:bg-surface-low"><MoreVertical className="h-4 w-4 text-on-surface-variant" /></button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-surface-high flex items-center justify-center text-xs font-bold text-on-surface shrink-0">MC</div>
            <div>
              <p className="text-xs text-on-surface-variant mb-1">Marcus Chen · 10:48 AM</p>
              <div className="bg-surface-lowest border border-outline-variant rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm text-on-surface max-w-sm">
                Hello Professor! I&apos;m stuck on the quantum tunneling exercise. Is there a specific resource you&apos;d recommend for the probability wave calculations?
              </div>
            </div>
          </div>
          <div className="flex gap-3 flex-row-reverse">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0">You</div>
            <div className="items-end flex flex-col">
              <p className="text-xs text-on-surface-variant mb-1 text-right">10:50 AM</p>
              <div className="bg-primary text-white rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm max-w-sm">
                Great question, Marcus. I&apos;ve just attached a specialized worksheet to this thread that covers the probability wave functions step by step.
              </div>
            </div>
          </div>

          {/* AI Suggestion */}
          <div className="bg-ai/5 border border-ai/20 rounded-xl p-3 mx-4">
            <div className="flex items-center gap-1.5 mb-1">
              <Sparkles className="h-3.5 w-3.5 text-ai" />
              <span className="text-xs font-semibold text-ai">EduWorld AI Suggestion</span>
            </div>
            <p className="text-xs text-on-surface-variant">3 other students in Group B have asked similar questions today. Would you like to schedule a 15-minute group huddle?</p>
            <div className="flex gap-2 mt-2">
              <Button size="sm" className="h-6 text-xs">Create Huddle</Button>
              <Button variant="outline" size="sm" className="h-6 text-xs">Dismiss</Button>
            </div>
          </div>

          {/* Attached File */}
          <div className="flex items-center gap-3 p-3 bg-surface-lowest border border-outline-variant rounded-xl mx-4 max-w-xs">
            <FileText className="h-8 w-8 text-red-500 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-on-surface truncate">Quantum_Methods_V2.pdf</p>
              <p className="text-xs text-on-surface-variant">2.4 MB · Worksheet</p>
            </div>
            <Download className="h-4 w-4 text-on-surface-variant" />
          </div>
        </div>

        {/* Compose Bar */}
        <div className="bg-surface-lowest border-t border-outline-variant px-4 py-3 flex items-center gap-2">
          <button className="text-on-surface-variant hover:text-primary"><Plus className="h-5 w-5" /></button>
          <input className="flex-1 bg-surface-low rounded-2xl px-4 py-2 text-sm outline-none border border-outline-variant focus:border-primary placeholder:text-on-surface-variant" placeholder="Type a message..." />
          <button className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white">
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-64 bg-surface-lowest border-l border-outline-variant flex flex-col shrink-0">
        <div className="p-4 border-b border-outline-variant space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-semibold text-on-surface-variant">Shared Files</p>
              <button className="text-xs text-primary hover:underline">View All</button>
            </div>
            {SHARED_FILES.map(f => (
              <div key={f.name} className="flex items-center gap-2 py-2">
                <f.icon className="h-4 w-4 text-on-surface-variant shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-on-surface truncate">{f.name}</p>
                  <p className="text-xs text-on-surface-variant">{f.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-b border-outline-variant space-y-2">
          <p className="text-xs font-semibold text-on-surface-variant">Current Assignment</p>
          <div className="bg-surface-low rounded-xl p-3">
            <p className="text-sm font-semibold text-on-surface">Quantum Mechanics Lab 3</p>
            <p className="text-xs text-on-surface-variant mt-0.5">Due in 3 days: Friday, Oct 14</p>
            <div className="mt-2">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-on-surface-variant">Class Submission Progress</span>
                <span className="font-bold text-on-surface">68%</span>
              </div>
              <div className="h-2 bg-surface-high rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '68%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="p-4">
          <p className="text-xs font-semibold text-on-surface-variant mb-2">Quick Actions</p>
          <div className="grid grid-cols-2 gap-2">
            {QUICK_ACTIONS.map(a => (
              <button key={a.label} className="flex flex-col items-center gap-1 p-2.5 bg-surface-low rounded-xl hover:bg-surface-high">
                <span className="text-lg">{a.icon}</span>
                <span className="text-xs text-on-surface-variant font-medium">{a.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto p-4 border-t border-outline-variant">
          <button className="w-full flex items-center justify-center gap-2 p-2.5 bg-primary rounded-xl text-white text-sm font-semibold">
            <Edit className="h-4 w-4" /> Compose
          </button>
        </div>
      </div>
    </div>
  )
}
