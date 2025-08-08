import { Paper, Table, TableContainer } from '@mui/material'
import { UserTableBody } from '~/components/UserTable/UserTableBody.tsx'
import { UserTableHead } from '~/components/UserTable/UserTableHead.tsx'
import type { User } from '~/schemas'

export const UserTable = ({ users }: { users: User[] }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <UserTableHead />
        <UserTableBody users={users} />
      </Table>
    </TableContainer>
  )
}