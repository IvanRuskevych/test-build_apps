import { TableBody } from '@mui/material'
import { memo } from 'react'
import { UserRow } from '~/components/UserTable/UserRow.tsx'
import type { User } from '~/schemas'

export const UserTableBody = memo(({ users }: { users: User[] }) => (
  <TableBody>
    {users.map((user) => (
      <UserRow key={user.login.uuid}
               user={user} />
    ))}
  </TableBody>
))