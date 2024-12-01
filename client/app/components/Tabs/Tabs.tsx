'use client'
import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import type {
  TabsListProps,
  TabsListRef,
  TabsTriggerProps,
  TabsTriggerRef,
  TabsContentProps,
  TabsContentRef
} from './types'

import classNames from './Tabs.module.css'
import clsx from 'clsx'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<TabsListRef, TabsListProps>(({className, ...props}, ref) => (
  <TabsPrimitive.List ref={ref} className={clsx(classNames.TabsList, className)} {...props} />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<TabsTriggerRef, TabsTriggerProps>(({className, ...props}, ref) => (
  <TabsPrimitive.Trigger ref={ref} className={clsx(classNames.TabsTrigger, className)} {...props} />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<TabsContentRef, TabsContentProps>(({className, ...props}, ref) => (
  <TabsPrimitive.Content ref={ref} className={clsx(classNames.TabsContent, className)} {...props} />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export {Tabs, TabsList, TabsTrigger, TabsContent}
