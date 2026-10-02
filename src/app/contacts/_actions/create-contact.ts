'use server'

import { db } from '@lib/db'
import { z } from 'zod'
import type { IActionResponse } from './action-response'

const createContactSchema = z.object({
  name: z.string(),
  email: z.email(),
})

export async function createContactAction(
  formData: FormData,
): Promise<IActionResponse> {
  const { success, error, data } = createContactSchema.safeParse(
    Object.fromEntries(formData),
  )

  if (!success) {
    return {
      status: 'error',
      body: {
        message: error.message,
      },
    }
  }

  const { name, email } = data

  const isEmailAlreadyInUse = await db.contact.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      email: true,
    },
  })

  if (isEmailAlreadyInUse) {
    return {
      status: 'error',
      body: {
        message: 'This e-mail is already in use!',
      },
    }
  }

  await db.contact.create({
    data: {
      name,
      email,
    },
  })

  return {
    status: 'success',
    body: {
      message: 'Contato criado com sucesso!',
    },
  }
}
