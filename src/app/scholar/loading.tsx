import { Skeleton } from '@/components/ui/skeleton'

export default function ScholarLoading() {
  return (
    <div className="p-4 md:p-6 space-y-4 pb-24">
      <div className="space-y-2">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-80" />
      </div>
      {/* Tab bar */}
      <div className="flex gap-2">
        {[1, 2, 3, 4].map(i => (
          <Skeleton key={i} className="h-9 w-24 rounded-full" />
        ))}
      </div>
      {/* Cards */}
      {[1, 2, 3].map(i => (
        <div key={i} className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-3">
          <div className="flex items-start justify-between">
            <div className="space-y-2 flex-1">
              <Skeleton className="h-5 w-56" />
              <Skeleton className="h-3 w-40" />
            </div>
            <Skeleton className="h-8 w-20 rounded-full ml-4" />
          </div>
          <Skeleton className="h-2 w-full rounded-full" />
        </div>
      ))}
    </div>
  )
}
