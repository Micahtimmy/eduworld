'use client'
import Link from 'next/link'
import { ArrowLeft, Plus, Calendar, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { useState } from 'react'

const PROJECT = {
  name: 'Machine Learning Final Project',
  course: 'CS-701',
  dueDate: 'Nov 30, 2024',
  daysLeft: 39,
  completion: 48,
}

const TABS = ['Tasks', 'Files', 'Discussion', 'Members'] as const
type Tab = typeof TABS[number]

interface Task {
  id: string
  title: string
  assignee: string
  assigneeInitials: string
  dueDate: string
  priority: 'high' | 'medium' | 'low'
}

const TASKS: Record<'Todo' | 'In Progress' | 'Done', Task[]> = {
  Todo: [
    { id: 't1', title: 'Write conclusion section', assignee: 'Marcus Wei', assigneeInitials: 'MW', dueDate: 'Nov 25', priority: 'medium' },
    { id: 't2', title: 'Hyperparameter tuning for final model', assignee: 'Aisha Bakr', assigneeInitials: 'AB', dueDate: 'Nov 22', priority: 'high' },
    { id: 't3', title: 'Add citations to literature review', assignee: 'Jordan Kim', assigneeInitials: 'JK', dueDate: 'Nov 20', priority: 'low' },
  ],
  'In Progress': [
    { id: 't4', title: 'CNN model implementation', assignee: 'Priya Sharma', assigneeInitials: 'PS', dueDate: 'Nov 18', priority: 'high' },
    { id: 't5', title: 'Dataset preprocessing pipeline', assignee: 'Marcus Wei', assigneeInitials: 'MW', dueDate: 'Nov 17', priority: 'medium' },
  ],
  Done: [
    { id: 't6', title: 'Project proposal submitted', assignee: 'Jordan Kim', assigneeInitials: 'JK', dueDate: 'Oct 5', priority: 'medium' },
    { id: 't7', title: 'Literature review (draft 1)', assignee: 'Jordan Kim', assigneeInitials: 'JK', dueDate: 'Oct 20', priority: 'medium' },
    { id: 't8', title: 'Data collection & sources', assignee: 'Aisha Bakr', assigneeInitials: 'AB', dueDate: 'Oct 15', priority: 'high' },
    { id: 't9', title: 'Environment setup & repo init', assignee: 'Priya Sharma', assigneeInitials: 'PS', dueDate: 'Oct 10', priority: 'low' },
  ],
}

const PRIORITY_COLORS: Record<Task['priority'], string> = {
  high: 'bg-red-500',
  medium: 'bg-amber-500',
  low: 'bg-green-500',
}

const COLUMN_STYLES: Record<keyof typeof TASKS, string> = {
  Todo: 'bg-surface-low',
  'In Progress': 'bg-amber-50 dark:bg-amber-950/20',
  Done: 'bg-green-50 dark:bg-green-950/20',
}

export default function GroupProjectDetailPage() {
  const [activeTab, setActiveTab] = useState<Tab>('Tasks')

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link href="/scholar/group-project">
          <button className="flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-on-surface transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
        </Link>
      </div>

      {/* Project Info */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">{PROJECT.name}</h1>
          <div className="flex items-center gap-3 mt-1.5 flex-wrap">
            <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-blue-100 text-blue-700">{PROJECT.course}</span>
            <div className="flex items-center gap-1 text-xs text-on-surface-variant">
              <Calendar className="h-3 w-3" /> Due {PROJECT.dueDate}
            </div>
            <Badge variant="warning" size="sm">{PROJECT.daysLeft} days left</Badge>
          </div>
        </div>
        <div className="text-right">
          <p className="font-display font-bold text-3xl text-primary">{PROJECT.completion}%</p>
          <p className="text-xs text-on-surface-variant">Complete</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-surface-low rounded-full overflow-hidden">
        <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${PROJECT.completion}%` }} />
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-outline-variant">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium transition-all border-b-2 -mb-px ${
              activeTab === tab
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tasks Tab */}
      {activeTab === 'Tasks' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(Object.entries(TASKS) as [keyof typeof TASKS, Task[]][]).map(([column, tasks]) => (
            <div key={column} className={`rounded-2xl p-4 space-y-3 ${COLUMN_STYLES[column]}`}>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm text-on-surface">{column}</h3>
                <span className="text-xs text-on-surface-variant">{tasks.length}</span>
              </div>

              <div className="space-y-2">
                {tasks.map(task => (
                  <div key={task.id} className="bg-surface-lowest rounded-xl border border-outline-variant p-3 space-y-2">
                    <div className="flex items-start gap-2">
                      <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${PRIORITY_COLORS[task.priority]}`} />
                      <p className="text-sm text-on-surface leading-snug">{task.title}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Avatar className="h-5 w-5">
                          <AvatarFallback className="text-[10px] font-semibold bg-primary/10 text-primary">{task.assigneeInitials}</AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-on-surface-variant">{task.assignee.split(' ')[0]}</span>
                      </div>
                      <span className="text-xs text-on-surface-variant">{task.dueDate}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full flex items-center justify-center gap-1.5 text-xs text-on-surface-variant hover:text-primary transition-colors py-2 rounded-xl border border-dashed border-outline-variant hover:border-primary/40">
                <Plus className="h-3.5 w-3.5" /> Add Task
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Placeholder for other tabs */}
      {activeTab !== 'Tasks' && (
        <div className="flex flex-col items-center justify-center py-16 text-center space-y-2">
          <p className="text-on-surface-variant text-sm">{activeTab} content coming soon</p>
        </div>
      )}
    </div>
  )
}
