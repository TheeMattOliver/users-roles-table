import type {Meta} from '@storybook/react'
import Label from './Label'
import type {LabelProps} from './types'

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically' generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Label>

export default meta

export function playground(args: LabelProps) {
  return <Label {...args}>Semantic label</Label>
}
playground.argTypes = {}
playground.args = {}
