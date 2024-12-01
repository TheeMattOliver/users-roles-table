export interface Role {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  isDefault: boolean
  description: string
}

export interface RoleResponse {
  data: Role[]
}

export interface RolesStaticTableProps {
  initialData?: RoleResponse
}
