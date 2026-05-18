'use client'
import { Megaphone, Paperclip, Eye, Calendar, Bold, Italic, List, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const AUDIENCE_OPTIONS = [
  { value: 'all_classes', label: 'All My Classes', sub: '4 classes · ~96 students' },
  { value: 'specific', label: 'Specific Class', sub: 'Choose from your classes' },
  { value: 'year_group', label: 'Year Group', sub: 'All students in a year level' },
  { value: 'school_wide', label: 'School-wide', sub: 'Admin only — all students & staff' },
]

export default function AnnouncementPage() {
  const [audience, setAudience] = useState('all_classes')
  const [specificClass, setSpecificClass] = useState('')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [scheduleMode, setScheduleMode] = useState(false)
  const [scheduleDate, setScheduleDate] = useState('')
  const [scheduleTime, setScheduleTime] = useState('')
  const [showPreview, setShowPreview] = useState(false)

  const charCount = message.length

  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
          <Megaphone className="h-5 w-5 text-amber-600" />
        </div>
        <div>
          <h1 className="font-display font-bold text-2xl text-on-surface">New Announcement</h1>
          <p className="text-sm text-on-surface-variant mt-0.5">Send a message to your students and their parents</p>
        </div>
      </div>

      {/* Audience Selector */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <p className="text-sm font-semibold text-on-surface">Audience</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {AUDIENCE_OPTIONS.map(opt => (
            <label
              key={opt.value}
              className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                audience === opt.value
                  ? 'border-primary bg-primary/5'
                  : 'border-outline-variant hover:border-primary/30'
              } ${opt.value === 'school_wide' ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <input
                type="radio"
                name="audience"
                value={opt.value}
                checked={audience === opt.value}
                onChange={() => opt.value !== 'school_wide' && setAudience(opt.value)}
                className="accent-primary mt-0.5"
                disabled={opt.value === 'school_wide'}
              />
              <div>
                <p className="text-sm font-medium text-on-surface">{opt.label}</p>
                <p className="text-xs text-on-surface-variant">{opt.sub}</p>
              </div>
            </label>
          ))}
        </div>

        {audience === 'specific' && (
          <select
            value={specificClass}
            onChange={e => setSpecificClass(e.target.value)}
            className="w-full bg-surface-low border border-outline-variant rounded-xl px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="">Select a class...</option>
            <option>AP Physics — Period 1</option>
            <option>World History — Period 3</option>
            <option>World History — Period 5</option>
            <option>Chemistry — Period 2</option>
          </select>
        )}
      </div>

      {/* Title */}
      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-on-surface">Title</label>
        <input
          type="text"
          placeholder="e.g. Midterm Exam Reminder — Next Tuesday"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full bg-surface-lowest border border-outline-variant rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-on-surface">Message</label>
        {/* Toolbar */}
        <div className="flex items-center gap-1 bg-surface-low border border-outline-variant rounded-t-xl px-3 py-2 border-b-0">
          {[
            { icon: <Bold className="h-3.5 w-3.5" />, label: 'Bold' },
            { icon: <Italic className="h-3.5 w-3.5" />, label: 'Italic' },
            { icon: <List className="h-3.5 w-3.5" />, label: 'List' },
          ].map(tool => (
            <button key={tool.label} title={tool.label} className="p-1.5 rounded hover:bg-surface-mid text-on-surface-variant hover:text-on-surface transition-colors">
              {tool.icon}
            </button>
          ))}
        </div>
        <textarea
          placeholder="Write your announcement here..."
          value={message}
          onChange={e => setMessage(e.target.value)}
          rows={8}
          className="w-full bg-surface-lowest border border-outline-variant rounded-b-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
        />
        <p className="text-xs text-on-surface-variant text-right">{charCount} characters</p>
      </div>

      {/* Attachments */}
      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-on-surface">Attachments (optional)</label>
        <div className="border-2 border-dashed border-outline-variant rounded-xl p-6 text-center hover:border-primary/40 transition-colors cursor-pointer">
          <Paperclip className="h-6 w-6 text-on-surface-variant mx-auto mb-2" />
          <p className="text-sm text-on-surface-variant">Drag files here or <span className="text-primary font-medium">browse</span></p>
          <p className="text-xs text-on-surface-variant mt-1">PDF, DOCX, images up to 10 MB</p>
        </div>
      </div>

      {/* Send Options */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-4">
        <p className="text-sm font-semibold text-on-surface">Send Options</p>

        <div className="flex gap-3">
          <label className={`flex-1 flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${!scheduleMode ? 'border-primary bg-primary/5' : 'border-outline-variant'}`}>
            <input type="radio" checked={!scheduleMode} onChange={() => setScheduleMode(false)} className="accent-primary" />
            <div>
              <p className="text-sm font-medium text-on-surface">Send Now</p>
              <p className="text-xs text-on-surface-variant">Deliver immediately</p>
            </div>
          </label>
          <label className={`flex-1 flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${scheduleMode ? 'border-primary bg-primary/5' : 'border-outline-variant'}`}>
            <input type="radio" checked={scheduleMode} onChange={() => setScheduleMode(true)} className="accent-primary" />
            <div>
              <p className="text-sm font-medium text-on-surface">Schedule</p>
              <p className="text-xs text-on-surface-variant">Choose date & time</p>
            </div>
          </label>
        </div>

        {scheduleMode && (
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs text-on-surface-variant">Date</label>
              <input
                type="date"
                value={scheduleDate}
                onChange={e => setScheduleDate(e.target.value)}
                className="w-full bg-surface-low border border-outline-variant rounded-xl px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-on-surface-variant">Time</label>
              <input
                type="time"
                value={scheduleTime}
                onChange={e => setScheduleTime(e.target.value)}
                className="w-full bg-surface-low border border-outline-variant rounded-xl px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Button
          variant="outline"
          size="md"
          className="gap-2"
          onClick={() => setShowPreview(v => !v)}
        >
          <Eye className="h-4 w-4" /> {showPreview ? 'Hide Preview' : 'Preview'}
        </Button>
        <Button size="md" className="flex-1 gap-2" disabled={!title || !message}>
          <Send className="h-4 w-4" />
          {scheduleMode ? `Schedule Announcement` : 'Send Announcement'}
        </Button>
      </div>

      {/* Preview Panel */}
      {showPreview && (
        <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
          <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wide">Preview</p>
          <div className="bg-surface-low rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                <Megaphone className="h-4 w-4 text-amber-600" />
              </div>
              <div>
                <p className="text-xs text-on-surface-variant">EduWorld Academy · Announcement</p>
                <p className="text-sm font-semibold text-on-surface">{title || 'Your announcement title'}</p>
              </div>
            </div>
            <p className="text-sm text-on-surface leading-relaxed whitespace-pre-line pl-10">
              {message || 'Your message will appear here.'}
            </p>
          </div>
          <p className="text-xs text-on-surface-variant">
            Sending to: {AUDIENCE_OPTIONS.find(a => a.value === audience)?.label}
            {scheduleMode && scheduleDate ? ` · Scheduled for ${scheduleDate} at ${scheduleTime || '–'}` : ' · Immediately'}
          </p>
        </div>
      )}
    </div>
  )
}
