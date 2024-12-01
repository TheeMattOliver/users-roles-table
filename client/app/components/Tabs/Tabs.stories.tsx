import type {Meta} from '@storybook/react'
import {Tabs, TabsList, TabsTrigger, TabsContent} from './Tabs'
import type {TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps} from './types'
import classNames from './Tabs.module.css'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically' generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Tabs>

export default meta

export function playground(args: TabsProps) {
  return (
    <Tabs defaultValue="users" className={classNames.TabsRoot}>
      <TabsList aria-label="Manage your account">
        <TabsTrigger value="users">
          <span className={classNames.TabsTriggerInner}>Users</span>
        </TabsTrigger>
        <TabsTrigger value="roles">
          <span className={classNames.TabsTriggerInner}>Roles</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="users">Users</TabsContent>
      <TabsContent value="roles">Roles</TabsContent>
    </Tabs>
  )
}
playground.argTypes = {}
playground.args = {}
