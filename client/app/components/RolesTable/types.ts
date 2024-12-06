import type {Role} from '@/app/types/roles'

export interface RolesDataTableProps {
  initialData: {
    data: Role[]
    total?: number
  }
}
