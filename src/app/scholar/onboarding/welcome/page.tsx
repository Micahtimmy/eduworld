'use client'
import Link from 'next/link'
import { GraduationCap, Sparkles, BookOpen, FlaskConical, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ScholarOnboardingWelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e2d4a] to-[#0f172a] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Constellation pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { cx: '10%', cy: '15%', r: 1.5 }, { cx: '25%', cy: '8%', r: 1 }, { cx: '40%', cy: '20%', r: 2 },
          { cx: '60%', cy: '5%', r: 1.5 }, { cx: '75%', cy: '18%', r: 1 }, { cx: '90%', cy: '10%', r: 2 },
          { cx: '15%', cy: '40%', r: 1 }, { cx: '85%', cy: '35%', r: 1.5 }, { cx: '50%', cy: '45%', r: 1 },
          { cx: '5%', cy: '70%', r: 2 }, { cx: '30%', cy: '75%', r: 1 }, { cx: '70%', cy: '68%', r: 1.5 },
          { cx: '90%', cy: '80%', r: 1 }, { cx: '45%', cy: '85%', r: 2 }, { cx: '20%', cy: '90%', r: 1 },
        ].map((star, i) => (
          <svg key={i} className="absolute" style={{ left: star.cx, top: star.cy, transform: 'translate(-50%,-50%)' }} width="6" height="6" viewBox="0 0 6 6">
            <circle cx="3" cy="3" r={star.r} fill="rgba(255,255,255,0.4)" />
          </svg>
        ))}
        {/* Constellation lines */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <line x1="10%" y1="15%" x2="25%" y2="8%" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="25%" y1="8%" x2="40%" y2="20%" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="40%" y1="20%" x2="60%" y2="5%" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="60%" y1="5%" x2="75%" y2="18%" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="75%" y1="18%" x2="90%" y2="10%" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        </svg>
      </div>

      <div className="w-full max-w-md relative z-10 space-y-8">
        {/* Logo mark */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
            <GraduationCap className="h-9 w-9 text-white" />
          </div>
        </div>

        {/* Hero text */}
        <div className="text-center space-y-3">
          <p className="text-xs font-label font-semibold text-primary/80 uppercase tracking-widest">EduWorld Scholar</p>
          <h1 className="font-display font-bold text-4xl text-white leading-tight">
            Welcome to<br />
            <span className="text-primary">EduWorld Scholar</span>
          </h1>
          <p className="text-base text-white/60 font-body">Your academic command centre</p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: <Sparkles className="h-5 w-5" />, label: 'AI Research\nAssistant' },
            { icon: <BookOpen className="h-5 w-5" />, label: 'Smart Study\nPlanning' },
            { icon: <FlaskConical className="h-5 w-5" />, label: 'Citation\nGenerator' },
          ].map((f, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-3 text-center space-y-2">
              <div className="text-primary flex justify-center">{f.icon}</div>
              <p className="text-white/80 text-xs font-label leading-tight whitespace-pre-line">{f.label}</p>
            </div>
          ))}
        </div>

        {/* AI badge */}
        <div className="bg-ai/10 border border-ai/20 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-ai/20 flex items-center justify-center shrink-0">
            <Sparkles className="h-4 w-4 text-ai" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">EduWorld AI activated</p>
            <p className="text-xs text-white/60">Ready to help with research, citations, and thesis writing</p>
          </div>
        </div>

        {/* CTA */}
        <Link href="/scholar/onboarding/programme" className="block">
          <Button className="w-full h-12 text-base gap-2">
            Get started
            <ChevronRight className="h-5 w-5" />
          </Button>
        </Link>

        <p className="text-center text-xs text-white/30">
          By continuing, you agree to EduWorld's{' '}
          <button className="text-primary/70 hover:text-primary underline">Terms of Service</button>
          {' '}and{' '}
          <button className="text-primary/70 hover:text-primary underline">Privacy Policy</button>
        </p>
      </div>
    </div>
  )
}
