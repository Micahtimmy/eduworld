import { Skeleton } from '@/components/ui/skeleton'

export default function ParentLoading() {
  return (
    <div className="p-4 space-y-4 pb-24">
      <div className="space-y-2">
        <Skeleton className="h-7 w-44" />
        <Skeleton className="h-4 w-60" />
      </div>
      {/* Child cards */}
      <div className="grid grid-cols-2 gap-3">
        {[1, 2].map(i => (
          <div key={i} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <Skeleton className="h-12 w-12 rounded-full mx-auto" />
            <Skeleton className="h-4 w-24 mx-auto" />
            <Skeleton className="h-2 w-full rounded-full" />
            <Skeleton className="h-3 w-16 mx-auto" />
          </div>
        ))}
      </div>
      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-surface-lowest rounded-2xl border border-outline-variant p-3 space-y-2 text-center">
            <Skeleton className="h-6 w-10 mx-auto" />
            <Skeleton className="h-3 w-14 mx-auto" />
          </div>
        ))}
      </div>
      {/* Feed */}
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="flex items-start gap-3 bg-surface-lowest rounded-2xl border border-outline-variant p-4">
          <Skeleton className="h-8 w-8 rounded-full flex-shrink-0 mt-0.5" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-full max-w-xs" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>
      ))}
    </div>
  )
}
