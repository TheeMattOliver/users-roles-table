import type {Meta} from '@storybook/react'
import {Cross2Icon} from '@radix-ui/react-icons'
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription
} from './Dialog'
import classNames from './Dialog.module.css'
import deleteUserDialogClassNames from '../DeleteUserDialog/DeleteUserDialog.module.css'
import Button from '../Button'

import type {DialogProps} from './types'

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically' generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Dialog>

export default meta

export function playground(args: DialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="Button violet">Open dialog</button>
      </DialogTrigger>

      <DialogOverlay />
      <div className={classNames.ScrollPadding}>
        <DialogContent style={{maxWidth: '488px'}} showCloseButton={false}>
          <DialogTitle>Delete user</DialogTitle>
          <DialogDescription>
            Are you sure? The user <span className={deleteUserDialogClassNames.DeletedUser}>Lareina Cline</span> will be
            permanently deleted.
          </DialogDescription>

          <div style={{display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-3)'}}>
            <DialogClose asChild>
              <Button>Cancel</Button>
            </DialogClose>
            <Button className={deleteUserDialogClassNames.DangerButton} color="red">
              Delete user
            </Button>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  )
}
playground.argTypes = {}

playground.args = {}
