'use client'

import {useQuery} from '@tanstack/react-query'
import {fetchRoles} from '../../services/api'
import DataTable from '../DataTable'
import {rolesColumns} from './columns'
import {ErrorBoundary} from 'react-error-boundary'
import {ErrorFallback} from '../ErrorBoundary'

export default function RolesTable() {
  const {data, isLoading} = useQuery({
    queryKey: ['roles'],
    queryFn: fetchRoles
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <DataTable key={rolesColumns?.length} data={data?.data ?? []} columns={rolesColumns} />
    </ErrorBoundary>
  )
}
