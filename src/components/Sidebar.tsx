import React from 'react';
import clsx from 'clsx';
import {
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Button,
  IconButton,
  Tooltip,
  Divider,
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import CreateIcon from '@material-ui/icons/Create';
import { IDrawerProps } from '../Interfaces';
import { sidebarStyles } from '../styling/customStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFeatherAlt,
  faHashtag,
  faHome,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';

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
    <Drawer
      className={classes.drawer}
      variant='permanent'
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor='left'
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
    </Drawer>
  );
};

export default Sidebar;
