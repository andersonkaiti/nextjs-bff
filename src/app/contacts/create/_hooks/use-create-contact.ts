import { toast } from '@components/ui/toast'
import { useRouter } from 'next/navigation'
import { useActionState } from 'react'
import { createContactAction } from '../../_actions/create-contact'

export function useCreateContact() {
  const router = useRouter()

  const [, formAction, isLoading] = useActionState(
    async (_: unknown, formData: FormData) => {
      try {
        const { body, status } = await createContactAction(formData)

        if (status === 'error') {
          toast.add({
            title: String(body?.message),
            type: 'error',
          })

          return
        }

        toast.add({
          title: String(body?.message),
          type: 'success',
        })

        router.push('/')
      } catch {
        toast.add({
          title: 'Ocorreu um erro inesperado.',
          type: 'error',
        })
      }
    },
    null,
  )

  return {
    formAction,
    isLoading,
  }
}
