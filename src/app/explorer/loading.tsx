import { Skeleton } from '@/components/ui/skeleton'

export default function ExplorerLoading() {
  return (
    <div className="p-4 space-y-4 pb-24">
      {/* Header greeting */}
      <div className="space-y-2">
        <Skeleton className="h-7 w-48" />
        <Skeleton className="h-4 w-64" />
      </div>
      {/* XP bar card */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-2.5 w-full rounded-full" />
          </div>
        </div>
      </div>
      {/* Today's quests */}
      <div className="space-y-3">
        <Skeleton className="h-6 w-36" />
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-xl flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-3 w-24" />
            </div>
            <Skeleton className="h-8 w-16 rounded-full" />
          </div>
        ))}
      </div>
      {/* Subject grid */}
      <div className="grid grid-cols-2 gap-3">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <Skeleton className="h-10 w-10 rounded-xl" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-2 w-full rounded-full" />
          </div>
        ))}
      </div>
    </div>
  )
}
