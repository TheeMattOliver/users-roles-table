import * as React from 'react'
import {Slot} from '@radix-ui/react-slot'
import clsx from 'clsx'
import classNames from './Button.module.css'

import type {IconButtonProps} from './types'

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      icon: Icon,
      color = 'gray',
      ghost = false,
      rounded = false,
      loading = false,
      size = 2,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : 'button'
    const isDisabled = loading || props.disabled

    return (
      <Component
        className={clsx(
          classNames.ButtonBase,
          classNames[`color-${color}`],
          classNames[`size-${size}`],
          ghost && classNames.ghost,
          loading && classNames.loading,
          classNames.IconButton,
          rounded && classNames.rounded,
          className
        )}
        data-disabled={isDisabled ? 'true' : undefined}
        aria-disabled={isDisabled}
        aria-live={loading ? 'assertive' : undefined}
        aria-label={props['aria-label']}
        type={props.type || 'button'}
        onClick={isDisabled ? undefined : props.onClick}
        ref={ref}
        {...props}
      >
        <Icon className={clsx(classNames.icon)} />
      </Component>
    )
  }
)

IconButton.displayName = 'IconButton'
