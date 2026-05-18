'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface-lowest flex flex-col items-center justify-center p-6 text-center space-y-6">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
          <span className="text-white font-display font-bold text-sm">E</span>
        </div>
        <span className="font-display font-bold text-on-surface">EduWorld</span>
      </div>

      {/* 404 */}
      <div className="space-y-2">
        <p className="font-display font-bold text-[96px] leading-none text-primary/20 select-none">404</p>
        <h1 className="font-display font-bold text-2xl text-on-surface">This page doesn&apos;t exist yet</h1>
        <p className="text-sm text-on-surface-variant max-w-sm">
          It might have moved, or you may have followed an old link. Don&apos;t worry — let&apos;s get you back on track.
        </p>
      </div>

      {/* Illustration */}
      <div className="relative w-48 h-32 flex items-end justify-center">
        {/* Simple decorative stack of books */}
        {[
          { w: 'w-36', h: 'h-8', color: 'bg-primary/20', rotate: '-rotate-3' },
          { w: 'w-32', h: 'h-8', color: 'bg-ai/20', rotate: 'rotate-2' },
          { w: 'w-28', h: 'h-8', color: 'bg-primary/30', rotate: '-rotate-1' },
        ].map((book, i) => (
          <div
            key={i}
            className={`absolute rounded-lg ${book.w} ${book.h} ${book.color} ${book.rotate}`}
            style={{ bottom: i * 10 }}
          />
        ))}
        <div className="absolute text-4xl" style={{ bottom: 36 }}>📚</div>
      </div>

      {/* CTA */}
      <Link href="/">
        <Button size="lg" className="gap-2 px-8">
          Go to your dashboard
        </Button>
      </Link>

      <p className="text-xs text-on-surface-variant">
        Need help?{' '}
        <Link href="/support" className="text-primary hover:underline">Contact support</Link>
      </p>
    </div>
  )
}
