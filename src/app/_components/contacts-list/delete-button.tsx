import { Button } from '@components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@components/ui/dialog'
import { db } from '@lib/db'
import { TrashIcon } from 'lucide-react'
import { revalidatePath } from 'next/cache'

interface IDeleteButtonProps {
  contactId: string
}

export function DeleteButton({ contactId }: IDeleteButtonProps) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button variant="destructive">
            <TrashIcon />
          </Button>
        }
      />

      <DialogContent>
        <DialogTitle>Tem certeza?</DialogTitle>
        <DialogDescription>
          O contato será deletado permanentemente e não poderá ser recuperado.
        </DialogDescription>

        <DialogFooter>
          <DialogClose render={<Button variant="outline">Cancelar</Button>} />
          <Button
            variant="destructive"
            onClick={async () => {
              'use server'

              await db.contact.delete({
                where: {
                  id: contactId,
                },
              })

              revalidatePath('/')
            }}
          >
            Deletar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
