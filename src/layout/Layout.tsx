import { CssBaseline } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'
import { Footer } from '~/layout/Footer.tsx'
import { Header } from '~/layout/Header.tsx'

export const Layout = () => {
  return (
    <Box display="flex"
         flexDirection="column"
         minHeight="100vh">
      <Header />
      
      <Container component="main"
                 sx={{ flexGrow: 1, py: 4 }}>
        <Outlet />
      </Container>
      
      <Footer />
      {/* MUI base settings*/}
      <CssBaseline />
    </Box>
  )
}