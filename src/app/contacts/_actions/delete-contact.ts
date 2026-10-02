'use server'

import { db } from '@lib/db'
import { revalidatePath } from 'next/cache'
import type { IActionResponse } from './action-response'

export async function deleteContactAction(
  contactId: string,
): Promise<IActionResponse> {
  try {
    await db.contact.delete({
      where: {
        id: contactId,
      },
    })

    revalidatePath('/')

    return {
      status: 'success',
    }
  } catch {
    return {
      status: 'error',
      body: {
        message: 'Erro ao deletar o contato.',
      },
    }
  }
}
