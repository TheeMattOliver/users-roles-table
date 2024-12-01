import type {Meta} from '@storybook/react'
import {Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption} from './Table'

import {Avatar, AvatarImage, AvatarFallback} from '../Avatar'
import {
  TableProps,
  TableHeaderProps,
  TableBodyProps,
  TableFooterProps,
  TableRowProps,
  TableHeadProps,
  TableCellProps,
  TableCaptionProps
} from './types'

import classNames from './Table.module.css'

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically' generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Table>

export default meta

export function playground(args: TableProps) {
  return (
    <div style={{minWidth: '800px'}}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Joined</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <span className={classNames.TableCellInner}>
                <Avatar size={'xs'}>
                  <AvatarImage src={'https://i.pravatar.cc/400?img=51'} alt="Avatar Image" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                Mark Tipton
              </span>
            </TableCell>
            <TableCell>Design</TableCell>
            <TableCell>August 27, 2024</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <span className={classNames.TableCellInner}>
                <Avatar size={'xs'}>
                  <AvatarImage src={'https://i.pravatar.cc/400?img=15'} alt="Avatar Image" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                Lareina Cline
              </span>
            </TableCell>
            <TableCell>Engineering</TableCell>
            <TableCell>August 22, 2024</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <span className={classNames.TableCellInner}>
                <Avatar size={'xs'}>
                  <AvatarImage src={'https://i.pravatar.cc/400?img=34'} alt="Avatar Image" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                Terry Graf
              </span>
            </TableCell>
            <TableCell>Engineering</TableCell>
            <TableCell>July 29, 2024</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
playground.argTypes = {}
playground.args = {}
