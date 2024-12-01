import * as DialogPrimitive from '@radix-ui/react-dialog'
import type {DialogContentProps as RadixDialogPrimitiveContentProps} from '@radix-ui/react-dialog'

export type DialogProps = React.ComponentProps<typeof DialogPrimitive.Root>
export type DialogOverlayProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>

export type DialogContentType = RadixDialogPrimitiveContentProps & {showCloseButton?: boolean}
export type DialogContentProps = DialogContentType & React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>

export type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement>
export type DialogFooterProps = React.HTMLAttributes<HTMLDivElement>
export type DialogTitleProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
export type DialogDescriptionProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
