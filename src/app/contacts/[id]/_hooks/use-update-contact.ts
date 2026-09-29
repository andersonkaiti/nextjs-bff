import { toast } from '@components/ui/toast'
import { useParams, useRouter } from 'next/navigation'
import { useActionState } from 'react'

export function useUpdateContact() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()

  const [_, formAction, isLoading] = useActionState(
    async (_: unknown, formData: FormData) => {
      const data = Object.fromEntries(formData)

      const response = await fetch(`/api/contacts/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.status === 200) {
        toast.add({
          title: 'Contato atualizado com sucesso!',
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
