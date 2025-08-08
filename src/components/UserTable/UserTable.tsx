import { Paper, Table, TableContainer } from '@mui/material'
import { UserTableBody } from '~/components/UserTable/UserTableBody.tsx'
import { UserTableHead } from '~/components/UserTable/UserTableHead.tsx'
import type { UsersListProps } from '~/types'

export const UserTable = ({ users }: UsersListProps) => (
  <TableContainer component={Paper}>
    <Table>
      <UserTableHead />
      <UserTableBody users={users} />
    </Table>
  </TableContainer>
)
