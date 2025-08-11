import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useBreakpoints } from '~/hooks'

export const HomePage: React.FC = () => {
  
  const { isMobile } = useBreakpoints()
  return (
    <Box
      sx={{
        mt: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 2,
        maxWidth: 800,
        mx: 'auto',
        textAlign: 'center',
      }}
    >
      <Typography variant="h3"
                  gutterBottom>
        This is a test assignment for the Fullstack Developer position.
      </Typography>
      <Typography variant="body1">
        To navigate to the User dashboard page, please follow the link{' '}
        <Link component={RouterLink}
              to="/users"
              color="primary.main"
        >
          Users Dashboard
        </Link>{' '}
        {isMobile ? 'or select the appropriate option in the burger menu.' : 'or click the corresponding link in the top bar.'}
      </Typography>
    </Box>
  )
}
