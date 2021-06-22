import { createMuiTheme } from '@material-ui/core'

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1DA1F2'
    },
    secondary: {
      main: '#657786',
      dark: '#182c38'
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
      main: '#657786',
      dark: '#182c38'
    },
    background: {
      default: '#000000',
      paper: '#212121'
    }
  }
})
