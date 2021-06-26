import React from 'react'
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography
} from '@material-ui/core'
import { latestNews } from '../state/tmpData'

const LatestNews = () => {
  const loadNews = () => {
    return latestNews.map((news) => {
      return (
        <React.Fragment key={news.id}>
          <ListItem button>
            <ListItemText
              primary={
                <Typography variant='caption' color='textSecondary'>
                  {news.by}
                </Typography>
              }
              secondary={<Typography variant='body1'>{news.title}</Typography>}
            />
            <ListItemAvatar>
              <Avatar
                id={`news-item-${news.id}`}
                src={news.image}
                alt={news.title}
              />
            </ListItemAvatar>
          </ListItem>
          <Divider />
        </React.Fragment>
      )
    })
  }

  return (
    <Box pt={2}>
      <Paper style={{ borderRadius: '20px' }}>
        <List>
          <ListItem>
            <ListItemText
              primary={
                <Typography
                  variant='h5'
                  color='textSecondary'
                  style={{ fontWeight: 'bold' }}
                >
                  What&lsquo;s Happening
                </Typography>
              }
            />
          </ListItem>
          <Divider />
          {loadNews()}
          <ListItem button>
            <ListItemText primary='Load More' style={{ color: '#1da1f2' }} />
          </ListItem>
        </List>
      </Paper>
    </Box>
  )
}

export default LatestNews
