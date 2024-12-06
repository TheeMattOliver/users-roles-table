'use client'

import * as React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  flexRender
} from '@tanstack/react-table'
import {Table, TableHeader, TableBody, TableRow, TableHead, TableCell} from '../Table'
import classNames from './DataTable.module.css'
import type {DataTableProps} from './types'
import Button from '../Button'
import {PlusIcon} from '@radix-ui/react-icons'

export default function DataTable<T>({
  data,
  columns,
  filterableColumnKey,
  onPageChange,
  pageIndex,
  pageSize
}: DataTableProps<T>) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [filterText, setFilterText] = React.useState('')
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])

  // Normalize data shape
  const rows = Array.isArray(data) ? data : data.data
  const total = Array.isArray(data) ? data.length : data.total
  const pages = Array.isArray(data) ? 1 : data.pages
  const next = Array.isArray(data) ? null : data.next
  const prev = Array.isArray(data) ? null : data.prev

  const totalPages = Math.ceil(total / pageSize)

  const isPaginated = totalPages > 1

  const table = useReactTable({
    data: rows,
    columns,
    state: {
      columnFilters,
      pagination: {
        pageIndex: 0,
        pageSize: 10
      }
    },
    manualPagination: !!next || !!prev,
    pageCount: pages || Math.ceil(total / 10),
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  })

  const handleFilterChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilterText(e.target.value)
      if (filterableColumnKey) {
        table.getColumn(filterableColumnKey)?.setFilterValue(e.target.value)
      }
    },
    [filterableColumnKey, table]
  )

  return (
    <div className={classNames.Wrapper}>
      {filterableColumnKey && (
        <div className={classNames.InputWrapper}>
          <input
            type="text"
            placeholder={`Search by ${filterableColumnKey}...`}
            value={(table.getColumn(filterableColumnKey)?.getFilterValue() as string) ?? ''}
            onChange={handleFilterChange}
            className={classNames.Input}
          />
          <Button color="purple">
            <PlusIcon />
            Add Item
          </Button>
        </div>
      )}
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableHead key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map(row => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map(cell => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, {
                    ...cell.getContext()
                  })}
                </TableCell>
              ))}
            </TableRow>
          ))}
          {table.getRowModel().rows.length === 0 && (
            <TableRow>
              <TableCell colSpan={columns.length}>No data available</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {isPaginated && (
        <div className={`${classNames.PaginationWrapper}`}>
          <div className={`${classNames.PaginationControls}`}>
            <span>
              Page {pageIndex + 1} of {totalPages || 1}
            </span>
            <div className={classNames.PaginationButtonGroup}>
              <Button size="1" onClick={() => onPageChange(pageIndex - 1)} disabled={pageIndex <= 0}>
                Previous
              </Button>
              <Button size="1" onClick={() => onPageChange(pageIndex + 1)} disabled={pageIndex >= totalPages - 1}>
                Next
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
