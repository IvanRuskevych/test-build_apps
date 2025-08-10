import { Paper, Table, TableContainer } from '@mui/material'
import { UserTableBody } from '~/components/UserTable/UserTableBody.tsx'
import { UserTableHead } from '~/components/UserTable/UserTableHead.tsx'
import type { UserTableProps } from '~/types'

export const UserTable = ({ users, loading, rowsPerPage }: UserTableProps) => (
  <TableContainer component={Paper}>
    <Table>
      <UserTableHead />
      <UserTableBody users={users}
                     loading={loading}
                     rowsPerPage={rowsPerPage} />
    </Table>
  </TableContainer>
)
