import React, { useEffect } from 'react';
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from '@material-ui/core';
import { INewsItem } from '../Interfaces';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { RootState } from '../state/store';
import { getNews } from '../state/newsSlice';

const LatestNews = () => {
  const dispatch = useAppDispatch();
  const { loading, error, news } = useAppSelector(
    (state: RootState) => state.news
  );

  useEffect(() => {
    dispatch(getNews({ perPage: 5, page: 1 }));
  }, [dispatch]);

  const loadNews = () => {
    return news.map((value: INewsItem) => {
      return (
        <React.Fragment key={value.title}>
          <ListItem button component='a' href={value.url} target='_blank'>
            <ListItemText
              primary={
                <Typography variant='caption' color='textSecondary'>
                  <strong>{value.source.name}</strong>
                  {value.author && ` | ${value.author}`}
                </Typography>
              }
              secondary={<Typography variant='body2'>{value.title}</Typography>}
            />
            <ListItemAvatar>
              <Avatar src={value.urlToImage!} alt={value.title} />
            </ListItemAvatar>
          </ListItem>
          <Divider />
        </React.Fragment>
      );
    });
  };

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>{error}</p>
  ) : (
    <Box pt={2}>
      <Paper style={{ borderRadius: '20px' }}>
        <List style={{ padding: '0' }}>
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
          <ListItem
            button
            style={{ borderRadius: '0 0 20px 20px' }}
          >
            <ListItemText primary='Load More' style={{ color: '#1da1f2' }} />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default LatestNews;
