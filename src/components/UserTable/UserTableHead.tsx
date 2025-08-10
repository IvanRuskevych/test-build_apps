import { TableCell, TableHead, TableRow } from '@mui/material'
import { memo } from 'react'
import { columns } from '~/components/UserTable/columns.ts'

const UserTableHeadComponent = () => (
  <TableHead>
    <TableRow>
      {columns.map((col) => (
        <TableCell key={col.id}
                   sx={{ width: col.width }}>
          {col.label}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
)

export const UserTableHead = memo(UserTableHeadComponent)