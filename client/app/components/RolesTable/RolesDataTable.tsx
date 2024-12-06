'use client'
import React from 'react'
import {useQuery} from '@tanstack/react-query'
import {ErrorBoundary} from 'react-error-boundary'
import DataTable from '@/app/components/DataTable'
import EditRoleDialog from '@/app/components/EditRoleDialog'
import {rolesColumns} from './rolesColumns'
import {getQueryClient} from '@/app/services/get-query-client'
import {fetchRoles, updateRole} from '@/app/services/api'

import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem} from '@/app/components/DropdownMenu'
import {IconButton} from '@/app/components/Button'
import {ErrorFallback} from '@/app/components/ErrorBoundary'
import {DotsHorizontalIcon} from '@radix-ui/react-icons'

import type {Role} from '@/app/types/roles'
import type {RolesDataTableProps} from './types'

export default function RolesDataTable({initialData}: RolesDataTableProps) {
  const queryClient = getQueryClient()

  // Fetch roles data
  const {data: rolesData} = useQuery({
    queryKey: ['roles'],
    queryFn: fetchRoles,
    staleTime: 1000 * 60 * 5,
    initialData: () => queryClient.getQueryData<{data: Role[]; total?: number}>(['roles']) || initialData
  })

  const handleEditRole = async (updatedRole: Role) => {
    try {
      // Optimistic update: Modify the query cache directly
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      queryClient.setQueryData(['roles'], (previousRoles: any) => {
        if (!previousRoles) return undefined
        return {
          ...previousRoles,
          data: previousRoles.data.map((role: Role) => (role.id === updatedRole.id ? {...role, ...updatedRole} : role))
        }
      })

      const {id, name} = updatedRole
      await updateRole({id, name})

      // Invalidate and refetch to ensure cache consistency
      queryClient.invalidateQueries({queryKey: ['roles']})
      queryClient.invalidateQueries({queryKey: ['users']})

      // console.log('Role updated successfully.')
    } catch (error) {
      console.error('Failed to update role:', error)
    }
  }

  if (!rolesData) {
    return <div>No roles available to display.</div>
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <DataTable
        data={rolesData}
        columns={rolesColumns.map(column => {
          if (column.id === 'actions') {
            return {
              ...column,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              cell: ({row}: any) => {
                const role = row.original
                const dropdownTriggerRef = React.useRef<HTMLButtonElement>(null)
                const [isDialogOpen, setIsDialogOpen] = React.useState(false)

                const handleOpenDialog = () => {
                  setIsDialogOpen(true)
                }

                const handleCloseDialog = () => {
                  setIsDialogOpen(false)

                  // Ensure DropdownMenuTrigger regains focus
                  setTimeout(() => {
                    dropdownTriggerRef.current?.focus()
                  }, 0)
                }

                return (
                  <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <IconButton
                          ref={dropdownTriggerRef}
                          ghost
                          rounded
                          aria-label="Actions"
                          icon={DotsHorizontalIcon}
                        />
                      </DropdownMenuTrigger>

                      <DropdownMenuContent
                        sideOffset={5}
                        align="end"
                        onCloseAutoFocus={e => {
                          // @TODO: wrestled with focus management quite a bit
                          e.preventDefault()
                          setTimeout(() => {
                            dropdownTriggerRef.current?.focus()
                            // console.log('Manually refocused the dropdown trigger:', dropdownTriggerRef.current)
                          }, 0)
                        }}
                      >
                        <DropdownMenuItem asChild onSelect={() => setTimeout(() => handleOpenDialog())}>
                          <span>Edit Role</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    {isDialogOpen && (
                      <EditRoleDialog
                        role={role}
                        open={isDialogOpen}
                        onOpenChange={newState => {
                          if (!newState) {
                            handleCloseDialog()
                          } else {
                            setIsDialogOpen(true)
                          }
                        }}
                        onSave={(updatedRole: Role) => {
                          handleEditRole(updatedRole)
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
        filterableColumnKey="name"
      />
    </ErrorBoundary>
  )
}
