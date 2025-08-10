import { TableBody } from '@mui/material'
import { memo } from 'react'
import { LoadingSkeletonRows } from '~/components/UserTable/LoadingSkeletonRows.tsx'
import { UserRow } from '~/components/UserTable/UserRow.tsx'
import type { UserTableProps } from '~/types'

const UserTableBodyComponent = ({ users, loading, rowsPerPage }: UserTableProps) => (
  <TableBody>
    {loading
      ? <LoadingSkeletonRows rowsPerPage={rowsPerPage} />
      : users.map((user) => (
        <UserRow key={user.login.uuid}
                 user={user} />
      ))
    }
  </TableBody>
)

export const UserTableBody = memo(UserTableBodyComponent)