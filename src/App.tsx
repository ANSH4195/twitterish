import React from 'react'
import clsx from 'clsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  Box,
  CssBaseline,
  makeStyles,
  ThemeProvider,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import { darkTheme } from './styling/themes'
import Home from './components/Home'
import Sidebar from './components/Sidebar'

const drawerWidthLg = 240
const drawerWidthMd = 60

const useStyles = makeStyles({
  marginLeftMd: {
    marginLeft: drawerWidthMd + 10
  },
  marginLeftLg: {
    marginLeft: drawerWidthLg + 10
  }
})

function App() {
  const classes = useStyles()
  const theme = useTheme()
  const matchesMd = useMediaQuery(theme.breakpoints.only('md'))
  const matchesLg = useMediaQuery(theme.breakpoints.up('lg'))

  const marginLeft = clsx({
    [classes.marginLeftMd]: matchesMd,
    [classes.marginLeftLg]: matchesLg
  })

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Sidebar
          drawerWidth={
            matchesMd
              ? drawerWidthMd
              : matchesLg
              ? drawerWidthLg
              : drawerWidthLg
          }
        />
        <Box className={marginLeft}>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </Box>
      </ThemeProvider>
    </Router>
  )
}

export default App
