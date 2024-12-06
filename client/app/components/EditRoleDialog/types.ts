import type {Role} from '@/app/types/roles'

export interface EditRoleDialogProps {
  role: Role
  trigger?: React.ReactNode
  onSave?: (role: Role) => void
  open?: boolean
  onOpenChange?: (open: boolean) => void
}
