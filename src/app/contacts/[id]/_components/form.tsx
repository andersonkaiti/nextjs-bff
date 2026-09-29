'use client'

import { Button } from '@components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@components/ui/field'
import { Input } from '@components/ui/input'
import { Loader2 } from 'lucide-react'
import { motion } from 'motion/react'
import type { Contact } from '../../../../../generated/prisma/browser'
import { useUpdateContact } from '../_hooks/use-update-contact'

interface IUpdateContactFormProps {
  contact: Contact
}

export function UpdateContactForm({
  contact: { name, email },
}: IUpdateContactFormProps) {
  const { formAction, isLoading } = useUpdateContact()

  return (
    <form action={formAction}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Nome</FieldLabel>
          <Input defaultValue={name} name="name" id="name" />
        </Field>

        <Field>
          <FieldLabel htmlFor="email">E-mail</FieldLabel>
          <Input defaultValue={email} name="email" id="email" />
        </Field>

        <Button
          type="submit"
          className="relative w-full overflow-hidden"
          disabled={isLoading}
        >
          <motion.span
            animate={{
              y: isLoading ? -8 : 0,
              opacity: isLoading ? 0 : 1,
            }}
            transition={{
              duration: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-flex items-center justify-center gap-[inherit]"
          >
            Atualizar
          </motion.span>

          <motion.div
            animate={{
              y: isLoading ? 0 : 8,
              opacity: isLoading ? 1 : 0,
            }}
            transition={{
              duration: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <Loader2 className="size-4 animate-spin" />
          </motion.div>
        </Button>
      </FieldGroup>
    </form>
  )
}
