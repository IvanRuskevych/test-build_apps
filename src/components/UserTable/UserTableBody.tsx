import { TableBody } from '@mui/material'
import { memo } from 'react'
import { UserRow } from '~/components/UserTable/UserRow.tsx'
import type { UsersListProps } from '~/types'

const UserTableBodyComponent = ({ users }: UsersListProps) => (
  <TableBody>
    {users.map((user) => (
      <UserRow key={user.login.uuid}
               user={user} />
    ))}
  </TableBody>
)

export const UserTableBody = memo(UserTableBodyComponent)