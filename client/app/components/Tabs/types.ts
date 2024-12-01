import * as TabsPrimitive from '@radix-ui/react-tabs'
import type {TabsProps as TabsPrimitiveProps} from '@radix-ui/react-tabs'
import {ComponentPropsWithoutRef, ElementRef} from 'react'

export type TabsProps = TabsPrimitiveProps

export type TabsListProps = ComponentPropsWithoutRef<typeof TabsPrimitive.List>

export type TabsTriggerProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>

export type TabsContentProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Content>

// Utility Type for Ref
export type TabsListRef = ElementRef<typeof TabsPrimitive.List>
export type TabsTriggerRef = ElementRef<typeof TabsPrimitive.Trigger>
export type TabsContentRef = ElementRef<typeof TabsPrimitive.Content>
