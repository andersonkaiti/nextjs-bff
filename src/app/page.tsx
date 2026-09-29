import { Suspense } from 'react'
import { ContactsList } from './_components/contacts-list'
import { ContactsListLoadingSkeleton } from './_components/contacts-list/loading-skeleton'
import { Header } from './_components/header'

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col items-center gap-4 px-5 pt-20">
      <Header />

      <Suspense fallback={<ContactsListLoadingSkeleton />}>
        <ContactsList />
      </Suspense>
    </div>
  )
}
