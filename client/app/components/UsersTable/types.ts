import type {User, UserResponse} from '@/app/types/users'

export interface UsersStaticTableProps {
  initialData?: UserResponse
}
export interface UserWithAction extends User {
  action?: 'delete' | 'edit'
}
