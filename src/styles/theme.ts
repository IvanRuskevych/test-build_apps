import { createTheme, responsiveFontSizes } from '@mui/material'
import { green, purple } from '~/styles/colors.ts'

const fontSizeLargeClamp = 'clamp(1rem, 1vw, 1rem)'
const fontSizeBaseClamp = 'clamp(0.85rem, 1vw, 1rem)'
const fontSizeSmallClamp = 'clamp(0.75rem, 1vw, 1rem)'

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
          fontSize: fontSizeLargeClamp,
        },
      },
    },
    
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: fontSizeLargeClamp,
        },
      },
    },
    
    MuiSelect: {
      styleOverrides: {
        select: {
          fontSize: fontSizeBaseClamp,
        },
      },
    },
    
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: fontSizeBaseClamp,
          textTransform: 'none',
        },
      },
    },
    
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: fontSizeSmallClamp,
          padding: '0.5rem',
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
        displayedRows: {
          fontSize: fontSizeSmallClamp,
        },
        selectLabel: {
          fontSize: fontSizeSmallClamp,
        },
        select: {
          fontSize: fontSizeSmallClamp,
        },
        actions: {
          fontSize: fontSizeSmallClamp,
        },
      },
    },
    
  },
})

theme = responsiveFontSizes(theme)

export default theme