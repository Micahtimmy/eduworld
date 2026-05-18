'use client'
import { Sparkles, Plus, Upload, Video } from 'lucide-react'
import { Button } from '@/components/ui/button'

const TASKS = [
  { col: 'To Do', title: 'Research specific case studies...', tag: 'High Priority', tagColor: 'red', assignee: 'AM' },
  { col: 'To Do', title: 'Compile bibliography...', tag: 'Task', tagColor: 'gray', assignee: null },
  { col: 'In Progress', title: "Draft 'Introduction' and 'Methodology'...", tag: 'Drafting', tagColor: 'blue', assignee: 'SJ' },
  { col: 'Review', title: 'Outline structure of the final presentation.', tag: 'Needs Feedback', tagColor: 'amber', assignee: 'DK' },
]

const DOCS = [
  { icon: '📄', name: 'Draft_v2_Main_Body.docx', status: 'Updated 2h ago by Alex' },
  { icon: '📋', name: 'Healthcare_Guidelines_2024.pdf', status: 'Added yesterday' },
  { icon: '📊', name: 'Dataset_Analysis.xlsx', status: 'Updated 3 days ago' },
]

const CHAT = [
  { initials: 'SJ', name: 'Sarah J.', time: '10:42 AM', msg: "Hey team, I've finished the draft for the methodology section." },
  { initials: 'DK', name: 'David K.', time: '11:15 AM', msg: "Looks solid. I'll add the statistical analysis charts this afternoon." },
  { initials: 'Me', name: 'You', time: 'Just now', msg: "Great. I'll prep the slide deck once the charts are in." },
]

const TAG_STYLES: Record<string, string> = {
  red: 'bg-red-100 text-red-700',
  gray: 'bg-surface-high text-on-surface-variant',
  blue: 'bg-blue-100 text-blue-700',
  amber: 'bg-amber-100 text-amber-700',
}

const COLS = ['To Do', 'In Progress', 'Review']

export default function AchieverProjectsPage() {
  return (
    <div className="p-4 space-y-5 pb-24">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">Drafting Phase</span>
            <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold">Due in 4 days</span>
          </div>
          <h1 className="font-display font-bold text-xl text-on-surface">Advanced Machine Learning Ethics</h1>
          <p className="text-sm text-on-surface-variant mt-1">Final group paper exploring the ethical implications of autonomous decision-making systems.</p>
          <div className="flex items-center gap-1.5 mt-2">
            {['AM', 'SJ', 'DK'].map(m => (
              <div key={m} className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">{m}</div>
            ))}
            <span className="text-xs text-on-surface-variant">+2</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-xp/10 text-xp px-2 py-0.5 rounded-full font-semibold">XP: 2,450</span>
        </div>
      </div>

      {/* Task Board */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">📋 Task Board</h2>
          <Button size="sm" variant="outline" className="h-7 text-xs gap-1"><Plus className="h-3 w-3" /> Add Task</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {COLS.map(col => (
            <div key={col} className="bg-surface-low rounded-xl p-3 space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wide">{col}</p>
                <span className="text-xs bg-surface-high text-on-surface-variant px-1.5 py-0.5 rounded-full font-semibold">
                  {TASKS.filter(t => t.col === col).length}
                </span>
              </div>
              {TASKS.filter(t => t.col === col).map(task => (
                <div key={task.title} className="bg-surface-lowest rounded-xl p-3 border border-outline-variant space-y-2">
                  <p className="text-xs font-semibold text-on-surface">{task.title}</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${TAG_STYLES[task.tagColor]}`}>{task.tag}</span>
                    {task.assignee && (
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">{task.assignee}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* AI Insight */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 space-y-2">
        <div className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-ai" />
          <p className="text-xs font-semibold text-on-surface">EduWorld AI Insight</p>
        </div>
        <p className="text-xs text-on-surface-variant">Consider adding a section on the &ldquo;Black Box&rdquo; problem in medical diagnostics — high-impact for your thesis argument.</p>
        <Button size="sm" variant="outline" className="h-7 text-xs">Generate Outline Draft</Button>
      </div>

      {/* Documents */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-semibold text-on-surface">📁 Documents</h2>
          <Button size="sm" variant="outline" className="h-7 text-xs gap-1"><Upload className="h-3 w-3" /> Upload New</Button>
        </div>
        <div className="space-y-2">
          {DOCS.map(d => (
            <div key={d.name} className="flex items-center gap-3 p-2.5 bg-surface-low rounded-xl">
              <span className="text-lg">{d.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-on-surface truncate">{d.name}</p>
                <p className="text-xs text-on-surface-variant">{d.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Huddle */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 flex items-center gap-3">
        <Video className="h-5 w-5 text-primary shrink-0" />
        <div className="flex-1">
          <p className="text-sm font-semibold text-on-surface">Quick Huddle</p>
          <p className="text-xs text-on-surface-variant">Start an instant meeting with active group members.</p>
        </div>
        <Button size="sm" className="shrink-0">Join Call Now</Button>
      </div>

      {/* Project Chat */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
        <div className="p-4 border-b border-outline-variant">
          <h2 className="font-display font-semibold text-on-surface">💬 Project Chat</h2>
        </div>
        <div className="p-4 space-y-3">
          {CHAT.map((c, i) => (
            <div key={i} className={`flex gap-2 ${c.initials === 'Me' ? 'flex-row-reverse' : ''}`}>
              <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0">{c.initials}</div>
              <div className={`max-w-[75%] rounded-2xl p-2.5 ${c.initials === 'Me' ? 'bg-primary text-white rounded-tr-sm' : 'bg-surface-low rounded-tl-sm'}`}>
                <p className={`text-xs font-semibold ${c.initials === 'Me' ? 'text-white' : 'text-on-surface'}`}>{c.name}</p>
                <p className={`text-xs ${c.initials === 'Me' ? 'text-white/80' : 'text-on-surface-variant'}`}>{c.msg}</p>
                <p className={`text-[10px] mt-0.5 ${c.initials === 'Me' ? 'text-white/60' : 'text-on-surface-variant'}`}>{c.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="px-4 pb-4 flex gap-2">
          <input type="text" placeholder="Type a message..." className="flex-1 bg-surface-low rounded-xl px-3 py-2 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/30" />
          <Button size="sm">→</Button>
        </div>
      </div>
    </div>
  )
}
