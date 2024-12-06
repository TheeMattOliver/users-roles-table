'use client'

import React from 'react'
import {useQuery} from '@tanstack/react-query'
import {ErrorBoundary} from 'react-error-boundary'
import DataTable from '@/app/components/DataTable'
import {usersColumns} from './usersColumns'
import type {User} from '@/app/types/users'
import {deleteUser, fetchPaginatedUsers, fetchRoles} from '@/app/services/api'
import {getQueryClient} from '@/app/services/get-query-client'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '../DropdownMenu'
import {DotsHorizontalIcon} from '@radix-ui/react-icons'
import {IconButton} from '@/app/components/Button'
import {UsersTableSkeleton} from '@/app/components/TableSkeleton'
import dropdownMenuClassNames from '@/app/components/DropdownMenu/DropdownMenu.module.css'
import DeleteUserDialog from '@/app/components/DeleteUserDialog'
import {ErrorFallback} from '@/app/components/ErrorBoundary'

interface UsersDataTableProps {
  initialData: {
    data: User[]
    total?: number
    pages?: number
  }
}

export default function UsersDataTable({initialData}: UsersDataTableProps) {
  const {data: rolesData, isError: rolesError} = useQuery({
    queryKey: ['roles'],
    queryFn: fetchRoles,
    staleTime: 1000 * 60 * 5,
    retry: 2,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000)
  })

  const [pageIndex, setPageIndex] = React.useState(0)

  const {
    data: usersData,
    isLoading: usersLoading = true,
    isError: usersError,
    error: usersFetchError
  } = useQuery({
    queryKey: ['users', pageIndex],
    queryFn: async () => {
      const users = await fetchPaginatedUsers({page: pageIndex + 1})
      // Enrich user data with roles
      return {
        ...users,
        data: users.data.map(user => ({
          ...user,
          roleName: rolesData?.data.find(role => role.id === user.roleId)?.name || 'Unknown'
        }))
      }
    },
    enabled: !!rolesData && !rolesError
  })

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [total, setTotal] = React.useState(initialData.total || 0)
  const pageSize = 10
  const queryClient = getQueryClient()

  const handlePageChange = async (newPageIndex: number) => {
    setPageIndex(newPageIndex)
    console.log(`Fetching page ${newPageIndex + 1}`)

    try {
      // Fetch paginated users
      const paginatedUsers = await fetchPaginatedUsers({page: newPageIndex + 1})

      // Fetch roles to enrich user data
      const roles = await fetchRoles()

      // Enrich users with roles
      const enrichedData = paginatedUsers.data.map(user => ({
        ...user,
        roleName: roles.data.find(role => role.id === user.roleId)?.name || 'Unknown'
      }))

      setTotal(paginatedUsers.total)
      // Populate cache for the current page
      queryClient.setQueryData(['users', newPageIndex], {
        ...paginatedUsers,
        data: enrichedData
      })

      console.log('Query client instance:', queryClient)
      console.log('Cached keys:', queryClient.getQueryCache().getAll())
    } catch (error) {
      console.error('Error fetching users or roles:', error)
    }
  }

  const handleDeleteUser = async (userId: string) => {
    try {
      // Optimistically update, modify the query cache directly
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      queryClient.setQueryData(['users', pageIndex], (previousUsers: any) => {
        if (!previousUsers) return undefined
        return {
          ...previousUsers,
          data: previousUsers.data.filter((user: User) => user.id !== userId),
          total: previousUsers.total - 1
        }
      })

      await deleteUser(userId)

      // Invalidate and refetch
      queryClient.invalidateQueries({queryKey: ['users', pageIndex]})

      // Invalidate and refetch roles
      queryClient.invalidateQueries({queryKey: ['roles']})
    } catch (error) {
      // Rollback cache on error
      queryClient.invalidateQueries({queryKey: ['users', pageIndex]})
      alert('Could not delete user. Please try again.')
    }
  }

  if (usersData && usersData.data.length === 0) {
    return <div>No users available to display.</div>
  }

  if (rolesError || usersError) {
    return (
      <ErrorFallback
        error={usersFetchError || new Error('Failed to load roles')}
        resetErrorBoundary={() => window.location.reload()}
      />
    )
  }

  if (usersLoading) {
    return <UsersTableSkeleton />
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <DataTable
        data={usersData}
        columns={usersColumns.map(column => {
          if (column.id === 'actions') {
            return {
              ...column,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              cell: ({row}: any) => {
                const user = row.original
                const dropdownTriggerRef = React.useRef<HTMLButtonElement>(null)
                const [isDialogOpen, setIsDialogOpen] = React.useState(false)

                const handleOpenDialog = () => {
                  setIsDialogOpen(true)
                }

                const handleCloseDialog = () => {
                  setIsDialogOpen(false)
                }
                return (
                  <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <IconButton
                          ref={dropdownTriggerRef}
                          ghost
                          rounded
                          aria-label="Menu actions"
                          icon={DotsHorizontalIcon}
                        />
                      </DropdownMenuTrigger>

                      <DropdownMenuContent sideOffset={5} align={'end'}>
                        <DropdownMenuItem disabled>Edit user</DropdownMenuItem>
                        <DropdownMenuItem asChild onSelect={() => setTimeout(() => handleOpenDialog())}>
                          <span className={dropdownMenuClassNames.DropdownMenuItem}>Delete user</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    {isDialogOpen && (
                      <DeleteUserDialog
                        open={isDialogOpen}
                        onOpenChange={newState => {
                          if (!newState) {
                            handleCloseDialog()
                          } else {
                            console.log('Dialog opened...')
                            setIsDialogOpen(true)
                          }
                        }}
                        user={user}
                        onDelete={userId => {
                          console.log(`Deleting user with ID: ${userId}`)
                          handleDeleteUser(userId)
                          handleCloseDialog()
                        }}
                      />
                    )}
                  </div>
                )
              }
            }
          }
          return column
        })}
        filterableColumnKey="first"
        onPageChange={handlePageChange}
        pageIndex={pageIndex}
        pageSize={pageSize}
      />
    </ErrorBoundary>
  )
}
