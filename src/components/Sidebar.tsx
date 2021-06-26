import React from 'react'
import clsx from 'clsx'
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
  Tooltip
} from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import HomeIcon from '@material-ui/icons/Home'
import LineStyleIcon from '@material-ui/icons/LineStyle'
import NotificationsIcon from '@material-ui/icons/Notifications'
import PersonIcon from '@material-ui/icons/Person'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import CreateIcon from '@material-ui/icons/Create'
import { IDrawerProps } from '../Interfaces'
import { sidebarStyles } from '../styling/customStyles'

// Todo: Make hover border radius circle on compressed view

const Sidebar: React.FC<IDrawerProps> = ({ drawerWidth }) => {
  const classes = sidebarStyles({ drawerWidth })
  const drawerList = ['Home', 'Explore', 'Notifications', 'Profile', 'More']
  const drawerListIcons = [
    <HomeIcon />,
    <LineStyleIcon />,
    <NotificationsIcon />,
    <PersonIcon />,
    <MoreHorizIcon />
  ]

  return (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      classes={{
        paper: classes.drawerPaper
      }}
      anchor='left'
    >
      <List style={{ height: '100%' }}>
        <ListItem button className={classes.buttonHover}>
          <ListItemIcon
            className={clsx({
              [classes.listItemIconPadding]: drawerWidth < 240
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
                  [classes.listItemIconPadding]: drawerWidth < 240
                })}
              >
                {drawerListIcons[index]}
              </ListItemIcon>
              <Hidden mdDown>
                <ListItemText
                  primary={text}
                  classes={{
                    primary: classes.textStyle
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
                <CreateIcon />
              </IconButton>
            </Tooltip>
          </Hidden>
        </ListItem>
        <ListItem
          button
          className={classes.buttonHover}
          style={{ position: 'absolute', bottom: 0 }}
        >
          <ListItemIcon
            className={clsx({
              [classes.listItemIconPadding]: drawerWidth < 240
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
                primary: classes.textStyle
              }}
            />
          </Hidden>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Sidebar
