import { Skeleton } from '@components/ui/skeleton'

export function ContactsListLoadingSkeleton() {
  return Array.from({ length: 10 }, (_, index: number) => index).map(
    (index: number) => (
      <div
        key={index}
        className="flex w-full items-center justify-between rounded-md border border-accent p-2"
      >
        <div className="flex items-center gap-2">
          <Skeleton className="size-8 rounded-full" />

          <div className="space-y-3">
            <Skeleton className="h-5 w-31" />
            <Skeleton className="h-2 w-35" />
          </div>
        </div>

        <div className="flex gap-2">
          <Skeleton className="size-9" />
          <Skeleton className="size-9" />
        </div>
      </div>
    ),
  )
}
