import { TableCell, TableHead, TableRow } from '@mui/material'
import { memo } from 'react'
import { columns } from '~/components/UserTable/columns.ts'

export const UserTableHead = memo(
  () => (
    <TableHead>
      <TableRow>
        {columns.map((col) => (
          <TableCell key={col.id}>
            {col.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  ),
)