import type {UserWithAction} from '../components/UsersTable/types'

// Logic for fetching, updating, deleting
export type PaginatedResponse<T> = {
  data: T[]
  total: number
}
export const fetchUsers = async (pageIndex: number, pageSize: number): Promise<PaginatedResponse<UserWithAction>> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users?page=${pageIndex}&size=${pageSize}`)
  if (!res.ok) throw new Error('Failed to fetch users')
  return res.json()
}

export const fetchRoles = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/roles`)
  if (!res.ok) throw new Error('Failed to fetch roles')
  return res.json()
}

export const deleteUser = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
    method: 'DELETE'
  })
  if (!res.ok) throw new Error('Failed to delete user')

  const data = await res.json()
  return data
}
