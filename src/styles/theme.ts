import { createTheme, responsiveFontSizes } from '@mui/material'
import { green, purple } from '~/styles/colors.ts'

let theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  
  palette: {
    mode: 'light',
    primary: {
      main: green[300],
    },
    secondary: {
      main: purple[600],
    },
  },
  
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: 'clamp(0.85rem, 1vw, 1rem)',
        },
      },
    },
    
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 'clamp(0.85rem, 1vw, 1rem)',
        },
      },
    },
    
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: 'clamp(0.85rem, 1vw, 1rem)',
          textTransform: 'none',
        },
      },
    },
    
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: 'clamp(0.85rem, 1vw, 1rem)',
        },
        head: {
          fontWeight: 600,
          backgroundColor: green[200],
        },
      },
    },
    
    MuiTablePagination: {
      styleOverrides: {
        root: {
          backgroundColor: green[100],
        },
      },
    },
  },
})

theme = responsiveFontSizes(theme)

export default theme