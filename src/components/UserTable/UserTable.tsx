import { Paper, TableContainer } from '@mui/material'
import { UserTableHead } from '~/components/UserTable/UserTableHead.tsx'

export const UserTable = () => {
  return (
    <TableContainer component={Paper}>
      <UserTableHead />
    </TableContainer>
  )
}