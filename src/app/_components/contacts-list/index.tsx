import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar'
import { Button } from '@components/ui/button'
import { Pen } from 'lucide-react'
import Link from 'next/link'
import { DeleteButton } from './delete-button'

const contacts = [
  {
    id: String(Math.random()),
    name: 'Contact',
    email: 'anderkaiti@gmail.com',
  },
  {
    id: String(Math.random()),
    name: 'Contact',
    email: 'anderkaiti@gmail.com',
  },
  {
    id: String(Math.random()),
    name: 'Contact',
    email: 'anderkaiti@gmail.com',
  },
]

export function ContactsList() {
  return (
    <div className="w-full space-y-2">
      {contacts.map(({ id, name, email }) => (
        <div
          key={id}
          className="flex items-center justify-between rounded-md border border-accent p-2"
        >
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage />
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

            <DeleteButton />
          </div>
        </div>
      ))}
    </div>
  )
}
