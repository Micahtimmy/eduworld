'use client'
import { Calendar, Clock, MapPin, Mail, Video, FileText, Sparkles, BookOpen, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ParentConferencePage() {
  return (
    <div className="p-6 space-y-6 max-w-2xl mx-auto">
      {/* Success Banner */}
      <div className="text-center space-y-2">
        <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-950/30 flex items-center justify-center mx-auto">
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
        <h1 className="font-display font-bold text-2xl text-on-surface">You're all set!</h1>
        <p className="text-sm text-on-surface-variant">A confirmation email has been sent. Your teacher has been notified.</p>
      </div>

      {/* Teacher Card */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center font-bold text-xl text-primary">JS</div>
          <div className="flex-1">
            <p className="font-semibold text-on-surface">Ms. Julia Simmons</p>
            <p className="text-xs text-on-surface-variant">Lead Educator, Year 4</p>
          </div>
          <Button size="sm" variant="outline" className="gap-2"><Mail className="h-4 w-4" /> Message Teacher</Button>
        </div>
      </div>

      {/* Meeting Details */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <h2 className="font-display font-semibold text-on-surface">Meeting Details</h2>
        <div className="space-y-3">
          {[
            { icon: Calendar, label: 'Date', value: 'Sept 24, 2024' },
            { icon: Clock, label: 'Time', value: '4:15 PM' },
            { icon: MapPin, label: 'Location', value: 'Virtual Classroom 4B' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-on-surface-variant">{label}</p>
                <p className="text-sm font-semibold text-on-surface">{value}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-3 pt-2">
          <Button variant="outline" size="sm" className="gap-2"><Calendar className="h-4 w-4" /> Add to Calendar</Button>
          <Button size="sm" className="gap-2"><Video className="h-4 w-4" /> Join Test Meeting</Button>
        </div>
      </div>

      {/* Meeting Agenda */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-on-surface-variant" />
          <h2 className="font-display font-semibold text-on-surface">Meeting Agenda</h2>
          <span className="text-xs bg-ai/10 text-ai px-2 py-0.5 rounded-full flex items-center gap-1"><Sparkles className="h-3 w-3" /> AI Suggested</span>
        </div>
        <textarea
          className="w-full border border-outline-variant rounded-xl px-3 py-2 text-sm bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          rows={3}
          placeholder="Share topics or concerns you'd like to discuss..."
        />
        <Button variant="outline" size="sm">Save Agenda Notes</Button>
      </div>

      {/* Related Materials */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <h2 className="font-display font-semibold text-on-surface">Related Materials</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
            <FileText className="h-5 w-5 text-red-500 shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-on-surface">Term 3 Progress Report.pdf</p>
              <p className="text-xs text-on-surface-variant">Updated 2 days ago</p>
            </div>
            <button className="text-primary text-xs hover:underline">Download</button>
          </div>
          <div className="flex items-center gap-3 p-3 bg-surface-low rounded-xl">
            <Sparkles className="h-5 w-5 text-ai shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-on-surface">Behavior & Engagement Dashboard</p>
              <p className="text-xs text-on-surface-variant">Interactive Link</p>
            </div>
            <button className="text-primary text-xs hover:underline">Open</button>
          </div>
        </div>
      </div>

      {/* AI Insight */}
      <div className="bg-ai/5 border border-ai/20 rounded-2xl p-4 space-y-2">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-ai" />
          <span className="text-xs font-semibold text-ai">AI Personalized Insight</span>
        </div>
        <p className="text-sm text-on-surface-variant">+15% improvement in geometric reasoning noted this term. Focus discussion on consolidating these gains.</p>
      </div>

      {/* Pro Tip */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 flex gap-3">
        <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-on-surface">Pro Tip</p>
          <p className="text-xs text-on-surface-variant">Review the Teacher's Goals section in the student handbook before your meeting.</p>
          <button className="text-xs text-primary hover:underline mt-1">View Handbook →</button>
        </div>
      </div>
    </div>
  )
}
