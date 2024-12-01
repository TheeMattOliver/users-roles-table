import * as React from 'react'
import clsx from 'clsx'
import classNames from './Table.module.css'
import {
  TableProps,
  TableHeaderProps,
  TableBodyProps,
  TableFooterProps,
  TableRowProps,
  TableHeadProps,
  TableCellProps,
  TableCaptionProps
} from './types'

const Table = React.forwardRef<HTMLTableElement, TableProps>(({className, ...props}, ref) => (
  <div className={classNames.TableContainer}>
    <table ref={ref} className={clsx(classNames.Table, className)} {...props} />
  </div>
))
Table.displayName = 'Table'

const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(({className, ...props}, ref) => (
  <thead ref={ref} className={clsx(classNames.TableHeaderRow, className)} {...props} />
))
TableHeader.displayName = 'TableHeader'

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(({className, ...props}, ref) => (
  <tbody ref={ref} className={clsx(className)} {...props} />
))
TableBody.displayName = 'TableBody'

const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(({className, ...props}, ref) => (
  <tfoot ref={ref} className={clsx(classNames.TableFooter, className)} {...props} />
))
TableFooter.displayName = 'TableFooter'

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(({className, ...props}, ref) => (
  <tr ref={ref} className={clsx(classNames.TableRow, className)} {...props} />
))
TableRow.displayName = 'TableRow'

const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(({className, ...props}, ref) => (
  <th ref={ref} className={clsx(classNames.TableHeader, className)} {...props} />
))
TableHead.displayName = 'TableHead'

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(({className, ...props}, ref) => (
  <td ref={ref} className={clsx(classNames.TableCell, className)} {...props} />
))
TableCell.displayName = 'TableCell'

const TableCaption = React.forwardRef<HTMLTableCaptionElement, TableCaptionProps>(({className, ...props}, ref) => (
  <caption ref={ref} className={clsx(classNames.TableCaption, className)} {...props} />
))
TableCaption.displayName = 'TableCaption'

export {Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption}
