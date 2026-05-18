'use client'
import Link from 'next/link'
import { ChevronRight, TrendingUp, Users, BarChart3, Award, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function EnterpriseOnboardingWelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1b2a] via-[#1b2b3b] to-[#0d1b2a] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#1e5799]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10 space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
            <Briefcase className="h-9 w-9 text-white" />
          </div>
        </div>

        {/* Hero text */}
        <div className="text-center space-y-3">
          <p className="text-xs font-label font-semibold text-primary/70 uppercase tracking-widest">EduWorld Enterprise</p>
          <h1 className="font-display font-bold text-4xl text-white leading-tight">
            Upskill your workforce.<br />
            <span className="text-primary">Measure what matters.</span>
          </h1>
          <p className="text-base text-white/55 font-body">
            AI-powered learning programs built for the modern enterprise — at scale.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="space-y-3">
          {[
            {
              icon: <Users className="h-5 w-5 text-primary" />,
              title: 'Team-scale Learning',
              desc: 'Deploy training programs across your entire workforce instantly',
            },
            {
              icon: <BarChart3 className="h-5 w-5 text-ai" />,
              title: 'Learning Analytics',
              desc: 'Track completion, skills growth, and ROI in real time',
            },
            {
              icon: <TrendingUp className="h-5 w-5 text-xp" />,
              title: 'Skills Gap Analysis',
              desc: 'AI identifies gaps and recommends targeted learning paths',
            },
            {
              icon: <Award className="h-5 w-5 text-purple-400" />,
              title: 'Certification Engine',
              desc: 'Issue verified digital credentials and certificates',
            },
          ].map((f, i) => (
            <div key={i} className="bg-white/5 border border-white/8 rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                {f.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{f.title}</p>
                <p className="text-xs text-white/50">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link href="/enterprise/onboarding/organisation" className="block">
          <Button className="w-full h-12 text-base gap-2">
            Set up your organisation
            <ChevronRight className="h-5 w-5" />
          </Button>
        </Link>

        <p className="text-center text-xs text-white/30">
          Takes about 3 minutes to set up
        </p>
      </div>
    </div>
  )
}
