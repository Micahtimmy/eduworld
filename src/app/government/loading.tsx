import { Skeleton } from '@/components/ui/skeleton'

export default function GovernmentLoading() {
  return (
    <div className="p-4 md:p-6 space-y-5 pb-24">
      <div className="space-y-2">
        <Skeleton className="h-8 w-60" />
        <Skeleton className="h-4 w-72" />
      </div>
      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-2">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-5 w-12 rounded-full" />
          </div>
        ))}
      </div>
      {/* Map placeholder */}
      <Skeleton className="h-64 w-full rounded-2xl" />
      {/* District list */}
      {[1, 2, 3].map(i => (
        <div key={i} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-xl flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-3 w-60" />
          </div>
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      ))}
    </div>
  )
}
