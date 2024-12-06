import React from 'react'
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

const DeleteUserDialog = ({user, trigger, open, onOpenChange, onDelete}: DeleteUserDialogProps) => {
  if (!open) return null
  return (
    <Dialog
      open={open}
      onOpenChange={isOpen => {
        onOpenChange(isOpen)
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogOverlay />
      <div className={classNames.ScrollPadding}>
        <DialogContent
          style={{maxWidth: '488px'}}
          showCloseButton={false}
          onCloseAutoFocus={event => event.preventDefault()}
        >
          <DialogTitle>Delete user</DialogTitle>
          <DialogDescription>
            Are you sure? The user <span className={classNames.DeletedUser}>{`${user.first} ${user.last}`}</span> will
            be permanently deleted.
          </DialogDescription>

          <div style={{display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-3)'}}>
            <DialogClose asChild>
              <Button>Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button className={classNames.DangerButton} color="red" onClick={() => onDelete(user.id)}>
                Delete user
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  )
}
export default DeleteUserDialog
