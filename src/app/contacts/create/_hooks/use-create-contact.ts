import { toast } from '@components/ui/toast'
import { useRouter } from 'next/navigation'
import { useActionState } from 'react'

export function useCreateContact() {
  const router = useRouter()

  const [_, formAction, isLoading] = useActionState(
    async (_: unknown, formData: FormData) => {
      const data = Object.fromEntries(formData)

      const response = await fetch('/api/contacts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.status === 201) {
        toast.add({
          title: 'Contato criado com sucesso!',
          type: 'success',
        })

        router.push('/')
      }
    },
    null,
  )

  return {
    formAction,
    isLoading,
  }
}
