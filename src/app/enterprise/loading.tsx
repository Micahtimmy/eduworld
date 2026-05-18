import { Skeleton } from '@/components/ui/skeleton'

export default function EnterpriseLoading() {
  return (
    <div className="p-4 md:p-6 space-y-5 pb-24">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-8 w-56" />
          <Skeleton className="h-4 w-68" />
        </div>
        <Skeleton className="h-10 w-36 rounded-full" />
      </div>
      {/* KPI row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="bg-surface-lowest rounded-2xl border border-outline-variant p-4 space-y-2">
            <Skeleton className="h-7 w-16" />
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-1.5 w-full rounded-full" />
          </div>
        ))}
      </div>
      {/* Table */}
      <div className="bg-surface-lowest rounded-2xl border border-outline-variant overflow-hidden">
        <div className="p-4 flex items-center gap-3 border-b border-outline-variant">
          <Skeleton className="h-9 flex-1 rounded-xl max-w-xs" />
          <Skeleton className="h-9 w-24 rounded-xl" />
          <Skeleton className="h-9 w-28 rounded-xl" />
        </div>
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className="flex items-center gap-4 p-4 border-b border-outline-variant last:border-0">
            <Skeleton className="h-9 w-9 rounded-full flex-shrink-0" />
            <div className="flex-1 space-y-1.5">
              <Skeleton className="h-4 w-44" />
              <Skeleton className="h-3 w-32" />
            </div>
            <Skeleton className="h-2 w-32 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  )
}
