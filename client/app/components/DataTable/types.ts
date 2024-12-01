import {ColumnDef} from '@tanstack/react-table'

export interface DataTableProps<T> {
  data: T[]
  columns: ColumnDef<T, any>[]
  /** Determines which column to filter by, avoids hardcoding specific column keys for tables that require filtering. */
  filterableColumnKey?: string
  /** Callback to pass down to the cells for row-specific actions with tables that require row actions. */
  onRowAction?: (row: T) => void
}
