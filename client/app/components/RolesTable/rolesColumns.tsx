'use client'
import React from 'react'
import {ColumnDef} from '@tanstack/react-table'
import type {Role} from '@/app/types/roles'

export const rolesColumns: ColumnDef<Role>[] = [
  {
    accessorKey: 'name',
    header: 'Role Name',
    cell: info => <span>{info.getValue<string>()}</span>
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: info => <span>{info.getValue<string>()}</span>
  },
  {
    accessorKey: 'createdAt',
    header: 'Date Created',
    cell: info => <span>{new Date(info.getValue<string>()).toLocaleDateString()}</span>
  },
  {
    id: 'actions'
  }
]
