import * as React from 'react'
import {Slot} from '@radix-ui/react-slot'
import classNames from './Button.module.css'
import clsx from 'clsx'

import type {ButtonProps} from './types'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, color = 'gray', ghost = false, loading = false, size = 2, asChild = false, ...props}, ref) => {
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
          className
        )}
        data-disabled={isDisabled ? 'true' : undefined}
        aria-disabled={isDisabled}
        aria-live={loading ? 'assertive' : undefined}
        aria-label={loading ? 'Loading, please wait.' : undefined}
        type={props.type || 'button'}
        onClick={isDisabled ? undefined : props.onClick}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export default Button
