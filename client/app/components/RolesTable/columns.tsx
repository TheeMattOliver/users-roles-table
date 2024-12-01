'use client'

import {ColumnDef} from '@tanstack/react-table'
import type {Role} from './types'
import Button from '../Button'

export const rolesColumns: ColumnDef<Role>[] = [
  {
    accessorKey: 'role',
    header: 'Role',
    cell: info => info.getValue()
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: info => info.getValue()
  },
  {
    accessorKey: 'roleId',
    header: 'Id',
    cell: info => (
      <span>
        {/* @ts-expect-error this is placeholder, didn't get to work on roles much */}
        {info.getValue()}
      </span>
    )
  },
  {
    accessorKey: 'createdAt',
    header: 'Date created',
    /* @ts-expect-error this is placeholder, didn't get to work on roles much */
    cell: info => new Date(info.getValue()).toLocaleDateString()
  },
  {
    id: 'actions',
    cell: ({row}) => <Button onClick={() => console.log('Edit', row.original.id)}>Edit</Button>
  }
]
