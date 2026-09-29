import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { CreateContactForm } from './_components/form'

export default function CreateContact() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col justify-center gap-8 p-5">
      <header className="space-y-2">
        <Link
          href="/"
          className="flex items-center gap-2 text-muted-foreground text-sm"
        >
          <ChevronLeft className="size-4" />
          Voltar para a lista
        </Link>
        <h1 className="font-bold text-3xl tracking-tighter">Criar contato</h1>
      </header>

      <CreateContactForm />
    </div>
  )
}
