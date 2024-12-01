import * as AvatarPrimitive from '@radix-ui/react-avatar'
import type {Size} from '@/app/types/shared'

export type AvatarType = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
export type AvatarImageProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
export type AvatarFallbackProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>

export type AvatarProps = AvatarType & Size
