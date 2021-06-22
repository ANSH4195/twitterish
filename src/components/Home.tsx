import React from 'react'
import { Grid } from '@material-ui/core'
import Search from './Search'

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={7}>
        Feed
      </Grid>
      <Grid item xs={12} md={5}>
        <Search />
      </Grid>
    </Grid>
  )
}

export default Home
