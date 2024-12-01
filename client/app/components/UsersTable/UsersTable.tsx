'use client'
import React from 'react'
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query'
import {fetchUsers, fetchRoles, deleteUser} from '../../services/api'
import DataTable from '../DataTable'
import {userColumns} from './columns'
import {UserWithAction} from './types'
import {ErrorBoundary} from 'react-error-boundary'
import {ErrorFallback} from '../ErrorBoundary'
import {UsersTableSkeleton} from '../TableSkeleton'

export default function UsersTable() {
  const [pageIndex, setPageIndex] = React.useState(0)
  const pageSize = 10
  const queryClient = useQueryClient()
  // fetch
  const {
    data: usersData,
    isLoading: usersLoading,
    isFetching: usersFetching
  } = useQuery({
    queryKey: ['users', pageIndex],
    queryFn: () => fetchUsers(pageIndex, pageSize)
  })

  const {data: rolesData} = useQuery({
    queryKey: ['roles'],
    queryFn: fetchRoles,
    staleTime: 60 * 1000
  })

  // mutate
  // @TODO: got pretty tripped up here 😅
  const deleteMutation = useMutation({
    mutationFn: id => deleteUser(id),
    // Optimistically update the cache before the backend confirms deletion
    onMutate: async (id: string) => {
      // Cancel ongoing queries for 'users'
      await queryClient.cancelQueries({queryKey: ['users']})

      // Snapshot the previous data
      const previousUsers = queryClient.getQueryData<{data: UserWithAction[]}>(['users'])

      // Optimistically update
      queryClient.setQueryData<{data: UserWithAction[]}>(['users'], old => ({
        data: old?.data.filter(user => user.id !== id) || []
      }))

      // Return context with the previous users for potential rollback
      return {previousUsers}
    },
    // In theory, if the mutation fails, roll back to the previous state
    onError: (err, id, context) => {
      queryClient.setQueryData(['users'], context?.previousUsers)
    },
    // Shouldn't this invalidate queries to refetch data after successful mutation??
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['users']})
      const updatedUsers = queryClient.getQueryData(['users'])
      console.log('Updated users after deletion:', updatedUsers)
    }
  })

  // handlers
  const handleDelete = (userId: string) => {
    deleteMutation.mutate(userId)
  }

  // compute roles
  const roleMap = React.useMemo(() => {
    const map: Record<string, string> = {}
    if (rolesData?.data) {
      for (const role of rolesData.data) {
        map[role.id] = role.name
      }
    }
    return map
  }, [rolesData])

  const usersWithRoleNames = usersData?.data.map(user => ({
    ...user,
    roleName: roleMap?.[user.roleId] || 'Unknown Role',
    /** @TODO not working, we should be able to use the computed full name for filtering but we get hydration errors*/
    fullName: `${user.first} ${user.last}`
  }))

  if (usersLoading || usersFetching) {
    return <UsersTableSkeleton />
  }

  return (
    <div>
      {/* @TODO: this was just to check that mutation worked, it did
      <button
        onClick={() => handleDelete('0d27a858-4136-4391-b29c-2342dec39fff')}
        disabled={deleteMutation.status === 'pending'}
      >
        {deleteMutation.status === 'pending' ? 'Deleting...' : 'Delete User (TEST)'}
      </button> */}

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <DataTable data={usersWithRoleNames ?? []} columns={userColumns(handleDelete)} filterableColumnKey="first" />
      </ErrorBoundary>
    </div>
  )
}
