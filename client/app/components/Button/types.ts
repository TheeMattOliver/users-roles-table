export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'gray' | 'purple' | 'red'
  ghost?: boolean
  loading?: boolean
  size?: '1' | '2' | '3' | '4'
  asChild?: boolean
}
export interface IconButtonProps extends Omit<ButtonProps, 'children'> {
  icon: React.ComponentType<React.PropsWithChildren<{className?: string}>>
  /** Always provide a meaningful aria label to ensure proper accessibility for screen readers, as IconButton doesn't have any visible text. */
  'aria-label': string
  /* Whether the icon button should be rounded or not */
  rounded?: boolean
}
