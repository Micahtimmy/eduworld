'use client'
import Link from 'next/link'
import { ChevronRight, Users, CalendarCheck, BarChart3, CreditCard, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AdminOnboardingWelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10 space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
            <GraduationCap className="h-9 w-9 text-white" />
          </div>
        </div>

        {/* Hero text */}
        <div className="text-center space-y-3">
          <p className="text-xs font-label font-semibold text-primary/80 uppercase tracking-widest">EduWorld Admin</p>
          <h1 className="font-display font-bold text-4xl text-white leading-tight">
            Your institution's<br />
            <span className="text-primary">command centre</span>
          </h1>
          <p className="text-base text-white/60 font-body">
            Manage every aspect of your school from one powerful dashboard.
          </p>
        </div>

        {/* Capability grid */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: <Users className="h-5 w-5 text-primary" />, title: 'Student Management', desc: 'Enrol, track, and support every student' },
            { icon: <CalendarCheck className="h-5 w-5 text-ai" />, title: 'Attendance', desc: 'Real-time attendance across all classrooms' },
            { icon: <BarChart3 className="h-5 w-5 text-xp" />, title: 'Analytics', desc: 'School-wide performance insights' },
            { icon: <CreditCard className="h-5 w-5 text-purple-400" />, title: 'Fee Management', desc: 'Invoices, payments, and reports' },
          ].map((cap, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2">
              <div>{cap.icon}</div>
              <p className="text-sm font-semibold text-white leading-tight">{cap.title}</p>
              <p className="text-xs text-white/50 leading-snug">{cap.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats preview */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <p className="text-xs text-white/40 font-label uppercase tracking-wider mb-3">What you'll unlock</p>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { value: '360°', label: 'Student view' },
              { value: 'AI', label: 'Powered tools' },
              { value: '24/7', label: 'Accessibility' },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-xl font-display font-bold text-primary">{s.value}</p>
                <p className="text-xs text-white/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link href="/admin/onboarding/organisation" className="block">
          <Button className="w-full h-12 text-base gap-2">
            Set up my institution
            <ChevronRight className="h-5 w-5" />
          </Button>
        </Link>

        <p className="text-center text-xs text-white/30">
          Takes about 5 minutes to complete
        </p>
      </div>
    </div>
  )
}
