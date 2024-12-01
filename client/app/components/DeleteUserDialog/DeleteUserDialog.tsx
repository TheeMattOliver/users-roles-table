import {
  Dialog,
  DialogTrigger,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose
} from '../Dialog'
import Button from '../Button'
import type {DeleteUserDialogProps} from './types'
import classNames from './DeleteUserDialog.module.css'

const DeleteUserDialog = ({user, trigger, onDelete, ...props}: DeleteUserDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogOverlay />
      <div className={classNames.ScrollPadding}>
        <DialogContent style={{maxWidth: '488px'}} showCloseButton={false}>
          <DialogTitle>Delete user</DialogTitle>
          <DialogDescription>
            Are you sure? The user <span className={classNames.DeletedUser}>{`${user.first} ${user.last}`}</span> will
            be permanently deleted.
          </DialogDescription>

          <div style={{display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-3)'}}>
            <DialogClose asChild>
              <Button>Cancel</Button>
            </DialogClose>
            <Button className={classNames.DangerButton} color="red" onClick={() => onDelete(user.id)}>
              Delete user
            </Button>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  )
}
export default DeleteUserDialog
