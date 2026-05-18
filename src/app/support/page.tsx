'use client'
import { Sparkles, BookOpen, MessageCircle, Search, ExternalLink, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ROLE_DOCS = [
  { icon: '🎒', role: 'Explorer', desc: 'Learning quests, gamification, parent controls' },
  { icon: '🏆', role: 'Achiever', desc: 'Exam prep, university planning, AI tutor' },
  { icon: '🎓', role: 'Scholar', desc: 'Research tools, financial aid, coursework' },
  { icon: '👩‍🏫', role: 'Teacher', desc: 'Lesson builder, gradebook, assessments' },
  { icon: '👪', role: 'Parent', desc: 'Progress monitoring, payments, communication' },
  { icon: '🏫', role: 'Admin', desc: 'Enrollment, data governance, reporting' },
]

const QUICK_LINKS = [
  { icon: '✦', label: 'Ask EduWorld AI', desc: 'Instant answers to your questions', tag: 'AI' },
  { icon: '📊', label: 'System Health Status', desc: 'Live uptime and incident reports', tag: 'STATUS' },
  { icon: '❓', label: 'Common Queries', desc: 'Most frequently asked questions', tag: 'FAQ' },
]

const TUTORIALS = [
  { title: 'Getting Started with AI Tutoring', duration: '4 min read', tag: 'FEATURED' },
  { title: 'Setting Up Your Classroom in EduWorld', duration: '6 min read', tag: 'TEACHER' },
  { title: 'Financial Aid Application Walkthrough', duration: '5 min read', tag: 'SCHOLAR' },
]

export default function SupportPage() {
  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <div className="text-center space-y-2">
        <h1 className="font-display font-bold text-3xl text-on-surface">EduWorld Support</h1>
        <p className="text-sm text-on-surface-variant">Global Knowledge Architecture — find help across every role and module.</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant" />
        <input
          className="w-full pl-10 pr-4 py-3 bg-surface-lowest border border-outline-variant rounded-2xl text-sm outline-none focus:border-primary placeholder:text-on-surface-variant"
          placeholder="Search documentation, tutorials, and FAQs..."
        />
      </div>

      {/* Quick Access */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {QUICK_LINKS.map(q => (
          <div key={q.label} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-2 hover:border-primary/50 cursor-pointer transition-colors">
            <div className="flex items-center justify-between">
              <span className={`text-xl ${q.icon === '✦' ? 'text-ai' : ''}`}>{q.icon}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${q.tag === 'AI' ? 'bg-ai/10 text-ai' : 'bg-primary/10 text-primary'}`}>{q.tag}</span>
            </div>
            <p className="font-semibold text-sm text-on-surface">{q.label}</p>
            <p className="text-xs text-on-surface-variant">{q.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Featured Tutorial */}
          <div className="bg-ai/5 border border-ai/20 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-ai" />
              <span className="text-xs font-bold text-ai uppercase">Featured Tutorial</span>
            </div>
            <h2 className="font-display font-semibold text-on-surface">Maximising AI Tutoring for Better Results</h2>
            <p className="text-sm text-on-surface-variant">Learn how to use EduWorld&apos;s adaptive AI tutor to close knowledge gaps, prepare for exams, and get personalised feedback in real time.</p>
            <div className="flex items-center gap-3">
              <Button size="sm" className="gap-1.5">Watch Tutorial <ExternalLink className="h-3 w-3" /></Button>
              <span className="text-xs text-on-surface-variant">8 min · Video + Article</span>
            </div>
          </div>

          {/* Browse Documentation */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-on-surface-variant" />
              <h2 className="font-display font-semibold text-on-surface">Browse Documentation by Role</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ROLE_DOCS.map(r => (
                <div key={r.role} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl hover:bg-surface-high cursor-pointer transition-colors">
                  <span className="text-xl">{r.icon}</span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-on-surface">{r.role}</p>
                    <p className="text-xs text-on-surface-variant">{r.desc}</p>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 text-on-surface-variant shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Recent Tutorials */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
            <h2 className="font-display font-semibold text-on-surface">Recent Articles & Tutorials</h2>
            <div className="space-y-2">
              {TUTORIALS.map(t => (
                <div key={t.title} className="flex items-center gap-3 p-3 bg-surface-low rounded-xl hover:bg-surface-high cursor-pointer transition-colors">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-on-surface">{t.title}</p>
                    <p className="text-xs text-on-surface-variant">{t.duration}</p>
                  </div>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold shrink-0">{t.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* Contact Support */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-primary" />
              <p className="font-semibold text-sm text-on-surface">Contact Support</p>
            </div>
            <p className="text-xs text-on-surface-variant">Our team is available Monday–Friday, 9am–6pm. Average response time: 2 hours.</p>
            <Button size="sm" className="w-full">Open a Ticket</Button>
            <Button size="sm" variant="outline" className="w-full">Live Chat</Button>
          </div>

          {/* Community */}
          <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <p className="font-semibold text-sm text-on-surface">Community Hub</p>
            <p className="text-xs text-on-surface-variant">Join 42,000+ educators and students sharing strategies, resources, and feedback.</p>
            <div className="flex gap-2">
              <div className="flex -space-x-2">
                {['A', 'B', 'C', 'D'].map(l => (
                  <div key={l} className="w-7 h-7 rounded-full bg-primary/20 border-2 border-surface-lowest flex items-center justify-center text-xs font-bold text-primary">{l}</div>
                ))}
              </div>
              <span className="text-xs text-on-surface-variant self-center">+38k members</span>
            </div>
            <Button size="sm" variant="outline" className="w-full">Join Community</Button>
          </div>

          {/* System Status */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <p className="font-semibold text-sm text-on-surface">All Systems Operational</p>
            </div>
            <p className="text-xs text-on-surface-variant">Last checked 2 min ago. 99.98% uptime this month.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
