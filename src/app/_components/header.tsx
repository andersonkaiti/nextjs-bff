import { ThemeToggle } from '@components/theme-toggle'
import { Button } from '@components/ui/button'
import { PlusIcon } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  return (
    <header className="flex w-full flex-col justify-between gap-2 sm:flex-row">
      <div>
        <h1 className="font-bold text-3xl tracking-tighter">MyContacts</h1>
        <small className="text-muted-foreground">
          Seus contatos em um só lugar
        </small>
      </div>

      <div className="flex items-center gap-2">
        <Button
          nativeButton={false}
          render={
            <Link href="/contacts/create">
              <PlusIcon /> Criar novo contato
            </Link>
          }
        />

        <ThemeToggle />
      </div>
    </header>
  )
}
