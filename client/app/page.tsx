import {UsersTable, RolesTable} from '@/app/components'
import {Tabs, TabsList, TabsTrigger, TabsContent} from '@/app/components/Tabs'

import tabsClassNames from '@/app/components/Tabs/Tabs.module.css'

export default function Page() {
  return (
    <div
      style={{
        maxWidth: '850px',
        margin: '0 auto'
      }}
    >
      <Tabs defaultValue="users">
        <TabsList aria-label="Manage your account">
          <TabsTrigger value="users">
            <span className={tabsClassNames.TabsTriggerInner}>Users</span>
          </TabsTrigger>
          <TabsTrigger value="roles">
            <span className={tabsClassNames.TabsTriggerInner}>Roles</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="users">
          <UsersTable />
        </TabsContent>
        <TabsContent value="roles">
          <RolesTable />
        </TabsContent>
      </Tabs>
    </div>
  )
}
