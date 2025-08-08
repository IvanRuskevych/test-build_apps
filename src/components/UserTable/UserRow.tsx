import { TableCell, TableRow } from '@mui/material'
import { memo } from 'react'
import type { User } from '~/schemas'

export const UserRow = memo(
  ({ user }: { user: User }) => (
    <TableRow>
      <TableCell>{user.name.first}</TableCell>
      <TableCell>{user.name.last}</TableCell>
      <TableCell>{user.gender}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.nat}</TableCell>
    </TableRow>
  ),
)