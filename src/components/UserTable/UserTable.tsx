import { Paper, Table, TableContainer } from '@mui/material'
import { memo } from 'react'
import { UserTableBody } from '~/components/UserTable/UserTableBody.tsx'
import { UserTableHead } from '~/components/UserTable/UserTableHead.tsx'
import type { UserTableProps } from '~/types'

const UserTableComponent = ({ users, loading, rowsPerPage }: UserTableProps) => (
  <TableContainer component={Paper}>
    <Table>
      <UserTableHead />
      <UserTableBody users={users}
                     loading={loading}
                     rowsPerPage={rowsPerPage} />
    </Table>
  </TableContainer>
)

export const UserTable = memo(UserTableComponent)