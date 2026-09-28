import { ContactsList } from './_components/contacts-list'
import { Header } from './_components/header'

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col items-center justify-center gap-4 p-5">
      <Header />

      <ContactsList />
    </div>
  )
}
