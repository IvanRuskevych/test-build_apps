import { TableCell, TableRow } from '@mui/material'
import { memo } from 'react'
import type { UserProps } from '~/types'

const UserRowComponent = ({ user }: UserProps) => (
  <TableRow>
    <TableCell>{user.name.first}</TableCell>
    <TableCell>{user.name.last}</TableCell>
    <TableCell>{user.gender}</TableCell>
    <TableCell>{user.email}</TableCell>
    <TableCell>{user.nat}</TableCell>
  </TableRow>
)

export const UserRow = memo(UserRowComponent)