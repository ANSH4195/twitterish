import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

export type TweetContentTypes = {
  userName: String;
  userHandle: String;
  tweetBody: String;
};

const contentStyles = makeStyles({
  linkStyle: {
    textDecoration: 'none',
    color: '#fff',
    '&:hover': {
      '& #name': {
        textDecoration: 'underline',
      },
    },
  },
  nameStyle: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
  },
  handleStyle: {
    fontSize: '0.9rem',
    color: '#ffffff75',
  },
});

const TweetContent: React.FC<TweetContentTypes> = ({
  userName,
  userHandle,
  tweetBody,
}) => {
  const classes = contentStyles();

  return (
    <>
      <Link to='#!' color='inherit' id='name' className={classes.linkStyle}>
        <Typography variant='body1'>
          <span id='name' className={classes.nameStyle}>
            {userName}
          </span>
          <span id='handle' className={classes.handleStyle}>
            {' '}
            @{userHandle}
          </span>
        </Typography>
      </Link>
      <Typography variant='body2'>{tweetBody}</Typography>
    </>
  );
};

export default TweetContent;
