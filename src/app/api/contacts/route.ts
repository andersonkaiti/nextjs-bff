import { db } from '@lib/db'
import { type NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const createContactSchema = z.object({
  name: z.string(),
  email: z.email(),
})

export async function POST(request: NextRequest) {
  const data = await request.json()

  const {
    success,
    data: validatedData,
    error,
  } = createContactSchema.safeParse(data)

  if (!success) {
    return NextResponse.json({ error }, { status: 400 })
  }

  const { name, email } = validatedData

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
    return NextResponse.json(
      { error: 'This e-mail is already in use!' },
      { status: 409 },
    )
  }

  const contact = await db.contact.create({
    data: {
      name,
      email,
    },
  })

  return NextResponse.json(contact, { status: 201 })
}
