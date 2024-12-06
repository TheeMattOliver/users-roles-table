import {dehydrate, HydrationBoundary} from '@tanstack/react-query'
import {getQueryClient} from '@/app/services/get-query-client'
import {fetchRoles, fetchPaginatedUsers} from '@/app/services/api'
import {Tabs, TabsList, TabsTrigger, TabsContent} from '@/app/components/Tabs'

import RolesDataTable from '@/app/components/RolesTable'
import UsersDataTable from './components/UsersTable/'
import {queryKeys} from '@/app/services/query-keys'
import type {PaginatedUserResponse} from '@/app/types/users'
import type {RolesResponse} from '@/app/types/roles'

export default async function Page() {
  const queryClient = getQueryClient()

  let rolesData: RolesResponse
  let enrichedUsersData: PaginatedUserResponse

  try {
    // Fetch roles and populate the query cache
    rolesData = await queryClient.fetchQuery<RolesResponse>({
      queryKey: queryKeys.roles,
      queryFn: fetchRoles
    })

    queryClient.setQueryData(['roles'], rolesData)
  } catch (error) {
    console.error(error)
  }

  try {
    // Fetch users and enrich with role names

    const usersData = await fetchPaginatedUsers({page: 1})
    enrichedUsersData = {
      data: usersData.data.map(user => ({
        ...user,
        roleName: rolesData.data.find(role => role.id === user.roleId)?.name || 'Unknown'
      })),
      total: usersData.total,
      pages: usersData.pages,
      next: usersData.next,
      prev: usersData.prev
    }

    // Set the enriched users data into the query cache
    queryClient.setQueryData(['users', 0], enrichedUsersData)
  } catch (error) {
    console.error('Error fetching users on the server:', error)
  }
  const rolesError = rolesData.data.length === 0
  const usersError = enrichedUsersData.data.length === 0

  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <div style={{maxWidth: '850px', margin: '0 auto'}}>
        <Tabs defaultValue="users">
          <TabsList aria-label="Manage your account">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="roles">Roles</TabsTrigger>
          </TabsList>
          <TabsContent value="users">
            {usersError ? (
              <div>Error loading users. Please try again later.</div>
            ) : (
              <UsersDataTable initialData={enrichedUsersData} />
            )}
          </TabsContent>
          <TabsContent value="roles">
            {rolesError ? (
              <div>Error loading roles. Please try again later.</div>
            ) : (
              <RolesDataTable initialData={rolesData} />
            )}
          </TabsContent>
        </Tabs>
      </div>
    </HydrationBoundary>
  )
}
