'use client'

import { Button } from '@components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@components/ui/field'
import { Input } from '@components/ui/input'
import { useActionState } from 'react'

export function CreateContactForm() {
  const [_, formAction, isLoading] = useActionState(
    async (_: unknown, formData: FormData) => {
      const data = Object.fromEntries(formData)

      await fetch('/api/contacts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    },
    null,
  )

  return (
    <form action={formAction}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Nome</FieldLabel>
          <Input name="name" id="name" />
        </Field>

        <Field>
          <FieldLabel htmlFor="email">E-mail</FieldLabel>
          <Input name="email" id="email" />
        </Field>

        <Button type="submit" className="w-full" disabled={isLoading}>
          Criar
        </Button>
      </FieldGroup>
    </form>
  )
}
