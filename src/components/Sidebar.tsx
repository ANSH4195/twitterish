import React from 'react';
import clsx from 'clsx';
import {
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Button,
  IconButton,
  Tooltip,
  Box,
  makeStyles,
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import { IDrawerProps } from '../Interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFeatherAlt,
  faHashtag,
  faHome,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';

const sidebarStyles = makeStyles({
  drawer: {
    height: '100vh',
    overflowX: 'hidden',
    position: 'sticky',
    top: '0',
  },
  listItemIconPadding: {
    display: 'block',
    minWidth: 0,
    padding: '0.25rem',
  },
  iconSize: {
    fontSize: '1.25rem',
  },
  buttonHover: {
    justifyContent: 'center',
    borderRadius: '50rem',
    '&:hover': {
      background: '#031019',
      color: '#1DA1F2',
      '& .MuiListItemIcon-root': {
        color: '#1DA1F2',
      },
    },
  },
  textStyle: {
    fontSize: '1.25rem',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontWeight: 600,
    lineHeight: '1.75',
    letterSpacing: '0.02857em',
  },
  tweetButton: {
    padding: '12px 0px',
    fontSize: '1rem',
    borderRadius: '50rem',
    color: 'white',
    width: '100%',
    textTransform: 'none',
    '&:hover': {
      background: 'rgb(26,145,218)',
    },
  },
  tweetButtonSm: {
    background: '#1DA1F2',
    color: 'white',
    '&:hover': {
      background: 'rgb(26,145,218)',
    },
  },
});

const Sidebar: React.FC<IDrawerProps> = ({ drawerWidth }) => {
  const classes = sidebarStyles({ drawerWidth });
  const drawerList = ['Home', 'Explore', 'Notifications', 'Profile', 'More'];
  const drawerListIcons = [
    <FontAwesomeIcon icon={faHome} />,
    <FontAwesomeIcon icon={faHashtag} />,
    <FontAwesomeIcon icon={faBell} />,
    <FontAwesomeIcon icon={faUser} />,
    <FontAwesomeIcon icon={faSpinner} />,
  ];

  return (
    <Box
      className={classes.drawer}
      border={1}
      borderTop={0}
      borderBottom={0}
      borderLeft={0}
      borderColor='secondary.dark'
    >
      <List style={{ height: '100%' }}>
        <ListItem button className={classes.buttonHover}>
          <ListItemIcon
            className={clsx({
              [classes.listItemIconPadding]: drawerWidth < 240,
            })}
            style={{ justifyContent: 'center' }}
          >
            <TwitterIcon fontSize='large' />
          </ListItemIcon>
        </ListItem>
        {drawerList.map((text, index) => (
          <Tooltip
            key={text}
            title={text}
            arrow
            placement='right'
            enterDelay={1000}
          >
            <ListItem button className={classes.buttonHover}>
              <ListItemIcon
                className={clsx({
                  [classes.iconSize]: true,
                  [classes.listItemIconPadding]: drawerWidth < 240,
                })}
              >
                {drawerListIcons[index]}
              </ListItemIcon>
              <Hidden mdDown>
                <ListItemText
                  primary={text}
                  classes={{
                    primary: classes.textStyle,
                  }}
                />
              </Hidden>
            </ListItem>
          </Tooltip>
        ))}
        <ListItem style={{ justifyContent: 'center' }}>
          <Hidden mdDown>
            <Button
              variant='contained'
              color='primary'
              className={classes.tweetButton}
            >
              Tweet
            </Button>
          </Hidden>
          <Hidden lgUp>
            <Tooltip title='Tweet' arrow placement='right' enterDelay={1000}>
              <IconButton aria-label='tweet' className={classes.tweetButtonSm}>
                <FontAwesomeIcon icon={faFeatherAlt} />
              </IconButton>
            </Tooltip>
          </Hidden>
        </ListItem>
        <Tooltip title='Profile' arrow placement='right' enterDelay={1000}>
          <ListItem
            button
            className={classes.buttonHover}
            style={{ position: 'absolute', bottom: 0 }}
          >
            <ListItemIcon
              className={clsx({
                [classes.listItemIconPadding]: drawerWidth < 240,
              })}
            >
              <Avatar
                alt='Remy Sharp'
                src='https://material-ui.com/static/images/avatar/3.jpg'
              />
            </ListItemIcon>
            <Hidden mdDown>
              <ListItemText
                primary={'Remy Sharp'}
                classes={{
                  primary: classes.textStyle,
                }}
              />
            </Hidden>
          </ListItem>
        </Tooltip>
      </List>
    </Box>
  );
};

export default Sidebar;
