import React, { useEffect } from 'react';
import {
  Avatar,
  Box,
  Divider,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Typography,
} from '@material-ui/core';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { getTweets } from '../state/tweetsSlice';
import { feedStyles } from '../styling/customStyles';

const Feed = () => {
  const dispatch = useAppDispatch();
  const { loading, tweets, error } = useAppSelector((state) => state.tweets);
  const classes = feedStyles();

  useEffect(() => {
    dispatch(getTweets());
  }, [dispatch]);

  const showTweets = () => {
    return tweets.map((t) => {
      return (
        <React.Fragment key={t.id}>
          <ListItem button className={classes.tweet}>
            <ListItemAvatar className={classes.tweeterImage}>
              <Avatar src={t.userAvatar} alt={t.userName} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant='body2'>
                  <Link href='#' color='inherit'>
                    <strong style={{ fontSize: '0.9rem' }}>{t.userName}</strong>{' '}
                    <span style={{ color: '#ffffff75' }}>@{t.userHandle}</span>
                  </Link>
                </Typography>
              }
              secondary={t.body}
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      );
    });
  };

  return (
    <Box
      border={1}
      borderLeft={0}
      borderTop={0}
      borderBottom={0}
      borderColor='secondary.dark'
    >
      {loading ? (
        'Loading...'
      ) : error ? (
        error
      ) : (
        <List
          subheader={
            <ListSubheader
              style={{ color: '#fff', background: 'black', padding: '0' }}
            >
              <Box px={3} py={2}>
                <Typography variant='h5'>
                  <strong>Home</strong>
                </Typography>
              </Box>
              <Divider />
            </ListSubheader>
          }
        >
          {showTweets()}
        </List>
      )}
    </Box>
  );
};

export default Feed;
