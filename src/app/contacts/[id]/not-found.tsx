import { Button } from '@components/ui/button'
import Link from 'next/link'

export default async function NotFound() {
  return (
    <section>
      <div className="mx-auto grid min-h-screen max-w-7xl place-items-center px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 font-extrabold text-7xl text-primary-600 tracking-tight lg:text-9xl dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 font-bold text-3xl text-gray-900 tracking-tight md:text-4xl dark:text-white">
            Contato não encontrado!
          </p>
          <p className="mb-4 font-light text-gray-500 text-lg dark:text-gray-400">
            Não foi possível encontrar o contato. Volte para a página inicial.
          </p>

          <Button
            variant="outline"
            render={
              <Link href="/" className="px-5 py-2.5 font-medium text-sm">
                Voltar para a página inicial
              </Link>
            }
          />
        </div>
      </div>
    </section>
  )
}
