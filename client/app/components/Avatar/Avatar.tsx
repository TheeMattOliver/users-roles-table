'use client'

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import clsx from 'clsx'
import classNames from './Avatar.module.css'
import {AvatarProps, AvatarImageProps, AvatarFallbackProps} from './types'

const sizeClasses = {
  xs: classNames.xs,
  sm: classNames.sm,
  md: classNames.md,
  lg: classNames.lg,
  xl: classNames.xl
}

const Avatar = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(
  ({className, size, ...props}, ref) => {
    const sizeClass = sizeClasses[size]
    return <AvatarPrimitive.Root ref={ref} className={clsx(classNames.Avatar, sizeClass, className)} {...props} />
  }
)
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Image>, AvatarImageProps>(
  ({className, ...props}, ref) => (
    <AvatarPrimitive.Image ref={ref} className={clsx(classNames.AvatarImage, className)} {...props} />
  )
)
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Fallback>, AvatarFallbackProps>(
  ({className, ...props}, ref) => (
    <AvatarPrimitive.Fallback ref={ref} className={clsx(classNames.AvatarFallback, className)} {...props} />
  )
)
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export {Avatar, AvatarImage, AvatarFallback}
