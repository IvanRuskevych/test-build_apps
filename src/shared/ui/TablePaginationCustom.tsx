import TablePagination from '@mui/material/TablePagination'
import { type ChangeEvent, type MouseEvent } from 'react'

interface TablePaginationProps {
  page: number
  rowsPerPage: number
  count: number
  onPageChange: (e: MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  onRowsPerPageChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const TablePaginationCustom = ({
  page,
  rowsPerPage,
  count,
  onPageChange,
  onRowsPerPageChange,
}: TablePaginationProps) => (
  <TablePagination
    component="div"
    count={count}
    page={page}
    onPageChange={onPageChange}
    rowsPerPage={rowsPerPage}
    onRowsPerPageChange={onRowsPerPageChange}
    rowsPerPageOptions={[5, 10, 20]}
  />
)
