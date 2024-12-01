'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import clsx from 'clsx'
import {Cross2Icon} from '@radix-ui/react-icons'

import type {
  DialogOverlayProps,
  DialogContentProps,
  DialogHeaderProps,
  DialogFooterProps,
  DialogTitleProps,
  DialogDescriptionProps
} from './types'

import classNames from './Dialog.module.css'
import VisuallyHidden from '../VisuallyHidden'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Overlay>, DialogOverlayProps>(
  ({className, ...props}, ref) => (
    <DialogPrimitive.Overlay ref={ref} className={clsx(classNames.Overlay, className)} {...props} />
  )
)
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, DialogContentProps>(
  ({className, children, showCloseButton, ...props}, ref) => (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content ref={ref} className={clsx(classNames.Content, className)} {...props}>
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close className={clsx(classNames.CloseButton)}>
            <Cross2Icon />
            <VisuallyHidden>Close</VisuallyHidden>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
)
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({className, ...props}: DialogHeaderProps) => (
  <div className={clsx(classNames.Header, className)} {...props} />
)
DialogHeader.displayName = 'DialogHeader'

const DialogFooter = ({className, ...props}: DialogFooterProps) => (
  <div className={clsx(classNames.Footer, className)} {...props} />
)
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Title>, DialogTitleProps>(
  ({className, ...props}, ref) => (
    <DialogPrimitive.Title ref={ref} className={clsx(classNames.Title, className)} {...props} />
  )
)
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  DialogDescriptionProps
>(({className, ...props}, ref) => (
  <DialogPrimitive.Description ref={ref} className={clsx(classNames.Description, className)} {...props} />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription
}
