// infra
export {default as VisuallyHidden} from './VisuallyHidden'
export {default as Provider} from './Provider'
export {ErrorFallback} from './ErrorBoundary'

// leaf components
export {default as Label} from './Label'
export type {LabelProps} from './Label'

export {default as Button, IconButton} from './Button'
export type {ButtonProps} from './Button'

export {Tabs, TabsList, TabsTrigger, TabsContent} from './Tabs'
export type {TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps} from './Tabs'

// composite components
export {Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption} from './Table'
export type {
  TableProps,
  TableHeaderProps,
  TableBodyProps,
  TableFooterProps,
  TableRowProps,
  TableHeadProps,
  TableCellProps,
  TableCaptionProps
} from './Table'
