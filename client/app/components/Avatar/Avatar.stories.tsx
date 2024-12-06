import type {Meta} from '@storybook/react'
import {Avatar, AvatarImage, AvatarFallback} from './Avatar'
import type {AvatarProps} from './types'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically' generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Avatar>

export default meta

export function playground(args: any) {
  return (
    <Avatar {...args}>
      <AvatarImage src={args.src} alt="Avatar Image" />
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  )
}
playground.argTypes = {
  size: {
    control: 'select',
    options: ['xs', 'sm', 'md', 'lg', 'xl']
  }
}
playground.args = {
  size: 'md',
  src: 'https://i.pravatar.cc/400?img=51'
}
