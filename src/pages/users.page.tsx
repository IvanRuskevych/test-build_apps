import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { type ChangeEvent, useState } from 'react'
import { UserTable } from '~/components/UserTable'
import { UserTablePagination } from '~/components/UserTable/UserTablePagination.tsx'
import { useUsers } from '~/hooks'

export const UsersPage = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  
  const { users, loading, error } = useUsers({
    page: page + 1,
    results: rowsPerPage,
  })
  console.log(users, loading, error)
  
  const handleChangePage = (
    _event: unknown,
    newPage: number,
  ) => {
    setPage(newPage)
  }
  
  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  
  return (
    <Container maxWidth="md">
      
      <Typography variant={'h4'}
                  textAlign={'center'}
                  mb={3}>
        Users page
      </Typography>
      
      <UserTable users={users} />
      
      <UserTablePagination page={page}
                           onPageChange={handleChangePage}
                           onRowsPerPageChange={handleChangeRowsPerPage}
                           rowsPerPage={rowsPerPage}
                           count={100} />
    </Container>
  )
}