'use client'
import Link from 'next/link'
import { Sparkles, ClipboardCheck, MessageSquare, ChevronRight, GraduationCap, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function TeacherOnboardingWelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e3a5f] via-[#1e4d7b] to-[#0f2a4a] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-ai/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10 space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
            <GraduationCap className="h-9 w-9 text-white" />
          </div>
        </div>

        {/* Hero text */}
        <div className="text-center space-y-3">
          <p className="text-xs font-label font-semibold text-primary/80 uppercase tracking-widest">For Teachers</p>
          <h1 className="font-display font-bold text-4xl text-white leading-tight">
            Save hours every week.<br />
            <span className="text-primary">Teach better.</span>
          </h1>
          <p className="text-base text-white/60 font-body">
            EduWorld handles the admin so you can focus on what matters — your students.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="space-y-3">
          {[
            {
              icon: <Sparkles className="h-5 w-5 text-ai" />,
              bg: 'bg-ai/10 border-ai/20',
              title: 'AI Lesson Generator',
              desc: 'Create full lesson plans, slides, and notes in seconds',
            },
            {
              icon: <ClipboardCheck className="h-5 w-5 text-primary" />,
              bg: 'bg-primary/10 border-primary/20',
              title: 'Smart Grading',
              desc: 'AI drafts grades and feedback, you review and approve',
            },
            {
              icon: <MessageSquare className="h-5 w-5 text-purple-400" />,
              bg: 'bg-purple-500/10 border-purple-500/20',
              title: 'Parent Communications',
              desc: 'Auto-generated progress updates and instant messaging',
            },
            {
              icon: <BarChart3 className="h-5 w-5 text-xp" />,
              bg: 'bg-xp/10 border-xp/20',
              title: 'Class Analytics',
              desc: 'Real-time insights on student progress and attendance',
            },
          ].map((f, i) => (
            <div key={i} className={`${f.bg} border rounded-xl p-4 flex items-center gap-3`}>
              <div className="shrink-0">{f.icon}</div>
              <div>
                <p className="text-sm font-semibold text-white">{f.title}</p>
                <p className="text-xs text-white/60">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link href="/teacher/onboarding/subjects" className="block">
          <Button className="w-full h-12 text-base gap-2">
            Set up my classroom
            <ChevronRight className="h-5 w-5" />
          </Button>
        </Link>

        <p className="text-center text-xs text-white/30">
          Setup takes about 3 minutes
        </p>
      </div>
    </div>
  )
}
