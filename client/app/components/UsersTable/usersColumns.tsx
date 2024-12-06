'use client'
import React from 'react'
import {ColumnDef} from '@tanstack/react-table'
import {User} from '@/app/types/users'
import {Avatar, AvatarImage, AvatarFallback} from '../Avatar'

export const usersColumns: ColumnDef<User>[] = [
  {
    accessorKey: 'first',
    header: 'User',
    cell: ({row}) => {
      const {photo, first, last} = row.original
      const imgAlt = `${first} ${last}`
      return (
        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          <Avatar size="xs">
            <AvatarImage src={photo} alt={imgAlt} />
            <AvatarFallback>
              {first[0]}
              {last[0]}
            </AvatarFallback>
          </Avatar>
          <span>{`${first} ${last}`}</span>
        </div>
      )
    },
    enableColumnFilter: true
  },
  {
    accessorKey: 'roleName',
    header: 'Role',
    cell: ({row}) => row.original.roleName || 'Unknown'
  },
  {
    accessorKey: 'createdAt',
    header: 'Joined',
    cell: ({row}) => new Date(row.original.createdAt).toLocaleDateString()
  },
  {
    id: 'actions'
  }
]
