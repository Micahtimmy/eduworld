import { Skeleton } from '@/components/ui/skeleton'

export default function AchieverLoading() {
  return (
    <div className="p-4 space-y-4 pb-24">
      <div className="space-y-2">
        <Skeleton className="h-7 w-56" />
        <Skeleton className="h-4 w-72" />
      </div>
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-surface-lowest rounded-2xl border border-outline-variant p-3 space-y-2">
            <Skeleton className="h-6 w-12" />
            <Skeleton className="h-3 w-16" />
          </div>
        ))}
      </div>
      {/* Chart placeholder */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-40 w-full rounded-xl" />
      </div>
      {/* List */}
      {[1, 2, 3].map(i => (
        <div key={i} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 flex items-center gap-4">
          <Skeleton className="h-10 w-10 rounded-xl flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-3 w-32" />
          </div>
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      ))}
    </div>
  )
}
