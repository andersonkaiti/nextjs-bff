import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar'
import { Button } from '@components/ui/button'
import { db } from '@lib/db'
import { Pen } from 'lucide-react'
import Link from 'next/link'
import { DeleteButton } from './delete-button'

export async function ContactsList() {
  const contacts = await db.contact.findMany()

  return (
    <div className="w-full space-y-2">
      {contacts.map(({ id, name, email }) => (
        <div
          key={id}
          className="flex items-center justify-between rounded-md border border-accent p-2"
        >
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={`http://github.com/${name}.png`} />
              <AvatarFallback />
            </Avatar>

            <div className="leading-5">
              <h1>{name}</h1>
              <small className="text-muted-foreground text-xs">{email}</small>
            </div>
          </div>

          <div className="space-x-2">
            <Button
              variant="ghost"
              nativeButton={false}
              render={
                <Link href={`/contacts/${id}`}>
                  <Pen />
                </Link>
              }
            />

            <DeleteButton contactId={id} />
          </div>
        </div>
      ))}
    </div>
  )
}
