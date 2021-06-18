import { createMuiTheme } from '@material-ui/core'

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1DA1F2'
    },
    secondary: {
      main: '#657786'
    }
  }
})

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#1DA1F2'
    },
    secondary: {
      main: '#657786'
    },
    background: {
      default: '#000000',
      paper: '#212121'
    }
  }
})
