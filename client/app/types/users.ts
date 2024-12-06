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

export interface PaginatedUserResponse {
  data: User[]
  total?: number
  pages?: number
  next?: string | null
  prev?: string | null
}
