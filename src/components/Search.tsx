import React from 'react'
import { IconButton, InputBase, Paper } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { searchStyles } from '../styling/customStyles'

const Search = () => {
  const classes = searchStyles()
  return (
    <Paper component='form' className={classes.root}>
      <IconButton disabled className={classes.iconButton} aria-label='search'>
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder='Search Twitterish'
        inputProps={{ 'aria-label': 'search twitterish' }}
      />
    </Paper>
  )
}

export default Search
