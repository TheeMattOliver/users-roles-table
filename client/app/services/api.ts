import type {Role} from '../types/roles'
import type {User} from '../types/users'

const DEFAULT_PAGE_SIZE = 10

export interface UpdateRoleInput {
  id: string
  name: string
}

// Logic for fetching, updating, deleting
export type PaginatedResponse<T> = {
  data: T[]
  total: number
  pages?: number
  next?: string | null
  prev?: string | null
}

// Fetch paginated users
interface FetchPaginatedUsersParams {
  page: number
}

export const fetchPaginatedUsers = async ({page}: FetchPaginatedUsersParams): Promise<PaginatedResponse<User>> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users?page=${page}`)
    if (!response.ok) {
      throw new Error(`Failed to fetch paginated users: ${response.statusText}`)
    }

    const result = await response.json()

    return {
      data: result.data,
      total: result.pages * DEFAULT_PAGE_SIZE,
      pages: result.pages,
      next: result.next,
      prev: result.prev
    }
  } catch (error) {
    console.error('Error fetching paginated users:', error)
    return {data: [], total: 0, pages: 0, next: null, prev: null}
  }
}

// Fetch all users (non-paginated)
export const fetchUsers = async (): Promise<{data: User[]; total: number}> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)
    if (!res.ok) {
      throw new Error(`Failed to fetch users: ${res.statusText}`)
    }
    return res.json()
  } catch (error) {
    console.error('Error fetching users:', error)
    return {data: [], total: 0} // Safe fallback
  }
}

// Fetch all roles (non-paginated)
export const fetchRoles = async (): Promise<PaginatedResponse<Role>> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/roles`)
    if (!res.ok) {
      throw new Error(`Failed to fetch roles: ${res.statusText}`)
    }
    return res.json()
  } catch (error) {
    console.error('Error fetching roles:', error)
    return {data: [], total: 0, pages: 0, next: null, prev: null}
  }
}

// Fetch paginated roles
interface FetchPaginatedRolesParams {
  page: number
}

export const fetchPaginatedRoles = async ({page}: FetchPaginatedRolesParams): Promise<PaginatedResponse<Role>> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/roles?page=${page}`)
    if (!response.ok) {
      throw new Error(`Failed to fetch paginated roles: ${response.statusText}`)
    }

    const result = await response.json()

    return {
      data: result.data,
      total: result.pages * DEFAULT_PAGE_SIZE,
      pages: result.pages,
      next: result.next,
      prev: result.prev
    }
  } catch (error) {
    console.error('Error fetching paginated roles:', error)
    return {data: [], total: 0, pages: 0, next: null, prev: null}
  }
}

// Delete a user
export const deleteUser = async (id: string): Promise<void> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
      method: 'DELETE'
    })
    if (!res.ok) {
      throw new Error(`Failed to delete user: ${res.statusText}`)
    }
  } catch (error) {
    console.error(`Error deleting user with ID ${id}:`, error)
    throw error
  }
}

// Edit a role
export async function updateRole({id, name}: {id: string; name: string}): Promise<Role> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/roles/${id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name})
  })

  if (!response.ok) {
    throw new Error('Failed to update role')
  }

  return await response.json()
}
