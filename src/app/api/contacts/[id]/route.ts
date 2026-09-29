import { db } from '@lib/db'
import { type NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const updateContactSchema = z.object({
  name: z.string(),
  email: z.email(),
})

export async function PUT(
  request: NextRequest,
  ctx: RouteContext<'/api/contacts/[id]'>,
) {
  const { id } = await ctx.params

  const data = await request.json()

  const {
    success,
    data: validatedData,
    error,
  } = updateContactSchema.safeParse(data)

  if (!success) {
    return Response.json({ error }, { status: 400 })
  }

  const { name, email } = validatedData

  const isEmailAlreadyInUse = await db.contact.findUnique({
    where: {
      email,
      AND: {
        id: {
          not: id,
        },
      },
    },
  })

  if (isEmailAlreadyInUse) {
    return NextResponse.json(
      { error: 'This e-mail is already in use!' },
      { status: 409 },
    )
  }

  const contact = await db.contact.update({
    where: {
      id,
    },
    data: {
      name,
      email,
    },
  })

  return NextResponse.json(contact)
}
