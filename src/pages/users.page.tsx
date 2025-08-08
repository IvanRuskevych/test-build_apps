import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { UserTable } from '~/components/UserTable'
import { useUsers } from '~/hooks'

export const UsersPage = () => {
  const { users, loading, error } = useUsers(1)
  console.log(users, loading, error)
  
  return (
    <Container maxWidth="md">
      
      <Typography variant={'h4'}
                  textAlign={'center'}
                  mb={3}>
        Users page
      </Typography>
      
      <UserTable />
    </Container>
  )
}