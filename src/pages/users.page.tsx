import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { type ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FilterBar, UserTable } from '~/components'
import { useUserFilters, useUsers } from '~/hooks'
import { ROUTER_KEYS } from '~/shared/const'
import { TablePaginationCustom } from '~/shared/ui'

export const UsersPage = () => {
  const navigate = useNavigate()
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const { page, gender, nationality, setPage, setGender, setNationality } = useUserFilters()
  const { users, loading, error } = useUsers({
    page: page + 1,
    rowsPerPage,
    gender,
    nat: nationality,
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
  
  const handleResetFilters = () => {
    setPage(1)
    setGender('all')
    setNationality('all')
    navigate({ pathname: ROUTER_KEYS.USER_DASH, search: '' })
  }
  
  return (
    <Container maxWidth="md">
      
      <Typography variant={'h1'}
                  textAlign={'center'}
                  mb={3}>
        Users page
      </Typography>
      
      <FilterBar gender={gender}
                 nationality={nationality}
                 onGenderChange={(value) => {
                   setGender(value)
                   setPage(1)
                 }}
                 onNationalityChange={(value) => {
                   setNationality(value)
                   setPage(1)
                 }}
                 onReset={handleResetFilters}
      />
      
      <UserTable users={users} />
      
      <TablePaginationCustom page={page}
                             onPageChange={handleChangePage}
                             onRowsPerPageChange={handleChangeRowsPerPage}
                             rowsPerPage={rowsPerPage}
                             count={100} />
    </Container>
  )
}