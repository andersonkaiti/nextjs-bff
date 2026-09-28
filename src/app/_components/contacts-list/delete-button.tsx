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
import { TrashIcon } from 'lucide-react'

export function DeleteButton() {
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
          <Button variant="destructive">Deletar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
