import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { darkTheme } from './styling/themes';
import Home from './components/Home';
import Sidebar from './components/Sidebar';

const drawerWidthLg = 240;
const drawerWidthMd = 60;

function App() {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.only('md'));
  const matchesLg = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container maxWidth='lg'>
          <Grid container>
            <Grid item md={1} lg={3}>
              <Sidebar
                drawerWidth={
                  matchesMd
                    ? drawerWidthMd
                    : matchesLg
                    ? drawerWidthLg
                    : drawerWidthLg
                }
              />
            </Grid>
            <Grid item sm={12} md={11} lg={9}>
              <Box py={1}>
                <Switch>
                  <Route path='/' component={Home} />
                </Switch>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
