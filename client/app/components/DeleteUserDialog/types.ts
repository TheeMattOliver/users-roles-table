import {User} from '../UsersTable/types'

export type DeleteUserDialogProps = {
  user?: User
  trigger: React.ReactNode
  onDelete?: (string) => void
}
