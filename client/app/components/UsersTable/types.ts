export interface User {
  id: string
  createdAt: string
  updatedAt: string
  first: string
  last: string
  roleId: string
  photo: string
  roleName?: string
}

export interface UserResponse {
  data: User[]
}

export interface UsersTableProps {
  initialData?: UserResponse
}
export interface UserWithAction extends User {
  action?: 'delete' | 'edit'
}
