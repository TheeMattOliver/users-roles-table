import * as React from 'react'
import type {Meta} from '@storybook/react'

import {HamburgerMenuIcon, DotFilledIcon, CheckIcon, ChevronRightIcon, DotsHorizontalIcon} from '@radix-ui/react-icons'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from './DropdownMenu'
import {IconButton} from '../Button'
// @TODO: types
// import type {DropdownProps} from './types'

const meta = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically' generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof DropdownMenu>

export default meta

// @TODO: types
export function playground(args: any) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <IconButton ghost rounded aria-label="Menu actions" icon={DotsHorizontalIcon} />
      </DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={5} align={args.align}>
        <DropdownMenuItem>Edit user</DropdownMenuItem>
        <DropdownMenuItem>Delete user</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
playground.argTypes = {}
playground.args = {
  align: 'end'
}
