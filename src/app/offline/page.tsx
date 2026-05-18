'use client'
import { Button } from '@/components/ui/button'
import { RefreshCw } from 'lucide-react'

const OFFLINE_CONTENT = [
  { icon: '📖', label: 'Last opened lesson', detail: 'Neural Network Backpropagation — CS-701' },
  { icon: '❓', label: 'Recent quiz questions', detail: '15 questions saved from last session' },
  { icon: '📎', label: 'Downloaded assignments', detail: '3 assignments available offline' },
]

export default function OfflinePage() {
  const handleRetry = () => {
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-surface-lowest flex flex-col items-center justify-center p-6 text-center space-y-8">
      {/* Cloud with X */}
      <div className="flex flex-col items-center gap-2">
        <div className="relative">
          <svg
            viewBox="0 0 80 56"
            className="w-24 h-16 text-on-surface-variant"
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Cloud shape */}
            <path
              d="M20 40 Q8 40 8 28 Q8 18 18 16 Q18 4 30 4 Q38 4 42 10 Q46 6 52 6 Q64 6 64 18 Q72 20 72 30 Q72 40 60 40 Z"
              className="stroke-current fill-surface-low"
            />
            {/* X mark */}
            <line x1="30" y1="20" x2="50" y2="36" className="stroke-on-surface-variant" strokeWidth="3" />
            <line x1="50" y1="20" x2="30" y2="36" className="stroke-on-surface-variant" strokeWidth="3" />
          </svg>
        </div>
        <div className="w-2 h-2 rounded-full bg-on-surface-variant/30" />
        <div className="w-3 h-3 rounded-full bg-on-surface-variant/20" />
      </div>

      {/* Headline */}
      <div className="space-y-2">
        <h1 className="font-display font-bold text-2xl text-on-surface">You&apos;re offline</h1>
        <p className="text-sm text-on-surface-variant max-w-sm">
          No internet connection detected. Some content is still available from your last session.
        </p>
      </div>

      {/* Offline content list */}
      <div className="w-full max-w-sm bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3 text-left">
        <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wide">Available offline</p>
        {OFFLINE_CONTENT.map(item => (
          <div key={item.label} className="flex items-start gap-3 py-1">
            <span className="text-xl shrink-0">{item.icon}</span>
            <div>
              <p className="text-sm font-medium text-on-surface">{item.label}</p>
              <p className="text-xs text-on-surface-variant">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Sync status */}
      <div className="flex items-center gap-2 text-xs text-on-surface-variant">
        <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        Syncing automatically when you reconnect
      </div>

      {/* Retry */}
      <Button size="md" variant="outline" className="gap-2" onClick={handleRetry}>
        <RefreshCw className="h-4 w-4" /> Retry connection
      </Button>
    </div>
  )
}
