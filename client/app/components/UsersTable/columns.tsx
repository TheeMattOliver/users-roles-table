'use client'

import {ColumnDef} from '@tanstack/react-table'
import {DotsHorizontalIcon} from '@radix-ui/react-icons'
import {UserWithAction} from './types'
import {Avatar, AvatarImage, AvatarFallback} from '../Avatar'
import {IconButton} from '../Button'
import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem} from '../DropdownMenu'
import DeleteUserDialog from '../DeleteUserDialog'

import dropdownMenuClassNames from '../DropdownMenu/DropdownMenu.module.css'

export const userColumns: (handleDelete: (id: string) => void) => ColumnDef<UserWithAction>[] = handleDelete => [
  {
    accessorKey: 'first',
    header: 'User',
    cell: ({row}) => {
      const {photo, first, last} = row.original
      return (
        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          <Avatar size="xs">
            <AvatarImage src={photo} alt={`${first} ${last}`} />
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
    accessorKey: 'role',
    header: 'Role',
    cell: ({row}) => row.original.roleName || 'Unknown'
  },
  {
    accessorKey: 'createdAt',
    header: 'Joined',
    cell: ({row}) => new Date(row.original.createdAt).toLocaleDateString()
  },
  {
    id: 'actions',
    cell: ({row}) => {
      const user = row.original

      return (
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <IconButton ghost rounded aria-label="Menu actions" icon={DotsHorizontalIcon} />
            </DropdownMenuTrigger>

            <DropdownMenuContent sideOffset={5} align={'end'}>
              <DropdownMenuItem>Edit user</DropdownMenuItem>
              <DropdownMenuItem asChild>
                <DeleteUserDialog
                  user={user}
                  // onDelete={userId => {
                  //   console.log(`Deleting user with ID: ${userId}`)
                  //   // Trigger the delete logic (handleDelete from UsersTable)
                  //   onRowAction({...user, action: 'delete'})
                  // }}
                  // @TODO: this pretty much breaks the app
                  onDelete={userId => {
                    console.log(`Deleting user with ID: ${userId}`)
                    handleDelete(userId)
                  }}
                  trigger={<span className={dropdownMenuClassNames.DropdownMenuItem}>Delete user</span>}
                />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    }
  }
]
