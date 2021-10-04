import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faRetweet, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, IconButton, makeStyles } from '@material-ui/core';
import React from 'react';

export type TweetReactionTypes = {
  comments: Number;
  retweets: Number;
  likes: Number;
};

const reactionStyles = makeStyles({
  responseIcons: {
    fontSize: '1rem',
    color: '#687076',
  },
});

const TweetReactions: React.FC<TweetReactionTypes> = ({
  comments,
  retweets,
  likes,
}) => {
  const classes = reactionStyles();
  return (
    <Grid container>
      <Grid item xs={3}>
        <IconButton aria-label='comment'>
          <FontAwesomeIcon icon={faComment} className={classes.responseIcons} />
        </IconButton>{' '}
        {comments}
      </Grid>
      <Grid item xs={3}>
        <IconButton aria-label='retweet'>
          <FontAwesomeIcon icon={faRetweet} className={classes.responseIcons} />
        </IconButton>{' '}
        {retweets}
      </Grid>
      <Grid item xs={3}>
        <IconButton aria-label='like'>
          <FontAwesomeIcon icon={faHeart} className={classes.responseIcons} />
        </IconButton>{' '}
        {likes}
      </Grid>
      <Grid item xs={3}>
        <IconButton aria-label='share'>
          <FontAwesomeIcon
            icon={faShareAlt}
            className={classes.responseIcons}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default TweetReactions;
