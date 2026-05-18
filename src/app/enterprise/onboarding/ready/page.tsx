'use client'
import Link from 'next/link'
import { ChevronRight, Users, BarChart3, Award, TrendingUp, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

function ProgressBar({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1 flex-1 rounded-full transition-all duration-300 ${i < step ? 'bg-primary' : 'bg-outline-variant'}`}
        />
      ))}
    </div>
  )
}

export default function EnterpriseOnboardingReadyPage() {
  return (
    <div className="min-h-screen bg-surface-low flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Progress — all filled */}
        <ProgressBar step={4} total={4} />

        {/* Celebration */}
        <div className="text-center space-y-4 pt-4">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/30">
              <span className="text-4xl">🚀</span>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="font-display font-bold text-3xl text-on-surface">
              Ready to build a smarter workforce
            </h1>
            <p className="text-base text-on-surface-variant">Your EduWorld Enterprise workspace is live.</p>
          </div>
        </div>

        {/* Capability highlights */}
        <div className="bg-surface-lowest border border-outline-variant rounded-2xl p-5 space-y-4">
          <p className="text-sm font-semibold text-on-surface">What you can do now</p>
          <div className="space-y-3">
            {[
              { icon: <Users className="h-4 w-4 text-primary" />, title: 'Create learning paths', desc: 'Build curated programs for teams or roles' },
              { icon: <BarChart3 className="h-4 w-4 text-ai" />, title: 'Track progress', desc: 'See completion rates and skills growth' },
              { icon: <TrendingUp className="h-4 w-4 text-xp" />, title: 'Skills gap analysis', desc: 'AI identifies where your team needs growth' },
              { icon: <Award className="h-4 w-4 text-purple-500" />, title: 'Issue certificates', desc: 'Verified digital credentials for completions' },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-surface-low flex items-center justify-center shrink-0">
                  {f.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-on-surface">{f.title}</p>
                  <p className="text-xs text-on-surface-variant">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Setup complete */}
        <div className="bg-surface-lowest border border-outline-variant rounded-2xl p-5 space-y-3">
          <p className="text-sm font-semibold text-on-surface">Setup complete</p>
          {[
            'Organisation profile configured',
            'Learning platform activated',
            'AI tools enabled',
          ].map(item => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 text-ai shrink-0" />
              <p className="text-sm text-on-surface-variant">{item}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link href="/enterprise" className="block">
          <Button className="w-full h-12 text-base gap-2">
            Go to my workspace
            <ChevronRight className="h-5 w-5" />
          </Button>
        </Link>

        <p className="text-center text-xs text-on-surface-variant">
          Questions? <button className="text-primary hover:underline font-semibold">Contact support</button>
        </p>
      </div>
    </div>
  )
}
