import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import Search from './Search';
import LatestNews from './LatestNews';
import Feed from './Feed';

const Home = () => {
  return (
    <Container maxWidth='md'>
      <Grid container>
        <Grid item xs={12} md={7}>
          <Feed />
        </Grid>
        <Grid item xs={12} md={5}>
          <Box py={1} pl={3}>
            <Search />
            <LatestNews />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
