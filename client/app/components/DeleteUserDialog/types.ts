import type {User} from '@/app/types/users'

export type DeleteUserDialogProps = {
  user?: User
  trigger?: React.ReactNode
  onDelete?: (string) => void
  open?: boolean
  /** Event handler called when the open state of the dialog changes. */
  onOpenChange?: (open: boolean) => void
}
