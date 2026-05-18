'use client'
import Link from 'next/link'
import { ChevronRight, BarChart3, Globe, TrendingUp, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function GovernmentOnboardingWelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c1624] via-[#1a2940] to-[#0c1624] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10 space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
            <GraduationCap className="h-9 w-9 text-white" />
          </div>
        </div>

        {/* Hero text */}
        <div className="text-center space-y-3">
          <p className="text-xs font-label font-semibold text-primary/70 uppercase tracking-widest">Ministry Portal</p>
          <h1 className="font-display font-bold text-4xl text-white leading-tight">
            National education<br />
            <span className="text-primary">intelligence</span>
          </h1>
          <p className="text-base text-white/55 font-body">
            Real-time data across every school, district, and region — at your fingertips.
          </p>
        </div>

        {/* Map graphic placeholder */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
              {/* Simplified map grid */}
              {Array.from({ length: 8 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 28} x2="400" y2={i * 28} stroke="white" strokeWidth="0.5" />
              ))}
              {Array.from({ length: 12 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 36} y1="0" x2={i * 36} y2="200" stroke="white" strokeWidth="0.5" />
              ))}
              {/* Dots for schools */}
              {[
                [80, 60], [150, 90], [220, 50], [300, 110], [180, 140], [90, 150], [260, 160], [350, 70],
              ].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="4" fill="#1e5799" opacity="0.8" />
              ))}
            </svg>
          </div>
          <div className="relative z-10 flex items-center gap-4">
            <Globe className="h-8 w-8 text-primary shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white">National Coverage</p>
              <p className="text-xs text-white/50">Connect schools across all districts and regions</p>
            </div>
          </div>
        </div>

        {/* Key metrics preview */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: <BarChart3 className="h-4 w-4 text-primary" />, label: 'Enrolment\nData' },
            { icon: <TrendingUp className="h-4 w-4 text-ai" />, label: 'Performance\nTrends' },
            { icon: <Globe className="h-4 w-4 text-xp" />, label: 'District\nReports' },
          ].map((m, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center space-y-2">
              <div className="flex justify-center">{m.icon}</div>
              <p className="text-xs text-white/60 leading-tight whitespace-pre-line font-label">{m.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link href="/government/onboarding/ministry" className="block">
          <Button className="w-full h-12 text-base gap-2">
            Set up ministry portal
            <ChevronRight className="h-5 w-5" />
          </Button>
        </Link>

        <p className="text-center text-xs text-white/30">
          Takes about 3 minutes to configure
        </p>
      </div>
    </div>
  )
}
