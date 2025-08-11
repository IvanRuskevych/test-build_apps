import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { type ChangeEvent, memo, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FilterBar, UserTable } from '~/components'
import { useUserFilters, useUsers } from '~/hooks'
import { ROUTER_KEYS } from '~/shared/const'
import { TablePaginationCustom } from '~/shared/ui'

const UsersPageComponent = () => {
  const navigate = useNavigate()
  const [rowsPerPage, setRowsPerPage] = useState(10)
  
  const { page, gender, nationality, setPage, setGender, setNationality } = useUserFilters()
  const { users, loading } = useUsers({
    page,
    rowsPerPage,
    gender,
    nat: nationality,
  })
  
  const handleChangePage = useCallback(
    (
      _event: unknown,
      newPage: number,
    ) => {
      setPage(newPage + 1)
    }, [setPage],
  )
  
  const handleChangeRowsPerPage = useCallback(
    (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setRowsPerPage(parseInt(event.target.value, 10))
      setPage(1)
    }, [setPage, setRowsPerPage],
  )
  
  const handleResetFilters = useCallback(
    () => {
      navigate({ pathname: ROUTER_KEYS.USER_DASH, search: '' })
      toast.success('Filters reset successfully')
    }, [navigate],
  )
  
  const handleGenderChange = useCallback(
    (value: string) => {
      setGender(value)
    },
    [setGender],
  )
  
  const handleNationalityChange = useCallback(
    (value: string) => {
      setNationality(value)
    },
    [setNationality],
  )
  
  return (
    <Container maxWidth="lg">
      
      <Typography variant={'h1'}
                  textAlign={'center'}
                  mb={3}
                  color={'secondary.main'}>
        Users Dashboard
      </Typography>
      
      <FilterBar gender={gender}
                 nationality={nationality}
                 onGenderChange={handleGenderChange}
                 onNationalityChange={handleNationalityChange}
                 onReset={handleResetFilters}
      />
      
      <UserTable users={users}
                 loading={loading}
                 rowsPerPage={rowsPerPage} />
      
      {!loading && !users.length && (
        <Typography textAlign="center"
                    mt={4}>
          No users found.
        </Typography>
      )}
      
      <TablePaginationCustom page={page}
                             onPageChange={handleChangePage}
                             onRowsPerPageChange={handleChangeRowsPerPage}
                             rowsPerPage={rowsPerPage}
                             count={100} />
    </Container>
  )
}

export const UsersPage = memo(UsersPageComponent)