import type {Meta} from '@storybook/react'

import {UsersTableSkeleton} from './UsersTableSkeleton'

const meta = {
  title: 'Components/Users table skeleton',
  component: UsersTableSkeleton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically' generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof UsersTableSkeleton>

export default meta

export function playground(args: any) {
  return <UsersTableSkeleton {...args} />
}
playground.argTypes = {}

playground.args = {}
