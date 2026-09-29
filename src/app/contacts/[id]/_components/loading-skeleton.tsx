import { Button } from '@/components/ui/button'
import { Field, FieldGroup } from '@/components/ui/field'
import { Skeleton } from '@/components/ui/skeleton'

export function UpdateContactFormLoadingSkeleton() {
  return (
    <form>
      <FieldGroup>
        <Field>
          <Skeleton className="h-5" />
          <Skeleton className="h-9" />
        </Field>

        <Field>
          <Skeleton className="h-5" />
          <Skeleton className="h-9" />
        </Field>

        <Button
          type="submit"
          className="relative w-full overflow-hidden"
          disabled
        >
          Atualizar
        </Button>
      </FieldGroup>
    </form>
  )
}
