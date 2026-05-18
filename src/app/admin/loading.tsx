import { Skeleton } from '@/components/ui/skeleton'

export default function AdminLoading() {
  return (
    <div className="p-4 md:p-6 space-y-5 pb-24">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-8 w-52" />
          <Skeleton className="h-4 w-64" />
        </div>
        <Skeleton className="h-10 w-28 rounded-full" />
      </div>
      {/* KPI cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-3">
            <div className="flex items-center justify-between">
              <Skeleton className="h-9 w-9 rounded-xl" />
              <Skeleton className="h-5 w-12 rounded-full" />
            </div>
            <Skeleton className="h-7 w-20" />
            <Skeleton className="h-3 w-28" />
          </div>
        ))}
      </div>
      {/* Chart */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant p-5 space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-8 w-24 rounded-full" />
        </div>
        <Skeleton className="h-52 w-full rounded-xl" />
      </div>
      {/* Recent table */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
        <div className="p-4 flex items-center justify-between border-b border-outline-variant">
          <Skeleton className="h-5 w-36" />
          <Skeleton className="h-4 w-16" />
        </div>
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="flex items-center gap-4 p-4 border-b border-outline-variant last:border-0">
            <Skeleton className="h-9 w-9 rounded-full flex-shrink-0" />
            <div className="flex-1 space-y-1.5">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-3 w-28" />
            </div>
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  )
}
