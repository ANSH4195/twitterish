import React, { useEffect } from 'react';
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { getTweets } from '../state/tweetsSlice';
import TweetContent from './tweets/TweetContent';
import TweetReactions from './tweets/TweetReactions';

const feedStyles = makeStyles({
  tweet: {
    paddingBottom: 0,
    '&hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
    },
  },
  tweeterImage: {
    alignSelf: 'start',
    marginTop: '0.55rem',
  },
});

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
          <ListItem button disableRipple className={classes.tweet}>
            <ListItemAvatar className={classes.tweeterImage}>
              <Avatar src={t.userAvatar} alt={t.userName} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <TweetContent
                  userName={t.userName}
                  userHandle={t.userHandle}
                  tweetBody={t.body}
                />
              }
              secondary={
                <TweetReactions
                  comments={t.comments.length}
                  retweets={t.retweets}
                  likes={t.likes}
                />
              }
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
