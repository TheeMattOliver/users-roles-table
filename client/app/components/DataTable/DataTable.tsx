'use client'

import * as React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  ColumnFiltersState,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender
} from '@tanstack/react-table'
import {Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableFooter} from '../Table'
import classNames from './DataTable.module.css'
import type {DataTableProps} from './types'
import Button from '../Button'
import {PlusIcon} from '@radix-ui/react-icons'

export default function DataTable<T>({data, columns, onRowAction, filterableColumnKey}: DataTableProps<T>) {
  const [filterText, setFilterText] = React.useState('')
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [pageIndex, setPageIndex] = React.useState(0)
  const [pageSize] = React.useState(10)

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      pagination: {
        pageIndex,
        pageSize
      }
    },
    manualPagination: true,
    pageCount: Math.ceil((data?.total || 0) / pageSize),
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: updater => {
      const newState = typeof updater === 'function' ? updater({pageIndex, pageSize}) : updater
      setPageIndex(newState.pageIndex)
    }
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
          {/** @TODO, was not able to build a proper input */}
          <input
            type="text"
            placeholder="Search users..."
            value={(table.getColumn('first')?.getFilterValue() as string) ?? ''}
            onChange={handleFilterChange}
            className={classNames.Input}
          />
          {/** @TODO not wired up */}
          <Button color={'purple'}>
            <PlusIcon />
            Add user
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
                    ...cell.getContext(),
                    onRowAction
                  })}
                </TableCell>
              ))}
            </TableRow>
          ))}
          <TableRow className={classNames.PaginationControlsWrapper} />
        </TableBody>
      </Table>
      <div className={classNames.PaginationControls}>
        <Button size={'1'} onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          Previous
        </Button>
        <Button size={'1'} onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Next
        </Button>
      </div>
    </div>
  )
}
