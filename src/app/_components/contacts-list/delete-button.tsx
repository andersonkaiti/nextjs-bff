'use client'

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
import { toast } from '@components/ui/toast'
import { Loader2, TrashIcon } from 'lucide-react'
import { useTransition } from 'react'
import { deleteContactAction } from '../../contacts/_actions/delete-contact'

interface IDeleteButtonProps {
  contactId: string
}

export function DeleteButton({ contactId }: IDeleteButtonProps) {
  const [isLoading, startTransition] = useTransition()

  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button variant="destructive">
            {isLoading ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <TrashIcon />
            )}
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
            onClick={() => {
              startTransition(async () => {
                const { status } = await deleteContactAction(contactId)

                if (status === 'success') {
                  toast.add({
                    title: 'Contato deletado com sucesso!',
                  })
                }

                if (status === 'error') {
                  toast.add({
                    title: 'Contato deletado com sucesso!',
                  })
                }
              })
            }}
          >
            Deletar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
