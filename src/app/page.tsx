import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-surface-lowest flex flex-col items-center justify-center p-6 text-center space-y-6">
      <div className="space-y-2">
        <p className="text-xs font-semibold text-ai flex items-center justify-center gap-1">
          <span>✦</span> Powered by Global Intelligence
        </p>
        <h1 className="font-display font-bold text-4xl text-on-surface">EduWorld</h1>
        <p className="text-lg text-on-surface-variant">The world learns here.</p>
        <p className="text-xs text-on-surface-variant">EWD-001</p>
      </div>
      <div className="flex gap-3">
        <Link href="/login">
          <Button variant="outline" size="lg">Sign in</Button>
        </Link>
        <Link href="/signup">
          <Button size="lg">Get started</Button>
        </Link>
      </div>
    </div>
  )
}
