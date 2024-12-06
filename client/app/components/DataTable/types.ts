import {ColumnDef} from '@tanstack/react-table'

export interface DataTableProps<T> {
  /** The table data, including items and total count for pagination. */
  data:
    | T[] // Non-paginated data
    | {
        data: T[] // Rows for the current page
        total?: number // Total rows across all pages
        pages?: number // Optional: Total number of pages
        next?: string | null // Optional: Link to the next page
        prev?: string | null // Optional: Link to the previous page
      }
  /** Column definitions for react-table. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<T, any>[]
  /** Determines which column to filter by, avoids hardcoding specific column keys for tables that require filtering. */
  filterableColumnKey?: string
  /** Callback for handling page changes (e.g., fetching new data for manual pagination). */
  onPageChange?: (page: number, pageSize?: number) => void
  /** Page index of a given set of paginated elements */
  pageIndex?: number
  /** Number of items in a page */
  pageSize?: number
}
