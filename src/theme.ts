import { createTheme } from '@material-ui/core/styles'
import { grey, red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 500,
      color: '#fff'
    }
  },
  palette: {
    primary: {
      main: '#e23636',
      dark: grey[900],
      light: grey[300],
      contrastText: '#fff'
    },
    text: {
      primary: '#ffff',
      secondary: grey[400]
    },
    secondary: {
      main: '#ffff'
    },
    error: {
      main: red.A400
    },
    background: {
      default: grey[900]
    }
  }
})

export default theme
